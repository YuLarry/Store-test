(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-category"],{"509e":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={components:{},data:function(){return{diyData:null}},onLoad:function(){uni.hideTabBar(),this.getDiyInfo()},onShow:function(){this.$refs.category&&this.$refs.category[0].pageShow()},methods:{getDiyInfo:function(){var e=this;this.$api.sendRequest({url:"/api/diyview/info",data:{name:"DIY_VIEW_GOODS_CATEGORY"},success:function(a){0==a.code&&a.data&&(e.diyData=a.data,e.diyData.value&&(e.diyData=JSON.parse(e.diyData.value),e.$refs.loadingCover&&e.$refs.loadingCover.hide()),uni.stopPullDownRefresh())}})},toLogin:function(){this.$refs.login.open("/pages/goods/category")}}};a.default=n},6976:function(e,a,t){var n=t("9015");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=t("4f06").default;o("072af397",n,!0,{sourceMap:!1,shadowMode:!1})},"7bec":function(e,a,t){"use strict";t.r(a);var n=t("509e"),o=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(a,e,(function(){return n[e]}))}(r);a["default"]=o.a},9015:function(e,a,t){var n=t("24fb");a=n(!1),a.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-00ace961] .uni-popup__wrapper.uni-center{background:rgba(0,0,0,.6)}[data-v-00ace961] .uni-popup__wrapper-box{border-radius:0!important}[data-v-00ace961] .uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box{overflow-y:visible}[data-v-00ace961] .loading-layer{background:#fff!important}',""]),e.exports=a},a56b:function(e,a,t){"use strict";t.r(a);var n=t("c28c"),o=t("7bec");for(var r in o)"default"!==r&&function(e){t.d(a,e,(function(){return o[e]}))}(r);t("f66c");var i,u=t("f0c5"),c=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"00ace961",null,!1,n["a"],i);a["default"]=c.exports},c28c:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return n}));var n={pageMeta:t("6d42").default,diyCategory:t("133d").default,nsLogin:t("2893").default,loadingCover:t("790a").default,diyBottomNav:t("7932").default},o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[t("page-meta",{attrs:{"page-style":e.themeColor}}),t("v-uni-view",[e.diyData?[e._l(e.diyData.value,(function(a,n){return["GoodsCategory"==a.componentName?t("v-uni-view",[t("diy-category",{ref:"category",refInFor:!0,attrs:{value:a},on:{tologin:function(a){arguments[0]=a=e.$handleEvent(a),e.toLogin.apply(void 0,arguments)}}})],1):e._e()]}))]:e._e(),t("ns-login",{ref:"login"}),t("loading-cover",{ref:"loadingCover"}),t("v-uni-view",{attrs:{id:"tab-bar"}},[t("diy-bottom-nav",{attrs:{type:"shop"}})],1)],2)],1)},r=[]},f66c:function(e,a,t){"use strict";var n=t("6976"),o=t.n(n);o.a}}]);