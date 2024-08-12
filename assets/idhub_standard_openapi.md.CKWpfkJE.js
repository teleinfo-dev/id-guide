import{_ as a,c as e,o as t,a7 as i}from"./chunks/framework.B9V0W_Mh.js";const l="/docs/assets/call-flow.0m4t5yuQ.png",b=JSON.parse('{"title":"IDHub标准接口介绍","description":"","frontmatter":{},"headers":[],"relativePath":"idhub/standard/openapi.md","filePath":"idhub/standard/openapi.md","lastUpdated":1723458398000}'),o={name:"idhub/standard/openapi.md"},r=i('<h1 id="idhub标准接口介绍" tabindex="-1">IDHub标准接口介绍 <a class="header-anchor" href="#idhub标准接口介绍" aria-label="Permalink to &quot;IDHub标准接口介绍&quot;">​</a></h1><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><ol><li>前往二级节点标识业务管理系统或在微信小程序企数通中注册用户，并提交资质和企业前缀的申请；</li><li>微信小程序搜索“企数通”，在企数通中进行用户注册，提交资质和前缀申请；</li><li>等待二级节点管理员审核资质和企业前缀通过；</li><li>部署企业节点系统，创建管理员用户；</li><li>登录系统，创建应用管理员，向所要对接的标识应用创建身份，生成密钥信息；</li></ol><h2 id="调用流程" tabindex="-1">调用流程 <a class="header-anchor" href="#调用流程" aria-label="Permalink to &quot;调用流程&quot;">​</a></h2><ol><li>下载应用身份公私钥，并上传至对应应用，用于后续身份认证；</li><li>提前获取准备企业节点系统服务地址（域名或IP端口，例如：<a href="http://127.0.0.1:3000" target="_blank" rel="noreferrer">http://127.0.0.1:3000</a>），作为以下接口服务调用地址。</li><li>调用身份相关接口，获取Token；</li><li>将Token作为参数，进行元数据和标识的相关操作。</li></ol><p><img src="'+l+'" alt="img.png"></p>',6),n=[r];function s(d,_,c,h,p,u){return t(),e("div",null,n)}const f=a(o,[["render",s]]);export{b as __pageData,f as default};