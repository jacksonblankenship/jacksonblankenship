import { format } from "date-fns";
import { z } from "zod";
import { hash } from "./package.json";

const username = process.env.GITHUB_REPOSITORY_OWNER ?? "github";

const RepoSchema = z.object({
	name: z.string(),
	html_url: z.url(),
	pushed_at: z.iso.datetime(),
	size: z.number(),
	owner: z.object({ login: z.string() }),
	fork: z.boolean(),
});

const RepoDetailSchema = RepoSchema.extend({
	source: z.object({ full_name: z.string(), html_url: z.url() }).optional(),
});

type Repo = z.infer<typeof RepoSchema>;
type RepoWithSource = z.infer<typeof RepoDetailSchema>;

/**
 * Formats a size in kilobytes to a human-readable string (K, M, or G).
 */
const formatSize = (kb: number): string => {
	if (kb >= 1024 * 1024) return `${(kb / (1024 * 1024)).toFixed(1)}G`;
	if (kb >= 1024) return `${(kb / 1024).toFixed(1)}M`;
	return `${kb}K`;
};

/**
 * Formats a repo as an ls -la style line.
 *
 * Directories (owned repos):  drwxr-xr-x@  2  owner  size  date  name
 * Symlinks (forks):           lrwxr-xr-x@  1  owner  size  date  name -> source
 */
const formatRepoLine = (repo: RepoWithSource): string => {
	const date = format(new Date(repo.pushed_at), "MMM dd");
	const size = formatSize(repo.size).padStart(6);

	// Forks display as symlinks pointing to their source repo
	if (repo.fork && repo.source) {
		return `lrwxr-xr-x@  1  ${repo.owner.login}  ${size}  ${date}  <a href="${repo.html_url}">${repo.name}</a> -> <a href="${repo.source.html_url}">${repo.source.full_name}</a>`;
	}

	// Owned repos display as directories
	return `drwxr-xr-x@  2  ${repo.owner.login}  ${size}  ${date}  <a href="${repo.html_url}">${repo.name}</a>`;
};

/**
 * Fetches all public repos for a user, sorted by most recently pushed.
 */
const fetchRepos = async (username: string): Promise<Repo[]> => {
	const data = await fetch(
		`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`,
	).then((r) => r.json());
	return z.array(RepoSchema).parse(data);
};

/**
 * Enriches forked repos with their source repo information.
 * The source field is only available when fetching individual repos.
 */
const enrichForksWithSource = async (
	repos: Repo[],
): Promise<RepoWithSource[]> => {
	return Promise.all(
		repos.map(async (repo) => {
			if (!repo.fork) return repo;

			const apiUrl = repo.html_url.replace(
				"github.com",
				"api.github.com/repos",
			);
			const detail = await fetch(apiUrl).then((r) => r.json());

			return RepoDetailSchema.parse(detail);
		}),
	);
};

const repos = await fetchRepos(username);
const reposWithSource = await enrichForksWithSource(repos);

const listing = reposWithSource.map(formatRepoLine).join("\n");

const readme = `<pre>
${username}@github ~> ls -la
${listing}
</pre>`;

await Bun.write("README.md", readme + atob(hash));
