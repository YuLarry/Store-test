(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-jielong-list"],{"0dea":function(n,e,i){"use strict";i("99af"),i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{jieLong:[],jielong_id:""}},onLoad:function(){this.getJielongList()},methods:{getJielongList:function(){var n=this;this.$api.sendRequest({url:"/jielong/api/Goods/jielongPage",data:{},success:function(e){if(0==e.code&&e.data){var i=[],t=e.data.list;t.forEach((function(n,t){i=e.data.list})),n.jieLong=n.jieLong.concat(i)}}})},goJielongDetail:function(n){this.$util.redirectTo("/promotionpages/jielong/jielong",{jielong_id:n})}}};e.default=t},"3d56":function(n,e,i){"use strict";var t;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}));var o=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("v-uni-view",n._l(n.jieLong,(function(e,t){return i("v-uni-view",{key:t},[i("v-uni-view",{on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.goJielongDetail(e.jielong_id)}}},[n._v(n._s(e.jielong_name))])],1)})),1)},a=[]},"4a73":function(n,e,i){"use strict";i.r(e);var t=i("0dea"),o=i.n(t);for(var a in t)"default"!==a&&function(n){i.d(e,n,(function(){return t[n]}))}(a);e["default"]=o.a},"6b01":function(n,e,i){"use strict";i.r(e);var t=i("3d56"),o=i("4a73");for(var a in o)"default"!==a&&function(n){i.d(e,n,(function(){return o[n]}))}(a);var u,r=i("f0c5"),c=Object(r["a"])(o["default"],t["b"],t["c"],!1,null,"02473c48",null,!1,t["a"],u);e["default"]=c.exports}}]);