(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-diy-diy-diy"],{"07f02":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".wap-floating[data-v-8af103ce] .uni-popup__wrapper.uni-custom .uni-popup__wrapper-box{background:none!important}[data-v-8af103ce] .placeholder{height:0}",""]),t.exports=e},"27ac":function(t,e,a){var i=a("54de");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("9972faea",i,!0,{sourceMap:!1,shadowMode:!1})},"392d":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={diyIndexPage:a("c6b4").default,diyGroup:a("b5d2").default,uniPopup:a("d7b6").default,diyBottomNav:a("4f50").default,loadingCover:a("4c1d").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-scroll-view",{staticClass:"diy-wrap",style:{backgroundColor:t.backgroundColor,background:t.backgroundStyleImage},attrs:{"scroll-y":"true","data-theme":t.themeStyle}},[t.topIndexValue?a("diy-index-page",{attrs:{value:t.topIndexValue,scrollHeight:t.scrollHeight,scrollTopHeight:t.scrollTopHeight,bgUrl:t.bgUrl}},[a("diy-group",{attrs:{diyData:t.diyData,storeId:t.storeId,height:t.scrollTopHeight}})],1):a("v-uni-scroll-view",{style:{height:t.scrollHeight},attrs:{"scroll-y":"true"}},[a("v-uni-view",{staticClass:"bg-index",style:"background:url("+t.$util.img(t.bgUrl)+") no-repeat 0 0/100%"},[a("diy-group",{attrs:{diyData:t.diyData,storeId:t.storeId}})],1)],1),t.diyData.global.popWindow&&-1!=t.diyData.global.popWindow.count&&t.diyData.global.popWindow.imageUrl?[a("v-uni-view",{on:{touchmove:function(e){e.preventDefault(),e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[a("uni-popup",{ref:"uniPopupWindow",staticClass:"wap-floating",attrs:{type:"center",maskClick:!1}},[a("v-uni-view",{staticClass:"image-wrap"},[a("v-uni-image",{attrs:{src:t.$util.img(t.diyData.global.popWindow.imageUrl),mode:"aspectFit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.redirectTo(t.diyData.global.popWindow.link)}}})],1),a("v-uni-text",{staticClass:"iconfont iconroundclose",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closePopupWindow.apply(void 0,arguments)}}})],1)],1)]:t._e(),t.openBottomNav?a("v-uni-view",{staticClass:"page-bottom"},[a("diy-bottom-nav",{attrs:{name:t.name}})],1):t._e(),a("loading-cover",{ref:"loadingCover"})],2)},n=[]},"3e0a":function(t,e,a){"use strict";a.r(e);var i=a("ae27"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"50d1":function(t,e,a){"use strict";var i=a("adb5"),o=a.n(i);o.a},"54de":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.diy-wrap[data-v-8af103ce]{height:100vh}.bg-index[data-v-8af103ce]{width:100%;height:100%;padding:0 %?30?%;box-sizing:border-box}.uni-popup__wrapper-box[data-v-8af103ce]{text-align:center;overflow:initial!important;background:none!important;vertical-align:middle;background:none}.wap-floating .image-wrap[data-v-8af103ce]{width:%?480?%}.wap-floating .image-wrap uni-image[data-v-8af103ce]{width:100%;border-radius:%?40?%}.wap-floating uni-text[data-v-8af103ce]{display:block;font-size:%?60?%;color:#fff;text-align:center}[data-v-8af103ce]::-webkit-scrollbar{width:0;height:0;color:transparent}',""]),t.exports=e},adb5:function(t,e,a){var i=a("07f02");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("589a030c",i,!0,{sourceMap:!1,shadowMode:!1})},ae27:function(t,e,a){"use strict";var i=a("4ea4");a("4160"),a("c975"),a("ac1f"),a("1276"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var o=i(a("1da1")),n=i(a("d7b6")),r=i(a("4f50")),u=i(a("b6ac")),d=i(a("c6b4")),s=i(a("b5d2")),c=i(a("b3c1")),l={components:{uniPopup:n.default,diyIndexPage:d.default,diyGroup:s.default,diyBottomNav:r.default,nsNavbar:c.default},data:function(){return{diyData:{global:{title:"",popWindow:{imageUrl:"",count:-1,link:{}}}},navTitle:"",siteInfo:null,memberId:0,name:"",pageHeight:"0",headerHeight:"0",bottomHeight:"0",topIndexValue:null,storeId:0,backgroundColor:"#f8f8f8",backgroundImage:""}},computed:{backgroundStyleImage:function(){var t="";return this.backgroundImage&&(t="url("+this.$util.img(this.backgroundImage)+") no-repeat 0 0/100%"),t},bgColor:function(){var t="";return this.diyData&&this.diyData.global&&(t=this.diyData.global.bgColor),t},bgUrl:function(){var t="";return this.diyData&&this.diyData.global&&(t=this.diyData.global.bgUrl),t},bgNav:function(){return this.diyData&&this.diyData.global?{background:this.diyData.global.topNavColor}:{background:"#ffffff"}},openBottomNav:function(){var t=!1;return this.diyData&&this.diyData.global&&(t=this.diyData.global.openBottomNav),t},scrollHeight:function(){return void 0!=this.pageHeight&&void 0!=this.headerHeight&&void 0!=this.bottomHeight?"calc("+this.pageHeight+"px - "+this.headerHeight+" - "+this.bottomHeight+")":"100vh"},scrollTopHeight:function(){return void 0!=this.pageHeight&&void 0!=this.headerHeight&&void 0!=this.bottomHeight?"calc("+this.pageHeight+"px - "+this.headerHeight+" - "+this.bottomHeight+" - 80rpx)":"100vh"},textNavColor:function(){return this.diyData.global.textNavColor?this.diyData.global.textNavColor:"#ffffff"},minHeight:function(){return void 0!=this.pageHeight&&void 0!=this.headerHeight&&void 0!=this.bottomHeight?"calc(100vh - "+this.headerHeight+" - "+this.bottomHeight+" - 80rpx)":"100vh"},globalS:function(){return this.diyData.global}},mixins:[u.default],onPullDownRefresh:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.refresh();case 2:case"end":return e.stop()}}),e)})))()},onLoad:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.name=t.name||"",!e.name){a.next=9;break}return e.$langConfig.refresh(),a.next=5,e.refresh();case 5:t.source_member&&uni.setStorageSync("source_member",t.source_member),t.scene&&(i=decodeURIComponent(t.scene),i=i.split("&"),i.length&&i.forEach((function(t){-1!=t.indexOf("source_member")&&uni.setStorageSync("source_member",t.split("-")[1])}))),a.next=10;break;case 9:e.$util.redirectTo("/pages/index/index/index",{},"reLaunch");case 10:e.getHeight();case 11:case"end":return a.stop()}}),a)})))()},onShow:function(){uni.getStorageSync("token")&&this.getMemberId(),this.store=uni.getStorageSync("store")?uni.getStorageSync("store"):{},this.store&&(this.storeId=this.store.store_id),uni.getStorageSync("token")&&uni.getStorageSync("source_member")&&this.$util.onSourceMember(uni.getStorageSync("source_member"))},watch:{storeId:function(){this.$forceUpdate()}},methods:{getHeight:function(){var t=this;uni.getSystemInfo({success:function(e){t.pageHeight=e.screenHeight}}),this.$nextTick((function(){var e=uni.createSelectorQuery().in(t);e.select(".page-bottom").boundingClientRect((function(e){t.bottomHeight="55px"})).exec()}))},getDiyInfo:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$api.sendRequest({url:"/api/diyview/info",data:{name:t.name},async:!0,success:function(e){if(0!=e.code||!e.data)return t.$refs.loadingCover&&t.$refs.loadingCover.hide(),void(t.diyData={});var a=e.data;if(a.value){t.diyData=JSON.parse(a.value),t.backgroundImage=t.diyData.global.bgUrl,t.backgroundColor=t.diyData.global.bgColor,t.$langConfig.title(t.diyData.global.title),t.navTitle=t.diyData.global.title,t.diyData.global.popWindow&&-1!=t.diyData.global.popWindow.count&&t.diyData.global.popWindow.imageUrl&&setTimeout((function(){if(1==t.diyData.global.popWindow.count){var e=uni.getStorageSync("diy_popwindow_count");""!=e&&1!=e||(t.$refs.uniPopupWindow.open(),uni.setStorageSync("diy_popwindow_count",1))}else 0==t.diyData.global.popWindow.count&&(t.$refs.uniPopupWindow.open(),uni.setStorageSync("diy_popwindow_count",0))}),500);for(var i=0;i<t.diyData.value.length;i++)"TopCategory"==t.diyData.value[i].controller&&(t.topIndexValue=t.diyData.value[i])}uni.stopPullDownRefresh(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}});case 1:case"end":return e.stop()}}),e)})))()},closePopupWindow:function(){this.$refs.uniPopupWindow.close(),uni.setStorageSync("diy_popwindow_count",-1)},refresh:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getDiyInfo();case 2:case"end":return e.stop()}}),e)})))()},redirectTo:function(t){this.$util.diyRedirectTo(t)},getMemberId:function(){var t=this;this.$api.sendRequest({url:"/api/member/id",success:function(e){e.code>=0&&(t.memberId=e.data)}})}},onShareAppMessage:function(t){var e="";this.siteInfo&&(e=this.siteInfo.title);var a="/otherpages/diy/diy/diy?name="+this.name;return this.memberId&&(a+="&source_member="+this.memberId),{title:e,path:a,success:function(t){},fail:function(t){}}}};e.default=l},bfb3:function(t,e,a){"use strict";a.r(e);var i=a("392d"),o=a("3e0a");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("daf6"),a("50d1");var r,u=a("f0c5"),d=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"8af103ce",null,!1,i["a"],r);e["default"]=d.exports},daf6:function(t,e,a){"use strict";var i=a("27ac"),o=a.n(i);o.a}}]);