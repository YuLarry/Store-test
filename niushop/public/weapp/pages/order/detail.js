(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/detail"],{186:function(e,r,t){"use strict";(function(e){t(5);o(t(4));var r=o(t(187));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(r.default)}).call(this,t(1)["createPage"])},187:function(e,r,t){"use strict";t.r(r);var o=t(188),a=t(190);for(var n in a)"default"!==n&&function(e){t.d(r,e,(function(){return a[e]}))}(n);t(192);var i,d=t(14),u=Object(d["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],i);u.options.__file="pages/order/detail.vue",r["default"]=u.exports},188:function(e,r,t){"use strict";t.r(r);var o=t(189);t.d(r,"render",(function(){return o["render"]})),t.d(r,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(r,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(r,"components",(function(){return o["components"]}))},189:function(e,r,t){"use strict";var o;t.r(r),t.d(r,"render",(function(){return a})),t.d(r,"staticRenderFns",(function(){return i})),t.d(r,"recyclableRender",(function(){return n})),t.d(r,"components",(function(){return o}));try{o={uniCountDown:function(){return t.e("components/uni-count-down/uni-count-down").then(t.bind(null,836))},nsContact:function(){return t.e("components/ns-contact/ns-contact").then(t.bind(null,914))},nsPayment:function(){return t.e("components/ns-payment/ns-payment").then(t.bind(null,900))},loadingCover:function(){return t.e("components/loading-cover/loading-cover").then(t.bind(null,714))}}}catch(d){if(-1===d.message.indexOf("Cannot find module")||-1===d.message.indexOf(".vue"))throw d;console.error(d.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,r=e.$createElement,t=(e._self._c,e.$util.img("public/uniapp/order/status-wrap-bg.png")),o=e.$util.img(e.action.icon),a="presale"==e.orderData.promotion_type&&1==e.orderData.order_status?e.$util.timeStampTurnTime(e.orderData.predict_delivery_time,!0):null,n=1!=e.orderData.order_type&&3!=e.orderData.order_type||3!=e.orderData.order_type||!e.orderData.buyer_ask_delivery_time?null:e.$util.timeStampTurnTime(e.orderData.buyer_ask_delivery_time),i=2==e.orderData.order_type?e.$util.timeStampTurnTime(e.orderData.buyer_ask_delivery_time):null,d=2==e.orderData.order_type&&e.orderData.pay_status?e.$util.img(e.orderData.pickup):null,u=2==e.orderData.order_type&&e.orderData.pay_status?e.$util.img(e.orderData.pickup_barcode):null,s=2==e.orderData.order_type&&e.orderData.pay_status?e.$util.img(e.orderData.pickup):null,l=e.$lang("common.currencySymbol"),c=e.__map(e.orderData.order_goods,(function(r,t){var o=e.__get_orig(r),a=e.$util.img(r.sku_image,{size:"mid"}),n=parseFloat(r.price).toFixed(2).split("."),i=parseFloat(r.price).toFixed(2).split(".");return{$orig:o,g8:a,g9:n,g10:i}})),_=e.$util.timeStampTurnTime(e.orderData.create_time),m=e.orderData.close_time>0?e.$util.timeStampTurnTime(e.orderData.close_time):null,g=e.orderData.pay_status>0?e.$util.timeStampTurnTime(e.orderData.pay_time):null,f=e.orderData.form?e.__map(e.orderData.form,(function(r,t){var o=e.__get_orig(r),a="Img"==r.controller?e.__map(r.img_lists,(function(r,t){var o=e.__get_orig(r),a=e.$util.img(r);return{$orig:o,g14:a}})):null;return{$orig:o,l1:a}})):null,p={order_id:e.orderData.order_id},y=e.orderData.virtual_goods&&2==e.orderData.goods_class&&0==e.orderData.virtual_goods.is_veirfy?e.$util.img(e.orderData.virtualgoods_barcode):null,D=e.orderData.virtual_goods&&2==e.orderData.goods_class&&0==e.orderData.virtual_goods.is_veirfy?e.$util.img(e.orderData.virtualgoods):null,v=e.orderData.virtual_goods&&2==e.orderData.goods_class&&0==e.orderData.virtual_goods.is_veirfy&&e.orderData.virtual_goods.expire_time>0?e.$util.timeStampTurnTime(e.orderData.virtual_goods.expire_time):null,h=e.orderData.virtual_goods&&2==e.orderData.goods_class&&0==e.orderData.virtual_goods.is_veirfy&&e.orderData.virtual_goods.verify_record.length?e.__map(e.orderData.virtual_goods.verify_record,(function(r,t){var o=e.__get_orig(r),a=e.$util.timeStampTurnTime(r.verify_time);return{$orig:o,g18:a}})):null,$=e.$lang("common.currencySymbol"),b=4!=e.orderData.order_type?e.$lang("common.currencySymbol"):null,T=e.orderData.member_card_money>0?e.$lang("common.currencySymbol"):null,S=e.orderData.invoice_money>0?e.$lang("common.currencySymbol"):null,k=e.orderData.invoice_delivery_money>0?e.$lang("common.currencySymbol"):null,w=0!=e.orderData.adjust_money?e.$lang("common.currencySymbol"):null,R=0!=e.orderData.adjust_money?e._f("abs")(e.orderData.adjust_money):null,O=e.orderData.promotion_money>0?e.$lang("common.currencySymbol"):null,P=e.orderData.coupon_money>0?e.$lang("common.currencySymbol"):null,I=e.orderData.balance_money>0?e.$lang("common.currencySymbol"):null,C=e.orderData.point_money>0?e.$lang("common.currencySymbol"):null,x=e.$lang("common.currencySymbol");e._isMounted||(e.e0=function(r){return e.$util.diyRedirectTo({diy_name:"DIY_STORE_"+e.orderData.delivery_store_id,store_id:e.orderData.delivery_store_id,wap_url:"/pages/index/index?name=DIY_STORE_"+e.orderData.delivery_store_id})},e.e1=function(r){return e.$util.copy(e.orderData.delivery_code)},e.e2=function(r){return e.$util.copy(e.orderData.order_no)},e.e3=function(r){return e.$util.copy(e.orderData.virtual_code)},e.e4=function(r,t){var o=arguments[arguments.length-1].currentTarget.dataset,a=o.eventParams||o["event-params"];t=a.item;return e.$util.copy(t.card_info.cardno)},e.e5=function(r,t){var o=arguments[arguments.length-1].currentTarget.dataset,a=o.eventParams||o["event-params"];t=a.item;return e.$util.copy(t.card_info.password)}),e.$mp.data=Object.assign({},{$root:{g0:t,g1:o,g2:a,g3:n,g4:i,g5:d,g6:u,g7:s,m0:l,l0:c,g11:_,g12:m,g13:g,l2:f,a0:p,g15:y,g16:D,g17:v,l3:h,m1:$,m2:b,m3:T,m4:S,m5:k,m6:w,f0:R,m7:O,m8:P,m9:I,m10:C,m11:x}})},n=!1,i=[];a._withStripped=!0},190:function(e,r,t){"use strict";t.r(r);var o=t(191),a=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(r,e,(function(){return o[e]}))}(n);r["default"]=a.a},191:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=a(t(181));function a(e){return e&&e.__esModule?e:{default:e}}var n=function(){t.e("components/ns-goods-recommend/ns-goods-recommend").then(function(){return resolve(t(807))}.bind(null,t)).catch(t.oe)},i=function(){t.e("components/payment/payment").then(function(){return resolve(t(907))}.bind(null,t)).catch(t.oe)},d={data:function(){return{isIphoneX:!1,orderId:0,orderData:{action:[]},action:{icon:""},evaluateConfig:{evaluate_audit:1,evaluate_show:0,evaluate_status:1}}},mixins:[o.default],components:{nsGoodsRecommend:n,nsPayment:i},onLoad:function(e){e.order_id&&(this.orderId=e.order_id)},onShow:function(){this.isIphoneX=this.$util.uniappIsIPhoneX(),e.getStorageSync("token")?(this.getEvaluateConfig(),this.getOrderData()):this.$util.redirectTo("/pages_tool/login/login",{back:"/pages/order/detail?order_id="+this.orderId})},methods:{goDetail:function(e){this.$util.redirectTo("/pages/goods/detail",{goods_id:e.goods_id})},goRefund:function(e){this.$util.redirectTo("/pages_tool/order/refund",{order_goods_id:e})},goRefundDetail:function(e){this.$util.redirectTo("/pages_tool/order/refund_detail",{order_goods_id:e})},getOrderData:function(){var r=this;this.$api.sendRequest({url:"/api/order/detail",data:{order_id:this.orderId},success:function(t){if(e.stopPullDownRefresh(),t.code>=0){if(0==t.data.order_status){var o=Date.parse(new Date)/1e3;t.data.closeTimeMachine=r.$util.countDown(t.data.create_time+t.data.auto_close-o)}var a=0;r.orderData=t.data;var n=[];r.orderData.order_goods.forEach((function(e){e.sku_spec_format?e.sku_spec_format=JSON.parse(e.sku_spec_format):e.sku_spec_format=[],0!=e.refund_status&&-1!=e.refund_status||(a+=1,n.push(e.order_goods_id))})),r.action=JSON.parse(t.data.order_status_action),a>1?(r.orderData.refund_batch_status=!0,r.orderData.refund_order_goods_ids=n):r.orderData.refund_batch_status=!1,""!=r.orderData.delivery_store_info&&(r.orderData.delivery_store_info=JSON.parse(r.orderData.delivery_store_info)),r.$refs.loadingCover&&r.$refs.loadingCover.hide()}else r.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){r.$util.redirectTo("/pages/order/list")}),1500)},fail:function(t){e.stopPullDownRefresh(),r.$refs.loadingCover&&r.$refs.loadingCover.hide()}})},onPullDownRefresh:function(){this.getOrderData()},operation:function(e){var r=this;switch(e){case"orderPay":this.orderPay(this.orderData);break;case"orderClose":this.orderClose(this.orderData.order_id,(function(){r.getOrderData()}));break;case"memberTakeDelivery":this.orderDelivery(this.orderData.order_id,(function(){r.getOrderData()}));break;case"trace":this.$util.redirectTo("/pages_tool/order/logistics",{order_id:this.orderData.order_id});break;case"memberOrderEvaluation":this.$util.redirectTo("/pages_tool/order/evaluate",{order_id:this.orderData.order_id});break;case"memberBatchRefund":this.$util.redirectTo("/pages_tool/order/refund_type_select",{order_id:this.orderId});break;case"memberVirtualTakeDelivery":this.orderVirtualDelivery(this.orderData.order_id,(function(){r.getOrderData()}));break}},imageError:function(e){this.orderData.order_goods[e].sku_image=this.$util.getDefaultImage().goods,this.$forceUpdate()},getEvaluateConfig:function(){var e=this;this.$api.sendRequest({url:"/api/goodsevaluate/config",success:function(r){if(0==r.code){var t=r.data;e.evaluateConfig=t}}})},openChoosePayment:function(){this.$refs.choosePaymentPopup.open()},previewMedia:function(r){var t=[];t.push(r),e.previewImage({urls:t})}},filters:{abs:function(e){return Math.abs(parseFloat(e)).toFixed(2)}}};r.default=d}).call(this,t(1)["default"])},192:function(e,r,t){"use strict";t.r(r);var o=t(193),a=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(r,e,(function(){return o[e]}))}(n);r["default"]=a.a},193:function(e,r,t){}},[[186,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/detail.js.map