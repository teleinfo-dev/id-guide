<div style="background-color: rgb(232,243,255); color: rgb(22,93,255);padding: 8px 0 8px 2px; font-size: 20px; margin-top: -16px; margin-bottom: 20px;">发版通知</div>


# 简介

## ID-SDK

ID-SDK 是北京泰尔英福科技有限公司开发的，基于 Java 语言开发的工业互联网标识
解析体系客户端软件开发工具包，基于工业互联网标识解析体系的应用通过集成
ID-SDK，快速使用标识解析、标识注册、标识维护等功能服务。

## 工业互联网标识解析体系

工业互联网标识解析体系是工业互联网的关键神经系统。工业互联网中的标识，就类似于互联网中的
域名，是识别和管理物品、信息、机器的关键基础资源。工业互联网中标识解析系统，就类
似互联网中的域名解析系统，是整个网络实现互联互通的关键基础设施。

## 项目依赖

ID-SDK 在 JDK1.8 下进行开发，基于 netty4 进行功能组织。项目使用的三方依赖
版本由 spring-boot 进行管理，当前使用的版本为**2.7.3**。

```xml
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.9.1</version>
</dependency>
<dependency>
    <groupId>commons-codec</groupId>
    <artifactId>commons-codec</artifactId>
    <version>1.15</version>
</dependency>
<dependency>
    <groupId>org.bouncycastle</groupId>
    <artifactId>bcprov-jdk15on</artifactId>
    <version>1.70</version>
</dependency>
<dependency>
    <groupId>org.bouncycastle</groupId>
    <artifactId>bcpkix-jdk15on</artifactId>
    <version>1.70</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
</dependency>
<dependency>
    <groupId>io.netty</groupId>
    <artifactId>netty-transport</artifactId>
    <version>4.1.79.Final</version>
</dependency>
<dependency>
    <groupId>io.netty</groupId>
    <artifactId>netty-handler</artifactId>
    <version>4.1.79.Final</version>
</dependency>
<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
    <version>2.9.3</version>
</dependency>

```
