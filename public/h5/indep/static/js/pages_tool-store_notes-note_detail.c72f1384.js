(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-store_notes-note_detail"],{"013c":function(t,e,o){"use strict";o("c975"),o("a9e3"),o("acd8"),o("ac1f"),o("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},n={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var o=function o(n){n.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",o),t.$emit("scrolldone",i))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",o)}})}}}};e.default=n},4020:function(t,e,o){"use strict";var i;o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},a=[]},"554f":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */uni-page-body[data-v-3e2e4b65]{background-color:#fff}.goods-detail[data-v-3e2e4b65]{padding:%?30?% %?24?% %?180?%}.goods-detail .said-content[data-v-3e2e4b65],\r\n.goods-detail .item-content[data-v-3e2e4b65]{padding:%?4?%}.goods-detail .said-content uni-rich-text[data-v-3e2e4b65],\r\n.goods-detail .item-content uni-rich-text[data-v-3e2e4b65]{word-wrap:break-word}.goods-detail .goods-item .item-img[data-v-3e2e4b65]{width:100%;height:%?400?%;border-radius:%?10?%}.goods-detail .goods-item .item-title[data-v-3e2e4b65]{display:block;margin:%?40?% 0 %?44?%;font-size:%?32?%;line-height:1}.goods-detail .goods-item .item-lightspot uni-text[data-v-3e2e4b65]{font-size:%?24?%;padding:%?6?% %?10?%;line-height:1;border-radius:%?4?%;color:#fff}.goods-detail .goods-item .item-lightspot uni-text ~ uni-text[data-v-3e2e4b65]{margin-left:%?10?%}.goods-detail .goods-item .item-time[data-v-3e2e4b65]{display:block;margin:%?44?% 0 %?40?%;font-size:%?24?%;color:#b6b6b6}.goods-detail .goods-item .rest-info[data-v-3e2e4b65]{display:flex;justify-content:space-between;align-items:center;margin-top:%?40?%;color:#6b6b6b;font-size:%?24?%}.goods-detail .goods-item .rest-info uni-text uni-text[data-v-3e2e4b65]{margin-left:%?8?%}.goods-detail .goods-item .rest-info uni-text.iconfont[data-v-3e2e4b65]{font-size:%?26?%}.goods-detail .goods-item .item-action[data-v-3e2e4b65]{position:fixed;bottom:0;width:calc(100% - 24px);display:flex;margin:%?80?% 0;justify-content:space-between}.goods-detail .goods-item .item-action .action-left[data-v-3e2e4b65]{display:flex}.goods-detail .goods-item .item-action .action-left uni-text[data-v-3e2e4b65]{display:flex;justify-content:center;align-items:center;width:%?70?%;height:%?70?%;background-color:rgba(0,0,0,.4)!important;border-radius:50%;border:%?2?% solid transparent}.goods-detail .goods-item .item-action .action-left uni-text.active[data-v-3e2e4b65]{margin:0;background-color:#fff!important;border:%?2?% solid #ddd}.goods-detail .goods-item .item-action .action-left uni-button[data-v-3e2e4b65]{display:flex;justify-content:center;align-items:center;margin:0;margin-left:%?16?%;padding:0;width:%?70?%;height:%?70?%;background-color:rgba(0,0,0,.4)!important;border-radius:50%}.goods-detail .goods-item .item-action .action-left .iconfont[data-v-3e2e4b65]{color:#fff;font-size:%?32?%}.goods-detail .goods-item .item-action .action-right[data-v-3e2e4b65]{margin:0;width:%?180?%;height:%?70?%;color:#fff}.goods-detail .shop-said .said-title[data-v-3e2e4b65]{display:block;margin:%?40?% 0 %?44?%;font-size:%?32?%;line-height:1}.goods-detail .shop-said .said-time[data-v-3e2e4b65]{display:block;margin:%?44?% 0 %?40?%;font-size:%?24?%;color:#b6b6b6}.goods-detail .shop-said .rest-info[data-v-3e2e4b65]{display:flex;justify-content:space-between;align-items:center;margin-top:%?40?%;color:#6b6b6b;font-size:%?24?%}.goods-detail .shop-said .rest-info uni-text uni-text[data-v-3e2e4b65]{margin-left:%?8?%}.goods-detail .shop-said .rest-info uni-text.iconfont[data-v-3e2e4b65]{font-size:%?26?%}.goods-detail .shop-said .said-action[data-v-3e2e4b65]{position:fixed;bottom:0;width:calc(100% - 24px);display:flex;justify-content:center;margin:%?80?% 0}.goods-detail .shop-said .said-action uni-text[data-v-3e2e4b65]{display:flex;justify-content:center;align-items:center;width:%?70?%;height:%?70?%;background-color:rgba(0,0,0,.4)!important;border-radius:50%}.goods-detail .shop-said .said-action uni-text.active[data-v-3e2e4b65]{margin:0;background-color:#fff!important;border:%?2?% solid #ddd}.goods-detail .shop-said .said-action uni-button[data-v-3e2e4b65]{display:flex;justify-content:center;align-items:center;margin:0;margin-left:%?16?%;padding:0;width:%?70?%;height:%?70?%;background-color:rgba(0,0,0,.4)!important;border-radius:50%}.goods-detail .shop-said .said-action .iconfont[data-v-3e2e4b65]{color:#fff;font-size:%?32?%}.goods-detail .shop-said .said-goods[data-v-3e2e4b65]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:%?40?%}.goods-detail .shop-said .said-goods .commodity-item[data-v-3e2e4b65]{display:flex;flex-direction:column;margin-bottom:%?22?%;width:%?338?%;border:%?2?% solid #f1f1f1}.goods-detail .shop-said .said-goods .commodity-item uni-image[data-v-3e2e4b65]{width:%?338?%;height:%?338?%}.goods-detail .shop-said .said-goods .commodity-item .commodity-content[data-v-3e2e4b65]{padding:%?20?%}.goods-detail .shop-said .said-goods .commodity-item .commodity-content .commodity-name[data-v-3e2e4b65]{overflow:hidden;display:block;font-size:%?24?%;text-overflow:ellipsis;white-space:nowrap;color:#383838}.goods-detail .shop-said .said-goods .commodity-item .commodity-content .commodity-price[data-v-3e2e4b65]{display:block;font-size:%?24?%}body.?%PAGE?%[data-v-3e2e4b65]{background-color:#fff}',""]),t.exports=e},6695:function(t,e,o){var i=o("554f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("4d51bc06",i,!0,{sourceMap:!1,shadowMode:!1})},"6d42":function(t,e,o){"use strict";o.r(e);var i=o("4020"),n=o("8f28");for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);var s,d=o("f0c5"),r=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=r.exports},"8f28":function(t,e,o){"use strict";o.r(e);var i=o("013c"),n=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},a272:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}));var i={pageMeta:o("6d42").default,loadingCover:o("790a").default,nsLogin:o("2893").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("page-meta",{attrs:{"page-style":t.themeColor}}),o("v-uni-view",{staticClass:"goods-detail"},["goods_item"==t.noteType?o("v-uni-view",{staticClass:"goods-item"},[o("v-uni-image",{staticClass:"item-img",attrs:{src:t.$util.img(t.goodsItemInfo.goods_image),mode:"aspectFit"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.imageError()}}}),1==t.goodsItemInfo.is_show_release_time?o("v-uni-text",{staticClass:"item-title"},[t._v(t._s(t.goodsItemInfo.note_title))]):t._e(),t.goodsItemInfo.goods_highlights.length?o("v-uni-view",{staticClass:"item-lightspot"},t._l(t.goodsItemInfo.goods_highlights,(function(e,i){return o("v-uni-text",{key:i,staticClass:"color-base-bg"},[t._v(t._s(e))])})),1):t._e(),1==t.goodsItemInfo.is_show_release_time?o("v-uni-text",{staticClass:"item-time"},[t._v(t._s(t.$util.timeStampTurnTime(t.goodsItemInfo.create_time,"time")))]):t._e(),o("v-uni-view",{staticClass:"item-content"},[o("v-uni-rich-text",{attrs:{nodes:t.goodsItemInfo.note_content}})],1),o("v-uni-view",{staticClass:"rest-info"},[1==t.goodsItemInfo.is_show_read_num?o("v-uni-text",[t._v("阅读"),o("v-uni-text",[t._v(t._s(t.goodsItemInfo.initial_read_num+t.goodsItemInfo.read_num))])],1):t._e(),1==t.goodsItemInfo.is_show_dianzan_num?o("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.giveLike.apply(void 0,arguments)}}},[t.giveLikeIdent?o("v-uni-text",{staticClass:"iconfont iconlikefill color-base-text"}):t._e(),t.giveLikeIdent?t._e():o("v-uni-text",{staticClass:"iconfont icongz"}),o("v-uni-text",[t._v(t._s(t.goodsItemInfo.initial_dianzan_num+t.goodsItemInfo.dianzan_num))])],1):t._e()],1),o("v-uni-view",{staticClass:"item-action"},[o("v-uni-view",{staticClass:"action-left"},[t.giveLikeIdent?t._e():o("v-uni-text",{staticClass:"iconfont icondianzan",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.giveLike.apply(void 0,arguments)}}}),t.giveLikeIdent?o("v-uni-text",{staticClass:"iconfont icondianzan1 active color-base-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.giveLike.apply(void 0,arguments)}}}):t._e()],1),t.goodsItemInfo.goods_list.length?o("v-uni-button",{staticClass:"color-base-bg action-right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.redirectToGoods(t.goodsItemInfo)}}},[t._v("购买")]):t._e()],1)],1):"shop_said"==t.noteType?o("v-uni-view",{staticClass:"shop-said"},[o("v-uni-text",{staticClass:"said-title"},[t._v(t._s(t.shopSaidInfo.note_title))]),1==t.shopSaidInfo.is_show_release_time?o("v-uni-text",{staticClass:"said-time"},[t._v(t._s(t.$util.timeStampTurnTime(t.shopSaidInfo.create_time,"time")))]):t._e(),o("v-uni-view",{staticClass:"said-content"},[o("v-uni-rich-text",{attrs:{nodes:t.shopSaidInfo.note_content}})],1),o("v-uni-view",{staticClass:"said-goods"},t._l(t.shopSaidInfo.goods_list,(function(e,i){return t.shopSaidInfo.goods_list?o("v-uni-view",{key:i,staticClass:"commodity-item",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.redirectToGoods(e.goods_id,"shop_said")}}},[o("v-uni-image",{staticClass:"commodity-img",attrs:{src:t.$util.img(e.goods_image.split(",")[0]),mode:"aspectFit"}}),o("v-uni-view",{staticClass:"commodity-content"},[o("v-uni-text",{staticClass:"commodity-name"},[t._v(t._s(e.goods_name))]),o("v-uni-text",{staticClass:"commodity-price color-base-text"},[t._v(t._s(e.price))])],1)],1):t._e()})),1),o("v-uni-view",{staticClass:"rest-info"},[1==t.shopSaidInfo.is_show_read_num?o("v-uni-text",[t._v("阅读"),o("v-uni-text",[t._v(t._s(t.shopSaidInfo.initial_read_num+t.shopSaidInfo.read_num))])],1):t._e(),1==t.shopSaidInfo.is_show_dianzan_num?o("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.giveLike.apply(void 0,arguments)}}},[t.giveLikeIdent?o("v-uni-text",{staticClass:"iconfont iconlikefill color-base-text"}):t._e(),t.giveLikeIdent?t._e():o("v-uni-text",{staticClass:"iconfont icongz"}),o("v-uni-text",[t._v(t._s(t.shopSaidInfo.initial_dianzan_num+t.shopSaidInfo.dianzan_num))])],1):t._e()],1),o("v-uni-view",{staticClass:"said-action"},[t.giveLikeIdent?t._e():o("v-uni-text",{staticClass:"iconfont icondianzan",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.giveLike.apply(void 0,arguments)}}}),t.giveLikeIdent?o("v-uni-text",{staticClass:"iconfont icondianzan1 color-base-text active",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.giveLike.apply(void 0,arguments)}}}):t._e()],1)],1):t._e(),o("loading-cover",{ref:"loadingCover"}),o("ns-login",{ref:"login"})],1)],1)},a=[]},aa06:function(t,e,o){"use strict";var i=o("6695"),n=o.n(i);n.a},ccf1:function(t,e,o){"use strict";o.r(e);var i=o("de63"),n=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},ce70:function(t,e,o){"use strict";var i=o("4ea4");o("c975"),o("13d5"),o("4d63"),o("ac1f"),o("25f0"),o("466d"),o("5319"),o("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("ec6f")),a=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,s=/^<\/([-A-Za-z0-9_]+)[^>]*>/,d=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,r=h("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),c=h("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),l=h("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),u=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),f=h("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),g=h("script,style");function m(t,e){var o,i,n,m=[],h=t;m.last=function(){return this[this.length-1]};while(t){if(i=!0,m.last()&&g[m.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+m.last()+"[^>]*>"),(function(t,o){return o=o.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(o),""})),_("",m.last());else if(0==t.indexOf("\x3c!--")?(o=t.indexOf("--\x3e"),o>=0&&(e.comment&&e.comment(t.substring(4,o)),t=t.substring(o+3),i=!1)):0==t.indexOf("</")?(n=t.match(s),n&&(t=t.substring(n[0].length),n[0].replace(s,_),i=!1)):0==t.indexOf("<")&&(n=t.match(a),n&&(t=t.substring(n[0].length),n[0].replace(a,v),i=!1)),i){o=t.indexOf("<");var p=o<0?t:t.substring(0,o);t=o<0?"":t.substring(o),e.chars&&e.chars(p)}if(t==h)throw"Parse Error: "+t;h=t}function v(t,o,i,n){if(o=o.toLowerCase(),c[o])while(m.last()&&l[m.last()])_("",m.last());if(u[o]&&m.last()==o&&_("",o),n=r[o]||!!n,n||m.push(o),e.start){var a=[];i.replace(d,(function(t,e){var o=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:f[e]?e:"";a.push({name:e,value:o,escaped:o.replace(/(^|[^\\])"/g,'$1\\"')})})),e.start&&e.start(o,a,n)}}function _(t,o){if(o){for(i=m.length-1;i>=0;i--)if(m[i]==o)break}else var i=0;if(i>=0){for(var n=m.length-1;n>=i;n--)e.end&&e.end(m[n]);m.length=i}}_()}function h(t){for(var e={},o=t.split(","),i=0;i<o.length;i++)e[o[i]]=!0;return e}function p(t){return t.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function v(t){t=t.replace(/<!--[\s\S]*-->/gi,"");return t}function _(t){var e="100%",o='<img style="width:100% !important;display:block;max-width: '.concat(e,' !important;"');t=t.replace(/\\/g,"").replace(/<img/g,o);return t=t.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,(function(t,e){return o+' src="'+n.default.img(e)+'"/>'})),t}function b(t){t=t.replace(/style\s*=\s*["][^>]*;[^"]?/gi,(function(t,e){return t=t.replace(/[:](\s?)[\s\S]*/gi,(function(t,e){return t.replace(/"/g,"'")})),t}));return t}function I(t){return t.reduce((function(t,e){var o=e.value,i=e.name;return t[i]?t[i]=t[i]+" "+o:t[i]=o,t}),{})}function y(t){t=p(t),t=v(t),t=_(t),t=b(t);var e=[],o={node:"root",children:[]};return m(t,{start:function(t,i,n){var a={name:t};if(0!==i.length&&(a.attrs=I(i)),n){var s=e[0]||o;s.children||(s.children=[]),s.children.push(a)}else e.unshift(a)},end:function(t){var i=e.shift();if(i.name!==t&&console.error("invalid state: mismatch end tag"),0===e.length)o.children.push(i);else{var n=e[0];n.children||(n.children=[]),n.children.push(i)}},chars:function(t){var i={type:"text",text:t};if(0===e.length)o.children.push(i);else{var n=e[0];n.children||(n.children=[]),n.children.push(i)}},comment:function(t){var o={node:"comment",text:t},i=e[0];i.children||(i.children=[]),i.children.push(o)}}),o.children}var x=y;e.default=x},de63:function(t,e,o){"use strict";var i=o("4ea4");o("4160"),o("c975"),o("ac1f"),o("1276"),o("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("ce70")),a={components:{},data:function(){return{noteId:"",noteType:"",goodsItemInfo:{},shopSaidInfo:{},giveLikeIdent:!1,giveLikeFlag:!1,memberId:0,shareImg:""}},onLoad:function(t){var e=this;if(this.addonIsExist.notes)t.note_id?(this.noteId=t.note_id,this.getNoteDetail()):this.$util.redirectTo("/pages_tool/store_notes/note_list",{},"redirectTo");else{if(this.$util.showToast({title:"商家未开启店铺笔记",mask:!0,duration:2e3}),this.$util.getMemberId().then((function(t){e.memberId=t})),t.source_member&&uni.setStorageSync("source_member",t.source_member),t.scene){var o=decodeURIComponent(t.scene);o=o.split("&"),o.length&&o.forEach((function(t){-1!=t.indexOf("sku_id")&&(e.skuId=t.split("-")[1]),-1!=t.indexOf("m")&&uni.setStorageSync("source_member",t.split("-")[1]),-1!=t.indexOf("is_test")&&uni.setStorageSync("is_test",1)}))}setTimeout((function(){e.$util.redirectTo("/pages/index/index",{},"redirectTo")}),2e3)}},onShow:function(){uni.getStorageSync("token")&&uni.getStorageSync("source_member")&&this.$util.onSourceMember(uni.getStorageSync("source_member")),uni.getStorageSync("token")&&this.isDianzan()},onShareAppMessage:function(){var t="goods_item"==this.noteType?this.goodsItemInfo.note_title:this.shopSaidInfo.note_title,e="goods_item"==this.noteType?this.goodsItemInfo.cover_img:this.shopSaidInfo.cover_img;e=this.$util.img(e.split(",")[0]);var o=this.$util.getCurrentShareRoute(this.memberId),i=o.path;return{title:t,path:i,imageUrl:e}},methods:{getNoteDetail:function(){var t=this;this.$api.sendRequest({url:"/notes/api/notes/detail",data:{note_id:this.noteId},success:function(e){0==e.code?(t.noteType=e.data.note_type,"goods_item"==t.noteType?(t.goodsItemInfo=e.data,t.goodsItemInfo.note_content&&(t.goodsItemInfo.note_content=(0,n.default)(t.goodsItemInfo.note_content)),t.goodsItemInfo.goods_image?t.shareImg=t.$util.img(t.goodsItemInfo.goods_image):t.shareImg=t.$util.getDefaultImage().goods,t.goodsItemInfo.goods_list.length?t.goodsItemInfo.goods_image=t.goodsItemInfo.goods_list[0].goods_image.split(",")[0]:t.goodsItemInfo.goods_image=t.$util.getDefaultImage().goods,t.goodsItemInfo.goods_highlights&&(t.goodsItemInfo.goods_highlights=t.goodsItemInfo.goods_highlights.split(","))):(t.shopSaidInfo=e.data,t.shopSaidInfo.note_content&&(t.shopSaidInfo.note_content=(0,n.default)(t.shopSaidInfo.note_content)))):t.$util.showToast({title:e.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},giveLike:function(){var t=this;if(uni.getStorageSync("token")){if(this.giveLikeFlag)return!1;this.giveLikeFlag=!0;var e=this.giveLikeIdent?"/notes/api/record/delete":"/notes/api/record/add";this.$api.sendRequest({url:e,data:{note_id:this.noteId},success:function(e){t.giveLikeFlag=!1,0==e.code&&e.data>0?("goods_item"!=t.noteType?t.shopSaidInfo.dianzan_num=t.giveLikeIdent?t.shopSaidInfo.dianzan_num-1:t.shopSaidInfo.dianzan_num+1:t.goodsItemInfo.dianzan_num=t.giveLikeIdent?t.goodsItemInfo.dianzan_num-1:t.goodsItemInfo.dianzan_num+1,t.giveLikeIdent=!t.giveLikeIdent):t.$util.showToast({title:e.message})}})}else this.$refs.login.open("/pages/index/index")},isDianzan:function(){var t=this;this.$api.sendRequest({url:"/notes/api/record/isDianzan",data:{note_id:this.noteId},success:function(e){0==e.code?t.giveLikeIdent=1==e.data:t.$util.showToast({title:e.message})}})},redirectToGoods:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=e?t:t.goods_list[0].goods_id;this.$util.redirectTo("/pages/goods/detail",{goods_id:o})},imageError:function(){this.goodsItemInfo.goods_image&&(this.goodsItemInfo.goods_image=this.$util.getDefaultImage().goods),this.$forceUpdate()}}};e.default=a},ec1f:function(t,e,o){"use strict";o.r(e);var i=o("a272"),n=o("ccf1");for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);o("aa06");var s,d=o("f0c5"),r=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"3e2e4b65",null,!1,i["a"],s);e["default"]=r.exports}}]);