(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diy-components/diy-goods-list"],{"143f":function(o,e,t){"use strict";(function(o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={name:"diy-goods-list",props:{value:{type:Object,default:function(){return{}}}},data:function(){return{list:[],goodsValue:{},page:1}},created:function(){this.goodsValue=this.value,this.getGoodsList()},computed:{goodsListWarpCss:function(){var o="";return o+="background-color:"+this.goodsValue.componentBgColor+";","round"==this.goodsValue.componentAngle&&(o+="border-top-left-radius:"+2*this.goodsValue.topAroundRadius+"rpx;",o+="border-top-right-radius:"+2*this.goodsValue.topAroundRadius+"rpx;",o+="border-bottom-left-radius:"+2*this.goodsValue.bottomAroundRadius+"rpx;",o+="border-bottom-right-radius:"+2*this.goodsValue.bottomAroundRadius+"rpx;"),o},goodsItemCss:function(){var e="";e+="background-color:"+this.goodsValue.elementBgColor+";","round"==this.goodsValue.elementAngle&&(e+="border-top-left-radius:"+2*this.goodsValue.topElementAroundRadius+"rpx;",e+="border-top-right-radius:"+2*this.goodsValue.topElementAroundRadius+"rpx;",e+="border-bottom-left-radius:"+2*this.goodsValue.bottomElementAroundRadius+"rpx;",e+="border-bottom-right-radius:"+2*this.goodsValue.bottomElementAroundRadius+"rpx;"),"shadow"==this.goodsValue.ornament.type&&(e+="box-shadow:0 0 10rpx "+this.goodsValue.ornament.color+";"),"stroke"==this.goodsValue.ornament.type&&(e+="border:2rpx solid "+this.goodsValue.ornament.color+";");var t=o.getSystemInfoSync().safeArea.width||o.getSystemInfoSync().screenWidth;if("horizontal-slide"==this.value.template){var l="";l="scroll"==this.value.slideMode&&"diy"==this.value.goodsMarginType?this.rpxUpPx(2*this.value.goodsMarginNum):[t-2*this.rpxUpPx(20)-3*this.rpxUpPx(200)-2*this.rpxUpPx(2*this.value.margin.both)]/6,e+="margin-left:"+l+"px;",e+="margin-right:"+l+"px;"}return e},swiperHeight:function(){return"multiple"==this.value.nameLineMode?"shadow"==this.value.ornament.type?"414rpx":"402rpx":"shadow"==this.value.ornament.type?"370rpx":"358rpx"}},methods:{rpxUpPx:function(e){var t=o.getSystemInfoSync().safeArea.width||o.getSystemInfoSync().screenWidth,l=t*parseInt(e)/750;return Math.floor(l)},getGoodsList:function(){var o=this,e={page:1,page_size:this.goodsValue.count};"category"==this.goodsValue.sources?(e.category_id=this.goodsValue.categoryId,e.category_level=1):"diy"==this.goodsValue.sources&&(e.page_size=0,e.goods_id_arr=this.goodsValue.goodsId.toString()),e.order=this.goodsValue.sortWay,this.$api.sendRequest({url:"/api/goodssku/pagecomponents",data:e,success:function(e){if(0==e.code&&e.data){var t=e.data;if(o.list=t.list,"horizontal-slide"==o.goodsValue.template&&"slide"==o.goodsValue.slideMode){var l=3,i=[];o.page=Math.ceil(o.list.length/l);for(var a=0;a<o.page;a++){i[a]=[];for(var r=a*l;r<o.list.length;r++){if(i[a].length==l)break;i[a].push(o.list[r])}}o.list=i}}}})},toDetail:function(o){this.$util.redirectTo("/pages/goods/detail",{goods_id:o.goods_id})},imgError:function(o){this.list[o]&&(this.list[o].goods_image=this.$util.getDefaultImage().goods)},showPrice:function(o){var e=o.discount_price;return o.member_price&&parseFloat(o.member_price)<parseFloat(e)&&(e=o.member_price),e}}};e.default=t}).call(this,t("543d")["default"])},"29d0":function(o,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return l}));var l={diyIcon:function(){return t.e("components/diy-components/diy-icon").then(t.bind(null,"ebd7"))}},i=function(){var o=this,e=o.$createElement,t=(o._self._c,o.list.length&&"horizontal-slide"!=o.goodsValue.template?o.__map(o.list,(function(e,t){var l=o.__get_orig(e),i=o.$util.img(e.goods_image,{size:"large-mode"==o.goodsValue.template?"big":"mid"}),a=(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl||o.goodsValue.btnStyle.control)&&o.goodsValue.priceStyle.mainControl?o.showPrice(e).split("."):null,r=(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl||o.goodsValue.btnStyle.control)&&o.goodsValue.priceStyle.mainControl?o.showPrice(e).split("."):null,n=o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl||o.goodsValue.btnStyle.control?e.member_price&&e.member_price==o.showPrice(e):null,s=(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl||o.goodsValue.btnStyle.control)&&(n||1==e.promotion_type)?e.member_price&&e.member_price==o.showPrice(e):null,d=(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl||o.goodsValue.btnStyle.control)&&(n||1==e.promotion_type)&&s?o.$util.img("public/uniapp/index/VIP.png"):null,u=!(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl||o.goodsValue.btnStyle.control)||!n&&1!=e.promotion_type||s||1!=e.promotion_type?null:o.$util.img("public/uniapp/index/discount.png");return{$orig:l,g0:i,g1:a,g2:r,m0:n,m1:s,g3:d,g4:u}})):null),l=o.list.length&&"horizontal-slide"==o.goodsValue.template&&"scroll"==o.goodsValue.slideMode?o.__map(o.list,(function(e,t){var l=o.__get_orig(e),i=o.$util.img(e.goods_image,{size:"mid"}),a=(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl)&&o.goodsValue.priceStyle.mainControl?o.showPrice(e).split("."):null,r=(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl)&&o.goodsValue.priceStyle.mainControl?o.showPrice(e).split("."):null,n=o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl?e.member_price&&e.member_price==o.showPrice(e):null,s=(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl)&&(n||1==e.promotion_type)?e.member_price&&e.member_price==o.showPrice(e):null,d=(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl)&&(n||1==e.promotion_type)&&s?o.$util.img("public/uniapp/index/VIP.png"):null,u=!(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl)||!n&&1!=e.promotion_type||s||1!=e.promotion_type?null:o.$util.img("public/uniapp/index/discount.png");return{$orig:l,g5:i,g6:a,g7:r,m2:n,m3:s,g8:d,g9:u}})):null,i=o.list.length&&"horizontal-slide"==o.goodsValue.template&&"slide"==o.goodsValue.slideMode?o.__map(o.page,(function(e,t){var l=o.__get_orig(e),i=o.__map(o.list[t],(function(e,t){var l=o.__get_orig(e),i=o.$util.img(e.goods_image,{size:"mid"}),a=(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl)&&o.goodsValue.priceStyle.mainControl?o.showPrice(e).split("."):null,r=(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl)&&o.goodsValue.priceStyle.mainControl?o.showPrice(e).split("."):null,n=o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl?e.member_price&&e.member_price==o.showPrice(e):null,s=(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl)&&(n||1==e.promotion_type)?e.member_price&&e.member_price==o.showPrice(e):null,d=(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl)&&(n||1==e.promotion_type)&&s?o.$util.img("public/uniapp/index/VIP.png"):null,u=!(o.goodsValue.goodsNameStyle.control||o.goodsValue.tag&&"hidden"!=o.goodsValue.tag.value||o.goodsValue.priceStyle.mainControl||o.goodsValue.priceStyle.lineControl)||!n&&1!=e.promotion_type||s||1!=e.promotion_type?null:o.$util.img("public/uniapp/index/discount.png");return{$orig:l,g10:i,g11:a,g12:r,m4:n,m5:s,g13:d,g14:u}}));return{$orig:l,l2:i}})):null;o.$mp.data=Object.assign({},{$root:{l0:t,l1:l,l3:i}})},a=[]},"4ca2":function(o,e,t){"use strict";t.r(e);var l=t("143f"),i=t.n(l);for(var a in l)"default"!==a&&function(o){t.d(e,o,(function(){return l[o]}))}(a);e["default"]=i.a},"6ce0":function(o,e,t){},"94bf":function(o,e,t){"use strict";var l=t("6ce0"),i=t.n(l);i.a},ab35:function(o,e,t){"use strict";t.r(e);var l=t("29d0"),i=t("4ca2");for(var a in i)"default"!==a&&function(o){t.d(e,o,(function(){return i[o]}))}(a);t("94bf");var r,n=t("f0c5"),s=Object(n["a"])(i["default"],l["b"],l["c"],!1,null,"2c83357e",null,!1,l["a"],r);e["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diy-components/diy-goods-list-create-component',
    {
        'components/diy-components/diy-goods-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ab35"))
        })
    },
    [['components/diy-components/diy-goods-list-create-component']]
]);
