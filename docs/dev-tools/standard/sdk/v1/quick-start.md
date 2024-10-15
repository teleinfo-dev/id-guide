# 快速开始

## 添加依赖

id-pointer-sdk 发布到 maven 仓库，应用在 pom.xml 文件中添加以下依赖。

```xml
<dependency>
  <groupId>cn.teleinfo.id-pointer</groupId>
  <artifactId>id-pointer-sdk</artifactId>
  <version>2.1.7</version>
</dependency>
```

## 标识解析

添加 id-pointer-sdk 依赖之后，可以直接进行标识解析操作，标识注册与维护请参照基本功能。

```java
// 获取递归标识解析器
IDResolver idResolver = GlobalIdClientFactory.getIdResolver();
// 解析标识88.111.1/teleinfo.cn， 返回HandleValue数据为对应的标识值数据
HandleValue[] handleValues = idResolver.resolveHandle("88.111.1/teleinfo.cn");
```

## IDClientFactory

### GlobalIdClientFactory

通过 GlobalIdClientFactory 获取全局的 IDClientFactory.全局的 IDClientFactory 是预定义
参数的 **IdClient** 工厂, 用户可以通过后续的参数配置定义其内部的参数.标识解析 SDK
使用全局的 GlobalIdClientFactory 来获取 IDClientFactory, 使用全局的 IDClientFactory
进行前缀解析等动作.

```java
IDClientFactory idClientFactory = GlobalIdClientFactory.getIdClientFactory();
//...其它操作
```

### 构造器创建 IDClientFactory 实例

除获取全局的 IDClientFactory 外,用户也可以通过构造器创建,需要传输
**ChannelPoolMapManager**参数与**IDClientConfig**参数,推荐使用声明 Bean 的方式与
spring 进行集成.

```java
IDClientFactory(ChannelPoolMapManager channelPoolMapManager, IDClientConfig idClientConfig)
```

| 限定符和型     | 方法                                                                                                                                         | 说明                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| IDClientConfig | getIdClientConfig()                                                                                                                          | 获取 IDClient 对应的配置,可配置项见 [参数配置](config.md)                          |
| IDResolver     | getIdResolver()                                                                                                                              | 获取标识解析器,标识解析器支持递归解析                                              |
| IDClient       | newInstance(java.net.InetSocketAddress serverAddress)                                                                                        | 通过服务端地址连接标识解析节点,生成 IDClient                                       |
| IDClient       | newInstance(java.net.InetSocketAddress serverAddress, AuthenticationInfo authenticationInfo)                                                 | 通过服务端地址与身份认证信息连接标识解析节点                                       |
| IDClient       | newInstance(java.net.InetSocketAddress serverAddress, java.lang.String adminUserId, int adminUserIndex, java.security.PrivateKey privateKey) | 通过服务端地址,标识用户 ID,标识用户 Index,与私钥连接标识解析节点                   |
| IDClient       | newInstance(java.lang.String prefix)                                                                                                         | 通过前缀解析获取标识解析节点地址并进行连接                                         |
| IDClient       | newInstance(java.lang.String prefix, AuthenticationInfo authenticationInfo)                                                                  | 通过前缀解析获取标识解析节点地址与身份认证信息并进行连接                           |
| IDClient       | newInstance(java.lang.String prefix, java.lang.String adminUserId, int adminUserIndex, java.security.PrivateKey privateKey)                  | 通过前缀解析获取标识解析节点地址,标识用户 ID,标识用户 Index,与私钥连接标识解析节点 |

## IDClient

获取到 IDClient 后,可以通过 IDClient 调用相应的方法进行标识的操作.

### 标识注册

- **方法功能**：创建新的标识
- **方法描述**
  - overwrite=true 创建标识，覆盖式更新，无论标识是否存在，原有标识属性全部替代为传入标识属性
  - overwrite=false 创建标识，如果标识存在则返回错误信息

```java
/**
 * Creates a new handle. If the handle already exists, the method will throw
 * an exception. The proper course of action is then to delete the handle
 * and call the method again.
 *
 * @param handle The handle to create
 * @param values An array of handle values to add to the handle.
 * @throws IDException Describes the error that occured in the process of creating the handle.
 * overwrite default value is false
 */
void createHandle(String handle, HandleValue[] values) throws IDException;
```

```java
/**
 * you could set the value of overwrite by yourself; true or false
 */
void createHandle(String handle, HandleValue[] values, boolean overwrite) throws IDException;
```

- **方法参数**

| 参数      | 类型          | 参数描述           | 示例              |
| --------- | ------------- | ------------------ | ----------------- |
| handle    | String        | 标识名称           | 88.888.3/20220121 |
| values    | HandleValue[] | 标识属性值         |                   |
| overwrite | boolean       | 可根据使用方式选择 | true / false      |

### 标识删除

- **方法功能**：按照标识进行删除
- **方法描述**

```java
/**
 * Deletes an existing Handle from the handle server. </br> <b> Note: </b>
 * <li>The administrative priveleges have to be valid for this method to
 * perform without any exception</li>
 *
 * @param handle The handle to delete.
 */
void deleteHandle(String handle) throws IDException;
```

- **方法参数**

| 参数   | 类型   | 参数描述 | 示例              |
| ------ | ------ | -------- | ----------------- |
| handle | String | 标识名称 | 88.888.3/20220121 |

### 标识值新增

- **方法功能**：增加标识值
- **方法描述**
  - overwrite=true 创建标识，覆盖式更新，无论标识是否存在，原有标识属性全部替代为传入标识属性
  - overwrite=false 创建标识，如果标识存在则返回错误信息

```java
/**
 * Adds new handle records. </br> <b> Note: </b>
 * <li>The administrative priveleges have to be valid for this method to
 * perform without any exception</li>
 *
 * @param handle The handle into which new values are to be added
 * @param values The array of handle values to deposit
 *
 * overwrite default value is false
 */
void addHandleValues(String handle, HandleValue[] values) throws IDException;
```

```java
/**
 * you could set the value of overwrite by yourself; true or false
 */
void addHandleValues(String handle, HandleValue[] values, boolean overwrite) throws IDException;
```

- **方法参数**

| 参数      | 类型          | 参数描述           | 示例              |
| --------- | ------------- | ------------------ | ----------------- |
| handle    | String        | 标识名称           | 88.888.3/20220121 |
| values    | HandleValue[] | 标识属性值         |                   |
| overwrite | boolean       | 可根据使用方式选择 | true / false      |

### 标识值删除

- **方法功能**：按照标识和 index 删除标识值
- **方法描述**

```java
/**
 * Deletes an existing Handle from the handle server. </br> <b> Note: </b>
 * <li>The administrative priveleges have to be valid for this method to
 * perform without any exception</li>
 *
 * @param handle The handle to delete.
 * @param indexes The handle value index to delete.
 */
void deleteHandleValues(String handle, int[] indexes) throws IDException;
```

- **方法参数**

| 参数    | 类型   | 参数描述       | 示例              |
| ------- | ------ | -------------- | ----------------- |
| handle  | String | 标识名称       | 88.888.3/20220121 |
| indexes | int[]  | 标识属性 index | new int[]{}       |

### 标识值修改

- **方法功能**：修改标识属性内容
- **方法描述**
  - overwrite=true 覆盖式更新，无论标识是否存在，原有标识属性全部替代为传入标识属性
  - overwrite=false 当标识属性不存在，不会进行更新，返回错误信息

```java
/**
 * Updates the specified data handle values.
 * <li>Make sure that the index value is specified in the array of handle
 * values or else this method will not work well.</li>
 * <li>The administrative priveleges have to be valid for this method to
 * perform without any exception</li>
 *
 * @param handle
 * @param values
 *
 * overwrite default value is false
 */
void updateHandleValues(String handle, HandleValue[] values) throws IDException;
```

```java
/**
 * you could set the value of overwrite by yourself; true or false
 */
updateHandleValues(String handle, HandleValue[] values, boolean overwrite) throws IDException;
```

- **方法参数**

| 参数      | 类型          | 参数描述           | 示例              |
| --------- | ------------- | ------------------ | ----------------- |
| handle    | String        | 标识名称           | 88.888.3/20220121 |
| values    | HandleValue[] | 标识属性值         |                   |
| overwrite | boolean       | 可根据使用方式选择 | true / false      |

### 标识解析

- **方法功能**：提供标识解析查询服务，用户可通过标识查询接口查询标识详细信息
- **方法描述**

```java
/**
 * Resolves a handle and returns a set of handle values
 *
 * @param handle The value of the handle to resolve
 * @exception IDException Describes the error in resolution
 */
HandleValue[] resolveHandle(String handle) throws IDException
```

```java
/**
 * Resolves a handle and returns a set of handle values that satisfy the
 * type filter specified. If the resolution is to retrieve all handle
 * values, specify null for both filter and indexes. If the administrative
 * priveleges are applicable, the restricted values will also be returned.
 * Also, the resolution request is not authoritative.
 *
 * @param handle The value of the handle to resolve
 * @param types The types of the handle values that we are looking for.
 * @exception IDException Describes the error in resolution
 */
HandleValue[] resolveHandle(String handle, String[] types, int[] indexes) throws IDException;
```

- **方法参数**

| 参数    | 类型     | 参数描述     | 示例                |
| ------- | -------- | ------------ | ------------------- |
| handle  | String   | 标识名称     | 88.888.3/20220121   |
| types   | String[] | 标识属性类型 | new String[]{"URL"} |
| indexes | int[]    | 标识属性索引 | new int[]{}         |

## ValueHelper

ValueHelper 是一个标识值的工厂类,使用单例模式封装,内部封装了各种标识值对象的创建方法.
