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
    header: 'head',
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
        href: 'https://babeljs.io/',
      },
      {
        title: 'css3',
        href: 'https://en.wikipedia.org/wiki/CSS',
      },
      {
        title: 'eslint',
        href: 'https://eslint.org/',
      },
      {
        title: 'firebase',
        href: 'https://firebase.google.com/',
      },
      {
        title: 'git',
        href: 'https://git-scm.com/',
      },
      {
        title: 'html5',
        href: 'https://en.wikipedia.org/wiki/HTML5',
      },
      {
        title: 'jest',
        href: 'https://jestjs.io/',
      },
      {
        title: 'lighthouse',
        href: 'https://web.dev/',
      },
      {
        title: 'next',
        href: 'https://nextjs.org/',
      },
      {
        title: 'node',
        href: 'https://nodejs.org/en/',
      },
      {
        title: 'npm',
        href: 'https://www.npmjs.com/',
      },
      {
        title: 'prettier',
        href: 'https://prettier.io/',
      },
      {
        title: 'reactts',
        href: 'https://reactjs.org/',
      },
      {
        title: 'sass',
        href: 'https://sass-lang.com/',
      },
      {
        title: 'styled',
        href: 'https://styled-components.com/',
      },
      {
        title: 'typescript',
        href: 'https://www.typescriptlang.org/',
      },
      {
        title: 'vim',
        href: 'https://en.wikipedia.org/wiki/Vim_(text_editor)',
      },
      {
        title: 'vscode',
        href: 'https://code.visualstudio.com/',
      },
      {
        title: 'webpack',
        href: 'https://webpack.js.org/',
      },
      {
        title: 'puppeteer',
        href: 'https://pptr.dev/',
      },
      {
        title: 'figma',
        href: 'https://www.figma.com/',
      },
      {
        title: 'material-ui',
        href: 'https://material-ui.com/',
      },
      {
        title: 'sendgrid',
        href: 'sendgrid.com',
      },
      {
        title: 'bash',
        href: 'https://en.wikipedia.org/wiki/Bash_(Unix_shell)',
      },
      {
        title: 'github',
        href: 'https://github.com/',
      },
      {
        title: 'javascript',
        href: 'https://www.javascript.com/',
      },
      {
        title: 'analytics',
        href: 'https://analytics.google.com/',
      },
      {
        title: 'homebrew',
        href: 'https://brew.sh/',
      },
      {
        title: 'postman',
        href: 'https://www.postman.com/',
      },
      {
        title: 'vercel',
        href: 'https://vercel.com/',
      },
      {
        title: 'netlify',
        href: 'https://www.netlify.com/',
      },
      {
        title: 'ant',
        href: 'https://ant.design/',
      },
      {
        title: 'less',
        href: 'http://lesscss.org/',
      },
    ],
  },
  {
    header: 'Previously worked with...',
    items: [
      {
        title: 'mongo',
        href: 'https://www.mongodb.com/',
      },
      {
        title: 'serverless',
        href: 'https://www.serverless.com/',
      },
      {
        title: 'sketch',
        href: 'https://www.sketch.com/',
      },
      {
        title: 'java',
        href: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
      },
      {
        title: 'maven',
        href: 'https://maven.apache.org/',
      },
      {
        title: 'redux',
        href: 'https://redux.js.org/',
      },
      {
        title: 'aws',
        href: 'https://aws.amazon.com/',
      },
      {
        title: 'python',
        href: 'https://www.python.org/',
      },
      {
        title: 'hibernate',
        href: 'https://hibernate.org/',
      },
      {
        title: 'c',
        href: 'https://en.wikipedia.org/wiki/C_(programming_language)',
      },
      {
        title: 'cpp',
        href: 'https://en.wikipedia.org/wiki/C%2B%2B',
      },
      {
        title: 'mysql',
        href: 'https://www.mysql.com/',
      },
      {
        title: 'angular',
        href: 'https://angular.io/',
      },
      {
        title: 'spring',
        href: 'https://spring.io/',
      },
      {
        title: 'auth0',
        href: 'https://auth0.com/',
      },
      {
        title: 'bitbucket',
        href: 'https://bitbucket.org/product/',
      },
      {
        title: 'eclipse',
        href: 'https://www.eclipse.org/downloads/',
      },
      {
        title: 'gitlab',
        href: 'https://about.gitlab.com/',
      },
      {
        title: 'heroku',
        href: 'https://www.heroku.com/',
      },
      {
        title: 'invision',
        href: 'https://www.invisionapp.com/',
      },
    ],
  },
  {
    header: 'Currently learning...',
    items: [
      {
        title: 'percy',
        href: 'https://percy.io/',
      },
      {
        title: 'storybook',
        href: 'https://storybook.js.org/',
      },
      {
        title: 'graphql',
        href: 'https://graphql.org/',
      },
      {
        title: 'gatsby',
        href: 'https://www.gatsbyjs.com/',
      },
    ],
  },
];

export default sections;
