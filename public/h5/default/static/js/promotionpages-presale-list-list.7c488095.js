(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-presale-list-list"],{1326:function(t,i,e){"use strict";var a=e("13ac"),o=e.n(a);o.a},"13ac":function(t,i,e){var a=e("b692");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("cafaf1b2",a,!0,{sourceMap:!1,shadowMode:!1})},1820:function(t,i,e){"use strict";e.r(i);var a=e("4baa"),o=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=o.a},"1a90":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var a={nsAdv:e("83c0").default,nsEmpty:e("0e02").default,loadingCover:e("b1ae").default,nsShowToast:e("5a2e").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{attrs:{"data-theme":t.themeStyle}},[t.addonIsExit.presale?e("mescroll-uni",{ref:"mescroll",attrs:{size:10},on:{getData:function(i){arguments[0]=i=t.$handleEvent(i),t.getData.apply(void 0,arguments)}}},[e("template",{attrs:{slot:"list"},slot:"list"},[e("v-uni-view",{staticClass:"ns-adv"},[e("ns-adv",{attrs:{keyword:"NS_PRESALE"}})],1),t.dataList.length?e("v-uni-view",{staticClass:"goods-list single-column"},t._l(t.dataList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"goods-item margin-bottom"},[e("v-uni-view",{staticClass:"goods-img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(i)}}},[e("v-uni-image",{attrs:{src:t.goodsImg(i.goods_image),mode:"widthFix"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.imgError(a)}}}),""!=t.goodsTag(i)?e("v-uni-view",{staticClass:"color-base-bg goods-tag"},[t._v(t._s(t.goodsTag(i)))]):t._e()],1),e("v-uni-view",{staticClass:"info-wrap"},[e("v-uni-view",{staticClass:"name-wrap"},[e("v-uni-view",{staticClass:"goods-name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(i)}}},[t._v(t._s(i.goods_name))]),e("v-uni-view",{staticClass:"presale-info"},[i.presale_price>0?e("v-uni-text",{staticClass:"color-base-text"},[t._v("定金"+t._s(t.$lang("common.currencySymbol"))+t._s(i.presale_deposit)+"可抵"+t._s(t.$lang("common.currencySymbol"))+t._s(i.presale_price))]):t._e()],1)],1),e("v-uni-view",{staticClass:"pro-info"},[e("v-uni-view",{staticClass:"discount-price"},[e("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",{staticClass:"price color-base-text font-size-toolbar"},[t._v(t._s(t.showPrice(i)))])],1),e("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(i)}}},[e("v-uni-button",{attrs:{type:"primary",size:"mini"}},[t._v("去付定金")])],1)],1)],1)],1)})),1):t._e(),t.dataList.length?t._e():e("v-uni-view",[e("ns-empty",{attrs:{fixed:!1,text:"暂无预售商品"}})],1)],1)],2):t._e(),e("loading-cover",{ref:"loadingCover"}),e("ns-show-toast")],1)},n=[]},"321f":function(t,i,e){"use strict";var a=e("4ea4");e("99af"),e("acd8"),e("ac1f"),e("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=a(e("245b")),n=a(e("5a2e")),s={components:{nsShowToast:n.default},data:function(){return{dataList:[]}},mixins:[o.default],onLoad:function(t){},onShow:function(){var t=this;if(!this.addonIsExit.presale)return this.$util.showToast({title:"预售插件未安装",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh()},methods:{getData:function(t){var i=this;this.$api.sendRequest({url:"/presale/api/goods/page",data:{page_size:t.size,page:t.num},success:function(e){var a=[],o=e.message;0==e.code&&e.data?a=e.data.list:i.$util.showToast({title:o}),t.endSuccess(a.length),1==t.num&&(i.dataList=[]),i.dataList=i.dataList.concat(a),i.$refs.loadingCover&&i.$refs.loadingCover.hide()},fail:function(){t.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},toDetail:function(t){this.$util.redirectTo("/promotionpages/presale/detail/detail",{id:t.presale_id})},imgError:function(t){this.dataList[t].goods_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},goodsImg:function(t){var i=t.split(",");return i[0]?this.$util.img(i[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},goodsTag:function(t){return t.label_name||""},showPrice:function(t){var i=t.price;return t.member_price&&parseFloat(t.member_price)<parseFloat(i)&&(i=t.member_price),i}}};i.default=s},"3d42":function(t,i,e){var a=e("654a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("dcee3b38",a,!0,{sourceMap:!1,shadowMode:!1})},"4baa":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"ns-advert",props:{keyword:{type:String}},data:function(){return{advList:[]}},created:function(){this.getAdvList()},methods:{getAdvList:function(){var t=this;this.$api.sendRequest({url:"/api/adv/detail",data:{keyword:this.keyword},success:function(i){if(0==i.code){var e=i.data.adv_list;for(var a in e)e[a].adv_url&&(e[a].adv_url=JSON.parse(e[a].adv_url));t.advList=i.data.adv_list}}})},jumppage:function(t){this.$util.diyRedirectTo(t)}}};i.default=a},6001:function(t,i,e){"use strict";e.r(i);var a=e("321f"),o=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=o.a},"654a":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.ns-adv[data-v-1add78a8]{margin:%?20?% %?30?%;border-radius:%?10?%;overflow:hidden;line-height:1}.ns-adv uni-image[data-v-1add78a8]{width:100%}.lineheight-clear[data-v-1add78a8]{line-height:1!important}.goods-list.single-column .goods-item[data-v-1add78a8]{padding:%?26?%;background:#fff;margin:%?20?% %?30?%;border-radius:%?10?%;display:flex;position:relative}.goods-list.single-column .goods-item .goods-img[data-v-1add78a8]{width:%?200?%;height:%?200?%;overflow:hidden;border-radius:%?10?%;margin-right:%?20?%}.goods-list.single-column .goods-item .goods-img uni-image[data-v-1add78a8]{width:100%;height:100%}.goods-list.single-column .goods-item .goods-tag[data-v-1add78a8]{color:#fff;line-height:1;padding:%?8?% %?12?%;position:absolute;border-top-left-radius:%?10?%;border-bottom-right-radius:%?10?%;top:%?26?%;left:%?26?%;font-size:%?22?%}.goods-list.single-column .goods-item .info-wrap[data-v-1add78a8]{flex:1;display:flex;flex-direction:column}.goods-list.single-column .goods-item .name-wrap[data-v-1add78a8]{flex:1}.goods-list.single-column .goods-item .goods-name[data-v-1add78a8]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:%?68?%}.goods-list.single-column .goods-item .presale-info uni-text[data-v-1add78a8]{line-height:1;font-size:%?24?%}.goods-list.single-column .goods-item .discount-price[data-v-1add78a8]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%}.goods-list.single-column .goods-item .discount-price .unit[data-v-1add78a8]{margin-right:%?6?%}.goods-list.single-column .goods-item .discount-price .txt[data-v-1add78a8]{font-weight:400}.goods-list.single-column .goods-item .pro-info[data-v-1add78a8]{position:relative;margin-top:%?16?%}.goods-list.single-column .goods-item .pro-info .delete-price[data-v-1add78a8]{flex:1;display:flex;align-items:flex-end}.goods-list.single-column .goods-item .pro-info .delete-price .unit[data-v-1add78a8]{margin-right:%?6?%}.goods-list.single-column .goods-item .pro-info .delete-price .txt[data-v-1add78a8]{text-decoration:none}.goods-list.single-column .goods-item .pro-info > uni-view[data-v-1add78a8]{line-height:1}.goods-list.single-column .goods-item .pro-info > uni-view[data-v-1add78a8]:nth-child(2){position:absolute;right:0;bottom:0}.goods-list.single-column .goods-item .member-price-tag[data-v-1add78a8]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.single-column .goods-item .member-price-tag uni-image[data-v-1add78a8]{width:100%}',""]),t.exports=i},"83c0":function(t,i,e){"use strict";e.r(i);var a=e("ab6a"),o=e("1820");for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);e("1326");var s,d=e("f0c5"),r=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"79a0176e",null,!1,a["a"],s);i["default"]=r.exports},"84e2":function(t,i,e){"use strict";var a=e("3d42"),o=e.n(a);o.a},ab6a:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t.advList.length?e("v-uni-swiper",{staticClass:"ns-adv",attrs:{"indicator-dots":t.advList.length>1,"indicator-active-color":"#ffffff",autoplay:!0,interval:3e3,duration:1e3}},t._l(t.advList,(function(i,a){return e("v-uni-swiper-item",{key:a,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumppage(i.adv_url)}}},[e("v-uni-view",{staticClass:"image-box",style:{"background-color":i.background}},[e("v-uni-image",{attrs:{src:t.$util.img(i.adv_image)}})],1)],1)})),1):t._e()],1)},n=[]},b692:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".bg[data-v-79a0176e]{width:100%;height:%?158?%;background-color:#fff;position:fixed;left:0;\r\ntop:%?88?%;\n}.ns-adv[data-v-79a0176e]{background:#fff;height:%?300?%;border-radius:%?10?%\r\n\t/* padding: 8rpx 24rpx 24rpx; */}.ns-adv .image-box[data-v-79a0176e]{width:100%;height:100%;border-radius:%?10?%}.ns-adv uni-image[data-v-79a0176e]{width:100%;height:100%;border-radius:%?10?%}",""]),t.exports=i},b947:function(t,i,e){"use strict";e.r(i);var a=e("1a90"),o=e("6001");for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);e("84e2");var s,d=e("f0c5"),r=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"1add78a8",null,!1,a["a"],s);i["default"]=r.exports}}]);