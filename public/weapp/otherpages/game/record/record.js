(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/game/record/record"],{"632d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{list:[],id:0}},onLoad:function(e){e.id&&(this.id=e.id)},onShow:function(){this.$langConfig.refresh(),this.list=[],this.$refs.mescroll&&this.$refs.mescroll.refresh()},methods:{getListData:function(e){var t=this;this.showEmpty=!1,this.$api.sendRequest({url:"/api/game/recordPage",data:{id:this.id,page:e.num,page_size:e.size},success:function(n){t.$refs.loadingCover&&t.$refs.loadingCover.hide(),t.showEmpty=!0;var i=[],o=n.message;0==n.code&&n.data?i=n.data.list:t.$util.showToast({title:o}),e.endSuccess(i.length),1==e.num&&(t.list=[]),t.list=t.list.concat(i),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(n){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})}}};t.default=i},7172:function(e,t,n){"use strict";(function(e){n("6b76");i(n("66fd"));var t=i(n("caf7"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"7a4a":function(e,t,n){"use strict";var i={nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"211f"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"cd2f"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$util.img("upload/uniapp/game/point.png")),i=e.$util.img("upload/uniapp/game/balance.png"),o=e.$util.img("upload/uniapp/game/coupon.png"),r=e.$util.img("upload/uniapp/game/gift.png"),a=e.__map(e.list,(function(t,n){var i=e.$util.timeStampTurnTime(t.create_time);return{$orig:e.__get_orig(t),g4:i}}));e._isMounted||(e.e0=function(t){return e.$util.redirectTo("/otherpages/member/point/point")},e.e1=function(t){return e.$util.redirectTo("/otherpages/member/balance_detail/balance_detail")},e.e2=function(t){return e.$util.redirectTo("/otherpages/member/coupon/coupon")}),e.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:o,g3:r,l0:a}})},r=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},"881c":function(e,t,n){"use strict";var i=n("9707"),o=n.n(i);o.a},9707:function(e,t,n){},9768:function(e,t,n){"use strict";n.r(t);var i=n("632d"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},caf7:function(e,t,n){"use strict";n.r(t);var i=n("7a4a"),o=n("9768");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("881c");var a,u=n("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);t["default"]=c.exports}},[["7172","common/runtime","common/vendor"]]]);