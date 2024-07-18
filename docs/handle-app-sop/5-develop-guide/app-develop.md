# 标识应用开发

应用开发者完成数据接入企业节点后，可通过SDK或API接口，继续完成标识应用的开发测试；
以下以构建标识追溯应用为例进行说明

## 前置条件

构建追溯应用前，完成以下操作：
1. 应用开发者在企业节点标准版中生成追溯应用的应用身份ID追溯。
2. 构建双向的标识数据关联。在仓储企业节点（88.608.5288）已完成“入库单--->产品”的单向关联关系，参考该方式还需在生产企业节点（`88.608.24161301`）中实现“产品--->入库单”的关联关系。从而最终实现不同企业间“产品<--->入库单”双向的关联关系。
3. 基于步骤2中描述，完成整个链路数据关系的建立，形成标识数据关系图。
4. 将生产系统的产品标识的数据授权给仓储系统的标识身份。
5. 应用开发者基于标识数据关系图，开发追溯应用

## 操作步骤

<center><img src="./images/app-develop-1.png" style="margin-top: 10px"/></center>

1. 详细分析标识关系图，理解并确定不同系统之间标识数据的业务逻辑与关联关系
2. 理解产业链路流程，设计整个追溯链路图
3. 通过解析某一个环节的标识数据，解析出本环节的数据及追溯链路上其他环节的标识
4. 追溯链路上全环节的数据，按已配置的权限策略开放给有访问权限的用户

在整个追溯应用的开发过程中，需要使用企业节点的身份认证接口和标识数据解析接口，完成整个链路数据的获取

### 身份认证

身份认证接口使用流程和方式参见【企业数据接入-身份认证】

### 标识解析 

标识数据解析接口使用方式如下，可分别获取产品标识数据、入库单标识数据以及他们之间的关联关系(接口详细使用方式请参见企业节点OpenAPI)。

#### 仓储系统解析入库单标识

请求示例

```
GET http://storage:3000/api/v1/doip?targetId=88.608.5288/RUKUDAN_1&operationId=0.DOIP/Op.Retrieve

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```

返回示例

```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "id": "88.608.5288/RUKUDAN_1",
        "type": "88.608.5288/META_RUKUDAN",
        "attributes": {
            "attributes": {
                "metaData": {
                    "createTime": "2024-06-22 14:13:24",
                    "updateTime": "2024-06-22 14:13:37",
                    "creator": "88.608.77/APP_ID仓储",
                    "updater": "88.608.77/APP_ID仓储"
                }
            },
            "elements": [
                {
                    "index": 2000,
                    "type": "storagePerson",
                    "name": "入库负责人",
                    "data": "admin",
                    "dataType": 1
                },
                {
                    "index": 2001,
                    "type": "storageDate",
                    "name": "入库日期",
                    "data": "2024-06-23",
                    "dataType": 3
                },
                {
                    "index": 2002,
                    "type": "storageProduct",
                    "name": "入库产品",
                    "data": [
                        "88.608.24161301/PRODUCT_1"
                    ],
                    "dataType": 5
                }
            ]
        }
    }
}
```


#### 仓储系统解析产品标识

生产系统只将产品的产品品牌、产品名称和入库单字段查看权限授权给仓储系统，故仓储系统解析解析产品标识只能解析到这三个字段数据。

请求示例
```
GET http://storage:3000/api/v1/doip?targetId=88.608.24161301/PRODUCT_1&operationId=0.DOIP/Op.Retrieve

-H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```

返回示例

```json
{
    "code": 1,
    "message": "成功",
    "data": {
        "id": "88.608.24161301/PRODUCT_1",
        "type": "88.608.24161301/META_PRODUCT",
        "attributes": {
            "attributes": {
                "metaData": {
                    "createTime": "2024-06-22 14:13:24",
                    "updateTime": "2024-06-22 14:13:37",
                    "creator": "88.608.100/APP_ID生产",
                    "updater": "88.608.100/APP_ID生产"
                }
            },
            "elements": [
                {
                    "index": 2000,
                    "type": "productName",
                    "name": "产品名称",
                    "data": "企业节点",
                    "dataType": 1
                },
                {
                    "index": 2001,
                    "type": "productBrand",
                    "name": "产品品牌",
                    "data": "泰尔英福",
                    "dataType": 1
                },
                {
                  "index": 2003,
                  "type": "rukudan",
                  "name": "入库单",
                  "data": "88.608.5288/RUKUDAN_1",
                  "dataType": 5
                }
            ]
        }
    }
}
```


## 追溯应用

<center><img src="./images/wine-trace.png" style="margin-top: 10px"/></center>
