# 标识操作

## 标识注册

通过此方法，用户可进行标识注册。

### 方法调用
```java
DoipReturn<Map<String, Object>> post(
    @RequestParam(value = "targetId") String targetId,
    @RequestParam(value = "operationId") String operationId,
    @RequestBody HandleInputDTO handleInputDTO
);
```
`注意`
- 用户可基于自己创建的元数据模板进行标识注册
- 用户可基于授权给自己查看权限的本企业元数据模板进行标识注册

### 方法参数

|  **名称**  |  **位置**  |  **类型**  |  **必选**  |  **说明**  | **示例值**                  |
| --- | --- | --- | --- | --- |--------------------------|
|  targetId  |  Params  |  string  |  是  |  要注册的标识  | 88.608.5288/handle_07_02 |
|  operationId  |  Params  |  string  |  是  |  默认值：0.DOIP/Op.Create  | 0.DOIP/Op.Create         |
|  handleInputDTO  |  Params  |  object  |  是  |  对象  | -                        |

*   handleInputDTO 对象属性:  

|  **名称**  |  **位置**  |  **类型**  |  **必选**  |  **说明**  | **示例值**               |
| --- | --- | --- | --- | --- |-----------------------|
|  type  |  body  |  string  |  是  |  创建标识基于的元数据模板标识  | 88.608.5288/Meta_test |
|  attributes  |  body  |  string  |  是  |  标识主体  | -                     |
|  attributes.content  |  body  |  json  |  是  |  属性值，key-value结构；\`\`k为元数据属性英文名称，value为属性值  |                       |

### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |
|  data  |  object  |  \-  |  \-  |  \-  |


### 请求示例
```java
    /**
     * 标识注册
     */
    @Test
    void createHandleApiTest() {
        //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
        OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);
        
        //构建标识注册对象
        HandleInputDTO handleInputDTO = new HandleInputDTO();
        //创建标识基于的元数据模板标识
        handleInputDTO.setType("88.608.5288/META_07_03");
        handleInputDTO.setRequestId(UUID.randomUUID().toString());
        handleInputDTO.setClientId(UUID.randomUUID().toString());

        HandleAttributesDTO handleAttributesDTO = new HandleAttributesDTO();
        Map<String, Object> content = new HashMap<> ();

        //字符型
        content.put("en1", "abcd");
       
        
        handleAttributesDTO.setContent(content);
        handleInputDTO.setAttributes(handleAttributesDTO);
        
        System.out.println(JSONUtil.toJsonPrettyStr(handleInputDTO));
        //执行标识注册方法
        DoipReturn doipReturn = openApiClient.getIntanceApi().post("88.608.5288/META_07_03_ins_1", DoipOp.CREATE.getName(), handleInputDTO);

        log.info("标识注册返回结果：{}", JSONUtil.toJsonStr(doipReturn));
    }
```
### 响应示例
```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "type": "88.608.5288/META_07_03",
        "attributes": {
            "content": {
                "en1": "abcd"
            }
        }
    }
}
```
## 标识修改

通过此方法，用户可进行标识修改操作。

### 方法调用
```java
DoipReturn<Map<String, Object>> post(
    @RequestParam(value = "targetId") String targetId,
    @RequestParam(value = "operationId") String operationId,
    @RequestBody HandleInputDTO handleInputDTO
);
```
`注意`
- 用户仅可修改自己创建的实例标识
- 修改标识的主体属性值，不能删除属性，只能修改已存在的标识属性值

### 方法参数

|  **名称**  |  **位置**  |  **类型**  |  **必选**  |  **说明**  |     |
| --- | --- | --- | --- | --- |-----|
|  targetId  |  Params  |  string  |  是  |  将要修改的标识  |  88.608.5288/handle_07_02   |
|  operationId  |  Params  |  string  |  是  |  默认值：0.DOIP/Op.Update(覆盖更新)  |  0.DOIP/Op.Update   |
|  handleInputDTO  |  Params  |  object  |  是  |  对象  |     |

*   handleInputDTO对象属性:
    

|  **名称**  |  **位置**  |  **类型**  |  **必选**  |  **说明**  |     |
| --- | --- | --- | --- | --- |-----|
|  type  |  body  |  string  |  是  |  标识创建时基于的元数据模板标识  |  88.608.5288/Meta_test   |
|  attributes  |  body  |  string  |  是  |  标识主体  |     |
|  attributes.content  |  body  |  json  |  是  |  属性值，key-value结构；\`\`k为元数据属性英文名称，value为属性值  |     |

### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |
|  data  |  object  |  \-  |  \-  |  \-  |


### 请求示例
```java
/**
 * 标识修改
 */
@Test
void updateHandleApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    //构建标识编辑对象
    HandleInputDTO handleInputDTO = new HandleInputDTO();
    handleInputDTO.setType("88.608.5288/META_07_01");

    HandleAttributesDTO attributes = new HandleAttributesDTO();
    Map<String, Object> content = new HashMap<> ();
    content.put("en1", "update handle");
    attributes.setContent(content);
    handleInputDTO.setAttributes(attributes);
    System.out.println(JSONUtil.toJsonPrettyStr(handleInputDTO));
    //执行标识修改方法
    DoipReturn doipReturn = openApiClient.getIntanceApi().post("88.608.5288/handle_07_02", DoipOp.UPDATE.getName(), handleInputDTO);

    log.info("标识修改返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
### 响应示例
```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "type": "88.608.5288/META_07_01",
        "attributes": {
            "content": {
                "en1": "update handle"
            }
        }
    }
}
```


## 标识删除

通过此方法，用户可进行标识删除操作。

### 方法调用
```java
DoipReturn<Map<String, Object>> post(
    @RequestParam(value = "targetId") String targetId,
    @RequestParam(value = "operationId") String operationId,
    @RequestBody HandleInputDTO handleInputDTO
);
```
`注意`
- 用户仅可删除自己创建的实例标识。

### 方法参数

|  **名称**  |  **位置**  |  **类型**  |  **必选**  |  **说明**  |                          |
| --- | --- | --- | --- | --- |--------------------------|
|  targetId  |  Params  |  string  |  是  |  要删除的标识  | 88.608.5288/handle_07_02 |
|  operationId  |  Params  |  string  |  是  |  默认值：0.DOIP/Op.Delete  | 0.DOIP/Op.Delete         |
|  handleInputDTO  |  Params  |  object  |  否  |  只需要传对象，不需要赋值  | -                        |

### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |


### 请求示例
```java
/**
 * 标识删除
 */
@Test
void deleteHandleApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);
    //执行标识删除方法
    DoipReturn doipReturn = openApiClient.getIntanceApi().post("88.608.5288/handle_07_02", DoipOp.DELETE.getName(), new HandleInputDTO());

    log.info("标识删除返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
### 响应示例
```json
{
    "code": 1,
    "message": "成功",
}
```

## 标识解析

通过此方法，用户可进行元数据模板标识解析与实例标识解析。

### 方法调用
```java
 DoipReturn get(@RequestParam(value = "targetId") String targetId,
     @RequestParam(value = "operationId") String operationId
 );   
```
`注意`
- 用户可解析范围为公开数据与授权给自己查看或编辑权限的数据

### 方法参数

|  **名称**  |  **位置**  |  **类型**  |  **必选**  |  **说明**  |     |
| --- | --- | --- | --- | --- |-----|
|  targetId  |  Params  |  string  |  是  |  标识  | 88.608.5288/handle_07_02 |
|  operationId  |  Params  |  string  |  是  |  0.DOIP/Op.Retrieve  |  0.DOIP/Op.Retrieve   |

### 返回参数

|  **名称**  |  **类型**  |  **必选**  | **中文名** | **示例**                   |
| --- | --- | --- |---------|--------------------------|
|  code  |  integer  |  true  | 响应码     | 1                        |
|  message  |  string  |  true  | 响应信息    | 成功                       |
|  data  |  json  |  true  | 响应体     |                          |
|  data.id  |  string  |  true  | 标识      | 88.608.5288/handle_07_02 |
|  data.type  |  string  |  true  | 元数据标识   | 88.608.5288/META_07_01   |
|  data.attributes  |  json  |  true  | 属性值     | key:value                |

### 请求示例
```java
/**
 * 标识查询
 */
@Test
void searchHandleApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    //执行标识解析方法
    DoipReturn doipReturn = openApiClient.getIntanceApi().get("88.608.5288/handle_07_02", DoipOp.RETRIEVE.getName());

    log.info("标识查询返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```

### 响应示例

::: code-group


```json [元数据标识]
{
    "code": 1,
    "message": "成功",
    "data": {
        "id": "88.608.5288/META_07_01",
        "type": "0.TYPE/DO.DOIPMETA",
        "attributes": {
            "content": {
                "basicInfo": {
                    "metaName": "更新元数据07_01",
                    "metaCode": "07_01",
                    "industry": "农、林、牧、渔业/农业/谷物种植/稻谷种植",
                    "industryCategory": "A",
                    "industrySpecific": "01",
                    "industryTrade": "011",
                    "industrySubclass": "0111",
                    "metaState": 1,
                    "metaContributor": "88.608.5288",
                    "standard": "依据标准：哈哈哈update",
                    "metaDesc": "描述：嘿嘿嘿update",
                    "isQuote": 0,
                    "publishedTime": "2024-07-01 19:00:39",
                    "effectiveTime": "2024-07-01 17:07:44",
                    "latestUpdateTime": "2024-07-01 19:00:39"
                },
                "itemInfos": [{
                    "itemBasicInfo": {
                        "itemIndex": 2000,
                        "itemCode": "code1",
                        "enName": "en1",
                        "cnName": "zh1",
                        "state": 0
                    },
                    "itemSchemaInfo": {
                        "dataType": 1,
                        "dataTypeString": "字符型",
                        "minLength": 5,
                        "maxLength": 4000
                    }
                }],
                "required": [],
                "uniqueness": [],
                "inputItem": ["en1"],
                "listItem": ["en1"]
            },
            "metaData": {
                "createTime": "2024-07-01 17:07:44",
                "updateTime": "2024-07-01 17:07:44",
                "creator": "88.608.5288/App_app0002"
            }
        }
    }
}
```

```java [实例标识]
{
    "code": 1,
    "message": "成功",
    "data": {
        "id": "88.608.5288/handle_07_02",
        "type": "88.608.5288/META_07_01",
        "attributes": {
            "attributes": {
                "metaData": {
                    "createTime": "2024-07-02 14:17:43",
                    "updateTime": "2024-07-02 14:35:26",
                    "creator": "88.608.5288/App_app0002",
                    "updater": "88.608.5288/App_app0002"
                }
            },
            "elements": [{
                "index": 2000,
                "type": "en1",
                "name": "zh1",
                "data": "update handle",
                "dataType": 1
            }]
        }
    }
}
```

:::
