(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-list-list"],{"0362":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".uni-load-more[data-v-17ff8868]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-17ff8868]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-17ff8868]{position:relative;height:24px;width:24px;margin-right:10px}.uni-load-more__img > .load[data-v-17ff8868]{position:absolute}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-17ff8868]{width:6px;height:2px;-webkit-border-top-left-radius:1px;border-top-left-radius:1px;-webkit-border-bottom-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-17ff8868 .96s ease infinite;animation:load-data-v-17ff8868 .96s ease infinite}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-17ff8868]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-17ff8868]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-17ff8868]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > .load .uni-load-view_wrapper[data-v-17ff8868]:nth-child(4){top:11px;left:0}.uni-load-more__img > .loader-android[data-v-17ff8868]{position:absolute;left:0;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;border:solid 2px #777;-webkit-border-radius:50%;border-radius:50%;border-bottom-color:transparent!important;-webkit-animation:loader-android-data-v-17ff8868 1s 0s linear infinite;animation:loader-android-data-v-17ff8868 1s 0s linear infinite}.load1[data-v-17ff8868],\r\n.load2[data-v-17ff8868],\r\n.load3[data-v-17ff8868]{height:24px;width:24px}.load2[data-v-17ff8868]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-17ff8868]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 .uni-load-view_wrapper[data-v-17ff8868]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 .uni-load-view_wrapper[data-v-17ff8868]:nth-child(1){-webkit-animation-delay:80ms;animation-delay:80ms}.load3 .uni-load-view_wrapper[data-v-17ff8868]:nth-child(1){-webkit-animation-delay:.16s;animation-delay:.16s}.load1 .uni-load-view_wrapper[data-v-17ff8868]:nth-child(2){-webkit-animation-delay:.24s;animation-delay:.24s}.load2 .uni-load-view_wrapper[data-v-17ff8868]:nth-child(2){-webkit-animation-delay:.32s;animation-delay:.32s}.load3 .uni-load-view_wrapper[data-v-17ff8868]:nth-child(2){-webkit-animation-delay:.4s;animation-delay:.4s}.load1 .uni-load-view_wrapper[data-v-17ff8868]:nth-child(3){-webkit-animation-delay:.48s;animation-delay:.48s}.load2 .uni-load-view_wrapper[data-v-17ff8868]:nth-child(3){-webkit-animation-delay:.56s;animation-delay:.56s}.load3 .uni-load-view_wrapper[data-v-17ff8868]:nth-child(3){-webkit-animation-delay:.64s;animation-delay:.64s}.load1 .uni-load-view_wrapper[data-v-17ff8868]:nth-child(4){-webkit-animation-delay:.72s;animation-delay:.72s}.load2 .uni-load-view_wrapper[data-v-17ff8868]:nth-child(4){-webkit-animation-delay:.8s;animation-delay:.8s}.load3 .uni-load-view_wrapper[data-v-17ff8868]:nth-child(4){-webkit-animation-delay:.88s;animation-delay:.88s}@-webkit-keyframes load-data-v-17ff8868{0%{opacity:1}100%{opacity:.2}}@-webkit-keyframes loader-android-data-v-17ff8868{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),e.exports=t},"0f3f":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"[data-v-8a8f8ece] .uni-page{overflow:hidden}[data-v-8a8f8ece] .mescroll-upwarp{padding-bottom:%?100?%}",""]),e.exports=t},2246:function(e,t,a){"use strict";var i=a("7b6d"),o=a.n(i);o.a},"49ff":function(e,t,a){"use strict";a.r(t);var i=a("63f6"),o=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},"520a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={methods:{orderPay:function(e){var t=this;0==e.adjust_money?this.openChoosePayment():uni.showModal({title:"提示",content:"商家已将支付金额调整为"+e.pay_money+"元，是否继续支付？",success:function(e){e.confirm&&t.openChoosePayment()}})},pay:function(){var e=this;this.$api.sendRequest({url:"/api/order/pay",data:{order_ids:this.orderData.order_id},success:function(t){t.code>=0?e.$refs.choosePaymentPopup.getPayInfo(t.data):e.$util.showToast({title:t.message})}})},orderClose:function(e,t){var a=this;uni.showModal({title:"提示",content:"您确定要关闭该订单吗？",success:function(i){i.confirm&&a.$api.sendRequest({url:"/api/order/close",data:{order_id:e},success:function(e){e.code>=0?"function"==typeof t&&t():a.$util.showToast({title:"当前订单可能存在拼团，维权等操作，"+e.message+"不可以关闭哦!",duration:2e3})}})}})},orderDelivery:function(e,t){var a=this;uni.showModal({title:"提示",content:"您确定已经收到货物了吗？",success:function(i){i.confirm&&a.$api.sendRequest({url:"/api/order/takedelivery",data:{order_id:e},success:function(e){a.$util.showToast({title:e.message}),"function"==typeof t&&t()}})}})}}};t.default=i},5670:function(e,t,a){"use strict";var i=a("6f35"),o=a.n(i);o.a},6092:function(e,t,a){"use strict";a.r(t);var i=a("b490"),o=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},"63f6":function(e,t,a){"use strict";var i=a("4ea4");a("99af"),a("4160"),a("a434"),a("d3b7"),a("acd8"),a("e25e"),a("25f0"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a("c268")),r=i(a("520a")),n=i(a("ccd8")),s=i(a("30d1")),d={data:function(){return{scrollInto:"",orderStatus:"all",statusList:[],orderList:[],contentText:{},mergePayOrder:[],isIphoneX:!1,evaluateConfig:{evaluate_audit:1,evaluate_show:0,evaluate_status:1},orderData:{},payMoney:0,payMoneyMerge:0}},components:{uniLoadMore:o.default,nsPayment:s.default},mixins:[r.default,n.default],onLoad:function(e){e.status&&(this.orderStatus=e.status)},onShow:function(){this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),this.getEvaluateConfig(),this.getOrderStatus(),uni.getStorageSync("token")?this.$refs.mescroll&&this.$refs.mescroll.refresh():this.$util.redirectTo("/pages/login/login/login",{back:"/pages/order/list/list?status="+this.orderStatus})},methods:{ontabtap:function(e){var t=e.target.dataset.current||e.currentTarget.dataset.current;this.orderStatus=this.statusList[t].status,""==this.orderStatus&&(this.mergePayOrder=[]),this.$refs.loadingCover.show(),this.$refs.mescroll.refresh()},getListData:function(e){var t=this;this.$api.sendRequest({url:"/api/order/lists",data:{page:e.num,page_size:e.size,order_status:this.orderStatus},success:function(a){var i=[],o=a.message;0==a.code&&a.data?i=a.data.list:t.$util.showToast({title:o}),e.endSuccess(i.length),1==e.num&&(t.orderList=[]),t.orderList=t.orderList.concat(i),t.orderList.forEach((function(e){e.order_goods.forEach((function(e){if(e.sku_spec_format)try{e.sku_spec_format=JSON.parse(e.sku_spec_format)}catch(t){e.sku_spec_format=e.sku_spec_format}else e.sku_spec_format=[]}))})),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(a){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},getOrderStatus:function(){this.statusList=[{status:"all",name:this.$lang("all"),id:"status_0"},{status:"waitpay",name:this.$lang("waitPay"),id:"status_1"},{status:"waitsend",name:this.$lang("readyDelivery"),id:"status_2"},{status:"waitconfirm",name:this.$lang("waitDelivery"),id:"status_3"},{status:"waitrate",name:this.$lang("waitEvaluate"),id:"status_4"}]},operation:function(e,t){var a=this;this.status;switch(e){case"orderPay":this.orderData=t,this.payMoney=parseFloat(t.pay_money),this.orderPay(t);break;case"orderClose":this.orderClose(t.order_id,(function(){a.$refs.mescroll.refresh()}));break;case"memberTakeDelivery":this.orderDelivery(t.order_id,(function(){a.$refs.mescroll.refresh()}));break;case"trace":this.$util.redirectTo("/pages/order/logistics/logistics",{order_id:t.order_id});break;case"memberOrderEvaluation":this.$util.redirectTo("/pages/order/evaluate/evaluate",{order_id:t.order_id});break}},orderDetail:function(e){switch(parseInt(e.order_type)){case 2:this.$util.redirectTo("/pages/order/detail_pickup/detail_pickup",{order_id:e.order_id});break;case 3:this.$util.redirectTo("/pages/order/detail_local_delivery/detail_local_delivery",{order_id:e.order_id});break;case 4:this.$util.redirectTo("/pages/order/detail_virtual/detail_virtual",{order_id:e.order_id});break;default:this.$util.redirectTo("/pages/order/detail/detail",{order_id:e.order_id});break}},selectOrder:function(e,t){-1!=this.$util.inArray(e,this.mergePayOrder)?(this.mergePayOrder.splice(this.$util.inArray(e,this.mergePayOrder),1),this.payMoneyMerge-=parseFloat(t)):(this.payMoneyMerge+=parseFloat(t),this.mergePayOrder.push(e))},mergePay:function(){var e=this;this.mergePayOrder.length&&this.$api.sendRequest({url:"/api/order/pay",data:{order_ids:this.mergePayOrder.toString()},success:function(t){t.code>=0?e.$refs.choosePaymentMergePopup.getPayInfo(t.data):e.$util.showToast({title:t.message})}})},imageError:function(e,t){this.orderList[e].order_goods[t].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getEvaluateConfig:function(){var e=this;this.$api.sendRequest({url:"/api/goodsevaluate/config",success:function(t){if(0==t.code){var a=t.data;e.evaluateConfig=a}}})},openChoosePayment:function(){this.$refs.choosePaymentPopup.open()},openChoosePaymentMerge:function(){this.$refs.choosePaymentMergePopup.open()}},computed:{mpOrderList:function(){if(this.orderList[this.status])return this.orderList[this.status].list||[]}}};t.default=d},"6f35":function(e,t,a){var i=a("0362");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("4f06").default;o("2d974632",i,!0,{sourceMap:!1,shadowMode:!1})},"7b6d":function(e,t,a){var i=a("9e0e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("4f06").default;o("73b5e623",i,!0,{sourceMap:!1,shadowMode:!1})},"9e0e":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.order-container[data-v-8a8f8ece]{width:100vw;height:100vh}.align-right[data-v-8a8f8ece]{text-align:right}.order-nav[data-v-8a8f8ece]{width:100vw;height:%?90?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n\r\n\r\nwhite-space:nowrap;\r\nbackground:#fff;display:-webkit-box;display:-webkit-flex;display:flex;\r\n\r\nposition:fixed;left:0;z-index:998}.order-nav .uni-tab-item[data-v-8a8f8ece]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?24?%;padding-right:%?24?%}.order-nav .uni-tab-item-title[data-v-8a8f8ece]{font-size:%?28?%;display:block;height:%?86?%;line-height:%?90?%;border-bottom:1px solid #fff;padding:0 %?10?%;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;\r\nwhite-space:nowrap;\r\ntext-align:center;font-size:%?30?%}.order-nav .uni-tab-item-title-active[data-v-8a8f8ece]{display:block;height:%?86?%;border-bottom:2px solid #fff;padding:0 %?10?%}.order-nav[data-v-8a8f8ece] ::-webkit-scrollbar{width:0;height:0;color:transparent}.order-item[data-v-8a8f8ece]{margin:%?20?% %?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;position:relative}.order-item .order-header[data-v-8a8f8ece]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;padding:%?20?% %?30?% %?26?% %?30?%}.order-item .order-header.waitpay[data-v-8a8f8ece]{padding-left:%?70?%}.order-item .order-header.waitpay .iconyuan_checked[data-v-8a8f8ece],\r\n.order-item .order-header.waitpay .iconyuan_checkbox[data-v-8a8f8ece]{font-size:%?32?%;position:absolute;top:48%;left:%?20?%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.order-item .order-header.waitpay .iconyuan_checkbox[data-v-8a8f8ece]{color:#909399}.order-item .order-header .icondianpu[data-v-8a8f8ece]{display:inline-block;line-height:1;margin-right:%?12?%;font-size:%?28?%}.order-item .order-header .status-name[data-v-8a8f8ece]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;font-size:%?24?%}.order-item .order-body .goods-wrap[data-v-8a8f8ece]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;padding:0 %?30?% %?30?% %?30?%}.order-item .order-body .goods-wrap[data-v-8a8f8ece]:last-of-type{margin-bottom:0}.order-item .order-body .goods-wrap .goods-img[data-v-8a8f8ece]{width:%?160?%;height:%?160?%;margin-right:%?20?%}.order-item .order-body .goods-wrap .goods-img uni-image[data-v-8a8f8ece]{width:100%;height:100%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.order-item .order-body .goods-wrap .goods-info[data-v-8a8f8ece]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;max-width:calc(100% - %?180?%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.order-item .order-body .goods-wrap .goods-info .pro-info[data-v-8a8f8ece]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.order-item .order-body .goods-wrap .goods-info .goods-name[data-v-8a8f8ece]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.5;font-size:%?28?%;color:#303133}.order-item .order-body .goods-wrap .goods-info .goods-sub-section[data-v-8a8f8ece]{width:100%;line-height:1.3;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?14?%}.order-item .order-body .goods-wrap .goods-info .goods-sub-section .goods-price[data-v-8a8f8ece]{font-size:%?24?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-weight:700}.order-item .order-body .goods-wrap .goods-info .goods-sub-section .goods-num[data-v-8a8f8ece]{font-size:%?24?%;color:#909399;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;line-height:1}.order-item .order-body .goods-wrap .goods-info .goods-sub-section .goods-num .iconfont[data-v-8a8f8ece]{font-size:%?24?%}.order-item .order-body .goods-wrap .goods-info .goods-sub-section .goods-type[data-v-8a8f8ece]{font-size:%?24?%}.order-item .order-body .goods-wrap .goods-info .goods-sub-section .unit[data-v-8a8f8ece]{font-size:%?24?%;margin-right:%?2?%}.order-item .order-body .goods-wrap .goods-info .goods-sub-section uni-view[data-v-8a8f8ece]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:1.3;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.order-item .order-body .goods-wrap .goods-info .goods-sub-section uni-view[data-v-8a8f8ece]:last-of-type{text-align:right}.order-item .order-body .goods-wrap .goods-info .goods-sub-section uni-view:last-of-type .iconfont[data-v-8a8f8ece]{line-height:1;font-size:%?24?%}.order-item .order-body .goods-wrap .goods-info .goods-action[data-v-8a8f8ece]{text-align:right}.order-item .order-body .goods-wrap .goods-info .goods-action .action-btn[data-v-8a8f8ece]{line-height:1;padding:%?14?% %?20?%;color:#303133;display:inline-block;-webkit-border-radius:%?28?%;border-radius:%?28?%;background:#fff;border:.5px solid #999;font-size:%?24?%;margin-left:%?10?%}.order-item .order-footer .order-base-info .total[data-v-8a8f8ece]{padding:%?20?%;font-size:%?24?%;background:hsla(0,0%,97.3%,.5);display:-webkit-box;display:-webkit-flex;display:flex}.order-item .order-footer .order-base-info .total > uni-text[data-v-8a8f8ece]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:1;margin-left:%?10?%}.order-item .order-footer .order-base-info .order-type[data-v-8a8f8ece]{padding-top:%?20?%;-webkit-box-flex:0.5;-webkit-flex:0.5;flex:0.5}.order-item .order-footer .order-base-info .order-type > uni-text[data-v-8a8f8ece]{line-height:1}.order-item .order-footer .order-action[data-v-8a8f8ece]{text-align:right;padding:%?30?%}.order-item .order-footer .order-action .action-btn[data-v-8a8f8ece]{line-height:1;padding:%?20?% %?26?%;color:#333;display:inline-block;-webkit-border-radius:%?32?%;border-radius:%?32?%;background:#fff;border:.5px solid #999;font-size:%?24?%;margin-left:%?10?%}.order-batch-action[data-v-8a8f8ece]{position:fixed;z-index:5;left:0;bottom:0;width:100vw;height:%?100?%;background:#fff;-webkit-box-shadow:0 0 10px rgba(0,0,0,.1);box-shadow:0 0 10px rgba(0,0,0,.1);text-align:right}.order-batch-action.bottom-safe-area[data-v-8a8f8ece]{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.order-batch-action .action-btn[data-v-8a8f8ece]{height:%?68?%;line-height:%?68?%;background:#fff;padding:0 %?40?%;display:inline-block;text-align:center;margin:%?16?% %?20?% %?16?% 0;-webkit-border-radius:%?40?%;border-radius:%?40?%;border:1px solid #fff}.order-batch-action .action-btn.white[data-v-8a8f8ece]{height:%?68?%;line-height:%?68?%;color:#333;border:1px solid #999;background:#fff}.sku[data-v-8a8f8ece]{display:-webkit-box;display:-webkit-flex;display:flex;line-height:1;margin-top:%?10?%}.goods-spec[data-v-8a8f8ece]{color:#909399;font-size:%?22?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-box-flex:1;-webkit-flex:1;flex:1}',""]),e.exports=t},a875:function(e,t,a){"use strict";var i=a("b0e5"),o=a.n(i);o.a},ae59:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var i={nsEmpty:a("1928").default,loadingCover:a("30be").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"order-container",attrs:{"data-theme":e.themeStyle}},[a("v-uni-view",{staticClass:"order-nav"},e._l(e.statusList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"uni-tab-item",attrs:{id:t.id,"data-current":i},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.ontabtap.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"uni-tab-item-title",class:t.status==e.orderStatus?"uni-tab-item-title-active color-base-border  color-base-text":""},[e._v(e._s(t.name))])],1)})),1),a("mescroll-uni",{ref:"mescroll",attrs:{top:"100rpx"},on:{getData:function(t){arguments[0]=t=e.$handleEvent(t),e.getListData.apply(void 0,arguments)}}},[a("template",{attrs:{slot:"list"},slot:"list"},[e.orderList.length>0?a("v-uni-view",{staticClass:"order-list"},e._l(e.orderList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"order-item"},[a("v-uni-view",{staticClass:"order-header",class:{waitpay:"waitpay"==e.orderStatus&&0==t.order_status}},["waitpay"==e.orderStatus&&0==t.order_status?a("v-uni-view",{staticClass:"iconfont",class:-1==e.$util.inArray(t.order_id,e.mergePayOrder)?"iconyuan_checkbox":"iconyuan_checked color-base-text",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.selectOrder(t.order_id,t.pay_money)}}}):e._e(),a("v-uni-text",{staticClass:"font-size-base"},[e._v("订单号："+e._s(t.order_no))]),a("v-uni-text",{staticClass:"status-name color-base-text"},[e._v(e._s(t.order_status_name))])],1),a("v-uni-view",{staticClass:"order-body",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.orderDetail(t)}}},e._l(t.order_goods,(function(t,o){return a("v-uni-view",{key:o,staticClass:"goods-wrap"},[a("v-uni-view",{staticClass:"goods-img"},[a("v-uni-image",{attrs:{src:e.$util.img(t.sku_image,{size:"mid"}),mode:"aspectFill","lazy-load":!0},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.imageError(i,o)}}})],1),a("v-uni-view",{staticClass:"goods-info"},[a("v-uni-view",{staticClass:"pro-info"},[a("v-uni-view",{staticClass:"goods-name"},[e._v(e._s(t.sku_name))]),t.sku_spec_format?a("v-uni-view",{staticClass:"sku"},[a("v-uni-view",{staticClass:"goods-spec"},[e._l(t.sku_spec_format,(function(a,i){return[e._v(e._s(a.spec_value_name)+" "+e._s(i<t.sku_spec_format.length-1?"; ":""))]}))],2)],1):e._e()],1),a("v-uni-view",{staticClass:"goods-sub-section"},[a("v-uni-text",{staticClass:"goods-price"},[a("v-uni-text",{staticClass:"unit color-base-text font-size-activity-tag"},[e._v(e._s(e.$lang("common.currencySymbol")))]),a("v-uni-text",{staticClass:"color-base-text"},[e._v(e._s(t.price))])],1),a("v-uni-text",{staticClass:"goods-num"},[a("v-uni-text",{staticClass:"iconfont iconclose"}),e._v(e._s(t.num))],1)],1),a("v-uni-view",{staticClass:"goods-action"})],1)],1)})),1),a("v-uni-view",{staticClass:"order-footer"},[a("v-uni-view",{staticClass:"order-base-info"},[a("v-uni-view",{staticClass:"total"},[a("v-uni-text",{staticClass:"font-size-sub"},[e._v("共"+e._s(t.goods_num)+"件商品")]),a("v-uni-text",{staticClass:"align-right font-size-base"},[e._v("实付款："),a("v-uni-text",{staticClass:"font-size-base"},[e._v(e._s(e.$lang("common.currencySymbol"))+e._s(t.pay_money))])],1)],1)],1),t.action.length>0?a("v-uni-view",{staticClass:"order-action"},[1==e.evaluateConfig.evaluate_status&&1==t.is_evaluate?a("v-uni-view",{staticClass:"order-box-btn",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.operation("memberOrderEvaluation",t)}}},[0==t.evaluate_status?a("v-uni-text",[e._v("评价")]):1==t.evaluate_status?a("v-uni-text",[e._v("追评")]):e._e()],1):e._e(),e._l(t.action,(function(i,o){return a("v-uni-view",{key:o,staticClass:"order-box-btn",class:{"color-base-border color-base-text":"orderPay"==i.action},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.operation(i.action,t)}}},[e._v(e._s(i.title))])}))],2):0==t.action.length&&1==t.is_evaluate&&1==e.evaluateConfig.evaluate_status?a("v-uni-view",{staticClass:"order-action"},[1==t.is_evaluate?a("v-uni-view",{staticClass:"order-box-btn",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.operation("memberOrderEvaluation",t)}}},[0==t.evaluate_status?a("v-uni-text",[e._v("评价")]):1==t.evaluate_status?a("v-uni-text",[e._v("追评")]):e._e()],1):e._e()],1):a("v-uni-view",{staticClass:"order-action"},[a("v-uni-view",{staticClass:"order-box-btn color-base-border color-base-text",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.orderDetail(t)}}},[e._v("查看详情")])],1)],1)],1)})),1):a("v-uni-view",[a("ns-empty",{attrs:{isIndex:!1,text:e.$lang("emptyTips")}})],1)],1)],2),e.mergePayOrder.length?a("v-uni-view",{staticClass:"order-batch-action",class:{"bottom-safe-area":e.isIphoneX}},[a("v-uni-view",{staticClass:"action-btn color-base-text color-base-border",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openChoosePaymentMerge()}}},[e._v("合并付款")])],1):e._e(),a("ns-payment",{ref:"choosePaymentPopup",attrs:{payMoney:e.payMoney},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.pay.apply(void 0,arguments)}}}),a("ns-payment",{ref:"choosePaymentMergePopup",attrs:{payMoney:e.payMoneyMerge},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.mergePay()}}}),a("loading-cover",{ref:"loadingCover"})],1)},r=[]},b0e5:function(e,t,a){var i=a("0f3f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("4f06").default;o("109cbd4e",i,!0,{sourceMap:!1,shadowMode:!1})},b490:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=uni.getSystemInfoSync().platform,o={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{platform:i}},created:function(){}};t.default=o},c268:function(e,t,a){"use strict";a.r(t);var i=a("feb9"),o=a("6092");for(var r in o)"default"!==r&&function(e){a.d(t,e,(function(){return o[e]}))}(r);a("5670");var n,s=a("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"17ff8868",null,!1,i["a"],n);t["default"]=d.exports},fcce:function(e,t,a){"use strict";a.r(t);var i=a("ae59"),o=a("49ff");for(var r in o)"default"!==r&&function(e){a.d(t,e,(function(){return o[e]}))}(r);a("2246"),a("a875");var n,s=a("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"8a8f8ece",null,!1,i["a"],n);t["default"]=d.exports},feb9:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-load-more"},["circle"===e.iconType||"auto"===e.iconType&&"android"===e.platform?a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===e.status&&e.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"loader-android",style:{borderColor:e.color}})],1):a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===e.status&&e.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"load1 load"},[a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:e.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:e.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:e.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:e.color}})],1),a("v-uni-view",{staticClass:"load2 load"},[a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:e.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:e.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:e.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:e.color}})],1),a("v-uni-view",{staticClass:"load3 load"},[a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:e.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:e.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:e.color}}),a("v-uni-view",{staticClass:"uni-load-view_wrapper",style:{background:e.color}})],1)],1),a("v-uni-text",{staticClass:"uni-load-more__text",style:{color:e.color}},[e._v(e._s("more"===e.status?e.contentText.contentdown:"loading"===e.status?e.contentText.contentrefresh:e.contentText.contentnomore))])],1)},r=[]}}]);