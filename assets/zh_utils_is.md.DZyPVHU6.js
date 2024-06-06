import{av as a,m as e,p as i,aR as r}from"./chunks/framework.C1aPebBI.js";const f=JSON.parse('{"title":"类型判断","description":"","frontmatter":{},"headers":[],"relativePath":"zh/utils/is.md","filePath":"zh/utils/is.md"}'),s={name:"zh/utils/is.md"},t=r('<h1 id="类型判断" tabindex="-1">类型判断 <a class="header-anchor" href="#类型判断" aria-label="Permalink to &quot;类型判断&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>更推荐使用<code>lodash-es</code>库对数组、对象判断和逻辑操作。</p></div><h2 id="isarguments" tabindex="-1">isArguments <a class="header-anchor" href="#isarguments" aria-label="Permalink to &quot;isArguments&quot;">​</a></h2><h2 id="isarraybuffer" tabindex="-1">isArrayBuffer <a class="header-anchor" href="#isarraybuffer" aria-label="Permalink to &quot;isArrayBuffer&quot;">​</a></h2><h2 id="isarraylike" tabindex="-1">isArrayLike <a class="header-anchor" href="#isarraylike" aria-label="Permalink to &quot;isArrayLike&quot;">​</a></h2><h2 id="isarraylikeobject" tabindex="-1">isArrayLikeObject <a class="header-anchor" href="#isarraylikeobject" aria-label="Permalink to &quot;isArrayLikeObject&quot;">​</a></h2><h2 id="isbuffer" tabindex="-1">isBuffer <a class="header-anchor" href="#isbuffer" aria-label="Permalink to &quot;isBuffer&quot;">​</a></h2><h2 id="isboolean" tabindex="-1">isBoolean <a class="header-anchor" href="#isboolean" aria-label="Permalink to &quot;isBoolean&quot;">​</a></h2><h2 id="isdate" tabindex="-1">isDate <a class="header-anchor" href="#isdate" aria-label="Permalink to &quot;isDate&quot;">​</a></h2><h2 id="iselement" tabindex="-1">isElement <a class="header-anchor" href="#iselement" aria-label="Permalink to &quot;isElement&quot;">​</a></h2><h2 id="isempty" tabindex="-1">isEmpty <a class="header-anchor" href="#isempty" aria-label="Permalink to &quot;isEmpty&quot;">​</a></h2><h2 id="isequal" tabindex="-1">isEqual <a class="header-anchor" href="#isequal" aria-label="Permalink to &quot;isEqual&quot;">​</a></h2><h2 id="isequalwith" tabindex="-1">isEqualWith <a class="header-anchor" href="#isequalwith" aria-label="Permalink to &quot;isEqualWith&quot;">​</a></h2><h2 id="iserror" tabindex="-1">isError <a class="header-anchor" href="#iserror" aria-label="Permalink to &quot;isError&quot;">​</a></h2><h2 id="isfunction" tabindex="-1">isFunction <a class="header-anchor" href="#isfunction" aria-label="Permalink to &quot;isFunction&quot;">​</a></h2><h2 id="isfinite" tabindex="-1">isFinite <a class="header-anchor" href="#isfinite" aria-label="Permalink to &quot;isFinite&quot;">​</a></h2><h2 id="islength" tabindex="-1">isLength <a class="header-anchor" href="#islength" aria-label="Permalink to &quot;isLength&quot;">​</a></h2><h2 id="ismap" tabindex="-1">isMap <a class="header-anchor" href="#ismap" aria-label="Permalink to &quot;isMap&quot;">​</a></h2><h2 id="ismatch" tabindex="-1">isMatch <a class="header-anchor" href="#ismatch" aria-label="Permalink to &quot;isMatch&quot;">​</a></h2><h2 id="ismatchwith" tabindex="-1">isMatchWith <a class="header-anchor" href="#ismatchwith" aria-label="Permalink to &quot;isMatchWith&quot;">​</a></h2><h2 id="isnative" tabindex="-1">isNative <a class="header-anchor" href="#isnative" aria-label="Permalink to &quot;isNative&quot;">​</a></h2><h2 id="isnil" tabindex="-1">isNil <a class="header-anchor" href="#isnil" aria-label="Permalink to &quot;isNil&quot;">​</a></h2><h2 id="isnumber" tabindex="-1">isNumber <a class="header-anchor" href="#isnumber" aria-label="Permalink to &quot;isNumber&quot;">​</a></h2><h2 id="isnull" tabindex="-1">isNull <a class="header-anchor" href="#isnull" aria-label="Permalink to &quot;isNull&quot;">​</a></h2><h2 id="isobjectlike" tabindex="-1">isObjectLike <a class="header-anchor" href="#isobjectlike" aria-label="Permalink to &quot;isObjectLike&quot;">​</a></h2><h2 id="isplainobject" tabindex="-1">isPlainObject <a class="header-anchor" href="#isplainobject" aria-label="Permalink to &quot;isPlainObject&quot;">​</a></h2><h2 id="isregexp" tabindex="-1">isRegExp <a class="header-anchor" href="#isregexp" aria-label="Permalink to &quot;isRegExp&quot;">​</a></h2><h2 id="issafeinteger" tabindex="-1">isSafeInteger <a class="header-anchor" href="#issafeinteger" aria-label="Permalink to &quot;isSafeInteger&quot;">​</a></h2><h2 id="isset" tabindex="-1">isSet <a class="header-anchor" href="#isset" aria-label="Permalink to &quot;isSet&quot;">​</a></h2><h2 id="isstring" tabindex="-1">isString <a class="header-anchor" href="#isstring" aria-label="Permalink to &quot;isString&quot;">​</a></h2><h2 id="issymbol" tabindex="-1">isSymbol <a class="header-anchor" href="#issymbol" aria-label="Permalink to &quot;isSymbol&quot;">​</a></h2><h2 id="istypedarray" tabindex="-1">isTypedArray <a class="header-anchor" href="#istypedarray" aria-label="Permalink to &quot;isTypedArray&quot;">​</a></h2><h2 id="isundefined" tabindex="-1">isUndefined <a class="header-anchor" href="#isundefined" aria-label="Permalink to &quot;isUndefined&quot;">​</a></h2><h2 id="isweakmap" tabindex="-1">isWeakMap <a class="header-anchor" href="#isweakmap" aria-label="Permalink to &quot;isWeakMap&quot;">​</a></h2><h2 id="isweakset" tabindex="-1">isWeakSet <a class="header-anchor" href="#isweakset" aria-label="Permalink to &quot;isWeakSet&quot;">​</a></h2><h2 id="is" tabindex="-1">is <a class="header-anchor" href="#is" aria-label="Permalink to &quot;is&quot;">​</a></h2><h2 id="isdef" tabindex="-1">isDef <a class="header-anchor" href="#isdef" aria-label="Permalink to &quot;isDef&quot;">​</a></h2><h2 id="isundef" tabindex="-1">isUnDef <a class="header-anchor" href="#isundef" aria-label="Permalink to &quot;isUnDef&quot;">​</a></h2><h2 id="isobject" tabindex="-1">isObject <a class="header-anchor" href="#isobject" aria-label="Permalink to &quot;isObject&quot;">​</a></h2><h2 id="isnullandundef" tabindex="-1">isNullAndUnDef <a class="header-anchor" href="#isnullandundef" aria-label="Permalink to &quot;isNullAndUnDef&quot;">​</a></h2><h2 id="isnullorundef" tabindex="-1">isNullOrUnDef <a class="header-anchor" href="#isnullorundef" aria-label="Permalink to &quot;isNullOrUnDef&quot;">​</a></h2><h2 id="ispromise" tabindex="-1">isPromise <a class="header-anchor" href="#ispromise" aria-label="Permalink to &quot;isPromise&quot;">​</a></h2><h2 id="isjsonobjectstring" tabindex="-1">isJsonObjectString <a class="header-anchor" href="#isjsonobjectstring" aria-label="Permalink to &quot;isJsonObjectString&quot;">​</a></h2><h2 id="isarray" tabindex="-1">isArray <a class="header-anchor" href="#isarray" aria-label="Permalink to &quot;isArray&quot;">​</a></h2><h2 id="iswindow" tabindex="-1">isWindow <a class="header-anchor" href="#iswindow" aria-label="Permalink to &quot;isWindow&quot;">​</a></h2><h2 id="isserver" tabindex="-1">isServer <a class="header-anchor" href="#isserver" aria-label="Permalink to &quot;isServer&quot;">​</a></h2><h2 id="isurl" tabindex="-1">isUrl <a class="header-anchor" href="#isurl" aria-label="Permalink to &quot;isUrl&quot;">​</a></h2><h2 id="ispascalcase" tabindex="-1">isPascalCase <a class="header-anchor" href="#ispascalcase" aria-label="Permalink to &quot;isPascalCase&quot;">​</a></h2>',48),l=[t];function h(o,n,d,c,u,b){return e(),i("div",null,l)}const m=a(s,[["render",h]]);export{f as __pageData,m as default};