# 数据权限接口

## 标识身份列表查询

通过此接口，查询本企业节点中所有应用身份列表及本企业和导入外企业的身份组列表，用于后续进行身份授权； 

`注意：`
> 向本企业授权，可授权本企业的应用身份或本企业的身份组；跨企业进行授权，只可导入跨企业身份组后进行授权。

### 请求参数

- 请求服务：企业节点业务系统HTTP端口（默认 3000）
- 请求方式：GET
- 请求路径：`/api/v1/open/handle-user-group/list`
- Header：

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**                      | **示例值** |
| -------------- | -------------- | ------------------ | ------------------ | ----------------------------------- | ---------------- |
| Authorization  | String         | 是                 | -                  | Bearer + 空格 + token(身份接口获取) | exxxxxxx         |
| Content-Type   | String         | 是                 | -                  | application/json                    | application/json |

- Query Param：

无

### 请求示例

> /api/v1/open/handle-user-group/list

### 响应参数

- 公共响应参数

| **参数** | **类型** | **备注**          | **示例值** |
| -------------- | -------------- | ----------------------- | ---------------- |
| code           | Integer        | 状态码(详见状态码说明） | 10000            |
| message        | String         | 状态码描述              | success          |
| data           | Object         | 返回数据                | -                |

- data数据结构

| **参数** | **参数类型** | **备注** | **示例值**         |
| -------------- | ------------------ | -------------- | ------------------------ |
| name           | String             | 用户名         | "my"                     |
| userHandle     | String             | 身份标识       | "88.608.6688/User_zyh03" |
| belongCompany  | String             | 所属企业       |                          |

### 响应示例

```json
{
    "code": 10000,
    "message": "成功",
    "data": [
   
  
        {
            "name": "测试应用",
            "userHandle": "88.608.8889/App_ceshi",
            "belongCompany": "HNl66CEPJnHF0GVIEMXVo2HqjYmJizjj"
        }
  
    ]
}
  
```

## 实例标识授权

通过此接口，可对实例标识进行授权操作

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

| **参数**       | **类型** | **是否必填** | **最大长度** | **备注**                           | **示例值**       |
| -------------------- | -------------- | ------------------ | ------------------ | ---------------------------------------- | ---------------------- |
| handle               | String         | 是                 | -                  | 实例标识                                 | 88.608.6688/instance_1 |
| readerScope          | integer        | 是                 | -                  | 枚举值  1-公开，2-指定范围               | 1                      |
| handleUserReaders    | array[string]  | 否                 | -                  | 授权的查看标识用户                       | 1                      |
| handleUserWriters    | array[string]  | 否                 | -                  | 授权的编辑标识用户                       | 1                      |
| delHandleUserReaders | array[string]  | 否                 | -                  | 删除的标识身份                           | 1                      |
| delHandleUserWriters | array[string]  | 否                 | -                  | 删除的标识身份                           | 1                      |

### 请求示例

```json
{
  "handle": "88.608.8889/SNMS-handle13",
  "readerScope": 2,
  "delHandleUserReaders": [
    "88.608.8889/App_xz_app2"
  ],
  "delHandleUserWriters": [
    "88.608.8889/App_xz_app2"
  ],
  "handleUserWriters": [
    "88.608.8889/App_xz_app2"
  ],
  "handleUserReaders": [
    "88.608.8889/App_xz_app2"
  ]
}
```

### 响应参数

| **参数** | **类型** | **备注**          | **示例值** |
| -------------- | -------------- | ----------------------- | ---------------- |
| status         | Integer        | 状态码(详见状态码说明） | 1                |
| message        | String         | 状态码描述              | success          |

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