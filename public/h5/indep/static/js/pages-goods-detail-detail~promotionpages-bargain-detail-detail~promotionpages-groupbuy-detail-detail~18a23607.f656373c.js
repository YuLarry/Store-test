(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-detail-detail~promotionpages-bargain-detail-detail~promotionpages-groupbuy-detail-detail~18a23607"],{"03ab":function(t,o,e){var i=e("24fb");o=i(!1),o.push([t.i,".ns-goods-action[data-v-40cc96ba]{position:fixed;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;z-index:9}.ns-goods-action.bottom-safe-area[data-v-40cc96ba]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}",""]),t.exports=o},"09c4":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={name:"ns-goods-promotion",props:{promotion:{type:String,default:""}},data:function(){return{goodsPromotion:{type:Array}}},created:function(){},methods:{refresh:function(t){this.goodsPromotion=t},redirectTo:function(t,o){this.$util.redirectTo(t,o)}}};o.default=i},"0c6c":function(t,o,e){var i=e("a134");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("15378d9e",i,!0,{sourceMap:!1,shadowMode:!1})},1031:function(t,o,e){"use strict";e.r(o);var i=e("87bf"),n=e("74e2");for(var a in n)"default"!==a&&function(t){e.d(o,t,(function(){return n[t]}))}(a);e("2b12");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"2d23be90",null,!1,i["a"],s);o["default"]=c.exports},"144f":function(t,o,e){var i=e("f5e8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("953fc2a0",i,!0,{sourceMap:!1,shadowMode:!1})},"1a22":function(t,o,e){"use strict";e("a9e3"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={name:"UniCountDown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},backgroundColorClass:{type:String,default:""},borderColor:{type:String,default:"#000000"},borderColorClass:{type:String,default:""},color:{type:String,default:"#000000"},colorClass:{type:String,default:""},splitorColor:{type:String,default:"#000000"},splitorColorClass:{type:String,default:""},day:{type:[Number,String],default:0},hour:{type:[Number,String],default:0},minute:{type:[Number,String],default:0},second:{type:[Number,String],default:0}},data:function(){return{timer:null,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},mounted:function(t){var o=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){o.seconds--,o.seconds<0?o.timeUp():o.countDown()}),1e3)},watch:{day:function(t){var o=this;this.timeUp(),this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){o.seconds--,o.seconds<0?o.timeUp():o.countDown()}),1e3)},hour:function(t){var o=this;this.timeUp(),this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){o.seconds--,o.seconds<0?o.timeUp():o.countDown()}),1e3)},minute:function(t){var o=this;this.timeUp(),this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){o.seconds--,o.seconds<0?o.timeUp():o.countDown()}),1e3)},second:function(t){var o=this;this.timeUp(),this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval((function(){o.seconds--,o.seconds<0?o.timeUp():o.countDown()}),1e3)}},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,o,e,i){return t=Number(t),o=Number(o),e=Number(e),i=Number(i),60*t*60*24+60*o*60+60*e+i},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,o=0,e=0,i=0,n=0;t>0?(o=Math.floor(t/86400),e=Math.floor(t/3600)-24*o,i=Math.floor(t/60)-24*o*60-60*e,n=Math.floor(t)-24*o*60*60-60*e*60-60*i):this.timeUp(),o<10&&(o="0"+o),e<10&&(e="0"+e),i<10&&(i="0"+i),n<10&&(n="0"+n),this.d=o,this.h=e,this.i=i,this.s=n}}};o.default=i},"1db7":function(t,o,e){"use strict";var i=e("a6f5"),n=e.n(i);n.a},"1e9c":function(t,o,e){var i=e("24fb");o=i(!1),o.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.goods-recommend[data-v-1d80681a]{margin-top:%?74?%;width:100vw}.goods-recommend .goods-recommend-title[data-v-1d80681a]{text-align:center;margin-bottom:%?40?%}.goods-recommend .goods-recommend-title uni-image[data-v-1d80681a]{width:%?690?%;height:%?40?%}.hr-view[data-v-1d80681a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;max-width:100%;box-sizing:initial;font-size:%?32?%}.hr-view .hr[data-v-1d80681a]{width:36%;height:%?2?%;background:#e5e5e5}.hr-view .title[data-v-1d80681a]{padding:0 %?20?%}.goods-list.double-column[data-v-1d80681a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin:0 %?30?%}.goods-list.double-column .goods-item[data-v-1d80681a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;background-color:#fff;-webkit-flex-basis:48%;flex-basis:48%;max-width:calc((100% - %?30?%) / 2);margin-right:%?30?%;margin-bottom:%?20?%;border-radius:%?10?%}.goods-list.double-column .goods-item[data-v-1d80681a]:nth-child(2n){margin-right:0}.goods-list.double-column .goods-item .goods-img[data-v-1d80681a]{position:relative;overflow:hidden;padding-top:100%;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%}.goods-list.double-column .goods-item .goods-img uni-image[data-v-1d80681a]{width:100%;position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.goods-list.double-column .goods-item .goods-tag[data-v-1d80681a]{color:#fff;line-height:1;padding:%?8?% %?16?%;position:absolute;border-bottom-right-radius:%?10?%;top:0;left:0;font-size:%?22?%}.goods-list.double-column .goods-item .goods-tag-img[data-v-1d80681a]{position:absolute;border-top-left-radius:%?10?%;width:%?80?%;height:%?80?%;top:0;left:0;z-index:5;overflow:hidden}.goods-list.double-column .goods-item .goods-tag-img uni-image[data-v-1d80681a]{width:100%;height:100%}.goods-list.double-column .goods-item .info-wrap[data-v-1d80681a]{padding:0 %?26?% %?26?% %?26?%}.goods-list.double-column .goods-item .goods-name[data-v-1d80681a]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-top:%?20?%;height:%?68?%}.goods-list.double-column .goods-item .discount-price[data-v-1d80681a]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%}.goods-list.double-column .goods-item .discount-price .unit[data-v-1d80681a]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info[data-v-1d80681a]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?16?%}.goods-list.double-column .goods-item .pro-info .delete-price[data-v-1d80681a]{text-decoration:line-through;-webkit-box-flex:1;-webkit-flex:1;flex:1}.goods-list.double-column .goods-item .pro-info .delete-price .unit[data-v-1d80681a]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-1d80681a]{line-height:1}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-1d80681a]:nth-child(2){text-align:right}.goods-list.double-column .goods-item .member-price-tag[data-v-1d80681a]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.double-column .goods-item .member-price-tag uni-image[data-v-1d80681a]{width:100%}',""]),t.exports=o},2410:function(t,o,e){"use strict";var i=e("144f"),n=e.n(i);n.a},2878:function(t,o,e){var i=e("24fb");o=i(!1),o.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.uni-countdown[data-v-aa16a5de]{padding:%?2?% 0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-countdown__splitor[data-v-aa16a5de]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:%?44?%;padding:0 %?5?%;font-size:%?24?%}.uni-countdown__splitor.day[data-v-aa16a5de]{line-height:%?50?%}.uni-countdown__number[data-v-aa16a5de]{line-height:%?44?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?44?%;border-radius:%?6?%;margin:0 %?5?%;font-size:%?28?%;border:1px solid #000;font-size:%?24?%;padding:0 %?10?%}',""]),t.exports=o},"2b12":function(t,o,e){"use strict";var i=e("5bd2"),n=e.n(i);n.a},"2b52":function(t,o,e){"use strict";e.r(o);var i=e("cfb8"),n=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(o,t,(function(){return i[t]}))}(a);o["default"]=n.a},"2c8e":function(t,o,e){var i=e("24fb");o=i(!1),o.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.action-icon-wrap[data-v-c790a5ea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?100?%;min-width:%?100?%;text-align:center;position:relative;margin-right:%?6?%}.action-icon-wrap uni-button[data-v-c790a5ea]{width:100%;height:100%;position:absolute;border:none;z-index:1;padding:0;margin:0;background:none;top:0;left:0;opacity:0}.action-icon-wrap uni-button[data-v-c790a5ea]::after{border:none!important}.action-icon-wrap .iconfont[data-v-c790a5ea]{margin:0 auto %?10?%;line-height:1;font-size:%?36?%}.action-icon-wrap .corner-mark[data-v-c790a5ea]{position:absolute;z-index:99;font-size:%?20?%;top:%?4?%;right:%?12?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?24?%;height:%?24?%;padding:%?6?%;border-radius:50%}.action-icon-wrap uni-text[data-v-c790a5ea]{font-size:%?24?%;line-height:1}',""]),t.exports=o},"3b28d":function(t,o,e){"use strict";e.r(o);var i=e("ac9d"),n=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(o,t,(function(){return i[t]}))}(a);o["default"]=n.a},4955:function(t,o,e){"use strict";e.r(o);var i=e("e239"),n=e("56c7");for(var a in n)"default"!==a&&function(t){e.d(o,t,(function(){return n[t]}))}(a);e("1db7");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"1d80681a",null,!1,i["a"],s);o["default"]=c.exports},"56c7":function(t,o,e){"use strict";e.r(o);var i=e("b9fb"),n=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(o,t,(function(){return i[t]}))}(a);o["default"]=n.a},"570b":function(t,o,e){"use strict";var i=e("98b3"),n=e.n(i);n.a},"5bd2":function(t,o,e){var i=e("dc94");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("6efd7209",i,!0,{sourceMap:!1,shadowMode:!1})},"5d19":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={name:"ns-goods-action-button",props:{text:{type:String,default:""},textPrice:{type:String,default:""},background:{type:String,default:""},backgroundClass:{type:String,default:""},disabled:{type:Boolean,default:!1},disabledText:{type:String,default:""}},computed:{themeStyle:function(){return"theme-"+this.$store.state.themeStyle}},methods:{clickEvent:function(){this.$emit("click")}}};o.default=i},6100:function(t,o,e){"use strict";var i=e("0c6c"),n=e.n(i);n.a},"74e2":function(t,o,e){"use strict";e.r(o);var i=e("5d19"),n=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(o,t,(function(){return i[t]}))}(a);o["default"]=n.a},"778e":function(t,o,e){"use strict";var i;e.d(o,"b",(function(){return n})),e.d(o,"c",(function(){return a})),e.d(o,"a",(function(){return i}));var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-image",{staticClass:"mescroll-totop",class:[t.value?"mescroll-totop-in":"mescroll-totop-out"],attrs:{src:t.$util.img("upload/uniapp/mescroll-totop.png"),mode:"widthFix"},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.toTopClick.apply(void 0,arguments)}}})},a=[]},"81b4":function(t,o,e){"use strict";e.r(o);var i=e("9829"),n=e("b6c4");for(var a in n)"default"!==a&&function(t){e.d(o,t,(function(){return n[t]}))}(a);e("83c0");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"c790a5ea",null,!1,i["a"],s);o["default"]=c.exports},"83c0":function(t,o,e){"use strict";var i=e("c356"),n=e.n(i);n.a},"87bf":function(t,o,e){"use strict";var i;e.d(o,"b",(function(){return n})),e.d(o,"c",(function(){return a})),e.d(o,"a",(function(){return i}));var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",{attrs:{"data-theme":t.themeStyle}},[t.disabled?e("v-uni-view",{staticClass:"action-buttom-wrap disabled",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.clickEvent.apply(void 0,arguments)}}},[t._v(t._s(t.disabledText))]):e("v-uni-view",{staticClass:"action-buttom-wrap",class:[t.backgroundClass,t.textPrice?"has-second":"",t.background?"color-join-cart":"color-base-bg"],on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.clickEvent.apply(void 0,arguments)}}},[e("v-uni-text",[t._v(t._s(t.textPrice))]),e("v-uni-text",[t._v(t._s(t.text))])],1)],1)},a=[]},"89ab":function(t,o,e){"use strict";e.r(o);var i=e("a93c"),n=e("b753");for(var a in n)"default"!==a&&function(t){e.d(o,t,(function(){return n[t]}))}(a);e("2410");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"4ea8a5ae",null,!1,i["a"],s);o["default"]=c.exports},"941b":function(t,o,e){"use strict";e.r(o);var i=e("1a22"),n=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(o,t,(function(){return i[t]}))}(a);o["default"]=n.a},9829:function(t,o,e){"use strict";var i;e.d(o,"b",(function(){return n})),e.d(o,"c",(function(){return a})),e.d(o,"a",(function(){return i}));var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",{staticClass:"action-icon-wrap",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.clickEvent.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"iconfont color-title",class:t.icon}),e("v-uni-text",[t._v(t._s(t.text))]),t.cornerMark.length?e("v-uni-view",{staticClass:"corner-mark color-base-bg",style:{background:t.cornerMarkBg,color:t.cornerMarkColor}},[t._v(t._s(t.cornerMark))]):t._e()],1)},a=[]},"98b3":function(t,o,e){var i=e("2878");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("125a9e0f",i,!0,{sourceMap:!1,shadowMode:!1})},"99e2":function(t,o,e){"use strict";var i;e.d(o,"b",(function(){return n})),e.d(o,"c",(function(){return a})),e.d(o,"a",(function(){return i}));var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",{staticClass:"ns-goods-action",class:{"bottom-safe-area":t.safeArea}},[t._t("default")],2)},a=[]},"9eed":function(t,o,e){"use strict";e.r(o);var i=e("778e"),n=e("3b28d");for(var a in n)"default"!==a&&function(t){e.d(o,t,(function(){return n[t]}))}(a);e("6100");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"aa3db5c2",null,!1,i["a"],s);o["default"]=c.exports},"9fb1":function(t,o,e){"use strict";e.r(o);var i=e("e5db"),n=e("941b");for(var a in n)"default"!==a&&function(t){e.d(o,t,(function(){return n[t]}))}(a);e("570b");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"aa16a5de",null,!1,i["a"],s);o["default"]=c.exports},a134:function(t,o,e){var i=e("24fb");o=i(!1),o.push([t.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 回到顶部的按钮 */.mescroll-totop[data-v-aa3db5c2]{z-index:99;position:fixed!important; /* 加上important避免编译到H5,在多mescroll中定位失效 */right:%?46?%!important;bottom:%?272?%!important;width:%?72?%;height:%?72?%;border-radius:50%;opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s; /* 过渡 */margin-bottom:var(--window-bottom) /* css变量 */}\r\n/* 适配 iPhoneX */.mescroll-safe-bottom[data-v-aa3db5c2]{margin-bottom:calc(var(--window-bottom) + constant(safe-area-inset-bottom)); /* window-bottom + 适配 iPhoneX */margin-bottom:calc(var(--window-bottom) + env(safe-area-inset-bottom))}\r\n/* 显示 -- 淡入 */.mescroll-totop-in[data-v-aa3db5c2]{opacity:1}\r\n/* 隐藏 -- 淡出且不接收事件*/.mescroll-totop-out[data-v-aa3db5c2]{opacity:0;pointer-events:none}",""]),t.exports=o},a6f5:function(t,o,e){var i=e("1e9c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("52c1c1ac",i,!0,{sourceMap:!1,shadowMode:!1})},a93c:function(t,o,e){"use strict";var i;e.d(o,"b",(function(){return n})),e.d(o,"c",(function(){return a})),e.d(o,"a",(function(){return i}));var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.goodsPromotion.length?e("v-uni-view",{staticClass:"ns-goods-promotion"},t._l(t.goodsPromotion,(function(o,i){return t.promotion!=o.promotion_type?e("v-uni-view",{key:i},["discount"==o.promotion_type?e("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.redirectTo("/pages/goods/detail/detail",{sku_id:o.sku_id})}}},[e("v-uni-text",{staticClass:"promotion-mark color-base-bg"},[t._v("限时折扣")]),e("v-uni-text",{staticClass:"title"},[t._v("当前商品正在参加"+t._s(o.promotion_name))]),e("v-uni-text",{staticClass:"iconfont iconright"})],1):"groupbuy"==o.promotion_type?e("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.redirectTo("/promotionpages/groupbuy/detail/detail",{groupbuy_id:o.groupbuy_id})}}},[e("v-uni-text",{staticClass:"promotion-mark color-base-bg"},[t._v("团购")]),e("v-uni-text",{staticClass:"title"},[t._v("当前商品正在参加"+t._s(o.promotion_name))]),e("v-uni-text",{staticClass:"iconfont iconright"})],1):"pintuan"==o.promotion_type?e("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.redirectTo("/promotionpages/pintuan/detail/detail",{pintuan_id:o.pintuan_id})}}},[e("v-uni-text",{staticClass:"promotion-mark color-base-bg"},[t._v("拼团")]),e("v-uni-text",{staticClass:"title"},[t._v("当前商品正在参加"+t._s(o.promotion_name))]),e("v-uni-text",{staticClass:"iconfont iconright"})],1):"seckill"==o.promotion_type?e("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.redirectTo("/promotionpages/seckill/detail/detail",{seckill_id:o.id})}}},[e("v-uni-text",{staticClass:"promotion-mark color-base-bg"},[t._v("秒杀")]),e("v-uni-text",{staticClass:"title"},[t._v("当前商品正在参加"+t._s(o.promotion_name))]),e("v-uni-text",{staticClass:"iconfont iconright"})],1):"topic"==o.promotion_type?e("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.redirectTo("/promotionpages/topics/goods_detail/goods_detail",{id:o.id})}}},[e("v-uni-text",{staticClass:"promotion-mark color-base-bg"},[t._v("专题活动")]),e("v-uni-text",{staticClass:"title"},[t._v("当前商品正在参加"+t._s(o.promotion_name))]),e("v-uni-text",{staticClass:"iconfont iconright"})],1):"bargain"==o.promotion_type?e("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.redirectTo("/promotionpages/bargain/detail/detail",{bargain_id:o.bargain_id})}}},[e("v-uni-text",{staticClass:"promotion-mark color-base-bg"},[t._v("砍价")]),e("v-uni-text",{staticClass:"title"},[t._v("当前商品正在参加"+t._s(o.promotion_name))]),e("v-uni-text",{staticClass:"iconfont iconright"})],1):"pinfan"==o.promotion_type?e("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.redirectTo("/promotionpages/rebate/rebate/detail",{pinfan_id:o.pintuan_id})}}},[e("v-uni-text",{staticClass:"promotion-mark color-base-bg"},[t._v("拼团返利")]),e("v-uni-text",{staticClass:"title"},[t._v("当前商品正在参加"+t._s(o.promotion_name))]),e("v-uni-text",{staticClass:"iconfont iconright"})],1):t._e()],1):t._e()})),1):t._e()},a=[]},ac9d:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={data:function(){return{value:!0}},methods:{toTopClick:function(){this.$emit("toTop")}}};o.default=i},b107:function(t,o,e){"use strict";e.r(o);var i=e("99e2"),n=e("2b52");for(var a in n)"default"!==a&&function(t){e.d(o,t,(function(){return n[t]}))}(a);e("d228");var s,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"40cc96ba",null,!1,i["a"],s);o["default"]=c.exports},b3e8:function(t,o,e){var i=e("03ab");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("7c83715e",i,!0,{sourceMap:!1,shadowMode:!1})},b6c4:function(t,o,e){"use strict";e.r(o);var i=e("bb0d"),n=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(o,t,(function(){return i[t]}))}(a);o["default"]=n.a},b753:function(t,o,e){"use strict";e.r(o);var i=e("09c4"),n=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(o,t,(function(){return i[t]}))}(a);o["default"]=n.a},b9fb:function(t,o,e){"use strict";var i=e("4ea4");e("99af"),e("a9e3"),e("d3b7"),e("acd8"),e("ac1f"),e("1276"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=i(e("b6ac")),a=i(e("c238")),s={name:"ns-goods-recommend",components:{nsLoading:a.default},data:function(){return{list:[],page:1,isAll:!0,isClick:!0,showLoading:!1}},mixins:[n.default],props:{isLike:{type:Boolean,default:!0},size:{type:[Number,String],default:10},auto:{type:Boolean,default:!0},load:{type:Boolean,default:!0}},mounted:function(){this.auto&&this.getLikeList()},methods:{init:function(){this.list=[],this.page=1},toDetail:function(t){var o={sku_id:t.sku_id};this.$util.redirectTo("/pages/goods/detail/detail",o)},getLikeList:function(t){var o=this,e=this;if(this.isClick&&this.isAll)return this.isClick=!1,this.page>1&&(this.showLoading=!0),new Promise((function(i,n){e.$api.sendRequest({url:"/api/goodssku/recommend",data:{page:o.page,page_size:o.auto?o.size:t},success:function(t){o.showLoading=!1,o.isClick=!0,0==t.code&&(1==o.page&&(o.list=[]),o.list=o.list.concat(t.data.list),o.list.length==t.data.count&&(o.isAll=!1),o.page+=1,i(t.data.list))}})}))},goodsImg:function(t){var o=t.split(",");return o[0]?this.$util.img(o[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},imgError:function(t){this.list[t].goods_image=this.$util.getDefaultImage().default_goods_img},showPrice:function(t){var o=t.discount_price;return t.member_price&&parseFloat(t.member_price)<parseFloat(o)&&(o=t.member_price),o},goodsTag:function(t){return t.label_name||""}}};o.default=s},bb0d:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={name:"ns-goods-action-icon",props:{icon:{type:String,default:""},text:{type:String,default:""},cornerMark:{type:String,default:""},cornerMarkBg:{type:String,default:""},cornerMarkColor:{type:String,default:"#fff"},openType:{type:String,default:""},sendData:{type:Object,default:function(){return{title:"",path:"",img:""}}}},methods:{clickEvent:function(){this.$emit("click")}}};o.default=i},c356:function(t,o,e){var i=e("2c8e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("6ef9243c",i,!0,{sourceMap:!1,shadowMode:!1})},cfb8:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={name:"ns-goods-action",props:{safeArea:{type:Boolean,default:!1}}};o.default=i},d228:function(t,o,e){"use strict";var i=e("b3e8"),n=e.n(i);n.a},d78b:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={data:function(){return{showTop:!1,scrollTop:0,oldLocation:0}},methods:{scrollToTopNative:function(){uni.pageScrollTo({duration:200,scrollTop:0})}},onReachBottom:function(){this.$refs.goodrecommend&&this.$refs.goodrecommend.getLikeList(10)},onPageScroll:function(t){this.oldLocation=t.scrollTop,t.scrollTop>400?this.showTop=!0:this.showTop=!1}};o.default=i},dc94:function(t,o,e){var i=e("24fb");o=i(!1),o.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.action-buttom-wrap[data-v-2d23be90]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?70?%;font-weight:500;font-size:%?24?%;line-height:%?70?%;border:none;color:#fff;text-align:center}.action-buttom-wrap.has-second[data-v-2d23be90]{line-height:%?50?%}.action-buttom-wrap.has-second uni-text[data-v-2d23be90]{display:block;line-height:1.2}.action-buttom-wrap[data-v-2d23be90]:active{opacity:.8}.action-buttom-wrap.disabled[data-v-2d23be90]{background:#ccc}',""]),t.exports=o},e239:function(t,o,e){"use strict";e.d(o,"b",(function(){return n})),e.d(o,"c",(function(){return a})),e.d(o,"a",(function(){return i}));var i={nsLoading:e("c238").default},n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",{staticClass:"goods-recommend"},[t.list.length?e("v-uni-view",{attrs:{"data-theme":t.themeStyle}},[e("v-uni-view",{staticClass:"goods-recommend-title"},[e("v-uni-image",{attrs:{src:t.$util.img("/upload/uniapp/guess-like.png")}})],1),e("v-uni-view",{staticClass:"goods-list double-column"},t._l(t.list,(function(o,i){return e("v-uni-view",{key:i,staticClass:"goods-item margin-bottom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(o)}}},[e("v-uni-view",{staticClass:"goods-img"},[e("v-uni-image",{attrs:{src:t.goodsImg(o.goods_image),mode:"widthFix","lazy-load":!0},on:{error:function(o){arguments[0]=o=t.$handleEvent(o),t.imgError(i)}}}),""!=t.goodsTag(o)?e("v-uni-view",{staticClass:"color-base-bg goods-tag"},[t._v(t._s(t.goodsTag(o)))]):t._e()],1),e("v-uni-view",{staticClass:"info-wrap"},[e("v-uni-view",{staticClass:"name-wrap"},[e("v-uni-view",{staticClass:"goods-name"},[t._v(t._s(o.goods_name))])],1),e("v-uni-view",{staticClass:"pro-info"},[e("v-uni-view",{staticClass:"delete-price font-size-activity-tag color-tip"},[[e("v-uni-text",{staticClass:"unit"},[t._v(t._s(t.$lang("common.currencySymbol")))]),t._v(t._s(o.market_price>0?o.market_price:o.price))]],2),e("v-uni-view",{staticClass:"sale font-size-activity-tag color-tip"},[t._v("已售"+t._s(o.sale_num)+t._s(o.unit?o.unit:"件"))])],1),e("v-uni-view",{staticClass:"lineheight-clear"},[e("v-uni-view",{staticClass:"discount-price"},[e("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",{staticClass:"price color-base-text font-size-toolbar"},[t._v(t._s(t.showPrice(o)))])],1),o.member_price&&o.member_price==t.showPrice(o)?e("v-uni-view",{staticClass:"member-price-tag"},[e("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/index/VIP.png"),mode:"widthFix"}})],1):1==o.promotion_type?e("v-uni-view",{staticClass:"member-price-tag"},[e("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/index/discount.png"),mode:"widthFix"}})],1):t._e()],1)],1)],1)})),1)],1):t._e(),t.showLoading&&t.load?e("v-uni-view",{staticClass:"circle-box"},[e("ns-loading")],1):t._e()],1)},a=[]},e5db:function(t,o,e){"use strict";var i;e.d(o,"b",(function(){return n})),e.d(o,"c",(function(){return a})),e.d(o,"a",(function(){return i}));var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",{staticClass:"uni-countdown"},[t.showDay&&t.d>0?e("v-uni-view",{staticClass:"uni-countdown__number ",class:[t.backgroundColorClass,t.colorClass,t.borderColorClass],style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay&&t.d>0?e("v-uni-view",{staticClass:"uni-countdown__splitor day",class:t.splitorColorClass,style:{color:t.splitorColor}},[t._v(t._s((t.showColon,"天")))]):t._e(),e("v-uni-view",{staticClass:"uni-countdown__number ",class:[t.backgroundColorClass,t.colorClass,t.borderColorClass],style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.h))]),e("v-uni-view",{staticClass:"uni-countdown__splitor",class:t.splitorColorClass,style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),e("v-uni-view",{staticClass:"uni-countdown__number ",class:[t.backgroundColorClass,t.colorClass,t.borderColorClass],style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.i))]),e("v-uni-view",{staticClass:"uni-countdown__splitor",class:t.splitorColorClass,style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),e("v-uni-view",{staticClass:"uni-countdown__number ",class:[t.backgroundColorClass,t.colorClass,t.borderColorClass],style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():e("v-uni-view",{staticClass:"uni-countdown__splitor",class:t.splitorColorClass,style:{color:t.splitorColor}},[t._v("秒")])],1)},a=[]},f5e8:function(t,o,e){var i=e("24fb");o=i(!1),o.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.ns-goods-promotion[data-v-4ea8a5ae]{background-color:#fff}.ns-goods-promotion .item[data-v-4ea8a5ae]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?28?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% 0;border-bottom:%?2?% solid #eee}.ns-goods-promotion .item[data-v-4ea8a5ae]:last-child{border-bottom:none}.ns-goods-promotion .item .promotion-mark[data-v-4ea8a5ae]{padding:%?6?% %?10?%;margin-right:%?16?%;line-height:1;color:#fff;border-radius:%?6?%;font-size:%?24?%}.ns-goods-promotion .item .title[data-v-4ea8a5ae]{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:1}.ns-goods-promotion .item .iconfont[data-v-4ea8a5ae]{color:#909399;font-size:%?28?%}.ns-goods-promotion .item .img-wrap[data-v-4ea8a5ae]{width:%?38?%;height:%?38?%}.ns-goods-promotion .item .img-wrap uni-image[data-v-4ea8a5ae]{width:100%;height:100%}',""]),t.exports=o}}]);