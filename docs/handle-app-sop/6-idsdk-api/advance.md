# 高级用法

## 元数据模板授权

### 前置条件

[创建产品元数据模板](#产品元数据模版创建)。

### 操作步骤

1. 创建标识身份组，仓储系统所属企业B创建标识身份组`88.608.5288/Group_bjyx0716`

<center><img src="./images/add-handle-group.png" style="margin-top: 10px"/></center>

2. 组内加入标识身份，将仓储系统身份`88.608.5288/APP_ccxt0716`加入组中

<center><img src="./images/group-member.png" style="margin-top: 10px"/></center>

3. 跨企业导入身份组，企业节点B将标识身份组`88.608.5288/Group_bjyx0716`提供给企业节点A，企业节点A导入企业节点B的标识身份组

<center><img src="./images/cross-ent-handle-group.png" style="margin-top: 10px"/></center>

4. 企业节点A将产品元数据模板授权给标识身份组：`88.608.5288/Group_bjyx0716`

<center><img src="./images/auth-group.png" style="margin-top: 10px"/></center>

请求示例

```
POST http://127.0.0.1:3000/api/v1/open/meta/grant/info

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

仓储系统可查看[授权通知信息](#授权通知非必须)，并完成[元数据模板关联](#元数据模板关联)操作。

## 元数据模板授权通知

### 前置条件

应用开发者已将生产系统在企业节点A中创建的产品[元数据模板授权](#产品元数据模板授权非必须)给仓储系统的标识身份。

### 操作步骤

请求示例

```
GET http://127.0.0.1:3000/api/v1/open/message/appMessage

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

应用开发者调用元数据创建接口，在企业节点B中创建入库单元数据模板，并关联产品元数据模板。

### 前置条件

1. 已完成仓储系统的 [标识身份认证](#身份认证)
2. 已完成[元数据模板创建发布](#产品元数据模版创建)
3. 若元数据模板“非公开”，则需完成[产品元数据模板授](#产品元数据模板授权非必须)

### 操作步骤

仓储系统创建入库单数据模板，并关联产品元数据模板。

**关联元数据**

请求示例

```
POST http://127.0.0.1:3000/api/v1/open/meta/create

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

基于元数据模板的关联进行标识关联（跳转至5.4.2.1.2.4）


## 标识关联

应用开发者调用标识注册接口，基于入库单元数据模板，将仓储系统的入库单数据注册到企业节点B中，同时实现与产品标识的关联。

### 前置条件

已完成产品[标识注册](#标识注册)。

### 操作步骤

仓储系统应用使用发布后的元数据注册入库单标识。

请求示例

```
POST http://127.0.0.1:3000/api/v1/doip?targetId=88.608.77/RUKUDAN_1&operationId=0.DOIP/Op.Create

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

解析（跳转至5.4.2.1.2.5）入库单标识。

## 关联标识解析
应用开发者调用标识解析接口，解析入库单标识，进而查询产品数据。

### 前置条件
已完成入库单标识注册及（跳转至5.4.2.1.1.3）与产品标识关联（跳转至5.4.2.1.2.4）。

### 操作步骤

1. 仓储系统解析入库单标识

请求示例
```
GET http://127.0.0.1:3000/api/v1/doip?targetId=88.608.5288/META_2f23b2b600TSQ202406231&operationId=0.DOIP/Op.Retrieve

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```

返回示例
```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "id": "88.608.5288/META_2f23b2b600TSQ202406231",
        "type": "88.608.5288/META_2f23b2b600",
        "attributes": {
            "attributes": {
                "metaData": {
                    "createTime": "2024-06-22 14:13:24",
                    "updateTime": "2024-06-22 14:13:37",
                    "creator": "88.608.5288/APP_ccxt0716",
                    "updater": "88.608.5288/APP_ccxt0716"
                }
            },
            "elements": [
                {
                    "index": 2000,
                    "type": "receiptNumber",
                    "name": "入库单号",
                    "data": "TSQ202406231",
                    "dataType": 1
                },
                {
                    "index": 2001,
                    "type": "reviewer",
                    "name": "入库审核人",
                    "data": "王汝阳",
                    "dataType": 1
                },
                {
                      "index": 2002,
                      "type": "receiveDate",
                      "name": "入库日期",
                      "data": "2024-06-23",
                      "dataType": 3
                },
                {
                    "index": 2003,
                    "type": "associatedBoxCode",
                    "name": "入库产品",
                    "data": [
                      "88.608.24061301/META_8fc3752a80CASE001",
                      "88.608.24061301/META_8fc3752a80CASE002"
                    ],
                    "dataType": 5
                }
            ]
        }
    }
}
```

2. 仓储系统解析产品标识
生产系统只将产品的箱码、产品和原料三个字段查看权限授权给仓储系统，故仓储系统解析解析产品标识只能解析到这三个字段数据。

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
                    "index": 2003,
                    "type": "raw",
                    "name": "原料",
                    "data": "优质高粱",
                    "dataType": 1
                }
            ]
        }
    }
}
```

### 后续操作

1. 截止此时，应用开发者已基于标识关联服务（高阶用法）（跳转至5.4.2.1.2），实现上下游数据贯通。但因被关联的产品标识，其数据权限为“指定范围”，且未对仓储系统所属企业进行授权，所以仓储系统所属企业解析不出来产品标识的数据

2. 若需查询产品标识的数据，则需生产系统所属企业将产品标识授权给仓储系统所属企业。可通过同类数据授权（跳转至5.4.2.1.2.6）完成字段级的数据授权。也可通过实例标识单个授权（跳转至5.4.2.1.2.7）完成对单条标识的单独授权。


## 标识身份列表查询
应用开发者调用标识身份列表查询接口，在企业节点A中将需要授权的标识身份查询出来。

### 前置条件
已导入跨企业标识身份。

### 操作步骤
查询需要授权的标识身份列表。

请求示例
```
GET http://127.0.0.1:3000/api/v1/open/handle-user-group/list

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```

返回示例
```json
{
    "code": 10000,
    "message": "成功",
    "data": [
        {
            "name": "企业节点B身份组",
            "userHandle": "88.608.5288/Group_bjyx0716",
            "belongCompany": "企业节点B"
        }
  
    ]
}
```

## 同类数据授权

应用开发者调用同类数据授权接口，在企业节点A中将生产系统的全部产品数据按需授权给仓储系统。

### 前置条件

已完成产品[元数据模版创建](#产品元数据模版创建)。

### 操作步骤

将产品元数据模板中的“指定范围”的元数据字段，按需授权给仓储系统的标识身份所属身份组。

请求示例

```
POST http://127.0.0.1:3000/api/v1/open/classes-grant/authorization

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

仓储系统可查看数据授权通知信息（跳转至5.4.2.1.2.2），并在企业节点B解析入库单标识（跳转至关联标识解析5.4.2.8）时，可解析出产品标识。


## 同类数据授权-公开/非公开
应用开发者需要将产品数据进行公开时，可以调用数据授权类接口中的公开/非公开接口。

### 前置条件
已完成产品元数据模版创建（跳转至5.4.2.1.1.2）。

### 操作步骤
调用数据授权类接口中的公开/非公开接口将code、product、raw三个字段的查看权限公开。

请求示例
```
POST http://127.0.0.1:3000/api/v1/classes-grant/item/batch-public

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

-d '{
    "items": [
        "code",
        "product",
        "raw"
    ],
    "scope": 1,
    "metaHandle": "88.608.24061301/META_8fc3752a80"
}'
```

返回示例
```json
{
    "code": 1,
    "message": "成功"
}
```

### 后续操作
仓储系统可查看数据授权通知信息（跳转至5.4.2.1.2.2），并在企业节点B解析入库单标识（跳转至关联标识解析5.4.2.8）时，可解析出产品标识。


## 实例标识单个授权
应用开发者调用实例标识单个授权接口，在企业节点A中将生产系统的单条产品数据按需授权给仓储系统。

### 前置条件
已完成产品标识注册（跳转至5.4.2.1.1.3）。

### 操作步骤
将单条产品标识数据，按需授权给仓储系统的标识身份所属身份组。

请求示例
```
POST http://127.0.0.1:3000/api/v1/single-handle/authorization

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

-d '{
  "handle": "88.608.24061301/META_8fc3752a80CASE001",
  "grantType": 2,
  "readerScope": 2,
  "delHandleUserReaders": [],
  "delHandleUserWriters": [],
  "handleUserWriters": [],
  "handleUserReaders": [
    "88.608.5288/Group_bjyx0716"
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

### 后续操作
仓储系统可查看数据授权通知信息（跳转至5.4.2.1.2.8），并在企业节点B解析入库单标识（跳转至关联标识解析5.4.2.8）时，可解析出该条被授权的产品标识。

## 标识数据授权通知

### 前置条件
已完成产品标识的数据授权（跳转至5.4.2.1.2.6）。

### 操作步骤

请求示例
```
GET http://127.0.0.1:3000/api/v1/open/message/appMessage

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
        "messageTitleType": 1
        "messageType": 1,
        "messageDetail": "企业A已向您授权元数据88.608.24061301/META_8fc3752a80下创建的标识数据code、product、raw等字段的查看权限",
        "createdTime": "2024-06-22 17:01:42"
      }
    ]
  }
}
```

### 后续操作
在企业节点B解析入库单标识（跳转至关联标识解析5.4.2.8），同时可解析出产品标识。
