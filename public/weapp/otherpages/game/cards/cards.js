(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/game/cards/cards"],{"5de8":function(e,t,n){"use strict";n.r(t);var i=n("69d1"),o=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=o.a},"68ee":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var i={lTime:function(){return Promise.all([n.e("common/vendor"),n.e("components/l-time/l-time")]).then(n.bind(null,"d8b2"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"d7b6"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"4c1d"))},nsLogin:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-login/ns-login")]).then(n.bind(null,"2bc6"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$util.img("upload/uniapp/game/cards_head.png")),i=e.$util.img("upload/uniapp/game/cards_bg.png"),o=e.gameInfo.is_show_winner&&e.gameInfo.draw_record.length?e.__map(e.gameInfo.draw_record,(function(t,n){var i=e.__get_orig(t),o=e._f("cover")(t.member_nick_name);return{$orig:i,f0:o}})):null,s=e.$util.img("upload/uniapp/game/rule_head.png"),r=e.$util.timeStampTurnTime(e.gameInfo.start_time),a=e.$util.timeStampTurnTime(e.gameInfo.end_time);e._isMounted||(e.e0=function(t){return e.$util.redirectTo("/otherpages/game/record/record",{id:e.id})}),e.$mp.data=Object.assign({},{$root:{g0:n,g1:i,l0:o,g2:s,g3:r,g4:a}})},s=[]},"69d1":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("b6ac"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("d7b6"))}.bind(null,n)).catch(n.oe)},r=function(){Promise.all([n.e("common/vendor"),n.e("components/l-time/l-time")]).then(function(){return resolve(n("d8b2"))}.bind(null,n)).catch(n.oe)},a={components:{uniPopup:s,LTime:r},data:function(){return{ctxData:null,ctx:null,ctxW:0,ctxH:0,scaleRatio:1,showGuide:!0,id:0,gameInfo:{no_winning_desc:"",surplus_num:0},result:{is_winning:0},isClick:!1,point:0,animate:!1,scrollTimer:null,token:"",popState:!1,add_point:0,memberId:0,shareImg:""}},mixins:[i.default],onLoad:function(t){var n=this;if(t.id&&(this.id=t.id),this.$util.getMemberId().then((function(e){n.memberId=e})).catch((function(e){console.log("reject",e)})),t.source_member&&e.setStorageSync("source_member",t.source_member),t.scene){var i=decodeURIComponent(t.scene);i=i.split("&"),i.length&&i.forEach((function(t){-1!=t.indexOf("id")&&(n.id=t.split("-")[1]),-1!=t.indexOf("sku_id")&&(n.skuId=t.split("-")[1]),-1!=t.indexOf("m")&&e.setStorageSync("source_member",t.split("-")[1]),-1!=t.indexOf("is_test")&&e.setStorageSync("is_test",1)}))}this.getGameInfo()},onShow:function(){var t=this;if(e.getStorageSync("token")&&e.getStorageSync("source_member")&&this.$util.onSourceMember(e.getStorageSync("source_member")),!this.addonIsExit.cards)return this.$util.showToast({title:"商家未开启刮刮乐",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh(),e.getStorageSync("token")&&(this.token=e.getStorageSync("token"),this.getMemberPointInfo())},onShareAppMessage:function(e){var t=this.gameInfo.game_name,n=this.$util.getCurrentShareRoute(this.memberId),i=n.path;return{title:t,path:i,imageUrl:"",success:function(e){},fail:function(e){}}},onShareTimeline:function(){var e=this.gameInfo.game_name,t=this.$util.getCurrentShareRoute(this.memberId),n=t.query;return{title:e,query:n,imageUrl:""}},computed:{storeToken:function(){return this.$store.state.token}},watch:{storeToken:function(t,n){t&&(this.token=e.getStorageSync("token"),this.getMemberPointInfo(),this.getGameInfo())}},methods:{again:function(){this.$util.redirectTo("/otherpages/game/cards/cards",{id:this.id},"redirectTo")},popChange:function(e){this.popState=e.show},getMemberPointInfo:function(){var e=this;this.$api.sendRequest({url:"/api/memberaccount/info",data:{account_type:"point"},success:function(t){t.data&&(e.point=parseInt(t.data.point))}})},createCtx:function(){this.ctx=e.createCanvasContext("cardsCanvas",this),this.ctx.setFillStyle("#e5e5e5"),this.ctx.fillRect(0,0,this.ctxW,this.ctxH),this.ctx.globalCompositeOperation="destination-out",this.ctx.draw()},contentMove:function(){event.preventDefault(),this.add_point=0},touchMove:function(e){this.add_point=1,e.preventDefault();this.ctxData;this.ctx.beginPath(),this.ctx.arc(e.touches[0].x,e.touches[0].y,10*this.scaleRatio,0,2*Math.PI),this.ctx.globalCompositeOperation="destination-out",this.ctx.setFillStyle("#fff"),this.ctx.fill(),this.ctx.draw(!0)},lottery:function(){var t=this;e.getStorageSync("token")?1==this.gameInfo.status&&(this.gameInfo.surplus_num<=0?this.$util.showToast({title:"您的抽奖次数已用完"}):this.gameInfo.points>0&&this.point<this.gameInfo.points?this.$util.showToast({title:"积分不足"}):this.isClick||(this.isClick=!0,this.$api.sendRequest({url:"/cards/api/cards/lottery",data:{id:this.id},success:function(n){if(n.code>=0){t.showGuide=!1,t.result=n.data;var i=e.createSelectorQuery().in(t);i.select(".guide-wrap").boundingClientRect((function(e){t.ctxData=e,t.ctxW=e.width,t.ctxH=e.height,t.createCtx()})).exec(),t.point-=t.gameInfo.points,t.gameInfo.surplus_num-=1}else t.$util.showToast({title:n.message})}}))):this.$refs.login.open("/otherpages/game/cards/cards?id="+this.id)},getGameInfo:function(){var e=this;this.$api.sendRequest({url:"/cards/api/cards/info",data:{id:this.id},success:function(t){t.code>=0&&t.data?(e.gameInfo=t.data,e.$refs.loadingCover&&e.$refs.loadingCover.hide(),e.gameInfo.is_show_winner&&e.gameInfo.draw_record.length>6&&(e.scrollTimer=setInterval(e.scrollRecord,2e3))):(e.$util.showToast({title:"未获取到活动信息！"}),setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}),1500))},fail:function(t){e.$util.showToast({title:"未获取到活动信息！"}),setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}),1500)}})},openRulePopup:function(){this.$refs.rulePopup.open()},closeRulePopup:function(){this.$refs.rulePopup.close()},scrollRecord:function(){var e=this;this.animate=!0,setTimeout((function(){e.gameInfo.draw_record.push(e.gameInfo.draw_record[0]),e.gameInfo.draw_record.shift(),e.animate=!1}),1e3)},reCards:function(){if(!this.showGuide){var t={ctxData:null,ctx:null,ctxW:0,ctxH:0,scaleRatio:1,showGuide:!0,gameInfo:{no_winning_desc:"",surplus_num:0},result:{is_winning:0},isClick:!1,point:0,animate:!1,scrollTimer:null};Object.assign(this.$data,t),this.getGameInfo(),e.getStorageSync("token")&&this.getMemberPointInfo()}}},onReady:function(){},filters:{cover:function(e){return e.substr(0,1)+"******"+e.substr(-1)}},onHide:function(){clearInterval(this.scrollTimer)}};t.default=a}).call(this,n("543d")["default"])},"70eb":function(e,t,n){"use strict";var i=n("cfdd"),o=n.n(i);o.a},"724f":function(e,t,n){"use strict";var i=n("8ea3"),o=n.n(i);o.a},"8ea3":function(e,t,n){},cfdd:function(e,t,n){},edb6:function(e,t,n){"use strict";(function(e){n("67ba");i(n("66fd"));var t=i(n("fb32"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},fb32:function(e,t,n){"use strict";n.r(t);var i=n("68ee"),o=n("5de8");for(var s in o)"default"!==s&&function(e){n.d(t,e,(function(){return o[e]}))}(s);n("724f"),n("70eb");var r,a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"65739244",null,!1,i["a"],r);t["default"]=c.exports}},[["edb6","common/runtime","common/vendor"]]]);