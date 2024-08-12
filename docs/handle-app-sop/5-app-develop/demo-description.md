# 场景描述

本章模拟生产系统的产品数据和仓储系统的入库单数据分别接入企业节点A和B，仓储系统所属企业B只能访问到部分产品数据。应用开发者开发的标识应用可基于入库单标识查询出产品数据，也可基于产品标识查询出入库单数据。

模拟生产系统和仓储系统产品数据的 sql 脚本:
<a href="./sql/wine-production.sql" download>下载生产系统的sql脚本</a> 、  <a href="./sql/wine-store.sql" download>下载仓储系统的sql脚本</a>