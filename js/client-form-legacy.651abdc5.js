(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["client-form"],{"1d86":function(t,r,a){},"1e1d":function(t,r,a){"use strict";var e=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("section",{staticClass:"section is-title-bar"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("ul",t._l(t.titleStack,(function(r,e){return a("li",{key:e},[t._v(t._s(r))])})),0)])])])])},o=[],i={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},n=i,l=a("2877"),s=Object(l["a"])(n,e,o,!1,null,null,null);r["a"]=s.exports},c6fe:function(t,r,a){"use strict";a("1d86")},f820:function(t,r,a){"use strict";a.r(r);var e=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),t._m(0)],1)},o=[function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("section",{staticClass:"section"},[a("p",{staticClass:"title is-4"},[t._v("数据来源")]),a("ul",{staticClass:"content"},[a("li",[t._v(" borderlands吧MrZsir大佬的"),a("a",{attrs:{href:"http://c.tieba.baidu.com/p/7679171563?fr=good"}},[t._v("这篇帖子")])])]),a("p",{staticClass:"title is-4"},[t._v("工具")]),a("ul",{staticClass:"content"},[a("li",[t._v("Vue 2 和 Buefy 框架")]),a("li",[a("a",{attrs:{href:"https://justboil.me"}},[t._v("Admin Null")])])])])}],i=a("5530"),n={default:{primary:"#00D1B2",info:"#209CEE",danger:"#FF3860"}},l={maintainAspectRatio:!1,legend:{display:!1},responsive:!0},s=Object(i["a"])(Object(i["a"])({},l),{},{tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}),d=a("1e1d"),c={name:"home",components:{TitleBar:d["a"]},data:function(){return{defaultChart:{chartData:null,extraOptions:s}}},computed:{titleStack:function(){return["~","关于"]}},mounted:function(){this.fillChartData(),this.$buefy.snackbar.open({message:"Welcome back",queue:!1})},methods:{randomChartData:function(t){for(var r=[],a=0;a<t;a++)r.push(Math.round(200*Math.random()));return r},fillChartData:function(){this.defaultChart.chartData={datasets:[{fill:!1,borderColor:n.default.primary,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:n.default.primary,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:n.default.primary,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)},{fill:!1,borderColor:n.default.info,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:n.default.info,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:n.default.info,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)},{fill:!1,borderColor:n.default.danger,borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:n.default.danger,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:n.default.danger,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:this.randomChartData(9)}],labels:["01","02","03","04","05","06","07","08","09"]}}}},u=c,f=(a("c6fe"),a("2877")),p=Object(f["a"])(u,e,o,!1,null,"ed5f95de",null);r["default"]=p.exports}}]);
//# sourceMappingURL=client-form-legacy.651abdc5.js.map