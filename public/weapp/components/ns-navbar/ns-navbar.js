(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ns-navbar/ns-navbar"],{"1f3c":function(t,e,a){"use strict";var l=a("65de"),n=a.n(l);n.a},"3b7f":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t.getSystemInfoSync(),l={};l=t.getMenuButtonBoundingClientRect();var n={name:"u-navbar",props:{type:{type:String,default:""},globalS:{type:Object,default:function(){return{}}},height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"arrow-left"},backIconSize:{type:[String,Number],default:"30"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleSize:{type:[String,Number],default:32},isBack:{type:Boolean,default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:l,statusBarHeight:a.statusBarHeight,isChangeBg:!1,isBackShow:!1}},watch:{},computed:{navbarInnerStyle:function(){var t={};t.height=this.navbarHeight+"px";var e=l.width?l.width+"px":"180rpx";return t.marginRight="calc("+e+" + 30rpx)",t.width="calc(100vw - "+l.width+" - 30rpx)",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var e={},n=a.windowWidth-l.left;return e.left=(a.windowWidth-t.upx2px(this.titleWidth))/2+"px",e.right="calc("+n+"px + 30rpx)",e.width="calc(100vw - "+l.width+"px - 30rpx) ",e},navbarHeight:function(){var t="ios"==a.platform?44:48;return this.height?this.height:t}},created:function(){var t=getCurrentPages();t.length>1&&(this.isBackShow=!0)},methods:{toLink:function(t){t&&this.$util.redirectTo(t)},goBack:function(){"function"===typeof this.customBack?this.customBack():t.navigateBack()},navTopBg:function(){this.isChangeBg=1,this.$emit("navTopBg")},unSetnavTopBg:function(){this.isChangeBg=0,this.$emit("unSetnavTopBg")}}};e.default=n}).call(this,a("543d")["default"])},"3ccc":function(t,e,a){"use strict";a.r(e);var l=a("3b7f"),n=a.n(l);for(var i in l)"default"!==i&&function(t){a.d(e,t,(function(){return l[t]}))}(i);e["default"]=n.a},"65de":function(t,e,a){},"7ac2":function(t,e,a){"use strict";var l;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return l}));var n=function(){var t=this,e=t.$createElement,a=(t._self._c,"index"!=t.type||1!=t.globalS.navStyle||t.globalS.topNavbg?null:t.__get_style([t.navbarInnerStyle])),l="index"==t.type&&1==t.globalS.navStyle&&!t.globalS.topNavbg&&(t.isBack||t.isBackShow)&&t.backText?t.__get_style([t.backTextStyle]):null,n="index"==t.type&&1==t.globalS.navStyle&&t.globalS.topNavbg?t.__get_style([t.navbarInnerStyle]):null,i="index"==t.type&&1==t.globalS.navStyle&&t.globalS.topNavbg&&(t.isBack||t.isBackShow)&&t.backText?t.__get_style([t.backTextStyle]):null,o="index"!=t.type||2!=t.globalS.navStyle||t.globalS.topNavbg?null:t.__get_style([t.navbarInnerStyle]),r="index"==t.type&&2==t.globalS.navStyle&&!t.globalS.topNavbg&&(t.isBack||t.isBackShow)&&t.backText?t.__get_style([t.backTextStyle]):null,u="index"==t.type&&2==t.globalS.navStyle&&!t.globalS.topNavbg&&t.globalS.title?t.$util.img(t.globalS.topNavImg):null,c="index"==t.type&&2==t.globalS.navStyle&&t.globalS.topNavbg?t.__get_style([t.navbarInnerStyle]):null,g="index"==t.type&&2==t.globalS.navStyle&&t.globalS.topNavbg&&(t.isBack||t.isBackShow)&&t.backText?t.__get_style([t.backTextStyle]):null,b="index"==t.type&&2==t.globalS.navStyle&&t.globalS.topNavbg&&t.globalS.title?t.$util.img(t.globalS.topNavImg):null,s="index"!=t.type||3!=t.globalS.navStyle||t.globalS.topNavbg?null:t.__get_style([t.navbarInnerStyle]),S="index"==t.type&&3==t.globalS.navStyle&&!t.globalS.topNavbg&&(t.isBack||t.isBackShow)&&t.backText?t.__get_style([t.backTextStyle]):null,y="index"!=t.type||3!=t.globalS.navStyle||t.globalS.topNavbg?null:t.$util.img(t.globalS.topNavImg),d="index"==t.type&&3==t.globalS.navStyle&&t.globalS.topNavbg?t.__get_style([t.navbarInnerStyle]):null,p="index"==t.type&&3==t.globalS.navStyle&&t.globalS.topNavbg&&(t.isBack||t.isBackShow)&&t.backText?t.__get_style([t.backTextStyle]):null,f="index"==t.type&&3==t.globalS.navStyle&&t.globalS.topNavbg?t.$util.img(t.globalS.topNavImg):null,v="index"!=t.type?t.__get_style([t.navbarStyle]):null,h="index"!=t.type?t.__get_style([t.navbarInnerStyle]):null,x="index"!=t.type&&(t.isBack||t.isBackShow)&&t.backText?t.__get_style([t.backTextStyle]):null,_=t.isFixed?Number(t.navbarHeight):null;t._isMounted||(t.e0=function(e){return t.$util.redirectTo("/otherpages/goods/search/search")},t.e1=function(e){return t.$util.redirectTo("/otherpages/goods/search/search")}),t.$mp.data=Object.assign({},{$root:{s0:a,s1:l,s2:n,s3:i,s4:o,s5:r,g0:u,s6:c,s7:g,g1:b,s8:s,s9:S,g2:y,s10:d,s11:p,g3:f,s12:v,s13:h,s14:x,m0:_}})},i=[]},b3c1:function(t,e,a){"use strict";a.r(e);var l=a("7ac2"),n=a("3ccc");for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("1f3c");var o,r=a("f0c5"),u=Object(r["a"])(n["default"],l["b"],l["c"],!1,null,"f3ca818c",null,!1,l["a"],o);e["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ns-navbar/ns-navbar-create-component',
    {
        'components/ns-navbar/ns-navbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b3c1"))
        })
    },
    [['components/ns-navbar/ns-navbar-create-component']]
]);
