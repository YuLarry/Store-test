(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/bargain/detail/detail"],{"1f6e":function(n,o,e){"use strict";var t=e("7814"),i=e.n(t);i.a},4672:function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=a(e("494f")),i=a(e("f385")),u=a(e("c409"));function a(n){return n&&n.__esModule?n:{default:n}}var s=function(){e.e("components/ns-goods-action/ns-goods-action").then(function(){return resolve(e("7667"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(function(){return resolve(e("5d47"))}.bind(null,e)).catch(e.oe)},c=function(){e.e("components/ns-goods-action-button/ns-goods-action-button").then(function(){return resolve(e("9e8b"))}.bind(null,e)).catch(e.oe)},r=function(){e.e("components/uni-popup/uni-popup").then(function(){return resolve(e("92aa"))}.bind(null,e)).catch(e.oe)},d=function(){e.e("components/ns-goods-sku/ns-goods-sku").then(function(){return resolve(e("ac46"))}.bind(null,e)).catch(e.oe)},g=function(){e.e("components/ns-goods-recommend/ns-goods-recommend").then(function(){return resolve(e("1044"))}.bind(null,e)).catch(e.oe)},m=function(){e.e("components/uni-count-down/uni-count-down").then(function(){return resolve(e("1339"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/ns-goods-promotion/ns-goods-promotion").then(function(){return resolve(e("7118"))}.bind(null,e)).catch(e.oe)},p=function(){e.e("components/toTop/toTop").then(function(){return resolve(e("1aeb"))}.bind(null,e)).catch(e.oe)},b={components:{nsGoodsAction:s,nsGoodsActionIcon:l,nsGoodsActionButton:c,uniPopup:r,nsGoodsSku:d,nsGoodsRecommend:g,uniCountDown:m,nsGoodsPromotion:f,toTop:p},data:function(){return{kefuConfig:{weapp:"",system:"",open:"",open_url:""},maxBuy:1}},mixins:[t.default,i.default,u.default],onShareAppMessage:function(n){var o="/promotionpages/bargain/detail/detail?bargain_id="+this.bargain_id;return this.memberId&&(o+="&source_member="+this.memberId),{title:this.goodsSkuDetail.sku_name,imageUrl:this.$util.img(this.goodsSkuDetail.sku_image,{size:"big"}),path:o,success:function(n){},fail:function(n){}}},onShareTimeline:function(){var n="id="+this.id;return this.memberId&&(n+="&source_member="+this.memberId),{title:this.goodsSkuDetail.sku_name,query:n,imageUrl:this.$util.img(this.goodsSkuDetail.sku_image,{size:"big"})}}};o.default=b},5742:function(n,o,e){"use strict";var t=e("c0b1"),i=e.n(t);i.a},"74eb":function(n,o,e){"use strict";e.r(o);var t=e("4672"),i=e.n(t);for(var u in t)"default"!==u&&function(n){e.d(o,n,(function(){return t[n]}))}(u);o["default"]=i.a},7814:function(n,o,e){},"9c93":function(n,o,e){"use strict";e.r(o);var t=e("cf46"),i=e("74eb");for(var u in i)"default"!==u&&function(n){e.d(o,n,(function(){return i[n]}))}(u);e("1f6e"),e("5742");var a,s=e("f0c5"),l=Object(s["a"])(i["default"],t["b"],t["c"],!1,null,"e9641ade",null,!1,t["a"],a);o["default"]=l.exports},b7f8:function(n,o,e){"use strict";(function(n){e("34b0");t(e("66fd"));var o=t(e("9c93"));function t(n){return n&&n.__esModule?n:{default:n}}n(o.default)}).call(this,e("543d")["createPage"])},c0b1:function(n,o,e){},cf46:function(n,o,e){"use strict";e.d(o,"b",(function(){return i})),e.d(o,"c",(function(){return u})),e.d(o,"a",(function(){return t}));var t={uniCountDown:function(){return e.e("components/uni-count-down/uni-count-down").then(e.bind(null,"1339"))},uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"92aa"))},nsGoodsSku:function(){return e.e("components/ns-goods-sku/ns-goods-sku").then(e.bind(null,"ac46"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"790a"))},nsLogin:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-login/ns-login")]).then(e.bind(null,"2893"))},nsGoodsAction:function(){return e.e("components/ns-goods-action/ns-goods-action").then(e.bind(null,"7667"))},nsGoodsActionIcon:function(){return e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(e.bind(null,"5d47"))},nsGoodsActionButton:function(){return e.e("components/ns-goods-action-button/ns-goods-action-button").then(e.bind(null,"9e8b"))}},i=function(){var n=this,o=n.$createElement,e=(n._self._c,n.__map(n.goodsSkuDetail.sku_images,(function(o,e){var t=n.__get_orig(o),i=n.$util.img(o,{size:"big"});return{$orig:t,g0:i}}))),t=n.$util.img(n.goodsSkuDetail.video_url),i=n.$util.img(n.goodsSkuDetail.sku_image,{size:"big"}),u=""!=n.goodsSkuDetail.video_url?n.$lang("video"):null,a=""!=n.goodsSkuDetail.video_url?n.$lang("image"):null,s=n.goodsSkuDetail.timeMachine?n.$util.img("upload/uniapp/goods/detail_promotion_left_bg.png"):null,l=n.goodsSkuDetail.timeMachine?n.$util.img("upload/uniapp/goods/detail_bargain_tag.png"):null,c=n.goodsSkuDetail.timeMachine?n.$util.img("upload/uniapp/goods/detail_promotion_right_bg.png"):null,r=n.$lang("common.currencySymbol"),d=n.goodsSkuDetail.price>0?n.$lang("common.currencySymbol"):null,g=n.$lang("service"),m=1==n.evaluateConfig.evaluate_show&&n.goodsEvaluate.content&&n.goodsEvaluate.member_headimg?n.$util.img(n.goodsEvaluate.member_headimg):null,f=1==n.evaluateConfig.evaluate_show&&n.goodsEvaluate.content&&!n.goodsEvaluate.member_headimg?n.$util.getDefaultImage():null,p=1==n.evaluateConfig.evaluate_show&&n.goodsEvaluate.content?n.$util.timeStampTurnTime(n.goodsEvaluate.create_time):null,b=1==n.evaluateConfig.evaluate_show&&n.goodsEvaluate.content&&n.goodsEvaluate.images?n.__map(n.goodsEvaluate.images,(function(o,e){var t=n.__get_orig(o),i=n.$util.img(o);return{$orig:t,g9:i}})):null,h="-1"!=n.poster?n.$util.img(n.poster):null;n._isMounted||(n.e0=function(o){n.switchMedia="video"},n.e1=function(o){n.switchMedia="img"},n.e2=function(o){n.goodsEvaluate.member_headimg=n.$util.getDefaultImage().default_headimg},n.e3=function(o){n.goodsEvaluate.member_headimg=n.$util.getDefaultImage().default_headimg},n.e4=function(o){n.detailTab=0},n.e5=function(o){return n.$util.redirectTo("/promotionpages/bargain/launch/launch",{id:n.goodsSkuDetail.launch_info.launch_id})}),n.$mp.data=Object.assign({},{$root:{l0:e,g1:t,g2:i,m0:u,m1:a,g3:s,g4:l,g5:c,m2:r,m3:d,m4:g,g6:m,g7:f,g8:p,l1:b,g10:h}})},u=[]}},[["b7f8","common/runtime","common/vendor"]]]);