import { writeFile } from 'fs';
import sections from './sections';

(() =>
  writeFile(
    'README.md',
    sections
      .map(
        ({ header, items }) =>
          `<h2>${header}</h2><br /><div style="display: flex; flex-wrap: wrap;">${items
            .sort(() => 0.5 - Math.random())
            .map(({ title, href }) => ({
              img: `<img src="./assets/${title}.svg" alt="${title}" width="50" height="50" />`,
              href: href,
            }))
            .map(({ img, href }) =>
              href ? `<a href="${href}">${img}</a>` : img,
            )
            .join('')}</div><br />`,
      )
      .join(''),
    err => err && console.error(err),
  ))();
