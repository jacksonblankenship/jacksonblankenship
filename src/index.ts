import { format } from "date-fns";
import { z } from "zod";

const username = "jacksonblankenship";

const RepoSchema = z.object({
	name: z.string(),
	html_url: z.url(),
	pushed_at: z.iso.datetime(),
});

const res = await fetch(
	`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`,
);
const data = await res.json();

const repos = z.array(RepoSchema).parse(data);

const listing = repos
	.map((repo) => {
		const date = format(new Date(repo.pushed_at), "MMM dd");
		return `drwxr-xr-x  ${date}  <a href="${repo.html_url}">${repo.name}/</a>`;
	})
	.join("\n");

const readme = `
<br>
<pre>
${username}@github ~> ls -la
${listing}
</pre>
<br>
`;

await Bun.write("README.md", readme);
