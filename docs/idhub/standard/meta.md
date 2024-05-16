# 元数据操作相关接口

## 新增元数据

新增元数据接口。

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

| 参数                                                        | 类型    | 是否必填 | 最大长度 | 备注                                                                  | 示例值                      |
| ----------------------------------------------------------- | ------- | -------- | -------- | --------------------------------------------------------------------- | --------------------------- |
| classifyCode                                                | String  | 是       |          | 本企业内的分类code                                                    | "sp"                        |
| metaHandle                                                  | String  | 是       |          | 元数据标识                                                            | "88.608.6688/META_xz_test2" |
| metaName                                                    | String  | 是       | 100      | 元数据名称                                                            |                             |
| metaCode                                                    | String  | 是       | 100      | 元数据代码                                                            |                             |
| industryCategory                                            | String  | 是       |          | 行业分类一级                                                          |                             |
| industrySpecific                                            | String  | 是       |          | 行业分类二级                                                          |                             |
| industryTrade                                               | String  | 是       |          | 行业分类三级                                                          |                             |
| industrySubclass                                            | String  | 是       |          | 行业分类四级                                                          |                             |
| standard                                                    | String  | 否       | 200      | 依据标准                                                              |                             |
| metaDesc                                                    | String  | 否       | 1000     | 元数据描述                                                            |                             |
| metaItemCreateDTOS[i].itemCode                              | String  | 是       |          |                                                                       |                             |
| metaItemCreateDTOS[i].englishName                           | String  | 是       |          |                                                                       |                             |
| metaItemCreateDTOS[i].chineseName                           | String  | 是       |          |                                                                       |                             |
| metaItemCreateDTOS[i].definition                            | String  | 否       |          | 实体值域定义                                                          |                             |
| metaItemCreateDTOS[i].inputNecessary                        | Integer | 否       | -        | 是否是输入性，`0-否，1-是`                                          |                             |
| metaItemCreateDTOS[i].listItemNecessary                     | Integer | 否       | -        | 是否是列表项，`0-否，1-是`                                          |                             |
| metaItemCreateDTOS[i].required                              | Integer | 否       | -        | 是否必填性，`0-否，1-是`                                            |                             |
| metaItemCreateDTOS[i].uniqueField                           | Integer | 否       | -        | 是否唯一性，`0-否，1-是`                                            |                             |
| metaItemCreateDTOS[i].comment                               | String  | 否       | 200      | 备注                                                                  |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.dataType          | Integer | 是       |          | 实体类型，`1：字符型，2：数值型，3：日期型，4：文件型，5：引用类型` |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.minLength         | Integer | 否       |          | 最小长度                                                              |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.maxLength         | Integer | 否       |          | 最大长度                                                              |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.charRange         | String  | 否       |          | 字符值域                                                              |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.accuracy          | Integer | 否       |          | 数值型精度                                                            |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.numberRange       | String  | 否       |          | 数值范围                                                              |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.dateFormat        | String  | 否       |          | 日期格式                                                              |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.maxFileCount      | Integer | 否       | -        | 最大文件数量                                                          |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.fileRange         | Integer | 否       | -        | 文件值域：`1：any，2：assign   `                                    |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.fileType          | String  | 否       | -        | 文件类型                                                              |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.selfDefFileSuffix | String  | 否       | -        | 自定义文件后缀                                                        | "pem"                       |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.referenceType     | Integer | 否       | -        | 引用类型：`1：一对一，2：一对多  `                                  |                             |
| metaItemCreateDTOS[i].itemReferenceDTO.referenceMetaHandle  | String  | 否       | -        | 引用元数据，dataType:5时必填                                          |                             |

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
  "isQuote": 0,
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
        "minLength": 0,
        "maxLength": 38,
        "accuracy": 0,
        "numberRange": null,
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
        "fileRange": 1,
        "fileType": null,
        "maxFileCount": 1,
        "dataType": "4"
      },
      "itemReferenceDTO": {}
    }
  ]
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

## 查询元数据实体列表

查询元数据的实体属性列表接口。

### 请求参数

- 请求服务：企业节点业务系统 HTTP 端口（默认 3000）
- 请求方式：GET
- 请求路径：`/api/v1/open/meta/item-llist`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ---------------- |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String | 是       | -        | application/json                    | application/json |

- Query参数：

| 参数       | 类型   | 是否必填 | 最大长度 | 备注       | 示例值       |
| ---------- | ------ | -------- | -------- | ---------- | ------------ |
| metaHandle | String | 是       | -        | 元数据标识 | "88.xxxxxx." |

### 请求示例

```json

/api/v1/open/meta/item-llist?metaHandle=88.608.22.xxxxx
```

### 响应数据

| 参数    | 类型    | 最大长度 | 备注                    | 示例值 |
| ------- | ------- | -------- | ----------------------- | ------ |
| code    | Integer | -        | 状态码(详见状态码说明） | 10000  |
| message | String  | -        | 状态码描述              | 成功   |

- 响应参数

| 参数                                                        | 类型    | 是否必填 | 最大长度 | 备注                                                                  | 示例值                      |
| ----------------------------------------------------------- | ------- | -------- | -------- | --------------------------------------------------------------------- | --------------------------- |
| classifyCode                                                | String  | 是       |          | 本企业内的分类code                                                    | "sp"                        |
| metaHandle                                                  | String  | 是       |          | 元数据标识                                                            | "88.608.6688/META_xz_test2" |
| metaName                                                    | String  | 是       | 100      | 元数据名称                                                            |                             |
| metaCode                                                    | String  | 是       | 100      | 元数据代码                                                            |                             |
| industryCategory                                            | String  | 是       |          | 行业分类一级                                                          |                             |
| industrySpecific                                            | String  | 是       |          | 行业分类二级                                                          |                             |
| industryTrade                                               | String  | 是       |          | 行业分类三级                                                          |                             |
| industrySubclass                                            | String  | 是       |          | 行业分类四级                                                          |                             |
| standard                                                    | String  | 否       | 200      | 依据标准                                                              |                             |
| metaDesc                                                    | String  | 否       | 1000     | 元数据描述                                                            |                             |
| metaItemCreateDTOS[i].itemCode                              | String  | 是       |          |                                                                       |                             |
| metaItemCreateDTOS[i].englishName                           | String  | 是       |          |                                                                       |                             |
| metaItemCreateDTOS[i].chineseName                           | String  | 是       |          |                                                                       |                             |
| metaItemCreateDTOS[i].definition                            | String  | 否       |          | 实体值域定义                                                          |                             |
| metaItemCreateDTOS[i].inputNecessary                        | Integer | 否       | -        | 是否是输入性，`0-否，1-是`                                          |                             |
| metaItemCreateDTOS[i].listItemNecessary                     | Integer | 否       | -        | 是否是列表项，`0-否，1-是`                                          |                             |
| metaItemCreateDTOS[i].required                              | Integer | 否       | -        | 是否必填性，`0-否，1-是`                                            |                             |
| metaItemCreateDTOS[i].uniqueField                           | Integer | 否       | -        | 是否唯一性，`0-否，1-是`                                            |                             |
| metaItemCreateDTOS[i].comment                               | String  | 否       | 200      | 备注                                                                  |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.dataType          | Integer | 是       |          | 实体类型，`1：字符型，2：数值型，3：日期型，4：文件型，5：引用类型` |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.minLength         | Integer | 否       |          | 最小长度                                                              |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.maxLength         | Integer | 否       |          | 最大长度                                                              |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.charRange         | String  | 否       |          | 字符值域                                                              |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.accuracy          | Integer | 否       |          | 数值型精度                                                            |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.numberRange       | String  | 否       |          | 数值范围                                                              |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.dateFormat        | String  | 否       |          | 日期格式                                                              |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.maxFileCount      | Integer | 否       | -        | 最大文件数量                                                          |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.fileRange         | Integer | 否       | -        | 文件值域：`1：any，2：assign   `                                    |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.fileType          | String  | 否       | -        | 文件类型                                                              |                             |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.selfDefFileSuffix | String  | 否       | -        | 自定义文件后缀                                                        | "pem"                       |
| metaItemCreateDTOS[i].itemSchemaCreateDTO.referenceType     | Integer | 否       | -        | 引用类型：`1：一对一，2：一对多  `                                  |                             |
| metaItemCreateDTOS[i].itemReferenceDTO.referenceMetaHandle  | String  | 否       | -        | 引用元数据，dataType:5时必填                                          |                             |

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

修改元数据的实体属性列表接口。

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

| 参数                                              | 类型    | 是否必填 | 最大长度 | 备注                                                                  | 示例值 |
| ------------------------------------------------- | ------- | -------- | -------- | --------------------------------------------------------------------- | ------ |
| metaHanlde                                        | String  | 是       |          | 元数据标识                                                            |        |
| metaItemInfo[i].itemCode                          | String  | 是       |          |                                                                       |        |
| metaItemInfo[i].englishName                       | String  | 是       |          |                                                                       |        |
| metaItemInfo[i].chineseName                       | String  | 是       |          |                                                                       |        |
| metaItemInfo[i].definition                        | String  | 否       |          | 实体值域定义                                                          |        |
| metaItemInfo[i].itemState                         | Integer | 否       |          | 元素状态;0：启用，1：禁用（逻辑删除），2：未生效                      |        |
| metaItemInfo[i].inputNecessary                    | Integer | 否       | -        | 是否是输入性，`0-否，1-是`                                          |        |
| metaItemInfo[i].listItemNecessary                 | Integer | 否       | -        | 是否是列表项，`0-否，1-是`                                          |        |
| metaItemInfo[i].required                          | Integer | 否       | -        | 是否必填性，`0-否，1-是`                                            |        |
| metaItemInfo[i].uniqueField                       | Integer | 否       | -        | 是否唯一性，`0-否，1-是`                                            |        |
| metaItemInfo[i].comment                           | String  | 否       | 200      | 备注                                                                  |        |
| metaItemInfo[i].itemSchemaInfo.dataType           | Integer | 是       |          | 实体类型，`1：字符型，2：数值型，3：日期型，4：文件型，5：引用类型` |        |
| metaItemInfo[i].itemSchemaInfo.minLength          | Integer | 否       |          | 最小长度                                                              |        |
| metaItemInfo[i].itemSchemaInfo.maxLength          | Integer | 否       |          | 最大长度                                                              |        |
| metaItemInfo[i].itemSchemaInfo.charRange          | String  | 否       |          | 字符值域                                                              |        |
| metaItemInfo[i].itemSchemaInfo.accuracy           | Integer | 否       |          | 数值型精度                                                            |        |
| metaItemInfo[i].itemSchemaInfo.numberRange        | String  | 否       |          | 数值范围                                                              |        |
| metaItemInfo[i].itemSchemaInfo.dateFormat         | String  | 否       |          | 日期格式                                                              |        |
| metaItemInfo[i].itemSchemaInfo.maxFileCount       | Integer | 否       | -        | 最大文件数量                                                          |        |
| metaItemInfo[i].itemSchemaInfo.fileRange          | Integer | 否       | -        | 文件值域：`1：any，2：assign   `                                    |        |
| metaItemInfo[i].itemSchemaInfo.fileType           | String  | 否       | -        | 文件类型                                                              |        |
| metaItemInfo[i].itemSchemaInfo.selfDefFileSuffix  | String  | 否       | -        | 自定义文件后缀                                                        | "pem"  |
| metaItemInfo[i].itemSchemaInfo.referenceType      | Integer | 否       | -        | 引用类型：`1：一对一，2：一对多  `                                  |        |
| metaItemInfo[i].itemReference.referenceMetaHandle | String  | 否       | -        | 引用元数据，dataType:5时必填                                          |        |

### 请求示例

```json
{
  
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

## 元数据基本信息查询

查询元数据非实体属性列表外的基本信息。

### 请求参数

- 请求服务：企业节点业务系统 HTTP 端口（默认 3000）
- 请求方式：GET
- 请求路径：`/api/v1/open/meta/basic-info`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值                                           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ------------------------------------------------ |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJz....... |
| Content-Type  | String | 是       | -        | application/json                    | application/json                                 |

- Body参数：

| 参数       | 类型   | 是否必填 | 最大长度 | 备注               | 示例值                          |
| ---------- | ------ | -------- | -------- | ------------------ | ------------------------------- |
| metaHandle | String | 是       | -        | 要查询的元数据标识 | "88.608.6688/META_123444444444" |

### 请求示例

```json
 /api/v1/open/meta/basic-info?metaHandle=88.608.6688/META_1234
```

### 响应数据

| 参数    | 类型    | 最大长度 | 备注                    | 示例值 |
| ------- | ------- | -------- | ----------------------- | ------ |
| code    | Integer | -        | 状态码(详见状态码说明） | 1      |
| message | String  | -        | 状态码描述              | 成功   |
| data    | Object  |          | 具体响应对象            |        |

### 响应示例

```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "metaClassify": "hxh",
        "metaHandle": "88.608.8889/META_qwert11",
        "metaName": "qerq",
        "metaCode": "eqweqw2",
        "industry": "农、林、牧、渔业/农业/谷物种植/稻谷种植",
        "industryCategory": "A",
        "industrySpecific": "01",
        "industryTrade": "011",
        "industrySubclass": "0111",
        "metaState": 1,
        "metaContributor": "88.608.8889",
        "standard": "ewewq",
        "metaDesc": "",
        "acl": "662b71bb8ccd971a5f1d5bfc"
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

## 更新元数据基本信息

通过此接口对元数据基本信息进行修改。

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
| metaHandle       | String | 是       |          | 元数据标识         | "88.608.6688/META_xz_test2" |
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

| 参数    | 类型    | 最大长度 | 备注                    | 示例值 |
| ------- | ------- | -------- | ----------------------- | ------ |
| code    | Integer | -        | 状态码(详见状态码说明） | 10000  |
| message | String  | -        | 状态码描述              | 成功   |

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

## 元数据授权信息-新增

给标识用户新增权限？？

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

| 参数       | 类型               | 是否必填 | 最大长度 | 备注                              | 示例值                                                     |
| ---------- | ------------------ | -------- | -------- | --------------------------------- | ---------------------------------------------------------- |
| scope      | Integer            | 是       | -        | 授权范围：`1-公开  2-指定范`围 |                                                            |
| metaHandle | String             | 是       |          | 元数据标识                        |                                                            |
| handleList | Array `<string>` | 是       | -        | 要操作的标识列表                  | [ "88.608.6688/META_123444444444", "88.608.6688/META_123"] |

### 请求示例

```json
{
    "scope": 2,
    "metaHandle": "88.608.8889/META_qwert11",
    "handleList": [
        "88.608.8889/User_zhaohan"
    ]
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

支持批量操作元数据的发布和撤回。

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
