(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/game/smash_eggs/smash_eggs"],{"020d":function(n,e,t){"use strict";t.r(e);var i=t("8fa3"),o=t.n(i);for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);e["default"]=o.a},"02af":function(n,e,t){},"62fe":function(n,e,t){"use strict";var i=t("7b6f"),o=t.n(i);o.a},"739c":function(n,e,t){"use strict";var i=t("02af"),o=t.n(i);o.a},"7b6f":function(n,e,t){},"8fa3":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){Promise.all([t.e("common/vendor"),t.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(t("691c"))}.bind(null,t)).catch(t.oe)},o=function(){t.e("components/uni-popup/uni-popup").then(function(){return resolve(t("1fce"))}.bind(null,t)).catch(t.oe)},u=function(){Promise.all([t.e("common/vendor"),t.e("components/l-time/l-time")]).then(function(){return resolve(t("1bf5"))}.bind(null,t)).catch(t.oe)},s={components:{nsShowToast:i,uniPopup:o,LTime:u},data:function(){return{token:null,id:0,gameInfo:{no_winning_desc:"",surplus_num:0},result:{is_winning:0,award_type:0,point:0,balance:0,relate_name:""},isClick:!1,eggStatus:0,scrollTimer:null,point:0,animate:!1}},onShow:function(){this.$langConfig.refresh(),n.getStorageSync("token")&&(this.getMemberPointInfo(),this.token=n.getStorageSync("token"))},onLoad:function(n){n.id&&(this.id=n.id),this.getGameInfo()},computed:{storeToken:function(){return this.$store.state.token}},watch:{storeToken:function(e,t){e&&(this.token=n.getStorageSync("token"),this.getMemberPointInfo(),this.getGameInfo())}},methods:{getMemberPointInfo:function(){var n=this;this.$api.sendRequest({url:"/api/memberaccount/info",data:{account_type:"point"},success:function(e){e.data&&(n.point=parseInt(e.data.point))}})},lottery:function(){var e=this;n.getStorageSync("token")?1==this.gameInfo.status&&(this.gameInfo.surplus_num<=0?this.$util.showToast({title:"您的抽奖次数已用完"}):this.gameInfo.points>0&&this.point<this.gameInfo.points?this.$util.showToast({title:"积分不足"}):this.isClick||(this.isClick=!0,this.$api.sendRequest({url:"/egg/api/egg/lottery",data:{id:this.id},success:function(n){n.code>=0?(e.result=n.data,e.start(),e.point-=e.gameInfo.points,e.gameInfo.surplus_num-=1):e.$util.showToast({title:n.message})}}))):this.$refs.login.open("/otherpages/game/smash_eggs/smash_eggs?id="+this.id)},getGameInfo:function(){var n=this;this.$api.sendRequest({url:"/egg/api/egg/info",data:{id:this.id},success:function(e){e.code>=0&&e.data?(n.gameInfo=e.data,n.$refs.loadingCover&&n.$refs.loadingCover.hide(),n.gameInfo.is_show_winner&&n.gameInfo.draw_record.length>6&&(n.scrollTimer=setInterval(n.scrollRecord,2e3))):(n.$util.showToast({title:"未获取到活动信息！"}),setTimeout((function(){n.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}),1500))},fail:function(e){n.$util.showToast({title:"未获取到活动信息！"}),setTimeout((function(){n.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}),1500)}})},start:function(){var n=this;this.$refs.transitionPopup.open(),setTimeout((function(){n.eggStatus=1}),1e3),setTimeout((function(){n.eggStatus=2}),3e3),setTimeout((function(){n.$refs.transitionPopup.close(),n.$refs.resultPopup.open()}),3300)},scrollRecord:function(){var n=this;this.animate=!0,setTimeout((function(){n.gameInfo.draw_record.push(n.gameInfo.draw_record[0]),n.gameInfo.draw_record.shift(),n.animate=!1}),1e3)},closePopup:function(){this.isClick=!1,this.eggStatus=0,this.$refs.resultPopup.close()},openRulePopup:function(){this.$refs.rulePopup.open()},closeRulePopup:function(){this.$refs.rulePopup.close()}},filters:{cover:function(n){return"string"==typeof n&&n.length>0?n.substr(0,1)+"******"+n.substr(-1):""}},onHide:function(){clearInterval(this.scrollTimer)}};e.default=s}).call(this,t("543d")["default"])},"95be":function(n,e,t){"use strict";(function(n){t("5558");i(t("66fd"));var e=i(t("9eec"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"9eec":function(n,e,t){"use strict";t.r(e);var i=t("f9d8"),o=t("020d");for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);t("62fe"),t("739c");var s,a=t("f0c5"),r=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"49aaa0d9",null,!1,i["a"],s);e["default"]=r.exports},f9d8:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return i}));var i={lTime:function(){return Promise.all([t.e("common/vendor"),t.e("components/l-time/l-time")]).then(t.bind(null,"1bf5"))},uniPopup:function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"1fce"))},nsShowToast:function(){return Promise.all([t.e("common/vendor"),t.e("components/ns-show-toast/ns-show-toast")]).then(t.bind(null,"691c"))},loadingCover:function(){return t.e("components/loading-cover/loading-cover").then(t.bind(null,"30be"))},nsLogin:function(){return Promise.all([t.e("common/vendor"),t.e("components/ns-login/ns-login")]).then(t.bind(null,"2e9e"))}},o=function(){var n=this,e=n.$createElement,t=(n._self._c,n.$util.img("upload/uniapp/game/egg_head.png")),i=n.$util.img("upload/uniapp/game/golden_eggs.png"),o=n.$util.img("upload/uniapp/game/golden_eggs.png"),u=n.$util.img("upload/uniapp/game/golden_eggs.png"),s=n.gameInfo.is_show_winner&&n.gameInfo.draw_record.length?n.__map(n.gameInfo.draw_record,(function(e,t){var i=n.__get_orig(e),o=n._f("cover")(e.member_nick_name);return{$orig:i,f0:o}})):null,a=0==n.eggStatus?n.$util.img("upload/uniapp/game/golden_eggs_0.png"):null,r=1==n.eggStatus?n.$util.img("upload/uniapp/game/golden_eggs_1.png"):null,l=2==n.eggStatus?n.$util.img("upload/uniapp/game/golden_eggs_2.png"):null,g=n.$util.img("upload/uniapp/game/hammer.png"),c=n.result.is_winning&&1==n.result.award_type?n.$util.img("upload/uniapp/game/point.png"):null,p=n.result.is_winning&&2==n.result.award_type?n.$util.img("upload/uniapp/game/balance.png"):null,d=n.result.is_winning&&3==n.result.award_type?n.$util.img("upload/uniapp/game/coupon.png"):null,m=n.result.is_winning&&4==n.result.award_type?n.$util.img("upload/uniapp/game/gift.png"):null,f=n.result.is_winning?n.$util.img("upload/uniapp/game/result_yes.png"):null,h=n.result.is_winning?null:n.$util.img("upload/uniapp/game/result_look.png"),_=n.result.is_winning?null:n.$util.img("upload/uniapp/game/result_no.png"),$=n.$util.img("upload/uniapp/game/rule_head.png"),w=n.$util.timeStampTurnTime(n.gameInfo.start_time),v=n.$util.timeStampTurnTime(n.gameInfo.end_time);n._isMounted||(n.e0=function(e){return n.$util.redirectTo("/otherpages/game/record/record",{id:n.id})}),n.$mp.data=Object.assign({},{$root:{g0:t,g1:i,g2:o,g3:u,l0:s,g4:a,g5:r,g6:l,g7:g,g8:c,g9:p,g10:d,g11:m,g12:f,g13:h,g14:_,g15:$,g16:w,g17:v}})},u=[]}},[["95be","common/runtime","common/vendor"]]]);