(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/refund_detail/refund_detail"],{"321c":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return o}));var o={loadingCover:function(){return i.e("components/loading-cover/loading-cover").then(i.bind(null,"30be"))}},n=function(){var e=this,t=e.$createElement,i=(e._self._c,e.detail?e.$util.img(e.detail.sku_image,{size:"mid"}):null),o=e.detail?e.$lang("common.currencySymbol"):null,n=e.detail?e.$lang("common.currencySymbol"):null,r=e.detail?e.$util.timeStampTurnTime(e.detail.refund_action_time):null,d=e.detail&&e.detail.refund_time?e.$util.timeStampTurnTime(e.detail.refund_time):null,a=e.detail?e.__map(e.detail.refund_log_list,(function(t,i){var o=e.__get_orig(t),n=e.$util.timeStampTurnTime(t.action_time);return{$orig:o,g3:n}})):null;e._isMounted||(e.e0=function(t){return e.$util.copy(e.detail.shop_address)}),e.$mp.data=Object.assign({},{$root:{g0:i,m0:o,m1:n,g1:r,g2:d,l0:a}})},r=[]},"41ca":function(e,t,i){"use strict";i.r(t);var o=i("8235"),n=i.n(o);for(var r in o)"default"!==r&&function(e){i.d(t,e,(function(){return o[e]}))}(r);t["default"]=n.a},"42ba":function(e,t,i){"use strict";i.r(t);var o=i("321c"),n=i("41ca");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("ee65");var d,a=i("f0c5"),u=Object(a["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],d);t["default"]=u.exports},"4b2a":function(e,t,i){"use strict";(function(e){i("5558");o(i("66fd"));var t=o(i("42ba"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("543d")["createPage"])},"71ef":function(e,t,i){},8235:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(i("7289")),n=d(i("d5e1")),r=d(i("ccd8"));function d(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{order_goods_id:"",detail:{refund_action:[]},isIphoneX:!1,action:"",formData:{refund_delivery_name:"",refund_delivery_no:"",refund_delivery_remark:""},isSub:!1,kefuConfig:{weapp:"",system:"",open:"",open_url:""}}},components:{},mixins:[o.default,r.default],onLoad:function(e){e.order_goods_id&&(this.order_goods_id=e.order_goods_id),e.action&&(this.action=e.action),this.isIphoneX=this.$util.uniappIsIPhoneX()},onShow:function(){this.$langConfig.refresh(),this.getKekuConfig(),e.getStorageSync("token")?this.getRefundDetail():this.$util.redirectTo("/pages/login/login/login",{back:"/pages/order/refund_detail/refund_detail?order_goods_id="+this.order_goods_id})},methods:{goConnect:function(){var t=this;if(e.getStorageSync("token")){var i={orderId:t.detail.order_id};return 1==this.kefuConfig.system?(t.$util.redirectTo("/otherpages/chat/room/room",i),!1):void 0}this.$refs.login.open("/pages/goods/detail/detail?sku_id="+t.detail.sku_id)},getKekuConfig:function(){var e=this;this.$api.sendRequest({url:"/api/config/servicer",success:function(t){0==t.code&&(e.kefuConfig=t.data,e.kefuConfig.system&&!e.addonIsExit.servicer&&(e.kefuConfig.system=0))}})},getRefundDetail:function(){var e=this;this.$api.sendRequest({url:"/api/orderrefund/detail",data:{order_goods_id:this.order_goods_id},success:function(t){t.code>=0?(e.detail=t.data,e.$refs.loadingCover&&e.$refs.loadingCover.hide()):(e.$util.showToast({title:"未获取到该订单项退款信息"}),setTimeout((function(){e.$util.redirectTo("/pages/order/list/list")}),1e3))},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},refundAction:function(e){var t=this;switch(e){case"orderRefundCancel":this.cancleRefund(this.detail.order_goods_id,(function(e){e.code>=0&&(t.$util.showToast({title:"撤销成功"}),setTimeout((function(){t.$util.redirectTo("/pages/order/list/list")}),1e3))}));break;case"orderRefundDelivery":this.action="returngoods";break;case"orderRefundAsk":this.$util.redirectTo("/pages/order/refund/refund",{order_goods_id:this.detail.order_goods_id});break}},refurnGoods:function(){var e=this,t=[{name:"refund_delivery_name",checkType:"required",errorMsg:"请输入物流公司"},{name:"refund_delivery_no",checkType:"required",errorMsg:"请输入物流单号"}];this.formData.order_goods_id=this.order_goods_id;var i=n.default.check(this.formData,t);if(!i)return this.$util.showToast({title:n.default.error}),!1;this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/api/orderrefund/delivery",data:this.formData,success:function(t){0==t.code?(e.action="",e.getRefundDetail()):e.$util.showToast({title:t.message})}}))},switchAction:function(e){this.action=e},imageError:function(){this.detail.sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},refundDetail:function(e){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:e})}}};t.default=a}).call(this,i("543d")["default"])},ee65:function(e,t,i){"use strict";var o=i("71ef"),n=i.n(o);n.a}},[["4b2a","common/runtime","common/vendor"]]]);