(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/level/level"],{"0f30":function(e,n,t){"use strict";var o=t("ed1f"),i=t.n(o);i.a},1181:function(e,n,t){"use strict";t.r(n);var o=t("2f65"),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},"2f65":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t("4de2"));function i(e){return e&&e.__esModule?e:{default:e}}var r=function(){t.e("components/ns-progress/ns-progress").then(function(){return resolve(t("9ce0"))}.bind(null,t)).catch(t.oe)},u=function(){Promise.all([t.e("common/vendor"),t.e("components/ns-goods-recommend/ns-goods-recommend")]).then(function(){return resolve(t("ebb8"))}.bind(null,t)).catch(t.oe)},s=function(){t.e("components/toTop/toTop").then(function(){return resolve(t("336c"))}.bind(null,t)).catch(t.oe)},l=function(){t.e("components/uni-popup/uni-popup").then(function(){return resolve(t("d380"))}.bind(null,t)).catch(t.oe)},a=function(){Promise.all([t.e("common/vendor"),t.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(t("f505"))}.bind(null,t)).catch(t.oe)},c={components:{nsProgress:r,nsGoodsRecommend:u,toTop:s,nsShowToast:a,uniPopup:l},mixins:[o.default],data:function(){return{couponPopList:[],curIndex:0,descIndex:0,isDescAnimating:!1,scaleX:(634/540).toFixed(4),scaleY:(378/330).toFixed(4),swiperConfig:{indicatorDots:!1,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",interval:3e3,duration:300,circular:!1,previousMargin:"58rpx",nextMargin:"58rpx"},levelList:[{needGrowth:0,growth:0}],levelId:0,growth:0,nowIndex:0,userInfo:{},rule:[]}},computed:{listLen:function(){return this.levelList.length},remark:function(){if(this.levelList[this.curIndex])return this.levelList[this.curIndex].remark},baseColor:function(){return this.$store.state.baseColor},themeStyle:function(){return"theme-"+this.$store.state.themeStyle},nextIndex:function(){return this.curIndex==this.levelList.length-1?this.curIndex:this.curIndex+1}},onLoad:function(){this.getLevelList(),this.getLevelRule()},onShow:function(){this.$langConfig.refresh()},filters:{rate:function(e,n,t){var o=Number(t),i=Number(n[e].growth);if(e==n.length-1)return o>i?100:0;var r=Number(n[e+1].growth),u=o-i,s=r-i,l=Math.floor(u/s*100);return l>100?100:l}},methods:{swiperChange:function(e){var n=this;this.curIndex=e.detail.current,this.isDescAnimating=!0;var t=setTimeout((function(){n.descIndex=e.detail.current,clearTimeout(t)}),150)},animationfinish:function(e){this.isDescAnimating=!1},getBannerDetail:function(n){e.showLoading({title:"将前往详情页面",duration:2e3,mask:!0})},getLevelList:function(){var e=this;this.$api.sendRequest({url:"/api/memberlevel/lists",success:function(n){if(n.data&&0==n.code){e.levelList=n.data;for(var t=0;t<e.levelList.length;t++)e.levelList[t].send_coupon&&(e.levelList[t].coupon_length=e.levelList[t].send_coupon.split(",").length);e.getMemberInfo()}else e.$util.showToast({title:n.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getLevelRule:function(){var e=this;this.$api.sendRequest({url:"/api/member/accountrule",success:function(n){0==n.code&&n.data&&n.data.growth&&(e.rule=n.data.growth)}})},getMemberInfo:function(){var e=this;this.$api.sendRequest({url:"/api/member/info",success:function(n){n.data&&0==n.code?(e.levelId=n.data.member_level,e.growth=n.data.growth,e.userInfo=n.data,e.levelList.forEach((function(t,o){if(t.level_id==n.data.member_level)return e.curIndex=o,e.descIndex=o,void(e.nowIndex=o)})),e.levelList.forEach((function(n,t){parseFloat(n.growth)<parseFloat(e.growth)?(n.needGrowth=0,n.rate=100):(n.needGrowth=(parseFloat(n.growth)-parseFloat(e.growth)).toFixed(2),n.rate=100*(e.growth/n.growth).toFixed(2))})),e.levelList.forEach((function(e){e.consume_discount&&(e.consume_discount=(e.consume_discount/10).toFixed(2))}))):e.$util.showToast({title:n.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(n){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},growthRules:function(){this.$util.redirectTo("/otherpages/member/level/level_growth_rules")},openCoupon:function(e){var n=this;this.couponPopList=[],this.$api.sendRequest({url:"/coupon/api/coupon/couponbyid",data:{id:e},success:function(e){e.code>=0&&(n.couponPopList=e.data)}}),this.$refs.couponPopup.open()},closeCoupon:function(){this.$refs.couponPopup.close()}}};n.default=c}).call(this,t("543d")["default"])},8421:function(e,n,t){"use strict";(function(e){t("6b76");o(t("66fd"));var n=o(t("9837"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},9837:function(e,n,t){"use strict";t.r(n);var o=t("de7d"),i=t("1181");for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t("0f30");var u,s=t("f0c5"),l=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=l.exports},de7d:function(e,n,t){"use strict";var o={nsProgress:function(){return t.e("components/ns-progress/ns-progress").then(t.bind(null,"9ce0"))},uniPopup:function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"d380"))},loadingCover:function(){return t.e("components/loading-cover/loading-cover").then(t.bind(null,"cd2f"))},nsShowToast:function(){return Promise.all([t.e("common/vendor"),t.e("components/ns-show-toast/ns-show-toast")]).then(t.bind(null,"f505"))}},i=function(){var e=this,n=e.$createElement,t=(e._self._c,e.$util.img("/upload/uniapp/level/level-top-bg.png")),o=e.$util.img(e.userInfo.headimg),i=e.$util.getDefaultImage(),r=e.__map(e.levelList,(function(n,t){var o=e.$util.img("upload/uniapp/level/level_"+(Number(t%5)+1)+".png");return{$orig:e.__get_orig(n),g3:o}})),u=e.$util.img("upload/uniapp/level/exemption_postage.png"),s=e.$util.img("upload/uniapp/level/consumption_discount.png"),l=e.$util.img("upload/uniapp/level/integral_feedback.png"),a=e.$util.img("upload/uniapp/level/integral.png"),c=e.$util.img("upload/uniapp/level/red_packet.png"),d=e.$util.img("upload/uniapp/level/coupon.png"),p=e.__map(e.couponPopList,(function(n,t){var o=e.$util.numberFixed(n.discount,1);return{$orig:e.__get_orig(n),g10:o}}));e._isMounted||(e.e0=function(n){e.userInfo.headimg=e.$util.getDefaultImage().default_headimg}),e.$mp.data=Object.assign({},{$root:{g0:t,g1:o,g2:i,l0:r,g4:u,g5:s,g6:l,g7:a,g8:c,g9:d,l1:p}})},r=[];t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return o}))},ed1f:function(e,n,t){}},[["8421","common/runtime","common/vendor"]]]);