# 数据权限接口

## 数据权限公开/撤销

通过此接口对元数据基本信息进行修改。

## 授权用户/用户组

通过此接口对元数据基本信息进行修改。

## 标识用户/用户组列表查询

查询所有的标识用户/用户组。

### 请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
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
| status         | Integer        | -                  | 状态码(详见状态码说明） | 1                |
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
    "message":"系统繁忙",
    "status":-1,
    "data": null
}
```

### 注意事项

> 只有管理员角色能调用该接口（例：admin用户）
