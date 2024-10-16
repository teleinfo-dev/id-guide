import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/handle-app-sop': [
    {
      text: '引言',
      collapsed: true,
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
      text: '产品简介',
      collapsed: true,
      items: [
        {
          text: '企业节点简介',
          link: '/handle-app-sop/2-idhub/introduce',
        },
        {
          text: '版本功能对比',
          link: '/handle-app-sop/2-idhub/version',
        },
        {
          text: '兼容说明',
          link: '/handle-app-sop/2-idhub/compatible',
        },
        // {
        //   text: '企业节点社区版',
        //   link: '/handle-app-sop/2-idhub/community',
        // },
        // {
        // {
        //   text: '企业节点商业版',
        //   link: '/handle-app-sop/2-idhub/business',
        // },
        // {
        //   text: '企业节点OpenAPI',
        //   link: '/handle-app-sop/2-idhub/api-list',
        // },
      ],
    },
    {
      text: '前置操作',
      collapsed: true,
      items: [
        {
          text: '企业前缀申请',
          link: '/handle-app-sop/3-apply-prefix/introduce',
        },
      ],
    },
    {
      text: '企业节点标准版开发操作说明',
      collapsed: true,
      items: [
        {
          text: '概览',
          link: '/handle-app-sop/4-develop-introduce/standard',
        },
        {
          text: '产品迭代日志',
          link: '/handle-app-sop/4-develop-introduce/iteration-log',
        },
        {
          text: '企业节点安装',
          link: '/handle-app-sop/4-develop-introduce/idhub-install',
        },
        {
          text: '快速入门',
          items: [
            {
              text: '创建元数据',
              link: '/handle-app-sop/4-develop-introduce/get-started/create-meta',
            },
            {
              text: '标识注册解析',
              link: '/handle-app-sop/4-develop-introduce/get-started/handle-resolve',
            },
          ],
        },
        {
          text: '标识应用开发',
          items: [
            {
              text: '场景描述',
              link: '/handle-app-sop/4-develop-introduce/app-develop/demo-description',
            },
            {
              text: '开发流程',
              link: '/handle-app-sop/4-develop-introduce/app-develop/dev-flow',
              items: [
                {
                  text: 'step1: 申请企业前缀',
                  link: '/handle-app-sop/4-develop-introduce/app-develop/step1',
                },
                {
                  text: 'step2: 获取应用标识身份',
                  link: '/handle-app-sop/4-develop-introduce/app-develop/step2',
                },
                {
                  text: 'step3: 企业数据接入和管理',
                  link: '/handle-app-sop/4-develop-introduce/app-develop/step3',
                  items: [
                    {
                      text: 'ID-SDK/API接口使用方法',
                      link: '/handle-app-sop/4-develop-introduce/app-develop/step3-sdk',
                    },
                  ],
                },
                {
                  text: 'step4: 标识应用开发',
                  link: '/handle-app-sop/4-develop-introduce/app-develop/step4',
                },
              ],
            },
          ],
        },
        {
          text: 'ID-SDK_API使用说明',
          items: [
            {
              text: '基础用法',
              link: '/handle-app-sop/4-develop-introduce/idsdk-api/basic',
            },
            {
              text: '高级用法',
              link: '/handle-app-sop/4-develop-introduce/idsdk-api/advance',
            },
          ],
        },
        {
          text: '标准版部署手册',
          link: '/handle-app-sop/4-develop-introduce/deployment-introduce',
        },
      ],
    },
    {
      text: '企业节点商业版开发操作说明',
      collapsed: true,
      items: [
        {
          text: '产品介绍',
          link: '/handle-app-sop/5-business-introduce/product-presentation',
        },
        {
          text: '产品迭代日志',
          link: '/handle-app-sop/5-business-introduce/iteration-log',
        },
        {
          text: '企业节点安装',
          link: '/handle-app-sop/5-business-introduce/idhub-install',
        },
        {
          text: '标识应用开发',
          items: [
            {
              text: '场景描述',
              link: '/handle-app-sop/5-business-introduce/app-develop/demo-description',
            },
            {
              text: '开发流程',
              link: '/handle-app-sop/5-business-introduce/app-develop/dev-flow',
              items: [
                {
                  text: 'step1: 申请企业前缀',
                  link: '/handle-app-sop/5-business-introduce/app-develop/step1',
                },
                {
                  text: 'step2: 获取应用标识身份',
                  link: '/handle-app-sop/5-business-introduce/app-develop/step2',
                },
                {
                  text: 'step3: 企业数据接入和管理',
                  link: '/handle-app-sop/5-business-introduce/app-develop/step3',
                  items: [
                    {
                      text: 'ID-SDK/API接口使用方法',
                      link: '/handle-app-sop/5-business-introduce/app-develop/step3-sdk',
                    },
                    {
                      text: 'IDLink使用方法',
                      link: '/handle-app-sop/5-business-introduce/app-develop/step3-idlink',
                    },
                  ],
                },
                {
                  text: 'step4: 标识应用开发',
                  link: '/handle-app-sop/5-business-introduce/app-develop/step4',
                },
              ],
            },
          ],
        },
        {
          text: 'ID-SDK_API使用说明',
          items: [
            {
              text: '基础用法',
              link: '/handle-app-sop/5-business-introduce/idsdk-api/basic',
            },
            {
              text: '高级用法',
              link: '/handle-app-sop/5-business-introduce/idsdk-api/advance',
            },
          ],
        },
        {
          text: '商业版部署手册',
          link: '/handle-app-sop/5-business-introduce/deployment-introduce',
        },
      ],
    },

    {
      text: '标识应用实践',
      link: '/handle-app-sop/7-app-practice/introduce',
    },
    {
      text: '标识应用交付',
      link: '/handle-app-sop/8-app-deliver/introduce',
    },
    // {
    //   text: '企业节点快速部署',
    //   link: '/handle-app-sop/9-deployment/introduce',
    // },
  ],
  '/dev-tools': [
    {
      text: '标准版',
      collapsed: true,
      items: [
        {
          text: 'API文档',
          collapsed: true,
          // link: '/dev-tools/standard/api/standard/introduce.md',
          items: [
            {
              text: '简介',
              link: '/dev-tools/standard/api/introduce.md',
            },
            {
              text: 'API概览',
              link: '/dev-tools/standard/api/api-list.md',
            },
            {
              text: 'API示例',
              items: [
                {
                  text: '认证接口',
                  link: '/dev-tools/standard/api/challenge.md',
                },
                {
                  text: '元数据',
                  link: '/dev-tools/standard/api/meta.md',
                },
                {
                  text: '数据权限',
                  link: '/dev-tools/standard/api/data-auth.md',
                },
                {
                  text: '标识操作',
                  link: '/dev-tools/standard/api/handle.md',
                },
                // {
                //   text: '文件处理',
                //   link: '/idhub/standard/file.md',
                // },
                {
                  text: '响应状态码',
                  link: '/dev-tools/standard/api/state-code.md',
                },
                
              ],
            },
          ],
        },
        {
          text: 'SDK文档',
          collapsed: true,
          items: [
            {
              text: '概述',
              items: [
                { text: '简介', link: '/dev-tools/standard/sdk/introduction' },
                { text: '身份认证', link: '/dev-tools/standard/sdk/user-auth' },
              ],
            },
            {
              text: 'SDK示例',
              items: [
                { text: '元数据', link: '/dev-tools/standard/sdk/basic/meta' },
                { text: '数据权限', link: '/dev-tools/standard/sdk/basic/data-auth' },
                { text: '标识操作', link: '/dev-tools/standard/sdk/basic/handle' },
                // { text: '文件处理', link: '/sdk/v2/basic/file' }
              ],
            },
          ],
        },
      ],
    },
    {
      text: '商业版',
      collapsed: true,
      items: [
        {
          text: 'API文档',
          collapsed: true,
          // link: '/dev-tools/standard/api/standard/introduce.md',
          items: [
            {
              text: '简介',
              link: '/dev-tools/commercial/api/introduce.md',
            },
            {
              text: 'API概览',
              link: '/dev-tools/commercial/api/api-list.md',
            },
            {
              text: 'API示例',
              items: [
                {
                  text: '认证接口',
                  link: '/dev-tools/commercial/api/challenge.md',
                },
                {
                  text: '元数据',
                  link: '/dev-tools/commercial/api/meta.md',
                },
                {
                  text: '数据权限',
                  link: '/dev-tools/commercial/api/data-auth.md',
                },
                {
                  text: '标识操作',
                  link: '/dev-tools/commercial/api/handle.md',
                },
                {
                  text: '文件处理',
                  link: '/dev-tools/commercial/api/file.md',
                },
                {
                  text: '响应状态码',
                  link: '/dev-tools/commercial/api/state-code.md',
                },
              ],
            },
          ],
        },
        {
          text: 'SDK文档',
          collapsed: true,
          items: [
            {
              text: '概述',
              items: [
                { text: '简介', link: '/dev-tools/commercial/sdk/introduction' },
                { text: '身份认证', link: '/dev-tools/commercial/sdk/user-auth' },
              ],
            },
            {
              text: 'SDK示例',
              items: [
                { text: '元数据', link: '/dev-tools/commercial/sdk/basic/meta' },
                { text: '数据权限', link: '/dev-tools/commercial/sdk/basic/data-auth' },
                { text: '标识操作', link: '/dev-tools/commercial/sdk/basic/handle' },
                { text: '文件处理', link: '/dev-tools/commercial/sdk/basic/file' },
              ],
            },
          ],
        },
      ],
    },
    {
      text: 'SaaS版',
      collapsed: true,
      items: [
        {
          text: 'API文档',
          collapsed: true,
          // link: '/dev-tools/standard/api/standard/introduce.md',
          items: [
            {
              text: '简介',
              link: '/dev-tools/saas/api/introduce.md',
            },
            {
              text: 'API概览',
              link: '/dev-tools/saas/api/api-list.md',
            },
            {
              text: 'API示例',
              items: [
                {
                  text: '认证接口',
                  link: '/dev-tools/saas/api/challenge.md',
                },
                {
                  text: '元数据',
                  link: '/dev-tools/saas/api/meta.md',
                },
                {
                  text: '数据权限',
                  link: '/dev-tools/saas/api/data-auth.md',
                },
                {
                  text: '标识操作',
                  link: '/dev-tools/saas/api/handle.md',
                },
                {
                  text: '文件处理',
                  link: '/dev-tools/saas/api/file.md',
                },
                {
                  text: '响应状态码',
                  link: '/dev-tools/saas/api/state-code.md',
                },
              ],
            },
          ],
        },
        {
          text: 'SDK文档',
          collapsed: true,
          items: [
            {
              text: '概述',
              items: [
                { text: '简介', link: '/dev-tools/saas/sdk/introduction' },
                { text: '身份认证', link: '/dev-tools/saas/sdk/user-auth' },
              ],
            },
            {
              text: 'SDK示例',
              items: [
                { text: '元数据', link: '/dev-tools/saas/sdk/basic/meta' },
                { text: '数据权限', link: '/dev-tools/saas/sdk/basic/data-auth' },
                { text: '标识操作', link: '/dev-tools/saas/sdk/basic/handle' },
                { text: '文件处理', link: '/dev-tools/saas/sdk/basic/file' },
              ],
            },
          ],
        },
      ],
    },
    {
        text: '二级节点兼容接口',
        collapsed: true,
        items: [
          {
            text: '概述',
            link: '/dev-tools/snms/api-introduce.md'
          },
          {
            text: 'API概览',
            link: '/dev-tools/snms/api-list.md'
          },
          {
            text: 'API示例',
            items: [
              {
                text: '第三版API',
                collapsed: true,
                items:[
                  {
                    text: '认证接口',
                    link: '/dev-tools/snms/v3/identity-auth.md',
                  },
                  {
                    text: '模版接口',
                    link: '/dev-tools/snms/v3/template.md',
                  },
                  {
                    text: '标识接口',
                    link: '/dev-tools/snms/v3/handle-operate.md',
                  },
                ]
              },
              {
                text: '第五版API',
                collapsed: true,
                items:[
                  {
                    text: '认证接口',
                    link: '/dev-tools/snms/v5/identity-auth.md',
                  },
                  {
                    text: '模版接口',
                    link: '/dev-tools/snms/v5/template.md',
                  },
                  {
                    text: '标识接口',
                    link: '/dev-tools/snms/v5/handle-operate.md',
                  },
                ]
              }
              
            ],
          },
          {
            text: '附录',
            collapsed: true,
            items: [
              {
                text: '响应状态码',
                link: '/dev-tools/snms/attachment.md',
              },
            ],
          },
        ],
    },
    {
      text: '标识解析SDK',
      collapsed: true,
      items: [
        {
          text: '开始',
          items: [
            { text: '简介', link: '/dev-tools/resolve-sdk/introduction' },
            {
              text: '快速开始',
              link: '/dev-tools/resolve-sdk/quick-start',
            },
            { text: '身份认证', link: '/dev-tools/resolve-sdk/user-auth' },
            { text: '参数配置', link: '/dev-tools/resolve-sdk/config' },
          ],
        },
        {
          text: '服务端设置',
          items: [
            { text: '前缀服务注册', link: '/dev-tools/resolve-sdk/prefix-home' },
            {
              text: '前缀服务删除',
              link: '/dev-tools/resolve-sdk/prefix-unhome',
            },
          ],
        },
        {
          text: '基本功能',
          items: [
            { text: '标识解析', link: '/dev-tools/resolve-sdk/id-resolve' },
            { text: '标识注册', link: '/dev-tools/resolve-sdk/id-register' },
            { text: '标识删除', link: '/dev-tools/resolve-sdk/id-delete' },
            { text: '标识值新增', link: '/dev-tools/resolve-sdk/id-value-add' },
            { text: '标识值修改', link: '/dev-tools/resolve-sdk/id-value-modify' },
            { text: '标识值删除', link: '/dev-tools/resolve-sdk/id-value-delete' },
          ],
        },
        {
          text: '高级特性',
          items: [
            // { text: '权限控制', link: '/sdk/hl-permission' },
            { text: '可信解析', link: '/dev-tools/resolve-sdk/hl-trust' },
            // { text: '标识值类型', link: '/sdk/v1/hl-id-value' },
            // { text: '连接池', link: '/sdk/hl-connect-pool' },
            // { text: '异步通信', link: '/sdk/hl-async-message' }
          ],
        },
      ],
    },
  ]
}
