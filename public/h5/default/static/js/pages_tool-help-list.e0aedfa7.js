(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-help-list"],{"013c":function(t,e,o){"use strict";o("c975"),o("a9e3"),o("acd8"),o("ac1f"),o("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},i={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var o=function o(i){i.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",o),t.$emit("scrolldone",n))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",o)}})}}}};e.default=i},"11b2":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{dataList:[]}},onLoad:function(){this.getData()},onShow:function(){},methods:{getData:function(){var t=this;this.$api.sendRequest({url:"/api/helpclass/lists",data:{app_module:"shop"},success:function(e){0==e.code&&e.data?t.dataList=e.data:t.$util.showToast({title:e.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},helpDetail:function(t){t.link_address?uni.redirectTo({url:"/pages_tool/webview/webview?src="+encodeURIComponent(t.link_address)}):this.$util.redirectTo("/pages_tool/help/detail",{id:t.id})}},onShareAppMessage:function(t){var e="帮助中心使你更加方便",o="/pages_tool/help/list";return{title:e,path:o,success:function(t){},fail:function(t){}}}};e.default=n},"15ef":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.help[data-v-53f72d2c]{height:100%;box-sizing:border-box;padding-top:%?20?%}.help .help-item[data-v-53f72d2c]{width:calc(100% - %?60?%);margin:0 auto;padding:%?32?% %?35?%;box-sizing:border-box;background-color:#fff;margin-bottom:%?18?%;border-radius:%?10?%}.help .help-item .item-title[data-v-53f72d2c]{padding-bottom:%?15?%;font-size:%?30?%;color:#000;border-bottom:%?2?% solid #f1f1f1}.help .help-item .item-title.empty[data-v-53f72d2c]{padding-bottom:0;border-bottom:none}.help .help-item .item-content[data-v-53f72d2c]{padding:%?24?% 0;border-bottom:%?2?% solid #f1f1f1;font-size:%?28?%;color:#606266}.help .help-item .item-content[data-v-53f72d2c]:last-child{border-bottom:none;padding-bottom:0}',""]),t.exports=e},4020:function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},a=[]},4838:function(t,e,o){"use strict";var n=o("c86d"),i=o.n(n);i.a},"6d42":function(t,e,o){"use strict";o.r(e);var n=o("4020"),i=o("8f28");for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);var r,l=o("f0c5"),c=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=c.exports},"8f28":function(t,e,o){"use strict";o.r(e);var n=o("013c"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},c4f3:function(t,e,o){"use strict";o.r(e);var n=o("11b2"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},c86d:function(t,e,o){var n=o("15ef");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("bca669f4",n,!0,{sourceMap:!1,shadowMode:!1})},e65b:function(t,e,o){"use strict";o.r(e);var n=o("f6e0"),i=o("c4f3");for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("4838");var r,l=o("f0c5"),c=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"53f72d2c",null,!1,n["a"],r);e["default"]=c.exports},f6e0:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var n={pageMeta:o("6d42").default,nsEmpty:o("2c4c").default,loadingCover:o("790a").default},i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("page-meta",{attrs:{"page-style":t.themeColor}}),o("v-uni-view",{staticClass:"help"},[t.dataList.length?t._l(t.dataList,(function(e,n){return o("v-uni-view",{key:n,staticClass:"help-item"},[o("v-uni-view",{class:["item-title",0==e.child_list.length?"empty":""]},[t._v(t._s(e.class_name))]),t._l(e.child_list,(function(e,n){return o("v-uni-view",{key:n,staticClass:"item-content",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.helpDetail(e)}}},[t._v(t._s(e.title))])}))],2)})):[o("ns-empty",{attrs:{text:"暂无帮助信息",isIndex:!1}})],o("loading-cover",{ref:"loadingCover"})],2)],1)},a=[]}}]);