(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-index-storelist"],{"013c":function(t,e,i){"use strict";i("c975"),i("a9e3"),i("acd8"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},n={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var i=function i(n){n.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",i),t.$emit("scrolldone",o))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",i)}})}}}};e.default=n},"175b":function(t,e,i){"use strict";i.r(e);var o=i("1ea3"),n=i("1d17");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("8d2d");var a,r=i("f0c5"),l=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"2c143067",null,!1,o["a"],a);e["default"]=l.exports},"1d17":function(t,e,i){"use strict";i.r(e);var o=i("c731"),n=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);e["default"]=n.a},"1ea3":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return o}));var o={pageMeta:i("6d42").default,nsEmpty:i("2c4c").default,loadingCover:i("790a").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-meta",{attrs:{"page-style":t.themeColor}}),i("v-uni-view",[i("mescroll-uni",{ref:"mescroll",staticClass:"member-point",on:{getData:function(e){arguments[0]=e=t.$handleEvent(e),t.getData.apply(void 0,arguments)}}},[i("v-uni-view",{attrs:{slot:"list"},slot:"list"},[t.dataList.length?[i("v-uni-view",{staticClass:"index_bg color-base-bg",style:"background-image:url("+t.$util.img("public/uniapp/index/mendian.png")+");background-repeat: no-repeat;background-size: 100% 100%;background-position: center"},[i("v-uni-view",{staticClass:"head-nav"}),t.storeId&&t.dataList?i("v-uni-view",{staticClass:"store-info",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.selectStore(t.store.store_id)}}},[i("v-uni-view",{staticClass:"info-box"},[i("v-uni-view",{staticClass:"info-content"},[i("v-uni-view",{staticClass:"info-title"},[t._v(t._s(t.store.store_name))]),t.store.open_date?i("v-uni-view",{staticClass:"info-time"},[t._v("营业时间："+t._s(t.store.open_date))]):t._e(),i("v-uni-view",{staticClass:"info-address"},[t._v(t._s(t.store.full_address+t.store.address))])],1)],1),t.store.store_image?i("v-uni-image",{attrs:{src:t.$util.img(t.store.store_image)}}):i("v-uni-image",{attrs:{src:t.$util.getDefaultImage().store}})],1):t._e(),i("v-uni-view",{staticClass:"store-list"},[i("v-uni-view",{staticClass:"list-content-box"},[i("v-uni-view",{staticClass:"list-title"},[t._v("附近门店")]),i("v-uni-view",{staticClass:"list-content"},[t._l(t.dataList,(function(e,o){return[i("v-uni-view",{key:o+"_0",staticClass:"list-item"},[i("v-uni-view",{staticClass:"item-box"},[i("v-uni-view",{staticClass:"item-image",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectStore(e.store_id)}}},[e.store_image?i("v-uni-image",{attrs:{src:t.$util.img(e.store_image)}}):i("v-uni-image",{attrs:{src:t.$util.getDefaultImage().store}})],1),i("v-uni-view",{staticClass:"item-info",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.storeTap(e)}}},[i("v-uni-view",{staticClass:"item-title"},[i("v-uni-text",{staticClass:"title"},[t._v(t._s(e.store_name))]),e.distance?i("v-uni-text",{staticClass:"distance color-base-text"},[t._v("距离"+t._s(e.distance>1?e.distance+"km":1e3*e.distance+"m"))]):t._e()],1),e.open_date?i("v-uni-view",{staticClass:"item-time"},[t._v("营业时间："+t._s(e.open_date))]):t._e(),i("v-uni-view",{staticClass:"item-address"},[t._v(t._s(e.full_address+e.address))])],1),i("v-uni-view",{staticClass:"item-right",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectStore(e.store_id)}}},[i("v-uni-text",{staticClass:"iconfont iconright"})],1)],1)],1),o!=t.dataList.length-1?i("v-uni-view",{key:o+"_1",staticClass:"line"}):t._e()]}))],2)],1)],1)],1)]:[i("ns-empty",{attrs:{text:"您的附近暂无可选门店",isIndex:!1}})]],2)],1),i("loading-cover",{ref:"loadingCover"})],1)],1)},s=[]},4020:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},s=[]},"6d42":function(t,e,i){"use strict";i.r(e);var o=i("4020"),n=i("8f28");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var a,r=i("f0c5"),l=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=l.exports},"8d2d":function(t,e,i){"use strict";var o=i("a5ed"),n=i.n(o);n.a},"8f28":function(t,e,i){"use strict";i.r(e);var o=i("013c"),n=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);e["default"]=n.a},"97b7":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.index_bg[data-v-2c143067]{width:100%;height:%?422?%;background-size:100% 100%}.head-nav[data-v-2c143067]{width:100%;height:%?100?%}.head-nav.active[data-v-2c143067]{padding-top:%?40?%}.head-return[data-v-2c143067]{padding-left:%?30?%;padding-right:%?30?%;height:%?90?%;line-height:%?90?%;color:#fff;font-weight:600;font-size:%?32?%;display:flex;justify-content:space-between}.head-return uni-text[data-v-2c143067]{display:inline-block;margin-right:%?10?%}.store-info[data-v-2c143067]{width:100%;padding:%?76?% %?24?% 0;box-sizing:border-box;position:relative}.store-info .info-box[data-v-2c143067]{width:%?702?%;height:%?350?%;background:#fff;border-radius:%?20?%;padding:%?16?%;box-sizing:border-box;display:flex;justify-content:center;align-items:center}.store-info .info-box .info-content[data-v-2c143067]{width:%?660?%;height:%?312?%;background:#fff;text-align:center;border:%?2?% dashed #e5e5e5;border-radius:%?20?%;display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box}.store-info .info-box .info-content .info-title[data-v-2c143067]{max-width:50%;font-size:%?32?%;color:#303133;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:500;margin-bottom:%?36?%;line-height:1}.store-info .info-box .info-content .info-time[data-v-2c143067]{line-height:1;font-size:%?24?%;color:#909399;margin-bottom:%?36?%}.store-info .info-box .info-content .info-address[data-v-2c143067]{max-width:80%;line-height:%?42?%;font-size:%?24?%;color:#303133;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.store-info uni-image[data-v-2c143067]{width:%?104?%;height:%?104?%;position:absolute;border-radius:50%;left:calc(50% - %?54?%);top:%?24?%}.store-info .nowstore-title[data-v-2c143067]{width:100%;font-size:%?24?%;color:#fff;line-height:1;position:absolute;border-radius:50%;left:calc(50% - %?48?%);top:%?-90?%}.store-list[data-v-2c143067]{width:100%;padding:0 %?30?%;box-sizing:border-box;margin-top:%?20?%;padding-bottom:%?100?%}.store-list .line[data-v-2c143067]{width:%?654?%;margin:0 auto;height:%?2?%;background:#eee}.store-list .list-content-box[data-v-2c143067]{width:100%;height:100%;box-sizing:border-box}.store-list .list-content-box .list-title[data-v-2c143067]{width:100%;font-size:%?30?%;color:#303133;font-weight:500;line-height:1;margin:%?52?% 0 %?24?%}.store-list .list-content-box .list-content[data-v-2c143067]{width:100%;background:#fff;border-radius:%?20?%;box-sizing:border-box;overflow:hidden}.store-list .list-content-box .list-content .list-item[data-v-2c143067]{width:100%;padding:%?35?% %?24?%;box-sizing:border-box}.store-list .list-content-box .list-content .list-item .item-box[data-v-2c143067]{width:100%;height:100%;display:flex;background:#fff;align-items:center}.store-list .list-content-box .list-content .list-item .item-box .item-image[data-v-2c143067]{width:%?88?%;height:%?88?%;border-radius:50%;align-self:start}.store-list .list-content-box .list-content .list-item .item-box .item-image uni-image[data-v-2c143067]{width:%?88?%;height:%?88?%;border-radius:50%}.store-list .list-content-box .list-content .list-item .item-box .item-info[data-v-2c143067]{width:%?520?%;height:100%;padding-left:%?20?%;box-sizing:border-box;display:flex;flex-direction:column;margin-right:%?24?%;font-size:%?24?%}.store-list .list-content-box .list-content .list-item .item-box .item-info .item-title[data-v-2c143067]{display:flex;justify-content:space-between;align-items:center;margin-bottom:%?10?%}.store-list .list-content-box .list-content .list-item .item-box .item-info .item-title .title[data-v-2c143067]{max-width:%?240?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:%?28?%;color:#303133}.store-list .list-content-box .list-content .list-item .item-box .item-info .item-title .distance[data-v-2c143067]{font-size:%?20?%}.store-list .list-content-box .list-content .list-item .item-box .item-info .item-time[data-v-2c143067]{font-size:%?20?%;color:#909399;margin-bottom:%?10?%}.store-list .list-content-box .list-content .list-item .item-box .item-info .item-address[data-v-2c143067]{font-size:%?24?%;color:#303133;line-height:%?42?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.store-list .list-content-box .list-content .list-item .item-box .item-right[data-v-2c143067]{flex-grow:1;height:100%;display:flex;justify-content:center;align-items:center}.store-list .list-content-box .list-content .list-item .item-box .item-right .iconfont[data-v-2c143067]{color:#acacac}',""]),t.exports=e},a5ed:function(t,e,i){var o=i("97b7");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("694bd2d6",o,!0,{sourceMap:!1,shadowMode:!1})},c731:function(t,e,i){"use strict";i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={components:{},data:function(){return{searchText:"",dataList:[],isNetwork:1,isAll:!1,latitude:null,longitude:null,store:{},storeId:0,isIphoneX:!1}},onLoad:function(){this.isIphoneX=this.$util.uniappIsIPhoneX(),this.store=uni.getStorageSync("store")?uni.getStorageSync("store"):{},this.store&&(this.storeId=this.store.store_id),this.location?(this.latitude=this.location.latitude,this.longitude=this.location.longitude):this.$util.getLocation()},computed:{location:function(){return this.$store.state.location}},watch:{location:function(t){t&&(this.latitude=t.latitude,this.longitude=t.longitude,this.$refs.mescroll.refresh())}},methods:{navigateBack:function(){this.$util.redirectTo("/pages/index/index",{},"redirectTo")},search:function(){},getData:function(t){var e=this;if(this.isNetwork)if(this.isAll)t.endSuccess(0);else{this.isNetwork=0;var i={page:t.num,page_size:t.size};this.latitude&&this.longitude&&(i.latitude=this.latitude,i.longitude=this.longitude),this.$api.sendRequest({url:"/api/store/page",data:i,success:function(i){e.isNetwork=1,e.$refs.loadingCover&&e.$refs.loadingCover.hide();var o=[],n=i.message;0==i.code&&i.data?o=i.data.list:e.$util.showToast({title:n}),t.endSuccess(o.length),1==t.num&&(e.dataList=[]),e.dataList=e.dataList.concat(o),e.dataList.length==i.data.count&&(e.isAll=!0)},fail:function(i){t.endErr(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})}else t.endSuccess(0)},getInfo:function(){var t=this,e={store_id:this.storeId};this.latitude&&this.longitude&&(e.latitude=this.latitude,e.longitude=this.longitude),this.$api.sendRequest({url:"/api/store/info",data:e,success:function(e){e.data&&(t.store=e.data,uni.setStorageSync("store",t.store))}})},storeTap:function(t){uni.setStorageSync("store",t),this.$util.redirectTo("/pages/index/index",{},"reLaunch")},selectStore:function(t){var e=t||this.storeId;this.$util.diyRedirectTo({diy_name:"DIY_STORE_"+e,store_id:e,wap_url:"/pages/index/index?name=DIY_STORE_"+e})}}};e.default=o}}]);