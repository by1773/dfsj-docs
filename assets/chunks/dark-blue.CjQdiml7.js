import{a as d,c as f}from"./theme.BNRs0eHd.js";import{r as u}from"./echarts.C5VQ5JzZ.js";function y(t,a){for(var o=0;o<a.length;o++){const l=a[o];if(typeof l!="string"&&!Array.isArray(l)){for(const e in l)if(e!=="default"&&!(e in t)){const r=Object.getOwnPropertyDescriptor(l,e);r&&Object.defineProperty(t,e,r.get?r:{enumerable:!0,get:()=>l[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n={};(function(t){(function(a,o){typeof t.nodeName!="string"?o(t,u):o({},a.echarts)})(f,function(a,o){var l=function(s){typeof console<"u"&&console&&console.error&&console.error(s)};if(!o){l("ECharts is not Loaded");return}var e="#eee",r=function(){return{axisLine:{lineStyle:{color:e}},axisTick:{lineStyle:{color:e}},axisLabel:{color:e},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:e}}}},i=["#00305a","#004b8d","#0074d9","#4192d9","#7abaf2","#99cce6","#d6ebf5","#eeeeee"],c={color:i,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:e},crossStyle:{color:e}}},legend:{textStyle:{color:e}},title:{textStyle:{color:e}},toolbox:{iconStyle:{borderColor:e}},dataZoom:{dataBackgroundColor:"#eee",fillerColor:"rgba(200,200,200,0.2)",handleColor:"#00305a"},timeline:{itemStyle:{color:i[1]},lineStyle:{color:e},controlStyle:{color:e,borderColor:e},label:{color:e}},timeAxis:r(),logAxis:r(),valueAxis:r(),categoryAxis:r(),line:{symbol:"circle"},graph:{color:i},gauge:{axisLine:{lineStyle:{color:[[.2,"#004b8d"],[.8,"#00305a"],[1,"#7abaf2"]],width:8}}}};c.categoryAxis.splitLine.show=!1,o.registerTheme("dark-blue",c)})})(n);const g=d(n),p=y({__proto__:null,default:g},[n]);export{p as d};
