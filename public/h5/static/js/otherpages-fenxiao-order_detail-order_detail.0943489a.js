(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-fenxiao-order_detail-order_detail"],{"32ef":function(e,t,i){"use strict";i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return o}));var o={loadingCover:i("30be").default},d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{attrs:{"data-theme":e.themeStyle}},[i("v-uni-view",{staticClass:"order-detail"},[i("v-uni-view",{staticClass:"order-detail-box"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[e._v("共"+e._s(e.orderData.num)+"件商品")])],1),1==e.orderData.is_refund?i("v-uni-text",{staticClass:"color-base-text font-size-tag"},[e._v("已退款")]):1==e.orderData.is_settlement?i("v-uni-text",{staticClass:"color-base-text font-size-tag"},[e._v("已结算")]):i("v-uni-text",{staticClass:"color-base-text font-size-tag"},[e._v("待结算")])],1),i("v-uni-view",{staticClass:"detail-body"},[i("v-uni-view",{staticClass:"detail-body-box"},[i("v-uni-view",{staticClass:"goods-image"},[i("v-uni-image",{attrs:{src:e.$util.img(e.orderData.sku_image,{size:"mid"}),mode:"aspectFill"},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.imageError()}}})],1),i("v-uni-view",{staticClass:"order-info"},[i("v-uni-view",{staticClass:"goods-name"},[e._v(e._s(e.orderData.sku_name))]),i("v-uni-view",{staticClass:"goods-sub-section margin-top"},[i("v-uni-view",[i("v-uni-text",{staticClass:"goods-price"},[i("v-uni-text",{staticClass:"unit color-base-text"},[e._v("￥")]),i("v-uni-text",{staticClass:"color-base-text font-size-toolbar"},[e._v(e._s(e.orderData.price))])],1)],1),i("v-uni-view",[i("v-uni-text",[i("v-uni-text",{staticClass:"iconfont iconclose"}),e._v(e._s(e.orderData.num))],1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"detail-footer"},[i("v-uni-text"),i("v-uni-text",[i("v-uni-text",[e._v("合计：")]),i("v-uni-text",{staticClass:"color-base-text total"},[e._v("￥"+e._s(e.orderData.real_goods_money))])],1)],1)],1),i("v-uni-view",{staticClass:"order-detail-box commission"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"title color-base-bg-before"},[i("v-uni-text",[e._v("返佣详情")])],1),i("v-uni-text",{staticClass:"color-base-text"},[e._v("")])],1),i("v-uni-view",{staticClass:"detail-content"},[i("v-uni-view",{staticClass:"order-info-item"},[i("v-uni-text",{staticClass:"tit"},[e._v("订单编号：")]),i("v-uni-text",[e._v(e._s(e.orderData.order_no))])],1),i("v-uni-view",{staticClass:"order-info-item"},[i("v-uni-text",{staticClass:"tit"},[e._v("分佣层级：")]),i("v-uni-text",[e._v(e._s(e.orderData.commission_level)+"级")])],1),i("v-uni-view",{staticClass:"order-info-item"},[i("v-uni-text",{staticClass:"tit"},[e._v("返佣金额：")]),i("v-uni-text",{staticClass:"color-base-text font-size-toolbar"},[i("v-uni-text",{staticClass:"font-size-goods-tag"},[e._v("￥")]),e._v(e._s(e.orderData.commission))],1)],1)],1)],1)],1),i("loading-cover",{ref:"loadingCover"})],1)},a=[]},"40aa":function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.order-detail[data-v-6bdcadc9]{width:100%;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?20?%}.order-detail .order-detail-box[data-v-6bdcadc9]{width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%}.order-detail .order-detail-box .header[data-v-6bdcadc9]{width:100%;padding:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.order-detail .order-detail-box .header .title[data-v-6bdcadc9]{display:inline-block;position:relative;line-height:1}.order-detail .order-detail-box .detail-body[data-v-6bdcadc9]{width:100%;padding:0 %?30?% %?30?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.order-detail .order-detail-box .detail-body .detail-body-box[data-v-6bdcadc9]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.order-detail .order-detail-box .detail-body .detail-body-box .goods-image[data-v-6bdcadc9]{width:%?180?%;height:%?180?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.order-detail .order-detail-box .detail-body .detail-body-box .goods-image uni-image[data-v-6bdcadc9]{width:100%;height:100%;border:%?1?% solid #eee;-webkit-border-radius:%?10?%;border-radius:%?10?%}.order-detail .order-detail-box .detail-body .detail-body-box .order-info[data-v-6bdcadc9]{width:calc(100% - %?200?%);height:%?180?%;padding-left:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.order-detail .order-detail-box .detail-body .detail-body-box .order-info .goods-name[data-v-6bdcadc9]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.5;font-size:%?28?%}.order-detail .order-detail-box .detail-body .detail-body-box .order-info .goods-sub-section[data-v-6bdcadc9]{width:100%;line-height:1.3;display:-webkit-box;display:-webkit-flex;display:flex}.order-detail .order-detail-box .detail-body .detail-body-box .order-info .goods-sub-section .goods-price[data-v-6bdcadc9]{font-size:%?28?%}.order-detail .order-detail-box .detail-body .detail-body-box .order-info .goods-sub-section .unit[data-v-6bdcadc9]{font-weight:400;font-size:%?24?%;margin-right:%?2?%}.order-detail .order-detail-box .detail-body .detail-body-box .order-info .goods-sub-section uni-view[data-v-6bdcadc9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:1.3}.order-detail .order-detail-box .detail-body .detail-body-box .order-info .goods-sub-section uni-view[data-v-6bdcadc9]:last-of-type{text-align:right}.order-detail .order-detail-box .detail-body .detail-body-box .order-info .goods-sub-section uni-view:last-of-type .iconfont[data-v-6bdcadc9]{line-height:1;font-size:%?28?%}.order-detail .order-detail-box .detail-content[data-v-6bdcadc9]{width:100%;padding:0 %?30?% %?30?% %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:%?1?% solid #eee}.order-detail .order-detail-box .detail-content uni-text[data-v-6bdcadc9]{font-size:%?28?%}.order-detail .order-detail-box .detail-content .order-info-item .tit[data-v-6bdcadc9]{display:inline-block}.order-detail .order-detail-box .detail-footer[data-v-6bdcadc9]{width:100%;height:%?100?%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order-detail .order-detail-box .detail-footer .total[data-v-6bdcadc9]{font-weight:600}.commission[data-v-6bdcadc9]{margin-top:%?20?%}.commission .detail-content[data-v-6bdcadc9]{border:0!important}.order-money-detail[data-v-6bdcadc9]{width:100%;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?20?%}.order-money-detail .order-money-detail-box[data-v-6bdcadc9]{width:100%;height:100%;padding-top:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%}.order-money-detail .order-money-detail-box .header[data-v-6bdcadc9]{width:100%;height:%?70?%;padding:0 %?20?%;border-bottom:%?1?% solid #eee;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.order-money-detail .order-money-detail-box .header .title[data-v-6bdcadc9]{padding-left:%?20?%;display:inline-block;position:relative;line-height:1;font-weight:600}.order-money-detail .order-money-detail-box .header .title[data-v-6bdcadc9]::before{content:"";display:block;width:%?4?%;height:100%;position:absolute;left:0;top:0;-webkit-border-radius:%?6?%;border-radius:%?6?%}.order-money-detail .order-money-detail-box .money-detail-body[data-v-6bdcadc9]{width:100%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.order-money-detail .order-money-detail-box .money-detail-body .order-cell[data-v-6bdcadc9]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?10?% 0;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;line-height:%?40?%}.order-money-detail .order-money-detail-box .money-detail-body .order-cell .tit[data-v-6bdcadc9]{text-align:left;display:inline-block;width:%?200?%}.order-money-detail .order-money-detail-box .money-detail-body .order-cell .box[data-v-6bdcadc9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:inherit}.order-money-detail .order-money-detail-box .money-detail-body .order-cell .box .textarea[data-v-6bdcadc9]{height:%?40?%}.order-money-detail .order-money-detail-box .money-detail-body .order-cell .iconfont[data-v-6bdcadc9]{color:#bbb;font-size:%?28?%}.order-money-detail .order-money-detail-box .money-detail-body .order-cell .order-pay[data-v-6bdcadc9]{padding:0}.order-money-detail .order-money-detail-box .money-detail-body .order-cell .order-pay uni-text[data-v-6bdcadc9]{display:inline-block;margin-left:%?6?%}.order-money-detail .order-money-detail-box .money-detail-body .order-cell uni-text[data-v-6bdcadc9]{color:#909399;font-size:%?24?%}',""]),e.exports=t},"57cd":function(e,t,i){var o=i("40aa");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var d=i("4f06").default;d("42fdd3fd",o,!0,{sourceMap:!1,shadowMode:!1})},"7e5c":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{fenxiaoWords:{}}},methods:{getFenxiaoWrods:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/words",success:function(t){t.code>=0&&t.data&&(e.fenxiaoWords=t.data,uni.setStorageSync("fenxiaoWords",t.data))}})}},onShow:function(){uni.getStorageSync("fenxiaoWords")&&(this.fenxiaoWords=uni.getStorageSync("fenxiaoWords")),this.getFenxiaoWrods()}};t.default=o},8690:function(e,t,i){"use strict";i.r(t);var o=i("32ef"),d=i("c5dc");for(var a in d)"default"!==a&&function(e){i.d(t,e,(function(){return d[e]}))}(a);i("cdb3");var r,n=i("f0c5"),s=Object(n["a"])(d["default"],o["b"],o["c"],!1,null,"6bdcadc9",null,!1,o["a"],r);t["default"]=s.exports},c5dc:function(e,t,i){"use strict";i.r(t);var o=i("d136"),d=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);t["default"]=d.a},cdb3:function(e,t,i){"use strict";var o=i("57cd"),d=i.n(o);d.a},d136:function(e,t,i){"use strict";var o=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=o(i("7e5c")),a=o(i("ccd8")),r={data:function(){return{isIphoneX:!1,orderId:0,orderData:{action:[]}}},components:{},onLoad:function(e){e.id?this.orderId=e.id:uni.navigateBack({delta:1})},mixins:[d.default,a.default],onShow:function(){var e=this;if(!this.addonIsExit.fenxiao)return this.$util.showToast({title:"商家未开启分销",mask:!0,duration:2e3}),void setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),uni.getStorageSync("token")?this.getOrderData():this.$util.redirectTo("/pages/login/login/login",{back:"/pages/order/detail/detail?order_id="+this.orderId})},methods:{getOrderData:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/order/info",data:{fenxiao_order_id:this.orderId},success:function(t){t.code>=0?(e.$refs.loadingCover&&e.$refs.loadingCover.hide(),e.orderData=t.data):(e.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){e.$util.redirectTo("/otherpages/fenxiao/order/order",{},"redirectTo")}),1500))},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},imageError:function(){this.orderData.sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}}};t.default=r}}]);