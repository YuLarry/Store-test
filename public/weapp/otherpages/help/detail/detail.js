(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/help/detail/detail"],{"0d7a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("df06")),a=o(n("ccd8"));function o(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{id:0,detail:{},content:""}},mixins:[a.default],onLoad:function(t){t.id?this.id=t.id:this.$util.redirectTo("/otherpages/help/list/list",{},"redirectTo"),this.getData()},onShow:function(){this.$langConfig.refresh()},methods:{getData:function(){var t=this;this.$api.sendRequest({url:"/api/help/info",data:{id:this.id},success:function(e){0==e.code&&e.data?(t.detail=e.data,t.content=(0,i.default)(e.data.content)):(t.$util.showToast({title:e.message}),setTimeout((function(){t.$util.redirectTo("/otherpages/help/list/list",{},"redirectTo")}),2e3)),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})}},onShareAppMessage:function(t){var e=this.detail.title,n="/otherpages/help/detail/detail?id="+this.id;return{title:e,path:n,success:function(t){},fail:function(t){}}}};e.default=r},5474:function(t,e,n){"use strict";n.r(e);var i=n("0d7a"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"82b7":function(t,e,n){"use strict";(function(t){n("5558");i(n("66fd"));var e=i(n("ed74"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"84f7":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"30be"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$util.timeStampTurnTime(t.detail.create_time));t.$mp.data=Object.assign({},{$root:{g0:n}})},o=[]},ad82:function(t,e,n){"use strict";var i=n("fbea"),a=n.n(i);a.a},ed74:function(t,e,n){"use strict";n.r(e);var i=n("84f7"),a=n("5474");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("ad82");var r,u=n("f0c5"),d=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=d.exports},fbea:function(t,e,n){}},[["82b7","common/runtime","common/vendor"]]]);