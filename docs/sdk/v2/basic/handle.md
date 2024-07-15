
### 标识注册

#### 说明

方法名：
```java
DoipReturn < Map < String, Object >> post(
    @RequestParam(value = "targetId") String targetId,
    @RequestParam(value = "operationId") String operationId,
    @RequestBody HandleInputDTO handleInputDTO
);
```
方法说明：基于元数据创建标识

#### 方法参数

|  **名称**  |  **位置**  |  **类型**  |  **必选**  |  **说明**  |
| --- | --- | --- | --- | --- |
|  targetId  |  Params  |  string  |  是  |  要注册的标识  |
|  operationId  |  Params  |  string  |  是  |  默认值：0.DOIP/Op.Create  |
|  handleInputDTO  |  Params  |  object  |  是  |  对象  |

*   handleInputDTO 对象属性:  

|  **名称**  |  **位置**  |  **类型**  |  **必选**  |  **说明**  |
| --- | --- | --- | --- | --- |
|  type  |  body  |  string  |  是  |  创建标识基于的元数据模板标识  |
|  attributes  |  body  |  string  |  是  |  标识主体  |
|  attributes.content  |  body  |  json  |  是  |  属性值，key-value结构；\`\`k为元数据属性英文名称，value为属性值  |

#### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |
|  data  |  object  |  \-  |  \-  |  \-  |

#### 示例

#### 请求示例代码    
```java
    /**
     * 标识注册
     */
    @Test
    void createHandleApiTest() {
        OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);


        HandleInputDTO handleInputDTO = new HandleInputDTO();
        handleInputDTO.setType("88.608.5288/META_07_03_quote_music_video_image");
        handleInputDTO.setRequestId(UUID.randomUUID().toString());
        handleInputDTO.setClientId(UUID.randomUUID().toString());

        HandleAttributesDTO handleAttributesDTO = new HandleAttributesDTO();
        Map < String, Object > content = new HashMap < > ();

        //引用
        content.put("en5", "88.608.5288/handle_07_02");
        //音频
        content.put("en6", Arrays.asList("968cf946-955a-4a52-b723-97f154898241.mp3"));
        //视频
        content.put("en7", Arrays.asList("b641eb7e-9888-4479-8f0e-30311983d55f.mp4"));
        //图片
        content.put("en8", Arrays.asList("e3ea523a-f90f-4e06-b362-fe67c17046b7.jpeg"));


        handleAttributesDTO.setContent(content);
        handleInputDTO.setAttributes(handleAttributesDTO);



        System.out.println(JSONUtil.toJsonPrettyStr(handleInputDTO));
        DoipReturn doipReturn = openApiClient.getIntanceApi().post("88.608.5288/META_07_03_quote_music_video_image_1", DoipOp.CREATE.getName(), handleInputDTO);

        log.info("标识注册返回结果：{}", JSONUtil.toJsonStr(doipReturn));
    }
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "type": "88.608.5288/META_07_01",
        "attributes": {
            "content": {
                "en1": "hello handle"
            }
        }
    }
}
```
### 标识修改

#### 说明

方法名：
```java
DoipReturn < Map < String, Object >> post(
    @RequestParam(value = "targetId") String targetId,
    @RequestParam(value = "operationId") String operationId,
    @RequestBody HandleInputDTO handleInputDTO
);
```
方法说明：修改标识的属性

#### 方法参数

|  **名称**  |  **位置**  |  **类型**  |  **必选**  |  **说明**  |
| --- | --- | --- | --- | --- |
|  targetId  |  Params  |  string  |  是  |  将要修改的标识  |
|  operationId  |  Params  |  string  |  是  |  默认值：0.DOIP/Op.Update   (覆盖更新)  |
|  handleInputDTO  |  Params  |  object  |  是  |  对象  |

*   handleInputDTO对象属性:
    

|  **名称**  |  **位置**  |  **类型**  |  **必选**  |  **说明**  |
| --- | --- | --- | --- | --- |
|  type  |  body  |  string  |  是  |  标识创建时基于的元数据模板标识  |
|  attributes  |  body  |  string  |  是  |  标识主体  |
|  attributes.content  |  body  |  json  |  是  |  属性值，key-value结构；\`\`k为元数据属性英文名称，value为属性值  |

#### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |
|  data  |  object  |  \-  |  \-  |  \-  |

#### 示例

#### 请求示例代码    
```java
/**
 * 标识修改
 */
@Test
void updateHandleApiTest() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    HandleInputDTO handleInputDTO = new HandleInputDTO();
    handleInputDTO.setType("88.608.5288/META_07_01");

    HandleAttributesDTO attributes = new HandleAttributesDTO();
    Map < String, Object > content = new HashMap < > ();
    content.put("en1", "update handle");

    attributes.setContent(content);

    handleInputDTO.setAttributes(attributes);
    System.out.println(JSONUtil.toJsonPrettyStr(handleInputDTO));
    DoipReturn doipReturn = openApiClient.getIntanceApi().post("88.608.5288/handle_07_02", DoipOp.UPDATE.getName(), handleInputDTO);

    log.info("标识修改返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
#### 响应示例
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
#### 注意

1.  修改标识的主体属性值，不能删除属性，只能修改已存在的标识属性值
    

### 标识删除

#### 说明

方法名：
```java
DoipReturn < Map < String, Object >> post(
    @RequestParam(value = "targetId") String targetId,
    @RequestParam(value = "operationId") String operationId,
    @RequestBody HandleInputDTO handleInputDTO
);
```
方法说明：此方法对基于元数据属性的的同类数据进行授权操作

#### 方法参数

|  **名称**  |  **位置**  |  **类型**  |  **必选**  |  **说明**  |
| --- | --- | --- | --- | --- |
|  targetId  |  Params  |  string  |  是  |  要删除的标识  |
|  operationId  |  Params  |  string  |  是  |  默认值：0.DOIP/Op.Delete  |
|  handleInputDTO  |  Params  |  object  |  否  |  只需要传对象，不需要赋值  |

#### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |

#### 示例

#### 请求示例代码    
```java
/**
 * 标识删除
 */
@Test
void deleteHandleApiTest() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    DoipReturn doipReturn = openApiClient.getIntanceApi().post("88.608.5288/handle_07_02", DoipOp.DELETE.getName(), new HandleInputDTO());

    log.info("标识删除返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功",
}
```
### 标识查询

#### 说明

方法名：
```java
 DoipReturn get(@RequestParam(value = "targetId") String targetId,
     @RequestParam(value = "operationId") String operationId
 );   
```
方法说明：解析标识

#### 方法参数

|  **名称**  |  **位置**  |  **类型**  |  **必选**  |  **说明**  |
| --- | --- | --- | --- | --- |
|  targetId  |  Params  |  string  |  是  |  标识  |
|  operationId  |  Params  |  string  |  是  |  0.DOIP/Op.Retrieve  |

#### 返回参数

|  **名称**  |  **类型**  |  **必选**  |  **约束**  |  **中文名**  |  **说明**  |
| --- | --- | --- | --- | --- | --- |
|  code  |  integer  |  true  |  none  |  none  |   |
|  message  |  string  |  true  |  none  |  none  |   |
|  data  |  json  |  true  |  none  |  none  |   |
|  data.id  |  string  |  true  |  none  |  none  |   |
|  data.type  |  string  |  true  |  none  |  none  |   |
|  data.attributes  |  json  |  true  |  none  |  none  |   |

#### 示例

#### 请求示例代码    
```java
/**
 * 标识查询
 */
@Test
void searchHandleApiTest() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    DoipReturn doipReturn = openApiClient.getIntanceApi().get("88.608.5288/handle_07_02", DoipOp.RETRIEVE.getName());

    log.info("标识查询返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
#### 响应示例
```json
// 实例标识
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

// 元数据标识
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
