import { writeFile } from 'fs';

import { format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import sections from './sections';

(() =>
  writeFile(
    'README.md',
    '![build](https://github.com/jacksonblankenship/jacksonblankenship/actions/workflows/build.yml/badge.svg)<br/><p align=center><img src="./assets/_.svg" alt="Jackson Blankenship" width=300 /></p>' +
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
        zonedTimeToUtc(new Date(), 'America/Chicago'),
        'PPPppp',
      )}</i></p>`,
    err => err && console.error(err),
  ))();
