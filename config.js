const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://madhusona.github.io/GE8151/',
    gaTrackingId: 'G-NEJY066PS3',
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '',
    title:
      "GE8151 - Problem Solving and Python Programming",
    githubUrl: 'https://github.com/madhusona/GE8151',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
       // add trailing slash if enabled above
      '/Unit-I',
      '/Unit-II',
      '/Unit-III',
      '/Unit-IV',
      '/Unit-V'
    ],
    collapsedNav: [
      '/Unit-I', // add trailing slash if enabled above
      '/Unit-II',
      '/Unit-III',
      '/Unit-IV',
      '/Unit-V'
    ],
    links: [{ text: '', link: '' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "",
  },
  siteMetadata: {
    title: 'GE8151 - Problem Solving with Python Programming',
    description: 'Class notes - GE8151 ',
    ogImage: null,
    docsLocation: 'https://github.com/madhusona/GE8151/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'GE8151',
      short_name: 'GE8151',
      start_url: '/GE8151',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/GE8151.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
