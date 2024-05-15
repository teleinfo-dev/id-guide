# 元数据操作相关接口

## 更新元数据基本信息

通过此接口对元数据基本信息进行修改。

### 请求参数

- 请求服务：企业节点服务器的 HTTP 端口（默认 8000）
- 请求方式：PUT
- 请求路径：`/api/v2/meta/update-basic-info`
- Header：

| 参数          | 类型   | 是否必填 | 最大长度 | 备注                                | 示例值           |
| ------------- | ------ | -------- | -------- | ----------------------------------- | ---------------- |
| Authorization | String | 是       | -        | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String | 是       | -        | application/json                    | application/json |

- Param：

| 参数             | 类型   | 是否必填 | 最大长度 | 备注               | 示例值                      |
| ---------------- | ------ | -------- | -------- | ------------------ | --------------------------- |
| classifyCode     | String | 是       |          | 本企业内的分类code | "sp"                        |
| metaHandle       | String | 是       |          | 元数据标识         | "88.608.6688/META_xz_test2" |
| metaName         | String | 是       | 100      | 元数据名称         |                             |
| metaCode         | String | 是       | 100      | 元数据代码         |                             |
| industryCategory | String | 是       |          | 行业分类一级       |                             |
| industrySpecific | String | 是       |          | 行业分类二级       |                             |
| industryTrade    | String | 是       |          | 行业分类三级       |                             |
| industrySubclass | String | 是       |          | 行业分类四级       |                             |
| standard         | String | 否       | 200      | 依据标准           |                             |
| metaDesc         | String | 否       | 1000     | 元数据描述         |                             |

### 请求示例

```json
 {
    "classifyCode": "PEIFUBEN",
    "metaHandle": "88.608.6688/META_xz_test2",
    "metaName": "xz_test2",
    "metaCode": "xz_test2_code",
    "standard": "依据标准内容000000",
    "metaDesc": "描述内容.....",
    "industryCategory": "E",
    "industrySpecific": "50",
    "industryTrade": "502",
    "industrySubclass": "5022",
}
```

### 响应数据

| 参数    | 类型    | 最大长度 | 备注                    | 示例值  |
| ------- | ------- | -------- | ----------------------- | ------- |
| status  | Integer | -        | 状态码(详见状态码说明） | 1       |
| message | String  | -        | 状态码描述              | success |

- 响应参数



### 响应示例

```json
{
    "code": 10000,
    "message": "成功"
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
