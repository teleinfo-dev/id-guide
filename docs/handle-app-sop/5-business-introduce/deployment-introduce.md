# 企业节点快速部署

## 环境准备

**服务器资源**

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
    <td>服务及中间件部署</td>
</tr>
</table>

**⽹络资源表**

<table>
<tr>
    <th>步骤</th>
    <th>部署应⽤服务</th>
    <th>部署服务</th>
    <th>内⽹地址端⼝</th>
    <th>公⽹端⼝</th>
    <th>注意事项</th>
</tr>
<tr>
    <td>⽹络环境准备_规划IP</td>
    <td>企业节点商业版服务</td>
    <td>
        <ul>
            <li>docker</li>
            <li>idhub-manage</li>
            <li>idhub-core</li>
            <li>idhub-log</li>
            <li>MySQL</li>
            <li>redis</li>
            <li>Minio</li>
            <li>MongoDB</li>
        </ul>
    </td>
    <td>
        <ul>
            <li>22端⼝（SSH）</li>
            <li>3000（idhub-manage）</li>
            <li>2641（idhub-core）</li>
            <li>8081（idhub-core）</li>
            <li>3306（MySQL）</li>
            <li>27017（MongoDB）</li>
            <li>6379（Redis）</li>
            <li>9000（Minio）</li>
        </ul>
    </td>
    <td>
        <ul>
            <li>3100（idhub-manage-web）</li>
            <li>2641（idhub-core）</li>
        </ul>
    </td>
    <td>企业节点需要对接⼆级节点SNMS服务、⼆级节点的S3服务（默认9000端⼝）以及递归节点</td>
</tr>
</table>

## 前置准备
1. 请到二级节点申请企业前缀
2. <li>企业节点对接的二级节点，需升级到<a href="https://kdocs.cn/l/cbyqlWCXhYG7" target="_blank">1.3.20.6及以上版本</a>。</li>
3. 联系泰尔英福运营人员，提供前缀（例如：88.888.888），开通服务寻址
4. 按照上述环境准备表准备硬件资源和⽹络资源
5. 准备以下信息

   + 企业前缀
   + 服务器内网IP
   + 二级节点S3服务地址（IP:Port）
   + ⼆级节点S3服务AccessKey/SecretKey
   + 二级节点服务AK/SK（在二级节点SNMS服务配置文件中）


## 快速部署
1. 将附件1_部署包上传至指定服务器
2. 阅读ReadMe，按照指导步骤进行操作
- 注意事项
    - 确认操作系统上已经安装了docker,docker-compose，若没有，请提前安装
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