(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/guafen/guafen/list"],{"81f9":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"90af"))},nsLogin:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-login/ns-login")]).then(n.bind(null,"2bc6"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"4c1d"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.list.length>0?e.__map(e.list,(function(t,n){var i=e.__get_orig(t),o=""!=t.image?e.$util.img(t.image):null,a=""==t.image?e.$util.img("/upload/uniapp/guafen/coupon_list_img.png"):null,r=e._f("int")(t.money),s=t.validity_type?null:e.$util.timeStampTurnTime(t.end_time);return{$orig:i,g0:o,g1:a,f0:r,g2:s}})):null);e.$mp.data=Object.assign({},{$root:{l0:n}})},a=[]},"99fa":function(e,t,n){"use strict";n.r(t);var i=n("81f9"),o=n("cfcd");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("e47e");var r,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"35d9e648",null,!1,i["a"],r);t["default"]=u.exports},"9a3b":function(e,t,n){"use strict";(function(e){n("67ba");i(n("66fd"));var t=i(n("99fa"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},a32c:function(e,t,n){},cfcd:function(e,t,n){"use strict";n.r(t);var i=n("f42a"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},e47e:function(e,t,n){"use strict";var i=n("a32c"),o=n.n(i);o.a},f42a:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("b6ac"));function o(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{type:"",types:"",state:1,sort:1,list:[],isIphoneX:!1,showEmpty:!1,memberId:0,mpShareData:null}},mixins:[i.default],onLoad:function(t){var n=this;if(this.isIphoneX=this.$util.uniappIsIPhoneX(),this.$util.getMemberId().then((function(e){n.memberId=e})).catch((function(e){console.log("reject",e)})),t.source_member&&e.setStorageSync("source_member",t.source_member),t.scene){var i=decodeURIComponent(t.scene);i=i.split("&"),i.length&&i.forEach((function(t){-1!=t.indexOf("sku_id")&&(n.skuId=t.split("-")[1]),-1!=t.indexOf("m")&&e.setStorageSync("source_member",t.split("-")[1]),-1!=t.indexOf("is_test")&&e.setStorageSync("is_test",1)}))}},filters:{int:function(e){var t=String(e),n=t.split(".");return parseInt(n[1])>0?t:n[0]}},onShow:function(){var t=this;if(!this.addonIsExit.divideticket)return this.$util.showToast({title:"商家未开启瓜分券",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);e.getStorageSync("token")&&e.getStorageSync("source_member")&&this.$util.onSourceMember(e.getStorageSync("source_member")),this.$util.getMpShare().then((function(e){t.mpShareData=e}))},onShareAppMessage:function(){return this.mpShareData.appMessage},onShareTimeline:function(){return this.mpShareData.timeLine},methods:{getMemberCounponList:function(e){var t=this;this.showEmpty=!1,this.$api.sendRequest({url:"/divideticket/api/divideticket/lists",data:{page:e.num,page_size:e.size},success:function(n){t.showEmpty=!0;var i=[],o=n.message;0==n.code&&n.data?i=n.data.list:t.$util.showToast({title:o}),e.endSuccess(i.length),1==e.num&&(t.list=[]),t.list=t.list.concat(i);var a=n.data;a&&(t.couponList=a),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(n){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},imageError:function(e){this.list[e].image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},toGoodsList:function(e){this.$util.redirectTo("/promotionpages/guafen/guafen/index",{coupon_id:e.coupon_id})}}};t.default=a}).call(this,n("543d")["default"])}},[["9a3b","common/runtime","common/vendor"]]]);