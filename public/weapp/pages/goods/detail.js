(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/detail"],{"1e7f":function(n,o,e){"use strict";(function(n){e("34b0");t(e("66fd"));var o=t(e("91f1"));function t(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(o.default)}).call(this,e("543d")["createPage"])},"31fd":function(n,o,e){"use strict";e.d(o,"b",(function(){return i})),e.d(o,"c",(function(){return u})),e.d(o,"a",(function(){return t}));var t={goodsDetailView:function(){return Promise.all([e.e("common/vendor"),e.e("components/goods-detail-view/goods-detail-view")]).then(e.bind(null,"b6b1"))},uniCountDown:function(){return e.e("components/uni-count-down/uni-count-down").then(e.bind(null,"1339"))},nsGoodsPromotion:function(){return e.e("components/ns-goods-promotion/ns-goods-promotion").then(e.bind(null,"7118"))},nsFenxiaoGoodsDetail:function(){return e.e("components/ns-fenxiao-goods-detail/ns-fenxiao-goods-detail").then(e.bind(null,"6a97"))},nsGoodsSku:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-goods-sku/ns-goods-sku")]).then(e.bind(null,"ac46"))},uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"92aa"))},nsGoodsAction:function(){return e.e("components/ns-goods-action/ns-goods-action").then(e.bind(null,"7667"))},nsGoodsActionIcon:function(){return e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(e.bind(null,"5d47"))},nsGoodsActionButton:function(){return e.e("components/ns-goods-action-button/ns-goods-action-button").then(e.bind(null,"9e8b"))},nsLogin:function(){return e.e("components/ns-login/ns-login").then(e.bind(null,"2893"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"790a"))}},i=function(){var n=this,o=n.$createElement,e=(n._self._c,n.$lang("common.currencySymbol")),t=n.showDiscount?parseFloat(n.goodsSkuDetail.discount_price).toFixed(2).split("."):null,i=n.showDiscount?parseFloat(n.goodsSkuDetail.discount_price).toFixed(2).split("."):null,u=!n.showDiscount&&n.goodsSkuDetail.member_price>0?parseFloat(n.goodsSkuDetail.member_price).toFixed(2).split("."):null,l=!n.showDiscount&&n.goodsSkuDetail.member_price>0?parseFloat(n.goodsSkuDetail.member_price).toFixed(2).split("."):null,s=!n.showDiscount&&n.goodsSkuDetail.member_price>0?n.$util.img("public/uniapp/index/VIP.png"):null,c=!n.showDiscount&&n.goodsSkuDetail.member_price>0?n.$lang("common.currencySymbol"):null,r=n.showDiscount||n.goodsSkuDetail.member_price>0?null:parseFloat(n.goodsSkuDetail.price).toFixed(2).split("."),d=n.showDiscount||n.goodsSkuDetail.member_price>0?null:parseFloat(n.goodsSkuDetail.price).toFixed(2).split("."),a=n.goodsSkuDetail.market_price_show&&(n.showDiscount&&n.goodsSkuDetail.price>0||n.goodsSkuDetail.market_price>0)?n.$lang("common.currencySymbol"):null,m=n.bundling.length&&n.bundling[0].bl_name&&n.addonIsExist.bundling&&1==n.bundlingType?n.$util.img(n.goodsSkuDetail.sku_image,{size:"mid"}):null,g=n.bundling.length&&n.bundling[0].bl_name&&n.addonIsExist.bundling&&1==n.bundlingType?n.$lang("common.currencySymbol"):null,p=n.bundling.length&&n.bundling[0].bl_name&&n.addonIsExist.bundling?n.__map(n.bundling[0].bundling_goods,(function(o,e){var t=n.__get_orig(o),i=e<3?n.$util.img(o.sku_image,{size:"mid"}):null,u=e<3?n.$lang("common.currencySymbol"):null;return{$orig:t,g8:i,m4:u}})):null,f=n.$util.img(n.goodsSkuDetail.sku_image,{size:"mid"}),b=n.$lang("common.currencySymbol"),_=n.$lang("common.currencySymbol"),h=n.bundling.length&&n.bundling[0].bl_name&&n.addonIsExist.bundling?n.__map(n.bundling,(function(o,e){var t=n.__get_orig(o),i=n.__map(o.bundling_goods,(function(o,e){var t=n.__get_orig(o),i=e<3?n.$util.img(o.sku_image,{size:"mid"}):null,u=e<3?n.$lang("common.currencySymbol"):null;return{$orig:t,g10:i,m6:u}}));return{$orig:t,l1:i}})):null,v=n.hackReset?n.$util.img("public/uniapp/coupon/coupon_line.png"):null,k=n.couponList.length?n.__map(n.couponList,(function(o,e){var t=n.__get_orig(o),i=n.hackReset&&"reward"==o.type?n.$lang("common.currencySymbol"):null,u=n.hackReset&&"reward"==o.type?parseFloat(o.money):null,l=n.hackReset&&"reward"!=o.type&&"discount"==o.type?parseFloat(o.discount):null,s=n.hackReset&&0==o.validity_type?n.$util.timeStampTurnTime(o.end_time):null;return{$orig:t,m8:i,m9:u,m10:l,g12:s}})):null;n._isMounted||(n.e0=function(o){return n.$util.redirectTo("/pages_tool/member/card_buy")}),n.$mp.data=Object.assign({},{$root:{m0:e,g0:t,g1:i,g2:u,g3:l,g4:s,m1:c,g5:r,g6:d,m2:a,g7:m,m3:g,l0:p,g9:f,m5:b,m7:_,l2:h,g11:v,l3:k}})},u=[]},4658:function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=l(e("c22b")),i=l(e("f385")),u=l(e("e7c3"));function l(n){return n&&n.__esModule?n:{default:n}}var s=function(){e.e("components/ns-goods-action/ns-goods-action").then(function(){return resolve(e("7667"))}.bind(null,e)).catch(e.oe)},c=function(){e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(function(){return resolve(e("5d47"))}.bind(null,e)).catch(e.oe)},r=function(){e.e("components/ns-goods-action-button/ns-goods-action-button").then(function(){return resolve(e("9e8b"))}.bind(null,e)).catch(e.oe)},d=function(){e.e("components/uni-popup/uni-popup").then(function(){return resolve(e("92aa"))}.bind(null,e)).catch(e.oe)},a=function(){Promise.all([e.e("common/vendor"),e.e("components/ns-goods-sku/ns-goods-sku")]).then(function(){return resolve(e("ac46"))}.bind(null,e)).catch(e.oe)},m=function(){e.e("components/uni-count-down/uni-count-down").then(function(){return resolve(e("1339"))}.bind(null,e)).catch(e.oe)},g=function(){e.e("components/toTop/toTop").then(function(){return resolve(e("1aeb"))}.bind(null,e)).catch(e.oe)},p=function(){e.e("components/ns-fenxiao-goods-detail/ns-fenxiao-goods-detail").then(function(){return resolve(e("6a97"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/ns-goods-promotion/ns-goods-promotion").then(function(){return resolve(e("7118"))}.bind(null,e)).catch(e.oe)},b=function(){Promise.all([e.e("common/vendor"),e.e("components/goods-detail-view/goods-detail-view")]).then(function(){return resolve(e("b6b1"))}.bind(null,e)).catch(e.oe)},_={components:{nsGoodsAction:s,nsGoodsActionIcon:c,nsGoodsActionButton:r,uniPopup:d,nsGoodsSku:a,uniCountDown:m,nsFenxiaoGoodsDetail:p,nsGoodsPromotion:f,goodsDetailView:b,toTop:g},mixins:[u.default,t.default,i.default]};o.default=_},"5c17":function(n,o,e){"use strict";var t=e("93df"),i=e.n(t);i.a},"65d0":function(n,o,e){"use strict";e.r(o);var t=e("4658"),i=e.n(t);for(var u in t)"default"!==u&&function(n){e.d(o,n,(function(){return t[n]}))}(u);o["default"]=i.a},"91f1":function(n,o,e){"use strict";e.r(o);var t=e("31fd"),i=e("65d0");for(var u in i)"default"!==u&&function(n){e.d(o,n,(function(){return i[n]}))}(u);e("5c17"),e("a5a3");var l,s=e("f0c5"),c=Object(s["a"])(i["default"],t["b"],t["c"],!1,null,"a3c6da0e",null,!1,t["a"],l);o["default"]=c.exports},"93df":function(n,o,e){},a5a3:function(n,o,e){"use strict";var t=e("f5f4"),i=e.n(t);i.a},f5f4:function(n,o,e){}},[["1e7f","common/runtime","common/vendor"]]]);