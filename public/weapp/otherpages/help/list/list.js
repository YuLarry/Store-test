(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/help/list/list"],{"0d64":function(e,t,n){"use strict";n.r(t);var i=n("d5c7"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"11bc":function(e,t,n){},"52ced":function(e,t,n){"use strict";n.r(t);var i=n("7dcb"),a=n("0d64");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("7f01");var r,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"9f9f7e1e",null,!1,i["a"],r);t["default"]=c.exports},"7dcb":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"90af"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"4c1d"))}},a=function(){var e=this,t=e.$createElement;e._self._c},o=[]},"7f01":function(e,t,n){"use strict";var i=n("11bc"),a=n.n(i);a.a},"8e581":function(e,t,n){"use strict";(function(e){n("67ba");i(n("66fd"));var t=i(n("52ced"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},d5c7:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("b6ac"));function a(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{dataList:[]}},onLoad:function(){this.getData()},mixins:[i.default],onShow:function(){this.$langConfig.refresh()},methods:{getData:function(){var e=this;this.$api.sendRequest({url:"/api/helpclass/lists",data:{app_module:"shop"},success:function(t){0==t.code&&t.data?e.dataList=t.data:e.$util.showToast({title:t.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},helpDetail:function(t){t.link_address?e.redirectTo({url:"/otherpages/webview/webview?link="+encodeURIComponent(t.link_address)}):this.$util.redirectTo("/otherpages/help/detail/detail",{id:t.id})}},onShareAppMessage:function(e){var t="帮助中心使你更加方便",n="/otherpages/help/list/list";return{title:t,path:n,success:function(e){},fail:function(e){}}}};t.default=o}).call(this,n("543d")["default"])}},[["8e581","common/runtime","common/vendor"]]]);