(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-member-level-level_growth_rules"],{"0d63":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 回到顶部的按钮 */.mescroll-totop[data-v-aa3db5c2]{z-index:99;position:fixed!important; /* 加上important避免编译到H5,在多mescroll中定位失效 */right:%?46?%!important;bottom:%?272?%!important;width:%?72?%;height:%?72?%;border-radius:50%;opacity:0;transition:opacity .5s; /* 过渡 */margin-bottom:var(--window-bottom) /* css变量 */}\r\n/* 适配 iPhoneX */.mescroll-safe-bottom[data-v-aa3db5c2]{margin-bottom:calc(var(--window-bottom) + constant(safe-area-inset-bottom)); /* window-bottom + 适配 iPhoneX */margin-bottom:calc(var(--window-bottom) + env(safe-area-inset-bottom))}\r\n/* 显示 -- 淡入 */.mescroll-totop-in[data-v-aa3db5c2]{opacity:1}\r\n/* 隐藏 -- 淡出且不接收事件*/.mescroll-totop-out[data-v-aa3db5c2]{opacity:0;pointer-events:none}",""]),t.exports=e},"1b9a":function(t,e,n){"use strict";var i=n("1bcc"),a=n.n(i);a.a},"1bcc":function(t,e,n){var i=n("978e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("29381d54",i,!0,{sourceMap:!1,shadowMode:!1})},"3c70":function(t,e,n){var i=n("0d63");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("d53aa64a",i,!0,{sourceMap:!1,shadowMode:!1})},"3d3a":function(t,e,n){"use strict";n.r(e);var i=n("e7fa"),a=n("4814");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("51b6");var o,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"aa3db5c2",null,!1,i["a"],o);e["default"]=l.exports},"3ef5":function(t,e,n){"use strict";n.r(e);var i=n("6847"),a=n("7597");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("93b1");var o,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"704a2fce",null,!1,i["a"],o);e["default"]=l.exports},"42f3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{showTop:!1,scrollTop:0,oldLocation:0}},methods:{scrollToTopNative:function(){uni.pageScrollTo({duration:200,scrollTop:0})}},onReachBottom:function(){this.$refs.goodrecommend&&this.$refs.goodrecommend.getLikeList(10)},onPageScroll:function(t){this.oldLocation=t.scrollTop,t.scrollTop>400?this.showTop=!0:this.showTop=!1}};e.default=i},4814:function(t,e,n){"use strict";n.r(e);var i=n("56fa"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},5048:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"progress"},[n("v-uni-view",{ref:"progress",staticClass:"progress-bar color-base-bg",style:{width:t.progress+"%"}})],1)},r=[]},"51b6":function(t,e,n){"use strict";var i=n("3c70"),a=n.n(i);a.a},"56fa":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{value:!0}},methods:{toTopClick:function(){this.$emit("toTop")}}};e.default=i},6847:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={loadingCover:n("b1ae").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"member-level",attrs:{"data-theme":t.themeStyle}},[n("v-uni-view",{staticClass:"grow-explain"},[n("v-uni-view",{staticClass:"explain-title"},[n("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/level/growth_that_left.png"),mode:"aspectFit"}}),t._v("成长值说明"),n("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/level/growth_that_right.png"),mode:"aspectFit"}})],1),n("v-uni-view",{staticClass:"explain-table"},[n("v-uni-view",{staticClass:"explain-tr"},[n("v-uni-text",{staticClass:"explain-th"},[t._v("等级")]),n("v-uni-text",{staticClass:"explain-th"},[t._v("成长值")])],1),t._l(t.levelList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"explain-tr"},[n("v-uni-text",{staticClass:"explain-td"},[t._v(t._s(e.level_name))]),n("v-uni-text",{staticClass:"explain-td"},[t._v(t._s(e.growth))])],1)}))],2)],1),n("v-uni-view",{staticClass:"grow-value"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/level/explain.png"),mode:"aspectFit"}}),n("v-uni-text",[t._v("什么是成长值")])],1),n("v-uni-view",{staticClass:"content color-tip"},[t._v("成长值是消费者在店铺成为会员后，通过消费计算出来的值。成长值决定会员等级，会员等级越高，所享受的会员权益和会员礼包就越多。")])],1),n("v-uni-view",{staticClass:"acquisition-grow"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/level/explain.png"),mode:"aspectFit"}}),n("v-uni-text",[t._v("如何获得成长值")])],1),n("v-uni-view",{staticClass:"content color-tip"},[n("v-uni-text",[t._v("1、注册会员送x成长值。")]),n("v-uni-text",[t._v("2、会员充值到余额送x成长值。")]),n("v-uni-text",[t._v("3、会员签到送x成长值。")]),n("v-uni-text",[t._v("4、会员消费x元，交易完成即可获得x个成长值。")])],1)],1),t.showTop?n("to-top",{on:{toTop:function(e){arguments[0]=e=t.$handleEvent(e),t.scrollToTopNative()}}}):t._e(),n("loading-cover",{ref:"loadingCover"})],1)},r=[]},7597:function(t,e,n){"use strict";n.r(e);var i=n("f446"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"93b1":function(t,e,n){"use strict";var i=n("b22d"),a=n.n(i);a.a},"978e":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.progress[data-v-9e9d7b8a]{height:%?12?%;overflow:hidden;background-color:#ccc;border-radius:%?8?%}.progress-bar[data-v-9e9d7b8a]{float:left;height:100%;font-size:%?24?%;line-height:20px;color:#fff;text-align:center;transition:width .6s ease}',""]),t.exports=e},a88f:function(t,e,n){"use strict";n.r(e);var i=n("d49f"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},b22d:function(t,e,n){var i=n("c9ff");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("e25ea522",i,!0,{sourceMap:!1,shadowMode:!1})},c9ff:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */uni-page-body[data-v-704a2fce]{background-color:#fff}.grow-explain[data-v-704a2fce]{padding:%?30?%;margin-top:%?30?%}.grow-explain .explain-title[data-v-704a2fce]{display:flex;align-items:center;justify-content:center;line-height:1;margin-bottom:%?40?%}.grow-explain .explain-title uni-image[data-v-704a2fce]{margin:0 %?20?%;width:%?54?%;height:%?18?%}.grow-explain .explain-tr[data-v-704a2fce]{display:flex}.grow-explain .explain-th[data-v-704a2fce]{padding:%?10?% %?30?%;flex:1;background-color:#f6f1e4}.grow-explain .explain-th ~ .explain-th[data-v-704a2fce]{border-left:%?4?% solid #fff}.grow-explain .explain-td[data-v-704a2fce]{padding:%?10?% %?30?%;height:%?60?%;line-height:%?60?%;flex:1;background-color:#fcfbf7}.grow-explain .explain-td ~ .explain-td[data-v-704a2fce]{border-left:%?4?% solid #fff}.grow-value[data-v-704a2fce],\r\n.acquisition-grow[data-v-704a2fce]{padding:0 %?30?% %?30?%}.grow-value .title[data-v-704a2fce],\r\n.acquisition-grow .title[data-v-704a2fce]{display:flex;align-items:center}.grow-value .title uni-image[data-v-704a2fce],\r\n.acquisition-grow .title uni-image[data-v-704a2fce]{width:%?30?%;height:%?30?%;margin-right:%?10?%}.grow-value .content[data-v-704a2fce],\r\n.acquisition-grow .content[data-v-704a2fce]{font-size:%?24?%;margin-left:%?40?%}.grow-value .content uni-text[data-v-704a2fce],\r\n.acquisition-grow .content uni-text[data-v-704a2fce]{display:block}body.?%PAGE?%[data-v-704a2fce]{background-color:#fff}',""]),t.exports=e},d49f:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},props:{progress:{type:[Number,String],default:10}}};e.default=i},e7fa:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-image",{staticClass:"mescroll-totop",class:[t.value?"mescroll-totop-in":"mescroll-totop-out"],attrs:{src:t.$util.img("upload/uniapp/mescroll-totop.png"),mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toTopClick.apply(void 0,arguments)}}})},r=[]},f446:function(t,e,n){"use strict";var i=n("4ea4");n("4160"),n("a9e3"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("f9ea")),r=i(n("3d3a")),o=i(n("42f3")),s={components:{nsProgress:a.default,toTop:r.default},mixins:[o.default],data:function(){return{curIndex:0,descIndex:0,isDescAnimating:!1,scaleX:(634/540).toFixed(4),scaleY:(378/330).toFixed(4),swiperConfig:{indicatorDots:!1,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",interval:3e3,duration:300,circular:!1,previousMargin:"58rpx",nextMargin:"58rpx"},levelList:[{needGrowth:0,growth:0}],levelId:0,growth:0,nowIndex:0,userInfo:{},rule:[]}},computed:{listLen:function(){return this.levelList.length},remark:function(){if(this.levelList[this.curIndex])return this.levelList[this.curIndex].remark},baseColor:function(){return this.$store.state.baseColor},themeStyle:function(){return"theme-"+this.$store.state.themeStyle},nextIndex:function(){return this.curIndex==this.levelList.length-1?this.curIndex:this.curIndex+1}},onLoad:function(){this.getLevelList(),this.getLevelRule()},onShow:function(){this.$langConfig.refresh()},filters:{rate:function(t,e,n){var i=Number(n),a=Number(e[t].growth);if(t==e.length-1)return i>a?100:0;var r=Number(e[t+1].growth),o=i-a,s=r-a,l=Math.floor(o/s*100);return l>100?100:l}},methods:{swiperChange:function(t){var e=this;this.curIndex=t.detail.current,this.isDescAnimating=!0;var n=setTimeout((function(){e.descIndex=t.detail.current,clearTimeout(n)}),150)},animationfinish:function(t){this.isDescAnimating=!1},getBannerDetail:function(t){uni.showLoading({title:"将前往详情页面",duration:2e3,mask:!0})},getLevelList:function(){var t=this;this.$api.sendRequest({url:"/api/memberlevel/lists",success:function(e){e.data&&0==e.code?(t.levelList=e.data,t.getMemberInfo()):(t.$util.showToast({title:e.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide())}})},getLevelRule:function(){var t=this;this.$api.sendRequest({url:"/api/member/accountrule",success:function(e){0==e.code&&e.data&&e.data.growth&&(t.rule=e.data.growth)}})},getMemberInfo:function(){var t=this;this.$api.sendRequest({url:"/api/member/info",success:function(e){e.data&&0==e.code?(t.levelId=e.data.member_level,t.growth=e.data.growth,t.userInfo=e.data,t.levelList.forEach((function(n,i){if(n.level_id==e.data.member_level)return t.curIndex=i,t.descIndex=i,void(t.nowIndex=i)})),t.levelList.forEach((function(e,n){var i=0;n!=t.levelList.length-1?(e.needGrowth=Number(t.levelList[n+1].growth)-Number(t.growth),i=e.needGrowth<=0?100:100*(t.growth/t.levelList[n+1].growth).toFixed(2)):(e.needGrowth=Number(t.levelList[n].growth)-Number(t.growth),i=e.needGrowth<=0?100:100*(t.growth/t.levelList[n].growth).toFixed(2)),e.rate=i})),t.levelList.forEach((function(t){t.consume_discount&&(t.consume_discount=(t.consume_discount/10).toFixed(2))}))):t.$util.showToast({title:e.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})}}};e.default=s},f9ea:function(t,e,n){"use strict";n.r(e);var i=n("5048"),a=n("a88f");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("1b9a");var o,s=n("f0c5"),l=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"9e9d7b8a",null,!1,i["a"],o);e["default"]=l.exports}}]);