(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_promotion/point/order_list"],{"0ad3":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return o}));var o={nsEmpty:function(){return i.e("components/ns-empty/ns-empty").then(i.bind(null,"2c4c"))},nsPayment:function(){return i.e("components/ns-payment/ns-payment").then(i.bind(null,"2215"))},loadingCover:function(){return i.e("components/loading-cover/loading-cover").then(i.bind(null,"790a"))}},n=function(){var e=this,t=e.$createElement,i=(e._self._c,e.orderList.length?e.__map(e.orderList,(function(t,i){var o=e.__get_orig(t),n=2==t.type?e.$util.img(t.exchange_image):null,r=2==t.type&&n?e.$util.img(t.exchange_image):null,a=2!=t.type||n?null:e.$util.img("public/uniapp/point/coupon.png"),s=2!=t.type&&3==t.type?e.$util.img(t.exchange_image):null,d=2!=t.type&&3==t.type&&s?e.$util.img(t.exchange_image):null,u=2==t.type||3!=t.type||s?null:e.$util.img("public/uniapp/point/hongbao.png"),l=2!=t.type&&3!=t.type?e.$util.img(t.exchange_image):null;return{$orig:o,g0:n,g1:r,g2:a,g3:s,g4:d,g5:u,g6:l}})):null);e.$mp.data=Object.assign({},{$root:{l0:i}})},r=[]},7257:function(e,t,i){},"7ac1":function(e,t,i){"use strict";(function(e){i("34b0");o(i("66fd"));var t=o(i("d417"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(t.default)}).call(this,i("543d")["createPage"])},8343:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{orderList:[],showEmpty:!1,outTradeNo:"",payMoney:0}},onLoad:function(){},onShow:function(){var t=this;if(!this.addonIsExist.pointexchange)return this.$util.showToast({title:"商家未开启积分商城",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index",{},"redirectTo")}),2e3);this.$refs.mescroll&&this.$refs.mescroll.refresh(),e.getStorageSync("token")||this.$util.redirectTo("/pages_tool/login/login",{back:"/pages_promotion/point/order_list"})},methods:{getListData:function(e){var t=this;this.showEmpty=!1,this.$api.sendRequest({url:"/pointexchange/api/order/page",data:{page:e.num,page_size:e.size},success:function(i){t.showEmpty=!0;var o=[],n=i.message;0==i.code&&i.data?o=i.data.list:t.$util.showToast({title:n}),e.endSuccess(o.length),1==e.num&&(t.orderList=[]),t.orderList=t.orderList.concat(o),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(i){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},orderClose:function(t,i){var o=this;e.showModal({title:"提示",content:"确定关闭此次兑换？",success:function(e){e.confirm&&o.$api.sendRequest({url:"/pointexchange/api/order/close",data:{order_id:t},success:function(e){e.code>=0&&(o.orderList[i].order_status=-1,o.$util.showToast({title:"关闭成功"}),o.$forceUpdate())}})}})},openChoosePayment:function(e,t){this.outTradeNo=e,this.payMoney=parseFloat(t),this.$refs.choosePaymentPopup.open()},orderPay:function(){this.$refs.choosePaymentPopup.getPayInfo(this.outTradeNo)},detail:function(e){if(1==e.type&&e.relate_order_id)switch(e.delivery_type){case"store":this.$util.redirectTo("/pages/order/detail_pickup",{order_id:e.relate_order_id});break;case"local":this.$util.redirectTo("/pages/order/detail_local_delivery",{order_id:e.relate_order_id});break;case"express":this.$util.redirectTo("/pages/order/detail",{order_id:e.relate_order_id});break;default:this.$util.redirectTo("/pages_tool/order/detail_virtual",{order_id:e.relate_order_id})}else this.$util.redirectTo("/pages/order/detail_point",{order_id:e.order_id})},imageError:function(e){this.orderList[e].exchange_image=this.$util.getDefaultImage().goods,this.$forceUpdate()}}};t.default=i}).call(this,i("543d")["default"])},"943f":function(e,t,i){"use strict";i.r(t);var o=i("8343"),n=i.n(o);for(var r in o)"default"!==r&&function(e){i.d(t,e,(function(){return o[e]}))}(r);t["default"]=n.a},d417:function(e,t,i){"use strict";i.r(t);var o=i("0ad3"),n=i("943f");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("e7a2");var a,s=i("f0c5"),d=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"525b85d8",null,!1,o["a"],a);t["default"]=d.exports},e7a2:function(e,t,i){"use strict";var o=i("7257"),n=i.n(o);n.a}},[["7ac1","common/runtime","common/vendor"]]]);