(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/groupbuy/list/list"],{"0074":function(n,t,e){"use strict";var o=e("267d"),i=e.n(o);i.a},"267d":function(n,t,e){},4110:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(e("4c22"));function i(n){return n&&n.__esModule?n:{default:n}}var s=function(){e.e("components/uni-tag/uni-tag").then(function(){return resolve(e("a927"))}.bind(null,e)).catch(e.oe)},u=function(){e.e("components/ns-goods-item/ns-goods-item-col").then(function(){return resolve(e("7689"))}.bind(null,e)).catch(e.oe)},a=function(){Promise.all([e.e("common/vendor"),e.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(e("f505"))}.bind(null,e)).catch(e.oe)},r={components:{uniTag:s,nsGoodsItemCol:u,nsShowToast:a},data:function(){return{dataList:[]}},onLoad:function(n){},onShow:function(){var n=this;if(!this.addonIsExit.groupbuy)return this.$util.showToast({title:"商家未开启秒杀",mask:!0,duration:2e3}),void setTimeout((function(){n.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh()},mixins:[o.default],methods:{getData:function(n){var t=this;this.$api.sendRequest({url:"/groupbuy/api/goods/page",data:{page_size:n.size,page:n.num},success:function(e){var o=[],i=e.message;0==e.code&&e.data?o=e.data.list:t.$util.showToast({title:i}),n.endSuccess(o.length),1==n.num&&(t.dataList=[]),t.dataList=t.dataList.concat(o),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(){n.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},toDetail:function(n){this.$util.redirectTo("/promotionpages/groupbuy/detail/detail",{id:n.groupbuy_id})},imageError:function(n){this.dataList[n].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}},onShareAppMessage:function(n){var t="参加团购，优惠更多哦",e="/promotionpages/groupbuy/list/list";return{title:t,path:e,success:function(n){},fail:function(n){}}}};t.default=r},"96e5":function(n,t,e){"use strict";var o={nsAdv:function(){return e.e("components/ns-adv/ns-adv").then(e.bind(null,"e478"))},nsEmpty:function(){return e.e("components/ns-empty/ns-empty").then(e.bind(null,"211f"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"cd2f"))},nsShowToast:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-show-toast/ns-show-toast")]).then(e.bind(null,"f505"))}},i=function(){var n=this,t=n.$createElement;n._self._c},s=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return o}))},a2fb:function(n,t,e){"use strict";e.r(t);var o=e("4110"),i=e.n(o);for(var s in o)"default"!==s&&function(n){e.d(t,n,(function(){return o[n]}))}(s);t["default"]=i.a},e525:function(n,t,e){"use strict";(function(n){e("6b76");o(e("66fd"));var t=o(e("f000"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},f000:function(n,t,e){"use strict";e.r(t);var o=e("96e5"),i=e("a2fb");for(var s in i)"default"!==s&&function(n){e.d(t,n,(function(){return i[n]}))}(s);e("0074");var u,a=e("f0c5"),r=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"bf1e1368",null,!1,o["a"],u);t["default"]=r.exports}},[["e525","common/runtime","common/vendor"]]]);