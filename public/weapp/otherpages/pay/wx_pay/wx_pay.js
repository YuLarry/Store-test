(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/pay/wx_pay/wx_pay"],{"10de":function(t,a,e){"use strict";(function(t){e("67ba");n(e("66fd"));var a=n(e("8fcb"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])},"40da":function(t,a,e){"use strict";var n=e("b72a"),u=e.n(n);u.a},"8e80":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return u})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var u=function(){var t=this,a=t.$createElement,e=(t._self._c,1==t.show?t.$util.img("upload/uniapp/invite_friends_share.png"):null);t.$mp.data=Object.assign({},{$root:{g0:e}})},o=[]},"8fcb":function(t,a,e){"use strict";e.r(a);var n=e("8e80"),u=e("ba6d");for(var o in u)"default"!==o&&function(t){e.d(a,t,(function(){return u[t]}))}(o);e("40da");var i,r=e("f0c5"),c=Object(r["a"])(u["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);a["default"]=c.exports},b72a:function(t,a,e){},ba6d:function(t,a,e){"use strict";e.r(a);var n=e("f595"),u=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=u.a},f595:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"wx_pay",components:{},data:function(){return{show:!0,wx_alipay:"",out_trade_no:""}},onLoad:function(t){this.wx_alipay=t.wx_alipay||"",this.out_trade_no=t.out_trade_no||"",!this.$util.isWeiXin()&&this.wx_alipay&&(this.show=!1,location.href=this.wx_alipay),this.checkPayStatus()},methods:{getPayInfo:function(t){var a=this;this.$api.sendRequest({url:"/api/pay/info",data:{out_trade_no:t},success:function(t){t.code>=0&&t.data&&a.checkPayStatus()}})},checkPayStatus:function(){var t=this,a=setInterval((function(){t.$api.sendRequest({url:"/api/pay/status",data:{out_trade_no:t.out_trade_no},success:function(e){0==e.code?2==e.data.pay_status&&(clearInterval(a),t.$util.redirectTo("/otherpages/pay/result/result",{code:t.out_trade_no},"","redirectTo")):clearInterval(a)}})}),1e3)}}};a.default=n}},[["10de","common/runtime","common/vendor"]]]);