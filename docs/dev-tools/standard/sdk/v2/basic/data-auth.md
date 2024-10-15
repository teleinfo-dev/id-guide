# 数据权限

## 应用身份用户列表查询

通过此方法，查询本企业节点中所有应用身份列表及本企业和导入外企业的身份组列表，用于后续进行身份授权。

### 方法调用
```java
DoipReturn getHandleUserGroupList();
```
`注意`
- 向本企业授权，可授权本企业的应用身份或本企业的身份组；跨企业进行授权，只可导入跨企业身份组后进行授权

### 请求参数

无

### 返回参数

*   公共响应参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  success  |
|  data  |  Object  |  \-  |  返回数据  |  \-  |

*   data数据结构   

|  **参数**  |  **参数类型**  |  **最大长度**  |  **备注**  | **示例值**                  |
| --- | --- | --- | --- |--------------------------|
|  name  |  String  |  \-  |  用户名  | "my"                     |
|  userHandle  |  String  |  \-  |  身份标识  | "88.608.6688/User\_zyh03" |
|  belongCompany  |  String  |  \-  |  所属企业  | "北京能力有限公司"                         |


### 请求示例  
```java
/**
 * 应用身份用户列表查询
 */
@Test
void handleUserGroupListApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);
    //调用方法获取应用身份用户列表
    DoipReturn doipReturn = openApiClient.getHandleUserApi().getHandleUserGroupList();

    log.info("应用身份用户列表查询返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
### 响应示例
```json
{
    "code": 1,
    "message": "成功",
    "data": [{
        "name": "xz1_app1",
        "userHandle": "88.608.5288/App_xz1_app1",
        "belongCompany": "北京能力有限公司"
    }, {
        "name": "xz2_app1",
        "userHandle": "88.608.5288/App_xz2_app1",
        "belongCompany": "北京能力有限公司"
    }, {
        "name": "xz2_app2",
        "userHandle": "88.608.5288/App_xz2_app2",
        "belongCompany": "北京能力有限公司"
    }]
} 
```

## 实例标识授权

通过此接口，可对实例标识进行授权操作。

### 方法调用
```java
DoipReturn singleHandleGrant(@RequestBody SingleHandleGrantDTO singleHandleGrantDTO);
```

### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  | **示例值**                   |
| --- | --- | --- | --- | --- |---------------------------|
|  handle  |  String  |  是  |  \-  |  实例标识  | 88.608.6688/instance\_1   |
|  readerScope  |  integer  |  是  |  \-  |  枚举值 1-公开，2-指定范围  | 1                         |
|  handleUserReaders  |  array\[string\]  |  否  |  \-  |  授权的查看标识用户  | ["88.608.6688/User_dong"] |
|  handleUserWriters  |  array\[string\]  |  否  |  \-  |  授权的编辑标识用户  | ["88.608.6688/User_dong"] |
|  delHandleUserReaders  |  array\[string\]  |  否  |  \-  |  删除的标识身份  | ["88.608.6688/User_dzh"]  |
|  delHandleUserWriters  |  array\[string\]  |  否  |  \-  |  删除的标识身份  | ["88.608.6688/User_dzh"]  |

### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |


### 请求示例  
```java
/**
 * 单一标识授权
 */
@Test
void singleHandleGrantApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);
    
    //构建单一标识授权参数
    SingleHandleGrantDTO singleHandleGrantDTO = new SingleHandleGrantDTO();
    singleHandleGrantDTO.setReaderScope(1);
    singleHandleGrantDTO.setHandle("88.608.5288/handle_07_02");
    singleHandleGrantDTO.setHandleUserWriters(Arrays.asList("88.608.5288/App_xz2_app2"));
    singleHandleGrantDTO.setHandleUserReaders(Arrays.asList("88.608.5288/App_xz2_app2"));
    singleHandleGrantDTO.setDelHandleUserWriters(Arrays.asList("88.608.5288/App_zyy1_app"));
    singleHandleGrantDTO.setDelHandleUserReaders(Arrays.asList("88.608.5288/App_zyy1_app"));

    System.out.println(JSONUtil.toJsonPrettyStr(singleHandleGrantDTO));
    //调用单一标识授权方法
    DoipReturn doipReturn = openApiClient.getDataAuthorizationApi().singleHandleGrant(singleHandleGrantDTO);

    log.info("单一标识授权返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
### 响应示例
```json
{
    "code": 1,
    "message": "成功"
}
```
