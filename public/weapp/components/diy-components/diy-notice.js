(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diy-components/diy-notice"],{"1a7b":function(t,e,n){"use strict";n.r(e);var i=n("ba4b"),o=n("7cf2");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("3a59");var a,r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=s.exports},"3a59":function(t,e,n){"use strict";var i=n("de01"),o=n.n(i);o.a},"73b6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"diy-notice",props:{value:{type:Object}},data:function(){return{list:[]}},computed:{noticeWrapCss:function(){var t="";return t+="background-color:"+this.value.componentBgColor+";","round"==this.value.componentAngle&&(t+="border-top-left-radius:"+2*this.value.topAroundRadius+"rpx;",t+="border-top-right-radius:"+2*this.value.topAroundRadius+"rpx;",t+="border-bottom-left-radius:"+2*this.value.bottomAroundRadius+"rpx;",t+="border-bottom-right-radius:"+2*this.value.bottomAroundRadius+"rpx;"),t}},created:function(){"default"==this.value.sources?this.getData():this.list=this.value.list},methods:{getData:function(){var t=this,e={};e.id_arr=this.value.noticeIds.toString(),this.$api.sendRequest({url:"/api/notice/lists",data:e,success:function(e){0==e.code&&e.data&&(t.list=e.data,console.log("test - 公告信息",t.list))}})},toLink:function(t){"default"==this.value.sources?this.$util.redirectTo("/pages_tool/notice/detail",{notice_id:t.id}):this.$util.diyRedirectTo(t.link)}}};e.default=i},"7cf2":function(t,e,n){"use strict";n.r(e);var i=n("73b6"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a},ba4b:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var i={diyIcon:function(){return n.e("components/diy-components/diy-icon").then(n.bind(null,"ebd7"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,"img"==t.value.iconType?t.$util.img(t.value.imageUrl):null);t.$mp.data=Object.assign({},{$root:{g0:n}})},u=[]},de01:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diy-components/diy-notice-create-component',
    {
        'components/diy-components/diy-notice-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1a7b"))
        })
    },
    [['components/diy-components/diy-notice-create-component']]
]);
