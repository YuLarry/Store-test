(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_tool/order/logistics"],{616:function(e,t,n){"use strict";(function(e){n(5);o(n(4));var t=o(n(617));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},617:function(e,t,n){"use strict";n.r(t);var o=n(618),r=n(620);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(622);var a,s=n(14),c=Object(s["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],a);c.options.__file="pages_tool/order/logistics.vue",t["default"]=c.exports},618:function(e,t,n){"use strict";n.r(t);var o=n(619);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},619:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return o}));try{o={loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,714))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.packageList,(function(t,n){var o=e.__get_orig(t),r=e.__map(t.goods_list,(function(t,n){var o=e.__get_orig(t),r=e.$util.img(t.sku_image,{size:"mid"});return{$orig:o,g0:r}})),i=1==t.delivery_type?e.$util.img(t.express_company_image):null;return{$orig:o,l0:r,g1:i}})));e.$mp.data=Object.assign({},{$root:{l1:n}})},i=!1,a=[];r._withStripped=!0},620:function(e,t,n){"use strict";n.r(t);var o=n(621),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},621:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{orderId:"",packageList:[],isIphoneX:!1,currIndex:0,status:0}},onLoad:function(e){e.order_id&&(this.orderId=e.order_id)},onShow:function(){e.getStorageSync("token")?this.getPackageInfo():this.$util.redirectTo("/pages_tool/login/login"),this.isIphoneX=this.$util.uniappIsIPhoneX()},methods:{ontabtap:function(e){this.currIndex=e},getPackageInfo:function(){var e=this;this.$api.sendRequest({url:"/api/order/package",data:{order_id:this.orderId},success:function(t){t.code>=0?(e.packageList=t.data,e.packageList.forEach((function(t){t.trace.list&&(t.trace.list=t.trace.list.reverse()),t.status=e.status++})),e.$refs.loadingCover&&e.$refs.loadingCover.hide()):(e.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){e.$util.redirectTo("/pages/order/list")}),1500))},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},toGoodsDetail:function(e){this.$util.redirectTo("/pages/goods/detail",{sku_id:e})},imageError:function(e,t){this.packageList[e].goods_list[t].sku_image=this.$util.getDefaultImage().goods,this.$forceUpdate()},copyDeliveryNo:function(e){this.$util.copy(e)}}};t.default=n}).call(this,n(1)["default"])},622:function(e,t,n){"use strict";n.r(t);var o=n(623),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},623:function(e,t,n){}},[[616,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_tool/order/logistics.js.map