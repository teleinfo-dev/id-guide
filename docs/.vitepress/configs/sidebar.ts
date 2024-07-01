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
  // '/openApi/v3': [
  //   {
  //     text: '开始',
  //     items: [
  //       {
  //         text: '简介',
  //         link: '/openApi/v3/api-introduce.md',
  //       },
  //     ],
  //   },
  //   {
  //     text: 'OpenAPI-V3',
  //     items: [
  //       {
  //         text: '认证接口',
  //         link: '/openApi/v3/identity-auth.md',
  //       },
  //       {
  //         text: '企业接口',
  //         link: '/openApi/v3/ent.md',
  //       },
  //       {
  //         text: '前缀接口',
  //         link: '/openApi/v3/prefix.md',
  //       },
  //       {
  //         text: '模版接口',
  //         link: '/openApi/v3/template.md',
  //       },
  //       {
  //         text: '标识接口',
  //         link: '/openApi/v3/handle-operate.md',
  //       },
  //     ],
  //   },
  //   {
  //     text: '附录',
  //     items: [
  //       {
  //         text: '附录',
  //         link: '/openApi/v3/attachment.md',
  //       },
  //     ],
  //   },
  // ],
  // '/openApi/v5': [
  //   {
  //     text: '开始',
  //     items: [
  //       {
  //         text: '简介',
  //         link: '/openApi/v5/api-introduce.md',
  //       },
  //     ],
  //   },
  //   {
  //     text: 'OpenAPI-V5',
  //     items: [
  //       {
  //         text: '认证接口',
  //         link: '/openApi/v5/identity-auth.md',
  //       },
  //       {
  //         text: '企业接口',
  //         link: '/openApi/v5/ent.md',
  //       },
  //       {
  //         text: '前缀接口',
  //         link: '/openApi/v5/prefix.md',
  //       },
  //       {
  //         text: '模版接口',
  //         link: '/openApi/v5/template.md',
  //       },
  //       {
  //         text: '标识接口',
  //         link: '/openApi/v5/handle-operate.md',
  //       },
  //     ],
  //   },
  //   {
  //     text: '附录',
  //     items: [
  //       {
  //         text: '附录',
  //         link: '/openApi/v5/attachment.md',
  //       },
  //     ],
  //   },
  // ],
  '/idhub': [
    {
      text: '开始',
      items: [
        {
          text: '简介',
          link: '/idhub/standard/introduce.md',
        },
      ],
    },
    {
      text: 'OpenAPI',
      link: '/idhub/standard/api-introduce.md',
      items: [
        {
          text: '认证接口',
          link: '/idhub/standard/challenge.md',
        },
        {
          text: '元数据',
          link: '/idhub/standard/meta.md',
        },
        {
          text: '数据权限',
          link: '/idhub/standard/data-auth.md',
        },
        {
          text: '标识操作',
          link: '/idhub/standard/handle.md',
        },
        {
          text: '文件处理',
          link: '/idhub/standard/file.md',
        },
        {
          text: '响应状态码',
          link: '/idhub/standard/state-code.md',
        },
      ],
    },
    // {
    //   text: '附录',
    //   items: [
    //     {
    //       text: '响应状态码',
    //       link: '/idhub/standard/state-code.md',
    //     },
    //   ],
    // },
    {
      text: '兼容版',
      link: '/idhub/snms/api-introduce.md',
      items: [
        {
          text: 'V3',
          link: '/idhub/snms/v3/introduce.md',
          items: [
            {
              text: '认证接口',
              link: '/idhub/snms/v3/identity-auth.md',
            },
            {
              text: '模版接口',
              link: '/idhub/snms/v3/template.md',
            },
            {
              text: '标识接口',
              link: '/idhub/snms/v3/handle-operate.md',
            },
          ],
        },
        {
          text: 'V5',
          link: '/idhub/snms/v5/introduce.md',
          items: [
            {
              text: '认证接口',
              link: '/idhub/snms/v5/identity-auth.md',
            },
            {
              text: '模版接口',
              link: '/idhub/snms/v5/template.md',
            },
            {
              text: '标识接口',
              link: '/idhub/snms/v5/handle-operate.md',
            },
          ],
        },
        {
          text: '附录',
          items: [
            {
              text: '响应状态码',
              link: '/idhub/snms/attachment.md',
            },
          ],
        }
      ]
    },
  ],
    // '/idhub/snms': [
    //   {
    //     text: '开始',
    //     items: [
    //       {
    //         text: '简介',
    //         link: '/idhub/snms/api-introduce.md',
    //       },
    //     ],
    //   },
    //   {
    //     text: 'V3',
    //     items: [
    //       {
    //         text: '认证接口',
    //         link: '/idhub/snms/v3/identity-auth.md',
    //       },
    //       {
    //         text: '模版接口',
    //         link: '/idhub/snms/v3/template.md',
    //       },
    //       {
    //         text: '标识接口',
    //         link: '/idhub/snms/v3/handle-operate.md',
    //       },
    //     ],
    //   },
    //   {
    //     text: 'V5',
    //     items: [
    //       {
    //         text: '认证接口',
    //         link: '/idhub/snms/v5/identity-auth.md',
    //       },
    //       {
    //         text: '模版接口',
    //         link: '/idhub/snms/v5/template.md',
    //       },
    //       {
    //         text: '标识接口',
    //         link: '/idhub/snms/v5/handle-operate.md',
    //       },
    //     ],
    //   },
    //   {
    //     text: '附录',
    //     items: [
    //       {
    //         text: '附录',
    //         link: '/idhub/snms/attachment.md',
    //       },
    //     ],
    //   }
    // ],
}
