(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-notice-detail"],{"0010":function(t,e,n){"use strict";var i=n("c5bd"),a=n.n(i);a.a},"013c":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c975"),n("a9e3"),n("ac1f"),n("5319"),n("acd8");var i={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},a={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle()},mounted:function(){this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var n=function n(a){a.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",n),t.$emit("scrolldone",i))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",n)}})}}}};e.default=a},"34c7":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticStyle:{display:"none"}},[this._t("default")],2)},a=[]},"40fe":function(t,e,n){"use strict";n.r(e);var i=n("ea08"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"6d42":function(t,e,n){"use strict";n.r(e);var i=n("34c7"),a=n("8f28");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=c.exports},"8f28":function(t,e,n){"use strict";n.r(e);var i=n("013c"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"9b46":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={pageMeta:n("6d42").default,loadingCover:n("cfb1").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-meta",{attrs:{"page-style":t.themeColor}}),n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"notice-title"},[t._v(t._s(t.detail.title))]),n("v-uni-view",{staticClass:"notice-meta"},[n("v-uni-text",{staticClass:"notice-time"},[t._v("发表时间: "+t._s(t.$util.timeStampTurnTime(t.detail.create_time)))])],1),n("v-uni-view",{staticClass:"notice-content"},[n("v-uni-rich-text",{attrs:{nodes:t.content}})],1),n("loading-cover",{ref:"loadingCover"})],1)],1)},o=[]},adc2:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c975"),n("ac1f"),n("466d"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("14d9"),n("13d5"),n("d3b7"),n("3c65");var a=i(n("e84e")),o=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,r=/^<\/([-A-Za-z0-9_]+)[^>]*>/,c=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,l=h("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),s=h("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),u=h("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),d=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),f=h("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),p=h("script,style");function h(t){for(var e={},n=t.split(","),i=0;i<n.length;i++)e[n[i]]=!0;return e}var g=function(t){t=function(t){return t.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}(t),t=function(t){return t=t.replace(/<!--[\s\S]*-->/gi,""),t}(t),t=function(t){var e='<img style="width:100% !important;display:block;max-width: '.concat("100%",' !important;"');return t=t.replace(/\\/g,"").replace(/<img/g,e),t=t.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,(function(t,n){return e+' src="'+a.default.img(n)+'"/>'})),t}(t),t=function(t){return t=t.replace(/style\s*=\s*["][^>]*;[^"]?/gi,(function(t,e){return t=t.replace(/[:](\s?)[\s\S]*/gi,(function(t,e){return t.replace(/"/g,"'")})),t})),t}(t);var e=[],n={node:"root",children:[]};return function(t,e){var n,i,a,h=[],g=t;h.last=function(){return this[this.length-1]};while(t){if(i=!0,h.last()&&p[h.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+h.last()+"[^>]*>"),(function(t,n){return n=n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(n),""})),b("",h.last());else if(0==t.indexOf("\x3c!--")?(n=t.indexOf("--\x3e"),n>=0&&(e.comment&&e.comment(t.substring(4,n)),t=t.substring(n+3),i=!1)):0==t.indexOf("</")?(a=t.match(r),a&&(t=t.substring(a[0].length),a[0].replace(r,b),i=!1)):0==t.indexOf("<")&&(a=t.match(o),a&&(t=t.substring(a[0].length),a[0].replace(o,m),i=!1)),i){n=t.indexOf("<");var v=n<0?t:t.substring(0,n);t=n<0?"":t.substring(n),e.chars&&e.chars(v)}if(t==g)throw"Parse Error: "+t;g=t}function m(t,n,i,a){if(n=n.toLowerCase(),s[n])while(h.last()&&u[h.last()])b("",h.last());if(d[n]&&h.last()==n&&b("",n),a=l[n]||!!a,a||h.push(n),e.start){var o=[];i.replace(c,(function(t,e){var n=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:f[e]?e:"";o.push({name:e,value:n,escaped:n.replace(/(^|[^\\])"/g,'$1\\"')})})),e.start&&e.start(n,o,a)}}function b(t,n){if(n){for(i=h.length-1;i>=0;i--)if(h[i]==n)break}else var i=0;if(i>=0){for(var a=h.length-1;a>=i;a--)e.end&&e.end(h[a]);h.length=i}}b()}(t,{start:function(t,i,a){var o={name:t};if(0!==i.length&&(o.attrs=function(t){return t.reduce((function(t,e){var n=e.value,i=e.name;return t[i]?t[i]=t[i]+" "+n:t[i]=n,t}),{})}(i)),a){var r=e[0]||n;r.children||(r.children=[]),r.children.push(o)}else e.unshift(o)},end:function(t){var i=e.shift();if(i.name!==t&&console.error("invalid state: mismatch end tag"),0===e.length)n.children.push(i);else{var a=e[0];a.children||(a.children=[]),a.children.push(i)}},chars:function(t){var i={type:"text",text:t};if(0===e.length)n.children.push(i);else{var a=e[0];a.children||(a.children=[]),a.children.push(i)}},comment:function(t){var n={node:"comment",text:t},i=e[0];i.children||(i.children=[]),i.children.push(n)}}),n.children};e.default=g},bfea:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.page[data-v-34a82fca]{width:100%;height:100%;padding:%?30?%;box-sizing:border-box;background-color:#fff}.notice-title[data-v-34a82fca]{font-size:%?32?%;text-align:left;font-weight:700}.notice-content[data-v-34a82fca]{margin-top:%?20?%;word-break:break-all;font-size:%?28?%}.notice-meta[data-v-34a82fca]{text-align:left;margin-top:%?20?%;color:#909399}.notice-meta .notice-time[data-v-34a82fca]{font-size:%?24?%}',""]),t.exports=e},c5bd:function(t,e,n){var i=n("bfea");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6d96c1c0",i,!0,{sourceMap:!1,shadowMode:!1})},cc25:function(t,e,n){"use strict";n.r(e);var i=n("9b46"),a=n("40fe");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("0010");var r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"34a82fca",null,!1,i["a"],void 0);e["default"]=c.exports},ea08:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("adc2")),o={data:function(){return{noticeId:0,content:"",detail:{}}},onLoad:function(t){t.notice_id?this.noticeId=t.notice_id:this.$util.redirectTo("/pages_tool/notice/list",{},"redirectTo")},onShow:function(){this.getData()},methods:{getData:function(){var t=this;this.$api.sendRequest({url:"/api/notice/info",data:{id:this.noticeId},success:function(e){0==e.code?e.data?(t.detail=e.data,t.content=(0,a.default)(e.data.content),t.$langConfig.title(t.detail.title),t.setPublicShare(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):t.$util.redirectTo("/pages_tool/notice/list",{},"redirectTo"):(t.$util.showToast({title:e.message}),setTimeout((function(){t.$util.redirectTo("/pages_tool/notice/list",{},"redirectTo")}),2e3))},fail:function(e){t.$util.redirectTo("/pages_tool/notice/list",{},"redirectTo"),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},setPublicShare:function(){var t=this.$config.h5Domain+"/pages_tool/notice/detail?notice_id="+this.noticeId;this.$util.setPublicShare({title:this.detail.title,desc:"",link:t,imgUrl:""})}},onShareAppMessage:function(t){var e="[公告]"+this.detail.title,n="/pages_tool/notice/detail?notice_id="+this.noticeId;return{title:e,path:n,success:function(t){},fail:function(t){}}},onShareTimeline:function(){var t=this.detail.title,e="/pages_tool/notice/notice_id?id="+this.noticeId;return{title:t,query:e,imageUrl:""}}};e.default=o}}]);