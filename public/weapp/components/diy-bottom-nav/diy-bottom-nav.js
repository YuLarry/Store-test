(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/diy-bottom-nav/diy-bottom-nav"],{"087b":function(t,e,r){"use strict";var n,a=function(){var t=this,e=t.$createElement,r=(t._self._c,t.__map(t.list,(function(e,r){var n=t.verify(e.link),a=t.$util.img(e.selectedIconPath),u=t.$util.img(e.iconPath),i=t.verify(e.link);return{$orig:t.__get_orig(e),m0:n,g0:a,g1:u,m1:i}}))),n=t.special.indexOf(t.currentRoute);t.$mp.data=Object.assign({},{$root:{l0:r,g2:n}})},u=[];r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return u})),r.d(e,"a",(function(){return n}))},"10f0":function(t,e,r){"use strict";r.r(e);var n=r("087b"),a=r("9d1a");for(var u in a)"default"!==u&&function(t){r.d(e,t,(function(){return a[t]}))}(u);r("3665");var i,o=r("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);e["default"]=s.exports},3665:function(t,e,r){"use strict";var n=r("dd14"),a=r.n(n);a.a},"86d5":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"diy-bottom-nav",props:{value:{type:Object},type:{type:String,default:""}},data:function(){return{update:0,currentRoute:"",special:["pages/goods/cart/cart"],specialPage:"",isIphoneX:!1,jumpFlag:!0,bottomNav:{},list:{},bottomType:1}},mounted:function(){var t=getCurrentPages()[getCurrentPages().length-1];this.currentRoute=t.route,this.getBottomNav(),this.$store.dispatch("getCartNumber")},computed:{cartNumber:function(){return this.$store.state.cartNumber},isBulge:function(){return!!this.bottomNav.list&&(5==this.bottomNav.list.length&&-1==this.special.indexOf(this.currentRoute)&&this.bottomNav.bulge)}},methods:{redirectTo:function(e){var r=this;if(this.jumpFlag){if(this.jumpFlag=!1,setTimeout((function(){r.jumpFlag=!0}),300),null==e||""==e||!e.wap_url)return!1;if(-1!=e.wap_url.indexOf(this.currentRoute))return!1;for(var n=!0,a=getCurrentPages().reverse(),u=0;u<a.length;u++)if(-1!=e.wap_url.indexOf(a[u].route)){n=!1,t.navigateBack({delta:u});break}n&&this.$util.redirectTo(e.wap_url)}},verify:function(t){return!(null==t||""==t||!t.wap_url)&&-1!=t.wap_url.indexOf(this.currentRoute)},getBottomNav:function(){var t=this;this.$api.sendRequest({url:"/api/diyview/bottomNav",data:{},success:function(e){var r=e.data;if(r&&r.value){var n=JSON.parse(r.value);t.bottomNav=n,t.bottomType=n.type,t.list=n.list,t.$store.commit("setTabbarList",JSON.parse(r.value)),t.$forceUpdate()}}})}}};e.default=r}).call(this,r("543d")["default"])},"9d1a":function(t,e,r){"use strict";r.r(e);var n=r("86d5"),a=r.n(n);for(var u in n)"default"!==u&&function(t){r.d(e,t,(function(){return n[t]}))}(u);e["default"]=a.a},dd14:function(t,e,r){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/diy-bottom-nav/diy-bottom-nav-create-component',
    {
        'components/diy-bottom-nav/diy-bottom-nav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("10f0"))
        })
    },
    [['components/diy-bottom-nav/diy-bottom-nav-create-component']]
]);
