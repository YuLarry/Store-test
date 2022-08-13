(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diy-components/diy-category-item"],{1180:function(t,e,o){"use strict";o.r(e);var i=o(1181),s=o(1183);for(var n in s)"default"!==n&&function(t){o.d(e,t,(function(){return s[t]}))}(n);o(1185);var r,a=o(14),c=Object(a["default"])(s["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],r);c.options.__file="components/diy-components/diy-category-item.vue",e["default"]=c.exports},1181:function(t,e,o){"use strict";o.r(e);var i=o(1182);o.d(e,"render",(function(){return i["render"]})),o.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),o.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),o.d(e,"components",(function(){return i["components"]}))},1182:function(t,e,o){"use strict";var i;o.r(e),o.d(e,"render",(function(){return s})),o.d(e,"staticRenderFns",(function(){return r})),o.d(e,"recyclableRender",(function(){return n})),o.d(e,"components",(function(){return i}));try{i={uniPopup:function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,772))},loadingCover:function(){return o.e("components/loading-cover/loading-cover").then(o.bind(null,714))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var s=function(){var t=this,e=t.$createElement,o=(t._self._c,"category"==t.type&&t.category.child_list.length&&t.category.image_adv?t.$util.img(t.category.image_adv):null),i="category"==t.type&&t.category.child_list.length&&2==t.value.level?t.__map(t.category.child_list,(function(e,o){var i=t.__get_orig(e),s=t.$util.img(e.image);return{$orig:i,g1:s}})):null,s="category"==t.type&&t.category.child_list.length&&3==t.value.level?t.__map(t.category.child_list,(function(e,o){var i=t.__get_orig(e),s=t.__map(e.child_list,(function(e,o){var i=t.__get_orig(e),s=t.$util.img(e.image);return{$orig:i,g2:s}}));return{$orig:i,l1:s}})):null,n="goods"==t.type&&"part"==t.loadType&&t.goodsList.length?t.__map(t.goodsList,(function(e,o){var i=t.__get_orig(e),s=t.goodsImg(e.goods_image),n=parseFloat(t.showPrice(e)).toFixed(2).split("."),r=parseFloat(t.showPrice(e)).toFixed(2).split("."),a=e.member_price&&e.member_price==t.showPrice(e),c=a?t.$util.img("public/uniapp/index/VIP.png"):null,d=a||1!=e.promotion_type?null:t.$util.img("public/uniapp/index/discount.png");return{$orig:i,m0:s,g3:n,g4:r,m1:a,g5:c,g6:d}})):null,r="goods"!=t.type||"part"!=t.loadType||t.goodsList.length?null:t.$util.img("public/uniapp/category/empty.png"),a="goods"==t.type&&"all"==t.loadType&&t.goodsList.length?t.__map(t.goodsList,(function(e,o){var i=t.__get_orig(e),s=t.goodsImg(e.goods_image),n=parseFloat(t.showPrice(e)).toFixed(2).split("."),r=parseFloat(t.showPrice(e)).toFixed(2).split("."),a=e.member_price&&e.member_price==t.showPrice(e),c=a?t.$util.img("public/uniapp/index/VIP.png"):null,d=a||1!=e.promotion_type?null:t.$util.img("public/uniapp/index/discount.png");return{$orig:i,m2:s,g8:n,g9:r,m3:a,g10:c,g11:d}})):null;t._isMounted||(t.e0=function(e){return t.$util.redirectTo("/pages/goods/list",{category_id:t.category.category_id})},t.e1=function(e,o){var i=arguments[arguments.length-1].currentTarget.dataset,s=i.eventParams||i["event-params"];o=s.one;return t.$util.redirectTo("/pages/goods/list",{category_id:o.category_id})},t.e2=function(e,o){var i=arguments[arguments.length-1].currentTarget.dataset,s=i.eventParams||i["event-params"];o=s.two;return t.$util.redirectTo("/pages/goods/list",{category_id:o.category_id})},t.e3=function(e){return t.$refs.screenCategoryPopup.open()},t.e4=function(e){return t.$refs.screenCategoryPopup.close()}),t.$mp.data=Object.assign({},{$root:{g0:o,l0:i,l2:s,l3:n,g7:r,l4:a}})},n=!1,r=[];s._withStripped=!0},1183:function(t,e,o){"use strict";o.r(e);var i=o(1184),s=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},1184:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"diy-category-item",props:{category:{type:Object},value:{type:Object,default:function(){return{}}},index:{type:Number,default:0},select:{type:Number,default:0},last:{type:Boolean,default:!1}},data:function(){return{type:"goods",level:3,categoryId:-1,loading:!1,goodsList:[],pageIndex:0,pageSize:10,totalPage:1,cart:{},touchstartPosition:0,scrollType:"top",contentWrapHeight:0,scrollIntoView:"category-2--1",scrollTop:0,loadType:""}},created:function(){this.type=1==this.value.template?"category":"goods",this.index==this.select&&0==this.pageIndex&&this.getGoodsList(),this.loadType=1==this.value.goodsLevel&&"all"==this.value.loadType?"all":"part"},mounted:function(){var e=this;setTimeout((function(){var o=t.createSelectorQuery().in(e);o.select(".scroll-goods-view").boundingClientRect((function(t){t&&(e.contentWrapHeight=t.height)})).exec()}),1e3)},computed:{cartList:function(){return this.$store.state.cartList}},watch:{cartList:function(t){var e=this,o={},i=Object.keys(this.$store.state.cartList);i.length&&i.forEach((function(t){var i=e.$store.state.cartList[t];o&&o["goods_"+i.goods_id]?(o["goods_"+i.goods_id]["sku_"+i.sku_id]=i,o["goods_"+i.goods_id].num+=i.num):(o["goods_"+i.goods_id]={num:i.num},o["goods_"+i.goods_id]["sku_"+i.sku_id]=i)})),this.cart=o},select:function(){var e=this;if(this.index==this.select){if(this.scrollTop=0,0==this.pageIndex?this.getGoodsList():this.$refs.loadingCover&&"part"==this.loadType&&(this.$refs.loadingCover.show(),setTimeout((function(){e.$refs.loadingCover.hide()}),300)),!this.contentWrapHeight){var o=t.createSelectorQuery().in(this);o.select(".scroll-goods-view").boundingClientRect((function(t){t&&(e.contentWrapHeight=t.height)})).exec()}}else"part"==this.loadType&&(this.scrollTop=-1)}},methods:{getGoodsList:function(){var e=this;"goods"!=this.type||this.loading||this.pageIndex>=this.totalPage||(this.loading=!0,this.pageIndex++,this.$refs.loadingCover&&1==this.pageIndex&&"part"==this.loadType&&setTimeout((function(){e.$refs.loadingCover.show()})),this.$api.sendRequest({url:"/api/goodssku/page",data:{page:this.pageIndex,page_size:this.pageSize,category_id:-1!=this.categoryId?this.category.child_list[this.categoryId].category_id:this.category.category_id},success:function(o){0==o.code&&o.data&&(1==e.pageIndex&&(e.goodsList=[]),e.goodsList=e.goodsList.concat(o.data.list),e.totalPage=o.data.page_count,e.loading=!1,e.$refs.loadingCover&&"part"==e.loadType&&e.$refs.loadingCover.hide(),setTimeout((function(){"all"==e.loadType&&e.$emit("loadfinish",1==e.pageIndex?e.index:-1);var o=t.createSelectorQuery().in(e);o.select(".goods-list").boundingClientRect((function(t){t&&t.height<e.contentWrapHeight&&(e.scrollType="none")})).exec()}),500))}}))},goodsImg:function(t){var e=t.split(",");return e[0]?this.$util.img(e[0],{size:3==this.value?"big":"mid"}):this.$util.getDefaultImage().goods},imgError:function(t){this.goodsList[t].goods_image=this.$util.getDefaultImage().goods},showPrice:function(t){var e=t.discount_price;return t.member_price&&parseFloat(t.member_price)<parseFloat(e)&&(e=t.member_price),e},toDetail:function(t){this.$util.redirectTo("/pages/goods/detail",{goods_id:t.goods_id})},increase:function(e,o){var i=this;if(t.getStorageSync("token")){var s=this.cart["goods_"+o.goods_id]&&this.cart["goods_"+o.goods_id]["sku_"+o.sku_id]?this.cart["goods_"+o.goods_id]["sku_"+o.sku_id]:null,n=s?s.num:0,r=n?"/api/cart/edit":"/api/cart/add",a=n+1;if(a>parseInt(o.stock))this.$util.showToast({title:"库存不足"});else if(o.is_limit&&o.max_buy&&a>parseInt(o.max_buy))this.$util.showToast({title:"该商品每人限购"});else{var c=t.createSelectorQuery().in(this);c.select("#"+e.currentTarget.id+" .click-event").boundingClientRect((function(t){t&&i.$emit("addCart",t.left,t.top)})).exec(),this.$api.sendRequest({url:r,data:{cart_id:s?s.cart_id:0,sku_id:o.sku_id,num:a},success:function(t){0==t.code?(s?i.cart["goods_"+o.goods_id]["sku_"+o.sku_id].num=a:(i.cart["goods_"+o.goods_id]||i.$set(i.cart,"goods_"+o.goods_id,{num:a}),i.$set(i.cart["goods_"+o.goods_id],"sku_"+o.sku_id,{cart_id:t.data,goods_id:o.goods_id,sku_id:o.sku_id,num:a})),i.$store.dispatch("getCartNumber")):i.$util.showToast({title:t.message})}})}}else this.$emit("tologin")},reduce:function(t){var e=this,o=this.cart["goods_"+t.goods_id]&&this.cart["goods_"+t.goods_id]["sku_"+t.sku_id]?this.cart["goods_"+t.goods_id]["sku_"+t.sku_id]:null,i=o.num,s=i>1?"/api/cart/edit":"/api/cart/delete",n=i-1;this.$api.sendRequest({url:s,data:{cart_id:o?o.cart_id:0,sku_id:t.sku_id,num:n},success:function(o){0==o.code?(n?e.cart["goods_"+t.goods_id]["sku_"+t.sku_id].num=n:(delete e.cart["goods_"+t.goods_id]["sku_"+t.sku_id],1==Object.keys(e.cart["goods_"+t.goods_id]).length&&delete e.cart["goods_"+t.goods_id],e.$forceUpdate()),e.$store.dispatch("getCartNumber")):e.$util.showToast({title:o.message})}})},selectSku:function(e){t.getStorageSync("token")?this.$emit("selectsku",e):this.$emit("tologin")},selectCategoey:function(t){var e=this;this.categoryId=t,this.pageIndex=0,this.totalPage=1,this.getGoodsList(),setTimeout((function(){e.scrollIntoView="category-2-"+t}))},scrolltolower:function(){this.getGoodsList()},listenScroll:function(t){t.detail.scrollTop<=10?this.scrollType="top":parseInt(t.detail.scrollTop+this.contentWrapHeight+30)>=t.detail.scrollHeight?this.scrollType="bottom":this.scrollType=""},touchstart:function(t){this.touchstartPosition=t.changedTouches[0].clientY},touchend:function(t){var e=t.changedTouches[0].clientY;("top"==this.scrollType||"none"==this.scrollType)&&e-this.touchstartPosition>100?this.switchCategory("prev"):("bottom"==this.scrollType||"none"==this.scrollType)&&this.touchstartPosition-e>100&&this.switchCategory("next")},switchCategory:function(t){if("prev"==t)if(-1==this.categoryId){var e=this.index-1;if(-1==e)return;this.$emit("switch",e)}else{var o=this.categoryId-1;this.selectCategoey(o)}else if(-1==this.categoryId||this.category.child_list&&this.categoryId==this.category.child_list.length-1){var i=this.index+1;this.$emit("switch",i)}else{var s=this.categoryId+1;this.selectCategoey(s)}}}};e.default=o}).call(this,o(1)["default"])},1185:function(t,e,o){"use strict";o.r(e);var i=o(1186),s=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},1186:function(t,e,o){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/diy-components/diy-category-item.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diy-components/diy-category-item-create-component',
    {
        'components/diy-components/diy-category-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(1180))
        })
    },
    [['components/diy-components/diy-category-item-create-component']]
]);
