(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/cart/cart"],{"0dab":function(t,e,n){"use strict";var a={uniNumberBox:function(){return n.e("components/uni-number-box/uni-number-box").then(n.bind(null,"77e6"))},nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"211f"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"cd2f"))},diyBottomNav:function(){return n.e("components/diy-bottom-nav/diy-bottom-nav").then(n.bind(null,"10f0"))},nsShowToast:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(n.bind(null,"f505"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$lang("complete")),a=t.$lang("edit"),i=t.__map(t.cartData,(function(e,n){var a=t.$lang("common.currencySymbol"),i=t.$util.img("upload/uniapp/index/VIP.png"),o=t.$lang("common.currencySymbol"),c=t.$util.img("upload/uniapp/index/discount.png"),r=t.$lang("common.currencySymbol"),s=t.$util.img("upload/uniapp/index/VIP.png"),u=t.$lang("common.currencySymbol"),l=t.$lang("del"),d=t.__map(e.cartList,(function(e,n){var a=t.$util.img(e.sku_image,{size:"mid"}),i=Number(e.member_price),o=Number(e.member_price),c=Number(e.discount_price),r=Number(e.member_price);return{$orig:t.__get_orig(e),g0:a,m2:i,m3:o,m4:c,m7:r}}));return{$orig:t.__get_orig(e),m5:a,g1:i,m6:o,g2:c,m8:r,g3:s,m9:u,m10:l,l0:d}})),o=t.$lang("common.currencySymbol"),c=t.$lang("common.currencySymbol"),r=t.__map(t.invalidGoods,(function(e,n){var a=t.$util.img(e.sku_image,{size:"mid"});return{$orig:t.__get_orig(e),g4:a}})),s=t.$lang("emptyTips"),u=t.$lang("emptyTips"),l=t.$lang("allElection"),d=t.$lang("total"),m=t.$lang("common.currencySymbol"),h=t.$lang("settlement"),f=t.$lang("settlement");t.$mp.data=Object.assign({},{$root:{m0:n,m1:a,l1:i,m11:o,m12:c,l2:r,m13:s,m14:u,m15:l,m16:d,m17:m,m18:h,m19:f}})},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"4f26":function(t,e,n){"use strict";n.r(e);var a=n("8b9d"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"504d":function(t,e,n){},"77c3":function(t,e,n){"use strict";n.r(e);var a=n("0dab"),i=n("4f26");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("7b99");var c,r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);e["default"]=s.exports},"7b99":function(t,e,n){"use strict";var a=n("504d"),i=n.n(a);i.a},"8b9d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("4de2")),i=o(n("4c22"));function o(t){return t&&t.__esModule?t:{default:t}}var c=function(){Promise.all([n.e("common/vendor"),n.e("components/ns-goods-recommend/ns-goods-recommend")]).then(function(){return resolve(n("ebb8"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("components/uni-number-box/uni-number-box").then(function(){return resolve(n("77e6"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/diy-bottom-nav/diy-bottom-nav").then(function(){return resolve(n("10f0"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/toTop/toTop").then(function(){return resolve(n("336c"))}.bind(null,n)).catch(n.oe)},l=function(){Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(n("f505"))}.bind(null,n)).catch(n.oe)},d={components:{nsGoodsRecommend:c,uniNumberBox:r,diyBottomNav:s,toTop:u,nsShowToast:l},mixins:[a.default,i.default],data:function(){return{token:"",cartData:[],checkAll:!1,totalPrice:"0.00",totalCount:0,modifyFlag:!1,isSub:!1,invalidGoods:[],isIphoneX:!1,emptyBtn1:{text:"去登录",url:"/pages/login/login/login"}}},onLoad:function(){t.hideTabBar()},onShow:function(){this.$langConfig.refresh(),t.getStorageSync("token")&&this.getCartData(),this.isIphoneX=this.$util.uniappIsIPhoneX()},onReady:function(){t.getStorageSync("token")||this.$refs.loadingCover&&this.$refs.loadingCover.hide()},computed:{isBottom:function(){return this.cartData.length>0||this.invalidGoods.length>0}},methods:{getCartData:function(){var e=this;this.$api.sendRequest({url:"/api/cart/goodslists",success:function(n){n.code>=0?(e.token=t.getStorageSync("token"),n.data.length?e.handleCartData(n.data):e.cartData=[]):e.token="",e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},handleCartData:function(t){var e=this;this.invalidGoods=[],this.cartData=[];var n={};t.forEach((function(t,a){1==t.goods_state?(t.checked=!0,void 0!=n["site_"+t.site_id]?n["site_"+t.site_id].cartList.push(t):n["site_"+t.site_id]={siteId:t.site_id,siteName:t.site_name,edit:!1,checked:!0,cartList:[t]}):e.invalidGoods.push(t)})),this.cartData=[],Object.keys(n).forEach((function(t){e.cartData.push(n[t])})),this.calculationTotalPrice(),this.cartData[0].cartList.forEach((function(t){t.sku_spec_format?t.sku_spec_format=JSON.parse(t.sku_spec_format):t.sku_spec_format=[]}))},singleElection:function(t,e){this.cartData[t].cartList[e].checked=!this.cartData[t].cartList[e].checked,this.calculationTotalPrice()},siteAllElection:function(t,e){this.cartData[e].checked=t,this.cartData[e].cartList.forEach((function(e){e.checked=t})),this.calculationTotalPrice()},allElection:function(t){var e=this;this.checkAll="boolean"==typeof t?t:!this.checkAll,this.cartData.length&&this.cartData.forEach((function(t){t.checked=e.checkAll,t.cartList.forEach((function(t){t.checked=e.checkAll}))})),this.calculationTotalPrice()},calculationTotalPrice:function(){if(this.cartData.length){var t=0,e=0,n=0;this.cartData.forEach((function(a){var i=0;a.cartList.forEach((function(n){n.checked&&(i+=1,e+=1,Number(n.member_price)>0&&Number(n.member_price)<Number(n.discount_price)?t+=n.member_price*n.num:t+=n.discount_price*n.num)})),a.cartList.length==i?(a.checked=!0,n+=1):a.checked=!1})),this.totalPrice=t.toFixed(2),this.totalCount=e,this.checkAll=this.cartData.length==n}else this.totalPrice="0.00",this.totalCount=0;this.modifyFlag=!1},deleteCart:function(t,e){var n=this;this.$api.sendRequest({url:"/api/cart/delete",data:{cart_id:this.cartData[t].cartList[e].cart_id},success:function(a){a.code>=0?(n.cartData[t].cartList.splice(e,1),0==n.cartData[t].cartList.length&&n.cartData.splice(t,1),n.calculationTotalPrice(),n.getCartNumber()):n.$util.showToast({title:a.message})}})},cartNumChange:function(t,e){var n=this;t<1&&(t=1),this.modifyFlag=!0,this.$api.sendRequest({url:"/api/cart/edit",data:{num:t,cart_id:this.cartData[e.siteIndex].cartList[e.cartIndex].cart_id},success:function(a){a.code>=0?(n.cartData[e.siteIndex].cartList[e.cartIndex].num=t,n.calculationTotalPrice()):n.$util.showToast({title:a.message})}})},settlement:function(){var e=this;if(this.totalCount>0){var n=[];if(this.cartData.forEach((function(t){t.cartList.forEach((function(t){t.checked&&n.push(t.cart_id)}))})),this.isSub)return;this.isSub=!0,t.setStorage({key:"orderCreateData",data:{cart_ids:n.toString()},success:function(){e.$util.redirectTo("/pages/order/payment/payment"),e.isSub=!1}})}},edit:function(t){this.cartData[t].edit=!this.cartData[t].edit},clearInvalidGoods:function(){var t=this,e=[];this.invalidGoods.forEach((function(t){e.push(t.cart_id)})),e.length&&this.$api.sendRequest({url:"/api/cart/delete",data:{cart_id:e.toString()},success:function(e){e.code>=0?(t.invalidGoods=[],t.getCartNumber()):t.$util.showToast({title:e.message})}})},imageError:function(t,e){this.cartData[t].cartList[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},toGoodsDetail:function(t){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.sku_id})},getCartNumber:function(){t.getStorageSync("token")&&this.$store.dispatch("getCartNumber")}}};e.default=d}).call(this,n("543d")["default"])},adfb:function(t,e,n){"use strict";(function(t){n("6b76");a(n("66fd"));var e=a(n("77c3"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["adfb","common/runtime","common/vendor"]]]);