### 应用身份用户列表查询

#### 说明：通过此方法，查询本企业节点中所有应用身份列表及本企业和导入外企业的身份组列表，用于后续进行身份授权；

方法名：
```java
DoipReturn getHandleUserGroupList();
```
#### 注意
- 向本企业授权，可授权本企业的应用身份或本企业的身份组；跨企业进行授权，只可导入跨企业身份组后进行授权。

#### 请求参数

无

#### 返回参数

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

#### 示例

#### 请求示例代码    
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
#### 响应示例
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
### 同类数据授权-公开/撤销公开

#### 说明：通过此方法对基于元数据模板所创建的同类实例数据属性级别的查看权限进行公开与撤销公开的授权操作。

方法名：
```java
    DoipReturn batchPublic(@RequestBody ClassGrantPublicDTO classGrantDTO);
```
#### 注意
- 仅操作目标所属元数据的创建者可进行同类数据授权；
- 被操作目标的所属元数据需为发布状态才可进行同类数据授权；
- 操作该接口不影响元数据本身的公开/撤销公开权限。

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  | **示例值**             |
| --- | --- | --- | --- | --- |---------------------|
|  metaHandle  |  String  |  是  |  \-  |  元数据  | 88.608.6688/Meta\_1 |
|  scope  |  integer  |  是  |  \-  |  授权范围；枚举值 1-公开，2-撤销公开  | 1                   |
|  items  |  array\[string\]  |  是  |  \-  |  所属元数据的属性英文名称，可填写多个  | key1,key2,key3      |

#### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |

#### 示例

#### 请求示例代码    
```java
/**
 * 同类数据授权-公开/撤销公开
 */
@Test
void batchPublicMetaApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    //构建请求对象
    ClassGrantPublicDTO classGrantPublicDTO = new ClassGrantPublicDTO();
    //元数据标识
    classGrantPublicDTO.setMetaHandle("88.608.5288/META_07_01");
    //授权范围 公开或撤销公开
    classGrantPublicDTO.setScope(1);

    //属性集合
    List<String> items = new ArrayList<>();
    items.add("en1");
    classGrantPublicDTO.setItems(items);
    
    System.out.println(JSONUtil.toJsonPrettyStr(classGrantPublicDTO));
    DoipReturn doipReturn = openApiClient.getDataAuthorizationApi().batchPublic(classGrantPublicDTO);

    log.info("同类数据授权-公开/撤销公开返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功",
}
```

### 同类数据授权

#### 说明：通过此方法对基于元数据模板所创建的同类实例数据属性级别的查看及编辑权限进行授权操作。

方法名：
```java
    DoipReturn metaItemAuthorization(@RequestBody ClassGrantDTO classGrantDTO);
```
#### 注意
- 仅元数据的创建者可进行同类数据授权；
- 被授权的元数据需为发布状态才可进行同类数据授权；
- 编辑授权时，即authType为2时，scope只能为2
- 查看授权时，即authType为1时，若scope为1，即公开权限，则handlerUsers可以为空


#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  | **示例值**                 |
| --- | --- | --- | --- | --- |-------------------------|
|  metaHandle  |  String  |  是  |  \-  |  元数据标识  | 88.608.6688/Meta\_1     |
|  accessList  |  \[object\]  |  是  |  \-  |  授权数据  |                         |
|  accessList.item  |  array\[object\]  |  是  |  \-  |  所属元数据的属性英文名称  | key                     |
|  accessList.authType  |  integer  |  是  |  \-  |  授权类型，枚举值；1-查看，2-编辑  | 1                       |
|  accessList.scope  |  integer  |  是  |  \-  |  授权范围；枚举值 1-公开，2-指定范围  | 1                       |
|  accessList.handleUsers  |  array\[string\]  |  否  |  \-  |  要授权的标识用户  | ["88.608.6688/User_dong"] |
|  accessList.removeHandleUsers  |  array\[string\]  |  否  |  \-  |  要移除授权的标识用户  | ["88.608.6688/User_dzh"]  |

#### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |

#### 示例

#### 请求示例代码    
```java
/**
 * 同类数据授权
 */
@Test
void metaItemAuthorizationApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    //构建同类数据授权参数
    ClassGrantDTO classGrantDTO = new ClassGrantDTO();
    classGrantDTO.setMetaHandle("88.608.5288/META_07_01");
    List<ItemAccessListDTO> accessList = new ArrayList<>();
    ItemAccessListDTO itemAccessListDTO = new ItemAccessListDTO();
    //属性
    itemAccessListDTO.setItem("en1");
    //授权类型 1-查看，2-编辑
    itemAccessListDTO.setAuthType(1);
    //授权范围1-公开，2-指定范围
    itemAccessListDTO.setScope(2);
    //要授权的标识用户集合
    itemAccessListDTO.setHandleUsers(Arrays.asList("88.608.5288/App_xz2_app2"));
    //要移除授权的标识用户集合
    itemAccessListDTO.setRemoveHandleUsers(Arrays.asList("88.608.5288/App_xz"));
    accessList.add(itemAccessListDTO);
    
    classGrantDTO.setAccessList(accessList);
    System.out.println(JSONUtil.toJsonPrettyStr(classGrantDTO));
    //调用同类数据授权方法
    DoipReturn doipReturn = openApiClient.getDataAuthorizationApi().metaItemAuthorization(classGrantDTO);

    log.info("同类数据授权返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功",
}
```
    

### 单一标识授权

#### 说明：通过此方法，可对实例标识进行单个授权操作，在创建实例时，可选择“同类数据授权”或“单个授权”。选择“同类数据授权”，该标识权限则遵循同类数据授权，选择“单个授权”，则同类数据授权对该条实例标识无效，遵循单个授权。

方法名：
```java
    DoipReturn singleHandleGrant(@RequestBody SingleHandleGrantDTO singleHandleGrantDTO);
```
#### 注意
- 当授权类型grantType为1时，即同类授权类型时，readerScope,readers,writers可以为空
- 当授权类型grantType为2时，即单个授权类型时，readerScope不能为空；readerScope为1，即公开授权时，readers可以为空；readerScope为2，即指定范围授权时，readers为空则不发生授权操作
- 当授权类型grantType为2时，即单个授权类型时，writers为空时，则不发生授权操

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  | **示例值**                   |
| --- | --- | --- | --- | --- |---------------------------|
|  handle  |  String  |  是  |  \-  |  实例标识  | 88.608.6688/instance\_1   |
|  grantType  |  integer  |  是  |  \-  |  授权类型，枚举值；1-同类授权，2-单个授权  | 1                         |
|  readerScope  |  integer  |  否  |  \-  |  枚举值 1-公开，2-指定范围  | 1                         |
|  handleUserReaders  |  array\[string\]  |  否  |  \-  |  授权的查看标识用户  | ["88.608.6688/User_dong"] |
|  handleUserWriters  |  array\[string\]  |  否  |  \-  |  授权的编辑标识用户  | ["88.608.6688/User_dong"] |
|  delHandleUserReaders  |  array\[string\]  |  否  |  \-  |  删除的标识身份  | ["88.608.6688/User_dzh"]  |
|  delHandleUserWriters  |  array\[string\]  |  否  |  \-  |  删除的标识身份  | ["88.608.6688/User_dzh"]  |

#### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |

#### 示例

#### 请求示例代码    
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
    singleHandleGrantDTO.setGrantType(1);
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
#### 响应示例
```json
{
    "code": 1,
    "message": "成功",
}
``` 

### 授权通知

#### 说明：通过此方法，用户可查看本应用身份下收到的消息列表；

方法名：
```java
    DoipReturn appMessage(DoipPage doipPage);
```
#### 注意
- 有其他企业或应用向您进行元数据、同类数据、单个标识数据授权查看/编辑权限时，您会收到对应授权消息通知；
- 有其他企业或应用将您获取的元数据、同类数据、单个标识数据的查看/编辑权限移除时，您会收到对应授权消息通知。

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  page  |  Int  |  是  |  \-  |  当前页-1  |  0  |
|  size  |  Int  |  是  |  \-  |  每页条数  |  10  |

#### 返回参数

*   公共响应参数  

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |
|  data  |  Object  |  \-  |  返回数据  |  \-  |

*   data数据结构    

|  **参数**  |  **参数类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  pageSize  |  Int  |  \-  |  页大小  |  10  |
|  pageNumber  |  Int  |  \-  |  页号  |  1  |
|  totalCount  |  Int  |  \-  |  总数  |  1  |
|  totalPage  |  Int  |  \-  |  总页数  |  1  |
|  id  |  Int  |  \-  |  id  |  164  |
|  messageTitleType  |  Int  |  \-  |  消息标题：1-元数据授权通知、2-实例数据授权通知、3-同类数据授权通知、4-元数据授权移除通知、5-实例数据授权移除通知、6-同类数据授权移除通知  |  1  |
|  messageType  |  Int  |  \-  |  消息类型（1.数据授权，2.授权移除  |  1  |
|  createdTime  |  String  |  \-  |  创建时间  |  "2024-06-12 17:01:42"  |
|  messageDetail  |  String  |  \-  |  消息详情  |  "北京能力有限公司已向您授权元数据：88.608.5288/META\_xz1\_app1\_0612的查看权限。"  |

#### 示例

#### 请求示例代码    
```java
/**
 * 查看应用身份的消息列表
 */
@Test
void appMessageGrantApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    //调用查看消息通知的方法
    DoipReturn doipReturn = openApiClient.getMessageApi().appMessage(0, 10);

    log.info("查看应用身份的消息列表返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
#### 响应示例
```json
 {
    "code": 1,
    "message": "成功",
    "data": {
        "pageSize": 10,
        "pageNumber": 1,
        "totalCount": 2,
        "totalPage": 1,
        "content": [{
            "id": 459,
            "messageTitleType": 3,
            "messageType": 1,
            "messageDetail": "企业WEB-UPDATE已向您授权元数据88.608.202402/META_dong-meta下创建的标识数据sex字段的查看权限",
            "createdTime": "2024-06-24 15:27:08"
        }, {
            "id": 441,
            "messageTitleType": 3,
            "messageType": 1,
            "messageDetail": "北京能力有限公司已向您授权元数据88.608.5288/META_dong-ceshi-6-22下创建的标识数据xingming字段的编辑权限。",
            "createdTime": "2024-06-22 15:22:26"
        }]
    }
}   
```
