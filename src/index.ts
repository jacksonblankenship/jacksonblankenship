import { writeFile } from 'fs';
import sections from './sections';

(() =>
  writeFile(
    'README.md',
    '<p align="center"><img src="./assets/jackson-logo.svg" alt="Jackson Blankenship" width=115 /></p><h1 align="center">jackson blankenship</h1>' +
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
        .join('')
        .replace(/\t\n/g, ''),
    err => err && console.error(err),
  ))();
