(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/rebate/rebate/detail"],{"1daa":function(n,e,t){"use strict";t.r(e);var o=t("3efe"),i=t("da94");for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t("e8ca"),t("bffd");var a,l=t("f0c5"),r=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,"bc653bf6",null,!1,o["a"],a);e["default"]=r.exports},"1f29":function(n,e,t){"use strict";(function(n){t("4b62");o(t("66fd"));var e=o(t("1daa"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},"3efe":function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}));var o={uniCountDown:function(){return t.e("components/uni-count-down/uni-count-down").then(t.bind(null,"d753"))},uniPopup:function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"2d2c"))},nsGoodsSku:function(){return Promise.all([t.e("common/vendor"),t.e("components/ns-goods-sku/ns-goods-sku")]).then(t.bind(null,"f7ce"))},loadingCover:function(){return t.e("components/loading-cover/loading-cover").then(t.bind(null,"b1ae"))},nsLogin:function(){return Promise.all([t.e("common/vendor"),t.e("components/ns-login/ns-login")]).then(t.bind(null,"61d0"))},nsGoodsAction:function(){return t.e("components/ns-goods-action/ns-goods-action").then(t.bind(null,"ab77"))},nsGoodsActionIcon:function(){return t.e("components/ns-goods-action-icon/ns-goods-action-icon").then(t.bind(null,"7da2"))},nsGoodsActionButton:function(){return t.e("components/ns-goods-action-button/ns-goods-action-button").then(t.bind(null,"0a43"))}},i=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.goodsSkuDetail.sku_images,(function(e,t){var o=n.__get_orig(e),i=n.$util.img(e,{size:"big"});return{$orig:o,g0:i}}))),o=n.$util.img(n.goodsSkuDetail.video_url),i=n.$util.img(n.goodsSkuDetail.sku_image,{size:"big"}),u=""!=n.goodsSkuDetail.video_url?n.$lang("video"):null,a=""!=n.goodsSkuDetail.video_url?n.$lang("image"):null,l=n.goodsSkuDetail.timeMachine?n.$util.img("upload/uniapp/goods/detail_promotion_left_bg.png"):null,r=n.goodsSkuDetail.timeMachine?n.$util.img("upload/uniapp/rebate/fanli.png"):null,s=n.goodsSkuDetail.timeMachine?n.$util.img("upload/uniapp/goods/detail_promotion_right_bg.png"):null,d=n.$util.img("upload/uniapp/rebate/open_group.png"),g=n.$util.img("upload/uniapp/rebate/spot.png"),c=n.$util.img("upload/uniapp/rebate/deliver_goods.png"),m=n.$util.img("upload/uniapp/rebate/spot.png"),p=n.$util.img("upload/uniapp/rebate/gift.png"),f=n.newList.length>0?n.__map(n.newList,(function(e,t){var o=n.__get_orig(e),i=e.end_time>n.timestamp&&e.headimg?n.$util.img(e.headimg):null,u=e.end_time>n.timestamp&&!e.headimg?n.$util.getDefaultImage():null;return{$orig:o,g11:i,g12:u}})):null,_=n.newList.length>0?n.$util.img("upload/uniapp/goods/mask_layer_pintuan_close.png"):null,h=n.newList.length>0&&""!=n.currentPintuan.headimg?n.$util.img(n.currentPintuan.headimg):null,b=n.newList.length>0&&""==n.currentPintuan.headimg?n.$util.getDefaultImage():null,v=n.newList.length>0?n.$util.img("upload/uniapp//spelling_who.png"):null,k=n.$lang("service"),$=n.goodsSkuDetail.qr_data&&1==n.goodsSkuDetail.qr_data.qr_state?n.$util.img("/upload/uniapp/goods/detail_erweiImage.png"):null,D=n.goodsSkuDetail.qr_data&&n.goodsSkuDetail.qr_data.qr_img&&""!=n.goodsSkuDetail.qr_data.qr_img&&1==n.goodsSkuDetail.qr_data.qr_state?n.$util.img(n.goodsSkuDetail.qr_data.qr_img):null,S=n.goodsSkuDetail.qr_data&&n.goodsSkuDetail.qr_data.qr_img&&(""==n.goodsSkuDetail.qr_data.qr_img||1!=n.goodsSkuDetail.qr_data.qr_state)?n.$util.img("/upload/uniapp/goods/detail_erweiImage.png"):null,w=1==n.evaluateConfig.evaluate_show?n.__map(n.goodsEvaluate,(function(e,t){var o=n.__get_orig(e),i=e.content&&e.member_headimg?n.$util.img(e.member_headimg):null,u=e.content&&!e.member_headimg?n.$util.getDefaultImage():null,a=e.content?n.$util.timeStampTurnTime(e.create_time):null,l=e.content&&e.images?n.__map(e.images,(function(e,t){var o=n.__get_orig(e),i=n.$util.img(e);return{$orig:o,g23:i}})):null;return{$orig:o,g20:i,g21:u,g22:a,l2:l}})):null,q="-1"!=n.poster?n.$util.img(n.poster):null;n._isMounted||(n.e0=function(e){n.switchMedia="video"},n.e1=function(e){n.switchMedia="img",n.videoContext.pause()},n.e2=function(e){n.currentPintuan.headimg=n.$util.getDefaultImage().default_headimg},n.e3=function(e,t){var o=arguments[arguments.length-1].currentTarget.dataset,i=o.eventParams||o["event-params"];t=i.item;t.member_headimg=n.$util.getDefaultImage().default_headimg},n.e4=function(e,t){var o=arguments[arguments.length-1].currentTarget.dataset,i=o.eventParams||o["event-params"];t=i.item;t.member_headimg=n.$util.getDefaultImage().default_headimg},n.e5=function(e){n.detailTab=0},n.e6=function(e){n.detailTab=1}),n.$mp.data=Object.assign({},{$root:{l0:t,g1:o,g2:i,m0:u,m1:a,g3:l,g4:r,g5:s,g6:d,g7:g,g8:c,g9:m,g10:p,l1:f,g13:_,g14:h,g15:b,g16:v,m2:k,g17:$,g18:D,g19:S,l3:w,g24:q}})},u=[]},bffd:function(n,e,t){"use strict";var o=t("e903"),i=t.n(o);i.a},da94:function(n,e,t){"use strict";t.r(e);var o=t("f250"),i=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=i.a},db41:function(n,e,t){},e8ca:function(n,e,t){"use strict";var o=t("db41"),i=t.n(o);i.a},e903:function(n,e,t){},f250:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("d383")),i=a(t("42f3")),u=a(t("245b"));function a(n){return n&&n.__esModule?n:{default:n}}var l=function(){t.e("components/ns-goods-action/ns-goods-action").then(function(){return resolve(t("ab77"))}.bind(null,t)).catch(t.oe)},r=function(){t.e("components/ns-goods-action-icon/ns-goods-action-icon").then(function(){return resolve(t("7da2"))}.bind(null,t)).catch(t.oe)},s=function(){t.e("components/ns-goods-action-button/ns-goods-action-button").then(function(){return resolve(t("0a43"))}.bind(null,t)).catch(t.oe)},d=function(){t.e("components/uni-popup/uni-popup").then(function(){return resolve(t("2d2c"))}.bind(null,t)).catch(t.oe)},g=function(){Promise.all([t.e("common/vendor"),t.e("components/ns-goods-sku/ns-goods-sku")]).then(function(){return resolve(t("f7ce"))}.bind(null,t)).catch(t.oe)},c=function(){Promise.all([t.e("common/vendor"),t.e("components/ns-goods-recommend/ns-goods-recommend")]).then(function(){return resolve(t("b431"))}.bind(null,t)).catch(t.oe)},m=function(){t.e("components/uni-count-down/uni-count-down").then(function(){return resolve(t("d753"))}.bind(null,t)).catch(t.oe)},p=function(){t.e("components/ns-goods-promotion/ns-goods-promotion").then(function(){return resolve(t("ecab"))}.bind(null,t)).catch(t.oe)},f=function(){t.e("components/toTop/toTop").then(function(){return resolve(t("3d3a"))}.bind(null,t)).catch(t.oe)},_={components:{nsGoodsAction:l,nsGoodsActionIcon:r,nsGoodsActionButton:s,uniPopup:d,nsGoodsSku:g,nsGoodsRecommend:c,uniCountDown:m,nsGoodsPromotion:p,toTop:f},data:function(){return{kefuConfig:{weapp:"",system:"",open:"",open_url:""}}},mixins:[o.default,i.default,u.default],onShareAppMessage:function(n){var e="/promotionpages/rebate/rebate/detail?pinfan_id="+this.pinfan_id+"&group_id="+this.groupId;return this.memberId&&(e+="&source_member="+this.memberId),{title:this.goodsSkuDetail.sku_name,imageUrl:this.$util.img(this.goodsSkuDetail.sku_image,{size:"big"}),path:e,success:function(n){},fail:function(n){}}},onShareTimeline:function(){var n="pinfan_id="+this.pinfan_id+"&group_id="+this.groupId;return this.memberId&&(n+="&source_member="+this.memberId),{title:this.goodsSkuDetail.sku_name,query:n,imageUrl:this.$util.img(this.goodsSkuDetail.sku_image,{size:"big"})}}};e.default=_}},[["1f29","common/runtime","common/vendor"]]]);