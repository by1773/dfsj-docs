import{_ as s,o as n,c as a,aR as t}from"./chunks/framework.MvfB4Ynr.js";const h=JSON.parse('{"title":"useVirtualList","description":"","frontmatter":{},"headers":[],"relativePath":"zh/hooks/useVirtualList.md","filePath":"zh/hooks/useVirtualList.md"}'),l={name:"zh/hooks/useVirtualList.md"},e=t(`<h1 id="usevirtuallist" tabindex="-1">useVirtualList <a class="header-anchor" href="#usevirtuallist" aria-label="Permalink to &quot;useVirtualList&quot;">​</a></h1><p>长列表虚拟化列表的 Hook，用于解决展示海量数据渲染时首屏渲染缓慢和滚动卡顿问题。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span>    &lt;button</span></span>
<span class="line"><span>      style=&quot;margin-top: 30px&quot;</span></span>
<span class="line"><span>      type=&quot;button&quot;</span></span>
<span class="line"><span>      @click=&quot;handleVirtualScrollTo&quot;</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      scroll to</span></span>
<span class="line"><span>    &lt;/button&gt;</span></span>
<span class="line"><span>    &lt;div</span></span>
<span class="line"><span>      :ref=&quot;containerProps.ref&quot;</span></span>
<span class="line"><span>      @scroll=&quot;containerProps.onScroll&quot;</span></span>
<span class="line"><span>      style=&quot;height: 300px; overflow: auto;border: 1px solid #cccccc&quot;</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      &lt;div :style=&quot;wrapperStyle&quot;&gt;</span></span>
<span class="line"><span>        &lt;div</span></span>
<span class="line"><span>          v-for=&quot;active in list&quot;</span></span>
<span class="line"><span>          :key=&quot;active&quot;</span></span>
<span class="line"><span>          style=&quot;</span></span>
<span class="line"><span>            height: 59px;</span></span>
<span class="line"><span>            border-bottom: 1px solid #cccccc;</span></span>
<span class="line"><span>            background-color: white;</span></span>
<span class="line"><span>          &quot;</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>          {{ active }}</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { useVirtualList } from &quot;@dfsj/hooks&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span>    const { list, wrapperStyle, containerProps, scrollTo } = useVirtualList(</span></span>
<span class="line"><span>      Array.from(Array(99999).keys()),</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        itemHeight: 60,</span></span>
<span class="line"><span>        overscan: 10,</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const handleVirtualScrollTo = () =&gt; {</span></span>
<span class="line"><span>      scrollTo(22);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      list,</span></span>
<span class="line"><span>      wrapperStyle,</span></span>
<span class="line"><span>      containerProps,</span></span>
<span class="line"><span>      handleVirtualScrollTo,</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>useVirtualList接受一个数组，导出一个虚拟化的list以元素配置，具体配置看Api</p><h2 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;Api&quot;">​</a></h2><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-label="Permalink to &quot;Params&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">arr</td><td style="text-align:left;">包含大量数据的列表</td><td style="text-align:left;">T[]</td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;">options</td><td style="text-align:left;">可选配置项，见 Options</td><td style="text-align:left;">Options</td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">itemHeight</td><td style="text-align:left;">行高度，静态高度可以直接写入像素值，动态高度可传入函数</td><td style="text-align:left;">number</td><td style="text-align:left;">((index: number) =&gt; number)</td></tr><tr><td style="text-align:left;">overscan</td><td style="text-align:left;">视区上、下额外展示的 dom 节点数量</td><td style="text-align:left;">number</td><td style="text-align:left;">5</td></tr></tbody></table><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-label="Permalink to &quot;Result&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;">list</td><td style="text-align:left;">当前需要展示的列表内容</td><td style="text-align:left;">T[]</td></tr><tr><td style="text-align:left;">containerProps</td><td style="text-align:left;">滚动容器的 props</td><td style="text-align:left;">object</td></tr><tr><td style="text-align:left;">wrapperStyle</td><td style="text-align:left;">children 外层包裹器 Style</td><td style="text-align:left;">object</td></tr><tr><td style="text-align:left;">scrollTo</td><td style="text-align:left;">快速滚动到指定 index</td><td style="text-align:left;">(index: number) =&gt; void</td></tr></tbody></table>`,12),p=[e];function i(r,c,o,b,u,d){return n(),a("div",null,p)}const g=s(l,[["render",i]]);export{h as __pageData,g as default};
