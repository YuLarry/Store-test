(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/detail_point"],{"251c":function(e,t,o){},"2ef6":function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return n}));var n={nsContact:function(){return o.e("components/ns-contact/ns-contact").then(o.bind(null,"cdb5"))},nsPayment:function(){return o.e("components/ns-payment/ns-payment").then(o.bind(null,"2215"))},loadingCover:function(){return o.e("components/loading-cover/loading-cover").then(o.bind(null,"790a"))}},r=function(){var e=this,t=e.$createElement,o=(e._self._c,e.$util.img("public/uniapp/order/status-wrap-bg.png")),n=0==e.orderData.order_status?e.$util.img("public/uniapp/order/order-icon.png"):null,r=1==e.orderData.order_status?e.$util.img("public/uniapp/order/order-icon-received.png"):null,i=-1==e.orderData.order_status?e.$util.img("public/uniapp/order/order-icon-close.png"):null,a=e.exchangeImage(e.orderData),u=e.orderData.price>0?e.$lang("common.currencySymbol"):null,c=e.$util.timeStampTurnTime(e.orderData.create_time),s=e.orderData.close_time>0?e.$util.timeStampTurnTime(e.orderData.close_time):null,d=e.orderData.delivery_price>0?e.$lang("common.currencySymbol"):null,l=e.orderData.order_money>0?e.$lang("common.currencySymbol"):null;e._isMounted||(e.e0=function(t){return e.$util.copy(e.orderData.order_no)}),e.$mp.data=Object.assign({},{$root:{g0:o,g1:n,g2:r,g3:i,m0:a,m1:u,g4:c,g5:s,m2:d,m3:l}})},i=[]},4070:function(e,t,o){"use strict";o.r(t);var n=o("2ef6"),r=o("acf4");for(var i in r)"default"!==i&&function(e){o.d(t,e,(function(){return r[e]}))}(i);o("6acb");var a,u=o("f0c5"),c=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);t["default"]=c.exports},"6acb":function(e,t,o){"use strict";var n=o("251c"),r=o.n(n);r.a},"9e05":function(e,t,o){"use strict";(function(e){function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){o.e("components/ns-goods-recommend/ns-goods-recommend").then(function(){return resolve(o("1044"))}.bind(null,o)).catch(o.oe)},i={components:{nsGoodsRecommend:r},data:function(){return{isIphoneX:!1,orderId:0,orderData:{action:[]},action:{icon:""},storeDetail:{}}},onLoad:function(e){e.order_id&&(this.orderId=e.order_id)},onShow:function(){this.isIphoneX=this.$util.uniappIsIPhoneX(),e.getStorageSync("token")?this.getOrderData():this.$util.redirectTo("/pages_tool/login/login",{back:"/pages/order/detail_point?order_id="+this.orderId})},methods:n({goRefund:function(e){this.$util.redirectTo("/pages_tool/order/refund",{order_goods_id:e})},goRefundDetail:function(e){this.$util.redirectTo("/pages_tool/order/refund_detail",{order_goods_id:e})},goDetail:function(e){this.$util.redirectTo("/pages_promotion/point/detail",{id:e})},navigateBack:function(){this.$util.goBack()},getOrderData:function(){var t=this;this.$api.sendRequest({url:"/pointexchange/api/order/info",data:{order_id:this.orderId},success:function(o){e.stopPullDownRefresh(),o.code>=0?(t.$refs.loadingCover&&t.$refs.loadingCover.hide(),t.orderData=o.data,""!=t.orderData.delivery_store_info&&(t.orderData.delivery_store_info=JSON.parse(t.orderData.delivery_store_info))):(t.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){t.$util.redirectTo("/pages/order/list")}),1500))},fail:function(o){e.stopPullDownRefresh(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},onPullDownRefresh:function(){this.getOrderData()},orderClose:function(){var t=this;e.showModal({title:"提示",content:"确定关闭此次兑换？",success:function(e){e.confirm&&t.$api.sendRequest({url:"/pointexchange/api/order/close",data:{order_id:t.orderData.order_id},success:function(e){e.code>=0&&(t.$util.showToast({title:"关闭成功"}),t.getOrderData())}})}})},openChoosePayment:function(){this.$refs.choosePaymentPopup.open()},orderPay:function(){e.setStorageSync("paySource","pointexchange"),this.$refs.choosePaymentPopup.getPayInfo(this.orderData.out_trade_no)},exchangeImage:function(e){switch(e.type){case 1:return this.$util.img(e.exchange_image,{size:"mid"});case 2:return e.exchange_image?this.$util.img(e.exchange_image):this.$util.img("public/uniapp/point/coupon.png");case 3:return e.exchange_image?this.$util.img(e.exchange_image):this.$util.img("public/uniapp/point/hongbao.png")}},imageError:function(){switch(this.orderData.type){case 2:this.orderData.exchange_image=this.$util.img("public/uniapp/point/coupon.png");break;case 3:this.orderData.exchange_image=this.$util.img("public/uniapp/point/hongbao.png");break;default:this.orderData.exchange_image=this.$util.getDefaultImage().goods}this.$forceUpdate()}},"openChoosePayment",(function(){this.$refs.choosePaymentPopup.open()})),filters:{abs:function(e){return Math.abs(parseFloat(e)).toFixed(2)}}};t.default=i}).call(this,o("543d")["default"])},acf4:function(e,t,o){"use strict";o.r(t);var n=o("9e05"),r=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},b3f6:function(e,t,o){"use strict";(function(e){o("34b0");n(o("66fd"));var t=n(o("4070"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=o,e(t.default)}).call(this,o("543d")["createPage"])}},[["b3f6","common/runtime","common/vendor"]]]);