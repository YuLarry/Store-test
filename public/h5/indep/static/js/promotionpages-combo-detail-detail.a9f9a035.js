(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-combo-detail-detail"],{1255:function(t,e,o){var a=o("b353");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=o("4f06").default;i("54577e28",a,!0,{sourceMap:!1,shadowMode:!1})},5465:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.combo-package[data-v-0223ad58]{border-radius:%?10?%;margin:%?20?% %?30?%;margin-bottom:%?160?%;background:#fff}.combo-package.combo-iphonex[data-v-0223ad58]{margin-bottom:%?230?%}.combo-package .combo-package-content .combo-package-name[data-v-0223ad58]{padding:%?20?% %?30?%}.combo-package .combo-package-content .goods-info[data-v-0223ad58]{overflow:hidden;padding:%?20?% %?30?%;border-radius:%?10?%}.combo-package .combo-package-content .goods-info .goods-img[data-v-0223ad58]{display:inline-block;width:30%;text-align:center;line-height:100%;float:left}.combo-package .combo-package-content .goods-info .goods-img .img-wrap[data-v-0223ad58]{display:inline-block;width:%?180?%;height:%?180?%;text-align:center;border-radius:%?10?%}.combo-package .combo-package-content .goods-info .goods-img .img-wrap uni-image[data-v-0223ad58]{height:100%;width:100%;vertical-align:middle}.combo-package .combo-package-content .goods-info .data-info[data-v-0223ad58]{display:inline-block;width:66%;float:left;position:relative;margin-left:%?20?%;height:%?180?%}.combo-package .combo-package-content .goods-info .data-info .goods-name[data-v-0223ad58]{overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;line-height:150%}.combo-package .combo-package-content .goods-info .data-info .stock-tips[data-v-0223ad58]{position:absolute;width:100%;bottom:%?50?%;height:%?40?%;line-height:%?40?%;font-size:%?24?%}.combo-package .combo-package-content .goods-info .data-info .price-wrap[data-v-0223ad58]{height:%?50?%;line-height:%?50?%;position:absolute;width:100%;bottom:0}.combo-package .combo-package-content .goods-info .data-info .price-wrap .unit[data-v-0223ad58]{font-weight:700;font-size:%?24?%;margin-right:%?4?%}.combo-package .combo-package-content .goods-info .data-info .price-wrap .price[data-v-0223ad58]{font-weight:700;font-size:%?32?%}.combo-package .combo-package-content .goods-info .data-info .price-wrap .num[data-v-0223ad58]{float:right}.combo-package .footer[data-v-0223ad58]{width:100%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?20?% %?24?%;box-sizing:border-box;position:fixed;bottom:0;left:0}.combo-package .footer .price-wrap[data-v-0223ad58]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;vertical-align:middle;line-height:%?70?%;margin-right:%?30?%}.combo-package .footer .price-wrap .label[data-v-0223ad58]{font-size:%?28?%}.combo-package .footer .price-wrap .unit[data-v-0223ad58]{font-weight:700;font-size:%?24?%;margin-right:%?4?%}.combo-package .footer .price-wrap .price[data-v-0223ad58]{font-weight:700;font-size:%?32?%}.combo-package .footer .price-wrap .info-num[data-v-0223ad58]{font-size:%?20?%;color:#909399;line-height:1;margin-top:%?12?%}.combo-package .footer .footer-btn[data-v-0223ad58]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?70?%;line-height:%?70?%}.combo-package .padding-bottom[data-v-0223ad58]{padding-bottom:%?80?%}',""]),t.exports=e},"850c":function(t,e,o){"use strict";var a=o("8ef0"),i=o.n(a);i.a},"8ddb":function(t,e,o){"use strict";var a=o("1255"),i=o.n(a);i.a},"8ef0":function(t,e,o){var a=o("5465");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=o("4f06").default;i("297f284a",a,!0,{sourceMap:!1,shadowMode:!1})},b353:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,"[data-v-0223ad58] .reward-popup .uni-popup__wrapper-box{background:none!important;max-width:unset!important;max-height:unset!important}",""]),t.exports=e},c6b0:function(t,e,o){"use strict";o.r(e);var a=o("cd09"),i=o.n(a);for(var n in a)"default"!==n&&function(t){o.d(e,t,(function(){return a[t]}))}(n);e["default"]=i.a},cd09:function(t,e,o){"use strict";var a=o("4ea4");o("b680"),o("acd8"),o("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("96cf");var i=a(o("1da1")),n=a(o("b6ac")),c={data:function(){return{num:1,blId:0,combo:[],packagePrice:[],saveThePrice:0,isDisabled:!1,isIphoneX:!1}},mixins:[n.default],onLoad:function(t){this.blId=t.bl_id||0,this.isIphoneX=this.$util.uniappIsIPhoneX()},onShow:function(){var t=this;if(!this.addonIsExit.bundling)return this.$util.showToast({title:"商家未开启组合套餐",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh(),this.getDetail()},onHide:function(){this.btnSwitch=!0},methods:{getDetail:function(){var t=this;this.$api.sendRequest({url:"/bundling/api/bundling/detail",data:{bl_id:this.blId},success:function(e){e.data?(t.combo=e.data,t.numberChange()):t.$util.showToast({title:e.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},toGoodsDetail:function(t){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t})},numberChange:function(t,e){var o=this;setTimeout((function(){var a=0;t&&0==o.num.length&&(o.num=1,a++),t&&(o.num<=0||isNaN(o.num))&&(o.number=1,a++),t&&(o.num=parseInt(o.num));for(var i=0,n=0;n<o.combo.bundling_goods.length;n++)i+=parseFloat(o.combo.bundling_goods[n].price),o.combo.bundling_goods[n].stock<o.num&&a++;o.isDisabled=!(a>0),o.saveThePrice=((i-o.combo.bl_price)*o.num).toFixed(2),o.packagePrice=(o.combo.bl_price*o.num).toFixed(2),e&&e()}),0)},comboBuy:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isDisabled){e.next=2;break}return e.abrupt("return");case 2:t.numberChange(!0,(function(){if(uni.getStorageSync("token")){if(0!=t.btnSwitch){t.btnSwitch=!1;var e={bl_id:t.blId,num:t.num};uni.setStorage({key:"comboOrderCreateData",data:e,success:function(){t.$util.redirectTo("/promotionpages/combo/payment/payment"),t.btnSwitch=!0}})}}else t.$refs.login.open("/promotionpages/combo/detail/detail?bl_id="+t.blId)}));case 3:case"end":return e.stop()}}),e)})))()},imageError:function(t){this.combo.bundling_goods[t].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}},onShareAppMessage:function(t){var e="购买套餐，优惠多多哦",o="/promotionpages/combo/detail/detail?bl_id="+this.blId;return{title:e,path:o,success:function(t){},fail:function(t){}}}};e.default=c},e807:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return a}));var a={loadingCover:o("4c1d").default,nsLogin:o("2bc6").default},i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{attrs:{"data-theme":t.themeStyle}},[o("v-uni-view",{staticClass:"combo-package",class:t.isIphoneX?"combo-iphonex":""},[o("v-uni-view",{staticClass:"combo-package-content"},[o("v-uni-view",{staticClass:"combo-package-name color-title"},[t._v(t._s(t.combo.bl_name))]),t._l(t.combo.bundling_goods,(function(e,a){return o("v-uni-view",{key:a,staticClass:"goods-info",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.toGoodsDetail(e.sku_id)}}},[o("v-uni-view",{staticClass:"goods-img"},[o("v-uni-view",{staticClass:"img-wrap"},[o("v-uni-image",{attrs:{src:t.$util.img(e.sku_image,{size:"mid"}),mode:"aspectFit"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.imageError(a)}}})],1)],1),o("v-uni-view",{staticClass:"data-info"},[o("v-uni-view",{staticClass:"goods-name"},[t._v(t._s(e.sku_name))]),o("v-uni-view",{staticClass:"price-wrap"},[o("v-uni-text",{staticClass:"unit color-base-text"},[t._v(t._s(t.$lang("common.currencySymbol")))]),o("v-uni-text",{staticClass:"price color-base-text"},[t._v(t._s(e.price))]),o("v-uni-text",{staticClass:"num"},[t._v("x1")])],1),e.stock<t.num?o("v-uni-view",{staticClass:"stock-tips color-base-text"},[t._v("库存不足，剩余："+t._s(e.stock)),e.unit?[t._v(t._s(e.unit))]:[t._v("件")]],2):t._e()],1)],1)}))],2),o("v-uni-view",{staticClass:"footer",class:t.isIphoneX?"padding-bottom":""},[o("v-uni-view",{staticClass:"price-wrap"},[o("v-uni-text",{staticClass:"label"},[t._v("套餐价：")]),o("v-uni-text",{staticClass:"unit color-base-text"},[t._v(t._s(t.$lang("common.currencySymbol")))]),o("v-uni-text",{staticClass:"price color-base-text"},[t._v(t._s(t.packagePrice))])],1),t.isDisabled?o("v-uni-button",{staticClass:"footer-btn",attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.comboBuy()}}},[t._v("立即购买")]):o("v-uni-button",{staticClass:"footer-btn",attrs:{disabled:!0}},[t._v("立即购买")])],1)],1),o("loading-cover",{ref:"loadingCover"}),o("ns-login",{ref:"login"})],1)},n=[]},fbec:function(t,e,o){"use strict";o.r(e);var a=o("e807"),i=o("c6b0");for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);o("850c"),o("8ddb");var c,s=o("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"0223ad58",null,!1,a["a"],c);e["default"]=r.exports}}]);