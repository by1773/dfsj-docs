import{a,I as f}from"./theme.DQJ985rz.js";import{r as s}from"./echarts.xu0p5aGr.js";function d(t,c){for(var o=0;o<c.length;o++){const e=c[o];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const l=Object.getOwnPropertyDescriptor(e,r);l&&Object.defineProperty(t,r,l.get?l:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={};(function(t){(function(c,o){typeof t.nodeName!="string"?o(t,s):o({},c.echarts)})(f,function(c,o){var e=function(n){typeof console<"u"&&console&&console.error&&console.error(n)};if(!o){e("ECharts is not Loaded");return}var r=["#cc0000","#002266","#ff9900","#006600","#8a150f","#076278","#808080","#f07b75"],l={color:r,title:{textStyle:{fontWeight:"normal",color:"#cc0000"}},visualMap:{color:["#cc0000","#002266"]},toolbox:{color:["#cc0000","#cc0000","#cc0000","#cc0000"]},tooltip:{backgroundColor:"rgba(0,0,0,0.5)",axisPointer:{type:"line",lineStyle:{color:"#cc0000",type:"dashed"},crossStyle:{color:"#cc0000"},shadowStyle:{color:"rgba(200,200,200,0.3)"}}},dataZoom:{dataBackgroundColor:"#eee",fillerColor:"rgba(200,200,200,0.2)",handleColor:"#cc0000"},timeline:{lineStyle:{color:"#cc0000"},controlStyle:{color:"#cc0000",borderColor:"#cc0000"}},candlestick:{itemStyle:{color:"#002266",color0:"#ff9900"},lineStyle:{width:1,color:"#8a150f",color0:"#006600"},areaStyle:{color:"#cc0000",color0:"#ff9900"}},map:{itemStyle:{color:"#ff9900"},areaStyle:{color:"#ddd"},label:{color:"#c12e34"}},graph:{itemStyle:{color:"#ff9900"},linkStyle:{color:"#cc0000"}},gauge:{axisLine:{lineStyle:{color:[[.2,"#002266"],[.8,"#cc0000"],[1,"8a150f"]],width:8}}}};o.registerTheme("inspired",l)})})(i);const y=a(i),u=d({__proto__:null,default:y},[i]);export{u as i};