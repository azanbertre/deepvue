module.exports = ctx => ({
  locales: {
    '/': {
      lang: 'en-US',
      text: 'English',
    }
  },
  plugins: [
    ['vuepress-plugin-typescript']
  ],
  base: '/',
  title: 'Vue.js - DeepVue',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, shrink-to-fit=no' }],
    ['meta', { name: 'author', content: 'azanbertre' }],
    ['meta', { name: 'google', content: 'nositelinkssearchbox' }],
    ['meta', { hid: 'description', name: 'description', content: 'DeepVue for Vuejs' }],
    ['meta', { property: 'og:description', content: 'DeepVue for Vuejs' }],
    ['meta', { property: 'og:title', content: 'DeepVue - Components for Vuejs'}],
  ],
  themeConfig: {
    repo: 'azanbertre/deepvue',
    docsDir: 'packages/docs',
    locales: {
      '/': {
        ...getNavbar(),
        ...getSidebar()
      },
    },

    repo: 'git@github.com:azanbertre/deepvue.git',
    lastUpdated: true,
    searchPlaceholder: 'Search',
  }
})

function getNavbar (lang = '/') {

  return {
    nav: [
      {
        text: 'Guide',
        link: `${lang}docs/guide/`,
        items: [
          { text: 'Introduction', link: `${lang}docs/guide/` }
        ]
      },
      {
        text: 'Documentation',
        link: `${lang}docs/`,
        items: [
          {
            text: 'Theme',
            items: [
              { text: `Color`, link: `${lang}docs/theme/` },
            ]
          },
          {
            text: 'Layout',
            items: [
              { text: 'Grid', link: `${lang}docs/layout/` },
            ]
          },
          {
            text: 'Components',
            items: [
              { text: `Button`, link: `${lang}docs/components/Button` },
              // [new-1]
            ]
          }
        ]
      },
      {
        text: 'License',
        link: `${lang}license/`
      }
    ]
  }
}

function getSidebar (lang = '/') {
  return {
    sidebar: {
      [`${lang}docs/`]: [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            `${lang}docs/guide/`,
          ]
        },
        {
          title: 'Theme',
          collapsable: false,
          children: [
            `${lang}docs/theme/`,
          ]
        },
        {
          title: 'Components',
          collapsable: false,
          children: [
            `${lang}docs/components/Button`,
            // [new-2]
          ]
        },
        {
          title: 'Layout',
          collapsable: false,
          children: [
            `${lang}docs/layout/`,
          ]
        },
      ],
    }
  }
}
