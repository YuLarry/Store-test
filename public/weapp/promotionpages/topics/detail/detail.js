(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/topics/detail/detail"],{"234b":function(t,n,i){},"520a":function(t,n,i){"use strict";i.r(n);var o=i("71c9"),e=i("bfb0");for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);i("7bf1");var c,u=i("f0c5"),r=Object(u["a"])(e["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=r.exports},5720:function(t,n,i){"use strict";(function(t){i("34b0");o(i("66fd"));var n=o(i("520a"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("543d")["createPage"])},"71c9":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return o}));var o={nsEmpty:function(){return i.e("components/ns-empty/ns-empty").then(i.bind(null,"2c4c"))},loadingCover:function(){return i.e("components/loading-cover/loading-cover").then(i.bind(null,"790a"))}},e=function(){var t=this,n=t.$createElement,i=(t._self._c,t.topicAdv?t.$util.img(t.topicAdv):null),o=t.$lang("common.currencySymbol"),e=t.$lang("common.currencySymbol"),a=t.dataList.length?t.__map(t.dataList,(function(n,i){var o=t.__get_orig(n),e=t.goodsImg(n.sku_image);return{$orig:o,m0:e}})):null;t.$mp.data=Object.assign({},{$root:{g0:i,m1:o,m2:e,l0:a}})},a=[]},"7bf1":function(t,n,i){"use strict";var o=i("234b"),e=i.n(o);e.a},bfb0:function(t,n,i){"use strict";i.r(n);var o=i("df86"),e=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);n["default"]=e.a},df86:function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(i("c409"));function e(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{dataList:[],topicId:0,bgColor:"#f7f7f7",topicAdv:""}},components:{},onLoad:function(n){n.topic_id?this.topicId=n.topic_id:t.navigateBack({delta:1})},onShow:function(){this.$langConfig.refresh()},mixins:[o.default],methods:{getData:function(t){var n=this;this.$api.sendRequest({url:"/topic/api/topicgoods/page",data:{topic_id:this.topicId,page_size:t.size,page:t.num},success:function(i){var o=[],e=i.message;0==i.code&&i.data?(n.topicAdv=i.data.topic_adv,n.bgColor=i.data.bg_color,o=i.data.list):n.$util.showToast({title:e}),t.endSuccess(o.length),1==t.num&&(n.dataList=[]),n.dataList=n.dataList.concat(o),n.$refs.loadingCover&&n.$refs.loadingCover.hide()},fail:function(i){t.endErr(),n.$refs.loadingCover&&n.$refs.loadingCover.hide()}})},toDetail:function(t){this.$util.redirectTo("/promotionpages/topics/goods_detail/goods_detail",{id:t.id})},goodsImg:function(t){var n=t.split(",");return n[0]?this.$util.img(n[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},imgError:function(t){this.goodsList[t].sku_image=this.$util.getDefaultImage().default_goods_img}},onShareAppMessage:function(t){var n="活动多多，优惠多多哦",i="/promotionpages/topics/detail/detail?topic_id="+this.topicId;return{title:n,path:i,success:function(t){},fail:function(t){}}}};n.default=a}).call(this,i("543d")["default"])}},[["5720","common/runtime","common/vendor"]]]);