(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diy-components/diy-article"],{1166:function(t,e,r){"use strict";r.r(e);var n=r(1167),o=r(1169);for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r(1171);var u,a=r(14),s=Object(a["default"])(o["default"],n["render"],n["staticRenderFns"],!1,null,null,null,!1,n["components"],u);s.options.__file="components/diy-components/diy-article.vue",e["default"]=s.exports},1167:function(t,e,r){"use strict";r.r(e);var n=r(1168);r.d(e,"render",(function(){return n["render"]})),r.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]})),r.d(e,"recyclableRender",(function(){return n["recyclableRender"]})),r.d(e,"components",(function(){return n["components"]}))},1168:function(t,e,r){"use strict";var n;r.r(e),r.d(e,"render",(function(){return o})),r.d(e,"staticRenderFns",(function(){return u})),r.d(e,"recyclableRender",(function(){return i})),r.d(e,"components",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=(t._self._c,t.list.length>0?t.__map(t.list,(function(e,r){var n=t.__get_orig(e),o=t.$util.img(e.cover_img);return{$orig:n,g0:o}})):null);t.$mp.data=Object.assign({},{$root:{l0:r}})},i=!1,u=[];o._withStripped=!0},1169:function(t,e,r){"use strict";r.r(e);var n=r(1170),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},1170:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"diy-article",props:{value:{type:Object}},data:function(){return{list:[]}},created:function(){this.getBrandList()},computed:{warpCss:function(){var t="";return t+="background-color:"+this.value.componentBgColor+";","round"==this.value.componentAngle&&(t+="border-top-left-radius:"+2*this.value.topAroundRadius+"rpx;",t+="border-top-right-radius:"+2*this.value.topAroundRadius+"rpx;",t+="border-bottom-left-radius:"+2*this.value.bottomAroundRadius+"rpx;",t+="border-bottom-right-radius:"+2*this.value.bottomAroundRadius+"rpx;"),t},itemCss:function(){var t="";return t+="background-color:"+this.value.elementBgColor+";","round"==this.value.elementAngle&&(t+="border-top-left-radius:"+2*this.value.topElementAroundRadius+"rpx;",t+="border-top-right-radius:"+2*this.value.topElementAroundRadius+"rpx;",t+="border-bottom-left-radius:"+2*this.value.bottomElementAroundRadius+"rpx;",t+="border-bottom-right-radius:"+2*this.value.bottomElementAroundRadius+"rpx;"),"shadow"==this.value.ornament.type&&(t+="box-shadow:0 0 10rpx "+this.value.ornament.color),"stroke"==this.value.ornament.type&&(t+="border:2rpx solid "+this.value.ornament.color),t}},methods:{getBrandList:function(){var t=this,e={page:1,page_size:this.value.count};"diy"==this.value.sources&&(e.page_size=0,e.article_id_arr=this.value.articleIds.toString()),this.$api.sendRequest({url:"/api/article/page",data:e,success:function(e){if(0==e.code&&e.data){var r=e.data;t.list=r.list}}})},toDetail:function(t){this.$util.redirectTo("/pages_tool/article/detail",{article_id:t.article_id})},imgError:function(t){this.list[t]&&(this.list[t].cover_img=this.$util.getDefaultImage().goods)}}};e.default=n},1171:function(t,e,r){"use strict";r.r(e);var n=r(1172),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},1172:function(t,e,r){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/diy-components/diy-article.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diy-components/diy-article-create-component',
    {
        'components/diy-components/diy-article-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(1166))
        })
    },
    [['components/diy-components/diy-article-create-component']]
]);
