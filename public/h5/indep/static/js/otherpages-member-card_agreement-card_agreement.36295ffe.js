(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-member-card_agreement-card_agreement"],{"10dd":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page",attrs:{"data-theme":e.themeStyle}},[n("v-uni-view",{staticClass:"agreement-title"},[e._v(e._s(e.title))]),n("v-uni-view",{staticClass:"agreement-content"},[n("v-uni-rich-text",{attrs:{nodes:e.content}})],1)],1)},i=[]},"5db2":function(e,t,n){"use strict";n.r(t);var r=n("7efd"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},"6f22":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.page[data-v-ac844a16]{width:100%;height:100%;padding:%?30?%;box-sizing:border-box;background-color:#fff}.agreement-title[data-v-ac844a16]{font-size:%?32?%;text-align:center}.agreement-content[data-v-ac844a16]{margin-top:%?20?%;word-break:break-all;font-size:%?28?%}',""]),e.exports=t},"7efd":function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("8745")),i=r(n("245b")),s={data:function(){return{title:"",content:""}},mixins:[i.default],onLoad:function(){this.getAgreement()},onShow:function(){this.$langConfig.refresh()},methods:{getAgreement:function(){var e=this;this.$api.sendRequest({url:"/supermember/api/membercard/agreement",success:function(t){t.data&&0==t.code&&(e.title=t.data.title,e.content=(0,a.default)(t.data.content),uni.setNavigationBarTitle({title:e.title}))}})}},onBackPress:function(e){return"navigateBack"!==e.from&&(this.$util.redirectTo("/otherpages/member/card_buy/card_buy",{},"redirectTo"),!0)}};t.default=s},8745:function(e,t,n){"use strict";(function(e){var r=n("4ea4");n("c975"),n("13d5"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("4a88")),i=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,s=/^<\/([-A-Za-z0-9_]+)[^>]*>/,c=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,o=m("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),l=m("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),u=m("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),d=m("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),f=m("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),h=m("script,style");function p(e,t){var n,r,a,p=[],m=e;p.last=function(){return this[this.length-1]};while(e){if(r=!0,p.last()&&h[p.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),(function(e,n){return n=n.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),t.chars&&t.chars(n),""})),b("",p.last());else if(0==e.indexOf("\x3c!--")?(n=e.indexOf("--\x3e"),n>=0&&(t.comment&&t.comment(e.substring(4,n)),e=e.substring(n+3),r=!1)):0==e.indexOf("</")?(a=e.match(s),a&&(e=e.substring(a[0].length),a[0].replace(s,b),r=!1)):0==e.indexOf("<")&&(a=e.match(i),a&&(e=e.substring(a[0].length),a[0].replace(i,v),r=!1)),r){n=e.indexOf("<");var g=n<0?e:e.substring(0,n);e=n<0?"":e.substring(n),t.chars&&t.chars(g)}if(e==m)throw"Parse Error: "+e;m=e}function v(e,n,r,a){if(n=n.toLowerCase(),l[n])while(p.last()&&u[p.last()])b("",p.last());if(d[n]&&p.last()==n&&b("",n),a=o[n]||!!a,a||p.push(n),t.start){var i=[];r.replace(c,(function(e,t){var n=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:f[t]?t:"";i.push({name:t,value:n,escaped:n.replace(/(^|[^\\])"/g,'$1\\"')})})),t.start&&t.start(n,i,a)}}function b(e,n){if(n){for(r=p.length-1;r>=0;r--)if(p[r]==n)break}else var r=0;if(r>=0){for(var a=p.length-1;a>=r;a--)t.end&&t.end(p[a]);p.length=r}}b()}function m(e){for(var t={},n=e.split(","),r=0;r<n.length;r++)t[n[r]]=!0;return t}function g(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function v(e){e=e.replace(/<!--[\s\S]*-->/gi,"");return e}function b(e){e=e.replace(/\\/g,"").replace(/<img/g,'<img style="width:100% !important;display:block;"');return e=e.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi,(function(e,t){return'<img style="width:100% !important;display:block;" src="'+a.default.img(t)+'"/>'})),e}function w(e){e=e.replace(/style\s*=\s*["][^>]*;[^"]?/gi,(function(e,t){return e=e.replace(/[:](\s?)[\s\S]*/gi,(function(e,t){return e.replace(/"/g,"'")})),e}));return e}function x(e){return e.reduce((function(e,t){var n=t.value,r=t.name;return e[r]?e[r]=e[r]+" "+n:e[r]=n,e}),{})}function y(t){t=g(t),t=v(t),t=b(t),t=w(t);var n=[],r={node:"root",children:[]};return p(t,{start:function(e,t,a){var i={name:e};if(0!==t.length&&(i.attrs=x(t)),a){var s=n[0]||r;s.children||(s.children=[]),s.children.push(i)}else n.unshift(i)},end:function(t){var a=n.shift();if(a.name!==t&&e.error("invalid state: mismatch end tag"),0===n.length)r.children.push(a);else{var i=n[0];i.children||(i.children=[]),i.children.push(a)}},chars:function(e){var t={type:"text",text:e};if(0===n.length)r.children.push(t);else{var a=n[0];a.children||(a.children=[]),a.children.push(t)}},comment:function(e){var t={node:"comment",text:e},r=n[0];r.children||(r.children=[]),r.children.push(t)}}),r.children}var _=y;t.default=_}).call(this,n("5a52")["default"])},a07b:function(e,t,n){"use strict";var r=n("e519"),a=n.n(r);a.a},d255:function(e,t,n){"use strict";n.r(t);var r=n("10dd"),a=n("5db2");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("a07b");var s,c=n("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"ac844a16",null,!1,r["a"],s);t["default"]=o.exports},e519:function(e,t,n){var r=n("6f22");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("136077f0",r,!0,{sourceMap:!1,shadowMode:!1})}}]);