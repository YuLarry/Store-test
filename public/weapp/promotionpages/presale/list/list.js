(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/presale/list/list"],{"3e4e":function(e,t,n){"use strict";var o=n("44cb"),a=n.n(o);a.a},"44cb":function(e,t,n){},6001:function(e,t,n){"use strict";n.r(t);var o=n("bfa7"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},9436:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var o={nsAdv:function(){return n.e("components/ns-adv/ns-adv").then(n.bind(null,"83c0"))},nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"0e02"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"b1ae"))},nsShowToast:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(n.bind(null,"5a2e"))}},a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$lang("common.currencySymbol")),o=e.addonIsExit.presale&&e.dataList.length?e.__map(e.dataList,(function(t,n){var o=e.__get_orig(t),a=e.goodsImg(t.goods_image),i=e.goodsTag(t),r=""!=i?e.goodsTag(t):null,s=t.presale_price>0?e.$lang("common.currencySymbol"):null,u=t.presale_price>0?e.$lang("common.currencySymbol"):null,l=e.showPrice(t);return{$orig:o,m0:a,m1:i,m2:r,m3:s,m4:u,m6:l}})):null;e.$mp.data=Object.assign({},{$root:{m5:n,l0:o}})},i=[]},b947:function(e,t,n){"use strict";n.r(t);var o=n("9436"),a=n("6001");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("3e4e");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=u.exports},bfa7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("245b"));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(){Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(n("5a2e"))}.bind(null,n)).catch(n.oe)},r={components:{nsShowToast:i},data:function(){return{dataList:[]}},mixins:[o.default],onLoad:function(e){},onShow:function(){var e=this;if(!this.addonIsExit.presale)return this.$util.showToast({title:"预售插件未安装",mask:!0,duration:2e3}),void setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh()},methods:{getData:function(e){var t=this;this.$api.sendRequest({url:"/presale/api/goods/page",data:{page_size:e.size,page:e.num},success:function(n){var o=[],a=n.message;0==n.code&&n.data?o=n.data.list:t.$util.showToast({title:a}),e.endSuccess(o.length),1==e.num&&(t.dataList=[]),t.dataList=t.dataList.concat(o),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(){e.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},toDetail:function(e){this.$util.redirectTo("/promotionpages/presale/detail/detail",{id:e.presale_id})},imgError:function(e){this.dataList[e].goods_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},goodsImg:function(e){var t=e.split(",");return t[0]?this.$util.img(t[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},goodsTag:function(e){return e.label_name||""},showPrice:function(e){var t=e.price;return e.member_price&&parseFloat(e.member_price)<parseFloat(t)&&(t=e.member_price),t}}};t.default=r},d1aa:function(e,t,n){"use strict";(function(e){n("4b62");o(n("66fd"));var t=o(n("b947"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])}},[["d1aa","common/runtime","common/vendor"]]]);