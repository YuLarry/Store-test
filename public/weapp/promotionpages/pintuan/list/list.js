(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/pintuan/list/list"],{"13f7":function(t,e,n){},"3ba5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("b6ac"));function o(t){return t&&t.__esModule?t:{default:t}}var a=function(){n.e("components/ns-adv/ns-adv").then(function(){return resolve(n("6c5b"))}.bind(null,n)).catch(n.oe)},r={components:{nsAdv:a},data:function(){return{dataList:[],memberId:0,mpShareData:null}},mixins:[i.default],onLoad:function(e){var n=this;if(this.$util.getMemberId().then((function(t){n.memberId=t})).catch((function(t){console.log("reject",t)})),e.source_member&&t.setStorageSync("source_member",e.source_member),e.scene){var i=decodeURIComponent(e.scene);i=i.split("&"),i.length&&i.forEach((function(e){-1!=e.indexOf("sku_id")&&(n.skuId=e.split("-")[1]),-1!=e.indexOf("m")&&t.setStorageSync("source_member",e.split("-")[1]),-1!=e.indexOf("is_test")&&t.setStorageSync("is_test",1)}))}},onShow:function(){var e=this;if(!this.addonIsExit.pintuan)return this.$util.showToast({title:"商家未开启拼团",mask:!0,duration:2e3}),void setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);t.getStorageSync("token")&&t.getStorageSync("source_member")&&this.$util.onSourceMember(t.getStorageSync("source_member")),this.$util.getMpShare().then((function(t){e.mpShareData=t})),this.$langConfig.refresh()},onShareAppMessage:function(){return this.mpShareData.appMessage},onShareTimeline:function(){return this.mpShareData.timeLine},methods:{getData:function(t){var e=this;this.$api.sendRequest({url:"/pintuan/api/goods/page",data:{page_size:t.size,page:t.num},success:function(n){var i=[],o=n.message;0==n.code&&n.data?i=n.data.list:e.$util.showToast({title:o}),t.endSuccess(i.length),1==t.num&&(e.dataList=[]),e.dataList=e.dataList.concat(i),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(){t.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},toDetail:function(t){this.$util.redirectTo("/promotionpages/pintuan/detail/detail",{pintuan_id:t.pintuan_id})},imgError:function(t){this.dataList[t].goods_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},goodsImg:function(t){var e=t.split(",");return e[0]?this.$util.img(e[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},goodsTag:function(t){return t.label_name||""}}};e.default=r}).call(this,n("543d")["default"])},"49e6":function(t,e,n){"use strict";var i=n("13f7"),o=n.n(i);o.a},"53ae":function(t,e,n){"use strict";(function(t){n("67ba");i(n("66fd"));var e=i(n("8a2f"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"8a2f":function(t,e,n){"use strict";n.r(e);var i=n("d9e5"),o=n("957b");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("49e6");var r,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=u.exports},"957b":function(t,e,n){"use strict";n.r(e);var i=n("3ba5"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},d9e5:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={nsAdv:function(){return n.e("components/ns-adv/ns-adv").then(n.bind(null,"6c5b"))},nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"90af"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"4c1d"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$lang("common.currencySymbol")),i=t.$lang("common.currencySymbol"),o=t.addonIsExit.pintuan&&t.dataList.length?t.__map(t.dataList,(function(e,n){var i=t.__get_orig(e),o=t.goodsImg(e.goods_image),a=t.goodsTag(e),r=""!=a?t.goodsTag(e):null;return{$orig:i,m0:o,m1:a,m2:r}})):null;t.$mp.data=Object.assign({},{$root:{m3:n,m4:i,l0:o}})},a=[]}},[["53ae","common/runtime","common/vendor"]]]);