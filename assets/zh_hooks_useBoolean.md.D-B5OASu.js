import{av as s,m as a,p as n,aR as e}from"./chunks/framework.C1aPebBI.js";const g=JSON.parse('{"title":"useBoolean","description":"","frontmatter":{},"headers":[],"relativePath":"zh/hooks/useBoolean.md","filePath":"zh/hooks/useBoolean.md"}'),t={name:"zh/hooks/useBoolean.md"},l=e(`<h1 id="useboolean" tabindex="-1">useBoolean <a class="header-anchor" href="#useboolean" aria-label="Permalink to &quot;useBoolean&quot;">​</a></h1><p>优雅的管理 boolean 值的 Hook。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;p&gt;{{ useBooleanState }}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;button @click=&quot;useBooleanToggle&quot;&gt;toggle&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button @click=&quot;setTrue&quot;&gt;setTrue&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button @click=&quot;setFalse&quot;&gt;setFalse&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>import { useBoolean } from &#39;@dfsj/hooks&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span>    //useToggle 测试</span></span>
<span class="line"><span>    const [ useBooleanState,{ toggle: useBooleanToggle, setTrue, setFalse}] = useBoolean();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      useBooleanState,</span></span>
<span class="line"><span>      useBooleanToggle,</span></span>
<span class="line"><span>      setTrue,</span></span>
<span class="line"><span>      setFalse</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>useBoolean默认切换布尔值状态，也可以接收一个参数作为新的值。</p><h2 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;Api&quot;">​</a></h2><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-label="Permalink to &quot;Params&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">defaultValue</td><td style="text-align:left;">可选项，传入默认的状态值</td><td style="text-align:left;"><code>Ref&lt;boolean&gt;</code></td><td style="text-align:left;">false</td></tr></tbody></table><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-label="Permalink to &quot;Result&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;">state</td><td style="text-align:left;">状态值</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">actions</td><td style="text-align:left;">操作集合</td><td style="text-align:left;">Actions</td></tr></tbody></table><h3 id="actions" tabindex="-1">Actions <a class="header-anchor" href="#actions" aria-label="Permalink to &quot;Actions&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;">toggle</td><td style="text-align:left;">触发状态更改的函数,可以接受一个可选参数修改状态值</td><td style="text-align:left;">(value?: boolean) =&gt; void</td></tr><tr><td style="text-align:left;">setTrue</td><td style="text-align:left;">设置状态值为 true</td><td style="text-align:left;">() =&gt; void</td></tr><tr><td style="text-align:left;">setFalse</td><td style="text-align:left;">设置状态值为 false</td><td style="text-align:left;">() =&gt; void</td></tr></tbody></table>`,12),p=[l];function i(r,o,c,u,b,d){return a(),n("div",null,p)}const m=s(t,[["render",i]]);export{g as __pageData,m as default};
