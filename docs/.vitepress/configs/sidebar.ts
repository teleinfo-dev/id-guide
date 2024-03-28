import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/sdk/v2': [
    {
      text: '开始',
      items: [
        { text: '简介', link: '/sdk/v2/introduction' },
        {
          text: '快速开始',
          link: '/sdk/v2/quick-start',
        },
        { text: '身份认证', link: '/sdk/v2/user-auth' },
        { text: '参数配置', link: '/sdk/v2/config' },
      ],
    },
    {
      text: '服务端设置',
      items: [
        { text: '前缀服务注册', link: '/sdk/v2/prefix-home' },
        {
          text: '前缀服务删除',
          link: '/sdk/v2/prefix-unhome',
        },
      ],
    },
    {
      text: '基本功能',
      items: [
        { text: '标识解析', link: '/sdk/v2/id-resolve' },
        { text: '标识注册', link: '/sdk/v2/id-register' },
        { text: '标识删除', link: '/sdk/v2/id-delete' },
        { text: '标识值新增', link: '/sdk/v2/id-value-add' },
        { text: '标识值修改', link: '/sdk/v2/id-value-modify' },
        { text: '标识值删除', link: '/sdk/v2/id-value-delete' },
      ],
    },
    {
      text: '高级特性',
      items: [
        // { text: '权限控制', link: '/sdk/hl-permission' },
        { text: '可信解析', link: '/sdk/v2/hl-trust' },
        { text: '标识值类型', link: '/sdk/v2/hl-id-value' },
        // { text: '连接池', link: '/sdk/hl-connect-pool' },
        // { text: '异步通信', link: '/sdk/hl-async-message' }
      ],
    },
  ],
  '/openApi/v3': [
    {
      text: '开始',
      items: [
        {
          text: '简介',
          link: '/openApi/v3/ent.md',
        },
      ],
    },
  ],
  '/openApi/v5': [
    {
      text: '开始',
      items: [
        {
          text: '简介',
          link: '/OpenApi/v5/ent.md',
        },
      ],
    },
  ],
}
