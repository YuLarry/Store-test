(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-logistics-logistics"],{"24a6":function(e,t,i){"use strict";var a=i("4ea4");i("4160"),i("26e9"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(i("ccd8")),n={data:function(){return{orderId:"",packageList:[],isIphoneX:!1,currIndex:0,status:0}},mixins:[o.default],onLoad:function(e){e.order_id&&(this.orderId=e.order_id)},onShow:function(){this.$langConfig.refresh(),uni.getStorageSync("token")?this.getPackageInfo():this.$util.redirectTo("/pages/login/login/login"),this.isIphoneX=this.$util.uniappIsIPhoneX()},methods:{ontabtap:function(e){this.currIndex=e},getPackageInfo:function(){var e=this;this.$api.sendRequest({url:"/api/order/package",data:{order_id:this.orderId},success:function(t){t.code>=0?(e.packageList=t.data,e.packageList.forEach((function(t){t.trace.list&&(t.trace.list=t.trace.list.reverse()),t.status=e.status++})),e.$refs.loadingCover&&e.$refs.loadingCover.hide()):(e.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){e.$util.redirectTo("/pages/order/list/list")}),1500))},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},toGoodsDetail:function(e){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:e})},imageError:function(e,t){this.packageList[e].goods_list[t].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}}};t.default=n},"278f":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.swiper-item[data-v-4a788e22]{padding-top:%?94?%;height:100%;padding-bottom:%?30?%;padding-bottom:constant(safe-area-inset-bottom);\r\n  /*兼容 IOS<11.2*/padding-bottom:env(safe-area-inset-bottom)\r\n  /*兼容 IOS>11.2*/}.swiper-item .container[data-v-4a788e22]{height:calc(100vh - %?124?%);overflow-y:scroll;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?30?%}.swiper-item .container.safearea[data-v-4a788e22]{padding:%?68?%}.order-nav[data-v-4a788e22]{width:100vw;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\nwhite-space:nowrap;\r\nbackground:#fff;display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;left:0;z-index:998}.order-nav .uni-tab-item[data-v-4a788e22]{display:inline-block;padding:%?30?% %?24?% 0}.order-nav .uni-tab-item-title[data-v-4a788e22]{color:#555;font-size:%?32?%;display:block;line-height:1;padding:0 %?10?% %?30?%;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;\r\nwhite-space:nowrap;\r\ntext-align:center}.order-nav .uni-tab-item-title-active[data-v-4a788e22]{display:block;border-bottom:1px solid #fff;padding:0 %?10?% %?30?%}.order-nav[data-v-4a788e22] ::-webkit-scrollbar{width:0;height:0;color:transparent}.goods-wrap[data-v-4a788e22]{padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;position:relative;width:calc(100% - %?60?%);-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?20?%;padding:%?30?%}.goods-wrap .goods[data-v-4a788e22]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;margin-bottom:%?20?%}.goods-wrap .goods[data-v-4a788e22]:last-of-type{margin-bottom:0}.goods-wrap .goods .goods-img[data-v-4a788e22]{width:%?180?%;height:%?180?%;margin-right:%?20?%}.goods-wrap .goods .goods-img uni-image[data-v-4a788e22]{width:100%;height:100%}.goods-wrap .goods .goods-info[data-v-4a788e22]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;max-width:calc(100% - %?140?%)}.goods-wrap .goods .goods-info .goods-name[data-v-4a788e22]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.5;font-size:%?28?%;font-weight:500}.goods-wrap .goods .goods-info .goods-sub-section[data-v-4a788e22]{width:100%;line-height:1.3;display:-webkit-box;display:-webkit-flex;display:flex}.goods-wrap .goods .goods-info .goods-sub-section .goods-price[data-v-4a788e22]{font-weight:700;font-size:%?20?%}.goods-wrap .goods .goods-info .goods-sub-section .unit[data-v-4a788e22]{font-weight:400;font-size:%?24?%;margin-right:%?2?%}.goods-wrap .goods .goods-info .goods-sub-section uni-view[data-v-4a788e22]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:1.3}.goods-wrap .goods .goods-info .goods-sub-section uni-view[data-v-4a788e22]:last-of-type{text-align:left}.goods-wrap .goods .goods-info .goods-sub-section uni-view:last-of-type .iconfont[data-v-4a788e22]{line-height:1;font-size:%?24?%}.express-company-wrap[data-v-4a788e22]{padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;position:relative;width:calc(100% - %?60?%);-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?20?%}.express-company-wrap .company-logo[data-v-4a788e22]{width:%?120?%;height:%?120?%;margin-right:%?20?%;float:left}.express-company-wrap .company-logo uni-image[data-v-4a788e22]{width:100%;height:100%}.express-company-wrap .info[data-v-4a788e22]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.express-company-wrap .info .company[data-v-4a788e22]{line-height:1.5;margin-top:%?16?%}.express-company-wrap .info .no[data-v-4a788e22]{margin-top:%?10?%;line-height:1.5}.express-company-wrap .info .iconfuzhi[data-v-4a788e22]{font-size:%?28?%;line-height:1;margin-left:%?6?%}.track-wrap[data-v-4a788e22]{padding:%?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background:#fff;position:relative;width:calc(100% - %?60?%);-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:%?20?%}.track-wrap .track-item[data-v-4a788e22]{position:relative;-webkit-flex-wrap:wrap;flex-wrap:wrap;overflow:visible;display:-webkit-box;display:-webkit-flex;display:flex}.track-wrap .track-item[data-v-4a788e22]:after{content:"";position:absolute;z-index:1;pointer-events:none;background-color:#e5e5e5;width:1px;height:150%;bottom:0;left:0;top:%?56?%;left:%?20?%;bottom:%?-40?%}.track-wrap .track-item .dot[data-v-4a788e22]{margin:%?34?% %?20?% 0 %?10?%;width:%?20?%;height:%?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background-color:#ccc;z-index:9}.track-wrap .track-item .msg[data-v-4a788e22]{padding:%?20?% 0;-webkit-box-flex:1;-webkit-flex:1;flex:1}.track-wrap .track-item .msg .text[data-v-4a788e22]{line-height:1.5;font-size:%?28?%}.track-wrap .track-item .msg .time[data-v-4a788e22]{color:#909399;font-size:%?20?%;line-height:1.3;margin-top:%?10?%}.track-wrap .track-item[data-v-4a788e22]:last-of-type:after{content:unset}[data-v-4a788e22] .uni-scroll-view ::-webkit-scrollbar{\r\n  /* 隐藏滚动条，但依旧具备可以滚动的功能 */display:none;width:0;height:0;color:transparent;background:transparent}[data-v-4a788e22] ::-webkit-scrollbar{display:none;width:0;height:0;color:transparent;background:transparent}',""]),e.exports=t},"594a0":function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return a}));var a={loadingCover:i("30be").default},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{attrs:{"data-theme":e.themeStyle}},[i("v-uni-scroll-view",{staticClass:"order-nav",attrs:{"scroll-x":!0,"show-scrollbar":!1}},e._l(e.packageList,(function(t,a){return i("v-uni-view",{key:a,staticClass:"uni-tab-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.ontabtap(a)}}},[i("v-uni-text",{staticClass:"uni-tab-item-title",class:a==e.currIndex?"uni-tab-item-title-active color-base-border  color-base-text":""},[e._v(e._s(t.package_name))])],1)})),1),e._l(e.packageList,(function(t,a){return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:a==e.currIndex,expression:"packageIndex == currIndex"}],key:a,staticClass:"swiper-item"},[i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"goods-wrap"},[i("v-uni-view",{staticClass:"body"},e._l(t.goods_list,(function(t,o){return i("v-uni-view",{key:o,staticClass:"goods"},[i("v-uni-view",{staticClass:"goods-img",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toGoodsDetail(t.sku_id)}}},[i("v-uni-image",{attrs:{src:e.$util.img(t.sku_image,{size:"mid"}),mode:"aspectFill"},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.imageError(a,o)}}})],1),i("v-uni-view",{staticClass:"goods-info"},[i("v-uni-view",{staticClass:"goods-name",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toGoodsDetail(t.sku_id)}}},[e._v(e._s(t.sku_name))]),i("v-uni-view",{staticClass:"goods-sub-section"},[i("v-uni-view",[i("v-uni-text",[i("v-uni-text",{staticClass:"iconfont iconclose"}),e._v(e._s(t.num))],1)],1)],1)],1)],1)})),1)],1),i("v-uni-view",{staticClass:"express-company-wrap"},[i("v-uni-view",{staticClass:"company-logo"},[i("v-uni-image",{attrs:{src:e.$util.img(t.express_company_image)}})],1),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"company"},[i("v-uni-text",[e._v("承运公司： "+e._s(t.express_company_name))])],1),i("v-uni-view",{staticClass:"no"},[i("v-uni-text",[e._v("运单号："),i("v-uni-text",{staticClass:"color-tip"},[e._v(e._s(t.delivery_no))])],1),i("v-uni-text",{staticClass:"iconfont iconfuzhi",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.$util.copy(t.delivery_no)}}})],1)],1)],1),i("v-uni-view",{staticClass:"track-wrap"},[t.trace.success&&0!=t.trace.list.length?e._l(t.trace.list,(function(t,a){return i("v-uni-view",{key:a,staticClass:"track-item",class:0==a?"active":"",attrs:{"data-theme":e.themeStyle}},[i("v-uni-view",{staticClass:"dot",class:0==a?"color-base-bg":""}),i("v-uni-view",{staticClass:"msg"},[i("v-uni-view",{staticClass:"text",class:0==a?"color-base-text":""},[e._v(e._s(t.remark))]),i("v-uni-view",{staticClass:"time",class:0==a?"color-base-text":""},[e._v(e._s(t.datetime))])],1)],1)})):(t.trace.success&&t.trace.list.length,[i("v-uni-view",{staticClass:"fail-wrap font-size-base"},[e._v(e._s(t.trace.reason))])])],2)],1)],1)})),i("loading-cover",{ref:"loadingCover"})],2)},n=[]},"94fe":function(e,t,i){"use strict";i.r(t);var a=i("24a6"),o=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=o.a},a724:function(e,t,i){"use strict";i.r(t);var a=i("594a0"),o=i("94fe");for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("cd7d");var s,r=i("f0c5"),d=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"4a788e22",null,!1,a["a"],s);t["default"]=d.exports},c760:function(e,t,i){var a=i("278f");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("4e609256",a,!0,{sourceMap:!1,shadowMode:!1})},cd7d:function(e,t,i){"use strict";var a=i("c760"),o=i.n(a);o.a}}]);