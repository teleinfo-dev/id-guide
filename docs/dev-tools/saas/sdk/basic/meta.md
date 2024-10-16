# 元数据

## 新增元数据

通过此方法新建元数据模板，进行设定元数据名称、元数据分类、生成元数据标识编码、定义模板实体元素等操作。

### 方法调用

```java
DoipReturn createMetaInfo(@RequestBody MetaCreateApiDTO metaCreateDTO);
```

### 方法参数

| **参数**                                               | **类型** | **是否必填** | **最大长度** | **备注**                                                                                   | **示例值**        |
| ------------------------------------------------------------ | -------------- | ------------------ | ------------------ | ------------------------------------------------------------------------------------------------ | ----------------------- |
| classifyCode                                                 | String         | 是                 |                    | 本企业内的分类code                                                                               | "sp"                    |
| metaName                                                     | String         | 是                 | 100                | 元数据名称                                                                                       | "88.101.3366/Meta_demo" |
| metaCode                                                     | String         | 是                 | 100                | 元数据代码                                                                                       | "meta_code_demo"        |
| industryCategory                                             | String         | 是                 |                    | 行业分类一级                                                                                     | "R"                     |
| industrySpecific                                             | String         | 是                 |                    | 行业分类二级                                                                                     | "86"                    |
| industryTrade                                                | String         | 是                 |                    | 行业分类三级                                                                                     | "861"                   |
| industrySubclass                                             | String         | 是                 |                    | 行业分类四级                                                                                     | "8610"                  |
| standard                                                     | String         | 否                 | 200                | 依据标准                                                                                         |                         |
| metaDesc                                                     | String         | 否                 | 1000               | 元数据描述                                                                                       |                         |
| metaItemCreateDTOS\[i\].itemCode                             | String         | 是                 | 50                 | 属性编码                                                                                         | "name_code"             |
| metaItemCreateDTOS\[i\].englishName                          | String         | 是                 | 50                 | 属性英文名                                                                                       | "name"                  |
| metaItemCreateDTOS\[i\].chineseName                          | String         | 是                 | 50                 | 属性中文名                                                                                       | "姓名"                  |
| metaItemCreateDTOS\[i\].definition                           | String         | 否                 | 200                | 实体值域定义                                                                                     |                         |
| metaItemCreateDTOS\[i\].inputNecessary                       | Integer        | 否                 | \-                 | 是否是输入项，`0-否，1-是`                                                                     |                         |
| metaItemCreateDTOS\[i\].required                             | Integer        | 否                 | \-                 | 是否必填项，`0-否，1-是`                                                                       |                         |
| metaItemCreateDTOS\[i\].uniqueField                          | Integer        | 否                 | \-                 | 是否唯一项，`0-否，1-是`                                                                       |                         |
| metaItemCreateDTOS\[i\].comment                              | String         | 否                 | 200                | 备注                                                                                             |                         |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.dataType         | Integer        | 是                 |                    | 实体类型，`1：字符型，2：数值型，3：日期型，4：文件型，5：引用类型 6：音频 7：视频 8：图片` | 1                       |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.minLength        | Integer        | 否                 |                    | 最小长度 字符型：默认 0                                                                         |                         |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.maxLength        | Integer        | 否                 |                    | 最大长度 字符型：默认 4000                                                                      |                         |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.dateFormat       | String         | 否                 |                    | 日期格式 默认：YYYY-MM-DD                                                                        |                         |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.maxFileCount     | Integer        | 否                 | \-                 | 最大文件数 1-50，超过 50，默认保存为 50                                                       |                         |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.fileType         | String         | 否                 | \-                 | 文件类型, "2,3", 2:doc;docx;xps;dot 3: xls;xlsx;xlsb;xlsm;csv 4:pdf 5:zip;rar              |                         |
| metaItemCreateDTOS\[i\].itemReferenceDTO.referenceMetaHandle | String         | 否                 | \-                 | 引用元数据，dataType:5时必填                                                                     |                         |

### 返回参数

| **名称** | **类型** | **必选** | **约束** | **中文名** | **说明** |
| -------------- | -------------- | -------------- | -------------- | ---------------- | -------------- |
| code           | integer        | true           | none           | none             | 返回码         |
| message        | string         | true           | none           | none             | 返回消息       |
| data           | object         | true           | none           | none             | 返回数据       |

### 请求示例   

```java
 /**
 * 新建元数据
 */
@Test
void metaCreateApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    //构建元数据对象
    MetaCreateApiDTO createApiDTO = new MetaCreateApiDTO();
    //分类编码
    createApiDTO.setClassifyCode("NEW_CODE");
    //元数据标识
    createApiDTO.setMetaHandle("88.608.5288/META_07_03_quote_music_video_image");
    //元数据名称
    createApiDTO.setMetaName("07_03_quote_music_video_image");
    //元数据编码
    createApiDTO.setMetaCode("07_03-quote_music_video_image");
    //行业分类
    createApiDTO.setIndustryCategory("R");
    createApiDTO.setIndustrySpecific("86");
    createApiDTO.setIndustryTrade("861");
    createApiDTO.setIndustrySubclass("8610");
    createApiDTO.setStandard("");
    createApiDTO.setMetaDesc("");

    //构建属性集合
    List<MetaItemCreateApiDTO> metaItemCreateDTOS = new ArrayList<>();

    //引用类型
    MetaItemCreateApiDTO quoteMetaItemCreateApiDTO = new MetaItemCreateApiDTO();
    //属性编码
    quoteMetaItemCreateApiDTO.setItemCode("code5");
    //属性英文名
    quoteMetaItemCreateApiDTO.setEnglishName("en5");
    //属性中文名
    quoteMetaItemCreateApiDTO.setChineseName("zh5");
    //是否是输入项
    quoteMetaItemCreateApiDTO.setInputNecessary(1);
    //是否必填性
    quoteMetaItemCreateApiDTO.setRequired(0);
    //是否唯一项
    quoteMetaItemCreateApiDTO.setUniqueField(0);
    quoteMetaItemCreateApiDTO.setComment("备注");
    //构建实体对象
    MetaItemSchemaCreateApiDTO quoteMetaItemSchemaCreateApiDTO = new MetaItemSchemaCreateApiDTO();
    //实体类型
    quoteMetaItemSchemaCreateApiDTO.setDataType(5);
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
    //发送创建元数据请求
    DoipReturn doipReturn = openApiClient.getMetaApi().createMetaInfo(createApiDTO);

    log.info("新建元数据返回结果：{}", doipReturn);
}
```

### 响应示例

```json
{
    "code": 1,
    "message": "成功",
    "data": null
}
```

## 查询元数据

操作者通过此方法查询自己所创建的元数据模板，可查看元数据模板的基本信息及实体元素列表。

### 方法调用

```java
DoipReturn metaInfo(@RequestParam(value = "metaHandle") String metaHandle);
```

### 方法参数

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**     | **示例值**                 |
| -------------- | -------------- | ------------------ | ------------------ | ------------------ | -------------------------------- |
| metaHandle     | String         | 是                 | \-                 | 要查询的元数据标识 | "88.608.6688/META\_123444444444" |

### 返回参数

| **参数** | **类型** | **最大长度** | **备注**          | **示例值** |
| -------------- | -------------- | ------------------ | ----------------------- | ---------------- |
| code           | Integer        | \-                 | 状态码(详见状态码说明） | 1                |
| message        | String         | \-                 | 状态码描述              | 成功             |
| data           | Object         |                    | 具体响应对象            |                  |

### 响应参数

| **参数**                                                | **类型** | **是否必填** | **最大长度** | **备注**                                                                                   | **示例值**              |
| ------------------------------------------------------------- | -------------- | ------------------ | ------------------ | ------------------------------------------------------------------------------------------------ | ----------------------------- |
| classifyCode                                                  | String         | 是                 |                    | 本企业内的分类code                                                                               | "sp"                          |
| metaHandle                                                    | String         | 是                 |                    | 元数据标识                                                                                       | "88.608.6688/META\_xz\_test2" |
| metaName                                                      | String         | 是                 | 100                | 元数据名称                                                                                       | "meta_dong_test"              |
| metaCode                                                      | String         | 是                 | 100                | 元数据代码                                                                                       | "dong_code_demo"              |
| industryCategory                                              | String         | 是                 |                    | 行业分类一级                                                                                     | "R"                           |
| industrySpecific                                              | String         | 是                 |                    | 行业分类二级                                                                                     | "86"                          |
| industryTrade                                                 | String         | 是                 |                    | 行业分类三级                                                                                     | "861"                         |
| industrySubclass                                              | String         | 是                 |                    | 行业分类四级                                                                                     | "8610                         |
| standard                                                      | String         | 否                 | 200                | 依据标准                                                                                         |                               |
| metaDesc                                                      | String         | 否                 | 1000               | 元数据描述                                                                                       |                               |
| metaItemCreateDTOS\[i\].itemCode                              | String         | 是                 |                    |                                                                                                  | "code1_demo"                  |
| metaItemCreateDTOS\[i\].englishName                           | String         | 是                 |                    |                                                                                                  | "name"                        |
| metaItemCreateDTOS\[i\].chineseName                           | String         | 是                 | 50                 |                                                                                                  | "姓名"                        |
| metaItemCreateDTOS\[i\].definition                            | String         | 否                 |                    | 实体值域定义                                                                                     |                               |
| metaItemCreateDTOS\[i\].inputNecessary                        | Integer        | 否                 | \-                 | 是否是输入项，`0-否，1-是`                                                                     |                               |
| metaItemCreateDTOS\[i\].listItemNecessary                     | Integer        | 否                 | \-                 | 是否是列表项，`0-否，1-是`                                                                     |                               |
| metaItemCreateDTOS\[i\].required                              | Integer        | 否                 | \-                 | 是否必填项，`0-否，1-是`                                                                       |                               |
| metaItemCreateDTOS\[i\].uniqueField                           | Integer        | 否                 | \-                 | 是否唯一项，`0-否，1-是`                                                                       |                               |
| metaItemCreateDTOS\[i\].comment                               | String         | 否                 | 200                | 备注                                                                                             |                               |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.dataType          | Integer        | 是                 |                    | 实体类型，`1：字符型，2：数值型，3：日期型，4：文件型，5：引用类型 6：音频 7：视频 8：图片` | 1                             |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.minLength         | Integer        | 否                 |                    | 最小长度                                                                                         |                               |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.maxLength         | Integer        | 否                 |                    | 最大长度                                                                                         |                               |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.dateFormat        | String         | 否                 |                    | 日期格式                                                                                         |                               |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.maxFileCount      | Integer        | 否                 | \-                 | 最大文件数量                                                                                     |                               |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.fileRange         | Integer        | 否                 | \-                 | 文件值域：`1：any，2：assign`                                                                  |                               |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.fileType          | String         | 否                 | \-                 | 文件类型                                                                                         |                               |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.selfDefFileSuffix | String         | 否                 | \-                 | 自定义文件后缀                                                                                   | "pem"                         |
| metaItemCreateDTOS\[i\].itemSchemaCreateDTO.referenceType     | Integer        | 否                 | \-                 | 引用类型：`2：一对多`                                                                          |                               |
| metaItemCreateDTOS\[i\].itemReferenceDTO.referenceMetaHandle  | String         | 否                 | \-                 | 引用元数据，dataType:5时必填                                                                     |                               |

### 请求示例   

```java
@Test
void metaInfoApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    //查询元数据信息
    DoipReturn doipReturn = openApiClient.getMetaApi().metaInfo("88.608.5288/META_07_01");

    log.info("查询元数据返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```

### 响应示例

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

## 编辑元数据基本信息

操作者通过此方法编辑自己所创建的元数据模板，进行元数据基本信息的修改操作。

### 方法调用

```java
DoipReturn updateMetaBasicInfo(@RequestBody MetaBasicInfoDTO metaBasicInfoDTO);
```

### 方法参数

| **参数**   | **类型** | **是否必填** | **最大长度** | **备注**     | **示例值**            |
| ---------------- | -------------- | ------------------ | ------------------ | ------------------ | --------------------------- |
| classifyCode     | String         | 是                 |                    | 本企业内的分类code | "sp"                        |
| metaHandle       | String         | 是                 | 255                | 元数据标识         | "88.608.6688/META_xz_test2" |
| metaName         | String         | 是                 | 100                | 元数据名称         | "meta_dz_test"              |
| metaCode         | String         | 是                 | 100                | 元数据代码         | "meta_dz_code"              |
| industryCategory | String         | 是                 |                    | 行业分类一级       | "R"  取的字典表key值        |
| industrySpecific | String         | 是                 |                    | 行业分类二级       | "86"                        |
| industryTrade    | String         | 是                 |                    | 行业分类三级       | "861"                       |
| industrySubclass | String         | 是                 |                    | 行业分类四级       | "8610"                      |
| standard         | String         | 否                 | 200                | 依据标准           |                             |
| metaDesc         | String         | 否                 | 1000               | 元数据描述         |                             |

### 返回参数

| **名称** | **类型** | **必选** | **约束** | **中文名** | **说明** |
| -------------- | -------------- | -------------- | -------------- | ---------------- | -------------- |
| code           | integer        | true           | none           | none             | 返回码         |
| message        | string         | true           | none           | none             | 返回消息       |

### 请求示例  

```java
/**
 * 编辑元数据
 */
@Test
void metaUpdateInfoApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    //构建编辑元数据对象
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
  
    //发送请求
    DoipReturn doipReturn = openApiClient.getMetaApi().updateMetaBasicInfo(metaBasicInfoDTO);

    log.info("编辑元数据返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}  
```

### 响应示例

```json
{
    "code": 1,
    "message": "成功"
}
```

## 编辑元数据实体列表

操作者通过此方法编辑自己所创建的元数据模板，进行元数据模板实体元素的修改操作。

### 方法调用

```java
DoipReturn updateItem(@RequestBody MetaItemUpdateApiDTO metaItemUpdateApiDTO);
```

`注意：用户仅可修改自己创建的元数据模板相关信息。`

### 方法参数

| **参数**                                          | **类型** | **是否必填** | **最大长度** | **备注**                                                                                   | **示例值**         |
| ------------------------------------------------------- | -------------- | ------------------ | ------------------ | ------------------------------------------------------------------------------------------------ | ------------------------ |
| metaHanlde                                              | String         | 是                 |                    | 元数据标识                                                                                       | "88.608.8889/META_11122" |
| metaItemDTOS\[i\].itemCode                              | String         | 是                 | 50                 | 属性编码                                                                                         | "code1"                  |
| metaItemDTOS\[i\].englishName                           | String         | 是                 | 50                 |                                                                                                  | "en1"                    |
| metaItemDTOS\[i\].chineseName                           | String         | 是                 | 50                 |                                                                                                  | "cn1"                    |
| metaItemDTOS\[i\].definition                            | String         | 否                 |                    | 实体值域定义                                                                                     |                          |
| metaItemDTOS\[i\].itemState                             | Integer        | 否                 |                    | 元素状态;0：启用，1：禁用（逻辑删除），2：未生效                                                 |                          |
| metaItemDTOS\[i\].inputNecessary                        | Integer        | 否                 | \-                 | 是否是输入性，`0-否，1-是`                                                                     |                          |
| metaItemDTOS\[i\].required                              | Integer        | 否                 | \-                 | 是否必填性，`0-否，1-是`                                                                       |                          |
| metaItemDTOS\[i\].uniqueField                           | Integer        | 否                 | \-                 | 是否唯一性，`0-否，1-是`                                                                       |                          |
| metaItemDTOS\[i\].comment                               | String         | 否                 | 200                | 备注                                                                                             |                          |
| metaItemDTOS\[i\].itemSchemaCreateDTO.dataType          | Integer        | 是                 |                    | 实体类型，`1：字符型，2：数值型，3：日期型，4：文件型，5：引用类型 6：音频 7：视频 8：图片` | 1                        |
| metaItemDTOS\[i\].itemSchemaCreateDTO.minLength         | Integer        | 否                 |                    | 最小长度                                                                                         |                          |
| metaItemDTOS\[i\].itemSchemaCreateDTO.maxLength         | Integer        | 否                 |                    | 最大长度，字符型长度：0-4000                                                                     |                          |
| metaItemDTOS\[i\].itemSchemaCreateDTO.dateFormat        | String         | 否                 |                    | 日期格式 默认：YYYY-MM-DD                                                                        |                          |
| metaItemDTOS\[i\].itemSchemaCreateDTO.maxFileCount      | Integer        | 否                 | \-                 | 最大文件数量                                                                                     |                          |
| metaItemDTOS\[i\].itemSchemaCreateDTO.fileRange         | Integer        | 否                 | \-                 | 文件值域：`1：any，2：assign`                                                                  |                          |
| metaItemDTOS\[i\].itemSchemaCreateDTO.fileType          | String         | 否                 | \-                 | 文件类型                                                                                         |                          |
| metaItemDTOS\[i\].itemSchemaCreateDTO.selfDefFileSuffix | String         | 否                 | \-                 | 自定义文件后缀                                                                                   | "pem"                    |
| metaItemDTOS\[i\].itemReferenceDTO.referenceMetaHandle  | String         | 否                 | \-                 | 引用元数据，dataType:5时必填                                                                     |                          |

### 返回参数

| **参数** | **类型** | **最大长度** | **备注**          | **示例值** |
| -------------- | -------------- | ------------------ | ----------------------- | ---------------- |
| code           | Integer        | \-                 | 状态码(详见状态码说明） | 1                |
| message        | String         | \-                 | 状态码描述              | 成功             |

### 请求示例 

```java
    /**
     * 编辑元数据实体列表
     */
    @Test
    void updateItemApiTest() {
        //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
        OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);
    
        //构建编辑元数据的对象
        MetaItemUpdateApiDTO metaItemUpdateApiDTO = new MetaItemUpdateApiDTO();
        metaItemUpdateApiDTO.setMetaHandle("88.608.5288/META_07_01");

        List<MetaItemCreateApiDTO> metaItemDTOS = new ArrayList<>();
        //修改属性值设置
        MetaItemCreateApiDTO metaItemCreateApiDTO = new MetaItemCreateApiDTO();
        //属性编码
        metaItemCreateApiDTO.setItemCode("code1");
        //属性英文名
        metaItemCreateApiDTO.setEnglishName("en1");
        //属性中文名
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
        //调用方法编辑元数据实体列表
        DoipReturn doipReturn = openApiClient.getMetaApi().updateItem(metaItemUpdateApiDTO);

        log.info("编辑元数据实体列表返回结果：{}", JSONUtil.toJsonStr(doipReturn));
    }
```

### 响应示例

```json
{
    "code": 1,
    "message": "成功"
}
```

## 删除元数据

通过此方法，用户可删除元数据模板；删除功能支持单个删除或批量删除元数据模板

### 方法调用

```java
DoipReturn deleteMeta(@RequestParam(value = "metaHandleList", defaultValue = "") List<String> metaHandleList);
```

`注意:`

- 未发布元数据模板，可直接进行删除，已发布元数据模板，需撤回发布后，方可进行删除；
- 用户仅可删除自己创建的元数据模板。

### 方法参数

| **参数** | **类型**     | **是否必填** | **最大长度** | **备注**   | **示例值**                                             |
| -------------- | ------------------ | ------------------ | ------------------ | ---------------- | ------------------------------------------------------------ |
| metaHandleList | Array `<string>` | 是                 | \-                 | 要操作的标识列表 | \["88.608.6688/META\_123444444444","88.608.6688/META\_123"\] |

### 返回参数

| **参数** | **类型** | **最大长度** | **备注**          | **示例值** |
| -------------- | -------------- | ------------------ | ----------------------- | ---------------- |
| code           | Integer        | \-                 | 状态码(详见状态码说明） | 1                |
| message        | String         | \-                 | 状态码描述              | 成功             |

### 请求示例   

```java
/**
 * 删除元数据
 */
@Test
void deleteMetaApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    //设置要删除的元数据集合
    List<String> metaHandleList = new ArrayList<>();
    metaHandleList.add("88.608.5288/META_07_01");

    //调用删除元数据方法
    DoipReturn doipReturn = openApiClient.getMetaApi().deleteMeta(metaHandleList);

    log.info("删除元数据返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```

### 响应示例

```json
{
    "code": 1,
    "message": "成功"
}
```

## 元数据授权

将元数据的查看权限授权给其他标识身份，将标识身份的元数据查看权限移除

### 方法调用

```java
DoipReturn addMetaGrant(@RequestBody MetaGrantApiDTO metaGrantApiDTO);
```

### 方法参数

| **参数**    | **类型**     | **是否必填** | **最大长度** | **备注**                     | **示例值**                                               |
| ----------------- | ------------------ | ------------------ | ------------------ | ---------------------------------- | -------------------------------------------------------------- |
| scope             | Integer            | 是                 | \-                 | 授权范围：`1-公开  2-指定范`围 | 1                                                              |
| metaHandle        | String             | 是                 |                    | 元数据标识                         | "88.608.5288/META_dong-ceshi-6-22"                             |
| handleUsers       | Array `<string>` | 否                 | \-                 | 新增身份标识                       | \["88.608.6688/META\_123444444444", "88.608.6688/META\_123"\] |
| removeHandleUsers | Array `<string>` | 否                 | \-                 | 删除身份标识                       | \["88.608.6688/META\_123444444444", "88.608.6688/META\_123"\] |

### 返回参数

| **参数** | **类型** | **最大长度** | **备注**          | **示例值** |
| -------------- | -------------- | ------------------ | ----------------------- | ---------------- |
| code           | Integer        | \-                 | 状态码(详见状态码说明） | 1                |
| message        | String         | \-                 | 状态码描述              | 成功             |

### 请求示例 

```java
/**
 * 元数据授权
 */
@Test
void addMetaGrantApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);


    MetaGrantApiDTO metaGrantApiDTO = new MetaGrantApiDTO();
    metaGrantApiDTO.setScope(2);
    metaGrantApiDTO.setMetaHandle("88.608.5288/META_07_01");

    //被授权的标识身份集合
    List<String> handleUsers = new ArrayList<>();
    handleUsers.add("88.608.5288/App_rwer");
    metaGrantApiDTO.setHandleUsers(handleUsers);

    //需要被移除的标识身份集合
    List<String> removeHandleUsers = new ArrayList<>();
    metaGrantApiDTO.setRemoveHandleUsers(removeHandleUsers);


    System.out.println(JSONUtil.toJsonPrettyStr(metaGrantApiDTO));
    //调用授权方法授权元数据权限给标识身份
    DoipReturn doipReturn = openApiClient.getMetaApi().addMetaGrant(metaGrantApiDTO);

    log.info("元数据授权返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```

### 响应示例

```json
{
    "code": 1,
    "message": "成功"
}
```

## 发布/撤回元数据

通过此方法，可发布未发布的元数据模板，发布后，可基于该元数据模版进行标识数据创建； 可撤回已发布的元数据模板；未发布的元数据模板不可被解析，不能继续进行标识数据的创建；已创建标识数据不受其影响。

### 方法调用

```java
DoipReturn publishOrWithdraw(@RequestBody PublishOrWithdrawApiDTO paramsDTO);
```

### 方法参数

| **参数** | **类型**     | **是否必填** | **最大长度** | **备注**                                   | **示例值**                                                 |
| -------------- | ------------------ | ------------------ | ------------------ | ------------------------------------------------ | ---------------------------------------------------------------- |
| metaHandleList | Array `<string>` | 是                 | \-                 | 要操作的标识列表                                 | \[ "88.608.6688/META\_123444444444", "88.608.6688/META\_123"\] |
| opType         | String             | 是                 | \-                 | 操作类型，枚举值 `publish` 或  `withdraw` | "publish"                                                        |

### 返回参数

| **名称** | **类型** | **必选** | **约束** | **中文名** | **说明** |
| -------------- | -------------- | -------------- | -------------- | ---------------- | -------------- |
| code           | integer        | true           | none           | none             | 返回码         |
| message        | string         | true           | none           | none             | 返回消息       |
| data           | object         | true           | none           | none             | 返回数据       |

### 请求示例  

```java
/**
 * 发布/撤回元数据
 */
@Test
void publishOrWithdrawApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);
  
    //构建发布/撤回元数据请求参数
    PublishOrWithdrawApiDTO publishOrWithdrawApiDTO = new PublishOrWithdrawApiDTO();
    publishOrWithdrawApiDTO.setOpType("publish");
    publishOrWithdrawApiDTO.setMetaHandleList(Arrays.asList("88.608.5288/META_07_01", "88.608.5288/META_07_02"));


    System.out.println(JSONUtil.toJsonPrettyStr(publishOrWithdrawApiDTO));
    //调用发布/撤回元数据方法
    DoipReturn doipReturn = openApiClient.getMetaApi().publishOrWithdraw(publishOrWithdrawApiDTO);

    log.info("发布/撤回元数据返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```

### 响应示例

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

## 创建元数据副本

通过此方法，用户可参照其他企业的元数据模板创建自己的元数据模板，并在该元数据下进行标识注册。

### 方法调用

```java
DoipReturn baseonCreateMeta(@RequestBody BaseonCreateMetaApiDTO metaCopyApiDTO);
```

`注意`

- 用户仅可对授权给自己查看权限或公开的元数据模板创建副本；
- 创建副本成功后，该元数据模板不可对实体元素进行编辑。
- 创建副本成功后，该元数据仅可向本企业应用身份或身份组进行授权（若有其他企业需要创建该元数据模板副本，应向原元数据模板所有者索要权限）；

### 方法参数

| **参数**        | **类型** | **是否必填** | **最大长度** | **备注**     | **示例值**                     |
| --------------------- | -------------- | ------------------ | ------------------ | ------------------ | ------------------------------------ |
| baseonHandle          | String         | 是                 | \-                 | 要引用的元数据标识 | ""88.608.5288/META_dong-ceshi-6-22"" |
| baseInfo.metaHandle   | String         | 是                 | \-                 | 要创建的元数据标识 | ""88.608.5288/META_ceshi-copy""      |
| baseInfo.metaCode     | String         | 是                 | 50                 | 设置的元数据编码   | "ceshi-code"                         |
| baseInfo.classifyCode | String         | 是                 |                    | 所属的本企业分类   | "NEW_CODE"                           |

### 返回参数

| **参数** | **类型** | **最大长度** | **备注**          | **示例值** |
| -------------- | -------------- | ------------------ | ----------------------- | ---------------- |
| code           | Integer        | \-                 | 状态码(详见状态码说明） | 1                |
| message        | String         | \-                 | 状态码描述              | 成功             |

### 请求示例   

```java
/**
 * 创建元数据副本
 */
@Test
void baseonCreateMetaApiTest() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

    //构建创建元数据副本请求参数
    BaseonCreateMetaApiDTO baseonCreateMetaApiDTO = new BaseonCreateMetaApiDTO();

    baseonCreateMetaApiDTO.setBaseonHandle("88.608.5288/META_07_01");
    BaseonInfoDTO baseInfo = new BaseonInfoDTO();
    baseInfo.setMetaHandle("88.608.5288/META_test_zyh_002_copy1");
    baseInfo.setMetaCode("xzcopy1");
    baseInfo.setClassifyCode("sp");
    baseonCreateMetaApiDTO.setBaseInfo(baseInfo);
  
    System.out.println(JSONUtil.toJsonPrettyStr(baseonCreateMetaApiDTO));
    //调用创建元数据副本方法
    DoipReturn doipReturn = openApiClient.getMetaApi().baseonCreateMeta(baseonCreateMetaApiDTO);

    log.info("创建元数据副本返回结果：{}", JSONUtil.toJsonStr(doipReturn));
}
```

### 响应示例

```json
{
    "code": 1,
    "message": "成功",
}
```

## 数据分类列表

获取本企业下全量的数据分类列表

### 方法调用

```java
DoipReturn claasifyQuery();
```

### 方法参数

无

### 返回参数

* 公共响应参数

| **参数** | **类型** | **最大长度** | **备注**          | **示例值** |
| -------------- | -------------- | ------------------ | ----------------------- | ---------------- |
| code           | Integer        | \-                 | 状态码(详见状态码说明） | 1                |
| message        | String         | \-                 | 状态码描述              | 成功             |
| data           | object         |                    |                         |                  |

* data数据结构

| 参数         | 类型    | 备注               | 示例值         |
| ------------ | ------- | ------------------ | -------------- |
| classifyCode | String  | 本企业内的分类code | "sp"           |
| classifyName | String  | 分类名称           | "我是一级分类" |
| id           | Integer | 分类id             | 1              |
| parentId     | Integer | 父id               | 1              |
| sort         | Integer | 排序               | 1              |
| children     | Array[] | 子集               |                |
| level        | Integer | 层级               | 1              |

### 请求示例  

```java
/**
 * 数据分类列表
 */
@Test
void claasifyQuery() {
    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
    OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);
    //调用分类列表方法
    DoipReturn doipReturn = openApiClient.getMetaApi().claasifyQuery();

    log.info("分类列表：{}", JSONUtil.toJsonStr(doipReturn));
}
```

### 响应示例

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

## 元数据列表

操作者通过此方法获取某个数据分类下的元数据模板列表。

### 方法调用

```java
DoipReturn metaPage(
    @RequestParam(value = "metaHandle", required = false) String metaHandle,
    @RequestParam(value = "metaState", required = false) Integer metaState,
    @RequestParam(value = "classifyCode") String classifyCode,
    @RequestParam(value = "startTime", required = false) String startTime,
    @RequestParam(value = "endTime", required = false) String endTime,
    @RequestParam("page") Integer page, @RequestParam("size")Integer size);
```

### 方法参数

| 参数         | 类型    | 是否必填 | 最大长度 | 备注                         | 示例值                             |
| ------------ | ------- | -------- | -------- | ---------------------------- | ---------------------------------- |
| classifyCode | String  | 是       | -        | 分类code                     | "NEW_code"                         |
| metaHandle   | String  | 否       | -        | 元数据标识                   | "88.608.5288/META_f90c212ea7ec471" |
| metaState    | Integer | 否       | -        | 0-未发布 1-已发布            | 1                                  |
| startTime    | String  | 否       | -        | 开始时间 yyyy-MM-dd HH:mm:ss | "2024-2-12 12:12:12"               |
| endTime      | String  | 否       | -        | 结束时间 yyyy-MM-dd HH:mm:ss | "2024-2-12 12:12:12"               |
| page         | Integer | 否       | -        | 默认值0                      | 0                                  |
| size         | Integer | 否       | -        | 默认值10                     | 10                                 |

### 返回参数

* 公共响应参数

| **参数** | **类型** | **最大长度** | **备注**          | **示例值** |
| -------------- | -------------- | ------------------ | ----------------------- | ---------------- |
| code           | Integer        | \-                 | 状态码(详见状态码说明） | 1                |
| message        | String         | \-                 | 状态码描述              | 成功             |
| data           | Object         | \-                 | 返回数据                | \-               |

* data数据结构

| 参数         | 类型    | 备注                       | 示例值                             |
| ------------ | ------- | -------------------------- | ---------------------------------- |
| metaHandle   | String  | 元数据标识                 | "88.608.5288/META_f90c212ea7ec471" |
| metaName     | String  | 元数据名称                 | "meta_dong"                        |
| classifyName | String  | 所属分类名称               | "我是所属分类"                     |
| id           | Integer | 元数据id                   |                                    |
| metaCode     | String  | 元数据编码                 | "mete-demo-code"                   |
| metaState    | Integer | 元数据状态 0-未发布 1-发布 | 1                                  |
| createdTime  | String  | 元数据创建时间             | "2024-2-12 12:12:12"               |
| isQuote      | Integer | 是否为副本 0-否 1-是       | 0                                  |

### 请求示例   

```java
  /**
  * 元数据列表
  */
 @Test
 void metaList() {
     //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
     OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);
     //调用元数据列表方法 分类code必传
     DoipReturn doipReturn = openApiClient.getMetaApi().metaPage(null, "88.608.5288/META_f90c212ea7ec471", null, null, null, null, null, 0, 10);

     log.info("元数据列表：{}", JSONUtil.toJsonStr(doipReturn));
 }  
```

### 响应示例

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

## 标识数据列表

操作者通过此方法获取某个元数据模板下的标识列表。

### 方法调用

```java
DoipReturn handlePage(@RequestParam("metaHandle") String metaHandle,
    @RequestParam(value = "handleName", required = false) String handleName,
    @RequestParam(value = "startTime", required = false) String startTime,
    @RequestParam(value = "endTime", required = false) String endTime,
    @RequestParam("page") Integer page, @RequestParam("size")Integer size);
```

### 方法参数

| 参数       | 类型    | 是否必填 | 最大长度 | 备注                         | 示例值                             |
| ---------- | ------- | -------- | -------- | ---------------------------- | ---------------------------------- |
| metaHandle | String  | 是       | -        | 元数据标识                   | "88.608.5288/META_dong-ceshi-6-22" |
| handleName | String  | 否       | -        | 实例标识                     | "88.608.5288/dongzhaohui"          |
| startTime  | String  | 否       | -        | 开始时间 yyyy-MM-dd HH:mm:ss | "2024-01-24 14:41:23"              |
| endTime    | String  | 否       | -        | 结束时间 yyyy-MM-dd HH:mm:ss | "2024-01-24 14:41:23"              |
| page       | Integer | 否       | -        | 默认值0                      | 0                                  |
| size       | Integer | 否       | -        | 默认值10                     | 10                                 |

### 返回参数

* 公共响应参数

| **参数** | **类型** | **最大长度** | **备注**          | **示例值** |
| -------------- | -------------- | ------------------ | ----------------------- | ---------------- |
| code           | Integer        | \-                 | 状态码(详见状态码说明） | 1                |
| message        | String         | \-                 | 状态码描述              | 成功             |
| data           | Object         | \-                 | 返回数据                | \-               |

* data数据结构

| 参数        | 类型   | 备注          | 示例值                    |
| ----------- | ------ | ------------- | ------------------------- |
| handleName  | String | 实例标识      | "88.608.5288/dongzhaohui" |
| updateTime  | String | 更新时间      | "2024-01-24 14:41:23"     |
| createdBy   | String | 用户名/应用名 | "应用名"                  |
| createdTime | String | 创建时间      | "2024-01-24 14:41:23"     |

### 请求示例  

```java
  /**
  * 标识数据列表
  */
    @Test
    void handlePage() {
        //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥
      OpenApiClient openApiClient = new OpenApiClient(url, handle, privateKeyPem);

      //调用标识数据列表方法 元数据标识必传
      DoipReturn doipReturn = openApiClient.getMetaApi().handlePage("88.608.5288/META_dong-ceshi-6-22",null,"2024-01-24 14:41:23","2024-06-24 14:41:23",null,null);

      log.info("标识数据列表：{}", JSONUtil.toJsonStr(doipReturn));
      }
```

### 响应示例

```json
 {
  "code": 1,
  "message": "成功",
  "data": {
    "pageSize": 10,
    "pageNumber": 1,
    "totalCount": 1,
    "totalPage": 1,
    "content": [
      {
        "handleName": "88.608.5288/234242342",
        "updateTime": "2024-07-08 17:15:53",
        "createTime": "2024-07-08 17:15:53",
        "createdBy": "用户名/应用名"
      }
    ]
  }
}
```
