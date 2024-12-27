import{_ as s,c as n,a5 as e,o as t}from"./chunks/framework.CgiMItuT.js";const m=JSON.parse('{"title":"简介","description":"","frontmatter":{},"headers":[],"relativePath":"dev-tools/saas/sdk/introduction.md","filePath":"dev-tools/saas/sdk/introduction.md","lastUpdated":1729043285000}'),l={name:"dev-tools/saas/sdk/introduction.md"};function i(p,a,o,r,d,c){return t(),n("div",null,a[0]||(a[0]=[e(`<h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>ID-SDK是一种专为应用开发者设计的软件开发工具包，主要用于实现用户身份认证与标识管理功能。通过集成此SDK，开发者可以轻松地在他们的应用中使用标识解析、标识注册、标识维护等功能服务。本指南旨在帮助开发者快速理解并集成ID-SDK到他们的项目中，确保过程顺利且高效。</p><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h2><p>id-sdk发布到maven仓库，应用在pom.xml文件中添加以下依赖。</p><div class="language-pom vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">pom</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;cn.teleinfo&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;id-sdk-impl&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;0.0.1&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="调用流程" tabindex="-1">调用流程 <a class="header-anchor" href="#调用流程" aria-label="Permalink to &quot;调用流程&quot;">​</a></h2><ul><li><p>调用身份相关接口，获取token</p></li><li><p>将token作为参数，进行标识的相关操作</p></li><li><p>模板数据注册，主要实现中英文替换，定义标识数据模型</p></li><li><p>标识注册必须使用数据模板，并根据数据模型进行标识数据录入</p></li></ul>`,7)]))}const h=s(l,[["render",i]]);export{m as __pageData,h as default};
