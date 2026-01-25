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
});

const formatSize = (kb: number): string => {
	if (kb >= 1024 * 1024) return `${(kb / (1024 * 1024)).toFixed(1)}G`;
	if (kb >= 1024) return `${(kb / 1024).toFixed(1)}M`;
	return `${kb}K`;
};

const res = await fetch(
	`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`,
);
const data = await res.json();

const repos = z.array(RepoSchema).parse(data);

const listing = repos
	.map((repo) => {
		const date = format(new Date(repo.pushed_at), "MMM dd");
		const size = formatSize(repo.size).padStart(6);
		return `drwxr-xr-x  ${repo.owner.login}  ${size}  ${date}  <a href="${repo.html_url}">${repo.name}/</a>`;
	})
	.join("\n");

const readme = `<pre>
${username}@github ~> ls -la
${listing}
</pre>`;

await Bun.write("README.md", readme + atob(hash));
