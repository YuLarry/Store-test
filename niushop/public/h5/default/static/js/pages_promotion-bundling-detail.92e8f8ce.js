(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_promotion-bundling-detail"],{"013c":function(t,o,e){"use strict";e("c975"),e("a9e3"),e("acd8"),e("ac1f"),e("5319"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},a={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,o=getCurrentPages()[0];this.$pageVm=o.$vm||o,uni.onWindowResize((function(o){t.$emit("resize",o)})),this.$pageVm.$on("hook:onPageScroll",(function(o){t.$emit("scroll",o)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,o){t.setStyle({pullToRefresh:{support:o,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,o=String(this.scrollTop);if(-1!==o.indexOf("rpx")&&(o=uni.upx2px(o.replace("rpx",""))),o=parseFloat(o),!isNaN(o)){var e=function e(a){a.scrollTop===o&&(t.$pageVm.$off("hook:onPageScroll",e),t.$emit("scrolldone",i))};uni.pageScrollTo({scrollTop:o,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",e)}})}}}};o.default=a},"31b8":function(t,o,e){"use strict";e.r(o);var i=e("b471"),a=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(o,t,(function(){return i[t]}))}(n);o["default"]=a.a},"36b0":function(t,o,e){"use strict";e.r(o);var i=e("5de5"),a=e("31b8");for(var n in a)"default"!==n&&function(t){e.d(o,t,(function(){return a[t]}))}(n);e("5a1c");var c,r=e("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"544764b9",null,!1,i["a"],c);o["default"]=s.exports},"5a1c":function(t,o,e){"use strict";var i=e("d9dc"),a=e.n(i);a.a},"5de5":function(t,o,e){"use strict";e.d(o,"b",(function(){return a})),e.d(o,"c",(function(){return n})),e.d(o,"a",(function(){return i}));var i={pageMeta:e("6d42").default,loadingCover:e("d1a6").default,nsLogin:e("5a49").default},a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",[e("page-meta",{attrs:{"page-style":t.themeColor}}),e("v-uni-view",[e("v-uni-view",{staticClass:"combo-package",class:t.isIphoneX?"combo-iphonex":""},[e("v-uni-view",{staticClass:"combo-package-content"},[e("v-uni-view",{staticClass:"combo-package-name color-title"},[t._v(t._s(t.combo.bl_name))]),t._l(t.combo.bundling_goods,(function(o,i){return e("v-uni-view",{key:i,staticClass:"goods-info",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGoodsDetail(o)}}},[e("v-uni-view",{staticClass:"goods-img"},[e("v-uni-view",{staticClass:"img-wrap"},[e("v-uni-image",{attrs:{src:t.$util.img(o.sku_image,{size:"mid"}),mode:"aspectFit"},on:{error:function(o){arguments[0]=o=t.$handleEvent(o),t.imageError(i)}}})],1)],1),e("v-uni-view",{staticClass:"data-info"},[e("v-uni-view",{staticClass:"goods-name"},[t._v(t._s(o.sku_name))]),e("v-uni-view",{staticClass:"price-wrap"},[e("v-uni-text",{staticClass:"unit price-style small"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",{staticClass:"price price-style large"},[t._v(t._s(parseFloat(o.price).toFixed(2).split(".")[0]))]),e("v-uni-text",{staticClass:"unit price-style small"},[t._v("."+t._s(parseFloat(o.price).toFixed(2).split(".")[1]))]),e("v-uni-text",{staticClass:"num"},[t._v("x1")])],1),o.stock<t.num?e("v-uni-view",{staticClass:"stock-tips color-base-text"},[t._v("库存不足，剩余："+t._s(o.stock)),o.unit?[t._v(t._s(o.unit))]:[t._v("件")]],2):t._e()],1)],1)}))],2),e("v-uni-view",{staticClass:"footer",class:t.isIphoneX?"padding-bottom":""},[e("v-uni-view",{staticClass:"price-wrap"},[e("v-uni-text",{staticClass:"label"},[t._v("套餐价：")]),e("v-uni-text",{staticClass:"unit price-color"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",{staticClass:"price price-color"},[t._v(t._s(parseFloat(t.packagePrice).toFixed(2).split(".")[0]))]),e("v-uni-text",{staticClass:"unit price-color"},[t._v("."+t._s(parseFloat(t.packagePrice).toFixed(2).split(".")[1]))])],1),t.isDisabled?e("v-uni-button",{staticClass:"footer-btn",attrs:{type:"primary",size:"mini"},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.comboBuy()}}},[t._v("立即购买")]):e("v-uni-button",{staticClass:"footer-btn",attrs:{disabled:!0}},[t._v("立即购买")])],1)],1),e("loading-cover",{ref:"loadingCover"}),e("ns-login",{ref:"login"})],1)],1)},n=[]},"6d42":function(t,o,e){"use strict";e.r(o);var i=e("dfd6"),a=e("8f28");for(var n in a)"default"!==n&&function(t){e.d(o,t,(function(){return a[t]}))}(n);var c,r=e("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);o["default"]=s.exports},"8f28":function(t,o,e){"use strict";e.r(o);var i=e("013c"),a=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(o,t,(function(){return i[t]}))}(n);o["default"]=a.a},b471:function(t,o,e){"use strict";var i=e("4ea4");e("acd8"),e("e25e"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,e("96cf");var a=i(e("1da1")),n={data:function(){return{num:1,blId:0,combo:[],packagePrice:[],saveThePrice:0,isDisabled:!1,isIphoneX:!1}},onLoad:function(t){this.blId=t.bl_id||0,this.isIphoneX=this.$util.uniappIsIPhoneX()},onShow:function(){var t=this;if(!this.addonIsExist.bundling)return this.$util.showToast({title:"商家未开启组合套餐",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index",{},"redirectTo")}),2e3);this.getDetail()},onHide:function(){this.btnSwitch=!0},methods:{getDetail:function(){var t=this;this.$api.sendRequest({url:"/bundling/api/bundling/detail",data:{bl_id:this.blId},success:function(o){o.data?(t.combo=o.data,t.numberChange()):t.$util.showToast({title:o.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(o){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},toGoodsDetail:function(t){this.$util.redirectTo("/pages/goods/detail",{goods_id:t.goods_id})},numberChange:function(t,o){var e=this;setTimeout((function(){var i=0;t&&0==e.num.length&&(e.num=1,i++),t&&(e.num<=0||isNaN(e.num))&&(e.number=1,i++),t&&(e.num=parseInt(e.num));for(var a=0,n=0;n<e.combo.bundling_goods.length;n++)a+=parseFloat(e.combo.bundling_goods[n].price),e.combo.bundling_goods[n].stock<e.num&&i++;e.isDisabled=!(i>0),e.saveThePrice=((a-e.combo.bl_price)*e.num).toFixed(2),e.packagePrice=(e.combo.bl_price*e.num).toFixed(2),o&&o()}),0)},comboBuy:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(t.isDisabled){o.next=2;break}return o.abrupt("return");case 2:t.numberChange(!0,(function(){if(uni.getStorageSync("token")){if(0!=t.btnSwitch){t.btnSwitch=!1;var o={bl_id:t.blId,num:t.num};uni.setStorage({key:"comboOrderCreateData",data:o,success:function(){t.$util.redirectTo("/pages_promotion/bundling/payment"),t.btnSwitch=!0}})}}else t.$refs.login.open("/pages_promotion/bundling/detail?bl_id="+t.blId)}));case 3:case"end":return o.stop()}}),o)})))()},imageError:function(t){this.combo.bundling_goods[t].sku_image=this.$util.getDefaultImage().goods,this.$forceUpdate()}},onShareAppMessage:function(t){var o="购买套餐，优惠多多哦",e="/pages_promotion/combo/detail?bl_id="+this.blId;return{title:o,path:e,success:function(t){},fail:function(t){}}}};o.default=n},c774:function(t,o,e){var i=e("24fb");o=i(!1),o.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.combo-package[data-v-544764b9]{border-radius:%?10?%;margin:%?20?% %?30?%;margin-bottom:%?160?%;background:#fff}.combo-package.combo-iphonex[data-v-544764b9]{margin-bottom:%?230?%}.combo-package .combo-package-content .combo-package-name[data-v-544764b9]{padding:%?20?% %?30?%}.combo-package .combo-package-content .goods-info[data-v-544764b9]{overflow:hidden;padding:%?20?% %?30?%;border-radius:%?10?%}.combo-package .combo-package-content .goods-info .goods-img[data-v-544764b9]{display:inline-block;width:30%;text-align:center;line-height:100%;float:left}.combo-package .combo-package-content .goods-info .goods-img .img-wrap[data-v-544764b9]{display:inline-block;width:%?180?%;height:%?180?%;text-align:center;border-radius:%?10?%}.combo-package .combo-package-content .goods-info .goods-img .img-wrap uni-image[data-v-544764b9]{height:100%;width:100%;vertical-align:middle}.combo-package .combo-package-content .goods-info .data-info[data-v-544764b9]{display:inline-block;width:66%;float:left;position:relative;margin-left:%?20?%;height:%?180?%}.combo-package .combo-package-content .goods-info .data-info .goods-name[data-v-544764b9]{overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;line-height:150%}.combo-package .combo-package-content .goods-info .data-info .stock-tips[data-v-544764b9]{position:absolute;width:100%;bottom:%?50?%;height:%?40?%;line-height:%?40?%;font-size:%?24?%}.combo-package .combo-package-content .goods-info .data-info .price-wrap[data-v-544764b9]{height:%?50?%;line-height:%?50?%;position:absolute;width:100%;bottom:0}.combo-package .combo-package-content .goods-info .data-info .price-wrap .unit[data-v-544764b9]{font-weight:700;font-size:%?24?%;margin-right:%?4?%}.combo-package .combo-package-content .goods-info .data-info .price-wrap .price[data-v-544764b9]{font-weight:700;font-size:%?32?%}.combo-package .combo-package-content .goods-info .data-info .price-wrap .num[data-v-544764b9]{float:right}.combo-package .footer[data-v-544764b9]{width:100%;background:#fff;display:flex;justify-content:space-between;padding:%?20?% %?24?%;box-sizing:border-box;position:fixed;bottom:0;left:0}.combo-package .footer .price-wrap[data-v-544764b9]{flex:1;text-align:right;vertical-align:middle;line-height:%?70?%;margin-right:%?30?%}.combo-package .footer .price-wrap .label[data-v-544764b9]{font-size:%?28?%}.combo-package .footer .price-wrap .unit[data-v-544764b9]{font-weight:700;font-size:%?24?%;margin-right:%?4?%}.combo-package .footer .price-wrap .price[data-v-544764b9]{font-weight:700;font-size:%?32?%}.combo-package .footer .price-wrap .info-num[data-v-544764b9]{font-size:%?20?%;color:#909399;line-height:1;margin-top:%?12?%}.combo-package .footer .footer-btn[data-v-544764b9]{display:flex;align-items:center;justify-content:center;height:%?70?%;line-height:%?70?%}.combo-package .padding-bottom[data-v-544764b9]{padding-bottom:%?80?%}',""]),t.exports=o},d9dc:function(t,o,e){var i=e("c774");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("57f3d4cb",i,!0,{sourceMap:!1,shadowMode:!1})},dfd6:function(t,o,e){"use strict";var i;e.d(o,"b",(function(){return a})),e.d(o,"c",(function(){return n})),e.d(o,"a",(function(){return i}));var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},n=[]}}]);