(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/rebate/rebate/detail"],{"052e":function(n,t,e){"use strict";(function(n){e("67ba");o(e("66fd"));var t=o(e("839f"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},2534:function(n,t,e){"use strict";var o=e("3b70"),i=e.n(o);i.a},"3b70":function(n,t,e){},"58d5":function(n,t,e){},"839f":function(n,t,e){"use strict";e.r(t);var o=e("9d14"),i=e("d18d");for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);e("addf"),e("2534");var a,l=e("f0c5"),s=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,"5fcdc951",null,!1,o["a"],a);t["default"]=s.exports},"9d14":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return o}));var o={uniCountDown:function(){return e.e("components/uni-count-down/uni-count-down").then(e.bind(null,"9fb1"))},uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"d7b6"))},nsGoodsSku:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-goods-sku/ns-goods-sku")]).then(e.bind(null,"88b6"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"4c1d"))},nsLogin:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-login/ns-login")]).then(e.bind(null,"2bc6"))},nsGoodsAction:function(){return e.e("components/ns-goods-action/ns-goods-action").then(e.bind(null,"b107"))},nsGoodsActionIcon:function(){return e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(e.bind(null,"81b4"))},nsGoodsActionButton:function(){return e.e("components/ns-goods-action-button/ns-goods-action-button").then(e.bind(null,"1031"))}},i=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.goodsSkuDetail.sku_images,(function(t,e){var o=n.__get_orig(t),i=n.$util.img(t,{size:"big"});return{$orig:o,g0:i}}))),o=n.$util.img(n.goodsSkuDetail.video_url),i=n.$util.img(n.goodsSkuDetail.sku_image,{size:"big"}),u=""!=n.goodsSkuDetail.video_url?n.$lang("video"):null,a=""!=n.goodsSkuDetail.video_url?n.$lang("image"):null,l=n.goodsSkuDetail.timeMachine?n.$util.img("upload/uniapp/goods/detail_promotion_left_bg.png"):null,s=n.goodsSkuDetail.timeMachine?n.$util.img("upload/uniapp/rebate/fanli.png"):null,r=n.goodsSkuDetail.timeMachine?n.$util.img("upload/uniapp/goods/detail_promotion_right_bg.png"):null,g=n.$util.img("upload/uniapp/rebate/open_group.png"),d=n.$util.img("upload/uniapp/rebate/spot.png"),c=n.$util.img("upload/uniapp/rebate/deliver_goods.png"),m=n.$util.img("upload/uniapp/rebate/spot.png"),p=n.$util.img("upload/uniapp/rebate/gift.png"),f=n.newList.length>0?n.__map(n.newList,(function(t,e){var o=n.__get_orig(t),i=t.end_time>n.timestamp&&t.headimg?n.$util.img(t.headimg):null,u=t.end_time>n.timestamp&&!t.headimg?n.$util.getDefaultImage():null;return{$orig:o,g11:i,g12:u}})):null,_=n.newList.length>0?n.$util.img("upload/uniapp/goods/mask_layer_pintuan_close.png"):null,h=n.newList.length>0&&""!=n.currentPintuan.headimg?n.$util.img(n.currentPintuan.headimg):null,b=n.newList.length>0&&""==n.currentPintuan.headimg?n.$util.getDefaultImage():null,v=n.newList.length>0?n.$util.img("upload/uniapp//spelling_who.png"):null,k=n.$lang("service"),$=n.goodsSkuDetail.qr_data&&1==n.goodsSkuDetail.qr_data.qr_state?n.$util.img("/upload/uniapp/goods/detail_erweiImage.png"):null,D=n.goodsSkuDetail.qr_data&&n.goodsSkuDetail.qr_data.qr_img&&""!=n.goodsSkuDetail.qr_data.qr_img&&1==n.goodsSkuDetail.qr_data.qr_state?n.$util.img(n.goodsSkuDetail.qr_data.qr_img):null,S=n.goodsSkuDetail.qr_data&&n.goodsSkuDetail.qr_data.qr_img&&(""==n.goodsSkuDetail.qr_data.qr_img||1!=n.goodsSkuDetail.qr_data.qr_state)?n.$util.img("/upload/uniapp/goods/detail_erweiImage.png"):null,w=1==n.evaluateConfig.evaluate_show?n.__map(n.goodsEvaluate,(function(t,e){var o=n.__get_orig(t),i=t.content&&t.member_headimg?n.$util.img(t.member_headimg):null,u=t.content&&!t.member_headimg?n.$util.getDefaultImage():null,a=t.content?n.$util.timeStampTurnTime(t.create_time):null,l=t.content&&t.images?n.__map(t.images,(function(t,e){var o=n.__get_orig(t),i=n.$util.img(t);return{$orig:o,g23:i}})):null;return{$orig:o,g20:i,g21:u,g22:a,l2:l}})):null,q="-1"!=n.poster?n.$util.img(n.poster):null;n._isMounted||(n.e0=function(t){n.switchMedia="video"},n.e1=function(t){n.switchMedia="img",n.videoContext.pause()},n.e2=function(t){n.currentPintuan.headimg=n.$util.getDefaultImage().default_headimg},n.e3=function(t,e){var o=arguments[arguments.length-1].currentTarget.dataset,i=o.eventParams||o["event-params"];e=i.item;e.member_headimg=n.$util.getDefaultImage().default_headimg},n.e4=function(t,e){var o=arguments[arguments.length-1].currentTarget.dataset,i=o.eventParams||o["event-params"];e=i.item;e.member_headimg=n.$util.getDefaultImage().default_headimg},n.e5=function(t){n.detailTab=0},n.e6=function(t){n.detailTab=1}),n.$mp.data=Object.assign({},{$root:{l0:e,g1:o,g2:i,m0:u,m1:a,g3:l,g4:s,g5:r,g6:g,g7:d,g8:c,g9:m,g10:p,l1:f,g13:_,g14:h,g15:b,g16:v,m2:k,g17:$,g18:D,g19:S,l3:w,g24:q}})},u=[]},aac8:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e("cb09")),i=a(e("d78b")),u=a(e("b6ac"));function a(n){return n&&n.__esModule?n:{default:n}}var l=function(){e.e("components/ns-goods-action/ns-goods-action").then(function(){return resolve(e("b107"))}.bind(null,e)).catch(e.oe)},s=function(){e.e("components/ns-goods-action-icon/ns-goods-action-icon").then(function(){return resolve(e("81b4"))}.bind(null,e)).catch(e.oe)},r=function(){e.e("components/ns-goods-action-button/ns-goods-action-button").then(function(){return resolve(e("1031"))}.bind(null,e)).catch(e.oe)},g=function(){e.e("components/uni-popup/uni-popup").then(function(){return resolve(e("d7b6"))}.bind(null,e)).catch(e.oe)},d=function(){Promise.all([e.e("common/vendor"),e.e("components/ns-goods-sku/ns-goods-sku")]).then(function(){return resolve(e("88b6"))}.bind(null,e)).catch(e.oe)},c=function(){Promise.all([e.e("common/vendor"),e.e("components/ns-goods-recommend/ns-goods-recommend")]).then(function(){return resolve(e("4955"))}.bind(null,e)).catch(e.oe)},m=function(){e.e("components/uni-count-down/uni-count-down").then(function(){return resolve(e("9fb1"))}.bind(null,e)).catch(e.oe)},p=function(){e.e("components/ns-goods-promotion/ns-goods-promotion").then(function(){return resolve(e("89ab"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/toTop/toTop").then(function(){return resolve(e("9eed"))}.bind(null,e)).catch(e.oe)},_={components:{nsGoodsAction:l,nsGoodsActionIcon:s,nsGoodsActionButton:r,uniPopup:g,nsGoodsSku:d,nsGoodsRecommend:c,uniCountDown:m,nsGoodsPromotion:p,toTop:f},data:function(){return{kefuConfig:{weapp:"",system:"",open:"",open_url:""}}},mixins:[o.default,i.default,u.default],onShareAppMessage:function(n){var t="/promotionpages/rebate/rebate/detail?pinfan_id="+this.pinfan_id+"&group_id="+this.groupId;return console.log("this.$util.img(this.goodsSkuDetail.sku_image)",this.$util.img(this.goodsSkuDetail.sku_image)),this.memberId&&(t+="&source_member="+this.memberId),{title:this.goodsSkuDetail.sku_name,imageUrl:this.$util.img(this.goodsSkuDetail.sku_images[0]),path:t,success:function(n){},fail:function(n){}}},onShareTimeline:function(){var n="pinfan_id="+this.pinfan_id+"&group_id="+this.groupId;return this.memberId&&(n+="&source_member="+this.memberId),console.log("this.$util.img(this.goodsSkuDetail.sku_image)",this.$util.img(this.goodsSkuDetail.sku_image)),{title:this.goodsSkuDetail.sku_name,query:n,imageUrl:this.$util.img(this.goodsSkuDetail.sku_images[0])}}};t.default=_},addf:function(n,t,e){"use strict";var o=e("58d5"),i=e.n(o);i.a},d18d:function(n,t,e){"use strict";e.r(t);var o=e("aac8"),i=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=i.a}},[["052e","common/runtime","common/vendor"]]]);