import{a as i,I as n}from"./theme.otR6SW8s.js";import{r as b}from"./echarts.C5VFB2vN.js";function d(t,f){for(var o=0;o<f.length;o++){const e=f[o];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const l=Object.getOwnPropertyDescriptor(e,r);l&&Object.defineProperty(t,r,l.get?l:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var c={};(function(t){(function(f,o){typeof t.nodeName!="string"?o(t,b):o({},f.echarts)})(n,function(f,o){var e=function(a){typeof console<"u"&&console&&console.error&&console.error(a)};if(!o){e("ECharts is not Loaded");return}var r=["#ffcb6a","#ffa850","#ffe2c4","#e5834e","#ffb081","#f7826e","#faac9e","#fcd5cf"],l={color:r,title:{textStyle:{fontWeight:"normal",color:"#ffcb6a"}},visualMap:{color:["#ffcb6a","#ffa850"]},toolbox:{color:["#ffcb6a","#ffcb6a","#ffcb6a","#ffcb6a"]},tooltip:{backgroundColor:"rgba(0,0,0,0.5)",axisPointer:{type:"line",lineStyle:{color:"#ffcb6a",type:"dashed"},crossStyle:{color:"#ffcb6a"},shadowStyle:{color:"rgba(200,200,200,0.3)"}}},dataZoom:{dataBackgroundColor:"#eee",fillerColor:"rgba(200,200,200,0.2)",handleColor:"#ffcb6a"},timeline:{lineStyle:{color:"#ffcb6a"},controlStyle:{color:"#ffcb6a",borderColor:"#ffcb6a"}},candlestick:{itemStyle:{color:"#ffa850",color0:"#ffe2c4"},lineStyle:{width:1,color:"#ffb081",color0:"#e5834e"},areaStyle:{color:"#e5834e",color0:"#fcd5cf"}},chord:{padding:4,itemStyle:{color:"#fcd5cf",borderWidth:1,borderColor:"rgba(128, 128, 128, 0.5)"},lineStyle:{color:"rgba(128, 128, 128, 0.5)"},areaStyle:{color:"#e5834e"}},map:{itemStyle:{color:"#ffe2c4"},areaStyle:{color:"#ddd"},label:{color:"#c12e34"}},graph:{itemStyle:{color:"#f2385a"},linkStyle:{color:"#ffcb6a"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#ffa850"],[.8,"#ffcb6a"],[1,"#ffb081"]],width:8}}}};o.registerTheme("fruit",l)})})(c);const s=i(c),g=d({__proto__:null,default:s},[c]);export{g as f};
