(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-notice-list-list"],{"32de":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("4160"),i("ac1f"),i("5319"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("b6ac")),o={data:function(){return{dataList:[]}},onShow:function(){this.$langConfig.refresh()},mixins:[a.default],methods:{getData:function(t){var e=this;this.$api.sendRequest({url:"/api/notice/page",data:{page_size:t.size,page:t.num},success:function(i){var n=[],a=i.message;0==i.code&&i.data?n=i.data.list:e.$util.showToast({title:a}),t.endSuccess(n.length),1==t.num&&(e.dataList=[]),e.dataList=e.dataList.concat(n),e.dataList.forEach((function(t){t.info=t.content.replace(/<[^>]+>/g,"")})),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(i){t.endErr(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},jumpDetail:function(t){this.$util.redirectTo("/otherpages/notice/detail/detail?notice_id="+t)}},onShareAppMessage:function(t){var e="公告",i="/otherpages/notice/list/list";return{title:e,path:i,success:function(t){},fail:function(t){}}}};e.default=o},4325:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={nsEmpty:i("90af").default,loadingCover:i("4c1d").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{attrs:{"data-theme":t.themeStyle}},[i("mescroll-uni",{ref:"mescroll",on:{getData:function(e){arguments[0]=e=t.$handleEvent(e),t.getData.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"list"},slot:"list"},[t.dataList.length?i("v-uni-view",{staticClass:"notice-list"},t._l(t.dataList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"notice-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpDetail(e.id)}}},[i("v-uni-view",{staticClass:"title-info"},[i("v-uni-view",{staticClass:"title"},[1==e.is_top?i("v-uni-text",{staticClass:"color-base-bg tag"},[t._v("置顶")]):t._e(),i("v-uni-text",{staticClass:"txt"},[t._v(t._s(e.title))])],1),i("v-uni-text",{staticClass:"release-time"},[t._v(t._s(t.$util.timeStampTurnTime(e.create_time,1)))])],1),i("v-uni-view",{staticClass:"more"},[i("v-uni-view",{staticClass:"detail"},[t._v(t._s(e.info))]),i("v-uni-view",{staticClass:"iconfont iconright"})],1)],1)})),1):i("v-uni-view",{staticClass:"cart-empty"},[i("ns-empty",{attrs:{text:"暂无公告",isIndex:!1}})],1),i("loading-cover",{ref:"loadingCover"})],1)],2)],1)},o=[]},"43af":function(t,e,i){"use strict";var n=i("6dc1"),a=i.n(n);a.a},"4fee":function(t,e,i){"use strict";i.r(e);var n=i("4325"),a=i("a5c77");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("43af");var s,l=i("f0c5"),c=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"3d25c503",null,!1,n["a"],s);e["default"]=c.exports},"6dc1":function(t,e,i){var n=i("d7cc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("34bc98bb",n,!0,{sourceMap:!1,shadowMode:!1})},a5c77:function(t,e,i){"use strict";i.r(e);var n=i("32de"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},d7cc:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-3d25c503] .fixed{position:relative;top:0}.cart-empty[data-v-3d25c503]{padding-top:154px}.notice-list .notice-item[data-v-3d25c503]{margin:%?20?% %?30?%;background:#fff;border-radius:%?10?%;padding:%?32?% %?34?% %?23?% %?34?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:1}.notice-list .notice-item .title-info[data-v-3d25c503]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f3f3f3;padding-bottom:%?20?%;overflow:hidden}.notice-list .notice-item .title-info .title[data-v-3d25c503]{-webkit-box-flex:4;-webkit-flex:4;flex:4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.notice-list .notice-item .title-info .title .txt[data-v-3d25c503]{color:#000;font-size:%?28?%;line-height:%?28?%}.notice-list .notice-item .title-info .title .tag[data-v-3d25c503]{font-size:%?22?%;color:#fff;line-height:%?28?%;border-radius:%?6?%;padding:%?2?% %?6?%;margin-right:%?10?%}.notice-list .notice-item .title-info .release-time[data-v-3d25c503]{-webkit-box-flex:3;-webkit-flex:3;flex:3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-left:%?20?%;color:#909399;text-align:right;font-size:%?24?%}.notice-list .notice-item .content[data-v-3d25c503]{margin-top:%?10?%;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;color:#909399;font-size:%?22?%;padding-bottom:%?30?%}.notice-list .notice-item .more[data-v-3d25c503]{width:100%;padding-top:%?20?%;font-size:%?24?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.notice-list .notice-item .more .detail[data-v-3d25c503]{width:%?505?%;float:left;color:#606266;font-size:%?24?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.notice-list .notice-item .more .iconright[data-v-3d25c503]{float:right;color:#909399;font-size:%?28?%}',""]),t.exports=e}}]);