(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-member-collection-collection"],{"1a62":function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return o}));var o={nsEmpty:i("1928").default,nsGoodsRecommend:i("d6df").default,loadingCover:i("30be").default},s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{attrs:{"data-theme":e.themeStyle}},[i("mescroll-uni",{ref:"mescroll",staticClass:"member-point",attrs:{size:8},on:{getData:function(t){arguments[0]=t=e.$handleEvent(t),e.getData.apply(void 0,arguments)},listenRefresh:function(t){arguments[0]=t=e.$handleEvent(t),e.listenRefresh.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"goods_list",attrs:{slot:"list"},slot:"list"},[e.collectionList.length>0?e._l(e.collectionList,(function(t,o){return i("v-uni-view",{key:o,staticClass:"goods_li margin-top",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.toDetail(t.sku_id)}}},[i("v-uni-view",{staticClass:"pic"},[i("v-uni-image",{attrs:{src:e.$util.img(t.sku_image,{size:"mid"}),mode:"aspectFill"},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.goodsImageError(o)}}})],1),i("v-uni-view",{staticClass:"goods_info"},[i("v-uni-view",{staticClass:"goods_name font-size-base"},[e._v(e._s(t.sku_name))]),i("v-uni-view",{staticClass:"goods_opection"},[i("v-uni-view",{staticClass:"left color-base-text lineheight-clear"},[i("v-uni-text",{staticClass:"symbol"},[e._v("￥")]),i("v-uni-text",{staticClass:"price"},[e._v(e._s(t.discount_price))])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"cars",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.deleteItem(t.goods_id)}}},[i("v-uni-view",{staticClass:"icon iconfont iconicon7"})],1)],1)],1)],1)],1)})):e._e(),0==e.collectionList.length&&e.isShowEmpty?i("ns-empty",{attrs:{text:"暂无关注的商品",fixed:!1,isIndex:!1}}):e._e(),i("ns-goods-recommend",{ref:"goodsRecommend",attrs:{auto:!1,load:!1}})],2)],1),i("loading-cover",{ref:"loadingCover"})],1)},a=[]},2321:function(e,t,i){"use strict";var o=i("4ea4");i("99af"),i("a9e3"),i("d3b7"),i("acd8"),i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(i("ccd8")),a=o(i("6b69")),n={name:"ns-goods-recommend",components:{nsLoading:a.default},data:function(){return{list:[],page:1,isAll:!0,isClick:!0,showLoading:!1}},mixins:[s.default],props:{isLike:{type:Boolean,default:!0},size:{type:[Number,String],default:10},auto:{type:Boolean,default:!0},load:{type:Boolean,default:!0}},mounted:function(){this.auto&&this.getLikeList()},methods:{init:function(){this.list=[],this.page=1},toDetail:function(e){var t={sku_id:e.sku_id};this.$util.redirectTo("/pages/goods/detail/detail",t)},getLikeList:function(e){var t=this,i=this;if(this.isClick&&this.isAll)return this.isClick=!1,this.page>1&&(this.showLoading=!0),new Promise((function(o,s){i.$api.sendRequest({url:"/api/goodssku/recommend",data:{page:t.page,page_size:t.auto?t.size:e},success:function(e){t.showLoading=!1,t.isClick=!0,0==e.code&&(1==t.page&&(t.list=[]),t.list=t.list.concat(e.data.list),t.list.length==e.data.count&&(t.isAll=!1),t.page+=1,o(e.data.list))}})}))},goodsImg:function(e){var t=e.split(",");return t[0]?this.$util.img(t[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},imgError:function(e){this.list[e].goods_image=this.$util.getDefaultImage().default_goods_img},showPrice:function(e){var t=e.discount_price;return e.member_price&&parseFloat(e.member_price)<parseFloat(t)&&(t=e.member_price),t},goodsTag:function(e){switch(e.recommend_way){case 1:return"新品";case 2:return"精品";case 3:return"推荐";default:return""}}}};t.default=n},"240c":function(e,t,i){"use strict";i.r(t);var o=i("1a62"),s=i("a55e");for(var a in s)"default"!==a&&function(e){i.d(t,e,(function(){return s[e]}))}(a);i("61ac");var n,d=i("f0c5"),l=Object(d["a"])(s["default"],o["b"],o["c"],!1,null,"b6ee787a",null,!1,o["a"],n);t["default"]=l.exports},"3b86":function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return o}));var o={nsLoading:i("6b69").default},s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"goods-recommend"},[e.list.length?i("v-uni-view",{attrs:{"data-theme":e.themeStyle}},[i("v-uni-view",{staticClass:"goods-recommend-title"},[i("v-uni-image",{attrs:{src:e.$util.img("/upload/uniapp/guess-like.png")}})],1),i("v-uni-view",{staticClass:"goods-list double-column"},e._l(e.list,(function(t,o){return i("v-uni-view",{key:o,staticClass:"goods-item margin-bottom",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toDetail(t)}}},[i("v-uni-view",{staticClass:"goods-img"},[i("v-uni-image",{attrs:{src:e.goodsImg(t.goods_image),mode:"widthFix"},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.imgError(o)}}}),""!=e.goodsTag(t)?i("v-uni-view",{staticClass:"color-base-bg goods-tag"},[e._v(e._s(e.goodsTag(t)))]):e._e()],1),i("v-uni-view",{staticClass:"info-wrap"},[i("v-uni-view",{staticClass:"name-wrap"},[i("v-uni-view",{staticClass:"goods-name"},[e._v(e._s(t.goods_name))])],1),i("v-uni-view",{staticClass:"pro-info"},[i("v-uni-view",{staticClass:"delete-price font-size-activity-tag color-tip"},[[i("v-uni-text",{staticClass:"unit"},[e._v(e._s(e.$lang("common.currencySymbol")))]),e._v(e._s(t.market_price>0?t.market_price:t.price))]],2),i("v-uni-view",{staticClass:"sale font-size-activity-tag color-tip"},[e._v("已售"+e._s(t.sale_num)+e._s(t.unit?t.unit:"件"))])],1),i("v-uni-view",{staticClass:"lineheight-clear"},[i("v-uni-view",{staticClass:"discount-price"},[i("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[e._v(e._s(e.$lang("common.currencySymbol")))]),i("v-uni-text",{staticClass:"price color-base-text font-size-toolbar"},[e._v(e._s(e.showPrice(t)))])],1),t.member_price&&t.member_price==e.showPrice(t)?i("v-uni-view",{staticClass:"member-price-tag"},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/index/VIP.png"),mode:"widthFix"}})],1):1==t.promotion_type?i("v-uni-view",{staticClass:"member-price-tag"},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/index/discount.png"),mode:"widthFix"}})],1):e._e()],1)],1)],1)})),1)],1):e._e(),e.showLoading&&e.load?i("v-uni-view",{staticClass:"circle-box"},[i("ns-loading")],1):e._e()],1)},a=[]},"50fa":function(e,t,i){"use strict";var o=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(i("d6df")),a=o(i("dc3c")),n=o(i("ccd8")),d={components:{nsGoodsRecommend:s.default},mixins:[a.default,n.default],data:function(){return{}},onShow:function(){this.$langConfig.refresh()}};t.default=d},5231:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-b6ee787a] .fixed{position:relative;top:0}[data-v-b6ee787a] .empty{margin-top:0!important}.lineheight-clear[data-v-b6ee787a]{line-height:1}.goods_list[data-v-b6ee787a]{width:100%;padding:%?20?% 0;padding-top:0;-webkit-box-sizing:border-box;box-sizing:border-box}.goods_list .goods_li[data-v-b6ee787a]{height:%?200?%;background:#fff;overflow:hidden;-webkit-border-radius:%?10?%;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:%?20?% %?30?%;padding:%?30?%}.goods_list .goods_li .pic[data-v-b6ee787a]{width:%?200?%;height:%?200?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:%?10?%;border-radius:%?10?%;overflow:hidden}.goods_list .goods_li .pic uni-image[data-v-b6ee787a]{width:100%;height:100%}.goods_list .goods_li .goods_info[data-v-b6ee787a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%;padding-left:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.goods_list .goods_li .goods_name[data-v-b6ee787a]{width:100%;height:%?80?%;line-height:1.5;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.goods_list .goods_li .goods_opection[data-v-b6ee787a]{width:100%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.goods_list .goods_li .goods_opection .right[data-v-b6ee787a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.goods_list .goods_li .goods_opection .symbol[data-v-b6ee787a]{font-size:%?24?%}.goods_list .goods_li .goods_opection .price[data-v-b6ee787a]{font-size:%?32?%}.goods_list .goods_li .goods_opection .cars[data-v-b6ee787a]{padding:%?0?% %?15?%;border:%?1?% solid #eee;-webkit-border-radius:%?32?%;border-radius:%?32?%}.goods_list .goods_li .goods_opection uni-icon[data-v-b6ee787a]{font-size:%?24?%}.goods_list .goods_li .goods_opection .alike[data-v-b6ee787a]{padding:%?0?% %?15?%;border:%?1?% solid #eee;-webkit-border-radius:%?24?%;border-radius:%?24?%;margin-left:%?20?%}.empty[data-v-b6ee787a]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?50?%}',""]),e.exports=t},"61ac":function(e,t,i){"use strict";var o=i("64d8"),s=i.n(o);s.a},"64d8":function(e,t,i){var o=i("5231");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var s=i("4f06").default;s("b8bb6348",o,!0,{sourceMap:!1,shadowMode:!1})},"659f":function(e,t,i){"use strict";i.r(t);var o=i("2321"),s=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);t["default"]=s.a},"66b2":function(e,t,i){"use strict";var o=i("f028"),s=i.n(o);s.a},a55e:function(e,t,i){"use strict";i.r(t);var o=i("50fa"),s=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);t["default"]=s.a},d6df:function(e,t,i){"use strict";i.r(t);var o=i("3b86"),s=i("659f");for(var a in s)"default"!==a&&function(e){i.d(t,e,(function(){return s[e]}))}(a);i("66b2");var n,d=i("f0c5"),l=Object(d["a"])(s["default"],o["b"],o["c"],!1,null,"0e6cc038",null,!1,o["a"],n);t["default"]=l.exports},d8c9:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.goods-recommend[data-v-0e6cc038]{margin-top:%?74?%;width:100vw}.goods-recommend .goods-recommend-title[data-v-0e6cc038]{text-align:center;margin-bottom:%?30?%}.goods-recommend .goods-recommend-title uni-image[data-v-0e6cc038]{width:%?306?%;height:%?62?%}.hr-view[data-v-0e6cc038]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;max-width:100%;-webkit-box-sizing:content-box;box-sizing:content-box;font-size:%?32?%}.hr-view .hr[data-v-0e6cc038]{width:36%;height:%?2?%;background:#e5e5e5}.hr-view .title[data-v-0e6cc038]{padding:0 %?20?%}.goods-list.double-column[data-v-0e6cc038]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin:0 %?30?%}.goods-list.double-column .goods-item[data-v-0e6cc038]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;background-color:#fff;-webkit-flex-basis:48%;flex-basis:48%;max-width:calc((100% - %?30?%) / 2);margin-right:%?30?%;margin-bottom:%?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.goods-list.double-column .goods-item[data-v-0e6cc038]:nth-child(2n){margin-right:0}.goods-list.double-column .goods-item .goods-img[data-v-0e6cc038]{position:relative;overflow:hidden;padding-top:100%;-webkit-border-top-left-radius:%?10?%;border-top-left-radius:%?10?%;-webkit-border-top-right-radius:%?10?%;border-top-right-radius:%?10?%}.goods-list.double-column .goods-item .goods-img uni-image[data-v-0e6cc038]{width:100%;position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.goods-list.double-column .goods-item .goods-tag[data-v-0e6cc038]{color:#fff;line-height:1;padding:%?8?% %?16?%;position:absolute;-webkit-border-bottom-right-radius:%?10?%;border-bottom-right-radius:%?10?%;top:0;left:0;font-size:%?22?%}.goods-list.double-column .goods-item .goods-tag-img[data-v-0e6cc038]{position:absolute;-webkit-border-top-left-radius:%?10?%;border-top-left-radius:%?10?%;width:%?80?%;height:%?80?%;top:0;left:0;z-index:5;overflow:hidden}.goods-list.double-column .goods-item .goods-tag-img uni-image[data-v-0e6cc038]{width:100%;height:100%}.goods-list.double-column .goods-item .info-wrap[data-v-0e6cc038]{padding:0 %?26?% %?26?% %?26?%}.goods-list.double-column .goods-item .goods-name[data-v-0e6cc038]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-top:%?20?%;height:%?68?%}.goods-list.double-column .goods-item .discount-price[data-v-0e6cc038]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%}.goods-list.double-column .goods-item .discount-price .unit[data-v-0e6cc038]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info[data-v-0e6cc038]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?16?%}.goods-list.double-column .goods-item .pro-info .delete-price[data-v-0e6cc038]{text-decoration:line-through;-webkit-box-flex:1;-webkit-flex:1;flex:1}.goods-list.double-column .goods-item .pro-info .delete-price .unit[data-v-0e6cc038]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-0e6cc038]{line-height:1}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-0e6cc038]:nth-child(2){text-align:right}.goods-list.double-column .goods-item .member-price-tag[data-v-0e6cc038]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.double-column .goods-item .member-price-tag uni-image[data-v-0e6cc038]{width:100%}',""]),e.exports=t},dc3c:function(e,t,i){"use strict";i("99af"),i("4de4"),i("b680"),i("acd8"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{collectionList:[],isShowEmpty:!1}},methods:{toDetail:function(e){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:e})},getData:function(e){var t=this;this.isShowEmpty=!1;var i="/api/goodscollect/page",o=[];this.$api.sendRequest({url:i,data:{page_size:e.size,page:e.num},async:!1}).then((function(i){for(var s=i.data.list,a=0;a<s.length;a++)s[a].composite_score=Math.floor((parseFloat(s[a].shop_desccredit)+parseFloat(s[a].shop_servicecredit)+parseFloat(s[a].shop_deliverycredit))/3).toFixed(1);o=o.concat(s),1==e.num&&(t.collectionList=[]),t.collectionList=t.collectionList.concat(s),o.length<e.size?t.$refs.goodsRecommend.getLikeList(e.size).then((function(i){o=o.concat(i),e.endSuccess(o.length),1==e.num&&t.$refs.loadingCover&&t.$refs.loadingCover.hide()})):(e.endSuccess(o.length),t.$refs.loadingCover&&t.$refs.loadingCover.hide()),t.isShowEmpty=!0}))},listenRefresh:function(e){this.$refs.goodsRecommend.init()},deleteItem:function(e){var t=this;this.$api.sendRequest({url:"/api/goodscollect/delete",data:{goods_id:e},success:function(i){if(0==i.code){t.$util.showToast({title:"删除成功"});var o=t.collectionList,s=o.filter((function(t){return t.goods_id!=e}));t.collectionList=s}else t.$util.showToast({title:i.message})}})},imageError:function(e){this.collectionList[e].logo=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},goodsImageError:function(e){this.collectionList[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}}};t.default=o},f028:function(e,t,i){var o=i("d8c9");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var s=i("4f06").default;s("bdaec690",o,!0,{sourceMap:!1,shadowMode:!1})}}]);