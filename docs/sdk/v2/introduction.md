## 简介

ID-SDK 是一种专为应用开发者设计的软件开发工具包，主要用于实现用户身份认证与标识管理功能。通过集成此SDK，开发者可以轻松地在他们的应用中使用标识解析、标识注册、标识维护等功能服务。本指南旨在帮助开发者快速理解并集成ID-SDK到他们的项目中，确保过程顺利且高效。


## 快速开始

id-sdk 发布到 maven 仓库，应用在 pom.xml 文件中添加以下依赖。

```java
<dependency>
    <groupId>cn.teleinfo</groupId>
    <artifactId>id-sdk</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

## 调用流程

*   调用身份相关接口，获取token
    
*   将token作为参数，进行标识的相关操作
    
*   模板数据注册，主要实现中英文替换，定义标识数据模型
    
*   标识注册必须使用数据模板，并根据数据模型进行标识数据录入