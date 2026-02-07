import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Pat",
  description: "법률 및 판례 정리 문서",
  base: '/pat/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: '문서 목록',
        items: [
          { text: '시작하기', link: '/index' },
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
})
