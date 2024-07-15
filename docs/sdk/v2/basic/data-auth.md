### 应用身份用户列表查询

#### 说明

方法名：
```java
DoipReturn getHandleUserGroupList();
```
方法说明：查询所有应用身份用户列表。

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

|  **参数**  |  **参数类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  name  |  String  |  \-  |  用户名  |  "my"  |
|  userHandle  |  String  |  \-  |  身份标识  |  "88.608.6688/User\_zyh03"  |
|  belongCompany  |  String  |  \-  |  所属企业  |   |

#### 示例

#### 请求示例代码    
```java
/**
 * 应用身份用户列表查询
 */
@Test
void handleUserGroupListApiTest() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);
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

#### 说明

方法名：
```java
    DoipReturn batchPublic(@RequestBody ClassGrantPublicDTO classGrantDTO);
```
方法说明：通过此方法对基于元数据的同类数据进行公开与撤销公开的授权操作

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  metaHandle  |  String  |  是  |  \-  |  元数据  |  88.608.6688/Meta\_1  |
|  scope  |  integer  |  是  |  \-  |  授权范围；枚举值 1-公开，2-撤销公开  |  88.608.6688/Meta  |
|  items  |  array\[string\]  |  是  |  \-  |  所属元数据的属性英文名称，可填写多个  |  key1,key2,key3  |

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
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);


    ClassGrantPublicDTO classGrantPublicDTO = new ClassGrantPublicDTO();
    classGrantPublicDTO.setMetaHandle("88.608.5288/META_07_01");
    classGrantPublicDTO.setScope(1);

    List < String > items = new ArrayList < > ();
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
#### 注意

1.  该接口只针对基于元数据属性的同该类实例数据查看权限进行公开与撤销公开操作，不支持对元数据本身进行公开与撤销公开操作。
    

### 同类数据授权

#### 说明

方法名：
```java
    DoipReturn metaItemAuthorization(@RequestBody ClassGrantDTO classGrantDTO);
```
方法说明：此方法对基于元数据属性的的同类数据进行授权操作

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  metaHandle  |  String  |  是  |  \-  |  元数据标识  |  88.608.6688/Meta\_1  |
|  accessList  |  \[object\]  |  是  |  \-  |  授权数据  |   |
|  accessList.item  |  array\[object\]  |  是  |  \-  |  所属元数据的属性英文名称  |  key  |
|  accessList.authType  |  integer  |  是  |  \-  |  授权类型，枚举值；1-查看，2-编辑  |  1  |
|  accessList.scope  |  integer  |  是  |  \-  |  授权范围；枚举值 1-公开，2-指定范围  |  1  |
|  accessList.handleUsers  |  array\[string\]  |  否  |  \-  |  要授权的标识用户  |   |
|  accessList.removeHandleUsers  |  array\[string\]  |  否  |  \-  |  要移除授权的标识用户  |   |

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
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    ClassGrantDTO classGrantDTO = new ClassGrantDTO();
    classGrantDTO.setMetaHandle("88.608.5288/META_07_01");
    List < ItemAccessListDTO > accessList = new ArrayList < > ();
    ItemAccessListDTO itemAccessListDTO = new ItemAccessListDTO();
    itemAccessListDTO.setItem("en1");
    itemAccessListDTO.setAuthType(1);
    itemAccessListDTO.setScope(2);


    itemAccessListDTO.setHandleUsers(Arrays.asList("88.608.5288/App_xz2_app2"));
    itemAccessListDTO.setRemoveHandleUsers(Arrays.asList("88.608.5288/App_xz"));
    accessList.add(itemAccessListDTO);


    classGrantDTO.setAccessList(accessList);
    System.out.println(JSONUtil.toJsonPrettyStr(classGrantDTO));
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
#### 注意

1.  编辑授权时，即authType为2时，scope只能为2
    
2.  查看授权时，即authType为1时，若scope为1，即公开权限，则handlerUsers可以为空
    

### 单一标识授权

#### 说明

方法名：
```java
    DoipReturn singleHandleGrant(@RequestBody SingleHandleGrantDTO singleHandleGrantDTO);
```
方法说明：通过此方法对单一标识进行授权操作

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  handle  |  String  |  是  |  \-  |  实例标识  |  88.608.6688/instance\_1  |
|  grantType  |  integer  |  是  |  \-  |  授权类型，枚举值；1-同类授权，2-单个授权  |  1  |
|  readerScope  |  integer  |  否  |  \-  |  枚举值 1-公开，2-指定范围  |  1  |
|  handleUserReaders  |  array\[string\]  |  否  |  \-  |  授权的查看标识用户  |  1  |
|  handleUserWriters  |  array\[string\]  |  否  |  \-  |  授权的编辑标识用户  |  1  |
|  delHandleUserReaders  |  array\[string\]  |  否  |  \-  |  删除的标识身份  |  1  |
|  delHandleUserWriters  |  array\[string\]  |  否  |  \-  |  删除的标识身份  |  1  |

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
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);


    SingleHandleGrantDTO singleHandleGrantDTO = new SingleHandleGrantDTO();

    singleHandleGrantDTO.setReaderScope(1);
    singleHandleGrantDTO.setGrantType(1);
    singleHandleGrantDTO.setHandle("88.608.5288/handle_07_02");
    singleHandleGrantDTO.setHandleUserWriters(Arrays.asList("88.608.5288/App_xz2_app2"));
    singleHandleGrantDTO.setHandleUserReaders(Arrays.asList("88.608.5288/App_xz2_app2"));
    singleHandleGrantDTO.setDelHandleUserWriters(Arrays.asList("88.608.5288/App_zyy1_app"));
    singleHandleGrantDTO.setDelHandleUserReaders(Arrays.asList("88.608.5288/App_zyy1_app"));

    System.out.println(JSONUtil.toJsonPrettyStr(singleHandleGrantDTO));
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
#### 注意

1.  当授权类型grantType为1时，即同类授权类型时，readerScope,readers,writers可以为空
    
2.  当授权类型grantType为2时，即单个授权类型时，readerScope不能为空；readerScope为1，即公开授权时，readers可以为空；readerScope为2，即指定范围授权时，readers为空则不发生授权操作
    
3.  当授权类型grantType为2时，即单个授权类型时，writers为空时，则不发生授权操作
    

### 查看应用身份的消息列表

#### 说明

方法名：
```java
    DoipReturn appMessage(DoipPage doipPage);
```
方法说明：查看应用身份的消息列表。

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
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

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
