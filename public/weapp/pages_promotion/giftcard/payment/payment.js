(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_promotion/giftcard/payment/payment"],{"05b7":function(n,t,e){"use strict";var o=e("b806"),r=e.n(o);r.a},"25a2":function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return o}));var o={nsForm:function(){return e.e("components/ns-form/ns-form").then(e.bind(null,"6e986"))},uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"92aa"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"790a"))}},r=function(){var n=this,t=n.$createElement,e=(n._self._c,0==n.orderPaymentData.is_virtual&&"store"==n.orderPaymentData.delivery.delivery_type&&n.storeInfo.currStore&&n.storeInfo.currStore.store_image?n.$util.img(n.storeInfo.currStore.store_image):null),o=n.__map(n.orderPaymentData.shop_goods_list.goods_list,(function(t,e){var o=n.__get_orig(t),r=n.$util.img(t.sku_image,{size:"mid"});return{$orig:o,g1:r}}));n.$mp.data=Object.assign({},{$root:{g0:e,l0:o}})},u=[]},8103:function(n,t,e){"use strict";(function(n){e("34b0");o(e("66fd"));var t=o(e("cd36"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},"8bd6":function(n,t,e){"use strict";e.r(t);var o=e("fd36"),r=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=r.a},b806:function(n,t,e){},cd36:function(n,t,e){"use strict";e.r(t);var o=e("25a2"),r=e("8bd6");for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);e("05b7"),e("f0b7");var i,c=e("f0c5"),a=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"49f72e5a",null,!1,o["a"],i);t["default"]=a.exports},e698:function(n,t,e){},f0b7:function(n,t,e){"use strict";var o=e("e698"),r=e.n(o);r.a},fd36:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(e("e40a"));function r(n){return n&&n.__esModule?n:{default:n}}var u=function(){e.e("components/uni-popup/uni-popup").then(function(){return resolve(e("92aa"))}.bind(null,e)).catch(e.oe)},i=function(){e.e("components/ns-switch/ns-switch").then(function(){return resolve(e("1c63"))}.bind(null,e)).catch(e.oe)},c=function(){e.e("components/payment/payment").then(function(){return resolve(e("4ef4"))}.bind(null,e)).catch(e.oe)},a=function(){e.e("components/ns-form/ns-form").then(function(){return resolve(e("6e986"))}.bind(null,e)).catch(e.oe)},f={data:function(){return{id:"",giftcard_id:""}},components:{uniPopup:u,nsSwitch:i,nsPayment:c,nsForm:a},mixins:[o.default],onLoad:function(n){this.id=n.id,this.giftcard_id=n.giftcard_id}};t.default=f}},[["8103","common/runtime","common/vendor"]]]);