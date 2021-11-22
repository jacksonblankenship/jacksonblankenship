import { format } from 'date-fns';
import { writeFile } from 'fs';
import sections from './sections';

(() =>
  writeFile(
    'README.md',
    '<p align=center><img src="./assets/jax.svg" alt="Jackson Blankenship" width=300 /></p>' +
      sections
        .map(
          ({ header, items }) =>
            `${header !== 'head' ? `<h3>${header}</h3>` : ''}<br><p ${
              header === 'head'
                ? 'align=center'
                : 'style="display: flex; flex-wrap: wrap;"'
            }>${items
              .sort(() => 0.5 - Math.random())
              .map(({ title, href }) => ({
                img: `<img src="./assets/${title}.svg" alt="${title}" width=50 height=50 />`,
                href: href,
              }))
              .map(({ img, href }) =>
                href ? `<a href="${href}">${img}</a>` : img,
              )
              .map(img => `${'&nbsp;'.repeat(2)}${img}${'&nbsp;'.repeat(2)}`)
              .join('')}</p><br>`,
        )
        .join('')
        .replace(/\t\n/g, '') +
      `<br><p align=center>Last updated ${format(new Date(), 'PPPppp')}</p>`,
    err => err && console.error(err),
  ))();
