import{g as n3}from"./chunks/theme.otR6SW8s.js";import{G as j,ct as e3,I as U,J as z,K as h3,M as l3,N as p3,V as r3}from"./chunks/Highlight.vue.DColn0Sx.js";import{c as k3}from"./chunks/Linear.BcEfaqu_.js";import{t as C3,r as A3}from"./chunks/render.Dh3_eaFB.js";import{u as E3}from"./chunks/useECharts.Bq1yAJmb.js";import{u as D3}from"./chunks/useToolTip.oXNz6opb.js";import{u as o3}from"./chunks/useTable.BthQ08nK.js";import{a as Y,l as M,e as B3,m as J,p as L,U as _,ab as d3,ac as c3,u as F3,ah as g3,O as y3,q as H,S as u3}from"./chunks/framework.C1aPebBI.js";function f3(B){var l=this,e=E3(B),k=e.setOptions,x=e.echarts,b=e.getInstance,p=e.container,d=Y(!1),C=D3(p),h=C.offset,X=C.content,q=C.open,w=C.close,S=o3(),c=S.props,G=S.toggleTable;c.container=p;var K=function(a,$){var t=j({},e3,$),A=b();if(a!=null){var F;c.value=a,c.chart=A,t.dataset.source=a.source;var g=(F=a.indices)===null||F===void 0?void 0:F.map(function(s){return C3(s)});if(g&&g.length&&g.forEach(function(s){return t.series.push(s)}),t.legend.data=t.series.map(function(s){return{name:s.name,nameStyle:{color:s.color}}}),t.legend.selected=t.series.reduce(function(s,i){return s[i.name]=i.selected!=null?i.selected:!0,s},{}),a.points){var T=U(a.source,1),I=z(a.source,1),O=z(a.source,0),y=U(a.source,0),Q=(O-y)/1e3,P=(I-T)/1e3,Z=(O-y)/3*2,V=0,N=a.points.find(function(s){return s.type==="current"});t.series.push(j({renderItem:function(i,n){return A3(i,n,N&&N.altitude)},data:a.points.slice().sort(function(s,i){return i.altitude-s.altitude}).map(function(s){var i=s.symbol||h3[s.type],n=i?T:I,D=s.altitude,r=n-P*60,o=y+(Z-V*Q*70),f=r-P*20,m=o;return i==null&&V++,{value:[n,D,r,o,f,m,s.label||s.name,i,s.level]}})},t.$mark))}t.toolbox.feature.myTabulation={onclick:function(){return l.tools.tabulation=!l.tools.tabulation},icon:l3.icon.tabulation,title:"表格"};try{var E=t.grid,s3=a.dimensions||["水位（m）","流量（m³/s）"],i3=a.source.map(function(s){return s[0]}),a3=s3.map(function(s,i){return i?k3(i3,a.source.map(function(n){return n[i]})):function(n){return n}});if(!p.value)return;var u=p.value;u.onclick=function(){console.log("---")},u.onmouseout=function(){d.value=!1,w()},u.onmousemove=function(s){var i=s.offsetY,n=s.offsetX,D=A.getWidth(),r=A.getHeight();if(d.value=n>=E.left&&n<=D-E.right&&i>=E.top&&i<=r-E.bottom,d.value){q(),h.x=n+10,h.y=i+10,h.x>D-180&&(h.x-=180),h.y>r-80&&(h.y-=80);var o=A.convertFromPixel({seriesIndex:0},[0,i]),f=a.dimensions.map(function(m,v){var t3=v&&n3(t.series[v-1],"lineStyle.color");return`<li>
                        <span class="mark" style="background: `.concat(t3,`"></span>
                        <i>`).concat(m,`</i>
                        <i>`).concat(p3(a3[v](+o[1])),`</i>
                     </li>`)}).join("");X.value="<fieldset>".concat(f,"</fieldset>")}else w()}}catch{}}return t},R=function(a){return{}};return{setOptions:k,createOptions:R,echarts:x,getInstance:b,container:p,assemble:K,toggleTable:G}}const m3={code:0,data:{dimensions:["水位(m)","流量(m³/s)"],indices:[],keymap:null,pagination:null,source:[[1044,.05],[1044.1,.94],[1044.2,2.55],[1044.3,4.75],[1044.4,7.45],[1044.5,10.62],[1044.6,14.22],[1044.7,18.24],[1044.8,22.64],[1044.9,27.41],[1045,32],[1045.2,46.896],[1045.4,62.079],[1045.6,77.556],[1045.8,93.337],[1046,109.431],[1046.2,125.847],[1046.4,142.594],[1046.6,159.684],[1046.8,177.126],[1047,194.931],[1047.2,213.112],[1047.4,231.679],[1047.6,250.646],[1047.8,270.026],[1048,289.832],[1048.2,310.077],[1048.4,330.779],[1048.6,355.246],[1048.8,375.773],[1049,396.949],[1049.2,418.806],[1049.3,430],[1049.4,441.377],[1049.6,464.698],[1049.8,488.806],[1050,513.742],[1050.2,539.551],[1050.4,566.277],[1050.5,580],[1050.6,593.972],[1050.8,622.688],[1051,652.483],[1051.2,683.42],[1051.4,715.565],[1051.6,748.99],[1051.8,783.774],[1052,820]],split:""}},v3={class:"h-300px"},_3=M({__name:"StageflowChart",setup(B){const l=Y(m3.data),e=B3(()=>({data:l.value,chartHooks:f3}));return(k,x)=>(J(),L("div",v3,[_(F3(r3),d3(c3(e.value)),null,16)]))}}),x3=H("h1",{id:"水位流量图",tabindex:"-1"},[u3("水位流量图 "),H("a",{class:"header-anchor",href:"#水位流量图","aria-label":'Permalink to "水位流量图"'},"​")],-1),j3=JSON.parse('{"title":"水位流量图","description":"","frontmatter":{},"headers":[],"relativePath":"zh/echarts/useStageflow.md","filePath":"zh/echarts/useStageflow.md"}'),b3={name:"zh/echarts/useStageflow.md"},U3=M({...b3,setup(B){return(l,e)=>{const k=g3("demo-preview");return J(),L("div",null,[x3,_(k,{title:"使用方法",description:"参照当前实例代码",code:"%3C!--%E6%B0%B4%E4%BD%8D%E5%85%B3%E7%B3%BB%E6%B5%81%E9%87%8F--%3E%0D%0A%3Ctemplate%3E%20%3Cdiv%20class=%22h-300px%22%3E%0D%0A%20%20%3CUnifyChart%20v-bind=%22getBindValue%22/%3E%0D%0A%3C/div%3E%0D%0A%3C/template%3E%0D%0A%3Cscript%20lang=%22ts%22%20name=%22CapacityChart%22%20setup%3E%0D%0Aimport%20%7Bcomputed,%20ref%7D%20from%20'vue'%0D%0Aimport%20%7BuseStageflow%7D%20from%20'@dfsj/echarts'%0D%0Aimport%20%7BUnifyChart%7D%20from%20%22@dfsj/components%22%0D%0Aimport%20Data%20from%20%22./data.ts%22;%0D%0A%0D%0Aconst%20datasource%20=ref(Data.data)%0D%0Aconst%20getBindValue%20=%20computed(()%20=%3E%20(%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20data:datasource.value,%0D%0A%20%20%20%20%20%20chartHooks:useStageflow,%0D%0A%20%20%20%20%20%20//%20convert,%0D%0A%20%20%20%20%20%20//%20stateful%0D%0A%20%20%20%20%7D));%0D%0A%3C/script%3E",showCode:"%3Cpre%20class%3D%22shiki%20shiki-themes%20vitesse-light%20vitesse-dark%20vp-code%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23A0ADA0%3B--shiki-dark%3A%23758575DD%22%3E%26%23x3C%3B!--%E6%B0%B4%E4%BD%8D%E5%85%B3%E7%B3%BB%E6%B5%81%E9%87%8F--%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Eh-300px%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3EUnifyChart%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3E%20v-bind%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3EgetBindValue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Ets%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20name%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3ECapacityChart%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Ecomputed%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20ref%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3EuseStageflow%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%40dfsj%2Fecharts%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3EUnifyChart%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%20%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E%40dfsj%2Fcomponents%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20Data%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%20%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E.%2Fdata.ts%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Edatasource%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3EData%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3Econst%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3EgetBindValue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3E%20computed%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E(()%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20(%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20%20%20%20%20%20data%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Edatasource%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Evalue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20%20%20%20%20%20chartHooks%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3EuseStageflow%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23A0ADA0%3B--shiki-dark%3A%23758575DD%22%3E%20%20%20%20%20%20%2F%2F%20convert%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23A0ADA0%3B--shiki-dark%3A%23758575DD%22%3E%20%20%20%20%20%20%2F%2F%20stateful%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%7D))%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"F:\\3_Company\\2_verdaccio\\ec\\docs\\examples\\echarts\\StageflowChart\\StageflowChart.vue",relativePath:"../../examples/echarts/StageflowChart/StageflowChart.vue"},{default:y3(()=>[_(_3)]),_:1})])}}});export{j3 as __pageData,U3 as default};
