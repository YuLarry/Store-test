(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index/index"],{1407:function(t,e,n){},"278f":function(t,e,n){"use strict";var o=n("4d15"),i=n.n(o);i.a},"3a60":function(t,e,n){"use strict";n.r(e);var o=n("7f78"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"4d15":function(t,e,n){},"7f78":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("a34a")),i=(a(n("5201")),n("319c"),a(n("b6ac")));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,o,i,a,r){try{var u=t[a](r),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(o,i)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}var c=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("d7b6"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/diy-bottom-nav/diy-bottom-nav").then(function(){return resolve(n("4f50"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/diy-index-page/diy-index-page").then(function(){return resolve(n("c6b4"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/diy-group/diy-group").then(function(){return resolve(n("b5d2"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/ns-navbar/ns-navbar").then(function(){return resolve(n("b3c1"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/ns-copyright/ns-copyright").then(function(){return resolve(n("36db"))}.bind(null,n)).catch(n.oe)},f=t.getSystemInfoSync(),g={components:{uniPopup:c,diyBottomNav:l,nsNavbar:h,diyIndexPage:s,diyGroup:d,nsCopyRight:p},mixins:[i.default],data:function(){return{diyData:{global:{title:"",popWindow:{imageUrl:"",count:-1,link:{},imgWidth:"",imgHeight:""}}},navTitle:"",siteInfo:null,memberId:0,id:0,store:{},storeId:0,latitude:null,longitude:null,isIphoneX:!1,pageHeight:"0",headerHeight:"0",bottomHeight:"0",topIndexValue:null,statusBarHeight:f.statusBarHeight,collectTop:44,showTip:!1,mpCollect:!1,showSkeleton:!1,mpShareData:null}},onPullDownRefresh:function(){var t=this;return u(o.default.mark((function e(){return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getDiyInfo();case 2:case"end":return e.stop()}}),e)})))()},watch:{storeId:function(){this.$forceUpdate()}},onLoad:function(e){if(t.hideTabBar(),this.isIphoneX=this.$util.uniappIsIPhoneX(),e.source_member&&t.setStorageSync("source_member",e.source_member),e.scene){var n=decodeURIComponent(e.scene);n=n.split("&"),n.length&&n.forEach((function(e){-1!=e.indexOf("source_member")&&t.setStorageSync("source_member",e.split("-")[1])}))}t.getStorageSync("DIYVIEW_INDEX")&&(this.diyData=JSON.parse(t.getStorageSync("DIYVIEW_INDEX")))},onHide:function(){this.$store.commit("setDiySeckillInterval",null)},onShow:function(){var e=this;return u(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.refresh();case 2:e.getHeight(),e.$store.commit("setDiySeckillInterval",1),t.getStorageSync("token")&&t.getStorageSync("source_member")&&e.$util.onSourceMember(t.getStorageSync("source_member")),e.$util.getMpShare().then((function(t){e.mpShareData=t}));case 6:case"end":return n.stop()}}),n)})))()},onShareAppMessage:function(){return this.mpShareData.appMessage},onShareTimeline:function(){return this.mpShareData.timeLine},onPageScroll:function(t){this.$refs.topNav&&(t.scrollTop>=20?this.$refs.topNav.navTopBg():this.$refs.topNav.unSetnavTopBg())},computed:{top:function(){var t=0;return t=this.isIphoneX?180:140,t},bgColor:function(){var t="";return this.diyData&&this.diyData.global&&(t=this.diyData.global.bgColor),t},bgImg:function(){var t="";return this.diyData&&this.diyData.global&&(t=this.diyData.global.topNavbg?"url("+this.$util.img(this.diyData.global.bgUrl)+")":this.diyData.global.bgColor),t},bgUrl:function(){var t="";return this.diyData&&this.diyData.global&&(t=this.diyData.global.topNavbg?"transparent":this.diyData.global.bgUrl),t},bgNav:function(){return this.diyData.global.topNavColor?{background:this.diyData.global.topNavColor}:{background:"#ffffff"}},backgroundUrl:function(){var t=this.bgUrl?"background:url("+this.$util.img(this.bgUrl)+") no-repeat 0 0/100%":"";return t},scrollHeight:function(){return void 0!=this.pageHeight&&void 0!=this.headerHeight&&void 0!=this.bottomHeight?"calc("+this.pageHeight+"px - "+this.headerHeight+" - "+this.bottomHeight+")":"100vh"},scrollTopHeight:function(){return void 0!=this.pageHeight&&void 0!=this.headerHeight&&void 0!=this.bottomHeight?"calc("+this.pageHeight+"px - "+this.headerHeight+" - "+this.bottomHeight+" - 80rpx)":"100vh"},textNavColor:function(){return this.diyData.global.textNavColor?this.diyData.global.textNavColor:"#ffffff"},openBottomNav:function(){var t=!1;return this.diyData&&this.diyData.global&&(t=this.diyData.global.openBottomNav),t},minHeight:function(){return void 0!=this.pageHeight&&void 0!=this.headerHeight&&void 0!=this.bottomHeight?"calc(100vh - "+this.headerHeight+" - "+this.bottomHeight+" - 80rpx)":"100vh"},globalS:function(){return this.diyData.global}},methods:{navbarHeight:function(){var t="ios"==f.platform?44:48;return this.collectTop?this.collectTop:t},callback:function(){this.$refs.indexPage&&this.$refs.indexPage.initPageIndex()},refresh:function(){var e=this;return u(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.store=t.getStorageSync("store")?t.getStorageSync("store"):{},e.store&&(e.storeId=e.store.store_id),e.$langConfig.refresh(),t.getStorageSync("token")&&e.getMemberId(),n.next=6,e.getDiyInfo();case 6:case"end":return n.stop()}}),n)})))()},getHeight:function(){var e=this;t.getSystemInfo({success:function(t){e.pageHeight=t.screenHeight}}),this.$nextTick((function(){var n=t.createSelectorQuery().in(e);n.select(".page-header").boundingClientRect((function(t){e.headerHeight=t.height+"px"})).exec()})),this.$nextTick((function(){var n=t.createSelectorQuery().in(e);n.select(".page-bottom").boundingClientRect((function(t){e.bottomHeight="55px"})).exec()}))},getDiyInfo:function(){var e=this;return u(o.default.mark((function n(){var i;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i="DIYVIEW_INDEX",e.$api.sendRequest({url:"/api/diyview/info",data:{name:i},async:!0,success:function(n){if(0==n.code&&n.data){var o=n.data;if(o.value){t.setStorageSync("DIYVIEW_INDEX",o.value),e.diyData=JSON.parse(o.value),e.$langConfig.title(e.diyData.global.title),e.navTitle=e.diyData.global.title,e.mpCollect=e.diyData.global.mpCollect,e.diyData.global.popWindow&&e.diyData.global.popWindow.imageUrl&&setTimeout((function(){if(1==e.diyData.global.popWindow.count){var n=t.getStorageSync("index_popwindow_count");(e.$refs.uniPopupWindow&&""==n||e.$refs.uniPopupWindow&&1==n)&&(e.$refs.uniPopupWindow.open(),t.setStorageSync("index_popwindow_count",1))}else 0==e.diyData.global.popWindow.count&&(e.$refs.uniPopupWindow.open(),t.setStorageSync("index_popwindow_count",0))}),500);for(var i=0;i<e.diyData.value.length;i++)"TopCategory"==e.diyData.value[i].controller&&(e.topIndexValue=e.diyData.value[i]);!t.getStorageSync("isCollect")&&e.diyData.global.mpCollect&&(e.$refs.collectPopupWindow.open(),e.showTip=!0)}t.stopPullDownRefresh()}else e.diyData={}}});case 2:case"end":return n.stop()}}),n)})))()},closePopupWindow:function(){this.$refs.uniPopupWindow.close(),t.setStorageSync("index_popwindow_count",-1)},closeCollectPopupWindow:function(){this.$refs.collectPopupWindow.close(),t.setStorageSync("isCollect",!0)},redirectTo:function(t){this.$util.diyRedirectTo(t)},getMemberId:function(){var t=this;this.$api.sendRequest({url:"/api/member/id",success:function(e){e.code>=0&&(t.memberId=e.data)}})}}};e.default=g}).call(this,n("543d")["default"])},d223:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={nsNavbar:function(){return n.e("components/ns-navbar/ns-navbar").then(n.bind(null,"b3c1"))},diyIndexPage:function(){return n.e("components/diy-index-page/diy-index-page").then(n.bind(null,"c6b4"))},diyGroup:function(){return n.e("components/diy-group/diy-group").then(n.bind(null,"b5d2"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"d7b6"))},diyBottomNav:function(){return n.e("components/diy-bottom-nav/diy-bottom-nav").then(n.bind(null,"4f50"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$util.img(t.diyData.global.popWindow.imageUrl)),o=t.showTip?t.$util.img("/upload/uniapp/collect2.png"):null;t.$mp.data=Object.assign({},{$root:{g0:n,g1:o}})},a=[]},d54e:function(t,e,n){"use strict";var o=n("1407"),i=n.n(o);i.a},f437:function(t,e,n){"use strict";n.r(e);var o=n("d223"),i=n("3a60");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("d54e"),n("278f");var r,u=n("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"bcb8fa16",null,!1,o["a"],r);e["default"]=c.exports},fb41:function(t,e,n){"use strict";(function(t){n("67ba");o(n("66fd"));var e=o(n("f437"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["fb41","common/runtime","common/vendor"]]]);