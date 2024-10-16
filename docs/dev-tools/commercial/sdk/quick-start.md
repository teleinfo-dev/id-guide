# 快速开始

## 环境要求

最低环境要求 java 8。

## 快速开始

id-sdk发布到maven仓库，应用在pom.xml文件中添加以下依赖。

```pom
<dependency>
    <groupId>cn.teleinfo</groupId>
    <artifactId>id-sdk-impl</artifactId>
    <version>0.0.1</version>
</dependency>
```

## 调用流程

*   调用身份相关接口，获取token
    
*   将token作为参数，进行标识的相关操作
    
*   模板数据注册，主要实现中英文替换，定义标识数据模型
    
*   标识注册必须使用数据模板，并根据数据模型进行标识数据录入
