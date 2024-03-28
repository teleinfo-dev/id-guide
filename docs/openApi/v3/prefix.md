# 前缀相关接口

##  前缀查询

###  请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：GET
- 请求路径：`/snms/api/prefix/query`
- Header：
-

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |


- Param：

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**     | **示例值** |
| -------- | -------- | ------------ | ------------ | ------------ | ---------- |
| prefix   | String   | 是           | 64           | 要查询的前缀 | 88.709.1   |

###  请求示例

>`/snms/api/prefix/query?prefix=88.709.1`

###  响应参数

- 公共响应参数

| **参数** | **类型** | **最大长度** | **备注**                | **示例值** |
| -------- | -------- | ------------ | ----------------------- | ---------- |
| status   | Integer  | -            | 状态码(详见状态码说明） | 1          |
| message  | String   | -            | 状态码描述              | success    |
| data     | Object   | -            | 返回数据                | -          |

- 响应参数

| **参数**         | **参数类型** | **最大长度** | **备注**                                                     | **示例值**             |
| ---------------- | ------------ | ------------ | ------------------------------------------------------------ |---------------------|
| data.prefix      | String       | -            | 前缀名称                                                     | 88.709.1            |
| data.createDate  | String       | -            | 前缀创建时间                                                 | 2020-02-07 11:45:35 |
| data.ghrName     | String       | -            | 前缀注册服务机构                                             | 工业互联网标识解析国家顶级节点--北京 |
| data.status      | Int          | -            | 前缀状态（状态是否有效 0停用1启用2待删除3被驳回 4待审核 5审核中） | 1                   |
| data.entNameCn   | String       | -            | 企业中文名称                                                 | layone              |
| data.entWebSite  | String       | -            | 企业官方地址                                                 |                     |
| data.entIndustry | String       | -            | 企业所属行业                                                 | B                   |
| data.entAddrCn   | String       | -            | 企业中文地址                                                 | eee                 |
| data.entDesc     | String       | -            | 企业简介                                                     | 简介                  |

###  响应示例

```json
{
    "message": "success",
    "status": 1,
    "data": {
        "prefix": "88.709.1",
        "createDate": "2020-02-0711:45:35",
        "ghrName": "工业互联网标识解析国家顶级节点--北京",
        "status": 1,
        "entNameCn": "layone",
        "entSite": null,
        "entIndustry": "B",
        "entAddrCn": "eee",
        "entDesc": null
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

###  注意事项

> 只有管理员角色能调用该接口（例：admin用户）

---

## 前缀列表

### 请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：GET
- 请求路径：`/snms/api/prefix/page`
- Header：

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |


- Param：

| **参数**    | **类型** | **是否必填** | **最大长度** | **备注** | **示例值**          |
| ----------- | -------- | ------------ | ------------ | -------- | ------------------- |
| entName     | String   | 非必填       | -            | 单位名称 | teleinfo            |
| entPrefix   | String   | 非必填       | -            | 企业前缀 | 88.709.1            |
| startDate   | Date     | 非必填       | -            | 开始时间 | 2022-01-01 00:00:00 |
| endDate     | Date     | 非必填       | -            | 结束时间 | 2022-01-01 00:00:00 |
| currentPage | Integer  | 非必填       | -            | 当前页数 | 1                   |
| pageSize    | Integer  | 非必填       | -            | 页面大小 | 10                  |

### 请求示例

>`/snms/api/prefix/query?entPrefix=&entName=&startDate=&endDate=&currentPage=&pageSize=`

###  响应参数

- 公共响应参数

| **参数** | **类型** | **最大长度** | **备注**                | **示例值** |
| -------- | -------- | ------------ | ----------------------- | ---------- |
| status   | Integer  | -            | 状态码(详见状态码说明） | 1          |
| message  | String   | -            | 状态码描述              | success    |
| data     | Object   | -            | 返回数据                | -          |

- 响应参数

| **参数**                | **参数类型**  | **最大长度** | **备注**                                      | **示例值**          |
| ----------------------- | ------------- | ------------ | --------------------------------------------- | ------------------- |
| data.first              | Boolean       | -            | -                                             | -                   |
| data.last               | Boolean       | -            | -                                             | -                   |
| data.totalPages         | Integer       | -            | -                                             | -                   |
| data.totalElements      | Long          | -            | -                                             | -                   |
| data.number             | Integer       | -            | -                                             | -                   |
| data.size               | Integer       | -            | -                                             | -                   |
| data.sort               | Sort          | -            | -                                             | -                   |
| data.numberOfElements   | Integer       | -            | -                                             | -                   |
| data.content            | List          | -            | -                                             | -                   |
| data.content.id         | Long          | -            | Id                                            | 123                 |
| data.content.createDate | LocalDateTime | -            | 创建时间                                      | 2022-01-01 00:00:00 |
| data.content.updateDate | LocalDateTime | -            | 更新时间                                      | 2022-01-01 00:00:00 |
| data.content.entPrefix  | String        | -            | 企业前缀                                      | 88.123              |
| data.content.entId      | Long          | -            | 企业ID                                        | 1523                |
| data.content.state      | Integer       | -            | 状态 0停用1启用                               | 1                   |
| data.content.entName    | String        | -            | 企业名称                                      | teleinfo            |
| data.content.proxyState | Integer       | -            | 托管状态 1未托管2托管申请中3托管被驳回4已托管 | 1                   |

### 响应示例

```json
{
    "message": "success",
    "status": 1,
    "data": {
        "first": true,
        "last": false,
        "totalPages": 2,
        "totalElements": 14,
        "number": 1,
        "size": 10,
        "sort": null,
        "numberOfElements": 10,
        "content": [
            {
                "id": 16,
                "entprefix": "企业前缀",
                "entId": "5",
                "state": "1",
                "entName": "单位名称",
                "proxyState": "1",
                "createDate": "2021-12-28 13:47:29",
                "updateDate": "2021-12-29 13:47:29"
            },
            {
                "id": 15,
                "entprefix": "企业前缀",
                "entId": "1",
                "state": "1",
                "entName": "单位名称",
                "proxyState": 1,
                "createDate": "2021-11-20 11:08:57",
                "updateDate": "2021-12-03 17:48:52"
            }
        ]
    }
}
```

###  异常示例

```json
{
    "message":"系统繁忙",
    "status":-2,
    "data": null
}
```

###  注意事项

> 只有管理员角色能调用该接口（例：admin用户）

---

##  托管前缀配置

>- 前缀配置时，如果想要托管前缀，选择“托管前缀配置”，执行成功后，用户将变成托管用户；前缀配置时，如果不想托管前缀，选择“未托管前缀配置”，执行成功后，用户仍然为企业用户。
>- 两个接口的请求路径、请求方式、响应参数均相同，只有请求参数不同。

###  请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：POST
- 请求路径：`/snms/api/ent/config`
- Header：

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |


- Body：

| **参数**                  | **类型** | **是否必填** | **最大长度** | **备注**     | **示例值**  |
| ------------------------- | -------- | ------------ | ------------ | ------------ | ----------- |
| proxyServerId             | Long     | 必填         | 20           | 托管服务器id | 1           |
| entPrefixConfig           | Object   | 必填         | -            | 配置信息     | -           |
| entPrefixConfig.entPrefix | String   | 必填         | 64           | 企业前缀     | 88.101.1304 |

### 请求示例

```json
{
    "proxyServerId": 1,
    "entPrefixConfig": {
      "entPrefix": "88.101.1304"
    }
}
```

###  响应参数

| **参数** | **类型** | **最大长度** | **备注**               | **示例值** |
| -------- | -------- | ------------ | ---------------------- | ---------- |
| status   | Integer  | -            | 状态码(详见状态码说明) | 1          |
| message  | String   | -            | 状态码描述             | success    |
| data     | Boolean  | -            | 是否操作成功           | true       |

### 响应示例

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
    "message":"系统繁忙",
    "status":-1,
    "data": null
}
```

###  注意事项

>- 托管服务器id 在界面“系统管理-托管配置”中可查
>- 该接口调用的前提：企业已申请且国家顶级节点业务管理系统审核通过
>- 只有管理员角色能调用该接口（例：admin用户）

---


##  未托管前缀配置

>- 前缀配置时，如果想要托管前缀，选择“托管前缀配置”，执行成功后，用户将变成托管用户；前缀配置时，如果不想托管前缀，选择“未托管前缀配置”，执行成功后，用户仍然为企业用户。
>- 两个接口的请求路径、请求方式、响应参数均相同，只有请求参数不同。

###  请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：POST
- 请求路径：`/snms/api/ent/config`
- Header：

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |


- Body：

| **参数**                  | **类型** | **是否必填** | **最大长度** | **备注**        | **示例值**                              |
| ------------------------- | -------- | ------------ | ------------ | --------------- | --------------------------------------- |
| entPrefixConfig           | Object   | 必填         | -            | 配置信息        | -                                       |
| entPrefixConfig.entPrefix | String   | 必填         | 64           | 企业前缀        | 88.101.1304                             |
| entPrefixConfig.hdlType   | String   | 必填         | 255          | hdl类型         | HS_SITE                                 |
| entPrefixConfig.httpPort  | String   | 非必填       | 11           | http端口        |                                         |
| entPrefixConfig.ip        | String   | 必填         | 255          | ip地址          | 2031:0000:1F1F:0000:0000:0100:11A0:ADDF |
| entPrefixConfig.ipType    | String   | 必填         | 1            | ip类型4:V4,6:V6 | 6                                       |
| entPrefixConfig.tcpPort   | String   | 非必填       | 11           | tcp端口         | 2643                                    |
| entPrefixConfig.udpPort   | String   | 非必填       | 11           | udp端口         | -                                       |

###  请求示例

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

| **参数** | **类型** | **最大长度** | **备注**               | **示例值** |
| -------- | -------- | ------------ | ---------------------- | ---------- |
| status   | Integer  | -            | 状态码(详见状态码说明) | 1          |
| message  | String   | -            | 状态码描述             | success    |
| data     | Boolean  | -            | 是否操作成功           | true       |

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
    "message":"系统繁忙",
    "status":-1,
    "data": null
}
```

###  注意事项

>- 该接口调用的前提：企业已申请且国家顶级节点业务管理系统审核通过
>- http端口、tcp端口、udp端口至少填写一个
>- 只有管理员角色能调用该接口（例：admin用户） 