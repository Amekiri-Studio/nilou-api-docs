import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '妮露API',
  description: '您的原神好助手',

  theme: defaultTheme({
    logo: 'https://img.nilou.moe/images/R.png',

    navbar: ['/', '/v1/introduction/', '/v1/bbs/'],
    repo: 'https://github.com/Amekiri-Studio/nilou-api-docs',

    sidebar: {
      '/': [],
      '/v1/bbs/': [
        {
          text: '原神',
          children: [
            {
              text: '获取基本信息',
              link: '/v1/bbs/genshin/getBasicInfo/'
            }, {
              text: '获取详细信息',
              link: '/v1/bbs/genshin/getDetailInfo/'
            }, {
              text: '获取深渊信息',
              link: '/v1/bbs/genshin/getAbyssInfo/'
            }
          ]
        }
      ]
    }
  }),

  bundler: viteBundler(),
})
