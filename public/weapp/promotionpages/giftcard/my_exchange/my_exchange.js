(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/giftcard/my_exchange/my_exchange"],{"06bc":function(t,e,a){"use strict";a.r(e);var i=a("b7b4"),n=a("1f66");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("3125");var r,c=a("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=u.exports},"1f66":function(t,e,a){"use strict";a.r(e);var i=a("9a16"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"27ea":function(t,e,a){"use strict";(function(t){a("67ba");i(a("66fd"));var e=i(a("06bc"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},3125:function(t,e,a){"use strict";var i=a("9a2c"),n=a.n(i);n.a},"9a16":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{cardNum:"",card:""}},onShow:function(){this.$langConfig.refresh()},methods:{onInput:function(t){var e=t.target.value;this.cardNum=e},onInputTo:function(t){var e=t.target.value;this.card=e},gotoexchange:function(){this.$util.redirectTo("/promotionpages/giftcard/my_exchange/exchange_list")},exchange:function(){var e=this;this.$api.sendRequest({url:"/giftcard/api/giftcard/exchangeInfo",data:{carmichael_text:this.cardNum,entity_bianhao:this.card},success:function(a){if(a.code>=0)if(a.data){if(3==a.data.entity_status||4==a.data.entity_status||2==a.data.entity_status)return void e.$util.showToast({title:"对不起，该卡已被使用或作废，请更换其他礼品卡"});if(0==a.data.entity_status)return void e.$util.showToast({title:"该礼品卡未激活"});if(a.data.goods_list.length){var i=a.data.giftcard_id,n=a.data.id,o=[];a.data.goods_list.forEach((function(t){o.push(t.sku_id)})),t.setStorage({key:"orderCreateData",data:{sku_id:o.toString(),num:1},success:function(){e.$util.redirectTo("/promotionpages/giftcard/payment/payment",{giftcard_id:i,id:n})}})}else e.$api.sendRequest({url:"/giftcard/api/giftcard/exchange",data:{carmichael_text:e.cardNum},success:function(t){0==t.code&&t.data?(e.$util.showToast({title:t.data}),e.cardNum="",setTimeout((function(){e.$util.redirectTo("/promotionpages/giftcard/my_exchange/exchange_list",{},"redirectTo")}),1e3)):e.$util.showToast({title:t.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){mescroll.endErr(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})}else e.$util.showToast({title:"卡号或密码错误，请重新输入"});else e.$util.showToast({title:a.message})}})}}};e.default=a}).call(this,a("543d")["default"])},"9a2c":function(t,e,a){},b7b4:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement;t._self._c},o=[]}},[["27ea","common/runtime","common/vendor"]]]);