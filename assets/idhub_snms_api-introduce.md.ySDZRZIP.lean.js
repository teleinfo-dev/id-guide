import{_ as s,c as n,I as a,w as i,j as e,a as l,a7 as o,D as d,o as r}from"./chunks/framework.B9V0W_Mh.js";const c="/docs/assets/api-desc1.opSDREDM.png",_="/docs/assets/api-desc2.6uY9Yuxm.png",h="/docs/assets/img.CBZ9WqYR.png",B=JSON.parse('{"title":"IDHub兼容二级节点接口介绍","description":"","frontmatter":{},"headers":[],"relativePath":"idhub/snms/api-introduce.md","filePath":"idhub/snms/api-introduce.md","lastUpdated":1723458398000}'),u={name:"idhub/snms/api-introduce.md"},m=e("h1",{id:"idhub兼容二级节点接口介绍",tabindex:"-1"},[l("IDHub兼容二级节点接口介绍 "),e("a",{class:"header-anchor",href:"#idhub兼容二级节点接口介绍","aria-label":'Permalink to "IDHub兼容二级节点接口介绍"'},"​")],-1),p=e("h2",{id:"描述",tabindex:"-1"},[l("描述 "),e("a",{class:"header-anchor",href:"#描述","aria-label":'Permalink to "描述"'},"​")],-1),b=e("ul",null,[e("li",null,"若企业已使用企业节点社区版接口开发标识应用，现部署标准版企业节点，原社区版接口会继续开放，但不可使用新版本接口操作历史数据。推荐企业使用标准版接口重新对接标识应用，并操作数据；具体关系事例见下图：")],-1),f=e("img",{src:c,width:"650",height:"260"},null,-1),g=e("ul",null,[e("li",null,"若企业托管在二级，且已使用SNMS API 接口开发标识应用。现部署标准版企业节点，原已对接的标识应用可通过企业节点标准版的兼容接口进行对接，无需重新开发。历史存量数据迁移至新版企业节点后，若需使用企业节点标准版能力，兼容接口无法覆盖全部标准版功能，推荐企业使用企业节点标准版接口对接标识应用；具体关系事例见下图:")],-1),x=e("img",{src:_,width:"650",height:"260"},null,-1),P=o("",4),S=e("img",{src:h,width:"320",height:"800"},null,-1),k=e("h2",{id:"注意事项",tabindex:"-1"},[l("注意事项 "),e("a",{class:"header-anchor",href:"#注意事项","aria-label":'Permalink to "注意事项"'},"​")],-1),D=e("ul",null,[e("li",null,"SNMS兼容接口在操作元数据模版和标识时，需要注意元数据模版是否添加了企业节点元数据新特性；若是，该禁止使用该套接口操作数据。"),e("li",null,[l("V5版本接口相比较于V3版本接口，有以下功能变动 "),e("ol",null,[e("li",null,"新增数据模版编辑接口"),e("li",null,"数据模版新增/编辑接口模版属性字段添加启用/禁用状态"),e("li",null,"数据模版新增/编辑接口添加模版索引字段")])])],-1);function I(N,V,T,q,w,C){const t=d("center");return r(),n("div",null,[m,p,b,a(t,null,{default:i(()=>[f]),_:1}),g,a(t,null,{default:i(()=>[x]),_:1}),P,a(t,null,{default:i(()=>[S]),_:1}),k,D])}const $=s(u,[["render",I]]);export{B as __pageData,$ as default};
