(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-fenxiao-goods-detail/ns-fenxiao-goods-detail"],{"2d41":function(n,e,t){"use strict";t.r(e);var a=t("4a62"),o=t.n(a);for(var u in a)"default"!==u&&function(n){t.d(e,n,(function(){return a[n]}))}(u);e["default"]=o.a},"4a62":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(t("a34a"));function o(n){return n&&n.__esModule?n:{default:n}}function u(n,e,t,a,o,u,r){try{var i=n[u](r),s=i.value}catch(c){return void t(c)}i.done?e(s):Promise.resolve(s).then(a,o)}function r(n){return function(){var e=this,t=arguments;return new Promise((function(a,o){var r=n.apply(e,t);function i(n){u(r,a,o,i,s,"next",n)}function s(n){u(r,a,o,i,s,"throw",n)}i(void 0)}))}}var i={name:"ns-fenxiao-good-detail",props:{skuId:{type:[Number,String],default:0}},data:function(){return{isIphoneX:!1,showFenxiao:0,levelInfo:{}}},created:function(){var e=this;return r(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.getStorageSync("token")){t.next=2;break}return t.abrupt("return");case 2:return e.isIphoneX=e.$util.uniappIsIPhoneX(),t.next=5,e.getAddonisexit();case 5:0!=e.showFenxiao&&e.getFenxiaoGoodsDetail();case 6:case"end":return t.stop()}}),t)})))()},methods:{getAddonisexit:function(){var n=this;return r(a.default.mark((function e(){var t;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$api.sendRequest({url:"/api/addon/addonisexit",async:!1,success:function(n){}});case 2:t=e.sent,0==t.code&&t.data&&(n.showFenxiao=t.data.fenxiao);case 4:case"end":return e.stop()}}),e)})))()},getFenxiaoGoodsDetail:function(){var n=this;this.$api.sendRequest({url:"/fenxiao/api/goods/detail",data:{sku_id:this.skuId},success:function(e){0==e.code&&e.data&&(n.levelInfo=e.data)}})}}};e.default=i}).call(this,t("543d")["default"])},6289:function(n,e,t){"use strict";var a;t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return a}));var o=function(){var n=this,e=n.$createElement;n._self._c},u=[]},"8f43":function(n,e,t){"use strict";var a=t("d506"),o=t.n(a);o.a},"9c79":function(n,e,t){"use strict";t.r(e);var a=t("6289"),o=t("2d41");for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);t("8f43");var r,i=t("f0c5"),s=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=s.exports},d506:function(n,e,t){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-fenxiao-goods-detail/ns-fenxiao-goods-detail-create-component',
    {
        'components/ns-fenxiao-goods-detail/ns-fenxiao-goods-detail-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9c79"))
        })
    },
    [['components/ns-fenxiao-goods-detail/ns-fenxiao-goods-detail-create-component']]
]);
