(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/pintuan/order/order","components/ns-goods-sku/ns-goods-sku"],{"0240":function(t,i,e){"use strict";e.r(i);var o=e("69b6"),s=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);i["default"]=s.a},1194:function(t,i,e){"use strict";e.r(i);var o=e("aedf"),s=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);i["default"]=s.a},1739:function(t,i,e){"use strict";var o=e("5bec"),s=e.n(o);s.a},"19c3":function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return o}));var o={uniCountDown:function(){return e.e("components/uni-count-down/uni-count-down").then(e.bind(null,"9fb1"))},uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"d7b6"))},nsLogin:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-login/ns-login")]).then(e.bind(null,"2bc6"))},nsGoodsSku:function(){return Promise.resolve().then(e.bind(null,"88b6"))}},s=function(){var t=this,i=t.$createElement,e=(t._self._c,t.$util.img(t.groupDetail.sku_image)),o=t.__map(t.groupDetail.member_list,(function(i,e){var o=t.__get_orig(i),s=t.$util.img(i.member_img);return{$orig:o,g1:s}})),s=t.$util.img("/upload/uniapp/default_headimg.png"),a=t.__map(t.groupDetail.member_list,(function(i,e){var o=t.__get_orig(i),s=t.$util.img(i.member_img);return{$orig:o,g3:s}})),u=t.$util.img("/upload/uniapp/default_headimg.png"),n=t.$util.img("upload/uniapp/goods/mask_layer_pintuan_close.png");t.$mp.data=Object.assign({},{$root:{g0:e,l0:o,g2:s,l1:a,g4:u,g5:n}})},a=[]},"229c":function(t,i,e){"use strict";var o=e("7a97"),s=e.n(o);s.a},"3d75":function(t,i,e){},"3fbb":function(t,i,e){"use strict";(function(t){e("67ba");o(e("66fd"));var i=o(e("6d1b"));function o(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])},"5bec":function(t,i,e){},"69b6":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=s(e("9374"));function s(t){return t&&t.__esModule?t:{default:t}}var a=function(){e.e("components/uni-popup/uni-popup-sku").then(function(){return resolve(e("f410"))}.bind(null,e)).catch(e.oe)},u={name:"ns-goods-sku",components:{uniPopup:a},props:{goodsDetail:{type:Object,default:null},disabled:{type:Boolean,default:!1},pointLimit:{type:[Number,String]},maxBuy:{type:Number,default:0},minBuy:{type:Number,default:0}},data:function(){return{isIphoneX:!1,systemInfo:{},number:1,btnSwitch:!1,type:"",callback:null,skuId:0,pintuanId:0,limitNumber:0,minNumber:0,preview:0,cartNumber:0}},created:function(){this.isIphoneX=this.$util.uniappIsIPhoneX(),this.systemInfo=t.getSystemInfoSync()},watch:{pointLimit:function(t,i){this.limitNumber=Number(t)},goodsDetail:function(t,i){this.skuId=t.sku_id},minBuy:function(t,i){this.minBuy>1&&(this.number=Number(this.minBuy))}},computed:{balance:function(){var t=this.goodsDetail.member_price&&this.goodsDetail.member_price>0?this.goodsDetail.member_price:this.goodsDetail.price,i=parseFloat(t)-parseFloat(this.goodsDetail.presale_price);return i=i<0?0:i,i.toFixed(2)}},methods:{show:function(t,i){this.callback=i,this.$refs.skuPopup.open(i),this.type=t,this.skuId=this.goodsDetail.sku_id,this.preview=this.goodsDetail.preview||0,"pintuan"==this.type&&this.goodsDetail.pintuan_id||"pinfan"==this.type&&this.goodsDetail.pinfan_id?this.limitNumber=this.goodsDetail.buy_num:"groupbuy"==this.type&&this.goodsDetail.groupbuy_id?this.goodsDetail.stock>this.goodsDetail.buy_num&&(this.number=this.goodsDetail.buy_num,this.minNumber=this.goodsDetail.buy_num):"bargain"==this.type&&this.goodsDetail.bargain_id&&(this.number=1,this.minNumber=1),"join_cart"==this.type&&this.getCartData(),"point"==this.type&&-1==this.goodsDetail.stock&&(this.goodsDetail.pointCoupon=1,this.goodsDetail.stock=99999),"bale"==this.type&&(this.number=1,-1==this.$util.inArray(this.skuId+"",this.goodsDetail.activity_sku_ids)?(this.confirmDisabled=!0,this.$util.showToast({title:"该规格未参与打包一口价活动"})):this.confirmDisabled=!1),this.$forceUpdate()},hide:function(){this.$refs.skuPopup.close()},previewMedia:function(){var i=[];i.push(this.$util.img(this.goodsDetail.sku_image,{size:"big"})),t.previewImage({current:1,urls:i})},change:function(t,i){if(!this.disabled){this.btnSwitch=!1,this.skuId=t;for(var e=0;e<this.goodsDetail.goods_spec_format.length;e++)for(var o=this.goodsDetail.goods_spec_format[e],s=0;s<o.value.length;s++)i==this.goodsDetail.goods_spec_format[e].value[s].spec_id&&(this.goodsDetail.goods_spec_format[e].value[s].selected=!1);this.goodsDetail.pintuan_id?this.getPintuanGoodsSkuInfo():this.goodsDetail.pinfan_id?this.getPinfanGoodsSkuInfo():this.goodsDetail.groupbuy_id?this.getGroupbuyGoodsSkuInfo():this.goodsDetail.bargain_id?this.getBargainGoodsSkuInfo():this.goodsDetail.seckill_id?this.getSeckillGoodsSkuInfo():this.goodsDetail.topic_id?this.getTopicsGoodsSkuInfo():this.goodsDetail.exchange_id?this.getPointGoodsSkuInfo():"presale"==this.type&&this.goodsDetail.presale_id?this.getPresaleGoodsSkuInfo():this.goodsDetail.bale_id?(this.getGoodsSkuInfo(),-1==this.$util.inArray(t+"",this.goodsDetail.activity_sku_ids)?(this.confirmDisabled=!0,this.$util.showToast({title:"该规格未参与打包一口价活动"})):this.confirmDisabled=!1):this.getGoodsSkuInfo()}},showPrice:function(t){return parseFloat(t)},getFenxiaoGoodsDetail:function(){var t=this;this.$api.sendRequest({url:"/fenxiao/api/goods/detail",data:{sku_id:this.skuId},success:function(i){0==i.code&&i.data&&(t.levelInfo=i.data)}})},getGoodsSkuInfo:function(){var t=this;this.getFenxiaoGoodsDetail();this.$api.sendRequest({url:"/api/goodssku/info",data:{sku_id:this.skuId},success:function(i){var e=i.data;if(null!=e){if("presale"==e.promotion_type)return void t.$util.redirectTo("/promotionpages/presale/detail/detail",{id:e.presale_id,sku_id:t.skuId},"reLaunch");e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),1==t.goodsSkuDetail.promotion_type&&(t.goodsSkuDetail.discountTimeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp)),1==t.goodsSkuDetail.promotion_type&&t.goodsSkuDetail.discountTimeMachine?t.goodsSkuDetail.member_price>0&&Number(t.goodsSkuDetail.member_price)<=Number(t.goodsSkuDetail.discount_price)?t.goodsSkuDetail.show_price=t.goodsSkuDetail.member_price:t.goodsSkuDetail.show_price=t.goodsSkuDetail.discount_price:t.goodsSkuDetail.member_price>0?t.goodsSkuDetail.show_price=t.goodsSkuDetail.member_price:t.goodsSkuDetail.show_price=t.goodsSkuDetail.price,t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail),t.$emit("GetSkuid",t.skuId),t.$emit("levelInfo",t.levelInfo),t.$forceUpdate()}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getPintuanGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/pintuan/api/goods/info",data:{sku_id:this.skuId,pintuan_id:this.goodsDetail.pintuan_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getPintuanGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.goodsSkuDetail.show_price=0==t.goodsDetail.group_id?t.goodsSkuDetail.promotion_price:t.goodsSkuDetail.pintuan_price,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getPinfanGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/pinfan/api/goods/info",data:{sku_id:this.skuId,pintuan_id:this.goodsDetail.pinfan_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getPinfanGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.goodsSkuDetail.show_price=0==t.goodsDetail.group_id?t.goodsSkuDetail.promotion_price:t.goodsSkuDetail.pintuan_price,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getBargainGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/bargain/api/goods/info",data:{sku_id:this.skuId,bargain_id:this.goodsDetail.bargain_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getBargainGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.goodsSkuDetail.show_price=t.goodsDetail.bargain_id>0?t.goodsSkuDetail.floor_price:t.goodsSkuDetail.price,t.goodsSkuDetail.stock=t.goodsSkuDetail.bargain_stock,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getTopicsGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/topic/api/topicgoods/info",data:{sku_id:this.skuId,topic_id:this.goodsDetail.topic_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getTopicsGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e.goods_sku_detail,t.dealData(),t.goodsSkuDetail.show_price=t.goodsDetail.topic_id>0?t.goodsSkuDetail.topic_price:t.goodsSkuDetail.price,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getGroupbuyGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/groupbuy/api/goods/info",data:{sku_id:this.skuId,groupbuy_id:this.goodsDetail.groupbuy_id},success:function(i){var e=i.data;null!=e?(e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.goodsSkuDetail.show_price=t.goodsDetail.groupbuy_price,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,e.stock>e.buy_num&&(t.number=t.goodsDetail.buy_num,t.minNumber=t.goodsDetail.buy_num),t.$emit("refresh",t.goodsSkuDetail)):t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getSeckillGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/seckill/api/seckillgoods/info",data:{sku_id:this.skuId,seckill_id:this.goodsDetail.seckill_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getSeckillGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e.goods_sku_detail,t.dealData(),t.goodsSkuDetail.show_price=t.goodsSkuDetail.seckill_price,t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0&&(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2),t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getPointGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/pointexchange/api/goods/info",data:{sku_id:this.skuId,exchange_id:this.goodsDetail.exchange_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getPointGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/promotionpages/point/list/list",{},"redirectTo")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getPresaleGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/presale/api/goods/info",data:{sku_id:this.skuId,id:this.goodsDetail.presale_id},success:function(i){var e=i.data;if(e){if("again"==e.type)return t.skuId=e.sku_id,void t.getPresaleGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.skuId},"redirectTo")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},dealData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.goodsSkuDetail;if(t.sku_images?t.sku_images=t.sku_images.split(","):t.sku_images=[],t.goods_spec_format&&t.goods_image&&(t.goods_image=t.goods_image.split(","),t.sku_images=t.sku_images.concat(t.goods_image)),t.sku_spec_format&&(t.sku_spec_format=JSON.parse(t.sku_spec_format)),t.goods_attr_format){var i=JSON.parse(t.goods_attr_format);t.goods_attr_format=this.$util.unique(i,"attr_id");for(var e=0;e<t.goods_attr_format.length;e++)for(var s=0;s<i.length;s++)t.goods_attr_format[e].attr_id==i[s].attr_id&&t.goods_attr_format[e].attr_value_id!=i[s].attr_value_id&&(t.goods_attr_format[e].attr_value_name+="、"+i[s].attr_value_name)}t.goods_spec_format&&(t.goods_spec_format=JSON.parse(t.goods_spec_format)),t.goods_content&&"point"!=this.type&&(t.goods_content=(0,o.default)(t.goods_content)),t.content&&"point"==this.type&&(t.content=(0,o.default)(t.content)),this.goodsDetail.unit=this.goodsDetail.unit||"件",this.keyInput(!0),this.$langConfig.title(t.goods_name)},changeNum:function(t){if(0!=this.goodsDetail.stock){var i=1,e=this.goodsDetail.stock;if(1==this.maxBuy&&(e=1),1==this.goodsDetail.is_limit&&this.maxBuy>0&&this.maxBuy<e&&(e=this.maxBuy),1==this.goodsDetail.is_limit&&2==this.goodsDetail.limit_type&&this.maxBuy>0&&this.goodsDetail.purchased_num>0){var o=this.maxBuy-this.goodsDetail.purchased_num;e=o<this.goodsDetail.stock?o:this.goodsDetail.stock}if(this.minBuy>1&&(i=this.minBuy),"pintuan"==this.type&&this.goodsDetail.pintuan_id?e=this.goodsDetail.buy_num>this.goodsDetail.stock?this.goodsDetail.stock:this.goodsDetail.buy_num:"groupbuy"==this.type&&this.goodsDetail.groupbuy_id?(e=(this.goodsDetail.buy_num,this.goodsDetail.stock,this.goodsDetail.stock),i=this.goodsDetail.buy_num):"seckill"==this.type&&this.goodsDetail.seckill_id&&this.goodsDetail.num>0&&this.goodsDetail.num<this.goodsDetail.stock?e=this.goodsDetail.num:"bargain"==this.type&&this.goodsDetail.bargain_id?e=1:"presale"==this.type&&this.goodsDetail.presale_id&&(e=this.goodsDetail.presale_num>this.goodsDetail.stock?this.goodsDetail.stock:this.goodsDetail.presale_num),"+"==t)if(this.number<e)this.number++;else{if(this.number>=this.goodsDetail.stock)return void this.$util.showToast({title:"库存不足"});if(1==this.goodsDetail.is_limit&&this.maxBuy>0){if(1==this.goodsDetail.limit_type)return void this.$util.showToast({title:"该商品每次最多购买"+this.maxBuy+this.goodsDetail.unit});if(2==this.goodsDetail.limit_type){var s="该商品每人限购"+this.maxBuy+this.goodsDetail.unit;return s+=this.goodsDetail.purchased_num>0?"，您已购买了"+this.goodsDetail.purchased_num+this.goodsDetail.unit:"",void this.$util.showToast({title:s})}}if("seckill"==this.type&&this.goodsDetail.seckill_id&&this.goodsDetail.num>0)return void this.$util.showToast({title:"该商品每人限购"+this.goodsDetail.num+this.goodsDetail.unit});if("presale"==this.type&&this.goodsDetail.presale_id&&this.goodsDetail.presale_num>0)return void this.$util.showToast({title:"该商品每人限购"+this.goodsDetail.presale_num+this.goodsDetail.unit})}else if("-"==t){if(!(this.number>i))return void(this.minBuy>1&&this.$util.showToast({title:"该商品"+this.minBuy+this.goodsDetail.unit+"起售"}));this.number-=1}this.number>this.limitNumber&&this.limitNumber&&(this.number=this.limitNumber)}},blur:function(){if(this.number||(this.number=0),this.number>this.limitNumber&&this.limitNumber&&(this.number=this.limitNumber),this.number<this.minNumber&&this.minNumber&&(this.number=this.minNumber),1==this.goodsDetail.is_limit&&this.maxBuy>0&&this.number>this.maxBuy&&(this.number=this.maxBuy),1==this.goodsDetail.is_limit&&this.maxBuy>0&&this.goodsDetail.purchased_num>0){var t=this.maxBuy-this.goodsDetail.purchased_num;this.number>t&&(this.number=t)}this.number<this.minBuy&&this.minBuy>0&&(this.number=this.minBuy),this.number<=0&&(this.number=1)},keyInput:function(t,i){var e=this;setTimeout((function(){var o=e.goodsDetail.stock;0!=e.goodsDetail.stock?(t&&0==e.number.length&&(e.number=1),t&&(e.number<=0||isNaN(e.number))&&(e.number=1),"pintuan"==e.type&&e.goodsDetail.pintuan_id&&e.number>e.goodsDetail.buy_num?e.number=e.goodsDetail.buy_num:"groupbuy"==e.type&&e.goodsDetail.groupbuy_id&&e.number<e.goodsDetail.buy_num?e.number=1:"seckill"==e.type&&e.goodsDetail.seckill_id&&e.goodsDetail.max_buy>0&&e.number>e.goodsDetail.max_buy?e.number=e.goodsDetail.max_buy:"bargain"==e.type&&e.goodsDetail.bargain_id?e.number=1:"presale"==e.type&&e.goodsDetail.presale_id&&e.goodsDetail.presale_num>0&&e.number>e.goodsDetail.presale_num?e.number=e.goodsDetail.presale_num:e.number>o&&(e.number=o),e.minBuy>1&&e.number<e.minBuy&&(e.number=e.minBuy),t&&(e.number=parseInt(e.number)),i&&i()):e.number=0}),0)},confirm:function(){var i=this;t.removeStorageSync("delivery"),this.preview?this.$util.showToast({title:"预览商品无法购买"}):t.getStorageSync("token")?this.keyInput(!0,(function(){if(0!=i.goodsDetail.stock)if(0==i.number.length||i.number<=0)i.$util.showToast({title:"购买数量不能小于等于0"});else if(i.goodsDetail.buy_num>i.goodsDetail.stock)i.$util.showToast({title:"库存小于最低购买数量"});else if(i.number>i.goodsDetail.stock)i.$util.showToast({title:"库存不足"});else if(1==i.goodsDetail.is_limit&&1==i.goodsDetail.limit_type&&i.maxBuy>0&&i.number>i.maxBuy)i.$util.showToast({title:"该商品每次最多购买"+i.maxBuy+i.goodsDetail.unit});else{if(1==i.goodsDetail.is_limit&&2==i.goodsDetail.limit_type&&i.maxBuy>0&&i.number+i.goodsDetail.purchased_num>i.maxBuy){var e="该商品每人限购"+i.maxBuy+i.goodsDetail.unit;return e+=i.goodsDetail.purchased_num>0?"，您已购买了"+i.goodsDetail.purchased_num+i.goodsDetail.unit:"",void i.$util.showToast({title:e})}if("join_cart"==i.type&&1==i.goodsDetail.is_limit&&i.maxBuy>0&&i.cartNumber+i.number>i.maxBuy)i.$util.showToast({title:"该商品每人限购"+i.maxBuy+i.goodsDetail.unit});else if(!i.btnSwitch)if(i.btnSwitch=!0,"join_cart"==i.type)i.$api.sendRequest({url:"/api/cart/add",data:{sku_id:i.skuId,num:i.number},success:function(t){var e=t.data;e>0&&(i.$util.showToast({title:"加入购物车成功"}),i.cartNumber+=i.number,i.callback&&i.callback()),i.$refs.skuPopup.close(),i.btnSwitch=!1},fail:function(t){i.$refs.skuPopup.close(),i.btnSwitch=!1}});else if("buy_now"==i.type){var o={sku_id:i.skuId,num:i.number};t.setStorage({key:"orderCreateData",data:o,success:function(){i.$util.redirectTo("/pages/order/payment/payment"),i.btnSwitch=!1}})}else if("seckill"==i.type){o={seckill_id:i.goodsDetail.seckill_id,num:i.number,sku_id:i.skuId};t.setStorage({key:"seckillOrderCreateData",data:o,success:function(){i.$util.redirectTo("/promotionpages/seckill/payment/payment"),i.btnSwitch=!1}})}else if("pintuan"==i.type){o={pintuan_goods_id:i.goodsDetail.id,group_id:i.goodsDetail.group_id,num:i.number};t.setStorage({key:"pintuanOrderCreateData",data:o,success:function(){i.$util.redirectTo("/promotionpages/pintuan/payment/payment"),i.btnSwitch=!1}})}else if("pinfan"==i.type){o={pintuan_goods_id:i.goodsDetail.id,group_id:i.goodsDetail.group_id,num:i.number};t.setStorage({key:"pinfanOrderCreateData",data:o,success:function(){i.$util.redirectTo("/promotionpages/rebate/rebate/payment"),i.btnSwitch=!1}})}else if("topic"==i.type){o={topic_goods_id:i.goodsDetail.id,num:i.number};t.setStorage({key:"topicOrderCreateData",data:o,success:function(){i.$util.redirectTo("/promotionpages/topics/payment/payment"),i.btnSwitch=!1}})}else if("groupbuy"==i.type){o={groupbuy_id:i.goodsDetail.groupbuy_id,sku_id:i.skuId,num:i.number};t.setStorage({key:"groupbuyOrderCreateData",data:o,success:function(){i.$util.redirectTo("/promotionpages/groupbuy/payment/payment"),i.btnSwitch=!1}})}else if("presale"==i.type){o={presale_id:i.goodsDetail.presale_id,sku_id:i.skuId,num:i.number};t.setStorage({key:"presaleOrderCreateData",data:o,success:function(){i.$util.redirectTo("/promotionpages/presale/payment/payment"),i.btnSwitch=!1}})}else if("bargain"==i.type)i.$api.sendRequest({url:"/bargain/api/bargain/launch",data:{id:i.goodsDetail.id},success:function(t){i.btnSwitch=!1,0==t.code?i.$util.redirectTo("/promotionpages/bargain/launch/launch",{id:t.data},"redirectTo"):i.$util.showToast({title:t.message})}});else if("point"==i.type){o={id:i.goodsDetail.exchange_id,sku_id:i.skuId,num:i.number};t.setStorage({key:"exchangeOrderCreateData",data:o,success:function(){i.$util.redirectTo("/promotionpages/point/payment/payment"),i.btnSwitch=!1}})}else"bale"==i.type&&(i.confirmDisabled||(i.btnSwitch=!1,i.goodsSkuDetail?i.$emit("confirm",{detail:i.goodsSkuDetail,goods_id:i.goodsSkuDetail.goods_id,sku_id:i.skuId,num:i.number}):i.$emit("confirm",{detail:i.goodsDetail,goods_id:i.goodsDetail.goods_id,sku_id:i.goodsDetail.sku_id,num:i.number})))}else i.$util.showToast({title:"商品已售罄"})})):this.$refs.login.open()},closeSkuPopup:function(){this.$refs.skuPopup.close()},imageError:function(){this.goodsDetail.sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},valueImageError:function(t,i){this.goodsDetail.goods_spec_format[t].value[i].image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getCartData:function(){var t=this;this.$api.sendRequest({url:"/api/cart/goodsnum",data:{goods_id:this.goodsDetail.goods_id},success:function(i){i.code>=0&&(t.cartNumber=i.data)}})}}};i.default=u}).call(this,e("543d")["default"])},"6d1b":function(t,i,e){"use strict";e.r(i);var o=e("19c3"),s=e("1194");for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("1739"),e("7bc3");var u,n=e("f0c5"),d=Object(n["a"])(s["default"],o["b"],o["c"],!1,null,"26af35a8",null,!1,o["a"],u);i["default"]=d.exports},"7a97":function(t,i,e){},"7bc3":function(t,i,e){"use strict";var o=e("b5d6"),s=e.n(o);s.a},"88b6":function(t,i,e){"use strict";e.r(i);var o=e("e0bc"),s=e("0240");for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("229c"),e("bf57");var u,n=e("f0c5"),d=Object(n["a"])(s["default"],o["b"],o["c"],!1,null,"05f879e1",null,!1,o["a"],u);i["default"]=d.exports},aedf:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=a(e("a34a")),s=(a(e("88b6")),a(e("9374")));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,i,e,o,s,a,u){try{var n=t[a](u),d=n.value}catch(l){return void e(l)}n.done?i(d):Promise.resolve(d).then(o,s)}function n(t){return function(){var i=this,e=arguments;return new Promise((function(o,s){var a=t.apply(i,e);function n(t){u(a,o,s,n,d,"next",t)}function d(t){u(a,o,s,n,d,"throw",t)}n(void 0)}))}}var d={data:function(){return{id:"",pintuan_id:"",groupId:"",groupDetail:{timeMachine:{d:""}},kill:0,goodsSkuDetail:{},whetherCollection:""}},onLoad:function(t){this.id=t.id,this.groupId=t.group_id,this.pintuan_id=t.pintuan_id,this.getGroupDetail(),this.getGoodsSkuDetail()},methods:{getGroupDetail:function(){var t=this;this.$api.sendRequest({url:"/pintuan/api/pintuangroup/info",data:{group_id:this.groupId},success:function(i){t.kill=i.data.pintuan_num-i.data.pintuan_count,0==i.code&&(i.data.end_time>i.timestamp?i.data.timeMachine=t.$util.countDown(i.data.end_time-i.timestamp):i.data.timeMachine=null,t.groupDetail=i.data)}})},delect:function(){this.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},delegation:function(){var i=this;t.getStorageSync("token")?this.groupDetail.is_self?this.$util.showToast({title:"您不能参与自己的团"}):this.$refs.pintuanPopup.open():setTimeout((function(){i.$refs.login.open("/promotionpages/pintuan/order/order?pintuan_id="+i.pintuan_id+"&group_id="+i.groupId+"&id="+i.id)}))},close:function(){this.$refs.pintuanPopup.close()},joinPintuan:function(){this.close(),this.pintuan(!1)},refreshGoodsSkuDetail:function(t){var i=this;Object.assign(this.goodsSkuDetail,t),this.goodsSkuDetail.unit=this.goodsSkuDetail.unit||"件",this.swiperCurrent>this.goodsSkuDetail.sku_images.length&&(this.swiperAutoplay=!0,this.swiperCurrent=1,setTimeout((function(){i.swiperAutoplay=!1}),40))},getGoodsSkuDetail:function(){var t=this;return n(o.default.mark((function i(){var e,a,u,n,d;return o.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$api.sendRequest({url:"/pintuan/api/goods/detail",async:!1,data:{pintuan_id:t.pintuan_id}});case 2:if(e=i.sent,a=e.data,null!=a.goods_sku_detail){if(t.goodsSkuDetail=a.goods_sku_detail,t.skuId=t.goodsSkuDetail.sku_id,t.goodsSkuDetail.group_id=t.groupId,t.goodsSkuDetail.end_time-e.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-e.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.goodsSkuDetail.video_url&&(t.switchMedia="video"),t.goodsSkuDetail.sku_images?t.goodsSkuDetail.sku_images=t.goodsSkuDetail.sku_images.split(","):t.goodsSkuDetail.sku_images=[],t.goodsSkuDetail.goods_spec_format&&t.goodsSkuDetail.goods_image&&(t.goodsSkuDetail.goods_image=t.goodsSkuDetail.goods_image.split(","),t.goodsSkuDetail.sku_images=t.goodsSkuDetail.sku_images.concat(t.goodsSkuDetail.goods_image)),t.goodsSkuDetail.unit=t.goodsSkuDetail.unit||"件",t.goodsSkuDetail.show_price=0==t.goodsSkuDetail.group_id?t.goodsSkuDetail.promotion_price:t.goodsSkuDetail.pintuan_price,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.sku_spec_format&&(t.goodsSkuDetail.sku_spec_format=JSON.parse(t.goodsSkuDetail.sku_spec_format)),t.goodsSkuDetail.goods_attr_format)for(u=JSON.parse(t.goodsSkuDetail.goods_attr_format),t.goodsSkuDetail.goods_attr_format=t.$util.unique(u,"attr_id"),n=0;n<t.goodsSkuDetail.goods_attr_format.length;n++)for(d=0;d<u.length;d++)t.goodsSkuDetail.goods_attr_format[n].attr_id==u[d].attr_id&&t.goodsSkuDetail.goods_attr_format[n].attr_value_id!=u[d].attr_value_id&&(t.goodsSkuDetail.goods_attr_format[n].attr_value_name+="、"+u[d].attr_value_name);t.goodsSkuDetail.goods_spec_format&&(t.goodsSkuDetail.goods_spec_format=JSON.parse(t.goodsSkuDetail.goods_spec_format)),t.$langConfig.title(t.goodsSkuDetail.goods_name),t.goodsSkuDetail.goods_content&&(t.goodsSkuDetail.goods_content=(0,s.default)(t.goodsSkuDetail.goods_content)),t.contactData={title:t.goodsSkuDetail.sku_name,path:"/promotionpages/pintuan/detail/detail?pintuan_id="+t.pintuan_id,img:t.$util.img(t.goodsSkuDetail.sku_image,{size:"big"})},""!=t.token&&t.getWhetherCollection(),t.setWechatShare(),t.$refs.goodsPromotion&&t.$refs.goodsPromotion.refresh(t.goodsSkuDetail.goods_promotion),t.$refs.loadingCover&&t.$refs.loadingCover.hide(),t.goodsSyncToGoodsCircle()}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch");case 5:case"end":return i.stop()}}),i)})))()},getWhetherCollection:function(){var t=this;this.$api.sendRequest({url:"/api/goodscollect/iscollect",data:{goods_id:this.goodsSkuDetail.goods_id},success:function(i){t.whetherCollection=i.data}})},setWechatShare:function(){},pintuan:function(){var i=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t.getStorageSync("token")?(e&&this.resetPrice(),this.$refs.goodsSku.show("pintuan",(function(){i.resetPrice(),i.getCartCount()}))):this.$refs.login.open("/promotionpages/pintuan/detail/detail?pintuan_id="+this.groupId)},resetPrice:function(){this.goodsSkuDetail.group_id=0,this.goodsSkuDetail.show_price=this.goodsSkuDetail.promotion_price,this.goodsSkuDetail.save_price=this.goodsSkuDetail.price-this.goodsSkuDetail.show_price>0?(this.goodsSkuDetail.price-this.goodsSkuDetail.show_price).toFixed(2):0,this.$forceUpdate()},getCartCount:function(){var t=this;this.$store.dispatch("getCartNumber").then((function(i){t.cartCount=i}))}}};i.default=d}).call(this,e("543d")["default"])},b5d6:function(t,i,e){},bf57:function(t,i,e){"use strict";var o=e("3d75"),s=e.n(o);s.a},e0bc:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return o}));var o={uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"d7b6"))},nsLogin:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-login/ns-login")]).then(e.bind(null,"2bc6"))}},s=function(){var t=this,i=t.$createElement,e=(t._self._c,"point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type&&2==t.goodsDetail.type&&t.goodsDetail.image?t.$util.img(t.goodsDetail.image):null),o="point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type&&2==t.goodsDetail.type&&!t.goodsDetail.image?t.$util.img("upload/uniapp/point/coupon.png"):null,s="point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type&&3==t.goodsDetail.type&&t.goodsDetail.image?t.$util.img(t.goodsDetail.image):null,a="point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type&&3==t.goodsDetail.type&&!t.goodsDetail.image?t.$util.img("upload/uniapp/point/hongbao.png"):null,u="point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type?null:t.$util.img(t.goodsDetail.sku_image,{size:"mid"}),n="point"==t.type&&1==t.goodsDetail.type&&"0.00"!=t.goodsDetail.exchange_price&&t.goodsDetail.pay_type>0?t.$lang("common.currencySymbol"):null,d="point"!=t.type&&"presale"!=t.type&&"pintuan"!=t.type&&"groupbuy"!=t.type&&"seckill"!=t.type&&t.goodsDetail.discount_price>0&&t.goodsDetail.member_price?t.showPrice(t.goodsDetail.discount_price):null,l="point"!=t.type&&"presale"!=t.type&&"pintuan"!=t.type&&"groupbuy"!=t.type&&"seckill"!=t.type&&t.goodsDetail.discount_price>0&&t.goodsDetail.member_price?t.showPrice(t.goodsDetail.member_price):null,r="point"!=t.type&&"presale"!=t.type&&"pintuan"!=t.type&&"groupbuy"!=t.type&&"seckill"!=t.type&&t.goodsDetail.discount_price>0&&!t.goodsDetail.member_price?t.showPrice(t.goodsDetail.discount_price):null,g="point"!=t.type&&"presale"!=t.type&&"pintuan"!=t.type&&"groupbuy"!=t.type&&"seckill"!=t.type&&t.goodsDetail.discount_price>0&&!t.goodsDetail.member_price?t.showPrice(t.goodsDetail.price):null,c=t.__map(t.goodsDetail.goods_spec_format,(function(i,e){var o=t.__get_orig(i),s=t.__map(i.value,(function(i,e){var o=t.__get_orig(i),s=i.image?t.$util.img(i.image,{size:"small"}):null;return{$orig:o,g5:s}}));return{$orig:o,l0:s}}));t.$mp.data=Object.assign({},{$root:{g0:e,g1:o,g2:s,g3:a,g4:u,m0:n,m1:d,m2:l,m3:r,m4:g,l1:c}})},a=[]}},[["3fbb","common/runtime","common/vendor"]]]);