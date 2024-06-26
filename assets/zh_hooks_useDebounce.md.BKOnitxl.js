import{av as s,m as n,p as a,aR as e}from"./chunks/framework.C1aPebBI.js";const h=JSON.parse('{"title":"useDebounce","description":"","frontmatter":{},"headers":[],"relativePath":"zh/hooks/useDebounce.md","filePath":"zh/hooks/useDebounce.md"}'),p={name:"zh/hooks/useDebounce.md"},l=e(`<h1 id="usedebounce" tabindex="-1">useDebounce <a class="header-anchor" href="#usedebounce" aria-label="Permalink to &quot;useDebounce&quot;">​</a></h1><p>用来处理防抖值的 Hook。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;input</span></span>
<span class="line"><span>            v-model=&quot;debounceCurrValue&quot;</span></span>
<span class="line"><span>            placeholder=&quot;Typed value&quot;</span></span>
<span class="line"><span>            style=&quot;width: 280&quot;</span></span>
<span class="line"><span>        /&gt;</span></span>
<span class="line"><span>        &lt;p style=&quot;marginTop: 16&quot;&gt;DebouncedValue: {{debounceValue}}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>import { useDebounce } from &#39;@dfsj/hooks&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span>    const debounceCurrValue = ref(1);</span></span>
<span class="line"><span>    const debounceValue = useDebounce(debounceCurrValue,500);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        debounceCurrValue,</span></span>
<span class="line"><span>        debounceValue,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>使用useDebounce后，频繁设置debounceCurrValue不会立刻改变debounceValue， debounceValue只会在输入结束 500ms 后变化。</p><h2 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;Api&quot;">​</a></h2><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-label="Permalink to &quot;Params&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">需要防抖的值</td><td style="text-align:left;">any</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">wait</td><td style="text-align:left;">超时时间，单位为毫秒</td><td style="text-align:left;">number</td><td style="text-align:left;">1000</td></tr></tbody></table>`,8),t=[l];function r(i,c,u,b,o,d){return n(),a("div",null,t)}const f=s(p,[["render",r]]);export{h as __pageData,f as default};
