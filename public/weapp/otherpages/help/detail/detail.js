(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/help/detail/detail"],{"03e0":function(t,e,n){},"0935":function(t,e,n){"use strict";n.r(e);var o=n("db9d"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},2880:function(t,e,n){"use strict";n.r(e);var o=n("9cec"),i=n("0935");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("4a92");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=c.exports},"48cc":function(t,e,n){"use strict";(function(t){n("6b76");o(n("66fd"));var e=o(n("2880"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"4a92":function(t,e,n){"use strict";var o=n("03e0"),i=n.n(o);i.a},"9cec":function(t,e,n){"use strict";var o={loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"cd2f"))},nsShowToast:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(n.bind(null,"f505"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$util.timeStampTurnTime(t.detail.create_time));t.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},db9d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("37ea")),i=a(n("4c22"));function a(t){return t&&t.__esModule?t:{default:t}}var r=function(){Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(n("f505"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{id:0,detail:{},content:""}},components:{nsShowToast:r},mixins:[i.default],onLoad:function(t){t.id?this.id=t.id:this.$util.redirectTo("/otherpages/help/list/list",{},"redirectTo"),this.getData()},onShow:function(){this.$langConfig.refresh()},methods:{getData:function(){var t=this;this.$api.sendRequest({url:"/api/help/info",data:{id:this.id},success:function(e){0==e.code&&e.data?(t.detail=e.data,t.content=(0,o.default)(e.data.content)):(t.$util.showToast({title:e.message}),setTimeout((function(){t.$util.redirectTo("/otherpages/help/list/list",{},"redirectTo")}),2e3)),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})}},onShareAppMessage:function(t){var e=this.detail.title,n="/otherpages/help/detail/detail?id="+this.id;return{title:e,path:n,success:function(t){},fail:function(t){}}}};e.default=s}},[["48cc","common/runtime","common/vendor"]]]);