(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-goods-item/ns-goods-item-col"],{"5a27":function(t,e,i){"use strict";i.r(e);var n=i("70f3"),o=i("cdf6");for(var u in o)"default"!==u&&function(t){i.d(e,t,(function(){return o[t]}))}(u);i("9ca9");var l,a=i("f0c5"),r=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],l);e["default"]=r.exports},"70f3":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=(t._self._c,"groupbuy"==t.type?t.$lang("common.currencySymbol"):null),n="groupbuy"==t.type?t.$lang("common.currencySymbol"):null,o="presale"==t.type?t.$lang("common.currencySymbol"):null,u="presale"==t.type?t.$lang("common.currencySymbol"):null,l="presale"==t.type?t.$lang("common.currencySymbol"):null,a=t.__map(t.value,(function(e,i){var n=t.__get_orig(e),o="groupbuy"==t.type||"pintuan"==t.type?t.$util.img(e.goods_image,{size:"mid"}):null,u="groupbuy"!=t.type&&"pintuan"!=t.type?t.$util.img(e.sku_image,{size:"mid"}):null,l="default"==t.type&&1==e.promotion_type&&e.member_price>0?t.$util.img("upload/uniapp/index/discount.png"):null,a="default"==t.type&&1==e.promotion_type&&e.member_price>0?t.$util.img("upload/uniapp/index/VIP.png"):null,r="default"!=t.type||1!=e.promotion_type||e.member_price>0?null:t.$util.img("upload/uniapp/index/discount.png"),p="default"==t.type&&1!=e.promotion_type&&e.member_price>0?t.$util.img("upload/uniapp/index/VIP.png"):null,s="fenxiaoMarket"==t.type&&t.addonIsExit.discount&&1==e.promotion_type?t.$util.img("upload/uniapp/index/discount.png"):null;return{$orig:n,g0:o,g1:u,g2:l,g3:a,g4:r,g5:p,g6:s}}));t.$mp.data=Object.assign({},{$root:{m0:i,m1:n,m2:o,m3:u,m4:l,l0:a}})},u=[]},8708:function(t,e,i){},"9ca9":function(t,e,i){"use strict";var n=i("8708"),o=i.n(n);o.a},cdf6:function(t,e,i){"use strict";i.r(e);var n=i("d8e6"),o=i.n(n);for(var u in n)"default"!==u&&function(t){i.d(e,t,(function(){return n[t]}))}(u);e["default"]=o.a},d8e6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("ccd8"));function o(t){return t&&t.__esModule?t:{default:t}}var u={name:"ns-goods-item-col",props:{value:{type:Array},type:{type:String,default:"default"}},mixins:[n.default],data:function(){return{}},created:function(){if("groupbuy"==this.type||"pintuan"==this.type)for(var t=0;t<this.value.length;t++)this.value[t].goods_image&&(this.value[t].goods_image=this.value[t].goods_image.split(",")[0])},methods:{toDetail:function(t){this.$emit("toDetail",t)},imageError:function(t){"groupbuy"==this.type||"pintuan"==this.type?this.value[t].goods_image&&(this.value[t].goods_image=this.$util.getDefaultImage().default_goods_img):this.value[t].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},followGoods:function(t,e,i){this.$emit("followGood",{index:t,goods_id:e,sku_id:i})},delFollowTip:function(t,e){this.$emit("delFollowTip",{collect_id:t,index:e})}},watch:{value:function(){if("groupbuy"==this.type||"pintuan"==this.type)for(var t=0;t<this.value.length;t++)this.value[t].goods_image=this.value[t].goods_image.split(",")[0]}}};e.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-goods-item/ns-goods-item-col-create-component',
    {
        'components/ns-goods-item/ns-goods-item-col-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5a27"))
        })
    },
    [['components/ns-goods-item/ns-goods-item-col-create-component']]
]);
