(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/goods/search/search"],{"125d":function(t,n,e){"use strict";var o=e("2bf5"),s=e.n(o);s.a},"2bf5":function(t,n,e){},7795:function(t,n,e){"use strict";(function(t){e("5558");o(e("66fd"));var n=o(e("9d61"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},8788:function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var o={nsShowToast:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-show-toast/ns-show-toast")]).then(e.bind(null,"691c"))}},s=function(){var t=this,n=t.$createElement,e=(t._self._c,t.placWords?null:t.$lang("inputPlaceholder")),o=t.historyList.length?t.$lang("history"):null,s=t.hotList.length?t.$lang("hot"):null;t.$mp.data=Object.assign({},{$root:{m0:e,m1:o,m2:s}})},i=[]},"9d61":function(t,n,e){"use strict";e.r(n);var o=e("8788"),s=e("ae8f");for(var i in s)"default"!==i&&function(t){e.d(n,t,(function(){return s[t]}))}(i);e("125d");var r,a=e("f0c5"),c=Object(a["a"])(s["default"],o["b"],o["c"],!1,null,"8810214c",null,!1,o["a"],r);n["default"]=c.exports},ae8f:function(t,n,e){"use strict";e.r(n);var o=e("da3d"),s=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=s.a},da3d:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=s(e("ccd8"));function s(t){return t&&t.__esModule?t:{default:t}}var i=function(){Promise.all([e.e("common/vendor"),e.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(e("691c"))}.bind(null,e)).catch(e.oe)},r=function(){Promise.all([e.e("common/vendor"),e.e("components/ns-goods-recommend/ns-goods-recommend")]).then(function(){return resolve(e("d6df"))}.bind(null,e)).catch(e.oe)},a={data:function(){return{inputValue:"",historyList:[],searchList:[],showSearch:!0,alikeList:[],isIndex:!1,placWords:"",hotList:[]}},components:{nsGoodsRecommend:r,nsShowToast:i},onLoad:function(n){n.keyword&&(this.inputValue=n.keyword),!t.getStorageSync("search")&&t.setStorageSync("search",[])},onShow:function(){this.$langConfig.refresh(),this.findHistoryList(),this.defaultSearch(),this.findHotList()},mixins:[o.default],methods:{findHistoryList:function(){this.historyList=t.getStorageSync("search").reverse()},deleteHistoryList:function(){var n=this;t.showModal({title:"提示",content:"确认删除全部历史记录？",success:function(e){e.confirm&&(t.setStorageSync("search",[]),n.findHistoryList())}})},deleteItem:function(n){var e=this;t.showModal({title:"提示",content:"确认删除该条历史记录？",success:function(o){if(o.confirm){var s=t.getStorageSync("search"),i=s.filter((function(t){return t!=n}));t.setStorageSync("search",i),e.findHistoryList()}}})},defaultSearch:function(){var t=this;this.$api.sendRequest({url:"/api/goods/defaultSearchWords",success:function(n){t.placWords=n.data.words}})},findHotList:function(){var t=this;this.$api.sendRequest({url:"/api/goods/hotSearchWords",success:function(n){t.hotList=n.data.words.split(",")}})},inputFocus:function(t){this.showScroll=!1,""!=this.inputValue.trim()&&(this.dataList=[])},inputInput:function(t){t.detail.value},otherSearch:function(t){this.inputValue=t,this.search()},search:function(){var n=this;if(""!=this.inputValue.trim()){this.showScroll=!0;var e=t.getStorageSync("search"),o=[];e.length?(o=e.filter((function(t){return t!=n.inputValue.trim()})),o.push(this.inputValue.trim())):o.push(this.inputValue.trim()),t.setStorageSync("search",o),this.$util.redirectTo("/pages/goods/list/list",{keyword:this.inputValue.trim()})}else""==this.placWords?this.$util.showToast({title:"搜索内容不能为空哦"}):this.$util.redirectTo("/pages/goods/list/list",{keyword:this.placWords})}}};n.default=a}).call(this,e("543d")["default"])}},[["7795","common/runtime","common/vendor"]]]);