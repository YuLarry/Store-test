(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/jielong/list"],{"641f":function(n,t,e){"use strict";e.r(t);var i=e("7aa8"),o=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=o.a},"690d":function(n,t,e){"use strict";var i;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var o=function(){var n=this,t=n.$createElement;n._self._c},a=[]},"7aa8":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{jieLong:[],jielong_id:""}},onLoad:function(){this.getJielongList()},methods:{getJielongList:function(){var n=this;this.$api.sendRequest({url:"/jielong/api/Goods/jielongPage",data:{},success:function(t){if(0==t.code&&t.data){var e=[],i=t.data.list;i.forEach((function(n,i){e=t.data.list})),n.jieLong=n.jieLong.concat(e)}}})},goJielongDetail:function(n){this.$util.redirectTo("/promotionpages/jielong/jielong",{jielong_id:n})}}};t.default=i},b853:function(n,t,e){"use strict";(function(n){e("4b62");i(e("66fd"));var t=i(e("d2fe"));function i(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},d2fe:function(n,t,e){"use strict";e.r(t);var i=e("690d"),o=e("641f");for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);var u,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=c.exports}},[["b853","common/runtime","common/vendor"]]]);