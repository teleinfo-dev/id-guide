import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '标识解析SDK',
    items: [
      {
        text: 'V2.0',
        link: '/sdk/v2/introduction',
      },
      {
        text: 'V1.0',
        link: '/sdk/v1/manual',
      },
    ],
  },
  {
    text: '二级节点OpenAPI',
    items: [
      {
        text: 'V5',
        link: '/openApi/v5/api-introduce.md',
      },
      {
        text: 'V3',
        link: '/openApi/v3/api-introduce.md',
      },
    ],
  },
]
