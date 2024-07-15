### 新增元数据

#### 说明

方法名：
```java
DoipReturn createMetaInfo(@RequestBody MetaCreateApiDTO metaCreateDTO);
```

方法说明：新增元数据接口。

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  classifyCode  |  String  |  是  |   |  本企业内的分类code  |  "sp"  |
|  metaName  |  String  |  是  |  100  |  元数据名称  |   |
|  metaCode  |  String  |  是  |  100  |  元数据代码  |   |
|  industryCategory  |  String  |  是  |   |  行业分类一级  |   |
|  industrySpecific  |  String  |  是  |   |  行业分类二级  |   |
|  industryTrade  |  String  |  是  |   |  行业分类三级  |   |
|  industrySubclass  |  String  |  是  |   |  行业分类四级  |   |
|  standard  |  String  |  否  |  200  |  依据标准  |   |
|  metaDesc  |  String  |  否  |  1000  |  元数据描述  |   |
|  metaItemCreateDTOS\[i\].itemCode  |  String  |  是  |  50  |   |   |
|  metaItemCreateDTOS\[i\].englishName  |  String  |  是  |  50  |   |   |
|  metaItemCreateDTOS\[i\].chineseName  |  String  |  是  |  50  |   |   |
|  metaItemCreateDTOS\[i\].definition  |  String  |  否  |  200  |  实体值域定义  |   |
|  metaItemCreateDTOS\[i\].inputNecessary  |  Integer  |  否  |  \-  |  是否是输入性，`0-否，1-是`  |   |
|  metaItemCreateDTOS\[i\].required  |  Integer  |  否  |  \-  |  是否必填性，`0-否，1-是`  |   |
|  metaItemCreateDTOS\[i\].uniqueField  |  Integer  |  否  |  \-  |  是否唯一性，`0-否，1-是`  |   |
|  metaItemCreateDTOS\[i\].comment  |  String  |  否  |  200  |  备注  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.dataType  |  Integer  |  是  |   |  实体类型，`1：字符型，2：数值型，3：日期型，4：文件型，5：引用类型 6：音频 7：视频 8：图片`  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.minLength  |  Integer  |  否  |   |  最小长度 字符型：默认 0  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.maxLength  |  Integer  |  否  |   |  最大长度 字符型：默认 4000  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.dateFormat  |  String  |  否  |   |  日期格式 默认：YYYY-MM-DD  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.maxFileCount  |  Integer  |  否  |  \-  |  最大文件数 1-50，超过 50，默认保存为 50  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.fileType  |  String  |  否  |  \-  |  文件类型, "2,3", 2:doc;docx;xps;dot 3: xls;xlsx;xlsb;xlsm;csv 4:pdf 5:zip;rar  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.referenceType  |  Integer  |  否  |  \-  |  引用类型：`1：一对一，2：一对多`,默认为 1  |   |
|  metaItemCreateDTOS\[i\].itemReferenceDTO.referenceMetaHandle  |  String  |  否  |  \-  |  引用元数据，dataType:5时必填  |   |

#### 返回参数

|  **名称**  |  **类型**  |  **必选**  |  **约束**  |  **中文名**  |  **说明**  |
| --- | --- | --- | --- | --- | --- |
|  code  |  integer  |  true  |  none  |  none  |  返回码  |
|  message  |  string  |  true  |  none  |  none  |  返回消息  |
|  data  |  object  |  true  |  none  |  none  |  返回数据  |

#### 示例

#### 请求示例代码    
```java
 /**
 * 新建元数据
 */
@Test
void metaCreateApiTest() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);


    MetaCreateApiDTO createApiDTO = new MetaCreateApiDTO();

    createApiDTO.setClassifyCode("NEW_CODE");
    createApiDTO.setMetaHandle("88.608.5288/META_07_03_quote_music_video_image");
    createApiDTO.setMetaName("07_03_quote_music_video_image");
    createApiDTO.setMetaCode("07_03-quote_music_video_image");
    createApiDTO.setIndustryCategory("R");
    createApiDTO.setIndustrySpecific("86");
    createApiDTO.setIndustryTrade("861");
    createApiDTO.setIndustrySubclass("8610");
    createApiDTO.setStandard("");
    createApiDTO.setMetaDesc("");

    List < MetaItemCreateApiDTO > metaItemCreateDTOS = new ArrayList < > ();

    //引用类型
    MetaItemCreateApiDTO quoteMetaItemCreateApiDTO = new MetaItemCreateApiDTO();
    quoteMetaItemCreateApiDTO.setItemCode("code5");
    quoteMetaItemCreateApiDTO.setEnglishName("en5");
    quoteMetaItemCreateApiDTO.setChineseName("zh5");
    quoteMetaItemCreateApiDTO.setInputNecessary(1);
    quoteMetaItemCreateApiDTO.setRequired(0);
    quoteMetaItemCreateApiDTO.setUniqueField(0);
    quoteMetaItemCreateApiDTO.setComment("备注");
    MetaItemSchemaCreateApiDTO quoteMetaItemSchemaCreateApiDTO = new MetaItemSchemaCreateApiDTO();
    quoteMetaItemSchemaCreateApiDTO.setDataType(5);
    quoteMetaItemSchemaCreateApiDTO.setReferenceType(1);
    quoteMetaItemCreateApiDTO.setItemSchemaCreateDTO(quoteMetaItemSchemaCreateApiDTO);

    MetaItemReferenceApiDTO itemReferenceDTO = new MetaItemReferenceApiDTO();
    itemReferenceDTO.setReferenceMetaHandle("88.608.5288/META_07_02");
    quoteMetaItemCreateApiDTO.setItemReferenceDTO(itemReferenceDTO);

    metaItemCreateDTOS.add(quoteMetaItemCreateApiDTO);


    //音频型
    MetaItemCreateApiDTO musicMetaItemCreateApiDTO = new MetaItemCreateApiDTO();
    musicMetaItemCreateApiDTO.setItemCode("code6");
    musicMetaItemCreateApiDTO.setEnglishName("en6");
    musicMetaItemCreateApiDTO.setChineseName("zh6");
    musicMetaItemCreateApiDTO.setInputNecessary(1);
    musicMetaItemCreateApiDTO.setRequired(0);
    musicMetaItemCreateApiDTO.setUniqueField(0);
    MetaItemSchemaCreateApiDTO musicMetaItemSchemaCreateApiDTO = new MetaItemSchemaCreateApiDTO();
    musicMetaItemSchemaCreateApiDTO.setDataType(6);
    musicMetaItemSchemaCreateApiDTO.setMaxFileCount(2);
    musicMetaItemCreateApiDTO.setItemSchemaCreateDTO(musicMetaItemSchemaCreateApiDTO);

    metaItemCreateDTOS.add(musicMetaItemCreateApiDTO);


    //视频型
    MetaItemCreateApiDTO videoMetaItemCreateApiDTO = new MetaItemCreateApiDTO();
    videoMetaItemCreateApiDTO.setItemCode("code7");
    videoMetaItemCreateApiDTO.setEnglishName("en7");
    videoMetaItemCreateApiDTO.setChineseName("zh7");
    videoMetaItemCreateApiDTO.setInputNecessary(1);
    videoMetaItemCreateApiDTO.setRequired(0);
    videoMetaItemCreateApiDTO.setUniqueField(0);
    MetaItemSchemaCreateApiDTO videoMetaItemSchemaCreateApiDTO = new MetaItemSchemaCreateApiDTO();
    videoMetaItemSchemaCreateApiDTO.setDataType(7);
    videoMetaItemSchemaCreateApiDTO.setMaxFileCount(1);
    videoMetaItemCreateApiDTO.setItemSchemaCreateDTO(videoMetaItemSchemaCreateApiDTO);

    metaItemCreateDTOS.add(videoMetaItemCreateApiDTO);

    //图片型
    MetaItemCreateApiDTO imageMetaItemCreateApiDTO = new MetaItemCreateApiDTO();
    imageMetaItemCreateApiDTO.setItemCode("code8");
    imageMetaItemCreateApiDTO.setEnglishName("en8");
    imageMetaItemCreateApiDTO.setChineseName("zh8");
    imageMetaItemCreateApiDTO.setInputNecessary(1);
    imageMetaItemCreateApiDTO.setRequired(0);
    imageMetaItemCreateApiDTO.setUniqueField(0);
    MetaItemSchemaCreateApiDTO imageMetaItemSchemaCreateApiDTO = new MetaItemSchemaCreateApiDTO();
    imageMetaItemSchemaCreateApiDTO.setDataType(8);
    imageMetaItemSchemaCreateApiDTO.setMaxFileCount(1);
    imageMetaItemCreateApiDTO.setItemSchemaCreateDTO(imageMetaItemSchemaCreateApiDTO);
    metaItemCreateDTOS.add(imageMetaItemCreateApiDTO);



    createApiDTO.setMetaItemCreateDTOS(metaItemCreateDTOS);
    System.out.println(JSONUtil.toJsonPrettyStr(createApiDTO));
    DoipReturn doipReturn = openApiClient.getMetaApi().createMetaInfo(createApiDTO);

    log.info("新建元数据返回结果：{}", doipReturn);
}
```

#### 响应示例
```json
{
    "code": 1,
    "message": "成功",
    "data": null
}
```  

### 查询元数据

#### 说明

方法名：

`DoipReturn metaInfo(@RequestParam(value = "metaHandle") String metaHandle);`

方法说明：查询元数据基本信息和实体列表。

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  metaHandle  |  String  |  是  |  \-  |  要查询的元数据标识  |  "88.608.6688/META\_123444444444"  |

#### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |
|  data  |  Object  |   |  具体响应对象  |   |

### 响应参数
    

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  classifyCode  |  String  |  是  |   |  本企业内的分类code  |  "sp"  |
|  metaHandle  |  String  |  是  |   |  元数据标识  |  "88.608.6688/META\_xz\_test2"  |
|  metaName  |  String  |  是  |  100  |  元数据名称  |   |
|  metaCode  |  String  |  是  |  100  |  元数据代码  |   |
|  industryCategory  |  String  |  是  |   |  行业分类一级  |   |
|  industrySpecific  |  String  |  是  |   |  行业分类二级  |   |
|  industryTrade  |  String  |  是  |   |  行业分类三级  |   |
|  industrySubclass  |  String  |  是  |   |  行业分类四级  |   |
|  standard  |  String  |  否  |  200  |  依据标准  |   |
|  metaDesc  |  String  |  否  |  1000  |  元数据描述  |   |
|  metaItemCreateDTOS\[i\].itemCode  |  String  |  是  |   |   |   |
|  metaItemCreateDTOS\[i\].englishName  |  String  |  是  |   |   |   |
|  metaItemCreateDTOS\[i\].chineseName  |  String  |  是  |  50  |   |   |
|  metaItemCreateDTOS\[i\].definition  |  String  |  否  |   |  实体值域定义  |   |
|  metaItemCreateDTOS\[i\].inputNecessary  |  Integer  |  否  |  \-  |  是否是输入性，`0-否，1-是`  |   |
|  metaItemCreateDTOS\[i\].listItemNecessary  |  Integer  |  否  |  \-  |  是否是列表项，`0-否，1-是`  |   |
|  metaItemCreateDTOS\[i\].required  |  Integer  |  否  |  \-  |  是否必填性，`0-否，1-是`  |   |
|  metaItemCreateDTOS\[i\].uniqueField  |  Integer  |  否  |  \-  |  是否唯一性，`0-否，1-是`  |   |
|  metaItemCreateDTOS\[i\].comment  |  String  |  否  |  200  |  备注  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.dataType  |  Integer  |  是  |   |  实体类型，`1：字符型，2：数值型，3：日期型，4：文件型，5：引用类型 6：音频 7：视频 8：图片`  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.minLength  |  Integer  |  否  |   |  最小长度  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.maxLength  |  Integer  |  否  |   |  最大长度  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.dateFormat  |  String  |  否  |   |  日期格式  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.maxFileCount  |  Integer  |  否  |  \-  |  最大文件数量  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.fileRange  |  Integer  |  否  |  \-  |  文件值域：`1：any，2：assign`  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.fileType  |  String  |  否  |  \-  |  文件类型  |   |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.selfDefFileSuffix  |  String  |  否  |  \-  |  自定义文件后缀  |  "pem"  |
|  metaItemCreateDTOS\[i\].itemSchemaCreateDTO.referenceType  |  Integer  |  否  |  \-  |  引用类型：`1：一对一，2：一对多`  |   |
|  metaItemCreateDTOS\[i\].itemReferenceDTO.referenceMetaHandle  |  String  |  否  |  \-  |  引用元数据，dataType:5时必填  |   |

#### 示例

#### 请求示例代码    
```java
@Test
void metaInfoApiTest() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    DoipReturn doipReturn = openApiClient.getMetaApi().metaInfo("88.608.5288/META_07_01");

    log.info("新建元数据返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "classifyCode": "NEW_CODE",
        "classifyName": "新类型",
        "metaHandle": "88.608.5288/META_07_01",
        "metaName": "07_01",
        "metaCode": "07_01",
        "industry": "文化、体育和娱乐业/新闻和初版业/新闻业/新闻业",
        "industryCategory": "R",
        "industrySpecific": "86",
        "industryTrade": "861",
        "industrySubclass": "8610",
        "metaState": 0,
        "metaContributor": "88.608.5288",
        "standard": "",
        "metaDesc": "",
        "createdTime": "2024-07-01 17:07:44",
        "updatedTime": "2024-07-01 17:07:44",
        "itemVOS": [{
            "itemIndex": 2000,
            "itemCode": "code1",
            "englishName": "en1",
            "chineseName": "zh1",
            "itemState": 0,
            "inputNecessary": 1,
            "listItemNecessary": 1,
            "required": 0,
            "uniqueField": 0,
            "itemSchemaVO": {
                "dataType": 1,
                "minLength": 3,
                "maxLength": 5
            }
        }]
    }
}
```
### 编辑元数据基本信息

#### 说明

方法名：
```java
DoipReturn updateMetaBasicInfo(@RequestBody MetaBasicInfoDTO metaBasicInfoDTO);
```
方法说明：通过此接口对元数据基本信息进行修改。

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  classifyCode  |  String  |  是  |   |  本企业内的分类code  |  "sp"  |
|  metaHandle  |  String  |  是  |  255  |  元数据标识  |  "88.608.6688/META\_xz\_test2"  |
|  metaName  |  String  |  是  |  100  |  元数据名称  |   |
|  metaCode  |  String  |  是  |  100  |  元数据代码  |   |
|  industryCategory  |  String  |  是  |   |  行业分类一级  |   |
|  industrySpecific  |  String  |  是  |   |  行业分类二级  |   |
|  industryTrade  |  String  |  是  |   |  行业分类三级  |   |
|  industrySubclass  |  String  |  是  |   |  行业分类四级  |   |
|  standard  |  String  |  否  |  200  |  依据标准  |   |
|  metaDesc  |  String  |  否  |  1000  |  元数据描述  |   |

#### 返回参数

|  **名称**  |  **类型**  |  **必选**  |  **约束**  |  **中文名**  |  **说明**  |
| --- | --- | --- | --- | --- | --- |
|  code  |  integer  |  true  |  none  |  none  |  返回码  |
|  message  |  string  |  true  |  none  |  none  |  返回消息  |

#### 示例

#### 请求示例代码    
```java
/**
 * 编辑元数据
 */
@Test
void metaUpdateInfoApiTest() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    MetaBasicInfoDTO metaBasicInfoDTO = new MetaBasicInfoDTO();
    metaBasicInfoDTO.setMetaHandle("88.608.8889/META_xz_update_basic");
    metaBasicInfoDTO.setMetaName("xz更新元数据基本信息3333");
    metaBasicInfoDTO.setMetaCode("xz_update_basic");
    metaBasicInfoDTO.setStandard("依据标准：哈哈哈update");
    metaBasicInfoDTO.setMetaDesc("描述：嘿嘿嘿update");
    metaBasicInfoDTO.setIndustryCategory("A");
    metaBasicInfoDTO.setIndustrySpecific("01");
    metaBasicInfoDTO.setIndustryTrade("011");
    metaBasicInfoDTO.setIndustrySubclass("0111");
    metaBasicInfoDTO.setClassifyCode("hxh");


    System.out.println(JSONUtil.toJsonPrettyStr(metaBasicInfoDTO));
    DoipReturn doipReturn = openApiClient.getMetaApi().updateMetaBasicInfo(metaBasicInfoDTO);

    log.info("编辑元数据返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}    
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功"
}
```
### 编辑元数据实体列表

#### 说明

方法名：

`DoipReturn updateItem(@RequestBody MetaItemUpdateApiDTO metaItemUpdateApiDTO);`

方法说明：修改元数据的实体属性列表接口。

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  metaHanlde  |  String  |  是  |   |  元数据标识  |   |
|  metaItemDTOS\[i\].itemCode  |  String  |  是  |  50  |   |   |
|  metaItemDTOS\[i\].englishName  |  String  |  是  |  50  |   |   |
|  metaItemDTOS\[i\].chineseName  |  String  |  是  |  50  |   |   |
|  metaItemDTOS\[i\].definition  |  String  |  否  |   |  实体值域定义  |   |
|  metaItemDTOS\[i\].itemState  |  Integer  |  否  |   |  元素状态;0：启用，1：禁用（逻辑删除），2：未生效  |   |
|  metaItemDTOS\[i\].inputNecessary  |  Integer  |  否  |  \-  |  是否是输入性，`0-否，1-是`  |   |
|  metaItemDTOS\[i\].required  |  Integer  |  否  |  \-  |  是否必填性，`0-否，1-是`  |   |
|  metaItemDTOS\[i\].uniqueField  |  Integer  |  否  |  \-  |  是否唯一性，`0-否，1-是`  |   |
|  metaItemDTOS\[i\].comment  |  String  |  否  |  200  |  备注  |   |
|  metaItemDTOS\[i\].itemSchemaCreateDTO.dataType  |  Integer  |  是  |   |  实体类型，`1：字符型，2：数值型，3：日期型，4：文件型，5：引用类型 6：音频 7：视频 8：图片`  |   |
|  metaItemDTOS\[i\].itemSchemaCreateDTO.minLength  |  Integer  |  否  |   |  最小长度  |   |
|  metaItemDTOS\[i\].itemSchemaCreateDTO.maxLength  |  Integer  |  否  |   |  最大长度，字符型长度：0-4000  |   |
|  metaItemDTOS\[i\].itemSchemaCreateDTO.dateFormat  |  String  |  否  |   |  日期格式 默认：YYYY-MM-DD  |   |
|  metaItemDTOS\[i\].itemSchemaCreateDTO.maxFileCount  |  Integer  |  否  |  \-  |  最大文件数量  |   |
|  metaItemDTOS\[i\].itemSchemaCreateDTO.fileRange  |  Integer  |  否  |  \-  |  文件值域：`1：any，2：assign`  |   |
|  metaItemDTOS\[i\].itemSchemaCreateDTO.fileType  |  String  |  否  |  \-  |  文件类型  |   |
|  metaItemDTOS\[i\].itemSchemaCreateDTO.selfDefFileSuffix  |  String  |  否  |  \-  |  自定义文件后缀  |  "pem"  |
|  metaItemDTOS\[i\].itemSchemaCreateDTO.referenceType  |  Integer  |  否  |  \-  |  引用类型：`1：一对一，2：一对多`  |   |
|  metaItemDTOS\[i\].itemReferenceDTO.referenceMetaHandle  |  String  |  否  |  \-  |  引用元数据，dataType:5时必填  |   |

#### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |

#### 示例

#### 请求示例代码    
```java
    /**
     * 编辑元数据实体列表
     */
    @Test
    void updateItemApiTest() {
        OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);


        MetaItemUpdateApiDTO metaItemUpdateApiDTO = new MetaItemUpdateApiDTO();
        metaItemUpdateApiDTO.setMetaHandle("88.608.5288/META_07_01");

        List < MetaItemCreateApiDTO > metaItemDTOS = new ArrayList < > ();

        //修改属性值设置
        MetaItemCreateApiDTO metaItemCreateApiDTO = new MetaItemCreateApiDTO();
        metaItemCreateApiDTO.setItemCode("code1");
        metaItemCreateApiDTO.setEnglishName("en1");
        metaItemCreateApiDTO.setChineseName("zh1");
        metaItemCreateApiDTO.setInputNecessary(1);
        metaItemCreateApiDTO.setRequired(0);
        metaItemCreateApiDTO.setUniqueField(0);
        MetaItemSchemaCreateApiDTO metaItemSchemaCreateApiDTO = new MetaItemSchemaCreateApiDTO();
        metaItemSchemaCreateApiDTO.setDataType(1);
        metaItemSchemaCreateApiDTO.setMaxLength(4000);
        metaItemSchemaCreateApiDTO.setMinLength(5);
        metaItemCreateApiDTO.setItemSchemaCreateDTO(metaItemSchemaCreateApiDTO);


        MetaItemReferenceApiDTO metaItemReferenceApiDTO = new MetaItemReferenceApiDTO();
        //数据类型 为5引用类型时 需要设置
        //metaItemReferenceApiDTO.setReferenceMetaHandle("");
        metaItemCreateApiDTO.setItemReferenceDTO(metaItemReferenceApiDTO);
        metaItemCreateApiDTO.setItemReferenceDTO(metaItemReferenceApiDTO);


        metaItemDTOS.add(metaItemCreateApiDTO);
        metaItemUpdateApiDTO.setMetaItemDTOS(metaItemDTOS);

        System.out.println(JSONUtil.toJsonPrettyStr(metaItemUpdateApiDTO));
        DoipReturn doipReturn = openApiClient.getMetaApi().updateItem(metaItemUpdateApiDTO);

        log.info("编辑元数据实体列表返回结果：{}", JSONUtil.toJsonStr(doipReturn));
    }
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功"
}
```   

### 删除元数据

#### 说明

方法名：

`DoipReturn deleteMeta(@RequestParam(value = "metaHandleList", defaultValue = "") List<String> metaHandleList);`

方法说明：支持单个、批量删除元数据。

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  metaHandleList  |  Array `<string>`  |  是  |  \-  |  要操作的标识列表  |  \[ "88.608.6688/META\_123444444444", "88.608.6688/META\_123"\]  |

#### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |

#### 示例

#### 请求示例代码    
```java
/**
 * 删除元数据
 */
@Test
void deleteMetaApiTest() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    List < String > metaHandleList = new ArrayList < > ();
    metaHandleList.add("88.608.5288/META_07_01");

    DoipReturn doipReturn = openApiClient.getMetaApi().deleteMeta(metaHandleList);

    log.info("删除元数据返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功"
}
```
### 元数据授权

#### 说明

方法名：
```java
DoipReturn addMetaGrant(@RequestBody MetaGrantApiDTO metaGrantApiDTO);
```

方法说明：元数据授权

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  scope  |  Integer  |  是  |  \-  |  授权范围：`1-公开  2-指定范`围  |   |
|  metaHandle  |  String  |  是  |   |  元数据标识  |   |
|  handleUsers  |  Array `<string>`  |  否  |  \-  |  新增身份标识  |  \[ "88.608.6688/META\_123444444444", "88.608.6688/META\_123"\]  |
|  removeHandleUsers  |  Array `<string>`  |  否  |  \-  |  删除身份标识  |  \[ "88.608.6688/META\_123444444444", "88.608.6688/META\_123"\]  |

#### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |

#### 示例

#### 请求示例代码    
```java
/**
 * 元数据授权
 */
@Test
void addMetaGrantApiTest() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);


    MetaGrantApiDTO metaGrantApiDTO = new MetaGrantApiDTO();
    metaGrantApiDTO.setScope(2);
    metaGrantApiDTO.setMetaHandle("88.608.5288/META_07_01");

    List < String > handleUsers = new ArrayList < > ();
    handleUsers.add("88.608.5288/App_rwer");
    metaGrantApiDTO.setHandleUsers(handleUsers);


    List < String > removeHandleUsers = new ArrayList < > ();
    metaGrantApiDTO.setRemoveHandleUsers(removeHandleUsers);


    System.out.println(JSONUtil.toJsonPrettyStr(metaGrantApiDTO));
    DoipReturn doipReturn = openApiClient.getMetaApi().addMetaGrant(metaGrantApiDTO);

    log.info("元数据授权返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功"
}
```
### 发布/撤回元数据

#### 说明

方法名：

`DoipReturn publishOrWithdraw(@RequestBody PublishOrWithdrawApiDTO paramsDTO);`

方法说明：支持批量操作元数据的发布和撤回

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  metaHandleList  |  Array `<string>`  |  是  |  \-  |  要操作的标识列表  |  \[ "88.608.6688/META\_123444444444", "88.608.6688/META\_123"\]  |
|  opType  |  String  |  是  |  \-  |  操作类型，枚举值 `publish` 或  `withdraw`  |  "publish"  |

#### 返回参数

|  **名称**  |  **类型**  |  **必选**  |  **约束**  |  **中文名**  |  **说明**  |
| --- | --- | --- | --- | --- | --- |
|  code  |  integer  |  true  |  none  |  none  |  返回码  |
|  message  |  string  |  true  |  none  |  none  |  返回消息  |
|  data  |  object  |  true  |  none  |  none  |  返回数据  |

#### 示例

#### 请求示例代码    
```java
/**
 * 发布/撤回元数据
 */
@Test
void publishOrWithdrawApiTest() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);


    PublishOrWithdrawApiDTO publishOrWithdrawApiDTO = new PublishOrWithdrawApiDTO();

    publishOrWithdrawApiDTO.setOpType("publish");
    publishOrWithdrawApiDTO.setMetaHandleList(Arrays.asList("88.608.5288/META_07_01", "88.608.5288/META_07_02"));


    System.out.println(JSONUtil.toJsonPrettyStr(publishOrWithdrawApiDTO));
    DoipReturn doipReturn = openApiClient.getMetaApi().publishOrWithdraw(publishOrWithdrawApiDTO);

    log.info("发布/撤回元数据返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功",
    "data": [{
        "metaHandle": "88.608.5288/META_07_01",
        "state": "success",
        "reason": ""
    }]
}
```
### 创建元数据副本

#### 说明

方法名：
```java
DoipReturn baseonCreateMeta(@RequestBody BaseonCreateMetaApiDTO metaCopyApiDTO);
```

方法说明：参照其他企业元数据创建本企业元数据

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  baseonHandle  |  String  |  是  |  \-  |  要引用的元数据标识  |   |
|  baseInfo.metaHandle  |  String  |  是  |  \-  |  要创建的元数据标识  |   |
|  baseInfo.metaCode  |  String  |  是  |  50  |  设置的元数据编码  |   |
|  baseInfo.classifyCode  |  String  |  是  |   |  所属的本企业分类  |   |

#### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |

#### 示例

#### 请求示例代码    
```java
/**
 * 创建元数据副本
 */
@Test
void baseonCreateMetaApiTest() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);


    BaseonCreateMetaApiDTO baseonCreateMetaApiDTO = new BaseonCreateMetaApiDTO();

    baseonCreateMetaApiDTO.setBaseonHandle("88.608.5288/META_07_01");
    BaseonInfoDTO baseInfo = new BaseonInfoDTO();
    baseInfo.setMetaHandle("88.608.5288/META_test_zyh_002_copy1");
    baseInfo.setMetaCode("xzcopy1");
    baseInfo.setClassifyCode("sp");

    baseonCreateMetaApiDTO.setBaseInfo(baseInfo);



    System.out.println(JSONUtil.toJsonPrettyStr(baseonCreateMetaApiDTO));
    DoipReturn doipReturn = openApiClient.getMetaApi().baseonCreateMeta(baseonCreateMetaApiDTO);

    log.info("创建元数据副本返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功",
}
```
### 数据分类列表

#### 说明

方法名：
```java
DoipReturn claasifyQuery();
```

方法说明：查询数据分类

#### 方法参数

无

#### 返回参数

|  **参数**  |  **类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  code  |  Integer  |  \-  |  状态码(详见状态码说明）  |  1  |
|  message  |  String  |  \-  |  状态码描述  |  成功  |
|  data  |  object  |   |   |   |

#### data数据结构

|  **参数**  |  **参数类型**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- |
|  children  |  Array  |  \-  |  子分类  |   |
|  classifyName  |  String  |  \-  |  分类名  |   |
|  classifyCode  |  String  |  \-  |  分类编码  |   |
|  id  |  Int  |  \-  |  分类id  |  164  |

#### 示例

#### 请求示例代码    
```java
/**
 * 数据分类列表
 */
@Test
void claasifyQuery() {
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    DoipReturn doipReturn = openApiClient.getMetaApi().claasifyQuery();

    log.info("分类列表：{}", JSONUtil.toJsonStr(doipReturn));
}
```
#### 响应示例
```json
{
    "code": 1,
    "message": "成功",
    "data": [{
            "id": 49,
            "parentId": 0,
            "sort": 0,
            "children": [

            ],
            "classifyName": "未分类",
            "classifyCode": "UN_CLASSIFIED",
            "ancestors": "0",
            "level": 1
        },
        {
            "id": 48,
            "parentId": 0,
            "sort": 1,
            "children": [{
                "id": 50,
                "parentId": 48,
                "sort": 1,
                "children": [{
                    "id": 51,
                    "parentId": 50,
                    "sort": 1,
                    "children": [

                    ],
                    "classifyName": "dz",
                    "classifyCode": "dz",
                    "ancestors": "0,48,50",
                    "level": 3
                }],
                "classifyName": "dsf",
                "classifyCode": "fsd",
                "ancestors": "0,48",
                "level": 2
            }],
            "classifyName": "新类型",
            "classifyCode": "NEW_CODE",
            "ancestors": "0",
            "level": 1
        },
        {
            "id": 52,
            "parentId": 0,
            "sort": 1,
            "children": [{
                    "id": 53,
                    "parentId": 52,
                    "sort": 1,
                    "children": [

                    ],
                    "classifyName": "二级目录1-0627",
                    "classifyCode": "20240627101101",
                    "ancestors": "0,52",
                    "level": 2
                },
                {
                    "id": 54,
                    "parentId": 52,
                    "sort": 2,
                    "children": [

                    ],
                    "classifyName": "二级目录2-0627",
                    "classifyCode": "20240627101202",
                    "ancestors": "0,52",
                    "level": 2
                },
                {
                    "id": 57,
                    "parentId": 52,
                    "sort": 3,
                    "children": [

                    ],
                    "classifyName": "二级目录0-0627",
                    "classifyCode": "202406271106",
                    "ancestors": "0,52",
                    "level": 2
                }
            ],
            "classifyName": "一级目录-0627",
            "classifyCode": "202406271011",
            "ancestors": "0",
            "level": 1
        },
        {
            "id": 55,
            "parentId": 0,
            "sort": 2,
            "children": [{
                "id": 56,
                "parentId": 55,
                "sort": 1,
                "children": [

                ],
                "classifyName": "这是个目录-代码与元数据的重复测试",
                "classifyCode": "20240627119",
                "ancestors": "0,55",
                "level": 2
            }],
            "classifyName": "一级目录-0627-02",
            "classifyCode": "202406271023",
            "ancestors": "0",
            "level": 1
        },
        {
            "id": 58,
            "parentId": 0,
            "sort": 3,
            "children": [

            ],
            "classifyName": "标识关联关系图",
            "classifyCode": "relation",
            "ancestors": "0",
            "level": 1
        }
    ]
}
```
### 元数据列表

#### 说明

方法名：
```java
    DoipReturn metaPage(
      @RequestParam(value = "prefix", required = false) String prefix,
      @RequestParam(value = "metaHandle", required = false) String metaHandle,
      @RequestParam(value = "metaCode", required = false) String metaCode,
      @RequestParam(value = "metaState", required = false) Integer metaState,
      @RequestParam(value = "classifyCode", required = false) String classifyCode,
      @RequestParam(value = "startTime", required = false) Date startTime,
      @RequestParam(value = "endTime", required = false) Date endTime,
      @RequestParam("page") Integer page, @RequestParam("size")Integer size);
```
方法说明：查看元数据列表

#### 方法参数

|  **参数**  |  **类型**  |  **是否必填**  |  **最大长度**  |  **备注**  |  **示例值**  |
| --- | --- | --- | --- | --- | --- |
|  prefix  |  String  |  否  |  \-  |  前缀  |   |
|  metaHandle  |  String  |  否  |  \-  |  元数据标识  |   |
|  metaCode  |  String  |  否  |  50  |  元数据编码  |   |
|  metaState  |  int  |  否  |   |  元数据状态 0-未发布 1-发布  |   |
|  classifyCode  |  String  |  否  |   |  分类编码  |   |
|  startTime  |  Date  |  否  |   |  开始时间  |   |
|  endTime  |  Date  |  否  |   |  结束时间  |   |
|  page  |  int  |  是  |   |  页码  |   |
|  size  |  int  |  是  |   |  条数  |   |

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
|  metaState  |  Int  |  \-  |  元数据状态 0-未发布 1-发布  |  1  |
|  metaHandle  |  String  |  \-  |  元数据标识  |  88.608.5288/META\_f90c212ea7ec471  |
|  metaCode  |  String  |  \-  |  元数据编码  |   |
|  createdTime  |  String  |  \-  |  创建时间  |  "2024-06-12 17:01:42"  |
|  classifyName  |  String  |  \-  |  分类名称  |   |
|  isQuote  |  String  |   |  是否引用 0-否 1-是  |   |

#### 示例

#### 请求示例代码    
```java
  /**
  * 元数据列表
  */
 @Test
 void metaList() {
     OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

     DoipReturn doipReturn = openApiClient.getMetaApi().metaPage(null, "88.608.5288/META_f90c212ea7ec471", null, null, null, null, null, 0, 10);

     log.info("元数据列表：{}", JSONUtil.toJsonStr(doipReturn));
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
        "totalCount": 1,
        "totalPage": 1,
        "content": [{
            "metaHandle": "88.608.5288/META_f90c212ea7ec471",
            "metaCode": "peijian",
            "metaName": "电脑配件",
            "metaState": 1,
            "isQuote": 0,
            "createdTime": "2024-07-04 18:59:13",
            "classifyName": "标识关联关系图"
        }]
    }
}  
```
