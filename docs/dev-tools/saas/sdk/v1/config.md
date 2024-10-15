# 参数配置

## IDClientConfig

id-pointer-sdk 通过 **IDClientConfig** 类来提供配置能力，其支持的配置项如下所示，
用户可以根据需要进行配置。

```java
    /**
     * 递归服务ip,默认值 36.112.25.8
     */
    private String recursionServerIp;
    /**
     * 递归服务port，默认值 3641
     */
    private int recursionServerPort;
    /**
     * nio线程,默认值0
     */
    private int nioThreads;
    /**
     * 超时间时，默认60s
     */
    private int promiseTimeout;
    /**
     * 每个服务最小连接数,默认1
     */
    private int minConnectionsPerServer;
    /**
     * 每个服务最大连接数,默认10
     */
    private int maxConnectionsPerServer;
    /**
     * 空闲时间,默认600s
     */
    private int idleTimeSeconds;
    /**
     * 心跳执行,默认false
     */
    private boolean heatBeatRunning;
    /**
     * 每个用户、服务最小连接数,默认1
     */
    private int loginMinConnectionsPerServer;
    /**
     * 每个用户、服务最大连接数,默认10
     */
    private int loginMaxConnectionsPerServer;
    /**
     * 登录空闲时间,默认600s
     */
    private int loginIdleTimeSeconds;
    /**
     * 登录心跳执行,默认false
     */
    private boolean loginHeatBeatRunning;
```

id-pointer-sdk 预置了工业互联网标识解析的生产环境与 OTE 环境，可以通过 builder 快速切
换。

```java
    // 生产环境
    IDClientConfig prdConfig = IDClientConfig.builder().prdEnv().build();
    // OTE环境
    IDClientConfig oteConfig = IDClientConfig.builder().oteEnv().build();
```

## 配置全局使用的 IDClientConfig

GlobalIdClientFactory 提供了静态的 init 方法，参数是 IDClientConfig 类型的配
置。GlobalIdClientFactory 使用懒加载的单例模式实现，在实例初始化前，通过调用 init
方法配置其所使用的 IDClientConfig。

```java
    // OTE环境
    IDClientConfig oteConfig = IDClientConfig.builder().oteEnv().build();
    GlobalIdClientFactory.init(oteConfig);
    IDClientFactory idClientFactory = GlobalIdClientFactory.getIdClientFactory();
    // ...其它操作
```
