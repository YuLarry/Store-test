(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/verification/detail/detail"],{"139c":function(e,t,n){"use strict";(function(e){n("6b76");i(n("66fd"));var t=i(n("cb5d"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"4a81":function(e,t,n){"use strict";var i={loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"cd2f"))},nsShowToast:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(n.bind(null,"f505"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$lang("common.currencySymbol")),i=e.__map(e.verifyInfo.item_array,(function(t,n){var i=e.$util.img(t.img),o=e._f("abs")(t.price),r=e._f("abs")(t.all);return{$orig:e.__get_orig(t),g0:i,f0:o,f1:r}})),o=e.$util.timeStampTurnTime(e.verifyInfo.verify_time);e.$mp.data=Object.assign({},{$root:{m0:n,l0:i,g1:o}})},r=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},6276:function(e,t,n){},"9e3f":function(e,t,n){"use strict";n.r(t);var i=n("ccfe"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},b85f:function(e,t,n){"use strict";var i=n("6276"),o=n.n(i);o.a},cb5d:function(e,t,n){"use strict";n.r(t);var i=n("4a81"),o=n("9e3f");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("b85f");var a,c=n("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);t["default"]=s.exports},ccfe:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("4c22"));function o(e){return e&&e.__esModule?e:{default:e}}var r=function(){Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(n("f505"))}.bind(null,n)).catch(n.oe)},a={data:function(){return{code:"",verifyInfo:{verify_content:{item_array:[],remark_array:[]}},info:[],isSub:!1}},components:{nsShowToast:r},mixins:[i.default],onLoad:function(e){var t=this;if(e.code&&(this.code=e.code),e.scene){var n=decodeURIComponent(e.scene);n=n.split("&"),n.length&&n.forEach((function(e){-1!=e.indexOf("code")&&(t.code=e.split("-")[1])}))}},onShow:function(){this.$langConfig.refresh(),e.getStorageSync("token")?this.checkIsVerifier():this.$util.redirectTo("/pages/member/index/index",{},"reLaunch"),this.getVerifyInfo()},methods:{checkIsVerifier:function(){var e=this;this.$api.sendRequest({url:"/api/verify/checkisverifier",success:function(t){t.data||(e.$util.showToast({title:"非核销员无此权限"}),setTimeout((function(){e.$util.redirectTo("/pages/member/index/index",{},"reLaunch")}),1e3))}})},getVerifyInfo:function(){var e=this;this.$api.sendRequest({url:"/api/verify/verifyInfo",data:{verify_code:this.code},success:function(t){t.code>=0?(e.verifyInfo=t.data,e.info=e.verifyInfo.remark_array.splice(0,1),e.verifyInfo.item_array.forEach((function(e){e.all=e.num*e.price})),e.$refs.loadingCover&&e.$refs.loadingCover.hide()):(e.$util.showToast({title:t.message}),setTimeout((function(){e.$util.redirectTo("/pages/member/index/index",{},"reLaunch")}),1e3))},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},verify:function(){var e=this;this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/api/verify/verify",data:{verify_code:this.code},success:function(t){e.$util.showToast({title:t.message}),t.code>=0?setTimeout((function(){e.$util.redirectTo("/pages/member/index/index",{},"reLaunch")}),1e3):e.isSub=!1}}))},imageError:function(e){this.verifyInfo.item_array[e].img=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},copy:function(e){this.$util.copy(e)}},filters:{abs:function(e){return Math.abs(parseFloat(e)).toFixed(2)}}};t.default=a}).call(this,n("543d")["default"])}},[["139c","common/runtime","common/vendor"]]]);