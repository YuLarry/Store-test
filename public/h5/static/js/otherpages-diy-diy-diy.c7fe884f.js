(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-diy-diy-diy"],{"12f9":function(t,e,i){"use strict";i.r(e);var a=i("dd6d"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},1371:function(t,e,i){var a=i("db99");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("6a053632",a,!0,{sourceMap:!1,shadowMode:!1})},"33cf":function(t,e,i){"use strict";var a=i("1371"),o=i.n(a);o.a},"67d6":function(t,e,i){"use strict";var a=i("b5af"),o=i.n(a);o.a},"958f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.diy-wrap[data-v-3f22c827]{height:calc(100vh - 56px)}.bg-index[data-v-3f22c827]{width:100%;height:100%;padding:0 %?30?%;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-popup__wrapper-box[data-v-3f22c827]{text-align:center;overflow:initial!important;background:none!important;vertical-align:middle;background:none}.wap-floating .image-wrap[data-v-3f22c827]{width:%?480?%}.wap-floating .image-wrap uni-image[data-v-3f22c827]{width:100%;-webkit-border-radius:%?40?%;border-radius:%?40?%}.wap-floating uni-text[data-v-3f22c827]{display:block;font-size:%?60?%;color:#fff;text-align:center}[data-v-3f22c827]::-webkit-scrollbar{width:0;height:0;color:transparent}.tabBar-fill[data-v-3f22c827]{height:calc(constant(safe-area-inset-bottom) + 56px);height:calc(env(safe-area-inset-bottom) + 56px)}',""]),t.exports=e},b5af:function(t,e,i){var a=i("958f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("0edbd324",a,!0,{sourceMap:!1,shadowMode:!1})},c61f:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={diyIndexPage:i("0b5d").default,diyGroup:i("4294").default,uniPopup:i("92aa").default,diyBottomNav:i("df22").default,loadingCover:i("790a").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-scroll-view",{staticClass:"diy-wrap",attrs:{"scroll-y":!0,"data-theme":t.themeStyle}},[t.topIndexValue?i("diy-index-page",{attrs:{value:t.topIndexValue,scrollHeight:t.scrollHeight,scrollTopHeight:t.scrollTopHeight,bgUrl:t.bgUrl}},[i("diy-group",{attrs:{diyData:t.diyData,storeId:t.storeId,height:t.scrollTopHeight}})],1):i("v-uni-scroll-view",{style:{height:t.scrollHeight},attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"bg-index",style:"background:url("+t.$util.img(t.bgUrl)+") no-repeat 0 0/100%"},[i("diy-group",{attrs:{diyData:t.diyData,storeId:t.storeId}})],1)],1),t.diyData.global.popWindow&&-1!=t.diyData.global.popWindow.count&&t.diyData.global.popWindow.imageUrl?[i("v-uni-view",{on:{touchmove:function(e){e.preventDefault(),e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("uni-popup",{ref:"uniPopupWindow",staticClass:"wap-floating",attrs:{type:"center",maskClick:!1}},[i("v-uni-view",{staticClass:"image-wrap"},[i("v-uni-image",{attrs:{src:t.$util.img(t.diyData.global.popWindow.imageUrl),mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.redirectTo(t.diyData.global.popWindow.link)}}})],1),i("v-uni-text",{staticClass:"iconfont iconroundclose",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closePopupWindow.apply(void 0,arguments)}}})],1)],1)]:t._e(),i("v-uni-view",{staticClass:"tabBar-fill"}),i("v-uni-view",{staticClass:"page-bottom"},[t.openBottomNav?[i("diy-bottom-nav")]:t._e()],2),i("loading-cover",{ref:"loadingCover"})],2)},n=[]},db99:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".wap-floating[data-v-3f22c827] .uni-popup__wrapper.uni-custom .uni-popup__wrapper-box{background:none!important}[data-v-3f22c827] .placeholder{height:0}",""]),t.exports=e},dd6d:function(t,e,i){"use strict";var a=i("4ea4");i("4160"),i("c975"),i("ac1f"),i("1276"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var o=a(i("1da1")),n=a(i("92aa")),r=a(i("df22")),s=a(i("c409")),d=a(i("0b5d")),u=a(i("4294")),c=a(i("7bdc")),l={components:{uniPopup:n.default,diyIndexPage:d.default,diyGroup:u.default,diyBottomNav:r.default,nsNavbar:c.default},data:function(){return{diyData:{global:{title:"",popWindow:{imageUrl:"",count:-1,link:{}}}},navTitle:"",siteInfo:null,memberId:0,name:"",pageHeight:"0",headerHeight:"0",bottomHeight:"0",topIndexValue:null,storeId:0}},computed:{bgColor:function(){var t="";return this.diyData&&this.diyData.global&&(t=this.diyData.global.bgColor),t},bgUrl:function(){var t="";return this.diyData&&this.diyData.global&&(t=this.diyData.global.bgUrl),t},bgNav:function(){return this.diyData&&this.diyData.global?{background:this.diyData.global.topNavColor}:{background:"#ffffff"}},openBottomNav:function(){var t=!1;return this.diyData&&this.diyData.global&&(t=this.diyData.global.openBottomNav),t},scrollHeight:function(){return void 0!=this.pageHeight&&void 0!=this.headerHeight&&void 0!=this.bottomHeight?"calc("+this.pageHeight+"px - "+this.headerHeight+" - "+this.bottomHeight+")":"100vh"},scrollTopHeight:function(){return void 0!=this.pageHeight&&void 0!=this.headerHeight&&void 0!=this.bottomHeight?"calc("+this.pageHeight+"px - "+this.headerHeight+" - "+this.bottomHeight+" - 80rpx)":"100vh"},textNavColor:function(){return this.diyData.global.textNavColor?this.diyData.global.textNavColor:"#ffffff"},minHeight:function(){return void 0!=this.pageHeight&&void 0!=this.headerHeight&&void 0!=this.bottomHeight?"calc(100vh - "+this.headerHeight+" - "+this.bottomHeight+" - 80rpx)":"100vh"},globalS:function(){return this.diyData.global}},mixins:[s.default],onPullDownRefresh:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.refresh();case 2:case"end":return e.stop()}}),e)})))()},onLoad:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(e.name=t.name||"",!e.name){i.next=9;break}return e.$langConfig.refresh(),i.next=5,e.refresh();case 5:t.source_member&&uni.setStorageSync("source_member",t.source_member),t.scene&&(a=decodeURIComponent(t.scene),a=a.split("&"),a.length&&a.forEach((function(t){-1!=t.indexOf("source_member")&&uni.setStorageSync("source_member",t.split("-")[1])}))),i.next=10;break;case 9:e.$util.redirectTo("/pages/index/index/index",{},"reLaunch");case 10:e.getHeight();case 11:case"end":return i.stop()}}),i)})))()},onShow:function(){uni.getStorageSync("token")&&this.getMemberId(),this.store=uni.getStorageSync("store")?uni.getStorageSync("store"):{},this.store&&(this.storeId=this.store.store_id)},watch:{storeId:function(){this.$forceUpdate()}},methods:{getHeight:function(){var t=this;uni.getSystemInfo({success:function(e){t.pageHeight=e.screenHeight}}),this.$nextTick((function(){var e=uni.createSelectorQuery().in(t);e.select(".page-bottom").boundingClientRect((function(e){t.bottomHeight="55px"})).exec()}))},getDiyInfo:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$api.sendRequest({url:"/api/diyview/info",data:{name:t.name},async:!0,success:function(e){if(0!=e.code||!e.data)return t.$refs.loadingCover&&t.$refs.loadingCover.hide(),void(t.diyData={});var i=e.data;if(i.value){t.diyData=JSON.parse(i.value),t.$langConfig.title(t.diyData.global.title),t.navTitle=t.diyData.global.title,t.diyData.global.popWindow&&-1!=t.diyData.global.popWindow.count&&t.diyData.global.popWindow.imageUrl&&setTimeout((function(){if(1==t.diyData.global.popWindow.count){var e=uni.getStorageSync("diy_popwindow_count");""!=e&&1!=e||(t.$refs.uniPopupWindow.open(),uni.setStorageSync("diy_popwindow_count",1))}else 0==t.diyData.global.popWindow.count&&(t.$refs.uniPopupWindow.open(),uni.setStorageSync("diy_popwindow_count",0))}),500);for(var a=0;a<t.diyData.value.length;a++)"TopCategory"==t.diyData.value[a].controller&&(t.topIndexValue=t.diyData.value[a])}uni.stopPullDownRefresh(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}});case 1:case"end":return e.stop()}}),e)})))()},closePopupWindow:function(){this.$refs.uniPopupWindow.close(),uni.setStorageSync("diy_popwindow_count",-1)},refresh:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getDiyInfo();case 2:t.getDefaultImg();case 3:case"end":return e.stop()}}),e)})))()},redirectTo:function(t){this.$util.diyRedirectTo(t)},getDefaultImg:function(){this.$api.sendRequest({url:"/api/config/defaultimg",success:function(t){var e=t.data;0==t.code&&e&&uni.setStorageSync("default_img",JSON.stringify(e))}})},getMemberId:function(){var t=this;this.$api.sendRequest({url:"/api/member/id",success:function(e){e.code>=0&&(t.memberId=e.data)}})}},onShareAppMessage:function(t){var e="";this.siteInfo&&(e=this.siteInfo.title);var i="/otherpages/diy/diy/diy?name="+this.name;return this.memberId&&(i+="&source_member="+this.memberId),{title:e,path:i,success:function(t){},fail:function(t){}}}};e.default=l},e4ae:function(t,e,i){"use strict";i.r(e);var a=i("c61f"),o=i("12f9");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("67d6"),i("33cf");var r,s=i("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"3f22c827",null,!1,a["a"],r);e["default"]=d.exports}}]);