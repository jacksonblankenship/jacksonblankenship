interface Item {
  title: string;
  href?: string;
}

interface Section {
  header: string;
  items: Array<Item>;
}

const sections: Array<Section> = [
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
        title: 'git',
        href: 'https://git-scm.com/',
      },
      {
        title: 'html5',
        href: 'https://en.wikipedia.org/wiki/HTML5',
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
        title: 'figma',
        href: 'https://www.figma.com/',
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
        title: 'renovate',
        href: 'https://www.whitesourcesoftware.com/free-developer-tools/renovate/',
      },
      {
        title: 'commitlint',
        href: 'https://commitlint.js.org/',
      },
      {
        title: 'husky',
        href: 'https://typicode.github.io/husky/',
      },
      {
        title: 'actions',
        href: 'https://github.com/features/actions',
      },
      {
        title: 'create-react-app',
        href: 'https://create-react-app.dev/',
      },
      {
        title: 'ag-grid',
        href: 'https://www.ag-grid.com/',
      },
      {
        title: 'recoil',
        href: 'https://recoiljs.org/',
      },
      {
        title: 'serverless',
        href: 'https://www.serverless.com/',
      },
      {
        title: 'aws',
        href: 'https://aws.amazon.com/',
      },
      {
        title: 'twilio',
        href: 'https://www.twilio.com/',
      },
      {
        title: 'slack-bolt',
        href: 'https://slack.dev/bolt-js',
      },
      {
        title: 'ngrok',
        href: 'https://ngrok.com/',
      },
      {
        title: 'plaid',
        href: 'https://plaid.com/',
      },
    ],
  },
  {
    header: 'Previously worked with...',
    items: [
      {
        title: 'material-ui',
        href: 'https://material-ui.com/',
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
      {
        title: 'matomo',
        href: 'https://matomo.org/',
      },
      {
        title: 'storybook',
        href: 'https://storybook.js.org/',
      },
      {
        title: 'react-hook-form',
        href: 'https://react-hook-form.com/',
      },
      {
        title: 'mongo',
        href: 'https://www.mongodb.com/',
      },
      {
        title: 'next-auth',
        href: 'https://next-auth.js.org/',
      },
      {
        title: 'analytics',
        href: 'https://analytics.google.com/',
      },
      {
        title: 'sendgrid',
        href: 'https://sendgrid.com/',
      },
      {
        title: 'firebase',
        href: 'https://firebase.google.com/',
      },
      {
        title: 'jest',
        href: 'https://jestjs.io/',
      },
      {
        title: 'styled',
        href: 'https://styled-components.com/',
      },
      {
        title: 'puppeteer',
        href: 'https://pptr.dev/',
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
        title: 'invision',
        href: 'https://www.invisionapp.com/',
      },
      {
        title: 'xstate',
        href: 'https://xstate.js.org/docs/',
      },
      {
        title: 'postgresql',
        href: 'https://www.postgresql.org/',
      },
      {
        title: 'heroku',
        href: 'https://www.heroku.com/',
      },
      {
        title: 'auth0',
        href: 'https://auth0.com/',
      },
      {
        title: 'graphql',
        href: 'https://graphql.org/',
      },
      {
        title: 'prisma',
        href: 'https://www.prisma.io/',
      },
      {
        title: 'hasura',
        href: 'https://hasura.io/',
      },
      {
        title: 'vite',
        href: 'https://vitejs.dev/',
      },
      {
        title: 'nhost',
        href: 'https://nhost.io/',
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
        title: 'chromatic',
        href: 'https://www.chromatic.com/',
      },
    ],
  },
];

export default sections;
