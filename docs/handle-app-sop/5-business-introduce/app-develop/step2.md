# step2 获取应用标识身份

分别在企业节点A中为生产系统生成标识身份`88.608.24061301/App_scxt0716`、 在企业节点B中为仓储系统生成标识身份`88.608.5288/APP_ccxt0716`。

## 前置条件

完成[前缀申请](../3-apply-prefix/introduce.md)和[企业节点安装](../3-develop-env/idhub-install.md)。

## 操作步骤

1. 登录企业节点商业版系统，进入【应用标识身份】菜单

    <center><img src="./images/step2-1.png" style="margin-top: 20px"/></center>

2. 点击【新建应用】按钮，为应用生成标识身份
    <center><img src="./images/step2-2.png" style="margin-top: 20px"/></center>

3. 在应用列表中，选择应用身份单据，点【详情】，查询应用身份ID，可下载私钥
    <center><img src="./images/step2-3.png" style="margin-top: 20px"/></center>

## 后续操作

应用开发者基于获取的应用身份，模拟生产系统、仓储系统分别与企业节点打通，完成数据接入操作。