import{_ as i,o as e,c as a,aR as s}from"./chunks/framework.MvfB4Ynr.js";const m=JSON.parse('{"title":"标绘要素 🌎","description":"","frontmatter":{},"headers":[],"relativePath":"zh/cesium/overlay-plot.md","filePath":"zh/cesium/overlay-plot.md"}'),l={name:"zh/cesium/overlay-plot.md"},t=s('<h1 id="标绘要素-🌎" tabindex="-1">标绘要素 🌎 <a class="header-anchor" href="#标绘要素-🌎" aria-label="Permalink to &quot;标绘要素 🌎&quot;">​</a></h1><h2 id="eccesium-attackarrow" tabindex="-1">ECCesium.AttackArrow <a class="header-anchor" href="#eccesium-attackarrow" aria-label="Permalink to &quot;ECCesium.AttackArrow&quot;">​</a></h2><blockquote><p>攻击箭头要素，继承于<a href="./overlay-vector.html#ECCesium-overlay">Overlay</a></p></blockquote><h3 id="example" tabindex="-1">example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;example&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> attackArrow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ECCesium</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">AttackArrow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-90.0,32.0;-94.0,36.0;-94.0,38.0</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="creation" tabindex="-1">creation <a class="header-anchor" href="#creation" aria-label="Permalink to &quot;creation&quot;">​</a></h3><ul><li><p><strong><em>constructor(positions)</em></strong></p><p>构造函数</p><ul><li>参数 <ul><li><code>{String|Array&lt;Position|Number|String|Object&gt;} positions</code>：坐标串</li></ul></li><li>返回值 <code>attackArrow</code></li></ul></li></ul><h3 id="properties" tabindex="-1">properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;properties&quot;">​</a></h3><ul><li><code>{Array&lt;Position&gt;} positions</code>：坐标串</li></ul><h3 id="methods" tabindex="-1">methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;methods&quot;">​</a></h3><ul><li><p><strong><em>setStyle(style)</em></strong></p><p>设置样式</p><ul><li>参数 <ul><li><code>{Object} style</code>：样式，详情参考：<a href="#ECCesium-polygon">Polygon</a></li></ul></li><li>返回值 <code>this</code></li></ul></li></ul><h2 id="eccesium-doublearrow" tabindex="-1">ECCesium.DoubleArrow <a class="header-anchor" href="#eccesium-doublearrow" aria-label="Permalink to &quot;ECCesium.DoubleArrow&quot;">​</a></h2><blockquote><p>双箭头要素，继承于<a href="./overlay-vector.html#ECCesium-overlay">Overlay</a></p></blockquote><h3 id="example-1" tabindex="-1">example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;example&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> doubleArrow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ECCesium</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">DoubleArrow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-90.0,32.0;-94.0,36.0;-94.0,38.0</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="creation-1" tabindex="-1">creation <a class="header-anchor" href="#creation-1" aria-label="Permalink to &quot;creation&quot;">​</a></h3><ul><li><p><strong><em>constructor(positions)</em></strong></p><p>构造函数</p><ul><li>参数 <ul><li><code>{String|Array&lt;Position|Number|String|Object&gt;} positions</code>：坐标串</li></ul></li><li>返回值 <code>doubleArrow</code></li></ul></li></ul><h3 id="properties-1" tabindex="-1">properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;properties&quot;">​</a></h3><ul><li><code>{Array&lt;Position&gt;} positions</code>：坐标串</li></ul><h3 id="methods-1" tabindex="-1">methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;methods&quot;">​</a></h3><ul><li><p><strong><em>setStyle(style)</em></strong></p><p>设置样式</p><ul><li>参数 <ul><li><code>{Object} style</code>：样式，详情参考：<a href="#ECCesium-polygon">Polygon</a></li></ul></li><li>返回值 <code>this</code></li></ul></li></ul><h2 id="eccesium-finearrow" tabindex="-1">ECCesium.FineArrow <a class="header-anchor" href="#eccesium-finearrow" aria-label="Permalink to &quot;ECCesium.FineArrow&quot;">​</a></h2><blockquote><p>直箭头要素，继承于<a href="./overlay-vector.html#ECCesium-overlay">Overlay</a></p></blockquote><h3 id="example-2" tabindex="-1">example <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;example&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> fineArrow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ECCesium</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">FineArrow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-90.0,32.0;-94.0,36.0</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="creation-2" tabindex="-1">creation <a class="header-anchor" href="#creation-2" aria-label="Permalink to &quot;creation&quot;">​</a></h3><ul><li><p><strong><em>constructor(positions)</em></strong></p><p>构造函数</p><ul><li>参数 <ul><li><code>{String|Array&lt;Position|Number|String|Object&gt;} positions</code>：坐标串</li></ul></li><li>返回值 <code>fineArrow</code></li></ul></li></ul><h3 id="properties-2" tabindex="-1">properties <a class="header-anchor" href="#properties-2" aria-label="Permalink to &quot;properties&quot;">​</a></h3><ul><li><code>{Array&lt;Position&gt;} positions</code>：坐标串</li></ul><h3 id="methods-2" tabindex="-1">methods <a class="header-anchor" href="#methods-2" aria-label="Permalink to &quot;methods&quot;">​</a></h3><ul><li><p><strong><em>setStyle(style)</em></strong></p><p>设置样式</p><ul><li>参数 <ul><li><code>{Object} style</code>：样式，详情参考：<a href="#ECCesium-polygon">Polygon</a></li></ul></li><li>返回值 <code>this</code></li></ul></li></ul><h2 id="eccesium-gatheringplace" tabindex="-1">ECCesium.GatheringPlace <a class="header-anchor" href="#eccesium-gatheringplace" aria-label="Permalink to &quot;ECCesium.GatheringPlace&quot;">​</a></h2><blockquote><p>聚集地要素，继承于<a href="./overlay-vector.html#ECCesium-overlay">Overlay</a></p></blockquote><h3 id="example-3" tabindex="-1">example <a class="header-anchor" href="#example-3" aria-label="Permalink to &quot;example&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> gatheringPlace</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ECCesium</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">GatheringPlace</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-90.0,32.0;-94.0,36.0</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="creation-3" tabindex="-1">creation <a class="header-anchor" href="#creation-3" aria-label="Permalink to &quot;creation&quot;">​</a></h3><ul><li><p><strong><em>constructor(positions)</em></strong></p><p>构造函数</p><ul><li>参数 <ul><li><code>{String|Array&lt;Position|Number|String|Object&gt;} positions</code>：坐标串</li></ul></li><li>返回值 <code>gatheringPlace</code></li></ul></li></ul><h3 id="properties-3" tabindex="-1">properties <a class="header-anchor" href="#properties-3" aria-label="Permalink to &quot;properties&quot;">​</a></h3><ul><li><code>{Array&lt;Position&gt;} positions</code>：坐标串</li></ul><h3 id="methods-3" tabindex="-1">methods <a class="header-anchor" href="#methods-3" aria-label="Permalink to &quot;methods&quot;">​</a></h3><ul><li><p><strong><em>setStyle(style)</em></strong></p><p>设置样式</p><ul><li>参数 <ul><li><code>{Object} style</code>：样式，详情参考：<a href="#ECCesium-polygon">Polygon</a></li></ul></li><li>返回值 <code>this</code></li></ul></li></ul><h2 id="eccesium-tailedattackarrow" tabindex="-1">ECCesium.TailedAttackArrow <a class="header-anchor" href="#eccesium-tailedattackarrow" aria-label="Permalink to &quot;ECCesium.TailedAttackArrow&quot;">​</a></h2><blockquote><p>聚集地，继承于<a href="./overlay-vector.html#ECCesium-overlay">Overlay</a></p></blockquote><h3 id="example-4" tabindex="-1">example <a class="header-anchor" href="#example-4" aria-label="Permalink to &quot;example&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> tailedAttackArrow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ECCesium</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">TailedAttackArrow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-90.0,32.0;-94.0,36.0</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="creation-4" tabindex="-1">creation <a class="header-anchor" href="#creation-4" aria-label="Permalink to &quot;creation&quot;">​</a></h3><ul><li><p><strong><em>constructor(positions)</em></strong></p><p>构造函数</p><ul><li>参数 <ul><li><code>{String|Array&lt;Position|Number|String|Object&gt;} positions</code>：坐标串</li></ul></li><li>返回值 <code>tailedAttackArrow</code></li></ul></li></ul><h3 id="properties-4" tabindex="-1">properties <a class="header-anchor" href="#properties-4" aria-label="Permalink to &quot;properties&quot;">​</a></h3><ul><li><code>{Array&lt;Position&gt;} positions</code>：坐标串</li></ul><h3 id="methods-4" tabindex="-1">methods <a class="header-anchor" href="#methods-4" aria-label="Permalink to &quot;methods&quot;">​</a></h3><ul><li><p><strong><em>setStyle(style)</em></strong></p><p>设置样式</p><ul><li>参数 <ul><li><code>{Object} style</code>：样式，详情参考：<a href="#ECCesium-polygon">Polygon</a></li></ul></li><li>返回值 <code>this</code></li></ul></li></ul>',51),r=[t];function o(n,h,p,d,c,k){return e(),a("div",null,r)}const g=i(l,[["render",o]]);export{m as __pageData,g as default};