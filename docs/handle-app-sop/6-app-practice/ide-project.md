# IDE搭建项目

1. 使用IDE搭建应用开发项目
<center><img src="./images/app-handle-6-3.png" style="margin-top: 10px"/></center>

2. 添加企业节点SDK Maven依赖

```xml
<dependencies>
    <!--    企业节点SDK依赖     -->
    <dependency>
        <groupId>cn.teleinfo</groupId>
        <artifactId>id-sdk-impl</artifactId>
        <version>1.0.0-SNAPSHOT</version>
    </dependency>
    <!--    openfeign     -->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-openfeign</artifactId>
    </dependency>
    <!--    工具类包     -->
    <dependency>
        <groupId>cn.hutool</groupId>
        <artifactId>hutool-all</artifactId>
        <version>5.8.4</version>
    </dependency>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.28</version>
    </dependency>
    <!--    springboot     -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```