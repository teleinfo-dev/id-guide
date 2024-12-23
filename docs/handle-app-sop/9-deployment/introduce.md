# 企业节点快速部署

## 前置准备

1. 提前申请企业前缀
2. 推荐企业接入的二级节点升级至 1.3.20.2以上版本
3. 联系泰尔英福运营人员，提供前缀（例如：88.888.888），开通服务寻址
4. 通过企数通申请 license
5. 按照[企业节点环境准备表](#环境准备)准备硬件资源和网络资源
6. 准备以下信息

   - 企业前缀
   - 服务器内网 IP
   - 二级节点 S3 服务地址（IP:Port）
   - 二级节点 S3 服务 AK/SK
   - 二级节点服务 AK/SK（在二级节点 SNMS 服务配置文件中）

## 环境准备

**服务器资源表**

<table>
<tr>
    <th colspan="2">企业节点部署服务器</th>
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

<table>
<tr>
    <th colspan="2">标识中间件部署服务器</th>
</tr>
<tr>
    <td>操作系统</td>
    <td>推荐openEuler 22.03 LTS或Anolis OS 8.8 GA</td>
</tr>
<tr>
    <td>处理器</td>
    <td>4核</td>
</tr>
<tr>
    <td>内存</td>
    <td>8 GB RAM</td>
</tr>
<tr>
    <td>储存空间</td>
    <td>200G</td>
</tr>
<tr>
    <td>用途</td>
    <td>标识解析中间件部署</td>
</tr>
</table>

**网络资源表**

| 步骤                  | 部署应用服务     | 部署服务                                                                                                                                                                | 内网地址端口                                                                                                                                                                                                                                  | 公网端口                                                                                    | 注意事项                                                                             |
| --------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 网络环境准备\_规划 IP | 企业节点管理服务 | <ul style="width: 120px;"><li>docker</li><li>idhub-manage</li> <li>idhub-core</li> <li>idhub-log</li><li>MySQL</li> <li>redis</li> <li>Minio</li> <li>MongoDB</li></ul> | <ul style="width: 180px;"><li>22 端口（SSH）</li><li>3000（idhub-manage）</li> <li>2641（idhub-core）</li> <li>8081（idhub-core）</li> <li>3306（MySQL）</li> <li> 27017（MongoDB）</li> <li> 6379（Redis）</li> <li> 9000（Minio）</li></ul> | <ul style="width: 90px;"><li>3100（idhub-manage-web）</li> <li>2641（idhub-core）</li></ul> | 企业节点需要对接二级节点 SNMS 服务、二级节点的 S3 服务（默认 9000 端口）以及递归节点 |

## 快速部署

1. 在服务器指定目录下载部署包

```
wget https://teleinfo.pek3b.qingstor.com/Ent_deploy-v1.0-std.zip
```

2. 解压部署包

```
# 解压
unzip Ent_deploy_2.0.4.zip
# 进入解压包目录
cd Ent_deploy_2.0.4/Ent_deploy
```

3. 阅读 readme，按照指导步骤进行操作

- 注意事项

  - 确认操作系统上已经安装了 docker,docker-compose，若没有，请提前安装
  - 如果操作系统不能联网，请手动上传镜像，并解压

- 企业节点初始化，启动应用

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

- 标识解析中间件部署

  ```
  (1).企业节点启动并联调完成，生成auth_ak，auth_sk

  (2).修改参数，并启动

  cd Ent_deploy_2.0.4/ID-middleware

  1.修改docker-compose.yml参数：

  $ent_host_ip   # 企业节点部署的内网IP地址
  $randomPasswd   #mysql的密码
  $auth_ak   #企业节点上生成
  $auth_sk   #企业节点上生成

  2.启动

  docker-compose up -d

  # 标识解析中间件日常维护：

  启动：docker-compose up -d
  关停：docker-compose down
  ```
