(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/register-reward/register-reward"],{1e3:function(e,r,n){"use strict";n.r(r);var t=n(1001);n.d(r,"render",(function(){return t["render"]})),n.d(r,"staticRenderFns",(function(){return t["staticRenderFns"]})),n.d(r,"recyclableRender",(function(){return t["recyclableRender"]})),n.d(r,"components",(function(){return t["components"]}))},1001:function(e,r,n){"use strict";var t;n.r(r),n.d(r,"render",(function(){return i})),n.d(r,"staticRenderFns",(function(){return a})),n.d(r,"recyclableRender",(function(){return o})),n.d(r,"components",(function(){return t}));try{t={uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,772))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,r=e.$createElement,n=(e._self._c,e.reward?e.$util.img("public/uniapp/register_reward/register_reward_img.png"):null),t=e.reward?e.$util.img("public/uniapp/register_reward/register_reward_money.png"):null,i=e.reward?e.$util.img("public/uniapp/register_reward/register_reward_head.png"):null;e.$mp.data=Object.assign({},{$root:{g0:n,g1:t,g2:i}})},o=!1,a=[];i._withStripped=!0},1002:function(e,r,n){"use strict";n.r(r);var t=n(1003),i=n.n(t);for(var o in t)"default"!==o&&function(e){n.d(r,e,(function(){return t[e]}))}(o);r["default"]=i.a},1003:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n(772))}.bind(null,n)).catch(n.oe)},i={name:"register-reward",components:{uniPopup:t},data:function(){return{reward:null,back:""}},created:function(){this.addonIsExist.memberregister&&this.getRegisterReward()},methods:{getReward:function(){return this.reward},open:function(e){this.back=e,this.$refs.registerReward.open()},cancel:function(){this.$refs.registerReward.close()},getRegisterReward:function(){var e=this;this.$api.sendRequest({url:"/memberregister/api/Config/Config",success:function(r){if(r.code>=0){var n=r.data;1==n.is_use&&(n.value.point>0||n.value.balance>0||n.value.growth>0||n.value.coupon_list.length>0)&&(e.reward=n.value)}}})},closeRewardPopup:function(e){switch(this.$refs.registerReward.close(),e){case"point":this.$util.redirectTo("/pages_tool/member/point_detail",{});break;case"balance":this.$util.redirectTo("/pages_tool/member/balance_detail",{});break;case"growth":this.$util.redirectTo("/pages_tool/member/level",{});break;case"coupon":this.$util.redirectTo("/pages_tool/member/coupon",{});break;default:""!=this.back?this.$util.redirectTo(this.back,{},"reLaunch"):this.$util.redirectTo("/pages/member/index",{},"reLaunch")}}}};r.default=i},1004:function(e,r,n){"use strict";n.r(r);var t=n(1005),i=n.n(t);for(var o in t)"default"!==o&&function(e){n.d(r,e,(function(){return t[e]}))}(o);r["default"]=i.a},1005:function(e,r,n){},1006:function(e,r,n){"use strict";n.r(r);var t=n(1007),i=n.n(t);for(var o in t)"default"!==o&&function(e){n.d(r,e,(function(){return t[e]}))}(o);r["default"]=i.a},1007:function(e,r,n){},999:function(e,r,n){"use strict";n.r(r);var t=n(1e3),i=n(1002);for(var o in i)"default"!==o&&function(e){n.d(r,e,(function(){return i[e]}))}(o);n(1004),n(1006);var a,u=n(14),c=Object(u["default"])(i["default"],t["render"],t["staticRenderFns"],!1,null,"6af62538",null,!1,t["components"],a);c.options.__file="components/register-reward/register-reward.vue",r["default"]=c.exports}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/register-reward/register-reward.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/register-reward/register-reward-create-component',
    {
        'components/register-reward/register-reward-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(999))
        })
    },
    [['components/register-reward/register-reward-create-component']]
]);
