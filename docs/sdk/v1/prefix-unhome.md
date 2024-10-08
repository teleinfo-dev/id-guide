# 前缀服务删除

## 概念

标识解析节点接入工业互联网标识解析体系，在二级节点配置企业节点地址以后，还需要在标识解析节点进行前缀服务注册。前缀服务注册是标识解析节点的基本服务设置，是标识解析节点的对外提供解析服务的开关。 标识解析节点只为前缀服务注册的前缀提供标识解析服务。其它前缀的标识解析请求到当前标识解析节点将直接返回不为此标识提供标识解析服务。

## 前缀服务删除调用

使用服务管理员获取到**IDClient**后,可以调用**unhomeNa()**方法,进行前缀服务注册。

- **接口功能**：剔除前缀接口用来提供前缀剔除服务，用户可通过前缀剔除接口剔除前缀
- **接口描述**

```java
/**
 * set the prefix value ahead
 *
 * @param prefix The value of the prefix to set ahead
 * @exception IDException Describes the error in resolution
 */
void unhomeNa(String na) throws IDException;
```

- **提前获取参数**

| 参数   | 类型   | 参数描述 | 示例     |
| ------ | ------ | -------- | -------- |
| prefix | String | 前缀名称 | 88.888.3 |

- **代码示例**

```java
/**
 * 剔除前缀
 *
 * @throws IDException
 */
public void homeNa() throws IDException {
    idClient.unhomeNa("88.111.1");
}
```
