# 标识操作接口

## 标识注册

通过此接口，用户可进行标识注册。

`注意：`
> 1. 用户可基于自己创建的元数据模板进行标识注册 
> 2. 用户可基于授权给自己查看权限的本企业元数据模板进行标识注册

### 请求参数

- 请求服务：企业节点业务系统HTTP端口（默认 3000）
- 请求方式: POST
- 请求路径: `/api/v1/doip`
- Header:

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**                      | **示例值** |
| -------------- | -------------- | ------------------ | ------------------ | ----------------------------------- | ---------------- |
| Content-Type   | String         | 是                 | -                  | application/json                    | application/json |
| Authorization  | String         | 是                 | -                  | Bearer + 空格 + token(身份接口获取) | token            |

- Params:

| 名称        | 位置   | 类型   | 必选 | 说明                     |
| ----------- | ------ | ------ | ---- | ------------------------ |
| targetId    | Params | string | 是   | 要注册的标识             |
| operationId | Params | string | 是   | 默认值：0.DOIP/Op.Create |

- Body:

| 名称               | 位置 | 类型   | 必选 | 说明                                                          |
| ------------------ | ---- | ------ | ---- | ------------------------------------------------------------- |
| type               | body | string | 是   | 创建标识基于的元数据模板标识                                  |
| attributes         | body | string | 是   | 标识主体                                                      |
| attributes.content | body | json   | 是   | 属性值，key-value结构；``k为元数据属性英文名称，value为属性值 |

### 请求示例：

> `/api/v1/doip?targetId=88.608.8899/META_zj02&operationId=0.DOIP/Op.Create`

```json
{
  "type": "88.608.8899/META_zj02",
  "attributes": {
    "content": {
      "en1": "432344",
      "en2": "22323222",
      "en3": "803232077"
    }
  }
}
```

### 返回数据结构：

| 名称    | 类型    | 中文名 | 说明 |
| ------- | ------- | ------ | ---- |
| code    | integer | none   |      |
| message | string  | none   |      |
| data    | object  | none   |      |

### 成功示例：

```json
{
  "code": 10000,
  "message": "成功",
  "data": {
    "type": "88.608.8899/META_zj02",
    "attributes": {
      "content": {
        "en1": "432344",
        "en2": "22323222",
        "en3": "803232077"
      }
    }
  }
}
```

### 异常示例：

```json
{
    "message": "非本企业标识",
    "code": 701
}
```

## 标识修改

通过此接口，用户可进行标识修改操作。 

`注意:` 
> 用户仅可修改自己创建的实例标识

### 请求参数说明：

- 请求服务：企业节点业务系统HTTP端口（默认 3000）
- 请求方式: POST
- 请求路径: `/api/v1/doip`
- Header:

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**                      | **示例值** |
| -------------- | -------------- | ------------------ | ------------------ | ----------------------------------- | ---------------- |
| Content-Type   | String         | 是                 | -                  | application/json                    | application/json |
| Authorization  | String         | 是                 | -                  | Bearer + 空格 + token(身份接口获取) | token            |

- Params:

| 名称        | 位置   | 类型   | 必选 | 说明                                                                                            |
| ----------- | ------ | ------ | ---- | ----------------------------------------------------------------------------------------------- |
| targetId    | Params | string | 是   | 将要修改的标识                                                                                  |
| operationId | Params | string | 是   | 默认值：0.DOIP/Op.Update   (覆盖更新)<br />  0.DOIP.EXTEND/Op.Update.Non.Overlay （增量更新） |

- Body:

| 名称               | 位置 | 类型   | 必选 | 说明                                                          |
| ------------------ | ---- | ------ | ---- | ------------------------------------------------------------- |
| type               | body | string | 是   | 标识创建时基于的元数据模板标识                                |
| attributes         | body | string | 是   | 标识主体                                                      |
| attributes.content | body | json   | 是   | 属性值，key-value结构；``k为元数据属性英文名称，value为属性值 |

### 请求参数示例：

> `/api/v1/doip?targetId=88.608.8899/META_zj02&operationId=0.DOIP/Op.Update`

```json
{
  "type": "88.608.8899/META_zj02",
  "attributes": {
    "content": {
      "en1": "432344",
      "en2": "22323222",
      "en3": "803232077"
    }
  }
}
```

### 返回数据结构：

| 名称    | 类型    | 中文名 | 说明 |
| ------- | ------- | ------ | ---- |
| code    | integer | none   |      |
| message | string  | none   |      |
| data    | object  | none   |      |

### 成功示例：

```json
{
  "code": 10000,
  "message": "success",
  "data": {
    "type": "88.608.8899/META_zj02",
    "attributes": {
      "content": {
        "en1": "432344",
        "en2": "22323222",
        "en3": "803232077"
      }
    }
  }
}
```

### 异常示例：

```json
{
    "message": "非本企业标识",
    "code": 701
}
```

### 注意

> 1. 修改标识的主体属性值，不能删除属性，只能修改已存在的标识属性值

## 标识删除

通过此接口，用户可进行标识删除操作。 

`注意：`
> 用户仅可删除自己创建的实例标识

### 请求参数说明

- 请求服务：企业节点业务系统HTTP端口（默认 3000）
- 请求方式: POST
- 请求路径: `/api/v1/doip`
- Header:

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**                      | **示例值** |
| -------------- | -------------- | ------------------ | ------------------ | ----------------------------------- | ---------------- |
| Content-Type   | String         | 是                 | -                  | application/json                    | application/json |
| Authorization  | String         | 是                 | -                  | Bearer + 空格 + token(身份接口获取) | token            |

- Params:

| 名称        | 位置   | 类型   | 必选 | 说明                     |
| ----------- | ------ | ------ | ---- | ------------------------ |
| targetId    | Params | string | 是   | 要删除的标识             |
| operationId | Params | string | 是   | 默认值：0.DOIP/Op.Delete |

### 请求示例

> `/api/v1/doip?targetId=88.608.6688/META_zj03&operationId=0.DOIP/Op.Delete`

### 返回数据结构：

| 名称    | 类型    | 中文名 | 说明 |
| ------- | ------- | ------ | ---- |
| code    | integer | none   |      |
| message | string  | none   |      |

### 成功返回示例：

```json
{
  "code": 10000,
  "message": "成功"
}
```

### 异常返回示例：

```json
{
    "message": "标识对象不存在",
    "code": 104
}
```

## 标识解析

通过此接口，用户可进行元数据模板标识解析与实例标识解析。

`注意: `
> 用户可解析范围为公开数据与授权给自己查看或编辑权限的数据

### 请求参数

- 请求服务：企业节点业务系统HTTP端口（默认 3000）
- 请求方式: GET
- 请求路径: `/api/v1/doip`
- Params:

| 名称        | 位置   | 类型   | 必选 | 说明               |
| ----------- | ------ | ------ | ---- | ------------------ |
| targetId    | Params | string | 是   | 标识               |
| operationId | Params | string | 是   | 0.DOIP/Op.Retrieve |

### 返回数据结构

| 名称            | 类型    | 中文名 | 说明 |
| --------------- | ------- | ------ | ---- |
| code            | integer | none   |      |
| message         | string  | none   |      |
| data            | json    | none   |      |
| data.id         | string  | none   |      |
| data.type       | string  | none   |      |
| data.attributes | json    | none   |      |

### 成功返回示例

::: code-group

```json [元数据标识]
{
    "code": 1,
    "message": "成功",
    "data": {
        "id": "88.608.8889/META_453453453",
        "type": "0.TYPE/DO.DOIPMETA",
        "attributes": {
            "content": {
                "basicInfo": {
                    "metaName": "4342",
                    "metaCode": "23432",
                    "industry": "科学研究和技术服务业/科技推广和应用服务业/技术推广服务/三维（3D)打印技术推广服务",
                    "industryCategory": "M",
                    "industrySpecific": "75",
                    "industryTrade": "751",
                    "industrySubclass": "7517",
                    "metaState": 1,
                    "metaContributor": "88.608.8889",
                    "standard": "",
                    "metaDesc": "",
                    "isQuote": 0,
                    "publishedTime": "2024-04-28 11:12:26",
                    "effectiveTime": "2024-04-28 11:11:27",
                    "latestUpdateTime": "2024-04-28 11:12:26"
                },
                "itemInfos": [
                    {
                        "itemBasicInfo": {
                            "itemIndex": 2001,
                            "itemCode": "4325",
                            "enName": "5423",
                            "cnName": "24234343",
                            "state": 0
                        },
                        "itemSchemaInfo": {
                            "dataType": 2,
                            "dataTypeString": "数值型",
                            "minLength": 0,
                            "maxLength": 38,
                            "accuracy": 0
                        }
                    },
                    {
                        "itemBasicInfo": {
                            "itemIndex": 2002,
                            "itemCode": "635345",
                            "enName": "24234",
                            "cnName": "2343242",
                            "state": 0
                        },
                        "itemSchemaInfo": {
                            "dataType": 3,
                            "dataTypeString": "日期型",
                            "dateFormat": "YYYY-MM-DD"
                        }
                    }
                ],
                "required": [],
                "uniqueness": [],
                "inputItem": [
                    "23423",
                    "5423",
                    "24234",
                    "2423423"
                ],
                "listItem": []
            },
            "metaData": {
                "createTime": "2024-04-28 11:11:27",
                "updateTime": "2024-04-28 11:11:27",
                "creator": "88.608.8889/User_12345"
            }
        }
    }
}
```

```json [实例标识]
{
  "code": 1,
  "message": "成功",
  "data": {
    "id": "88.608.8889/87654321",
    "type": "88.608.8889/META_zxczxc",
    "attributes": {
      "id": "88.608.8889/87654321",
      "type": "88.608.8889/META_zxczxc",
      "elements": [
        {
          "index": 2000,
          "type": "zxc",
          "name": "zxc",
          "dataType": 1
        }
      ]
    }
  }
}
```

:::

### 异常返回示例：

```json
{
  "message": "没有权限查看数据",
  "code": 403
}
```

## 说明

- 调用标识注册、修改、删除、查询接口时需要先挑战应答获取token，携带token调用接口，token有效期24小时（无操作状态下）
