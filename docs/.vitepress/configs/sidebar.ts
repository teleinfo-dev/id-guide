import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/handle-app-sop': [
    {
      text: '引言',
      items: [
        {
          text: '编写目的',
          link: '/handle-app-sop/1-introduce/purpose',
        },
        {
          text: '整体流程',
          link: '/handle-app-sop/1-introduce/overview',
        },
      ],
    },
    {
      text: '企业节点',
      items: [
        {
          text: '简介',
          link: '/handle-app-sop/2-idhub/index',
        },
        {
          text: '企业节点标准版',
          link: '/handle-app-sop/2-idhub/standard',
        },
        {
          text: '标准版API接口',
          link: '/handle-app-sop/2-idhub/api-list',
        },
      ],
     
    },
    {
      text: '标识应用开发环境',
      items: [
        {
          text: '安装企业节点',
          link: '/handle-app-sop/3-develop-env/index',
        }
      ]
    },
    {
      text: '数据接入',
      items: [
        {
          text: '接入说明',
          link: '/handle-app-sop/4-access-introduce/index',
        }
      ]
    },
    {
      text: '标识应用开发指南',
      items: [
        {
          text: '开发流程',
          link: '/handle-app-sop/5-develop-guide/develop-process',
        },
        {
          text: '获取企业前缀',
          link: '/handle-app-sop/5-develop-guide/get-ent-prefix',
        },
        {
          text: '获取应用标识身份',
          link: '/handle-app-sop/5-develop-guide/get-app-handle',
        },
        {
          text: '企业数据接入',
          items: [
            {
              text: '通过SDK、API接口接入数据',
              link: '/handle-app-sop/5-develop-guide/sdk-api',
            },
            {
              text: '通过IDLink接入数据',
              link: '/handle-app-sop/5-develop-guide/idlink',
            },
          ]
        },
        {
          text: '标识应用开发',
          link: '/handle-app-sop/5-develop-guide/app-develop',
        },
        {
          text: '接口兼容',
          link: '/handle-app-sop/5-develop-guide/api-compatible',
        }
      ]
    },
    {
      text: '标识应用实践',
      items: [
        // {
        //   text: '介绍',
        //   link: '/handle-app-sop/6-app-practice/index',
        // },
        {
          text: '获取应用标识身份',
          link: '/handle-app-sop/6-app-practice/get-app-handle',
        },
        {
          text: 'IDE搭建项目',
          link: '/handle-app-sop/6-app-practice/ide-project',
        },
        {
          text: '添加配置项',
          link: '/handle-app-sop/6-app-practice/add-config',
        },
        {
          text: '身份认证',
          link: '/handle-app-sop/6-app-practice/identity-verify',
        },
        {
          text: '接口调用',
          link: '/handle-app-sop/6-app-practice/api-call',
        },
        {
          text: '创建测试Controller',
          link: '/handle-app-sop/6-app-practice/create-controller',
        },
        {
          text: '运行',
          link: '/handle-app-sop/6-app-practice/run',
        }
      ]
    },
    {
      text: '标识应用交付',
      link: '/handle-app-sop/7-app-deliver/index'
    },
    {
      text: '企业节点快速部署',
      link: '/handle-app-sop/8-deployment/index'
    }
  ],
  '/sdk/v1': [
    {
      text: '开始',
      items: [
        { text: '简介', link: '/sdk/v1/introduction' },
        {
          text: '快速开始',
          link: '/sdk/v1/quick-start',
        },
        { text: '身份认证', link: '/sdk/v1/user-auth' },
        { text: '参数配置', link: '/sdk/v1/config' },
      ],
    },
    {
      text: '服务端设置',
      items: [
        { text: '前缀服务注册', link: '/sdk/v1/prefix-home' },
        {
          text: '前缀服务删除',
          link: '/sdk/v1/prefix-unhome',
        },
      ],
    },
    {
      text: '基本功能',
      items: [
        { text: '标识解析', link: '/sdk/v1/id-resolve' },
        { text: '标识注册', link: '/sdk/v1/id-register' },
        { text: '标识删除', link: '/sdk/v1/id-delete' },
        { text: '标识值新增', link: '/sdk/v1/id-value-add' },
        { text: '标识值修改', link: '/sdk/v1/id-value-modify' },
        { text: '标识值删除', link: '/sdk/v1/id-value-delete' },
      ],
    },
    {
      text: '高级特性',
      items: [
        // { text: '权限控制', link: '/sdk/hl-permission' },
        { text: '可信解析', link: '/sdk/v1/hl-trust' },
        // { text: '标识值类型', link: '/sdk/v1/hl-id-value' },
        // { text: '连接池', link: '/sdk/hl-connect-pool' },
        // { text: '异步通信', link: '/sdk/hl-async-message' }
      ],
    },
  ],
  '/sdk/v2': [
    {
      text: '开始',
      items: [
        { text: '简介', link: '/sdk/v2/introduction' },
        { text: '身份认证', link: '/sdk/v2/user-auth' }
      ],
    },
    {
      text: '基本功能',
      items: [
        { text: '元数据', link: '/sdk/v2/basic/meta' },
        { text: '数据权限', link: '/sdk/v2/basic/data-auth' },
        { text: '标识操作', link: '/sdk/v2/basic/handle' },
        { text: '文件处理', link: '/sdk/v2/basic/file' }
      ],
    }
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
      items: [
        {
          text: '标准版',
              link: '/idhub/standard/openapi.md',
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
        },   {
          text: '兼容版',
          link: '/idhub/snms/api-introduce.md',
          items: [
            {
              text: 'V3',
              // link: '/idhub/snms/v3/introduce.md',
              collapsed: true,
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
              // link: '/idhub/snms/v5/introduce.md',
              collapsed: true,
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
              collapsed: true,
              items: [
                {
                  text: '响应状态码',
                  link: '/idhub/snms/attachment.md',
                },
              ],
            }
          ]
        }
      ]
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
