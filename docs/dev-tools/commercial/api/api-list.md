# API概览

| <div style="width: 330px;">API名称</div>        |      描述      |
| -------------------- | :----------- |
| [挑战接口](./challenge.md#挑战接口)  <div class="api-list-url">`GET`  /api/v1/doip/public/challenge </div>     | 用于获取挑战信息，为一随机nounce值 | 
| [应答颁发Token](./challenge.md#应答颁发Token)  <div class="api-list-url">`POST`  /api/v1/doip/public/verify-response </div>    |   用于验证使用nounce值生成的signature，验证成功则颁发token    |
| [新增元数据](./meta.md#新增元数据) <div class="api-list-url">`POST`  /api/v1/open/meta/create </div>  |   新建元数据模板，进行设定元数据名称、元数据分类、生成元数据标识编码、定义模板实体元素等操作    | 
| [查询元数据](./meta.md#查询元数据) <div class="api-list-url">`GET`  /api/v1/open/meta/info </div>  |   查询自己所创建的元数据模板，可查看元数据模板的基本信息及实体元素列表    | 
| [编辑元数据基本信息](./meta.md#编辑元数据基本信息) <div class="api-list-url">`PUT`  /api/v1/open/meta/update-basic-info </div>  |   编辑自己所创建的元数据模板，进行元数据基本信息的修改操作    | 
| [编辑元数据实体列表](./meta.md#编辑元数据实体列表) <div class="api-list-url">`PUT`  /api/v1/open/meta/update-item </div>  |   编辑自己所创建的元数据模板，进行元数据模板实体元素的修改操作    | 
| [删除元数据](./meta.md#删除元数据) <div class="api-list-url">`DELETE`  /api/v1/open/meta/delete </div>  |   删除元数据模板；删除功能支持单个删除或批量删除元数据模板    | 
| [元数据授权](./meta.md#元数据授权) <div class="api-list-url">`POST`  /api/v1/open/meta/grant/info </div>  |   通过此接口可将自己创建的元数据授权给其他标识身份    | 
| [发布/撤回元数据](./meta.md#发布-撤回元数据) <div class="api-list-url">`PUT`  /api/v1/open/meta/publish-or-withdraw </div>  |   可发布未发布的元数据模板，发布后，可基于该元数据模版进行标识数据创建； 可撤回已发布的元数据模板    | 
| [创建元数据副本](./meta.md#创建元数据副本) <div class="api-list-url">`POST`  /api/v1/open/meta/baseon-create </div>  |   用户可参照其他企业的元数据模板创建自己的元数据模板，并在该元数据下进行标识注册    | 
| [数据分类列表](./meta.md#数据分类列表) <div class="api-list-url">`GET`  /api/v1/open/meta/classify-query </div>  |   查询本企业下全量的数据分类列表    | 
| [元数据列表](./meta.md#元数据列表) <div class="api-list-url">`GET`  /api/v1/open/meta/page </div>  |   获取某个数据分类下的元数据模板列表    | 
| [标识数据列表](./meta.md#标识数据列表) <div class="api-list-url">`GET`  /api/v1/open/handle/page </div>  |   获取某个元数据模板下的标识列表    | 
| [标识身份列表查询](./data-auth.md#标识身份列表查询) <div class="api-list-url">`GET`  /api/v1/open/handle-user-group/list </div>  |   查询本企业节点中所有应用身份列表及本企业和导入外企业的身份组列表，用于后续进行身份授权    | 
| [同类数据授权-公开/撤销公开](./data-auth.md#同类数据授权-公开-撤销公开) <div class="api-list-url">`POST`  /api/v1/open/classes-grant/item/batch-public </div>  |   对基于元数据模板所创建的同类实例数据属性级别的查看权限进行公开与撤销公开的授权操作    | 
| [同类数据授权](./data-auth.md#同类数据授权) <div class="api-list-url">`POST`  /api/v1/open/classes-grant/authorization </div>  |   对基于元数据模板所创建的同类实例数据属性级别的查看及编辑权限进行授权操作    | 
| [实例标识单个授权](./data-auth.md#实例标识单个授权) <div class="api-list-url">`POST`  /api/v1/single-handle/authorization </div>  |   可对实例标识进行单个授权操作，在创建实例时，可选择“同类数据授权”或“单个授权”    | 
| [授权通知接口](./data-auth.md#授权通知接口) <div class="api-list-url">`GET`  /api/v1/open/message/appMessage </div>  |   用户可查看本应用身份下收到的消息列表   | 
| [标识注册](./handle.md#标识注册) <div class="api-list-url">`POST`  /api/v1/doip </div>  |   用户通过该接口可进行标识注册   | 
| [标识修改](./handle.md#标识修改) <div class="api-list-url">`POST`  /api/v1/doip </div>  |   用户可进行标识修改操作   | 
| [标识删除](./handle.md#标识删除) <div class="api-list-url">`POST`  /api/v1/doip </div>  |   用户可进行标识删除操作   | 
| [标识解析](./handle.md#标识解析) <div class="api-list-url">`GET`  /api/v1/doip </div>  |   用户可进行元数据模板标识解析与实例标识解析   | 
| [上传文件](./file.md#上传文件) <div class="api-list-url">`POST`  /api/v1/doip/file-upload </div>  |   用户可进行文件上传操作，该操作用于创建实例时，存在“文件型”、“图片型”、“视频型”、“音频型”元素，需进行上传，可进行单个/批量上传   | 
| [文件下载](./file.md#文件下载) <div class="api-list-url">`GET`  /api/v1/doip/file-acquire </div>  |   该接口用于查询或实例时，存在“文件型”、“图片型”、“视频型”、“音频型”元素信息，提供用户进行下载   |

