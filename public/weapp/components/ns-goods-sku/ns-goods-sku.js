(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-goods-sku/ns-goods-sku"],{"008f":function(t,i,e){"use strict";e.r(i);var o=e("0307"),s=e("c590");for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);e("7b82"),e("5909");var u,n=e("f0c5"),d=Object(n["a"])(s["default"],o["b"],o["c"],!1,null,"34bcfbb8",null,!1,o["a"],u);i["default"]=d.exports},"0307":function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return o}));var o={uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"1fce"))},nsLogin:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-login/ns-login")]).then(e.bind(null,"2e9e"))}},s=function(){var t=this,i=t.$createElement,e=(t._self._c,"point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type&&2==t.goodsDetail.type&&t.goodsDetail.image?t.$util.img(t.goodsDetail.image):null),o="point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type&&2==t.goodsDetail.type&&!t.goodsDetail.image?t.$util.img("upload/uniapp/point/coupon.png"):null,s="point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type&&3==t.goodsDetail.type&&t.goodsDetail.image?t.$util.img(t.goodsDetail.image):null,a="point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type&&3==t.goodsDetail.type&&!t.goodsDetail.image?t.$util.img("upload/uniapp/point/hongbao.png"):null,u="point"==t.type&&t.goodsDetail.type&&1!=t.goodsDetail.type?null:t.$util.img(t.goodsDetail.sku_image,{size:"mid"}),n="point"==t.type&&1==t.goodsDetail.type&&"0.00"!=t.goodsDetail.exchange_price&&t.goodsDetail.pay_type>0?t.$lang("common.currencySymbol"):null,d=t.__map(t.goodsDetail.goods_spec_format,(function(i,e){var o=t.__get_orig(i),s=t.__map(i.value,(function(i,e){var o=t.__get_orig(i),s=i.image?t.$util.img(i.image,{size:"small"}):null;return{$orig:o,g5:s}}));return{$orig:o,l0:s}}));t.$mp.data=Object.assign({},{$root:{g0:e,g1:o,g2:s,g3:a,g4:u,m0:n,l1:d}})},a=[]},5909:function(t,i,e){"use strict";var o=e("74db"),s=e.n(o);s.a},"74db":function(t,i,e){},"7b82":function(t,i,e){"use strict";var o=e("95ce"),s=e.n(o);s.a},"95ce":function(t,i,e){},c590:function(t,i,e){"use strict";e.r(i);var o=e("f38b"),s=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);i["default"]=s.a},f38b:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=s(e("df06"));function s(t){return t&&t.__esModule?t:{default:t}}var a=function(){e.e("components/uni-popup/uni-popup-sku").then(function(){return resolve(e("fd95"))}.bind(null,e)).catch(e.oe)},u={name:"ns-goods-sku",components:{uniPopup:a},props:{goodsDetail:{type:Object,default:null},disabled:{type:Boolean,default:!1},pointLimit:{type:[Number,String]},maxBuy:{type:Number,default:0},minBuy:{type:Number,default:0}},data:function(){return{isIphoneX:!1,systemInfo:{},number:1,btnSwitch:!1,type:"",callback:null,skuId:0,pintuanId:0,limitNumber:0,minNumber:0,preview:0,cartNumber:0}},created:function(){this.isIphoneX=this.$util.uniappIsIPhoneX(),this.systemInfo=t.getSystemInfoSync()},watch:{pointLimit:function(t,i){this.limitNumber=Number(t)},goodsDetail:function(t,i){this.skuId=t.sku_id},minBuy:function(t,i){this.minBuy>1&&(this.number=Number(this.minBuy))}},methods:{show:function(t,i){this.callback=i,this.$refs.skuPopup.open(i),this.type=t,this.skuId=this.goodsDetail.sku_id,this.preview=this.goodsDetail.preview||0,"pintuan"==this.type&&this.goodsDetail.pintuan_id?this.limitNumber=this.goodsDetail.buy_num:"groupbuy"==this.type&&this.goodsDetail.groupbuy_id?(this.number=this.goodsDetail.buy_num,this.minNumber=this.goodsDetail.buy_num):"bargain"==this.type&&this.goodsDetail.bargain_id&&(this.number=1,this.minNumber=1),"join_cart"==this.type&&this.getCartData(),this.$forceUpdate()},hide:function(){this.$refs.skuPopup.close()},change:function(t,i){if(!this.disabled){this.btnSwitch=!1,this.skuId=t;for(var e=0;e<this.goodsDetail.goods_spec_format.length;e++)for(var o=this.goodsDetail.goods_spec_format[e],s=0;s<o.value.length;s++)i==this.goodsDetail.goods_spec_format[e].value[s].spec_id&&(this.goodsDetail.goods_spec_format[e].value[s].selected=!1);this.goodsDetail.pintuan_id?this.getPintuanGoodsSkuInfo():this.goodsDetail.groupbuy_id?this.getGroupbuyGoodsSkuInfo():this.goodsDetail.bargain_id?this.getBargainGoodsSkuInfo():this.goodsDetail.seckill_id?this.getSeckillGoodsSkuInfo():this.goodsDetail.topic_id?this.getTopicsGoodsSkuInfo():this.goodsDetail.exchange_id?this.getPointGoodsSkuInfo():this.getGoodsSkuInfo()}},getGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/api/goodssku/info",data:{sku_id:this.skuId},success:function(i){var e=i.data;null!=e?(e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),1==t.goodsSkuDetail.promotion_type&&(t.goodsSkuDetail.discountTimeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp)),1==t.goodsSkuDetail.promotion_type&&t.goodsSkuDetail.discountTimeMachine?t.goodsSkuDetail.member_price>0&&Number(t.goodsSkuDetail.member_price)<=Number(t.goodsSkuDetail.discount_price)?t.goodsSkuDetail.show_price=t.goodsSkuDetail.member_price:t.goodsSkuDetail.show_price=t.goodsSkuDetail.discount_price:t.goodsSkuDetail.member_price>0?t.goodsSkuDetail.show_price=t.goodsSkuDetail.member_price:t.goodsSkuDetail.show_price=t.goodsSkuDetail.price,t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)):t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getPintuanGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/pintuan/api/goods/info",data:{sku_id:this.skuId,pintuan_id:this.goodsDetail.pintuan_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getPintuanGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.goodsSkuDetail.show_price=0==t.goodsDetail.group_id?t.goodsSkuDetail.promotion_price:t.goodsSkuDetail.pintuan_price,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getBargainGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/bargain/api/goods/info",data:{sku_id:this.skuId,bargain_id:this.goodsDetail.bargain_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getBargainGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.goodsSkuDetail.show_price=t.goodsDetail.bargain_id>0?t.goodsSkuDetail.floor_price:t.goodsSkuDetail.price,t.goodsSkuDetail.stock=t.goodsSkuDetail.bargain_stock,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getTopicsGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/topic/api/topicgoods/info",data:{sku_id:this.skuId,topic_id:this.goodsDetail.topic_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getTopicsGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e.goods_sku_detail,t.dealData(),t.goodsSkuDetail.show_price=t.goodsDetail.topic_id>0?t.goodsSkuDetail.topic_price:t.goodsSkuDetail.price,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getGroupbuyGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/groupbuy/api/goods/info",data:{sku_id:this.skuId,groupbuy_id:this.goodsDetail.groupbuy_id},success:function(i){var e=i.data;null!=e?(e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.goodsSkuDetail.show_price=t.goodsDetail.groupbuy_price,t.goodsSkuDetail.save_price=t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0?(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2):0,t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)):t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getSeckillGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/seckill/api/seckillgoods/info",data:{sku_id:this.skuId,seckill_id:this.goodsDetail.seckill_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getSeckillGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e.goods_sku_detail,t.dealData(),t.goodsSkuDetail.show_price=t.goodsSkuDetail.seckill_price,t.goodsSkuDetail.price-t.goodsSkuDetail.show_price>0&&(t.goodsSkuDetail.price-t.goodsSkuDetail.show_price).toFixed(2),t.goodsSkuDetail.end_time-i.timestamp>0?t.goodsSkuDetail.timeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-i.timestamp):(t.$util.showToast({title:"活动已结束"}),setTimeout((function(){t.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.goodsSkuDetail.sku_id},"redirectTo")}),1e3)),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},getPointGoodsSkuInfo:function(){var t=this;this.$api.sendRequest({url:"/pointexchange/api/goods/info",data:{sku_id:this.skuId,exchange_id:this.goodsDetail.exchange_id},success:function(i){var e=i.data;if(null!=e){if("again"==e.type)return t.skuId=e.sku_id,void t.getPointGoodsSkuInfo();e.unit=e.unit||"件",t.goodsSkuDetail=e,t.dealData(),t.btnSwitch=!1,t.$emit("refresh",t.goodsSkuDetail)}else t.$util.redirectTo("/promotionpages/point/list/list",{},"redirectTo")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},dealData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.goodsSkuDetail;if(t.sku_images?t.sku_images=t.sku_images.split(","):t.sku_images=[],t.goods_spec_format&&t.goods_image&&(t.goods_image=t.goods_image.split(","),t.sku_images=t.sku_images.concat(t.goods_image)),t.sku_spec_format&&(t.sku_spec_format=JSON.parse(t.sku_spec_format)),t.goods_attr_format){var i=JSON.parse(t.goods_attr_format);t.goods_attr_format=this.$util.unique(i,"attr_id");for(var e=0;e<t.goods_attr_format.length;e++)for(var s=0;s<i.length;s++)t.goods_attr_format[e].attr_id==i[s].attr_id&&t.goods_attr_format[e].attr_value_id!=i[s].attr_value_id&&(t.goods_attr_format[e].attr_value_name+="、"+i[s].attr_value_name)}t.goods_spec_format&&(t.goods_spec_format=JSON.parse(t.goods_spec_format)),t.goods_content&&"point"!=this.type&&(t.goods_content=(0,o.default)(t.goods_content)),t.content&&"point"==this.type&&(t.content=(0,o.default)(t.content)),this.goodsDetail.unit=this.goodsDetail.unit||"件",this.keyInput(!0),this.$langConfig.title(t.goods_name)},changeNum:function(t){if(0!=this.goodsDetail.stock){var i=this.goodsDetail.stock,e=1;if(this.maxBuy>0&&this.maxBuy<i&&(i=this.maxBuy),this.maxBuy>0&&this.goodsDetail.purchased_num>0&&(i=this.maxBuy-this.goodsDetail.purchased_num),this.minBuy>1&&(e=this.minBuy),"pintuan"==this.type&&this.goodsDetail.pintuan_id?i=this.goodsDetail.buy_num>this.goodsDetail.stock?this.goodsDetail.stock:this.goodsDetail.buy_num:"groupbuy"==this.type&&this.goodsDetail.groupbuy_id?(i=(this.goodsDetail.buy_num,this.goodsDetail.stock,this.goodsDetail.stock),e=this.goodsDetail.buy_num):"seckill"==this.type&&this.goodsDetail.seckill_id&&this.goodsDetail.num>0&&this.goodsDetail.num<this.goodsDetail.stock?i=this.goodsDetail.num:"bargain"==this.type&&this.goodsDetail.bargain_id&&(i=1),"+"==t)if(this.number<i)this.number++;else{if(this.maxBuy>0&&this.goodsDetail.purchased_num>0)return void this.$util.showToast({title:"该商品每人限购"+this.maxBuy+this.goodsDetail.unit+"，您已购买了"+this.goodsDetail.purchased_num+this.goodsDetail.unit});if(this.maxBuy>0&&this.cartNumber>0&&this.cartNumber+this.number>this.maxBuy){var o=this.maxBuy-this.cartNumber;return void(o>0?this.$util.showToast({title:"该商品每人限购"+this.maxBuy+this.goodsDetail.unit+"，购物车已加入了"+this.cartNumber+this.goodsDetail.unit+"，还能购买"+o+this.goodsDetail.unit}):this.$util.showToast({title:"该商品每人限购"+this.maxBuy+this.goodsDetail.unit}))}if("seckill"==this.type&&this.goodsDetail.seckill_id&&this.goodsDetail.num>0)return void this.$util.showToast({title:"该商品每人限购"+this.goodsDetail.num+this.goodsDetail.unit})}else if("-"==t){if(!(this.number>e))return void(this.minBuy>1&&this.$util.showToast({title:"该商品"+this.minBuy+this.goodsDetail.unit+"起售"}));this.number-=1}this.number>this.limitNumber&&this.limitNumber&&(this.number=this.limitNumber)}},blur:function(){var t=this;if(this.number||(this.number=0),this.number>this.limitNumber&&this.limitNumber&&(this.number=this.limitNumber),this.number<this.minNumber&&this.minNumber&&(this.number=this.minNumber),this.maxBuy>0&&this.number>this.maxBuy&&(this.number=this.maxBuy),this.maxBuy>0&&this.goodsDetail.purchased_num>0){var i=this.maxBuy-this.goodsDetail.purchased_num;this.number>i&&(this.number=i)}this.number<this.minBuy&&this.minBuy>0&&(this.number=this.minBuy);var e=parseInt(this.number);this.number=0,setTimeout((function(){t.number=e}),0)},keyInput:function(t,i){var e=this;setTimeout((function(){var o=e.goodsDetail.stock;0!=e.goodsDetail.stock?(t&&0==e.number.length&&(e.number=1),t&&(e.number<=0||isNaN(e.number))&&(e.number=1),"pintuan"==e.type&&e.goodsDetail.pintuan_id&&e.number>e.goodsDetail.buy_num||"groupbuy"==e.type&&e.goodsDetail.groupbuy_id&&e.number<e.goodsDetail.buy_num?e.number=e.goodsDetail.buy_num:"seckill"==e.type&&e.goodsDetail.seckill_id&&e.goodsDetail.max_buy>0&&e.number>e.goodsDetail.max_buy?e.number=e.goodsDetail.max_buy:"bargain"==e.type&&e.goodsDetail.bargain_id?e.number=1:e.number>o&&(e.number=o),e.minBuy>1&&e.number<e.minBuy&&(e.number=e.minBuy),t&&(e.number=parseInt(e.number)),i&&i()):e.number=0}),0)},confirm:function(){var i=this;t.removeStorageSync("delivery"),this.preview?this.$util.showToast({title:"预览商品无法购买"}):t.getStorageSync("token")?this.keyInput(!0,(function(){if(0!=i.goodsDetail.stock)if(0!=i.number.length&&0!=i.number){if(i.number>i.goodsDetail.stock)i.$util.showToast({title:"库存不足"});else if(i.maxBuy>0&&i.goodsDetail.purchased_num>0&&i.number>i.maxBuy-i.goodsDetail.purchased_num)i.$util.showToast({title:"该商品每人限购"+i.maxBuy+i.goodsDetail.unit+"，您已购买了"+i.goodsDetail.purchased_num+i.goodsDetail.unit});else if(i.maxBuy>0&&i.cartNumber>0&&i.cartNumber+i.number>i.maxBuy){var e=i.maxBuy-i.cartNumber;e>0?i.$util.showToast({title:"该商品每人限购"+i.maxBuy+i.goodsDetail.unit+"，购物车已加入了"+i.cartNumber+i.goodsDetail.unit+"，还能购买"+e+i.goodsDetail.unit}):i.$util.showToast({title:"该商品每人限购"+i.maxBuy+i.goodsDetail.unit})}else if(!i.btnSwitch)if(i.btnSwitch=!0,"join_cart"==i.type)i.$api.sendRequest({url:"/api/cart/add",data:{sku_id:i.skuId,num:i.number},success:function(t){var e=t.data;e>0&&(i.$util.showToast({title:"加入购物车成功"}),i.callback&&i.callback()),i.$refs.skuPopup.close(),i.btnSwitch=!1},fail:function(t){i.$refs.skuPopup.close(),i.btnSwitch=!1}});else if("buy_now"==i.type){var o={sku_id:i.skuId,num:i.number};t.setStorage({key:"orderCreateData",data:o,success:function(){i.$util.redirectTo("/pages/order/payment/payment"),i.btnSwitch=!1}})}else if("seckill"==i.type){o={seckill_id:i.goodsDetail.seckill_id,num:i.number,sku_id:i.skuId};t.setStorage({key:"seckillOrderCreateData",data:o,success:function(){i.$util.redirectTo("/promotionpages/seckill/payment/payment"),i.btnSwitch=!1}})}else if("pintuan"==i.type){o={pintuan_goods_id:i.goodsDetail.id,group_id:i.goodsDetail.group_id,num:i.number};t.setStorage({key:"pintuanOrderCreateData",data:o,success:function(){i.$util.redirectTo("/promotionpages/pintuan/payment/payment"),i.btnSwitch=!1}})}else if("topic"==i.type){o={topic_goods_id:i.goodsDetail.id,num:i.number};t.setStorage({key:"topicOrderCreateData",data:o,success:function(){i.$util.redirectTo("/promotionpages/topics/payment/payment"),i.btnSwitch=!1}})}else if("groupbuy"==i.type){o={groupbuy_id:i.goodsDetail.groupbuy_id,sku_id:i.skuId,num:i.number};t.setStorage({key:"groupbuyOrderCreateData",data:o,success:function(){i.$util.redirectTo("/promotionpages/groupbuy/payment/payment"),i.btnSwitch=!1}})}else if("presale"==i.type){o={presale_id:i.goodsDetail.presale_id,sku_id:i.skuId,num:i.number};t.setStorage({key:"presaleOrderCreateData",data:o,success:function(){i.$util.redirectTo("/promotionpages/presale/payment/payment"),i.btnSwitch=!1}})}else if("bargain"==i.type)i.$api.sendRequest({url:"/bargain/api/bargain/launch",data:{id:i.goodsDetail.id},success:function(t){i.btnSwitch=!1,0==t.code?i.$util.redirectTo("/promotionpages/bargain/launch/launch",{id:t.data},"redirectTo"):i.$util.showToast({title:t.message})}});else if("point"==i.type){o={id:i.goodsDetail.exchange_id,sku_id:i.skuId,num:i.number};t.setStorage({key:"exchangeOrderCreateData",data:o,success:function(){i.$util.redirectTo("/promotionpages/point/payment/payment"),i.btnSwitch=!1}})}}else i.$util.showToast({title:"购买数量不能为0"});else i.$util.showToast({title:"商品已售罄"})})):this.$refs.login.open()},closeSkuPopup:function(){this.$refs.skuPopup.close()},imageError:function(){this.goodsDetail.sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},valueImageError:function(t,i){this.goodsDetail.goods_spec_format[t].value[i].image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getCartData:function(){var t=this;this.$api.sendRequest({url:"/api/cart/goodslists",success:function(i){if(i.code>=0)for(var e=i.data,o=0;o<e.length;o++)if(e[o].sku_id==t.goodsDetail.sku_id){t.cartNumber=e[o].num;break}}})}}};i.default=u}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-goods-sku/ns-goods-sku-create-component',
    {
        'components/ns-goods-sku/ns-goods-sku-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("008f"))
        })
    },
    [['components/ns-goods-sku/ns-goods-sku-create-component']]
]);
