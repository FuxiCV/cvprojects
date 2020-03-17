module.exports = {
  title: "Yi Yuan",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/icons/favicon.ico` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    navbar: false,
    /*
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      { text: "Guide", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/yiyuan1991" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    */
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

