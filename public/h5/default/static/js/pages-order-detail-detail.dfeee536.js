(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-detail-detail"],{"01d8":function(t,e,a){"use strict";a.r(e);var i=a("529f"),o=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},"0233":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={methods:{orderPay:function(t){var e=this;0==t.adjust_money?this.openChoosePayment():uni.showModal({title:"提示",content:"商家已将支付金额调整为"+t.pay_money+"元，是否继续支付？",success:function(t){t.confirm&&e.openChoosePayment()}})},pay:function(){var t=this;this.$api.sendRequest({url:"/api/order/pay",data:{order_ids:this.orderData.order_id},success:function(e){e.code>=0?t.$refs.choosePaymentPopup.getPayInfo(e.data):t.$util.showToast({title:e.message})}})},orderClose:function(t,e){var a=this;uni.showModal({title:"提示",content:"您确定要关闭该订单吗？",success:function(i){i.confirm&&a.$api.sendRequest({url:"/api/order/close",data:{order_id:t},success:function(t){t.code>=0?"function"==typeof e&&e():a.$util.showToast({title:"当前订单可能存在拼团，维权等操作，"+t.message+"不可以关闭哦!",duration:2e3})}})}})},orderDelivery:function(t,e){var a=this;uni.showModal({title:"提示",content:"您确定已经收到货物了吗？",success:function(i){i.confirm&&a.$api.sendRequest({url:"/api/order/takedelivery",data:{order_id:t},success:function(t){a.$util.showToast({title:t.message}),"function"==typeof e&&e()}})}})}}};e.default=i},"37fb":function(t,e,a){"use strict";a.r(e);var i=a("c34e"),o=a("01d8");for(var s in o)"default"!==s&&function(t){a.d(e,t,(function(){return o[t]}))}(s);a("907b");var r,n=a("f0c5"),d=Object(n["a"])(o["default"],i["b"],i["c"],!1,null,"ae6d90c2",null,!1,i["a"],r);e["default"]=d.exports},"529f":function(t,e,a){"use strict";var i=a("4ea4");a("4160"),a("d3b7"),a("acd8"),a("25f0"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("245b")),s=i(a("0233")),r=i(a("53a5")),n={data:function(){return{isIphoneX:!1,orderId:0,orderData:{action:[]},action:{icon:""},kefuConfig:{weapp:"",system:"",open:"",open_url:""},evaluateConfig:{evaluate_audit:1,evaluate_show:0,evaluate_status:1}}},mixins:[o.default,s.default],components:{nsPayment:r.default},onLoad:function(t){t.order_id&&(this.orderId=t.order_id)},onShow:function(){this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),uni.getStorageSync("token")?(this.getEvaluateConfig(),this.getOrderData()):this.$util.redirectTo("/otherpages/login/login/login",{back:"/pages/order/detail/detail?order_id="+this.orderId}),this.getKekuConfig()},methods:{goConnect:function(){if(uni.getStorageSync("token")){var t={order_id:this.orderId};return this.$util.redirectTo("/otherpages/chat/room/room",t),!1}this.$refs.login.open("/pages/order/detail/detail?order_id="+this.orderId)},getKekuConfig:function(){var t=this;this.$api.sendRequest({url:"/api/config/servicer",success:function(e){0==e.code&&(t.kefuConfig=e.data)}})},goDetail:function(t){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t})},goRefund:function(t){this.$util.redirectTo("/otherpages/order/refund/refund",{order_goods_id:t})},goRefundDetail:function(t){this.$util.redirectTo("/otherpages/order/refund_detail/refund_detail",{order_goods_id:t})},getOrderData:function(){var t=this;this.$api.sendRequest({url:"/api/order/detail",data:{order_id:this.orderId},success:function(e){if(uni.stopPullDownRefresh(),e.code>=0){var a=0;t.orderData=e.data;var i=[];t.orderData.order_goods.forEach((function(t){t.sku_spec_format?t.sku_spec_format=JSON.parse(t.sku_spec_format):t.sku_spec_format=[],0!=t.refund_status&&-1!=t.refund_status||(a+=1,i.push(t.order_goods_id))})),t.action=JSON.parse(e.data.order_status_action),a>1?(t.orderData.refund_batch_status=!0,t.orderData.refund_order_goods_ids=i):t.orderData.refund_batch_status=!1,t.$refs.loadingCover&&t.$refs.loadingCover.hide()}else t.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){t.$util.redirectTo("/pages/order/list/list")}),1500)},fail:function(e){uni.stopPullDownRefresh(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},onPullDownRefresh:function(){this.getOrderData()},operation:function(t){var e=this;switch(t){case"orderPay":this.orderPay(this.orderData);break;case"orderClose":this.orderClose(this.orderData.order_id,(function(){e.getOrderData()}));break;case"memberTakeDelivery":this.orderDelivery(this.orderData.order_id,(function(){e.getOrderData()}));break;case"trace":this.$util.redirectTo("/otherpages/order/logistics/logistics",{order_id:this.orderData.order_id});break;case"memberOrderEvaluation":this.$util.redirectTo("/otherpages/order/evaluate/evaluate",{order_id:this.orderData.order_id});break;case"refundbatch":this.$util.redirectTo("/otherpages/order/refund_type_select/refund_type_select",{order_goods_id:this.orderData.refund_order_goods_ids.toString()});break}},imageError:function(t){this.orderData.order_goods[t].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getEvaluateConfig:function(){var t=this;this.$api.sendRequest({url:"/api/goodsevaluate/config",success:function(e){if(0==e.code){var a=e.data;t.evaluateConfig=a}}})},openChoosePayment:function(){this.$refs.choosePaymentPopup.open()}},filters:{abs:function(t){return Math.abs(parseFloat(t)).toFixed(2)}}};e.default=n},7441:function(t,e,a){var i=a("bbd6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("00dd6330",i,!0,{sourceMap:!1,shadowMode:!1})},"907b":function(t,e,a){"use strict";var i=a("7441"),o=a.n(i);o.a},bbd6:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */uni-text[data-v-ae6d90c2],\r\nuni-view[data-v-ae6d90c2]{font-size:%?24?%}.align-right[data-v-ae6d90c2]{text-align:right}.color-text-white[data-v-ae6d90c2]{color:#fff}.detail-container .height-box[data-v-ae6d90c2]{display:block;padding-bottom:%?100?%}.detail-container.safe-area .height-box[data-v-ae6d90c2]{display:block;padding-bottom:%?168?%}.status-wrap[data-v-ae6d90c2]{background-size:100% 100%;padding:%?40?%;height:%?180?%;position:relative}.status-wrap uni-image[data-v-ae6d90c2]{width:%?104?%;height:%?86?%;margin-right:%?20?%;margin-top:%?20?%}.status-wrap .order-status-left[data-v-ae6d90c2]{display:flex}.status-wrap .order-time[data-v-ae6d90c2]{position:absolute;top:%?70?%;right:%?30?%;display:flex;align-items:center;font-size:10px;color:#fff}.status-wrap .order-time uni-image[data-v-ae6d90c2]{width:%?26?%;height:%?26?%;margin-right:%?6?%}.status-wrap > uni-view[data-v-ae6d90c2]{text-align:center;color:#fff}.status-wrap .desc[data-v-ae6d90c2]{margin-left:%?20?%}.status-wrap .price[data-v-ae6d90c2]{font-weight:600}.status-wrap .action-group[data-v-ae6d90c2]{text-align:center;padding-top:%?20?%}.status-wrap .action-group .action-btn[data-v-ae6d90c2]{line-height:1;padding:%?16?% %?50?%;display:inline-block;border-radius:%?32?%;background:#fff;box-shadow:0 0 %?14?% hsla(0,0%,62%,.6)}[data-v-ae6d90c2] #action-date .uni-countdown .uni-countdown__number{border:none!important;padding:0!important;margin:0!important;background:transparent!important}.address-wrap[data-v-ae6d90c2]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;min-height:%?100?%;margin-top:%?-69?%}.address-wrap .icon[data-v-ae6d90c2]{position:absolute;top:%?20?%;margin-right:%?20?%}.address-wrap .icon uni-image[data-v-ae6d90c2]{width:%?60?%;height:%?60?%}.address-wrap .icon .iconfont[data-v-ae6d90c2]{line-height:%?50?%;font-size:%?28?%}.address-wrap .icon .iconmendian[data-v-ae6d90c2]{font-size:%?32?%}.address-wrap .address-info[data-v-ae6d90c2]{padding-left:%?40?%}.address-wrap .address-info .info[data-v-ae6d90c2]{display:flex;line-height:1;color:#333}.address-wrap .address-info .detail[data-v-ae6d90c2]{line-height:1.3;color:#333;margin-top:%?20?%}.address-wrap .store-info[data-v-ae6d90c2]{padding-left:%?100?%}.address-wrap .cell-more[data-v-ae6d90c2]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:%?10?%}.address-wrap .cell-more .iconfont[data-v-ae6d90c2]{color:#999}.pickup-info[data-v-ae6d90c2]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.pickup-info .pickup-point-info .name[data-v-ae6d90c2]{display:flex;height:%?50?%;align-items:flex-end;margin-bottom:10px}.pickup-info .pickup-point-info .name uni-text[data-v-ae6d90c2]{line-height:1}.pickup-info .pickup-point-info .name uni-text.mark[data-v-ae6d90c2]{font-size:%?20?%;padding:1px %?10?%;border:.5px solid #fff;border-radius:%?4?%;margin-left:%?10?%}.pickup-info .pickup-point-info .address[data-v-ae6d90c2],\r\n.pickup-info .pickup-point-info .time[data-v-ae6d90c2],\r\n.pickup-info .pickup-point-info .contact[data-v-ae6d90c2]{font-size:%?24?%;line-height:1;margin-top:%?16?%}.pickup-info .pickup-point-info .address .iconfont[data-v-ae6d90c2],\r\n.pickup-info .pickup-point-info .time .iconfont[data-v-ae6d90c2],\r\n.pickup-info .pickup-point-info .contact .iconfont[data-v-ae6d90c2]{color:#999;font-size:%?24?%;line-height:1;margin-right:%?10?%}.pickup-info .hr[data-v-ae6d90c2]{border-top:1px dashed #e5e5e5;margin:%?20?% 0}.pickup-info .pickup-code-info .info[data-v-ae6d90c2]{text-align:center}.pickup-info .pickup-code-info .code[data-v-ae6d90c2]{display:flex;flex-direction:column;align-items:center}.pickup-info .pickup-code-info .code uni-image.barcode[data-v-ae6d90c2]{width:%?360?%;margin-top:%?20?%}.pickup-info .pickup-code-info .code uni-image.qrcode[data-v-ae6d90c2]{width:%?240?%;margin-top:%?20?%}.pickup-info .pickup-code-info .copy[data-v-ae6d90c2]{font-size:%?24?%;display:inline-block;color:#666;background:#f7f7f7;line-height:1;padding:%?6?% %?14?%;margin-left:%?10?%;border-radius:%?18?%;border:.5px solid #666}.virtual-mobile-wrap[data-v-ae6d90c2]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;margin-top:%?-69?%;display:flex}.virtual-mobile-wrap uni-view[data-v-ae6d90c2]:nth-child(2){flex:1;text-align:right}.verify-code-wrap[data-v-ae6d90c2]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.verify-code-wrap .wrap[data-v-ae6d90c2]{text-align:center;line-height:2}.verify-code-wrap .wrap .copy[data-v-ae6d90c2]{font-size:%?24?%;display:inline-block;color:#666;background:#f7f7f7;line-height:1;padding:%?6?% %?14?%;margin-left:%?10?%;border-radius:%?18?%;border:.5px solid #666}.verify-code-wrap .wrap .virtual-code[data-v-ae6d90c2]{font-weight:700}.verify-code-wrap .hr[data-v-ae6d90c2]{border-top:1px dashed #e5e5e5;margin:%?20?% 0}.verify-code-wrap .code[data-v-ae6d90c2]{display:flex;flex-direction:column;align-items:center;text-align:center}.verify-code-wrap .code uni-image.barcode[data-v-ae6d90c2]{width:%?400?%;margin-top:%?10?%}.verify-code-wrap .code uni-image.qrcode[data-v-ae6d90c2]{width:%?300?%;margin-top:%?20?%}.verify-code-wrap .code uni-text[data-v-ae6d90c2]{margin-top:%?20?%}.verify-info-wrap[data-v-ae6d90c2]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.verify-info-wrap .head[data-v-ae6d90c2]{font-size:%?28?%;border-bottom:1px dashed #f7f7f7;line-height:1;padding:%?10?% 0 %?30?% 0}.verify-info-wrap .order-cell .tit[data-v-ae6d90c2]{font-size:%?28?%}.verify-info-wrap .order-cell .box uni-text[data-v-ae6d90c2]{font-size:%?28?%;font-weight:700}.verify-info-wrap .record-empty[data-v-ae6d90c2]{text-align:center;padding-top:%?30?%}.verify-info-wrap .record-item[data-v-ae6d90c2]{margin-bottom:%?40?%}.verify-info-wrap .record-item[data-v-ae6d90c2]:last-child{margin-bottom:0}.carmichael .order-cell .tit[data-v-ae6d90c2]{font-size:%?28?%}.carmichael .order-cell .box uni-text[data-v-ae6d90c2]{font-size:%?28?%;font-weight:400}.carmichael .order-cell .copy[data-v-ae6d90c2]{font-size:%?20?%;display:inline-block;background:#f7f7f7;line-height:1;padding:%?6?% %?10?%;margin-left:%?10?%;border-radius:%?18?%;border:%?2?% solid #d2d2d2}.site-wrap[data-v-ae6d90c2]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.site-wrap .site-header[data-v-ae6d90c2]{display:flex;align-items:center}.site-wrap .site-header .icondianpu[data-v-ae6d90c2]{display:inline-block;line-height:1;margin-right:%?12?%;font-size:%?28?%}.site-wrap .site-body .goods-wrap[data-v-ae6d90c2]{margin-bottom:%?20?%;display:flex;position:relative}.site-wrap .site-body .goods-wrap[data-v-ae6d90c2]:last-of-type{margin-bottom:0}.site-wrap .site-body .goods-wrap .goods-img[data-v-ae6d90c2]{width:%?160?%;height:%?160?%;margin-right:%?20?%}.site-wrap .site-body .goods-wrap .goods-img uni-image[data-v-ae6d90c2]{width:100%;height:100%;border-radius:%?10?%}.site-wrap .site-body .goods-wrap .goods-info[data-v-ae6d90c2]{flex:1;position:relative;display:flex;flex-direction:column;justify-content:space-between;max-width:calc(100% - %?180?%)}.site-wrap .site-body .goods-wrap .goods-info .goods-name[data-v-ae6d90c2]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.5;font-size:%?28?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section[data-v-ae6d90c2]{width:100%;line-height:1.3;display:flex;margin-top:%?20?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section .goods-price[data-v-ae6d90c2]{font-weight:700;font-size:%?20?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section .unit[data-v-ae6d90c2]{font-weight:400;font-size:%?24?%;margin-right:%?2?%}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section uni-view[data-v-ae6d90c2]{flex:1;line-height:1.3}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section uni-view[data-v-ae6d90c2]:last-of-type{text-align:right}.site-wrap .site-body .goods-wrap .goods-info .goods-sub-section uni-view:last-of-type .iconfont[data-v-ae6d90c2]{line-height:1;font-size:%?24?%}.site-wrap .site-body .goods-wrap .goods-info .goods-action[data-v-ae6d90c2]{text-align:right;padding-top:%?20?%}.site-wrap .site-body .goods-wrap .goods-info .goods-action uni-navigator[data-v-ae6d90c2]{display:inline-block}.site-wrap .site-body .goods-wrap .goods-info .goods-action .order-box-btn[data-v-ae6d90c2]{height:%?48?%!important;line-height:%?48?%!important;font-size:%?24?%!important;display:inline-block;background:#fff;border:.5px solid #999;margin-left:%?10?%;box-sizing:initial}.order-cell[data-v-ae6d90c2]{display:flex;margin:%?20?% 0;align-items:center;background:#fff;line-height:%?40?%}.order-cell .tit[data-v-ae6d90c2]{text-align:left}.order-cell .box[data-v-ae6d90c2]{flex:1;padding:0 %?20?%;line-height:inherit}.order-cell .box .textarea[data-v-ae6d90c2]{height:%?40?%}.order-cell .iconfont[data-v-ae6d90c2]{color:#bbb;font-size:%?28?%}.order-cell .order-pay[data-v-ae6d90c2]{padding:0}.order-cell .order-pay uni-text[data-v-ae6d90c2]{display:inline-block;margin-left:%?6?%}.order-summary[data-v-ae6d90c2]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.order-summary .order-cell[data-v-ae6d90c2]:first-child{margin-top:0}.order-summary .order-cell .tit[data-v-ae6d90c2]{font-size:%?28?%;width:%?200?%}.order-summary .order-cell .box[data-v-ae6d90c2]{display:flex;align-items:center}.order-summary .order-cell .box uni-text[data-v-ae6d90c2]{font-size:%?28?%}.order-summary .order-cell .copy[data-v-ae6d90c2]{font-size:%?20?%;display:inline-block;background:#f7f7f7;line-height:1;padding:%?6?% %?10?%;margin-left:%?10?%;border-radius:%?18?%;border:%?2?% solid #d2d2d2}.order-summary .hr[data-v-ae6d90c2]{width:100%;height:%?2?%;background:#f7f7f7;margin-bottom:%?20?%}.order-money[data-v-ae6d90c2]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative}.order-money .order-cell .tit[data-v-ae6d90c2]{font-size:%?28?%}.order-money .order-cell .box[data-v-ae6d90c2]{font-weight:600;padding:0}.order-money .order-cell .box uni-text[data-v-ae6d90c2]{font-size:%?28?%;font-weight:700}.order-money .order-cell .box .operator[data-v-ae6d90c2]{font-size:%?24?%;margin-right:%?6?%}.kefu[data-v-ae6d90c2]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;margin:%?30?% 0 %?10?%;border-top:%?2?% solid #f7f7f7;padding-bottom:0;padding-top:%?30?%}.kefu > uni-view[data-v-ae6d90c2]{display:flex;justify-content:center;align-items:center}.kefu > uni-view .iconfont[data-v-ae6d90c2]{font-weight:700;margin-right:%?10?%;font-size:%?28?%;line-height:1}.kefu uni-button[data-v-ae6d90c2]{width:100%;height:100%;border:none;z-index:1;padding:0;margin:0;background:none;height:%?50?%;line-height:%?50?%;display:flex;justify-content:center}.kefu uni-button[data-v-ae6d90c2]::after{border:none!important}.kefu uni-button .iconfont[data-v-ae6d90c2]{margin-right:%?10?%}.order-action[data-v-ae6d90c2]{text-align:right}.order-action .order-box-btn[data-v-ae6d90c2]{margin-right:%?30?%;margin-left:0;font-size:%?24?%;height:%?60?%;line-height:%?60?%;box-sizing:initial;min-width:%?60?%;text-align:center}.order-action .order-box-btn.color-base-bg[data-v-ae6d90c2]{color:#fff}.order-action .order-box-btn[data-v-ae6d90c2]:last-child{margin-right:0}.status-name uni-view[data-v-ae6d90c2]{font-size:%?32?%;color:#fff;line-height:1;margin-top:%?40?%;text-align:left}.status-name .desc[data-v-ae6d90c2]{font-size:%?24?%;margin:%?10?% 0 0 0}.head-nav[data-v-ae6d90c2]{width:100%;height:0}.head-nav.active[data-v-ae6d90c2]{padding-top:%?40?%}.head-return[data-v-ae6d90c2]{height:%?90?%;line-height:%?90?%;color:#fff;font-weight:600;font-size:%?32?%;position:relative;text-align:center}.head-return uni-text[data-v-ae6d90c2]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:%?20?%;display:inline-block;margin-right:%?10?%;font-size:%?32?%}.store-detail uni-view[data-v-ae6d90c2]{font-size:%?20?%}.store-wrap[data-v-ae6d90c2]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;position:relative;margin-top:%?-76?%}.store-wrap .store-info[data-v-ae6d90c2]{display:flex;align-items:center;padding-left:%?50?%;position:relative}.store-wrap .store-info .icon[data-v-ae6d90c2]{left:0;position:absolute;top:%?4?%}.store-wrap .store-info .icon .iconfont[data-v-ae6d90c2]{line-height:%?50?%;font-size:%?28?%}.store-wrap .store-info .icon .iconmendian[data-v-ae6d90c2]{font-size:%?32?%}.store-wrap .store-info .store-name[data-v-ae6d90c2]{display:flex}.store-wrap .store-info .store-name .name[data-v-ae6d90c2]{flex:1}.store-wrap .store-info .store-info-detail[data-v-ae6d90c2]{flex:1}.store-wrap .store-info .store-info-detail .store-detail uni-view[data-v-ae6d90c2]{font-size:%?24?%}.store-wrap .store-info .store-info-detail > uni-view[data-v-ae6d90c2]:first-of-type{font-size:%?26?%}.store-wrap .store-info .cell-more[data-v-ae6d90c2]{margin-left:%?50?%}.pick-block[data-v-ae6d90c2]{display:flex;align-items:center;margin-top:%?20?%;padding-top:%?20?%}.pick-block.first-pick-block[data-v-ae6d90c2]{border-top:%?2?% solid #f1f1f1}.pick-block uni-input[data-v-ae6d90c2],\r\n.pick-block .last-child[data-v-ae6d90c2]{flex:1;text-align:right;font-size:%?24?%}.sku[data-v-ae6d90c2]{display:flex;line-height:1;margin-top:%?10?%;margin-bottom:%?10?%}.goods-spec[data-v-ae6d90c2]{color:#838383;font-size:%?22?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.detail-container[data-v-ae6d90c2]{padding-bottom:%?40?%}.fixed-bottom[data-v-ae6d90c2]{width:100%;position:fixed;left:0;bottom:0;padding:%?10?% %?30?%;box-sizing:border-box;background:#fff}',""]),t.exports=e},c34e:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={loadingCover:a("b1ae").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"detail-container",class:{"safe-area":t.isIphoneX},attrs:{"data-theme":t.themeStyle}},[a("v-uni-view",{staticClass:"status-wrap color-base-bg",style:{backgroundImage:"url("+t.$util.img("upload/uniapp/order/status-wrap-bg.png")+")"}},[a("v-uni-view",{staticClass:"order-status-left"},[a("v-uni-image",{attrs:{src:t.$util.img(t.action.icon)}}),a("v-uni-view",{staticClass:"status-name"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.orderData.order_status_name))]),"presale"==t.orderData.promotion_type&&1==t.orderData.order_status?a("v-uni-view",{staticClass:"desc"},[t._v("预计"+t._s(t.$util.timeStampTurnTime(t.orderData.predict_delivery_time,!0))+"日后发货")]):t._e()],1)],1)],1),a("v-uni-view",{staticClass:"address-wrap"},[a("v-uni-view",{staticClass:"icon"},[a("v-uni-view",{staticClass:"iconfont iconlocation"})],1),a("v-uni-view",{staticClass:"address-info"},[a("v-uni-view",{staticClass:"info"},[a("v-uni-text",{staticClass:"font-size-base"},[t._v(t._s(t.orderData.name)+" "+t._s(t.orderData.mobile))])],1),a("v-uni-view",{staticClass:"detail"},[a("v-uni-text",{staticClass:"font-size-base"},[t._v("收货地址："+t._s(t.orderData.full_address)+" "+t._s(t.orderData.address))])],1)],1)],1),a("v-uni-view",{staticClass:"site-wrap"},[a("v-uni-view",{staticClass:"site-body"},t._l(t.orderData.order_goods,(function(e,i){return a("v-uni-view",{key:i,staticClass:"goods-wrap"},[a("v-uni-view",{staticClass:"goods-img",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goDetail(e.sku_id)}}},[a("v-uni-image",{attrs:{src:t.$util.img(e.sku_image,{size:"mid"}),mode:"aspectFill"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.imageError(i)}}})],1),a("v-uni-view",{staticClass:"goods-info"},[a("v-uni-view",{staticClass:"goods-name",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goDetail(e.sku_id)}}},[t._v(t._s(e.sku_name))]),e.sku_spec_format?a("v-uni-view",{staticClass:"sku"},[a("v-uni-view",{staticClass:"goods-spec"},[t._l(e.sku_spec_format,(function(a,i){return[t._v(t._s(a.spec_value_name)+" "+t._s(i<e.sku_spec_format.length-1?"; ":""))]}))],2)],1):t._e(),a("v-uni-view",{staticClass:"goods-sub-section"},[a("v-uni-view",[a("v-uni-text",{staticClass:"goods-price color-base-text"},[a("v-uni-text",{staticClass:"unit"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",{staticClass:"font-size-base"},[t._v(t._s(e.price))])],1)],1),a("v-uni-view",[a("v-uni-text",{staticClass:"font-size-base"},[a("v-uni-text",{staticClass:"iconfont iconclose"}),t._v(t._s(e.num))],1)],1)],1),a("v-uni-view",{staticClass:"goods-action"},[t.orderData.is_enable_refund?[0==e.refund_status||-1==e.refund_status?a("v-uni-view",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goRefund(e.order_goods_id)}}},["blindbox"!=t.orderData.promotion_type?a("v-uni-view",{staticClass:"order-box-btn"},[t._v(t._s(10==t.orderData.order_status?"申请售后":"申请退款"))]):t._e()],1):t._e()]:t._e(),0!=e.refund_status&&-1!=e.refund_status?a("v-uni-view",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goRefundDetail(e.order_goods_id)}}},[a("v-uni-view",{staticClass:"order-box-btn"},[t._v(t._s(10==t.orderData.order_status?"查看售后":"查看退款"))])],1):t._e()],2)],1)],1)})),1)],1),a("v-uni-view",{staticClass:"order-summary"},[a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("订单编号：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.order_no))]),a("v-uni-view",{staticClass:"copy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$util.copy(t.orderData.order_no)}}},[t._v("复制")])],1)],1),a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("订单交易号：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.out_trade_no))])],1)],1),a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("创建时间：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.$util.timeStampTurnTime(t.orderData.create_time)))])],1)],1),t.orderData.close_time>0?a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("关闭时间：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.$util.timeStampTurnTime(t.orderData.close_time)))])],1)],1):t._e(),t.orderData.pay_status>0?[a("v-uni-view",{staticClass:"hr"}),a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("支付方式：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.pay_type_name))])],1)],1),a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("支付时间：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.$util.timeStampTurnTime(t.orderData.pay_time)))])],1)],1)]:t._e(),t.orderData.delivery_type_name?a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("配送方式：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.delivery_type_name))])],1)],1):t._e(),""!=t.orderData.buyer_message?a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("买家留言：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.buyer_message))])],1)],1):t._e(),""!=t.orderData.promotion_type_name?a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("活动优惠：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.promotion_type_name))])],1)],1):t._e(),t.orderData.is_invoice>0?[a("v-uni-view",{staticClass:"hr"}),a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("发票类型：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(1==t.orderData.invoice_type?"纸质发票":"电子发票"))])],1)],1),a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("发票抬头类型：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(1==t.orderData.invoice_title_type?"个人":"企业"))])],1)],1),a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("发票抬头：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.invoice_title))])],1)],1),a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("发票内容：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.invoice_content))])],1)],1),1==t.orderData.invoice_type?a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("发票邮寄地址：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.invoice_full_address))])],1)],1):a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("发票接收邮件：")]),a("v-uni-view",{staticClass:"box"},[a("v-uni-text",{staticClass:"color-title"},[t._v(t._s(t.orderData.invoice_email))])],1)],1)]:t._e(),a("v-uni-view",{staticClass:"kefu"},[1==t.kefuConfig.system?a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goConnect.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont iconziyuan"}),a("v-uni-text",[t._v("联系客服")])],1):t._e()],1)],2),a("v-uni-view",{staticClass:"order-money"},[a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("商品金额")]),a("v-uni-view",{staticClass:"box align-right"},[a("v-uni-text",{staticClass:"color-title"},[a("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),t._v(t._s(t.orderData.goods_money))],1)],1)],1),a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("运费")]),a("v-uni-view",{staticClass:"box align-right"},[a("v-uni-text",{staticClass:"color-base-text"},[a("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",[t._v(t._s(t.orderData.delivery_money))])],1)],1)],1),t.orderData.member_card_money>0?a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("会员卡")]),a("v-uni-view",{staticClass:"box align-right"},[a("v-uni-text",{staticClass:"color-base-text"},[a("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",[t._v(t._s(t.orderData.member_card_money))])],1)],1)],1):t._e(),t.orderData.invoice_money>0?a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("税费"),a("v-uni-text",{staticClass:"color-base-text"},[t._v("("+t._s(t.orderData.invoice_rate)+"%)")])],1),a("v-uni-view",{staticClass:"box align-right"},[a("v-uni-text",{staticClass:"color-base-text"},[a("v-uni-text",{staticClass:"operator"},[t._v("+")]),a("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",[t._v(t._s(t.orderData.invoice_money))])],1)],1)],1):t._e(),t.orderData.invoice_delivery_money>0?a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("发票邮寄费")]),a("v-uni-view",{staticClass:"box align-right"},[a("v-uni-text",{staticClass:"color-base-text"},[a("v-uni-text",{staticClass:"operator"},[t._v("+")]),a("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",[t._v(t._s(t.orderData.invoice_delivery_money))])],1)],1)],1):t._e(),0!=t.orderData.adjust_money?a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("订单调整")]),a("v-uni-view",{staticClass:"box align-right"},[a("v-uni-text",{staticClass:"color-base-text"},[t.orderData.adjust_money<0?a("v-uni-text",{staticClass:"operator"},[t._v("-")]):a("v-uni-text",{staticClass:"operator"},[t._v("+")]),a("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",[t._v(t._s(t._f("abs")(t.orderData.adjust_money)))])],1)],1)],1):t._e(),t.orderData.promotion_money>0?a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("优惠")]),a("v-uni-view",{staticClass:"box align-right"},[a("v-uni-text",{staticClass:"color-base-text"},[a("v-uni-text",{staticClass:"operator"},[t._v("-")]),a("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",[t._v(t._s(t.orderData.promotion_money))])],1)],1)],1):t._e(),t.orderData.coupon_money>0?a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("优惠券")]),a("v-uni-view",{staticClass:"box align-right"},[a("v-uni-text",{staticClass:"color-base-text"},[a("v-uni-text",{staticClass:"operator"},[t._v("-")]),a("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",[t._v(t._s(t.orderData.coupon_money))])],1)],1)],1):t._e(),t.orderData.balance_money>0?a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("使用余额")]),a("v-uni-view",{staticClass:"box align-right"},[a("v-uni-text",{staticClass:"color-base-text"},[a("v-uni-text",{staticClass:"operator"},[t._v("-")]),a("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",[t._v(t._s(t.orderData.balance_money))])],1)],1)],1):t._e(),t.orderData.point_money>0?a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-text",{staticClass:"tit"},[t._v("积分抵扣")]),a("v-uni-view",{staticClass:"box align-right"},[a("v-uni-text",{staticClass:"color-base-text"},[a("v-uni-text",{staticClass:"operator"},[t._v("-")]),a("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",[t._v(t._s(t.orderData.point_money))])],1)],1)],1):t._e(),a("v-uni-view",{staticClass:"order-cell"},[a("v-uni-view",{staticClass:"box align-right"},[a("v-uni-text",[t._v("实付金额：")]),a("v-uni-text",{staticClass:"color-base-text"},[a("v-uni-text",{staticClass:"font-size-goods-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",{staticClass:"font-size-base"},[t._v(t._s(t.orderData.pay_money))])],1)],1)],1),t.orderData.action.length>0?a("v-uni-view",{staticClass:"order-action fixed-bottom",class:{"bottom-safe-area":t.isIphoneX}},[1==t.evaluateConfig.evaluate_status&&1==t.orderData.is_evaluate?a("v-uni-view",{staticClass:"order-box-btn white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.operation("memberOrderEvaluation")}}},[0==t.orderData.evaluate_status?a("v-uni-text",[t._v("评价")]):1==t.orderData.evaluate_status?a("v-uni-text",[t._v("追评")]):t._e()],1):t._e(),t._l(t.orderData.action,(function(e,i){return a("v-uni-view",{key:i,staticClass:"order-box-btn",class:"orderPay"==e.action?"color-base-bg color-base-border":"white",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.operation(e.action)}}},[t._v(t._s(e.title))])}))],2):0==t.orderData.action.length&&1==t.orderData.is_evaluate&&1==t.evaluateConfig.evaluate_status?a("v-uni-view",{staticClass:"order-action fixed-bottom",class:{"bottom-safe-area":t.isIphoneX}},[a("v-uni-view",{staticClass:"order-box-btn white",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.operation("memberOrderEvaluation")}}},[0==t.orderData.evaluate_status?a("v-uni-text",[t._v("评价")]):1==t.orderData.evaluate_status?a("v-uni-text",[t._v("追评")]):t._e()],1)],1):a("v-uni-view",{staticClass:"order-action fixed-bottom",class:{"bottom-safe-area":t.isIphoneX}})],1),a("ns-payment",{ref:"choosePaymentPopup",attrs:{payMoney:t.orderData.pay_money},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.pay.apply(void 0,arguments)}}}),a("loading-cover",{ref:"loadingCover"})],1)},s=[]}}]);