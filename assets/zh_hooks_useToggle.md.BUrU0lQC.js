import{av as s,m as n,p as a,aR as e}from"./chunks/framework.C1aPebBI.js";const m=JSON.parse('{"title":"useToggle","description":"","frontmatter":{},"headers":[],"relativePath":"zh/hooks/useToggle.md","filePath":"zh/hooks/useToggle.md"}'),l={name:"zh/hooks/useToggle.md"},t=e(`<h1 id="usetoggle" tabindex="-1">useToggle <a class="header-anchor" href="#usetoggle" aria-label="Permalink to &quot;useToggle&quot;">​</a></h1><p>用于在多个状态值间切换的 Hook。 (此处与 ahooks 略有不同，ahooks只能两个状态切换，本hook支持N个状态切换\b\b)</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;p&gt;useToggleDemoState: {{useToggleDemoState}}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;button @click=&quot;handleUseTToggle&quot;&gt;设置指定值&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button @click=&quot;useTToggle&quot;&gt;useTToggle&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button @click=&quot;useTSetLeft&quot;&gt;useTSetLeft&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button @click=&quot;useTSetCenter&quot;&gt;useTSetCenter&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button @click=&quot;useTSetRight&quot;&gt;useTSetRight&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>import { useToggle } from &#39;@dfsj/hooks&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span>    //useToggle 测试</span></span>
<span class="line"><span>    const [ useToggleDemoState, [ useTToggle, useTSetLeft, useTSetCenter, useTSetRight]] = useToggle(&#39;left&#39;,&#39;center&#39;,&#39;right&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const handleUseTToggle = ()=&gt;{</span></span>
<span class="line"><span>      useTToggle(&#39;center&#39;)</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      useToggleDemoState,</span></span>
<span class="line"><span>      handleUseTToggle,</span></span>
<span class="line"><span>      useTToggle,</span></span>
<span class="line"><span>      useTSetLeft,</span></span>
<span class="line"><span>      useTSetCenter,</span></span>
<span class="line"><span>      useTSetRight,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>useToggle接受多个参数，且在actions中进行同等数量导出。Actions中第一个为toggle切换，其余为设置对应参数。</p><h2 id="异步值toggle" tabindex="-1">异步值Toggle <a class="header-anchor" href="#异步值toggle" aria-label="Permalink to &quot;异步值Toggle&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt; {{state}}&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;toggle&quot;&gt;toggle&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;setToggle&quot;&gt;setToggle&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span>import { useToggle,useTimeout } from &quot;../../../dist/index.js&quot;;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const platform = ref&lt;string&gt;(&#39;安装 App&#39;);</span></span>
<span class="line"><span>    const platform2 = ref&lt;string&gt;(&#39;安装中...&#39;);</span></span>
<span class="line"><span>    const [state, [toggle]] = useToggle(platform, platform2,&#39;不安装&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    useTimeout(() =&gt; {</span></span>
<span class="line"><span>      platform.value = \`安装 ios App\`</span></span>
<span class="line"><span>      platform2.value = &#39;安装中2....&#39;</span></span>
<span class="line"><span>    }, ref(3000));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const setToggle = ()=&gt;{</span></span>
<span class="line"><span>      toggle(platform)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      state,</span></span>
<span class="line"><span>      toggle,</span></span>
<span class="line"><span>      setToggle</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>useToggle可以接受ref值的切换，内部支持了响应式，如果ref值发生变化,state会监听其变化同步修改。</p><h2 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;Api&quot;">​</a></h2><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-label="Permalink to &quot;Params&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">需要切换的值</td><td style="text-align:left;">string - number - boolean - undefined</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">...</td><td style="text-align:left;">同上</td><td style="text-align:left;">同上</td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-label="Permalink to &quot;Result&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;">state</td><td style="text-align:left;">状态值</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">actions</td><td style="text-align:left;">操作集合</td><td style="text-align:left;">Actions</td></tr></tbody></table><h3 id="actions" tabindex="-1">Actions <a class="header-anchor" href="#actions" aria-label="Permalink to &quot;Actions&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;">toggle</td><td style="text-align:left;">触发状态更改的函数，可以接受可选参数修改状态值</td><td style="text-align:left;">(state?: any) =&gt; void</td></tr><tr><td style="text-align:left;">action</td><td style="text-align:left;">按照value顺序设置state为vulue</td><td style="text-align:left;">() =&gt; void</td></tr><tr><td style="text-align:left;">...</td><td style="text-align:left;">同上</td><td style="text-align:left;">同上</td></tr></tbody></table>`,15),p=[t];function i(r,c,o,b,u,g){return n(),a("div",null,p)}const h=s(l,[["render",i]]);export{m as __pageData,h as default};
