(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-contact/ns-contact"],{"0a0b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"ns-contact",props:{niushop:{type:Object,default:function(){return{}}},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""}},data:function(){return{config:null,openType:""}},created:function(){this.getKefuConfig()},methods:{getKefuConfig:function(){var t=this;this.$api.sendRequest({url:"/api/config/servicer",success:function(e){0==e.code&&(t.config=e.data.weapp,"weapp"==t.config.type&&(t.openType="contact"))}})},contactServicer:function(){if("contact"!=this.openType)switch(this.config.type){case"wxwork":wx.openCustomerServiceChat({extInfo:{url:this.config.wxwork_url},corpId:this.config.corpid});break;case"third":location.href=this.config.third_url;break;case"niushop":this.$util.redirectTo("/pages_tool/chat/room",this.niushop);break;default:this.makePhoneCall()}},makePhoneCall:function(){this.$api.sendRequest({url:"/api/config/shopcontact",success:function(e){0==e.code&&e.data.mobile&&t.makePhoneCall({phoneNumber:e.data.mobile})}})}}};e.default=n}).call(this,n("543d")["default"])},"4eb7":function(t,e,n){"use strict";n.r(e);var o=n("0a0b"),a=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=a.a},"6e57":function(t,e,n){},ae2d:function(t,e,n){"use strict";var o=n("6e57"),a=n.n(o);a.a},b24f:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},c=[]},cdb5:function(t,e,n){"use strict";n.r(e);var o=n("b24f"),a=n("4eb7");for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("ae2d");var i,u=n("f0c5"),r=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-contact/ns-contact-create-component',
    {
        'components/ns-contact/ns-contact-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("cdb5"))
        })
    },
    [['components/ns-contact/ns-contact-create-component']]
]);
