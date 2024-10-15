---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 工业互联网标识解析
  tagline: ''
  text: 开发说明文档
  image:
    src: /logo.png
    alt: 工业互联网标识解析22
  actions:
    - text: 标识应用开发指南
      link: /handle-app-sop/1-introduce/purpose
    - text: 开发文档
      link: /dev-tools/standard/api/standard/introduce
    # - text: 企业节点IDHub
    #   link: /idhub/standard/introduce.md
    #   theme: alt

features:
  - icon: <img src="/docs/sop.png" />
    title: 标识应用开发指南
    details:
      标识应用开发指南，旨在帮助应用开发者按照标准规范，基于企业节点提供的服务能力，完成标识应用的开发。
    link: /handle-app-sop/1-introduce/purpose
    linkText: 快速开始
  - icon: <img src="/docs/sdk.png" />
    title: 开发文档
    details: 基于 Java 语言开发的工业互联网标识解析体系客户端软件开发工具包（ID-SDK）提供了便捷的元数据模板、标识解析、标识注册和数据权限等功能。企业可以通过集成 ID-SDK，快速实现这些服务。此外，我们还开放了 IDHub 标准版 API 接口，使企业节点能够更轻松地集成应用，从而提升整体操作效率。

    link: /dev-tools/standard/api/standard/introduce
    linkText: 快速开始
  # - icon: <img src="/docs/idhub.png" />
  #   title: IDHub标准版API
  #   details: 开放IDHub标准版API接口，以便企业节点更轻松地集成应用，从而提升整体操作效率。
  #   link: /idhub/standard/introduce.md
  #   linkText: 快速开始
---

<style>

/*爱的魔力转圈圈*/
.m-home-layout .image-src {
  width: 180px;
  height: 180px;
}

.m-home-layout .details small {
  opacity: 0.6;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
.link-text-value {
  color: #00a98e !important;
}
</style>
