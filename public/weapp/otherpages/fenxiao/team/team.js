(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/fenxiao/team/team"],{"132e":function(e,t,n){"use strict";var i=n("295e"),a=n.n(i);a.a},"295e":function(e,t,n){},"2a5e":function(e,t,n){"use strict";n.r(t);var i=n("8f80"),a=n("c350");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("132e");var r,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=s.exports},"2afc":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a")),a=r(n("e65d")),o=r(n("b6ac"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,i,a,o,r){try{var u=e[o](r),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(i,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function r(e){u(o,i,a,r,s,"next",e)}function s(e){u(o,i,a,r,s,"throw",e)}r(void 0)}))}}var c={data:function(){return{category:[{id:0,name:"推荐会员",number:0},{id:1,name:"下级",number:2},{id:2,name:"下下级",number:0}],selectId:0,teamList:[],emptyShow:!1,levelNum:0,token:null}},mixins:[a.default,o.default],onShow:function(){var t=this;if(!this.addonIsExit.fenxiao)return this.$util.showToast({title:"商家未开启分销",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh(),this.$langConfig.title(this.fenxiaoWords.my_team),this.getFenXiaoLevel(),e.getStorageSync("token")?this.token=e.getStorageSync("token"):setTimeout((function(){t.$refs.login.open("/otherpages/fenxiao/team/team")}))},methods:{getData:function(e){var t=this;this.emptyShow=!1,1==e.num&&(this.teamList=[]),this.$api.sendRequest({url:"/fenxiao/api/fenxiao/team",data:{page_size:e.size,page:e.num,level:this.selectId},success:function(n){t.emptyShow=!0;var i=[],a=n.message;0==n.code&&n.data?(i=n.data.list,i.forEach((function(e){e.audit_time=t.$util.timeStampTurnTime(e.audit_time).substring(0,10),e.reg_time=t.$util.timeStampTurnTime(e.reg_time).substring(0,10)}))):t.$util.showToast({title:a}),e.endSuccess(i.length),1==e.num&&(t.teamList=[]),t.teamList=t.teamList.concat(i),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(n){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},imageError:function(e){this.teamList[e].headimg=$util.getDefaultImage().default_headimg,this.$forceUpdate()},selectCate:function(e){this.selectId=e,this.$refs.mescroll.refresh()},toFenxiaoOrder:function(e){e.fenxiao_id?this.$util.redirectTo("/otherpages/fenxiao/relation/relation",{fenxiao_id:e.fenxiao_id}):this.$util.redirectTo("/otherpages/fenxiao/relation/relation",{sub_member_id:e.member_id})},getFenXiaoLevel:function(){var e=this;return s(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.sendRequest({url:"/fenxiao/api/config/basics",async:!1,success:function(e){}});case 2:n=t.sent,0==n.code&&n.data&&(0==n.data.self_purchase_rebate?e.levelNum=Number(n.data.level)+1:e.levelNum=Number(n.data.level));case 4:case"end":return t.stop()}}),t)})))()}},watch:{storeToken:function(e,t){e&&(this.token=e,this.$refs.mescroll.refresh())}},computed:{storeToken:function(){return this.$store.state.token}}};t.default=c}).call(this,n("543d")["default"])},"8f80":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"90af"))},nsLogin:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-login/ns-login")]).then(n.bind(null,"2bc6"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"4c1d"))}},a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.token?e.__map(e.teamList,(function(t,n){var i=e.__get_orig(t),a=0!=e.teamList.length&&t.headimg?e.$util.img(t.headimg):null,o=0==e.teamList.length||t.headimg?null:e.$util.getDefaultImage();return{$orig:i,g0:a,g1:o}})):null);e.$mp.data=Object.assign({},{$root:{l0:n}})},o=[]},c350:function(e,t,n){"use strict";n.r(t);var i=n("2afc"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},e6cd:function(e,t,n){"use strict";(function(e){n("67ba");i(n("66fd"));var t=i(n("2a5e"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["e6cd","common/runtime","common/vendor"]]]);