(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-detail_pickup-detail_pickup"],{"0233":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={methods:{orderPay:function(t){var i=this;0==t.adjust_money?this.openChoosePayment():uni.showModal({title:"提示",content:"商家已将支付金额调整为"+t.pay_money+"元，是否继续支付？",success:function(t){t.confirm&&i.openChoosePayment()}})},pay:function(){var t=this;this.$api.sendRequest({url:"/api/order/pay",data:{order_ids:this.orderData.order_id},success:function(i){i.code>=0?t.$refs.choosePaymentPopup.getPayInfo(i.data):t.$util.showToast({title:i.message})}})},orderClose:function(t,i){var e=this;uni.showModal({title:"提示",content:"您确定要关闭该订单吗？",success:function(a){a.confirm&&e.$api.sendRequest({url:"/api/order/close",data:{order_id:t},success:function(t){t.code>=0?"function"==typeof i&&i():e.$util.showToast({title:"当前订单可能存在拼团，维权等操作，"+t.message+"不可以关闭哦!",duration:2e3})}})}})},orderDelivery:function(t,i){var e=this;uni.showModal({title:"提示",content:"您确定已经收到货物了吗？",success:function(a){a.confirm&&e.$api.sendRequest({url:"/api/order/takedelivery",data:{order_id:t},success:function(t){e.$util.showToast({title:t.message}),"function"==typeof i&&i()}})}})}}};i.default=a},"476d":function(t,i,e){"use strict";e.r(i);var a=e("551d"),o=e("9cf7");for(var s in o)"default"!==s&&function(t){e.d(i,t,(function(){return o[t]}))}(s);e("d81a");var r,n=e("f0c5"),d=Object(n["a"])(o["default"],a["b"],a["c"],!1,null,"6250301b",null,!1,a["a"],r);i["default"]=d.exports},"4c61":function(t,i,e){"use strict";var a=e("4ea4");e("4160"),e("acd8"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=a(e("245b")),s=a(e("0233")),r=a(e("53a5")),n={data:function(){return{isIphoneX:!1,orderId:0,orderData:{delivery_store_info:{store_image:""},action:[]},action:{icon:""},kefuConfig:{weapp:"",system:"",open:"",open_url:""},evaluateConfig:{evaluate_audit:1,evaluate_show:0,evaluate_status:1}}},mixins:[o.default,s.default],components:{nsPayment:r.default},onLoad:function(t){t.order_id&&(this.orderId=t.order_id)},onShow:function(){this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),uni.getStorageSync("token")?(this.getEvaluateConfig(),this.getOrderData()):this.$util.redirectTo("/otherpages/login/login/login",{back:"/pages/order/detail_pickup/detail_pickup?order_id="+this.orderId}),this.getKekuConfig()},methods:{goConnect:function(){if(uni.getStorageSync("token")){var t={order_id:this.orderId};return this.$util.redirectTo("/otherpages/chat/room/room",t),!1}this.$refs.login.open("/pages/goods/detail_pickup/detail_pickup?sku_id="+this.orderData.sku_id)},getKekuConfig:function(){var t=this;this.$api.sendRequest({url:"/api/config/servicer",success:function(i){0==i.code&&(t.kefuConfig=i.data)}})},goDetail:function(t){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t})},goRefund:function(t){this.$util.redirectTo("/otherpages/order/refund/refund",{order_goods_id:t})},goRefundDetail:function(t){this.$util.redirectTo("/otherpages/order/refund_detail/refund_detail",{order_goods_id:t})},getOrderData:function(){var t=this;this.$api.sendRequest({url:"/api/order/detail",data:{order_id:this.orderId},success:function(i){uni.stopPullDownRefresh(),i.code>=0?(t.orderData=i.data,t.orderData.order_goods.forEach((function(t){t.sku_spec_format?t.sku_spec_format=JSON.parse(t.sku_spec_format):t.sku_spec_format=[]})),t.action=JSON.parse(i.data.order_status_action),""!=t.orderData.delivery_store_info&&(t.orderData.delivery_store_info=JSON.parse(t.orderData.delivery_store_info)),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):(t.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){t.$util.redirectTo("/pages/order/list/list")}),1500))},fail:function(i){uni.stopPullDownRefresh(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},onPullDownRefresh:function(){this.getOrderData()},operation:function(t){var i=this;switch(t){case"orderPay":this.orderPay(this.orderData);break;case"orderClose":this.orderClose(this.orderData.order_id,(function(){i.getOrderData()}));break;case"memberTakeDelivery":this.orderDelivery(this.orderData.order_id,(function(){i.getOrderData()}));break;case"trace":this.$util.redirectTo("/otherpages/order/logistics/logistics",{order_id:this.orderData.order_id});break;case"memberOrderEvaluation":this.$util.redirectTo("/otherpages/order/evaluate/evaluate",{order_id:this.orderData.order_id});break}},imageError:function(t){this.orderData.order_goods[t].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getEvaluateConfig:function(){var t=this;this.$api.sendRequest({url:"/api/goodsevaluate/config",success:function(i){if(0==i.code){var e=i.data;t.evaluateConfig=e}}})},openChoosePayment:function(){this.$refs.choosePaymentPopup.open()},previewMedia:function(t){var i=[];i.push(t),uni.previewImage({urls:i})}},filters:{abs:function(t){return Math.abs(parseFloat(t)).toFixed(2)}}};i.default=n},"551d":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={loadingCover:e("b1ae").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"detail-container",class:{"safe-area":t.isIphoneX},attrs:{"data-theme":t.themeStyle}},[e("v-uni-view",{staticClass:"status-wrap color-base-bg",style:{backgroundImage:"url("+t.$util.img("upload/uniapp/order/status-wrap-bg.png")+")"}},[e("v-uni-view",{staticClass:"order-status-left"},[e("v-uni-image",{attrs:{src:t.$util.img(t.action.icon)}}),e("v-uni-view",{staticClass:"status-name"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.orderData.order_status_name))]),"presale"==t.orderData.promotion_type&&2==t.orderData.order_status?e("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.$util.timeStampTurnTime(t.orderData.predict_delivery_time,!0))+"日后可到门店提货")]):t._e()],1)],1)],1),e("v-uni-view",{staticClass:"store-wrap"},[e("v-uni-view",[t.orderData.delivery_store_info?e("v-uni-view",{staticClass:"store-info"},[e("v-uni-view",{staticClass:"icon"},[e("v-uni-view",{staticClass:"iconfont iconmendian"})],1),e("v-uni-view",{staticClass:"store-info-detail"},[e("v-uni-view",{staticClass:"store-name",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$util.redirectTo("/otherpages/index/storedetail/storedetail",{store_id:t.orderData.delivery_store_id})}}},[e("v-uni-text",{staticClass:"name font-size-base"},[t._v(t._s(t.orderData.delivery_store_name))]),e("v-uni-text",{staticClass:"iconfont iconright font-size-base"})],1),e("v-uni-view",{staticClass:"detail store-detail"},[t.orderData.delivery_store_info.open_date?e("v-uni-view",{staticClass:"color-tip"},[t._v("营业时间："+t._s(t.orderData.delivery_store_info.open_date))]):t._e(),e("v-uni-view",{staticClass:"color-tip"},[t._v("地址："+t._s(t.orderData.delivery_store_info.full_address))])],1)],1)],1):e("v-uni-view",[e("v-uni-view",{staticClass:"address-empty"},[e("v-uni-view",{staticClass:"color-base-text"},[t._v("当前无自提门店")])],1)],1)],1),e("v-uni-view",{staticClass:"pick-block first-pick-block"},[e("v-uni-view",{staticClass:"font-size-base"},[t._v("预留手机")]),e("v-uni-input",{staticClass:"last-child",attrs:{type:"number",disabled:!0,value:t.orderData.mobile}})],1),e("v-uni-view",{staticClass:"pick-block first-pick-block"},[e("v-uni-view",{staticClass:"font-size-base"},[t._v("提货时间")]),e("v-uni-input",{staticClass:"last-child",attrs:{disabled:!0,value:t.$util.timeStampTurnTime(t.orderData.buyer_ask_delivery_time)}})],1)],1),t.orderData.pay_status?e("v-uni-view",{staticClass:"pickup-info"},[e("v-uni-view",{staticClass:"pickup-code-info"},[e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"font-size-base"},[e("v-uni-text",{staticClass:"color-tip font-size-base"},[t._v("提货码：")]),t._v(t._s(t.orderData.delivery_code))],1),e("v-uni-text",{staticClass:"copy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$util.copy(t.orderData.delivery_code)}}},[t._v("复制")])],1),e("v-uni-view",{staticClass:"code",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.previewMedia(t.$util.img(t.orderData.pickup))}}},[e("v-uni-image",{staticClass:"barcode",attrs:{src:t.$util.img(t.orderData.pickup_barcode),mode:"widthFix"}}),e("v-uni-image",{staticClass:"qrcode",attrs:{src:t.$util.img(t.orderData.pickup),mode:"widthFix"}})],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"site-wrap"},[e("v-uni-view",{staticClass:"site-body"},t._l(t.orderData.order_goods,(function(i,a){return e("v-uni-view",{key:a,staticClass:"goods-wrap"},[e("v-uni-view",{staticClass:"goods-img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail(i.sku_id)}}},[e("v-uni-image",{attrs:{src:t.$util.img(i.sku_image,{size:"mid"}),mode:"aspectFill"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.imageError(a)}}})],1),e("v-uni-view",{staticClass:"goods-info"},[e("v-uni-view",{staticClass:"goods-name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail(i.sku_id)}}},[t._v(t._s(i.sku_name))]),i.sku_spec_format?e("v-uni-view",{staticClass:"sku"},[e("v-uni-view",{staticClass:"goods-spec"},[t._l(i.sku_spec_format,(function(e,a){return[t._v(t._s(e.spec_value_name)+" "+t._s(a<i.sku_spec_format.length-1?"; ":""))]}))],2)],1):t._e(),e("v-uni-view",{staticClass:"goods-sub-section"},[e("v-uni-view",[e("v-uni-text",{staticClass:"goods-price color-base-text"},[e("v-uni-text",{staticClass:"unit"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",{staticClass:"font-size-base"},[t._v(t._s(i.price))])],1)],1),e("v-uni-view",[e("v-uni-text",{staticClass:"font-size-base"},[e("v-uni-text",{staticClass:"iconfont iconclose"}),t._v(t._s(i.num))],1)],1)],1),e("v-uni-view",{staticClass:"goods-action"},[t.orderData.is_enable_refund?[0==i.refund_status||-1==i.refund_status?e("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRefund(i.order_goods_id)}}},[e("v-uni-view",{staticClass:"order-box-btn"},[t._v(t._s(10==t.orderData.order_status?"申请售后":"申请退款"))])],1):t._e()]:t._e(),0!=i.refund_status&&-1!=i.refund_status?e("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goRefundDetail(i.order_goods_id)}}},[e("v-uni-view",{staticClass:"order-box-btn"},[t._v(t._s(10==t.orderData.order_status?"查看售后":"查看退款"))])],1):t._e()],2)],1)],1)})),1)],1),e("v-uni-view",{staticClass:"order-summary"},[e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("订单编号：")]),e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.order_no))]),e("v-uni-view",{staticClass:"copy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$util.copy(t.orderData.order_no)}}},[t._v("复制")])],1)],1),e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("订单交易号：")]),e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.out_trade_no))])],1)],1),e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("创建时间：")]),e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.$util.timeStampTurnTime(t.orderData.create_time)))])],1)],1),t.orderData.close_time>0?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("关闭时间：")]),e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.$util.timeStampTurnTime(t.orderData.close_time)))])],1)],1):t._e(),t.orderData.pay_status>0?[e("v-uni-view",{staticClass:"hr"}),e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("支付方式：")]),e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.pay_type_name))])],1)],1),e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("支付时间：")]),e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.$util.timeStampTurnTime(t.orderData.pay_time)))])],1)],1)]:t._e(),t.orderData.delivery_type_name?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("配送方式：")]),e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.delivery_type_name))])],1)],1):t._e(),""!=t.orderData.buyer_message?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("买家留言：")]),e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.buyer_message))])],1)],1):t._e(),""!=t.orderData.promotion_type_name?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("活动优惠：")]),e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.promotion_type_name))])],1)],1):t._e(),e("v-uni-view",{staticClass:"kefu"},[1==t.kefuConfig.system?e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goConnect.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont iconziyuan"}),e("v-uni-text",[t._v("联系客服")])],1):t._e()],1)],2),e("v-uni-view",{staticClass:"order-money"},[e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("商品金额")]),e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",{staticClass:"color-title"},[e("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),t._v(t._s(t.orderData.goods_money))],1)],1)],1),e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("运费")]),e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",{staticClass:"color-base-text"},[e("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",[t._v(t._s(t.orderData.delivery_money))])],1)],1)],1),t.orderData.member_card_money>0?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("会员卡")]),e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",{staticClass:"color-base-text"},[e("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",[t._v(t._s(t.orderData.member_card_money))])],1)],1)],1):t._e(),t.orderData.invoice_money>0?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("税费"),e("v-uni-text",{staticClass:"color-base-text"},[t._v("("+t._s(t.orderData.invoice_rate)+"%)")])],1),e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",{staticClass:"color-base-text"},[e("v-uni-text",{staticClass:"operator"},[t._v("+")]),e("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",[t._v(t._s(t.orderData.invoice_money))])],1)],1)],1):t._e(),t.orderData.invoice_delivery_money>0?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("发票邮寄费")]),e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",{staticClass:"color-base-text"},[e("v-uni-text",{staticClass:"operator"},[t._v("+")]),e("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",[t._v(t._s(t.orderData.invoice_delivery_money))])],1)],1)],1):t._e(),0!=t.orderData.adjust_money?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("订单调整")]),e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",{staticClass:"color-base-text"},[t.orderData.adjust_money<0?e("v-uni-text",{staticClass:"operator"},[t._v("-")]):e("v-uni-text",{staticClass:"operator"},[t._v("+")]),e("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",[t._v(t._s(t._f("abs")(t.orderData.adjust_money)))])],1)],1)],1):t._e(),t.orderData.promotion_money>0?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("优惠")]),e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",{staticClass:"color-base-text"},[e("v-uni-text",{staticClass:"operator"},[t._v("-")]),e("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",[t._v(t._s(t.orderData.promotion_money))])],1)],1)],1):t._e(),t.orderData.coupon_money>0?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("优惠券")]),e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",{staticClass:"color-base-text"},[e("v-uni-text",{staticClass:"operator"},[t._v("-")]),e("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",[t._v(t._s(t.orderData.coupon_money))])],1)],1)],1):t._e(),t.orderData.balance_money>0?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("使用余额")]),e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",{staticClass:"color-base-text"},[e("v-uni-text",{staticClass:"operator"},[t._v("-")]),e("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",[t._v(t._s(t.orderData.balance_money))])],1)],1)],1):t._e(),t.orderData.point_money>0?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("积分抵扣")]),e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",{staticClass:"color-base-text"},[e("v-uni-text",{staticClass:"operator"},[t._v("-")]),e("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",[t._v(t._s(t.orderData.point_money))])],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",[t._v("实付金额：")]),e("v-uni-text",{staticClass:"color-base-text"},[e("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",{staticClass:"font-size-base"},[t._v(t._s(t.orderData.pay_money))])],1)],1)],1),t.orderData.action.length>0?e("v-uni-view",{staticClass:"order-action",class:{"bottom-safe-area":t.isIphoneX}},[1==t.evaluateConfig.evaluate_status&&1==t.orderData.is_evaluate?e("v-uni-view",{staticClass:"order-box-btn white",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.operation("memberOrderEvaluation")}}},[0==t.orderData.evaluate_status?e("v-uni-text",[t._v("评价")]):1==t.orderData.evaluate_status?e("v-uni-text",[t._v("追评")]):t._e()],1):t._e(),t._l(t.orderData.action,(function(i,a){return e("v-uni-view",{key:a,staticClass:"order-box-btn",class:"orderPay"==i.action?"color-base-bg color-base-border":"white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.operation(i.action)}}},[t._v(t._s(i.title))])}))],2):0==t.orderData.action.length&&1==t.orderData.is_evaluate&&1==t.evaluateConfig.evaluate_status?e("v-uni-view",{staticClass:"order-action",class:{"bottom-safe-area":t.isIphoneX}},[e("v-uni-view",{staticClass:"order-box-btn white",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.operation("memberOrderEvaluation")}}},[0==t.orderData.evaluate_status?e("v-uni-text",[t._v("评价")]):1==t.orderData.evaluate_status?e("v-uni-text",[t._v("追评")]):t._e()],1)],1):t._e()],1),e("ns-payment",{ref:"choosePaymentPopup",attrs:{payMoney:t.orderData.pay_money},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.pay.apply(void 0,arguments)}}}),e("loading-cover",{ref:"loadingCover"})],1)},s=[]},"9cf7":function(t,i,e){"use strict";e.r(i);var a=e("4c61"),o=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=o.a},c4b7:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */uni-text[data-v-6250301b],\r\nuni-view[data-v-6250301b]{font-size:%?24?%}.align-right[data-v-6250301b]{text-align:right}.color-text-white[data-v-6250301b]{color:#fff}.detail-container .height-box[data-v-6250301b]{display:block;padding-bottom:%?100?%}.detail-container.safe-area .height-box[data-v-6250301b]{display:block;padding-bottom:%?168?%}.status-wrap[data-v-6250301b]{background-size:100% 100%;padding:%?40?%;height:%?180?%;position:relative}.status-wrap uni-image[data-v-6250301b]{width:%?104?%;height:%?86?%;margin-right:%?20?%;margin-top:%?20?%}.status-wrap .order-status-left[data-v-6250301b]{display:flex}.status-wrap .order-time[data-v-6250301b]{position:absolute;top:%?70?%;right:%?30?%;display:flex;align-items:center;font-size:10px;color:#fff}.status-wrap .order-time uni-image[data-v-6250301b]{width:%?26?%;height:%?26?%;margin-right:%?6?%}.status-wrap > uni-view[data-v-6250301b]{text-align:center;color:#fff}.status-wrap .desc[data-v-6250301b]{margin-left:%?20?%}.status-wrap .price[data-v-6250301b]{font-weight:600}.status-wrap .action-group[data-v-6250301b]{text-align:center;padding-top:%?20?%}.status-wrap .action-group .action-btn[data-v-6250301b]{line-height:1;padding:%?16?% %?50?%;display:inline-block;border-radius:%?32?%;background:#fff;box-shadow:0 0 %?14?% hsla(0,0%,62%,.6)}[data-v-6250301b] #action-date .uni-countdown .uni-countdown__number{border:none!important;padding:0!important;margin:0!important;background:transparent!important}.address-wrap[data-v-6250301b]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;min-height:%?100?%;margin-top:%?-69?%}.address-wrap .icon[data-v-6250301b]{position:absolute;top:%?20?%;margin-right:%?20?%}.address-wrap .icon uni-image[data-v-6250301b]{width:%?60?%;height:%?60?%}.address-wrap .icon .iconfont[data-v-6250301b]{line-height:%?50?%;font-size:%?28?%}.address-wrap .icon .iconmendian[data-v-6250301b]{font-size:%?32?%}.address-wrap .address-info[data-v-6250301b]{padding-left:%?40?%}.address-wrap .address-info .info[data-v-6250301b]{display:flex;line-height:1;color:#333}.address-wrap .address-info .detail[data-v-6250301b]{line-height:1.3;color:#333;margin-top:%?20?%}.address-wrap .store-info[data-v-6250301b]{padding-left:%?100?%}.address-wrap .cell-more[data-v-6250301b]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:%?10?%}.address-wrap .cell-more .iconfont[data-v-6250301b]{color:#999}.pickup-info[data-v-6250301b]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.pickup-info .pickup-point-info .name[data-v-6250301b]{display:flex;height:%?50?%;align-items:flex-end;margin-bottom:10px}.pickup-info .pickup-point-info .name uni-text[data-v-6250301b]{line-height:1}.pickup-info .pickup-point-info .name uni-text.mark[data-v-6250301b]{font-size:%?20?%;padding:1px %?10?%;border:.5px solid #fff;border-radius:%?4?%;margin-left:%?10?%}.pickup-info .pickup-point-info .address[data-v-6250301b],\r\n.pickup-info .pickup-point-info .time[data-v-6250301b],\r\n.pickup-info .pickup-point-info .contact[data-v-6250301b]{font-size:%?24?%;line-height:1;margin-top:%?16?%}.pickup-info .pickup-point-info .address .iconfont[data-v-6250301b],\r\n.pickup-info .pickup-point-info .time .iconfont[data-v-6250301b],\r\n.pickup-info .pickup-point-info .contact .iconfont[data-v-6250301b]{color:#999;font-size:%?24?%;line-height:1;margin-right:%?10?%}.pickup-info .hr[data-v-6250301b]{border-top:1px dashed #e5e5e5;margin:%?20?% 0}.pickup-info .pickup-code-info .info[data-v-6250301b]{text-align:center}.pickup-info .pickup-code-info .code[data-v-6250301b]{display:flex;flex-direction:column;align-items:center}.pickup-info .pickup-code-info .code uni-image.barcode[data-v-6250301b]{width:%?360?%;margin-top:%?20?%}.pickup-info .pickup-code-info .code uni-image.qrcode[data-v-6250301b]{width:%?240?%;margin-top:%?20?%}.pickup-info .pickup-code-info .copy[data-v-6250301b]{font-size:%?24?%;display:inline-block;color:#666;background:#f7f7f7;line-height:1;padding:%?6?% %?14?%;margin-left:%?10?%;border-radius:%?18?%;border:.5px solid #666}.virtual-mobile-wrap[data-v-6250301b]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;margin-top:%?-69?%;display:flex}.virtual-mobile-wrap uni-view[data-v-6250301b]:nth-child(2){flex:1;text-align:right}.verify-code-wrap[data-v-6250301b]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.verify-code-wrap .wrap[data-v-6250301b]{text-align:center;line-height:2}.verify-code-wrap .wrap .copy[data-v-6250301b]{font-size:%?24?%;display:inline-block;color:#666;background:#f7f7f7;line-height:1;padding:%?6?% %?14?%;margin-left:%?10?%;border-radius:%?18?%;border:.5px solid #666}.verify-code-wrap .wrap .virtual-code[data-v-6250301b]{font-weight:700}.verify-code-wrap .hr[data-v-6250301b]{border-top:1px dashed #e5e5e5;margin:%?20?% 0}.verify-code-wrap .code[data-v-6250301b]{display:flex;flex-direction:column;align-items:center;text-align:center}.verify-code-wrap .code uni-image.barcode[data-v-6250301b]{width:%?400?%;margin-top:%?10?%}.verify-code-wrap .code uni-image.qrcode[data-v-6250301b]{width:%?300?%;margin-top:%?20?%}.verify-code-wrap .code uni-text[data-v-6250301b]{margin-top:%?20?%}.verify-info-wrap[data-v-6250301b]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.verify-info-wrap .head[data-v-6250301b]{font-size:%?28?%;border-bottom:1px dashed #f7f7f7;line-height:1;padding:%?10?% 0 %?30?% 0}.verify-info-wrap .order-cell .tit[data-v-6250301b]{font-size:%?28?%}.verify-info-wrap .order-cell .box uni-text[data-v-6250301b]{font-size:%?28?%;font-weight:700}.verify-info-wrap .record-empty[data-v-6250301b]{text-align:center;padding-top:%?30?%}.verify-info-wrap .record-item[data-v-6250301b]{margin-bottom:%?40?%}.verify-info-wrap .record-item[data-v-6250301b]:last-child{margin-bottom:0}.carmichael .order-cell .tit[data-v-6250301b]{font-size:%?28?%}.carmichael .order-cell .box uni-text[data-v-6250301b]{font-size:%?28?%;font-weight:400}.carmichael .order-cell .copy[data-v-6250301b]{font-size:%?20?%;display:inline-block;background:#f7f7f7;line-height:1;padding:%?6?% %?10?%;margin-left:%?10?%;border-radius:%?18?%;border:%?2?% solid #d2d2d2}.site-wrap[data-v-6250301b]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.site-wrap .site-header[data-v-6250301b]{display:flex;align-items:center}.site-wrap .site-header .icondianpu[data-v-6250301b]{display:inline-block;line-height:1;margin-right:%?12?%;font-size:%?28?%}.site-wrap .site-body .goods-wrap[data-v-6250301b]{margin-bottom:%?20?%;display:flex;position:relative}.site-wrap .site-body .goods-wrap[data-v-6250301b]:last-of-type{margin-bottom:0}.site-wrap .site-body .goods-wrap .goods-img[data-v-6250301b]{width:%?160?%;height:%?160?%;margin-right:%?20?%}.site-wrap .site-body .goods-wrap .goods-img uni-image[data-v-6250301b]{width:100%;height:100%;border-radius:%?10?%}.site-wrap .site-body .goods-wrap .goods-info[data-v-6250301b]{flex:1;position:relative;display:flex;flex-direction:column;justify-content:space-between;max-width:calc(100% - %?180?%)}.site-wrap .site-body .goods-wrap .goods-info .goods-name[data-v-6250301b]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.5;font-size:%?28?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section[data-v-6250301b]{width:100%;line-height:1.3;display:flex;margin-top:%?20?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section .goods-price[data-v-6250301b]{font-weight:700;font-size:%?20?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section .unit[data-v-6250301b]{font-weight:400;font-size:%?24?%;margin-right:%?2?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section uni-view[data-v-6250301b]{flex:1;line-height:1.3}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section uni-view[data-v-6250301b]:last-of-type{text-align:right}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section uni-view:last-of-type .iconfont[data-v-6250301b]{line-height:1;font-size:%?24?%}.site-wrap .site-body .goods-wrap .goods-info .goods-action[data-v-6250301b]{text-align:right;padding-top:%?20?%}.site-wrap .site-body .goods-wrap .goods-info .goods-action uni-navigator[data-v-6250301b]{display:inline-block}.site-wrap .site-body .goods-wrap .goods-info .goods-action .order-box-btn[data-v-6250301b]{height:%?48?%!important;line-height:%?48?%!important;font-size:%?24?%!important;display:inline-block;background:#fff;border:.5px solid #999;margin-left:%?10?%;box-sizing:initial}.order-cell[data-v-6250301b]{display:flex;margin:%?20?% 0;align-items:center;background:#fff;line-height:%?40?%}.order-cell .tit[data-v-6250301b]{text-align:left}.order-cell .box[data-v-6250301b]{flex:1;padding:0 %?20?%;line-height:inherit}.order-cell .box .textarea[data-v-6250301b]{height:%?40?%}.order-cell .iconfont[data-v-6250301b]{color:#bbb;font-size:%?28?%}.order-cell .order-pay[data-v-6250301b]{padding:0}.order-cell .order-pay uni-text[data-v-6250301b]{display:inline-block;margin-left:%?6?%}.order-summary[data-v-6250301b]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.order-summary .order-cell[data-v-6250301b]:first-child{margin-top:0}.order-summary .order-cell .tit[data-v-6250301b]{font-size:%?28?%;width:%?200?%}.order-summary .order-cell .box[data-v-6250301b]{display:flex;align-items:center}.order-summary .order-cell .box uni-text[data-v-6250301b]{font-size:%?28?%}.order-summary .order-cell .copy[data-v-6250301b]{font-size:%?20?%;display:inline-block;background:#f7f7f7;line-height:1;padding:%?6?% %?10?%;margin-left:%?10?%;border-radius:%?18?%;border:%?2?% solid #d2d2d2}.order-summary .hr[data-v-6250301b]{width:100%;height:%?2?%;background:#f7f7f7;margin-bottom:%?20?%}.order-money[data-v-6250301b]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.order-money .order-cell .tit[data-v-6250301b]{font-size:%?28?%}.order-money .order-cell .box[data-v-6250301b]{font-weight:600;padding:0}.order-money .order-cell .box uni-text[data-v-6250301b]{font-size:%?28?%;font-weight:700}.order-money .order-cell .box .operator[data-v-6250301b]{font-size:%?24?%;margin-right:%?6?%}.kefu[data-v-6250301b]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;margin:%?30?% 0 %?10?%;border-top:%?2?% solid #f7f7f7;padding-bottom:0;padding-top:%?30?%}.kefu > uni-view[data-v-6250301b]{display:flex;justify-content:center;align-items:center}.kefu > uni-view .iconfont[data-v-6250301b]{font-weight:700;margin-right:%?10?%;font-size:%?28?%;line-height:1}.kefu uni-button[data-v-6250301b]{width:100%;height:100%;border:none;z-index:1;padding:0;margin:0;background:none;height:%?50?%;line-height:%?50?%;display:flex;justify-content:center}.kefu uni-button[data-v-6250301b]::after{border:none!important}.kefu uni-button .iconfont[data-v-6250301b]{margin-right:%?10?%}.order-action[data-v-6250301b]{text-align:right}.order-action .order-box-btn[data-v-6250301b]{margin-right:%?30?%;margin-left:0;font-size:%?24?%;height:%?60?%;line-height:%?60?%;box-sizing:initial;min-width:%?60?%;text-align:center}.order-action .order-box-btn.color-base-bg[data-v-6250301b]{color:#fff}.order-action .order-box-btn[data-v-6250301b]:last-child{margin-right:0}.status-name uni-view[data-v-6250301b]{font-size:%?32?%;color:#fff;line-height:1;margin-top:%?40?%;text-align:left}.status-name .desc[data-v-6250301b]{font-size:%?24?%;margin:%?10?% 0 0 0}.head-nav[data-v-6250301b]{width:100%;height:0}.head-nav.active[data-v-6250301b]{padding-top:%?40?%}.head-return[data-v-6250301b]{height:%?90?%;line-height:%?90?%;color:#fff;font-weight:600;font-size:%?32?%;position:relative;text-align:center}.head-return uni-text[data-v-6250301b]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:%?20?%;display:inline-block;margin-right:%?10?%;font-size:%?32?%}.store-detail uni-view[data-v-6250301b]{font-size:%?20?%}.store-wrap[data-v-6250301b]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;margin-top:%?-76?%}.store-wrap .store-info[data-v-6250301b]{display:flex;align-items:center;padding-left:%?50?%;position:relative}.store-wrap .store-info .icon[data-v-6250301b]{left:0;position:absolute;top:%?4?%}.store-wrap .store-info .icon .iconfont[data-v-6250301b]{line-height:%?50?%;font-size:%?28?%}.store-wrap .store-info .icon .iconmendian[data-v-6250301b]{font-size:%?32?%}.store-wrap .store-info .store-name[data-v-6250301b]{display:flex}.store-wrap .store-info .store-name .name[data-v-6250301b]{flex:1}.store-wrap .store-info .store-info-detail[data-v-6250301b]{flex:1}.store-wrap .store-info .store-info-detail .store-detail uni-view[data-v-6250301b]{font-size:%?24?%}.store-wrap .store-info .store-info-detail > uni-view[data-v-6250301b]:first-of-type{font-size:%?26?%}.store-wrap .store-info .cell-more[data-v-6250301b]{margin-left:%?50?%}.pick-block[data-v-6250301b]{display:flex;align-items:center;margin-top:%?20?%;padding-top:%?20?%}.pick-block.first-pick-block[data-v-6250301b]{border-top:%?2?% solid #f1f1f1}.pick-block uni-input[data-v-6250301b],\r\n.pick-block .last-child[data-v-6250301b]{flex:1;text-align:right;font-size:%?24?%}.sku[data-v-6250301b]{display:flex;line-height:1;margin-top:%?10?%;margin-bottom:%?10?%}.goods-spec[data-v-6250301b]{color:#838383;font-size:%?22?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.detail-container[data-v-6250301b]{padding-bottom:%?40?%}.fixed-bottom[data-v-6250301b]{width:100%;position:fixed;left:0;bottom:0;padding:%?10?% %?30?%;box-sizing:border-box;background:#fff}',""]),t.exports=i},cc89:function(t,i,e){var a=e("c4b7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("769f0a9c",a,!0,{sourceMap:!1,shadowMode:!1})},d81a:function(t,i,e){"use strict";var a=e("cc89"),o=e.n(a);o.a}}]);