"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
(() => {
    const config = [
        {
            header: 'Where am I?',
            items: [
                {
                    title: 'flylance',
                    href: 'https://flylance.com/',
                },
                {
                    title: 'linkedin',
                    href: 'https://www.linkedin.com/in/jacksonblankenship/',
                },
                {
                    title: 'twitter',
                    href: 'https://twitter.com/env_jackson',
                },
                {
                    title: 'spotify',
                    href: 'https://open.spotify.com/user/1240355717?si=Vf0XhUsDRnGYHza5j5STIQ',
                },
                {
                    title: 'soundcloud',
                    href: 'https://soundcloud.com/jacksonblankenship',
                },
            ],
        },
        {
            header: 'Currently working with...',
            items: [
                {
                    title: 'babel',
                },
                {
                    title: 'css3',
                },
                {
                    title: 'eslint',
                },
                {
                    title: 'firebase',
                },
                {
                    title: 'git',
                },
                {
                    title: 'html5',
                },
                {
                    title: 'jest',
                },
                {
                    title: 'lighthouse',
                },
                {
                    title: 'next',
                },
                {
                    title: 'node',
                },
                {
                    title: 'npm',
                },
                {
                    title: 'prettier',
                },
                {
                    title: 'reactts',
                },
                {
                    title: 'sass',
                },
                {
                    title: 'styled',
                },
                {
                    title: 'typescript',
                },
                {
                    title: 'vim',
                },
                {
                    title: 'vscode',
                },
                {
                    title: 'webpack',
                },
                {
                    title: 'puppeteer',
                },
                {
                    title: 'figma',
                },
                {
                    title: 'material-ui',
                },
                {
                    title: 'sendgrid',
                },
                {
                    title: 'bash',
                },
                {
                    title: 'github',
                },
                {
                    title: 'javascript',
                },
                {
                    title: 'analytics',
                },
                {
                    title: 'homebrew',
                },
                {
                    title: 'postman',
                },
                {
                    title: 'vercel',
                },
            ],
        },
        {
            header: 'Previously worked with...',
            items: [
                {
                    title: 'mongo',
                },
                {
                    title: 'serverless',
                },
                {
                    title: 'sketch',
                },
                {
                    title: 'java',
                },
                {
                    title: 'maven',
                },
                {
                    title: 'redux',
                },
                {
                    title: 'aws',
                },
                {
                    title: 'python',
                },
                {
                    title: 'hibernate',
                },
                {
                    title: 'c',
                },
                {
                    title: 'cpp',
                },
                {
                    title: 'mysql',
                },
                {
                    title: 'angular',
                },
                {
                    title: 'spring',
                },
                {
                    title: 'auth0',
                },
                {
                    title: 'bitbucket',
                },
                {
                    title: 'eclipse',
                },
                {
                    title: 'gitlab',
                },
                {
                    title: 'heroku',
                },
                {
                    title: 'invision',
                },
            ],
        },
        {
            header: 'Currently learning...',
            items: [
                {
                    title: 'percy',
                },
                {
                    title: 'storybook',
                },
                {
                    title: 'graphql',
                },
                {
                    title: 'gatsby',
                },
                {
                    title: 'netlify',
                },
            ],
        },
    ];
    const readme = config
        .map(({ header, items }) => `<h2>${header}</h2><br /><div style="display: flex; flex-wrap: wrap;">${items
        .sort(() => 0.5 - Math.random())
        .map(({ title, href }) => {
        const img = `<img src="./assets/${title}.svg" alt="${title}" width="50" height="50" />`;
        if (!href)
            return img;
        return `<a href="${href}">${img}</a>`;
    })
        .join('')}</div><br />`)
        .join('');
    fs_1.default.writeFile('README.md', readme, err => err && console.error(err));
})();
//# sourceMappingURL=index.js.map