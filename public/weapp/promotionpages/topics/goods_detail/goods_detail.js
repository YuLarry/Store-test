(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/topics/goods_detail/goods_detail"],{"127a":function(o,n,e){"use strict";(function(o){e("67ba");t(e("66fd"));var n=t(e("e5b8"));function t(o){return o&&o.__esModule?o:{default:o}}o(n.default)}).call(this,e("543d")["createPage"])},5329:function(o,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return t}));var t={uniCountDown:function(){return e.e("components/uni-count-down/uni-count-down").then(e.bind(null,"9fb1"))},uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"d7b6"))},nsGoodsSku:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-goods-sku/ns-goods-sku")]).then(e.bind(null,"88b6"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"4c1d"))},nsLogin:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-login/ns-login")]).then(e.bind(null,"2bc6"))},nsGoodsAction:function(){return e.e("components/ns-goods-action/ns-goods-action").then(e.bind(null,"b107"))},nsGoodsActionIcon:function(){return e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(e.bind(null,"81b4"))},nsGoodsActionButton:function(){return e.e("components/ns-goods-action-button/ns-goods-action-button").then(e.bind(null,"1031"))}},i=function(){var o=this,n=o.$createElement,e=(o._self._c,o.__map(o.goodsSkuDetail.sku_images,(function(n,e){var t=o.__get_orig(n),i=o.$util.img(n,{size:"big"});return{$orig:t,g0:i}}))),t=o.$util.img(o.goodsSkuDetail.video_url),i=o.$util.img(o.goodsSkuDetail.sku_image,{size:"big"}),u=""!=o.goodsSkuDetail.video_url?o.$lang("video"):null,a=""!=o.goodsSkuDetail.video_url?o.$lang("image"):null,s=o.goodsSkuDetail.discountTimeMachine?o.$util.img("upload/uniapp/goods/detail_promotion_left_bg.png"):null,l=o.goodsSkuDetail.discountTimeMachine?o.$util.img("upload/uniapp/goods/detail_topics_tag.png"):null,d=o.goodsSkuDetail.discountTimeMachine?o.$util.img("upload/uniapp/goods/detail_promotion_right_bg.png"):null,c=o.$lang("common.currencySymbol"),r=o.goodsSkuDetail.price>0||o.goodsSkuDetail.market_price>0?o.$lang("common.currencySymbol"):null,g=o.$lang("service"),m=o.goodsSkuDetail.qr_data&&1==o.goodsSkuDetail.qr_data.qr_state?o.$util.img("/upload/uniapp/goods/detail_erweiImage.png"):null,f=o.goodsSkuDetail.qr_data&&o.goodsSkuDetail.qr_data.qr_img&&""!=o.goodsSkuDetail.qr_data.qr_img&&1==o.goodsSkuDetail.qr_data.qr_state?o.$util.img(o.goodsSkuDetail.qr_data.qr_img):null,p=o.goodsSkuDetail.qr_data&&o.goodsSkuDetail.qr_data.qr_img&&(""==o.goodsSkuDetail.qr_data.qr_img||1!=o.goodsSkuDetail.qr_data.qr_state)?o.$util.img("/upload/uniapp/goods/detail_erweiImage.png"):null,_=1==o.evaluateConfig.evaluate_show&&o.goodsEvaluate.content&&o.goodsEvaluate.member_headimg?o.$util.img(o.goodsEvaluate.member_headimg):null,b=1==o.evaluateConfig.evaluate_show&&o.goodsEvaluate.content&&!o.goodsEvaluate.member_headimg?o.$util.getDefaultImage():null,h=1==o.evaluateConfig.evaluate_show&&o.goodsEvaluate.content?o.$util.timeStampTurnTime(o.goodsEvaluate.create_time):null,v=1==o.evaluateConfig.evaluate_show&&o.goodsEvaluate.content&&o.goodsEvaluate.images?o.__map(o.goodsEvaluate.images,(function(n,e){var t=o.__get_orig(n),i=o.$util.img(n);return{$orig:t,g12:i}})):null,k="-1"!=o.poster?o.$util.img(o.poster):null;o._isMounted||(o.e0=function(n){o.switchMedia="video"},o.e1=function(n){o.switchMedia="img"},o.e2=function(n){o.goodsEvaluate.member_headimg=o.$util.getDefaultImage().default_headimg},o.e3=function(n){o.goodsEvaluate.member_headimg=o.$util.getDefaultImage().default_headimg},o.e4=function(n){o.detailTab=0},o.e5=function(n){o.detailTab=1}),o.$mp.data=Object.assign({},{$root:{l0:e,g1:t,g2:i,m0:u,m1:a,g3:s,g4:l,g5:d,m2:c,m3:r,m4:g,g6:m,g7:f,g8:p,g9:_,g10:b,g11:h,l1:v,g13:k}})},u=[]},7274:function(o,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(e("62f3")),i=a(e("d78b")),u=a(e("b6ac"));function a(o){return o&&o.__esModule?o:{default:o}}var s=function(){e.e("components/ns-goods-action/ns-goods-action").then(function(){return resolve(e("b107"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(function(){return resolve(e("81b4"))}.bind(null,e)).catch(e.oe)},d=function(){e.e("components/ns-goods-action-button/ns-goods-action-button").then(function(){return resolve(e("1031"))}.bind(null,e)).catch(e.oe)},c=function(){e.e("components/uni-popup/uni-popup").then(function(){return resolve(e("d7b6"))}.bind(null,e)).catch(e.oe)},r=function(){Promise.all([e.e("common/vendor"),e.e("components/ns-goods-sku/ns-goods-sku")]).then(function(){return resolve(e("88b6"))}.bind(null,e)).catch(e.oe)},g=function(){Promise.all([e.e("common/vendor"),e.e("components/ns-goods-recommend/ns-goods-recommend")]).then(function(){return resolve(e("4955"))}.bind(null,e)).catch(e.oe)},m=function(){e.e("components/uni-count-down/uni-count-down").then(function(){return resolve(e("9fb1"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/ns-goods-promotion/ns-goods-promotion").then(function(){return resolve(e("89ab"))}.bind(null,e)).catch(e.oe)},p=function(){e.e("components/toTop/toTop").then(function(){return resolve(e("9eed"))}.bind(null,e)).catch(e.oe)},_={components:{nsGoodsAction:s,nsGoodsActionIcon:l,nsGoodsActionButton:d,uniPopup:c,nsGoodsSku:r,nsGoodsRecommend:g,uniCountDown:m,nsGoodsPromotion:f,toTop:p},data:function(){return{kefuConfig:{weapp:"",system:"",open:"",open_url:""}}},mixins:[t.default,i.default,u.default],onShareAppMessage:function(o){var n="/promotionpages/topics/goods_detail/goods_detail?id="+this.topics_id;return this.memberId&&(n+="&source_member="+this.memberId),{title:this.goodsSkuDetail.sku_name,imageUrl:this.$util.img(this.goodsSkuDetail.sku_image,{size:"big"}),path:n,success:function(o){},fail:function(o){}}},onShareTimeline:function(){var o="id="+this.topics_id;return this.memberId&&(o+="&source_member="+this.memberId),{title:this.goodsSkuDetail.sku_name,query:o,imageUrl:this.$util.img(this.goodsSkuDetail.sku_image,{size:"big"})}}};n.default=_},7537:function(o,n,e){},"8d1c5":function(o,n,e){"use strict";var t=e("d234"),i=e.n(t);i.a},"9d03":function(o,n,e){"use strict";var t=e("7537"),i=e.n(t);i.a},d234:function(o,n,e){},d70d:function(o,n,e){"use strict";e.r(n);var t=e("7274"),i=e.n(t);for(var u in t)"default"!==u&&function(o){e.d(n,o,(function(){return t[o]}))}(u);n["default"]=i.a},e5b8:function(o,n,e){"use strict";e.r(n);var t=e("5329"),i=e("d70d");for(var u in i)"default"!==u&&function(o){e.d(n,o,(function(){return i[o]}))}(u);e("9d03"),e("8d1c5");var a,s=e("f0c5"),l=Object(s["a"])(i["default"],t["b"],t["c"],!1,null,"14dfdf2e",null,!1,t["a"],a);n["default"]=l.exports}},[["127a","common/runtime","common/vendor"]]]);