import { writeFile } from 'fs';

import { format } from 'date-fns';

import sections from './sections';

(() =>
  writeFile(
    'README.md',
    '<p align=center><img src="./assets/_dark.png#gh-light-mode-only" alt="Jackson Blankenship" width=295 /><img src="./assets/_light.png#gh-dark-mode-only" alt="Jackson Blankenship" width=295 /></p>' +
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
              `<p align=center>Hello, world! Welcome to my GitHub profile. I'm Jackson, and I'm a full-stack web developer. I thought it would be fun to track the tech I've worked with over the years in one place, so I over-engineered this readme to do exactly that. I don't update it as often as I'd like, but GitHub Actions does its best to keep it fresh by shuffling the icons every few hours 🤖 Anyway, if you're looking for help on your project and my tech lines up with yours, <a href="mailto:jacksblan@gmail.com">shoot me an email</a>. 🚀</p><p align=center>Cheers 👋</p>`
            : section,
        )
        .join('')
        .replace(/\t\n/g, '') +
      `<img src="https://github.com/jacksonblankenship/jacksonblankenship/actions/workflows/build.yml/badge.svg" /><p align=center><i>Last updated ${format(
        new Date(),
        'PPPppp',
      )}</i></p>`,
    err => err && console.error(err),
  ))();
