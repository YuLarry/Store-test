(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-pay-result-result"],{"088b":function(e,t,i){"use strict";i.r(t);var o=i("6b48"),a=i("fbb1");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("b3da");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"aa430cf0",null,!1,o["a"],s);t["default"]=c.exports},"27a1":function(e,t,i){"use strict";i.r(t);var o=i("fc46"),a=i.n(o);for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);t["default"]=a.a},3024:function(e,t,i){var o=i("a053");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=i("4f06").default;a("5f10c908",o,!0,{sourceMap:!1,shadowMode:!1})},"6b48":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return o}));var o={nsGoodsRecommend:i("b431").default,loadingCover:i("b1ae").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container",attrs:{"data-theme":e.themeStyle}},[void 0!=e.payInfo.pay_status?[e.payInfo.pay_status?[i("v-uni-image",{staticClass:"result-image",attrs:{src:e.$util.img("upload/uniapp/pay_success.png"),mode:"widthFix"}}),i("v-uni-view",{staticClass:"msg"},[e._v(e._s(e.$lang("paymentSuccess")))]),i("v-uni-view",{staticClass:"pay-amount"},[e._v("￥"),i("v-uni-text",[e._v(e._s(e.payInfo.pay_money))])],1)]:[i("v-uni-image",{staticClass:"result-image",attrs:{src:e.$util.img("upload/uniapp/pay_fail.png"),mode:"widthFix"}}),i("v-uni-view",{staticClass:"msg"},[e._v(e._s(e.$lang("paymentFail")))])],i("v-uni-view",{staticClass:"action"},[e.token&&"recharge"==e.paySource?i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toRecharge()}}},[e._v("充值记录")]):e._e(),e.token&&"membercard"==e.paySource?i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toCard()}}},[e._v("会员卡")]):e._e(),e.token&&"presale"==e.paySource?i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPresaleOrder()}}},[e._v("查看订单")]):e._e(),e.token&&"giftcard"==e.paySource?i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toOrder()}}},[e._v("查看订单")]):e._e(),e.token&&"recharge"!=e.paySource&&"membercard"!=e.paySource&&"presale"!=e.paySource&&"giftcard"!=e.paySource?i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toOrderDetail(e.payInfo.order_id)}}},[e._v("查看订单")]):e._e(),i("v-uni-view",{staticClass:"btn go-home color-base-bg color-base-border",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goHome()}}},[e._v(e._s(e.$lang("goHome")))])],1),e.addonIsExit.memberconsume&&1==e.consumeStatus&&e.payInfo.pay_status?i("v-uni-view",{staticClass:"consume-box"},[i("v-uni-view",{staticClass:"consume-head"},[i("v-uni-view",{staticClass:"consume-line"}),i("v-uni-view",{staticClass:"consume-head-text"},[e._v("恭喜获得以下奖励")]),i("v-uni-view",{staticClass:"consume-line"}),i("v-uni-view",{staticClass:"clear"})],1),i("v-uni-view",{staticClass:"consume-list"},[e.consumeInfo.point_num>0?i("v-uni-view",{staticClass:"consume-item"},[i("v-uni-view",{staticClass:"consume-type"},[e._v("积分")]),i("v-uni-view",{staticClass:"consume-value color-base-text"},[e._v(e._s(e.consumeInfo.point_num))]),"pay"==e.consumeInfo.return_point_status?i("v-uni-view",{staticClass:"consume-btn btn color-base-bg color-base-border",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.consume("point")}}},[e._v("查看")]):e._e()],1):e._e(),e.consumeInfo.growth_num>0?i("v-uni-view",{staticClass:"consume-item"},[i("v-uni-view",{staticClass:"consume-type"},[e._v("成长值")]),i("v-uni-view",{staticClass:"consume-value color-base-text"},[e._v(e._s(e.consumeInfo.growth_num))]),"pay"==e.consumeInfo.return_point_status?i("v-uni-view",{staticClass:"consume-btn btn color-base-bg color-base-border",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.consume("growth")}}},[e._v("查看")]):e._e()],1):e._e(),e.consumeInfo.coupon_list.length>0?i("v-uni-view",{staticClass:"consume-item"},[i("v-uni-view",{staticClass:"consume-type"},[e._v("优惠券")]),i("v-uni-view",{staticClass:"consume-value color-base-text"},[e._v(e._s(e.consumeInfo.coupon_list.length))]),"pay"==e.consumeInfo.return_point_status?i("v-uni-view",{staticClass:"consume-btn btn color-base-bg color-base-border",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.consume("coupon")}}},[e._v("查看")]):e._e()],1):e._e(),i("v-uni-view",{staticClass:"clear"})],1),"receive"==e.consumeInfo.return_point_status?i("v-uni-view",{staticClass:"consume-remark"},[e._v("注：订单收货后即可获得")]):e._e(),"complete"==e.consumeInfo.return_point_status?i("v-uni-view",{staticClass:"consume-remark"},[e._v("注：订单完成后即可获得")]):e._e()],1):e._e(),i("ns-goods-recommend")]:e._e(),i("loading-cover",{ref:"loadingCover"})],2)},n=[]},"7ad1":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return o}));var o={nsLoading:i("c171").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"goods-recommend"},[e.list.length?i("v-uni-view",{attrs:{"data-theme":e.themeStyle}},[i("v-uni-view",{staticClass:"goods-recommend-title"},[i("v-uni-image",{attrs:{src:e.$util.img("/upload/uniapp/guess-like.png")}})],1),i("v-uni-view",{staticClass:"goods-list double-column"},e._l(e.list,(function(t,o){return i("v-uni-view",{key:o,staticClass:"goods-item margin-bottom",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toDetail(t)}}},[i("v-uni-view",{staticClass:"goods-img"},[i("v-uni-image",{attrs:{src:e.goodsImg(t.goods_image),mode:"widthFix","lazy-load":!0},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.imgError(o)}}}),""!=e.goodsTag(t)?i("v-uni-view",{staticClass:"color-base-bg goods-tag"},[e._v(e._s(e.goodsTag(t)))]):e._e()],1),i("v-uni-view",{staticClass:"info-wrap"},[i("v-uni-view",{staticClass:"name-wrap"},[i("v-uni-view",{staticClass:"goods-name"},[e._v(e._s(t.goods_name))])],1),i("v-uni-view",{staticClass:"pro-info"},[i("v-uni-view",{staticClass:"delete-price font-size-activity-tag color-tip"},[[i("v-uni-text",{staticClass:"unit"},[e._v(e._s(e.$lang("common.currencySymbol")))]),e._v(e._s(t.market_price>0?t.market_price:t.price))]],2),i("v-uni-view",{staticClass:"sale font-size-activity-tag color-tip"},[e._v("已售"+e._s(t.sale_num)+e._s(t.unit?t.unit:"件"))])],1),i("v-uni-view",{staticClass:"lineheight-clear"},[i("v-uni-view",{staticClass:"discount-price"},[i("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[e._v(e._s(e.$lang("common.currencySymbol")))]),i("v-uni-text",{staticClass:"price color-base-text font-size-toolbar"},[e._v(e._s(e.showPrice(t)))])],1),t.member_price&&t.member_price==e.showPrice(t)?i("v-uni-view",{staticClass:"member-price-tag"},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/index/VIP.png"),mode:"widthFix"}})],1):1==t.promotion_type?i("v-uni-view",{staticClass:"member-price-tag"},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/index/discount.png"),mode:"widthFix"}})],1):e._e()],1)],1)],1)})),1)],1):e._e(),e.showLoading&&e.load?i("v-uni-view",{staticClass:"circle-box"},[i("ns-loading")],1):e._e()],1)},n=[]},"86de":function(e,t,i){var o=i("bfe1");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=i("4f06").default;a("efbf8000",o,!0,{sourceMap:!1,shadowMode:!1})},a053:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.goods-recommend[data-v-1d80681a]{margin-top:%?74?%;width:100vw}.goods-recommend .goods-recommend-title[data-v-1d80681a]{text-align:center;margin-bottom:%?40?%}.goods-recommend .goods-recommend-title uni-image[data-v-1d80681a]{width:%?690?%;height:%?40?%}.hr-view[data-v-1d80681a]{display:flex;justify-content:center;align-items:center;max-width:100%;box-sizing:initial;font-size:%?32?%}.hr-view .hr[data-v-1d80681a]{width:36%;height:%?2?%;background:#e5e5e5}.hr-view .title[data-v-1d80681a]{padding:0 %?20?%}.goods-list.double-column[data-v-1d80681a]{display:flex;flex-wrap:wrap;margin:0 %?30?%}.goods-list.double-column .goods-item[data-v-1d80681a]{flex:1;position:relative;background-color:#fff;flex-basis:48%;max-width:calc((100% - %?30?%) / 2);margin-right:%?30?%;margin-bottom:%?20?%;border-radius:%?10?%}.goods-list.double-column .goods-item[data-v-1d80681a]:nth-child(2n){margin-right:0}.goods-list.double-column .goods-item .goods-img[data-v-1d80681a]{position:relative;overflow:hidden;padding-top:100%;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%}.goods-list.double-column .goods-item .goods-img uni-image[data-v-1d80681a]{width:100%;position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.goods-list.double-column .goods-item .goods-tag[data-v-1d80681a]{color:#fff;line-height:1;padding:%?8?% %?16?%;position:absolute;border-bottom-right-radius:%?10?%;top:0;left:0;font-size:%?22?%}.goods-list.double-column .goods-item .goods-tag-img[data-v-1d80681a]{position:absolute;border-top-left-radius:%?10?%;width:%?80?%;height:%?80?%;top:0;left:0;z-index:5;overflow:hidden}.goods-list.double-column .goods-item .goods-tag-img uni-image[data-v-1d80681a]{width:100%;height:100%}.goods-list.double-column .goods-item .info-wrap[data-v-1d80681a]{padding:0 %?26?% %?26?% %?26?%}.goods-list.double-column .goods-item .goods-name[data-v-1d80681a]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-top:%?20?%;height:%?68?%}.goods-list.double-column .goods-item .discount-price[data-v-1d80681a]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%}.goods-list.double-column .goods-item .discount-price .unit[data-v-1d80681a]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info[data-v-1d80681a]{display:flex;margin-top:%?16?%}.goods-list.double-column .goods-item .pro-info .delete-price[data-v-1d80681a]{text-decoration:line-through;flex:1}.goods-list.double-column .goods-item .pro-info .delete-price .unit[data-v-1d80681a]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-1d80681a]{line-height:1}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-1d80681a]:nth-child(2){text-align:right}.goods-list.double-column .goods-item .member-price-tag[data-v-1d80681a]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.double-column .goods-item .member-price-tag uni-image[data-v-1d80681a]{width:100%}',""]),e.exports=t},b3da:function(e,t,i){"use strict";var o=i("86de"),a=i.n(o);a.a},b431:function(e,t,i){"use strict";i.r(t);var o=i("7ad1"),a=i("27a1");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("cd43");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"1d80681a",null,!1,o["a"],s);t["default"]=c.exports},bfe1:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.consume-box[data-v-aa430cf0]{padding:%?20?%;margin-top:%?60?%;width:100%}.consume-box .consume-line[data-v-aa430cf0]{background:#eee;float:left;width:20%;text-align:center;height:%?2?%;box-sizing:border-box;margin:0 5%}.consume-box .consume-head-text[data-v-aa430cf0]{width:40%;float:left;text-align:center;margin-top:%?-26?%;color:#303133;font-size:%?32?%}.consume-box .consume-item[data-v-aa430cf0]{background-color:#fff;float:left;width:29%;margin-left:3.25%;text-align:center;margin-top:%?20?%;padding:%?20?% 0;color:#303133;font-size:%?28?%}.consume-box .consume-item .consume-value[data-v-aa430cf0]{font-size:%?32?%}.consume-box .consume-item .consume-btn[data-v-aa430cf0]{color:#fff;width:%?100?%;border-radius:%?40?%;margin:%?4?% auto}.consume-box .consume-remark[data-v-aa430cf0]{color:#909399;font-size:%?24?%;padding:%?10?% %?20?%}.clear[data-v-aa430cf0]{clear:both}.container[data-v-aa430cf0]{padding-top:%?94?%;display:flex;flex-direction:column;align-items:center}.container .result-image[data-v-aa430cf0]{width:%?168?%;height:%?120?%}.container .msg[data-v-aa430cf0]{font-size:%?32?%;margin-top:%?66?%;height:%?32?%;line-height:%?32?%}.container .pay-amount[data-v-aa430cf0]{font-size:%?30?%;margin-top:%?30?%;font-weight:600;height:%?50?%;line-height:%?50?%}.container .pay-amount uni-text[data-v-aa430cf0]{font-size:%?50?%}.container .action[data-v-aa430cf0]{width:100%;height:%?80?%;display:flex;justify-content:center;box-sizing:border-box;margin-top:%?90?%}.container .action .btn[data-v-aa430cf0]{font-size:%?28?%;width:%?240?%;height:%?80?%;line-height:%?76?%;text-align:center;border-radius:%?40?%;border:1px solid #909399;box-sizing:border-box}.container .action .btn[data-v-aa430cf0]:last-child{color:#fff;margin-left:%?100?%}',""]),e.exports=t},c2fa:function(e,t,i){"use strict";var o=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(i("245b")),n={data:function(){return{payInfo:{},outTradeNo:"",token:null,paySource:"",consumeInfo:{},consumeStatus:0}},mixins:[a.default],onLoad:function(e){e.code&&(this.outTradeNo=e.code),this.paySource=uni.getStorageSync("paySource")},onShow:function(){this.$langConfig.refresh(),uni.getStorageSync("token")&&(this.token=uni.getStorageSync("token")),this.getPayInfo(),this.getConsume()},methods:{consume:function(e){switch(e){case"point":this.$util.redirectTo("/otherpages/member/point_detail/point_detail",{});break;case"growth":this.$util.redirectTo("/otherpages/member/level/level",{});break;case"coupon":this.$util.redirectTo("/otherpages/member/coupon/coupon",{});break;default:this.$util.redirectTo("/pages/member/index/index",{},"reLaunch")}},getConsume:function(){var e=this;this.$api.sendRequest({url:"/memberconsume/api/config/info",data:{out_trade_no:this.outTradeNo},success:function(t){if(t.code>=0&&t.data){var i=t.data.value;t.data.is_use&&(i.point_num>0||i.growth_num>0||i.coupon_list.length)&&(e.consumeStatus=t.data.is_use,e.consumeInfo=t.data.value)}},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getPayInfo:function(){var e=this;this.$api.sendRequest({url:"/api/pay/info",data:{out_trade_no:this.outTradeNo},success:function(t){t.code>=0&&t.data?(e.payInfo=t.data,e.$refs.loadingCover&&e.$refs.loadingCover.hide()):(e.$util.showToast({title:"未获取到支付信息！"}),setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}),1500))},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},goHome:function(){this.$util.redirectTo("/pages/index/index/index",{},"reLaunch")},toOrderDetail:function(e){2==this.payInfo.order_type?this.$util.redirectTo("/pages/order/detail_pickup/detail_pickup",{order_id:e},"redirectTo"):3==this.payInfo.order_type?this.$util.redirectTo("/pages/order/detail_local_delivery/detail_local_delivery",{order_id:e},"redirectTo"):4==this.payInfo.order_type?this.$util.redirectTo("/otherpages/order/detail_virtual/detail_virtual",{order_id:e},"redirectTo"):this.$util.redirectTo("/pages/order/detail/detail",{order_id:e},"redirectTo")},toOrder:function(e){this.$util.redirectTo("/promotionpages/giftcard/order/order","redirectTo"),uni.setStorageSync("paySource","giftcard")},toRecharge:function(){this.$util.redirectTo("/otherpages/recharge/order_list/order_list",{},"redirectTo"),uni.setStorageSync("paySource","")},toCard:function(){this.$util.redirectTo("/otherpages/member/card/card",{},"redirectTo"),uni.setStorageSync("paySource","")},toPresaleOrder:function(){this.$util.redirectTo("/promotionpages/presale/order_list/order_list",{},"redirectTo"),uni.setStorageSync("paySource","")}}};t.default=n},cd43:function(e,t,i){"use strict";var o=i("3024"),a=i.n(o);a.a},fbb1:function(e,t,i){"use strict";i.r(t);var o=i("c2fa"),a=i.n(o);for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);t["default"]=a.a},fc46:function(e,t,i){"use strict";var o=i("4ea4");i("99af"),i("a9e3"),i("d3b7"),i("acd8"),i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(i("245b")),n=o(i("c171")),s={name:"ns-goods-recommend",components:{nsLoading:n.default},data:function(){return{list:[],page:1,isAll:!0,isClick:!0,showLoading:!1}},mixins:[a.default],props:{isLike:{type:Boolean,default:!0},size:{type:[Number,String],default:10},auto:{type:Boolean,default:!0},load:{type:Boolean,default:!0}},mounted:function(){this.auto&&this.getLikeList()},methods:{init:function(){this.list=[],this.page=1},toDetail:function(e){var t={sku_id:e.sku_id};this.$util.redirectTo("/pages/goods/detail/detail",t)},getLikeList:function(e){var t=this,i=this;if(this.isClick&&this.isAll)return this.isClick=!1,this.page>1&&(this.showLoading=!0),new Promise((function(o,a){i.$api.sendRequest({url:"/api/goodssku/recommend",data:{page:t.page,page_size:t.auto?t.size:e},success:function(e){t.showLoading=!1,t.isClick=!0,0==e.code&&(1==t.page&&(t.list=[]),t.list=t.list.concat(e.data.list),t.list.length==e.data.count&&(t.isAll=!1),t.page+=1,o(e.data.list))}})}))},goodsImg:function(e){var t=e.split(",");return t[0]?this.$util.img(t[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},imgError:function(e){this.list[e].goods_image=this.$util.getDefaultImage().default_goods_img},showPrice:function(e){var t=e.discount_price;return e.member_price&&parseFloat(e.member_price)<parseFloat(t)&&(t=e.member_price),t},goodsTag:function(e){return e.label_name||""}}};t.default=s}}]);