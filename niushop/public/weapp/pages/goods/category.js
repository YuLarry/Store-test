(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/category"],{126:function(n,e,t){"use strict";(function(n){t(5);o(t(4));var e=o(t(127));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t(1)["createPage"])},127:function(n,e,t){"use strict";t.r(e);var o=t(128),r=t(130);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);t(132);var a,c=t(14),u=Object(c["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],a);u.options.__file="pages/goods/category.vue",e["default"]=u.exports},128:function(n,e,t){"use strict";t.r(e);var o=t(129);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},129:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return a})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return o}));try{o={diyCategory:function(){return t.e("components/diy-components/diy-category").then(t.bind(null,821))},nsLogin:function(){return Promise.all([t.e("common/vendor"),t.e("components/ns-login/ns-login")]).then(t.bind(null,742))},loadingCover:function(){return t.e("components/loading-cover/loading-cover").then(t.bind(null,714))},diyBottomNav:function(){return t.e("components/diy-components/diy-bottom-nav").then(t.bind(null,779))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},i=!1,a=[];r._withStripped=!0},130:function(n,e,t){"use strict";t.r(e);var o=t(131),r=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},131:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={components:{},data:function(){return{diyData:null}},onLoad:function(){n.hideTabBar(),this.getDiyInfo()},onShow:function(){this.$refs.category&&this.$refs.category[0].pageShow()},methods:{getDiyInfo:function(){var e=this;this.$api.sendRequest({url:"/api/diyview/info",data:{name:"DIY_VIEW_GOODS_CATEGORY"},success:function(t){0==t.code&&t.data&&(e.diyData=t.data,e.diyData.value&&(e.diyData=JSON.parse(e.diyData.value),e.$refs.loadingCover&&e.$refs.loadingCover.hide()),n.stopPullDownRefresh())}})},toLogin:function(){this.$refs.login.open("/pages/goods/category")}}};e.default=t}).call(this,t(1)["default"])},132:function(n,e,t){"use strict";t.r(e);var o=t(133),r=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},133:function(n,e,t){}},[[126,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods/category.js.map