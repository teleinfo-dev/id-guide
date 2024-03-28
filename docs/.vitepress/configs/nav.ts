import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'SDK',
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
    text: 'OpenApi',
    items: [
      {
        text: 'V5',
        link: '/openApi/v5/ent',
      },
      {
        text: 'V3',
        link: '/openApi/v3/ent',
      },
    ],
  },
]
