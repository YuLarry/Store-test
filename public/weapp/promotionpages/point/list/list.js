(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/point/list/list"],{"01a8":function(n,t,o){"use strict";var i=o("339a"),e=o.n(i);e.a},"339a":function(n,t,o){},6122:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e(o("4c22"));function e(n){return n&&n.__esModule?n:{default:n}}var s=function(){o.e("components/uni-popup/uni-popup").then(function(){return resolve(o("d380"))}.bind(null,o)).catch(o.oe)},u=function(){Promise.all([o.e("common/vendor"),o.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(o("f505"))}.bind(null,o)).catch(o.oe)},a={components:{uniPopup:s,nsShowToast:u},data:function(){return{mescroll:null,categoryList:[{id:1,name:"商品"},{id:2,name:"优惠券"},{id:3,name:"红包"}],selectCategoryId:1,goodsList:[],isLogin:!1,point:0}},onLoad:function(n){},mixins:[i.default],onShow:function(){var n=this;if(!this.addonIsExit.pointexchange)return this.$util.showToast({title:"商家未开启积分商城",mask:!0,duration:2e3}),void setTimeout((function(){n.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh(),this.getAccountInfo()},methods:{jumpPage:function(n){this.$util.redirectTo(n)},openPointPopup:function(){this.$refs.pointPopup.open()},closePointPopup:function(){this.$refs.pointPopup.close()},getData:function(n){var t=this;this.mescroll=n,this.$api.sendRequest({url:"/pointexchange/api/goods/page",data:{page_size:n.size,page:n.num,type:this.selectCategoryId},success:function(o){var i=[],e=o.message;0==o.code&&o.data?i=o.data.list:t.$util.showToast({title:e}),n.endSuccess(i.length),1==n.num&&(t.goodsList=[]),t.goodsList=t.goodsList.concat(i),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(){n.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},categoryChange:function(n){this.selectCategoryId=n,this.mescroll.resetUpScroll()},toDetail:function(n,t){this.$util.redirectTo("/promotionpages/point/detail/detail",{id:n.id})},getAccountInfo:function(){var t=this;n.getStorageSync("token")?(this.isLogin=!0,this.$api.sendRequest({url:"/api/memberaccount/info",data:{account_type:"point"},success:function(n){0==n.code&&n.data?t.point=n.data.point:t.$util.showToast({title:n.message})}})):this.isLogin=!1},login:function(){this.$refs.login.open("/promotionpages/point/list/list")},imageError:function(n){this.goodsList[n].image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}},onShareAppMessage:function(n){var t="积分兑换，好礼带回家哦",o="/promotionpages/point/list/list";return{title:t,path:o,success:function(n){},fail:function(n){}}}};t.default=a}).call(this,o("543d")["default"])},a873:function(n,t,o){"use strict";o.r(t);var i=o("fb44"),e=o("f251");for(var s in e)"default"!==s&&function(n){o.d(t,n,(function(){return e[n]}))}(s);o("01a8");var u,a=o("f0c5"),r=Object(a["a"])(e["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=r.exports},bc37:function(n,t,o){"use strict";(function(n){o("6b76");i(o("66fd"));var t=i(o("a873"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,o("543d")["createPage"])},f251:function(n,t,o){"use strict";o.r(t);var i=o("6122"),e=o.n(i);for(var s in i)"default"!==s&&function(n){o.d(t,n,(function(){return i[n]}))}(s);t["default"]=e.a},fb44:function(n,t,o){"use strict";var i={nsEmpty:function(){return o.e("components/ns-empty/ns-empty").then(o.bind(null,"211f"))},uniPopup:function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,"d380"))},loadingCover:function(){return o.e("components/loading-cover/loading-cover").then(o.bind(null,"cd2f"))},nsLogin:function(){return Promise.all([o.e("common/vendor"),o.e("components/ns-login/ns-login")]).then(o.bind(null,"37fd"))},nsShowToast:function(){return Promise.all([o.e("common/vendor"),o.e("components/ns-show-toast/ns-show-toast")]).then(o.bind(null,"f505"))}},e=function(){var n=this,t=n.$createElement,o=(n._self._c,n.$util.img("/upload/uniapp/point/point-shop.png")),i=parseInt(n.point),e=n.$util.img("/upload/uniapp/point/point_01.png"),s=n.$util.img("upload/uniapp/point/coupon.png"),u=n.$util.img("upload/uniapp/point/hongbao.png"),a=n.$lang("common.currencySymbol"),r=n.__map(n.goodsList,(function(t,o){var i=n.$util.img(t.image),e=n.$util.img(t.image),s=n.$util.img(t.image),u=n.$util.img(t.image),a=n.$util.img(t.image);return{$orig:n.__get_orig(t),g2:i,g3:e,g5:s,g6:u,g8:a}}));n.$mp.data=Object.assign({},{$root:{g0:o,m0:i,g1:e,g4:s,g7:u,m1:a,l0:r}})},s=[];o.d(t,"b",(function(){return e})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return i}))}},[["bc37","common/runtime","common/vendor"]]]);