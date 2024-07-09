# 元数据操作相关接口

## 新增元数据

通过此接口新建元数据模板，进行设定元数据名称、元数据分类、生成元数据标识编码、定义模板实体元素等操作。

### 请求参数

- 请求服务：企业节点业务系统 HTTP 端口（默认 3000）
- 请求方式：POST
- 请求路径：`/api/v1/open/meta/create`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ---------------- |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String | 是       | -        | application/json                    | application/json |

- Body参数：

| 参数                                                       | 类型    | 是否必填 | 最大长度 | 备注                                                                                                       | 示例值 |
| ---------------------------------------------------------- | ------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------- | ------ |
| classifyCode                                               | String  | 是       |          | 本企业内的分类code                                                                                         | "sp"   |
| metaName                                                   | String  | 是       | 100      | 元数据名称                                                                                                 |        |
| metaCode                                                   | String  | 是       | 100      | 元数据代码                                                                                                 |        |
| industryCategory                                           | String  | 是       |          | 行业分类一级                                                                                               |        |
| industrySpecific                                           | String  | 是       |          | 行业分类二级                                                                                               |        |
| industryTrade                                              | String  | 是       |          | 行业分类三级                                                                                               |        |
| industrySubclass                                           | String  | 是       |          | 行业分类四级                                                                                               |        |
| standard                                                   | String  | 否       | 200      | 依据标准                                                                                                   |        |
| metaDesc                                                   | String  | 否       | 1000     | 元数据描述                                                                                                 |        |
| metaItemCreateDTOS[i].itemCode                             | String  | 是       | 50       | 属性编码                                                                                                   |        |
| metaItemCreateDTOS[i].englishName                          | String  | 是       | 50       | 属性英文名                                                                                                 |        |
| metaItemCreateDTOS[i].chineseName                          | String  | 是       | 50       | 属性中文名                                                                                                 |        |
| metaItemCreateDTOS[i].definition                           | String  | 否       | 200      | 属性定义义                                                                                                 |        |
| metaItemCreateDTOS[i].inputNecessary                       | Integer | 否       | -        | 是否是输入性，`0-否，1-是`                                                                               |        |
| metaItemCreateDTOS[i].required                             | Integer | 否       | -        | 是否必填性，`0-否，1-是`                                                                                 |        |
| metaItemCreateDTOS[i].uniqueField                          | Integer | 否       | -        | 是否唯一性，`0-否，1-是`                                                                                 |        |
| metaItemCreateDTOS[i].comment                              | String  | 否       | 200      | 备注                                                                                                       |        |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.dataType         | Integer | 是       |          | 实体类型，`1：字符型，2：数值型，3：日期型，4：文件型，5：引用类型 6：音频 7：视频 8：图片`              |        |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.minLength        | Integer | 否       |          | 最小长度<br />字符型：默认 0                                                                               |        |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.maxLength        | Integer | 否       |          | 最大长度<br />字符型：默认 4000                                                                            |        |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.dateFormat       | String  | 否       |          | 日期格式<br />默认：YYYY-MM-DD                                                                             |        |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.maxFileCount     | Integer | 否       | -        | 最大文件数 1-50，超过 50，默认保存为 50                                                                    |        |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.fileType         | String  | 否       | -        | 文件类型, 例如 "2,3",`2: doc;docx;xps;dot`    `3: xls;xlsx;xlsb;xlsm;csv`   `4:pdf`    `5:zip;rar` |        |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.referenceType    | Integer | 否       | -        | 引用类型：`1：一对一，2：一对多` 默认为 `1: 一对一`                                                    |        |
| metaItemCreateDTOS[i].itemReferenceDTO.referenceMetaHandle | String  | 否       | -        | 引用元数据，dataType:5时必填                                                                               |        |

### 请求示例

```json
{
  "classifyCode": "hxh",
  "metaHandle": "88.608.8889/META_xz_20240516",
  "metaName": "4342",
  "metaCode": "xz888",
  "standard": "",
  "metaDesc": "",
  "industryCategory": "M",
  "industrySpecific": "75",
  "industryTrade": "751",
  "industrySubclass": "7517",
  "metaItemCreateDTOS": [
    {
      "itemCode": "43242",
      "englishName": "23423",
      "chineseName": "24234",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "minLength": 0,
        "maxLength": 4000,
        "dataType": "1"
      },
      "itemReferenceDTO": {}
    },
    {
      "itemCode": "4325",
      "englishName": "5423",
      "chineseName": "24234343",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {

    "dataType": "2"
      },
      "itemReferenceDTO": {}
    },
    {
      "itemCode": "635345",
      "englishName": "24234",
      "chineseName": "2343242",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "dateFormat": "YYYY-MM-DD",
        "dataType": "3"
      },
      "itemReferenceDTO": {}
    },
    {
      "itemCode": "665355",
      "englishName": "2423423",
      "chineseName": "24324234",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {

    "fileType": "2,3",
        "maxFileCount": 1,
        "dataType": "4"
      },
      "itemReferenceDTO": {}
    }
  ]
}
```

### 响应数据

| 参数    | 类型    | 备注                    | 示例值 |
| ------- | ------- | ----------------------- | ------ |
| code    | Integer | 状态码(详见状态码说明） | 10000  |
| message | String  | 状态码描述              | 成功   |

- 响应参数

### 响应示例

```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "metaHandle": "88.608.5288/META_fcc95749f59f428"
    }
}

```

### 异常示例

```json
{
    "message": "接口参数错误:入参metaHandle异常：要修改的元数据不存在!",
    "code": 60005
   
}

```

## 查询元数据

操作者通过此接口查询自己所创建的元数据模板，可查看元数据模板的基本信息及实体元素列表。

### 请求参数

- 请求服务：企业节点业务系统 HTTP 端口（默认 3000）
- 请求方式：GET
- 请求路径：`/api/v1/open/meta/info`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值                                           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ------------------------------------------------ |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJz....... |
| Content-Type  | String | 是       | -        | application/json                    | application/json                                 |

- Query参数：

| 参数       | 类型   | 是否必填 | 最大长度 | 备注               | 示例值                          |
| ---------- | ------ | -------- | -------- | ------------------ | ------------------------------- |
| metaHandle | String | 是       | -        | 要查询的元数据标识 | "88.608.6688/META_123444444444" |

### 请求示例

```json
 /api/v1/open/meta/info?metaHandle=88.608.6688/META_1234
```

### 响应数据

| 参数    | 类型    | 备注                    | 示例值 |
| ------- | ------- | ----------------------- | ------ |
| code    | Integer | 状态码(详见状态码说明） | 1      |
| message | String  | 状态码描述              | 成功   |
| data    | Object  | 具体响应对象            |        |

- data 数据结构

| 参数                                           | 类型    | 备注                                                                                          | 示例值                      |
| ---------------------------------------------- | ------- | --------------------------------------------------------------------------------------------- | --------------------------- |
| classifyCode                                   | String  | 本企业内的分类code                                                                            | "sp"                        |
| metaHandle                                     | String  | 元数据标识                                                                                    | "88.608.6688/META_xz_test2" |
| metaName                                       | String  | 元数据名称                                                                                    |                             |
| metaCode                                       | String  | 元数据代码                                                                                    |                             |
| industryCategory                               | String  | 行业分类一级                                                                                  |                             |
| industrySpecific                               | String  | 行业分类二级                                                                                  |                             |
| industryTrade                                  | String  | 行业分类三级                                                                                  |                             |
| industrySubclass                               | String  | 行业分类四级                                                                                  |                             |
| standard                                       | String  | 依据标准                                                                                      |                             |
| metaDesc                                       | String  | 元数据描述                                                                                    |                             |
| itemVOS[i].itemCode                            | String  | 属性编码                                                                                      |                             |
| itemVOS[i].englishName                         | String  | 属性英文名称                                                                                  |                             |
| itemVOS[i].chineseName                         | String  | 属性中文名称                                                                                  |                             |
| itemVOS[i].definition                          | String  | 属性定义                                                                                      |                             |
| itemVOS[i].inputNecessary                      | Integer | 是否是输入性，`0-否，1-是`                                                                  |                             |
| itemVOS[i].required                            | Integer | 是否必填性，`0-否，1-是`                                                                    |                             |
| itemVOS[i].uniqueField                         | Integer | 是否唯一性，`0-否，1-是`                                                                    |                             |
| itemVOS[i].comment                             | String  | 备注                                                                                          |                             |
| itemVOS[i].itemSchemaVO.dataType               | Integer | 实体类型，`1：字符型，2：数值型，3：日期型，4：文件型，5：引用类型 6：音频 7：视频 8：图片` |                             |
| itemVOS[i].itemSchemaVO.minLength              | Integer | 最小长度                                                                                      |                             |
| itemVOS[i].itemSchemaVO.maxLength              | Integer | 最大长度                                                                                      |                             |
| itemVOS[i].itemSchemaVO.dateFormat             | String  | 日期格式                                                                                      |                             |
| itemVOS[i].itemSchemaVO.maxFileCount           | Integer | 最大文件数量                                                                                  |                             |
| itemVOS[i].itemSchemaVO.referenceType          | Integer | 引用类型：`1：一对一，2：一对多  `                                                          |                             |
| itemVOS[i].itemReferenceVO.referenceMetaHandle | String  | 引用元数据                                                                                    |                             |

### 响应示例

```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "classifyCode": "sp",
        "classifyName": "食品",
        "metaHandle": "88.608.8889/META_xz_copy_test",
        "metaName": "xz_copy_test副本转换",
        "metaCode": "xz_copy_test",
        "industry": "农、林、牧、渔业/农业/谷物种植/稻谷种植",
        "industryCategory": "A",
        "industrySpecific": "01",
        "industryTrade": "011",
        "industrySubclass": "0111",
        "metaState": 1,
        "metaContributor": "88.608.8889",
        "standard": "这里是依据标准：嘿嘿嘿嘿嘿",
        "metaDesc": "这里是描述：哈哈哈哈哈哈哈",
        "createdTime": "2024-05-21 16:59:02",
        "updatedTime": "2024-05-22 13:41:50",
        "itemVOS": [
            {
                "itemIndex": 2000,
                "itemCode": "code1",
                "englishName": "en1",
                "chineseName": "zh1",
                "itemState": 0,
                "definition": "这里是实体定义：呵呵呵呵",
                "inputNecessary": 1,
                "listItemNecessary": 0,
                "required": 1,
                "uniqueField": 1,
                "comment": "这里是实体的备注：嘿哈嘿哈",
                "itemSchemaVO": {
                    "dataType": 1,
                    "minLength": 0,
                    "maxLength": 4000,
                    "charRange": "这里是字符型值域"
                }
            },
            {
                "itemIndex": 2001,
                "itemCode": "code2",
                "englishName": "en2",
                "chineseName": "zh2",
                "itemState": 0,
                "definition": "这里是实体定义：呵呵呵呵",
                "inputNecessary": 1,
                "listItemNecessary": 0,
                "required": 1,
                "uniqueField": 1,
                "comment": "这里是实体备注：呵呵呵呵",
                "itemSchemaVO": {
                    "dataType": 2,
                    "minLength": 0,
                    "maxLength": 38,
                    "accuracy": 1,
                    "numberRange": "[1,10]"
                }
            },
            {
                "itemIndex": 2002,
                "itemCode": "code3",
                "englishName": "en3",
                "chineseName": "zh3",
                "itemState": 0,
                "definition": "这里是实体定义：呵呵呵呵",
                "inputNecessary": 1,
                "listItemNecessary": 0,
                "required": 1,
                "uniqueField": 1,
                "comment": "这里是实体备注：呵呵呵呵",
                "itemSchemaVO": {
                    "dataType": 3,
                    "dateFormat": "YYYY-MM-DD"
                }
            },
            {
                "itemIndex": 2003,
                "itemCode": "code4",
                "englishName": "en4",
                "chineseName": "zh4",
                "itemState": 0,
                "definition": "这里是实体定义：呵呵呵呵",
                "inputNecessary": 1,
                "listItemNecessary": 0,
                "required": 1,
                "uniqueField": 0,
                "comment": "这里是实体备注：呵呵呵呵",
                "itemSchemaVO": {
                    "dataType": 4,
                    "maxFileCount": 1,
                    "fileRange": 2,
                    "fileType": "1,6",
                    "selfDefFileSuffix": "pem"
                }
            },
            {
                "itemIndex": 2004,
                "itemCode": "code5",
                "englishName": "en5",
                "chineseName": "zh5",
                "itemState": 0,
                "definition": "这是是实体定义",
                "inputNecessary": 1,
                "listItemNecessary": 0,
                "required": 1,
                "uniqueField": 1,
                "comment": "这里是实体备注",
                "itemSchemaVO": {
                    "dataType": 5,
                    "referenceType": 1
                },
                "itemReferenceVO": {
                    "referenceMetaHandle": "88.608.8889/META_12345"
                }
            }
        ]
    }
}

```

### 异常示例

```json
{
    "message": "元数据不存在",
    "code": 604
}
```

## 编辑元数据基本信息

操作者通过此接口编辑自己所创建的元数据模板，进行元数据基本信息的修改操作。

### 请求参数

- 请求服务：企业节点业务系统 HTTP 端口（默认 3000）
- 请求方式：PUT
- 请求路径：`/api/v1/open/meta/update-basic-info`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ---------------- |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String | 是       | -        | application/json                    | application/json |

- Body参数：

| 参数             | 类型   | 是否必填 | 最大长度 | 备注               | 示例值                      |
| ---------------- | ------ | -------- | -------- | ------------------ | --------------------------- |
| classifyCode     | String | 是       |          | 本企业内的分类code | "sp"                        |
| metaHandle       | String | 是       | 255      | 元数据标识         | "88.608.6688/META_xz_test2" |
| metaName         | String | 是       | 100      | 元数据名称         |                             |
| metaCode         | String | 是       | 100      | 元数据代码         |                             |
| industryCategory | String | 是       |          | 行业分类一级       |                             |
| industrySpecific | String | 是       |          | 行业分类二级       |                             |
| industryTrade    | String | 是       |          | 行业分类三级       |                             |
| industrySubclass | String | 是       |          | 行业分类四级       |                             |
| standard         | String | 否       | 200      | 依据标准           |                             |
| metaDesc         | String | 否       | 1000     | 元数据描述         |                             |

### 请求示例

```json
 {
    "classifyCode": "PEIFUBEN",
    "metaHandle": "88.608.6688/META_xz_test2",
    "metaName": "xz_test2",
    "metaCode": "xz_test2_code",
    "standard": "依据标准内容000000",
    "metaDesc": "描述内容.....",
    "industryCategory": "E",
    "industrySpecific": "50",
    "industryTrade": "502",
    "industrySubclass": "5022",
}
```

### 响应数据

| 参数    | 类型    | 备注                    | 示例值 |
| ------- | ------- | ----------------------- | ------ |
| code    | Integer | 状态码(详见状态码说明） | 10000  |
| message | String  | 状态码描述              | 成功   |

- 响应参数

### 响应示例

```json
{
    "code": 10000,
    "message": "成功"
}

```

### 异常示例

```json
{
    "message": "接口参数错误:入参metaHandle异常：要修改的元数据不存在!",
    "code": 60005
   
}

```

## 编辑元数据实体列表

操作者通过此接口编辑自己所创建的元数据模板，进行元数据模板实体元素的修改操作。

`注：用户仅可修改自己创建的元数据模板相关信息。`

### 请求参数

- 请求服务：企业节点业务系统 HTTP 端口（默认 3000）
- 请求方式：PUT
- 请求路径：`/api/v1/open/meta/update-item`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ---------------- |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String | 是       | -        | application/json                    | application/json |

- Body参数：

| 参数                                                  | 类型    | 是否必填 | 最大长度 | 备注                                                                                          | 示例值 |
| ----------------------------------------------------- | ------- | -------- | -------- | --------------------------------------------------------------------------------------------- | ------ |
| metaHanlde                                            | String  | 是       |          | 元数据标识                                                                                    |        |
| metaItemDTOS[i].itemCode                              | String  | 是       | 50       |                                                                                               |        |
| metaItemDTOS[i].itemIndex                             | Integer | 否       |          | 传按传的顺序来，如果不传会从已有itemIndex 顺排                                                |        |
| metaItemDTOS[i].englishName                           | String  | 是       | 50       |                                                                                               |        |
| metaItemDTOS[i].chineseName                           | String  | 是       | 50       |                                                                                               |        |
| metaItemDTOS[i].definition                            | String  | 否       |          | 实体值域定义                                                                                  |        |
| metaItemDTOS[i].itemState                             | Integer | 否       |          | 元素状态;0：启用，1：禁用（逻辑删除），2：未生效                                              |        |
| metaItemDTOS[i].inputNecessary                        | Integer | 否       | -        | 是否是输入性，`0-否，1-是`                                                                  |        |
| metaItemDTOS[i].required                              | Integer | 否       | -        | 是否必填性，`0-否，1-是`                                                                    |        |
| metaItemDTOS[i].uniqueField                           | Integer | 否       | -        | 是否唯一性，`0-否，1-是`                                                                    |        |
| metaItemDTOS[i].comment                               | String  | 否       | 200      | 备注                                                                                          |        |
| metaItemDTOS[i].itemSchemaCreateDTO.dataType          | Integer | 是       |          | 实体类型，`1：字符型，2：数值型，3：日期型，4：文件型，5：引用类型 6：音频 7：视频 8：图片` |        |
| metaItemDTOS[i].itemSchemaCreateDTO.minLength         | Integer | 否       |          | 最小长度                                                                                      |        |
| metaItemDTOS[i].itemSchemaCreateDTO.maxLength         | Integer | 否       |          | 最大长度                                                                                      |        |
| metaItemDTOS[i].itemSchemaCreateDTO.dateFormat        | String  | 否       |          | 日期格式<br />默认：YYYY-MM-DD                                                                |        |
| metaItemDTOS[i].itemSchemaCreateDTO.maxFileCount      | Integer | 否       | -        | 最大文件数量                                                                                  |        |
| metaItemDTOS[i].itemSchemaCreateDTO.fileRange         | Integer | 否       | -        | 文件值域：`1：any，2：assign   `                                                            |        |
| metaItemDTOS[i].itemSchemaCreateDTO.fileType          | String  | 否       | -        | 文件类型                                                                                      |        |
| metaItemDTOS[i].itemSchemaCreateDTO.selfDefFileSuffix | String  | 否       | -        | 自定义文件后缀                                                                                | "pem"  |
| metaItemDTOS[i].itemSchemaCreateDTO.referenceType     | Integer | 否       | -        | 引用类型：`1：一对一，2：一对多  `                                                          |        |
| metaItemDTOS[i].itemReferenceDTO.referenceMetaHandle  | String  | 否       | -        | 引用元数据，dataType:5时必填                                                                  |        |

### 请求示例

```json
{
  
}
```

### 响应数据

| 参数    | 类型    | 备注                    | 示例值 |
| ------- | ------- | ----------------------- | ------ |
| code    | Integer | 状态码(详见状态码说明） | 10000  |
| message | String  | 状态码描述              | 成功   |

### 响应示例

```json
{
    "code": 10000,
    "message": "成功"
}

```

### 异常示例

```json
{
    "message": "接口参数错误:入参metaHandle异常：要修改的元数据不存在!",
    "code": 60005
   
}

```

## 删除元数据

通过此接口，用户可删除元数据模板；删除功能支持单个删除或批量删除元数据模板；

`注意：`

> 1、未发布元数据模板，可直接进行删除，已发布元数据模板，需撤回发布后，方可进行删除；
> 2、用户仅可删除自己创建的元数据模板

### 请求参数

- 请求服务：企业节点业务系统 HTTP 端口（默认 3000）
- 请求方式：Delete
- 请求路径：`/api/v1/open/meta/delete`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ---------------- |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String | 是       | -        | application/json                    | application/json |

- Query参数：

| 参数           | 类型               | 是否必填 | 最大长度 | 备注             | 示例值                                                     |
| -------------- | ------------------ | -------- | -------- | ---------------- | ---------------------------------------------------------- |
| metaHandleList | Array `<string>` | 是       | -        | 要操作的标识列表 | [ "88.608.6688/META_123444444444", "88.608.6688/META_123"] |

### 请求示例

```json

/api/v1/open/meta/delete?metaHandleList=88.608.8889/META_3456&metaHandleList=88.608.8889/META_34563333
```

### 响应数据

| 参数    | 类型    | 最大长度 | 备注                    | 示例值 |
| ------- | ------- | -------- | ----------------------- | ------ |
| code    | Integer | -        | 状态码(详见状态码说明） | 10000  |
| message | String  | -        | 状态码描述              | 成功   |

- 响应参数

### 响应示例

```json
{
    "code": 10000,
    "message": "成功",
   
}

```

### 异常示例

```json


{
    "message": "元数据删除失败:[88.608.8889/META_xz_test_schemaDTO]元数据不是自己创建，不能删除",
    "code": 606
}
```

## 元数据授权

### 请求参数

- 请求服务：企业节点业务系统 HTTP 端口（默认 3000）
- 请求方式：POST
- 请求路径：`/api/v1/open/meta/grant/info`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ---------------- |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String | 是       | -        | application/json                    | application/json |

- Body参数：

| 参数              | 类型               | 是否必填 | 最大长度 | 备注                              | 示例值                                                     |
| ----------------- | ------------------ | -------- | -------- | --------------------------------- | ---------------------------------------------------------- |
| scope             | Integer            | 是       | -        | 授权范围：`1-公开  2-指定范`围 |                                                            |
| metaHandle        | String             | 是       |          | 元数据标识                        |                                                            |
| handleUsers       | Array `<string>` | 否       | -        | 新增身份标识                      | [ "88.608.6688/META_123444444444", "88.608.6688/META_123"] |
| removeHandleUsers | Array `<string>` | 否       | -        | 删除身份标识                      | [ "88.608.6688/META_123444444444", "88.608.6688/META_123"] |

### 请求示例

```json
{
    "scope": 2,
    "metaHandle": "88.608.8889/META_qwert11",
    "handleList": [
        "88.608.8889/User_zhaohan"
    ],
  "removeHandleUsers": [
    "88.608.8889/User_zhao"
  ]
}
```

### 响应数据

| 参数    | 类型    | 备注                    | 示例值 |
| ------- | ------- | ----------------------- | ------ |
| code    | Integer | 状态码(详见状态码说明） | 10000  |
| message | String  | 状态码描述              | 成功   |

- 响应参数

### 响应示例

```json
{
    "code": 10000,
    "message": "成功"
  
}

```

### 异常示例

```json
{
    "message": "validate.bind.error",
    "data": {
        "errors": [
            {
                "name": "metaHandleList",
                "errorMsg": "入参元数据标识列表metaHandleList不能为空"
            }
        ]
    },
    "code": 30000
}
```

## 发布/撤回元数据

通过此接口，可发布未发布的元数据模板，发布后，可基于该元数据模版进行标识数据创建； 可撤回已发布的元数据模板；未发布的元数据模板不可被解析，不能继续进行标识数据的创建；已创建标识数据不受其影响。

### 请求参数

- 请求服务：企业节点业务系统 HTTP 端口（默认 3000）
- 请求方式：PUT
- 请求路径：`/api/v1/open/meta/publish-or-withdraw`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ---------------- |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String | 是       | -        | application/json                    | application/json |

- Body参数：

| 参数           | 类型               | 是否必填 | 最大长度 | 备注                                            | 示例值                                                     |
| -------------- | ------------------ | -------- | -------- | ----------------------------------------------- | ---------------------------------------------------------- |
| metaHandleList | Array `<string>` | 是       | -        | 要操作的标识列表                                | [ "88.608.6688/META_123444444444", "88.608.6688/META_123"] |
| opType         | String             | 是       | -        | 操作类型，枚举值 `publish` 或  `withdraw` | "publish"                                                  |

### 请求示例

```json
 {
    "metaHandleList": [
        "88.608.8889/META_3456",
        "88.608.8889/META_qwert11",
        "88.608.8889/META_xz_update_basic",
        "88.608.8889/META_345678990"
    ],
    "opType": "publish"
}
```

### 响应数据

| 参数    | 类型    | 备注                    | 示例值 |
| ------- | ------- | ----------------------- | ------ |
| code    | Integer | 状态码(详见状态码说明） | 10000  |
| message | String  | 状态码描述              | 成功   |

- 响应参数

### 响应示例

```json
{
    "code": 10000,
    "message": "成功",
    "data": [
        {
            "metaHandle": "88.608.8889/META_3456",
            "state": "success",
            "reason": ""
        },
        {
            "metaHandle": "88.608.8889/META_qwert11",
            "state": "success",
            "reason": ""
        },
        {
            "metaHandle": "88.608.8889/META_xz_update_basic",
            "state": "success",
            "reason": ""
        },
        {
            "metaHandle": "88.608.8889/META_345678990",
            "state": "failed",
            "reason": "元数据标识88.608.8889/META_345678990不存在"
        }
    ]
}

```

### 异常示例

```json
{
    "message": "validate.bind.error",
    "data": {
        "errors": [
            {
                "name": "metaHandleList",
                "errorMsg": "入参元数据标识列表metaHandleList不能为空"
            }
        ]
    },
    "code": 30000
}
```

## 创建元数据副本

通过此接口，用户可参照其他企业的元数据模板创建自己的元数据模板，并在该元数据下进行标识注册。

`注意:`

> 1. 用户仅可对授权给自己查看权限或公开的元数据模板创建副本；
> 2. 创建副本成功后，该元数据模板不可对实体元素进行编辑。
> 3. 创建副本成功后，该元数据仅可向本企业应用身份或身份组进行授权（若有其他企业需要创建该元数据模板副本，应向原元数据模板所有者索要权限）；

### 请求参数

- 请求服务：企业节点业务系统 HTTP 端口（默认 3000）
- 请求方式：POST
- 请求路径：`/api/v1/open/meta/baseon-create`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ---------------- |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String | 是       | -        | application/json                    | application/json |

- Body参数：

| 参数                  | 类型   | 是否必填 | 最大长度 | 备注               | 示例值 |
| --------------------- | ------ | -------- | -------- | ------------------ | ------ |
| baseonHandle          | String | 是       | -        | 要引用的元数据标识 |        |
| baseInfo.metaCode     | String | 是       | 50       | 设置的元数据编码   |        |
| baseInfo.classifyCode | String | 是       |          | 所属的本企业分类   |        |

### 请求示例

```json

  {
  "baseonHandle": "88.608.6688/META_xz_contains_all",
  "baseInfo": {
    "metaCode": "xzcopy1",
    "classifyCode": "sp"
  }
}

```

### 响应数据

| 参数    | 类型    | 最大长度 | 备注                    | 示例值 |
| ------- | ------- | -------- | ----------------------- | ------ |
| code    | Integer | -        | 状态码(详见状态码说明） | 10000  |
| message | String  | -        | 状态码描述              | 成功   |

- 响应参数

### 响应示例

```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "metaHandle": "88.608.5288/META_9c55c22e31"
    }
}

```

### 异常示例

```json

{
    "message": "没有权限查看数据",
    "code": 60001
}

```
