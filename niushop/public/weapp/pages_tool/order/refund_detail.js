(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_tool/order/refund_detail"],{671:function(e,t,n){"use strict";(function(e){n(5);o(n(4));var t=o(n(672));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},672:function(e,t,n){"use strict";n.r(t);var o=n(673),r=n(675);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(678);var d,a=n(14),u=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],d);u.options.__file="pages_tool/order/refund_detail.vue",t["default"]=u.exports},673:function(e,t,n){"use strict";n.r(t);var o=n(674);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},674:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return d})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return o}));try{o={nsContact:function(){return n.e("components/ns-contact/ns-contact").then(n.bind(null,914))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,714))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.detail?e.$util.img(e.detail.sku_image,{size:"mid"}):null),o=e.detail&&3==e.detail.refund_status&&e.detail.refund_real_money>0?e.$lang("common.currencySymbol"):null,r=e.detail&&!(3==e.detail.refund_status&&e.detail.refund_real_money>0)&&e.detail.refund_apply_money>0?e.$lang("common.currencySymbol"):null,i=e.detail?e.$util.timeStampTurnTime(e.detail.refund_action_time):null,d=e.detail&&e.detail.refund_time?e.$util.timeStampTurnTime(e.detail.refund_time):null,a=e.detail?e.__map(e.detail.refund_log_list,(function(t,n){var o=e.__get_orig(t),r=e.$util.timeStampTurnTime(t.action_time);return{$orig:o,g3:r}})):null,u=e.detail?{order_id:e.detail.order_id}:null;e._isMounted||(e.e0=function(t){return e.$util.copy(e.detail.shop_address)}),e.$mp.data=Object.assign({},{$root:{g0:n,m0:o,m1:r,g1:i,g2:d,l0:a,a0:u}})},i=!1,d=[];r._withStripped=!0},675:function(e,t,n){"use strict";n.r(t);var o=n(676),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},676:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(677)),r=i(n(262));function i(e){return e&&e.__esModule?e:{default:e}}var d={data:function(){return{order_goods_id:"",detail:{refund_action:[]},isIphoneX:!1,action:"",formData:{refund_delivery_name:"",refund_delivery_no:"",refund_delivery_remark:""},isSub:!1}},components:{},mixins:[o.default],onLoad:function(e){e.order_goods_id&&(this.order_goods_id=e.order_goods_id),e.action&&(this.action=e.action),this.isIphoneX=this.$util.uniappIsIPhoneX()},onShow:function(){e.getStorageSync("token")?this.getRefundDetail():this.$util.redirectTo("/pages_tool/login/login",{back:"/pages_tool/order/refund_detail?order_goods_id="+this.order_goods_id})},methods:{getRefundDetail:function(){var e=this;this.$api.sendRequest({url:"/api/orderrefund/detail",data:{order_goods_id:this.order_goods_id},success:function(t){t.code>=0?(e.detail=t.data,e.$refs.loadingCover&&e.$refs.loadingCover.hide()):(e.$util.showToast({title:"未获取到该订单项退款信息"}),setTimeout((function(){e.$util.redirectTo("/pages/order/list")}),1e3))},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},refundAction:function(e){var t=this;switch(e){case"orderRefundCancel":this.cancleRefund(this.detail.order_goods_id,(function(e){e.code>=0&&(t.$util.showToast({title:"撤销成功"}),setTimeout((function(){t.$util.redirectTo("/pages/order/list")}),1e3))}));break;case"orderRefundDelivery":this.action="returngoods";break;case"orderRefundAsk":this.$util.redirectTo("/pages_tool/order/refund",{order_goods_id:this.detail.order_goods_id});break}},refurnGoods:function(){var e=this,t=[{name:"refund_delivery_name",checkType:"required",errorMsg:"请输入物流公司"},{name:"refund_delivery_no",checkType:"required",errorMsg:"请输入物流单号"}];this.formData.order_goods_id=this.order_goods_id;var n=r.default.check(this.formData,t);if(!n)return this.$util.showToast({title:r.default.error}),!1;this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/api/orderrefund/delivery",data:this.formData,success:function(t){0==t.code?(e.action="",e.getRefundDetail()):e.$util.showToast({title:t.message})}}))},switchAction:function(e){this.action=e},imageError:function(){this.detail.sku_image=this.$util.getDefaultImage().goods,this.$forceUpdate()},refundDetail:function(e){this.$util.redirectTo("/pages/goods/detail",{goods_id:e.goods_id})}}};t.default=d}).call(this,n(1)["default"])},678:function(e,t,n){"use strict";n.r(t);var o=n(679),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},679:function(e,t,n){}},[[671,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_tool/order/refund_detail.js.map