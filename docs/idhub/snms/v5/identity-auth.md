# 身份认证

## 明文传输

### 请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 3000）
- 请求方式：POST
- 请求路径：`/identity/token`
- body：

| **参数** | **类型** | **是否必填** | **最大长度** | **备注** | **示例值** |
| -------------- | -------------- | ------------------ | ------------------ | -------------- | ---------------- |
| username       | String         | 是                 | 50                 | 应用标识身份   | admin            |
| password       | String         | 是                 | 64                 | 私钥           | 123456           |

### 请求示例

```json
{
    "username": "admin",
    "password": "******"
}
```

### 响应参数

| **参数** | **类型** | **最大长度** | **备注** | **示例值** |
| -------------- | -------------- | ------------------ | -------------- | ---------------- |
| status         | Int            | -                  | 状态码         | 0                |
| message        | String         | -                  | 状态码描述     | "success"        |
| data           | Object         | -                  | 返回数据       | {"token":}       |
| data.token     | String         | -                  | 密钥身份信息   | "xxx"            |

### 响应示例

```json
{
    "message": "success",
    "status": 1,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IcCI63YS1jYTAyLTRmZmMtYTE5My1jYjUzYmFmMmU3MGIifQ"
    }
}
```

### 异常示例

```json
{
    "message": "用户名/密码错误！",
    "status": -2,
    "data": null
}
```

- 常见错误见附录

---

## 密文传输

### 请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 3000）
- 请求方式：POST
- 请求路径：`/identity/token/v1`

| **参数** | **类型** | **是否必填** | **最大长度** | **备注** | **示例值** |
| -------------- | -------------- | ------------------ | ------------------ | -------------- | ---------------- |
| username       | String         | 是                 | 50                 | 应用标识身份   | admin            |
| password       | String         | 是                 | 64                 | 私钥           |                  |

1. 首先sha256界面登陆密码获取token
2. 再 `sha256(token+时间戳)`，时间戳格式 `yyyy-MM-dd` | `58e2c92c46485fdbc35fdcd0814d6c0f000cad5aa156848ca5edaf29406b7661` |

### 请求示例

```json
{
    "username": "admin",
    "password": "58e2c92c46485fdbc35fdcd0814d6c0f000cad5aa156848ca5edaf29406b7661"
}
```

> 注意：例子中的 `password=sha256(sha256(‘12345’) + ‘2019-08-15’)`

### 响应参数

| **参数** | **类型** | **最大长度** | **备注** | **示例值** |
| -------------- | -------------- | ------------------ | -------------- | ---------------- |
| status         | Int            | -                  | 状态码         | 0                |
| message        | String         | -                  | 状态码描述     | "success"        |
| data           | Object         | -                  | 返回数据       | {"token":}       |
| data.token     | String         | -                  | 秘钥身份信息   | "xxx"            |

### 响应示例

```json
{
    "message": "success",
    "status": 1,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IcCI63YS1jYTAyLTRmZmMtYTE5My1jYjUzYmFmMmU3MGIifQ"
    }
}
```

### 异常示例

```json
{
    "message": "用户名/密码错误！",
    "status": -2,
    "data": null
}
```

- 常见错误见附录
