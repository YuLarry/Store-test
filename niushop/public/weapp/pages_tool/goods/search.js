(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_tool/goods/search"],{488:function(t,e,n){"use strict";(function(t){n(5);i(n(4));var e=i(n(489));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},489:function(t,e,n){"use strict";n.r(e);var i=n(490),s=n(492);for(var r in s)"default"!==r&&function(t){n.d(e,t,(function(){return s[t]}))}(r);n(494);var o,c=n(14),u=Object(c["default"])(s["default"],i["render"],i["staticRenderFns"],!1,null,"37df183f",null,!1,i["components"],o);u.options.__file="pages_tool/goods/search.vue",e["default"]=u.exports},490:function(t,e,n){"use strict";n.r(e);var i=n(491);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},491:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return s})),n.d(e,"staticRenderFns",(function(){return o})),n.d(e,"recyclableRender",(function(){return r})),n.d(e,"components",(function(){return i}));var s=function(){var t=this,e=t.$createElement,n=(t._self._c,t.placWords?null:t.$lang("inputPlaceholder")),i=t.historyList.length?t.$lang("history"):null,s=t.hotList.length?t.$lang("hot"):null;t._isMounted||(t.e0=function(e){t.isAllHistory=!1}),t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:s}})},r=!1,o=[];s._withStripped=!0},492:function(t,e,n){"use strict";n.r(e);var i=n(493),s=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=s.a},493:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{inputValue:"",historyList:[],searchList:[],showSearch:!0,alikeList:[],isIndex:!1,placWords:"",hotList:[],isAllHistory:!1}},onLoad:function(e){e.keyword&&(this.inputValue=e.keyword),!t.getStorageSync("search")&&t.setStorageSync("search",[])},onShow:function(){this.findHistoryList(),this.defaultSearch(),this.findHotList(),this.$nextTick((function(){this.getHistoryHeight()}))},methods:{findHistoryList:function(){this.historyList=t.getStorageSync("search").reverse()},deleteHistoryList:function(){var e=this;t.showModal({title:"提示",content:"确认删除全部历史记录？",success:function(n){n.confirm&&(t.setStorageSync("search",[]),e.findHistoryList())}})},deleteItem:function(e){var n=this;t.showModal({title:"提示",content:"确认删除该条历史记录？",success:function(i){if(i.confirm){var s=t.getStorageSync("search"),r=s.filter((function(t){return t!=e}));t.setStorageSync("search",r),n.findHistoryList()}}})},defaultSearch:function(){var t=this;this.$api.sendRequest({url:"/api/goods/defaultSearchWords",success:function(e){t.placWords=e.data.words}})},findHotList:function(){var t=this;this.$api.sendRequest({url:"/api/goods/hotSearchWords",success:function(e){""!=e.data.words&&(t.hotList=e.data.words.split(","))}})},inputFocus:function(t){this.showScroll=!1,""!=this.inputValue.trim()&&(this.dataList=[])},otherSearch:function(t){this.inputValue=t,this.search()},search:function(){var e=this;if(""!=this.inputValue.trim()){this.showScroll=!0;var n=t.getStorageSync("search"),i=[];n.length?(i=n.filter((function(t){return t!=e.inputValue.trim()})),i.push(this.inputValue.trim())):i.push(this.inputValue.trim()),t.setStorageSync("search",i),this.$util.redirectTo("/pages/goods/list",{keyword:this.inputValue.trim()})}else""==this.placWords?this.$util.showToast({title:"搜索内容不能为空哦"}):this.$util.redirectTo("/pages/goods/list",{keyword:this.placWords})},getHistoryHeight:function(){var e=this,n=t.createSelectorQuery().in(this);n.select("#history-list").boundingClientRect((function(n){n&&n.height>2*t.upx2px(70)+2*t.upx2px(35)&&(e.isAllHistory=!0)})).exec()}}};e.default=n}).call(this,n(1)["default"])},494:function(t,e,n){"use strict";n.r(e);var i=n(495),s=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=s.a},495:function(t,e,n){}},[[488,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_tool/goods/search.js.map