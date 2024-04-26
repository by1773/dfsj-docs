import{_ as s,o as i,c as a,aR as l}from"./chunks/framework.MvfB4Ynr.js";const g=JSON.parse('{"title":"工具 API 🌎","description":"","frontmatter":{},"headers":[],"relativePath":"zh/cesium/tools.md","filePath":"zh/cesium/tools.md"}'),n={name:"zh/cesium/tools.md"},e=l(`<h1 id="工具-api-🌎" tabindex="-1">工具 API 🌎 <a class="header-anchor" href="#工具-api-🌎" aria-label="Permalink to &quot;工具 API 🌎&quot;">​</a></h1><p>三维场景中的辅助工具，方便在场景中进行各种标绘、测量、位置编辑</p><h2 id="eccesium-plot" tabindex="-1">ECCesium.Plot <a class="header-anchor" href="#eccesium-plot" aria-label="Permalink to &quot;ECCesium.Plot&quot;">​</a></h2><blockquote><p>标绘类</p></blockquote><h3 id="example" tabindex="-1">example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;example&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> plot</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ECCesium</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Plot</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">viewer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {})</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">plot</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">draw</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ECCesium</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">OverlayType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">POINT</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">overlay</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">},</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="creation" tabindex="-1">creation <a class="header-anchor" href="#creation" aria-label="Permalink to &quot;creation&quot;">​</a></h3><ul><li><p><strong><em>constructor(viewer,[options])</em></strong></p><p>构造函数</p><ul><li>参数 <ul><li><code>{Viewer} viewer</code>：场景</li><li><code>{Object} options</code>：属性</li></ul></li><li>返回值 <code>plot</code></li></ul></li></ul><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//属性参数(可选)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">icon_center</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">**.png</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 自定义的中心点图标</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">icon_anchor</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">**.png</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  //自定义的锚点图标</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">icon_midAnchor</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">**.png</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  //自定义的中心锚点图标</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">icon_size</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">    12</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">    12</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  //自定义的中心锚点大小</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">clampToModel</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 点位是否获取模型表面坐标</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="methods" tabindex="-1">methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;methods&quot;">​</a></h3><ul><li><strong><em>draw(type,callback,[style],[clampToModel])</em></strong></li></ul><p>标绘</p><ul><li><p>参数</p><ul><li><code>{String} type</code>：覆盖物类型，参照 <a href="./global.html#overlaytype">OverlayType</a></li><li><code>{Function} callback</code>：标绘完成的回调函数，参数为覆盖物</li><li><code>{Object} style</code>：标绘的覆盖物样式设置</li><li><code>{Boolean} clampToModel</code>：点位是否获取模型表面坐标</li></ul></li><li><p>返回值 <code>this</code></p></li><li><p><strong><em>edit(overlay,callback,[clampToModel])</em></strong></p></li></ul><p>编辑</p><ul><li><p>参数</p><ul><li><code>{Overlay} overlay</code>：覆盖物</li><li><code>{Function} callback</code>：编辑完成的回调函数，参数为覆盖物</li><li><code>{Boolean} clampToModel</code>：点位是否获取模型表面坐标</li></ul></li><li><p>返回值 <code>this</code></p></li><li><p><strong><em>stop()</em></strong></p></li></ul><p>停止</p><ul><li>返回值 <code>this</code></li></ul><h2 id="eccesium-measure" tabindex="-1">ECCesium.Measure <a class="header-anchor" href="#eccesium-measure" aria-label="Permalink to &quot;ECCesium.Measure&quot;">​</a></h2><blockquote><p>三维空间分析</p></blockquote><h3 id="example-1" tabindex="-1">example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;example&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> measure</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> ECCesium</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Measure</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">viewer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="creation-1" tabindex="-1">creation <a class="header-anchor" href="#creation-1" aria-label="Permalink to &quot;creation&quot;">​</a></h3><ul><li><p><strong><em>constructor(viewer)</em></strong></p><p>构造函数</p><ul><li>参数 <ul><li><code>{Viewer} viewer</code>：场景</li></ul></li><li>返回值 <code>measure</code></li></ul></li></ul><h3 id="methods-1" tabindex="-1">methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;methods&quot;">​</a></h3><ul><li><p><strong><em>angle([options])</em></strong></p><p>角度</p><ul><li>参数 <ul><li><code>{Object} options</code>：配置</li></ul></li><li>返回值 <code>this</code></li></ul></li><li><p><strong><em>area([options])</em></strong></p><p>面积</p><ul><li>参数 <ul><li><code>{Object} options</code>：配置</li></ul></li><li>返回值 <code>this</code></li></ul></li><li><p><strong><em>areaSurface([options])</em></strong></p><p>表面面积</p><ul><li>参数 <ul><li><code>{Object} options</code>：配置</li></ul></li><li>返回值 <code>this</code></li></ul></li><li><p><strong><em>distance([options])</em></strong></p><p>距离</p><ul><li>参数 <ul><li><code>{Object} options</code>：配置</li></ul></li><li>返回值 <code>this</code></li></ul></li><li><p><strong><em>distanceSurface([options])</em></strong></p><p>表面距离</p><ul><li>参数 <ul><li><code>{Object} options</code>：配置</li></ul></li><li>返回值 <code>this</code></li></ul></li><li><p><strong><em>heading([options])</em></strong></p><p>偏航角</p><ul><li>参数 <ul><li><code>{Object} options</code>：配置</li></ul></li><li>返回值 <code>this</code></li></ul></li><li><p><strong><em>height([options])</em></strong></p><p>高度</p><ul><li>参数 <ul><li><code>{Object} options</code>：配置</li></ul></li><li>返回值 <code>this</code></li></ul></li><li><p><strong><em>triangleHeight([options])</em></strong></p><p>三角测量</p><ul><li>参数 <ul><li><code>{Object} options</code>：配置</li></ul></li><li>返回值 <code>this</code></li></ul></li><li><p><strong><em>activate(type,[options])</em></strong></p><p>根据类型分析</p><ul><li>参数 <ul><li><code>{String} type</code>：分析类型，参考 <code>ECCesium.MeasureType</code>,</li><li><code>{Object} options</code>：配置</li></ul></li><li>返回值 <code>this</code></li></ul></li></ul><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//属性参数(可选)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">icon_center</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">**.png</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  // 自定义的中心点图标</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">icon_anchor</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">**.png</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  //自定义的锚点图标</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">icon_midAnchor</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">**.png</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  //自定义的中心锚点图标</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">icon_size</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">    12</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">    12</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  //自定义的中心锚点大小</span></span>
<span class="line"><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">clampToModel</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  //点位是否获取模型表面坐标</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li><p><strong><em>deactivate()</em></strong></p><p>释放空间分析</p><ul><li>返回值 <code>this</code></li></ul></li></ul>`,27),p=[e];function t(h,k,r,o,d,c){return i(),a("div",null,p)}const y=s(n,[["render",t]]);export{g as __pageData,y as default};
