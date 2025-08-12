import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: '曲锦亭的文档',
  description: '个人学习文档',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/docs/开发规范' },
    ],
    sidebar: [
      {
        text: '其他',
        items: [
          { text: '岸基开发规范', link: '/docs/开发规范' },
          { text: '常用指令', link: '/docs/常用指令' },
        ],
      },
      {
        text: 'Vue',
        items: [
          { text: 'Vue2', items: [{ text: '先占着路由', link: '' }] },
          { text: 'Vue3', items: [{ text: '先占着路由', link: '' }] },
        ],
      },
      {
        text: 'React',
        items: [{ text: '还没学呢', link: '' }],
      },
      {
        text: 'Java',
        items: [{ text: '还没学呢', link: '' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qujinting/qujt-documents' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
  },
});
