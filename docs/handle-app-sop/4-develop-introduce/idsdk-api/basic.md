# 基础用法

## 身份认证

在调用企业节点标准版OpenAPI接口前需要首先完成身份认证，企业节点身份认证使用[挑战应答](https://baike.baidu.com/item/%E6%8C%91%E6%88%98%E5%BA%94%E7%AD%94%E6%96%B9%E5%BC%8F/191313?fr=ge_ala)方式。

### 前置条件

[获取应用标识身份](../app-develop/step2.md)。

### 操作步骤

身份认证流程如下：

<center><img src="./images/identity-verify.png" style="margin-top: 10px"/></center>

#### 挑战

该接口用于获取挑战信息，为一随机nonce值。

请求示例

```
GET 'http://127.0.0.1:3000/api/v1/doip/public/challengehandle=88.608.24061301/App_scxt0716'
```

返回结果

```json
{
  "code": 1,
  "message": "成功",
  "data": "1816"
}
```

#### 应答

该接口用于验证使用nonce值生成的signature，验证成功则颁发token。

请求示例

```
POST http://127.0.0.1:3000/api/v1/doip/public/verify-response

-d '{
  "handle":"handle=88.608.24061301/App_scxt0716",
  "signature":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42M"
}'
```

返回结果

```json
{
 "code": 1,
 "message": "成功",
 "data": {
 "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4L0FwcF96ajAxIiwiZXhwIjoxNzAyNTQyMTM0LCJpYXQiOjE3MDI0NTU3MzQsImp0aSI6IjMxMzlmNDVkLTA5YzAtNDljZS04MTdkLWE4NDRhZmFlZTFjMyJ9.9Akw3pAwMM-tHZ6WOB6OI4E_ZMvDKyRn6CPYD1TWahc"
 }
}
```

### 后续操作

通过挑战应答接口，应用可以获取token，用于后续创建元数据, [标识注册](#标识注册)等。

## 元数据模版创建

应用开发者调用元数据模板创建接口，在企业节点A中完成产品元数据模板创建。

### 前置条件

已完成生产系统的[标识身份认证](#身份认证)。

### 操作步骤

#### 创建产品元数据

请求示例

```
POST http://127.0.0.1:3000/api/v1/open/meta/create

--H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

-d '{
  "classifyCode": "assign",
  "metaName": "箱酒",
  "metaCode": "box",
  "standard": "",
  "metaDesc": "",
  "industryCategory": "M",
  "industrySpecific": "75",
  "industryTrade": "751",
  "industrySubclass": "7517",
  "metaItemCreateDTOS": [
    {
      "itemCode": "code",
      "englishName": "code",
      "chineseName": "箱码",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "minLength": 0,
        "maxLength": 4000,
        "dataType": "1"
      }
    },
    {
      "itemCode": "product",
      "englishName": "product",
      "chineseName": "产品",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "minLength": 0,
        "maxLength": 4000,
        "dataType": "1"
      }
    },
    {
      "itemCode": "raw",
      "englishName": "raw",
      "chineseName": "原料",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "minLength": 0,
        "maxLength": 4000,
        "dataType": "1"
      }
    },
    {
      "itemCode": "size",
      "englishName": "size",
      "chineseName": "规格",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "dataType": "1"
      }
    },
    {
      "itemCode": "date",
      "englishName": "date",
      "chineseName": "生产日期",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "dateFormat": "yyyy-MM-dd",
        "dataType": "3"
      }
    }
  ]
}'
```

返回示例

```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "metaId": 61
    }
}
```

#### 发布产品元数据

应用开发者调用元数据发布接口对创建的产品元数据进行发布操作，发布后的产品元数据可以进行[注册标识](#标识注册)等操作。

请求示例

```
PUT http://127.0.0.1:3000/api/v1/open/meta/publish-or-withdraw

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

-d ' {
    "metaHandleList": [
        "88.608.24161301/META_PRODUCT"
    ],
    "opType": "publish"
}'
```

返回示例

```json
{
    "code": 10000,
    "message": "成功",
    "data": [
        {
            "metaHandle": "88.608.24161301/META_PRODUCT",
            "state": "success"
        }
    ]
}
```

### 后续操作
1. 依据已创建的产品元数据模板进行产品标识注册。

`高阶用法`
  - 元数据模板创建成功后，权限默认为“指定范围”。若需对全网（标识网络）公开，则可通过[元数据模板授权](./advance.md#元数据模板授权)将权限变更为“公开”；否则，需通过[元数据模板授权](./advance.md#元数据模板授权)，配置元数据模板的访问权限。
  - 当应用开发者需使用标识关联服务打通上下游企业时，需进行[元数据模板关联](./advance.md#元数据模板关联)。

<span style="font-size: 12px; color: rgb(22,93,255);">
说明：元数据模板的权限，包括“公开”和“指定范围”。“公开”指标识网络中的主体都可以使用该模板，“指定范围”指标识网络中被授权的主体才可以使用该模板。</span>


## 标识注册

应用开发者调用标识注册接口，基于产品元数据模板，将生产系统的产品数据注册到企业节点A中。

### 前置条件

已完成产品[元数据模版注册](#元数据模版创建)。

### 操作步骤

生产系统使用发布后的元数据模板进行产品标识注册。

请求示例

```
POST http://127.0.0.1:3000/api/v1/doip?targetId=88.608.24061301/META_8fc3752a80CASE001&operationId=0.DOIP/Op.Create

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

-d '{
  "type": "88.608.24061301/META_8fc3752a80",
  "attributes": {
    "content": {
      "code": "CASE001",
      "product": "酿酒52%vol",
      "size": "1*6*500ml",
      "raw": "优质高粱",
      "date": "2024-06-22",
    }
  }
}'
```

返回示例

```json
{
  "code": 10000,
  "message": "成功",
  "data": {
    "type": "88.608.24161301/META_PRODUCT",
    "attributes": {
      "content": {
      "code": "CASE001",
      "product": "酿酒52%vol",
      "size": "1*6*500ml",
      "raw": "优质高粱",
      "date": "2024-06-22",
    }
    }
  }
}
```

### 后续步骤

解析产品标识

`高阶用法`
1. 产品标识注册成功后，该标识的数据权限默认为“指定范围”，若需变更权限，则执行以下操作：
  - `单个标识数据授权`：若每条产品标识，其数据授权策略均不相同，则可通过[实例标识单个授权](./advance.md#实例标识单个授权)，针对每一条标识进行单独的数据授权


<span style="font-size: 12px; color: rgb(22,93,255);">
说明：标识的数据权限，包括“公开”和“指定范围”。“公开”指标识网络中的主体都可以查看该数据，“指定范围”指标识网络中被授权的主体才可以查看该数据或编辑该数据。标识的数据权限，既可以控制到该标识下的每个字段，也可以控制到该条标识。</span>


## 标识解析
应用开发者调用标识解析接口，解析产品标识。

### 前置条件
已完成产品产品[标识注册](#标识注册)。

### 操作步骤
生产系统解析产品标识。

请求示例
```
GET http://127.0.0.1:3000/api/v1/doip?targetId=88.608.24061301/META_8fc3752a80CASE001&operationId=0.DOIP/Op.Retrieve

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```

返回示例

```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "id": "88.608.24061301/META_8fc3752a80CASE001",
        "type": "88.608.24061301/META_8fc3752a80",
        "attributes": {
            "attributes": {
                "metaData": {
                    "createTime": "2024-06-22 14:13:24",
                    "updateTime": "2024-06-22 14:13:37",
                    "creator": "88.608.24061301/App_scxt071",
                    "updater": "88.608.24061301/App_scxt071"
                }
            },
            "elements": [
                {
                    "index": 2000,
                    "type": "code",
                    "name": "箱码",
                    "data": "CASE001",
                    "dataType": 1
                },
                {
                    "index": 2001,
                    "type": "product",
                    "name": "产品",
                    "data": "酿酒52%vol",
                    "dataType": 1
                },
                {
                    "index": 2002,
                    "type": "size",
                    "name": "规格",
                    "data": "1*6*500ml",
                    "dataType": 1
                },
                {
                    "index": 2003,
                    "type": "raw",
                    "name": "原料",
                    "data": "优质高粱",
                    "dataType": 1
                },
                {
                    "index": 2004,
                    "type": "date",
                    "name": "生产日期",
                    "data": "2024-06-22",
                    "dataType": 3
                }
            ]
        }
    }
}
```


### 后续步骤
应用开发者已完成一个简单的标识注册，并解析该标识。当应用开发者需打通供应链上、下游企业时，可通过使用[标识关联](./advance.md#标识关联)服务，实现上下游数据贯通。