(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_tool/member/modify_face"],{238:function(e,n,t){"use strict";(function(e){t(5);o(t(4));var n=o(t(239));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},239:function(e,n,t){"use strict";t.r(n);var o=t(240),i=t(242);for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t(244);var a,u=t(14),c=Object(u["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],a);c.options.__file="pages_tool/member/modify_face.vue",n["default"]=c.exports},240:function(e,n,t){"use strict";t.r(n);var o=t(241);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},241:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return i})),t.d(n,"staticRenderFns",(function(){return a})),t.d(n,"recyclableRender",(function(){return r})),t.d(n,"components",(function(){return o}));try{o={loadingCover:function(){return t.e("components/loading-cover/loading-cover").then(t.bind(null,714))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,n=e.$createElement,t=(e._self._c,""==e.newImg&&e.memberImg?e.$util.img(e.memberImg):null),o=""!=e.newImg||e.memberImg?null:e.$util.getDefaultImage(),i=""!=e.newImg?e.$util.img(e.newImg):null;e._isMounted||(e.e0=function(n){e.memberImg=e.$util.getDefaultImage().head},e.e1=function(n){e.newImg=e.$util.getDefaultImage().head}),e.$mp.data=Object.assign({},{$root:{g0:t,g1:o,g2:i}})},r=!1,a=[];i._withStripped=!0},242:function(e,n,t){"use strict";t.r(n);var o=t(243),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},243:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){Promise.all([t.e("common/vendor"),t.e("components/img-cropping/cropping")]).then(function(){return resolve(t(921))}.bind(null,t)).catch(t.oe)},i={data:function(){return{memberImg:"",newImg:"",imgurl:""}},components:{imgCropping:o},onShow:function(){e.getStorageSync("token")||this.$util.redirectTo("/pages_tool/login/login",{back:"/pages_tool/member/modify_face"},"redirectTo"),this.initGetHeading()},methods:{initGetHeading:function(){var e=this;this.$api.sendRequest({url:"/api/member/info",success:function(n){0==n.code?(e.memberImg=n.data.headimg,e.imgurl=n.data.headimg):e.$util.showToast({title:n.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(n){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},chooseImage:function(){this.$refs.imgCropping.fSelect()},myUpload:function(n){var t=this,o="h5",i="H5";o="weapp",i="weapp",e.request({url:this.$config.baseUrl+"/api/upload/headimgBase64",method:"POST",data:{app_type:o,app_type_name:i,images:n.base64},header:{"content-type":"application/x-www-form-urlencoded;application/json"},dataType:"json",responseType:"text",success:function(e){0==e.data.code&&(t.newImg=e.data.data.pic_path,t.imgurl=e.data.data.pic_path)},fail:function(){t.$util.showToast({title:"头像上传失败"})}})},previewImage:function(){e.previewImage({current:0,urls:this.images})},save:function(){var e=this;this.$api.sendRequest({url:"/api/member/modifyheadimg",data:{headimg:this.imgurl},success:function(n){0==n.code?(e.$util.showToast({title:"头像修改成功"}),setTimeout((function(){e.$util.redirectTo("/pages_tool/member/info",{},"redirectTo")}),2e3)):e.$util.showToast({title:n.message})}})}}};n.default=i}).call(this,t(1)["default"])},244:function(e,n,t){"use strict";t.r(n);var o=t(245),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},245:function(e,n,t){}},[[238,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages_tool/member/modify_face.js.map