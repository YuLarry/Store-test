(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-order-refund"],{"013c":function(e,t,o){"use strict";o("c975"),o("a9e3"),o("acd8"),o("ac1f"),o("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},n={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(e){return-1!==["dark","light"].indexOf(e)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var e=this,t=getCurrentPages()[0];this.$pageVm=t.$vm||t,uni.onWindowResize((function(t){e.$emit("resize",t)})),this.$pageVm.$on("hook:onPageScroll",(function(t){e.$emit("scroll",t)})),this.$watch("backgroundTextStyle",(function(){e.setBackgroundTextStyle()})),this.$watch((function(){return[e.rootFontSize,e.pageStyle]}),(function(){e.setPageMeta()})),this.$watch((function(){return[e.backgroundColor,e.backgroundColorTop,e.backgroundColorBottom]}),(function(){e.setBackgroundColor()})),this.$watch((function(){return[e.scrollTop,e.scrollDuration]}),(function(){e.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(e,t){e.setStyle({pullToRefresh:{support:t,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var e=this,t=String(this.scrollTop);if(-1!==t.indexOf("rpx")&&(t=uni.upx2px(t.replace("rpx",""))),t=parseFloat(t),!isNaN(t)){var o=function o(n){n.scrollTop===t&&(e.$pageVm.$off("hook:onPageScroll",o),e.$emit("scrolldone",i))};uni.pageScrollTo({scrollTop:t,duration:this.scrollDuration,success:function(){e.$pageVm.$on("hook:onPageScroll",o)}})}}}};t.default=n},"179c":function(e,t,o){"use strict";o.r(t);var i=o("21cd"),n=o("837f");for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);o("5d6f"),o("498b");var r,s=o("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"4e441c27",null,!1,i["a"],r);t["default"]=u.exports},"21cd":function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return i}));var i={pageMeta:o("6d42").default,uniPopup:o("92aa").default,loadingCover:o("790a").default},n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",[o("page-meta",{attrs:{"page-style":e.themeColor}}),o("v-uni-view",[o("v-uni-view",[o("v-uni-scroll-view",{staticClass:"refund-container",attrs:{"scroll-y":"true"}},[o("v-uni-view",{staticClass:"goods-wrap"},[o("v-uni-view",{staticClass:"goods-img"},[o("v-uni-image",{attrs:{src:e.$util.img(e.refund_data.order_goods_info.sku_image,{size:"mid"}),mode:"aspectFill","lazy-load":!0},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.refund_data.order_goods_info.sku_image=e.$util.getDefaultImage().goods}}})],1),o("v-uni-view",{staticClass:"goods-info"},[o("v-uni-view",{staticClass:"goods-name"},[e._v(e._s(e.refund_data.order_goods_info.sku_name))])],1)],1),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!e.refund_type,expression:"!refund_type"}],staticClass:"refund-option"},[o("v-uni-view",{staticClass:"option-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectRefundType(1)}}},[o("v-uni-view",[o("v-uni-text",[e._v("退款无需退货")]),o("v-uni-text",{staticClass:"font-size-goods-tag color-tip"},[e._v("没收到货，或与卖家协商同意无需退货只退款")])],1),o("v-uni-text",{staticClass:"iconfont iconright"})],1),2==e.refund_data.refund_type.length?o("v-uni-view",{staticClass:"option-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectRefundType(2)}}},[o("v-uni-view",[o("v-uni-text",[e._v("退货退款")]),o("v-uni-text",{staticClass:"font-size-goods-tag color-tip"},[e._v("已收到货，需退还收到的货物")])],1),o("v-uni-text",{staticClass:"iconfont iconright"})],1):e._e()],1),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.refund_type,expression:"refund_type"}]},[o("v-uni-view",{staticClass:"refund-form"},[o("v-uni-view",{staticClass:"item-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openPopup("refundReasonPopup")}}},[o("v-uni-view",{staticClass:"label"},[e._v("退款原因：")]),o("v-uni-view",{staticClass:"cont reason"},[e.refund_reason.length?o("v-uni-text",{staticClass:"color-tip"},[e._v(e._s(e.refund_reason))]):o("v-uni-text",{staticClass:"color-tip"},[e._v("请选择")])],1),o("v-uni-text",{staticClass:"iconfont iconright"})],1),o("v-uni-view",{staticClass:"item-wrap"},[o("v-uni-view",{staticClass:"label"},[e._v("退款金额：")]),o("v-uni-view",{staticClass:"cont color-base-text"},[e._v(e._s(e.$lang("common.currencySymbol"))+e._s(e.refund_data.refund_money))])],1)],1),o("v-uni-view",{staticClass:"refund-form"},[o("v-uni-view",{staticClass:"item-wrap"},[o("v-uni-view",{staticClass:"label active"},[e._v("退款说明")])],1),o("v-uni-textarea",{staticClass:"newText",attrs:{placeholder:"请输入退款说明(选填)","placeholder-class":"color-tip font-size-tag","auto-height":!0},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.textBlur()}},model:{value:e.refund_remark,callback:function(t){e.refund_remark=t},expression:"refund_remark"}})],1),o("v-uni-view",{staticClass:"sub-btn",class:{"safe-area":e.isIphoneX},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[o("v-uni-button",{attrs:{type:"primary"}},[e._v(e._s(e.$lang("common.submit")))])],1)],1),o("uni-popup",{ref:"refundReasonPopup",attrs:{type:"bottom"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change()}}},[o("v-uni-view",{staticClass:"refund-reason-popup popup"},[o("v-uni-view",{staticClass:"popup-header"},[o("v-uni-view",[o("v-uni-text",{staticClass:"tit"},[e._v("退款原因")])],1),o("v-uni-view",{staticClass:"align-right",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closePopup("refundReasonPopup")}}},[o("v-uni-text",{staticClass:"iconfont iconclose"})],1)],1),o("v-uni-view",{staticClass:"popup-body"},[o("v-uni-scroll-view",{staticClass:"scroll-view",class:{"safe-area":e.isIphoneX},attrs:{"scroll-y":"true"}},[o("v-uni-view",{staticClass:"reason-list"},e._l(e.refund_data.refund_reason_type,(function(t,i){return o("v-uni-view",{key:i,staticClass:"item",on:{click:function(o){arguments[0]=o=e.$handleEvent(o),e.changeReason(t)}}},[o("v-uni-view",{staticClass:"reason"},[e._v(e._s(t))]),o("v-uni-view",{staticClass:"iconfont",class:e.refund_reason==t?"iconyuan_checked color-base-text":"iconyuan_checkbox"})],1)})),1)],1)],1),o("v-uni-view",{staticClass:"popup-footer",class:{"bottom-safe-area":e.isIphoneX}},[o("v-uni-view",{staticClass:"confirm-btn color-base-bg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closePopup("refundReasonPopup")}}},[e._v("确定")])],1)],1)],1)],1),o("loading-cover",{ref:"loadingCover"})],1)],1)],1)},a=[]},"3d44":function(e,t,o){"use strict";var i=o("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o("92aa")),a={components:{uniPopup:n.default},data:function(){return{order_goods_id:"",refund_type:"",refund_reason:"",refund_remark:"",isIphoneX:!1,refund_data:{refund_type:[],order_goods_info:{sku_image:""}},isSub:!1,showText:!1}},onLoad:function(e){e.order_goods_id&&(this.order_goods_id=e.order_goods_id)},onShow:function(){this.isIphoneX=this.$util.uniappIsIPhoneX(),uni.getStorageSync("token")?this.getRefundData():this.$util.redirectTo("/pages_tool/login/login",{back:"/pages_tool/order/refund?order_goods_id="+this.order_goods_id})},methods:{openPopup:function(e){this.$refs[e].open()},closePopup:function(e){this.$refs[e].close()},textBlur:function(){uni.pageScrollTo({scrollTop:0,duration:0})},selectRefundType:function(e){this.refund_type=e},getRefundData:function(){var e=this;this.$api.sendRequest({url:"/api/orderrefund/refundData",data:{order_goods_id:this.order_goods_id},success:function(t){t.code>=0?(e.refund_data=t.data,e.$refs.loadingCover&&e.$refs.loadingCover.hide()):(e.$util.showToast({title:"未获取到该订单项退款信息"}),setTimeout((function(){e.$util.redirectTo("/pages/order/list")}),1e3))},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},submit:function(){var e=this;if(this.verify()){if(this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:"/api/orderrefund/refund",data:{order_goods_ids:this.order_goods_id,refund_type:this.refund_type,refund_reason:this.refund_reason,refund_remark:this.refund_remark},success:function(t){e.$util.showToast({title:t.message}),t.code>=0?e.$util.redirectTo("/pages_tool/order/activist",{},"redirectTo"):e.isSub=!1},fail:function(t){e.isSub=!1}})}},verify:function(){return""!=this.refund_reason||(this.$util.showToast({title:"请选择退款原因"}),!1)},changeReason:function(e){this.refund_reason=e},change:function(e){e&&(this.showText=e.show)},subscribeMessage:function(e){this.$api.sendRequest({url:"/weapp/api/weapp/messagetmplids",data:{keywords:"ORDER_REFUND_AGREE,ORDER_REFUND_REFUSE"},success:function(t){0==t.code&&t.data.length?uni.requestSubscribeMessage({tmplIds:t.data,fail:function(e){console.log("fail",e)},complete:function(){e()}}):e()},fail:function(t){e()}})}}};t.default=a},4020:function(e,t,o){"use strict";var i;o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticStyle:{display:"none"}},[e._t("default")],2)},a=[]},"498b":function(e,t,o){"use strict";var i=o("a930"),n=o.n(i);n.a},5351:function(e,t,o){var i=o("c108");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=o("4f06").default;n("af73e25a",i,!0,{sourceMap:!1,shadowMode:!1})},"5d6f":function(e,t,o){"use strict";var i=o("5351"),n=o.n(i);n.a},"6d42":function(e,t,o){"use strict";o.r(t);var i=o("4020"),n=o("8f28");for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);var r,s=o("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=u.exports},"837f":function(e,t,o){"use strict";o.r(t);var i=o("3d44"),n=o.n(i);for(var a in i)"default"!==a&&function(e){o.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a},"8f28":function(e,t,o){"use strict";o.r(t);var i=o("013c"),n=o.n(i);for(var a in i)"default"!==a&&function(e){o.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a},9643:function(e,t,o){var i=o("24fb");t=i(!1),t.push([e.i,"[data-v-4e441c27] .uni-popup__wrapper.uni-custom .uni-popup__wrapper-box{background:none;max-height:unset!important;overflow-y:hidden!important}[data-v-4e441c27] .uni-popup__wrapper{border-radius:%?20?% %?20?% 0 0}[data-v-4e441c27] .uni-popup{z-index:8}",""]),e.exports=t},a930:function(e,t,o){var i=o("9643");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=o("4f06").default;n("1e4d1aa8",i,!0,{sourceMap:!1,shadowMode:!1})},c108:function(e,t,o){var i=o("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.refund-container[data-v-4e441c27]{width:100vw;height:100vh}.align-right[data-v-4e441c27]{text-align:right}.goods-wrap[data-v-4e441c27]{margin:%?20?% %?30?%;padding:%?30?%;border-radius:%?10?%;background:#fff;display:flex;position:relative}.goods-wrap .goods-img[data-v-4e441c27]{width:%?180?%;height:%?180?%;margin-right:%?20?%;border-radius:%?10?%;overflow:hidden}.goods-wrap .goods-img uni-image[data-v-4e441c27]{width:100%;height:100%}.goods-wrap .goods-info[data-v-4e441c27]{flex:1;position:relative;max-width:calc(100% - %?200?%)}.goods-wrap .goods-info .goods-name[data-v-4e441c27]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.5;font-size:%?28?%}.refund-option[data-v-4e441c27]{margin:%?20?% %?30?%;border-radius:%?10?%;background:#fff}.refund-option .option-item[data-v-4e441c27]{padding:%?20?%;display:flex;position:relative}.refund-option .option-item uni-view[data-v-4e441c27]{flex:1}.refund-option .option-item uni-view uni-text[data-v-4e441c27]{display:block}.refund-option .option-item .iconright[data-v-4e441c27]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#ddd;right:%?20?%}.refund-option .option-item[data-v-4e441c27]:last-of-type{border-top:%?2?% solid #f2f2f2}.refund-form[data-v-4e441c27]{margin:%?20?% %?30?%;padding:%?20?%;border-radius:%?10?%;background:#fff}.refund-form .item-wrap[data-v-4e441c27]{display:flex;position:relative;line-height:%?80?%}.refund-form .item-wrap .label[data-v-4e441c27]{width:%?142?%;padding-right:%?5?%;line-height:%?80?%}.refund-form .item-wrap .cont[data-v-4e441c27]{flex:1;line-height:%?80?%;text-align:right}.refund-form .item-wrap .cont .refund-desc[data-v-4e441c27]{font-size:%?28?%;width:100%;line-height:1;min-height:%?80?%}.refund-form .item-wrap .cont.reason[data-v-4e441c27]{padding-right:%?40?%}.refund-form .item-wrap .label.active[data-v-4e441c27]{width:100%}.refund-form .item-wrap .iconright[data-v-4e441c27]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#ddd;right:0}.textarea-box[data-v-4e441c27]{position:relative}.textarea-box .mark[data-v-4e441c27]{width:100%;height:100%;position:absolute;left:0;bottom:0;background:red}.newText[data-v-4e441c27]{width:100%;min-height:%?200?%;border-radius:%?10?%;box-sizing:border-box;margin-top:%?10?%}.sub-btn[data-v-4e441c27]{position:fixed;width:100%;height:%?100?%;line-height:%?100?%;text-align:center;color:#fff;bottom:0}.sub-btn.safe-area[data-v-4e441c27]{margin-bottom:%?48?%!important}.popup[data-v-4e441c27]{width:100vw;background:#fff;border-top-left-radius:%?24?%;border-top-right-radius:%?24?%}.popup .popup-header[data-v-4e441c27]{height:%?90?%;display:flex;align-items:center;padding:0 %?30?%}.popup .popup-header > uni-view[data-v-4e441c27]{flex:1;line-height:1}.popup .popup-header .tit[data-v-4e441c27]{font-size:%?32?%;font-weight:600}.popup .popup-header .vice-tit[data-v-4e441c27]{margin-right:%?20?%}.popup .popup-footer[data-v-4e441c27]{height:%?140?%}.popup .popup-footer .confirm-btn[data-v-4e441c27]{height:%?80?%;line-height:%?80?%;color:#fff;text-align:center;margin:%?20?%;border-radius:%?10?%}.popup .popup-footer .confirm-btn.color-base-bg[data-v-4e441c27]{color:var(--btn-text-color)}.popup .popup-footer.bottom-safe-area[data-v-4e441c27]{padding-bottom:%?48?%}.refund-reason-popup[data-v-4e441c27]{height:50vh;display:flex;flex-direction:column}.refund-reason-popup .iconclose[data-v-4e441c27]{font-size:%?40?%}.refund-reason-popup .popup-body[data-v-4e441c27]{flex:1}.refund-reason-popup .popup-body .scroll-view[data-v-4e441c27]{height:100%}.refund-reason-popup .popup-body .item[data-v-4e441c27]{display:flex;padding:0 %?30?%;position:relative;height:%?70?%;line-height:%?70?%}.refund-reason-popup .popup-body .item .reason[data-v-4e441c27]{flex:1;height:%?70?%;line-height:%?70?%}.refund-reason-popup .popup-body .item > .iconfont[data-v-4e441c27]{font-size:%?40?%;position:absolute;top:50%;right:%?30?%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.refund-reason-popup .popup-body .item > .iconyuan_checkbox[data-v-4e441c27]{color:#909399}',""]),e.exports=t}}]);