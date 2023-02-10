import { writeFile } from 'fs';

import { format } from 'date-fns';

import sections from './sections';

const logo = `
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/jacksonblankenship/jacksonblankenship/main/assets/_light.png">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/jacksonblankenship/jacksonblankenship/main/assets/_dark.png">
  <img src="https://raw.githubusercontent.com/jacksonblankenship/jacksonblankenship/main/assets/_dark.png">
</picture>`;

(() =>
  writeFile(
    'README.md',
    `![build](https://github.com/jacksonblankenship/jacksonblankenship/actions/workflows/build.yml/badge.svg)<br/><p align=center>${logo}</p>` +
      sections
        .map(
          ({ header, items }) =>
            `${header !== 'head' ? `<h3>${header}</h3>` : ''}<br><p ${
              header === 'head' ? 'align=center' : ''
            }>${items
              .sort(() => 0.5 - Math.random())
              .map(({ title, href }) => ({
                img: `<img src="./assets/${title}.svg" alt="${title}" width=50 height=50 />`,
                href: href,
              }))
              .map(({ img, href }) =>
                href ? `<a href="${href}">${img}</a>` : img,
              )
              .map(
                (img, index) =>
                  `${img}${index < items.length - 1 ? '&nbsp;'.repeat(4) : ''}`,
              )
              .join('')}</p><br>`,
        )
        .map((section, index) =>
          index === 0
            ? section +
              `<p align=center>Hello, world! Welcome to my GitHub profile. I'm Jackson, and I'm a full-stack web developer. I figured it would be fun to track the tech I've worked with over the years in one place, so I overengineered this readme to do exactly that. If you're looking for help on your project and my tech lines up with yours, <a href="mailto:jacksblan@gmail.com">shoot me an email</a>. 🚀</p><p align=center>Cheers 👋</p>`
            : section,
        )
        .join('')
        .replace(/\t\n/g, '') +
      `<br><p align=center><i>Last updated ${format(
        new Date(),
        'PPPppp',
      )}</i></p>`,
    err => err && console.error(err),
  ))();
