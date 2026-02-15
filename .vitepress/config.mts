import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  lang: 'zh-CN',
  title: "ArchLinux小白笔记",
  description: "一个从零开始的\nArchLinux配置流程",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
	logo: 'https://img.guanyi.lol/ArchLinuxDocs/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
