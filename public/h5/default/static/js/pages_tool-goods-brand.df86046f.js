(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-goods-brand"],{"038f":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".bg[data-v-33f194be]{width:100%;height:%?158?%;background-color:#fff;position:fixed;left:0;\r\ntop:%?88?%;\n}.ns-adv[data-v-33f194be]{background:#fff;height:%?300?%;border-radius:%?10?%\r\n\t/* padding: 8rpx 24rpx 24rpx; */}.ns-adv .image-box[data-v-33f194be]{width:100%;height:100%;border-radius:%?10?%}.ns-adv uni-image[data-v-33f194be]{width:100%;height:100%;border-radius:%?10?%}",""]),t.exports=e},"2d54":function(t,e,n){var a=n("5297");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("d054e4ee",a,!0,{sourceMap:!1,shadowMode:!1})},"3b11":function(t,e,n){var a=n("038f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("0db75226",a,!0,{sourceMap:!1,shadowMode:!1})},"3d2c":function(t,e,n){"use strict";n.r(e);var a=n("745a"),i=n.n(a);for(var d in a)"default"!==d&&function(t){n.d(e,t,(function(){return a[t]}))}(d);e["default"]=i.a},5297:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-dd0b31f8] .uni-grid-item{width:calc(100% / 3)!important}.brand-head[data-v-dd0b31f8]{width:100%;line-height:0}.brand-head uni-image[data-v-dd0b31f8]{width:100%}.brand-content[data-v-dd0b31f8]{padding:%?20?% 0;box-sizing:border-box;background:#fff;margin:%?20?% %?30?% 0}.brand-content .brand-pic[data-v-dd0b31f8]{width:60%;height:50%}.brand-content .brand_name[data-v-dd0b31f8]{width:70%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center}',""]),t.exports=e},"745a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"ns-advert",props:{keyword:{type:String}},data:function(){return{advList:[]}},created:function(){this.getAdvList()},methods:{getAdvList:function(){var t=this;this.$api.sendRequest({url:"/api/adv/detail",data:{keyword:this.keyword},success:function(e){if(0==e.code){var n=e.data.adv_list;for(var a in n)n[a].adv_url&&(n[a].adv_url=JSON.parse(n[a].adv_url));t.advList=e.data.adv_list}}})},jumppage:function(t){this.$util.diyRedirectTo(t)}}};e.default=a},"870a":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("787e")),d=a(n("75cf")),r=a(n("c267")),s={components:{uniGrid:i.default,uniGridItem:d.default,nsAdv:r.default},data:function(){return{brandList:[],siteId:0}},onLoad:function(t){t.site_id&&(this.siteId=t.site_id)},onShow:function(){},methods:{change:function(t){this.$util.redirectTo("/pages/goods/list",{brand_id:this.brandList[t.detail.index].brand_id})},getBrandList:function(t){var e=this;this.$api.sendRequest({url:"/api/goodsbrand/page",data:{page_size:t.size,page:t.num,site_id:this.siteId},success:function(n){var a=[],i=n.message;0==n.code&&n.data?a=n.data.list:e.$util.showToast({title:i}),t.endSuccess(a.length),1==t.num&&(e.brandList=[]),e.brandList=e.brandList.concat(a),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(){t.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})}},onShareAppMessage:function(t){var e="你想要的大牌都在这里",n="/pages_tool/goods/brand";return{title:e,path:n,success:function(t){},fail:function(t){}}}};e.default=s},a449:function(t,e,n){"use strict";var a=n("3b11"),i=n.n(a);i.a},b27e:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.advList.length?n("v-uni-view",[t.advList.length?n("v-uni-swiper",{staticClass:"ns-adv",attrs:{"indicator-dots":t.advList.length>1,"indicator-active-color":"#ffffff",autoplay:!0,interval:3e3,duration:1e3}},t._l(t.advList,(function(e,a){return n("v-uni-swiper-item",{key:a,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jumppage(e.adv_url)}}},[n("v-uni-view",{staticClass:"image-box",style:{"background-color":e.background}},[n("v-uni-image",{attrs:{src:t.$util.img(e.adv_image)}})],1)],1)})),1):t._e()],1):t._e()},d=[]},c267:function(t,e,n){"use strict";n.r(e);var a=n("b27e"),i=n("3d2c");for(var d in i)"default"!==d&&function(t){n.d(e,t,(function(){return i[t]}))}(d);n("a449");var r,s=n("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"33f194be",null,!1,a["a"],r);e["default"]=o.exports},c9a9:function(t,e,n){"use strict";n.r(e);var a=n("870a"),i=n.n(a);for(var d in a)"default"!==d&&function(t){n.d(e,t,(function(){return a[t]}))}(d);e["default"]=i.a},d282:function(t,e,n){"use strict";n.r(e);var a=n("e530"),i=n("c9a9");for(var d in i)"default"!==d&&function(t){n.d(e,t,(function(){return i[t]}))}(d);n("fd1e");var r,s=n("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"dd0b31f8",null,!1,a["a"],r);e["default"]=o.exports},e530:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return a}));var a={nsAdv:n("c267").default,uniGrid:n("787e").default,uniGridItem:n("75cf").default,nsEmpty:n("2c4c").default,loadingCover:n("790a").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{attrs:{"data-theme":t.themeStyle}},[n("mescroll-uni",{ref:"mescroll",attrs:{size:"20"},on:{getData:function(e){arguments[0]=e=t.$handleEvent(e),t.getBrandList.apply(void 0,arguments)}}},[n("template",{attrs:{slot:"list"},slot:"list"},[n("ns-adv",{attrs:{keyword:"NS_BRAND"}}),t.brandList.length>0?n("v-uni-view",{staticClass:"brand-content"},[n("uni-grid",{attrs:{column:3,showBorder:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.brandList,(function(e,a){return n("uni-grid-item",{key:a,attrs:{index:"index"}},[n("v-uni-image",{staticClass:"brand-pic",attrs:{src:t.$util.img(e.image_url),mode:"widthFix"}}),n("v-uni-view",{staticClass:"brand_name"},[t._v(t._s(e.brand_name))])],1)})),1)],1):t._e(),0==t.brandList.length?n("v-uni-view",[n("ns-empty",{attrs:{text:"暂无更多品牌,去首页看看吧"}})],1):t._e()],1)],2),n("loading-cover",{ref:"loadingCover"})],1)},d=[]},fd1e:function(t,e,n){"use strict";var a=n("2d54"),i=n.n(a);i.a}}]);