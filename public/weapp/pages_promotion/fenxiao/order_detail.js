(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_promotion/fenxiao/order_detail"],{"118d":function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return n}));var n={nsLogin:function(){return o.e("components/ns-login/ns-login").then(o.bind(null,"2893"))},loadingCover:function(){return o.e("components/loading-cover/loading-cover").then(o.bind(null,"790a"))}},i=function(){var t=this,e=t.$createElement,o=(t._self._c,t.$util.img(t.orderData.sku_image,{size:"mid"})),n=parseFloat(t.orderData.price).toFixed(2).split("."),i=parseFloat(t.orderData.price).toFixed(2).split("."),r=parseFloat(t.orderData.commission).toFixed(2).split("."),a=parseFloat(t.orderData.commission).toFixed(2).split(".");t.$mp.data=Object.assign({},{$root:{g0:o,g1:n,g2:i,g3:r,g4:a}})},r=[]},"2a9f":function(t,e,o){},"2d14":function(t,e,o){"use strict";(function(t){o("34b0");n(o("66fd"));var e=n(o("9637"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=o,t(e.default)}).call(this,o("543d")["createPage"])},"394b":function(t,e,o){"use strict";o.r(e);var n=o("be2c"),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"544a":function(t,e,o){"use strict";var n=o("2a9f"),i=o.n(n);i.a},9637:function(t,e,o){"use strict";o.r(e);var n=o("118d"),i=o("394b");for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);o("544a");var a,d=o("f0c5"),s=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=s.exports},be2c:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("0548"));function i(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{isIphoneX:!1,orderId:0,orderData:{action:[]}}},components:{},onLoad:function(e){e.id?this.orderId=e.id:t.navigateBack({delta:1})},mixins:[n.default],onShow:function(){var e=this;if(!this.addonIsExist.fenxiao)return this.$util.showToast({title:"商家未开启分销",mask:!0,duration:2e3}),void setTimeout((function(){e.$util.redirectTo("/pages/index/index",{},"redirectTo")}),2e3);this.isIphoneX=this.$util.uniappIsIPhoneX(),t.getStorageSync("token")?this.getOrderData():setTimeout((function(){e.$refs.login.open("/pages_promotion/fenxiao/order_detail?id="+e.orderId)}))},methods:{getOrderData:function(){var t=this;this.$api.sendRequest({url:"/fenxiao/api/order/info",data:{fenxiao_order_id:this.orderId},success:function(e){e.code>=0?(t.$refs.loadingCover&&t.$refs.loadingCover.hide(),t.orderData=e.data):(t.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){t.$util.redirectTo("/pages_promotion/fenxiao/order",{},"redirectTo")}),1500))},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},imageError:function(){this.orderData.sku_image=this.$util.getDefaultImage().goods,this.$forceUpdate()}},computed:{storeToken:function(){return this.$store.state.token}},watch:{storeToken:function(t,e){t&&this.getOrderData()}}};e.default=r}).call(this,o("543d")["default"])}},[["2d14","common/runtime","common/vendor"]]]);