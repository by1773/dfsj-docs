import{a as c,I as d}from"./theme.kLEu9nI0.js";import{r as s}from"./echarts.IvhJpv15.js";function f(t,l){for(var e=0;e<l.length;e++){const o=l[e];if(typeof o!="string"&&!Array.isArray(o)){for(const r in o)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(o,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>o[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={};(function(t){(function(l,e){typeof t.nodeName!="string"?e(t,s):e({},l.echarts)})(d,function(l,e){var o=function(n){typeof console<"u"&&console&&console.error&&console.error(n)};if(!e){o("ECharts is not Loaded");return}var r=["#c12e34","#e6b600","#0098d9","#2b821d","#005eaa","#339ca8","#cda819","#32a487"],a={color:r,title:{textStyle:{fontWeight:"normal"}},visualMap:{color:["#1790cf","#a2d4e6"]},toolbox:{iconStyle:{borderColor:"#06467c"}},tooltip:{backgroundColor:"rgba(0,0,0,0.6)"},dataZoom:{dataBackgroundColor:"#dedede",fillerColor:"rgba(154,217,247,0.2)",handleColor:"#005eaa"},timeline:{lineStyle:{color:"#005eaa"},controlStyle:{color:"#005eaa",borderColor:"#005eaa"}},candlestick:{itemStyle:{color:"#c12e34",color0:"#2b821d"},lineStyle:{width:1,color:"#c12e34",color0:"#2b821d"},areaStyle:{color:"#e6b600",color0:"#005eaa"}},graph:{itemStyle:{color:"#e6b600"},linkStyle:{color:"#005eaa"}},map:{itemStyle:{color:"#f2385a",borderColor:"#eee",areaColor:"#ddd"},areaStyle:{color:"#ddd"},label:{color:"#c12e34"}},gauge:{axisLine:{show:!0,lineStyle:{color:[[.2,"#2b821d"],[.8,"#005eaa"],[1,"#c12e34"]],width:5}},axisTick:{splitNumber:10,length:8,lineStyle:{color:"auto"}},axisLabel:{color:"auto"},splitLine:{length:12,lineStyle:{color:"auto"}},pointer:{length:"90%",width:3,color:"auto"},title:{color:"#333"},detail:{color:"auto"}}};e.registerTheme("shine",a)})})(i);const u=c(i),y=f({__proto__:null,default:u},[i]);export{y as s};