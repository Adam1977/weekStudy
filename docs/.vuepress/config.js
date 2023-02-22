module.exports = {
  // base: '/weekStudy/',
  base: '/',
  logo: ' /jerry.jpeg',
  title: '个人知识总结',
  description: 'Personal knowledge summary',
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
      '/lowcode/',
      '/npm/',
      '/process-thread/',
      '/travis-ci/',
      ['/js/new.md', 'new操作符'],
      '/design-pattern/'
    ]
  },
  markdown: {
    lineNumbers: true
  }
}
