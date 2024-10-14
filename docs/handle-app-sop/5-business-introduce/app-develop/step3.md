# step3 企业数据接入与管理

企业数据的接入，指将企业信息系统的数据接入到企业节点中，生成标准化的标识数据。

标识数据管理指对接入到企业节点的数据进行管理，包括标识数据关联、标识数据关系图、数据权限控制、标识数据查询、数据目录开放、数据发现与检索等。

企业数据接入企业节点，生成标准化数据的方式有两种：

1. 通过 [ID-SDK](../../sdk/v2/introduction.md) / [IDHub](../../idhub/standard/introduce.md) API接口连接数据
    <p style="font-size: 12px; color: rgb(22,93,255);">说明：使用 ID-SDK 或 IDHub API 接口接入数据，应用开发者需基于接口规范进行定制化开发，涉及企业信息系统改造</p>

2. 通过数据连接中间件[IDLink](./step3-idlink.md)连接数据
    <p style="font-size: 12px; color: rgb(22,93,255);">说明：使用IDLink接入数据，应用开发者无需开发，仅需在企业节点中进行数据连接配置，即可完成数据接入</p>

<div style="display: flex;">
<img src="./images/step3-1.jpg" style="margin-top: 10px; min-width:0; flex: 1;"/><img src="./images/step3-2.jpg" style="margin-top: 10px; min-width:0; flex: 1;"/>
</div>


数据接入企业节点的方式，由应用开发者根据实际应用场景自行选择。无论使用哪种数据连接方式，接入企业节点中的数据与企业信息系统中的数据完全一致，当信息系统中的数据发生变更后，企业节点也会更新该数据。