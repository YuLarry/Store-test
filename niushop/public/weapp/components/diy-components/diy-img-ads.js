(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diy-components/diy-img-ads"],{1077:function(t,e,i){"use strict";i.r(e);var n=i(1078),r=i(1080);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i(1082);var u,s=i(14),a=Object(s["default"])(r["default"],n["render"],n["staticRenderFns"],!1,null,"7ed57648",null,!1,n["components"],u);a.options.__file="components/diy-components/diy-img-ads.vue",e["default"]=a.exports},1078:function(t,e,i){"use strict";i.r(e);var n=i(1079);i.d(e,"render",(function(){return n["render"]})),i.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]})),i.d(e,"recyclableRender",(function(){return n["recyclableRender"]})),i.d(e,"components",(function(){return n["components"]}))},1079:function(t,e,i){"use strict";var n;i.r(e),i.d(e,"render",(function(){return r})),i.d(e,"staticRenderFns",(function(){return u})),i.d(e,"recyclableRender",(function(){return o})),i.d(e,"components",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.imgAdsValue.list,(function(e,i){var n=t.__get_orig(e),r=e.imageUrl?t.$util.img(e.imageUrl):null;return{$orig:n,g0:r}}))),n=t.imgAdsValue.list.length>1?t.__map(t.imgAdsValue.list.length,(function(e,i){var n=t.__get_orig(e),r=t.__get_style([i==t.swiperIndex&&{backgroundColor:t.imgAdsValue.indicatorColor}]);return{$orig:n,s0:r}})):null;t._isMounted||(t.e0=function(e,i){var n=arguments[arguments.length-1].currentTarget.dataset,r=n.eventParams||n["event-params"];i=r.item;return t.$util.diyRedirectTo(i.link)}),t.$mp.data=Object.assign({},{$root:{l0:i,l1:n}})},o=!1,u=[];r._withStripped=!0},1080:function(t,e,i){"use strict";i.r(e);var n=i(1081),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},1081:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"diy-img-ads",props:{value:{type:Object,default:function(){return{}}}},data:function(){return{isDots:!0,swiperHeight:0,imgAdsValue:null,swiperIndex:0}},created:function(){this.calcSingleRow()},computed:{imgAdsMarginWarp:function(){var t="";return t="background-color:"+this.value.componentBgColor+";",t},imgAdsSwiper:function(){var t="";return"round"==this.value.componentAngle&&(t+="border-top-left-radius:"+2*this.value.topAroundRadius+"rpx;",t+="border-top-right-radius:"+2*this.value.topAroundRadius+"rpx;",t+="border-bottom-left-radius:"+2*this.value.bottomAroundRadius+"rpx;",t+="border-bottom-right-radius:"+2*this.value.bottomAroundRadius+"rpx;"),t},singleGraphBg:function(){for(var t=[],e=0;e<this.imgAdsValue.list.length;e++){var i=this.imgAdsValue.list[e];t[e]=parseFloat(i.imgHeight)}t.sort((function(t,e){return e-t}));var n="";return n+="background-color:"+this.imgAdsValue.backgroundColor+";",n+="height:"+t[0]*(this.imgAdsValue.backgroundHeight/100)*2+"rpx;",n}},methods:{swiperChange:function(t){this.swiperIndex=t.detail.current},calcSingleRow:function(){var e=this,i=0;this.imgAdsValue=JSON.parse(JSON.stringify(this.value)),this.imgAdsValue.list.forEach((function(n,r){t.getSystemInfo({success:function(t){var i=n.imgHeight/n.imgWidth;n.imgWidth=t.windowWidth,n.imgWidth-=2*e.value.margin.both,n.imgHeight=n.imgWidth*i}}),(0==i||i<n.imgHeight)&&(i=n.imgHeight)})),this.imgAdsValue.list.forEach((function(t,n){t.imgHeight=2*i+"rpx",e.swiperHeight=2*i+"rpx"})),this.imgAdsValue.indicatorColor=this.imgAdsValue.indicatorColor||"#fff",this.imgAdsValue.list.length<=1&&(this.isDots=!1),this.isDots=!1}}};e.default=i}).call(this,i(1)["default"])},1082:function(t,e,i){"use strict";i.r(e);var n=i(1083),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},1083:function(t,e,i){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/diy-components/diy-img-ads.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diy-components/diy-img-ads-create-component',
    {
        'components/diy-components/diy-img-ads-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(1077))
        })
    },
    [['components/diy-components/diy-img-ads-create-component']]
]);
