(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_promotion/divideticket/poster"],{"01c0":function(t,e,i){"use strict";(function(t){i("34b0");n(i("66fd"));var e=n(i("f523"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"1e10":function(t,e,i){"use strict";i.r(e);var n=i("ac89"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"59a5":function(t,e,i){},"6c7d":function(t,e,i){},ac89:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{poster:"",posterMsg:"",posterHeight:0,couponId:"",groupId:0,inviterId:"",memberInfo:{}}},onLoad:function(t){this.couponId=t.coupon_id,this.groupId=t.group_id,this.inviterId=t.inviter_id,this.getGoodsPoster(),this.getMemberInfo()},methods:{headerimageError:function(){this.memberInfo.headimg=this.$util.getDefaultImage().head,this.$forceUpdate()},getGoodsPoster:function(){var t=this;this.$api.sendRequest({url:"/divideticket/api/divideticket/poster",data:{coupon_id:this.couponId,group_id:""==this.groupId?0:this.groupId,inviter_id:""==this.inviterId?0:this.inviterId},success:function(e){0==e.code?t.poster=e.data.path:t.posterMsg=e.message}})},getMemberInfo:function(){var t=this;this.$api.sendRequest({url:"/api/member/info",success:function(e){e.code>=0&&(t.memberInfo=e.data)}})}}};e.default=n},b407:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$util.img(t.poster));t.$mp.data=Object.assign({},{$root:{g0:i}})},r=[]},d1be:function(t,e,i){"use strict";var n=i("6c7d"),o=i.n(n);o.a},db23:function(t,e,i){"use strict";var n=i("59a5"),o=i.n(n);o.a},f523:function(t,e,i){"use strict";i.r(e);var n=i("b407"),o=i("1e10");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("db23"),i("d1be");var u,s=i("f0c5"),a=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"4d7b7242",null,!1,n["a"],u);e["default"]=a.exports}},[["01c0","common/runtime","common/vendor"]]]);