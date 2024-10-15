# 未托管前缀配置

### 请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：POST
- 请求路径：`/snms/api/ent/config`
- Header：

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**                      | **示例值** |
| -------------- | -------------- | ------------------ | ------------------ | ----------------------------------- | ---------------- |
| Authorization  | String         | 是                 | -                  | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type   | String         | 是                 | -                  | application/json                    | application/json |

- Body：

| **参数**            | **类型** | **是否必填** | **最大长度** | **备注**  | **示例值**                        |
| ------------------------- | -------------- | ------------------ | ------------------ | --------------- | --------------------------------------- |
| entPrefixConfig           | Object         | 必填               | -                  | 配置信息        | -                                       |
| entPrefixConfig.entPrefix | String         | 必填               | 64                 | 企业前缀        | 88.101.1304                             |
| entPrefixConfig.hdlType   | String         | 必填               | 255                | hdl类型         | HS_SITE                                 |
| entPrefixConfig.httpPort  | String         | 非必填             | 11                 | http端口        |                                         |
| entPrefixConfig.ip        | String         | 必填               | 255                | ip地址          | 2031:0000:1F1F:0000:0000:0100:11A0:ADDF |
| entPrefixConfig.ipType    | String         | 必填               | 1                  | ip类型4:V4,6:V6 | 6                                       |
| entPrefixConfig.tcpPort   | String         | 非必填             | 11                 | tcp端口         | 2643                                    |
| entPrefixConfig.udpPort   | String         | 非必填             | 11                 | udp端口         | -                                       |

### 请求示例

```json
{
    "entPrefixConfig": {
        "entPrefix": "88.101.1304",
        "hdlType": "HS_SITE",
        "ipType": 6,
        "ip": "2031:0000:1F1F:0000:0000:0100:11A0:ADDF",
        "tcpPort": "2643",
        "udpPort": "",
        "httpPort": ""
    }
}
```

### 响应参数

| **参数** | **类型** | **最大长度** | **备注**         | **示例值** |
| -------------- | -------------- | ------------------ | ---------------------- | ---------------- |
| status         | Integer        | -                  | 状态码(详见状态码说明) | 1                |
| message        | String         | -                  | 状态码描述             | success          |
| data           | Boolean        | -                  | 是否操作成功           | true             |

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

> - 该接口调用的前提：企业已申请且国家顶级节点业务管理系统审核通过
> - http端口、tcp端口、udp端口至少填写一个
> - 只有管理员角色能调用该接口（例：admin用户）
