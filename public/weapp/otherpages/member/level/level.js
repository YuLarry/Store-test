(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/level/level"],{"0f30":function(e,t,n){"use strict";var o=n("ed1f"),i=n.n(o);i.a},1181:function(e,t,n){"use strict";n.r(t);var o=n("2f65"),i=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=i.a},"2f65":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("4de2"));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(){n.e("components/ns-progress/ns-progress").then(function(){return resolve(n("9ce0"))}.bind(null,n)).catch(n.oe)},r=function(){Promise.all([n.e("common/vendor"),n.e("components/ns-goods-recommend/ns-goods-recommend")]).then(function(){return resolve(n("ebb8"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/toTop/toTop").then(function(){return resolve(n("336c"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("d380"))}.bind(null,n)).catch(n.oe)},c=function(){Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(n("f505"))}.bind(null,n)).catch(n.oe)},a={components:{nsProgress:u,nsGoodsRecommend:r,toTop:s,nsShowToast:c,uniPopup:l},mixins:[o.default],data:function(){return{couponList:[],couponPopList:[],curIndex:0,descIndex:0,isDescAnimating:!1,scaleX:(634/540).toFixed(4),scaleY:(378/330).toFixed(4),swiperConfig:{indicatorDots:!1,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",interval:3e3,duration:300,circular:!1,previousMargin:"58rpx",nextMargin:"58rpx"},levelList:[{needGrowth:0,growth:0}],levelId:0,growth:0,nowIndex:0,userInfo:{},rule:[]}},computed:{listLen:function(){return this.levelList.length},remark:function(){if(this.levelList[this.curIndex])return this.levelList[this.curIndex].remark},baseColor:function(){return this.$store.state.baseColor},themeStyle:function(){return"theme-"+this.$store.state.themeStyle},nextIndex:function(){return this.curIndex==this.levelList.length-1?this.curIndex:this.curIndex+1}},onLoad:function(){this.getLevelList(),this.getLevelRule(),this.getCouponInfo()},onShow:function(){this.$langConfig.refresh()},filters:{rate:function(e,t,n){var o=Number(n),i=Number(t[e].growth);if(e==t.length-1)return o>i?100:0;var u=Number(t[e+1].growth),r=o-i,s=u-i,l=Math.floor(r/s*100);return l>100?100:l}},methods:{swiperChange:function(e){var t=this;this.curIndex=e.detail.current,this.isDescAnimating=!0;var n=setTimeout((function(){t.descIndex=e.detail.current,clearTimeout(n)}),150)},animationfinish:function(e){this.isDescAnimating=!1},getBannerDetail:function(t){e.showLoading({title:"将前往详情页面",duration:2e3,mask:!0})},getLevelList:function(){var e=this;this.$api.sendRequest({url:"/api/memberlevel/lists",success:function(t){if(t.data&&0==t.code){e.levelList=t.data;for(var n=0;n<e.levelList.length;n++)e.levelList[n].send_coupon&&(e.levelList[n].coupon_length=e.levelList[n].send_coupon.split(",").length);e.getMemberInfo()}else e.$util.showToast({title:t.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getLevelRule:function(){var e=this;this.$api.sendRequest({url:"/api/member/accountrule",success:function(t){0==t.code&&t.data&&t.data.growth&&(e.rule=t.data.growth)}})},getMemberInfo:function(){var e=this;this.$api.sendRequest({url:"/api/member/info",success:function(t){t.data&&0==t.code?(e.levelId=t.data.member_level,e.growth=t.data.growth,e.userInfo=t.data,e.levelList.forEach((function(n,o){if(n.level_id==t.data.member_level)return e.curIndex=o,e.descIndex=o,void(e.nowIndex=o)})),e.levelList.forEach((function(t,n){var o=0;n!=e.levelList.length-1?(t.needGrowth=Number(e.levelList[n+1].growth)-Number(e.growth),o=t.needGrowth<=0?100:100*(e.growth/e.levelList[n+1].growth).toFixed(2)):(t.needGrowth=Number(e.levelList[n].growth)-Number(e.growth),o=t.needGrowth<=0?100:100*(e.growth/e.levelList[n].growth).toFixed(2)),t.rate=o})),e.levelList.forEach((function(e){e.consume_discount&&(e.consume_discount=(e.consume_discount/10).toFixed(2))}))):e.$util.showToast({title:t.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getCouponInfo:function(){var e=this;this.$api.sendRequest({url:"/coupon/api/coupon/typepagelists",success:function(t){t.code>=0&&(e.couponList=t.data.list)}})},growthRules:function(){this.$util.redirectTo("/otherpages/member/level/level_growth_rules")},openCoupon:function(e){this.couponPopList=[];for(var t=e.split(","),n=0;n<this.couponList.length;n++)for(var o=0;o<t.length;o++)this.couponList[n].coupon_type_id==parseInt(t[o])&&(this.couponList[n].end_time=this.$util.timeStampTurnTime(this.couponList[n].end_time),this.couponPopList.push(this.couponList[n]));this.$refs.couponPopup.open()},closeCoupon:function(){this.$refs.couponPopup.close()}}};t.default=a}).call(this,n("543d")["default"])},"3c7b":function(e,t,n){"use strict";var o={nsProgress:function(){return n.e("components/ns-progress/ns-progress").then(n.bind(null,"9ce0"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"d380"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"cd2f"))},nsShowToast:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(n.bind(null,"f505"))}},i=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$util.img("/upload/uniapp/level/level-top-bg.png")),o=e.$util.img(e.userInfo.headimg),i=e.$util.getDefaultImage(),u=e.__map(e.levelList,(function(t,n){var o=e.$util.img("upload/uniapp/level/level_"+(Number(n%5)+1)+".png");return{$orig:e.__get_orig(t),g3:o}})),r=e.$util.img("upload/uniapp/level/exemption_postage.png"),s=e.$util.img("upload/uniapp/level/consumption_discount.png"),l=e.$util.img("upload/uniapp/level/integral_feedback.png"),c=e.$util.img("upload/uniapp/level/integral.png"),a=e.$util.img("upload/uniapp/level/red_packet.png"),d=e.$util.img("upload/uniapp/level/coupon.png");e._isMounted||(e.e0=function(t){e.userInfo.headimg=e.$util.getDefaultImage().default_headimg}),e.$mp.data=Object.assign({},{$root:{g0:n,g1:o,g2:i,l0:u,g4:r,g5:s,g6:l,g7:c,g8:a,g9:d}})},u=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o}))},8421:function(e,t,n){"use strict";(function(e){n("6b76");o(n("66fd"));var t=o(n("9837"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},9837:function(e,t,n){"use strict";n.r(t);var o=n("3c7b"),i=n("1181");for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n("0f30");var r,s=n("f0c5"),l=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=l.exports},ed1f:function(e,t,n){}},[["8421","common/runtime","common/vendor"]]]);