(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/card_buy/card_buy"],{1725:function(e,n,t){"use strict";var r=t("70e1"),i=t.n(r);i.a},"5aef":function(e,n,t){"use strict";t.r(n);var r=t("a0d8"),i=t("9b65");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("1725");var o,u=t("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=s.exports},"70e1":function(e,n,t){},"8a73":function(e,n,t){"use strict";(function(e){t("4b62");r(t("66fd"));var n=r(t("5aef"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"9b65":function(e,n,t){"use strict";t.r(n);var r=t("ea5f"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a},a0d8:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var r={uniPopup:function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"2d2c"))},nsEmpty:function(){return t.e("components/ns-empty/ns-empty").then(t.bind(null,"0e02"))},nsLogin:function(){return Promise.all([t.e("common/vendor"),t.e("components/ns-login/ns-login")]).then(t.bind(null,"61d0"))},loadingCover:function(){return t.e("components/loading-cover/loading-cover").then(t.bind(null,"b1ae"))}},i=function(){var e=this,n=e.$createElement,t=(e._self._c,e.levelList.length?e.$util.img("/upload/uniapp/level/card-top-bg.png"):null),r=e.levelList.length&&e.userInfo.headimg?e.$util.img(e.userInfo.headimg):null,i=e.levelList.length&&!e.userInfo.headimg?e.$util.getDefaultImage():null,a=e.levelList.length&&e.userInfo.level_expire_time>0?e.$util.timeStampTurnTime(e.userInfo.level_expire_time,!0):null,o=e.$util.img("upload/uniapp/level/card-bg.png"),u=e.$util.img("/upload/uniapp/level/card-icon.png"),s=e.$lang("common.currencySymbol"),c=e.levelList.length&&(e.currCard.is_free_shipping||e.currCard.consume_discount<100||e.currCard.point_feedback>0)&&e.currCard.point_feedback>0?parseFloat(e.currCard.point_feedback):null,l=e.levelList.length&&(e.currCard.is_free_shipping||e.currCard.consume_discount<100||e.currCard.point_feedback>0)&&(""!=e.currCard.send_coupon||e.currCard.send_point>0||e.currCard.send_balance>0)&&e.currCard.send_balance>0?parseFloat(e.currCard.send_balance):null,d=e.levelList.length&&(e.currCard.is_free_shipping||e.currCard.consume_discount<100||e.currCard.point_feedback>0)&&(""!=e.currCard.send_coupon||e.currCard.send_point>0||e.currCard.send_balance>0)&&""!=e.currCard.send_coupon?e.currCard.send_coupon.split(","):null,p=e.levelList.length&&e.currCard.charge_rule_arr.length?e.$lang("common.currencySymbol"):null;e._isMounted||(e.e0=function(n){return e.$util.redirectTo("/otherpages/member/card_agreement/card_agreement")}),e.$mp.data=Object.assign({},{$root:{g0:t,g1:r,g2:i,g3:a,g4:o,g5:u,m0:s,m1:c,m2:l,g6:d,m3:p}})},a=[]},ea5f:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("245b")),i=a(t("42f3"));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(){t.e("components/uni-popup/uni-popup").then(function(){return resolve(t("2d2c"))}.bind(null,t)).catch(t.oe)},u=function(){t.e("components/payment/payment").then(function(){return resolve(t("53a5"))}.bind(null,t)).catch(t.oe)},s={components:{nsPayment:u,uniPopup:o},mixins:[i.default,r.default],data:function(){return{isSub:!1,isIphoneX:!1,couponPopList:[],curIndex:0,isDescAnimating:!1,scaleX:(634/540).toFixed(4),scaleY:(378/330).toFixed(4),swiperConfig:{indicatorDots:!1,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",interval:3e3,duration:300,circular:!1,previousMargin:"58rpx",nextMargin:"58rpx"},levelList:[],levelId:0,userInfo:{},cardType:{week:{name:"周卡",unit:"周"},month:{name:"月卡",unit:"月"},quarter:{name:"季卡",unit:"季"},year:{name:"年卡",unit:"年"}},choiceIndex:0,outTradeNo:"",agreement:null}},computed:{listLen:function(){return this.levelList.length},currCard:function(){if(this.levelList[this.curIndex]){var e=this.levelList[this.curIndex],n=e.charge_rule?JSON.parse(e.charge_rule):{};return e.charge_rule_arr=[],Object.keys(n).forEach((function(t){e.charge_rule_arr.push({key:t,value:n[t]})})),e}},storeToken:function(){return this.$store.state.token}},onLoad:function(){var n=this;this.isIphoneX=this.$util.uniappIsIPhoneX(),this.$langConfig.refresh(),e.getStorageSync("token")?this.getCardList():setTimeout((function(){n.$refs.login.open("/otherpages/member/card_buy/card_buy")})),this.getAgreement()},onShow:function(){},watch:{storeToken:function(e,n){e&&this.getCardList()}},methods:{swiperChange:function(e){this.curIndex=e.detail.current,this.choiceIndex=0,this.isDescAnimating=!0},animationfinish:function(e){this.isDescAnimating=!1},getCardList:function(){var e=this;this.$api.sendRequest({url:"/supermember/api/membercard/lists",success:function(n){0==n.code&&n.data?(e.levelList=n.data,e.getMemberInfo()):e.$util.showToast({title:n.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getMemberInfo:function(){var e=this;this.$api.sendRequest({url:"/api/member/info",success:function(n){n.data&&0==n.code?(e.levelId=n.data.member_level,e.userInfo=n.data,e.levelList.forEach((function(t,r){t.level_id!=n.data.member_level||(e.curIndex=r)}))):e.$util.showToast({title:n.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(n){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},choice:function(e){this.choiceIndex=e},create:function(){var n=this;this.userInfo.member_level_type&&this.userInfo.member_level!=this.currCard.level_id?e.showModal({title:"提示",content:"您有尚未过期的会员卡，再次购卡会覆盖掉之前的卡，是否继续？",success:function(e){e.confirm&&n.$refs.choosePaymentPopup.open()}}):this.$refs.choosePaymentPopup.open()},toPay:function(){var n=this;this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/supermember/api/ordercreate/create",data:{level_id:this.currCard.level_id,period_unit:this.currCard.charge_rule_arr[this.choiceIndex].key},success:function(t){t.data&&0==t.code?(n.outTradeNo=t.data.out_trade_no,e.setStorageSync("paySource","membercard"),n.$refs.choosePaymentPopup.getPayInfo(n.outTradeNo)):(n.isSub=!1,n.$util.showToast({title:t.message}))}}))},headimgError:function(){this.userInfo.headimg=this.$util.getDefaultImage().default_headimg},openExplainPopup:function(){this.$refs.explainPopup.open()},closeExplainPopup:function(){this.$refs.explainPopup.close()},getAgreement:function(){var e=this;this.$api.sendRequest({url:"/supermember/api/membercard/agreement",success:function(n){0==n.code&&n.data&&""!=n.data.title&&""!=n.data.content&&(e.agreement=n.data)}})}},onBackPress:function(e){return"navigateBack"!==e.from&&(this.$util.redirectTo("/pages/member/index/index",{},"reLaunch"),!0)}};n.default=s}).call(this,t("543d")["default"])}},[["8a73","common/runtime","common/vendor"]]]);