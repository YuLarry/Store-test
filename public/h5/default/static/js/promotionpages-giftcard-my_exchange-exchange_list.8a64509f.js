(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-giftcard-my_exchange-exchange_list"],{"07eb":function(e,a,t){"use strict";t.r(a);var n=t("0c3c"),i=t("9188");for(var c in i)"default"!==c&&function(e){t.d(a,e,(function(){return i[e]}))}(c);t("f522");var s,r=t("f0c5"),o=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"df43b3b0",null,!1,n["a"],s);a["default"]=o.exports},"0c3c":function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return c})),t.d(a,"a",(function(){return n}));var n={nsEmpty:t("0e02").default,loadingCover:t("b1ae").default},i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{attrs:{"data-theme":e.themeStyle}},[t("mescroll-uni",{ref:"mescroll",attrs:{size:10},on:{getData:function(a){arguments[0]=a=e.$handleEvent(a),e.getData.apply(void 0,arguments)}}},[t("template",{attrs:{slot:"list"},slot:"list"},[e.exchangelist.length?[t("v-uni-view",{staticClass:"exchange-list single-column"},e._l(e.exchangelist,(function(a,n){return t("v-uni-view",{key:n,staticClass:"exchange-item"},[t("v-uni-view",{staticClass:"exchange-content"},[t("v-uni-view",{staticClass:"exchange-head"},[t("v-uni-view",{staticClass:"card-name"},[e._v(e._s(a.card_name))]),t("v-uni-view",{staticClass:"card-id"},[e._v("NO."+e._s(a.entity_bianhao))])],1),t("v-uni-view",{staticClass:"exchange-text"},[t("v-uni-view",{staticClass:"card-code"},[e._v("兑换码："+e._s(a.carmichael_text))]),a.balance>0&&a.point>0?t("v-uni-view",{staticClass:"card-num"},[e._v("礼品卡权益：￥"+e._s(a.balance)+" + "+e._s(a.point)+"积分")]):a.balance>0&&0==a.point?t("v-uni-view",{staticClass:"card-num"},[e._v("礼品卡权益：￥"+e._s(a.balance))]):0==a.balance&&a.point>0?t("v-uni-view",{staticClass:"card-num"},[e._v("礼品卡权益："+e._s(a.point)+" 积分")]):e._e(),t("v-uni-view",{staticClass:"card-time"},[e._v("兑换时间："+e._s(e.$util.timeStampTurnTime(a.use_time)))])],1)],1)],1)})),1)]:t("ns-empty",{attrs:{isIndex:!1,text:"还没有兑换记录"}})],2)],2),t("loading-cover",{ref:"loadingCover"})],1)},c=[]},8813:function(e,a,t){var n=t("bc76");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=t("4f06").default;i("3ae5b524",n,!0,{sourceMap:!1,shadowMode:!1})},9188:function(e,a,t){"use strict";t.r(a);var n=t("c19c"),i=t.n(n);for(var c in n)"default"!==c&&function(e){t.d(a,e,(function(){return n[e]}))}(c);a["default"]=i.a},bc76:function(e,a,t){var n=t("24fb");a=n(!1),a.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.exchange-list[data-v-df43b3b0]{padding:%?30?%}.exchange-list .exchange-item[data-v-df43b3b0]{background-color:#fff;border-radius:%?20?%;padding:%?20?%;margin:%?25?% %?5?%}.exchange-list .exchange-item .exchange-content[data-v-df43b3b0]{padding:%?20?% %?50?%}.exchange-list .exchange-item .exchange-content .exchange-head[data-v-df43b3b0]{display:flex;justify-content:space-between}.exchange-list .exchange-item .exchange-content .exchange-head .card-name[data-v-df43b3b0]{font-size:%?34?%;color:#3a3a3a}.exchange-list .exchange-item .exchange-content .exchange-head .card-id[data-v-df43b3b0]{font-size:%?34?%;color:#3a3a3a}.exchange-list .exchange-item .exchange-content .exchange-text[data-v-df43b3b0]{margin-top:%?15?%}.exchange-list .exchange-item .exchange-content .exchange-text .card-code[data-v-df43b3b0]{color:#a0a0a0}.exchange-list .exchange-item .exchange-content .exchange-text .card-num[data-v-df43b3b0]{color:#a0a0a0}.exchange-list .exchange-item .exchange-content .exchange-text .card-time[data-v-df43b3b0]{color:#a0a0a0}',""]),e.exports=a},c19c:function(e,a,t){"use strict";var n=t("4ea4");t("99af"),t("4160"),t("fb6a"),t("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t("245b")),c={data:function(){return{exchangelist:[]}},mixins:[i.default],methods:{getData:function(e){var a=this;this.$api.sendRequest({url:"/giftcard/api/giftcard/exchangerecord",data:{page_size:e.size,page:e.num},success:function(t){var n=[];0==t.code&&t.data&&(n=t.data.list),e.endSuccess(n.length),1==e.num&&(a.exchangelist=[]),a.exchangelist=a.exchangelist.concat(n),a.exchangelist.forEach((function(e){e.start_time=a.$util.timeStampTurnTime(e.start_time).slice(0,10),e.end_time=a.$util.timeStampTurnTime(e.end_time).slice(0,10)})),a.$refs.loadingCover&&a.$refs.loadingCover.hide()},fail:function(t){e.endErr&&e.endErr(),a.$refs.loadingCover&&a.$refs.loadingCover.hide()}})}}};a.default=c},f522:function(e,a,t){"use strict";var n=t("8813"),i=t.n(n);i.a}}]);