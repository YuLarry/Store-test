(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/goods/coupon/coupon"],{"0a11":function(t,o,n){"use strict";(function(t){n("6b76");e(n("66fd"));var o=e(n("cc88"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("543d")["createPage"])},"0a66":function(t,o,n){},"22be":function(t,o,n){"use strict";var e=n("0a66"),i=n.n(e);i.a},"2c15":function(t,o,n){"use strict";n.r(o);var e=n("f246"),i=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(o,t,(function(){return e[t]}))}(s);o["default"]=i.a},"914f":function(t,o,n){"use strict";var e={nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"211f"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"cd2f"))},nsShowToast:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(n.bind(null,"f505"))}},i=function(){var t=this,o=t.$createElement,n=(t._self._c,t.$util.img("upload/uniapp/coupon/coupon_ysy.png")),e=t.__map(t.list,(function(o,n){var e=t.$util.timeStampTurnTime(o.end_time),i=parseInt(o.money),s=parseFloat(o.discount);return{$orig:t.__get_orig(o),g1:e,m0:i,m1:s}}));t.$mp.data=Object.assign({},{$root:{g0:n,l0:e}})},s=[];n.d(o,"b",(function(){return i})),n.d(o,"c",(function(){return s})),n.d(o,"a",(function(){return e}))},cc88:function(t,o,n){"use strict";n.r(o);var e=n("914f"),i=n("2c15");for(var s in i)"default"!==s&&function(t){n.d(o,t,(function(){return i[t]}))}(s);n("22be");var u,c=n("f0c5"),a=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);o["default"]=a.exports},f246:function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=i(n("4c22"));function i(t){return t&&t.__esModule?t:{default:t}}var s=function(){Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(n("f505"))}.bind(null,n)).catch(n.oe)},u={data:function(){return{list:[],couponBtnSwitch:!1}},components:{nsShowToast:s},onShow:function(){this.$langConfig.refresh()},mixins:[e.default],methods:{liClick:function(t,o){0==t.useState?this.receiveCoupon(t,o):this.toGoodsList(t,o)},receiveCoupon:function(o,n){var e=this;if(!this.couponBtnSwitch){this.couponBtnSwitch=!0;var i=t.getStorageSync("token");""!=i?this.$api.sendRequest({url:"/coupon/api/coupon/receive",data:{coupon_type_id:o.coupon_type_id,get_type:2},success:function(t){e.couponBtnSwitch=!1;var n="";n="领取成功，快去使用吧";var i=e.list;if(1==t.data.is_exist&&t.code<0&&(n="您已领取过该优惠券，快去使用吧"),1==t.data.is_exist)for(var s=0;s<i.length;s++)i[s].coupon_type_id==o.coupon_type_id&&(i[s].useState=1);else for(var u=0;u<i.length;u++)i[u].coupon_type_id==o.coupon_type_id&&(i[u].useState=2);e.$util.showToast({title:n})},fail:function(t){e.couponBtnSwitch=!1}}):(this.couponBtnSwitch=!0,this.$util.redirectTo("/pages/login/login/login"))}},getMemberCounponList:function(t){var o=this;this.$api.sendRequest({url:"/coupon/api/coupon/typepagelists",data:{page:t.num,page_size:t.size},success:function(n){var e=[],i=n.message;0==n.code&&n.data?e=n.data.list:o.$util.showToast({title:i}),t.endSuccess(e.length),e.length&&e.forEach((function(t){t.useState=0})),1==t.num&&(o.list=[]),o.list=o.list.concat(e),o.$refs.loadingCover&&o.$refs.loadingCover.hide()},fail:function(){t.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},imageError:function(t){this.list[t].logo=this.$util.getDefaultImage().default_shop_img,this.$forceUpdate()},couponImageError:function(t){this.list[t].image=this.$util.img("upload/uniapp/goods/coupon.png"),this.$forceUpdate()},toGoodsList:function(t){1!=t.goods_type?this.$util.redirectTo("/pages/goods/list/list",{coupon:t.coupon_type_id}):this.$util.redirectTo("/pages/goods/list/list",{})}},onShareAppMessage:function(t){var o="送您一张优惠券,快来领取吧",n="/otherpages/goods/coupon/coupon";return{title:o,path:n,success:function(t){},fail:function(t){}}}};o.default=u}).call(this,n("543d")["default"])}},[["0a11","common/runtime","common/vendor"]]]);