(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-goods-sku/ns-goods-sku-new"],{"0b31":function(t,e,i){"use strict";i.r(e);var s=i("3164"),o=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=o.a},"0e54":function(t,e,i){"use strict";var s=i("73fd"),o=i.n(s);o.a},3164:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;s(i("37ea"));function s(t){return t&&t.__esModule?t:{default:t}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(i("f505"))}.bind(null,i)).catch(i.oe)},a=function(){i.e("components/uni-popup/uni-popup-sku").then(function(){return resolve(i("74f3"))}.bind(null,i)).catch(i.oe)},n={name:"ns-goods-sku-new",components:{uniPopup:a,nsShowToast:o},props:{disabled:{type:Boolean,default:!1},pointLimit:{type:[Number,String]},cartList:{type:Array}},data:function(){return{isIphoneX:!1,systemInfo:{},number:0,token:"",btnSwitch:!1,type:"",callback:null,skuId:0,pintuanId:0,limitNumber:0,minNumber:0,preview:0,cartData:[],cartIdArr:[],goodsDetail:{}}},created:function(){this.isIphoneX=this.$util.uniappIsIPhoneX(),this.systemInfo=t.getSystemInfoSync(),this.token=t.getStorageSync("token")},watch:{goodsDetail:function(t,e){this.skuId=t.sku_id}},methods:{show:function(t,e,i){this.goodsDetail=e,this.$refs.skuPopup.open(),this.type=t,this.callback=i,this.skuId=this.goodsDetail.sku_id,this.preview=this.goodsDetail.preview||0,this.getCartData()},hide:function(){this.$refs.skuPopup.close()},change:function(t,e){if(!this.disabled){this.btnSwitch=!1,this.skuId=t;for(var i=0;i<this.goodsDetail.goods_spec_format.length;i++)for(var s=this.goodsDetail.goods_spec_format[i],o=0;o<s.value.length;o++)e==this.goodsDetail.goods_spec_format[i].value[o].spec_id&&(this.goodsDetail.goods_spec_format[i].value[o].selected=!1);this.getGoodsSkuInfo()}},getGoodsSkuInfo:function(){this.getCartData();var t=this;this.$api.sendRequest({url:"/api/goodssku/info",data:{sku_id:void 0==this.skuId?this.goodsDetail.sku_id:this.skuId},success:function(e){var i=e.data;if(null!=i){t.goodsSkuDetail=i,t.dealData(),1==t.goodsSkuDetail.promotion_type&&(t.goodsSkuDetail.discountTimeMachine=t.$util.countDown(t.goodsSkuDetail.end_time-e.timestamp)),t.btnSwitch=!1;var s=t.goodsSkuDetail;s.num=void 0!==t.cartData[t.skuId]?t.cartData[t.skuId]:0,t.$emit("refresh",s)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(e){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},dealData:function(){this.goodsSkuDetail.sku_images=this.goodsSkuDetail.sku_images.split(","),1==this.goodsSkuDetail.promotion_type&&this.goodsSkuDetail.discountTimeMachine?this.goodsSkuDetail.member_price&&this.goodsSkuDetail.member_price<=this.goodsSkuDetail.price?this.goodsSkuDetail.show_price=this.goodsSkuDetail.member_price:this.goodsSkuDetail.show_price=this.goodsSkuDetail.discount_price:this.goodsSkuDetail.member_price?this.goodsSkuDetail.show_price=this.goodsSkuDetail.member_price:this.goodsSkuDetail.show_price=this.goodsSkuDetail.price,this.goodsSkuDetail.sku_spec_format&&(this.goodsSkuDetail.sku_spec_format=JSON.parse(this.goodsSkuDetail.sku_spec_format)),this.goodsSkuDetail.goods_spec_format&&(this.goodsSkuDetail.goods_spec_format=JSON.parse(this.goodsSkuDetail.goods_spec_format)),this.keyInput(!1)},changeNum:function(t){if(0!=this.goodsDetail.stock){var e=this.goodsDetail.stock,i=1;if("pintuan"==this.type&&this.goodsDetail.pintuan_id?e=this.goodsDetail.buy_num>this.goodsDetail.stock?this.goodsDetail.stock:this.goodsDetail.buy_num:"groupbuy"==this.type&&this.goodsDetail.groupbuy_id&&(e=(this.goodsDetail.buy_num,this.goodsDetail.stock,this.goodsDetail.stock),i=this.goodsDetail.buy_num),"+"==t){if(!(this.number<e))return;this.number++}else"-"==t&&(this.number>i?this.number-=1:this.number=0);this.number>this.limitNumber&&this.limitNumber&&(this.number=this.limitNumber),this.number?this.cartNumChange(this.number,this.cartIdArr[this.skuId]):this.deleteCart()}},blur:function(){var t=this;this.number||(this.number=0),this.number>this.limitNumber&&this.limitNumber&&(this.number=this.limitNumber),this.number<this.minNumber&&this.minNumber&&(this.number=this.minNumber);var e=parseInt(this.number);this.number=0,setTimeout((function(){t.number=e}),0)},keyInput:function(t,e){var i=this;setTimeout((function(){var s=i.goodsDetail.stock;0!=i.goodsDetail.stock?(t&&0==i.number.length&&(i.number=1),t&&(i.number<=0||isNaN(i.number))&&(i.number=1),"pintuan"==i.type&&i.goodsDetail.pintuan_id&&i.number>i.goodsDetail.buy_num?i.number=i.goodsDetail.buy_num:"groupbuy"==i.type&&i.goodsDetail.groupbuy_id&&i.number>i.goodsDetail.buy_num?i.number=i.goodsDetail.buy_num:i.number>s&&(i.number=s),t&&(i.number=parseInt(i.number)),e&&e()):i.number=0}),0)},confirm:function(){var e=this,i=this;this.preview?this.$util.showToast({title:"预览商品无法购买"}):""!=this.token?(this.number=1,this.keyInput(!0,(function(){if(0!=e.goodsDetail.stock){if(!e.btnSwitch)if(e.btnSwitch=!0,"join_cart"==e.type)e.$api.sendRequest({url:"/api/cart/add",data:{sku_id:e.goodsDetail.sku_id,num:e.number},success:function(t){var s=t.data;s>0&&(i.getCartData(),i.getGoodsSkuInfo(),e.callback&&e.callback()),e.btnSwitch=!1},fail:function(t){e.$refs.skuPopup.close(),e.btnSwitch=!1}});else if("buy_now"==e.type){var s={sku_id:e.skuId,num:e.number};t.setStorage({key:"orderCreateData",data:s,success:function(){e.$util.redirectTo("/pages/order/payment/payment"),e.btnSwitch=!1}})}else if("seckill"==e.type){s={seckill_goods_id:e.goodsDetail.id,num:e.number};t.setStorage({key:"seckillOrderCreateData",data:s,success:function(){e.$util.redirectTo("/promotionpages/seckill/payment/payment"),e.btnSwitch=!1}})}else if("pintuan"==e.type){s={pintuan_goods_id:e.goodsDetail.id,group_id:e.goodsDetail.group_id,num:e.number};t.setStorage({key:"pintuanOrderCreateData",data:s,success:function(){e.$util.redirectTo("/promotionpages/pintuan/payment/payment"),e.btnSwitch=!1}})}else if("topic"==e.type){s={topic_goods_id:e.goodsDetail.id,num:e.number};t.setStorage({key:"topicOrderCreateData",data:s,success:function(){e.$util.redirectTo("/promotionpages/topics/payment/payment"),e.btnSwitch=!1}})}else if("groupbuy"==e.type){s={groupbuy_id:e.goodsDetail.groupbuy_id,sku_id:e.skuId,num:e.number};t.setStorage({key:"groupbuyOrderCreateData",data:s,success:function(){e.$util.redirectTo("/promotionpages/groupbuy/payment/payment"),e.btnSwitch=!1}})}}else e.$util.showToast({title:"商品已售罄"})}))):this.$util.showToast({title:"请登录",success:function(){e.$util.redirectTo("/pages/login/login/login")}})},closeSkuPopup:function(){this.$refs.skuPopup.close()},imageError:function(){this.goodsDetail.sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},valueImageError:function(t,e){this.goodsDetail.goods_spec_format[t].value[e].image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getCartData:function(){var e=this,i=this;this.$api.sendRequest({url:"/api/cart/lists",success:function(s){if(s.code>=0){e.token=t.getStorageSync("token");var o=[],a=[];if(s.data.length)for(var n=0;n<s.data.length;n++)o[s.data[n].sku_id]=s.data[n].num,a[s.data[n].sku_id]=s.data[n].cart_id;e.cartData=o,e.cartIdArr=a}else e.token="";i.number=i.cartData[i.skuId]?i.cartData[i.skuId]:0,e.$forceUpdate()}})},cartNumChange:function(t,e){var i=this;t<1&&(t=1),this.modifyFlag=!0,this.$api.sendRequest({url:"/api/cart/edit",data:{num:t,cart_id:e},success:function(e){e.code>=0&&(i.cartData[i.skuId]=t)}})},deleteCart:function(){var t=this,e=this;this.$api.sendRequest({url:"/api/cart/delete",data:{cart_id:this.cartIdArr[this.skuId]},success:function(i){i.code>=0&&(t.$store.dispatch("getCartNumber"),e.getCartData())}})}}};e.default=n}).call(this,i("543d")["default"])},"6ef1":function(t,e,i){"use strict";var s={uniPopup:function(){return i.e("components/uni-popup/uni-popup").then(i.bind(null,"d380"))},nsShowToast:function(){return Promise.all([i.e("common/vendor"),i.e("components/ns-show-toast/ns-show-toast")]).then(i.bind(null,"f505"))}},o=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$util.img(t.goodsDetail.sku_image,{size:"mid"})),s=t.__map(t.goodsDetail.goods_spec_format,(function(e,i){var s=t.__map(e.value,(function(e,i){var s=t.$util.img(e.image,{size:"small"});return{$orig:t.__get_orig(e),g1:s}}));return{$orig:t.__get_orig(e),l0:s}}));t.$mp.data=Object.assign({},{$root:{g0:i,l1:s}})},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s}))},"73fd":function(t,e,i){},"74e0":function(t,e,i){"use strict";i.r(e);var s=i("6ef1"),o=i("0b31");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("0e54");var n,u=i("f0c5"),r=Object(u["a"])(o["default"],s["b"],s["c"],!1,null,"cf2d6b88",null,!1,s["a"],n);e["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-goods-sku/ns-goods-sku-new-create-component',
    {
        'components/ns-goods-sku/ns-goods-sku-new-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("74e0"))
        })
    },
    [['components/ns-goods-sku/ns-goods-sku-new-create-component']]
]);
