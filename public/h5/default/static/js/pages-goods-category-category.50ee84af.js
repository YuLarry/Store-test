(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-category-category"],{"527c":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-187b3a3a] .uni-popup__wrapper.uni-center{background:rgba(0,0,0,.6)}[data-v-187b3a3a] .uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box{border-radius:10px;background:transparent}[data-v-187b3a3a] .uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box{overflow-y:visible}',""]),e.exports=t},"5d2c":function(e,t,n){"use strict";var a=n("bb9a"),r=n.n(a);r.a},"6c24":function(e,t,n){"use strict";var a=n("4ea4");n("ac1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=a(n("1da1")),o=a(n("7129")),i=a(n("3af8")),u=a(n("245b")),c={components:{diyBottomNav:i.default,diyGoodsLevelCategory:o.default},data:function(){return{diyData:{},categoryHeight:0,categoryRefresh:0}},mixins:[u.default],onLoad:function(){uni.hideTabBar(),this.getDiyInfo()},onShow:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getCateHeight();case 2:n=uni.getStorageSync("token")?uni.getStorageSync("token"):"",e.$store.commit("setToken",uni.getStorageSync("token")),e.$langConfig.refresh(),n&&(e.categoryRefresh=e.categoryRefresh?0:1,e.$store.commit("setflRefresh",e.categoryRefresh));case 6:case"end":return t.stop()}}),t)})))()},computed:{},methods:{getCateHeight:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=0,t.next=3,uni.getSystemInfo({async:!1});case 3:a=t.sent,r=0,e.$nextTick((function(){var t=uni.createSelectorQuery().in(e);t.select("#tab-bar").boundingClientRect((function(t){r=t.height,n=a[1].windowHeight-r,e.$util.uniappIsIPhoneX(),e.categoryHeight="height:"+n+"px"})).exec()}));case 6:case"end":return t.stop()}}),t)})))()},netFinish:function(e){e&&this.$refs.loadingCover&&this.$refs.loadingCover.hide()},getDiyInfo:function(){var e=this;this.$api.sendRequest({url:"/api/diyview/info",data:{name:"DIYVIEW_GOODS_CATEGORY"},success:function(t){0==t.code&&t.data?(e.diyData=t.data,e.diyData.value&&(e.diyData=JSON.parse(e.diyData.value)),uni.stopPullDownRefresh()):e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})}}};t.default=c},"8f1c":function(e,t,n){"use strict";n.r(t);var a=n("f71d"),r=n("f6dd");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("5d2c");var i,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"187b3a3a",null,!1,a["a"],i);t["default"]=c.exports},bb9a:function(e,t,n){var a=n("527c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("2011ad8e",a,!0,{sourceMap:!1,shadowMode:!1})},f6dd:function(e,t,n){"use strict";n.r(t);var a=n("6c24"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},f71d:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={diyGoodsLevelCategory:n("7129").default,loadingCover:n("b1ae").default,diyBottomNav:n("3af8").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{attrs:{"data-theme":e.themeStyle}},[e._l(e.diyData.value,(function(t,a){return["GoodsCategory"==t.controller?n("v-uni-view",{key:a+"_0",style:e.categoryHeight},[n("diy-goods-level-category",{ref:"goodsLevelCategory",refInFor:!0,attrs:{refreshData:e.categoryRefresh,value:t},on:{netFinish:function(t){arguments[0]=t=e.$handleEvent(t),e.netFinish.apply(void 0,arguments)}}})],1):e._e()]})),n("loading-cover",{ref:"loadingCover"}),n("v-uni-view",{attrs:{id:"tab-bar"}},[n("diy-bottom-nav",{attrs:{type:"shop"}})],1)],2)},o=[]}}]);