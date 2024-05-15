# 身份认证

## 明文传输

### 请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：POST
- 请求路径：`/identity/token`
- body：

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**                   | **示例值** |
| -------- | -------- | ------------ | ------------ | -------------------------- | ---------- |
| username | String   | 是           | 50           | 用户名（界面登陆的用户名） | admin      |
| password | String   | 是           | 64           | 密码（界面登陆的密码）     | 123456     |

###  请求示例

```json
{
    "username": "admin",
    "password": "******"
}
```

### 响应参数

| **参数**   | **类型** | **最大长度** | **备注**     | **示例值** |
| ---------- | -------- | ------------ | ------------ | ---------- |
| status     | Int      | -            | 状态码       | 0          |
| message    | String   | -            | 状态码描述   | "success"  |
| data       | Object   | -            | 返回数据     | {"token":} |
| data.token | String   | -            | 密钥身份信息 | "xxx"      |

###  响应示例

```json
{
    "message": "success",
    "status": 1,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IcCI63YS1jYTAyLTRmZmMtYTE5My1jYjUzYmFmMmU3MGIifQ"
    }
}
```

###  异常示例

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

###  请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：POST
- 请求路径：`/identity/token/v1`

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**                   | **示例值** |
| -------- | -------- | ------------ | ------------ | -------------------------- | ---------- |
| username | String   | 是           | 50           | 用户名（界面登陆的用户名） | admin      |
| password | String   | 是           | 64           | 密码:                      |            |

1. 首先sha256界面登陆密码获取token

2. 再`sha256(token+时间戳)`，时间戳格式`yyyy-MM-dd` | `58e2c92c46485fdbc35fdcd0814d6c0f000cad5aa156848ca5edaf29406b7661` |

###  请求示例

```json
{
    "username": "admin",
    "password": "58e2c92c46485fdbc35fdcd0814d6c0f000cad5aa156848ca5edaf29406b7661"
}
```
>注意：例子中的`password=sha256(sha256(‘12345’) + ‘2019-08-15’)`

### 响应参数

| **参数**   | **类型** | **最大长度** | **备注**     | **示例值** |
| ---------- | -------- | ------------ | ------------ | ---------- |
| status     | Int      | -            | 状态码       | 0          |
| message    | String   | -            | 状态码描述   | "success"  |
| data       | Object   | -            | 返回数据     | {"token":} |
| data.token | String   | -            | 秘钥身份信息 | "xxx"      |

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

###  异常示例
```json
{
    "message": "用户名/密码错误！",
    "status": -2,
    "data": null
}
```

- 常见错误见附录

##  用户注册

###  请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：POST
- 请求路径：`/identity/registry`
- Header：

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |

- body：

| **参数**     | **类型** | **是否必填** | **最大长度** | **备注**     | **示例值** |
| ------------ | -------- | ------------ | ------------ | ------------ | ---------- |
| username     | String   | 是           | 50           | 用户名称     | "张三"     |
| password     | String   | 是           | 255          | 密码         | "123456"   |
| email        | String   | 是           | 255          | 邮箱         | "12@1.com" |
| mobile       | String   | 是           | 255          | 电话         | "123456"   |
| openId       | String   | 否           | 64           | openId       | "1001"     |
| openUserName | String   | 否           | 255          | openUserName | "李四"     |
| remarks      | String   | 否           | -            | 备注         | "用户"     |


###  请求示例

```json
{
    "email": "ddd@admin.com",
    "mobile": "13945056533",
    "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
    "remarks": "",
    "userName": "ddd"
}
```

###  响应参数

| **参数** | **类型** | **最大长度** | **备注**   | **示例值** |
| -------- | -------- | ------------ | ---------- | ---------- |
| status   | Int      | -            | 状态码     | 0          |
| message  | String   | -            | 状态码描述 | "success"  |
| data     | Object   | -            | 返回数据   | true       |

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
    "message": "用户名/密码错误！",
    "status": -2,
    "data": null
}
```

###  注意事项

>1. `sysUser.password`为sha256加密后的密码
>2. `sysUser.userName`、`sysUser.mobile`、`sysUser. email`唯一
>3. 只有管理员可以调用该接口
