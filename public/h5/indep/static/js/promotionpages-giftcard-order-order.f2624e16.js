(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-giftcard-order-order"],{"4fb2":function(t,a,e){"use strict";e.r(a);var n=e("cdd5"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},5214:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.active[data-v-3911d49f]{border-bottom:%?4?% solid}.cf-container[data-v-3911d49f]{background:#fff;overflow:hidden}.tab[data-v-3911d49f]{display:flex;justify-content:space-between;height:%?86?%}.tab > uni-view[data-v-3911d49f]{text-align:center;width:33%;height:%?86?%}.tab > uni-view uni-text[data-v-3911d49f]{display:inline-block;line-height:%?86?%;height:%?80?%;font-size:%?30?%}.card-item[data-v-3911d49f]{background:#fff;padding:%?10?%;margin:%?20?% %?30?%;border-radius:%?10?%}.card-item .card-content[data-v-3911d49f]{padding:%?20?%}.card-item .card-content .card-num[data-v-3911d49f]{color:#909399;font-size:%?26?%}.card-item .card-content .pay-status[data-v-3911d49f]{color:#fc6666}.card-item .card-content .pay-status2[data-v-3911d49f]{color:#000}.card-item .card-content .card-name[data-v-3911d49f]{font-weight:600}.card-item .card-content .card-money[data-v-3911d49f]{color:#fc6666;font-weight:600}.card-item .card-content .card-use[data-v-3911d49f]{color:#909399;font-size:%?26?%}.card-item .card-content .card-num[data-v-3911d49f]{color:#909399}.card-item .card-content .card-account[data-v-3911d49f]{text-align:right}.card-item .card-content .card-account .goods-num[data-v-3911d49f]{color:#909399;font-size:%?26?%;margin-right:%?20?%}.card-no-data[data-v-3911d49f]{width:100%;text-align:center}.card-no-data .card-image[data-v-3911d49f]{margin-top:%?200?%;display:flex}.card-no-data .card-image uni-image[data-v-3911d49f]{margin:auto auto}.button[data-v-3911d49f]{display:flex;padding:%?30?% %?20?% 0 %?320?%}.button .button-left[data-v-3911d49f]{margin:%?10?% %?20?% %?10?% 0}.button .button-left uni-button[data-v-3911d49f]{background:#fff;color:#000;border:%?1?% solid #d9d9d9;width:%?170?%;height:%?60?%;line-height:%?60?%}.button .button-right[data-v-3911d49f]{margin:%?10?% 0}.button .button-right uni-button[data-v-3911d49f]{width:%?120?%;height:%?60?%;line-height:%?60?%}.button2[data-v-3911d49f]{padding:%?30?% %?20?% 0 %?460?%}.button2 .button3[data-v-3911d49f]{margin:%?10?% %?20?% %?10?% 0}.button2 .button3 uni-button[data-v-3911d49f]{background:#fff;color:#000;border:%?1?% solid #d9d9d9;width:%?170?%;height:%?60?%;line-height:%?60?%}',""]),t.exports=a},"8e14":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return n}));var n={loadingCover:e("b1ae").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{},[e("mescroll-uni",{ref:"mescroll",attrs:{size:10},on:{getData:function(a){arguments[0]=a=t.$handleEvent(a),t.getData.apply(void 0,arguments)}}},[e("template",{attrs:{slot:"list"},slot:"list"},[e("v-uni-view",{staticClass:"cf-container color-line-border"},[e("v-uni-view",{staticClass:"tab"},[e("v-uni-view",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeState(1)}}},[e("v-uni-text",{class:1==t.order_type?"color-base-text active color-base-border-bottom":""},[t._v("全部")])],1),e("v-uni-view",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeState(2)}}},[e("v-uni-text",{class:2==t.order_type?"color-base-text active color-base-border-bottom":""},[t._v("待支付")])],1),e("v-uni-view",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeState(3)}}},[e("v-uni-text",{class:3==t.order_type?"color-base-text active color-base-border-bottom":""},[t._v("已完成")])],1)],1)],1),t.orderList.length>0?e("v-uni-view",{staticClass:"card-box"},t._l(t.orderList,(function(a,n){return e("v-uni-view",{key:n},[0==a.status?e("v-uni-view",{staticClass:"card-item"},[e("v-uni-view",{staticClass:"card-content"},[e("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"30rpx","border-bottom":"1rpx solid #fcfcfc"}},[e("v-uni-view",{staticClass:"card-num"},[t._v("订单号: "+t._s(a.order_number))]),e("v-uni-view",{staticClass:"pay-status"},[t._v("待支付")])],1),e("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"20rpx"}},[e("v-uni-view",{staticClass:"card-name"},[t._v(t._s(a.card_name))]),e("v-uni-view",{staticClass:"card-money"},[t._v("￥"+t._s(a.order_total_price/a.num))])],1),e("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("v-uni-view",{staticClass:"card-use"},[a.balance>0||a.point>0||a.goods_num>0?e("v-uni-text",[t._v("礼品卡权益：")]):t._e(),a.balance>0&&a.point>0&&a.goods_num>0?e("v-uni-text",{staticClass:"card-num"},[t._v("￥"+t._s(a.balance)+" + "+t._s(a.point)+"积分+商品*"+t._s(a.goods_num))]):a.balance>0&&0==a.point?e("v-uni-text",{staticClass:"card-num"},[t._v("￥"+t._s(a.balance))]):0==a.balance&&a.point>0?e("v-uni-text",{staticClass:"card-num"},[t._v(t._s(a.point)+" 积分")]):0==a.balance&&0==a.point&&a.goods_num>0?e("v-uni-text",{staticClass:"card-num"},[t._v("商品*"+t._s(a.goods_num))]):a.balance>0&&a.point>0&&0==a.goods_num?e("v-uni-text",{staticClass:"card-num"},[t._v("￥"+t._s(a.balance)+"+"+t._s(a.point)+"积分")]):a.balance>0&&0==a.point&&a.goods_num>0?e("v-uni-text",{staticClass:"card-num"},[t._v("￥"+t._s(a.balance)+"+商品*"+t._s(a.goods_num))]):0==a.balance&&a.point>0&&a.goods_num>0?e("v-uni-text",{staticClass:"card-num"},[t._v(t._s(a.point)+"积分+商品*"+t._s(a.goods_num))]):t._e()],1),e("v-uni-view",{staticClass:"card-amount"},[t._v("x"+t._s(a.num))])],1),e("v-uni-view",{staticClass:"card-account"},[e("span",{staticClass:"goods-num"},[t._v("共计"+t._s(a.num)+"件商品")]),e("span",[t._v("应付款：￥"+t._s(a.order_total_price))])]),e("v-uni-view",{staticClass:"button"},[e("v-uni-view",{staticClass:"button-left"},[e("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeOrder(a.order_id)}}},[t._v("关闭订单")])],1),e("v-uni-view",{staticClass:"button-right"},[e("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openChoosePayment(a.order_id,a.order_total_price,a.num)}}},[t._v("支付")])],1)],1)],1)],1):1==a.status?e("v-uni-view",{staticClass:"card-item"},[e("v-uni-view",{staticClass:"card-content"},[e("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"30rpx","border-bottom":"1rpx solid #fcfcfc"}},[e("v-uni-view",{staticClass:"card-num"},[t._v("订单号: "+t._s(a.order_number))]),e("v-uni-view",{staticClass:"pay-status2"},[t._v("已完成")])],1),e("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"20rpx"}},[e("v-uni-view",{staticClass:"card-name"},[t._v(t._s(a.card_name))]),e("v-uni-view",{staticClass:"card-money"},[t._v("￥"+t._s(a.order_total_price/a.num))])],1),e("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("v-uni-view",{staticClass:"card-use"},[a.balance>0||a.point>0||a.goods_num>0?e("v-uni-text",[t._v("礼品卡权益：")]):t._e(),a.balance>0&&a.point>0&&a.goods_num>0?e("v-uni-text",{staticClass:"card-num"},[t._v("￥"+t._s(a.balance)+" + "+t._s(a.point)+"积分+商品*"+t._s(a.goods_num))]):a.balance>0&&0==a.point?e("v-uni-text",{staticClass:"card-num"},[t._v("￥"+t._s(a.balance))]):0==a.balance&&a.point>0?e("v-uni-text",{staticClass:"card-num"},[t._v(t._s(a.point)+" 积分")]):0==a.balance&&0==a.point&&a.goods_num>0?e("v-uni-text",{staticClass:"card-num"},[t._v("商品*"+t._s(a.goods_num))]):a.balance>0&&a.point>0&&0==a.goods_num?e("v-uni-text",{staticClass:"card-num"},[t._v("￥"+t._s(a.balance)+"+"+t._s(a.point)+"积分")]):a.balance>0&&0==a.point&&a.goods_num>0?e("v-uni-text",{staticClass:"card-num"},[t._v("￥"+t._s(a.balance)+"+商品*"+t._s(a.goods_num))]):0==a.balance&&a.point>0&&a.goods_num>0?e("v-uni-text",{staticClass:"card-num"},[t._v(t._s(a.point)+"积分+商品*"+t._s(a.goods_num))]):t._e()],1),e("v-uni-view",{staticClass:"card-amount"},[t._v("x"+t._s(a.num))])],1),e("v-uni-view",{staticClass:"card-account"},[e("span",{staticClass:"goods-num"},[t._v("共计"+t._s(a.num)+"件商品")]),e("span",[t._v("应付款：￥"+t._s(a.order_total_price))])]),e("v-uni-view",{staticClass:"button2"},[e("v-uni-view",{staticClass:"button3"})],1)],1)],1):2==a.status?e("v-uni-view",{staticClass:"card-item"},[e("v-uni-view",{staticClass:"card-content"},[e("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"30rpx","border-bottom":"1rpx solid #fcfcfc"}},[e("v-uni-view",{staticClass:"card-num"},[t._v("订单号: "+t._s(a.order_number))]),e("v-uni-view",{staticClass:"pay-status2"},[t._v("已关闭")])],1),e("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"20rpx"}},[e("v-uni-view",{staticClass:"card-name"},[t._v(t._s(a.card_name))]),e("v-uni-view",{staticClass:"card-money"},[t._v("￥"+t._s(a.order_total_price/a.num))])],1),e("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("v-uni-view",{staticClass:"card-use"},[a.balance>0||a.point>0||a.goods_num>0?e("v-uni-text",[t._v("礼品卡权益：")]):t._e(),a.balance>0&&a.point>0&&a.goods_num>0?e("v-uni-text",{staticClass:"card-num"},[t._v("￥"+t._s(a.balance)+" + "+t._s(a.point)+"积分+商品*"+t._s(a.goods_num))]):a.balance>0&&0==a.point?e("v-uni-text",{staticClass:"card-num"},[t._v("￥"+t._s(a.balance))]):0==a.balance&&a.point>0?e("v-uni-text",{staticClass:"card-num"},[t._v(t._s(a.point)+" 积分")]):0==a.balance&&0==a.point&&a.goods_num>0?e("v-uni-text",{staticClass:"card-num"},[t._v("商品*"+t._s(a.goods_num))]):a.balance>0&&a.point>0&&0==a.goods_num?e("v-uni-text",{staticClass:"card-num"},[t._v("￥"+t._s(a.balance)+"+"+t._s(a.point)+"积分")]):a.balance>0&&0==a.point&&a.goods_num>0?e("v-uni-text",{staticClass:"card-num"},[t._v("￥"+t._s(a.balance)+"+商品*"+t._s(a.goods_num))]):0==a.balance&&a.point>0&&a.goods_num>0?e("v-uni-text",{staticClass:"card-num"},[t._v(t._s(a.point)+"积分+商品*"+t._s(a.goods_num))]):t._e()],1),e("v-uni-view",{staticClass:"card-amount"},[t._v("x"+t._s(a.num))])],1),e("v-uni-view",{staticClass:"card-account"},[e("span",{staticClass:"goods-num"},[t._v("共计"+t._s(a.num)+"件商品")]),e("span",[t._v("应付款：￥"+t._s(a.order_total_price))])]),e("v-uni-view",{staticClass:"button2"},[e("v-uni-view",{staticClass:"button3"})],1)],1)],1):t._e()],1)})),1):e("v-uni-view",{staticClass:"card-no-data"},[e("v-uni-view",{staticClass:"card-image"},[e("v-uni-image",{attrs:{src:"https://cs.b2c.niuteam.cn/upload/uniapp/giftcard/detail/no_orders.png",mode:""}})],1),e("v-uni-view",{},[t._v("暂无数据")])],1)],1)],2),e("loading-cover",{ref:"loadingCover"}),e("ns-payment",{ref:"choosePaymentPopup",attrs:{payMoney:t.price},on:{confirm:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoBuy.apply(void 0,arguments)}}})],1)},s=[]},a0cd:function(t,a,e){"use strict";var n=e("f72b"),i=e.n(n);i.a},cdd5:function(t,a,e){"use strict";(function(t){var n=e("4ea4");e("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("53a5")),s={components:{nsPayment:i.default},data:function(){return{order_id:"",order_type:1,orderList:[],price:""}},methods:{changeState:function(t){this.list=[],this.order_type=t,this.$refs.mescroll.refresh()},getData:function(t){var a=this;this.$api.sendRequest({url:"/giftcard/api/giftcard/order",data:{page_size:t.size,page:t.num,order_type:this.order_type},success:function(e){var n=[];0==e.code&&e.data&&(n=e.data.list),t.endSuccess&&t.endSuccess(n.length),1==t.num&&(a.orderList=[]),a.orderList=a.orderList.concat(n),setTimeout((function(){a.$refs.loadingCover&&a.$refs.loadingCover.hide()}),300)},fail:function(e){t.endErr&&t.endErr(),a.$refs.loadingCover&&a.$refs.loadingCover.hide()}})},openChoosePayment:function(t,a,e){this.order_id=t,this.price=a*e,localStorage.getItem("userInfo")?(uni.setStorageSync("paySource","giftcard"),this.$refs.choosePaymentPopup.open()):this.$util.showToast({title:"您尚未登录，请先登录"}),uni.setStorageSync("paySource","giftcard"),this.$refs.choosePaymentPopup.open()},subscribeMessage:function(){this.$api.sendRequest({url:"/weapp/api/weapp/messagetmplids",data:{keywords:"ORDER_PAY,ORDER_DELIVERY,ORDER_TAKE_DELIVERY"},success:function(a){a.data.length&&uni.requestSubscribeMessage({tmplIds:a.data,success:function(t){},fail:function(a){t.log("fail",a)}})}})},gotoBuy:function(){var t=this;this.$api.sendRequest({url:"/giftcard/api/order/pay",data:{order_id:this.order_id},success:function(a){a.data&&0==a.code?(uni.setStorageSync("paySource","giftcard"),t.$refs.choosePaymentPopup.getPayInfo(a.data)):(t.isSub=!1,t.$util.showToast({title:a.message}))}})},closeOrder:function(t){var a=this;this.$api.sendRequest({url:"/giftcard/api/order/close",data:{order_id:t},success:function(t){a.$util.showToast({title:t.message}),a.$refs.mescroll.refresh()}})},orderDetail:function(){this.$util.redirectTo("/pages/order/detail/detail",{order_id:this.id})}}};a.default=s}).call(this,e("5a52")["default"])},f72b:function(t,a,e){var n=e("5214");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("4c291b69",n,!0,{sourceMap:!1,shadowMode:!1})},f841:function(t,a,e){"use strict";e.r(a);var n=e("8e14"),i=e("4fb2");for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);e("a0cd");var o,c=e("f0c5"),r=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"3911d49f",null,!1,n["a"],o);a["default"]=r.exports}}]);