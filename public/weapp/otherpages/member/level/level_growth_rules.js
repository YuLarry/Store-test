(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/level/level_growth_rules"],{"3aa2":function(e,t,n){},"6cab":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"4c1d"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$util.img("upload/uniapp/level/growth_that_left.png")),i=e.$util.img("upload/uniapp/level/growth_that_right.png"),r=e.$util.img("upload/uniapp/level/explain.png"),o=e.$util.img("upload/uniapp/level/explain.png");e.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:r,g3:o}})},o=[]},7723:function(e,t,n){"use strict";n.r(t);var i=n("e150"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},"822e":function(e,t,n){"use strict";var i=n("3aa2"),r=n.n(i);r.a},"8fd4":function(e,t,n){"use strict";n.r(t);var i=n("6cab"),r=n("7723");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("822e");var u,a=n("f0c5"),l=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=l.exports},ae1d:function(e,t,n){"use strict";(function(e){n("67ba");i(n("66fd"));var t=i(n("8fd4"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},e150:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("d78b"));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){n.e("components/ns-progress/ns-progress").then(function(){return resolve(n("e12f9"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/toTop/toTop").then(function(){return resolve(n("9eed"))}.bind(null,n)).catch(n.oe)},a={components:{nsProgress:o,toTop:u},mixins:[i.default],data:function(){return{curIndex:0,descIndex:0,isDescAnimating:!1,scaleX:(634/540).toFixed(4),scaleY:(378/330).toFixed(4),swiperConfig:{indicatorDots:!1,indicatorColor:"rgba(255, 255, 255, .4)",indicatorActiveColor:"rgba(255, 255, 255, 1)",interval:3e3,duration:300,circular:!1,previousMargin:"58rpx",nextMargin:"58rpx"},levelList:[{needGrowth:0,growth:0}],levelId:0,growth:0,nowIndex:0,userInfo:{},rule:[]}},computed:{listLen:function(){return this.levelList.length},remark:function(){if(this.levelList[this.curIndex])return this.levelList[this.curIndex].remark},baseColor:function(){return this.$store.state.baseColor},themeStyle:function(){return"theme-"+this.$store.state.themeStyle},nextIndex:function(){return this.curIndex==this.levelList.length-1?this.curIndex:this.curIndex+1}},onLoad:function(){this.getLevelList(),this.getLevelRule()},onShow:function(){this.$langConfig.refresh()},filters:{rate:function(e,t,n){var i=Number(n),r=Number(t[e].growth);if(e==t.length-1)return i>r?100:0;var o=Number(t[e+1].growth),u=i-r,a=o-r,l=Math.floor(u/a*100);return l>100?100:l}},methods:{swiperChange:function(e){var t=this;this.curIndex=e.detail.current,this.isDescAnimating=!0;var n=setTimeout((function(){t.descIndex=e.detail.current,clearTimeout(n)}),150)},animationfinish:function(e){this.isDescAnimating=!1},getBannerDetail:function(t){e.showLoading({title:"将前往详情页面",duration:2e3,mask:!0})},getLevelList:function(){var e=this;this.$api.sendRequest({url:"/api/memberlevel/lists",success:function(t){t.data&&0==t.code?(e.levelList=t.data,e.getMemberInfo()):(e.$util.showToast({title:t.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide())}})},getLevelRule:function(){var e=this;this.$api.sendRequest({url:"/api/member/accountrule",success:function(t){0==t.code&&t.data&&t.data.growth&&(e.rule=t.data.growth)}})},getMemberInfo:function(){var e=this;this.$api.sendRequest({url:"/api/member/info",success:function(t){t.data&&0==t.code?(e.levelId=t.data.member_level,e.growth=t.data.growth,e.userInfo=t.data,e.levelList.forEach((function(n,i){if(n.level_id==t.data.member_level)return e.curIndex=i,e.descIndex=i,void(e.nowIndex=i)})),e.levelList.forEach((function(t,n){var i=0;n!=e.levelList.length-1?(t.needGrowth=Number(e.levelList[n+1].growth)-Number(e.growth),i=t.needGrowth<=0?100:100*(e.growth/e.levelList[n+1].growth).toFixed(2)):(t.needGrowth=Number(e.levelList[n].growth)-Number(e.growth),i=t.needGrowth<=0?100:100*(e.growth/e.levelList[n].growth).toFixed(2)),t.rate=i})),e.levelList.forEach((function(e){e.consume_discount&&(e.consume_discount=(e.consume_discount/10).toFixed(2))}))):e.$util.showToast({title:t.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})}}};t.default=a}).call(this,n("543d")["default"])}},[["ae1d","common/runtime","common/vendor"]]]);