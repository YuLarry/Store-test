(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diy-live/diy-live"],{"14c3":function(n,e,i){},"19b0":function(n,e,i){"use strict";i.r(e);var t=i("4bf8"),o=i("efdd");for(var a in o)"default"!==a&&function(n){i.d(e,n,(function(){return o[n]}))}(a);i("7eb0"),i("5a44");var u,l=i("f0c5"),r=Object(l["a"])(o["default"],t["b"],t["c"],!1,null,"35617db8",null,!1,t["a"],u);e["default"]=r.exports},"4bf8":function(n,e,i){"use strict";var t;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}));var o=function(){var n=this,e=n.$createElement,i=(n._self._c,n.liveInfo&&void 0!=n.liveInfo.roomid&&""!=n.liveInfo.banner?n.$util.img(n.liveInfo.banner):null),t=n.liveInfo&&void 0!=n.liveInfo.roomid&&""==n.liveInfo.banner?n.$util.img("upload/uniapp/live_default_banner.png"):null,o=n.liveInfo&&void 0!=n.liveInfo.roomid&&(n.value.isShowAnchorInfo||n.value.isShowLiveGood)&&n.value.isShowAnchorInfo&&""!=n.liveInfo.anchor_img?n.$util.img(n.liveInfo.anchor_img):null,a=n.liveInfo&&void 0!=n.liveInfo.roomid&&(n.value.isShowAnchorInfo||n.value.isShowLiveGood)&&n.value.isShowAnchorInfo&&""==n.liveInfo.anchor_img?n.$util.getDefaultImage():null;n._isMounted||(n.e0=function(e){n.liveInfo.banner=n.$util.img("upload/uniapp/live_default_banner.png")},n.e1=function(e){n.liveInfo.anchor_img=n.$util.getDefaultImage().default_headimg}),n.$mp.data=Object.assign({},{$root:{g0:i,g1:t,g2:o,g3:a}})},a=[]},"592d":function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={components:{},name:"diy-live",props:{value:{type:Object,default:function(){return{}}}},data:function(){return{liveInfo:{banner:"",anchor_img:""}}},created:function(){this.getLiveInfo()},methods:{getLiveInfo:function(){var n=this;this.$api.sendRequest({url:"/live/api/live/info",success:function(e){0==e.code&&e.data?(n.liveInfo=e.data,n.getLiveStatus()):n.liveInfo=null}})},entryRoom:function(n){wx.navigateTo({url:"plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(n)})},getLiveStatus:function(){var n=this,e=requirePlugin("live-player-plugin");e.getLiveStatus({room_id:this.liveInfo.roomid}).then((function(e){var i=e.liveStatus;i&&i!=n.liveInfo.live_status&&n.changeLiveStatus(i)})).catch((function(n){console.log("get live status",n)}));var i=setInterval((function(){e.getLiveStatus({room_id:n.liveInfo.roomid}).then((function(e){var t=e.liveStatus;t&&t!=n.liveInfo.live_status&&n.changeLiveStatus(t),n.$util.inArray(t,[103,104,106,107])&&clearInterval(i)})).catch((function(n){console.log("get live status",n)}))}),6e4)},changeLiveStatus:function(n){var e=this;this.$api.sendRequest({url:"/live/api/live/modifyLiveStatus",data:{room_id:this.liveInfo.roomid,status:n},success:function(n){0==n.code&&e.getLiveInfo()}})}}};e.default=t},"5a44":function(n,e,i){"use strict";var t=i("86d2"),o=i.n(t);o.a},"7eb0":function(n,e,i){"use strict";var t=i("14c3"),o=i.n(t);o.a},"86d2":function(n,e,i){},efdd:function(n,e,i){"use strict";i.r(e);var t=i("592d"),o=i.n(t);for(var a in t)"default"!==a&&function(n){i.d(e,n,(function(){return t[n]}))}(a);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diy-live/diy-live-create-component',
    {
        'components/diy-live/diy-live-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("19b0"))
        })
    },
    [['components/diy-live/diy-live-create-component']]
]);
