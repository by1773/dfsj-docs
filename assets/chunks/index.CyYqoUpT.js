import{u as Y,G as j,a as p,c as O,g as $,C as m,e as k,f as E}from"./Highlight.vue_vue_type_script_lang.D0hSV0nF.js";import{b as q,a as w}from"./render.C9n3YlvV.js";import{u as z}from"./useStatistic.BTS_hLbT.js";import{u as B}from"./useTable.BHeNOiVT.js";function v(g,n){const{setOptions:G=null,echarts:F=null,getInstance:r=()=>{},container:x=null}=g?Y(g):{},{open:D,close:K,props:f,toggleTable:J}=B();f.container=x;const{open:Q,close:R,props:S,toggleStatistic:L}=z(),N=(a,c,o=r())=>{var h,M,T,b,A;a=a??{};const s=JSON.parse(JSON.stringify(a)),e=p({},W,c);if(s!=null){f.value=s,f.chart=o,S.chart=o,S.value=s,((h=s==null?void 0:s.filterCodes)==null?void 0:h.length)>0&&(s.dimensions=(M=s==null?void 0:s.dimensions)==null?void 0:M.filter(t=>!s.filterCodes.includes((t==null?void 0:t.code)||t))),e.dataset.source=s.source,e.series=(T=s.dimensions)==null?void 0:T.filter((t,l)=>l).map((t,l)=>{let H={x:0,y:l+1},P=e.yAxis.findIndex(C=>C&&C.$layout&t.code);return p({yAxisIndex:P,encode:H,name:t.name,selected:t.selected},y(t,l,e))});let i=d(s,e);i!=null&&i.length&&e.series.push(...i);let u=I(s,e);u!=null&&u.length&&e.series.push(p({data:u},O.mark.series)),e.legend.data=(b=e==null?void 0:e.series)==null?void 0:b.map(t=>({name:t.name,textStyle:{color:t.color}})),e.legend.selected=(A=e.series)==null?void 0:A.reduce((t,l)=>(t[l.name]=l.selected!=null?l.selected:!0,t),{})}return e},y=n!=null&&n.S?n.S:function(a,c,o){return o.$series.find(s=>s.$code&a.code)},I=n!=null&&n.M?n.M:function(a,c){return q(a,c,O.mark)},d=n!=null&&n.I?n.I:function(a,c){return w(a,c)},W=(n==null?void 0:n.C)??j;return{createOptions:a=>{if(a==null)return null;let c=$(a,m.FLOW),o=$(a,m.STAGE);return{yAxis:[{layout:m.FLOW,name:"流量(m³/s)",min:s=>k(s,c),max:s=>E(s,c)},{layout:m.STAGE,name:"水位(m)",min:s=>k(s,o),max:s=>E(s,o)}]}},setOptions:G,echarts:F,getInstance:r,container:x,assemble:N,toSeries:y,toMarks:I,toIndices:d,toggleTable:J,toggleStatistic:L}}export{v as u};
