(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-payment/ns-payment"],{900:function(e,t,n){"use strict";n.r(t);var o=n(901),a=n(903);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n(905);var r,s=n(14),c=Object(s["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],r);c.options.__file="components/ns-payment/ns-payment.vue",t["default"]=c.exports},901:function(e,t,n){"use strict";n.r(t);var o=n(902);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},902:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return r})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return o}));try{o={uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,772))},nsSwitch:function(){return n.e("components/ns-switch/ns-switch").then(n.bind(null,1201))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement,n=(e._self._c,e._f("moneyFormat")(e.payMoney));e._isMounted||(e.e0=function(t,n){var o=arguments[arguments.length-1].currentTarget.dataset,a=o.eventParams||o["event-params"];n=a.index;e.payIndex=n}),e.$mp.data=Object.assign({},{$root:{f0:n}})},i=!1,r=[];a._withStripped=!0},903:function(e,t,n){"use strict";n.r(t);var o=n(904),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},904:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n(772))}.bind(null,n)).catch(n.oe)},a=function(){n.e("components/ns-switch/ns-switch").then(function(){return resolve(n(1201))}.bind(null,n)).catch(n.oe)},i={name:"ns-payment",components:{uniPopup:o,nsSwitch:a},props:{balanceDeduct:{type:[Number,String],default:""},isBalance:{type:Number,default:0},payMoney:{type:[Number,String],default:0}},data:function(){return{isIphoneX:!1,payIndex:0,payTypeList:[{name:"微信支付",provider:"wxpay",icon:"iconweixin1",type:"wechatpay"}],isMatched:0,payInfo:{},balanceConfig:0,sale:!0}},created:function(t){var n=getCurrentPages()[getCurrentPages().length-1].route,o=n.match("presale/order_list/order_list"),a=n.match("presale/order_detail/order_detail");(o||a)&&(this.sale=!1),this.isIphoneX=this.$util.uniappIsIPhoneX(),this.getPayType(),this.getBalanceConfig(),""==e.getStorageSync("paySource")&&this.payIsMatched()},methods:{open:function(){this.$refs.choosePaymentPopup.open()},close:function(){this.$refs.choosePaymentPopup.close()},useBalance:function(){this.$emit("useBalance")},confirm:function(){0==this.payTypeList.length&&this.payMoney>0?this.$util.showToast({title:"请选择支付方式！"}):(e.showLoading({title:"支付中...",mask:!0}),this.$refs.choosePaymentPopup.close(),this.$emit("confirm"),e.setStorageSync("pay_flag",1))},getPayInfo:function(e){var t=this;this.$api.sendRequest({url:"/api/pay/info",data:{out_trade_no:e},success:function(e){e.code>=0&&e.data?(t.payInfo=e.data,t.pay()):(t.$util.showToast({title:"未获取到支付信息！"}),setTimeout((function(){t.$util.redirectTo("/pages/index/index",{},"reLaunch")}),1500))}})},getBalanceConfig:function(){var e=this;this.$api.sendRequest({url:"/api/pay/getBalanceConfig",data:{},success:function(t){e.balanceConfig=t.data.balance_show}})},getPayType:function(){var e=this;this.$api.sendRequest({url:"/api/pay/type",success:function(t){0==t.code&&(""==t.data.pay_type?e.payTypeList=[]:e.payTypeList.forEach((function(n,o){-1==t.data.pay_type.indexOf(n.type)&&e.payTypeList.splice(o,1)})))}})},pay:function(){var t=this,n=this.payTypeList[this.payIndex];n&&"wxpay"==n.provider&&this.$api.sendRequest({url:"/api/pay/pay",data:{out_trade_no:this.payInfo.out_trade_no,pay_type:n.type,is_matched:this.isMatched,scene:e.getStorageSync("is_test")?1175:wx.getLaunchOptionsSync().scene},success:function(o){if(e.hideLoading(),o.code>=0){var a=o.data.data,i=e.getStorageSync("is_test")?1175:wx.getLaunchOptionsSync().scene;-1!=[1175,1176,1177,1191,1195].indexOf(i)?e.requestOrderPayment({timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign,success:function(n){e.removeStorage({key:"is_test"}),"BlindboxGoodsOrderPayNotify"==t.payInfo.event?t.$util.redirectTo("/pages_promotion/blindbox/index",{outTradeNo:t.payInfo.out_trade_no},"","redirectTo"):t.$util.redirectTo("/pages_tool/pay/result",{code:t.payInfo.out_trade_no},"","redirectTo")},fail:function(n){t.flag=!1,"requestOrderPayment:fail cancel"==n.errMsg?t.$util.showToast({title:"您已取消支付"}):e.showModal({content:"支付失败,失败原因: "+n.errMsg,showCancel:!1}),setTimeout((function(){e.removeStorage({key:"is_test"}),"BlindboxGoodsOrderPayNotify"==t.payInfo.event?t.$util.redirectTo("/pages_promotion/blindbox/index",{outTradeNo:t.payInfo.out_trade_no},"","redirectTo"):t.$util.redirectTo("/pages_tool/pay/result",{code:t.payInfo.out_trade_no},"","redirectTo")}),2e3)}}):e.requestPayment({provider:n.provider,timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign,success:function(e){t.$util.redirectTo("/pages_tool/pay/result",{code:t.payInfo.out_trade_no},"","redirectTo")},fail:function(n){t.flag=!1,"requestPayment:fail cancel"==n.errMsg?t.$util.showToast({title:"您已取消支付"}):e.showModal({content:"支付失败,失败原因: "+n.errMsg,showCancel:!1}),setTimeout((function(){t.$util.redirectTo("/pages_tool/pay/result",{code:t.payInfo.out_trade_no},"redirectTo")}),2e3)}})}else t.$util.showToast({title:o.message}),setTimeout((function(){t.$util.redirectTo("/pages_tool/pay/result",{code:t.payInfo.out_trade_no},"redirectTo")}),2e3)},fail:function(n){e.hideLoading(),t.$util.showToast({title:"request:fail"})}})}}};t.default=i}).call(this,n(1)["default"])},905:function(e,t,n){"use strict";n.r(t);var o=n(906),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},906:function(e,t,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/ns-payment/ns-payment.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-payment/ns-payment-create-component',
    {
        'components/ns-payment/ns-payment-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(900))
        })
    },
    [['components/ns-payment/ns-payment-create-component']]
]);