# ID-SDK 使用手册

## 1. IDAdaptor 使用

**IDAdaptor**封装了 ID-SDK 功能,通过**IDAdapterFactory**创建**IDAdapter**实 例,**IDAdapter**具有标识解析以及管理操作.

### 1.1. 快速开始

引入依赖,IDAdapter 解析操作示例:

`IdentifierValue[] values = IDAdapterFactory.newInstance().resolve("88.300.15907541011/1");`

### 1.2. IDAdapter 操作

```java
public interface IDAdapter extends Closeable {

    /**
     * 添加一个标识值
     * @param identifier 标识
     * @param values 标识值
     * @throws IdentifierException
     */
    public void addIdentifierValues(String identifier, IdentifierValue[] values) throws IdentifierAdapterException;

    /**
     * 创建一个标识
     * @param identifier 标识
     * @param values 标识值
     * @throws IdentifierAdapterException
     */
    public void createIdentifier(String identifier, IdentifierValue[] values) throws IdentifierAdapterException;

    /**
     * 删除标识值
     * @param identifier
     * @param values
     * @throws IdentifierAdapterException
     */
    public void deleteIdentifierValues(String identifier, IdentifierValue[] values) throws IdentifierAdapterException;

    /**
     * 解析,支持递归解析
     * @param identifier
     * @param types
     * @param indexes
     * @param auth
     * @return
     * @throws IdentifierAdapterException
     */
    public IdentifierValue[] resolve(String identifier, String[] types, int[] indexes, boolean auth) throws IdentifierAdapterException;

    /**
     * 解析,支持递归解析
     * @param identifier
     * @param types
     * @param indexes
     * @return
     * @throws IdentifierAdapterException
     */
    public IdentifierValue[] resolve(String identifier, String[] types, int[] indexes) throws IdentifierAdapterException;

    /**
     * 解析,支持递归解析
     * @param identifier
     * @return
     * @throws IdentifierAdapterException
     */
    public IdentifierValue[] resolve(String identifier) throws IdentifierAdapterException;


    /**
     * 更新标识
     * @param identifier
     * @param values
     * @throws IdentifierAdapterException
     */
    public void updateIdentifierValues(String identifier, IdentifierValue[] values) throws IdentifierAdapterException;

    /**
     * 删除标识
     * @param identifier
     * @throws IdentifierAdapterException
     */
    public void deleteIdentifier(String identifier) throws IdentifierAdapterException;
}
```

### 1.3. IdentifierValue 创建

ValueHelper 定义了一些常用数据类型的创建,包括**HS_PUBKEY** , **HS_ADMIN** , **HS_SIGNATURE** 等.

```java
ValueHelper valueHelper = ValueHelper.getInstance();
IdentifierValue adminValue = valueHelper.newAdminValue(100, handleAdminGroup, 200);
IdentifierValue adminValue = valueHelper.newPublicKeyValue(300, publicKey);

```

### 1.4. 通过前缀解析

**站点信息**是指标识注册解析服务的 ip 地址以及支持协议与端口信 息,**IDAdapterFactory**具有通过公共递归解析站点信息的能力.

例如,通过前缀解析站点信息,然后在目标服务器解析:

```java
IDAdapter idAdapter = IDAdapterFactory.newInstance("192.168.150.37",5647);

IdentifierValue[] values = dapter.resolve("88.300.15907541011/user002",null,null,true);
```

默认的公共递归节点可以通过配置文件配置,配置文件在用户文件下 **.id-sdk/config.json** .也可以通过以下初始化代码进行配置. **ChannelFactory**实 现是单例的,执行了以后新创建的**IDAdapter**的递归请求将会被发送的这个地址.之前创 建的对像应该被合适的处理.

```java
ChannelFactory channelFactory = ChannelFactory.getChannelFactory();

channelFactory.setRecursionServerIp("127.0.0.1");

channelFactory.setRecursionServerPort(2641);
```

## 2. 分布式身份认证

ID-SDK 支持 IDHUB 分布式身份认证。

标识分布式身份认证是指用户的身份信息和用户的权限可以配置在不同服务器上。例如， 用户在企业 A 的服务上注册，但是却可以在企业 B 和企业 C 的服务上配置相应的操作权限。用户在工业互联网体系中全局唯一，但同一个用户却可以在不同企业拥有不同的权限,用户身 份和用户权限是分离的。

IDHUB 支持服务管理员、前缀管理员、标识管理员

`服务管理员`: 可管理 IDHUB 本服务下所有的标识

`前缀管理员`: 可以管理企业前缀下所有的标识

`标识管理员`: 可管理具体的标识

**前提条件**:前缀对应的服务端部署了支持分布式身份认证的版本并开启了分布式身份认证的功能。

### 2.1. 生成服务管理员公私钥对

示例中服务管理员、前缀管理员、标识管理员用到的公私钥对如下，为了安全生产环境请保证每个用户有不同的公私钥

```java
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkdzwtW6Bf6xp3izIjdoOiSIoS+lJyfpC
8xcbObeb0xjNqFX54AesE9M7Sofi2182tWscuYt6a9pw8W61KbylXcGZXcK9P0gcDDsTzegUZPps
S7d0Cf+wxi5Dfvg4pM4oag9B1gi0KnNsnJLQVadBDB5F6NQYQWWQfsASYXm5+iYuSjHIS3XPkqZe
QLxeclXutkxunFvAiFqG/Q4XQTDGIhu80AAr+N+ocThBOkZ1Vp2kWpIInEneg4xPiMeT9Lp3WYnQ
66jeUafwSJy8rmdGEzoQdQnweybV4usNpxH+h/TKUlMj3UP2VVS4UMNHwtzUBfg9qkWNkYoeZr85
PuZC0QIDAQAB
-----END PUBLIC KEY-----
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCR3PC1boF/rGneLMiN2g6JIihL
6UnJ+kLzFxs5t5vTGM2oVfngB6wT0ztKh+LbXza1axy5i3pr2nDxbrUpvKVdwZldwr0/SBwMOxPN
6BRk+mxLt3QJ/7DGLkN++DikzihqD0HWCLQqc2ycktBVp0EMHkXo1BhBZZB+wBJhebn6Ji5KMchL
dc+Spl5AvF5yVe62TG6cW8CIWob9DhdBMMYiG7zQACv436hxOEE6RnVWnaRakgicSd6DjE+Ix5P0
undZidDrqN5Rp/BInLyuZ0YTOhB1CfB7JtXi6w2nEf6H9MpSUyPdQ/ZVVLhQw0fC3NQF+D2qRY2R
ih5mvzk+5kLRAgMBAAECggEAA3hFBZveWsIoNo/MKYuxYtO8L6oaBkL8yrmW/TV/8HKbmdCJxCmK
j2Ir++bln6BRNdmZclR+Egi9PREMIDULngJX+qICTHoTqLrTCsfljE1kvBxeF0rM0roRAvk2p7z7
uyInx8anOodKYyMe75qt8nLZ6OL6vLuEx28cQNNbeDbdC6HN0nNCnF0D2cOUAWrkCBJ/N5NdApPZ
JrphR3N/mbGy3kdajl0kqMepnKKiJs2JIAvSy5oG5RgOfgjUMZN7VQKVi98YFmm7SFxgzcIkJWRx
zDBecjaG6D979pFv2zpASHWdYsi8wPGr785/mBNBGhY5keiYzfyDW2cd3Fz7kQKBgQDY+3XZb9t9
qWodve+2eqgpmlGLu/bFwuHZu6N7WrGfVgaXTgCD4r1EBCu0EMA8BHzsCCIqLxN9RraMLf2esbG0
Q1MRzM7D4cyC72GVXdadWWFIe8FeUa2r48Rz9RbYcGr+HLdFNm1Bfa8td79PGU/l/q8PoTk37j6q
77lTShcUtQKBgQCsF5XDIwULhxm7s/3Kx79ENlSpED9xquSbGRkpJZbJ/PepNMjWmokEtJc+IRwE
NcVuqU+1zCda+la780kEd3hGNUNMl8SZSUxJs0XM0FPq+nKc2Og9qeNjA4UmP6Bvtk9BgFcXkPqU
YazziKV8bU+mtMzEQ3qQqCs1vJHCkqODLQKBgF6Y4rw1RB/46EanNAb+WqoomTyuadu2JvjiEVgK
Jj4tJxp360mUZKdumg8a7nQ8EKpmsV5qv7hyR8u9kUDKf4rzfxfXjp1fp+W9r3GLQ7G98efD7H3O
ZkT2PAPB6n/aIws+QbhvDhrrTKAqAMHfazH+YxwRUfzMZY3ojYd+WamxAoGAC5s7moGOIYznC2XE
RBzcpXkUlKJn5P6llGBI9iF23gCVo2/P68lYXFzhpmsNPKtzuVbp7VTrgpNHrj1mO0rjbbjB5TSH
Kd9rqbzRhFK4lix19mYao64Fi/P80uuPonklN0G0nf5FKCS+SV556r5klNW0ybfTWFY/M8yX+Atz
w7ECgYEAwLPbxhbOEPa5zbOLC3H0/NnebkrmgtREN0bLxoSfg2GNZwzd3u9wX2Cwa7xsRg93dx3G
wpeMZEmIMtj/FKafvFFrF0o1Rr8JtLCO2UOwpO5gdR4San+7VzqIV1dA1nfloKhgwtNU6pqI8lBF
AGFF4wLndoZn4CkO4I8Fd6o1ECQ=
-----END PRIVATE KEY-----
```

### 2.2. 创建服务管理员

服务管理员需要 IDHUB 开启认证前创建，因为开启认证后必须登录才能创建标识

```java
@Test
public void createServerAdmin() throws Exception {
    IDAdapter idAdapter = IDAdapterFactory.newInstance("139.198.126.227", 2891);
    ValueHelper valueHelper = ValueHelper.getInstance();
    IdentifierValue[] values = new IdentifierValue[1];
    String publicKeyPem = "-----BEGIN PUBLIC KEY-----\n" +
            "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkdzwtW6Bf6xp3izIjdoOiSIoS+lJyfpC\n" +
            "8xcbObeb0xjNqFX54AesE9M7Sofi2182tWscuYt6a9pw8W61KbylXcGZXcK9P0gcDDsTzegUZPps\n" +
            "S7d0Cf+wxi5Dfvg4pM4oag9B1gi0KnNsnJLQVadBDB5F6NQYQWWQfsASYXm5+iYuSjHIS3XPkqZe\n" +
            "QLxeclXutkxunFvAiFqG/Q4XQTDGIhu80AAr+N+ocThBOkZ1Vp2kWpIInEneg4xPiMeT9Lp3WYnQ\n" +
            "66jeUafwSJy8rmdGEzoQdQnweybV4usNpxH+h/TKUlMj3UP2VVS4UMNHwtzUBfg9qkWNkYoeZr85\n" +
            "PuZC0QIDAQAB\n" +
            "-----END PUBLIC KEY-----";
    PublicKey publicKey = KeyConverter.fromX509Pem(publicKeyPem);
    values[0] = valueHelper.newPublicKeyValue(300,publicKey);
    idAdapter.createIdentifier("88.111.1/admin", values);
}
```

### 2.3. 开启 IDHUB 分布式认证

登录 IDHUB 服务器，并开启分布式认证，参数如下

|                               |                                              |
| ----------------------------- | -------------------------------------------- |
| teleinfo.idhub.auth.enable    | 开启分布式身份认证，默认关闭                 |
| teleinfo.idhub.auth.handle    | 服务管理员（该用户登入后拥有本服务所有权限） |
| teleinfo.idhub.auth.index     | 服务管理员 PublicKey 对应的索引默认 300      |
| teleinfo.idhub.recursive.ip   | 递归节点                                     |
| teleinfo.idhub.recursive.port | 递归节点端口                                 |

### 2.4. 服务管理员使用

#### 2.4.1 服务管理员登录

用户认证是基于非对称加密算法的,标识解析系统上保存了用户的公钥,认证的过程是证明用 户持有私钥的过程.

```java
@Test
public void serverAdminLogin() throws IOException, IdentifierAdapterException {
    String privateKeyPem = "-----BEGIN PRIVATE KEY-----\n" +
            "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCR3PC1boF/rGneLMiN2g6JIihL\n" +
            "6UnJ+kLzFxs5t5vTGM2oVfngB6wT0ztKh+LbXza1axy5i3pr2nDxbrUpvKVdwZldwr0/SBwMOxPN\n" +
            "6BRk+mxLt3QJ/7DGLkN++DikzihqD0HWCLQqc2ycktBVp0EMHkXo1BhBZZB+wBJhebn6Ji5KMchL\n" +
            "dc+Spl5AvF5yVe62TG6cW8CIWob9DhdBMMYiG7zQACv436hxOEE6RnVWnaRakgicSd6DjE+Ix5P0\n" +
            "undZidDrqN5Rp/BInLyuZ0YTOhB1CfB7JtXi6w2nEf6H9MpSUyPdQ/ZVVLhQw0fC3NQF+D2qRY2R\n" +
            "ih5mvzk+5kLRAgMBAAECggEAA3hFBZveWsIoNo/MKYuxYtO8L6oaBkL8yrmW/TV/8HKbmdCJxCmK\n" +
            "j2Ir++bln6BRNdmZclR+Egi9PREMIDULngJX+qICTHoTqLrTCsfljE1kvBxeF0rM0roRAvk2p7z7\n" +
            "uyInx8anOodKYyMe75qt8nLZ6OL6vLuEx28cQNNbeDbdC6HN0nNCnF0D2cOUAWrkCBJ/N5NdApPZ\n" +
            "JrphR3N/mbGy3kdajl0kqMepnKKiJs2JIAvSy5oG5RgOfgjUMZN7VQKVi98YFmm7SFxgzcIkJWRx\n" +
            "zDBecjaG6D979pFv2zpASHWdYsi8wPGr785/mBNBGhY5keiYzfyDW2cd3Fz7kQKBgQDY+3XZb9t9\n" +
            "qWodve+2eqgpmlGLu/bFwuHZu6N7WrGfVgaXTgCD4r1EBCu0EMA8BHzsCCIqLxN9RraMLf2esbG0\n" +
            "Q1MRzM7D4cyC72GVXdadWWFIe8FeUa2r48Rz9RbYcGr+HLdFNm1Bfa8td79PGU/l/q8PoTk37j6q\n" +
            "77lTShcUtQKBgQCsF5XDIwULhxm7s/3Kx79ENlSpED9xquSbGRkpJZbJ/PepNMjWmokEtJc+IRwE\n" +
            "NcVuqU+1zCda+la780kEd3hGNUNMl8SZSUxJs0XM0FPq+nKc2Og9qeNjA4UmP6Bvtk9BgFcXkPqU\n" +
            "YazziKV8bU+mtMzEQ3qQqCs1vJHCkqODLQKBgF6Y4rw1RB/46EanNAb+WqoomTyuadu2JvjiEVgK\n" +
            "Jj4tJxp360mUZKdumg8a7nQ8EKpmsV5qv7hyR8u9kUDKf4rzfxfXjp1fp+W9r3GLQ7G98efD7H3O\n" +
            "ZkT2PAPB6n/aIws+QbhvDhrrTKAqAMHfazH+YxwRUfzMZY3ojYd+WamxAoGAC5s7moGOIYznC2XE\n" +
            "RBzcpXkUlKJn5P6llGBI9iF23gCVo2/P68lYXFzhpmsNPKtzuVbp7VTrgpNHrj1mO0rjbbjB5TSH\n" +
            "Kd9rqbzRhFK4lix19mYao64Fi/P80uuPonklN0G0nf5FKCS+SV556r5klNW0ybfTWFY/M8yX+Atz\n" +
            "w7ECgYEAwLPbxhbOEPa5zbOLC3H0/NnebkrmgtREN0bLxoSfg2GNZwzd3u9wX2Cwa7xsRg93dx3G\n" +
            "wpeMZEmIMtj/FKafvFFrF0o1Rr8JtLCO2UOwpO5gdR4San+7VzqIV1dA1nfloKhgwtNU6pqI8lBF\n" +
            "AGFF4wLndoZn4CkO4I8Fd6o1ECQ=\n" +
            "-----END PRIVATE KEY-----";
    IDAdapter idAdapter = IDAdapterFactory.newInstance("139.198.126.227",2891,"88.111.1/admin",300,privateKeyPem,1);
}
```

#### 2.4.2 服务管理员创建标识

创建标识时设置类型为 URL 的标识值没有公共读写权限，此时递归解析时不会解析出来这个标识值，只有认证通过后才能解析到标识值

```java
@Test
public void serverAdminCreateHandle() throws Exception {
    String privateKeyPem = "-----BEGIN PRIVATE KEY-----\n" +
            "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCR3PC1boF/rGneLMiN2g6JIihL\n" +
            "6UnJ+kLzFxs5t5vTGM2oVfngB6wT0ztKh+LbXza1axy5i3pr2nDxbrUpvKVdwZldwr0/SBwMOxPN\n" +
            "6BRk+mxLt3QJ/7DGLkN++DikzihqD0HWCLQqc2ycktBVp0EMHkXo1BhBZZB+wBJhebn6Ji5KMchL\n" +
            "dc+Spl5AvF5yVe62TG6cW8CIWob9DhdBMMYiG7zQACv436hxOEE6RnVWnaRakgicSd6DjE+Ix5P0\n" +
            "undZidDrqN5Rp/BInLyuZ0YTOhB1CfB7JtXi6w2nEf6H9MpSUyPdQ/ZVVLhQw0fC3NQF+D2qRY2R\n" +
            "ih5mvzk+5kLRAgMBAAECggEAA3hFBZveWsIoNo/MKYuxYtO8L6oaBkL8yrmW/TV/8HKbmdCJxCmK\n" +
            "j2Ir++bln6BRNdmZclR+Egi9PREMIDULngJX+qICTHoTqLrTCsfljE1kvBxeF0rM0roRAvk2p7z7\n" +
            "uyInx8anOodKYyMe75qt8nLZ6OL6vLuEx28cQNNbeDbdC6HN0nNCnF0D2cOUAWrkCBJ/N5NdApPZ\n" +
            "JrphR3N/mbGy3kdajl0kqMepnKKiJs2JIAvSy5oG5RgOfgjUMZN7VQKVi98YFmm7SFxgzcIkJWRx\n" +
            "zDBecjaG6D979pFv2zpASHWdYsi8wPGr785/mBNBGhY5keiYzfyDW2cd3Fz7kQKBgQDY+3XZb9t9\n" +
            "qWodve+2eqgpmlGLu/bFwuHZu6N7WrGfVgaXTgCD4r1EBCu0EMA8BHzsCCIqLxN9RraMLf2esbG0\n" +
            "Q1MRzM7D4cyC72GVXdadWWFIe8FeUa2r48Rz9RbYcGr+HLdFNm1Bfa8td79PGU/l/q8PoTk37j6q\n" +
            "77lTShcUtQKBgQCsF5XDIwULhxm7s/3Kx79ENlSpED9xquSbGRkpJZbJ/PepNMjWmokEtJc+IRwE\n" +
            "NcVuqU+1zCda+la780kEd3hGNUNMl8SZSUxJs0XM0FPq+nKc2Og9qeNjA4UmP6Bvtk9BgFcXkPqU\n" +
            "YazziKV8bU+mtMzEQ3qQqCs1vJHCkqODLQKBgF6Y4rw1RB/46EanNAb+WqoomTyuadu2JvjiEVgK\n" +
            "Jj4tJxp360mUZKdumg8a7nQ8EKpmsV5qv7hyR8u9kUDKf4rzfxfXjp1fp+W9r3GLQ7G98efD7H3O\n" +
            "ZkT2PAPB6n/aIws+QbhvDhrrTKAqAMHfazH+YxwRUfzMZY3ojYd+WamxAoGAC5s7moGOIYznC2XE\n" +
            "RBzcpXkUlKJn5P6llGBI9iF23gCVo2/P68lYXFzhpmsNPKtzuVbp7VTrgpNHrj1mO0rjbbjB5TSH\n" +
            "Kd9rqbzRhFK4lix19mYao64Fi/P80uuPonklN0G0nf5FKCS+SV556r5klNW0ybfTWFY/M8yX+Atz\n" +
            "w7ECgYEAwLPbxhbOEPa5zbOLC3H0/NnebkrmgtREN0bLxoSfg2GNZwzd3u9wX2Cwa7xsRg93dx3G\n" +
            "wpeMZEmIMtj/FKafvFFrF0o1Rr8JtLCO2UOwpO5gdR4San+7VzqIV1dA1nfloKhgwtNU6pqI8lBF\n" +
            "AGFF4wLndoZn4CkO4I8Fd6o1ECQ=\n" +
            "-----END PRIVATE KEY-----";
    IDAdapter idAdapter = IDAdapterFactory.newInstance("139.198.126.227",2891,"88.111.1/admin",300,privateKeyPem,1);
    ValueHelper valueHelper = ValueHelper.getInstance();
    String identifier = "88.111.1/company";

    List<IdentifierValue> values = new ArrayList<>();
    // 创建公共读写权限的值
    values.add(new IdentifierValue(1, "EMAIL", "test@email.com"));
    // 创建没有公共读写权限的值，解析时如没有认证则不能看到此Value
    IdentifierValue value =new IdentifierValue(2, "URL", "https://www.citln.cn/");
    value.setPublicRead(false);
    value.setPublicWrite(false);
    values.add(value);
    idAdapter.createIdentifier(identifier, valueHelper.listToArray(values));
}
```

#### 2.4.3 服务管理员解析标识

管理员登录后可以解析到改标识所有的标识值

```java
@Test
public void serverAdminResolveHandle() throws IOException, IdentifierAdapterException {
    String privateKeyPem = "-----BEGIN PRIVATE KEY-----\n" +
            "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCR3PC1boF/rGneLMiN2g6JIihL\n" +
            "6UnJ+kLzFxs5t5vTGM2oVfngB6wT0ztKh+LbXza1axy5i3pr2nDxbrUpvKVdwZldwr0/SBwMOxPN\n" +
            "6BRk+mxLt3QJ/7DGLkN++DikzihqD0HWCLQqc2ycktBVp0EMHkXo1BhBZZB+wBJhebn6Ji5KMchL\n" +
            "dc+Spl5AvF5yVe62TG6cW8CIWob9DhdBMMYiG7zQACv436hxOEE6RnVWnaRakgicSd6DjE+Ix5P0\n" +
            "undZidDrqN5Rp/BInLyuZ0YTOhB1CfB7JtXi6w2nEf6H9MpSUyPdQ/ZVVLhQw0fC3NQF+D2qRY2R\n" +
            "ih5mvzk+5kLRAgMBAAECggEAA3hFBZveWsIoNo/MKYuxYtO8L6oaBkL8yrmW/TV/8HKbmdCJxCmK\n" +
            "j2Ir++bln6BRNdmZclR+Egi9PREMIDULngJX+qICTHoTqLrTCsfljE1kvBxeF0rM0roRAvk2p7z7\n" +
            "uyInx8anOodKYyMe75qt8nLZ6OL6vLuEx28cQNNbeDbdC6HN0nNCnF0D2cOUAWrkCBJ/N5NdApPZ\n" +
            "JrphR3N/mbGy3kdajl0kqMepnKKiJs2JIAvSy5oG5RgOfgjUMZN7VQKVi98YFmm7SFxgzcIkJWRx\n" +
            "zDBecjaG6D979pFv2zpASHWdYsi8wPGr785/mBNBGhY5keiYzfyDW2cd3Fz7kQKBgQDY+3XZb9t9\n" +
            "qWodve+2eqgpmlGLu/bFwuHZu6N7WrGfVgaXTgCD4r1EBCu0EMA8BHzsCCIqLxN9RraMLf2esbG0\n" +
            "Q1MRzM7D4cyC72GVXdadWWFIe8FeUa2r48Rz9RbYcGr+HLdFNm1Bfa8td79PGU/l/q8PoTk37j6q\n" +
            "77lTShcUtQKBgQCsF5XDIwULhxm7s/3Kx79ENlSpED9xquSbGRkpJZbJ/PepNMjWmokEtJc+IRwE\n" +
            "NcVuqU+1zCda+la780kEd3hGNUNMl8SZSUxJs0XM0FPq+nKc2Og9qeNjA4UmP6Bvtk9BgFcXkPqU\n" +
            "YazziKV8bU+mtMzEQ3qQqCs1vJHCkqODLQKBgF6Y4rw1RB/46EanNAb+WqoomTyuadu2JvjiEVgK\n" +
            "Jj4tJxp360mUZKdumg8a7nQ8EKpmsV5qv7hyR8u9kUDKf4rzfxfXjp1fp+W9r3GLQ7G98efD7H3O\n" +
            "ZkT2PAPB6n/aIws+QbhvDhrrTKAqAMHfazH+YxwRUfzMZY3ojYd+WamxAoGAC5s7moGOIYznC2XE\n" +
            "RBzcpXkUlKJn5P6llGBI9iF23gCVo2/P68lYXFzhpmsNPKtzuVbp7VTrgpNHrj1mO0rjbbjB5TSH\n" +
            "Kd9rqbzRhFK4lix19mYao64Fi/P80uuPonklN0G0nf5FKCS+SV556r5klNW0ybfTWFY/M8yX+Atz\n" +
            "w7ECgYEAwLPbxhbOEPa5zbOLC3H0/NnebkrmgtREN0bLxoSfg2GNZwzd3u9wX2Cwa7xsRg93dx3G\n" +
            "wpeMZEmIMtj/FKafvFFrF0o1Rr8JtLCO2UOwpO5gdR4San+7VzqIV1dA1nfloKhgwtNU6pqI8lBF\n" +
            "AGFF4wLndoZn4CkO4I8Fd6o1ECQ=\n" +
            "-----END PRIVATE KEY-----";
    IDAdapter idAdapter = IDAdapterFactory.newInstance("139.198.126.227",2891,"88.111.1/admin",300,privateKeyPem,1);
    String identifier = "88.111.1/company";
    IdentifierValue[] values = idAdapter.resolve(identifier);
}
```

### 2.5. 标识管理员使用

#### 2.5.1 创建标识管理员

```java
@Test
public void createHandleAdmin() throws Exception {
    String privateKeyPem = "-----BEGIN PRIVATE KEY-----\n" +
            "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCR3PC1boF/rGneLMiN2g6JIihL\n" +
            "6UnJ+kLzFxs5t5vTGM2oVfngB6wT0ztKh+LbXza1axy5i3pr2nDxbrUpvKVdwZldwr0/SBwMOxPN\n" +
            "6BRk+mxLt3QJ/7DGLkN++DikzihqD0HWCLQqc2ycktBVp0EMHkXo1BhBZZB+wBJhebn6Ji5KMchL\n" +
            "dc+Spl5AvF5yVe62TG6cW8CIWob9DhdBMMYiG7zQACv436hxOEE6RnVWnaRakgicSd6DjE+Ix5P0\n" +
            "undZidDrqN5Rp/BInLyuZ0YTOhB1CfB7JtXi6w2nEf6H9MpSUyPdQ/ZVVLhQw0fC3NQF+D2qRY2R\n" +
            "ih5mvzk+5kLRAgMBAAECggEAA3hFBZveWsIoNo/MKYuxYtO8L6oaBkL8yrmW/TV/8HKbmdCJxCmK\n" +
            "j2Ir++bln6BRNdmZclR+Egi9PREMIDULngJX+qICTHoTqLrTCsfljE1kvBxeF0rM0roRAvk2p7z7\n" +
            "uyInx8anOodKYyMe75qt8nLZ6OL6vLuEx28cQNNbeDbdC6HN0nNCnF0D2cOUAWrkCBJ/N5NdApPZ\n" +
            "JrphR3N/mbGy3kdajl0kqMepnKKiJs2JIAvSy5oG5RgOfgjUMZN7VQKVi98YFmm7SFxgzcIkJWRx\n" +
            "zDBecjaG6D979pFv2zpASHWdYsi8wPGr785/mBNBGhY5keiYzfyDW2cd3Fz7kQKBgQDY+3XZb9t9\n" +
            "qWodve+2eqgpmlGLu/bFwuHZu6N7WrGfVgaXTgCD4r1EBCu0EMA8BHzsCCIqLxN9RraMLf2esbG0\n" +
            "Q1MRzM7D4cyC72GVXdadWWFIe8FeUa2r48Rz9RbYcGr+HLdFNm1Bfa8td79PGU/l/q8PoTk37j6q\n" +
            "77lTShcUtQKBgQCsF5XDIwULhxm7s/3Kx79ENlSpED9xquSbGRkpJZbJ/PepNMjWmokEtJc+IRwE\n" +
            "NcVuqU+1zCda+la780kEd3hGNUNMl8SZSUxJs0XM0FPq+nKc2Og9qeNjA4UmP6Bvtk9BgFcXkPqU\n" +
            "YazziKV8bU+mtMzEQ3qQqCs1vJHCkqODLQKBgF6Y4rw1RB/46EanNAb+WqoomTyuadu2JvjiEVgK\n" +
            "Jj4tJxp360mUZKdumg8a7nQ8EKpmsV5qv7hyR8u9kUDKf4rzfxfXjp1fp+W9r3GLQ7G98efD7H3O\n" +
            "ZkT2PAPB6n/aIws+QbhvDhrrTKAqAMHfazH+YxwRUfzMZY3ojYd+WamxAoGAC5s7moGOIYznC2XE\n" +
            "RBzcpXkUlKJn5P6llGBI9iF23gCVo2/P68lYXFzhpmsNPKtzuVbp7VTrgpNHrj1mO0rjbbjB5TSH\n" +
            "Kd9rqbzRhFK4lix19mYao64Fi/P80uuPonklN0G0nf5FKCS+SV556r5klNW0ybfTWFY/M8yX+Atz\n" +
            "w7ECgYEAwLPbxhbOEPa5zbOLC3H0/NnebkrmgtREN0bLxoSfg2GNZwzd3u9wX2Cwa7xsRg93dx3G\n" +
            "wpeMZEmIMtj/FKafvFFrF0o1Rr8JtLCO2UOwpO5gdR4San+7VzqIV1dA1nfloKhgwtNU6pqI8lBF\n" +
            "AGFF4wLndoZn4CkO4I8Fd6o1ECQ=\n" +
            "-----END PRIVATE KEY-----";
    IDAdapter idAdapter = IDAdapterFactory.newInstance("139.198.126.227",2891,"88.111.1/admin",300,privateKeyPem,1);
    ValueHelper valueHelper = ValueHelper.getInstance();
    IdentifierValue[] values = new IdentifierValue[1];
    String publicKeyPem = "-----BEGIN PUBLIC KEY-----\n" +
            "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkdzwtW6Bf6xp3izIjdoOiSIoS+lJyfpC\n" +
            "8xcbObeb0xjNqFX54AesE9M7Sofi2182tWscuYt6a9pw8W61KbylXcGZXcK9P0gcDDsTzegUZPps\n" +
            "S7d0Cf+wxi5Dfvg4pM4oag9B1gi0KnNsnJLQVadBDB5F6NQYQWWQfsASYXm5+iYuSjHIS3XPkqZe\n" +
            "QLxeclXutkxunFvAiFqG/Q4XQTDGIhu80AAr+N+ocThBOkZ1Vp2kWpIInEneg4xPiMeT9Lp3WYnQ\n" +
            "66jeUafwSJy8rmdGEzoQdQnweybV4usNpxH+h/TKUlMj3UP2VVS4UMNHwtzUBfg9qkWNkYoeZr85\n" +
            "PuZC0QIDAQAB\n" +
            "-----END PUBLIC KEY-----";
    PublicKey publicKey = KeyConverter.fromX509Pem(publicKeyPem);
    values[0] = valueHelper.newPublicKeyValue(300,publicKey);
    String identifier = "88.111.1/user";
    idAdapter.createIdentifier(identifier, values);
}
```

#### 2.5.2 创建标识并配置标识管理员

```java
@Test
public void createHandleBindHandleAdmin() throws Exception {
    // 登录服务管理员
    String privateKeyPem = "-----BEGIN PRIVATE KEY-----\n" +
            "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCR3PC1boF/rGneLMiN2g6JIihL\n" +
            "6UnJ+kLzFxs5t5vTGM2oVfngB6wT0ztKh+LbXza1axy5i3pr2nDxbrUpvKVdwZldwr0/SBwMOxPN\n" +
            "6BRk+mxLt3QJ/7DGLkN++DikzihqD0HWCLQqc2ycktBVp0EMHkXo1BhBZZB+wBJhebn6Ji5KMchL\n" +
            "dc+Spl5AvF5yVe62TG6cW8CIWob9DhdBMMYiG7zQACv436hxOEE6RnVWnaRakgicSd6DjE+Ix5P0\n" +
            "undZidDrqN5Rp/BInLyuZ0YTOhB1CfB7JtXi6w2nEf6H9MpSUyPdQ/ZVVLhQw0fC3NQF+D2qRY2R\n" +
            "ih5mvzk+5kLRAgMBAAECggEAA3hFBZveWsIoNo/MKYuxYtO8L6oaBkL8yrmW/TV/8HKbmdCJxCmK\n" +
            "j2Ir++bln6BRNdmZclR+Egi9PREMIDULngJX+qICTHoTqLrTCsfljE1kvBxeF0rM0roRAvk2p7z7\n" +
            "uyInx8anOodKYyMe75qt8nLZ6OL6vLuEx28cQNNbeDbdC6HN0nNCnF0D2cOUAWrkCBJ/N5NdApPZ\n" +
            "JrphR3N/mbGy3kdajl0kqMepnKKiJs2JIAvSy5oG5RgOfgjUMZN7VQKVi98YFmm7SFxgzcIkJWRx\n" +
            "zDBecjaG6D979pFv2zpASHWdYsi8wPGr785/mBNBGhY5keiYzfyDW2cd3Fz7kQKBgQDY+3XZb9t9\n" +
            "qWodve+2eqgpmlGLu/bFwuHZu6N7WrGfVgaXTgCD4r1EBCu0EMA8BHzsCCIqLxN9RraMLf2esbG0\n" +
            "Q1MRzM7D4cyC72GVXdadWWFIe8FeUa2r48Rz9RbYcGr+HLdFNm1Bfa8td79PGU/l/q8PoTk37j6q\n" +
            "77lTShcUtQKBgQCsF5XDIwULhxm7s/3Kx79ENlSpED9xquSbGRkpJZbJ/PepNMjWmokEtJc+IRwE\n" +
            "NcVuqU+1zCda+la780kEd3hGNUNMl8SZSUxJs0XM0FPq+nKc2Og9qeNjA4UmP6Bvtk9BgFcXkPqU\n" +
            "YazziKV8bU+mtMzEQ3qQqCs1vJHCkqODLQKBgF6Y4rw1RB/46EanNAb+WqoomTyuadu2JvjiEVgK\n" +
            "Jj4tJxp360mUZKdumg8a7nQ8EKpmsV5qv7hyR8u9kUDKf4rzfxfXjp1fp+W9r3GLQ7G98efD7H3O\n" +
            "ZkT2PAPB6n/aIws+QbhvDhrrTKAqAMHfazH+YxwRUfzMZY3ojYd+WamxAoGAC5s7moGOIYznC2XE\n" +
            "RBzcpXkUlKJn5P6llGBI9iF23gCVo2/P68lYXFzhpmsNPKtzuVbp7VTrgpNHrj1mO0rjbbjB5TSH\n" +
            "Kd9rqbzRhFK4lix19mYao64Fi/P80uuPonklN0G0nf5FKCS+SV556r5klNW0ybfTWFY/M8yX+Atz\n" +
            "w7ECgYEAwLPbxhbOEPa5zbOLC3H0/NnebkrmgtREN0bLxoSfg2GNZwzd3u9wX2Cwa7xsRg93dx3G\n" +
            "wpeMZEmIMtj/FKafvFFrF0o1Rr8JtLCO2UOwpO5gdR4San+7VzqIV1dA1nfloKhgwtNU6pqI8lBF\n" +
            "AGFF4wLndoZn4CkO4I8Fd6o1ECQ=\n" +
            "-----END PRIVATE KEY-----";
    IDAdapter idAdapter = IDAdapterFactory.newInstance("139.198.126.227",2891,"88.111.1/admin",300,privateKeyPem,1);
    ValueHelper valueHelper = ValueHelper.getInstance();
    List<IdentifierValue> values = new ArrayList<>();
    // 创建公共读写权限的值
    values.add(new IdentifierValue(1, "EMAIL", "test@email.com"));
    // 创建没有公共读写权限的值，解析时如没有认证则不能看到此Value
    IdentifierValue value =new IdentifierValue(2, "URL", "https://www.citln.cn/");
    value.setPublicRead(false);
    value.setPublicWrite(false);
    values.add(value);
    // 配置标识管理员
    String handleUser = "88.111.1/user";
    values.add(valueHelper.newAdminValue(100,handleUser,300));
    String identifier = "88.111.1/product";
    idAdapter.createIdentifier(identifier, valueHelper.listToArray(values));
}
```

#### 2.5.3 标识用户解析标识

标识管理员登录后可以解析出来所有标识值

```java
@Test
public void handleAdminResolveHandle() throws IdentifierAdapterException {
    String privateKeyPem = "-----BEGIN PRIVATE KEY-----\n" +
            "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCR3PC1boF/rGneLMiN2g6JIihL\n" +
            "6UnJ+kLzFxs5t5vTGM2oVfngB6wT0ztKh+LbXza1axy5i3pr2nDxbrUpvKVdwZldwr0/SBwMOxPN\n" +
            "6BRk+mxLt3QJ/7DGLkN++DikzihqD0HWCLQqc2ycktBVp0EMHkXo1BhBZZB+wBJhebn6Ji5KMchL\n" +
            "dc+Spl5AvF5yVe62TG6cW8CIWob9DhdBMMYiG7zQACv436hxOEE6RnVWnaRakgicSd6DjE+Ix5P0\n" +
            "undZidDrqN5Rp/BInLyuZ0YTOhB1CfB7JtXi6w2nEf6H9MpSUyPdQ/ZVVLhQw0fC3NQF+D2qRY2R\n" +
            "ih5mvzk+5kLRAgMBAAECggEAA3hFBZveWsIoNo/MKYuxYtO8L6oaBkL8yrmW/TV/8HKbmdCJxCmK\n" +
            "j2Ir++bln6BRNdmZclR+Egi9PREMIDULngJX+qICTHoTqLrTCsfljE1kvBxeF0rM0roRAvk2p7z7\n" +
            "uyInx8anOodKYyMe75qt8nLZ6OL6vLuEx28cQNNbeDbdC6HN0nNCnF0D2cOUAWrkCBJ/N5NdApPZ\n" +
            "JrphR3N/mbGy3kdajl0kqMepnKKiJs2JIAvSy5oG5RgOfgjUMZN7VQKVi98YFmm7SFxgzcIkJWRx\n" +
            "zDBecjaG6D979pFv2zpASHWdYsi8wPGr785/mBNBGhY5keiYzfyDW2cd3Fz7kQKBgQDY+3XZb9t9\n" +
            "qWodve+2eqgpmlGLu/bFwuHZu6N7WrGfVgaXTgCD4r1EBCu0EMA8BHzsCCIqLxN9RraMLf2esbG0\n" +
            "Q1MRzM7D4cyC72GVXdadWWFIe8FeUa2r48Rz9RbYcGr+HLdFNm1Bfa8td79PGU/l/q8PoTk37j6q\n" +
            "77lTShcUtQKBgQCsF5XDIwULhxm7s/3Kx79ENlSpED9xquSbGRkpJZbJ/PepNMjWmokEtJc+IRwE\n" +
            "NcVuqU+1zCda+la780kEd3hGNUNMl8SZSUxJs0XM0FPq+nKc2Og9qeNjA4UmP6Bvtk9BgFcXkPqU\n" +
            "YazziKV8bU+mtMzEQ3qQqCs1vJHCkqODLQKBgF6Y4rw1RB/46EanNAb+WqoomTyuadu2JvjiEVgK\n" +
            "Jj4tJxp360mUZKdumg8a7nQ8EKpmsV5qv7hyR8u9kUDKf4rzfxfXjp1fp+W9r3GLQ7G98efD7H3O\n" +
            "ZkT2PAPB6n/aIws+QbhvDhrrTKAqAMHfazH+YxwRUfzMZY3ojYd+WamxAoGAC5s7moGOIYznC2XE\n" +
            "RBzcpXkUlKJn5P6llGBI9iF23gCVo2/P68lYXFzhpmsNPKtzuVbp7VTrgpNHrj1mO0rjbbjB5TSH\n" +
            "Kd9rqbzRhFK4lix19mYao64Fi/P80uuPonklN0G0nf5FKCS+SV556r5klNW0ybfTWFY/M8yX+Atz\n" +
            "w7ECgYEAwLPbxhbOEPa5zbOLC3H0/NnebkrmgtREN0bLxoSfg2GNZwzd3u9wX2Cwa7xsRg93dx3G\n" +
            "wpeMZEmIMtj/FKafvFFrF0o1Rr8JtLCO2UOwpO5gdR4San+7VzqIV1dA1nfloKhgwtNU6pqI8lBF\n" +
            "AGFF4wLndoZn4CkO4I8Fd6o1ECQ=\n" +
            "-----END PRIVATE KEY-----";
    IDAdapter idAdapter = IDAdapterFactory.newInstance("139.198.126.227",2891,"88.111.1/user",300,privateKeyPem,1);
    String identifier = "88.111.1/product";
    IdentifierValue[] values = idAdapter.resolve(identifier);
}
```

### 2.6. 标识管理员组使用

#### 2.6.1 创建标识管理员组

创建标识管理员组，标识管理员组内可以添加多个标识管理员

```java
@Test
public void createHandleAdminGroup() throws Exception {
    String privateKeyPem = "-----BEGIN PRIVATE KEY-----\n" +
            "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCR3PC1boF/rGneLMiN2g6JIihL\n" +
            "6UnJ+kLzFxs5t5vTGM2oVfngB6wT0ztKh+LbXza1axy5i3pr2nDxbrUpvKVdwZldwr0/SBwMOxPN\n" +
            "6BRk+mxLt3QJ/7DGLkN++DikzihqD0HWCLQqc2ycktBVp0EMHkXo1BhBZZB+wBJhebn6Ji5KMchL\n" +
            "dc+Spl5AvF5yVe62TG6cW8CIWob9DhdBMMYiG7zQACv436hxOEE6RnVWnaRakgicSd6DjE+Ix5P0\n" +
            "undZidDrqN5Rp/BInLyuZ0YTOhB1CfB7JtXi6w2nEf6H9MpSUyPdQ/ZVVLhQw0fC3NQF+D2qRY2R\n" +
            "ih5mvzk+5kLRAgMBAAECggEAA3hFBZveWsIoNo/MKYuxYtO8L6oaBkL8yrmW/TV/8HKbmdCJxCmK\n" +
            "j2Ir++bln6BRNdmZclR+Egi9PREMIDULngJX+qICTHoTqLrTCsfljE1kvBxeF0rM0roRAvk2p7z7\n" +
            "uyInx8anOodKYyMe75qt8nLZ6OL6vLuEx28cQNNbeDbdC6HN0nNCnF0D2cOUAWrkCBJ/N5NdApPZ\n" +
            "JrphR3N/mbGy3kdajl0kqMepnKKiJs2JIAvSy5oG5RgOfgjUMZN7VQKVi98YFmm7SFxgzcIkJWRx\n" +
            "zDBecjaG6D979pFv2zpASHWdYsi8wPGr785/mBNBGhY5keiYzfyDW2cd3Fz7kQKBgQDY+3XZb9t9\n" +
            "qWodve+2eqgpmlGLu/bFwuHZu6N7WrGfVgaXTgCD4r1EBCu0EMA8BHzsCCIqLxN9RraMLf2esbG0\n" +
            "Q1MRzM7D4cyC72GVXdadWWFIe8FeUa2r48Rz9RbYcGr+HLdFNm1Bfa8td79PGU/l/q8PoTk37j6q\n" +
            "77lTShcUtQKBgQCsF5XDIwULhxm7s/3Kx79ENlSpED9xquSbGRkpJZbJ/PepNMjWmokEtJc+IRwE\n" +
            "NcVuqU+1zCda+la780kEd3hGNUNMl8SZSUxJs0XM0FPq+nKc2Og9qeNjA4UmP6Bvtk9BgFcXkPqU\n" +
            "YazziKV8bU+mtMzEQ3qQqCs1vJHCkqODLQKBgF6Y4rw1RB/46EanNAb+WqoomTyuadu2JvjiEVgK\n" +
            "Jj4tJxp360mUZKdumg8a7nQ8EKpmsV5qv7hyR8u9kUDKf4rzfxfXjp1fp+W9r3GLQ7G98efD7H3O\n" +
            "ZkT2PAPB6n/aIws+QbhvDhrrTKAqAMHfazH+YxwRUfzMZY3ojYd+WamxAoGAC5s7moGOIYznC2XE\n" +
            "RBzcpXkUlKJn5P6llGBI9iF23gCVo2/P68lYXFzhpmsNPKtzuVbp7VTrgpNHrj1mO0rjbbjB5TSH\n" +
            "Kd9rqbzRhFK4lix19mYao64Fi/P80uuPonklN0G0nf5FKCS+SV556r5klNW0ybfTWFY/M8yX+Atz\n" +
            "w7ECgYEAwLPbxhbOEPa5zbOLC3H0/NnebkrmgtREN0bLxoSfg2GNZwzd3u9wX2Cwa7xsRg93dx3G\n" +
            "wpeMZEmIMtj/FKafvFFrF0o1Rr8JtLCO2UOwpO5gdR4San+7VzqIV1dA1nfloKhgwtNU6pqI8lBF\n" +
            "AGFF4wLndoZn4CkO4I8Fd6o1ECQ=\n" +
            "-----END PRIVATE KEY-----";
    IDAdapter idAdapter = IDAdapterFactory.newInstance("139.198.126.227",2891,"88.111.1/admin",300,privateKeyPem,1);
    ValueHelper valueHelper = ValueHelper.getInstance();
    ArrayList<IdentifierValue> valueList = new ArrayList<>();
    // HS_VLIST
    ArrayList<ValueReference> referenceList = new ArrayList<>();
    // 向标识组中添加标识管理员，此处可添加多个标识管理员
    referenceList.add(new ValueReference("88.111.1/user", 300));
    ValueReference[] valueReferences = new ValueReference[referenceList.size()];
    referenceList.toArray(valueReferences);
    valueList.add(valueHelper.newVListValue(200, valueReferences));
    // 创建标识
    String identifier = "88.111.1/group";
    idAdapter.createIdentifier(identifier, valueHelper.listToArray(valueList));
}
```

#### 2.6.2 创建标识绑定标识管理员组

标识创建时可以绑定标识管理员组，标识管理员组内的成员可以动态调整

```java
@Test
public void createHandleBindHandleAdminGroup() throws Exception {
    // 登录服务管理员
    String privateKeyPem = "-----BEGIN PRIVATE KEY-----\n" +
            "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCR3PC1boF/rGneLMiN2g6JIihL\n" +
            "6UnJ+kLzFxs5t5vTGM2oVfngB6wT0ztKh+LbXza1axy5i3pr2nDxbrUpvKVdwZldwr0/SBwMOxPN\n" +
            "6BRk+mxLt3QJ/7DGLkN++DikzihqD0HWCLQqc2ycktBVp0EMHkXo1BhBZZB+wBJhebn6Ji5KMchL\n" +
            "dc+Spl5AvF5yVe62TG6cW8CIWob9DhdBMMYiG7zQACv436hxOEE6RnVWnaRakgicSd6DjE+Ix5P0\n" +
            "undZidDrqN5Rp/BInLyuZ0YTOhB1CfB7JtXi6w2nEf6H9MpSUyPdQ/ZVVLhQw0fC3NQF+D2qRY2R\n" +
            "ih5mvzk+5kLRAgMBAAECggEAA3hFBZveWsIoNo/MKYuxYtO8L6oaBkL8yrmW/TV/8HKbmdCJxCmK\n" +
            "j2Ir++bln6BRNdmZclR+Egi9PREMIDULngJX+qICTHoTqLrTCsfljE1kvBxeF0rM0roRAvk2p7z7\n" +
            "uyInx8anOodKYyMe75qt8nLZ6OL6vLuEx28cQNNbeDbdC6HN0nNCnF0D2cOUAWrkCBJ/N5NdApPZ\n" +
            "JrphR3N/mbGy3kdajl0kqMepnKKiJs2JIAvSy5oG5RgOfgjUMZN7VQKVi98YFmm7SFxgzcIkJWRx\n" +
            "zDBecjaG6D979pFv2zpASHWdYsi8wPGr785/mBNBGhY5keiYzfyDW2cd3Fz7kQKBgQDY+3XZb9t9\n" +
            "qWodve+2eqgpmlGLu/bFwuHZu6N7WrGfVgaXTgCD4r1EBCu0EMA8BHzsCCIqLxN9RraMLf2esbG0\n" +
            "Q1MRzM7D4cyC72GVXdadWWFIe8FeUa2r48Rz9RbYcGr+HLdFNm1Bfa8td79PGU/l/q8PoTk37j6q\n" +
            "77lTShcUtQKBgQCsF5XDIwULhxm7s/3Kx79ENlSpED9xquSbGRkpJZbJ/PepNMjWmokEtJc+IRwE\n" +
            "NcVuqU+1zCda+la780kEd3hGNUNMl8SZSUxJs0XM0FPq+nKc2Og9qeNjA4UmP6Bvtk9BgFcXkPqU\n" +
            "YazziKV8bU+mtMzEQ3qQqCs1vJHCkqODLQKBgF6Y4rw1RB/46EanNAb+WqoomTyuadu2JvjiEVgK\n" +
            "Jj4tJxp360mUZKdumg8a7nQ8EKpmsV5qv7hyR8u9kUDKf4rzfxfXjp1fp+W9r3GLQ7G98efD7H3O\n" +
            "ZkT2PAPB6n/aIws+QbhvDhrrTKAqAMHfazH+YxwRUfzMZY3ojYd+WamxAoGAC5s7moGOIYznC2XE\n" +
            "RBzcpXkUlKJn5P6llGBI9iF23gCVo2/P68lYXFzhpmsNPKtzuVbp7VTrgpNHrj1mO0rjbbjB5TSH\n" +
            "Kd9rqbzRhFK4lix19mYao64Fi/P80uuPonklN0G0nf5FKCS+SV556r5klNW0ybfTWFY/M8yX+Atz\n" +
            "w7ECgYEAwLPbxhbOEPa5zbOLC3H0/NnebkrmgtREN0bLxoSfg2GNZwzd3u9wX2Cwa7xsRg93dx3G\n" +
            "wpeMZEmIMtj/FKafvFFrF0o1Rr8JtLCO2UOwpO5gdR4San+7VzqIV1dA1nfloKhgwtNU6pqI8lBF\n" +
            "AGFF4wLndoZn4CkO4I8Fd6o1ECQ=\n" +
            "-----END PRIVATE KEY-----";
    IDAdapter idAdapter = IDAdapterFactory.newInstance("139.198.126.227",2891,"88.111.1/admin",300,privateKeyPem,1);
    ValueHelper valueHelper = ValueHelper.getInstance();
    List<IdentifierValue> values = new ArrayList<>();
    // 创建公共读写权限的值
    values.add(new IdentifierValue(1, "EMAIL", "test@email.com"));
    // 创建没有公共读写权限的值
    IdentifierValue value =new IdentifierValue(2, "URL", "https://www.citln.cn/");
    value.setPublicRead(false);
    value.setPublicWrite(false);
    values.add(value);
    // 配置标识管理员组
    String handleAdminGroup = "88.111.1/group";
    values.add(valueHelper.newAdminValue(100, handleAdminGroup,200));
    String identifier = "88.111.1/factory";
    idAdapter.createIdentifier(identifier, valueHelper.listToArray(values));
}
```

#### 2.6.3 标识管理员组成员解析标识

标识管理员组成员登录后，可以解析所有标识值

```java
@Test
public void handleAdminGroupResolveHandle() throws IdentifierAdapterException {
    String privateKeyPem = "-----BEGIN PRIVATE KEY-----\n" +
            "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCR3PC1boF/rGneLMiN2g6JIihL\n" +
            "6UnJ+kLzFxs5t5vTGM2oVfngB6wT0ztKh+LbXza1axy5i3pr2nDxbrUpvKVdwZldwr0/SBwMOxPN\n" +
            "6BRk+mxLt3QJ/7DGLkN++DikzihqD0HWCLQqc2ycktBVp0EMHkXo1BhBZZB+wBJhebn6Ji5KMchL\n" +
            "dc+Spl5AvF5yVe62TG6cW8CIWob9DhdBMMYiG7zQACv436hxOEE6RnVWnaRakgicSd6DjE+Ix5P0\n" +
            "undZidDrqN5Rp/BInLyuZ0YTOhB1CfB7JtXi6w2nEf6H9MpSUyPdQ/ZVVLhQw0fC3NQF+D2qRY2R\n" +
            "ih5mvzk+5kLRAgMBAAECggEAA3hFBZveWsIoNo/MKYuxYtO8L6oaBkL8yrmW/TV/8HKbmdCJxCmK\n" +
            "j2Ir++bln6BRNdmZclR+Egi9PREMIDULngJX+qICTHoTqLrTCsfljE1kvBxeF0rM0roRAvk2p7z7\n" +
            "uyInx8anOodKYyMe75qt8nLZ6OL6vLuEx28cQNNbeDbdC6HN0nNCnF0D2cOUAWrkCBJ/N5NdApPZ\n" +
            "JrphR3N/mbGy3kdajl0kqMepnKKiJs2JIAvSy5oG5RgOfgjUMZN7VQKVi98YFmm7SFxgzcIkJWRx\n" +
            "zDBecjaG6D979pFv2zpASHWdYsi8wPGr785/mBNBGhY5keiYzfyDW2cd3Fz7kQKBgQDY+3XZb9t9\n" +
            "qWodve+2eqgpmlGLu/bFwuHZu6N7WrGfVgaXTgCD4r1EBCu0EMA8BHzsCCIqLxN9RraMLf2esbG0\n" +
            "Q1MRzM7D4cyC72GVXdadWWFIe8FeUa2r48Rz9RbYcGr+HLdFNm1Bfa8td79PGU/l/q8PoTk37j6q\n" +
            "77lTShcUtQKBgQCsF5XDIwULhxm7s/3Kx79ENlSpED9xquSbGRkpJZbJ/PepNMjWmokEtJc+IRwE\n" +
            "NcVuqU+1zCda+la780kEd3hGNUNMl8SZSUxJs0XM0FPq+nKc2Og9qeNjA4UmP6Bvtk9BgFcXkPqU\n" +
            "YazziKV8bU+mtMzEQ3qQqCs1vJHCkqODLQKBgF6Y4rw1RB/46EanNAb+WqoomTyuadu2JvjiEVgK\n" +
            "Jj4tJxp360mUZKdumg8a7nQ8EKpmsV5qv7hyR8u9kUDKf4rzfxfXjp1fp+W9r3GLQ7G98efD7H3O\n" +
            "ZkT2PAPB6n/aIws+QbhvDhrrTKAqAMHfazH+YxwRUfzMZY3ojYd+WamxAoGAC5s7moGOIYznC2XE\n" +
            "RBzcpXkUlKJn5P6llGBI9iF23gCVo2/P68lYXFzhpmsNPKtzuVbp7VTrgpNHrj1mO0rjbbjB5TSH\n" +
            "Kd9rqbzRhFK4lix19mYao64Fi/P80uuPonklN0G0nf5FKCS+SV556r5klNW0ybfTWFY/M8yX+Atz\n" +
            "w7ECgYEAwLPbxhbOEPa5zbOLC3H0/NnebkrmgtREN0bLxoSfg2GNZwzd3u9wX2Cwa7xsRg93dx3G\n" +
            "wpeMZEmIMtj/FKafvFFrF0o1Rr8JtLCO2UOwpO5gdR4San+7VzqIV1dA1nfloKhgwtNU6pqI8lBF\n" +
            "AGFF4wLndoZn4CkO4I8Fd6o1ECQ=\n" +
            "-----END PRIVATE KEY-----";
    IDAdapter idAdapter = IDAdapterFactory.newInstance("139.198.126.227",2891,"88.111.1/user",300,privateKeyPem,1);
    String identifier = "88.111.1/factory";
    IdentifierValue[] values = idAdapter.resolve(identifier);
}
```
