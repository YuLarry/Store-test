(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-member-card_buy-card_buy"],{"1a824":function(e,i,t){"use strict";t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return r})),t.d(i,"a",(function(){return a}));var a={uniPopup:t("2d2c").default,nsEmpty:t("0e02").default,nsLogin:t("61d0").default,loadingCover:t("b1ae").default},n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"member-level",attrs:{"data-theme":e.themeStyle}},[e.levelList.length?[t("v-uni-view",{staticClass:"level-top"},[t("v-uni-image",{attrs:{src:e.$util.img("/upload/uniapp/level/card-top-bg.png")}})],1),t("v-uni-view",{staticClass:"banner-container"},[t("v-uni-view",{staticClass:"memberInfo"},[e.userInfo.headimg?t("v-uni-image",{attrs:{src:e.$util.img(e.userInfo.headimg),mode:"aspectFill"},on:{error:function(i){arguments[0]=i=e.$handleEvent(i),e.headimgError.apply(void 0,arguments)}}}):t("v-uni-image",{attrs:{src:e.$util.getDefaultImage().default_headimg,mode:"aspectFill"}}),t("v-uni-view",{staticClass:"member-desc"},[t("v-uni-view",{staticClass:"font-size-toolbar"},[e._v(e._s(e.userInfo.nickname))]),e.userInfo.level_expire_time>0?t("v-uni-view",{staticClass:"font-size-tag expire-time"},[e._v("有效期至："+e._s(e.$util.timeStampTurnTime(e.userInfo.level_expire_time,!0)))]):e._e()],1)],1),t("v-uni-swiper",{staticClass:"margin-bottom",style:{width:"100vw",height:"390rpx"},attrs:{"indicator-dots":e.swiperConfig.indicatorDots,"indicator-color":e.swiperConfig.indicatorColor,"indicator-active-color":e.swiperConfig.indicatorActiveColor,autoplay:!1,interval:e.swiperConfig.interval,duration:e.swiperConfig.duration,circular:e.swiperConfig.circular,"previous-margin":e.swiperConfig.previousMargin,"next-margin":e.swiperConfig.nextMargin,current:e.curIndex},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.swiperChange.apply(void 0,arguments)},animationfinish:function(i){arguments[0]=i=e.$handleEvent(i),e.animationfinish.apply(void 0,arguments)}}},e._l(e.levelList,(function(i,a){return t("v-uni-swiper-item",{key:a,class:1==e.levelList.length?"image-container-box":""},[t("v-uni-view",{staticClass:"image-container",class:[0===e.curIndex?a===e.listLen-1?"item-left":1===a?"item-right":"item-center":e.curIndex===e.listLen-1?0===a?"item-right":a===e.listLen-2?"item-left":"item-center":a===e.curIndex-1?"item-left":a===e.curIndex+1?"item-right":"item-center"]},[t("v-uni-view",{staticClass:"slide-image",staticStyle:{"background-size":"100% 100%","background-repeat":"no-repeat"},style:{transform:e.curIndex===a?"scale("+e.scaleX+","+e.scaleY+")":"scale(1,1)",transitionDuration:".3s",transitionTimingFunction:"ease"}},[t("v-uni-view",{staticClass:"bg-border"}),t("v-uni-image",{style:{"background-color":i.bg_color},attrs:{src:e.$util.img("upload/uniapp/level/card-bg.png")}}),t("v-uni-view",{staticClass:"info"},[t("v-uni-view",{staticClass:"level-detail"},[e._v(e._s(e.levelList[e.curIndex].level_name))]),t("v-uni-view",{staticClass:"growr-name"},[e._v(e._s(e.levelList[e.curIndex].level_name)+"可享受消费折扣和")]),t("v-uni-view",{staticClass:"growr-value"},[e._v("会员大礼包等权益")]),""!=e.levelList[e.curIndex].remark?t("v-uni-view",{staticClass:"growth-rules font-size-tag",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.openExplainPopup.apply(void 0,arguments)}}},[t("v-uni-text",{staticClass:"iconfont iconwenhao font-size-tag"})],1):e._e()],1)],1)],1)],1)})),1),t("v-uni-view",{staticClass:"card-content"},[t("v-uni-view",{staticClass:"card-content-head"},[t("v-uni-view",{staticClass:"line-box"},[t("v-uni-view",{staticClass:"line right"})],1),t("v-uni-view",{staticClass:"card-content-title"},[e._v("卡种选择")]),t("v-uni-view",{staticClass:"line-box"},[t("v-uni-view",{staticClass:"line"})],1),t("v-uni-view",{staticClass:"clear"})],1),t("v-uni-view",{staticClass:"card-time-list"},e._l(e.currCard.charge_rule_arr,(function(i,a){return t("v-uni-view",{key:a,staticClass:"card-item-box",class:{small:4==e.currCard.charge_rule_arr.length}},[t("v-uni-view",{staticClass:"card-time-item",class:{active:e.choiceIndex==a},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.choice(a)}}},[t("v-uni-image",{attrs:{src:e.$util.img("/upload/uniapp/level/card-icon.png"),mode:"widthFix"}}),t("v-uni-view",{staticClass:"time-name"},[e._v(e._s(e.cardType[i.key].name))]),t("v-uni-view",{staticClass:"time-price"},[e._v(e._s(e.$lang("common.currencySymbol"))),t("v-uni-text",{staticClass:"price"},[e._v(e._s(i.value))]),e._v("/"+e._s(e.cardType[i.key].unit))],1)],1)],1)})),1)],1),e.currCard.is_free_shipping||e.currCard.consume_discount<100||e.currCard.point_feedback>0?t("v-uni-view",{staticClass:"card-content"},[t("v-uni-view",{staticClass:"card-content-head"},[t("v-uni-view",{staticClass:"line-box"},[t("v-uni-view",{staticClass:"line right"})],1),t("v-uni-view",{staticClass:"card-content-title"},[e._v("会员权益")]),t("v-uni-view",{staticClass:"line-box"},[t("v-uni-view",{staticClass:"line"})],1),t("v-uni-view",{staticClass:"clear"})],1),t("v-uni-view",{staticClass:"card-privilege-list"},[e.currCard.is_free_shipping?t("v-uni-view",{staticClass:"card-privilege-item"},[t("v-uni-view",{staticClass:"card-privilege-icon"},[t("v-uni-text",{staticClass:"iconfont icontedianquanchangbaoyou"})],1),t("v-uni-view",{staticClass:"card-privilege-name"},[e._v("全场包邮")]),t("v-uni-view",{staticClass:"card-privilege-text"},[e._v("享受商品包邮服务")])],1):e._e(),e.currCard.consume_discount<100?t("v-uni-view",{staticClass:"card-privilege-item"},[t("v-uni-view",{staticClass:"card-privilege-icon"},[t("v-uni-text",{staticClass:"iconfont iconzhekou"})],1),t("v-uni-view",{staticClass:"card-privilege-name"},[e._v("消费折扣")]),t("v-uni-view",{staticClass:"card-privilege-text"},[e._v("部分商品下单可享"+e._s(e.currCard.consume_discount/10)+"折优惠")])],1):e._e(),e.currCard.point_feedback>0?t("v-uni-view",{staticClass:"card-privilege-item"},[t("v-uni-view",{staticClass:"card-privilege-icon"},[t("v-uni-text",{staticClass:"iconfont iconjifen2 f32"})],1),t("v-uni-view",{staticClass:"card-privilege-name"},[e._v("积分回馈")]),t("v-uni-view",{staticClass:"card-privilege-text"},[e._v("下单享"+e._s(parseFloat(e.currCard.point_feedback))+"倍积分回馈")])],1):e._e()],1),""!=e.currCard.send_coupon||e.currCard.send_point>0||e.currCard.send_balance>0?t("v-uni-view",[t("v-uni-view",{staticClass:"card-content-head"},[t("v-uni-view",{staticClass:"line-box"},[t("v-uni-view",{staticClass:"line right"})],1),t("v-uni-view",{staticClass:"card-content-title"},[e._v("开卡礼包")]),t("v-uni-view",{staticClass:"line-box"},[t("v-uni-view",{staticClass:"line"})],1),t("v-uni-view",{staticClass:"clear"})],1),t("v-uni-view",{staticClass:"card-privilege-list"},[e.currCard.send_point>0?t("v-uni-view",{staticClass:"card-privilege-item"},[t("v-uni-view",{staticClass:"card-privilege-icon"},[t("v-uni-text",{staticClass:"iconfont iconjifen3"})],1),t("v-uni-view",{staticClass:"card-privilege-name"},[e._v("积分礼包")]),t("v-uni-view",{staticClass:"card-privilege-text"},[e._v("赠送"+e._s(e.currCard.send_point)+"积分")])],1):e._e(),e.currCard.send_balance>0?t("v-uni-view",{staticClass:"card-privilege-item"},[t("v-uni-view",{staticClass:"card-privilege-icon"},[t("v-uni-text",{staticClass:"iconfont iconhongbao"})],1),t("v-uni-view",{staticClass:"card-privilege-name"},[e._v("红包礼包")]),t("v-uni-view",{staticClass:"card-privilege-text"},[e._v("赠送"+e._s(parseFloat(e.currCard.send_balance))+"红包")])],1):e._e(),""!=e.currCard.send_coupon?t("v-uni-view",{staticClass:"card-privilege-item"},[t("v-uni-view",{staticClass:"card-privilege-icon"},[t("v-uni-text",{staticClass:"iconfont iconyouhuiquan1"})],1),t("v-uni-view",{staticClass:"card-privilege-name"},[e._v("优惠券礼包")]),t("v-uni-view",{staticClass:"card-privilege-text"},[e._v("赠送"+e._s(e.currCard.send_coupon.split(",").length)+"张优惠券")])],1):e._e()],1)],1):e._e()],1):e._e(),e.currCard.charge_rule_arr.length?[t("v-uni-view",{staticClass:"action-wrap",class:{"bottom-safe-area":e.isIphoneX,"have-agreement":e.agreement}}),t("v-uni-view",{staticClass:"action",class:{"bottom-safe-area":e.isIphoneX,"have-agreement":e.agreement}},[t("v-uni-view",{staticClass:"action-btn",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.create.apply(void 0,arguments)}}},[e.currCard.level_id==e.levelId?[t("v-uni-text",{staticClass:"bold title"},[e._v("立即续费")])]:[1==e.currCard.charge_type?t("v-uni-text",{staticClass:"bold title"},[e._v("充值开通")]):t("v-uni-text",{staticClass:"bold title"},[e._v("立即开通")])],t("v-uni-text",{staticClass:"font-size-tag"},[e._v(e._s(e.$lang("common.currencySymbol")))]),t("v-uni-text",{staticClass:"bold"},[e._v(e._s(e.currCard.charge_rule_arr[e.choiceIndex].value))]),t("v-uni-text",[e._v("/"+e._s(e.cardType[e.currCard.charge_rule_arr[e.choiceIndex].key].unit))])],2),e.agreement?t("v-uni-view",{staticClass:"agreement"},[e._v("购买既视为同意"),t("v-uni-text",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.$util.redirectTo("/otherpages/member/card_agreement/card_agreement")}}},[e._v("《"+e._s(e.agreement.title)+"》")])],1):e._e()],1)]:e._e()],2),t("v-uni-view",{on:{touchmove:function(i){i.preventDefault(),i.stopPropagation(),arguments[0]=i=e.$handleEvent(i)}}},[t("uni-popup",{ref:"explainPopup",attrs:{type:"bottom"}},[t("v-uni-view",{staticClass:"tips-layer"},[t("v-uni-view",{staticClass:"head",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.closeExplainPopup()}}},[t("v-uni-view",{staticClass:"title"},[e._v("会员卡说明")]),t("v-uni-text",{staticClass:"iconfont iconclose"})],1),t("v-uni-view",{staticClass:"body"},[t("v-uni-view",{staticClass:"detail margin-bottom"},[""!=e.currCard.remark?[t("v-uni-view",{staticClass:"tip"},[e._v("会员卡说明")]),t("v-uni-view",{staticClass:"font-size-base"},[e._v(e._s(e.currCard.remark))])]:e._e()],2)],1)],1)],1)],1),e.currCard.charge_rule_arr.length?t("ns-payment",{ref:"choosePaymentPopup",attrs:{payMoney:e.currCard.charge_rule_arr[e.choiceIndex].value},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.toPay.apply(void 0,arguments)}}}):e._e()]:[t("ns-empty",{attrs:{text:"暂无可开会员卡",isIndex:!1}})],t("ns-login",{ref:"login"}),t("loading-cover",{ref:"loadingCover"})],2)},r=[]},"1ae6":function(e,i,t){var a=t("40a1");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("4f06").default;n("6ac4d638",a,!0,{sourceMap:!1,shadowMode:!1})},2061:function(e,i,t){"use strict";var a=t("4ea4");t("4160"),t("b64b"),t("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(t("245b")),r=a(t("42f3")),o=a(t("2d2c")),c=a(t("53a5")),s={components:{nsPayment:c.default,uniPopup:o.default},mixins:[r.default,n.default],data:function(){return{isSub:!1,isIphoneX:!1,couponPopList:[],curIndex:0,isDescAnimating:!1,scaleX:(634/540).toFixed(4),scaleY:(378/330).toFixed(4),swiperConfig:{indicatorDots:!1,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",interval:3e3,duration:300,circular:!1,previousMargin:"58rpx",nextMargin:"58rpx"},levelList:[],levelId:0,userInfo:{},cardType:{week:{name:"周卡",unit:"周"},month:{name:"月卡",unit:"月"},quarter:{name:"季卡",unit:"季"},year:{name:"年卡",unit:"年"}},choiceIndex:0,outTradeNo:"",agreement:null}},computed:{listLen:function(){return this.levelList.length},currCard:function(){if(this.levelList[this.curIndex]){var e=this.levelList[this.curIndex],i=e.charge_rule?JSON.parse(e.charge_rule):{};return e.charge_rule_arr=[],Object.keys(i).forEach((function(t){e.charge_rule_arr.push({key:t,value:i[t]})})),e}},storeToken:function(){return this.$store.state.token}},onLoad:function(){var e=this;this.isIphoneX=this.$util.uniappIsIPhoneX(),this.$langConfig.refresh(),uni.getStorageSync("token")?this.getCardList():setTimeout((function(){e.$refs.login.open("/otherpages/member/card_buy/card_buy")})),this.getAgreement()},onShow:function(){},watch:{storeToken:function(e,i){e&&this.getCardList()}},methods:{swiperChange:function(e){this.curIndex=e.detail.current,this.choiceIndex=0,this.isDescAnimating=!0},animationfinish:function(e){this.isDescAnimating=!1},getCardList:function(){var e=this;this.$api.sendRequest({url:"/supermember/api/membercard/lists",success:function(i){0==i.code&&i.data?(e.levelList=i.data,e.getMemberInfo()):e.$util.showToast({title:i.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getMemberInfo:function(){var e=this;this.$api.sendRequest({url:"/api/member/info",success:function(i){i.data&&0==i.code?(e.levelId=i.data.member_level,e.userInfo=i.data,e.levelList.forEach((function(t,a){t.level_id!=i.data.member_level||(e.curIndex=a)}))):e.$util.showToast({title:i.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(i){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},choice:function(e){this.choiceIndex=e},create:function(){var e=this;this.userInfo.member_level_type&&this.userInfo.member_level!=this.currCard.level_id?uni.showModal({title:"提示",content:"您有尚未过期的会员卡，再次购卡会覆盖掉之前的卡，是否继续？",success:function(i){i.confirm&&e.$refs.choosePaymentPopup.open()}}):this.$refs.choosePaymentPopup.open()},toPay:function(){var e=this;this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/supermember/api/ordercreate/create",data:{level_id:this.currCard.level_id,period_unit:this.currCard.charge_rule_arr[this.choiceIndex].key},success:function(i){i.data&&0==i.code?(e.outTradeNo=i.data.out_trade_no,uni.setStorageSync("paySource","membercard"),e.$refs.choosePaymentPopup.getPayInfo(e.outTradeNo)):(e.isSub=!1,e.$util.showToast({title:i.message}))}}))},headimgError:function(){this.userInfo.headimg=this.$util.getDefaultImage().default_headimg},openExplainPopup:function(){this.$refs.explainPopup.open()},closeExplainPopup:function(){this.$refs.explainPopup.close()},getAgreement:function(){var e=this;this.$api.sendRequest({url:"/supermember/api/membercard/agreement",success:function(i){0==i.code&&i.data&&""!=i.data.title&&""!=i.data.content&&(e.agreement=i.data)}})}},onBackPress:function(e){return"navigateBack"!==e.from&&(this.$util.redirectTo("/pages/member/index/index",{},"reLaunch"),!0)}};i.default=s},"40a1":function(e,i,t){var a=t("24fb");i=a(!1),i.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.member-level[data-v-9def93b8]{width:100%;min-height:100vh;position:relative}.level-top[data-v-9def93b8]{width:100%;position:relative}.level-top uni-image[data-v-9def93b8]{width:100%;height:%?460?%;position:absolute}.banner-container[data-v-9def93b8]{width:100vw;position:relative;left:0;top:0}.banner-container .memberInfo[data-v-9def93b8]{width:100%;height:%?140?%;padding:%?40?% %?40?% 0;display:flex;align-items:center;justify-content:space-between;box-sizing:border-box}.banner-container .memberInfo uni-image[data-v-9def93b8]{width:%?100?%;height:%?100?%;border-radius:50%;border:%?4?% solid #fff;box-sizing:border-box}.banner-container .memberInfo .growth-rules[data-v-9def93b8]{position:absolute;display:flex;align-items:center;color:#fff;right:%?40?%;font-size:%?24?%;z-index:10}.banner-container .memberInfo .growth-rules .iconfont[data-v-9def93b8]{margin-right:%?10?%}.banner-container .memberInfo .member-desc[data-v-9def93b8]{width:calc(100% - %?20?% - %?100?%);height:100%;padding:%?16?% 0;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.banner-container .memberInfo .member-desc uni-view[data-v-9def93b8]{font-weight:700;line-height:1;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.banner-container .memberInfo .member-desc .expire-time[data-v-9def93b8]{color:#ccc;font-weight:400;margin-top:%?10?%}.banner-container .demand[data-v-9def93b8]{width:100%;padding:0 %?20?%;box-sizing:border-box}.banner-container .demand .demand-title[data-v-9def93b8]{font-size:%?32?%;font-weight:700;line-height:1;display:flex;align-items:center}.banner-container .demand .demand-title uni-image[data-v-9def93b8]{width:%?39?%;height:%?35?%;margin-right:%?10?%}.banner-container .demand .demand-info[data-v-9def93b8]{padding:%?10?% %?24?%;box-sizing:border-box;display:flex;flex-direction:column;margin-top:%?27?%;border-radius:%?10?%;justify-content:space-between;height:%?150?%;background:#fff}.banner-container .demand .demand-info .info-title[data-v-9def93b8]{display:flex;justify-content:space-between;align-items:center}.banner-container .demand .demand-info .info-title uni-text[data-v-9def93b8]:nth-child(1){color:#000;font-size:%?24?%}.banner-container .demand .demand-info .info-title uni-text[data-v-9def93b8]:nth-child(2){color:#959595}.banner-container .demand .demand-info uni-progress[data-v-9def93b8]{margin-top:%?39?%}.banner-container .demand .demand-info .info-size[data-v-9def93b8]{display:flex;justify-content:space-between;align-items:center;font-size:%?24?%;color:#959595}.banner-container .uni-swiper-dots[data-v-9def93b8]{bottom:%?30?%!important}.banner-container .image-container[data-v-9def93b8]{box-sizing:border-box;width:100%;height:100%;display:flex}.banner-container .image-container uni-image[data-v-9def93b8]{width:100%;height:100%}.banner-container .image-container .slide-image[data-v-9def93b8]{width:%?535?%;height:%?300?%;z-index:200;display:flex;justify-content:space-between;align-items:center;border-radius:%?20?%;overflow:hidden;position:relative}.banner-container .image-container .slide-image .bg-border[data-v-9def93b8]{width:calc(100% - %?40?%);height:calc(100% - %?40?%);position:absolute;top:%?18?%;left:%?20?%;border:1px solid hsla(0,0%,100%,.2);z-index:10;border-radius:5px;opacity:.5}.banner-container .image-container .slide-image .growth-rules[data-v-9def93b8]{position:absolute;right:%?40?%;top:%?40?%;z-index:10}.banner-container .image-container .slide-image .info[data-v-9def93b8]{width:100%;height:100%;display:flex;flex-direction:column;padding:%?10?% 0;box-sizing:border-box;position:absolute;left:0;bottom:0;padding:%?30?% %?40?%;box-sizing:border-box}.banner-container .image-container .slide-image .info .level-detail[data-v-9def93b8]{font-size:%?52?%;display:flex;align-items:center;margin-top:%?26?%}.banner-container .image-container .slide-image .info .growr-name[data-v-9def93b8]{font-size:%?24?%;margin-top:%?50?%;opacity:.8}.banner-container .image-container .slide-image .info .growr-value[data-v-9def93b8]{font-size:%?24?%;margin-top:%?10?%;opacity:.8}.banner-container .image-container .slide-image .info .progress[data-v-9def93b8]{margin-top:%?30?%}.banner-container .image-container .slide-image .info .residue-growr-value[data-v-9def93b8]{text-align:right;font-size:%?24?%;margin-top:%?10?%}.banner-container .image-container .slide-image .info uni-view[data-v-9def93b8]{color:#fff;line-height:1.3}.banner-container .image-container .slide-image .now_growth[data-v-9def93b8]{margin-top:%?20?%}.banner-container .image-container .slide-image .pic[data-v-9def93b8]{display:flex;justify-content:center;align-items:center}.banner-container .image-container .slide-image .pic uni-image[data-v-9def93b8]{width:%?160?%}.banner-container .image-container .slide-image .isnow[data-v-9def93b8]{font-size:%?20?%;color:#fff;padding:1px;line-height:1;margin-left:%?10?%}.banner-container .item-left[data-v-9def93b8]{justify-content:flex-end;padding:%?56?% %?26?% 0 0}.banner-container .image-container-box .item-left[data-v-9def93b8]{justify-content:center;padding:%?56?% 0 0 0}.banner-container .item-right[data-v-9def93b8]{justify-content:flex-start;padding:%?56?% 0 0 %?26?%}.banner-container .item-center[data-v-9def93b8]{justify-content:center;padding:%?56?% 0 0 0}.banner-container .card-content[data-v-9def93b8]{background-color:#fff;border-radius:%?10?%;padding:%?20?% %?30?% %?20?%;margin:%?20?% %?30?%}.banner-container .card-content .gift-title[data-v-9def93b8]{font-size:%?30?%}.banner-container .card-content .equity-itme[data-v-9def93b8]{display:flex;align-items:center}.banner-container .card-content .equity-itme uni-image[data-v-9def93b8]{width:%?60?%;height:%?60?%;margin-right:%?30?%}.banner-container .card-content .equity-itme .equity-content[data-v-9def93b8]{padding:%?20?% 0;line-height:1;flex:1;display:flex;flex-direction:column}.banner-container .card-content .equity-itme .equity-content.active[data-v-9def93b8]{border-bottom:%?2?% solid #e5e5e5}.banner-container .card-content .equity-itme .equity-content .equity-desc[data-v-9def93b8]{font-size:%?20?%;margin-top:%?16?%;color:#909399}.banner-container .card-privilege-list[data-v-9def93b8]{width:100%;flex-wrap:wrap;display:flex;justify-content:center}.banner-container .card-privilege-list .card-privilege-item[data-v-9def93b8]{width:33%;display:inline-block;margin-top:0;text-align:center}.banner-container .card-privilege-list .card-privilege-item .card-privilege-icon[data-v-9def93b8]{width:%?60?%;height:%?60?%;text-align:center;margin:0 auto;line-height:1}.banner-container .card-privilege-list .card-privilege-item .card-privilege-name[data-v-9def93b8]{color:#303133;font-size:%?26?%;padding-top:%?20?%}.banner-container .card-privilege-list .card-privilege-item .card-privilege-text[data-v-9def93b8]{color:#909399;font-size:%?22?%;padding:0 %?20?%}.banner-container .card-privilege-list .card-privilege-item .iconfont[data-v-9def93b8]{font-size:%?60?%;background-image:-webkit-linear-gradient(top,#e3b66b,#f7daa5);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.banner-container .card-privilege-list .card-privilege-item .iconzhekou[data-v-9def93b8], .banner-container .card-privilege-list .card-privilege-item .iconhongbao[data-v-9def93b8]{font-size:%?54?%}.banner-container .member-gift[data-v-9def93b8]{background-color:#fff;margin:%?20?% %?30?%;padding:%?20?% %?30?%;border-radius:%?10?%}.banner-container .member-gift .gift-title[data-v-9def93b8]{font-size:%?30?%}.banner-container .member-gift .gift-itme[data-v-9def93b8]{display:flex;align-items:center}.banner-container .member-gift .gift-itme uni-image[data-v-9def93b8]{width:%?60?%;height:%?60?%;margin-right:%?30?%}.banner-container .member-gift .gift-itme .gift-content[data-v-9def93b8]{padding:%?20?% 0;line-height:1;flex:1;display:flex;flex-direction:column}.banner-container .member-gift .gift-itme .gift-content.active[data-v-9def93b8]{border-bottom:%?2?% solid #e5e5e5}.banner-container .member-gift .gift-itme .gift-content .gift-desc[data-v-9def93b8]{font-size:%?24?%;margin-top:%?16?%;color:#999}.banner-container .desc-wrap[data-v-9def93b8]{box-sizing:border-box;width:100%;height:%?98?%;padding:%?24?% %?66?% 0}.banner-container .desc-wrap .title[data-v-9def93b8]{width:100%;height:%?42?%;line-height:%?42?%;color:#222;font-size:%?28?%;font-family:PingFangTC-Regular;font-weight:600;text-align:left}.banner-container .desc-wrap .desc[data-v-9def93b8]{margin-top:%?4?%;width:100%;height:%?34?%;line-height:%?34?%;color:#999;font-size:%?24?%;font-family:PingFangTC-Regular;text-align:left}@keyframes descAnimation-data-v-9def93b8{0%{opacity:1}25%{opacity:.5}50%{opacity:0}75%{opacity:.5}100%{opacity:1}}@-webkit-keyframes descAnimation-data-v-9def93b8{0%{opacity:1}25%{opacity:.5}50%{opacity:0}75%{opacity:.5}100%{opacity:1}}.coupon-popup-box[data-v-9def93b8]{background-color:#f7f7f7}.coupon-popup-box .coupon-popup-title[data-v-9def93b8]{text-align:center;font-size:%?32?%;line-height:%?90?%;height:%?90?%;display:block;font-weight:700;position:relative;border-bottom:%?1?% solid #eee}.coupon-popup-box .iconfont[data-v-9def93b8]{position:absolute;float:right;right:22px;font-size:20px;font-weight:500}.coupon-popup-box .coupon-item[data-v-9def93b8]{display:flex;justify-content:space-between;align-items:center;padding:%?20?% %?30?%;margin-bottom:%?20?%;background-color:#fff;border-radius:%?4?%}.coupon-popup-box .coupon-item .coupon-name[data-v-9def93b8]{flex:1;display:flex;flex-direction:column}.coupon-popup-box .coupon-item .coupon-name .desc[data-v-9def93b8]{margin-top:%?20?%;font-size:%?24?%;color:#ababab}.coupon-popup-box .coupon-item .coupon-price[data-v-9def93b8]{color:red}.coupon-popup-box .coupon-item .coupon-price uni-text[data-v-9def93b8]{font-size:%?70?%}.coupon-popup-box .coupon-popup-content[data-v-9def93b8]{max-height:%?390?%;padding:%?20?%;box-sizing:border-box}.card-content-head[data-v-9def93b8]{text-align:center;color:#303133;margin:%?20?% 0}.card-content-head .line-box[data-v-9def93b8]{float:left;text-align:center;width:35%;margin-top:%?26?%}.card-content-head .line-box .line[data-v-9def93b8]{background-color:#303133;width:%?60?%;height:%?2?%}.card-content-head .card-content-title[data-v-9def93b8]{float:left;text-align:center;width:30%;font-size:%?28?%;color:#303133}.right[data-v-9def93b8]{float:right}.clear[data-v-9def93b8]{clear:both}.card-time-list[data-v-9def93b8]{margin:%?-7.5?%;white-space:nowrap;overflow-x:scroll;height:%?256?%}.card-time-list .card-item-box[data-v-9def93b8]{padding:%?15?%;display:inline-block;width:33.3333%;box-sizing:border-box}.card-time-list .card-item-box.small[data-v-9def93b8]{width:32.3%}.card-time-list .card-item-box .card-time-item[data-v-9def93b8]{border:1px solid #ccc;border-radius:%?10?%;text-align:center;padding:%?25?% 0 %?20?%}.card-time-list .card-item-box .card-time-item uni-image[data-v-9def93b8]{width:%?60?%}.card-time-list .card-item-box .card-time-item .time-name[data-v-9def93b8]{line-height:1.3}.card-time-list .card-item-box .card-time-item.active[data-v-9def93b8]{border-color:#e3b66b;background:rgba(227,182,107,.3)}.card-time-list .card-item-box .time-price[data-v-9def93b8]{font-size:%?24?%}.card-time-list .card-item-box .time-price uni-text[data-v-9def93b8]{font-size:%?32?%}.card-time-list .card-item-box .time-price .price[data-v-9def93b8]{font-weight:bolder}.action-wrap[data-v-9def93b8]{height:%?140?%}.action-wrap.have-agreement[data-v-9def93b8]{height:%?190?%}.action-wrap.bottom-safe-area[data-v-9def93b8]{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.action[data-v-9def93b8]{position:fixed;z-index:5;left:0;bottom:0;width:100vw;height:%?140?%;background:#fff;box-shadow:0 0 10px rgba(0,0,0,.1);text-align:right;line-height:%?100?%;background:#fff;padding:0 %?40?%;box-sizing:border-box}.action.have-agreement[data-v-9def93b8]{height:%?190?%}.action .agreement[data-v-9def93b8]{text-align:center;font-size:%?24?%;line-height:1;margin-top:%?20?%}.action .agreement uni-text[data-v-9def93b8]{color:#e3b66b}.action.bottom-safe-area[data-v-9def93b8]{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.action .action-btn[data-v-9def93b8]{width:100%;height:%?80?%;line-height:%?80?%;color:#7c5711;padding:0 %?40?%;display:inline-block;text-align:center;margin:%?30?% 0 0 0;border-radius:%?40?%;border:none;background-image:linear-gradient(top,#f7daa5,#e3b66b);box-sizing:border-box}.action .title[data-v-9def93b8]{margin-right:%?6?%}.action .bold[data-v-9def93b8]{font-weight:700}\r\n/* 说明弹框 */.tips-layer[data-v-9def93b8]{background:#fff;z-index:999;height:40%;width:100%}.tips-layer .head[data-v-9def93b8]{position:relative}.tips-layer .title[data-v-9def93b8]{height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?32?%;font-weight:700}.tips-layer uni-text[data-v-9def93b8]{position:absolute;top:%?8?%;right:22px;font-size:%?32?%;font-weight:500}.tips-layer .body[data-v-9def93b8]{width:100%;height:calc(100% - %?80?%);overflow-y:scroll}.tips-layer .body .detail[data-v-9def93b8]{padding:%?20?%}.tips-layer .body .detail .font-size-base[data-v-9def93b8]{margin-bottom:%?10?%}',""]),e.exports=i},"42f3":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{showTop:!1,scrollTop:0,oldLocation:0}},methods:{scrollToTopNative:function(){uni.pageScrollTo({duration:200,scrollTop:0})}},onReachBottom:function(){this.$refs.goodrecommend&&this.$refs.goodrecommend.getLikeList(10)},onPageScroll:function(e){this.oldLocation=e.scrollTop,e.scrollTop>400?this.showTop=!0:this.showTop=!1}};i.default=a},"5aef":function(e,i,t){"use strict";t.r(i);var a=t("1a824"),n=t("9b65");for(var r in n)"default"!==r&&function(e){t.d(i,e,(function(){return n[e]}))}(r);t("c550");var o,c=t("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"9def93b8",null,!1,a["a"],o);i["default"]=s.exports},"9b65":function(e,i,t){"use strict";t.r(i);var a=t("2061"),n=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(i,e,(function(){return a[e]}))}(r);i["default"]=n.a},c550:function(e,i,t){"use strict";var a=t("1ae6"),n=t.n(a);n.a}}]);