(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-goods-search"],{"013c":function(t,i,e){"use strict";e("c975"),e("a9e3"),e("acd8"),e("ac1f"),e("5319"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},n={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,i=getCurrentPages()[0];this.$pageVm=i.$vm||i,uni.onWindowResize((function(i){t.$emit("resize",i)})),this.$pageVm.$on("hook:onPageScroll",(function(i){t.$emit("scroll",i)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,i){t.setStyle({pullToRefresh:{support:i,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,i=String(this.scrollTop);if(-1!==i.indexOf("rpx")&&(i=uni.upx2px(i.replace("rpx",""))),i=parseFloat(i),!isNaN(i)){var e=function e(n){n.scrollTop===i&&(t.$pageVm.$off("hook:onPageScroll",e),t.$emit("scrolldone",o))};uni.pageScrollTo({scrollTop:i,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",e)}})}}}};i.default=n},"05b8":function(t,i,e){var o=e("7cf3");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=e("4f06").default;n("431d827b",o,!0,{sourceMap:!1,shadowMode:!1})},"06ae":function(t,i,e){"use strict";e("4de4"),e("26e9"),e("ac1f"),e("841c"),e("1276"),e("498a"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={data:function(){return{inputValue:"",historyList:[],searchList:[],showSearch:!0,alikeList:[],isIndex:!1,placWords:"",hotList:[],isAllHistory:!1}},onLoad:function(t){t.keyword&&(this.inputValue=t.keyword),!uni.getStorageSync("search")&&uni.setStorageSync("search",[])},onShow:function(){this.findHistoryList(),this.defaultSearch(),this.findHotList(),this.$nextTick((function(){this.getHistoryHeight()}))},methods:{findHistoryList:function(){this.historyList=uni.getStorageSync("search").reverse()},deleteHistoryList:function(){var t=this;uni.showModal({title:"提示",content:"确认删除全部历史记录？",success:function(i){i.confirm&&(uni.setStorageSync("search",[]),t.findHistoryList())}})},deleteItem:function(t){var i=this;uni.showModal({title:"提示",content:"确认删除该条历史记录？",success:function(e){if(e.confirm){var o=uni.getStorageSync("search"),n=o.filter((function(i){return i!=t}));uni.setStorageSync("search",n),i.findHistoryList()}}})},defaultSearch:function(){var t=this;this.$api.sendRequest({url:"/api/goods/defaultSearchWords",success:function(i){t.placWords=i.data.words}})},findHotList:function(){var t=this;this.$api.sendRequest({url:"/api/goods/hotSearchWords",success:function(i){""!=i.data.words&&(t.hotList=i.data.words.split(","))}})},inputFocus:function(t){this.showScroll=!1,""!=this.inputValue.trim()&&(this.dataList=[])},otherSearch:function(t){this.inputValue=t,this.search()},search:function(){var t=this;if(""!=this.inputValue.trim()){this.showScroll=!0;var i=uni.getStorageSync("search"),e=[];i.length?(e=i.filter((function(i){return i!=t.inputValue.trim()})),e.push(this.inputValue.trim())):e.push(this.inputValue.trim()),uni.setStorageSync("search",e),this.$util.redirectTo("/pages/goods/list",{keyword:this.inputValue.trim()})}else""==this.placWords?this.$util.showToast({title:"搜索内容不能为空哦"}):this.$util.redirectTo("/pages/goods/list",{keyword:this.placWords})},getHistoryHeight:function(){var t=this,i=uni.createSelectorQuery().in(this);i.select("#history-list").boundingClientRect((function(i){i&&i.height>2*uni.upx2px(70)+2*uni.upx2px(35)&&(t.isAllHistory=!0)})).exec()}}};i.default=o},4020:function(t,i,e){"use strict";var o;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return o}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},s=[]},"50fe":function(t,i,e){"use strict";e.r(i);var o=e("06ae"),n=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(i,t,(function(){return o[t]}))}(s);i["default"]=n.a},"6d42":function(t,i,e){"use strict";e.r(i);var o=e("4020"),n=e("8f28");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);var a,r=e("f0c5"),c=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);i["default"]=c.exports},7045:function(t,i,e){"use strict";e.r(i);var o=e("7448"),n=e("50fe");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("9d13");var a,r=e("f0c5"),c=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"72660b8c",null,!1,o["a"],a);i["default"]=c.exports},7448:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return o}));var o={pageMeta:e("6d42").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("page-meta",{attrs:{"page-style":t.themeColor}}),e("v-uni-view",[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"cate-search"},[e("v-uni-view",{staticClass:"search-box"},[e("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"50","confirm-type":"search",focus:!0,placeholder:t.placWords?t.placWords:t.$lang("inputPlaceholder")},on:{focus:function(i){arguments[0]=i=t.$handleEvent(i),t.inputFocus.apply(void 0,arguments)},confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.search()}},model:{value:t.inputValue,callback:function(i){t.inputValue=i},expression:"inputValue"}}),e("v-uni-text",{staticClass:"iconfont iconsousuo1",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.search()}}})],1)],1),e("v-uni-view",{staticClass:"search-content"},[t.historyList.length?e("v-uni-view",{staticClass:"history"},[e("v-uni-view",{staticClass:"history-box"},[e("v-uni-view",{staticClass:"history-top"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$lang("history")))]),e("v-uni-view",{staticClass:"icon iconfont iconicon7",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteHistoryList.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"history-bottom ",style:{maxHeight:t.isAllHistory?"168rpx":"100%"},attrs:{id:"history-list"}},[t._l(t.historyList,(function(i,o){return e("v-uni-view",{key:o,staticClass:"history-li",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.otherSearch(i)}}},[e("v-uni-button",{attrs:{type:"primary"}},[t._v(t._s(i))])],1)})),t.isAllHistory?e("v-uni-view",{staticClass:"history-li history_more",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.isAllHistory=!1}}},[e("v-uni-button",{attrs:{type:"primary"}},[e("v-uni-text",{staticClass:"iconfont iconiconangledown"})],1)],1):t._e()],2)],1)],1):t._e(),t.hotList.length?e("v-uni-view",{staticClass:"history"},[e("v-uni-view",{staticClass:"history-box"},[e("v-uni-view",{staticClass:"history-top"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$lang("hot")))])],1),e("v-uni-view",{staticClass:"history-bottom"},t._l(t.hotList,(function(i,o){return e("v-uni-view",{key:o,staticClass:"history-li",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.otherSearch(i)},longpress:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteItem(i)}}},[e("v-uni-button",{attrs:{type:"primary"}},[t._v(t._s(i))])],1)})),1)],1)],1):t._e()],1)],1)],1)],1)},s=[]},"7cf3":function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-72660b8c] .fixed{position:relative;top:0}[data-v-72660b8c] .empty{margin-top:0!important}.cart-empty[data-v-72660b8c]{padding-top:54px}.content[data-v-72660b8c]{width:100vw;height:calc(100vh - env(safe-area-inset-bottom) - 0px);background:#fff}.cate-search[data-v-72660b8c]{width:100%;height:%?100?%;background:#fff;padding:%?10?% %?30?%;box-sizing:border-box;padding-top:%?30?%}.cate-search uni-input[data-v-72660b8c]{font-size:%?28?%;height:%?60?%;padding:%?15?% %?25?% %?15?% %?30?%;line-height:%?60?%;width:calc(100% - %?120?%)}.cate-search uni-text[data-v-72660b8c]{font-size:%?32?%;color:#909399;width:%?120?%;text-align:center}.cate-search .search-box[data-v-72660b8c]{width:100%;height:100%;background:#f8f8f8;display:flex;justify-content:center;align-items:center;border-radius:%?40?%}.search-content[data-v-72660b8c]{box-sizing:border-box;background:#fff}.history[data-v-72660b8c]{width:100%;box-sizing:border-box}.history .history-box[data-v-72660b8c]{width:100%;height:100%;background:#fff;padding:%?30?% %?30?% %?0?% %?30?%;box-sizing:border-box;overflow:hidden}.history .history-box .history-top[data-v-72660b8c]{width:100%;height:%?60?%;display:flex;justify-content:space-between;align-items:center;font-size:%?32?%}.history .history-box .history-top .title[data-v-72660b8c]{font-weight:500;font-size:%?32?%}.history .history-box .history-top .iconfont[data-v-72660b8c]{color:#909399;font-size:%?28?%}.history .history-box .history-bottom[data-v-72660b8c]{width:100%;padding-top:%?20?%;position:relative}.history .history-box .history-bottom .history-li[data-v-72660b8c]{display:inline-block;margin-right:%?20?%;margin-bottom:%?15?%;max-width:100%}.history .history-box .history-bottom .history-li uni-button[type="primary"][data-v-72660b8c]{line-height:%?66?%;background:#f8f8f8!important;height:%?66?%;color:#303133!important;margin:0 %?0?% %?4?% 0!important;padding:0 %?20?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.history .history-box .history-bottom .history-li.history_more[data-v-72660b8c]{margin-right:0;position:absolute;bottom:0;right:0}.history .hidden-show[data-v-72660b8c]{width:100%;height:%?70?%;text-align:center;line-height:%?70?%}.search-alike[data-v-72660b8c]{width:100%;height:calc(100vh - %?100?%);padding:0 %?20?%;box-sizing:border-box}.search-alike .alike-box[data-v-72660b8c]{width:100%;height:100%;background:#fff;border-radius:%?20?%;overflow:hidden}',""]),t.exports=i},"8f28":function(t,i,e){"use strict";e.r(i);var o=e("013c"),n=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(i,t,(function(){return o[t]}))}(s);i["default"]=n.a},"9d13":function(t,i,e){"use strict";var o=e("05b8"),n=e.n(o);n.a}}]);