(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-pintuan-list-list"],{"0ce1":function(i,t,e){"use strict";e.r(t);var a=e("c2d5"),n=e.n(a);for(var o in a)"default"!==o&&function(i){e.d(t,i,(function(){return a[i]}))}(o);t["default"]=n.a},2437:function(i,t,e){"use strict";var a=e("63e9"),n=e.n(a);n.a},"3d2c":function(i,t,e){"use strict";e.r(t);var a=e("745a"),n=e.n(a);for(var o in a)"default"!==o&&function(i){e.d(t,i,(function(){return a[i]}))}(o);t["default"]=n.a},"4e4d":function(i,t,e){"use strict";var a=e("864a"),n=e.n(a);n.a},"63e9":function(i,t,e){var a=e("ea5c");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("29243dbc",a,!0,{sourceMap:!1,shadowMode:!1})},"745a":function(i,t,e){"use strict";e("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"ns-advert",props:{keyword:{type:String}},data:function(){return{advList:[]}},created:function(){this.getAdvList()},methods:{getAdvList:function(){var i={adv_image:"",adv_url:""};switch(this.keyword){case"NS_GROUPBUY":i.adv_image="upload/default/diy_view/index_groupbuy_gg.png";break;case"NS_PINTUAN":i.adv_image="upload/default/diy_view/index_pintuan_gg.png";break;case"NS_SECKILL":i.adv_image="upload/default/diy_view/index_seckill_gg.png";break;case"NS_TOPIC":i.adv_image="upload/default/diy_view/index_topic_gg.png";break;case"NS_BARGAIN":i.adv_image="upload/default/diy_view/index_bargain_gg.png";break}var t=[];t.push(i),this.advList=this.advList.concat(t)},jumppage:function(i){this.$util.diyRedirectTo(i)}}};t.default=a},"864a":function(i,t,e){var a=e("8e7a");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("d5dbbc02",a,!0,{sourceMap:!1,shadowMode:!1})},"8e7a":function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,".bg[data-v-3474487e]{width:100%;height:%?158?%;background-color:#fff;position:fixed;left:0;\r\ntop:%?88?%;\n}.ns-adv[data-v-3474487e]{background:#fff;height:%?300?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:%?8?% %?24?% %?24?%}.ns-adv .image-box[data-v-3474487e]{width:100%;height:100%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.ns-adv uni-image[data-v-3474487e]{width:100%;height:100%;-webkit-border-radius:%?10?%;border-radius:%?10?%}",""]),i.exports=t},a922:function(i,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var a={nsEmpty:e("2c4c").default,loadingCover:e("790a").default},n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{attrs:{"data-theme":i.themeStyle}},[i.addonIsExit.pintuan?e("mescroll-uni",{attrs:{refs:"mescroll",size:10},on:{getData:function(t){arguments[0]=t=i.$handleEvent(t),i.getData.apply(void 0,arguments)}}},[e("template",{attrs:{slot:"list"},slot:"list"},[e("v-uni-view",{staticClass:"ns-adv"},[e("v-uni-image",{attrs:{src:i.$util.img("upload/default/diy_view/index_pintuan_gg.png"),mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"ns-adv"},[e("v-uni-image",{attrs:{src:i.$util.img("upload/default/diy_view/index_pintuan_tips.png"),mode:"widthFix"}})],1),i.dataList.length?e("v-uni-view",{staticClass:"goods-list single-column"},i._l(i.dataList,(function(t,a){return e("v-uni-view",{key:a,staticClass:"goods-item margin-bottom"},[e("v-uni-view",{staticClass:"goods-img",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.toDetail(t)}}},[e("v-uni-image",{attrs:{src:i.goodsImg(t.goods_image),mode:"widthFix"},on:{error:function(t){arguments[0]=t=i.$handleEvent(t),i.imgError(a)}}}),""!=i.goodsTag(t)?e("v-uni-view",{staticClass:"color-base-bg goods-tag"},[i._v(i._s(i.goodsTag(t)))]):i._e()],1),e("v-uni-view",{staticClass:"info-wrap"},[e("v-uni-view",{staticClass:"name-wrap"},[e("v-uni-view",{staticClass:"goods-name",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.toDetail(t)}}},[i._v(i._s(t.goods_name))]),e("v-uni-view",{staticClass:"pintuan-info"},[t.order_num?e("v-uni-text",{staticClass:"color-base-text font-size-activity-tag pintuan-num"},[i._v("已团"+i._s(t.order_num)+"件")]):i._e(),e("v-uni-text",{staticClass:"color-base-border color-base-text font-size-activity-tag"},[i._v(i._s(t.pintuan_num)+"人团")])],1)],1),e("v-uni-view",{staticClass:"lineheight-clear"},[e("v-uni-view",{staticClass:"discount-price"},[e("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[i._v(i._s(i.$lang("common.currencySymbol")))]),e("v-uni-text",{staticClass:"price color-base-text font-size-toolbar"},[i._v(i._s(t.pintuan_price))])],1)],1),e("v-uni-view",{staticClass:"pro-info"},[e("v-uni-view",{staticClass:"delete-price font-size-activity-tag color-tip"},[e("v-uni-text",{staticClass:"font-size-tag lineheight-clear txt"},[i._v("单购价：")]),e("v-uni-text",{staticClass:"unit"},[i._v(i._s(i.$lang("common.currencySymbol")))]),i._v(i._s(t.price))],1),e("v-uni-view",{on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.toDetail(t)}}},[e("v-uni-button",{attrs:{type:"primary",size:"mini"}},[i._v("去拼团")])],1)],1)],1)],1)})),1):i._e(),i.dataList.length?i._e():e("v-uni-view",[e("ns-empty",{attrs:{fixed:!1,text:"暂无拼团"}})],1)],1)],2):i._e(),e("loading-cover",{ref:"loadingCover"})],1)},o=[]},c267:function(i,t,e){"use strict";e.r(t);var a=e("e403"),n=e("3d2c");for(var o in n)"default"!==o&&function(i){e.d(t,i,(function(){return n[i]}))}(o);e("4e4d");var s,d=e("f0c5"),r=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"3474487e",null,!1,a["a"],s);t["default"]=r.exports},c2d5:function(i,t,e){"use strict";var a=e("4ea4");e("99af"),e("ac1f"),e("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(e("c267")),o=a(e("c409")),s={components:{nsAdv:n.default},data:function(){return{dataList:[]}},mixins:[o.default],onShow:function(){var i=this;if(!this.addonIsExit.pintuan)return this.$util.showToast({title:"商家未开启拼团",mask:!0,duration:2e3}),void setTimeout((function(){i.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh()},methods:{getData:function(i){var t=this;this.$api.sendRequest({url:"/pintuan/api/goods/page",data:{page_size:i.size,page:i.num},success:function(e){var a=[],n=e.message;0==e.code&&e.data?a=e.data.list:t.$util.showToast({title:n}),i.endSuccess(a.length),1==i.num&&(t.dataList=[]),t.dataList=t.dataList.concat(a),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(){i.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},toDetail:function(i){this.$util.redirectTo("/promotionpages/pintuan/detail/detail",{pintuan_id:i.pintuan_id})},imgError:function(i){this.dataList[i].goods_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},goodsImg:function(i){var t=i.split(",");return t[0]?this.$util.img(t[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},goodsTag:function(i){switch(i.recommend_way){case 1:return"新品";case 2:return"精品";case 3:return"推荐";default:return""}}}};t.default=s},d744:function(i,t,e){"use strict";e.r(t);var a=e("a922"),n=e("0ce1");for(var o in n)"default"!==o&&function(i){e.d(t,i,(function(){return n[i]}))}(o);e("2437");var s,d=e("f0c5"),r=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"2789acb9",null,!1,a["a"],s);t["default"]=r.exports},e403:function(i,t,e){"use strict";var a;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[i.advList.length?e("v-uni-swiper",{staticClass:"ns-adv",attrs:{"indicator-dots":i.advList.length>1,"indicator-active-color":"#ffffff",autoplay:!0,interval:3e3,duration:1e3}},i._l(i.advList,(function(t,a){return e("v-uni-swiper-item",{key:a,on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.jumppage(t.adv_url)}}},[e("v-uni-view",{staticClass:"image-box"},[e("v-uni-image",{attrs:{src:i.$util.img(t.adv_image)}})],1)],1)})),1):i._e()],1)},o=[]},ea5c:function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.ns-adv[data-v-2789acb9]{margin:%?20?% %?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;overflow:hidden;line-height:1}.ns-adv uni-image[data-v-2789acb9]{width:100%}.lineheight-clear[data-v-2789acb9]{line-height:1!important}.goods-list.single-column .goods-item[data-v-2789acb9]{padding:%?26?%;background:#fff;margin:%?20?% %?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;position:relative}.goods-list.single-column .goods-item .goods-img[data-v-2789acb9]{width:%?200?%;height:%?200?%;overflow:hidden;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-right:%?20?%}.goods-list.single-column .goods-item .goods-img uni-image[data-v-2789acb9]{width:100%;height:100%}.goods-list.single-column .goods-item .goods-tag[data-v-2789acb9]{color:#fff;line-height:1;padding:%?8?% %?12?%;position:absolute;-webkit-border-top-left-radius:%?10?%;border-top-left-radius:%?10?%;-webkit-border-bottom-right-radius:%?10?%;border-bottom-right-radius:%?10?%;top:%?26?%;left:%?26?%;font-size:%?22?%}.goods-list.single-column .goods-item .info-wrap[data-v-2789acb9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.goods-list.single-column .goods-item .name-wrap[data-v-2789acb9]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.goods-list.single-column .goods-item .goods-name[data-v-2789acb9]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:%?68?%}.goods-list.single-column .goods-item .pintuan-info uni-text[data-v-2789acb9]{line-height:1;margin-right:%?20?%;padding:0 %?12?%;border:1px solid #fff}.goods-list.single-column .goods-item .discount-price[data-v-2789acb9]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%}.goods-list.single-column .goods-item .discount-price .unit[data-v-2789acb9]{margin-right:%?6?%}.goods-list.single-column .goods-item .discount-price .txt[data-v-2789acb9]{font-weight:400}.goods-list.single-column .goods-item .pro-info[data-v-2789acb9]{position:relative;margin-top:%?16?%}.goods-list.single-column .goods-item .pro-info .delete-price[data-v-2789acb9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.goods-list.single-column .goods-item .pro-info .delete-price .unit[data-v-2789acb9]{margin-right:%?6?%}.goods-list.single-column .goods-item .pro-info .delete-price .txt[data-v-2789acb9]{text-decoration:none}.goods-list.single-column .goods-item .pro-info > uni-view[data-v-2789acb9]{line-height:1}.goods-list.single-column .goods-item .pro-info > uni-view[data-v-2789acb9]:nth-child(2){position:absolute;right:0;bottom:0}.goods-list.single-column .goods-item .member-price-tag[data-v-2789acb9]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.single-column .goods-item .member-price-tag uni-image[data-v-2789acb9]{width:100%}',""]),i.exports=t}}]);