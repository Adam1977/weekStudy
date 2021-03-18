module.exports = {
  base: '/weekStudy/',
  logo: ' /jerry.jpeg',
  title: '每周一砖',
  description: 'Just playing around',
  themeConfig: {
    sidebarDepth: 3,
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        link: '/guide/'
      }
    ],
    sidebar: [
      '/process-thread/',
      '/travisCI/',
      ['/js/eventLoop.md', 'js']
    ]
  },
  markdown: {
    lineNumbers: true
  }
}
