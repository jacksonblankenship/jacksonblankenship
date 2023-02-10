"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const date_fns_1 = require("date-fns");
const sections_1 = __importDefault(require("./sections"));
(() => (0, fs_1.writeFile)('README.md', '<p align=center><img src="./assets/_dark.png#gh-light-mode-only" alt="Jackson Blankenship" width=295 /><img src="./assets/_light.png#gh-dark-mode-only" alt="Jackson Blankenship" width=295 /></p>' +
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
        .map((section, index) => index === 0
        ? section +
            `<p align=center>Hello, world! Welcome to my GitHub profile. I'm Jackson, and I'm a full-stack web developer. I thought it would be fun to track the tech I've worked with over the years in one place, so I over-engineered this readme to do exactly that. I don't update it as often as I'd like, but GitHub Actions does its best to keep it fresh by <a href="https://github.com/jacksonblankenship/jacksonblankenship/actions/workflows/shuffle.yml">shuffling the icons</a> every few hours 🤖 Anyway, if you're looking for help on your project and my tech lines up with yours, <a href="mailto:jacksblan@gmail.com">shoot me an email</a>. 🚀</p><p align=center>Cheers 👋</p>`
        : section)
        .join('')
        .replace(/\t\n/g, '') +
    `<p align=center><img src="https://github.com/jacksonblankenship/jacksonblankenship/actions/workflows/shuffle.yml/badge.svg" /></p><p align=center><i>Last updated ${(0, date_fns_1.format)(new Date(), 'PPPppp')}</i></p>`, err => err && console.error(err)))();
