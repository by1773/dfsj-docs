import{a as f,I as y}from"./theme.otR6SW8s.js";import{r as b}from"./echarts.C5VFB2vN.js";function u(l,a){for(var e=0;e<a.length;e++){const r=a[e];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in l)){const t=Object.getOwnPropertyDescriptor(r,o);t&&Object.defineProperty(l,o,t.get?t:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var n={};(function(l){(function(a,e){typeof l.nodeName!="string"?e(l,b):e({},a.echarts)})(y,function(a,e){var r=function(d){typeof console<"u"&&console&&console.error&&console.error(d)};if(!e){r("ECharts is not Loaded");return}var o="#B9B8CE",t="#100C2A",c=function(){return{axisLine:{lineStyle:{color:o}},splitLine:{lineStyle:{color:"#484753"}},splitArea:{areaStyle:{color:["rgba(255,255,255,0.02)","rgba(255,255,255,0.05)"]}},minorSplitLine:{lineStyle:{color:"#20203B"}}}},i=["#4992ff","#7cffb2","#fddd60","#ff6e76","#58d9f9","#05c091","#ff8a45","#8d48e3","#dd79ff"],s={darkMode:!0,color:i,backgroundColor:t,axisPointer:{lineStyle:{color:"#817f91"},crossStyle:{color:"#817f91"},label:{color:"#fff"}},legend:{textStyle:{color:o}},textStyle:{color:o},title:{textStyle:{color:"#EEF1FA"},subtextStyle:{color:"#B9B8CE"}},toolbox:{iconStyle:{borderColor:o}},dataZoom:{borderColor:"#71708A",textStyle:{color:o},brushStyle:{color:"rgba(135,163,206,0.3)"},handleStyle:{color:"#353450",borderColor:"#C5CBE3"},moveHandleStyle:{color:"#B0B6C3",opacity:.3},fillerColor:"rgba(135,163,206,0.2)",emphasis:{handleStyle:{borderColor:"#91B7F2",color:"#4D587D"},moveHandleStyle:{color:"#636D9A",opacity:.7}},dataBackground:{lineStyle:{color:"#71708A",width:1},areaStyle:{color:"#71708A"}},selectedDataBackground:{lineStyle:{color:"#87A3CE"},areaStyle:{color:"#87A3CE"}}},visualMap:{textStyle:{color:o}},timeline:{lineStyle:{color:o},label:{color:o},controlStyle:{color:o,borderColor:o}},calendar:{itemStyle:{color:t},dayLabel:{color:o},monthLabel:{color:o},yearLabel:{color:o}},timeAxis:c(),logAxis:c(),valueAxis:c(),categoryAxis:c(),line:{symbol:"circle"},graph:{color:i},gauge:{title:{color:o}},candlestick:{itemStyle:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}};s.categoryAxis.splitLine.show=!1,e.registerTheme("dark",s)})})(n);const S=f(n),C=u({__proto__:null,default:S},[n]);export{C as d};
