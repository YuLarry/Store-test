(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-help-list-list"],{"0d64":function(t,e,i){"use strict";i.r(e);var a=i("c17a"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"52ce":function(t,e,i){"use strict";i.r(e);var a=i("d3e3"),n=i("0d64");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("cb38");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"09c1a795",null,!1,a["a"],r);e["default"]=d.exports},"77d6":function(t,e,i){var a=i("ece1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("fce91c38",a,!0,{sourceMap:!1,shadowMode:!1})},c17a:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("b6ac")),o={data:function(){return{dataList:[]}},onLoad:function(){this.getData()},mixins:[n.default],onShow:function(){this.$langConfig.refresh()},methods:{getData:function(){var t=this;this.$api.sendRequest({url:"/api/helpclass/lists",data:{app_module:"shop"},success:function(e){0==e.code&&e.data?t.dataList=e.data:t.$util.showToast({title:e.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},helpDetail:function(t){t.link_address?uni.redirectTo({url:"/otherpages/webview/webview?link="+encodeURIComponent(t.link_address)}):this.$util.redirectTo("/otherpages/help/detail/detail",{id:t.id})}},onShareAppMessage:function(t){var e="帮助中心使你更加方便",i="/otherpages/help/list/list";return{title:e,path:i,success:function(t){},fail:function(t){}}}};e.default=o},cb38:function(t,e,i){"use strict";var a=i("77d6"),n=i.n(a);n.a},d3e3:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={nsEmpty:i("90af").default,loadingCover:i("4c1d").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"help",attrs:{"data-theme":t.themeStyle}},[t.dataList.length?t._l(t.dataList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"help-item"},[i("v-uni-view",{staticClass:"item-title"},[t._v(t._s(e.class_name))]),t._l(e.child_list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item-content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.helpDetail(e)}}},[t._v(t._s(e.title))])}))],2)})):[i("ns-empty",{attrs:{text:"暂无帮助信息",isIndex:!1}})],i("loading-cover",{ref:"loadingCover"})],2)},o=[]},ece1:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.help[data-v-09c1a795]{height:100%;box-sizing:border-box;padding-top:%?20?%}.help .help-item[data-v-09c1a795]{width:calc(100% - %?60?%);margin:0 auto;padding:%?32?% %?35?%;box-sizing:border-box;background-color:#fff;margin-bottom:%?18?%;border-radius:%?10?%}.help .help-item .item-title[data-v-09c1a795]{padding-bottom:%?15?%;font-size:%?30?%;color:#000;border-bottom:1px solid #f1f1f1}.help .help-item .item-content[data-v-09c1a795]{padding:%?24?% 0;border-bottom:1px solid #f1f1f1;font-size:%?28?%;color:#606266}.help .help-item .item-content[data-v-09c1a795]:last-child{border-bottom:none;padding-bottom:0}',""]),t.exports=e}}]);