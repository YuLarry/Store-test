(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/bargain/list/list"],{"0c83":function(n,t,e){"use strict";(function(n){e("6b76");o(e("66fd"));var t=o(e("4b40"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"2a7e":function(n,t,e){"use strict";var o=e("7c34"),i=e.n(o);i.a},"4b40":function(n,t,e){"use strict";e.r(t);var o=e("fb32"),i=e("b6b6");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("6b10"),e("2a7e");var s,r=e("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"4750a94a",null,!1,o["a"],s);t["default"]=u.exports},"6b10":function(n,t,e){"use strict";var o=e("cd86"),i=e.n(o);i.a},"7c34":function(n,t,e){},b5cf:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(e("4c22"));function i(n){return n&&n.__esModule?n:{default:n}}var a=function(){e.e("components/uni-tag/uni-tag").then(function(){return resolve(e("a927"))}.bind(null,e)).catch(e.oe)},s=function(){e.e("components/ns-goods-item/ns-goods-item-col").then(function(){return resolve(e("7689"))}.bind(null,e)).catch(e.oe)},r=function(){Promise.all([e.e("common/vendor"),e.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(e("f505"))}.bind(null,e)).catch(e.oe)},u={components:{uniTag:a,nsGoodsItemCol:s,nsShowToast:r},data:function(){return{dataList:[]}},onShow:function(){var n=this;if(!this.addonIsExit.groupbuy)return this.$util.showToast({title:"商家未开启砍价",mask:!0,duration:2e3}),void setTimeout((function(){n.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh()},mixins:[o.default],methods:{getData:function(n){var t=this;this.$api.sendRequest({url:"/bargain/api/bargain/page",data:{page_size:n.size,page:n.num},success:function(e){var o=[],i=e.message;0==e.code&&e.data?o=e.data.list:t.$util.showToast({title:i}),n.endSuccess(o.length),1==n.num&&(t.dataList=[]),t.dataList=t.dataList.concat(o),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(){n.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},toDetail:function(n){this.$util.redirectTo("/promotionpages/bargain/detail/detail",{id:n.id})},imageError:function(n){this.dataList[n].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}},onShareAppMessage:function(n){var t="砍价，优惠更多哦",e="/promotionpages/bargain/list/list";return{title:t,path:e,success:function(n){},fail:function(n){}}}};t.default=u},b6b6:function(n,t,e){"use strict";e.r(t);var o=e("b5cf"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a},cd86:function(n,t,e){},fb32:function(n,t,e){"use strict";var o={nsAdv:function(){return e.e("components/ns-adv/ns-adv").then(e.bind(null,"e478"))},nsEmpty:function(){return e.e("components/ns-empty/ns-empty").then(e.bind(null,"211f"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"cd2f"))},nsShowToast:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-show-toast/ns-show-toast")]).then(e.bind(null,"f505"))}},i=function(){var n=this,t=n.$createElement,e=(n._self._c,n.$lang("common.currencySymbol")),o=n.__map(n.dataList,(function(t,e){var o=n.$util.img(t.sku_image,{size:"mid"});return{$orig:n.__get_orig(t),g0:o}}));n.$mp.data=Object.assign({},{$root:{m0:e,l0:o}})},a=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}))}},[["0c83","common/runtime","common/vendor"]]]);