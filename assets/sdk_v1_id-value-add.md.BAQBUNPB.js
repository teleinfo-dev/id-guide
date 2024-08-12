import{_ as s,c as a,o as i,a7 as n}from"./chunks/framework.B9V0W_Mh.js";const b=JSON.parse('{"title":"标识值新增","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/v1/id-value-add.md","filePath":"sdk/v1/id-value-add.md","lastUpdated":1723458398000}'),e={name:"sdk/v1/id-value-add.md"},t=n(`<h1 id="标识值新增" tabindex="-1">标识值新增 <a class="header-anchor" href="#标识值新增" aria-label="Permalink to &quot;标识值新增&quot;">​</a></h1><ul><li><strong>方法功能</strong>：增加标识值</li><li><strong>方法描述</strong><ul><li>overwrite=true 创建标识，覆盖式更新，无论标识是否存在，原有标识属性全部替代为传入标识属性</li><li>overwrite=false 创建标识，如果标识存在则返回错误信息</li></ul></li></ul><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Adds new handle records. &lt;/br&gt; &lt;b&gt; Note: &lt;/b&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * &lt;li&gt;The administrative priveleges have to be valid for this method to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * perform without any exception&lt;/li&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> handle</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> The handle into which new values are to be added</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> values</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> The array of handle values to deposit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * overwrite default value is false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addHandleValues</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String handle, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">HandleValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] values) throws IDException;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * you could set the value of overwrite by yourself; true or false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addHandleValues</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String handle, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">HandleValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] values, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> overwrite) throws IDException;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><strong>方法参数</strong></li></ul><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>参数描述</th><th>示例</th></tr></thead><tbody><tr><td>handle</td><td>String</td><td>标识名称</td><td>88.888.3/20220121</td></tr><tr><td>values</td><td>HandleValue[]</td><td>标识属性值</td><td></td></tr><tr><td>overwrite</td><td>boolean</td><td>可根据使用方式选择</td><td>true / false</td></tr></tbody></table>`,6),l=[t];function p(r,d,h,k,o,c){return i(),a("div",null,l)}const g=s(e,[["render",p]]);export{b as __pageData,g as default};
