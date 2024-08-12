import{_ as s,c as i,o as a,a7 as n}from"./chunks/framework.B9V0W_Mh.js";const c=JSON.parse('{"title":"文件处理","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/v2/basic/file.md","filePath":"sdk/v2/basic/file.md","lastUpdated":1723458398000}'),t={name:"sdk/v2/basic/file.md"},l=n(`<h1 id="文件处理" tabindex="-1">文件处理 <a class="header-anchor" href="#文件处理" aria-label="Permalink to &quot;文件处理&quot;">​</a></h1><h2 id="上传文件" tabindex="-1">上传文件 <a class="header-anchor" href="#上传文件" aria-label="Permalink to &quot;上传文件&quot;">​</a></h2><p>通过此方法，用户可进行文件上传操作，该操作用于创建实例时，存在“文件型”、“图片型”、“视频型”、“音频型”元素，需进行上传，可进行单个/批量上传。</p><h3 id="方法调用" tabindex="-1">方法调用 <a class="header-anchor" href="#方法调用" aria-label="Permalink to &quot;方法调用&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DoipReturn </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">upload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;handleName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">required</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) String handleName,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;metaHandle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) String metaHandle,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fileField&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) String fileField,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) MultipartFile file</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>注意</code></p><ul><li>单个文件上传，不能超过50M；上传文件数量取决于元数据模板中实体元素设定，最大设定不超过50个。</li><li>可上传格式如下： <blockquote><pre><code>文件型：doc;docx;xps;dot（word）、xls;xlsx;xlsb;xlsm;csv（excel）、pdf、zip；rar（压缩包）
音频型：wav;mp3;mp4
视频型：avi;mov;wmv;flv;mp4
图片型：jpg;jpe;png;jpeg;gif;tif;tiff;jxr;bmp
</code></pre></blockquote></li></ul><h3 id="方法参数" tabindex="-1">方法参数 <a class="header-anchor" href="#方法参数" aria-label="Permalink to &quot;方法参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th><strong>参数</strong></th><th><strong>类型</strong></th><th><strong>是否必填</strong></th><th><strong>最大长度</strong></th><th><strong>备注</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>handleName</td><td>String</td><td>否</td><td>-</td><td>标识</td><td>88.608.6688/handle_1</td></tr><tr><td>metaHandle</td><td>String</td><td>是</td><td>-</td><td>元数据</td><td>88.608.6688/Meta_test1</td></tr><tr><td>fileField</td><td>String</td><td>是</td><td>-</td><td>文件属性</td><td>file</td></tr><tr><td>file</td><td>MultipartFile</td><td>是</td><td>-</td><td>上传的文件</td><td></td></tr></tbody></table><h3 id="返回参数" tabindex="-1">返回参数 <a class="header-anchor" href="#返回参数" aria-label="Permalink to &quot;返回参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th><strong>参数</strong></th><th><strong>类型</strong></th><th><strong>最大长度</strong></th><th><strong>备注</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>code</td><td>Integer</td><td>-</td><td>状态码(详见状态码说明）</td><td>1</td></tr><tr><td>message</td><td>String</td><td>-</td><td>状态码描述</td><td>成功</td></tr><tr><td>data</td><td>Object</td><td>-</td><td>返回数据</td><td></td></tr><tr><td>data.id</td><td>String</td><td>-</td><td>文件id</td><td>664da3c5802cf826c367b8c4</td></tr><tr><td>data.filePath</td><td>String</td><td>-</td><td>文件路径</td><td>173b5de7-1454-4489-b921-dd6f2fd6d938.md</td></tr></tbody></table><h3 id="请求示例" tabindex="-1">请求示例 <a class="header-anchor" href="#请求示例" aria-label="Permalink to &quot;请求示例&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 上传文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Test</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> uploadApiTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() throws IOException {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //获取token url:服务域名 handle:应用标识身份 privateKeyPem：应用标识身份对应的私钥</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    OpenApiClient openApiClient </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OpenApiClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url, handle, privateKeyPem);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //读取文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    File file </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> File</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/Users/dzh/Downloads/chrome/8fb85f17756d46.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //将文件转换成流对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    FileInputStream fileInputStream </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FileInputStream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MultipartFile multipartFile </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MockMultipartFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), file.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/octet-stream&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fileInputStream);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(multipartFile.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //调用上传文件方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    DoipReturn doipReturn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openApiClient.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getFileApi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">upload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;88.608.5288/META_07_01&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, multipartFile);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;上传文件返回结果：{}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, JSONUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toJsonStr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(doipReturn));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="响应示例" tabindex="-1">响应示例 <a class="header-anchor" href="#响应示例" aria-label="Permalink to &quot;响应示例&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;成功&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;664da3c5802cf826c367b8c4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;filePath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;173b5de7-1454-4489-b921-dd6f2fd6d938.md&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="文件下载" tabindex="-1">文件下载 <a class="header-anchor" href="#文件下载" aria-label="Permalink to &quot;文件下载&quot;">​</a></h2><p>通过此接口，用户可进行文件上传操作，该操作用于查询或实例时，存在“文件型”、“图片型”、“视频型”、“音频型”元素信息，提供用户进行下载。</p><h3 id="方法调用-1" tabindex="-1">方法调用 <a class="header-anchor" href="#方法调用-1" aria-label="Permalink to &quot;方法调用&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Response </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">download</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;filePath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) String filePath);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>注意</code></p><ul><li>该接口下载的文件以流的形式返回，需要通过代码处理流来接收。</li></ul><h3 id="方法参数-1" tabindex="-1">方法参数 <a class="header-anchor" href="#方法参数-1" aria-label="Permalink to &quot;方法参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th><strong>参数</strong></th><th><strong>类型</strong></th><th><strong>是否必填</strong></th><th><strong>最大长度</strong></th><th><strong>备注</strong></th><th><strong>示例值</strong></th></tr></thead><tbody><tr><td>filePath</td><td>String</td><td>是</td><td>-</td><td>文件路径</td><td>173b5de7-1454-4489-b921-dd6f2fd6d938.md</td></tr></tbody></table><h3 id="返回参数-1" tabindex="-1">返回参数 <a class="header-anchor" href="#返回参数-1" aria-label="Permalink to &quot;返回参数&quot;">​</a></h3><p>该接口下载的文件以流的形式返回</p><h3 id="请求示例-1" tabindex="-1">请求示例 <a class="header-anchor" href="#请求示例-1" aria-label="Permalink to &quot;请求示例&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 下载文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Test</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> downloadApiTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    OpenApiClient openApiClient </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OpenApiClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url, handle, privateKeyPem);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Response download </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openApiClient.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getFileApi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">download</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;S3_f99d537d-ed6e-439b-ad2a-0b2824bf53c6.p1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;下载文件返回结果：{}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, download);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,27),e=[l];function p(h,k,r,d,E,o){return a(),i("div",null,e)}const u=s(t,[["render",p]]);export{c as __pageData,u as default};
