# 企业节点快速部署

## 前置准备

1. 提前申请企业前缀。
2. 推荐企业接入的二级节点升级至1.3.19.3以上版本。
3. 联系泰尔英福运营人员，提供前缀（例如：88.888.888），开通服务寻址。
4. 通过企数通申请license。
5. 按照[企业节点环境准备表](#环境准备)准备硬件资源和网络资源。
6. 准备以下信息

   + 企业前缀
   + 服务器内网IP
   + 二级节点S3服务地址（IP:Port）
   + 二级节点S3服务AK/SK
   + 二级节点服务AK/SK（在二级节点SNMS服务配置文件中）

## 环境准备

**服务器资源表**


<table>
<tr>
    <th colspan="2">部署服务器</th>
</tr>
<tr>
    <td>操作系统</td>
    <td>推荐openEuler 22.03 LTS或Anolis OS 8.8 GA</td>
</tr>
<tr>
    <td>处理器</td>
    <td>8核</td>
</tr>
<tr>
    <td>内存</td>
    <td>16 GB RAM</td>
</tr>
<tr>
    <td>储存空间</td>
    <td>500G</td>
</tr>
<tr>
    <td>公网带宽</td>
    <td>≥10M（idhub用于解析）</td>
</tr>
<tr>
    <td>用途</td>
    <td>idhub-manage,idhub-core,idhub-log服务及中间件部署</td>
</tr>
</table>

**网络资源表**

| 步骤 | 部署应用服务 | 部署服务 | 内网地址端口 | 公网端口 | 是否按要求提供（客户填写） | 注意事项 |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| 网络环境准备_规划IP | 企业节点管理服务  |  <ul><li>docker</li><li>idhub-manage</li>  <li>idhub-core</li> <li>idhub-log</li><li>MySQL</li> <li>redis</li> <li>Minio</li>  <li>MongoDB</li></ul> | <ul><li>22端口（SSH）</li><li>3000（idhub-manage）</li>  <li>2641（idhub-core）</li> <li>8081（idhub-core）</li> <li>3306（MySQL）</li> <li> 27017（MongoDB）</li> <li> 6379（Redis）</li> <li> 9000（Minio）</li></ul>|  <ul><li>3100（idhub-manage-web）</li> <li>2641（idhub-core）</li></ul>| |企业节点需要对接二级节点SNMS服务、二级节点的S3服务（默认9000端口）以及递归节点 |


## 快速部署

1. 在服务器指定目录下载部署包

```
wget https://teleinfo.pek3b.qingstor.com/Ent_deploy.zip
```

2. 解压部署包

```
# 解压
unzip Ent_deploy.zip
# 进入解压包目录
cd Ent_deploy
```

3. 阅读ReadMe，按照指导步骤进行操作

- 注意事项
    - 确认操作系统上已经安装了docker,docker-compose，若没有，请提前安装
    - 如果操作系统不能联网，请手动上传镜像，并解压

    ```
    镜像列表
    registry.teleinfo.cn:8443/idhub-manage/idhub-lhs:20240717151004-Standard_2.0.0
    registry.teleinfo.cn:8443/idhub-manage/idhub-log-client:20240717110141-Standard_1.0.1
    registry.teleinfo.cn:8443/idhub-manage/idhub-manage-web:v2.0.1
    registry.teleinfo.cn:8443/idhub-manage/idhub-buss-manage-server:v2.0.1
    registry.teleinfo.cn:8443/ops/minio:RELEASE.2024-04-06T05-26-02Z
    registry.teleinfo.cn:8443/ops/mongo:4.0
    registry.teleinfo.cn:8443/ops/mysql:8
    registry.teleinfo.cn:8443/ops/redis:latest
    ```
- 项目初始化，启动应用
    ```
    # 初始化流程：
    (1).填充初始化信息(选做)，文件路径./conf/variables.yaml

    (2).初始化
    chmod +x ./bin/*;chmod +x ./middleware/*.sh 
    x86架构：cd ./bin/; ./init-x86
    arm64架构：cd ./bin/; ./init-arm64

    (3)启动应用
    ./start.sh
    ```
- 日常维护
    ```
    # 日常维护：
    (1).应用维护
    启动：cd ./bin/;./start.sh
    关停：cd ./bin/;./stop.sh

    (2).中间件维护
    启动：cd ./middleware/;./start.sh
    关停：cd ./middleware/;./stop.sh
    ```