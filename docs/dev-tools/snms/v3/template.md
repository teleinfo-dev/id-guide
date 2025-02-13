# 数据模板相关接口

## 查询数据模板

数据模板查询接口用来查询已经建立的数据模板相关信息，用户可以通过此接口查询数据模板详细信息。

### 请求参数

- 请求服务：企业节点业务系统HTTP端口（默认 3000）
- 请求方式：GET
- 请求路径：`/snms/api/v3/template`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ---------------- |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String | 是       | -        | application/json                    | application/json |

- Param：

| 参数    | 类型   | 是否必填 | 最大长度 | 备注     | 示例值     |
| ------- | ------ | -------- | -------- | -------- | ---------- |
| prefix  | String | 是       | 64       | 前缀     | 88.888.888 |
| version | String | 是       | 128      | 模板版本 | test       |

### 请求示例

> `/snms/api/v3/template?prefix=88.888.888&version=test`

### 响应参数

- 公共响应参数

| 参数    | 类型    | 最大长度 | 备注                    | 示例值  |
| ------- | ------- | -------- | ----------------------- | ------- |
| status  | Integer | -        | 状态码(详见状态码说明） | 1       |
| message | String  | -        | 状态码描述              | success |

- 响应参数

| 参数                        | 类型    | 最大长度 | 备注                                            | 示例值    |
| --------------------------- | ------- | -------- | ----------------------------------------------- | --------- |
| prefix                      | String  | -        | 前缀                                            | 88.101.5  |
| version                     | String  | -        | 模板版本                                        | 1.0.1     |
| industryCategory            | String  | -        | 行业门类                                        | A         |
| industrySpecific            | String  | -        | 行业大类                                        | 01        |
| industryTrade               | String  | -        | 行业中类                                        | 011       |
| industrySubclass            | String  | -        | 行业小类                                        | 0111      |
| type                        | Integer | -        | 元数据对象类型[枚举值: 1:主动标识载体、 2:其他] | 1         |
| description                 | String  | -        | 描述                                            | 模板1.0.1 |
| items                       | Array   | -        | 模板内容                                        | -         |
| items[i].name               | String  | -        | 中文名称                                        | 模板      |
| items[i].idType             | String  | -        | 英文名称                                        | ip        |
| items[i].required           | Boolean | -        | 是否必填项                                      | false     |
| items[i].metadata           | Array   | -        | 数据限制                                        | -         |
| items[i].metadata.type      | String  | -        | 数据类型（现只支持String）                      | string    |
| items[i].metadata.minLength | Int     | -        | 最小长度                                        | 1         |
| items[i].metadata.maxLength | Int     | -        | 最大长度                                        | 10        |

### 响应示例

```json
{
    "message": "success",
    "status": 1,
    "data": {
        "id": 177,
        "prefix": "88.101.5",
        "name": "",
        "version": "1.0.1",
        "industryCategory": "A",
        "industrySpecific": "01",
        "industryTrade": "011",
        "industrySubclass": "0111",
        "type": 1,
        "description": "模板1.0.1",
        "items": [
            {
                "name": "e1",
                "idType": "ip",
                "metadata": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 10
                },
                "required": false
            }
        ]
    }
}

```

### 异常示例

```json
{
  "message":"系统繁忙",
  "status":-1,
  "data": null
}

```

### 注意

> 1. 如果在企业节点中新增了 `非字符型` 的模板属性，将不能再进行查询操作

## 新增数据模板

> 用户可用此接口新增加数据模板

### 请求参数

- 请求服务：企业节点业务系统HTTP端口（默认 3000）
- 请求方式：POST
- 请求路径：`/snms/api/v3/template`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ---------------- |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String | 是       | -        | application/json                    | application/json |

- Body：

| 参数                        | 类型    | 是否必填 | 最大长度 | 备注                                            | 示例值    |
| --------------------------- | ------- | -------- | -------- | ----------------------------------------------- | --------- |
| prefix                      | String  | 必填     | -        | 前缀                                            | 88.101.5  |
| version                     | String  | 必填     | -        | 模板版本                                        | 1.0.1     |
| industryCategory            | String  | 必填     | -        | 行业门类                                        | A         |
| industrySpecific            | String  | 必填     | -        | 行业大类                                        | 01        |
| industryTrade               | String  | 必填     | -        | 行业中类                                        | 011       |
| industrySubclass            | String  | 必填     | -        | 行业小类                                        | 0111      |
| type                        | Integer | 必填     | -        | 元数据对象类型[枚举值: 1:主动标识载体、 2:其他] | 1         |
| description                 | String  | 非必填   | -        | 描述                                            | 模板1.0.1 |
| items                       | Array   | 必填     | -        | 模板内容                                        | -         |
| items[i].name               | String  | 必填     | -        | 中文名称                                        | 模板      |
| items[i].idType             | String  | 必填     | -        | 英文名称                                        | ip        |
| items[i].required           | Boolean | 非必填   | -        | 是否必填项                                      | false     |
| items[i].metadata           | Array   | 必填     | -        | 数据限制                                        | -         |
| items[i].metadata.type      | String  | 非必填   | -        | 数据类型（现只支持String）                      | string    |
| items[i].metadata.minLength | Int     | 必填     | -        | 最小长度                                        | 1         |
| items[i].metadata.maxLength | Int     | 必填     | -        | 最大长度                                        | 10        |

### 请求示例

```json
{
    "prefix": "88.101.5",
    "version": "1.0.0",
    "industryCategory": "A",
    "industrySpecific": "01",
    "industryTrade": "011",
    "industrySubclass": "0111",
    "type": 1,
    "description": "测试模板",
    "items": [
        {
            "name": "e1",
            "idType": "ip",
            "metadata": {
                "type": "string",
                "minLength": 1,
                "maxLength": 10
            },
            "required": false
        }
    ]
}
```

### 响应参数

| 参数    | 类型    | 最大长度 | 备注                   | 示例值  |
| ------- | ------- | -------- | ---------------------- | ------- |
| status  | Integer | -        | 状态码(详见状态码说明) | 1       |
| message | String  | -        | 状态码描述             | success |
| data    | Boolean | -        | 是否操作成功           | true    |

### 响应示例

```json
{
    "message": "success",
    "status": 1,
    "data": true
}
```

### 异常示例

```json
{
  "message":"系统繁忙",
  "status":-1,
  "data": null
}
```

### 注意事项

> items[i].metadata.type必须为小写string

---

## 删除数据模板

> 用户可用此接口删除数据模板

### 请求参数

- 请求服务：企业节点业务系统HTTP端口（默认 3000）
- 请求方式：DELETE
- 请求路径：`/snms/api/v3/template`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ---------------- |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String | 是       | -        | application/json                    | application/json |

- Body：

| 参数    | 类型   | 是否必填 | 最大长度 | 备注     | 示例值      |
| ------- | ------ | -------- | -------- | -------- | ----------- |
| prefix  | String | 必填     | 64       | 前缀     | 88.101.0042 |
| version | String | 必填     | 128      | 模板版本 | 1.0.1       |

### 请求示例

```json
{
    "prefix": "88.101.0042",
    "version": "1.0.1"
}
```

### 响应参数

| 参数    | 类型    | 最大长度 | 备注                   | 示例值  |
| ------- | ------- | -------- | ---------------------- | ------- |
| status  | Integer | -        | 状态码(详见状态码说明) | 1       |
| message | String  | -        | 状态码描述             | success |
| data    | Boolean | -        | 是否操作成功           | true    |

### 响应示例

```json
{
    "message": "success",
    "status": 1,
    "data": true
}
```

### 异常示例

```json
{
  "message":"系统繁忙",
  "status":-1,
  "data": null
}
```


### 注意

> 1. 如果在企业节点中新增了 `非字符型` 的模板属性，将不能再进行查询操作
