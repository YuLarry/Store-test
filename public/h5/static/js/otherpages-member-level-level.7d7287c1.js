(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-member-level-level"],{"03e8":function(e,t,i){var n=i("42ca");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("1f0ad51a",n,!0,{sourceMap:!1,shadowMode:!1})},"0e5a":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"progress"},[i("v-uni-view",{ref:"progress",staticClass:"progress-bar color-base-bg",style:{width:e.progress+"%"}})],1)},o=[]},1051:function(e,t,i){"use strict";i.r(t);var n=i("44aa"),a=i("21d8");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("1125");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"aa3db5c2",null,!1,n["a"],r);t["default"]=c.exports},1125:function(e,t,i){"use strict";var n=i("3f14"),a=i.n(n);a.a},"1d3d":function(e,t,i){"use strict";var n=i("4ea4");i("4160"),i("a9e3"),i("b680"),i("acd8"),i("ac1f"),i("1276"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("ccd8")),o=n(i("de23")),r=n(i("1051")),s=n(i("dada")),c=n(i("1fce")),l={components:{nsProgress:o.default,toTop:r.default,uniPopup:c.default},mixins:[s.default,a.default],data:function(){return{couponPopList:[],curIndex:0,descIndex:0,isDescAnimating:!1,scaleX:(634/540).toFixed(4),scaleY:(378/330).toFixed(4),swiperConfig:{indicatorDots:!1,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",interval:3e3,duration:300,circular:!1,previousMargin:"58rpx",nextMargin:"58rpx"},levelList:[{needGrowth:0,growth:0}],levelId:0,growth:0,nowIndex:0,userInfo:{},rule:[]}},computed:{listLen:function(){return this.levelList.length},remark:function(){if(this.levelList[this.curIndex])return this.levelList[this.curIndex].remark},baseColor:function(){return this.$store.state.baseColor},nextIndex:function(){return this.curIndex==this.levelList.length-1?this.curIndex:this.curIndex+1}},onLoad:function(){this.getLevelList(),this.getLevelRule()},onShow:function(){this.$langConfig.refresh()},filters:{rate:function(e,t,i){var n=Number(i),a=Number(t[e].growth);if(e==t.length-1)return n>a?100:0;var o=Number(t[e+1].growth),r=n-a,s=o-a,c=Math.floor(r/s*100);return c>100?100:c}},methods:{swiperChange:function(e){var t=this;this.curIndex=e.detail.current,this.isDescAnimating=!0;var i=setTimeout((function(){t.descIndex=e.detail.current,clearTimeout(i)}),150)},animationfinish:function(e){this.isDescAnimating=!1},getBannerDetail:function(e){uni.showLoading({title:"将前往详情页面",duration:2e3,mask:!0})},getLevelList:function(){var e=this;this.$api.sendRequest({url:"/api/memberlevel/lists",success:function(t){if(t.data&&0==t.code){e.levelList=t.data;for(var i=0;i<e.levelList.length;i++)e.levelList[i].send_coupon&&(e.levelList[i].coupon_length=e.levelList[i].send_coupon.split(",").length);e.getMemberInfo()}else e.$util.showToast({title:t.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getLevelRule:function(){var e=this;this.$api.sendRequest({url:"/api/member/accountrule",success:function(t){0==t.code&&t.data&&t.data.growth&&(e.rule=t.data.growth)}})},getMemberInfo:function(){var e=this;this.$api.sendRequest({url:"/api/member/info",success:function(t){t.data&&0==t.code?(e.levelId=t.data.member_level,e.growth=t.data.growth,e.userInfo=t.data,e.levelList.forEach((function(i,n){if(i.level_id==t.data.member_level)return e.curIndex=n,e.descIndex=n,void(e.nowIndex=n)})),e.levelList.forEach((function(t,i){parseFloat(t.growth)<parseFloat(e.growth)?(t.needGrowth=0,t.rate=100):(t.needGrowth=(parseFloat(t.growth)-parseFloat(e.growth)).toFixed(2),t.rate=100*(e.growth/t.growth).toFixed(2))})),e.levelList.forEach((function(e){e.consume_discount&&(e.consume_discount=(e.consume_discount/10).toFixed(2))}))):e.$util.showToast({title:t.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},growthRules:function(){this.$util.redirectTo("/otherpages/member/level/level_growth_rules")},openCoupon:function(e){var t=this;this.couponPopList=[],this.$api.sendRequest({url:"/coupon/api/coupon/couponbyid",data:{id:e},success:function(e){e.code>=0&&(t.couponPopList=e.data)}}),this.$refs.couponPopup.open()},closeCoupon:function(){this.$refs.couponPopup.close()}},onBackPress:function(e){return"navigateBack"!==e.from&&(this.$util.redirectTo("/pages/member/index/index",{},"reLaunch"),!0)}};t.default=l},"1d7b":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{value:!0}},methods:{toTopClick:function(){this.$emit("toTop")}}};t.default=n},"21d8":function(e,t,i){"use strict";i.r(t);var n=i("1d7b"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"2ad8":function(e,t,i){"use strict";i.r(t);var n=i("da7b"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"2e98":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 回到顶部的按钮 */.mescroll-totop[data-v-aa3db5c2]{z-index:99;position:fixed!important; /* 加上important避免编译到H5,在多mescroll中定位失效 */right:%?46?%!important;bottom:%?272?%!important;width:%?72?%;height:%?72?%;-webkit-border-radius:50%;border-radius:50%;opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s; /* 过渡 */margin-bottom:var(--window-bottom) /* css变量 */}\r\n/* 适配 iPhoneX */.mescroll-safe-bottom[data-v-aa3db5c2]{margin-bottom:calc(var(--window-bottom) + constant(safe-area-inset-bottom)); /* window-bottom + 适配 iPhoneX */margin-bottom:calc(var(--window-bottom) + env(safe-area-inset-bottom))}\r\n/* 显示 -- 淡入 */.mescroll-totop-in[data-v-aa3db5c2]{opacity:1}\r\n/* 隐藏 -- 淡出且不接收事件*/.mescroll-totop-out[data-v-aa3db5c2]{opacity:0;pointer-events:none}",""]),e.exports=t},"3f14":function(e,t,i){var n=i("2e98");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("3fde7998",n,!0,{sourceMap:!1,shadowMode:!1})},"42ca":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.progress[data-v-9e9d7b8a]{height:%?12?%;overflow:hidden;background-color:#ccc;-webkit-border-radius:%?8?%;border-radius:%?8?%}.progress-bar[data-v-9e9d7b8a]{float:left;height:100%;font-size:%?24?%;line-height:20px;color:#fff;text-align:center;-webkit-transition:width .6s ease;transition:width .6s ease}',""]),e.exports=t},"44aa":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-image",{staticClass:"mescroll-totop",class:[e.value?"mescroll-totop-in":"mescroll-totop-out"],attrs:{src:e.$util.img("upload/uniapp/mescroll-totop.png"),mode:"widthFix"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toTopClick.apply(void 0,arguments)}}})},o=[]},4524:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={nsProgress:i("de23").default,uniPopup:i("1fce").default,loadingCover:i("30be").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"member-level",attrs:{"data-theme":e.themeStyle}},[i("v-uni-view",{staticClass:"level-top"},[i("v-uni-image",{attrs:{src:e.$util.img("/upload/uniapp/level/level-top-bg.png")}})],1),i("v-uni-view",{staticClass:"banner-container"},[i("v-uni-view",{staticClass:"memberInfo"},[e.userInfo.headimg?i("v-uni-image",{attrs:{src:e.$util.img(e.userInfo.headimg),mode:"aspectFill"},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.userInfo.headimg=e.$util.getDefaultImage().default_headimg}}}):i("v-uni-image",{attrs:{src:e.$util.getDefaultImage().default_headimg,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"member-desc"},[i("v-uni-view",{staticClass:"font-size-base"},[e._v(e._s(e.userInfo.nickname))]),i("v-uni-view",{staticClass:"font-size-activity-tag"},[e._v("当前等级："+e._s(e.userInfo.member_level_name))])],1),i("v-uni-view",{staticClass:"growth-rules font-size-tag",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.growthRules.apply(void 0,arguments)}}},[i("i",{staticClass:"iconfont iconwenhao font-size-tag"}),e._v("成长规则")])],1),i("v-uni-swiper",{staticClass:"margin-bottom",style:{width:"100vw",height:"390rpx"},attrs:{"indicator-dots":e.swiperConfig.indicatorDots,"indicator-color":e.swiperConfig.indicatorColor,"indicator-active-color":e.swiperConfig.indicatorActiveColor,autoplay:!1,interval:e.swiperConfig.interval,duration:e.swiperConfig.duration,circular:e.swiperConfig.circular,"previous-margin":e.swiperConfig.previousMargin,"next-margin":e.swiperConfig.nextMargin,current:e.curIndex},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.swiperChange.apply(void 0,arguments)},animationfinish:function(t){arguments[0]=t=e.$handleEvent(t),e.animationfinish.apply(void 0,arguments)}}},e._l(e.levelList,(function(t,n){return i("v-uni-swiper-item",{key:n,class:1==e.levelList.length?"image-container-box":""},[i("v-uni-view",{staticClass:"image-container",class:[0===e.curIndex?n===e.listLen-1?"item-left":1===n?"item-right":"item-center":e.curIndex===e.listLen-1?0===n?"item-right":n===e.listLen-2?"item-left":"item-center":n===e.curIndex-1?"item-left":n===e.curIndex+1?"item-right":"item-center"]},[i("v-uni-view",{staticClass:"slide-image",staticStyle:{"background-size":"100% 100%","background-repeat":"no-repeat"},style:{transform:e.curIndex===n?"scale("+e.scaleX+","+e.scaleY+")":"scale(1,1)",transitionDuration:".3s",transitionTimingFunction:"ease"}},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/level/level_"+(Number(n%5)+1)+".png")}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"level-detail"},[e._v(e._s(e.levelList[e.curIndex].level_name)),e.levelId==t.level_id?i("v-uni-text",{staticClass:"isnow color-base-bg"},[e._v("当前等级")]):e._e()],1),i("v-uni-view",{staticClass:"growr-name"},[e._v("当前成长值")]),i("v-uni-view",{staticClass:"growr-value"},[e._v(e._s(e.growth))]),e.levelId==t.level_id?[void 0!=e.levelList[e.curIndex+1]?[i("ns-progress",{attrs:{progress:e.levelList[e.curIndex+1].rate}}),i("v-uni-view",{staticClass:"residue-growr-value"},[e._v("再获得"+e._s(e.levelList[e.curIndex+1].needGrowth>0?e.levelList[e.curIndex+1].needGrowth:0)+"成长值成为"+e._s(e.levelList[e.curIndex+1].level_name))])]:[i("v-uni-view",{staticClass:"residue-growr-value"},[e._v("您现在已经是最高等级")])]]:[e.levelList[e.curIndex].needGrowth>0?i("ns-progress",{attrs:{progress:e.levelList[e.curIndex].rate}}):e._e(),e.levelList[e.curIndex].needGrowth>0?i("v-uni-view",{staticClass:"residue-growr-value"},[e._v("再获得"+e._s(e.levelList[e.curIndex].needGrowth)+"成长值成为"+e._s(e.levelList[e.curIndex].level_name))]):e._e()]],2)],1)],1)],1)})),1),e.levelList[e.curIndex].is_free_shipping>0||e.levelList[e.curIndex].consume_discount>0||e.levelList[e.curIndex].point_feedback>0?i("v-uni-view",{staticClass:"member-equity"},[i("v-uni-view",{staticClass:"equity-title"},[e._v("会员权益")]),e.levelList[e.curIndex].is_free_shipping>0?i("v-uni-view",{staticClass:"equity-itme"},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/level/exemption_postage.png"),mode:"aspectFit"}}),i("v-uni-view",{staticClass:"equity-content",class:{active:e.levelList[e.curIndex].consume_discount>0}},[i("v-uni-text",[e._v("包邮服务")]),i("v-uni-text",{staticClass:"equity-desc"},[e._v("提供商品包邮服务")])],1)],1):e._e(),e.levelList[e.curIndex].consume_discount>0?i("v-uni-view",{staticClass:"equity-itme"},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/level/consumption_discount.png"),mode:"aspectFit"}}),i("v-uni-view",{staticClass:"equity-content",class:{active:e.levelList[e.curIndex].point_feedback>0}},[i("v-uni-text",[e._v("享受消费折扣服务")]),i("v-uni-text",{staticClass:"equity-desc"},[e._v("提供"+e._s(e.levelList[e.curIndex].consume_discount)+"折消费折扣")])],1)],1):e._e(),e.levelList[e.curIndex].point_feedback>0?i("v-uni-view",{staticClass:"equity-itme"},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/level/integral_feedback.png"),mode:"aspectFit"}}),i("v-uni-view",{staticClass:"equity-content"},[i("v-uni-text",[e._v("享受积分回馈服务")]),i("v-uni-text",{staticClass:"equity-desc"},[e._v("提供"+e._s(e.levelList[e.curIndex].point_feedback)+"倍积分回馈倍率")])],1)],1):e._e()],1):e._e(),e.levelList[e.curIndex].send_balance>0||e.levelList[e.curIndex].send_balance>0||e.levelList[e.curIndex].send_coupon?i("v-uni-view",{staticClass:"member-gift"},[i("v-uni-view",{staticClass:"gift-title"},[e._v("会员礼包")]),e.levelList[e.curIndex].send_point>0?i("v-uni-view",{staticClass:"gift-itme"},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/level/integral.png"),mode:"aspectFit"}}),i("v-uni-view",{staticClass:"gift-content",class:{active:e.levelList[e.curIndex].send_balance>0}},[i("v-uni-text",[e._v("积分礼包")]),i("v-uni-text",{staticClass:"gift-desc"},[e._v("赠送"+e._s(e.levelList[e.curIndex].send_point)+"积分")])],1)],1):e._e(),e.levelList[e.curIndex].send_balance>0?i("v-uni-view",{staticClass:"gift-itme"},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/level/red_packet.png"),mode:"aspectFit"}}),i("v-uni-view",{staticClass:"gift-content",class:{active:e.levelList[e.curIndex].send_coupon}},[i("v-uni-text",[e._v("红包礼包")]),i("v-uni-text",{staticClass:"gift-desc"},[e._v("赠送"+e._s(e.levelList[e.curIndex].send_balance)+"元红包")])],1)],1):e._e(),e.levelList[e.curIndex].send_coupon?i("v-uni-view",{staticClass:"gift-itme",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openCoupon(e.levelList[e.curIndex].send_coupon)}}},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/level/coupon.png"),mode:"aspectFit"}}),i("v-uni-view",{staticClass:"gift-content"},[i("v-uni-text",[e._v("优惠券礼包")]),i("v-uni-text",{staticClass:"gift-desc"},[e._v("赠送"+e._s(e.levelList[e.curIndex].coupon_length)+"张优惠券")])],1)],1):e._e()],1):e._e()],1),i("uni-popup",{ref:"couponPopup",attrs:{type:"bottom"}},[i("v-uni-view",{staticClass:"coupon-popup-box"},[i("v-uni-view",{staticClass:"coupon-popup-title",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeCoupon.apply(void 0,arguments)}}},[e._v("优惠券"),i("v-uni-text",{staticClass:"iconfont iconclose"})],1),i("v-uni-scroll-view",{staticClass:"coupon-popup-content",attrs:{"scroll-y":!0}},e._l(e.couponPopList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"coupon-item"},[i("v-uni-view",{staticClass:"coupon-name"},[i("v-uni-text",{staticClass:"name"},[e._v(e._s(t.coupon_name))]),i("v-uni-text",{staticClass:"desc"})],1),"reward"==t.type?i("v-uni-view",{staticClass:"coupon-price"},[i("v-uni-text",[e._v(e._s(t.money))]),e._v("元")],1):e._e(),"discount"==t.type?i("v-uni-view",{staticClass:"coupon-price"},[i("v-uni-text",[e._v(e._s(e.$util.numberFixed(t.discount,1)))]),e._v("折")],1):e._e()],1)})),1)],1)],1),e.showTop?i("to-top",{on:{toTop:function(t){arguments[0]=t=e.$handleEvent(t),e.scrollToTopNative()}}}):e._e(),i("loading-cover",{ref:"loadingCover"})],1)},o=[]},"7ace":function(e,t,i){var n=i("aae9");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("63545f0a",n,!0,{sourceMap:!1,shadowMode:!1})},a192:function(e,t,i){"use strict";i.r(t);var n=i("1d3d"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},aae9:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.member-level[data-v-76129c12]{width:100%;min-height:100vh;position:relative}.level-top[data-v-76129c12]{width:100%;position:relative}.level-top uni-image[data-v-76129c12]{width:100%;height:%?400?%;position:absolute}.banner-container[data-v-76129c12]{width:100vw;position:relative;left:0;top:0}.banner-container .memberInfo[data-v-76129c12]{width:100%;height:%?140?%;padding:%?40?% %?30?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box}.banner-container .memberInfo uni-image[data-v-76129c12]{width:%?100?%;height:%?100?%;-webkit-border-radius:50%;border-radius:50%;border:%?4?% solid #fff;-webkit-box-sizing:border-box;box-sizing:border-box}.banner-container .memberInfo .growth-rules[data-v-76129c12]{position:absolute;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff;right:%?40?%;font-size:%?24?%}.banner-container .memberInfo .growth-rules .iconfont[data-v-76129c12]{margin-right:%?10?%}.banner-container .memberInfo .member-desc[data-v-76129c12]{width:calc(100% - %?20?% - %?100?%);height:100%;padding:%?13?% 0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.banner-container .memberInfo .member-desc uni-view[data-v-76129c12]{line-height:1.4;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.banner-container .demand[data-v-76129c12]{width:100%;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.banner-container .demand .demand-title[data-v-76129c12]{font-size:%?32?%;font-weight:700;line-height:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.banner-container .demand .demand-title uni-image[data-v-76129c12]{width:%?39?%;height:%?35?%;margin-right:%?10?%}.banner-container .demand .demand-info[data-v-76129c12]{padding:%?10?% %?24?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-top:%?27?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?150?%;background:#fff}.banner-container .demand .demand-info .info-title[data-v-76129c12]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.banner-container .demand .demand-info .info-title uni-text[data-v-76129c12]:nth-child(1){color:#000;font-size:%?24?%}.banner-container .demand .demand-info .info-title uni-text[data-v-76129c12]:nth-child(2){color:#959595}.banner-container .demand .demand-info uni-progress[data-v-76129c12]{margin-top:%?39?%}.banner-container .demand .demand-info .info-size[data-v-76129c12]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;color:#959595}.banner-container .uni-swiper-dots[data-v-76129c12]{bottom:%?30?%!important}.banner-container .image-container[data-v-76129c12]{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.banner-container .image-container uni-image[data-v-76129c12]{width:100%;height:100%}.banner-container .image-container .slide-image[data-v-76129c12]{width:%?535?%;height:%?300?%;z-index:200;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-border-radius:%?20?%;border-radius:%?20?%;overflow:hidden;position:relative}.banner-container .image-container .slide-image .info[data-v-76129c12]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:%?10?% 0;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;left:0;bottom:0;padding:%?30?% %?40?%;box-sizing:border-box}.banner-container .image-container .slide-image .info .level-detail[data-v-76129c12]{font-size:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.banner-container .image-container .slide-image .info .growr-name[data-v-76129c12]{font-size:%?24?%;margin-top:%?30?%}.banner-container .image-container .slide-image .info .growr-value[data-v-76129c12]{font-size:%?40?%}.banner-container .image-container .slide-image .info .progress[data-v-76129c12]{margin-top:%?30?%}.banner-container .image-container .slide-image .info .residue-growr-value[data-v-76129c12]{text-align:right;font-size:%?24?%;margin-top:%?10?%}.banner-container .image-container .slide-image .info uni-view[data-v-76129c12]{color:#fff;line-height:1.3}.banner-container .image-container .slide-image .now_growth[data-v-76129c12]{margin-top:%?20?%}.banner-container .image-container .slide-image .pic[data-v-76129c12]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.banner-container .image-container .slide-image .pic uni-image[data-v-76129c12]{width:%?160?%}.banner-container .image-container .slide-image .isnow[data-v-76129c12]{font-size:%?20?%;color:#fff;padding:1px;line-height:1;margin-left:%?10?%}.banner-container .item-left[data-v-76129c12]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:%?56?% %?26?% 0 0}.banner-container .image-container-box .item-left[data-v-76129c12]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?56?% 0 0 0}.banner-container .item-right[data-v-76129c12]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;padding:%?56?% 0 0 %?26?%}.banner-container .item-center[data-v-76129c12]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?56?% 0 0 0}.banner-container .member-equity[data-v-76129c12]{background-color:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:%?20?% %?30?% %?20?%;margin:%?20?% %?30?%}.banner-container .member-equity .gift-title[data-v-76129c12]{font-size:%?30?%}.banner-container .member-equity .equity-itme[data-v-76129c12]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.banner-container .member-equity .equity-itme uni-image[data-v-76129c12]{width:%?60?%;height:%?60?%;margin-right:%?30?%}.banner-container .member-equity .equity-itme .equity-content[data-v-76129c12]{padding:%?20?% 0;line-height:1;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.banner-container .member-equity .equity-itme .equity-content.active[data-v-76129c12]{border-bottom:%?2?% solid #e5e5e5}.banner-container .member-equity .equity-itme .equity-content .equity-desc[data-v-76129c12]{font-size:%?20?%;margin-top:%?16?%;color:#909399}.banner-container .member-gift[data-v-76129c12]{background-color:#fff;margin:%?20?% %?30?%;padding:%?20?% %?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.banner-container .member-gift .gift-title[data-v-76129c12]{font-size:%?30?%}.banner-container .member-gift .gift-itme[data-v-76129c12]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.banner-container .member-gift .gift-itme uni-image[data-v-76129c12]{width:%?60?%;height:%?60?%;margin-right:%?30?%}.banner-container .member-gift .gift-itme .gift-content[data-v-76129c12]{padding:%?20?% 0;line-height:1;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.banner-container .member-gift .gift-itme .gift-content.active[data-v-76129c12]{border-bottom:%?2?% solid #e5e5e5}.banner-container .member-gift .gift-itme .gift-content .gift-desc[data-v-76129c12]{font-size:%?24?%;margin-top:%?16?%;color:#999}.banner-container .desc-wrap[data-v-76129c12]{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:%?98?%;padding:%?24?% %?66?% 0}.banner-container .desc-wrap .title[data-v-76129c12]{width:100%;height:%?42?%;line-height:%?42?%;color:#222;font-size:%?28?%;font-family:PingFangTC-Regular;font-weight:600;text-align:left}.banner-container .desc-wrap .desc[data-v-76129c12]{margin-top:%?4?%;width:100%;height:%?34?%;line-height:%?34?%;color:#999;font-size:%?24?%;font-family:PingFangTC-Regular;text-align:left}@keyframes descAnimation-data-v-76129c12{0%{opacity:1}25%{opacity:.5}50%{opacity:0}75%{opacity:.5}100%{opacity:1}}@-webkit-keyframes descAnimation-data-v-76129c12{0%{opacity:1}25%{opacity:.5}50%{opacity:0}75%{opacity:.5}100%{opacity:1}}.coupon-popup-box[data-v-76129c12]{background-color:#f7f7f7}.coupon-popup-box .coupon-popup-title[data-v-76129c12]{text-align:center;font-size:%?32?%;line-height:%?90?%;height:%?90?%;display:block;font-weight:700;position:relative;border-bottom:%?1?% solid #eee}.coupon-popup-box .iconfont[data-v-76129c12]{position:absolute;float:right;right:22px;font-size:20px;font-weight:500}.coupon-popup-box .coupon-item[data-v-76129c12]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;margin-bottom:%?20?%;background-color:#fff;-webkit-border-radius:%?10?%;border-radius:%?10?%}.coupon-popup-box .coupon-item .coupon-name[data-v-76129c12]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.coupon-popup-box .coupon-item .coupon-name .desc[data-v-76129c12]{margin-top:%?20?%;font-size:%?24?%;color:#ababab}.coupon-popup-box .coupon-item .coupon-price[data-v-76129c12]{color:red}.coupon-popup-box .coupon-item .coupon-price uni-text[data-v-76129c12]{font-size:%?70?%}.coupon-popup-box .coupon-popup-content[data-v-76129c12]{max-height:%?390?%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}',""]),e.exports=t},b1ac:function(e,t,i){"use strict";i.r(t);var n=i("4524"),a=i("a192");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("be2d");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"76129c12",null,!1,n["a"],r);t["default"]=c.exports},be2d:function(e,t,i){"use strict";var n=i("7ace"),a=i.n(n);a.a},da7b:function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},props:{progress:{type:[Number,String],default:10}}};t.default=n},dada:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{showTop:!1,scrollTop:0,oldLocation:0}},methods:{scrollToTopNative:function(){uni.pageScrollTo({duration:200,scrollTop:0})}},onReachBottom:function(){this.$refs.goodrecommend&&this.$refs.goodrecommend.getLikeList(10)},onPageScroll:function(e){this.oldLocation=e.scrollTop,e.scrollTop>400?this.showTop=!0:this.showTop=!1}};t.default=n},de23:function(e,t,i){"use strict";i.r(t);var n=i("0e5a"),a=i("2ad8");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("ed0f");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"9e9d7b8a",null,!1,n["a"],r);t["default"]=c.exports},ed0f:function(e,t,i){"use strict";var n=i("03e8"),a=i.n(n);a.a}}]);