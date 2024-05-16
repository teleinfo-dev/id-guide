# 数据权限接口

## 数据权限公开/撤销

通过此接口对元数据基本信息进行修改。

## 授权用户/用户组

通过此接口对元数据基本信息进行修改。

## 标识用户/用户组列表查询

查询所有的标识用户/用户组。

### 请求参数

- 请求服务：企业节点业务系统HTTP端口（默认 3000）
- 请求方式：GET
- 请求路径：`/api/v2/handle-user-group/list`
- Header：

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**                      | **示例值** |
| -------------- | -------------- | ------------------ | ------------------ | ----------------------------------- | ---------------- |
| Authorization  | String         | 是                 | -                  | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type   | String         | 是                 | -                  | application/json                    | application/json |

- Query Param：

| **参数** | **类型**      | **是否必填** | **最大长度** | **备注**                                                                                         | **示例值** |
| -------------- | ------------------- | ------------------ | ------------------ | ------------------------------------------------------------------------------------------------------ | ---------------- |
| userType       | Array `<Integer>` | 否                 | -                  | 要查询的用户类型列表，不传返回全部用户。<br />枚举值：`0-用户身份` ,`1-应用身份`, `2-用户组身份` | [1,2]            |

### 请求示例

> /api/v2/handle-user-group/list?userType=1&userType=2

### 响应参数

- 公共响应参数

| **参数** | **类型** | **最大长度** | **备注**          | **示例值** |
| -------------- | -------------- | ------------------ | ----------------------- | ---------------- |
| code           | Integer        | -                  | 状态码(详见状态码说明） | 10000            |
| message        | String         | -                  | 状态码描述              | success          |
| data           | Object         | -                  | 返回数据                | -                |

- data数据结构

| **参数** | **参数类型** | **最大长度** | **备注** | **示例值**                                               |
| -------------- | ------------------ | ------------------ | -------------- | -------------------------------------------------------------- |
| name           | String             | -                  | 用户名         | "my"                                                           |
| userHandle     | String             | -                  | 身份标识       | "88.608.6688/User_zyh03"                                       |
| type           | integer            | -                  | 身份类型       | 身份类型枚举:` 0-用户身份` ,`1-应用身份`, `2-用户组身份` |
| belongCompany  | String             | -                  | 所属企业       |                                                                |

### 响应示例

```json
{
    "code": 10000,
    "message": "成功",
    "data": [
   
        {
            "name": "zhaohan",
            "userHandle": "88.608.8889/User_zhaohan",
            "type": 0,
            "belongCompany": "HNl66CEPJnHF0GVIEMXVo2HqjYmJizjj"
        },
        {
            "name": "测试应用",
            "userHandle": "88.608.8889/App_ceshi",
            "type": 1,
            "belongCompany": "HNl66CEPJnHF0GVIEMXVo2HqjYmJizjj"
        },
        {
            "name": "zkb",
            "userHandle": "88.608.8889/User_1234",
            "type": 0,
            "belongCompany": "HNl66CEPJnHF0GVIEMXVo2HqjYmJizjj"
        },
        {
            "name": "wscGroup",
            "userHandle": "88.608.8889/Group_wsc",
            "type": 2,
            "belongCompany": "HNl66CEPJnHF0GVIEMXVo2HqjYmJizjj"
        }
    ]
}
  
```

### 异常示例

```json
{
    "message": "接口参数错误:入参userType只能是[0, 1, 2]",
    "code": 60005
}
```

## 同类数据授权-公开/撤销公开

通过此接口对基于元数据的同类数据进行公开与撤销公开的授权操作

### 请求参数

- 请求服务：企业节点业务系统HTTP端口（默认 3000）
- 请求方式：POST
- 请求路径：`/api/v1/classes-grant/item/batch-public`
- Header：

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**                      | **示例值** |
| -------------- | -------------- | ------------------ | ------------------ | ----------------------------------- | ---------------- |
| Authorization  | String         | 是                 | -                  | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type   | String         | 是                 | -                  | application/json                    | application/json |

- Body：

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**                | **示例值**            |
| -------------- | ------------- | ------------------ | ------------------ |-----------------------|--------------------|
| metaHandle | String        | 是                 | -                  | 元数据                   | 88.608.6688/Meta_1 |
| scope | integer        | 是                 | -                  | 授权范围；枚举值  1-公开，2-撤销公开 | 88.608.6688/Meta   |
| items | array[string]| 是                 | -                  | 所属元数据的属性英文名称，可填写多个    | key1,key2,key3                |

### 请求示例

```json
{
    "items": [
        "zxc"
    ],
    "scope": 1,
    "metaHandle": "88.608.8889/META_zxczxc"
}
```

### 响应参数

| **参数** | **类型** | **最大长度** | **备注**          | **示例值** |
| -------------- | -------------- | ------------------ | ----------------------- | ---------------- |
| status         | Integer        | -                  | 状态码(详见状态码说明） | 1                |
| message        | String         | -                  | 状态码描述              | success          |

### 响应示例

```json
{
    "code": 1,
    "message": "成功"
}
```

### 异常示例

```json
{
  "message": "非本企业标识",
  "code": 701
}
```
### 注意
> 1. 该接口只针对基于元数据属性的同该类实例数据查看权限进行公开与撤销公开操作，不支持对元数据本身进行公开与撤销公开操作。


## 同类数据授权

通过此接口对基于元数据属性的的同类数据进行授权操作

### 请求参数

- 请求服务：企业节点业务系统HTTP端口（默认 3000）
- 请求方式：POST
- 请求路径：`/api/v1/classes-grant/authorization`
- Header：

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**                      | **示例值** |
| -------------- | -------------- | ------------------ | ------------------ | ----------------------------------- | ---------------- |
| Authorization  | String         | 是                 | -                  | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type   | String         | 是                 | -                  | application/json                    | application/json |

- Body：

| **参数**                 | **类型**          | **是否必填** | **最大长度** | **备注**                     | **示例值**           |
|------------------------|-----------------|----------|----------|----------------------------|-------------------|
| metaHandle             | String          | 是        | -        | 元数据标识                      | 88.608.6688/Meta_1 |
| accessList             | [object]        | 是        | -        | 授权数据                       |                   |
| accessList.item        | array[object]   | 是        | -        | 所属元数据的属性英文名称               | key               |
| accessList.authType    | integer         | 是        | -        | 授权类型，枚举值；1-查看，2-编辑         | 1                 |
| accessList.scope       | integer         | 是        | -        | 授权范围；枚举值  1-公开，2-指定范围      | 1                 |
| accessList.handleUsers | array[string]   | 否        | -        | 要授权的应用标识用户                 |                   |

### 请求示例

```json
{
  "metaHandle": "88.608.8889/META_zxczxc",
  "accessList": [
    {
      "item": "zxc",
      "authType": 1,
      "scope": 2,
      "handleUsers": [
        "88.608.8889/App_app"
      ]
    }
  ]
}
```

### 响应参数

| **参数** | **类型** | **最大长度** | **备注**          | **示例值** |
| -------------- | -------------- | ------------------ | ----------------------- | ---------------- |
| status         | Integer        | -                  | 状态码(详见状态码说明） | 1                |
| message        | String         | -                  | 状态码描述              | success          |

### 响应示例

```json
{
    "code": 1,
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
        "name": "accessList[0].authType",
        "errorMsg": "授权类型不合符（1查看2编辑）"
      }
    ]
  },
  "code": 30000
}
```

```json
{
    "message": "授权的标识用户88.608.8889/App_wscapp22不是应用身份",
    "code": 901
}
```
### 注意
> 1. 编辑授权时，即authType为2时，scope只能为2
> 2. 查看授权时，即authType为1时，若scope为1，即公开权限，则handlerUsers可以为空

## 单一标识授权

通过此接口对单一标识进行授权操作

### 请求参数

- 请求服务：企业节点业务系统HTTP端口（默认 3000）
- 请求方式：POST
- 请求路径：`/api/v1/single-handle/authorization`
- Header：

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**                      | **示例值** |
| -------------- | -------------- | ------------------ | ------------------ | ----------------------------------- | ---------------- |
| Authorization  | String         | 是                 | -                  | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type   | String         | 是                 | -                  | application/json                    | application/json |

- Body：

| **参数**                 | **类型**           | **是否必填** | **最大长度**  | **备注**                       | **示例值**                |
|------------------------|------------------|----------|-----------|------------------------------|------------------------|
| handle                 | String           | 是        | -         | 实例标识                         | 88.608.6688/instance_1 |
| grantType              | integer          | 是        | -         | 授权类型，枚举值；1-同类授权，2-单个授权       | 1                      |
| readerScope            | integer          | 否        | -         | 枚举值  1-公开，2-指定范围             | 1                    | key                    |
| readers                | array[string]    | 否        | -         | 授权的查看标识用户                    | 1                      |
| writers                | array[string]    | 否        | -         | 授权的编辑标识用户                    | 1                      |

### 请求示例

```json
{
  "handle": "88.608.8889/2345678",
  "grantType": "2",
  "readerScope": 2,
  "readers": [
    "88.608.8889/App_wscapp"
  ],
  "writers": [
    "88.608.8889/App_wscapp"
  ]
}
```

### 响应参数

| **参数** | **类型** | **最大长度** | **备注**          | **示例值** |
| -------------- | -------------- | ------------------ | ----------------------- | ---------------- |
| status         | Integer        | -                  | 状态码(详见状态码说明） | 1                |
| message        | String         | -                  | 状态码描述              | success          |

### 响应示例

```json
{
    "code": 1,
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
        "name": "grantType",
        "errorMsg": "授权类型不合符（1同类授权2单个授权）"
      }
    ]
  },
  "code": 30000
}
```

```json
{
    "message": "授权的标识用户88.608.8889/App_wscapp22不是应用身份",
    "code": 901
}
```
### 注意
> 1. 当授权类型grantType为1时，即单个授权类型时，readerScope,readers,writers可以为空
> 2. 当授权类型grantType为2时，即同类授权类型时，readerScope不能为空；readerScope为1，即公开授权时，readers可以为空；readerScope为2，即指定范围授权时，readers为空则不发生授权操作
> 2. 当授权类型grantType为2时，即同类授权类型时，writers为空时，则不发生授权操作
