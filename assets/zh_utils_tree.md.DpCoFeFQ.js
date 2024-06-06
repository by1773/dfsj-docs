import{av as i,m as s,p as l,q as a,T as n,S as e,aR as t}from"./chunks/framework.C1aPebBI.js";const q=JSON.parse('{"title":"树与数组","description":"","frontmatter":{},"headers":[],"relativePath":"zh/utils/tree.md","filePath":"zh/utils/tree.md"}'),r={name:"zh/utils/tree.md"},h=t(`<h1 id="树与数组" tabindex="-1">树与数组 <a class="header-anchor" href="#树与数组" aria-label="Permalink to &quot;树与数组&quot;">​</a></h1><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span></span>
<span class="line"><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">TreeHelperConfig</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    children</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    pid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> DEFAULT_CONFIG</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">TreeHelperConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">id</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    children</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">children</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    pid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">pid</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="listtotree" tabindex="-1">listToTree <a class="header-anchor" href="#listtotree" aria-label="Permalink to &quot;listToTree&quot;">​</a></h2><blockquote><p>列表转树</p></blockquote><h3 id="params" tabindex="-1">params <a class="header-anchor" href="#params" aria-label="Permalink to &quot;params&quot;">​</a></h3><ul><li><code>{any} list</code>：数组</li><li><code>{Partial&lt;TreeHelperConfig&gt;} config</code>：配置</li></ul><h2 id="treetolist" tabindex="-1">treeToList <a class="header-anchor" href="#treetolist" aria-label="Permalink to &quot;treeToList&quot;">​</a></h2><blockquote><p>树列表</p></blockquote><h3 id="params-1" tabindex="-1">params <a class="header-anchor" href="#params-1" aria-label="Permalink to &quot;params&quot;">​</a></h3><ul><li><code>{any} tree</code>：树</li><li><code>{Partial&lt;TreeHelperConfig&gt;} config</code>：配置</li></ul><h2 id="findnode" tabindex="-1">findNode <a class="header-anchor" href="#findnode" aria-label="Permalink to &quot;findNode&quot;">​</a></h2><blockquote><p>查找满足条件的节点(找的一个就返回)</p></blockquote><h3 id="params-2" tabindex="-1">params <a class="header-anchor" href="#params-2" aria-label="Permalink to &quot;params&quot;">​</a></h3><ul><li><code>{any} tree</code>：树</li><li><code>{Fn} func</code>：满足的条件判断函数</li><li><code>{Partial&lt;TreeHelperConfig&gt;} config</code>：配置</li></ul><h2 id="findnodeall" tabindex="-1">findNodeAll <a class="header-anchor" href="#findnodeall" aria-label="Permalink to &quot;findNodeAll&quot;">​</a></h2><blockquote><p>查找满足条件的节点(返回所有的)</p></blockquote><h3 id="params-3" tabindex="-1">params <a class="header-anchor" href="#params-3" aria-label="Permalink to &quot;params&quot;">​</a></h3><ul><li><code>{any} tree</code>：树</li><li><code>{Fn} func</code>：满足的条件判断函数</li><li><code>{Partial&lt;TreeHelperConfig&gt;} config</code>：配置</li></ul><h2 id="findpath" tabindex="-1">findPath <a class="header-anchor" href="#findpath" aria-label="Permalink to &quot;findPath&quot;">​</a></h2><blockquote><p>查找满足条件的节点 全路径(找的一个就返回)</p></blockquote><h3 id="params-4" tabindex="-1">params <a class="header-anchor" href="#params-4" aria-label="Permalink to &quot;params&quot;">​</a></h3><ul><li><code>{any} tree</code>：树</li><li><code>{Fn} func</code>：满足的条件判断函数</li><li><code>{Partial&lt;TreeHelperConfig&gt;} config</code>：配置</li></ul><h2 id="findpathall" tabindex="-1">findPathAll <a class="header-anchor" href="#findpathall" aria-label="Permalink to &quot;findPathAll&quot;">​</a></h2><blockquote><p>查找满足条件的节点 全路径(返回所有的)</p></blockquote><h3 id="params-5" tabindex="-1">params <a class="header-anchor" href="#params-5" aria-label="Permalink to &quot;params&quot;">​</a></h3><ul><li><code>{any} tree</code>：树</li><li><code>{Fn} func</code>：满足的条件判断函数</li><li><code>{Partial&lt;TreeHelperConfig&gt;} config</code>：配置</li></ul><h2 id="filter" tabindex="-1">filter <a class="header-anchor" href="#filter" aria-label="Permalink to &quot;filter&quot;">​</a></h2><blockquote><p>过滤掉满足条件的数据</p></blockquote><h3 id="params-6" tabindex="-1">params <a class="header-anchor" href="#params-6" aria-label="Permalink to &quot;params&quot;">​</a></h3><ul><li><code>{any} tree</code>：树</li><li><code>{Fn} func</code>：满足的条件判断函数</li><li><code>{Partial&lt;TreeHelperConfig&gt;} config</code>：配置</li></ul><h2 id="foreach" tabindex="-1">forEach <a class="header-anchor" href="#foreach" aria-label="Permalink to &quot;forEach&quot;">​</a></h2><blockquote><p>遍历 func 返回true就终止遍历，避免大量节点场景下无意义循环，引起浏览器卡顿</p></blockquote><h3 id="params-7" tabindex="-1">params <a class="header-anchor" href="#params-7" aria-label="Permalink to &quot;params&quot;">​</a></h3><ul><li><code>{T[]} tree</code>：树</li><li><code>{Fn} func</code>：满足的条件判断函数</li><li><code>{Partial&lt;TreeHelperConfig&gt;} config</code>：配置</li></ul><h2 id="treemap" tabindex="-1">treeMap <a class="header-anchor" href="#treemap" aria-label="Permalink to &quot;treeMap&quot;">​</a></h2><blockquote><p>提取树指定结构</p></blockquote><h3 id="params-8" tabindex="-1">params <a class="header-anchor" href="#params-8" aria-label="Permalink to &quot;params&quot;">​</a></h3><ul><li><code>{[]} treeData</code>：树</li><li><code>{ children?: string; conversion: Fn } opt</code> ：配置</li></ul><h2 id="treemapeach" tabindex="-1">treeMapEach <a class="header-anchor" href="#treemapeach" aria-label="Permalink to &quot;treeMapEach&quot;">​</a></h2><blockquote><p>提取树指定结构</p></blockquote><h3 id="params-9" tabindex="-1">params <a class="header-anchor" href="#params-9" aria-label="Permalink to &quot;params&quot;">​</a></h3><ul><li><code>{[]} data</code>：树</li><li><code>{ children?: string; conversion: Fn } opt</code> ：配置</li></ul><h2 id="eachtree" tabindex="-1">eachTree <a class="header-anchor" href="#eachtree" aria-label="Permalink to &quot;eachTree&quot;">​</a></h2><blockquote><p>递归遍历树结构</p></blockquote><h3 id="params-10" tabindex="-1">params <a class="header-anchor" href="#params-10" aria-label="Permalink to &quot;params&quot;">​</a></h3>`,45),o=a("li",null,[a("code",null,"{ any[]} treeDatas"),e("：树")],-1),p=a("li",null,[a("code",null,"{Fn} callBack"),e("：回调")],-1);function d(c,k,u,m,b,f){return s(),l("div",null,[h,a("ul",null,[o,p,a("li",null,[a("code",null,n()+" parentNode",1),e("：父节点")])])])}const y=i(r,[["render",d]]);export{q as __pageData,y as default};