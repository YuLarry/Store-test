(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_promotion/fenxiao/promote_code"],{"0491":function(t,e,n){"use strict";var o=n("0846"),i=n.n(o);i.a},"0846":function(t,e,n){},"49b5":function(t,e,n){"use strict";n.r(e);var o=n("dc61"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},7916:function(t,e,n){"use strict";(function(t){n("34b0");o(n("66fd"));var e=o(n("a8db"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"83eb":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"92aa"))},nsLogin:function(){return n.e("components/ns-login/ns-login").then(n.bind(null,"2893"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"790a"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.poster,(function(e,n){var o=t.__get_orig(e),i=t.$util.img(e);return{$orig:o,g0:i}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},a=[]},a8db:function(t,e,n){"use strict";n.r(e);var o=n("83eb"),i=n("49b5");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("0491");var u,r=n("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=s.exports},dc61:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("5e27");var o=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("92aa"))}.bind(null,n)).catch(n.oe)},i={data:function(){return{poster:[],fenxiaoInfo:{},posterIndex:0,templateId:["default"],mpShareData:null}},components:{uniPopup:o},methods:{getPoster:function(t){var e=this;return new Promise((function(n,o){e.$api.sendRequest({url:"/fenxiao/api/fenxiao/poster",data:{page:"/pages/index/index",qrcode_param:JSON.stringify({}),template_id:t},success:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide(),t.code>=0&&n(t.data.path)},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide(),o()}})}))},getIndex:function(t){this.posterIndex=t.detail.current},save:function(){var e=this;t.downloadFile({url:this.$util.img(this.poster[this.posterIndex]),success:function(n){200===n.statusCode?t.saveImageToPhotosAlbum({filePath:n.tempFilePath,success:function(){e.$util.showToast({title:"保存成功"})},fail:function(t){"saveImageToPhotosAlbum:fail auth deny"==t.errMsg||"saveImageToPhotosAlbum:fail:auth denied"==t.errMsg?e.$refs.popupDialog.open():e.$util.showToast({title:"保存失败，请稍后重试"})}}):e.$util.showToast({title:"下载失败"})},fail:function(t){e.$util.showToast({title:"下载失败"})}})},getFenxiaoDetail:function(){var t=this;this.poster=[];try{this.templateId.forEach((function(e,n){t.getPoster(e).then((function(e){t.poster.push(e),t.$refs.loadingCover&&t.$refs.loadingCover.hide()})).catch((function(t){throw t}))}))}catch(e){this.$util.showToast({title:"海报生成失败"})}},closeDialog:function(){this.$refs.popupDialog.close()}},onLoad:function(e){var n=this;if(!this.addonIsExist.fenxiao)return this.$util.showToast({title:"商家未开启分销",mask:!0,duration:2e3}),void setTimeout((function(){n.$util.redirectTo("/pages/index/index",{},"redirectTo")}),2e3);e.templateId&&(this.templateId=e.templateId.split(",")),t.getStorageSync("token")?this.getFenxiaoDetail():setTimeout((function(){n.$refs.login.open("/pages_promotion/fenxiao/promote_code")}))},onShow:function(){var t=this;this.$util.getMpShare().then((function(e){t.mpShareData=e}))},onShareAppMessage:function(){return this.mpShareData.appMessage},onShareTimeline:function(){return this.mpShareData.timeLine},watch:{storeToken:function(t,e){t&&this.getFenxiaoDetail()}},computed:{storeToken:function(){return this.$store.state.token}}};e.default=i}).call(this,n("543d")["default"])}},[["7916","common/runtime","common/vendor"]]]);