# 标识应用集成SOP V1.0

## 1. 概述

标识应用集成SOP，旨在帮助应用开发者按照标准规范，完成标识应用的开发。不同应用场景，应用集成的流程不同，使用的标识服务能力也不相同。应用开发者开发完成标识应用后，最终需将标识应用交付给应用使用者，应用开发者需帮助使用者完成标识应用与企业节点的对接。

标识应用全生命周期流程：

![image](./images/lifecircle.png)

流程描述：

1. 应用开发者在沙盒环境中完成标识应用开发及联调测试
2. 将标识应用上架到智数通平台，应用会被共享到全网的智数通平台中。
3. 企业购买该应用后，开发者所属企业（下文，称为卖方企业）将应用交付给买方企业。

   * 若属于私有化部署类应用，则由卖方企业完成部署并与买方企业的企业节点完成对接后，交付买方使用
   * 若属于saas类应用，则由卖方企业为买方企业开通使用账号及权限，并引导买方企业开通标识服务

**说明：本文针对标识应用开发和标识应用交付展开描述。**

## 2. 标识应用开发

### 2.1 开发环境

标识应用的开发、联调测试，在沙盒环境中完成。

标识沙盒提供社区版和标准版两个版本的测试环境，两个版本提供的服务能力不同。社区版只提供核心的标识注册、标识解析、运营统计等能力，标准版在社区版基础上新增了企业元数据、数据权限、数据连接、数据关联等服务。相较于社区版，标准版能力更丰富，开放接口更完善。

社区版和标准版，开放的API接口如下：


<div style="display:flex;">
<div style="width: 400px;padding:10px;background-color:rgb(232, 242, 254);border:1px solid #eee;margin-right:5px;">
    <details>
    <summary><strong>社区版API接口</strong></summary>
    <ol>
    <li>标识查询</li>
    <li>标识注册-新增属性</li>
    <li>标识修改</li>
    <li>标识删除-移除属性</li>
    <li>前缀预置</li>
    <li>前缀剔除</li>
    </ol>
    </details>
</div>
<div style="width: 400px;padding:10px;background-color:rgb(255, 250, 229);border:1px solid #eee;margin-left:5px;">
   <details>
   <summary><strong>标准版API接口</strong></summary>
   <ol>
    <li>身份认证</li>
    <li>企业元数据接口
        <ol>
            <li>企业元数据新增</li>
            <li>企业元数据修改
                <ol>
                    <li>基本信息修改</li>
                    <li>元数据属性修改</li>
                </ol>
            </li>
            <li>企业元数据发布/撤回</li>
            <li>企业元数据删除</li>
            <li>企业元数据查询</li>
            <li>企业元数据权限</li>
            <li>企业元数据创建副本</li>
        </ol>
        <strong>说明：通过企业元数据新增、修改接口，可实现企业元数据的关联</strong>
    </li>
    <li>数据权限接口
        <ol>
            <li>数据授权-公开/撤销</li>
            <li>非公开数据授权</li>
            <li>获取标识身份|身份组</li>
            <li>单条标识授权</li>
        </ol>
        <strong>说明：数据权限接口，可控制接入标识解析体系的数据被外界访问的权限</strong>
    </li>
    <li>标识操作
        <ol>
            <li>标识注册</li>
            <li>标识修改</li>
            <li>标识删除</li>
            <li>标识解析</li>
        </ol>
        <strong>说明：标识操作，需依赖企业元数据，遵循元数据规范。基于企业元数据的关联关系，可构建标识数据的关联。</strong>
    </li>
    <li>文件类
        <ol>
            <li>文件上传接口</li>
            <li>文件下载接口</li>
        </ol>
        <strong>说明：支持图片、音频、视频、pdf、word等文件等数据接入标识</strong>
    </li>
    <li>数据授权通知
        <ol>
            <strong>说明：当接入标识解析体系的数据被授权后，被授权的主体会收到授权通知</strong>
        </ol>       
</li>
</ol>
</details>
</div>
</div>

企业使用标准版企业节点，系统打通、数据连接更便捷，应用集成更规范，因此我们推荐您使用**标准版沙盒环境**。

标准版沙盒环境的地址为：
<div style="color:red;">

不体现idsphere.teleinfo.cn? 二级升级,评估安全性

\--> idpointer.teleinfo.cn, snms.teleinfo.cn

* [ ] _确认环境信息, 发送申请开通邮件, 加强安全问题审查_  @魏思晨

1. _以沙盒为归口_
2. _当前提供默认企业节点标准版,使用统一前缀_
3. _沙盒需求：生成IDInside 开发测试报告 （后续需求）_

社区版沙盒环境的地址为： @李龙

XXXXXXXXXX
</div>

**说明：沙盒环境中产生的数据，不会永久存储。接口调用日志会在应用开发完成后的一段时间后被清理，企业前缀也会被回收。**

### 2.2 开发流程

![image](./images/develop-step.png)

 标识应用开发的关键环节为打通不同信息系统，让企业数据接入企业节点，生成标准化数据。然后，应用开发者通过应用集成工具包完成标识应用集成开发。

 企业数据接入企业节点，生成标准化数据的方式有两种：

**1. 通过SDK或API接口连接数据**

![image](./images/sdk-link-data.png)

**2. 通过数据连接中间件IDLink连接数据**

![image](./images/idlink-link-data.png)


**说明：**
* IDLink相较于SDK或API接口，无需开发，更易使用。无论使用哪种数据连接方式，接入企业节点中的数据与企业信息系统中完全一致，当信息系统中的数据发生变更后，企业节点也会更新该数据。
* 若存在企业无合适的信息系统对接时，上层应用业务流转时产生的数据都将沉淀在企业节点中，则数据接入更适合通过SDK或API接口来对接。

应用集成工具包，包括《应用集成SOP》、SDK、API接口、标识解析应用中间件等。应用开发者参考《应用集成sop》，认证step2中获取的应用身份后，可选择调用SDK、API接口，获取应用所需的数据；也可以选择使用解析应用中间件，获取数据更简单。获取到数据后，应用开发者基于获取的数据进行展示、分析、计算、操作等，最终实现标识应用开发落地。

![image](./images/access.png)

### 2.3 开发步骤

#### 2.3.1 获取企业前缀

应用开发者登录沙盒后，一键获取企业前缀。该企业前缀仅在测试环境使用，不能支撑生产环境的应用对接。

**说明：当前标准版沙盒环境中，默认提供一个企业前缀。应用开发者可通过为不同应用生成应用身份的方式，实现不同标识应用开发。后续标识沙盒更新后，将支持为不同的应用开发者分配不同企业前缀的操作。**

#### 2.3.2 获取应用身份

1.登录标准版沙盒系统，进入【应用标识身份】菜单

![image](./images/app-menu.png)

2.点【新建应用】按钮，为应用生成标识身份

![image](./images/add-app.png)

3.在应用列表中，选择应用身份单据，点【详情】，查询应用身份ID，可下载私钥。

![image](./images/app-detail.png)

#### 2.3.3 企业数据接入沙盒环境

##### 2.3.3.1 通过API接口连接数据

应用开发者可以通过SDK或API接口完成企业数据接入企业节点。用到的API接口包括：

![image](./images/api-xmind.png)

**说明：标记为①的接口为必用接口，为②的接口，根据应用场景和用户需求推荐使用。**

<div style="color:red;">
获取ID-SDK、API接口文档的地址为：

生产环境：[https://idsphere.teleinfo.cn/docs/](https://idsphere.teleinfo.cn/docs/)   或者  [https://snms.teleinfo.cn/docs/](https://idsphere.teleinfo.cn/docs/)

</div>

下面以对接生产厂商，生产系统的产品信息和仓储系统的出库单为例，且相关数据均存储到企业节点，演示数据如何接入：

**说明：生产厂商的企业前缀为：88.111.100，物流企业的企业前缀为 88.222.77**

<div style="color: red;">
1. 如2.2.2 中所述，在生产厂商的企业节点A（88.111.100）中，为生产系统生成应用身份ID生产，在物流企业的企业节点C（88.222.77）中，为仓储系统生成应用身份ID仓储

ID生产：88.111.100/APP\_ID生产         ID仓储：88.222.77/APP\_ID仓储       

2. 应用开发者将生产系统、仓储系统分别与企业节点A、企业节点C对接，以企业节点API接口为标准进行开发

3. 接口调用示例  $\color{#0089FF}{@李龙}$  $\color{#0089FF}{@魏思晨}$
</div>

以下为API接口使用示例介绍，接口详情参见企业节点标准版API接口文档。

**1. 身份认证**

在调用企业节点API接口前需要首先完成身份认证，企业节点身份认证使用挑战应答方式。

![image](./images/challenge-timing.jpeg)

**挑战**

该接口用于获取挑战信息，为一随机nonce值。

请求示例: 

` GET http://manufacture:3000/api/v1/doip/public/challengehandle=88.111.100/APP_ID生产 `

返回结果:
```json
    {
      "code": 1,
      "message": "成功",
      "data": "1816"
    }
```

**应答**

该接口用于验证使用nonce值生成的signature（签名signature生成方式参考接口文档），验证成功则颁发token。

请求示例:
```js
POST http://manufacture:3000/api/v1/doip/public/verify-response
-d '{
      "handle":"handle=88.111.100/APP_ID生产",
      "signature":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42M"
    }'
```

返回示例:
```json
    {
     "code": 1,
     "message": "成功",
     "data": {
     "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4L0FwcF96ajAxIiwiZXhwIjoxNzAyNTQyMTM0LCJpYXQiOjE3MDI0NTU3MzQsImp0aSI6IjMxMzlmNDVkLTA5YzAtNDljZS04MTdkLWE4NDRhZmFlZTFjMyJ9.9Akw3pAwMM-tHZ6WOB6OI4E_ZMvDKyRn6CPYD1TWahc"
     }
    }
```

通过挑战应答接口，应用可以获取token，用于调用后续元数据，标识等相关接口

**2. 注册元数据**

应用可依据业务模型调用该接口注册元数据模型。生产系统和仓储系统分别在企业节点A和C完成元数据模型创建。

生产系统创建产品元数据模型

请求示例:
```js
    POST http://manufacture:3000/api/v1/open/meta/create

    --H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

    -d '{
      "classifyCode": "assign",
      "metaHandle": "88.111.100/META_PRODUCT",
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

返回示例:
```json
    {
        "code": 1,
        "message": "成功",
        "data": {
            "metaId": 61
        }
    }
```

仓储系统创建入库单元数据模型

请求示例:
```js
    POST http://storage:3000/api/v1/open/meta/create

    --H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

    -d '{
      "classifyCode": "assign",
      "metaHandle": "88.222.77/META_RUKUDAN",
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
              "referenceMetaHandle": "88.111.100/META_PRODUCT"
            }
        }
      ]
    }'
```

**3. 元数据发布**

应用可调用元数据发布接口对创建的元数据进行发布操作，发布后的元数据可以进行授权和注册标识操作。

请求示例:
```js
    PUT http://manufacture:3000/api/v1/open/meta/publish-or-withdraw

    -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

    -d ' {
        "metaHandleList": [
            "88.111.100/META_PRODUCT"
        ],
        "opType": "publish"
    }'
```
返回示例:
```json
    {
        "code": 10000,
        "message": "成功",
        "data": [
            {
                "metaHandle": "88.111.100/META_PRODUCT",
                "state": "success"
            }
        ]
    }
```

**4. 注册标识**

应用使用发布后的元数据进行标识注册

生产系统注册产品标识

请求示例:
```js
    POST http://manufacture:3000/api/v1/doip?targetId=88.111.100/PRODUCT_1&operationId=0.DOIP/Op.Create

    -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

    -d '{
      "type": "88.111.100/META_PRODUCT",
      "attributes": {
        "content": {
          "productBrand": "泰尔英福",
          "productName": "企业节点",
          "manufactureDate": "2024-06-22"
        }
      }
    }'
```
返回示例:
```json
    {
      "code": 10000,
      "message": "成功",
      "data": {
        "type": "88.111.100/META_PRODUCT",
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

仓储系统注册入库单标识

请求示例:
```js
    POST http://storage/api/v1/doip?targetId=88.222.77/RUKUDAN_1&operationId=0.DOIP/Op.Create

    -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

    -d '{
      "type": "88.222.77/META_RUKUDAN",
      "attributes": {
        "content": {
          "storagePerson": "admin",
          "storageDate": "2024-06-23",
          "storageProduct": ["88.111.100/PRODUCT_1","88.111.100/PRODUCT_2"]
        }
      }
    }'
```
返回示例:
```json
    {
      "code": 10000,
      "message": "成功",
      "data": {
        "type": "88.222.77/META_RUKUDAN",
        "attributes": {
          "content": {
            "storagePerson": "admin",
            "storageDate": "2024-06-23",
            "storageProduct": ["88.111.100/PRODUCT_1","88.111.100/PRODUCT_2"]
          }
        }
      }
    }
```

应用通过集成上述接口，能够实现一个高效闭环流程，涵盖身份验证、元数据管理、数据授权、标识符注册与解析等关键环节。此外，企业节点所提供的丰富API接口库，使得应用能够根据特定需求，轻松扩展功能，实现定制化服务。

##### 2.3.3.2 通过IDLink连接数据

IDLink实现数据接入时，提供数据查询、数据导入两种模式：

1. 数据查询模式指企业节点不存储数据，上层应用使用标识数据时，基于IDLink直接从数据库，或者API读取数据。

数据查询模式的操作步骤：

![image](./images/query-channel.png)

2. 数据导入模式指企业节点存储数据，上层应用使用标识数据时从企业节点中读取数据。

数据导入模式的操作步骤：

![image](./images/import-channel.png)

**说明：IDLink 数据导入模式，将在8月底提供。**

下面以对接生产厂商的产品信息和仓储系统的出库单为例，且相关数据均存储到企业节点，演示数据如何接入：

**说明：生产厂商的企业前缀为：88.111.100，物流企业的企业前缀为 88.222.77**

（1）在生产厂商的企业节点A（88.111.100）中配置产品的元数据模板

![image](./images/meta-detail.png)

（2） 在企业节点A中配置数据权限

![image](./images/auth-menu.png)

（3） 在企业节点A中创建数据连接任务

<span style="color: red;">系统截图</span>

（4） 在物流企业的企业节点C（88.222.77）中配置出库单的元数据模板

![image](./images/item-manage.png)

（5） 在企业节点C中配置数据权限

![image](./images/data-auth.png)

（6） 在企业节点C中创建数据连接任务

操作同上（3）中所述

（7） 数据成功接入后，生成入库单关联产品，单向的标识数据关系图

![image](./images/resolve.png)

#### 2.3.4 标识数据管理

企业节点对已接入的标识数据进行数据管理，包括企业数据目录管理、标识数据关联、标识数据发现与检索等，本章节对企业数据目录展示描述。

企业数据目录包括数据分类和分类下的清单，企业可将本企业的数据目录按需开放，供有使用诉求的企业或应用系统使用。

企业数据目录本企业内开放，同一企业下不同应用系统获取本企业数据目录，用到的API接口包括：

![image](./images/ent-api-xmind.png)

各应用系统可获取到本企业的数据分类及每个分类下公开的和有访问权限的企业元数据。当应用系统被授权访问企业元数据模板时，应用系统会收到授权通知。此时，应用系统调用元数据模板查询接口，可基于该元数据模板注册标识数据、搜索标识数据、统计分析标识数据、交换共享标识数据等。对于公开的元数据模板，应用系统可直接调用元数据模板查询接口，进行后续的相关操作。

**说明：基于元数据模板的标识数据搜索、统计等接口将陆续开放。**

<span style="color: red;">接口调用示例： @魏思晨</span>

**元数据模版授权**

应用可使用该接口对本企业内其他应用进行元数据模版查看授权

生产系统对应用身份 `88.111.100/APP_ID_OTHER`授权元数据查看权限

请求示例:
```js
    POST http://manufacture/api/v1/open/meta/grant/info

    -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

    -d '{
        "scope": 2,
        "metaHandle": "88.111.100/META_PRODUCT",
        "handleList": [
            "88.111.100/APP_ID_OTHER"
        ],
      "removeHandleUsers": [

    ]
    }'
```
返回示例:
```json
    {
        "code": 10000,
        "message": "成功"
    }
```

**元数据模版授权通知**

对企业内其他应用授权后，该应用身份可以接收到对应的授权通知

请求示例:
```js
    GET http://manufacture/api/v1/open/message/appMessage

    -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```
返回示例:
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
            "messageDetail": "XXXX公司已向您授权元数据：88.111.100/META_PRODUCT的查看权限。",
            "createdTime": "2024-06-22 17:01:42"
          }
        ]
      }
    }
```

**元数据模版查询**

接收到授权通知后，证明已被授权查看元数据，可使用以下接口查询元数据

请求示例:
```js
    GET http://manufacture/api/v1/open/meta/info?metaHandle=88.111.100/META_PRODUCT

    -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```
返回示例:
```json
    {
      "code": 1,
      "message": "成功",
      "data": {
          "classifyCode": "assign",
          "metaHandle": "88.111.100/META_PRODUCT",
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
    }
```

企业数据目录跨企业开放，其他企业获取本企业数据目录，用到的API接口包括：

![image](./images/ent-content-xmind.png)

其他企业可获取到本企业的数据分类及每个分类下公开的和有访问权限的企业元数据。当其他企业被授权访问企业元数据模板时，其他企业会收到授权通知。此时，其他企业的应用系统调用元数据模板解析接口，参照该元数据模板创建副本。该应用系统即可基于新创建的副本元数据模板注册标识数据、搜索标识数据、统计标识数据等。对于公开的元数据模板，其他企业的应用系统调用元数据模板解析接口，参照该元数据模板创建副本，进行后续的相关操作。

**说明：基于元数据模板的标识数据搜索、统计等接口将陆续开放。**

<span style="color: red;">接口调用示例： @魏思晨</span>

**元数据模版授权（跨企业）**

生产系统跨企业对仓储系统 `88.222.77/APP_ID仓储`应用身份授权，不能直接对应用身份授权，需要首先将 `88.222.77/APP_ID仓储`加入身份组 `88.222.77/APP_GROUP`，通过对身份组授权达到对应用身份授权目的。

请求示例:
```js
    POST http://manufacture/api/v1/open/meta/grant/info

    -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'

    -d '{
        "scope": 2,
        "metaHandle": "88.111.100/META_PRODUCT",
        "handleList": [
            "88.222.77/APP_GROUP"
        ],
      "removeHandleUsers": [

    ]
    }'
```
返回示例:
```json
    {
        "code": 10000,
        "message": "成功"
    }
```

**元数据模版解析**

对仓库系统应用身份 `88.222.77/APP_ID仓储`授权成功后，即可对目标元数据进行解析操作

请求示例
```js
    GET http://storage:3000/api/v1/doip?targetId=88.111.100/META_PRODUCT&operationId=0.DOIP/Op.Retrieve

    -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```
返回示例:
```json
    {
        "code": 1,
        "message": "成功",
        "data": {
            "id": "88.111.100/META_PRODUCT",
            "type": "0.TYPE/DO.DOIPMETA",
            "attributes": {
                "content": {
                    "basicInfo": {
                        "metaName": "产品元数据",
                        "metaCode": "product",
                        "industry": "科学研究和技术服务业/科技推广和应用服务业/技术推广服务/三维（3D)打印技术推广服务",
                        "industryCategory": "M",
                        "industrySpecific": "75",
                        "industryTrade": "751",
                        "industrySubclass": "7517",
                        "metaState": 1,
                        "metaContributor": "88.111.100",
                        "standard": "",
                        "metaDesc": "",
                        "isQuote": 0,
                        "publishedTime": "2024-06-22 11:12:26",
                        "effectiveTime": "2024-06-22 11:15:27",
                        "latestUpdateTime": "2024-06-228 11:19:26"
                    },
                    "itemInfos": [
                        {
                            "itemBasicInfo": {
                                "itemIndex": 2000,
                                "itemCode": "productBrand",
                                "enName": "productBrand",
                                "cnName": "产品品牌",
                                "state": 0
                            },
                            "itemSchemaInfo": {
                                "dataType": 1,
                                "dataTypeString": "字符型",
                                "minLength": 0,
                                "maxLength": 4000
                            }
                        },
                        {
                            "itemBasicInfo": {
                                "itemIndex": 2001,
                                "itemCode": "productName",
                                "enName": "productName",
                                "cnName": "产品名称",
                                "state": 0
                            },
                            "itemSchemaInfo": {
                                "dataType": 1,
                                "dataTypeString": "字符型",
                                "minLength": 0,
                                "maxLength": 4000
                            }
                        },
                        {
                              "itemBasicInfo": {
                                  "itemIndex": 2002,
                                  "itemCode": "manufactureDate",
                                  "enName": "manufactureDate",
                                  "cnName": "生产日期",
                                  "state": 0
                              },
                              "itemSchemaInfo": {
                                  "dataType": 3,
                                  "dataTypeString": "字符型",
                                  "dateFormat": "YYYY-MM-DD HH:mm:ss"
                              }
                          }
                    ],
                    "required": [],
                    "uniqueness": [],
                    "inputItem": [
                        "productName",
                        "productBrand",
                        "manufactureDate"
                    ],
                    "listItem": []
                },
                "metaData": {
                    "createTime": "2024-06-22 11:11:27",
                    "updateTime": "2024-06-22 11:11:27",
                    "creator": "88.111.100/APP_ID生产"
                }
            }
        }
    }
    ```json

**创建元数据副本**

可以解析元数据后，若需要在本系统使用该元数据进行标识注册操作，需要首先依赖该元数据创建元数据副本

请求示例:
```js
    POST /api/v1/open/meta/baseon-create
  
    -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
  
    -d '{
      "baseonHandle": "88.111.100/META_PRODUCT",
      "baseInfo": {
        "metaHandle": "88.222.77/META_PRODUCT_COPY",
        "metaCode": "PRODUCT_COPY",
        "classifyCode": "ASSIGN"
      }
    }'
```
返回示例:
```json
    {
        "code": 10000,
        "message": "成功"
    }
```

#### 2.3.5 标识应用开发

应用开发者完成数据接入企业节点后，可通过SDK或API接口，继续完成标识应用的开发测试。

以构建追溯应用为例：

1. 应用开发者在沙盒中生成追溯应用的应用身份ID追溯。

2. 构建双向的标识数据关联。在2.2.3中仓储企业节点（88.222.77）已完成“出库单--->产品”的单向关联关系，还需在生产企业节点（88.111.100）中实现“产品--->出库单”的关联关系。从而最终实现不同企业间“产品<--->出库单” 双向的关联关系。

3. 应用开发者基于标识关系图，开发追溯应用，开发步骤为：

   用到的API接口包括：

![image](./images/app-dev-xmind.png)

<span style="color:red;">①接口调用示例@李龙</span>

**生产系统解析产品标识**

请求示例:
```js
    GET http://manufacture:3000/api/v1/doip?targetId=88.111.100/PRODUCT_1&operationId=0.DOIP/Op.Retrieve

    -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```
返回示例:
```json
    {
        "code": 1,
        "message": "成功",
        "data": {
            "id": "88.111.100/PRODUCT_1",
            "type": "88.111.100/META_PRODUCT",
            "attributes": {
                "attributes": {
                    "metaData": {
                        "createTime": "2024-06-22 14:13:24",
                        "updateTime": "2024-06-22 14:13:37",
                        "creator": "88.111.100/APP_ID生产",
                        "updater": "88.111.100/APP_ID生产"
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
                        "index": 2002,
                        "type": "manufactureDate",
                        "name": "生产日期",
                        "data": "2024-06-22",
                        "dataType": 3
                    }
                ]
            }
        }
    }
```

**仓储系统解析产品标识**

请求示例:
```js
    GET http://storage:3000/api/v1/doip?targetId=88.222.77/RUKUDAN_1&operationId=0.DOIP/Op.Retrieve

    -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4OC42MDguODg4OS9BcHBfY2VzaGkiLCJpYXQiOjE3MTU5MjYzMDgsImp0aSI6ImJkYWI4MjkxLWNkYjUtNDA4MS04MzgwLTQzNGQ2NGU5MDQwZCJ9.rnCQYLclQspOR5WOnu4Ssg5gH11zFLNyRMhxlB55by8'
```
返回示例:
```json
    {
        "code": 1,
        "message": "成功",
        "data": {
            "id": "88.222.77/RUKUDAN_1",
            "type": "88.222.77/META_RUKUDAN",
            "attributes": {
                "attributes": {
                    "metaData": {
                        "createTime": "2024-06-22 14:13:24",
                        "updateTime": "2024-06-22 14:13:37",
                        "creator": "88.222.77/APP_ID仓储",
                        "updater": "88.222.77/APP_ID仓储"
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
                            "88.111.100/PRODUCT_1"
                        ],
                        "dataType": 5
                    }
                ]
            }
        }
    }
```

<span style="color:red;">② 追溯大屏开发示例 @贺小火 </span>

## 3. 标识应用交付

企业购买标识应用后，卖方企业需将应用交付给买方企业，并完成与买方企业节点的对接。卖方企业在沙盒环境中完成的应用集成配置信息等可导出后导入到买方的企业节点中。

若通过IDLink连接数据时，则导出的应用配置信息包括：企业元数据、数据权限、数据连接通道等，导入到买方企业节点时，需配置买方企业节点的企业前缀。

若通过API接口或SDK连接数据时，则导出的应用配置信息包括：企业元数据、数据权限等，导入到买方企业节点时，需配置买方企业节点的企业前缀。

同时，需将应用调用企业节点的地址，更新为买方企业节点的接口地址。

由此，买方企业使用标识应用，无需关注标识注册、标识解析等逻辑。买方企业的管理员可登录企业节点，查看应用运营统计情况，管理应用配置信息等。标识应用使用过程中遇到的问题，均可咨询卖方企业，由卖方企业提供持续的技术支持和服务。

## 4. 存量标识应用与企业节点标准版兼容

当企业节点升级为标准版2.0后，应用开发者通过对接二级节点的SNMS API接口或IDHub社区版API接口开发的标识应用，可通过适配企业节点标准版的兼容接口，无缝对接企业节点标准版2.0。存量历史数据，后续将会提供数据迁移工具及服务，迁移到新版企业节点中。不影响原标识应用的正常运行和使用。

企业节点标准版的兼容接口地址为：

[http://id-pointer-sdk.pre.idx.space/docs/idhub/snms/api-introduce](http://id-pointer-sdk.pre.idx.space/docs/idhub/snms/api-introduce) <span style="color: red">（需更新）</span>

若原标识应用需使用企业节点标准版2.0 的新服务能力，则需调用新版接口，进行适配开发。企业节点标准版的接口地址为：

[http://id-pointer-sdk.pre.idx.space/docs/idhub/standard/api-introduce](http://id-pointer-sdk.pre.idx.space/docs/idhub/standard/api-introduce)  <span style="color: red">（需更新）</span>
