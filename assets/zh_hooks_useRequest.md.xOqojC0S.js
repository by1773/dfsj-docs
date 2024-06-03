import{av as s,m as n,p as a,aR as e}from"./chunks/framework.C1aPebBI.js";const h=JSON.parse('{"title":"useRequest","description":"","frontmatter":{},"headers":[],"relativePath":"zh/hooks/useRequest.md","filePath":"zh/hooks/useRequest.md"}'),l={name:"zh/hooks/useRequest.md"},p=e(`<h1 id="userequest" tabindex="-1">useRequest <a class="header-anchor" href="#userequest" aria-label="Permalink to &quot;useRequest&quot;">​</a></h1><p>专注于管理异步请求的Hook，加速你的日常开发</p><ul><li>自动请求/手动请求</li><li>SWR(stale-while-revalidate)</li><li>缓存/预加载</li><li>屏幕聚焦重新请求</li><li>轮询</li><li>防抖</li><li>节流</li><li>依赖请求</li><li>突变</li><li>loading delay</li></ul><h2 id="请求方式" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式" aria-label="Permalink to &quot;请求方式&quot;">​</a></h2><p>\b如果service是object,useRequest会使用 Fetch 来发送网络请求</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const { data } = useRequest(</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>    url: &#39;http://xxx.xx.com/api/userInfo&#39;,</span></span>
<span class="line"><span>    method: &#39;POST&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\b如果service是async函数,useRequest会调用此函数来发送网络请求</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const { data } = useRequest(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>        return axios.post(</span></span>
<span class="line"><span>            \`http://xxx.xx.com/api/userInfo\`</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h3 id="默认请求" tabindex="-1">默认请求 <a class="header-anchor" href="#默认请求" aria-label="Permalink to &quot;默认请求&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const { data, loading } = useRequest(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>        return axios.post(</span></span>
<span class="line"><span>            \`http://xxx.xx.com/api/userInfo\`</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>watchEffect(()=&gt;{</span></span>
<span class="line"><span>    console.log( data?.value );</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>在这个例子中， useRequest 接收了一个异步函数 ，在组件初次加载时， 自动触发该函数执行。同时 useRequest 会自动管理异步请求的 loading , data 状态。你可以通过data和loading来实现你的需求</p><p>因为返回的data为响应式，js中获取data.value需要在watchEffect中使用，而在template中使用是不需要的。</p><h3 id="手动触发" tabindex="-1">手动触发 <a class="header-anchor" href="#手动触发" aria-label="Permalink to &quot;手动触发&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const { data, run, loading } = useRequest(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>        return axios.post(</span></span>
<span class="line"><span>            \`http://xxx.xx.com/api/userInfo\`</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        manual: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>通过设置 options.manual = true , 则需要手动调用 run 时才会触发执行异步函数。</p><h3 id="轮询" tabindex="-1">轮询 <a class="header-anchor" href="#轮询" aria-label="Permalink to &quot;轮询&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const { data, loading } = useRequest(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>        return axios.post(</span></span>
<span class="line"><span>            \`http://xxx.xx.com/api/userInfo\`</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        pollingInterval: 1000</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>通过设置 options.pollingInterval ，进入轮询模式，定时触发函数执行。</p><h3 id="依赖请求" tabindex="-1">依赖请求 <a class="header-anchor" href="#依赖请求" aria-label="Permalink to &quot;依赖请求&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>import { onMounted, ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const isReady = ref(false);</span></span>
<span class="line"><span>const { data, loading } = useRequest(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>        return axios.post(</span></span>
<span class="line"><span>            \`http://xxx.xx.com/api/userInfo\`</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        ready: isReady</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>    isReady.value = true;</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>只有当 options.ready 变为 true 时, 才会发起请求，基于该特性可以实现串行请求，依赖请求等。</p><h3 id="防抖" tabindex="-1">防抖 <a class="header-anchor" href="#防抖" aria-label="Permalink to &quot;防抖&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const { data, loading } = useRequest(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>        return axios.post(</span></span>
<span class="line"><span>            \`http://xxx.xx.com/api/userInfo\`</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        debounceInterval: 1000</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>通过设置 options.debounceInterval ，则进入防抖模式。此时如果频繁触发 run ，则会以防抖策略进行请求。</p><h3 id="节流" tabindex="-1">节流 <a class="header-anchor" href="#节流" aria-label="Permalink to &quot;节流&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const { data, loading } = useRequest(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>        return axios.post(</span></span>
<span class="line"><span>            \`http://xxx.xx.com/api/userInfo\`</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        throttleInterval: 1000</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>通过设置 options.throttleInterval ，则进入节流模式。此时如果频繁触发 run ，则会以节流策略进行请求。</p><h3 id="缓存-swr" tabindex="-1">缓存 &amp; SWR <a class="header-anchor" href="#缓存-swr" aria-label="Permalink to &quot;缓存 &amp; SWR&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const { data, loading } = useRequest(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>        return axios.post(</span></span>
<span class="line"><span>            \`http://xxx.xx.com/api/userInfo\`</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        caccacheKey: &#39;mock1&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>如果设置了 options.cacheKey ， useRequest 会将当前请求结束数据缓存起来。下次组件初始化时，如果有缓存数据，我们会优先返回缓存数据，然后在背后发送新请求，也就是 SWR 的能力。你可以通过 cacheTime 设置缓存数据回收时间，也可以通过 staleTime 设置数据保持新鲜时间。</p><h3 id="预加载" tabindex="-1">预加载 <a class="header-anchor" href="#预加载" aria-label="Permalink to &quot;预加载&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const { data, loading } = useRequest(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>        return axios.post(</span></span>
<span class="line"><span>            \`http://xxx.xx.com/api/userInfo\`</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        caccacheKey: &#39;mock1&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>同一个 cacheKey 的请求，是全局共享的，也就是你可以提前请求数据。后续请求会提前返回之前预加载的数据，利用该特性，可以很方便的实现预加载。</p><h3 id="屏幕聚焦重新请求" tabindex="-1">屏幕聚焦重新请求 <a class="header-anchor" href="#屏幕聚焦重新请求" aria-label="Permalink to &quot;屏幕聚焦重新请求&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const { data, loading } = useRequest(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>        return axios.post(</span></span>
<span class="line"><span>            \`http://xxx.xx.com/api/userInfo\`</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        refreshOnWindowFocus: true,</span></span>
<span class="line"><span>        focusTimespan: 2000</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>如果你设置了 options.refreshOnWindowFocus = true ，则在浏览器窗口 refocus 和 revisible 时，会重新发起请求。你可以通过设置 options.focusTimespan 来设置请求间隔，默认无 。</p><h3 id="突变" tabindex="-1">突变 <a class="header-anchor" href="#突变" aria-label="Permalink to &quot;突变&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const { data, mutate } = useRequest(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>        return axios.post(</span></span>
<span class="line"><span>            \`http://xxx.xx.com/api/userInfo\`</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;button type=&quot;button&quot; @click={() =&gt; mutate({code:&#39;1&#39;,msg:&#39;test&#39;})}&gt;</span></span>
<span class="line"><span>    突变测试</span></span>
<span class="line"><span>&lt;/button&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>你可以通过 mutate ，直接修改 data.</p><h3 id="loading-delay" tabindex="-1">Loading Delay <a class="header-anchor" href="#loading-delay" aria-label="Permalink to &quot;Loading Delay&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const { data, loading } = useRequest(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>        return axios.post(</span></span>
<span class="line"><span>            \`http://xxx.xx.com/api/userInfo\`</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        loadingDelay: 300</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>通过设置 options.loadingDelay ，可以延迟 loading 变成 true 的时间，有效防止闪烁。</p><h3 id="refreshdeps" tabindex="-1">refreshDeps <a class="header-anchor" href="#refreshdeps" aria-label="Permalink to &quot;refreshDeps&quot;">​</a></h3><p>开发中会经常碰到这个需求，当某些 state 变化时，我们需要重新执行异步请求，使用useRequest将很方便的实现此功能。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>import { onMounted, ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const random = ref(1);</span></span>
<span class="line"><span>const { data, loading } = useRequest(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>        return axios.post(</span></span>
<span class="line"><span>            \`http://xxx.xx.com/api/userInfo\`</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        refreshDeps: [ random ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setInterval(()=&gt;{</span></span>
<span class="line"><span>    random.value = Math.random()</span></span>
<span class="line"><span>},1000)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>当例子中 random 发生变化时,会重新执行 service。</p><h2 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;Api&quot;">​</a></h2><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-label="Permalink to &quot;Result&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;">service 返回的数据，默认为 undefined</td><td style="text-align:left;">undefined / any</td></tr><tr><td style="text-align:left;">error</td><td style="text-align:left;">service 抛出的异常，默认为 undefined</td><td style="text-align:left;">undefined / Error</td></tr><tr><td style="text-align:left;">loading</td><td style="text-align:left;">service 是否正在执行</td><td style="text-align:left;">boolean</td></tr><tr><td style="text-align:left;">run</td><td style="text-align:left;">手动触发 service 执行，参数会传递给 service</td><td style="text-align:left;">(...args: any[]) =&gt; void</td></tr><tr><td style="text-align:left;">refresh</td><td style="text-align:left;">使用上一次的 params，重新执行 service</td><td style="text-align:left;">() =&gt; void</td></tr><tr><td style="text-align:left;">cancel</td><td style="text-align:left;">如果有轮询，停止</td><td style="text-align:left;">() =&gt; void</td></tr><tr><td style="text-align:left;">mutate</td><td style="text-align:left;">突变直接修改 data</td><td style="text-align:left;">(newData) =&gt; void</td></tr><tr><td style="text-align:left;">loading</td><td style="text-align:left;">service 是否正在执行</td><td style="text-align:left;">boolean</td></tr></tbody></table><h3 id="params" tabindex="-1">Params <a class="header-anchor" href="#params" aria-label="Permalink to &quot;Params&quot;">​</a></h3><p>所有的 Options 均是可选的。</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">manual</td><td style="text-align:left;">是否需要手动执行</td><td style="text-align:left;">boolean</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">defaultParams</td><td style="text-align:left;">如果 manual=false ，自动执行 run 的时候，默认带上的参数</td><td style="text-align:left;">any[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">refreshDeps</td><td style="text-align:left;">在 manual = false 时，refreshDeps 变化，会触发 service 重新执行</td><td style="text-align:left;">any[]</td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;">loadingDelay</td><td style="text-align:left;">设置显示 loading 的延迟时间，避免闪烁</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">pollingInterval</td><td style="text-align:left;">轮询间隔，单位为毫秒。设置后，将进入轮询模式，定时触发 run</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">pollingWhenHidden</td><td style="text-align:left;">在页面隐藏时，是否继续轮询。默认为 true，即不会停止轮询</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">refreshOnWindowFocus</td><td style="text-align:left;">屏幕重新聚焦时间间隔，在当前时间间隔内，不会重新发起请求</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">focusTimespan</td><td style="text-align:left;">在页面隐藏时，是否继续轮询。默认为 true，即不会停止轮询</td><td style="text-align:left;">boolean</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">debounceInterval</td><td style="text-align:left;">防抖间隔, 单位为毫秒，设置后，请求进入防抖模式。</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">throttleInterval</td><td style="text-align:left;">节流间隔, 单位为毫秒，设置后，请求进入节流模式。</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">ready</td><td style="text-align:left;">只有当 ready 为 true 时，才会发起请求</td><td style="text-align:left;">boolean</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">cacheKey</td><td style="text-align:left;">* 请求唯一标识。如果设置了 cacheKey，我们会启用缓存机制 * 我们会缓存每次请求的 data , error , params , loading在缓存机制下 * 同样的请求我们会先返回缓存中的数据，同时会在背后发送新的请求，待新数据返回后，重新触发数据更新</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">cacheTime</td><td style="text-align:left;">设置缓存数据回收时间。默认缓存数据 5 分钟后回收，需要配和 cacheKey 使用</td><td style="text-align:left;">number</td><td style="text-align:left;">300000</td></tr><tr><td style="text-align:left;">staleTime</td><td style="text-align:left;">缓存数据保持新鲜时间。在该时间间隔内，认为数据是新鲜的，不会重新发请求，需要配和 cacheKey 使用</td><td style="text-align:left;">number</td><td style="text-align:left;">0</td></tr></tbody></table>`,53),t=[p];function i(r,c,d,u,b,o){return n(),a("div",null,t)}const g=s(l,[["render",i]]);export{h as __pageData,g as default};
