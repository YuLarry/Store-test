(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/list/list"],{"190b":function(e,t,r){"use strict";(function(e){r("5558");a(r("66fd"));var t=a(r("fcce"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},"1cc4":function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return a}));var a={nsEmpty:function(){return r.e("components/ns-empty/ns-empty").then(r.bind(null,"1928"))},loadingCover:function(){return r.e("components/loading-cover/loading-cover").then(r.bind(null,"30be"))}},s=function(){var e=this,t=e.$createElement,r=(e._self._c,e.$lang("common.currencySymbol")),a=e.orderList.length>0?e.__map(e.orderList,(function(t,r){var a=e.__get_orig(t),s="waitpay"==e.orderStatus&&0==t.order_status?e.$util.inArray(t.order_id,e.mergePayOrder):null,i=e.$lang("common.currencySymbol"),o=e.__map(t.order_goods,(function(t,r){var a=e.__get_orig(t),s=e.$util.img(t.sku_image,{size:"mid"});return{$orig:a,g1:s}}));return{$orig:a,g0:s,m0:i,l0:o}})):null,s=e.orderList.length>0?null:e.$lang("emptyTips");e.$mp.data=Object.assign({},{$root:{m1:r,l1:a,m2:s}})},i=[]},3945:function(e,t,r){"use strict";var a=r("7b78"),s=r.n(a);s.a},"49ff":function(e,t,r){"use strict";r.r(t);var a=r("c6fe"),s=r.n(a);for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);t["default"]=s.a},"7b78":function(e,t,r){},"7d58":function(e,t,r){"use strict";var a=r("c8ae"),s=r.n(a);s.a},c6fe:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r("520a")),s=i(r("ccd8"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){r.e("components/uni-load-more/uni-load-more").then(function(){return resolve(r("c268"))}.bind(null,r)).catch(r.oe)},n=function(){r.e("components/payment/payment").then(function(){return resolve(r("30d1"))}.bind(null,r)).catch(r.oe)},u={data:function(){return{scrollInto:"",orderStatus:"all",statusList:[],orderList:[],contentText:{},mergePayOrder:[],isIphoneX:!1,evaluateConfig:{evaluate_audit:1,evaluate_show:0,evaluate_status:1},orderData:{},payMoney:0,payMoneyMerge:0}},components:{uniLoadMore:o,nsPayment:n},mixins:[a.default,s.default],onLoad:function(e){e.status&&(this.orderStatus=e.status)},onShow:function(){this.$langConfig.refresh(),this.isIphoneX=this.$util.uniappIsIPhoneX(),this.getEvaluateConfig(),this.getOrderStatus(),e.getStorageSync("token")?this.$refs.mescroll&&this.$refs.mescroll.refresh():this.$util.redirectTo("/pages/login/login/login",{back:"/pages/order/list/list?status="+this.orderStatus})},methods:{ontabtap:function(e){var t=e.target.dataset.current||e.currentTarget.dataset.current;this.orderStatus=this.statusList[t].status,""==this.orderStatus&&(this.mergePayOrder=[]),this.$refs.loadingCover.show(),this.$refs.mescroll.refresh()},getListData:function(e){var t=this;this.$api.sendRequest({url:"/api/order/lists",data:{page:e.num,page_size:e.size,order_status:this.orderStatus},success:function(r){var a=[],s=r.message;0==r.code&&r.data?a=r.data.list:t.$util.showToast({title:s}),e.endSuccess(a.length),1==e.num&&(t.orderList=[]),t.orderList=t.orderList.concat(a),t.orderList.forEach((function(e){e.order_goods.forEach((function(e){if(e.sku_spec_format)try{e.sku_spec_format=JSON.parse(e.sku_spec_format)}catch(t){e.sku_spec_format=e.sku_spec_format}else e.sku_spec_format=[]}))})),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(r){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},getOrderStatus:function(){this.statusList=[{status:"all",name:this.$lang("all"),id:"status_0"},{status:"waitpay",name:this.$lang("waitPay"),id:"status_1"},{status:"waitsend",name:this.$lang("readyDelivery"),id:"status_2"},{status:"waitconfirm",name:this.$lang("waitDelivery"),id:"status_3"},{status:"waitrate",name:this.$lang("waitEvaluate"),id:"status_4"}]},operation:function(e,t){var r=this;this.status;switch(e){case"orderPay":this.orderData=t,this.payMoney=parseFloat(t.pay_money),this.orderPay(t);break;case"orderClose":this.orderClose(t.order_id,(function(){r.$refs.mescroll.refresh()}));break;case"memberTakeDelivery":this.orderDelivery(t.order_id,(function(){r.$refs.mescroll.refresh()}));break;case"trace":this.$util.redirectTo("/pages/order/logistics/logistics",{order_id:t.order_id});break;case"memberOrderEvaluation":this.$util.redirectTo("/pages/order/evaluate/evaluate",{order_id:t.order_id});break}},orderDetail:function(e){switch(parseInt(e.order_type)){case 2:this.$util.redirectTo("/pages/order/detail_pickup/detail_pickup",{order_id:e.order_id});break;case 3:this.$util.redirectTo("/pages/order/detail_local_delivery/detail_local_delivery",{order_id:e.order_id});break;case 4:this.$util.redirectTo("/pages/order/detail_virtual/detail_virtual",{order_id:e.order_id});break;default:this.$util.redirectTo("/pages/order/detail/detail",{order_id:e.order_id});break}},selectOrder:function(e,t){-1!=this.$util.inArray(e,this.mergePayOrder)?(this.mergePayOrder.splice(this.$util.inArray(e,this.mergePayOrder),1),this.payMoneyMerge-=parseFloat(t)):(this.payMoneyMerge+=parseFloat(t),this.mergePayOrder.push(e))},mergePay:function(){var e=this;this.mergePayOrder.length&&this.$api.sendRequest({url:"/api/order/pay",data:{order_ids:this.mergePayOrder.toString()},success:function(t){t.code>=0?e.$refs.choosePaymentMergePopup.getPayInfo(t.data):e.$util.showToast({title:t.message})}})},imageError:function(e,t){this.orderList[e].order_goods[t].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},getEvaluateConfig:function(){var e=this;this.$api.sendRequest({url:"/api/goodsevaluate/config",success:function(t){if(0==t.code){var r=t.data;e.evaluateConfig=r}}})},openChoosePayment:function(){this.$refs.choosePaymentPopup.open()},openChoosePaymentMerge:function(){this.$refs.choosePaymentMergePopup.open()}},computed:{mpOrderList:function(){if(this.orderList[this.status])return this.orderList[this.status].list||[]}}};t.default=u}).call(this,r("543d")["default"])},c8ae:function(e,t,r){},fcce:function(e,t,r){"use strict";r.r(t);var a=r("1cc4"),s=r("49ff");for(var i in s)"default"!==i&&function(e){r.d(t,e,(function(){return s[e]}))}(i);r("3945"),r("7d58");var o,n=r("f0c5"),u=Object(n["a"])(s["default"],a["b"],a["c"],!1,null,"4d9f98bb",null,!1,a["a"],o);t["default"]=u.exports}},[["190b","common/runtime","common/vendor"]]]);