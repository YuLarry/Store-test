(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-detail_point-detail_point"],{"21f9":function(t,i,e){"use strict";var a=e("24e0"),o=e.n(a);o.a},"24e0":function(t,i,e){var a=e("bf08");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("413ebb56",a,!0,{sourceMap:!1,shadowMode:!1})},"8d93":function(t,i,e){"use strict";e.r(i);var a=e("8dac"),o=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);i["default"]=o.a},"8dac":function(t,i,e){"use strict";var a=e("4ea4");e("acd8"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=a(e("ade3")),r=a(e("245b")),n=a(e("53a5")),d={mixins:[r.default],data:function(){return{isIphoneX:!1,orderId:0,orderData:{action:[]},action:{icon:""},storeDetail:{},kefuConfig:{weapp:"",system:"",open:"",open_url:""}}},components:{nsPayment:n.default},onLoad:function(t){t.order_id&&(this.orderId=t.order_id)},onShow:function(){this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),uni.getStorageSync("token")?this.getOrderData():this.$util.redirectTo("/otherpages/login/login/login",{back:"/pages/order/detail_point/detail_point?order_id="+this.orderId}),this.getKekuConfig()},methods:(0,o.default)({goConnect:function(){var t=this;if(uni.getStorageSync("token")){var i={order_id:t.orderData.order_id};return t.$util.redirectTo("/otherpages/chat/room/room",i),!1}this.$refs.login.open("/pages/goods/detail/detail?sku_id="+t.orderData.sku_id)},getKekuConfig:function(){var t=this;this.$api.sendRequest({url:"/api/config/servicer",success:function(i){0==i.code&&(t.kefuConfig=i.data)}})},goRefund:function(t){this.$util.redirectTo("/otherpages/order/refund/refund",{order_goods_id:t})},goRefundDetail:function(t){this.$util.redirectTo("/otherpages/order/refund_detail/refund_detail",{order_goods_id:t})},goDetail:function(t){this.$util.redirectTo("/promotionpages/point/detail/detail",{id:t})},navigateBack:function(){this.$util.goBack()},getOrderData:function(){var t=this;this.$api.sendRequest({url:"/pointexchange/api/order/info",data:{order_id:this.orderId},success:function(i){uni.stopPullDownRefresh(),i.code>=0?(t.$refs.loadingCover&&t.$refs.loadingCover.hide(),t.orderData=i.data,""!=t.orderData.delivery_store_info&&(t.orderData.delivery_store_info=JSON.parse(t.orderData.delivery_store_info))):(t.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){t.$util.redirectTo("/pages/order/list/list")}),1500))},fail:function(i){uni.stopPullDownRefresh(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},onPullDownRefresh:function(){this.getOrderData()},orderClose:function(){var t=this;uni.showModal({title:"提示",content:"确定关闭此次兑换？",success:function(i){i.confirm&&t.$api.sendRequest({url:"/pointexchange/api/order/close",data:{order_id:t.orderData.order_id},success:function(i){i.code>=0&&(t.$util.showToast({title:"关闭成功"}),t.getOrderData())}})}})},openChoosePayment:function(){this.$refs.choosePaymentPopup.open()},orderPay:function(){this.$refs.choosePaymentPopup.getPayInfo(this.orderData.out_trade_no)},exchangeImage:function(t){switch(t.type){case 1:return this.$util.img(t.exchange_image,{size:"mid"});case 2:return t.exchange_image?this.$util.img(t.exchange_image):this.$util.img("upload/uniapp/point/coupon.png");case 3:return t.exchange_image?this.$util.img(t.exchange_image):this.$util.img("upload/uniapp/point/hongbao.png")}},imageError:function(){switch(this.orderData.type){case 2:this.orderData.exchange_image=this.$util.img("upload/uniapp/point/coupon.png");break;case 3:this.orderData.exchange_image=this.$util.img("upload/uniapp/point/hongbao.png");break;default:this.orderData.exchange_image=this.$util.getDefaultImage().default_goods_img}this.$forceUpdate()}},"openChoosePayment",(function(){this.$refs.choosePaymentPopup.open()})),filters:{abs:function(t){return Math.abs(parseFloat(t)).toFixed(2)}}};i.default=d},9622:function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return a}));var a={loadingCover:e("b1ae").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"detail-container",class:{"safe-area":t.isIphoneX},attrs:{"data-theme":t.themeStyle}},[e("v-uni-view",{staticClass:"status-wrap color-base-bg",style:{backgroundImage:"url("+t.$util.img("upload/uniapp/order/status-wrap-bg.png")+")"}},[e("v-uni-view",{staticClass:"order-status-left"},[0==t.orderData.order_status?e("v-uni-image",{attrs:{src:t.$util.img("/upload/uniapp/order/order-icon.png")}}):t._e(),1==t.orderData.order_status?e("v-uni-image",{attrs:{src:t.$util.img("/upload/uniapp/order/order-icon-received.png")}}):t._e(),-1==t.orderData.order_status?e("v-uni-image",{attrs:{src:t.$util.img("/upload/uniapp/order/order-icon-close.png")}}):t._e(),e("v-uni-view",{staticClass:"status-name"},[e("v-uni-view",{staticClass:"status-name"},[t._v(t._s(0==t.orderData.order_status?"待支付":1==t.orderData.order_status?"已完成":-1==t.orderData.order_status?"已关闭":""))])],1)],1)],1),e("v-uni-view",{staticClass:"site-wrap",staticStyle:{"margin-top":"-69rpx"}},[e("v-uni-view",{staticClass:"site-body"},[e("v-uni-view",{staticClass:"goods-wrap"},[e("v-uni-view",{staticClass:"goods-img",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(t.orderData.exchange_goods_id)}}},[e("v-uni-image",{attrs:{src:t.exchangeImage(t.orderData),mode:"aspectFill"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.imageError()}}})],1),e("v-uni-view",{staticClass:"goods-info"},[e("v-uni-view",{staticClass:"goods-name",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(t.orderData.exchange_goods_id)}}},[t._v(t._s(t.orderData.exchange_name))]),e("v-uni-view",{staticClass:"goods-sub-section"},[e("v-uni-view",[e("v-uni-text",{staticClass:"goods-price color-base-text"},[e("v-uni-text",[e("v-uni-text",[t._v(t._s(t.orderData.point)+"积分")]),t.orderData.price>0?e("v-uni-text",[t._v("+"),e("v-uni-text",{staticClass:"unit"},[t._v(t._s(t.$lang("common.currencySymbol")))]),t._v(t._s(t.orderData.price))],1):t._e()],1)],1)],1),e("v-uni-view",[e("v-uni-text",[e("v-uni-text",{staticClass:"iconfont iconclose"}),t._v(t._s(t.orderData.num))],1)],1)],1),e("v-uni-view",{staticClass:"goods-action"},[t.orderData.is_enable_refund?[0==t.goodsItem.refund_status||-1==t.goodsItem.refund_status?e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goRefund(t.goodsItem.order_goods_id)}}},[e("v-uni-view",{staticClass:"order-box-btn"},[t._v(t._s(10==t.orderData.order_status?"申请售后":"申请退款"))])],1):t._e()]:t._e(),0!=t.goodsItem.refund_status&&-1!=t.goodsItem.refund_status?e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goRefundDetail(t.goodsItem.order_goods_id)}}},[e("v-uni-view",{staticClass:"order-box-btn"},[t._v(t._s(10==t.orderData.order_status?"查看售后":"查看退款"))])],1):t._e()],2)],1)],1)],1)],1),e("v-uni-view",{staticClass:"order-summary"},[e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("订单编号：")]),e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.order_no))]),e("v-uni-view",{staticClass:"copy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$util.copy(t.orderData.order_no)}}},[t._v("复制")])],1)],1),e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("订单交易号：")]),e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.out_trade_no))])],1)],1),e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("创建时间：")]),e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.$util.timeStampTurnTime(t.orderData.create_time)))])],1)],1),t.orderData.close_time>0?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("关闭时间：")]),e("v-uni-view",{staticClass:"box"},[e("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.$util.timeStampTurnTime(t.orderData.close_time)))])],1)],1):t._e(),e("v-uni-view",{staticClass:"kefu"},[1==t.kefuConfig.system?e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goConnect.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont iconziyuan"}),e("v-uni-text",[t._v("联系客服")])],1):t._e()],1)],1),e("v-uni-view",{staticClass:"order-money"},[t.orderData.point>0?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("使用积分")]),e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",{staticClass:"color-base-text"},[e("v-uni-text",[t._v(t._s(t.orderData.point))])],1)],1)],1):t._e(),t.orderData.delivery_price>0?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-text",{staticClass:"tit"},[t._v("运费")]),e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",{staticClass:"color-base-text"},[e("v-uni-text",{staticClass:"unit font-size-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",[t._v(t._s(t.orderData.delivery_price))])],1)],1)],1):t._e(),t.orderData.order_money>0?e("v-uni-view",{staticClass:"order-cell"},[e("v-uni-view",{staticClass:"box align-right"},[e("v-uni-text",[t._v("实付金额：")]),e("v-uni-text",{staticClass:"color-base-text"},[e("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",{staticClass:"font-size-base"},[t._v(t._s(t.orderData.order_money))])],1)],1)],1):t._e(),0==t.orderData.order_status&&1==t.orderData.type?e("v-uni-view",{staticClass:"order-action"},[e("v-uni-view",{staticClass:"order-box-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.orderClose()}}},[t._v("关闭")]),e("v-uni-view",{staticClass:"order-box-btn color-base-bg color-base-border color-text-white",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openChoosePayment()}}},[t._v("支付")])],1):t._e()],1),e("ns-payment",{ref:"choosePaymentPopup",attrs:{payMoney:t.orderData.order_money},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.orderPay(t.orderData)}}}),e("loading-cover",{ref:"loadingCover"})],1)},r=[]},bf08:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */uni-text[data-v-0c184166],\r\nuni-view[data-v-0c184166]{font-size:%?24?%}.align-right[data-v-0c184166]{text-align:right}.color-text-white[data-v-0c184166]{color:#fff}.detail-container .height-box[data-v-0c184166]{display:block;padding-bottom:%?100?%}.detail-container.safe-area .height-box[data-v-0c184166]{display:block;padding-bottom:%?168?%}.status-wrap[data-v-0c184166]{background-size:100% 100%;padding:%?40?%;height:%?180?%;position:relative}.status-wrap uni-image[data-v-0c184166]{width:%?104?%;height:%?86?%;margin-right:%?20?%;margin-top:%?20?%}.status-wrap .order-status-left[data-v-0c184166]{display:flex}.status-wrap .order-time[data-v-0c184166]{position:absolute;top:%?70?%;right:%?30?%;display:flex;align-items:center;font-size:10px;color:#fff}.status-wrap .order-time uni-image[data-v-0c184166]{width:%?26?%;height:%?26?%;margin-right:%?6?%}.status-wrap > uni-view[data-v-0c184166]{text-align:center;color:#fff}.status-wrap .desc[data-v-0c184166]{margin-left:%?20?%}.status-wrap .price[data-v-0c184166]{font-weight:600}.status-wrap .action-group[data-v-0c184166]{text-align:center;padding-top:%?20?%}.status-wrap .action-group .action-btn[data-v-0c184166]{line-height:1;padding:%?16?% %?50?%;display:inline-block;border-radius:%?32?%;background:#fff;box-shadow:0 0 %?14?% hsla(0,0%,62%,.6)}[data-v-0c184166] #action-date .uni-countdown .uni-countdown__number{border:none!important;padding:0!important;margin:0!important;background:transparent!important}.address-wrap[data-v-0c184166]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;min-height:%?100?%;margin-top:%?-69?%}.address-wrap .icon[data-v-0c184166]{position:absolute;top:%?20?%;margin-right:%?20?%}.address-wrap .icon uni-image[data-v-0c184166]{width:%?60?%;height:%?60?%}.address-wrap .icon .iconfont[data-v-0c184166]{line-height:%?50?%;font-size:%?28?%}.address-wrap .icon .iconmendian[data-v-0c184166]{font-size:%?32?%}.address-wrap .address-info[data-v-0c184166]{padding-left:%?40?%}.address-wrap .address-info .info[data-v-0c184166]{display:flex;line-height:1;color:#333}.address-wrap .address-info .detail[data-v-0c184166]{line-height:1.3;color:#333;margin-top:%?20?%}.address-wrap .store-info[data-v-0c184166]{padding-left:%?100?%}.address-wrap .cell-more[data-v-0c184166]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:%?10?%}.address-wrap .cell-more .iconfont[data-v-0c184166]{color:#999}.pickup-info[data-v-0c184166]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.pickup-info .pickup-point-info .name[data-v-0c184166]{display:flex;height:%?50?%;align-items:flex-end;margin-bottom:10px}.pickup-info .pickup-point-info .name uni-text[data-v-0c184166]{line-height:1}.pickup-info .pickup-point-info .name uni-text.mark[data-v-0c184166]{font-size:%?20?%;padding:1px %?10?%;border:.5px solid #fff;border-radius:%?4?%;margin-left:%?10?%}.pickup-info .pickup-point-info .address[data-v-0c184166],\r\n.pickup-info .pickup-point-info .time[data-v-0c184166],\r\n.pickup-info .pickup-point-info .contact[data-v-0c184166]{font-size:%?24?%;line-height:1;margin-top:%?16?%}.pickup-info .pickup-point-info .address .iconfont[data-v-0c184166],\r\n.pickup-info .pickup-point-info .time .iconfont[data-v-0c184166],\r\n.pickup-info .pickup-point-info .contact .iconfont[data-v-0c184166]{color:#999;font-size:%?24?%;line-height:1;margin-right:%?10?%}.pickup-info .hr[data-v-0c184166]{border-top:1px dashed #e5e5e5;margin:%?20?% 0}.pickup-info .pickup-code-info .info[data-v-0c184166]{text-align:center}.pickup-info .pickup-code-info .code[data-v-0c184166]{display:flex;flex-direction:column;align-items:center}.pickup-info .pickup-code-info .code uni-image.barcode[data-v-0c184166]{width:%?360?%;margin-top:%?20?%}.pickup-info .pickup-code-info .code uni-image.qrcode[data-v-0c184166]{width:%?240?%;margin-top:%?20?%}.pickup-info .pickup-code-info .copy[data-v-0c184166]{font-size:%?24?%;display:inline-block;color:#666;background:#f7f7f7;line-height:1;padding:%?6?% %?14?%;margin-left:%?10?%;border-radius:%?18?%;border:.5px solid #666}.virtual-mobile-wrap[data-v-0c184166]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;margin-top:%?-69?%;display:flex}.virtual-mobile-wrap uni-view[data-v-0c184166]:nth-child(2){flex:1;text-align:right}.verify-code-wrap[data-v-0c184166]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.verify-code-wrap .wrap[data-v-0c184166]{text-align:center;line-height:2}.verify-code-wrap .wrap .copy[data-v-0c184166]{font-size:%?24?%;display:inline-block;color:#666;background:#f7f7f7;line-height:1;padding:%?6?% %?14?%;margin-left:%?10?%;border-radius:%?18?%;border:.5px solid #666}.verify-code-wrap .wrap .virtual-code[data-v-0c184166]{font-weight:700}.verify-code-wrap .hr[data-v-0c184166]{border-top:1px dashed #e5e5e5;margin:%?20?% 0}.verify-code-wrap .code[data-v-0c184166]{display:flex;flex-direction:column;align-items:center;text-align:center}.verify-code-wrap .code uni-image.barcode[data-v-0c184166]{width:%?400?%;margin-top:%?10?%}.verify-code-wrap .code uni-image.qrcode[data-v-0c184166]{width:%?300?%;margin-top:%?20?%}.verify-code-wrap .code uni-text[data-v-0c184166]{margin-top:%?20?%}.verify-info-wrap[data-v-0c184166]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.verify-info-wrap .head[data-v-0c184166]{font-size:%?28?%;border-bottom:1px dashed #f7f7f7;line-height:1;padding:%?10?% 0 %?30?% 0}.verify-info-wrap .order-cell .tit[data-v-0c184166]{font-size:%?28?%}.verify-info-wrap .order-cell .box uni-text[data-v-0c184166]{font-size:%?28?%;font-weight:700}.verify-info-wrap .record-empty[data-v-0c184166]{text-align:center;padding-top:%?30?%}.verify-info-wrap .record-item[data-v-0c184166]{margin-bottom:%?40?%}.verify-info-wrap .record-item[data-v-0c184166]:last-child{margin-bottom:0}.carmichael .order-cell .tit[data-v-0c184166]{font-size:%?28?%}.carmichael .order-cell .box uni-text[data-v-0c184166]{font-size:%?28?%;font-weight:400}.carmichael .order-cell .copy[data-v-0c184166]{font-size:%?20?%;display:inline-block;background:#f7f7f7;line-height:1;padding:%?6?% %?10?%;margin-left:%?10?%;border-radius:%?18?%;border:%?2?% solid #d2d2d2}.site-wrap[data-v-0c184166]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.site-wrap .site-header[data-v-0c184166]{display:flex;align-items:center}.site-wrap .site-header .icondianpu[data-v-0c184166]{display:inline-block;line-height:1;margin-right:%?12?%;font-size:%?28?%}.site-wrap .site-body .goods-wrap[data-v-0c184166]{margin-bottom:%?20?%;display:flex;position:relative}.site-wrap .site-body .goods-wrap[data-v-0c184166]:last-of-type{margin-bottom:0}.site-wrap .site-body .goods-wrap .goods-img[data-v-0c184166]{width:%?160?%;height:%?160?%;margin-right:%?20?%}.site-wrap .site-body .goods-wrap .goods-img uni-image[data-v-0c184166]{width:100%;height:100%;border-radius:%?10?%}.site-wrap .site-body .goods-wrap .goods-info[data-v-0c184166]{flex:1;position:relative;display:flex;flex-direction:column;justify-content:space-between;max-width:calc(100% - %?180?%)}.site-wrap .site-body .goods-wrap .goods-info .goods-name[data-v-0c184166]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.5;font-size:%?28?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section[data-v-0c184166]{width:100%;line-height:1.3;display:flex;margin-top:%?20?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section .goods-price[data-v-0c184166]{font-weight:700;font-size:%?20?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section .unit[data-v-0c184166]{font-weight:400;font-size:%?24?%;margin-right:%?2?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section uni-view[data-v-0c184166]{flex:1;line-height:1.3}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section uni-view[data-v-0c184166]:last-of-type{text-align:right}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section uni-view:last-of-type .iconfont[data-v-0c184166]{line-height:1;font-size:%?24?%}.site-wrap .site-body .goods-wrap .goods-info .goods-action[data-v-0c184166]{text-align:right;padding-top:%?20?%}.site-wrap .site-body .goods-wrap .goods-info .goods-action uni-navigator[data-v-0c184166]{display:inline-block}.site-wrap .site-body .goods-wrap .goods-info .goods-action .order-box-btn[data-v-0c184166]{height:%?48?%!important;line-height:%?48?%!important;font-size:%?24?%!important;display:inline-block;background:#fff;border:.5px solid #999;margin-left:%?10?%;box-sizing:initial}.order-cell[data-v-0c184166]{display:flex;margin:%?20?% 0;align-items:center;background:#fff;line-height:%?40?%}.order-cell .tit[data-v-0c184166]{text-align:left}.order-cell .box[data-v-0c184166]{flex:1;padding:0 %?20?%;line-height:inherit}.order-cell .box .textarea[data-v-0c184166]{height:%?40?%}.order-cell .iconfont[data-v-0c184166]{color:#bbb;font-size:%?28?%}.order-cell .order-pay[data-v-0c184166]{padding:0}.order-cell .order-pay uni-text[data-v-0c184166]{display:inline-block;margin-left:%?6?%}.order-summary[data-v-0c184166]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.order-summary .order-cell[data-v-0c184166]:first-child{margin-top:0}.order-summary .order-cell .tit[data-v-0c184166]{font-size:%?28?%;width:%?200?%}.order-summary .order-cell .box[data-v-0c184166]{display:flex;align-items:center}.order-summary .order-cell .box uni-text[data-v-0c184166]{font-size:%?28?%}.order-summary .order-cell .copy[data-v-0c184166]{font-size:%?20?%;display:inline-block;background:#f7f7f7;line-height:1;padding:%?6?% %?10?%;margin-left:%?10?%;border-radius:%?18?%;border:%?2?% solid #d2d2d2}.order-summary .hr[data-v-0c184166]{width:100%;height:%?2?%;background:#f7f7f7;margin-bottom:%?20?%}.order-money[data-v-0c184166]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.order-money .order-cell .tit[data-v-0c184166]{font-size:%?28?%}.order-money .order-cell .box[data-v-0c184166]{font-weight:600;padding:0}.order-money .order-cell .box uni-text[data-v-0c184166]{font-size:%?28?%;font-weight:700}.order-money .order-cell .box .operator[data-v-0c184166]{font-size:%?24?%;margin-right:%?6?%}.kefu[data-v-0c184166]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;margin:%?30?% 0 %?10?%;border-top:%?2?% solid #f7f7f7;padding-bottom:0;padding-top:%?30?%}.kefu > uni-view[data-v-0c184166]{display:flex;justify-content:center;align-items:center}.kefu > uni-view .iconfont[data-v-0c184166]{font-weight:700;margin-right:%?10?%;font-size:%?28?%;line-height:1}.kefu uni-button[data-v-0c184166]{width:100%;height:100%;border:none;z-index:1;padding:0;margin:0;background:none;height:%?50?%;line-height:%?50?%;display:flex;justify-content:center}.kefu uni-button[data-v-0c184166]::after{border:none!important}.kefu uni-button .iconfont[data-v-0c184166]{margin-right:%?10?%}.order-action[data-v-0c184166]{text-align:right}.order-action .order-box-btn[data-v-0c184166]{margin-right:%?30?%;margin-left:0;font-size:%?24?%;height:%?60?%;line-height:%?60?%;box-sizing:initial;min-width:%?60?%;text-align:center}.order-action .order-box-btn.color-base-bg[data-v-0c184166]{color:#fff}.order-action .order-box-btn[data-v-0c184166]:last-child{margin-right:0}.status-name uni-view[data-v-0c184166]{font-size:%?32?%;color:#fff;line-height:1;margin-top:%?40?%;text-align:left}.status-name .desc[data-v-0c184166]{font-size:%?24?%;margin:%?10?% 0 0 0}.head-nav[data-v-0c184166]{width:100%;height:0}.head-nav.active[data-v-0c184166]{padding-top:%?40?%}.head-return[data-v-0c184166]{height:%?90?%;line-height:%?90?%;color:#fff;font-weight:600;font-size:%?32?%;position:relative;text-align:center}.head-return uni-text[data-v-0c184166]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:%?20?%;display:inline-block;margin-right:%?10?%;font-size:%?32?%}.store-detail uni-view[data-v-0c184166]{font-size:%?20?%}.store-wrap[data-v-0c184166]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;margin-top:%?-76?%}.store-wrap .store-info[data-v-0c184166]{display:flex;align-items:center;padding-left:%?50?%;position:relative}.store-wrap .store-info .icon[data-v-0c184166]{left:0;position:absolute;top:%?4?%}.store-wrap .store-info .icon .iconfont[data-v-0c184166]{line-height:%?50?%;font-size:%?28?%}.store-wrap .store-info .icon .iconmendian[data-v-0c184166]{font-size:%?32?%}.store-wrap .store-info .store-name[data-v-0c184166]{display:flex}.store-wrap .store-info .store-name .name[data-v-0c184166]{flex:1}.store-wrap .store-info .store-info-detail[data-v-0c184166]{flex:1}.store-wrap .store-info .store-info-detail .store-detail uni-view[data-v-0c184166]{font-size:%?24?%}.store-wrap .store-info .store-info-detail > uni-view[data-v-0c184166]:first-of-type{font-size:%?26?%}.store-wrap .store-info .cell-more[data-v-0c184166]{margin-left:%?50?%}.pick-block[data-v-0c184166]{display:flex;align-items:center;margin-top:%?20?%;padding-top:%?20?%}.pick-block.first-pick-block[data-v-0c184166]{border-top:%?2?% solid #f1f1f1}.pick-block uni-input[data-v-0c184166],\r\n.pick-block .last-child[data-v-0c184166]{flex:1;text-align:right;font-size:%?24?%}.sku[data-v-0c184166]{display:flex;line-height:1;margin-top:%?10?%;margin-bottom:%?10?%}.goods-spec[data-v-0c184166]{color:#838383;font-size:%?22?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.detail-container[data-v-0c184166]{padding-bottom:%?40?%}.fixed-bottom[data-v-0c184166]{width:100%;position:fixed;left:0;bottom:0;padding:%?10?% %?30?%;box-sizing:border-box;background:#fff}',""]),t.exports=i},e702:function(t,i,e){"use strict";e.r(i);var a=e("9622"),o=e("8d93");for(var r in o)"default"!==r&&function(t){e.d(i,t,(function(){return o[t]}))}(r);e("21f9");var n,d=e("f0c5"),s=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"0c184166",null,!1,a["a"],n);i["default"]=s.exports}}]);