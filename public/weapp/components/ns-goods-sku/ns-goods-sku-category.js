(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-goods-sku/ns-goods-sku-category"],{"18be":function(t,i,s){"use strict";s.r(i);var e=s("4e26"),o=s("6fc4");for(var u in o)"default"!==u&&function(t){s.d(i,t,(function(){return o[t]}))}(u);s("6778"),s("411a");var a,n=s("f0c5"),r=Object(n["a"])(o["default"],e["b"],e["c"],!1,null,"2eb0fa82",null,!1,e["a"],a);i["default"]=r.exports},"411a":function(t,i,s){"use strict";var e=s("826d"),o=s.n(e);o.a},"4e26":function(t,i,s){"use strict";s.d(i,"b",(function(){return o})),s.d(i,"c",(function(){return u})),s.d(i,"a",(function(){return e}));var e={uniPopup:function(){return s.e("components/uni-popup/uni-popup").then(s.bind(null,"1fce"))},nsLogin:function(){return Promise.all([s.e("common/vendor"),s.e("components/ns-login/ns-login")]).then(s.bind(null,"2e9e"))}},o=function(){var t=this,i=t.$createElement,s=(t._self._c,t.$util.img(t.goodsDetail.sku_image,{size:"mid"})),e=t.__map(t.goodsDetail.goods_spec_format,(function(i,s){var e=t.__get_orig(i),o=t.__map(i.value,(function(i,s){var e=t.__get_orig(i),o=i.image?t.$util.img(i.image,{size:"small"}):null;return{$orig:e,g1:o}}));return{$orig:e,l0:o}}));t.$mp.data=Object.assign({},{$root:{g0:s,l1:e}})},u=[]},6778:function(t,i,s){"use strict";var e=s("840d"),o=s.n(e);o.a},6966:function(t,i,s){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;e(s("df06"));function e(t){return t&&t.__esModule?t:{default:t}}var o=function(){s.e("components/uni-popup/uni-popup-sku-new").then(function(){return resolve(s("2d1d"))}.bind(null,s)).catch(s.oe)},u={name:"ns-goods-sku-category",components:{uniPopup:o},props:{disabled:{type:Boolean,default:!1},pointLimit:{type:[Number,String]}},data:function(){return{isIphoneX:!1,systemInfo:{},number:0,btnSwitch:!1,type:"",callback:null,skuId:0,limitNumber:0,cartData:[],cartIdArr:[],goodsDetail:{},maxBuy:0,minBuy:0,isLoad:!1}},created:function(){this.isIphoneX=this.$util.uniappIsIPhoneX(),this.systemInfo=t.getSystemInfoSync()},watch:{pointLimit:function(t,i){this.limitNumber=Number(t)},goodsDetail:function(t,i){this.skuId=t.sku_id},minBuy:function(t,i){this.minBuy>1&&(this.number=Number(this.minBuy))}},methods:{show:function(t,i,s){this.goodsDetail=i,this.$refs.skuPopup.open(),this.type=t,this.callback=s,this.skuId=this.goodsDetail.sku_id,this.maxBuy=this.goodsDetail.max_buy,this.minBuy=this.goodsDetail.min_buy,this.isLoad=!0,this.getCartData()},hide:function(){this.$refs.skuPopup.close()},change:function(t,i){if(!this.disabled){this.btnSwitch=!1,this.skuId=t;for(var s=0;s<this.goodsDetail.goods_spec_format.length;s++)for(var e=this.goodsDetail.goods_spec_format[s],o=0;o<e.value.length;o++)i==this.goodsDetail.goods_spec_format[s].value[o].spec_id&&(this.goodsDetail.goods_spec_format[s].value[o].selected=!1);this.isLoad=!0,this.getGoodsSkuInfo()}},getGoodsSkuInfo:function(){var t=this;this.getCartData();this.$api.sendRequest({url:"/api/goodssku/getInfoForCategory",data:{sku_id:void 0==this.skuId?this.goodsDetail.sku_id:this.skuId},success:function(i){var s=i.data;if(null!=s){s.unit=s.unit||"件",t.goodsSkuDetail=s,t.dealData(),t.btnSwitch=!1;var e=t.goodsSkuDetail;e.num=void 0!==t.cartData[t.skuId]?t.cartData[t.skuId]:0,t.$emit("refresh",e)}else t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},fail:function(i){t.btnSwitch=!1,t.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}})},dealData:function(){1==this.goodsSkuDetail.promotion_type?this.goodsSkuDetail.member_price&&this.goodsSkuDetail.member_price<=this.goodsSkuDetail.price?this.goodsSkuDetail.show_price=this.goodsSkuDetail.member_price:this.goodsSkuDetail.show_price=this.goodsSkuDetail.discount_price:this.goodsSkuDetail.member_price?this.goodsSkuDetail.show_price=this.goodsSkuDetail.member_price:this.goodsSkuDetail.show_price=this.goodsSkuDetail.price,this.goodsSkuDetail.sku_spec_format&&(this.goodsSkuDetail.sku_spec_format=JSON.parse(this.goodsSkuDetail.sku_spec_format)),this.goodsSkuDetail.goods_spec_format&&(this.goodsSkuDetail.goods_spec_format=JSON.parse(this.goodsSkuDetail.goods_spec_format)),this.goodsDetail.unit=this.goodsDetail.unit||"件",this.keyInput(!1)},changeNum:function(t){if(0!=this.goodsDetail.stock){var i=this.goodsDetail.stock,s=1;if(this.maxBuy>0&&this.maxBuy<i&&(i=this.maxBuy),this.maxBuy>0&&this.goodsDetail.purchased_num>0&&(i=this.maxBuy-this.goodsDetail.purchased_num),this.minBuy>1&&(s=this.minBuy),"+"==t)if(this.number<i)this.number++;else{if(this.maxBuy>0&&this.goodsDetail.purchased_num>0)return void this.$util.showToast({title:"该商品每人限购"+this.maxBuy+this.goodsDetail.unit+"，您已购买了"+this.goodsDetail.purchased_num+this.goodsDetail.unit});if(this.maxBuy>0&&this.number+1>this.maxBuy){var e=this.maxBuy-this.number;return void(e>0?this.$util.showToast({title:"该商品每人限购"+this.maxBuy+this.goodsDetail.unit+"，购物车已加入了"+this.number+this.goodsDetail.unit+"，还能购买"+e+this.goodsDetail.unit}):this.$util.showToast({title:"该商品每人限购"+this.maxBuy+this.goodsDetail.unit}))}}else"-"==t&&(this.number>s?this.number-=1:this.number=0);this.number>this.limitNumber&&this.limitNumber&&(this.number=this.limitNumber),this.number?this.cartNumChange(this.number,this.cartIdArr[this.skuId]):this.deleteCart()}},blur:function(){var t=this;if(this.number||(this.number=0),this.number>this.limitNumber&&this.limitNumber&&(this.number=this.limitNumber),this.maxBuy>0){var i=this.maxBuy-this.goodsDetail.purchased_num;this.number>i&&(this.number=i)}this.number<this.minBuy&&this.minBuy>0&&(this.number=this.minBuy);var s=parseInt(this.number);this.number=0,this.isLoad=!1,setTimeout((function(){t.number=s,t.cartNumChange(t.number,t.cartIdArr[t.skuId])}),0)},keyInput:function(t,i){var s=this;setTimeout((function(){var e=s.goodsDetail.stock;0!=s.goodsDetail.stock?(t&&0==s.number.length&&(s.number=1),t&&(s.number<=0||isNaN(s.number))&&(s.number=1),s.number>e&&(s.number=e),s.minBuy>1&&s.number<s.minBuy&&(s.number=s.minBuy),t&&(s.number=parseInt(s.number)),i&&i()):s.number=0}),0)},confirm:function(){var i=this;t.getStorageSync("token")?(this.number=1,this.keyInput(!0,(function(){if(0!=i.goodsDetail.stock)if(i.number>i.goodsDetail.stock)i.$util.showToast({title:"库存不足"});else if(i.maxBuy>0&&i.goodsDetail.purchased_num>0&&i.number>i.maxBuy-i.goodsDetail.purchased_num)i.$util.showToast({title:"该商品每人限购"+i.maxBuy+i.goodsDetail.unit+"，您已购买了"+i.goodsDetail.purchased_num+i.goodsDetail.unit});else if(i.maxBuy>0&&i.number>i.maxBuy){var t=i.maxBuy-i.number;t>0?i.$util.showToast({title:"该商品每人限购"+i.maxBuy+i.goodsDetail.unit+"，购物车已加入了"+i.number+i.goodsDetail.unit+"，还能购买"+t+i.goodsDetail.unit}):i.$util.showToast({title:"该商品每人限购"+i.maxBuy+i.goodsDetail.unit})}else i.btnSwitch||(i.btnSwitch=!0,i.$api.sendRequest({url:"/api/cart/add",data:{sku_id:i.goodsDetail.sku_id,num:i.number},success:function(t){var s=t.data;s>0&&(i.getCartData(),i.getGoodsSkuInfo(),i.$util.showToast({title:"加入购物车成功"}),i.callback&&i.callback()),i.btnSwitch=!1},fail:function(t){i.$refs.skuPopup.close(),i.btnSwitch=!1}}));else i.$util.showToast({title:"商品已售罄"})}))):this.$refs.login.open()},closeSkuPopup:function(){this.$refs.skuPopup.close()},imageError:function(){this.goodsDetail.sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},valueImageError:function(t,i){this.goodsDetail.goods_spec_format[t].value[i].image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getCartData:function(){var t=this;this.$api.sendRequest({url:"/api/cart/lists",success:function(i){if(i.code>=0){var s=[],e=[];if(i.data.length)for(var o=0;o<i.data.length;o++)s[i.data[o].sku_id]=i.data[o].num,e[i.data[o].sku_id]=i.data[o].cart_id;t.cartData=s,t.cartIdArr=e}t.number=t.cartData[t.skuId]?t.cartData[t.skuId]:0,t.$forceUpdate()}})},cartNumChange:function(t,i){var s=this;t<1&&(t=1),this.modifyFlag=!0,this.$api.sendRequest({url:"/api/cart/edit",data:{num:t,cart_id:i},success:function(i){i.code>=0&&(s.cartData[s.skuId]=t,s.$store.dispatch("getCartNumber"))}})},deleteCart:function(){var t=this;this.$api.sendRequest({url:"/api/cart/delete",data:{cart_id:this.cartIdArr[this.skuId]},success:function(i){i.code>=0&&(t.$store.dispatch("getCartNumber"),t.getCartData())}})}}};i.default=u}).call(this,s("543d")["default"])},"6fc4":function(t,i,s){"use strict";s.r(i);var e=s("6966"),o=s.n(e);for(var u in e)"default"!==u&&function(t){s.d(i,t,(function(){return e[t]}))}(u);i["default"]=o.a},"826d":function(t,i,s){},"840d":function(t,i,s){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-goods-sku/ns-goods-sku-category-create-component',
    {
        'components/ns-goods-sku/ns-goods-sku-category-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("18be"))
        })
    },
    [['components/ns-goods-sku/ns-goods-sku-category-create-component']]
]);