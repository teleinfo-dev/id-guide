import{_ as a,c as t,a5 as n,o as i}from"./chunks/framework.CgiMItuT.js";const E=JSON.parse('{"title":"数据权限接口","description":"","frontmatter":{},"headers":[],"relativePath":"dev-tools/standard/api/data-auth.md","filePath":"dev-tools/standard/api/data-auth.md","lastUpdated":1729043285000}'),e={name:"dev-tools/standard/api/data-auth.md"};function l(p,s,r,d,h,o){return i(),t("div",null,s[0]||(s[0]=[n(`<h1 id="数据权限接口" tabindex="-1">数据权限接口 <a class="header-anchor" href="#数据权限接口" aria-label="Permalink to &quot;数据权限接口&quot;">​</a></h1><h2 id="标识身份列表查询" tabindex="-1">标识身份列表查询 <a class="header-anchor" href="#标识身份列表查询" aria-label="Permalink to &quot;标识身份列表查询&quot;">​</a></h2><p>通过此接口，查询本企业节点中所有应用身份列表及本企业和导入外企业的身份组列表，用于后续进行身份授权。</p><p><code>注意：</code></p><blockquote><p>向本企业授权，可授权本企业的应用身份或本企业的身份组；跨企业进行授权，只可导入跨企业身份组后进行授权</p></blockquote><h3 id="请求参数" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数" aria-label="Permalink to &quot;请求参数&quot;">​</a></h3><ul><li>请求服务：企业节点业务系统HTTP端口（默认 3000）</li><li>请求方式：GET</li><li>请求路径：<code>/api/v1/open/handle-user-group/list</code></li><li>Header：</li></ul><table tabindex="0"><thead><tr><th><strong>参数</strong></th><th><strong>类型</strong></th><th><strong>是否必填</strong></th><th><strong>最大长度</strong></th><th><strong>备注</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>是</td><td>-</td><td>Bearer + 空格 + token(身份接口获取)</td><td>exxxxxxx</td></tr><tr><td>Content-Type</td><td>String</td><td>是</td><td>-</td><td>application/json</td><td>application/json</td></tr></tbody></table><ul><li>Query Param：</li></ul><p>无</p><h3 id="请求示例" tabindex="-1">请求示例 <a class="header-anchor" href="#请求示例" aria-label="Permalink to &quot;请求示例&quot;">​</a></h3><blockquote><p>/api/v1/open/handle-user-group/list</p></blockquote><h3 id="响应参数" tabindex="-1">响应参数 <a class="header-anchor" href="#响应参数" aria-label="Permalink to &quot;响应参数&quot;">​</a></h3><ul><li>公共响应参数</li></ul><table tabindex="0"><thead><tr><th><strong>参数</strong></th><th><strong>类型</strong></th><th><strong>备注</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>code</td><td>Integer</td><td>状态码(详见状态码说明）</td><td>10000</td></tr><tr><td>message</td><td>String</td><td>状态码描述</td><td>success</td></tr><tr><td>data</td><td>Object</td><td>返回数据</td><td>-</td></tr></tbody></table><ul><li>data数据结构</li></ul><table tabindex="0"><thead><tr><th><strong>参数</strong></th><th><strong>参数类型</strong></th><th><strong>备注</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>name</td><td>String</td><td>用户名</td><td>&quot;my&quot;</td></tr><tr><td>userHandle</td><td>String</td><td>身份标识</td><td>&quot;88.608.6688/User_zyh03&quot;</td></tr><tr><td>belongCompany</td><td>String</td><td>所属企业</td><td></td></tr></tbody></table><h3 id="响应示例" tabindex="-1">响应示例 <a class="header-anchor" href="#响应示例" aria-label="Permalink to &quot;响应示例&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;成功&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试应用&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;userHandle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;88.608.8889/App_ceshi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;belongCompany&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HNl66CEPJnHF0GVIEMXVo2HqjYmJizjj&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="实例标识授权" tabindex="-1">实例标识授权 <a class="header-anchor" href="#实例标识授权" aria-label="Permalink to &quot;实例标识授权&quot;">​</a></h2><p>通过此接口，可对实例标识进行授权操作。</p><h3 id="请求参数-1" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数-1" aria-label="Permalink to &quot;请求参数&quot;">​</a></h3><ul><li>请求服务：企业节点业务系统HTTP端口（默认 3000）</li><li>请求方式：POST</li><li>请求路径：<code>/api/v1/single-handle/authorization</code></li><li>Header：</li></ul><table tabindex="0"><thead><tr><th><strong>参数</strong></th><th><strong>类型</strong></th><th><strong>是否必填</strong></th><th><strong>最大长度</strong></th><th><strong>备注</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>Authorization</td><td>String</td><td>是</td><td>-</td><td>Bearer + 空格 + token(身份接口获取)</td><td>admin</td></tr><tr><td>Content-Type</td><td>String</td><td>是</td><td>-</td><td>application/json</td><td>application/json</td></tr></tbody></table><ul><li>Body：</li></ul><table tabindex="0"><thead><tr><th><strong>参数</strong></th><th><strong>类型</strong></th><th><strong>是否必填</strong></th><th><strong>最大长度</strong></th><th><strong>备注</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>handle</td><td>String</td><td>是</td><td>-</td><td>实例标识</td><td>88.608.6688/instance_1</td></tr><tr><td>readerScope</td><td>integer</td><td>是</td><td>-</td><td>枚举值 1-公开，2-指定范围</td><td>1</td></tr><tr><td>handleUserReaders</td><td>array[string]</td><td>否</td><td>-</td><td>授权的查看标识用户</td><td>1</td></tr><tr><td>handleUserWriters</td><td>array[string]</td><td>否</td><td>-</td><td>授权的编辑标识用户</td><td>1</td></tr><tr><td>delHandleUserReaders</td><td>array[string]</td><td>否</td><td>-</td><td>删除的标识身份</td><td>1</td></tr><tr><td>delHandleUserWriters</td><td>array[string]</td><td>否</td><td>-</td><td>删除的标识身份</td><td>1</td></tr></tbody></table><h3 id="请求示例-1" tabindex="-1">请求示例 <a class="header-anchor" href="#请求示例-1" aria-label="Permalink to &quot;请求示例&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;handle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;88.608.8889/SNMS-handle13&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;readerScope&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;delHandleUserReaders&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;88.608.8889/App_xz_app2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;delHandleUserWriters&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;88.608.8889/App_xz_app2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;handleUserWriters&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;88.608.8889/App_xz_app2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;handleUserReaders&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;88.608.8889/App_xz_app2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="响应参数-1" tabindex="-1">响应参数 <a class="header-anchor" href="#响应参数-1" aria-label="Permalink to &quot;响应参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th><strong>参数</strong></th><th><strong>类型</strong></th><th><strong>备注</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>status</td><td>Integer</td><td>状态码(详见状态码说明）</td><td>1</td></tr><tr><td>message</td><td>String</td><td>状态码描述</td><td>success</td></tr></tbody></table><h3 id="响应示例-1" tabindex="-1">响应示例 <a class="header-anchor" href="#响应示例-1" aria-label="Permalink to &quot;响应示例&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="异常示例" tabindex="-1">异常示例 <a class="header-anchor" href="#异常示例" aria-label="Permalink to &quot;异常示例&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;validate.bind.error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;errors&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;grantType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;errorMsg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;授权类型不合符（1同类授权2单个授权）&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;授权的标识用户88.608.8889/App_wscapp22不是应用身份&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">901</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,35)]))}const u=a(e,[["render",l]]);export{E as __pageData,u as default};
