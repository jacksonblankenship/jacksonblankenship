interface Item {
  title: string;
  href?: string;
}

interface Section {
  header: string;
  items: Item[];
}

const sections: Section[] = [
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
        href:
          'https://open.spotify.com/user/1240355717?si=Vf0XhUsDRnGYHza5j5STIQ',
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
      {
        title: 'ant',
      },
    ],
  },
];

export default sections;
