# 企业节点OpenAPI

相较于社区版，标准版开放的API接口更完善，系统打通、数据连接更便捷，应用集成更规范，因此我们推荐您使用标准版。

<div style="display:flex;">
<div style="width: 400px;padding:10px;background-color:rgb(232, 242, 254);border:1px solid #eee;margin-right:5px;">
    <strong>社区版API接口</strong>
    <ol>
    <li>标识查询</li>
    <li>标识注册-新增属性</li>
    <li>标识修改</li>
    <li>标识删除-移除属性</li>
    <li>前缀预置</li>
    <li>前缀剔除</li>
    </ol>
</div>
<div style="width: 400px;padding:10px;background-color:rgb(255, 250, 229);border:1px solid #eee;margin-left:5px;">
   <strong>标准版API接口</strong>
   <ol>
    <li>身份认证</li>
    <li>企业元数据接口
        <ul>
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
        </ul>
        <span style="font-size: 12px; color: rgb(22,93,255);">说明：通过企业元数据新增、修改接口，可实现企业元数据的关联</span>
    </li>
    <li>数据权限接口
        <ul>
            <li>获取标识身份|身份组</li>
            <li>单条标识授权</li>
        </ul>
        <span style="font-size: 12px; color: rgb(22,93,255);">说明：数据权限接口，可控制接入标识解析体系的数据被外界访问的权限</span>
    </li>
    <li>标识操作
        <ul>
            <li>标识注册</li>
            <li>标识修改</li>
            <li>标识删除</li>
            <li>标识解析</li>
        </ul>
        <span style="font-size: 12px; color: rgb(22,93,255);">说明：标识操作，需依赖企业元数据，遵循元数据规范。基于企业元数据的关联关系，可构建标识数据的关联。</span>
    </li>
    <li>数据目录接口
        <ul>
            <li>数据分类列表</li>
            <li>元数据模板列表</li>
            <li>标识数据列表</li>
        </ul>
    </li>
</ol>
</div>
</div>