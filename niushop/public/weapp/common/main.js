(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],[function(e,t,n){"use strict";(function(e){n(5);var t=s(n(4)),o=s(n(6)),i=s(n(15)),a=s(n(19)),r=s(n(17)),u=s(n(24)),c=s(n(18)),l=s(n(103));function s(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}wx.__webpack_require_UNI_MP_PLUGIN__=n,t.default.prototype.$store=i.default,t.default.config.productionTip=!1,t.default.prototype.$util=a.default,t.default.prototype.$api=r.default,t.default.prototype.$langConfig=u.default,t.default.prototype.$lang=u.default.lang,t.default.prototype.$config=c.default,t.default.mixin(l.default),o.default.mpType="app";var h=function(){n.e("components/loading-cover/loading-cover").then(function(){return resolve(n(714))}.bind(null,n)).catch(n.oe)};t.default.component("loading-cover",h);var m=function(){n.e("components/ns-empty/ns-empty").then(function(){return resolve(n(721))}.bind(null,n)).catch(n.oe)};t.default.component("ns-empty",m);var g=function(){n.e("components/mescroll/my-list-mescroll").then(function(){return resolve(n(728))}.bind(null,n)).catch(n.oe)};t.default.component("mescroll-uni",g);var v=function(){Promise.all([n.e("common/vendor"),n.e("components/mescroll/mescroll-body")]).then(function(){return resolve(n(733))}.bind(null,n)).catch(n.oe)};t.default.component("mescroll-body",v);var b=function(){Promise.all([n.e("common/vendor"),n.e("components/ns-login/ns-login")]).then(function(){return resolve(n(742))}.bind(null,n)).catch(n.oe)};t.default.component("ns-login",b);var y=new t.default(d(d({},o.default),{},{store:i.default}));e(y).$mount()}).call(this,n(1)["createApp"])},,,,,,function(e,t,n){"use strict";n.r(t);var o=n(7);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n(12);var a,r,u,c,l=n(14),s=Object(l["default"])(o["default"],a,r,!1,null,null,null,!1,u,c);s.options.__file="App.vue",t["default"]=s.exports},function(e,t,n){"use strict";n.r(t);var o=n(8),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(9)),i=n(10);function a(e){return e&&e.__esModule?e:{default:e}}var r={mixins:[o.default],onLaunch:function(){var t=this;e.hideTabBar();var n=e.getUpdateManager();n.onCheckForUpdate((function(e){})),n.onUpdateReady((function(t){e.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&n.applyUpdate()}})})),n.onUpdateFailed((function(e){})),e.onNetworkStatusChange((function(t){t.isConnected||e.showModal({title:"网络失去链接",content:"请检查网络链接",showCancel:!1})})),this.$store.dispatch("init"),e.getStorageSync("token")?this.$api.sendRequest({url:"/api/member/info",complete:function(){e.getStorageSync("token")||t.getAuthInfo()}}):this.getAuthInfo()},onShow:function(){},onHide:function(){},methods:{getAuthInfo:function(){var e=this;this.getCode((function(t){e.authLogin(t,"authOnlyLogin")}))},authLogin:function(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"authLogin";e.getStorageSync("source_member")&&(t.source_member=e.getStorageSync("source_member")),e.setStorage({key:"authInfo",data:t}),this.$api.sendRequest({url:"authLogin"==o?"/api/login/auth":"/api/login/authonlylogin",data:t,success:function(t){t.code>=0&&e.setStorage({key:"token",data:t.data.token,success:function(){n.$store.dispatch("getCartNumber"),n.$store.commit("setToken",t.data.token)}})}})},shareConfig:function(){var e=this;this.$api.sendRequest({url:"/wechat/api/wechat/share",data:{url:window.location.href},success:function(t){if(0==t.code){var n=new i.Weixin;n.init(t.data.jssdk_config);var o=JSON.parse(JSON.stringify(t.data.share_config.data));o&&n.setShareData({title:o.title,desc:o.desc,link:o.link,imgUrl:e.$util.img(o.imgUrl)},(function(e){console.log(e)}));var a=t.data.share_config.permission.hideOptionMenu;t.data.share_config.permission.hideMenuItems;a?n.weixin.hideOptionMenu():n.weixin.showOptionMenu()}},fail:function(e){}})}},watch:{$route:{handler:function(e,t){this.$util.isWeiXin()&&this.shareConfig()},immediate:!0}}};t.default=r}).call(this,n(1)["default"])},,,,function(e,t,n){"use strict";n.r(t);var o=n(13),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},function(e,t,n){}],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map