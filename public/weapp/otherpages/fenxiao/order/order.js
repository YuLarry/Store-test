(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/fenxiao/order/order"],{"0e30":function(e,t,n){"use strict";var i=n("2f18"),o=n.n(i);o.a},"1b2c":function(e,t,n){"use strict";(function(e){n("5558");i(n("66fd"));var t=i(n("43ed"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"2f18":function(e,t,n){},"43ed":function(e,t,n){"use strict";n.r(t);var i=n("7dc5"),o=n("7a64");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("0e30");var a,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);t["default"]=u.exports},"7a64":function(e,t,n){"use strict";n.r(t);var i=n("8974"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},"7dc5":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"1928"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"30be"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$lang("common.currencySymbol")),i=e.$lang("common.currencySymbol"),o=e.$lang("common.currencySymbol"),r=e.__map(e.orderList,(function(t,n){var i=e.__get_orig(t),o=e.$util.img(t.sku_image,{size:"mid"}),r=e.$util.timeStampTurnTime(t.create_time);return{$orig:i,g0:o,g1:r}}));e.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:o,l0:r}})},r=[]},8974:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("7e5c")),o=r(n("ccd8"));function r(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{category:[{id:0,name:"全部",number:2},{id:1,name:"待结算",number:0},{id:2,name:"已结算",number:0},{id:3,name:"已退款",number:0}],selectId:0,orderList:[],emptyShow:!1}},mixins:[i.default,o.default],onLoad:function(e){void 0!=e.type&&(this.selectId=e.type)},onShow:function(){var t=this;if(!this.addonIsExit.fenxiao)return this.$util.showToast({title:"商家未开启分销",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh(),this.$langConfig.title(this.fenxiaoWords.concept+"订单"),e.getStorageSync("token")||this.$util.redirectTo("/pages/login/login/login",{back:"/otherpages/fenxiao/order/order"},"redirectTo")},methods:{getData:function(e){var t=this;this.emptyShow=!1,1==e.num&&(this.orderList=[]),this.$api.sendRequest({url:"/fenxiao/api/order/page",data:{page:e.num,page_size:e.size,is_settlement:this.selectId},success:function(n){t.emptyShow=!0;var i=[],o=n.message;0==n.code&&n.data&&n.data.list?i=n.data.list:t.$util.showToast({title:o}),e.endSuccess(i.length),1==e.num&&(t.orderList=[]),t.orderList=t.orderList.concat(i),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(n){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},selectCate:function(e){this.selectId=e,this.$refs.mescroll.refresh()},toDetail:function(e){this.$util.redirectTo("/otherpages/fenxiao/order_detail/order_detail",{id:e})},imageError:function(e){this.orderList[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}}};t.default=a}).call(this,n("543d")["default"])}},[["1b2c","common/runtime","common/vendor"]]]);