(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-refund-refund"],{2540:function(e,t,i){var o=i("3658");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=i("4f06").default;a("e6e58e68",o,!0,{sourceMap:!1,shadowMode:!1})},3658:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,"[data-v-37f1d1df] .uni-popup__wrapper.uni-custom .uni-popup__wrapper-box{background:none;max-height:unset!important;overflow-y:hidden!important}[data-v-37f1d1df] .uni-popup__wrapper{-webkit-border-radius:%?20?% %?20?% 0 0;border-radius:%?20?% %?20?% 0 0}[data-v-37f1d1df] .uni-popup{z-index:8}",""]),e.exports=t},6352:function(e,t,i){"use strict";i.r(t);var o=i("9522"),a=i("ef89");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("de18"),i("cdb0");var d,r=i("f0c5"),s=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"37f1d1df",null,!1,o["a"],d);t["default"]=s.exports},9522:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return o}));var o={uniPopup:i("1fce").default,loadingCover:i("30be").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{attrs:{"data-theme":e.themeStyle}},[i("v-uni-view",[i("v-uni-scroll-view",{staticClass:"refund-container",attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"goods-wrap"},[i("v-uni-view",{staticClass:"goods-img"},[i("v-uni-image",{attrs:{src:e.$util.img(e.refund_data.order_goods_info.sku_image,{size:"mid"}),mode:"aspectFill","lazy-load":!0},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.refund_data.order_goods_info.sku_image=e.$util.getDefaultImage().default_goods_img}}})],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"goods-name"},[e._v(e._s(e.refund_data.order_goods_info.sku_name))])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!e.refund_type,expression:"!refund_type"}],staticClass:"refund-option"},[i("v-uni-view",{staticClass:"option-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectRefundType(1)}}},[i("v-uni-view",[i("v-uni-text",[e._v("退款无需退货")]),i("v-uni-text",{staticClass:"font-size-goods-tag color-tip"},[e._v("没收到货，或与卖家协商同意无需退货只退款")])],1),i("v-uni-text",{staticClass:"iconfont iconright"})],1),2==e.refund_data.refund_type.length?i("v-uni-view",{staticClass:"option-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectRefundType(2)}}},[i("v-uni-view",[i("v-uni-text",[e._v("退货退款")]),i("v-uni-text",{staticClass:"font-size-goods-tag color-tip"},[e._v("已收到货，需退还收到的货物")])],1),i("v-uni-text",{staticClass:"iconfont iconright"})],1):e._e()],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.refund_type,expression:"refund_type"}]},[i("v-uni-view",{staticClass:"refund-form"},[i("v-uni-view",{staticClass:"item-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openPopup("refundReasonPopup")}}},[i("v-uni-view",{staticClass:"label"},[e._v("退款原因：")]),i("v-uni-view",{staticClass:"cont reason"},[e.refund_reason.length?i("v-uni-text",{staticClass:"color-tip"},[e._v(e._s(e.refund_reason))]):i("v-uni-text",{staticClass:"color-tip"},[e._v("请选择")])],1),i("v-uni-text",{staticClass:"iconfont iconright"})],1),i("v-uni-view",{staticClass:"item-wrap"},[i("v-uni-view",{staticClass:"label"},[e._v("退款金额：")]),i("v-uni-view",{staticClass:"cont color-base-text"},[e._v(e._s(e.$lang("common.currencySymbol"))+e._s(e.refund_data.refund_money))])],1)],1),i("v-uni-view",{staticClass:"refund-form"},[i("v-uni-view",{staticClass:"item-wrap"},[i("v-uni-view",{staticClass:"label active"},[e._v("退款说明")])],1),i("v-uni-textarea",{staticClass:"newText",attrs:{placeholder:"请输入退款说明(选填)","placeholder-class":"color-tip font-size-tag","auto-height":!0},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.textBlur()}},model:{value:e.refund_remark,callback:function(t){e.refund_remark=t},expression:"refund_remark"}})],1),i("v-uni-view",{staticClass:"sub-btn",class:{"safe-area":e.isIphoneX},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[i("v-uni-button",{attrs:{type:"primary"}},[e._v(e._s(e.$lang("common.submit")))])],1)],1),i("uni-popup",{ref:"refundReasonPopup",attrs:{type:"bottom"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change()}}},[i("v-uni-view",{staticClass:"refund-reason-popup popup"},[i("v-uni-view",{staticClass:"popup-header"},[i("v-uni-view",[i("v-uni-text",{staticClass:"tit"},[e._v("退款原因")])],1),i("v-uni-view",{staticClass:"align-right",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closePopup("refundReasonPopup")}}},[i("v-uni-text",{staticClass:"iconfont iconclose"})],1)],1),i("v-uni-view",{staticClass:"popup-body"},[i("v-uni-scroll-view",{staticClass:"scroll-view",class:{"safe-area":e.isIphoneX},attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"reason-list"},e._l(e.refund_data.refund_reason_type,(function(t,o){return i("v-uni-view",{key:o,staticClass:"item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.changeReason(t)}}},[i("v-uni-view",{staticClass:"reason"},[e._v(e._s(t))]),i("v-uni-view",{staticClass:"iconfont",class:e.refund_reason==t?"iconyuan_checked color-base-text":"iconyuan_checkbox"})],1)})),1)],1)],1),i("v-uni-view",{staticClass:"popup-footer",class:{"bottom-safe-area":e.isIphoneX}},[i("v-uni-view",{staticClass:"confirm-btn color-base-bg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closePopup("refundReasonPopup")}}},[e._v("确定")])],1)],1)],1)],1),i("loading-cover",{ref:"loadingCover"})],1)],1)},n=[]},bc2a:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.refund-container[data-v-37f1d1df]{width:100vw;height:100vh}.align-right[data-v-37f1d1df]{text-align:right}.goods-wrap[data-v-37f1d1df]{margin:%?20?% %?30?%;padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;position:relative}.goods-wrap .goods-img[data-v-37f1d1df]{width:%?180?%;height:%?180?%;margin-right:%?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;overflow:hidden}.goods-wrap .goods-img uni-image[data-v-37f1d1df]{width:100%;height:100%}.goods-wrap .goods-info[data-v-37f1d1df]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;max-width:calc(100% - %?200?%)}.goods-wrap .goods-info .goods-name[data-v-37f1d1df]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.5;font-size:%?28?%}.refund-option[data-v-37f1d1df]{margin:%?20?% %?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff}.refund-option .option-item[data-v-37f1d1df]{padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;position:relative}.refund-option .option-item uni-view[data-v-37f1d1df]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.refund-option .option-item uni-view uni-text[data-v-37f1d1df]{display:block}.refund-option .option-item .iconright[data-v-37f1d1df]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#ddd;right:%?20?%}.refund-option .option-item[data-v-37f1d1df]:last-of-type{border-top:1px solid #f2f2f2}.refund-form[data-v-37f1d1df]{margin:%?20?% %?30?%;padding:%?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff}.refund-form .item-wrap[data-v-37f1d1df]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;line-height:%?80?%}.refund-form .item-wrap .label[data-v-37f1d1df]{width:%?142?%;padding-right:%?5?%;line-height:%?80?%}.refund-form .item-wrap .cont[data-v-37f1d1df]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:%?80?%;text-align:right}.refund-form .item-wrap .cont .refund-desc[data-v-37f1d1df]{font-size:%?28?%;width:100%;line-height:1;min-height:%?80?%}.refund-form .item-wrap .cont.reason[data-v-37f1d1df]{padding-right:%?40?%}.refund-form .item-wrap .label.active[data-v-37f1d1df]{width:100%}.refund-form .item-wrap .iconright[data-v-37f1d1df]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#ddd;right:0}.textarea-box[data-v-37f1d1df]{position:relative}.textarea-box .mark[data-v-37f1d1df]{width:100%;height:100%;position:absolute;left:0;bottom:0;background:red}.newText[data-v-37f1d1df]{width:100%;min-height:%?200?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?10?%}.sub-btn[data-v-37f1d1df]{position:fixed;width:100%;height:%?120?%;line-height:%?120?%;text-align:center;color:#fff;bottom:0}.sub-btn.safe-area[data-v-37f1d1df]{margin-bottom:%?48?%!important}.popup[data-v-37f1d1df]{width:100vw;background:#fff;-webkit-border-top-left-radius:%?24?%;border-top-left-radius:%?24?%;-webkit-border-top-right-radius:%?24?%;border-top-right-radius:%?24?%}.popup .popup-header[data-v-37f1d1df]{height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?30?%}.popup .popup-header > uni-view[data-v-37f1d1df]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:1}.popup .popup-header .tit[data-v-37f1d1df]{font-size:%?32?%;font-weight:600}.popup .popup-header .vice-tit[data-v-37f1d1df]{margin-right:%?20?%}.popup .popup-footer[data-v-37f1d1df]{height:%?140?%}.popup .popup-footer .confirm-btn[data-v-37f1d1df]{height:%?80?%;line-height:%?80?%;color:#fff;text-align:center;margin:%?20?%;-webkit-border-radius:%?40?%;border-radius:%?40?%}.popup .popup-footer.bottom-safe-area[data-v-37f1d1df]{padding-bottom:%?48?%}.refund-reason-popup[data-v-37f1d1df]{height:50vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.refund-reason-popup .iconclose[data-v-37f1d1df]{font-size:%?40?%}.refund-reason-popup .popup-body[data-v-37f1d1df]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.refund-reason-popup .popup-body .scroll-view[data-v-37f1d1df]{height:100%}.refund-reason-popup .popup-body .item[data-v-37f1d1df]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?30?%;position:relative;height:%?70?%;line-height:%?70?%}.refund-reason-popup .popup-body .item .reason[data-v-37f1d1df]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?70?%;line-height:%?70?%}.refund-reason-popup .popup-body .item > .iconfont[data-v-37f1d1df]{font-size:%?40?%;position:absolute;top:50%;right:%?30?%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.refund-reason-popup .popup-body .item > .iconyuan_checkbox[data-v-37f1d1df]{color:#909399}',""]),e.exports=t},c66ad:function(e,t,i){"use strict";(function(e){var o=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(i("1fce")),n=o(i("ccd8")),d={components:{uniPopup:a.default},data:function(){return{order_goods_id:"",refund_type:"",refund_reason:"",refund_remark:"",isIphoneX:!1,refund_data:{refund_type:[],order_goods_info:{sku_image:""}},isSub:!1,showText:!1}},onLoad:function(e){e.order_goods_id&&(this.order_goods_id=e.order_goods_id)},onShow:function(){this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),uni.getStorageSync("token")?this.getRefundData():this.$util.redirectTo("/pages/login/login/login",{back:"/pages/order/refund/refund?order_goods_id="+this.order_goods_id})},mixins:[n.default],methods:{openPopup:function(e){this.$refs[e].open()},closePopup:function(e){this.$refs[e].close()},textBlur:function(){uni.pageScrollTo({scrollTop:0,duration:0})},selectRefundType:function(e){this.refund_type=e},getRefundData:function(){var e=this;this.$api.sendRequest({url:"/api/orderrefund/refundData",data:{order_goods_id:this.order_goods_id},success:function(t){t.code>=0?(e.refund_data=t.data,e.$refs.loadingCover&&e.$refs.loadingCover.hide()):(e.$util.showToast({title:"未获取到该订单项退款信息"}),setTimeout((function(){e.$util.redirectTo("/pages/order/list/list")}),1e3))},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},submit:function(){var e=this;if(this.verify()){if(this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:"/api/orderrefund/refund",data:{order_goods_id:this.order_goods_id,refund_type:this.refund_type,refund_reason:this.refund_reason,refund_remark:this.refund_remark},success:function(t){e.$util.showToast({title:t.message}),t.code>=0?e.$util.redirectTo("/pages/order/activist/activist"):e.isSub=!1},fail:function(t){e.isSub=!1}})}},verify:function(){return""!=this.refund_reason||(this.$util.showToast({title:"请选择退款原因"}),!1)},changeReason:function(e){this.refund_reason=e},change:function(e){e&&(this.showText=e.show)},subscribeMessage:function(t){this.$api.sendRequest({url:"/weapp/api/weapp/messagetmplids",data:{keywords:"ORDER_REFUND_AGREE,ORDER_REFUND_REFUSE"},success:function(i){i.data.length&&uni.requestSubscribeMessage({tmplIds:i.data,fail:function(t){e.log("fail",t)},complete:function(){t()}})},fail:function(e){t()}})}}};t.default=d}).call(this,i("5a52")["default"])},cdb0:function(e,t,i){"use strict";var o=i("2540"),a=i.n(o);a.a},de18:function(e,t,i){"use strict";var o=i("fa57"),a=i.n(o);a.a},ef89:function(e,t,i){"use strict";i.r(t);var o=i("c66ad"),a=i.n(o);for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);t["default"]=a.a},fa57:function(e,t,i){var o=i("bc2a");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=i("4f06").default;a("62b4afb6",o,!0,{sourceMap:!1,shadowMode:!1})}}]);