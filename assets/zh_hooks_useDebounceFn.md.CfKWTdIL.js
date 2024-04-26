import{_ as n,o as s,c as a,aR as e}from"./chunks/framework.MvfB4Ynr.js";const h=JSON.parse('{"title":"useDebounceFn","description":"","frontmatter":{},"headers":[],"relativePath":"zh/hooks/useDebounceFn.md","filePath":"zh/hooks/useDebounceFn.md"}'),p={name:"zh/hooks/useDebounceFn.md"},l=e(`<h1 id="usedebouncefn" tabindex="-1">useDebounceFn <a class="header-anchor" href="#usedebouncefn" aria-label="Permalink to &quot;useDebounceFn&quot;">​</a></h1><p>用来处理防抖函数的 Hook。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;p style=&quot;marginTop: 16&quot;&gt; Clicked count: {{debounceFnValue}} &lt;/p&gt;</span></span>
<span class="line"><span>      &lt;button type=&quot;button&quot; @click=&quot;debounceFnRun&quot;&gt;</span></span>
<span class="line"><span>        useDebounceFn测试</span></span>
<span class="line"><span>      &lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>import { useDebounceFn } from &#39;@dfsj/hooks&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span>    const debounceFnValue = ref&lt;number&gt;(1);</span></span>
<span class="line"><span>    const { run:debounceFnRun } = useDebounceFn(()=&gt;{</span></span>
<span class="line"><span>      debounceFnValue.value++</span></span>
<span class="line"><span>    },500)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      debounceFnValue,</span></span>
<span class="line"><span>      debounceFnRun,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>频繁调用 debounceFnRun，但只会在所有点击完成 500ms 后执行一次相关函数</p><h2 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;Api&quot;">​</a></h2><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-label="Permalink to &quot;Params&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">fn</td><td style="text-align:left;">需要防抖执行的函数</td><td style="text-align:left;">() =&gt; void</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">wait</td><td style="text-align:left;">超时时间，单位为毫秒</td><td style="text-align:left;">number</td><td style="text-align:left;">1000</td></tr></tbody></table>`,8),t=[l];function i(r,c,u,b,o,d){return s(),a("div",null,t)}const f=n(p,[["render",i]]);export{h as __pageData,f as default};
