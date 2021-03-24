import { writeFile } from 'fs';
import sections from './sections';

(() =>
  writeFile(
    'README.md',
    '<p align="center"><img src="./assets/jackson-logo-name.svg" alt="Jackson Blankenship" width=350 /></p>' +
      sections
        .map(
          ({ header, items }) =>
            `${header !== 'head' ? `<h3>${header}</h3>` : ''}<br /><p ${
              header === 'head'
                ? 'align="center";'
                : 'style="display: flex; flex-wrap: wrap;"'
            }>${items
              .sort(() => 0.5 - Math.random())
              .map(({ title, href }) => ({
                img: `<img src="./assets/${title}.svg" alt="${title}" width="50" height="50" />`,
                href: href,
              }))
              .map(({ img, href }) =>
                href ? `<a href="${href}">${img}</a>` : img,
              )
              .map(
                (img, index) =>
                  `${img}${
                    index < items.length - 1 ? '&nbsp;&nbsp;&nbsp;&nbsp;' : ''
                  }`,
              )
              .join('')}</p><br />`,
        )
        .join('')
        .replace(/\t\n/g, ''),
    err => err && console.error(err),
  ))();
