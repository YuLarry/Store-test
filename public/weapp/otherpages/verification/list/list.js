(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/verification/list/list"],{"1cd4":function(t,i,e){"use strict";e.r(i);var n=e("40d7"),r=e("e0d0");for(var a in r)"default"!==a&&function(t){e.d(i,t,(function(){return r[t]}))}(a);e("75dc");var s,o=e("f0c5"),f=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);i["default"]=f.exports},"40d7":function(t,i,e){"use strict";e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var n={nsEmpty:function(){return e.e("components/ns-empty/ns-empty").then(e.bind(null,"90af"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"4c1d"))}},r=function(){var t=this,i=t.$createElement,e=(t._self._c,t.__map(t.typeList,(function(i,e){var n=t.__get_orig(i),r=void 0!=t.verifyList[e]&&t.verifyList[e].list.length>0?t.__map(t.verifyList[e].list,(function(i,e){var n=t.__get_orig(i),r=t.$util.timeStampTurnTime(i.verify_time),a=t.$lang("common.currencySymbol"),s=t.__map(i.item_array,(function(i,e){var n=t.__get_orig(i),r=t.$util.img(i.img),a=t._f("abs")(i.price);return{$orig:n,g0:r,f0:a}}));return{$orig:n,g1:r,m0:a,l0:s}})):null;return{$orig:n,l1:r}})));t.$mp.data=Object.assign({},{$root:{l2:e}})},a=[]},6222:function(t,i,e){},"75dc":function(t,i,e){"use strict";var n=e("6222"),r=e.n(n);r.a},"8a54":function(t,i,e){"use strict";(function(t){e("67ba");n(e("66fd"));var i=n(e("1cd4"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])},e0d0:function(t,i,e){"use strict";e.r(i);var n=e("ffbc"),r=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=r.a},ffbc:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e("b6ac"));function r(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{scrollInto:"",type:0,typeList:[],verifyList:[],isShow:!1}},mixins:[n.default],onShow:function(){this.$langConfig.refresh(),this.getVerifyType()},methods:{toDetail:function(t){this.$util.redirectTo("/otherpages/verification/detail/detail",{code:t})},ontabtap:function(t){var i=t.target.dataset.current||t.currentTarget.dataset.current;this.switchTab(i),this.isShow=!1},switchTab:function(t){this.type!==t&&(this.type=t,this.scrollInto=this.typeList[t].type)},ontabchange:function(t){var i=t.target.current||t.detail.current;this.switchTab(i)},getVerifyType:function(){var t=this;this.$api.sendRequest({url:"/api/verify/getVerifyType",success:function(i){i.code>=0&&(t.typeList=[],t.verifyList=[],Object.keys(i.data).forEach((function(e){t.typeList.push({type:e,name:i.data[e].name}),t.verifyList.push({page:1,totalPage:1,list:[],isLoading:!1}),t.getVerifyList(e,1,t.typeList.length-1)})))},fail:function(i){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},getVerifyList:function(i,e,n){var r=this;this.verifyList[n].isLoading||1!=e&&e>this.verifyList[n].totalPage||(this.verifyList[n].isLoading=!0,this.verifyList[n].loadingType="loading",this.$api.sendRequest({url:"/api/verify/lists",data:{verify_type:i,page:e},success:function(i){r.verifyList[n].page=e,1==e&&(r.verifyList[n].list=[],t.stopPullDownRefresh()),i.data.list.length&&i.data.list.forEach((function(t){r.verifyList[n].list.push(t)})),r.verifyList[n].totalPage=i.data.page_count,r.verifyList[n].isLoading=!1,r.verifyList[n].loadingType=e==r.verifyList[n].totalPage?"nomore":"more",r.$refs.loadingCover&&r.$refs.loadingCover.hide(),r.isShow=!0}}))},scrolltolower:function(){var t=this.type;this.getVerifyList(this.typeList[t].type,this.verifyList[t].page+1,t)},onPullDownRefresh:function(){var t=this.type;this.getVerifyList(this.typeList[t].type,1,t)},imageError:function(t,i,e){this.verifyList[t].list[i].item_array[e].img=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}},filters:{abs:function(t){return Math.abs(parseFloat(t)).toFixed(2)}}};i.default=a}).call(this,e("543d")["default"])}},[["8a54","common/runtime","common/vendor"]]]);