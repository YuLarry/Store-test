(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-groupbuy-list-list"],{"0bf7":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[String,Boolean],defalut:!1},inverted:{type:[String,Boolean],defalut:!1},circle:{type:[String,Boolean],defalut:!1},mark:{type:[String,Boolean],defalut:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};t.default=o},"0d6a":function(i,t,e){"use strict";var o;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return o}));var a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return i.text?e("v-uni-view",{staticClass:"uni-tag",class:[!0===i.disabled||"true"===i.disabled?"uni-tag--disabled":"",!0===i.inverted||"true"===i.inverted?"uni-tag--inverted":"",!0===i.circle||"true"===i.circle?"uni-tag--circle":"",!0===i.mark||"true"===i.mark?"uni-tag--mark":"","uni-tag--"+i.size,"uni-tag--"+i.type],on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.onClick()}}},[i._v(i._s(i.text))]):i._e()},n=[]},"26fa":function(i,t,e){"use strict";var o=e("99b1"),a=e.n(o);a.a},2737:function(i,t,e){var o=e("798f");"string"===typeof o&&(o=[[i.i,o,""]]),o.locals&&(i.exports=o.locals);var a=e("4f06").default;a("5d1386d8",o,!0,{sourceMap:!1,shadowMode:!1})},"6d6f":function(i,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return o}));var o={nsEmpty:e("1928").default,loadingCover:e("30be").default},a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{attrs:{"data-theme":i.themeStyle}},[i.addonIsExit.groupbuy?e("mescroll-uni",{ref:"mescroll",attrs:{size:10},on:{getData:function(t){arguments[0]=t=i.$handleEvent(t),i.getData.apply(void 0,arguments)}}},[e("template",{attrs:{slot:"list"},slot:"list"},[e("v-uni-view",{staticClass:"ns-adv"},[e("v-uni-image",{attrs:{src:i.$util.img("upload/default/diy_view/index_groupbuy_gg.png"),mode:"widthFix"}})],1),i.dataList.length?e("v-uni-view",{staticClass:"goods-list single-column"},i._l(i.dataList,(function(t,o){return e("v-uni-view",{key:o,staticClass:"goods-item margin-bottom"},[e("v-uni-view",{staticClass:"goods-img",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.toDetail(t)}}},[e("v-uni-image",{attrs:{src:i.goodsImg(t.goods_image),mode:"widthFix"},on:{error:function(t){arguments[0]=t=i.$handleEvent(t),i.imgError(o)}}}),""!=i.goodsTag(t)?e("v-uni-view",{staticClass:"color-base-bg goods-tag"},[i._v(i._s(i.goodsTag(t)))]):i._e()],1),e("v-uni-view",{staticClass:"info-wrap"},[e("v-uni-view",{staticClass:"name-wrap"},[e("v-uni-view",{staticClass:"goods-name",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.toDetail(t)}}},[i._v(i._s(t.goods_name))]),e("v-uni-view",{staticClass:"introduction font-size-activity-tag color-tip"},[i._v("库存"+i._s(t.goods_stock)+"件")])],1),e("v-uni-view",{staticClass:"lineheight-clear"},[e("v-uni-view",{staticClass:"discount-price"},[e("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[i._v(i._s(i.$lang("common.currencySymbol")))]),e("v-uni-text",{staticClass:"price color-base-text font-size-toolbar"},[i._v(i._s(t.groupbuy_price))])],1)],1),e("v-uni-view",{staticClass:"pro-info"},[e("v-uni-view",{staticClass:"delete-price font-size-activity-tag color-tip"},[[e("v-uni-text",{staticClass:"unit"},[i._v(i._s(i.$lang("common.currencySymbol")))]),i._v(i._s(t.price))]],2),e("v-uni-view",{on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.toDetail(t)}}},[e("v-uni-button",{attrs:{type:"primary",size:"mini"}},[i._v("去团购")])],1)],1)],1)],1)})),1):i._e(),i.dataList.length?i._e():e("v-uni-view",[e("ns-empty",{attrs:{fixed:!1,text:"暂无团购"}})],1)],1)],2):i._e(),e("loading-cover",{ref:"loadingCover"})],1)},n=[]},"798f":function(i,t,e){var o=e("24fb");t=o(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.ns-adv[data-v-15866fa6]{margin:%?20?% %?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;overflow:hidden;line-height:1}.ns-adv uni-image[data-v-15866fa6]{width:100%}.lineheight-clear[data-v-15866fa6]{line-height:1!important}.goods-list.single-column .goods-item[data-v-15866fa6]{padding:%?26?%;background:#fff;margin:%?20?% %?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;position:relative}.goods-list.single-column .goods-item .goods-img[data-v-15866fa6]{width:%?200?%;height:%?200?%;overflow:hidden;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-right:%?20?%}.goods-list.single-column .goods-item .goods-img uni-image[data-v-15866fa6]{width:100%;height:100%}.goods-list.single-column .goods-item .goods-tag[data-v-15866fa6]{color:#fff;line-height:1;padding:%?8?% %?12?%;position:absolute;-webkit-border-top-left-radius:%?10?%;border-top-left-radius:%?10?%;-webkit-border-bottom-right-radius:%?10?%;border-bottom-right-radius:%?10?%;top:%?26?%;left:%?26?%;font-size:%?22?%}.goods-list.single-column .goods-item .info-wrap[data-v-15866fa6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.goods-list.single-column .goods-item .name-wrap[data-v-15866fa6]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.goods-list.single-column .goods-item .goods-name[data-v-15866fa6]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:%?68?%}.goods-list.single-column .goods-item .introduction[data-v-15866fa6]{line-height:1;margin-top:%?10?%}.goods-list.single-column .goods-item .discount-price[data-v-15866fa6]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%}.goods-list.single-column .goods-item .discount-price .unit[data-v-15866fa6]{margin-right:%?6?%}.goods-list.single-column .goods-item .pro-info[data-v-15866fa6]{position:relative;margin-top:%?16?%}.goods-list.single-column .goods-item .pro-info .delete-price[data-v-15866fa6]{text-decoration:line-through;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.goods-list.single-column .goods-item .pro-info .delete-price .unit[data-v-15866fa6]{margin-right:%?6?%}.goods-list.single-column .goods-item .pro-info > uni-view[data-v-15866fa6]{line-height:1}.goods-list.single-column .goods-item .pro-info > uni-view[data-v-15866fa6]:nth-child(2){position:absolute;right:0;bottom:0}.goods-list.single-column .goods-item .member-price-tag[data-v-15866fa6]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.single-column .goods-item .member-price-tag uni-image[data-v-15866fa6]{width:100%}',""]),i.exports=t},"7fdc":function(i,t,e){"use strict";e.r(t);var o=e("6d6f"),a=e("bce3");for(var n in a)"default"!==n&&function(i){e.d(t,i,(function(){return a[i]}))}(n);e("e356");var r,s=e("f0c5"),d=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"15866fa6",null,!1,o["a"],r);t["default"]=d.exports},"99b1":function(i,t,e){var o=e("ab12");"string"===typeof o&&(o=[[i.i,o,""]]),o.locals&&(i.exports=o.locals);var a=e("4f06").default;a("f7028eca",o,!0,{sourceMap:!1,shadowMode:!1})},a685:function(i,t,e){"use strict";e.r(t);var o=e("0d6a"),a=e("ee1d");for(var n in a)"default"!==n&&function(i){e.d(t,i,(function(){return a[i]}))}(n);e("26fa");var r,s=e("f0c5"),d=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"0a0fb015",null,!1,o["a"],r);t["default"]=d.exports},aaf3:function(i,t,e){"use strict";var o=e("4ea4");e("99af"),e("ac1f"),e("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(e("a685")),n=o(e("ccd8")),r={components:{uniTag:a.default},data:function(){return{dataList:[]}},onShow:function(){var i=this;if(!this.addonIsExit.groupbuy)return this.$util.showToast({title:"团购插件未安装",mask:!0,duration:2e3}),void setTimeout((function(){i.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh()},mixins:[n.default],methods:{getData:function(i){var t=this;this.$api.sendRequest({url:"/groupbuy/api/goods/page",data:{page_size:i.size,page:i.num},success:function(e){var o=[],a=e.message;0==e.code&&e.data?o=e.data.list:t.$util.showToast({title:a}),i.endSuccess(o.length),1==i.num&&(t.dataList=[]),t.dataList=t.dataList.concat(o),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(){i.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},toDetail:function(i){this.$util.redirectTo("/promotionpages/groupbuy/detail/detail",{groupbuy_id:i.groupbuy_id})},imgError:function(i){this.goodsList[i].goods_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},goodsImg:function(i){var t=i.split(",");return t[0]?this.$util.img(t[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},goodsTag:function(i){switch(i.recommend_way){case 1:return"新品";case 2:return"精品";case 3:return"推荐";default:return""}}},onShareAppMessage:function(i){var t="参加团购，优惠更多哦",e="/promotionpages/groupbuy/list/list";return{title:t,path:e,success:function(i){},fail:function(i){}}}};t.default=r},ab12:function(i,t,e){var o=e("24fb");t=o(!1),t.push([i.i,".uni-tag[data-v-0a0fb015]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?32?%;height:%?60?%;line-height:calc(%?60?% - 2px);font-size:%?28?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333;-webkit-border-radius:%?6?%;border-radius:%?6?%;background-color:#f8f8f8;border:1px solid #f8f8f8}.uni-tag--circle[data-v-0a0fb015]{-webkit-border-radius:%?30?%;border-radius:%?30?%}.uni-tag--mark[data-v-0a0fb015]{-webkit-border-radius:0 %?30?% %?30?% 0;border-radius:0 %?30?% %?30?% 0}.uni-tag--disabled[data-v-0a0fb015]{opacity:.5}.uni-tag--small[data-v-0a0fb015]{height:%?40?%;padding:0 %?16?%;line-height:calc(%?40?% - 2px);font-size:%?24?%}.uni-tag--primary[data-v-0a0fb015]{color:#fff;background-color:#007aff;border:1px solid #007aff}.uni-tag--primary.uni-tag--inverted[data-v-0a0fb015]{color:#007aff;background-color:#fff;border:1px solid #007aff}.uni-tag--success[data-v-0a0fb015]{color:#fff;background-color:#4cd964;border:1px solid #4cd964}.uni-tag--success.uni-tag--inverted[data-v-0a0fb015]{color:#4cd964;background-color:#fff;border:1px solid #4cd964}.uni-tag--warning[data-v-0a0fb015]{color:#fff;background-color:#f0ad4e;border:1px solid #f0ad4e}.uni-tag--warning.uni-tag--inverted[data-v-0a0fb015]{color:#f0ad4e;background-color:#fff;border:1px solid #f0ad4e}.uni-tag--error[data-v-0a0fb015]{color:#fff;background-color:#dd524d;border:1px solid #dd524d}.uni-tag--error.uni-tag--inverted[data-v-0a0fb015]{color:#dd524d;background-color:#fff;border:1px solid #dd524d}.uni-tag--inverted[data-v-0a0fb015]{color:#333;background-color:#fff;border:1px solid #f8f8f8}",""]),i.exports=t},bce3:function(i,t,e){"use strict";e.r(t);var o=e("aaf3"),a=e.n(o);for(var n in o)"default"!==n&&function(i){e.d(t,i,(function(){return o[i]}))}(n);t["default"]=a.a},e356:function(i,t,e){"use strict";var o=e("2737"),a=e.n(o);a.a},ee1d:function(i,t,e){"use strict";e.r(t);var o=e("0bf7"),a=e.n(o);for(var n in o)"default"!==n&&function(i){e.d(t,i,(function(){return o[i]}))}(n);t["default"]=a.a}}]);