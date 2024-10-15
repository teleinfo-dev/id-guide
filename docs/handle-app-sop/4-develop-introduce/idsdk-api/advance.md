# 高级用法

## 元数据模板授权

### 前置条件

[创建产品元数据模板](basic.md#元数据模版创建)。

### 操作步骤

1. <span id="advance-create-group">创建标识身份组</span>: 仓储系统所属企业B创建标识身份组`88.608.5288/Group_bjyx0716`

<center><img src="./images/add-handle-group.png" style="margin-top: 10px"/></center>

2. <span id="advance-join-handle">组内加入标识身份</span>: 将仓储系统身份`88.608.5288/APP_ccxt0716`加入组中

<center><img src="./images/group-member.png" style="margin-top: 10px"/></center>

3. <span id="advance-import-group">跨企业导入身份组</span>: 企业节点B将标识身份组`88.608.5288/Group_bjyx0716`提供给企业节点A，企业节点A导入企业节点B的标识身份组

<center><img src="./images/cross-ent-handle-group.png" style="margin-top: 10px"/></center>

4. 企业节点A将产品元数据模板授权给标识身份组：`88.608.5288/Group_bjyx0716`

<!-- <center><img src="./images/auth-group.png" style="margin-top: 10px"/></center> -->

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

仓储系统可查看元数据模板授权通知信息，并完成[元数据模板关联](#元数据模板关联)操作。


## 元数据模板关联

应用开发者调用元数据创建接口，在企业节点B中创建入库单元数据模板，并关联产品元数据模板。

### 前置条件

1. 已完成仓储系统的 [标识身份认证](./basic.md#身份认证)
2. 已完成[元数据模板创建发布](basic.md#元数据模版创建)
3. 若元数据模板“非公开”，则需完成产品[元数据模板授](#元数据模板授权)

### 操作步骤

仓储系统创建入库单数据模板，并关联产品元数据模板。

**关联元数据**

请求示例

```
POST http://127.0.0.1:3000/api/v1/open/meta/create

--H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

-d '{
  "classifyCode": "receipt",
  "metaName": "经销商入库单",
  "metaCode": "receipt",
  "standard": "",
  "metaDesc": "",
  "industryCategory": "M",
  "industrySpecific": "75",
  "industryTrade": "751",
  "industrySubclass": "7517",
  "metaItemCreateDTOS": [
    {
      "itemCode": "receiptNumber",
      "englishName": "receiptNumber",
      "chineseName": "入库单号",
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
      "itemCode": "reviewer",
      "englishName": "reviewer",
      "chineseName": "入库审核人",
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
      "itemCode": "receiveDate",
      "englishName": "receiveDate",
      "chineseName": "入库日期",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "dateFormat": "yyyy-MM-dd",
        "dataType": "3"
      }
    },
    {
      "itemCode": "associatedBoxCode",
      "englishName": "associatedBoxCode",
      "chineseName": "关联箱码",
      "required": 0,
      "uniqueField": 0,
      "inputNecessary": 1,
      "listItemNecessary": 0,
      "itemSchemaCreateDTO": {
        "referenceType": 2,
        "dataType": "5"
      },
      "itemReferenceDTO": {
          "referenceMetaHandle": "88.608.24061301/META_8fc3752a80"
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

参考产品[元数据模版创建](basic.md#元数据模版创建)模块发布对该元数据进行发布操作。

### 后续步骤

基于元数据模板的关联进行标识关联


## 标识关联

应用开发者调用标识注册接口，基于入库单元数据模板，将仓储系统的入库单数据注册到企业节点B中，同时实现与产品标识的关联。

### 前置条件

已完成产品[标识注册](./basic.md#标识注册)。

### 操作步骤

仓储系统应用使用发布后的元数据注册入库单标识。

请求示例

```
POST http://127.0.0.1/api/v1/doip?targetId=88.608.5288/META_2f23b2b600TSQ202406231&operationId=0.DOIP/Op.Create

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

-d '{
  "type": "88.608.5288/META_2f23b2b600",
  "attributes": {
    "content": {
      "receiptNumber": "TSQ202406231",
      "reviewer":"王汝阳"
      "receiveDate": "2024-06-23",
      "associatedBoxCode": ["88.608.24061301/META_8fc3752a80CASE001","88.608.24061301/META_8fc3752a80CASE002"]
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
    "type": "88.608.5288/META_2f23b2b600",
    "attributes": {
      "content": {
        "receiptNumber": "TSQ202406231",
        "reviewer":"王汝阳"
        "receiveDate": "2024-06-23",
        "associatedBoxCode": [
          "88.608.24061301/META_8fc3752a80CASE001",
          "88.608.24061301/META_8fc3752a80CASE002"
        ]
      }
    }
  }
}
```

### 后续步骤

解析入库单标识。

## 关联标识解析
应用开发者调用标识解析接口，解析入库单标识，进而查询产品数据。

### 前置条件
已完成[入库单标识注册与产品标识关联](#标识关联)。

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
产品标识未对仓储系统进行授权，仓储系统解析产品标识没有权限。

请求示例
```
GET http://127.0.0.1:3000/api/v1/doip?targetId=88.608.24061301/META_8fc3752a80CASE001&operationId=0.DOIP/Op.Retrieve

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```

返回示例
```json
{
  "message": "没有权限查看数据",
  "code": 403
}
```

### 后续操作

1. 应用开发者已基于[标识关联服务](#标识关联)，实现上下游数据贯通。但因被关联的产品标识，其数据权限为“指定范围”，且未对仓储系统所属企业进行授权，所以仓储系统所属企业解析不出来产品标识的数据

2. 若需查询产品标识的数据，则需生产系统所属企业将产品标识授权给仓储系统所属企业。可通过[实例标识单个授权](#实例标识单个授权)完成对单条标识的单独授权。


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


## 授权标识解析
产品标识数据对仓储系统授权了code，raw，product三个字段的查看权限，仓储系统解析产品标识只能查看这三个字段内容。

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


## 实例标识单个授权
应用开发者调用实例标识单个授权接口，在企业节点A中将生产系统的单条产品数据按需授权给仓储系统。

### 前置条件
已完成产品[标识注册](basic.md#标识注册)。

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
仓储系统在企业节点B[解析入库单标识](#授权标识解析)时，可解析出该条被授权的产品标识。


