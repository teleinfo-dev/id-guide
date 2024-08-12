import{_ as s,c as i,o as a,a7 as n}from"./chunks/framework.B9V0W_Mh.js";const l="/docs/assets/hl-trust_cert_558961ed8de354904c8093e5839668ba0a61fc32e919c83a606b0f73497dc771.CLKxiSO2.png",h="/docs/assets/hl-trust_payload_7b18c592e8556154809572840e8990866daeb28bc7ce44987fb621caffdb78ab.BQ33oP8a.png",p="/docs/assets/hl-trust_cert_chain_24a1d74bbfcfe80aec4d06336165757fdab7fa19a796207df26da858d9433f3f.C3kDCJBO.png",t="/docs/assets/hl-trust_permission_777db9e47041e3125f3fcdc18fc4f97025a8cba6eaa8332009234003c6708ebf.BJuBro4F.png",e="/docs/assets/hl-trust_signature_ff8622672c6f53d5db969b5aa236440dee8c6dab5a92090e22aedf7c874629de.TLgR5Q16.png",k="/docs/assets/hl-trust_process_1e544048375255dc2d870f8a123ccc93d513f85acb9581505defa0f8dfbc64cf.qgjvtwpx.png",m=JSON.parse('{"title":"可信解析","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/v1/hl-trust.md","filePath":"sdk/v1/hl-trust.md","lastUpdated":1723458398000}'),r={name:"sdk/v1/hl-trust.md"},E=n('<h1 id="可信解析" tabindex="-1">可信解析 <a class="header-anchor" href="#可信解析" aria-label="Permalink to &quot;可信解析&quot;">​</a></h1><h2 id="hs-cert" tabindex="-1">HS_CERT <a class="header-anchor" href="#hs-cert" aria-label="Permalink to &quot;HS_CERT&quot;">​</a></h2><p>证书以标识用户身份为基础的，与用户身份为同一个标识，也是一个特殊的标识值。他的索引通常为 400，类型为&quot;HS_CERT&quot;,数据是一个 JWT。如下图所示，标识证书：1，注册 type 为 HS_CERT 的标识值来保存证书，证书标识值与身份标识值在同一个标识中。2，证书的格式为 JWT，以字符串形式保存在标识值当中。3，JWT 声明中的签发人、主体等信息使用标识身份来管理，JWT 的签名使用签发人的密钥采用 RS256 算法计算。</p><p><img src="'+l+'" alt="图 1"></p><p>证书中的负载是一个 JSON 类型的数据，包含了证书的声明。证书中的声明约定为以下无素，并预留扩展字段以方便添加自定义属性。 •perms：权限 •publicKey：用户公钥 •iss (issuer)：签发人 •exp (expiration time)：过期时间 •sub (subject)：主体 •nbf (Not Before)：生效时间 •iat (Issued At)：签发时间 •org（ organization ）：组织 •sn（Subject Name）：主体名称 •exts（ Extensions ）:扩展 如下图所示，标识用户 301：88.111.1/test 的证书声名信息，它具有所有权限，是标识用户 301：88.111.1/0.0 颁发的，组织为北京泰尔英福科技有限公司，主体名称为泰尔英福。证书合法性可以通过验证生效时间，过期时间，证书的签名信息进行验证。</p><p><img src="'+h+'" alt="图 2"></p><h2 id="证书链" tabindex="-1">证书链 <a class="header-anchor" href="#证书链" aria-label="Permalink to &quot;证书链&quot;">​</a></h2><p>在工业互联网标识解析体系中，一切皆标识，信认仓库也是一个约定的标识，如约定为 88.111.1/0.0，在这个约定标识内的标识用户与根证书对整个体系可信。如下图所示，根证书与可信： •根证书是自签名的（self-signed）：颁发者和主体相同。 •根证书的标识与初始化证书是通过标识客户端或者 sdk 分发的，客户端的版本发布也应该通过证书验证。 •根证书签发中间证书，中间证书签发普通证书，形成一个证书链。通过标识解析与证书的引用关系可以构建证书链。 为了防止定书过长，证书链的长度可以设置限制为 N，N 的取值为 1,2,3，...。</p><p><img src="'+p+'" alt="图 3"></p><h2 id="证书权限" tabindex="-1">证书权限 <a class="header-anchor" href="#证书权限" aria-label="Permalink to &quot;证书权限&quot;">​</a></h2><p>证书颁发机构为根证书或者受信证书颁发的证书，这个证书具有颁发其它证书的权限。证书声明中 perms 是一个数组，可以包含多条数据，一条数据中的 perm,可以有 4 个级别 1、everything 所有权限 2、derivedPrefixes 派生前缀 3、handlesUnderThisPrefix 前缀下的标识 4、thisHandle 指定标识 除 perm 为 everything 不需要指定 handle 字段外，其它情况都需要指定。ca 标志是否为证书颁发机构，如不指定默认为 true，示例如下图所示：</p><p><img src="'+t+'" alt="图 4"></p><h2 id="数据签名与认证" tabindex="-1">数据签名与认证 <a class="header-anchor" href="#数据签名与认证" aria-label="Permalink to &quot;数据签名与认证&quot;">​</a></h2><p>在标识解析体系中，标识数据指的是标识值的数据。基于证书的信认体系建立以后，使用证书来对标识数据进行签名。标识签名是一种特殊的标识值，索引通常从 400 开始，类型为 HS_SIGNATURE，数据为 JWT。JWT 使用 RS256 算法进行签名，签名密钥为标识用户的私钥。JWT 的负载除包含颁发者，当前主体以及时间等相关信息以外，还包括每个需要签名的标识值生成哈希值，生成如图所示 JSON。 先对每个索引的数据计算哈希值，再将这些索引与哈希值组合为一个对象，最后把多个索引的对象组成一个数据，外层记录使用的哈希算法，得到一个 JSON 格式的标识值的签名负载。采用这种结构，当标识值因为权限设置无法全部响应时，不影响其它标识值的签名验证。</p><p><img src="'+e+'" alt="图 5"></p><p>如下图所示，可信签名的验证过程：对于有签名数据的标识，客户端或者 SDK 解析到标识以后，可以对可信签名进行验证。签名验证主要验证以下内容： 1、标识值的哈希是否匹配； 2、是不是在有效期限内； 3、JWT 签名是否合法； 4、构建的证书链上的证书是不是合法，在有效期内，JWT 签名正确； 5、根证书标识是否符合约定。 如果以上条件都满足，就认为相应的标识值为可信的。</p><p><img src="'+k+`" alt="图 6"></p><h2 id="签名与验证" tabindex="-1">签名与验证 <a class="header-anchor" href="#签名与验证" aria-label="Permalink to &quot;签名与验证&quot;">​</a></h2><h3 id="签名过程" tabindex="-1">签名过程 <a class="header-anchor" href="#签名过程" aria-label="Permalink to &quot;签名过程&quot;">​</a></h3><p>标识的签名过程与标识的注册过程相同,除了需要原有的标识数据外,添加了一个类型为 HS_SIGNATURE 的标识值,通常 index 从 400 开始.</p><p><strong>前提条件</strong>：拥有证书，有权限写入标识 <strong>代码示例</strong></p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String privKeyPem </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;-----BEGIN PRIVATE KEY-----</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCpCFImZ398hp8+mjjSighZiaUN</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;PCEUg/nRAJFEJAtR6ccXZ/lVjQ1JKfGZtRBeRDum88yEftoFUvoGmyh82TB2xqmnlnCHBc3HuPpS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;dBEY9m+kIrcPFyevqttyheNsJKTEM8N3H+rA1JYhD/eFMk/0DcRn2vgIgSgm3Lm3IZYcw9ghqqsu</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;29ltpitFuaWk4YHsAhZEssgjxtEU1xJnao4aEdDQebxrE8qVW9YEjNWK6ce7tnoon4R/xFVgQm+C</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;Y8cfz1vCMzrhDTxw3rZpfPHXfZHJlopJprxshjJ1P5WolsdPrLWOrZMQteAwaef7D1pQwmADN37o</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;NnchJEPScvdTAgMBAAECggEAJNK4Or+PSUx2gofMWylQ2lifCTwRJMv/byWFf+euQ6D/Cz1OVvHM</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;dCTcChUkxLRunlc8NZ0A1+oUp73DWzdhVG7A5M5kIzYDdz/34GCCnQKKnaImaPYtYhqBhfhe698r</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;ucZhDaF5XZqyPe+hh3XHby5UnB9aq1efrJ+nIZsCfa9dWeZnsFIf1THyuPn6H+yfv1GH3BWtvnpN</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;92uOBSgnrpVnJJ7WZDHmytjIj/CQhb5pKyXImaOOtOAvQHc8ny+J1jTQLdWinUGm1Zsrzc9IN1zA</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;jiOXW+J/JBVpRpMWtAkeCeT2aU53RF83gqFC4riLaaVxYEcyKWVs5JQ3IyLq8QKBgQDmXtX4Ziq5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;9IIzPgi8nbRlZ7HUawyX3YulBNf6G11r1wYlmROx9HxCbgGT36+mGM7lD6hRborArhGQ6UCX7puf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;6X0cavcgZMmuLqUVuRwF+HMA1EONvpoNgHR2+E9RsmCI+kTqy8BktQkhwKUdL5/yh4KdQLlZneUU</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;OzXAchkXawKBgQC71oX9Kpkg631yGu+z3VR1L7XZyTJkxfhjq9fDtD6uDmGCVVyOISnm/rXzKcZZ</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;2Mv0fEUs/KNPRzg5ocODOPoJYTNPRQ5fG+qLfiHcoegjWx+56h1dM0e6um0xD7uLJTZLw4BaGLXV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;/1Jfw5T/OZzylgp4OdAZn+RKEFGIbTThuQKBgHuJ9gL8fwMz3TKvnK3RgLE0t4erVJiIRV/cRhoo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;3KN9Lx2whoBTFOPm7E+pkB9phGIQUHpC5oPHlUH55BrV6X0LEH3R2u7zPbh76SnKF/4Xq0yRiByW</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;TzTYYxx9ssOj/eLXG2gyld0rvFbuYV1Scdr00pWT5RHq+7MqwXuPdGc7AoGAI93oo9jYeIK+52Th</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;VHT0xZOgo79ZUgjDTzTm9EWcmlvAnsRx8em/OI52a8IUT9+nwj1gcCClhmPRBqAu1wWwKM5Yn9BN</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;2DdaZ9xj1t9LlkS2ICfmB3/dOHiUlQOuCfnHDlx8S7fgMMaaEhMkhj+YCnI/+YkAhYQUcVgAWY6Q</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;xHECgYEAx2yxqhNRrZIqRQvLDWfHu/tvlaDcISBX/HuWE//sqlUG05fFY7DI3r1Va/S5DKf6mueA</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;ojq/oxjQrsFl3gfOwv9ttjYqfd7vSpojyNbZDdHYtzOkdyrOvpsWlYYn+4ef/qdCHpthsyx4Tv8H</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;lg/0xZ8oZVr5aJlFPR7uJAQrHdA=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;-----END PRIVATE KEY-----&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> signatureInitTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() throws Exception {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        PrivateKey privateKey </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KeyConverter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromPkcs8Pem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(privKeyPem);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String adminUserHdl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;88.111.1/admin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        AuthenticationInfo authenticationInfo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PublicKeyAuthenticationInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Util.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encodeString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(adminUserHdl), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, privateKey);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ValueHelper valueHelper </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ValueHelper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        IDClient idClient </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GlobalIdClientFactory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;88.802.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, authenticationInfo);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;88.802.1/test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        List&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">HandleValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; valueList </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ArrayList&lt;&gt;();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HandleValue handleValue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HandleValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;www.test.cn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        valueList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(handleValue);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        handleValue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HandleValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;EMAIL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test@teleinfo.cn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        valueList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(handleValue);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HandleSigner handleSigner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HandleSigner.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        PrivateKey entPrivateKey </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KeyConverter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromPkcs8Pem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(entPrivKeyPem);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        LocalDateTime notBefore </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LocalDateTime.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">minusYears</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        LocalDateTime expr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LocalDateTime.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plusYears</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        JsonWebSignature jsonWebSignature </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> handleSigner.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">signHandleValues</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(handle, valueList, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ValueReference</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;88.802.1/88.802.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">301</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), entPrivateKey, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, notBefore.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toEpochSecond</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ValueHelper.zoneOffsetBj), expr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toEpochSecond</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ValueHelper.zoneOffsetBj));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> jsonWebSignature.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">serialize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HandleValue sigValue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HandleValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Common.STR_HS_SIGNATURE_TYPE, data);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        valueList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sigValue);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        idClient.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createHandle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(handle, valueHelper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listToArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(valueList));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        idClient.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolveHandle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(handle);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h3 id="验证签名过程" tabindex="-1">验证签名过程 <a class="header-anchor" href="#验证签名过程" aria-label="Permalink to &quot;验证签名过程&quot;">​</a></h3><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> verifyTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() throws IDException {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        IDResolver idResolver </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GlobalIdClientFactory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getIdResolver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;88.802.1/test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        HandleValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] handleValues </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> idResolver.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolveHandle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(handle);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HandleValue signatureValue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> handleValues.length; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (handleValues[i].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getIndex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                signatureValue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> handleValues[i];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        TrustResolveManager trustResolveManager </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> TrustResolveManager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ChainVerificationReport report </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> trustResolveManager.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">validateSignatureValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(handle, handleValues, signatureValue);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String reportJson </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GsonUtility.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPrettyGson</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toJson</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(report);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(reportJson);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,24),d=[E];function g(F,y,c,u,o,b){return a(),i("div",null,d)}const B=s(r,[["render",g]]);export{m as __pageData,B as default};