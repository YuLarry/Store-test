(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diy-fenxiao-goods-list/diy-fenxiao-goods-list"],{"0b9c":function(t,e,o){"use strict";o.r(e);var n=o("b3c5"),s=o("b6a9");for(var i in s)"default"!==i&&function(t){o.d(e,t,(function(){return s[t]}))}(i);o("219a");var a,c=o("f0c5"),u=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=u.exports},"219a":function(t,e,o){"use strict";var n=o("61cb"),s=o.n(n);s.a},2361:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){Promise.all([o.e("common/vendor"),o.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(o("f505"))}.bind(null,o)).catch(o.oe)},s=function(){o.e("components/ns-goods-item/ns-goods-item-col").then(function(){return resolve(o("7689"))}.bind(null,o)).catch(o.oe)},i={name:"diy-fenxiao-goods-list",props:{value:{type:Object}},data:function(){return{list:[],currentRoute:""}},components:{nsShowToast:n,nsGoodsItemCol:s},computed:{themeStyle:function(){return"theme-"+this.$store.state.themeStyle},addonIsExit:function(){return this.$store.state.addonIsExit}},created:function(){var e=getCurrentPages()[getCurrentPages().length-1];this.currentRoute="/"+e.route,t.getStorageSync("token")||this.$util.redirectTo("/pages/login/login/login",{back:this.currentRoute},"redirectTo"),this.getData()},methods:{toDetail:function(t){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:t.sku_id})},followGoods:function(t){var e=this,o=t.index,n=t.goods_id,s=t.sku_id;this.$api.sendRequest({url:"/fenxiao/api/goodscollect/add",data:{goods_id:n,sku_id:s},success:function(t){var n="";n=t.code>=0?"关注成功":t.message,e.$util.showToast({title:n}),e.list[o].is_collect=1}})},delFollowTip:function(e){var o=this;t.showModal({title:"提示",content:"确认取消关注该商品吗",success:function(t){t.confirm?o.delFollow(e.collect_id,e.index):t.cancel}})},delFollow:function(t,e){var o=this;this.$api.sendRequest({url:"/fenxiao/api/goodscollect/delete",data:{collect_id:t},success:function(t){var n="";n=0==t.code?"取消成功":t.message,o.$util.showToast({title:n});var s=o.list;s[e].is_collect=0,o.list=s}})},toMore:function(){this.$util.redirectTo("/otherpages/fenxiao/goods_list/goods_list")},getData:function(){var t=this,e={page:1,page_size:this.value.goodsCount};"diy"==this.value.sources&&(e.goods_id_arr=this.value.goodsId.toString()),this.$api.sendRequest({url:"/fenxiao/api/goods/page",data:e,success:function(e){0==e.code&&(t.list=e.data.list)}})},imageError:function(t){this.list[t].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()}}};e.default=i}).call(this,o("543d")["default"])},"61cb":function(t,e,o){},b3c5:function(t,e,o){"use strict";var n={nsShowToast:function(){return Promise.all([o.e("common/vendor"),o.e("components/ns-show-toast/ns-show-toast")]).then(o.bind(null,"f505"))}},s=function(){var t=this,e=t.$createElement,o=(t._self._c,t.$util.img(t.value.list.imageUrl));t.$mp.data=Object.assign({},{$root:{g0:o}})},i=[];o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}))},b6a9:function(t,e,o){"use strict";o.r(e);var n=o("2361"),s=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diy-fenxiao-goods-list/diy-fenxiao-goods-list-create-component',
    {
        'components/diy-fenxiao-goods-list/diy-fenxiao-goods-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0b9c"))
        })
    },
    [['components/diy-fenxiao-goods-list/diy-fenxiao-goods-list-create-component']]
]);
