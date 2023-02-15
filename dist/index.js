"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const date_fns_1 = require("date-fns");
const sections_1 = __importDefault(require("./sections"));
const header = `
<p align="center">
  <img
    src="./assets/_dark.png#gh-light-mode-only"
    alt="Jackson Blankenship"
    width="295" /><img
    src="./assets/_light.png#gh-dark-mode-only"
    alt="Jackson Blankenship"
    width="295" />
</p>
`;
const bio = `
<p align="center">
  Hello there! I'm Jackson, a full-stack web developer with a passion for
  cutting-edge technology. I've built this README to keep track of all the
  exciting tech stacks I've worked with over the years. Although I don't update
  it as often as I'd like, GitHub Actions helps me keep it fresh by
  <a
    href="https://github.com/jacksonblankenship/jacksonblankenship/actions/workflows/shuffle.yml"
    >shuffling the icons</a
  >
  every few hours. 🤖
  <br />
  <br />
  If you're looking for a skilled developer to help bring your project to life,
  feel free to <a href="mailto:jacksblan@gmail.com">reach out</a> to me. I'm
  always excited to collaborate with others and bring new ideas to the table. 🚀
  <br />
  <br />
  Thank you for taking the time to check out my profile, and I look forward to
  working with you!
  <br />
  <br />
  Cheers! 👋
</p>
`;
const badge = `
<p align="center">
  <img
    src="https://github.com/jacksonblankenship/jacksonblankenship/actions/workflows/shuffle.yml/badge.svg" />
</p>
`;
const lastUpdated = `
<p align="center">
  <i>Last updated ${(0, date_fns_1.format)(new Date(), 'PPPppp')}</i>
</p>
`;
(() => (0, fs_1.writeFile)('README.md', header +
    sections_1.default
        .map(({ header, items }) => `${header !== 'head' ? `<h3>${header}</h3>` : ''}<br><p ${header === 'head' ? 'align=center' : ''}>${items
        .sort(() => 0.5 - Math.random())
        .map(({ title, href }) => ({
        img: `<img src="./assets/${title}.svg" alt="${title}" width=50 height=50 />`,
        href: href,
    }))
        .map(({ img, href }) => href ? `<a href="${href}">${img}</a>` : img)
        .map((img, index) => `${img}${index < items.length - 1 ? '&nbsp;'.repeat(4) : ''}`)
        .join('')}</p><br>`)
        .map((section, index) => (index === 0 ? section + bio : section))
        .join('')
        .replace(/\t\n/g, '') +
    badge +
    lastUpdated, err => err && console.error(err)))();
