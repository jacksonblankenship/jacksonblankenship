import { fragments } from "./fragments";

const fragment = fragments[Math.floor(Math.random() * fragments.length)];

const readme = `
<br>

<p align="center">
  <code>jacksonblankenship@github ~/jacksonblankenship></code>
</p>

<br><br><br>

<p align="center">
  <em>${fragment}</em>
</p>

<br>
`;

await Bun.write("README.md", readme);
