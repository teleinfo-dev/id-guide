# 企业相关接口

## 企业注册

### 请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：POST
- 请求路径：`/snms/api/v3/ent/apply`
- Header：

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |

- Body：

| **参数**                                                             | **类型** | **是否必填** | **最大长度** | **备注**                                                                                                                                                                          | **示例值**                                                                                                        |
| -------------------------------------------------------------------- | -------- | ------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| sysUser                                                              | Object   | 必填         | -            | 用户信息                                                                                                                                                                          | -                                                                                                                 |
| sysUser.email                                                        | String   | 必填         | 50           | 邮箱                                                                                                                                                                              | [teleinfo@admin.com]                                                                                              |
| sysUser.mobile                                                       | String   | 必填         | 50           | 手机号                                                                                                                                                                            | 13165157233                                                                                                       |
| sysUser.password                                                     | String   | 必填         | 64           | 密码                                                                                                                                                                              | 8d969eef6e                                                                                                        |
| sysUser.remarks                                                      | String   | 非必填       | -            | 备注                                                                                                                                                                              | -                                                                                                                 |
| sysUser.userName                                                     | String   | 必填         | 50           | 用户名                                                                                                                                                                            | teleinfo                                                                                                          |
| entBasicInfo                                                         | Object   | 必填         | -            | 企业资质信息                                                                                                                                                                      | -                                                                                                                 |
| entBasicInfo.orgName                                                 | String   | 必填         | 255          | 单位名称                                                                                                                                                                          | 北京泰尔英福网络科技有限责任公司                                                                                  |
| entBasicInfo.orgNature                                               | String   | 必填         | 1            | 单位性质[枚举值: 1 国有控股 2 民营控股 3 外商控股 4 事业单位 5 民营非盈利组织]                                                                                                    | 1                                                                                                                 |
| entBasicInfo.orgAddr                                                 | String   | 必填         | 255          | 单位地址-详细地址                                                                                                                                                                 | 苏家坨中关村科技园翠湖云中心 21 号楼                                                                              |
| entBasicInfo.orgAddrProvince                                         | String   | 必填         | 8            | 单位地址-省                                                                                                                                                                       | 110000                                                                                                            |
| entBasicInfo.orgAddrCity                                             | String   | 必填         | 8            | 单位地址-市                                                                                                                                                                       | 110100                                                                                                            |
| entBasicInfo.orgAddrCounty                                           | String   | 非必填       | 8            | 单位地址-区                                                                                                                                                                       | 110108                                                                                                            |
| entBasicInfo.orgCrtType                                              | String   | 必填         | 1            | 单位证件类型[枚举值: 1 统一社会信用代码 2 其他]                                                                                                                                   | 1                                                                                                                 |
| entBasicInfo.orgCrtCode                                              | String   | 必填         | 32           | 单位证件号                                                                                                                                                                        | 91110108589104047H                                                                                                |
| entBasicInfo.orgCrtImgRid                                            | Long     | 必填         | 20           | 营业执照                                                                                                                                                                          | 7                                                                                                                 |
| entBasicInfo.orgDesc                                                 | String   | 非必填       | 1024         | 单位简介                                                                                                                                                                          | Teleinfo（北京泰尔英福网络科技有限责任公司）是中国信息通信研究院（CAICT）的全资子公司和互联网关键技术成果转化平台 |
| entBasicInfo.industryCategory                                        | String   | 必填         | 8            | 行业门类                                                                                                                                                                          | I                                                                                                                 |
| entBasicInfo.industrySpecific                                        | String   | 必填         | 8            | 行业大类                                                                                                                                                                          | 65                                                                                                                |
| entBasicInfo.website                                                 | String   | 非必填       | 255          | 官方网站                                                                                                                                                                          | [www.teleinfo.cn]                                                                                                 |
| entBasicInfo.regAuthority                                            | String   | 非必填       | 255          | 注册机关                                                                                                                                                                          |                                                                                                                   |
| entBasicInfo.regCapital                                              | Long     | 非必填       | 20           | 注册资本                                                                                                                                                                          | 1200                                                                                                              |
| entBasicInfo.establishDate                                           | Date     | 非必填       | -            | 成立日期                                                                                                                                                                          | 2012-01-06                                                                                                        |
| entBasicInfo.periodValidity                                          | Date     | 非必填       | -            | 有效期                                                                                                                                                                            | 2032-01-05                                                                                                        |
| entBasicInfo.contactName                                             | String   | 必填         | 128          | 联系人名称                                                                                                                                                                        | 张三                                                                                                              |
| entBasicInfo.contactCrtType                                          | Integer  | 必填         | 1            | 联系人证件类型[枚举值: 1 中国居民身份证 2 护照 3 其他]                                                                                                                            | 1                                                                                                                 |
| entBasicInfo.contactCrtNo                                            | String   | 必填         | 32           | 联系人证件号                                                                                                                                                                      | 412724197805022136                                                                                                |
| entBasicInfo.contactCrtBackImgRid                                    | Long     | 非必填       | 20           | 联系人证件反面照片                                                                                                                                                                | 8                                                                                                                 |
| entBasicInfo.contactCrtFrontImgRid                                   | Long     | 非必填       | 20           | 联系人证件正面照片                                                                                                                                                                | 9                                                                                                                 |
| entBasicInfo.contactEmail                                            | String   | 必填         | 128          | 联系人邮箱                                                                                                                                                                        | [zhangsan@admin.com]                                                                                              |
| entBasicInfo.contactPhone                                            | String   | 必填         | 16           | 联系人手机                                                                                                                                                                        | 13965757203                                                                                                       |
| entBasicInfo.legalName                                               | String   | 必填         | 128          | 法定代表人姓名                                                                                                                                                                    | 王五                                                                                                              |
| entBasicInfo.legalCrtType                                            | String   | 必填         | 1            | 法定代表人证件类型                                                                                                                                                                | 1                                                                                                                 |
| entBasicInfo.legalCrtNo                                              | String   | 必填         | 32           | 法定代表人证件号                                                                                                                                                                  | 412724197805022136                                                                                                |
| entBasicInfo.legalCrtBackImgRid                                      | Long     | 必填         | 20           | 法定代表人证件照片反面                                                                                                                                                            | 10                                                                                                                |
| entBasicInfo.legalCrtFrontImgRid                                     | Long     | 必填         | 20           | 法定代表人证件正面照片                                                                                                                                                            | 11                                                                                                                |
| entBasicInfo.legalEmail                                              | String   | 非必填       | 128          | 法定代表人邮箱                                                                                                                                                                    | [wangwu@admin.com]                                                                                                |
| entBasicInfo.legalFax                                                | String   | 非必填       | 255          | 法定代表人传真                                                                                                                                                                    |                                                                                                                   |
| entBasicInfo.legalPhone                                              | String   | 非必填       | 16           | 法定代表人手机号                                                                                                                                                                  | 13965757203                                                                                                       |
| entBasicInfo.entPrefix                                               | String   | 必填         | 64           | 企业前缀                                                                                                                                                                          | 88.800.123123112                                                                                                  |
| entRegisterManageInfo                                                | Object   | 必填         | -            | 企业标识注册管理系统信息                                                                                                                                                          | -                                                                                                                 |
| entRegisterManageInfo.entInfoSyses                                   | List     | 必填         | -            | 企业系统部署信息（可以添加多组）                                                                                                                                                  | -                                                                                                                 |
| entRegisterManageInfo.entInfoSyses.sysType                           | Integer  | 必填         | 1            | 系统部署类型： 1 标识注册系统 2 标识注册数据 3 注册数据备份 4 解析服务器 5 标识服务系统备份。（标识注册系统、标识注册数据、注册数据备份、解析服务器必填，标识服务系统备份非必填） | 1                                                                                                                 |
| entRegisterManageInfo.entInfoSyses.deployMode                        | Integer  | 必填         | 1            | 部署方式： 1 本地化部署 2 云部署;注意不同部署方式字段校验规则不同                                                                                                                 | 1                                                                                                                 |
| entRegisterManageInfo.entInfoSyses.deployAddrProvince                | String   | 非必填       | 8            | 部署省；如果选择本地化部署，则该字段必填。                                                                                                                                        | 110000                                                                                                            |
| entRegisterManageInfo.entInfoSyses.deployAddrCity                    | String   | 非必填       | 8            | 部署市;如果选择本地化部署，则该字段必填                                                                                                                                           | 110100                                                                                                            |
| entRegisterManageInfo.entInfoSyses.deployAddrCounty                  | String   | 非必填       | 8            | 部署区;如果选择本地化部署，则该字段必填                                                                                                                                           | 110108                                                                                                            |
| entRegisterManageInfo.entInfoSyses.deployAddr                        | String   | 非必填       | 255          | 部署地址 如果选择本地化部署，则该字段必填                                                                                                                                         | 苏家坨中关村科技园翠湖云中心 21 号楼                                                                              |
| entRegisterManageInfo.entInfoSyses.ipPort                            | String   | 非必填       | 255          | 部署 IP 及端口（只有注册系统才有这个字段 非必填) 格式为[x.x.x.x]:xxx 或[xxxx:xxxx:xxxx::: …]:xxx，多个之间用英文分号分隔                                                          | [127.0.0.1]:8080                                                                                                  |
| entRegisterManageInfo.entInfoSyses.name                              | String   | 非必填       | 255          | 云服务商名字;如果选择云部署，则该字段必填                                                                                                                                         | 阿里云                                                                                                            |
| entRegisterManageInfo.servSysBuildType                               | Integer  | 必填         | 1            | 服务系统建设，建设类型[枚举值: 1 自营 2 委托]                                                                                                                                     | 1                                                                                                                 |
| entRegisterManageInfo.servSysBuildName                               | String   | 非必填       | 255          | 服务系统建设委托机构名称                                                                                                                                                          | 阿里云                                                                                                            |
| entRegisterManageInfo.servSysBuildContractFileRid                    | Long     | 非必填       | 20           | 服务系统建设合同                                                                                                                                                                  | -                                                                                                                 |
| entRegisterManageInfo.servSysOperType                                | Integer  | 必填         | 1            | 服务系统运营类型[枚举值: 1 自营 2 委托]                                                                                                                                           | 1                                                                                                                 |
| entRegisterManageInfo.servSysOperName                                | String   | 非必填       | 255          | 服务系统运营委托机构名称                                                                                                                                                          | 阿里云                                                                                                            |
| entRegisterManageInfo.servSysOperContractFileRid                     | Long     | 非必填       | 20           | 服务系统运营合同                                                                                                                                                                  | -                                                                                                                 |
| entHostingAndIdentifyServeInfo                                       | Object   | 非必填       | -            | 企业灾备与标识服务信息;若填写该对象信息，字段校验遵循以下规则                                                                                                                     | -                                                                                                                 |
| entHostingAndIdentifyServeInfo.extWebName                            | String   | 非必填       | 255          | 对外提供标识服务的网站名称                                                                                                                                                        | 阿里云                                                                                                            |
| entHostingAndIdentifyServeInfo.extDomain                             | String   | 非必填       | 255          | 对外提供标识服务的网站域名                                                                                                                                                        | www.123.cn                                                                                                        |
| entHostingAndIdentifyServeInfo.extIpAddr                             | String   | 非必填       | 255          | 对外提供标识服务的网站 IP 地址；支持 IPv4 和 IPv6，多个 IP 间以英文分号分隔                                                                                                       | 1.1.1.1                                                                                                           |
| entHostingAndIdentifyServeInfo.dataHostingOrg                        | String   | 非必填       | 255          | 数据托管单位                                                                                                                                                                      | 阿里云                                                                                                            |
| entHostingAndIdentifyServeInfo.dataHostingContractFileRid            | Long     | 非必填       | 20           | 数据托管合同                                                                                                                                                                      | -                                                                                                                 |
| entHostingAndIdentifyServeInfo.servHostingOrg                        | String   | 非必填       | 255          | 服务托管单位                                                                                                                                                                      | 阿里云                                                                                                            |
| entHostingAndIdentifyServeInfo.servHostingContractFileRid            | Long     | 非必填       | 20           | 服务托管合同                                                                                                                                                                      | -                                                                                                                 |
| entHostingAndIdentifyServeInfo.entInfoSerIndustries                  | List     | 非必填       | -            | 服务行业（可以添加多组）；若填写该对象信息，字段校验遵循以下规则                                                                                                                  | -                                                                                                                 |
| entHostingAndIdentifyServeInfo.entInfoSerIndustries.industryCategory | String   | 必填         | 8            | 服务行业门类                                                                                                                                                                      | A                                                                                                                 |
| entHostingAndIdentifyServeInfo.entInfoSerIndustries.industrySpecific | String   | 必填         | 8            | 服务行业大类                                                                                                                                                                      | 01                                                                                                                |
| entHostingAndIdentifyServeInfo.entInfoSerIndustries.industryTrade    | String   | 必填         | 8            | 服务行业中类                                                                                                                                                                      | 011                                                                                                               |
| entHostingAndIdentifyServeInfo.entInfoSerIndustries.industrySubclass | String   | 必填         | 8            | 服务行业小类                                                                                                                                                                      | 0111                                                                                                              |
| entHostingAndIdentifyServeInfo.entInfoLicenses                       | List     | 非必填       | -            | 互联网域名或增值电信业务经营相关许可证（可以添加多组）；若填写该对象信息，字段校验遵循以下规则                                                                                    | -                                                                                                                 |
| entHostingAndIdentifyServeInfo.entInfoLicenses.licenceNo             | String   | 必填         | 255          | 互联网域名或增值电信业务经营相关许可证号                                                                                                                                          | 13213                                                                                                             |
| entHostingAndIdentifyServeInfo.entInfoLicenses.licenceType           | Integer  | 必填         | 20           | 互联网域名或增值电信业务经营相关许可[枚举值: 1.域名根服务器运行机构许可证 2.域名注册管理机构许可证 3.域名注册服务机构许可证 4.增值电信业务经营许可证]                             | 1                                                                                                                 |

### 请求示例

```json
{
  "sysUser": {
    "userName": "teleinfo",
    "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
    "email": "teleinfo@admin.com",
    "mobile": "13165157233",
    "remarks": ""
  },
  "entBasicInfo": {
    "orgName": "北京泰尔英福网络科技有限责任公司",
    "orgNature": 1,
    "orgAddr": "苏家坨中关村科技园翠湖云中心21号楼",
    "orgAddrProvince": "110000",
    "orgAddrCity": "110100",
    "orgAddrCounty": "110108",
    "orgCrtType": 1,
    "orgCrtCode": "91110108589104047H",
    "orgCrtImgRid": 7,
    "orgDesc": "Teleinfo（北京泰尔英福网络科技有限责任公司）是中国信息通信研究院（CAICT）的全资子公司和互联网关键技术成果转化平台，成立于2012年。 Teleinfo作为领先的互联网关键服务提供商，提供基于域名的网络数据与安全应用服务，帮助个人和企业轻松建立稳定、高效的在线体验。",
    "industryCategory": "I",
    "industrySpecific": "65",
    "website": "www.teleinfo.cn",
    "regAuthority": "",
    "regCapital": 1200,
    "establishDate": "2012-01-06",
    "periodValidity": "2032-01-05",
    "contactName": "张三",
    "contactCrtType": 1,
    "contactCrtNo": "412724197805022136",
    "contactCrtBackImgRid": 8,
    "contactCrtFrontImgRid": 9,
    "contactEmail": "zhangsan@admin.com",
    "contactPhone": "13965757203",
    "legalName": "王五",
    "legalCrtType": 1,
    "legalCrtNo": "412724197805022136",
    "legalCrtBackImgRid": 10,
    "legalCrtFrontImgRid": 11,
    "legalEmail": "wangwu@admin.com",
    "legalFax": "",
    "legalPhone": "13965757203",
    "entPrefix": "88.800.123123112"
  },
  "entRegisterManageInfo": {
    "entInfoSyses": [
      {
        "sysType": 1,
        "deployMode": 1,
        "deployAddrProvince": "110000",
        "deployAddrCity": "110100",
        "deployAddrCounty": "110108",
        "deployAddr": "苏家坨中关村科技园翠湖云中心21号楼",
        "ipPort": "[127.0.0.1]:8080"
      },
      {
        "sysType": 2,
        "deployMode": 2,
        "name": "阿里云"
      },
      {
        "sysType": 3,
        "deployMode": 1,
        "deployAddrProvince": "110000",
        "deployAddrCity": "110100",
        "deployAddrCounty": "110108",
        "deployAddr": "苏家坨中关村科技园翠湖云中心21号楼"
      },
      {
        "sysType": 4,
        "deployMode": 1,
        "deployAddrProvince": "110000",
        "deployAddrCity": "110100",
        "deployAddrCounty": "110108",
        "deployAddr": "苏家坨中关村科技园翠湖云中心21号楼"
      },
      {
        "sysType": 5,
        "deployMode": 1,
        "deployAddrProvince": "110000",
        "deployAddrCity": "110100",
        "deployAddrCounty": "110108",
        "deployAddr": "苏家坨中关村科技园翠湖云中心21号楼"
      }
    ],
    "servSysBuildType": 1,
    "servSysOperType": 1
  },
  "entHostingAndIdentifyServeInfo": {
    "dataHostingOrg": "泰尔英福数据托管单位",
    "servHostingOrg": "泰尔英福服务托管单位",
    "entInfoSerIndustries": [
      {
        "industryCategory": "I",
        "industrySpecific": "65",
        "industryTrade": "651",
        "industrySubclass": "6513"
      }
    ],
    "extWebName": "泰尔英福二级节点标识业务管理系统",
    "extDomain": "snms.teleinfo.cn",
    "extIpAddr": "127.0.0.1",
    "entInfoLicenses": [
      {
        "licenceType": 1,
        "licenceNo": "412341234123453453"
      }
    ]
  }
}
```

### 响应参数

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

### 异常示例

```json
{
  "message": "系统繁忙",
  "status": -1,
  "data": null
}
```

### 注意事项

> 1. `sysUser.password`为 sha256 加密后的密码
> 2. `sysUser.userName`、`sysUser.mobile`、`sysUser. email`唯一
> 3. `entBasicInfo.orgCrtType`、`entBasicInfo.orgCrtCode` 联合唯一
> 4. 文件 rid 字段值来源于文件上传接口返回的文件 id，文件 id 只能被用户关联一次，关联后不能再次被其他用户关联
> 5. 服务行业和省市区，需要符合国家标准对应关系，细节请查看附件字典
> 6. 只有管理员角色能调用该接口（例：admin 用户）
> 7. 请注意字段填写规则，见字段是否必填和备注

---

## 文件上传

### 请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：POST
- 请求路径： `/snms/api/file/upload`
- Header：

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |

- Body：

| **参数** | **类型** | **是否必填** | **最大长度** | **备注** | **示例** |
| -------- | -------- | ------------ | ------------ | -------- | -------- |
| file     | file     | 必填         | -            | 文件     | -        |

### 请求示例

![img.png](../images/file-upload.png)

### 响应参数

- 公共响应参数

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**               | **示例值** |
| -------- | -------- | ------------ | ------------ | ---------------------- | ---------- |
| status   | Integer  | -            | -            | 状态码(详见状态码说明) | 1          |
| message  | String   | -            | -            | 状态码描述             | success    |

- 响应参数

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**     | **示例值**                               |
| -------- | -------- | ------------ | ------------ | ------------ | ---------------------------------------- |
| id       | Long     | -            | -            | 编号         | 834                                      |
| path     | String   | -            | -            | 文件虚拟路径 | c9f001c0-f82e-4430-a867-360a3e6d6b1e.jpg |

### 响应示例

```json
{
  "message": "success",
  "status": 1,
  "data": {
    "id": 834,
    "path": "c9f001c0-f82e-4430-a867-360a3e6d6b1e.jpg"
  }
}
```

### 异常示例

```json
{
  "message": "系统繁忙",
  "status": -1,
  "data": null
}
```

### 注意事项

> 1.  只有管理员角色能调用该接口（例：admin 用户）
> 2.  图片大小限制在 1M 以内，PDF 文件限制 5M 以内

---

## 企业列表

### 请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：GET
- 请求路径： `/snms/api/v3/ent/page`
- Header：

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |

- Parma：

| **参数**    | **类型** | **是否必填** | **最大长度** | **备注** | **示例**            |
| ----------- | -------- | ------------ | ------------ | -------- | ------------------- |
| orgName     | String   | 非必填       | -            | 单位名称 | test                |
| startDate   | Date     | 非必填       | -            | 开始时间 | 2022-01-01 00:00:00 |
| endDate     | Date     | 非必填       | -            | 结束时间 | 2022-01-02 00:00:00 |
| currentPage | Integer  | 非必填       | -            | 当前页数 | 1                   |
| pageSize    | Integer  | 非必填       | -            | 页面大小 | 10                  |

### 请求示例

> `/snms/api/v3/ent/page?orgName=1&startDate=&endDate=&currentPage=&pageSize=`

### 响应参数

- 公共响应参数

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**               | **示例值** |
| -------- | -------- | ------------ | ------------ | ---------------------- | ---------- |
| status   | Integer  | -            | -            | 状态码(详见状态码说明) | 1          |
| message  | String   | -            | -            | 状态码描述             | success    |

- 响应参数

| **参数**                  | **类型**      | **最大长度** | **备注**                                                                   | **示例值**                               |
| ------------------------- | ------------- | ------------ | -------------------------------------------------------------------------- | ---------------------------------------- |
| data.first                | Boolean       | -            | 编号                                                                       | 834                                      |
| data.last                 | Boolean       | -            | 文件虚拟路径                                                               | c9f001c0-f82e-4430-a867-360a3e6d6b1e.jpg |
| data.totalPages           | Integer       | -            | -                                                                          | -                                        |
| data.totalElements        | Long          | -            | -                                                                          | -                                        |
| data.number               | Integer       | -            | -                                                                          | -                                        |
| data.size                 | Integer       | -            | -                                                                          | -                                        |
| data.sort                 | Sort          | -            | -                                                                          | -                                        |
| data.numberOfElements     | Integer       | -            | -                                                                          | -                                        |
| data.content              | List          | -            | -                                                                          | -                                        |
| data.content.id           | Long          | -            | Id                                                                         | 1                                        |
| data.content.createDate   | LocalDateTime | -            | 创建时间                                                                   | 2021-12-28 13:47:29                      |
| data.content.updateDate   | LocalDateTime | -            | 更新时间                                                                   | 2021-12-28 13:47:29                      |
| data.content.orgName      | String        | -            | 单位名称                                                                   | 单位名                                   |
| data.content.orgNature    | String        | -            | 单位性质，国有控股、民营控股、外商控股、事业单位、民营非盈利，对应取值 1-5 | 1                                        |
| data.content.orgCrtType   | String        | -            | 单位证件类型，统一社会信用代码、其他，对应取值 1-2                         |                                          |
| data.content.orgCrtCode   | String        | -            | 单位证件号                                                                 | 1123123                                  |
| data.content.orgDesc      | String        | -            | 单位简介                                                                   | 单位                                     |
| data.content.website      | String        | -            | 官方网站                                                                   | www.123.cn                               |
| data.content.entGeneralId | String        | -            | 企业通用 ID                                                                | 5234234                                  |
| data.content.openIds      | List          | -            | open id 列表                                                               | 3463453                                  |

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
        "orgName": "单位名称",
        "orgNature": "5",
        "orgCrtType": "1",
        "orgCrtCode": "单位证件号",
        "orgDesc": "单位简介",
        "website": "www.guanwang.com",
        "entGeneralId": "2730850300000001",
        "openIds": ["125575687458"],
        "createDate": "2021-12-28 13:47:29",
        "updateDate": "2021-12-29 13:47:29"
      },
      {
        "id": 15,
        "orgName": "1",
        "orgNature": "1",
        "orgCrtType": "2",
        "orgCrtCode": "2",
        "orgDesc": null,
        "website": null,
        "entGeneralId": "2728962500000001",
        "openIds": ["36458786"],
        "createDate": "2021-11-20 11:08:57",
        "updateDate": "2021-12-03 17:48:52"
      },
      {
        "id": 14,
        "orgName": "北京公司",
        "orgNature": "1",
        "orgCrtType": "1",
        "orgCrtCode": "12343324534523",
        "orgDesc": null,
        "website": null,
        "entGeneralId": "2724674500000001",
        "openIds": ["2345658768"],
        "createDate": "2021-10-21 16:28:44",
        "updateDate": "2021-10-21 16:28:44"
      },
      {
        "id": 13,
        "orgName": "1031-test",
        "orgNature": "2",
        "orgCrtType": "2",
        "orgCrtCode": "23126",
        "orgDesc": null,
        "website": null,
        "entGeneralId": "2724208600000001",
        "openIds": ["34585768"],
        "createDate": "2021-10-18 10:49:46",
        "updateDate": "2021-10-18 10:49:46"
      },
      {
        "id": 12,
        "orgName": "北京公司",
        "orgNature": "1",
        "orgCrtType": "1",
        "orgCrtCode": "12324235452345234",
        "orgDesc": null,
        "website": null,
        "entGeneralId": "2723798000000001",
        "openIds": ["132423524"],
        "createDate": "2021-10-15 14:24:37",
        "updateDate": "2021-10-15 14:24:37"
      },
      {
        "id": 11,
        "orgName": "lthtest",
        "orgNature": "1",
        "orgCrtType": "1",
        "orgCrtCode": "122345676113",
        "orgDesc": null,
        "website": null,
        "entGeneralId": "2723667900000001",
        "openIds": ["134213434"],
        "createDate": "2021-10-14 16:42:48",
        "updateDate": "2021-10-14 16:42:48"
      },
      {
        "id": 10,
        "orgName": "1030-test-勿动",
        "orgNature": "1",
        "orgCrtType": "2",
        "orgCrtCode": "1122",
        "orgDesc": null,
        "website": null,
        "entGeneralId": "2723666400000001",
        "openIds": ["767546"],
        "createDate": "2021-10-14 16:28:34",
        "updateDate": "2021-10-14 16:28:34"
      },
      {
        "id": 9,
        "orgName": "test1013",
        "orgNature": "2",
        "orgCrtType": "2",
        "orgCrtCode": "666666",
        "orgDesc": null,
        "website": null,
        "entGeneralId": "2723536000000001",
        "openIds": ["3242"],
        "createDate": "2021-10-13 18:43:42",
        "updateDate": "2021-10-13 18:43:42"
      },
      {
        "id": 7,
        "orgName": "lthtest1",
        "orgNature": "1",
        "orgCrtType": "1",
        "orgCrtCode": "7894561234",
        "orgDesc": null,
        "website": null,
        "entGeneralId": "2723514100000001",
        "openIds": ["12312323123"],
        "createDate": "2021-10-13 15:04:37",
        "updateDate": "2021-10-13 15:04:37"
      },
      {
        "id": 5,
        "orgName": "teleinfo1",
        "orgNature": "1",
        "orgCrtType": "1",
        "orgCrtCode": "34563456345764356",
        "orgDesc": null,
        "website": null,
        "openIds": ["123123123"],
        "entGeneralId": "2723244700000001",
        "createDate": "2021-10-11 18:10:34",
        "updateDate": "2021-10-11 18:10:34"
      }
    ]
  }
}
```

### 异常示例

```json
{
  "message": "系统繁忙",
  "status": -1,
  "data": null
}
```

### 注意事项

> 只有管理员角色能调用该接口（例：admin 用户）

---

## 企业详情

### 请求参数

- 请求服务：业务系统 SNMS 服务器的 HTTP 端口（默认 8000）
- 请求方式：GET
- 请求路径：`/snms/api/v3/ent/detail`
- Header：

| **参数**      | **类型** | **是否必填** | **最大长度** | **备注**                            | **示例值**       |
| ------------- | -------- | ------------ | ------------ | ----------------------------------- | ---------------- |
| Authorization | String   | 是           | -            | Bearer + 空格 + token(身份接口获取) | admin            |
| Content-Type  | String   | 是           | -            | application/json                    | application/json |

- Param：

| **参数** | **类型** | **是否必填** | **最大长度** | **备注** | **示例** |
| -------- | -------- | ------------ | ------------ | -------- | -------- |
| id       | Long     | 非必填       | -            | 企业 ID  | 123      |

### 请求示例

> `/snms/api/v3/ent/detail?id=`

### 响应参数

- 公共响应参数

| **参数** | **类型** | **是否必填** | **最大长度** | **备注**               | **示例值** |
| -------- | -------- | ------------ | ------------ | ---------------------- | ---------- |
| status   | Integer  | 是           | -            | 状态码(详见状态码说明) | 1          |
| message  | String   | 是           | -            | 状态码描述             | success    |

- 响应参数

| **参数**                                                                   | **类型** | **最大长度** | **备注**                                                                                                                                      | **示例值**                   |
| -------------------------------------------------------------------------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| data.entBasicInfo                                                          | Object   | -            | 企业资质信息                                                                                                                                  | -                            |
| data.entBasicInfo.orgName                                                  | String   | -            | 单位名称                                                                                                                                      | 单位名                       |
| data.entBasicInfo.orgNature                                                | String   | -            | 单位性质[枚举值: 1 国有控股 2 民营控股 3 外商控股 4 事业单位 5 民营非盈利组织]                                                                | 1                            |
| data.entBasicInfo.orgCrtType                                               | String   | -            | 单位证件类型[枚举值: 1 统一社会信用代码 2 其他]                                                                                               | 1                            |
| data.entBasicInfo.orgCrtCode                                               | String   | -            | 单位证件号                                                                                                                                    | 12412312                     |
| data.entBasicInfo.orgCrtImgRid                                             | Long     | -            | 营业执照                                                                                                                                      | 1                            |
| data.entBasicInfo.industryCategory                                         | String   | -            | 行业门类                                                                                                                                      | A                            |
| data.entBasicInfo.industrySpecific                                         | String   | -            | 行业大类                                                                                                                                      | 01                           |
| data.entBasicInfo.orgAddrProvince                                          | String   | -            | 单位地址-省                                                                                                                                   | 110000                       |
| data.entBasicInfo.orgAddrCity                                              | String   | -            | 单位地址-市                                                                                                                                   | 110100                       |
| data.entBasicInfo.orgAddrCounty                                            | String   | -            | 单位地址-区                                                                                                                                   | 110101                       |
| data.entBasicInfo.orgAddr                                                  | String   | -            | 单位地址-详细地址                                                                                                                             | 123123                       |
| data.entBasicInfo.website                                                  | String   | -            | 官方网站                                                                                                                                      | www.123.cn                   |
| data.entBasicInfo.orgDesc                                                  | String   | -            | 单位简介                                                                                                                                      | 简介                         |
| data.entBasicInfo.regAuthority                                             | String   | -            | 注册机关                                                                                                                                      | 注册机关名                   |
| data.entBasicInfo.regCapital                                               | Long     | -            | 注册资本                                                                                                                                      | 111                          |
| data.entBasicInfo.establishDate                                            | Date     | -            | 成立日期                                                                                                                                      | 2022．                       |
| data.entBasicInfo.periodValidity                                           | Date     | -            | 有效期                                                                                                                                        |                              |
| data.entBasicInfo.contactName                                              | String   | -            | 联系人名称                                                                                                                                    | 张三                         |
| data.entBasicInfo.contactPhone                                             | String   | -            | 联系人手机                                                                                                                                    | 15312345678                  |
| data.entBasicInfo.contactEmail                                             | String   | -            | 联系人邮箱                                                                                                                                    | 123@qq.com                   |
| data.entBasicInfo.contactCrtType                                           | Integer  | -            | 联系人证件类型[枚举值: 1 中国居民身份证 2 护照 3 其他]                                                                                        | 1                            |
| data.entBasicInfo.contactCrtNo                                             | String   | -            | 联系人证件号                                                                                                                                  | 151231                       |
| data.entBasicInfo.contactCrtBackImgRid                                     | Long     | -            | 联系人身份证背面照片                                                                                                                          | 1321                         |
| data.entBasicInfo.contactCrtFrontImgRid                                    | Long     | -            | 联系人身份证正面照片                                                                                                                          | 123                          |
| data.entBasicInfo.legalName                                                | String   | -            | 法定代表人姓名                                                                                                                                | 李四                         |
| data.entBasicInfo.legalCrtType                                             | String   | -            | 法定代表人证件类型                                                                                                                            | 1                            |
| data.entBasicInfo.legalCrtNo                                               | String   | -            | 法定代表人证件号                                                                                                                              | 1423123                      |
| data.entBasicInfo.legalPhone                                               | String   | -            | 法定代表人手机号                                                                                                                              | 18512345678                  |
| data.entBasicInfo.legalEmail                                               | String   | -            | 法定代表人邮箱                                                                                                                                | 123@qq.com                   |
| data.entBasicInfo.legalFax                                                 | String   | -            | 法定代表人传真                                                                                                                                | 1512345678                   |
| data.entBasicInfo.legalCrtBackImgRid                                       | Long     | -            | 法人身份证背面照片                                                                                                                            | 123                          |
| data.entBasicInfo.legalCrtFrontImgRid                                      | Long     | -            | 法人身份证正面照片                                                                                                                            | 321                          |
| data.entBasicInfo.entPrefix                                                | String   | -            | 企业前缀                                                                                                                                      | 88.123                       |
| data.entRegisterManageInfo                                                 | Object   | -            | 企业标识注册管理系统信息                                                                                                                      | -                            |
| data.entRegisterManageInfo.entInfoSyses                                    | List     | -            | 企业注册部署信息                                                                                                                              | -                            |
| data.entRegisterManageInfo.entInfoSyses. sysType                           | Integer  | -            | 系统部署类型： 1 标识注册系统 2 标识注册数据 3 注册数据备份 4 解析服务器 5 标识服务系统备份                                                   | 1                            |
| data.entRegisterManageInfo.entInfoSyses. deployMode                        | Integer  | -            | 部署方式： 1 本地化部署 2 云部署                                                                                                              | 1                            |
| data.entRegisterManageInfo.entInfoSyses. deployAddr                        | String   | -            | 部署地址                                                                                                                                      | 苏家坨中关村科技园翠湖云中心 |
| data.entRegisterManageInfo.entInfoSyses. deployAddrProvince                | String   | -            | 部署省                                                                                                                                        | 110000                       |
| data.entRegisterManageInfo.entInfoSyses. deployAddrCity                    | String   | -            | 部署市                                                                                                                                        | 110100                       |
| data.entRegisterManageInfo.entInfoSyses. AddrCounty                        | String   | -            | 部署区                                                                                                                                        | 110108                       |
| data.entRegisterManageInfo.entInfoSyses. name                              | String   | -            | 云服务商名称                                                                                                                                  | 阿里云                       |
| data.entRegisterManageInfo.entInfoSyses. ipPort                            | String   | -            | 部署 IP 及端口（只有注册系统需要 属性为空时不校验）                                                                                           | [127.0.0.1]:8080             |
| data.entRegisterManageInfo.servSysBuildType                                | Integer  | -            | 服务系统建设，建设类型，1 自营 2 委托                                                                                                         | 1                            |
| data.entRegisterManageInfo.servSysBuildName                                | String   | -            | 服务系统建设委托机构名称                                                                                                                      | 阿里云                       |
| data.entRegisterManageInfo.servSysOperType                                 | Integer  | -            | 服务系统运营类型 1 自营 2 委托                                                                                                                | 1                            |
| data.entRegisterManageInfo.servSysOperName                                 | String   | -            | 服务系统运营委托机构名称                                                                                                                      | 阿里云                       |
| data.entHostingAndIdentifyServeInfo                                        | Object   | -            | 企业灾备和企业灾备与标识服务信息                                                                                                              | -                            |
| data.entHostingAndIdentifyServeInfo.entInfoLicenses                        | List     | -            | 互联网域名或增值电信业务经营相关许可证                                                                                                        | 4213123                      |
| data.entHostingAndIdentifyServeInfo.entInfoLicenses. licenceType           | Long     | -            | 互联网域名或增值电信业务经营相关许可: 1.域名根服务器运行机构许可证 2.域名注册管理机构许可证 3.域名注册服务机构许可证 4.增值电信业务经营许可证 | 1                            |
| data.entHostingAndIdentifyServeInfo.entInfoLicenses licenceNo              | String   | -            | 许可证号                                                                                                                                      | 1512312                      |
| data.entHostingAndIdentifyServeInfo.dataHostingOrg                         | String   | -            | 数据托管单位                                                                                                                                  | 阿里云                       |
| data.entHostingAndIdentifyServeInfo.dataHostingContractFileRid             | Long     | -            | 数据托管合同                                                                                                                                  | -                            |
| data.entHostingAndIdentifyServeInfo.servHostingOrg                         | String   | -            | 服务托管单位                                                                                                                                  | 阿里云                       |
| data.entHostingAndIdentifyServeInfo.servHostingContractFileRid             | Long     | -            | 服务托管合同                                                                                                                                  | 124123                       |
| data.entHostingAndIdentifyServeInfo.entInfoSerIndustries                   | List     | -            | 服务行业                                                                                                                                      | -                            |
| data.entHostingAndIdentifyServeInfo.entInfoSerIndustries. industryCategory | String   | -            | 行业门类                                                                                                                                      | A                            |
| data.entHostingAndIdentifyServeInfo.entInfoSerIndustries. industrySpecific | String   | -            | 行业大类                                                                                                                                      | 01                           |
| data.entHostingAndIdentifyServeInfo.entInfoSerIndustries. industryTrade    | String   | -            | 行业中类                                                                                                                                      | 011                          |
| data.entHostingAndIdentifyServeInfo.entInfoSerIndustries. industrySubclass | String   | -            | 行业小类                                                                                                                                      | 0111                         |
| data.entHostingAndIdentifyServeInfo.extWebName                             | String   | -            | 对外提供标识服务的网站名称                                                                                                                    | 阿里云                       |
| data.entHostingAndIdentifyServeInfo.extDomain                              | String   | -            | 对外提供标识服务的网站域名                                                                                                                    | www.123.cn                   |
| data.entHostingAndIdentifyServeInfo.extIpAddr                              | String   | -            | 对外提供标识服务的网站 IP 地址                                                                                                                | 1.1.1.1                      |

### 响应示例

```json
{
  "message": "success",
  "status": 1,
  "data": {
    "entBasicInfo": {
      "orgName": "teleinfo",
      "orgNature": "1",
      "orgCrtType": "1",
      "orgCrtCode": "3123123123",
      "orgCrtImgRid": 1,
      "industryCategory": "A",
      "industrySpecific": "01",
      "orgAddrProvince": "110000",
      "orgAddrCity": "110100",
      "orgAddrCounty": "110101",
      "orgAddr": "123123",
      "website": null,
      "orgDesc": null,
      "regAuthority": null,
      "regCapital": 111,
      "establishDate": null,
      "periodValidity": null,
      "contactName": "李恒",
      "contactPhone": "13356788909",
      "contactEmail": "lihengcn@163.com",
      "contactCrtType": 1,
      "contactCrtNo": "412724299202022936",
      "contactCrtFrontImgRid": "412724299202022936",
      "contactCrtBackImgRid": "412724299202022936",
      "legalName": "李恒",
      "legalCrtType": "1",
      "legalCrtNo": "412724199202022936",
      "legalPhone": null,
      "legalEmail": null,
      "legalFax": null,
      "legalCrtFrontImgRid": "412724299202022936",
      "legalCrtBackImgRid": "412724299202022936",
      "entPrefix": "88.709.0000"
    },
    "entRegisterManageInfo": {
      "entInfoSyses": [
        {
          "sysType": 1,
          "deployMode": 1,
          "deployAddr": "Test",
          "deployAddrProvince": "110000",
          "deployAddrCity": "110100",
          "deployAddrCounty": "110101",
          "name": null,
          "ipPort": null
        },
        {
          "sysType": 2,
          "deployMode": 1,
          "deployAddr": "Test",
          "deployAddrProvince": "110000",
          "deployAddrCity": "110100",
          "deployAddrCounty": "110101",
          "name": null,
          "ipPort": null
        },
        {
          "sysType": 3,
          "deployMode": 1,
          "deployAddr": "Test",
          "deployAddrProvince": "110000",
          "deployAddrCity": "110100",
          "deployAddrCounty": "110101",
          "name": null,
          "ipPort": null
        },
        {
          "sysType": 4,
          "deployMode": 1,
          "deployAddr": "Test",
          "deployAddrProvince": "110000",
          "deployAddrCity": "110100",
          "deployAddrCounty": "110101",
          "name": null,
          "ipPort": null
        }
      ],
      "servSysBuildType": 1,
      "servSysBuildName": null,
      "servSysOperType": 1,
      "servSysOperName": null
    },
    "entHostingAndIdentifyServeInfo": {
      "entInfoLicenses": [],
      "dataHostingOrg": null,
      "dataHostingContractFileRid": null,
      "servHostingOrg": null,
      "servHostingContractFileRid": null,
      "entInfoSerIndustries": [],
      "extWebName": null,
      "extDomain": null,
      "extIpAddr": null
    }
  }
}
```

### 异常示例

```json
{
  "message": "系统繁忙",
  "status": -1,
  "data": null
}
```

### 注意事项

> 只有管理员角色能调用该接口（例：admin 用户）
