# 身份认证

## 标识身份

在工业互联网标识解析体系中，所有的对象都是标识。如下图所示，工业互联网标识的数据结构是一对多的结构，一个标识下可以有多个数据值，每一个数据值都包含数值类型的索引，字符串类型的数据类型和实际的数据。使用标识值作为身份标识符，用户的认证基于非对称加密密钥对，在标识上存储密钥对的公钥对整个标识解析体系公开，密钥对的私钥用户自己保管，作为身份认证的凭证。
标识值可以支持基本的用户身份认证，即持有有效私钥的用户被认为是当前用户。由于标识后缀可以包含“:”等特殊字符，使用<索引>:<标识>的方式来表示标识值，身份标识符也用标识值来表示，例如标识值“300:88.111.1/test”是一个身份的标识符。

![图 1](./images/user-auth_userId_dd43bb6d8f1356a6bd0c19a34cfb2c8bb5814169f4228292e9cfd00331491066.png)

分布式身份认证系统是指用户的身份信息和用户的权限可以配置在不同的服务器上；例如用户在企业 A 的服务上注册，但是却可以在企业 B 和企业 C 上配置相应的操作权限。用户在工业互联网体系中全局唯一，但同一个用户却可以在不同企业拥有不同的权限。用户的身份和权限是分离的，这就是分布式身份认证系统。
分布式身份认证系统主要实现针对用户权限各方面的控制，包括增加，删除，修改，查询等功能。用户登录系统后，根据用户已配置的不同实现对 handle 的不同操作。分布式身份认证简单体系结构如下

![图 2](./images/user-auth_structure_4ad87da649b686d3b79f430990384902af473e4ac4ac819832191bc8f24dcd93.png)

说明：

- 图中存在两个企业节点 A 和 B
- 用户 88.111.1/user 是企业节点 A 上的全局唯一标识
- 客户端可以使用该用户名登录任意企业节点 A 和 B
- 用户私钥自己保存，公钥信息在企业节点 A 中标识 88.111.1/user 内容中存放
- 当用户登录企业 88.111.1 或者 88.222.1 时，需要身份认证
  - 企业 B 会通过标识递归解析系统，去企业 A 上获取 88.111.1/user 中存放的公钥信息
  - 通过公钥信息验证用户身份
- 这种登录验证身份时，需要到另一个不同的服务器系统上查询公钥信息，来进行验证用户身份的功能，就是一个分布式系统的概念。

## 功能介绍

1. 同一用户，多地登录：在符合 handle 协议的工业互联网任何服务中都可以登录，用户登录成功后，可以根据用户权限执行管理操作；
2. 精确控制访问权限：可以实现标识级别和标识属性级别的用户权限控制
3. 供应商跨企业管理，如下图

![图 3](./images/user-auth_user_735ef0314743b86104f998b1af7259e40001b064a7282ff8a1a60b0f8fcd4530.png)

**说明**

- 用户 user1 在企业 A、企业 B、企业 C 中都被进行了配置并赋予了一定权限，可根据不同的权限进行相应的操作。
- 用户 user1 在企业 A 中可管理权威前缀 88.1000 下的所有 handle。
- 用户 user1 在企业 B 中可管理具体配置的 handle 88.2000/PRODUCT1。
- 用户 user1 在企业 C 中可查看 handle 88.3000/PRODUCT2 中 handle value1 的值。

## 前提条件

前缀对应的 IDHUB 服务端部署了支持分布式身份证的版本并开启了分布式身份认证的功能

### 创建服务管理员

```java
/**
 *
 * 创建服务管理员
 * @throws Exception
 */
void createAdmin() throws Exception {
    //通过递归解析拿到对应前缀的服务器信息，创建IDClient
    IDClient idClient = GlobalIdClientFactory.newInstance("88.111.1");
    String publicKeyPem = "-----BEGIN PUBLIC KEY-----\n" +
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqQhSJmd/fIafPpo40ooIWYmlDTwhFIP5\n" +
        "0QCRRCQLUenHF2f5VY0NSSnxmbUQXkQ7pvPMhH7aBVL6BpsofNkwdsapp5ZwhwXNx7j6UnQRGPZv\n" +
        "pCK3Dxcnr6rbcoXjbCSkxDPDdx/qwNSWIQ/3hTJP9A3EZ9r4CIEoJty5tyGWHMPYIaqrLtvZbaYr\n" +
        "RbmlpOGB7AIWRLLII8bRFNcSZ2qOGhHQ0Hm8axPKlVvWBIzViunHu7Z6KJ+Ef8RVYEJvgmPHH89b\n" +
        "wjM64Q08cN62aXzx132RyZaKSaa8bIYydT+VqJbHT6y1jq2TELXgMGnn+w9aUMJgAzd+6DZ3ISRD\n" +
        "0nL3UwIDAQAB\n" +
        "-----END PUBLIC KEY-----";
    PublicKey publicKey = KeyConverter.fromX509Pem(publicKeyPem);
    ValueHelper valueHelper = ValueHelper.getInstance();
    HandleValue handleValue = valueHelper.newIdisPublicKeyValue(300, publicKey);
    idClient.createHandle("88.111.1/admin",new HandleValue[]{handleValue});
}
```

### 开启 IDHUB 分布式认证

登录 IDHUB 服务器，开启分布式认证，配置参数如下

| 配置项                        | 备注                                       |
| ----------------------------- | ------------------------------------------ |
| teleinfo.idhub.auth.enable    | 开启分布式身份认证，默认关闭               |
| teleinfo.idhub.auth.handle    | 服务管理员（该用户登入后有本服务所有权限） |
| teleinfo.idhub.auth.index     | 服务管理员 Publickey 对应的索引默认 300    |
| teleinfo.idhub.recursive.ip   | 递归节点                                   |
| teleinfo.idhub.recursive.port | 递归节点端口                               |

## 身份认证

### 服务管理员登录

```java
void loginTest() throws Exception {
    String privKeyPem = "-----BEGIN PRIVATE KEY-----\n" +
            "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCpCFImZ398hp8+mjjSighZiaUN\n" +
            "PCEUg/nRAJFEJAtR6ccXZ/lVjQ1JKfGZtRBeRDum88yEftoFUvoGmyh82TB2xqmnlnCHBc3HuPpS\n" +
            "dBEY9m+kIrcPFyevqttyheNsJKTEM8N3H+rA1JYhD/eFMk/0DcRn2vgIgSgm3Lm3IZYcw9ghqqsu\n" +
            "29ltpitFuaWk4YHsAhZEssgjxtEU1xJnao4aEdDQebxrE8qVW9YEjNWK6ce7tnoon4R/xFVgQm+C\n" +
            "Y8cfz1vCMzrhDTxw3rZpfPHXfZHJlopJprxshjJ1P5WolsdPrLWOrZMQteAwaef7D1pQwmADN37o\n" +
            "NnchJEPScvdTAgMBAAECggEAJNK4Or+PSUx2gofMWylQ2lifCTwRJMv/byWFf+euQ6D/Cz1OVvHM\n" +
            "dCTcChUkxLRunlc8NZ0A1+oUp73DWzdhVG7A5M5kIzYDdz/34GCCnQKKnaImaPYtYhqBhfhe698r\n" +
            "ucZhDaF5XZqyPe+hh3XHby5UnB9aq1efrJ+nIZsCfa9dWeZnsFIf1THyuPn6H+yfv1GH3BWtvnpN\n" +
            "92uOBSgnrpVnJJ7WZDHmytjIj/CQhb5pKyXImaOOtOAvQHc8ny+J1jTQLdWinUGm1Zsrzc9IN1zA\n" +
            "jiOXW+J/JBVpRpMWtAkeCeT2aU53RF83gqFC4riLaaVxYEcyKWVs5JQ3IyLq8QKBgQDmXtX4Ziq5\n" +
            "9IIzPgi8nbRlZ7HUawyX3YulBNf6G11r1wYlmROx9HxCbgGT36+mGM7lD6hRborArhGQ6UCX7puf\n" +
            "6X0cavcgZMmuLqUVuRwF+HMA1EONvpoNgHR2+E9RsmCI+kTqy8BktQkhwKUdL5/yh4KdQLlZneUU\n" +
            "OzXAchkXawKBgQC71oX9Kpkg631yGu+z3VR1L7XZyTJkxfhjq9fDtD6uDmGCVVyOISnm/rXzKcZZ\n" +
            "2Mv0fEUs/KNPRzg5ocODOPoJYTNPRQ5fG+qLfiHcoegjWx+56h1dM0e6um0xD7uLJTZLw4BaGLXV\n" +
            "/1Jfw5T/OZzylgp4OdAZn+RKEFGIbTThuQKBgHuJ9gL8fwMz3TKvnK3RgLE0t4erVJiIRV/cRhoo\n" +
            "3KN9Lx2whoBTFOPm7E+pkB9phGIQUHpC5oPHlUH55BrV6X0LEH3R2u7zPbh76SnKF/4Xq0yRiByW\n" +
            "TzTYYxx9ssOj/eLXG2gyld0rvFbuYV1Scdr00pWT5RHq+7MqwXuPdGc7AoGAI93oo9jYeIK+52Th\n" +
            "VHT0xZOgo79ZUgjDTzTm9EWcmlvAnsRx8em/OI52a8IUT9+nwj1gcCClhmPRBqAu1wWwKM5Yn9BN\n" +
            "2DdaZ9xj1t9LlkS2ICfmB3/dOHiUlQOuCfnHDlx8S7fgMMaaEhMkhj+YCnI/+YkAhYQUcVgAWY6Q\n" +
            "xHECgYEAx2yxqhNRrZIqRQvLDWfHu/tvlaDcISBX/HuWE//sqlUG05fFY7DI3r1Va/S5DKf6mueA\n" +
            "ojq/oxjQrsFl3gfOwv9ttjYqfd7vSpojyNbZDdHYtzOkdyrOvpsWlYYn+4ef/qdCHpthsyx4Tv8H\n" +
            "lg/0xZ8oZVr5aJlFPR7uJAQrHdA=\n" +
            "-----END PRIVATE KEY-----";
        PrivateKey privateKey = KeyConverter.fromPkcs8Pem(privKeyPem);
        String adminUserHdl = "88.111.1/admin";
        AuthenticationInfo authenticationInfo = new PublicKeyAuthenticationInfo(Util.encodeString(adminUserHdl), 300, privateKey);
        IDClient idClient = GlobalIdClientFactory.newInstance("88.802.1", authenticationInfo);
        idClient.resolveHandle("88.111.1/admin", null, null);

    }
```

### 服务管理员创建/解析标识

```java
void createTest() throws Exception {
    PrivateKey privateKey = KeyConverter.fromPkcs8Pem(privKeyPem);
    String adminUserHdl = "88.111.1/admin";
    PublicKeyAuthenticationInfo authenticationInfo = new PublicKeyAuthenticationInfo(Util.encodeString(adminUserHdl), 300, privateKey);
    ValueHelper valueHelper = ValueHelper.getInstance();
    IDClient idClient = GlobalIdClientFactory.newInstance("88.111.1", authenticationInfo);
    List<HandleValue> valueList = new ArrayList<>();
    valueList.add(new HandleValue(1,"URL","www.test.com"));
    valueList.add(new HandleValue(2,"EMAIL","test@qq.com"));
    //创建标识
    idClient.createHandle("88.111.1/test",valueHelper.listToArray(valueList));
    //解析标识
    idClient.resolveHandle("88.111.1/test");
    }
```

### 创建标识管理员

```java
void test() throws Exception {
    PrivateKey privateKey = KeyConverter.fromPkcs8Pem(privKeyPem);
    String adminUserHdl = "88.111.1/admin";
    PublicKeyAuthenticationInfo authenticationInfo = new PublicKeyAuthenticationInfo(Util.encodeString(adminUserHdl), 300, privateKey);
    ValueHelper valueHelper = ValueHelper.getInstance();
    IDClient idClient = GlobalIdClientFactory.newInstance("88.111.1", authenticationInfo);
    String publicKeyPem = "-----BEGIN PUBLIC KEY-----\n" +
                "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqQhSJmd/fIafPpo40ooIWYmlDTwhFIP5\n" +
                "0QCRRCQLUenHF2f5VY0NSSnxmbUQXkQ7pvPMhH7aBVL6BpsofNkwdsapp5ZwhwXNx7j6UnQRGPZv\n" +
                "pCK3Dxcnr6rbcoXjbCSkxDPDdx/qwNSWIQ/3hTJP9A3EZ9r4CIEoJty5tyGWHMPYIaqrLtvZbaYr\n" +
                "RbmlpOGB7AIWRLLII8bRFNcSZ2qOGhHQ0Hm8axPKlVvWBIzViunHu7Z6KJ+Ef8RVYEJvgmPHH89b\n" +
                "wjM64Q08cN62aXzx132RyZaKSaa8bIYydT+VqJbHT6y1jq2TELXgMGnn+w9aUMJgAzd+6DZ3ISRD\n" +
                "0nL3UwIDAQAB\n" +
                "-----END PUBLIC KEY-----";
    PublicKey publicKey = KeyConverter.fromX509Pem(publicKeyPem);
    HandleValue handleValue = valueHelper.newIdisPublicKeyValue(300, publicKey);
    //创建标识用户
    idClient.createHandle("88.111.1/user",new HandleValue[]{handleValue});
}
```

### 创建标识并配置标识管理员

```java
void manageTest() throws Exception {
    PrivateKey privateKey = KeyConverter.fromPkcs8Pem(privKeyPem);
    String adminUserHdl = "88.111.1/admin";
    PublicKeyAuthenticationInfo authenticationInfo = new PublicKeyAuthenticationInfo(Util.encodeString(adminUserHdl), 300, privateKey);
    ValueHelper valueHelper = ValueHelper.getInstance();
    IDClient idClient = GlobalIdClientFactory.newInstance("88.111.1", authenticationInfo);
    //添加标识值
    List<HandleValue> valueList = new ArrayList<>();
    HandleValue handleValue = new HandleValue(1, "URL", "www.test.com");
    //设置权限
    handleValue.setAnyoneCanWrite(false);
    handleValue.setAnyoneCanRead(false);
    valueList.add(handleValue);
    //配置标识管理员
    String handleUser = "88.111.1/user";
    valueHelper.newAdminValue(100,handleUser,300);
    String handle = "88.111.1/product";
    idClient.createHandle(handle,valueHelper.listToArray(valueList));
}
```

### 标识用户解析标识

```java
void resolveUserTest() throws Exception {
    PrivateKey privateKey = KeyConverter.fromPkcs8Pem(privKeyPem);
    String adminUserHdl = "88.111.1/user";
    PublicKeyAuthenticationInfo authenticationInfo = new PublicKeyAuthenticationInfo(Util.encodeString(adminUserHdl), 300, privateKey);
    IDClient idClient = GlobalIdClientFactory.newInstance("88.111.1", authenticationInfo);
    String handle = "88.111.1/product";
    idClient.resolveHandle(handle);
}
```

### 创建标识管理员组

```java
void groupCreateTest() throws Exception {
    PrivateKey privateKey = KeyConverter.fromPkcs8Pem(privKeyPem);
    String adminUserHdl = "88.111.1/admin";
    PublicKeyAuthenticationInfo authenticationInfo = new PublicKeyAuthenticationInfo(Util.encodeString(adminUserHdl), 300, privateKey);
    IDClient idClient = GlobalIdClientFactory.newInstance("88.111.1", authenticationInfo);
    ValueHelper valueHelper = ValueHelper.getInstance();
    List<HandleValue> valueList = new ArrayList<>();
    HandleValue hv = new HandleValue(1, "URL", "http://www.teleinfo.cn");
    valueList.add(hv);
    //添加标识管理员,此处可以添加多个标识管理员
    HandleValue adminValue = valueHelper.newAdminValue(100, "88.111.1/user", 200);
    valueList.add(adminValue);
    ValueReference valueReference = new ValueReference("88.111.1/user", 300);

    ValueReference[] valueReferences = new ValueReference[]{valueReference};
    HandleValue handleValue = valueHelper.newHVListValue(200, valueReferences);
    valueList.add(handleValue);
    String handle = "88.111.1/group";
    idClient.createHandle(handle,valueHelper.listToArray(valueList));
}
```

### 创建标识并绑定标识管理员组

```java
void groupBindIDTest() throws Exception {
    PrivateKey privateKey = KeyConverter.fromPkcs8Pem(privKeyPem);
    String adminUserHdl = "88.111.1/admin";
    PublicKeyAuthenticationInfo authenticationInfo = new PublicKeyAuthenticationInfo(Util.encodeString(adminUserHdl), 300, privateKey);
    IDClient idClient = GlobalIdClientFactory.newInstance("88.111.1", authenticationInfo);
    ValueHelper valueHelper = ValueHelper.getInstance();
    List<HandleValue> valueList = new ArrayList<>();

    HandleValue handleValue = new HandleValue(1, "URL", "http://www.teleinfo.cn");
    //设置权限
    handleValue.setAdminCanRead(true);
    handleValue.setAdminCanWrite(true);
    handleValue.setAnyoneCanRead(false);
    handleValue.setAnyoneCanWrite(false);
    valueList.add(handleValue);
    HandleValue handleValue1 = new HandleValue(2, "EMAIL", "test@qq.com");
    valueList.add(handleValue1);
    //标识管理员组
    String userGroup = "88.111.1/group";
    valueList.add(valueHelper.newAdminValue(100,userGroup,200));
    idClient.createHandle("88.111.1/test",valueHelper.listToArray(valueList));
}
```
