(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-member-collection"],{"013c":function(t,e,o){"use strict";o("c975"),o("a9e3"),o("acd8"),o("ac1f"),o("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},s={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var o=function o(s){s.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",o),t.$emit("scrolldone",i))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",o)}})}}}};e.default=s},"04db":function(t,e,o){"use strict";o.r(e);var i=o("d100"),s=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"0acc":function(t,e,o){"use strict";o.r(e);var i=o("1a03"),s=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"1a03":function(t,e,o){"use strict";var i=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(o("9a1a")),n=i(o("a7f9")),a={components:{nsGoodsRecommend:s.default},mixins:[n.default],data:function(){return{token:null}},onShow:function(){var t=this;uni.getStorageSync("token")?(this.token=uni.getStorageSync("token"),this.$refs.mescroll&&this.$refs.mescroll.refresh()):setTimeout((function(){t.$refs.login.open("/pages_tool/member/collection")}))},watch:{storeToken:function(t,e){t&&(this.token=t,this.$refs.mescroll.refresh())}},computed:{storeToken:function(){return this.$store.state.token}}};e.default=a},"1a45":function(t,e,o){var i=o("25c3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=o("4f06").default;s("403a6ac0",i,!0,{sourceMap:!1,shadowMode:!1})},"1d3d":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.goods-recommend[data-v-3844d752]{margin-top:%?74?%;width:100vw}.goods-recommend .goods-recommend-title[data-v-3844d752]{text-align:center;margin-bottom:%?40?%}.goods-recommend .goods-recommend-title uni-image[data-v-3844d752]{width:%?690?%;height:%?40?%}.hr-view[data-v-3844d752]{display:flex;justify-content:center;align-items:center;max-width:100%;box-sizing:initial;font-size:%?32?%}.hr-view .hr[data-v-3844d752]{width:36%;height:%?2?%;background:#e5e5e5}.hr-view .title[data-v-3844d752]{padding:0 %?20?%}.goods-list.double-column[data-v-3844d752]{display:flex;justify-content:space-between;flex-wrap:wrap;margin:0 %?24?%}.goods-list.double-column .goods-item[data-v-3844d752]{position:relative;background-color:#fff;width:calc(50% - %?10?%);margin-bottom:%?20?%;border-radius:%?10?%}.goods-list.double-column .goods-item[data-v-3844d752]:nth-child(2n){margin-right:0}.goods-list.double-column .goods-item .goods-img[data-v-3844d752]{position:relative;overflow:hidden;padding-top:100%;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%}.goods-list.double-column .goods-item .goods-img uni-image[data-v-3844d752]{width:100%;position:absolute;top:0;bottom:0;left:0;right:0}.goods-list.double-column .goods-item .goods-tag[data-v-3844d752]{color:#fff;line-height:1;padding:%?8?% %?16?%;position:absolute;border-bottom-right-radius:%?10?%;top:0;left:0;font-size:%?22?%}.goods-list.double-column .goods-item .goods-tag-img[data-v-3844d752]{position:absolute;border-top-left-radius:%?10?%;width:%?80?%;height:%?80?%;top:0;left:0;z-index:5;overflow:hidden}.goods-list.double-column .goods-item .goods-tag-img uni-image[data-v-3844d752]{width:100%;height:100%}.goods-list.double-column .goods-item .info-wrap[data-v-3844d752]{padding:0 %?26?% %?26?% %?26?%}.goods-list.double-column .goods-item .goods-name[data-v-3844d752]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-top:%?20?%;height:%?68?%}.goods-list.double-column .goods-item .discount-price[data-v-3844d752]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%;color:var(--price-color)}.goods-list.double-column .goods-item .discount-price .unit[data-v-3844d752]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info[data-v-3844d752]{display:flex;margin-top:auto}.goods-list.double-column .goods-item .pro-info .delete-price[data-v-3844d752]{text-decoration:line-through;flex:1}.goods-list.double-column .goods-item .pro-info .delete-price .unit[data-v-3844d752]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-3844d752]{line-height:1}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-3844d752]:nth-child(2){text-align:right}.goods-list.double-column .goods-item .member-price-tag[data-v-3844d752]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.double-column .goods-item .member-price-tag uni-image[data-v-3844d752]{width:100%}',""]),t.exports=e},"25a7":function(t,e,o){"use strict";o.r(e);var i=o("f815"),s=o("0acc");for(var n in s)"default"!==n&&function(t){o.d(e,t,(function(){return s[t]}))}(n);o("f7e7");var a,l=o("f0c5"),d=Object(l["a"])(s["default"],i["b"],i["c"],!1,null,"7c8bee59",null,!1,i["a"],a);e["default"]=d.exports},"25c3":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-7c8bee59] .fixed{position:relative;top:0}[data-v-7c8bee59] .empty{margin-top:0!important}.lineheight-clear[data-v-7c8bee59]{line-height:1}.goods_list[data-v-7c8bee59]{width:100%;padding:%?20?% 0;padding-top:0;box-sizing:border-box}.goods_list .goods_li[data-v-7c8bee59]{height:%?200?%;background:#fff;overflow:hidden;border-radius:%?10?%;display:flex;justify-content:space-between;margin:%?20?% %?30?%;padding:%?30?%}.goods_list .goods_li .pic[data-v-7c8bee59]{width:%?200?%;height:%?200?%;box-sizing:border-box;border-radius:%?10?%;overflow:hidden}.goods_list .goods_li .pic uni-image[data-v-7c8bee59]{width:100%;height:100%}.goods_list .goods_li .goods_info[data-v-7c8bee59]{flex:1;height:100%;padding-left:%?20?%;box-sizing:border-box;display:flex;justify-content:space-between;flex-direction:column}.goods_list .goods_li .goods_name[data-v-7c8bee59]{width:100%;height:%?80?%;line-height:1.5;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.goods_list .goods_li .goods_opection[data-v-7c8bee59]{width:100%;height:%?80?%;display:flex;justify-content:space-between;align-items:flex-end}.goods_list .goods_li .goods_opection .right[data-v-7c8bee59]{display:flex;align-items:flex-end}.goods_list .goods_li .goods_opection .symbol[data-v-7c8bee59]{font-size:%?24?%;color:var(--price-color)}.goods_list .goods_li .goods_opection .price[data-v-7c8bee59]{font-size:%?32?%;color:var(--price-color)}.goods_list .goods_li .goods_opection .cars[data-v-7c8bee59]{padding:%?0?% %?15?%;border:%?1?% solid #eee;border-radius:%?32?%}.goods_list .goods_li .goods_opection uni-icon[data-v-7c8bee59]{font-size:%?24?%}.goods_list .goods_li .goods_opection .alike[data-v-7c8bee59]{padding:%?0?% %?15?%;border:%?1?% solid #eee;border-radius:%?24?%;margin-left:%?20?%}.empty[data-v-7c8bee59]{width:100%;display:flex;flex-direction:column;align-items:center;padding:%?20?%;box-sizing:border-box;margin-top:%?50?%}',""]),t.exports=e},"2d75":function(t,e,o){"use strict";var i;o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},n=[]},"4e45":function(t,e,o){var i=o("1d3d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=o("4f06").default;s("79e07a63",i,!0,{sourceMap:!1,shadowMode:!1})},"6d42":function(t,e,o){"use strict";o.r(e);var i=o("2d75"),s=o("8f28");for(var n in s)"default"!==n&&function(t){o.d(e,t,(function(){return s[t]}))}(n);var a,l=o("f0c5"),d=Object(l["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=d.exports},"8f28":function(t,e,o){"use strict";o.r(e);var i=o("013c"),s=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},"9a1a":function(t,e,o){"use strict";o.r(e);var i=o("e648"),s=o("04db");for(var n in s)"default"!==n&&function(t){o.d(e,t,(function(){return s[t]}))}(n);o("e6c6");var a,l=o("f0c5"),d=Object(l["a"])(s["default"],i["b"],i["c"],!1,null,"3844d752",null,!1,i["a"],a);e["default"]=d.exports},a7f9:function(t,e,o){"use strict";o("99af"),o("4de4"),o("acd8"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{collectionList:[],isShowEmpty:!1}},methods:{toDetail:function(t){this.$util.redirectTo("/pages/goods/detail",{goods_id:t.goods_id})},getData:function(t){var e=this;this.isShowEmpty=!1;var o="/api/goodscollect/page",i=[];this.$api.sendRequest({url:o,data:{page_size:t.size,page:t.num},async:!1}).then((function(o){for(var s=o.data.list,n=0;n<s.length;n++)s[n].composite_score=Math.floor((parseFloat(s[n].shop_desccredit)+parseFloat(s[n].shop_servicecredit)+parseFloat(s[n].shop_deliverycredit))/3).toFixed(1);i=i.concat(s),1==t.num&&(e.collectionList=[]),e.collectionList=e.collectionList.concat(s),t.endSuccess(i.length),e.$refs.loadingCover&&e.$refs.loadingCover.hide(),e.isShowEmpty=!0}))},listenRefresh:function(t){this.$refs.goodsRecommend.init()},deleteItem:function(t){var e=this;this.$api.sendRequest({url:"/api/goodscollect/delete",data:{goods_id:t},success:function(o){if(0==o.code){e.$util.showToast({title:"删除成功"});var i=e.collectionList,s=i.filter((function(e){return e.goods_id!=t}));e.collectionList=s}else e.$util.showToast({title:o.message})}})},imageError:function(t){this.collectionList[t].logo=this.$util.getDefaultImage().goods,this.$forceUpdate()},goodsImageError:function(t){this.collectionList[t].sku_image=this.$util.getDefaultImage().goods,this.$forceUpdate()}}};e.default=i},d100:function(t,e,o){"use strict";var i=o("4ea4");o("99af"),o("a9e3"),o("d3b7"),o("acd8"),o("ac1f"),o("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(o("a250")),n={name:"ns-goods-recommend",components:{nsLoading:s.default},data:function(){return{list:[],page:1,isAll:!0,isClick:!0,showLoading:!1}},props:{isLike:{type:Boolean,default:!0},size:{type:[Number,String],default:10},auto:{type:Boolean,default:!0},load:{type:Boolean,default:!0},route:{type:String,default:""}},mounted:function(){this.auto&&this.getLikeList()},methods:{init:function(){this.list=[],this.page=1},toDetail:function(t){var e={goods_id:t.goods_id};this.$util.redirectTo("/pages/goods/detail",e)},getLikeList:function(t){var e=this,o=this;if(this.isClick&&this.isAll)return this.isClick=!1,this.page>1&&(this.showLoading=!0),new Promise((function(i,s){o.$api.sendRequest({url:"/api/goodssku/recommend",data:{page:e.page,page_size:e.auto?e.size:t,route:e.route},success:function(t){e.showLoading=!1,e.isClick=!0,0==t.code&&(1==e.page&&(e.list=[]),e.list=e.list.concat(t.data.list),e.list.length==t.data.count&&(e.isAll=!1),e.page+=1,i(t.data.list))}})}))},goodsImg:function(t){var e=t.split(",");return e[0]?this.$util.img(e[0],{size:"mid"}):this.$util.getDefaultImage().goods},imgError:function(t){this.list[t].goods_image=this.$util.getDefaultImage().goods},showPrice:function(t){var e=t.discount_price;return t.member_price&&parseFloat(t.member_price)<parseFloat(e)&&(e=t.member_price),e},goodsTag:function(t){return t.label_name||""}}};e.default=n},e648:function(t,e,o){"use strict";o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return i}));var i={nsLoading:o("a250").default},s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"goods-recommend"},[t.list.length?o("v-uni-view",[o("v-uni-view",{staticClass:"goods-recommend-title"},[o("v-uni-image",{attrs:{src:t.$util.img("public/uniapp/goods/guess-like.png")}})],1),o("v-uni-view",{staticClass:"goods-list double-column"},t._l(t.list,(function(e,i){return o("v-uni-view",{key:i,staticClass:"goods-item margin-bottom",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.toDetail(e)}}},[o("v-uni-view",{staticClass:"goods-img"},[o("v-uni-image",{attrs:{src:t.goodsImg(e.goods_image),mode:"widthFix","lazy-load":!0},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.imgError(i)}}}),""!=t.goodsTag(e)?o("v-uni-view",{staticClass:"color-base-bg goods-tag"},[t._v(t._s(t.goodsTag(e)))]):t._e()],1),o("v-uni-view",{staticClass:"info-wrap"},[o("v-uni-view",{staticClass:"name-wrap"},[o("v-uni-view",{staticClass:"goods-name"},[t._v(t._s(e.goods_name))])],1),o("v-uni-view",{staticClass:"lineheight-clear"},[o("v-uni-view",{staticClass:"discount-price"},[o("v-uni-text",{staticClass:"unit  price-style small"},[t._v(t._s(t.$lang("common.currencySymbol")))]),o("v-uni-text",{staticClass:"price  price-style large"},[t._v(t._s(parseFloat(t.showPrice(e)).toFixed(2).split(".")[0]))]),o("v-uni-text",{staticClass:"unit  price-style small"},[t._v("."+t._s(parseFloat(t.showPrice(e)).toFixed(2).split(".")[1]))])],1),e.member_price&&e.member_price==t.showPrice(e)?o("v-uni-view",{staticClass:"member-price-tag"},[o("v-uni-image",{attrs:{src:t.$util.img("public/uniapp/index/VIP.png"),mode:"widthFix"}})],1):1==e.promotion_type?o("v-uni-view",{staticClass:"member-price-tag"},[o("v-uni-image",{attrs:{src:t.$util.img("public/uniapp/index/discount.png"),mode:"widthFix"}})],1):t._e()],1),o("v-uni-view",{staticClass:"pro-info"},[o("v-uni-view",{staticClass:"delete-price font-size-activity-tag color-tip price-font"},[[o("v-uni-text",{staticClass:"unit"},[t._v(t._s(t.$lang("common.currencySymbol")))]),t._v(t._s(e.market_price>0?e.market_price:e.price))]],2),e.sale_show?o("v-uni-view",{staticClass:"sale font-size-activity-tag color-tip"},[t._v("已售"+t._s(e.sale_num)+t._s(e.unit?e.unit:"件"))]):t._e()],1)],1)],1)})),1)],1):t._e(),t.showLoading&&t.load?o("v-uni-view",{staticClass:"circle-box"},[o("ns-loading")],1):t._e()],1)},n=[]},e6c6:function(t,e,o){"use strict";var i=o("4e45"),s=o.n(i);s.a},f7e7:function(t,e,o){"use strict";var i=o("1a45"),s=o.n(i);s.a},f815:function(t,e,o){"use strict";o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return i}));var i={pageMeta:o("6d42").default,nsEmpty:o("a358").default,nsGoodsRecommend:o("9a1a").default,nsLogin:o("5a49").default,loadingCover:o("d1a6").default},s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("page-meta",{attrs:{"page-style":t.themeColor}}),o("v-uni-view",[t.token?o("mescroll-uni",{ref:"mescroll",staticClass:"member-point",attrs:{size:8},on:{getData:function(e){arguments[0]=e=t.$handleEvent(e),t.getData.apply(void 0,arguments)},listenRefresh:function(e){arguments[0]=e=t.$handleEvent(e),t.listenRefresh.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"goods_list",attrs:{slot:"list"},slot:"list"},[t.collectionList.length>0?t._l(t.collectionList,(function(e,i){return o("v-uni-view",{key:i,staticClass:"goods_li margin-top",on:{click:function(o){o.stopPropagation(),arguments[0]=o=t.$handleEvent(o),t.toDetail(e)}}},[o("v-uni-view",{staticClass:"pic"},[o("v-uni-image",{attrs:{src:t.$util.img(e.goods_image.split(",")[0],{size:"mid"}),mode:"aspectFill"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.goodsImageError(i)}}})],1),o("v-uni-view",{staticClass:"goods_info"},[o("v-uni-view",{staticClass:"goods_name font-size-base"},[t._v(t._s(e.sku_name))]),o("v-uni-view",{staticClass:"goods_opection"},[o("v-uni-view",{staticClass:"left  lineheight-clear "},[o("v-uni-text",{staticClass:"symbol price-style small"},[t._v("￥")]),o("v-uni-text",{staticClass:"price price-style large"},[t._v(t._s(parseFloat(e.discount_price).toFixed(2).split(".")[0]))]),o("v-uni-text",{staticClass:"symbol price-style small"},[t._v("."+t._s(parseFloat(e.discount_price).toFixed(2).split(".")[1]))])],1),o("v-uni-view",{staticClass:"right"},[o("v-uni-view",{staticClass:"cars",on:{click:function(o){o.stopPropagation(),arguments[0]=o=t.$handleEvent(o),t.deleteItem(e.goods_id)}}},[o("v-uni-view",{staticClass:"icon iconfont icon-icon7"})],1)],1)],1)],1)],1)})):t._e(),0==t.collectionList.length&&t.isShowEmpty?o("ns-empty",{attrs:{text:"暂无关注的商品",isIndex:!1}}):t._e(),o("ns-goods-recommend",{ref:"goodsRecommend"})],2)],1):t._e(),o("ns-login",{ref:"login"}),o("loading-cover",{ref:"loadingCover"})],1)],1)},n=[]}}]);