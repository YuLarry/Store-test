(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/logistics/logistics"],{1728:function(t,e,i){"use strict";var n=i("f0ec"),o=i.n(n);o.a},"5a50":function(t,e,i){"use strict";i.r(e);var n=i("d3fa"),o=i("e540");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("1728");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=u.exports},b9b3:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("c409"));function o(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{orderId:"",packageList:[],isIphoneX:!1,currIndex:0,status:0}},onLoad:function(t){t.order_id&&(this.orderId=t.order_id)},components:{},onShow:function(){this.$langConfig.refresh(),t.getStorageSync("token")?this.getPackageInfo():this.$util.redirectTo("/pages/login/login/login"),this.isIphoneX=this.$util.uniappIsIPhoneX()},mixins:[n.default],methods:{ontabtap:function(t){this.currIndex=t},getPackageInfo:function(){var t=this;this.$api.sendRequest({url:"/api/order/package",data:{order_id:this.orderId},success:function(e){e.code>=0?(t.packageList=e.data,t.packageList.forEach((function(e){e.trace.list&&(e.trace.list=e.trace.list.reverse()),e.status=t.status++})),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):(t.$util.showToast({title:"未获取到订单信息！"}),setTimeout((function(){t.$util.redirectTo("/pages/order/list/list")}),1500))},fail:function(e){t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},toGoodsDetail:function(t){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t})},imageError:function(t,e){this.packageList[t].goods_list[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}}};e.default=a}).call(this,i("543d")["default"])},d3fa:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={loadingCover:function(){return i.e("components/loading-cover/loading-cover").then(i.bind(null,"790a"))}},o=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.packageList,(function(e,i){var n=t.__get_orig(e),o=t.__map(e.goods_list,(function(e,i){var n=t.__get_orig(e),o=t.$util.img(e.sku_image,{size:"mid"});return{$orig:n,g0:o}})),a=t.$util.img(e.express_company_image);return{$orig:n,l0:o,g1:a}})));t._isMounted||(t.e0=function(e,i){var n=arguments[arguments.length-1].currentTarget.dataset,o=n.eventParams||n["event-params"];i=o.packageItem;return t.$util.copy(i.delivery_no)}),t.$mp.data=Object.assign({},{$root:{l1:i}})},a=[]},e540:function(t,e,i){"use strict";i.r(e);var n=i("b9b3"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},f0ec:function(t,e,i){},fffd:function(t,e,i){"use strict";(function(t){i("34b0");n(i("66fd"));var e=n(i("5a50"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])}},[["fffd","common/runtime","common/vendor"]]]);