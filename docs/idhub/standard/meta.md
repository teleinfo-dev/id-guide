# 元数据操作相关接口

## 更新元数据基本信息

通过此接口对元数据基本信息进行修改。

### 请求参数

- 请求服务：企业节点服务器的 HTTP 端口（默认 8000）
- 请求方式：PUT
- 请求路径：`/api/v2/meta/update-basic-info`
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

## 发布/撤回元数据

支持批量操作元数据的发布和撤回。

### 请求参数

- 请求服务：企业节点服务器的 HTTP 端口（默认 8000）
- 请求方式：PUT
- 请求路径：/api/v2/meta/publish-or-withdraw
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ---------------- |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String | 是       | -        | application/json                    | application/json |

- Body参数：

| 参数           | 类型               | 是否必填 | 最大长度 | 备注                                         | 示例值                                                     |
| -------------- | ------------------ | -------- | -------- | -------------------------------------------- | ---------------------------------------------------------- |
| metaHandleList | Array `<string>` | 是       | -        | 要操作的标识列表                             | [ "88.608.6688/META_123444444444", "88.608.6688/META_123"] |
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
