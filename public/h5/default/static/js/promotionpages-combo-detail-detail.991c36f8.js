(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-combo-detail-detail"],{3022:function(t,o,a){"use strict";var e=a("c611"),i=a.n(e);i.a},"4c57":function(t,o,a){var e=a("24fb");o=e(!1),o.push([t.i,"[data-v-0223ad58] .reward-popup .uni-popup__wrapper-box{background:none!important;max-width:unset!important;max-height:unset!important}",""]),t.exports=o},"60fd":function(t,o,a){var e=a("24fb");o=e(!1),o.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.combo-package[data-v-0223ad58]{border-radius:%?10?%;margin:%?20?% %?30?%;margin-bottom:%?160?%;background:#fff}.combo-package.combo-iphonex[data-v-0223ad58]{margin-bottom:%?230?%}.combo-package .combo-package-content .combo-package-name[data-v-0223ad58]{padding:%?20?% %?30?%}.combo-package .combo-package-content .goods-info[data-v-0223ad58]{overflow:hidden;padding:%?20?% %?30?%;border-radius:%?10?%}.combo-package .combo-package-content .goods-info .goods-img[data-v-0223ad58]{display:inline-block;width:30%;text-align:center;line-height:100%;float:left}.combo-package .combo-package-content .goods-info .goods-img .img-wrap[data-v-0223ad58]{display:inline-block;width:%?180?%;height:%?180?%;text-align:center;border-radius:%?10?%}.combo-package .combo-package-content .goods-info .goods-img .img-wrap uni-image[data-v-0223ad58]{height:100%;width:100%;vertical-align:middle}.combo-package .combo-package-content .goods-info .data-info[data-v-0223ad58]{display:inline-block;width:66%;float:left;position:relative;margin-left:%?20?%;height:%?180?%}.combo-package .combo-package-content .goods-info .data-info .goods-name[data-v-0223ad58]{overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;line-height:150%}.combo-package .combo-package-content .goods-info .data-info .stock-tips[data-v-0223ad58]{position:absolute;width:100%;bottom:%?50?%;height:%?40?%;line-height:%?40?%;font-size:%?24?%}.combo-package .combo-package-content .goods-info .data-info .price-wrap[data-v-0223ad58]{height:%?50?%;line-height:%?50?%;position:absolute;width:100%;bottom:0}.combo-package .combo-package-content .goods-info .data-info .price-wrap .unit[data-v-0223ad58]{font-weight:700;font-size:%?24?%;margin-right:%?4?%}.combo-package .combo-package-content .goods-info .data-info .price-wrap .price[data-v-0223ad58]{font-weight:700;font-size:%?32?%}.combo-package .combo-package-content .goods-info .data-info .price-wrap .num[data-v-0223ad58]{float:right}.combo-package .footer[data-v-0223ad58]{width:100%;background:#fff;display:flex;justify-content:space-between;padding:%?20?% %?24?%;box-sizing:border-box;position:fixed;bottom:0;left:0}.combo-package .footer .price-wrap[data-v-0223ad58]{flex:1;text-align:right;vertical-align:middle;line-height:%?70?%;margin-right:%?30?%}.combo-package .footer .price-wrap .label[data-v-0223ad58]{font-size:%?28?%}.combo-package .footer .price-wrap .unit[data-v-0223ad58]{font-weight:700;font-size:%?24?%;margin-right:%?4?%}.combo-package .footer .price-wrap .price[data-v-0223ad58]{font-weight:700;font-size:%?32?%}.combo-package .footer .price-wrap .info-num[data-v-0223ad58]{font-size:%?20?%;color:#909399;line-height:1;margin-top:%?12?%}.combo-package .footer .footer-btn[data-v-0223ad58]{display:flex;align-items:center;justify-content:center;height:%?70?%;line-height:%?70?%}.combo-package .padding-bottom[data-v-0223ad58]{padding-bottom:%?80?%}',""]),t.exports=o},"9eb1":function(t,o,a){"use strict";var e=a("cb44"),i=a.n(e);i.a},b3a5:function(t,o,a){"use strict";a.r(o);var e=a("b620"),i=a("d7f6");for(var n in i)"default"!==n&&function(t){a.d(o,t,(function(){return i[t]}))}(n);a("9eb1"),a("3022");var c,s=a("f0c5"),r=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"0223ad58",null,!1,e["a"],c);o["default"]=r.exports},b620:function(t,o,a){"use strict";a.d(o,"b",(function(){return i})),a.d(o,"c",(function(){return n})),a.d(o,"a",(function(){return e}));var e={loadingCover:a("b1ae").default,nsLogin:a("61d0").default},i=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-uni-view",{attrs:{"data-theme":t.themeStyle}},[a("v-uni-view",{staticClass:"combo-package",class:t.isIphoneX?"combo-iphonex":""},[a("v-uni-view",{staticClass:"combo-package-content"},[a("v-uni-view",{staticClass:"combo-package-name color-title"},[t._v(t._s(t.combo.bl_name))]),t._l(t.combo.bundling_goods,(function(o,e){return a("v-uni-view",{key:e,staticClass:"goods-info",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toGoodsDetail(o.sku_id)}}},[a("v-uni-view",{staticClass:"goods-img"},[a("v-uni-view",{staticClass:"img-wrap"},[a("v-uni-image",{attrs:{src:t.$util.img(o.sku_image,{size:"mid"}),mode:"aspectFit"},on:{error:function(o){arguments[0]=o=t.$handleEvent(o),t.imageError(e)}}})],1)],1),a("v-uni-view",{staticClass:"data-info"},[a("v-uni-view",{staticClass:"goods-name"},[t._v(t._s(o.sku_name))]),a("v-uni-view",{staticClass:"price-wrap"},[a("v-uni-text",{staticClass:"unit color-base-text"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",{staticClass:"price color-base-text"},[t._v(t._s(o.price))]),a("v-uni-text",{staticClass:"num"},[t._v("x1")])],1),o.stock<t.num?a("v-uni-view",{staticClass:"stock-tips color-base-text"},[t._v("库存不足，剩余："+t._s(o.stock)),o.unit?[t._v(t._s(o.unit))]:[t._v("件")]],2):t._e()],1)],1)}))],2),a("v-uni-view",{staticClass:"footer",class:t.isIphoneX?"padding-bottom":""},[a("v-uni-view",{staticClass:"price-wrap"},[a("v-uni-text",{staticClass:"label"},[t._v("套餐价：")]),a("v-uni-text",{staticClass:"unit color-base-text"},[t._v(t._s(t.$lang("common.currencySymbol")))]),a("v-uni-text",{staticClass:"price color-base-text"},[t._v(t._s(t.packagePrice))])],1),t.isDisabled?a("v-uni-button",{staticClass:"footer-btn",attrs:{type:"primary",size:"mini"},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.comboBuy()}}},[t._v("立即购买")]):a("v-uni-button",{staticClass:"footer-btn",attrs:{disabled:!0}},[t._v("立即购买")])],1)],1),a("loading-cover",{ref:"loadingCover"}),a("ns-login",{ref:"login"})],1)},n=[]},c3c3:function(t,o,a){"use strict";var e=a("4ea4");a("acd8"),a("e25e"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,a("96cf");var i=e(a("1da1")),n=e(a("245b")),c={data:function(){return{num:1,blId:0,combo:[],packagePrice:[],saveThePrice:0,isDisabled:!1,isIphoneX:!1}},mixins:[n.default],onLoad:function(t){this.blId=t.bl_id||0,this.isIphoneX=this.$util.uniappIsIPhoneX()},onShow:function(){var t=this;if(!this.addonIsExit.bundling)return this.$util.showToast({title:"商家未开启组合套餐",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh(),this.getDetail()},onHide:function(){this.btnSwitch=!0},methods:{getDetail:function(){var t=this;this.$api.sendRequest({url:"/bundling/api/bundling/detail",data:{bl_id:this.blId},success:function(o){o.data?(t.combo=o.data,t.numberChange()):t.$util.showToast({title:o.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(o){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},toGoodsDetail:function(t){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t})},numberChange:function(t,o){var a=this;setTimeout((function(){var e=0;t&&0==a.num.length&&(a.num=1,e++),t&&(a.num<=0||isNaN(a.num))&&(a.number=1,e++),t&&(a.num=parseInt(a.num));for(var i=0,n=0;n<a.combo.bundling_goods.length;n++)i+=parseFloat(a.combo.bundling_goods[n].price),a.combo.bundling_goods[n].stock<a.num&&e++;a.isDisabled=!(e>0),a.saveThePrice=((i-a.combo.bl_price)*a.num).toFixed(2),a.packagePrice=(a.combo.bl_price*a.num).toFixed(2),o&&o()}),0)},comboBuy:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(t.isDisabled){o.next=2;break}return o.abrupt("return");case 2:t.numberChange(!0,(function(){if(uni.getStorageSync("token")){if(0!=t.btnSwitch){t.btnSwitch=!1;var o={bl_id:t.blId,num:t.num};uni.setStorage({key:"comboOrderCreateData",data:o,success:function(){t.$util.redirectTo("/promotionpages/combo/payment/payment"),t.btnSwitch=!0}})}}else t.$refs.login.open("/promotionpages/combo/detail/detail?bl_id="+t.blId)}));case 3:case"end":return o.stop()}}),o)})))()},imageError:function(t){this.combo.bundling_goods[t].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}},onShareAppMessage:function(t){var o="购买套餐，优惠多多哦",a="/promotionpages/combo/detail/detail?bl_id="+this.blId;return{title:o,path:a,success:function(t){},fail:function(t){}}}};o.default=c},c611:function(t,o,a){var e=a("4c57");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("6b3565e2",e,!0,{sourceMap:!1,shadowMode:!1})},cb44:function(t,o,a){var e=a("60fd");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("51385d1a",e,!0,{sourceMap:!1,shadowMode:!1})},d7f6:function(t,o,a){"use strict";a.r(o);var e=a("c3c3"),i=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(o,t,(function(){return e[t]}))}(n);o["default"]=i.a}}]);