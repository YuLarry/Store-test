(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/giftcard/order/order"],{"1c80":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){r.e("components/payment/payment").then(function(){return resolve(r("53a5"))}.bind(null,r)).catch(r.oe)},o={components:{nsPayment:n},data:function(){return{order_id:"",order_type:1,orderList:[],price:""}},methods:{changeState:function(e){this.list=[],this.order_type=e,this.$refs.mescroll.refresh()},getData:function(e){var t=this;this.$api.sendRequest({url:"/giftcard/api/giftcard/order",data:{page_size:e.size,page:e.num,order_type:this.order_type},success:function(r){var n=[];0==r.code&&r.data&&(n=r.data.list),e.endSuccess&&e.endSuccess(n.length),1==e.num&&(t.orderList=[]),t.orderList=t.orderList.concat(n),setTimeout((function(){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}),300)},fail:function(r){e.endErr&&e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},openChoosePayment:function(t,r,n){this.order_id=t,this.price=r*n,e.setStorageSync("paySource","giftcard"),this.subscribeMessage(),this.$refs.choosePaymentPopup.open()},subscribeMessage:function(){this.$api.sendRequest({url:"/weapp/api/weapp/messagetmplids",data:{keywords:"ORDER_PAY,ORDER_DELIVERY,ORDER_TAKE_DELIVERY"},success:function(t){t.data.length&&e.requestSubscribeMessage({tmplIds:t.data,success:function(e){},fail:function(e){console.log("fail",e)}})}})},gotoBuy:function(){var t=this;this.$api.sendRequest({url:"/giftcard/api/order/pay",data:{order_id:this.order_id},success:function(r){r.data&&0==r.code?(e.setStorageSync("paySource","giftcard"),t.$refs.choosePaymentPopup.getPayInfo(r.data)):(t.isSub=!1,t.$util.showToast({title:r.message}))}})},closeOrder:function(e){var t=this;this.$api.sendRequest({url:"/giftcard/api/order/close",data:{order_id:e},success:function(e){t.$util.showToast({title:e.message}),t.$refs.mescroll.refresh()}})},orderDetail:function(){this.$util.redirectTo("/pages/order/detail/detail",{order_id:this.id})}}};t.default=o}).call(this,r("543d")["default"])},"359b":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}));var n={loadingCover:function(){return r.e("components/loading-cover/loading-cover").then(r.bind(null,"b1ae"))}},o=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"40d3":function(e,t,r){"use strict";(function(e){r("4b62");n(r("66fd"));var t=n(r("f841"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=r,e(t.default)}).call(this,r("543d")["createPage"])},"4fb2":function(e,t,r){"use strict";r.r(t);var n=r("1c80"),o=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a},"89cf":function(e,t,r){},b2d9:function(e,t,r){"use strict";var n=r("89cf"),o=r.n(n);o.a},f841:function(e,t,r){"use strict";r.r(t);var n=r("359b"),o=r("4fb2");for(var i in o)"default"!==i&&function(e){r.d(t,e,(function(){return o[e]}))}(i);r("b2d9");var s,a=r("f0c5"),c=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);t["default"]=c.exports}},[["40d3","common/runtime","common/vendor"]]]);