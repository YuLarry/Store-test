(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-fenxiao-goods-detail/ns-fenxiao-goods-detail"],{"0d6c":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var o=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"2d41":function(e,n,t){"use strict";t.r(n);var a=t("4a62"),o=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=o.a},"4a62":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,a,o,i,r){try{var u=e[i](r),s=u.value}catch(c){return void t(c)}u.done?n(s):Promise.resolve(s).then(a,o)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(a,o){var r=e.apply(n,t);function u(e){i(r,a,o,u,s,"next",e)}function s(e){i(r,a,o,u,s,"throw",e)}u(void 0)}))}}var u={name:"ns-fenxiao-good-detail",props:{skuId:{type:[Number,String],default:0}},data:function(){return{isIphoneX:!1,preview:0,showFenxiao:0,fenXiaoLevel:0,levelId:0,levelInfo:{},token:""}},created:function(){var n=this;return r(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.getStorageSync("token")){t.next=2;break}return t.abrupt("return");case 2:return n.isIphoneX=n.$util.uniappIsIPhoneX(),t.next=5,n.getAddonisexit();case 5:0!=n.showFenxiao&&n.getFenxiaoGoodsDetail();case 6:case"end":return t.stop()}}),t)})))()},methods:{getAddonisexit:function(){var e=this;return r(a.default.mark((function n(){var t;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.sendRequest({url:"/api/addon/addonisexit",async:!1,success:function(e){}});case 2:t=n.sent,0==t.code&&t.data&&(e.showFenxiao=t.data.fenxiao);case 4:case"end":return n.stop()}}),n)})))()},getFenxiaoGoodsDetail:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/goods/detail",data:{sku_id:this.skuId},success:function(n){0==n.code&&n.data&&(e.levelInfo=n.data)}})}}};n.default=u}).call(this,t("543d")["default"])},"8f43":function(e,n,t){"use strict";var a=t("d506"),o=t.n(a);o.a},"9c79":function(e,n,t){"use strict";t.r(n);var a=t("0d6c"),o=t("2d41");for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t("8f43");var r,u=t("f0c5"),s=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=s.exports},d506:function(e,n,t){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-fenxiao-goods-detail/ns-fenxiao-goods-detail-create-component',
    {
        'components/ns-fenxiao-goods-detail/ns-fenxiao-goods-detail-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9c79"))
        })
    },
    [['components/ns-fenxiao-goods-detail/ns-fenxiao-goods-detail-create-component']]
]);
