(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_promotion-groupbuy-list"],{"013c":function(t,e,i){"use strict";i("c975"),i("a9e3"),i("acd8"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},a={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var i=function i(a){a.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",i),t.$emit("scrolldone",o))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",i)}})}}}};e.default=a},"038f":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".bg[data-v-33f194be]{width:100%;height:%?158?%;background-color:#fff;position:fixed;left:0;\r\ntop:%?88?%;\n}.ns-adv[data-v-33f194be]{background:#fff;height:%?300?%;border-radius:%?10?%\r\n\t/* padding: 8rpx 24rpx 24rpx; */}.ns-adv .image-box[data-v-33f194be]{width:100%;height:100%;border-radius:%?10?%}.ns-adv uni-image[data-v-33f194be]{width:100%;height:100%;border-radius:%?10?%}",""]),t.exports=e},"0e1c":function(t,e,i){"use strict";i.r(e);var o=i("2798"),a=i("f21f");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("2e51");var r,s=i("f0c5"),d=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"0a0fb015",null,!1,o["a"],r);e["default"]=d.exports},1210:function(t,e,i){var o=i("a920");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("891219d8",o,!0,{sourceMap:!1,shadowMode:!1})},"1d9a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[String,Boolean],defalut:!1},inverted:{type:[String,Boolean],defalut:!1},circle:{type:[String,Boolean],defalut:!1},mark:{type:[String,Boolean],defalut:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};e.default=o},2798:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("v-uni-view",{staticClass:"uni-tag",class:[!0===t.disabled||"true"===t.disabled?"uni-tag--disabled":"",!0===t.inverted||"true"===t.inverted?"uni-tag--inverted":"",!0===t.circle||"true"===t.circle?"uni-tag--circle":"",!0===t.mark||"true"===t.mark?"uni-tag--mark":"","uni-tag--"+t.size,"uni-tag--"+t.type],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[t._v(t._s(t.text))]):t._e()},n=[]},"2e51":function(t,e,i){"use strict";var o=i("1210"),a=i.n(o);a.a},"3b11":function(t,e,i){var o=i("038f");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("0db75226",o,!0,{sourceMap:!1,shadowMode:!1})},"3d2c":function(t,e,i){"use strict";i.r(e);var o=i("745a"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a},4020:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},n=[]},"4f7e":function(t,e,i){"use strict";var o=i("e215"),a=i.n(o);a.a},6214:function(t,e,i){"use strict";i.r(e);var o=i("f06c"),a=i("c55a");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("4f7e");var r,s=i("f0c5"),d=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"7a54b132",null,!1,o["a"],r);e["default"]=d.exports},"6d42":function(t,e,i){"use strict";i.r(e);var o=i("4020"),a=i("8f28");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);var r,s=i("f0c5"),d=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=d.exports},"745a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"ns-advert",props:{keyword:{type:String}},data:function(){return{advList:[]}},created:function(){this.getAdvList()},methods:{getAdvList:function(){var t=this;this.$api.sendRequest({url:"/api/adv/detail",data:{keyword:this.keyword},success:function(e){if(0==e.code){var i=e.data.adv_list;for(var o in i)i[o].adv_url&&(i[o].adv_url=JSON.parse(i[o].adv_url));t.advList=e.data.adv_list}}})},jumppage:function(t){this.$util.diyRedirectTo(t)}}};e.default=o},"8f28":function(t,e,i){"use strict";i.r(e);var o=i("013c"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a},"9e62":function(t,e,i){"use strict";var o=i("4ea4");i("99af"),i("4160"),i("c975"),i("ac1f"),i("1276"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(i("0e1c")),n={components:{uniTag:a.default},data:function(){return{dataList:[],memberId:0,mpShareData:null}},onLoad:function(t){var e=this;if(this.$util.getMemberId().then((function(t){e.memberId=t})).catch((function(t){})),t.source_member&&uni.setStorageSync("source_member",t.source_member),t.scene){var i=decodeURIComponent(t.scene);i=i.split("&"),i.length&&i.forEach((function(t){-1!=t.indexOf("sku_id")&&(e.skuId=t.split("-")[1]),-1!=t.indexOf("m")&&uni.setStorageSync("source_member",t.split("-")[1]),-1!=t.indexOf("is_test")&&uni.setStorageSync("is_test",1)}))}},onShow:function(){var t=this;if(!this.addonIsExist.groupbuy)return this.$util.showToast({title:"团购插件未安装",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index",{},"redirectTo")}),2e3);uni.getStorageSync("token")&&uni.getStorageSync("source_member")&&this.$util.onSourceMember(uni.getStorageSync("source_member"))},onShareAppMessage:function(){return this.mpShareData.appMessage},onShareTimeline:function(){return this.mpShareData.timeLine},methods:{getData:function(t){var e=this;this.$api.sendRequest({url:"/groupbuy/api/goods/page",data:{page_size:t.size,page:t.num},success:function(i){var o=[],a=i.message;0==i.code&&i.data?o=i.data.list:e.$util.showToast({title:a}),t.endSuccess(o.length),1==t.num&&(e.dataList=[]),e.dataList=e.dataList.concat(o),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(){t.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},toDetail:function(t){this.$util.redirectTo("/pages_promotion/groupbuy/detail",{groupbuy_id:t.groupbuy_id})},imgError:function(t){this.goodsList[t].goods_image=this.$util.getDefaultImage().goods,this.$forceUpdate()},goodsImg:function(t){var e=t.split(",");return e[0]?this.$util.img(e[0],{size:"mid"}):this.$util.getDefaultImage().goods},goodsTag:function(t){return t.label_name||""}}};e.default=n},a449:function(t,e,i){"use strict";var o=i("3b11"),a=i.n(o);a.a},a920:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".uni-tag[data-v-0a0fb015]{box-sizing:border-box;padding:0 %?32?%;height:%?60?%;line-height:calc(%?60?% - 2px);font-size:%?28?%;display:inline-flex;align-items:center;color:#333;border-radius:%?6?%;background-color:#f8f8f8;border:1px solid #f8f8f8}.uni-tag--circle[data-v-0a0fb015]{border-radius:%?30?%}.uni-tag--mark[data-v-0a0fb015]{border-radius:0 %?30?% %?30?% 0}.uni-tag--disabled[data-v-0a0fb015]{opacity:.5}.uni-tag--small[data-v-0a0fb015]{height:%?40?%;padding:0 %?16?%;line-height:calc(%?40?% - 2px);font-size:%?24?%}.uni-tag--primary[data-v-0a0fb015]{color:#fff;background-color:#007aff;border:1px solid #007aff}.uni-tag--primary.uni-tag--inverted[data-v-0a0fb015]{color:#007aff;background-color:#fff;border:1px solid #007aff}.uni-tag--success[data-v-0a0fb015]{color:#fff;background-color:#4cd964;border:1px solid #4cd964}.uni-tag--success.uni-tag--inverted[data-v-0a0fb015]{color:#4cd964;background-color:#fff;border:1px solid #4cd964}.uni-tag--warning[data-v-0a0fb015]{color:#fff;background-color:#f0ad4e;border:1px solid #f0ad4e}.uni-tag--warning.uni-tag--inverted[data-v-0a0fb015]{color:#f0ad4e;background-color:#fff;border:1px solid #f0ad4e}.uni-tag--error[data-v-0a0fb015]{color:#fff;background-color:#dd524d;border:1px solid #dd524d}.uni-tag--error.uni-tag--inverted[data-v-0a0fb015]{color:#dd524d;background-color:#fff;border:1px solid #dd524d}.uni-tag--inverted[data-v-0a0fb015]{color:#333;background-color:#fff;border:1px solid #f8f8f8}",""]),t.exports=e},a959:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.ns-adv[data-v-7a54b132]{margin:%?20?% %?30?%;border-radius:%?10?%;overflow:hidden;line-height:1}.ns-adv uni-image[data-v-7a54b132]{width:100%}.lineheight-clear[data-v-7a54b132]{line-height:1!important}.goods-list.single-column .goods-item[data-v-7a54b132]{padding:%?26?%;background:#fff;margin:%?20?% %?30?%;border-radius:%?10?%;display:flex;position:relative}.goods-list.single-column .goods-item .goods-img[data-v-7a54b132]{width:%?200?%;height:%?200?%;overflow:hidden;border-radius:%?10?%;margin-right:%?20?%}.goods-list.single-column .goods-item .goods-img uni-image[data-v-7a54b132]{width:100%;height:100%}.goods-list.single-column .goods-item .goods-tag[data-v-7a54b132]{color:#fff;line-height:1;padding:%?8?% %?12?%;position:absolute;border-top-left-radius:%?10?%;border-bottom-right-radius:%?10?%;top:%?26?%;left:%?26?%;font-size:%?22?%}.goods-list.single-column .goods-item .info-wrap[data-v-7a54b132]{flex:1;display:flex;flex-direction:column}.goods-list.single-column .goods-item .name-wrap[data-v-7a54b132]{flex:1}.goods-list.single-column .goods-item .goods-name[data-v-7a54b132]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:%?68?%}.goods-list.single-column .goods-item .introduction[data-v-7a54b132]{line-height:1;margin-top:%?10?%}.goods-list.single-column .goods-item .discount-price[data-v-7a54b132]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%;color:var(--price-color)}.goods-list.single-column .goods-item .discount-price .unit[data-v-7a54b132]{margin-right:%?6?%}.goods-list.single-column .goods-item .pro-info[data-v-7a54b132]{position:relative;margin-top:%?16?%}.goods-list.single-column .goods-item .pro-info .delete-price[data-v-7a54b132]{text-decoration:line-through;flex:1;display:flex;align-items:flex-end}.goods-list.single-column .goods-item .pro-info .delete-price .unit[data-v-7a54b132]{margin-right:%?6?%}.goods-list.single-column .goods-item .pro-info > uni-view[data-v-7a54b132]{line-height:1}.goods-list.single-column .goods-item .pro-info > uni-view[data-v-7a54b132]:nth-child(2){position:absolute;right:0;bottom:0}.goods-list.single-column .goods-item .member-price-tag[data-v-7a54b132]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.single-column .goods-item .member-price-tag uni-image[data-v-7a54b132]{width:100%}',""]),t.exports=e},b27e:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.advList.length?i("v-uni-view",[t.advList.length?i("v-uni-swiper",{staticClass:"ns-adv",attrs:{"indicator-dots":t.advList.length>1,"indicator-active-color":"#ffffff",autoplay:!0,interval:3e3,duration:1e3}},t._l(t.advList,(function(e,o){return i("v-uni-swiper-item",{key:o,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumppage(e.adv_url)}}},[i("v-uni-view",{staticClass:"image-box",style:{"background-color":e.background}},[i("v-uni-image",{attrs:{src:t.$util.img(e.adv_image)}})],1)],1)})),1):t._e()],1):t._e()},n=[]},c267:function(t,e,i){"use strict";i.r(e);var o=i("b27e"),a=i("3d2c");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("a449");var r,s=i("f0c5"),d=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"33f194be",null,!1,o["a"],r);e["default"]=d.exports},c55a:function(t,e,i){"use strict";i.r(e);var o=i("9e62"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a},e215:function(t,e,i){var o=i("a959");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("6196f518",o,!0,{sourceMap:!1,shadowMode:!1})},f06c:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var o={pageMeta:i("6d42").default,nsAdv:i("c267").default,nsEmpty:i("2c4c").default,loadingCover:i("790a").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-meta",{attrs:{"page-style":t.themeColor}}),i("v-uni-view",[t.addonIsExist.groupbuy?i("mescroll-uni",{ref:"mescroll",attrs:{size:10},on:{getData:function(e){arguments[0]=e=t.$handleEvent(e),t.getData.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"list"},slot:"list"},[i("v-uni-view",{staticClass:"ns-adv"},[i("ns-adv",{attrs:{keyword:"NS_GROUPBUY"}})],1),t.dataList.length?i("v-uni-view",{staticClass:"goods-list single-column"},t._l(t.dataList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"goods-item margin-bottom"},[i("v-uni-view",{staticClass:"goods-img",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}},[i("v-uni-image",{attrs:{src:t.goodsImg(e.goods_image),mode:"widthFix"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.imgError(o)}}}),""!=t.goodsTag(e)?i("v-uni-view",{staticClass:"color-base-bg goods-tag"},[t._v(t._s(t.goodsTag(e)))]):t._e()],1),i("v-uni-view",{staticClass:"info-wrap"},[i("v-uni-view",{staticClass:"name-wrap"},[i("v-uni-view",{staticClass:"goods-name",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}},[t._v(t._s(e.goods_name))]),i("v-uni-view",{staticClass:"introduction font-size-activity-tag color-tip"},[t._v("库存"+t._s(e.goods_stock)+"件")])],1),i("v-uni-view",{staticClass:"lineheight-clear"},[i("v-uni-view",{staticClass:"discount-price"},[i("v-uni-text",{staticClass:"unit  price-style small"},[t._v(t._s(t.$lang("common.currencySymbol")))]),i("v-uni-text",{staticClass:"price  price-style large"},[t._v(t._s(parseFloat(e.groupbuy_price).toFixed(2).split(".")[0]))]),i("v-uni-text",{staticClass:"unit  price-style small"},[t._v("."+t._s(parseFloat(e.groupbuy_price).toFixed(2).split(".")[1]))])],1)],1),i("v-uni-view",{staticClass:"pro-info"},[i("v-uni-view",{staticClass:"delete-price font-size-activity-tag color-tip price-font"},[[i("v-uni-text",{staticClass:"unit"},[t._v(t._s(t.$lang("common.currencySymbol")))]),t._v(t._s(e.price))]],2),i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e)}}},[i("v-uni-button",{attrs:{type:"primary",size:"mini"}},[t._v("去团购")])],1)],1)],1)],1)})),1):t._e(),t.dataList.length?t._e():i("v-uni-view",[i("ns-empty",{attrs:{fixed:!1,text:"暂无团购"}})],1)],1)],2):t._e(),i("loading-cover",{ref:"loadingCover"})],1)],1)},n=[]},f21f:function(t,e,i){"use strict";i.r(e);var o=i("1d9a"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a}}]);