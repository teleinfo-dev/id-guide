# 标识操作接口

##  查询标识

###  请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：GET
- 请求路径：`/identityv2/data/detail`
- Header:

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |

- param:

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**     | **示例值**       |
| -------- | -------- | ------------ | ------------ | ------------ | -------------- |
| handle   | String   | 是           | 255          | 要查询的标识 | 88.709.911/123 |

### 请求示例

>`/identityv2/data/detail?handle=88.709.911/123`

###  响应参数

| **参数**                  | **类型** | **最大长度** | **备注**                           | **示例值**                                                   |
| ------------------------- | -------- | ------------ | ---------------------------------- | ------------------------------------------------------------ |
| status                    | Int      | -            | 状态码                             | 0                                                            |
| message                   | String   | -            | 状态码描述                         | "success"                                                    |
| data                      | Object   | -            | 返回数据                           |                                                              |
| data.prefix               | String   | -            | 前缀                               | "88.709.911"                                                 |
| data.handle               | String   | -            | 标识                               | "88.709.911/123"                                             |
| data.templateVersion      | String   | -            | 模板版本                           | "666"                                                        |
| data.value                | Array    | -            | 标识属性                           | -                                                            |
| data.value[i].auth        | String   | -            | 权限码，预留字段                   | -                                                            |
| data.value[i].index       | Int      | -            | 标识属性索引                       | 1000                                                         |
| data.value[i].type        | String   | -            | 标识属性类型                       | "TEMPLATE_ID"                                                |
| data.value[i].data        | Object   |              | 标识属性内容                       |                                                              |
| data.value[i].data.format | String   | -            | 标识属性内容格式（现只支持string） | "string"                                                     |
| data.value[i].data.value  | String   | -            | 标识属性内容值                     | "88.709.0000/6tcuB9XDqyPGyJK9Xm5h6wUTbtriaeDRjDAY4nbNN3Ta4TLoSzb34S2xUMBGwfEh" |

###  响应示例

```json
{
  "message": "success",
  "status": 1,
  "data": {
    "code": "200",
    "prefix": "88.1021.150",
    "handle": "88.1021.150/002",
    "templateVersion": "1.0",
    "value": [
      {
        "data": {
          "format": "string",
          "value": "1.0"
        },
        "auth": "1",
        "index": 1001,
        "type": "TEMPLATE"
      }
    ]
  }
}
```

###  异常示例

```json
{
  "message": "缺少必要的请求参数: handle",
  "status": -2,
  "data": null
}
```

- 常见错误见附录

##  注册标识

###  请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：POST
- 请求路径：`/identityv2/data`
- Header：

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |

- Body

| **参数**            | **类型** | **是否必填** | **最大长度** | **备注**                                                     | **示例值**        |
| ------------------- | -------- | ------------ | ------------ | ------------------------------------------------------------ | ----------------- |
| handle              | String   | 是           | 255          | 要注册的标识                                                 | "88.709.911/1234" |
| templateVersion     | String   | 是           | 128          | 数据模板的产品型号（请在业务系统的“标识注册-数据模板”模板中获取） | "666"             |
| value               | Array    | 是           | -            | 标识属性                                                     | -                 |
| value[i].auth       | String   | 否           | -            | 权限码，预留字段                                             | -                 |
| value[i].index      | Int      | 是           | 11           | 标识属性索引（不能为1001）                                   | 2000              |
| value[i].type   | String   | 是           | 128          | 标识属性类型（数据模板的：idType）                           | "test"            |
| value[i].data       | Object   | 是           | -            | 标识属性内容                                                 | -                 |
| value[i].data.format | String   | 是           | -            | 标识属性内容格式（现只支持string）                           | "string"          |
| value[i].data.vlaue | String   | 是           | 255          | 标识属性内容值                                               | "88.709.0000/123" |

###  请求示例

```json
{
    "handle": "88.1021.150/xx002",
    "templateVersion": "1.0",
    "value": [
        {
            "data": {
                "format": "string",
                "value": "小型机械01"
            },
            "auth": "",
            "index": 2000,
            "type": "name"
        }
    ]
}
```

###  响应参数

| **参数** | **类型** | **最大长度** | **备注**     | **示例值** |
| -------- | -------- | ------------ | ------------ | ---------- |
| status   | Int      | -            | 状态码       | 0          |
| message  | String   | -            | 状态码描述   | "success"  |
| data     | Object   | -            | 是否操作成功 | true       |

###  响应示例

```json
{
    "message": "success",
    "status": 1,
    "data": true
}
```

###  异常示例

```json
{
    "message": "非法操作，索引1000在模板中不存在",
    "status": -2,
    "data": null
}
```

- 常见错误见附录

###  注意事项

>- 标识属性索引，即value[i].index不能为1001，其为预留索引
>- 标识属性内容格式，即value[i].format暂时只支持string
>- 接口会根据templateVersion获取定义的元数据模板来限制注册数据
>- index和type必须和模板中的保持一致
>- 模板index和type请在业务系统的“标识注册-数据模板-详情”页面中获取
>- 如果接口返回的HTTP状态码为504则代表Nginx和后台服务超时，此时标识有可能注册成功也可能失败。这种情况建议重新注册标识，如果第二次调用接口时响应已存在，则代表标识注册成功
>- 管理员角可以调用
>- 企业相关用户可使用当前前缀创建标识

##  批量注册标识

###  请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：POST
- 请求路径：`/identityv2/data/batchCreate`
- Header：

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |

- Body

| **参数**            | **类型** | **是否必填** | **最大长度** | **备注**                                                     | **示例值**        |
| ------------------- | -------- | ------------ | ------------ | ------------------------------------------------------------ | ----------------- |
| handle              | String   | 是           | 255          | 要注册的标识                                                 | "88.709.911/1234" |
| templateVersion     | String   | 是           | 128          | 数据模板的产品型号（请在业务系统的“标识注册-数据模板”模板中获取） | "666"             |
| value               | Array    | 是           | -            | 标识属性                                                     | -                 |
| value[i].auth       | String   | 否           | -            | 权限码，预留字段                                             | -                 |
| value[i].index      | Int      | 是           | 11           | 标识属性索引（不能为1001）                                   | 2000              |
| value[i].type   | String   | 是           | 128          | 标识属性类型（数据模板的：idType）                           | "test"            |
| value[i].data       | Object   | 是           | -            | 标识属性内容                                                 | -                 |
| value[i].data.format | String   | 是           | -            | 标识属性内容格式（现只支持string）                           | "string"          |
| value[i].data.vlaue | String   | 是           | 255          | 标识属性内容值                                               | "88.709.0000/123" |

###  请求示例

```json
[
    {
        "handle": "88.101.0042/001",
        "templateVersion": "1.0.0",
        "value": [
            {
                "data": {
                    "format": "string",
                    "value": "www.001.com"
                },
                "auth": "",
                "index": 2000,
                "type": "URL"
            },
            {
                "data": {
                    "format": "string",
                    "value": "www.002.com"
                },
                "auth": "",
                "index": 2001,
                "type": "URL2"
            }
        ]
    },
    {
        "handle": "88.101.0042/002",
        "templateVersion": "1.0.0",
        "value": [
            {
                "data": {
                    "format": "string",
                    "value": "www.003.com"
                },
                "auth": "",
                "index": 2000,
                "type": "URL"
            },
            {
                "data": {
                    "format": "string",
                    "value": "www.004.com"
                },
                "auth": "",
                "index": 2001,
                "type": "URL2"
            }
        ]
    }
]
```

###  响应参数

| **参数**       | **类型** | **最大长度** | **备注**     | **示例值**       |
| -------------- | -------- | ------------ | ------------ | ---------------- |
| status         | Int      | -            | 状态码       | 0                |
| message        | String   | -            | 状态码描述   | "success"        |
| data           | Object   | -            | 是否操作成功 | true             |
| data[i].msg    | String   | -            | 操作结果     | "success"        |
| data[i].handle | String   | -            | 操作标识     | "88.709.911/123" |

###  响应示例

```json
{
    "message": "success",
    "status": 1,
    "data": [
        {
            "handle": "88.101.0042/001",
            "msg": "success"
        },
        {
            "handle": "88.101.0042/002",
            "msg": "success"
        }
    ]
}
```

###  异常示例

```json
{
    "message": "success",
    "status": 1,
    "data": [
        {
            "handle": "88.101.0042/001",
            "msg": "success"
        },
        {
            "handle": "88.101.0042/001",
            "msg": "标识已存在"
        }
    ]
}
```

- 常见错误见附录

###  注意事项

>- 标识属性索引，即value[i].index不能为1001，其为预留索引
>- 标识属性内容格式，即value[i].format暂时只支持string
>- 接口会根据templateVersion获取定义的元数据模板来限制注册数据
>- 批量注册最大支持2000条，超出则给出提示信息
>- 单并发下，推荐每次批注册100-1500个标识
>- 如果接口返回的HTTP状态码为504则代表Nginx和后台服务超时，此时标识有可能注册成功也可能失败。这种情况建议重新注册标识，如果第二次调用接口时响应标识已存在，则代表标识注册成功
>- 管理员角可以调用
>- 企业相关用户可使用当前前缀创建标识

##  更新标识

###  请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：PUT
- 请求路径：`/identityv2/data`
- Header（同注册标识）
- Body（同注册标识）

###  请求示例

>同注册标识

###  响应参数

>同注册标识

###  响应示例

>同注册标识

###  异常示例

>同注册标识

###  注意事项

>同注册标识

##  批量更新标识

###  请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：PUT
- 请求路径：`/identityv2/data/batchUpdate`
- Header（同批量注册标识）
- Body（同批量注册标识）

###  请求示例

>同批量注册标识

###  响应参数

>同批量注册标识

###  响应示例

>同批量注册标识

###  异常示例

>同批量注册标识

###  注意事项

>同批量注册标识

##  删除标识

###  请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：DELETE
- 请求路径：`/identityv2/data`
- Header：

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |

- Body

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**     | **示例值**       |
| -------- | -------- | ------------ | ------------ | ------------ | ---------------- |
| handle   | String   | 是           | 255          | 要删除的标识 | "88.709.911/123" |

###  请求示例

```json
{
  "handle": "88.1021.150/xx002"
}
```

###  响应参数

| **参数** | **类型** | **最大长度** | **备注**     | **示例值** |
| -------- | -------- | ------------ | ------------ | ---------- |
| status   | Int      | -            | 状态码       | 0          |
| message  | String   | -            | 状态码描述   | "success"  |
| data     | Object   | -            | 是否操作成功 | true       |

###  响应示例

```json
{
    "message": "success",
    "status": 1,
    "data": true
}
```

###  异常示例

```json
{
    "message": "没有找到标识",
    "status": -2,
    "data": null
}
```

- 常见错误见附录

##  批量删除标识

###  请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：DELETE
- 请求路径：`/identityv2/data/batchDelete`
- Header：

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |

- Body

| **参数**  | **类型** | **是否必填** | **最大长度** | **备注**     | **示例值**       |
|---------|--------| ------------ |----------| ------------ | ---------------- |
| handles | Array  | 是           | -        | 要删除的标识 |  |

###  请求示例

```json
[
    "86.709.612/cc",
    "86.709.612/cc1"
]
```

### 响应参数

| **参数**       | **类型** | **最大长度** | **备注**     | **示例值**       |
| -------------- | -------- | ------------ | ------------ | ---------------- |
| status         | Int      | -            | 状态码       | 0                |
| message        | String   | -            | 状态码描述   | "success"        |
| data           | Object   | -            | 是否操作成功 | true             |
| data[i].msg    | String   | -            | 操作结果     | "success"        |
| data[i].handle | String   | -            | 操作标识     | "88.709.911/123" |
| data[i].code   | Int      | -            | 操作码       | 1                |

###  响应示例

```json
{
  "message": "success",
  "status": 1,
  "data": [
    {
      "handle": "86.709.612/cc",
      "code": 1,
      "msg": "success"
    },
    {
      "handle": "86.709.612/cc1",
      "code": 1,
      "msg": "success"
    }
  ]
}
```

###  异常示例

```json
{
    "message": "success",
    "status": 1,
    "data": [
        {
            "handle": "86.709.612/cc",
            "code": -2,
            "msg": "标识不存在"
        },
        {
            "handle": "86.709.612/cc",
            "code": -2,
            "msg": "标识不存在"
        }
    ]
}
```

- 常见错误见附录

###  注意事项

>- 批量删除最大支持2000条，超出则给出提示信息
>- 单并发下，推荐每次批量删除100-1500个标识
>- 管理员角可以调用
>- 企业相关用户可删除当前前缀标识
