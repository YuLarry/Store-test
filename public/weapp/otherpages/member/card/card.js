(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/card/card"],{3967:function(e,n,o){"use strict";o.d(n,"b",(function(){return l})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return t}));var t={uniPopup:function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,"d7b6"))},nsLogin:function(){return Promise.all([o.e("common/vendor"),o.e("components/ns-login/ns-login")]).then(o.bind(null,"2bc6"))},loadingCover:function(){return o.e("components/loading-cover/loading-cover").then(o.bind(null,"4c1d"))}},l=function(){var e=this,n=e.$createElement,o=(e._self._c,e.$util.img("/upload/uniapp/level/card-top-bg.png")),t=e.userInfo.headimg?e.$util.img(e.userInfo.headimg):null,l=e.userInfo.headimg?null:e.$util.getDefaultImage(),i=e.userInfo.level_expire_time>0?e.$util.timeStampTurnTime(e.userInfo.level_expire_time,!0):null,u=e.$util.img("upload/uniapp/level/card-bg.png"),r=(e.levelInfo.is_free_shipping||e.levelInfo.consume_discount<100||e.levelInfo.point_feedback>0)&&e.levelInfo.point_feedback>0?parseFloat(e.levelInfo.point_feedback):null,a=(e.levelInfo.is_free_shipping||e.levelInfo.consume_discount<100||e.levelInfo.point_feedback>0)&&(""!=e.levelInfo.send_coupon||e.levelInfo.send_point>0||e.levelInfo.send_balance>0)&&e.levelInfo.send_balance>0?parseFloat(e.levelInfo.send_balance):null,s=(e.levelInfo.is_free_shipping||e.levelInfo.consume_discount<100||e.levelInfo.point_feedback>0)&&(""!=e.levelInfo.send_coupon||e.levelInfo.send_point>0||e.levelInfo.send_balance>0)&&""!=e.levelInfo.send_coupon?e.levelInfo.send_coupon.split(","):null;e._isMounted||(e.e0=function(n){return e.$util.redirectTo("/otherpages/member/card_buy/card_buy")}),e.$mp.data=Object.assign({},{$root:{g0:o,g1:t,g2:l,g3:i,g4:u,m0:r,m1:a,g5:s}})},i=[]},"618b":function(e,n,o){"use strict";(function(e){o("67ba");t(o("66fd"));var n=t(o("8a796"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,o("543d")["createPage"])},6584:function(e,n,o){},"8a796":function(e,n,o){"use strict";o.r(n);var t=o("3967"),l=o("eb27");for(var i in l)"default"!==i&&function(e){o.d(n,e,(function(){return l[e]}))}(i);o("947f");var u,r=o("f0c5"),a=Object(r["a"])(l["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],u);n["default"]=a.exports},"947f":function(e,n,o){"use strict";var t=o("6584"),l=o.n(t);l.a},eb27:function(e,n,o){"use strict";o.r(n);var t=o("f43a"),l=o.n(t);for(var i in t)"default"!==i&&function(e){o.d(n,e,(function(){return t[e]}))}(i);n["default"]=l.a},f43a:function(e,n,o){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(o("b6ac")),l=i(o("d78b"));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(){o.e("components/uni-popup/uni-popup").then(function(){return resolve(o("d7b6"))}.bind(null,o)).catch(o.oe)},r=function(){Promise.all([o.e("common/vendor"),o.e("components/ns-goods-recommend/ns-goods-recommend")]).then(function(){return resolve(o("4955"))}.bind(null,o)).catch(o.oe)},a={components:{uniPopup:u,nsGoodsRecommend:r},mixins:[l.default,t.default],data:function(){return{isSub:!1,isIphoneX:!1,levelId:0,userInfo:{},levelInfo:{bg_color:"#333"}}},computed:{storeToken:function(){return this.$store.state.token}},onLoad:function(){var n=this;this.isIphoneX=this.$util.uniappIsIPhoneX(),this.$langConfig.refresh(),e.getStorageSync("token")?this.getMemberInfo():setTimeout((function(){n.$refs.login.open("/otherpages/member/card/card")}))},onShow:function(){},watch:{storeToken:function(e,n){e&&this.getMemberInfo()}},methods:{getMemberInfo:function(){var e=this;this.$api.sendRequest({url:"/api/member/info",success:function(n){if(0==n.code&&n.data){e.levelId=n.data.member_level,e.userInfo=n.data;var o=n.data.member_level_info,t=n.data.charge_rule?JSON.parse(n.data.charge_rule):{};o.charge_rule_arr=[],Object.keys(t).forEach((function(e){o.charge_rule_arr.push({key:e,value:t[e]})})),e.levelInfo=o}else e.$util.showToast({title:n.message});e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(n){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},headimgError:function(){this.userInfo.headimg=this.$util.getDefaultImage().default_headimg},openExplainPopup:function(){this.$refs.explainPopup.open()},closeExplainPopup:function(){this.$refs.explainPopup.close()}},onBackPress:function(e){return"navigateBack"!==e.from&&(this.$util.redirectTo("/pages/member/index/index",{},"reLaunch"),!0)}};n.default=a}).call(this,o("543d")["default"])}},[["618b","common/runtime","common/vendor"]]]);