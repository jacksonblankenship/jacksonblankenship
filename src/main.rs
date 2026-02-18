use std::sync::Arc;
use std::time::Duration;

use anyhow::{Context, Result};
use chrono::NaiveDateTime;
use futures::future::join_all;
use reqwest::header::{self, HeaderMap, HeaderValue};
use serde::Deserialize;
use tokio::sync::Semaphore;

const TOTAL_REPOS: u8 = 10;

const SIGNATURE: &str =
    "\n<!-- designed by jacksonblankenship <https://github.com/jacksonblankenship> -->";

#[derive(Debug, Deserialize)]
struct Repo {
    name: String,
    html_url: String,
    pushed_at: String,
    size: u64,
    owner: Owner,
    fork: bool,
}

#[derive(Debug, Deserialize)]
struct Owner {
    login: String,
}

#[derive(Debug, Deserialize)]
struct RepoDetail {
    #[serde(flatten)]
    repo: Repo,
    source: Option<RepoSource>,
}

#[derive(Debug, Deserialize)]
struct RepoSource {
    full_name: String,
    html_url: String,
}

struct EnrichedRepo {
    repo: Repo,
    source: Option<RepoSource>,
}

// Formats a size in kilobytes to a human-readable string (K, M, or G).
fn format_size(kb: u64) -> String {
    if kb >= 1024 * 1024 {
        return format!("{:.1}G", kb as f64 / (1024.0 * 1024.0));
    }
    if kb >= 1024 {
        return format!("{:.1}M", kb as f64 / 1024.0);
    }
    format!("{kb}K")
}

// Formats an ISO 8601 timestamp as "Mon DD" (e.g. "Jan 15").
fn format_date(pushed_at: &str) -> String {
    NaiveDateTime::parse_from_str(pushed_at, "%Y-%m-%dT%H:%M:%SZ")
        .map(|dt| dt.format("%b %d").to_string())
        .unwrap_or_else(|_| "??? ??".to_string())
}

// Formats a repo as an `ls -lt` style line.
//
// Owned repos:  `drwxr-xr-x@` (directories)
// Forks:        `lrwxrwxrwx@` (symlinks pointing to upstream source)
fn format_repo_line(enriched: &EnrichedRepo) -> String {
    let repo = &enriched.repo;
    let date = format_date(&repo.pushed_at);
    let size = format!("{:>6}", format_size(repo.size));

    if repo.fork
        && let Some(source) = &enriched.source
    {
        return format!(
            r#"lrwxrwxrwx@  1  {}  {}  {}  <a href="{}">{}</a> -> <a href="{}">{}</a>"#,
            repo.owner.login,
            size,
            date,
            repo.html_url,
            repo.name,
            source.html_url,
            source.full_name,
        );
    }

    format!(
        r#"drwxr-xr-x@  2  {}  {}  {}  <a href="{}">{}</a>"#,
        repo.owner.login, size, date, repo.html_url, repo.name,
    )
}

// Retries an async function up to `attempts` times with exponential backoff
// starting at 100ms (100ms, 200ms, 400ms, ...).
async fn with_retry<F, Fut, T>(attempts: u32, f: F) -> Result<T>
where
    F: Fn() -> Fut,
    Fut: std::future::Future<Output = Result<T>>,
{
    let mut last_err = None;
    for i in 0..attempts {
        match f().await {
            Ok(val) => return Ok(val),
            Err(e) => {
                last_err = Some(e);
                if i + 1 < attempts {
                    let delay = Duration::from_millis(100 * 2u64.pow(i));
                    tokio::time::sleep(delay).await;
                }
            }
        }
    }
    Err(last_err.unwrap())
}

// Fetches the most recently pushed public repos for a user.
async fn fetch_repos(client: &reqwest::Client, username: &str) -> Result<Vec<Repo>> {
    let url =
        format!("https://api.github.com/users/{username}/repos?per_page={TOTAL_REPOS}&sort=pushed");

    let repos = with_retry(3, || async {
        let resp = client
            .get(&url)
            .timeout(Duration::from_secs(10))
            .send()
            .await
            .context("failed to send repos request")?
            .error_for_status()
            .context("GitHub API returned an error")?;

        resp.json::<Vec<Repo>>()
            .await
            .context("failed to parse repos JSON")
    })
    .await?;

    eprintln!("Fetched {} repos for {username}", repos.len());
    Ok(repos)
}

// Enriches a single forked repo with upstream source info.
// Falls back to the base repo on any error (displays as directory instead of symlink).
async fn enrich_fork(client: &reqwest::Client, repo: Repo) -> EnrichedRepo {
    if !repo.fork {
        return EnrichedRepo { repo, source: None };
    }

    let api_url = repo.html_url.replace("github.com", "api.github.com/repos");

    let result = with_retry(3, || async {
        let resp = client
            .get(&api_url)
            .timeout(Duration::from_secs(5))
            .send()
            .await
            .context("failed to send fork detail request")?
            .error_for_status()
            .context("GitHub API returned an error for fork detail")?;

        resp.json::<RepoDetail>()
            .await
            .context("failed to parse fork detail JSON")
    })
    .await;

    match result {
        Ok(detail) => EnrichedRepo {
            repo: detail.repo,
            source: detail.source,
        },
        Err(e) => {
            eprintln!("Warning: failed to enrich fork {}: {e:#}", repo.name);
            EnrichedRepo { repo, source: None }
        }
    }
}

// Enriches all forked repos in parallel (max 5 concurrent requests).
async fn enrich_all(client: &reqwest::Client, repos: Vec<Repo>) -> Vec<EnrichedRepo> {
    let semaphore = Arc::new(Semaphore::new(5));

    let futures = repos.into_iter().map(|repo| {
        let client = client.clone();
        let semaphore = Arc::clone(&semaphore);
        async move {
            let _permit = semaphore.acquire().await.unwrap();
            enrich_fork(&client, repo).await
        }
    });

    join_all(futures).await
}

#[tokio::main]
async fn main() -> Result<()> {
    let username =
        std::env::var("GITHUB_REPOSITORY_OWNER").unwrap_or_else(|_| "github".to_string());

    eprintln!("Generating README for {username}");

    let mut headers = HeaderMap::new();
    if let Ok(token) = std::env::var("GITHUB_TOKEN") {
        headers.insert(
            header::AUTHORIZATION,
            HeaderValue::from_str(&format!("Bearer {token}"))
                .context("invalid GITHUB_TOKEN value")?,
        );
    }

    let client = reqwest::Client::builder()
        .user_agent("jacksonblankenship-readme-generator")
        .default_headers(headers)
        .build()
        .context("failed to build HTTP client")?;

    let repos = fetch_repos(&client, &username).await?;
    let mut enriched = enrich_all(&client, repos).await;

    enriched.sort_by(|a, b| a.repo.name.to_lowercase().cmp(&b.repo.name.to_lowercase()));

    let listing: String = enriched
        .iter()
        .map(format_repo_line)
        .collect::<Vec<_>>()
        .join("\n");

    let readme = format!(
        "<pre>\n{username}@github ~> ls -lt | sed 1d | head -n {TOTAL_REPOS} | sort -k9,9\n{listing}\n</pre>{SIGNATURE}"
    );

    std::fs::write("README.md", &readme).context("failed to write README.md")?;

    eprintln!("README.md generated successfully");
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_format_size_kilobytes() {
        assert_eq!(format_size(0), "0K");
        assert_eq!(format_size(512), "512K");
        assert_eq!(format_size(1023), "1023K");
    }

    #[test]
    fn test_format_size_megabytes() {
        assert_eq!(format_size(1024), "1.0M");
        assert_eq!(format_size(1536), "1.5M");
        assert_eq!(format_size(1024 * 1023), "1023.0M");
    }

    #[test]
    fn test_format_size_gigabytes() {
        assert_eq!(format_size(1024 * 1024), "1.0G");
        assert_eq!(format_size(1024 * 1024 * 3), "3.0G");
    }

    #[test]
    fn test_format_date() {
        assert_eq!(format_date("2025-01-15T10:30:00Z"), "Jan 15");
        assert_eq!(format_date("2024-12-01T00:00:00Z"), "Dec 01");
    }

    #[test]
    fn test_format_date_invalid() {
        assert_eq!(format_date("not-a-date"), "??? ??");
    }
}
