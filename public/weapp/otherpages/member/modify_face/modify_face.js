(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/modify_face/modify_face"],{"0095":function(e,t,n){"use strict";n.r(t);var o=n("dbe0"),i=n("1d9e");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("9b56");var u,r=n("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=s.exports},"1d9e":function(e,t,n){"use strict";n.r(t);var o=n("68e0"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},"68e0":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("4c22"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(n("f505"))}.bind(null,n)).catch(n.oe)},u={data:function(){return{memberImg:"",newImg:""}},components:{nsShowToast:a},mixins:[o.default],onShow:function(){e.getStorageSync("token")||this.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/member/modify_face/modify_face"},"redirectTo"),this.$langConfig.refresh(),this.initGetHeading()},methods:{initGetHeading:function(){var e=this;this.$api.sendRequest({url:"/api/member/info",success:function(t){0==t.code?e.memberImg=t.data.headimg:e.$util.showToast({title:t.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},chooseImage:function(){var e=this;this.$util.upload(1,{path:"headimg"},(function(t){e.newImg=t[0]}))},previewImage:function(){e.previewImage({current:0,urls:this.images})},save:function(){var e=this;this.$api.sendRequest({url:"/api/member/modifyheadimg",data:{headimg:this.newImg},success:function(t){0==t.code?(e.$util.showToast({title:"头像修改成功"}),setTimeout((function(){e.$util.redirectTo("/pages/member/info/info",{},"redirectTo")}),2e3)):e.$util.showToast({title:t.message})}})}}};t.default=u}).call(this,n("543d")["default"])},9725:function(e,t,n){"use strict";(function(e){n("6b76");o(n("66fd"));var t=o(n("0095"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"9b56":function(e,t,n){"use strict";var o=n("f588"),i=n.n(o);i.a},dbe0:function(e,t,n){"use strict";var o={loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"cd2f"))},nsShowToast:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(n.bind(null,"f505"))}},i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$util.img(e.memberImg)),o=e.$util.getDefaultImage(),i=e.$util.img(e.newImg);e._isMounted||(e.e0=function(t){e.memberImg=e.$util.getDefaultImage().default_headimg},e.e1=function(t){e.newImg=e.$util.getDefaultImage().default_headimg}),e.$mp.data=Object.assign({},{$root:{g0:n,g1:o,g2:i}})},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}))},f588:function(e,t,n){}},[["9725","common/runtime","common/vendor"]]]);