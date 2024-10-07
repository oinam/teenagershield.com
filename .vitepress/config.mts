import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Teenager Shield",
  description: "Protect teenagers on the Internet.",

  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  sitemap: { hostname: 'https://teenagershield.com' },
  search: { provider: 'local' },

  srcExclude: [ 'README.md' ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/teenagershield-logo.svg' },
    lastUpdated: {
      text: 'Edited',
      formatOptions: {
        dateStyle: 'medium',
      },
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides' }
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Guides', link: '/guides' },
          { text: 'Advertisements', link: '/advertisements' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oinam/teenagershield.com' }
    ]
  }
})
