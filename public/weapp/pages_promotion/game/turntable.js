(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_promotion/game/turntable"],{"4e9c":function(e,t,n){},"56a3":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={lTime:function(){return Promise.all([n.e("common/vendor"),n.e("components/l-time/l-time")]).then(n.bind(null,"9050"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"92aa"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"790a"))},nsLogin:function(){return n.e("components/ns-login/ns-login").then(n.bind(null,"2893"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$util.img("public/uniapp/game/turntable_head.png")),i=e.$util.img("public/uniapp/game/turntable_bg.png"),r=e.__map(e.gameInfo.award,(function(t,n){var i=e.__get_orig(t),r=e.$util.img(t.award_img);return{$orig:i,g2:r}})),o=e.gameInfo.is_show_winner&&e.gameInfo.draw_record.length?e.__map(e.gameInfo.draw_record,(function(t,n){var i=e.__get_orig(t),r=e._f("cover")(t.member_nick_name);return{$orig:i,f0:r}})):null,s=e.result.is_winning?e.$util.img(e.gameInfo.award[e.resultIndex].award_img):null,u=e.result.is_winning?e.$util.img("public/uniapp/game/result_yes.png"):null,a=e.result.is_winning?null:e.$util.img("public/uniapp/game/result_look.png"),l=e.result.is_winning?null:e.$util.img("public/uniapp/game/result_no.png"),c=e.$util.img("public/uniapp/game/rule_head.png"),d=e.$util.timeStampTurnTime(e.gameInfo.start_time),m=e.$util.timeStampTurnTime(e.gameInfo.end_time);e._isMounted||(e.e0=function(t){return e.$util.redirectTo("/pages_promotion/game/record",{id:e.id})}),e.$mp.data=Object.assign({},{$root:{g0:n,g1:i,l0:r,l1:o,g3:s,g4:u,g5:a,g6:l,g7:c,g8:d,g9:m}})},o=[]},"71b7":function(e,t,n){},"789f":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("92aa"))}.bind(null,n)).catch(n.oe)},r=function(){Promise.all([n.e("common/vendor"),n.e("components/l-time/l-time")]).then(function(){return resolve(n("9050"))}.bind(null,n)).catch(n.oe)},o={components:{uniPopup:i,LTime:r},data:function(){return{token:null,isClick:!1,currentIndex:-1,maxRing:6,currentRing:1,speed:300,timer:null,id:0,gameInfo:{award:[{award_img:"",award_name:""}],surplus_num:""},award:[],resultIndex:0,result:{is_winning:1},point:0,animate:!1,scrollTimer:null,memberInfo:null,memberId:0,shareImg:""}},onLoad:function(t){var n=this;if(t.id&&(this.id=t.id),this.$util.getMemberId().then((function(e){n.memberId=e})),t.source_member&&e.setStorageSync("source_member",t.source_member),t.scene){var i=decodeURIComponent(t.scene);i=i.split("&"),i.length&&i.forEach((function(t){-1!=t.indexOf("id")&&(n.id=t.split("-")[1]),-1!=t.indexOf("sku_id")&&(n.skuId=t.split("-")[1]),-1!=t.indexOf("m")&&e.setStorageSync("source_member",t.split("-")[1]),-1!=t.indexOf("is_test")&&e.setStorageSync("is_test",1)}))}this.getGameInfo()},onShow:function(){var t=this;if(!this.addonIsExist.turntable)return this.$util.showToast({title:"商家未开启幸运抽奖",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index",{},"redirectTo")}),2e3);e.getStorageSync("token")&&e.getStorageSync("source_member")&&this.$util.onSourceMember(e.getStorageSync("source_member")),e.getStorageSync("token")&&(this.getMemberPointInfo(),this.token=e.getStorageSync("token"))},onShareAppMessage:function(e){var t=this.gameInfo.game_name,n=this.$util.getCurrentShareRoute(this.memberId),i=n.path;return{title:t,path:i,imageUrl:"",success:function(e){},fail:function(e){}}},onShareTimeline:function(){var e=this.gameInfo.game_name,t=this.$util.getCurrentShareRoute(this.memberId),n=t.query;return{title:e,query:n,imageUrl:""}},computed:{storeToken:function(){return this.$store.state.token}},watch:{storeToken:function(t,n){t&&(this.token=e.getStorageSync("token"),this.getMemberPointInfo(),this.getGameInfo())}},methods:{getMemberPointInfo:function(){var e=this;this.$api.sendRequest({url:"/api/member/info",success:function(t){0==t.code&&t.data&&(e.point=parseInt(t.data.point),e.memberInfo=t.data)}})},lottery:function(){var t=this;if(e.getStorageSync("token")){if(1==this.gameInfo.status)if(this.gameInfo.surplus_num<=0)this.$util.showToast({title:"您的抽奖次数已用完"});else{var n=","+this.gameInfo.level_id+",";"0"==this.gameInfo.level_id||-1!=n.indexOf(","+this.memberInfo.member_level+",")?this.gameInfo.points>0&&this.point<this.gameInfo.points?this.$util.showToast({title:"积分不足"}):this.isClick||(this.isClick=!0,this.currentIndex=0,this.currentRing=1,this.speed=300,this.timer=setInterval(this.startRoll,this.speed),this.$api.sendRequest({url:"/turntable/api/turntable/lottery",data:{id:this.id},success:function(e){e.code>=0?(t.result=e.data,e.data.is_winning?t.resultIndex=t.$util.inArray(e.data.award_id,t.award):t.resultIndex=t.$util.inArray(-1,t.award),t.point-=t.gameInfo.points,t.gameInfo.surplus_num-=1):t.$util.showToast({title:e.message})},fail:function(e){t.resultIndex=t.$util.inArray(-1,t.award)}})):this.$util.showToast({title:"该活动只有"+this.gameInfo.level_name+"等级的会员可参与该活动"})}}else this.$refs.login.open("/pages_promotion/game/turntable?id="+this.id)},getGameInfo:function(){var e=this;this.$api.sendRequest({url:"/turntable/api/turntable/info",data:{id:this.id},success:function(t){t.code>=0&&t.data?(e.gameInfo=t.data,t.data.award.forEach((function(t){e.award.push(t.award_id)})),e.$refs.loadingCover&&e.$refs.loadingCover.hide(),e.gameInfo.is_show_winner&&e.gameInfo.draw_record.length>6&&(e.scrollTimer=setInterval(e.scrollRecord,2e3))):(e.$util.showToast({title:"未获取到活动信息！"}),setTimeout((function(){e.$util.redirectTo("/pages/index/index",{},"reLaunch")}),1500))},fail:function(t){e.$util.showToast({title:"未获取到活动信息！"}),setTimeout((function(){e.$util.redirectTo("/pages/index/index",{},"reLaunch")}),1500)}})},startRoll:function(){if(this.speed>50&&(this.speed-=50),this.currentRing>=this.maxRing-1&&this.speed<700&&(this.speed+=100),this.currentRing==this.maxRing&&this.currentIndex==this.resultIndex)return clearInterval(this.timer),void this.showResult();7==this.currentIndex?(this.currentRing+=1,this.currentIndex=0):this.currentIndex+=1,clearInterval(this.timer),this.timer=setTimeout(this.startRoll,this.speed)},showResult:function(){this.$refs.resultPopup.open()},closePopup:function(){this.isClick=!1,this.currentIndex=-1,this.$refs.resultPopup.close()},openRulePopup:function(){this.$refs.rulePopup.open()},closeRulePopup:function(){this.$refs.rulePopup.close()},scrollRecord:function(){var e=this;this.animate=!0,setTimeout((function(){e.gameInfo.draw_record.push(e.gameInfo.draw_record[0]),e.gameInfo.draw_record.shift(),e.animate=!1}),1e3)}},filters:{cover:function(e){return"string"==typeof e&&e.length>0?e.substr(0,1)+"******"+e.substr(-1):""}},onHide:function(){clearInterval(this.scrollTimer)}};t.default=o}).call(this,n("543d")["default"])},"859b":function(e,t,n){"use strict";var i=n("71b7"),r=n.n(i);r.a},"8e0f":function(e,t,n){"use strict";(function(e){n("34b0");i(n("66fd"));var t=i(n("d5ce"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},d00e:function(e,t,n){"use strict";var i=n("4e9c"),r=n.n(i);r.a},d27e:function(e,t,n){"use strict";n.r(t);var i=n("789f"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},d5ce:function(e,t,n){"use strict";n.r(t);var i=n("56a3"),r=n("d27e");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("859b"),n("d00e");var s,u=n("f0c5"),a=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"7bbca4a6",null,!1,i["a"],s);t["default"]=a.exports}},[["8e0f","common/runtime","common/vendor"]]]);