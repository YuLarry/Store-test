(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-notice-detail-detail"],{"11f4":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("8745")),a=n(i("245b")),o={data:function(){return{noticeId:0,content:"",detail:{}}},mixins:[a.default],onLoad:function(e){var t=this;e.notice_id?this.noticeId=e.notice_id:this.$util.redirectTo("/otherpages/notice/list/list",{},"redirectTo"),this.$api.sendRequest({url:"/api/notice/info",data:{id:this.noticeId},success:function(e){0==e.code?e.data?(t.detail=e.data,t.content=(0,r.default)(e.data.content),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):t.$util.redirectTo("/otherpages/notice/list/list",{},"redirectTo"):(t.$util.showToast({title:e.message}),setTimeout((function(){t.$util.redirectTo("/otherpages/notice/list/list",{},"redirectTo")}),2e3))},fail:function(e){t.$util.redirectTo("/otherpages/notice/list/list",{},"redirectTo"),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},onShow:function(){this.$langConfig.refresh()},onShareAppMessage:function(e){var t="[公告]"+this.detail.title,i="/otherpages/notice/detail/detail?notice_id="+this.noticeId;return{title:t,path:i,success:function(e){},fail:function(e){}}}};t.default=o},"1c27":function(e,t,i){"use strict";i.r(t);var n=i("11f4"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"7c49":function(e,t,i){"use strict";var n=i("8ebf"),r=i.n(n);r.a},8745:function(e,t,i){"use strict";(function(e){var n=i("4ea4");i("c975"),i("13d5"),i("4d63"),i("ac1f"),i("25f0"),i("466d"),i("5319"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("4a88")),a=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,o=/^<\/([-A-Za-z0-9_]+)[^>]*>/,s=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,c=g("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),l=g("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),d=g("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),u=g("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),f=g("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),h=g("script,style");function p(e,t){var i,n,r,p=[],g=e;p.last=function(){return this[this.length-1]};while(e){if(n=!0,p.last()&&h[p.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),(function(e,i){return i=i.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),t.chars&&t.chars(i),""})),b("",p.last());else if(0==e.indexOf("\x3c!--")?(i=e.indexOf("--\x3e"),i>=0&&(t.comment&&t.comment(e.substring(4,i)),e=e.substring(i+3),n=!1)):0==e.indexOf("</")?(r=e.match(o),r&&(e=e.substring(r[0].length),r[0].replace(o,b),n=!1)):0==e.indexOf("<")&&(r=e.match(a),r&&(e=e.substring(r[0].length),r[0].replace(a,m),n=!1)),n){i=e.indexOf("<");var v=i<0?e:e.substring(0,i);e=i<0?"":e.substring(i),t.chars&&t.chars(v)}if(e==g)throw"Parse Error: "+e;g=e}function m(e,i,n,r){if(i=i.toLowerCase(),l[i])while(p.last()&&d[p.last()])b("",p.last());if(u[i]&&p.last()==i&&b("",i),r=c[i]||!!r,r||p.push(i),t.start){var a=[];n.replace(s,(function(e,t){var i=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:f[t]?t:"";a.push({name:t,value:i,escaped:i.replace(/(^|[^\\])"/g,'$1\\"')})})),t.start&&t.start(i,a,r)}}function b(e,i){if(i){for(n=p.length-1;n>=0;n--)if(p[n]==i)break}else var n=0;if(n>=0){for(var r=p.length-1;r>=n;r--)t.end&&t.end(p[r]);p.length=n}}b()}function g(e){for(var t={},i=e.split(","),n=0;n<i.length;n++)t[i[n]]=!0;return t}function v(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function m(e){e=e.replace(/<!--[\s\S]*-->/gi,"");return e}function b(e){e=e.replace(/\\/g,"").replace(/<img/g,'<img style="width:100% !important;display:block;"');return e=e.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,(function(e,t){return'<img style="width:100% !important;display:block;" src="'+r.default.img(t)+'"/>'})),e}function w(e){e=e.replace(/style\s*=\s*["][^>]*;[^"]?/gi,(function(e,t){return e=e.replace(/[:](\s?)[\s\S]*/gi,(function(e,t){return e.replace(/"/g,"'")})),e}));return e}function x(e){return e.reduce((function(e,t){var i=t.value,n=t.name;return e[n]?e[n]=e[n]+" "+i:e[n]=i,e}),{})}function _(t){t=v(t),t=m(t),t=b(t),t=w(t);var i=[],n={node:"root",children:[]};return p(t,{start:function(e,t,r){var a={name:e};if(0!==t.length&&(a.attrs=x(t)),r){var o=i[0]||n;o.children||(o.children=[]),o.children.push(a)}else i.unshift(a)},end:function(t){var r=i.shift();if(r.name!==t&&e.error("invalid state: mismatch end tag"),0===i.length)n.children.push(r);else{var a=i[0];a.children||(a.children=[]),a.children.push(r)}},chars:function(e){var t={type:"text",text:e};if(0===i.length)n.children.push(t);else{var r=i[0];r.children||(r.children=[]),r.children.push(t)}},comment:function(e){var t={node:"comment",text:e},n=i[0];n.children||(n.children=[]),n.children.push(t)}}),n.children}var y=_;t.default=y}).call(this,i("5a52")["default"])},"8ebf":function(e,t,i){var n=i("da470");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("520658c9",n,!0,{sourceMap:!1,shadowMode:!1})},"96a5":function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={loadingCover:i("b1ae").default},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page",attrs:{"data-theme":e.themeStyle}},[i("v-uni-view",{staticClass:"notice-title"},[e._v(e._s(e.detail.title))]),i("v-uni-view",{staticClass:"notice-content"},[i("v-uni-rich-text",{attrs:{nodes:e.content}})],1),i("v-uni-view",{staticClass:"notice-meta"},[i("v-uni-text",{staticClass:"notice-time"},[e._v("发表时间: "+e._s(e.$util.timeStampTurnTime(e.detail.create_time)))])],1),i("loading-cover",{ref:"loadingCover"})],1)},a=[]},da470:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.page[data-v-bd6121e2]{width:100%;height:100%;padding:%?30?%;box-sizing:border-box;background-color:#fff}.notice-title[data-v-bd6121e2]{font-size:%?32?%;text-align:center}.notice-content[data-v-bd6121e2]{margin-top:%?20?%;word-break:break-all;font-size:%?28?%}.notice-meta[data-v-bd6121e2]{text-align:right;margin-top:%?20?%;color:#909399}.notice-meta .notice-time[data-v-bd6121e2]{font-size:%?24?%}',""]),e.exports=t},f975:function(e,t,i){"use strict";i.r(t);var n=i("96a5"),r=i("1c27");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("7c49");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"bd6121e2",null,!1,n["a"],o);t["default"]=c.exports}}]);