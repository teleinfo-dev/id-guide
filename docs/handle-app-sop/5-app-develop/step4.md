# step4 标识应用开发

标识应用开发，指应用开发者基于ID-SDK/API，从企业节点中获取所需的数据，并进行数据的计算、展示、操作、分析等，完成如全生命周期管理、产品溯源、设备巡检、数据BI等应用的开发落地。

下面介绍模拟应用开发者通过调用ID-SDK/API获取到所需的数据，实现基于产品标识查询入库单数据，以及基于入库单标识查询产品数据。

## 解析入库单标识查询产品数据的接口调用示例

### 请求示例

```
GET http://127.0.0.1:3000/api/v1/doip?targetId=88.608.5288/META_2f23b2b600TSQ202406231&operationId=0.DOIP/Op.Retrieve

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```

### 返回示例
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


## 解析产品标识查询入库单数据的接口调用示例

### 请求示例
```
GET http://127.0.0.1:3000/api/v1/doip?targetId=88.608.24061301/META_8fc3752a80CASE001&operationId=0.DOIP/Op.Retrieve

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```

### 返回示例
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
                },
                {
                    "index": 2004,
                    "type": "associatedReceipt",
                    "name": "关联入库单",
                    "data": "88.608.5288/META_2f23b2b600TSQ202406231",
                    "dataType": 5
                }
            ]
        }
    }
}
```