# 通过SDK、API接口接入数据

对应接入使用文档：[SDK文档](../../sdk/v2/introduction.md)、[API接口文档](../../idhub/standard/introduce.md)

## 身份认证
在调用企业节点标准版OpenAPI接口前需要首先完成身份认证，企业节点身份认证使用[挑战应答](https://baike.baidu.com/item/%E6%8C%91%E6%88%98%E5%BA%94%E7%AD%94%E6%96%B9%E5%BC%8F/191313?fr=ge_ala)方式

### 前置条件
[获取应用标识身份](../5-develop-guide/get-app-handle.md)

### 操作步骤

身份认证流程如下：
<center><img src="./images/identity-verify.png" style="margin-top: 10px"/></center>


#### 挑战

该接口用于获取挑战信息，为一随机nonce值。

请求示例

```
GET 'http://manufacture:3000/api/v1/doip/public/challengehandle=88.608.24061301/App_scxt0716'
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

该接口用于验证使用nonce值生成的signature（签名signature生成方式参考接口文档），验证成功则颁发token。

请求示例

```
POST http://manufacture:3000/api/v1/doip/public/verify-response

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

通过挑战应答接口，应用可以获取token，用于后续[创建元数据](#产品元数据模版创建), [标识注册](#标识注册)等。

## 产品元数据模版创建

应用开发者调用元数据模板创建接口，在企业节点A中完成产品元数据模板创建。

### 前置条件

已完成生产系统的[标识身份认证](#身份认证).

### 操作步骤

#### 创建产品元数据

请求示例

```
POST http://manufacture:3000/api/v1/open/meta/create

--H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

-d '{
  "classifyCode": "assign",
  "metaHandle": "88.608.24161301/META_PRODUCT",
  "metaName": "产品元数据",
  "metaCode": "product",
  "standard": "",
  "metaDesc": "",
  "industryCategory": "M",
  "industrySpecific": "75",
  "industryTrade": "751",
  "industrySubclass": "7517",
  "metaItemCreateDTOS": [
    {
      "itemCode": "productBrand",
      "englishName": "productBrand",
      "chineseName": "产品品牌",
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
      "itemCode": "productName",
      "englishName": "productName",
      "chineseName": "产品名称",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "dataType": "1"
      }
    },
    {
      "itemCode": "manufactureDate",
      "englishName": "manufactureDate",
      "chineseName": "生产日期",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "dateFormat": "yyyy-MM-dd HH:mm:ss",
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
应用开发者调用元数据发布接口对创建的产品元数据进行发布操作，发布后的产品元数据可以进行[数据授权](#同类数据授权) 和[标识注册](#标识注册)等操作。

请求示例
```
PUT http://manufacture:3000/api/v1/open/meta/publish-or-withdraw

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

依据已创建的产品元数据模板进行[元数据模板授权](#产品元数据模板授权非必须)。
当该步骤创建的产品元数据模板权限为“公开”时，则可直接进入[元数据模板关联](#元数据模板关联)步骤。


## 产品元数据模板授权（非必须）

### 前置条件
[创建产品元数据模板](#产品元数据模版创建)。

### 操作步骤

1. 仓储系统所属企业B创建标识身份组：`88.608.5288/Group_bjyx0716`
<center><img src="./images/add-handle-group.png" style="margin-top: 10px"/></center>

2. 将仓储系统身份：`88.608.5288/APP_ccxt0716`加入组中
<center><img src="./images/group-member.png" style="margin-top: 10px"/></center>

3. 企业B将标识身份组：`88.608.5288/Group_bjyx0716`提供给企业A，进行跨企业身份组导入到企业A中
<center><img src="./images/cross-ent-handle-group.png" style="margin-top: 10px"/></center>

4. 企业A导入标识身份组：`88.608.5288/Group_bjyx0716`并进行授权
<center><img src="./images/auth-group.png" style="margin-top: 10px"/></center>


请求示例

```
POST http://manufacture/api/v1/open/meta/grant/info

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

-d '{
        "scope": 2,
        "metaHandle": "88.608.24161301/META_PRODUCT",
        "handleList": [
            "88.608.5288/Group_bjyx0716"
        ],
    "removeHandleUsers": []
}'
```

返回示例
```json
{
    "code": 10000,
    "message": "成功"
}
```

### 后续操作

仓储系统可查看[授权通知信息](#授权通知非必须)，并完成产品[元数据模板关联](#元数据模板关联)操作。
说明：当元数据模板的权限定义为“公开”时，则不需要执行元数据模板授权操作。


## 授权通知（非必须）

### 前置条件

应用开发者已将生产系统在企业节点A中创建的产品[元数据模板授权](#产品元数据模板授权非必须)给仓储系统的标识身份。

### 操作步骤

请求示例

```
GET http://storage:3000/api/v1/open/message/appMessage

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```

返回示例

```json
{
  "code": 1,
  "message": "成功",
  "data": {
    "pageSize": 20,
    "pageNumber": 1,
    "totalCount": 1,
    "totalPage": 1,
    "content": [
      {
        "id": 1,
        "messageTitleType": 1,
        "messageType": 1,
        "messageDetail": "XXXX公司已向您授权元数据：88.608.24161301/META_PRODUCT的查看权限。",
        "createdTime": "2024-06-22 17:01:42"
      }
    ]
  }
}
```

### 后续步骤

仓储系统创建入库单元数据模板并[关联产品元数据模板](#元数据模板关联)。

## 元数据模板关联

应用开发者调用元数据创建接口，在企业节点B中创建入库单元数据模板，并关联产品元数据模板

### 前置条件

1. 已完成仓储系统的 [标识身份认证](#身份认证)
2. 已完成产品[元数据模板创建发布](#产品元数据模版创建)
3. 若产品元数据模板“非公开”，则需完成[产品元数据模板授](#产品元数据模板授权非必须)

### 操作步骤
仓储系统创建入库单数据模板，并关联产品元数据模板。

**关联元数据**

请求示例

```
POST http://storage:3000/api/v1/open/meta/create

--H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

-d '{
  "classifyCode": "assign",
  "metaHandle": "88.608.5288/META_RUKUDAN",
  "metaName": "入库单元数据",
  "metaCode": "rukudan",
  "standard": "",
  "metaDesc": "",
  "industryCategory": "M",
  "industrySpecific": "75",
  "industryTrade": "751",
  "industrySubclass": "7517",
  "metaItemCreateDTOS": [
    {
      "itemCode": "storageDate",
      "englishName": "storageDate",
      "chineseName": "入库日期",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "dateFormat": "yyyy-MM-dd HH:mm:ss",
        "dataType": "3"
      }
    },
    {
      "itemCode": "storagePerson",
      "englishName": "storagePerson",
      "chineseName": "入库负责人",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "dataType": "1"
      }
    },
    {
      "itemCode": "storageProduct",
      "englishName": "storageProduct",
      "chineseName": "入库产品",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "referenceType": 2,
        "dataType": "5"
      },
      "itemReferenceDTO": {
          "referenceMetaHandle": "88.608.24161301/META_PRODUCT"
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

**发布元数据**

参考【产品元数据模版创建】模块发布对该元数据进行发布操作。

### 后续步骤

进行[同类数据授权](#同类数据授权)与[标识注册](#标识注册)


## 同类数据授权

应用开发者调用同类数据授权接口，将生产系统的产品数据按需授权给仓储系统的标识身份。

### 前置条件

已完成产品[元数据模版创建](#产品元数据模版创建)

### 操作步骤

将产品元数据模板中的“非公开”的元数据字段，按需授权给仓储系统的应用标识身份所属身份组。

请求示例

```
POST http://manufacture:3000/api/v1/open/classes-grant/authorization

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

-d ' {
  "metaHandle": "88.608.24161301/META_PRODUCT",
  "accessList": [
    {
      "item": "productBrand",
      "authType": 1,
      "scope": 2,
      "handleUsers": [
        "88.608.5288/Group_bjyx0716"
      ],
      "removeHandleUsers": [
       
      ]
    },
    {
      "item": "productName",
      "authType": 1,
      "scope": 2,
      "handleUsers": [
        "88.608.5288/Group_bjyx0716"
      ],
      "removeHandleUsers": [
       
      ]
    },
    {
      "item": "manufactureDate",
      "authType": 1,
      "scope": 2,
      "handleUsers": [
        "88.608.5288/Group_bjyx0716"
      ],
      "removeHandleUsers": [
       
      ]
    }
  ]
}'
```

返回示例

```json
{
    "code": 1,
    "message": "成功"
}
```

### 后续步骤
进行[标识注册](#标识注册)

## 标识注册

应用开发者调用标识注册接口，基于产品元数据模板，将生产系统的产品数据注册到企业节点A中。

### 前置条件
已完成产品[元数据模版注册](#产品元数据模版创建)和[同类数据权限授权](#同类数据授权)

### 操作步骤
生产系统使用发布后的元数据模板进行产品标识注册。

请求示例

```
POST http://manufacture:3000/api/v1/doip?targetId=88.608.100/PRODUCT_1&operationId=0.DOIP/Op.Create

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

-d '{
  "type": "88.608.24161301/META_PRODUCT",
  "attributes": {
    "content": {
      "productBrand": "泰尔英福",
      "productName": "企业节点",
      "manufactureDate": "2024-06-22"
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
        "productBrand": "泰尔英福",
        "productName": "企业节点",
        "manufactureDate": "2024-06-22"
      }
    }
  }
}
```

### 后续步骤
实现入库单标识与产品[标识关联](#标识关联)

## 标识关联

### 前置条件

已完成产品[标识注册](#标识注册)

### 操作步骤

仓储系统应用使用发布后的元数据注册入库单标识。

请求示例

```
POST http://storage/api/v1/doip?targetId=88.608.77/RUKUDAN_1&operationId=0.DOIP/Op.Create

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

-d '{
  "type": "88.608.5288/META_RUKUDAN",
  "attributes": {
    "content": {
      "storagePerson": "admin",
      "storageDate": "2024-06-23",
      "storageProduct": ["88.608.24161301/PRODUCT_1","88.608.24161301/PRODUCT_2"]
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
    "type": "88.608.77/META_RUKUDAN",
    "attributes": {
      "content": {
        "storagePerson": "admin",
        "storageDate": "2024-06-23",
        "storageProduct": ["88.608.24161301/PRODUCT_1","88.608.24161301/PRODUCT_2"]
      }
    }
  }
}
```

### 后续步骤
后续可使用已注册的[标识数据进行解析](./app-develop#标识解析)和为[标识应用开发](./app-develop)提供数据服务。
