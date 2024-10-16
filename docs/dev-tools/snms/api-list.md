# API 概览

| <div style="width: 330px;">API名称</div>        |      描述      |
| -------------------- | :----------- |
| 明文传输 <Badge type="warning">[V3](./v3/identity-auth.md#明文传输)</Badge>  <Badge type="tip">[V5](./v5/identity-auth.md#明文传输)</Badge> <div class="api-list-url">`POST`  /identity/token </div>     | 身份认证接口 | 
| 密文传输  <Badge type="warning">[V3](./v3/identity-auth.md#密文传输)</Badge>  <Badge type="tip">[V5](./v5/identity-auth.md#密文传输)</Badge> <div class="api-list-url">`POST`  /identity/token/v1 </div>    |   身份认证接口   |
| 查询数据模板  <Badge type="warning">[V3](./v3/template.md#查询数据模板)</Badge>  <Badge type="tip">[V5](./v5/template.md#查询数据模板)</Badge>   |  查询已经建立的数据模板相关信息，用户可以通过此接口查询数据模板详细信息    |
| 新增数据模板  <Badge type="warning">[V3](./v3/template.md#新增数据模板)</Badge>  <Badge type="tip">[V5](./v5/template.md#新增数据模板)</Badge>   |   新增加数据模板   |
| 删除数据模板 <Badge type="warning">[V3](./v3/template.md#删除数据模板)</Badge>  <Badge type="tip">[V5](./v5/template.md#删除数据模板)</Badge>      |  删除数据模板    |
| 修改数据模板  <Badge type="tip">[V5](./v5/template.md#修改数据模板)</Badge> <div class="api-list-url">`PUT`  /snms/api/v5/template </div>    |  修改数据模板    |
| 查询标识  <Badge type="warning">[V3](./v3/handle-operate.md#查询标识)</Badge>  <Badge type="tip">[V5](./v5/handle-operate.md#查询标识)</Badge>  <div class="api-list-url">`GET`  /identityv2/data/detail </div>    |  标识解析接口    |
| 注册标识  <Badge type="warning">[V3](./v3/handle-operate.md#注册标识)</Badge>  <Badge type="tip">[V5](./v5/handle-operate.md#注册标识)</Badge> <div class="api-list-url">`POST`  /identityv2/data </div>    |  注册标识    |
| 批量注册标识 <Badge type="warning">[V3](./v3/handle-operate.md#批量注册标识)</Badge>  <Badge type="tip">[V5](./v5/handle-operate.md#批量注册标识)</Badge>  <div class="api-list-url">`POST`  /identityv2/data/batchCreate </div>    |  批量注册标识    |
| 更新标识  <Badge type="warning">[V3](./v3/handle-operate.md#更新标识)</Badge>  <Badge type="tip">[V5](./v5/handle-operate.md#更新标识)</Badge>  <div class="api-list-url">`PUT`  /identityv2/data </div>    |   更新标识   |
| 批量更新标识 <Badge type="warning">[V3](./v3/handle-operate.md#批量更新标识)</Badge>  <Badge type="tip">[V5](./v5/handle-operate.md#批量更新标识)</Badge> <div class="api-list-url">`PUT`  /identityv2/data/batchUpdate </div>    |  批量更新标识    |
| 删除标识 <Badge type="warning">[V3](./v3/handle-operate.md#删除标识)</Badge>  <Badge type="tip">[V5](./v5/handle-operate.md#删除标识)</Badge>  <div class="api-list-url">`DELETE`  /identityv2/data </div>    |  标识删除接口    |
| 批量删除标识  <Badge type="warning">[V3](./v3/handle-operate.md#批量删除标识)</Badge>  <Badge type="tip">[V5](./v5/handle-operate.md#批量删除标识)</Badge>  <div class="api-list-url">`DELETE`  /identityv2/data/batchDelete </div>    |  批量删除标识接口    |
<!-- | [查询标识](./v5/handle-operate.md#查询标识)  <div class="api-list-url">`GET`  /identityv2/data/detail </div>    |      |
| [注册标识](./v5/handle-operate.md#注册标识)  <div class="api-list-url">`POST`  /identityv2/data </div>    |      |
| [批量注册标识](./v5/handle-operate.md#批量注册标识)  <div class="api-list-url">`POST`  /identityv2/data/batchCreate </div>    |      |
| [更新标识](./v5/handle-operate.md#更新标识)  <div class="api-list-url">`PUT`  /identityv2/data </div>    |      |
| [批量更新标识](./v5/handle-operate.md#批量更新标识)  <div class="api-list-url">`PUT`  /identityv2/data/batchUpdate </div>    |      |
| [删除标识](./v5/handle-operate.md#删除标识)  <div class="api-list-url">`DELETE`  /identityv2/data </div>    |      |
| [批量删除标识](./v5/handle-operate.md#批量删除标识)  <div class="api-list-url">`DELETE`  /identityv2/data/batchDelete </div>    |      |
 -->



<!-- 
| <div style="width: 330px;">API名称</div>        |      描述      |
| -------------------- | :----------- |
| 明文传输 <Badge type="warning">[V3](./v3/identity-auth.md#明文传输)</Badge>  <Badge type="tip">[V5](./v5/identity-auth.md#明文传输)</Badge> <div class="api-list-url">`POST`  /identity/token </div>     |  | 
| 密文传输  <Badge type="warning">[V3](./v3/identity-auth.md#密文传输)</Badge>  <Badge type="tip">[V5](./v5/identity-auth.md#密文传输)</Badge> <div class="api-list-url">`POST`  /identity/token/v1 </div>    |      |
| [查询数据模板](./v3/template.md#查询数据模板)  <div class="api-list-url">`GET`  /snms/api/v3/template </div>    |      |
| [新增数据模板](./v3/template.md#新增数据模板)  <div class="api-list-url">`POST`  /snms/api/v3/template </div>    |      |
| [删除数据模板](./v3/template.md#删除数据模板)  <div class="api-list-url">`DELETE`  /snms/api/v3/template </div>    |      |
| [查询标识](./v3/handle-operate.md#查询标识)  <div class="api-list-url">`GET`  /identityv2/data/detail </div>    |      |
| [注册标识](./v3/handle-operate.md#注册标识)  <div class="api-list-url">`POST`  /identityv2/data </div>    |      |
| [批量注册标识](./v3/handle-operate.md#批量注册标识)  <div class="api-list-url">`POST`  /identityv2/data/batchCreate </div>    |      |
| [更新标识](./v3/handle-operate.md#更新标识)  <div class="api-list-url">`PUT`  /identityv2/data </div>    |      |
| [批量更新标识](./v3/handle-operate.md#批量更新标识)  <div class="api-list-url">`PUT`  /identityv2/data/batchUpdate </div>    |      |
| [删除标识](./v3/handle-operate.md#删除标识)  <div class="api-list-url">`DELETE`  /identityv2/data </div>    |      |
| [批量删除标识](./v3/handle-operate.md#批量删除标识)  <div class="api-list-url">`DELETE`  /identityv2/data/batchDelete </div>    |      |
| [查询数据模板](./v5/template.md#查询数据模板)  <div class="api-list-url">`GET`  /snms/api/v5/template </div>    |      |
| [新增数据模板](./v5/template.md#新增数据模板)  <div class="api-list-url">`POST`  /snms/api/v5/template </div>    |      |
| [修改数据模板](./v5/template.md#修改数据模板)  <div class="api-list-url">`PUT`  /snms/api/v5/template </div>    |      |
| [删除数据模板](./v5/template.md#删除数据模板)  <div class="api-list-url">`DELETE`  /snms/api/v5/template </div>    |      |
| [查询标识](./v5/handle-operate.md#查询标识)  <div class="api-list-url">`GET`  /identityv2/data/detail </div>    |      |
| [注册标识](./v5/handle-operate.md#注册标识)  <div class="api-list-url">`POST`  /identityv2/data </div>    |      |
| [批量注册标识](./v5/handle-operate.md#批量注册标识)  <div class="api-list-url">`POST`  /identityv2/data/batchCreate </div>    |      |
| [更新标识](./v5/handle-operate.md#更新标识)  <div class="api-list-url">`PUT`  /identityv2/data </div>    |      |
| [批量更新标识](./v5/handle-operate.md#批量更新标识)  <div class="api-list-url">`PUT`  /identityv2/data/batchUpdate </div>    |      |
| [删除标识](./v5/handle-operate.md#删除标识)  <div class="api-list-url">`DELETE`  /identityv2/data </div>    |      |
| [批量删除标识](./v5/handle-operate.md#批量删除标识)  <div class="api-list-url">`DELETE`  /identityv2/data/batchDelete </div>    |      |

 -->


<style type="text/css" rel="stylesheet">
 
:root .VPBadge {
    border-radius: 3px;
}

</style>


 


 