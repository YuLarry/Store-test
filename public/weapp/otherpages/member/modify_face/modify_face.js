(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/member/modify_face/modify_face"],{"1ad3":function(e,t,n){"use strict";(function(e){n("67ba");i(n("66fd"));var t=i(n("1bf7"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"1bf7":function(e,t,n){"use strict";n.r(t);var i=n("893e"),a=n("b3e0");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("c1d1");var r,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=c.exports},"4b36":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("b6ac"));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/img-cropping/cropping")]).then(function(){return resolve(n("a147"))}.bind(null,n)).catch(n.oe)},r={data:function(){return{memberImg:"",newImg:"",imgurl:""}},components:{imgCropping:o},mixins:[i.default],onShow:function(){e.getStorageSync("token")||this.$util.redirectTo("/otherpages/login/login/login",{back:"/otherpages/member/modify_face/modify_face"},"redirectTo"),this.$langConfig.refresh(),this.initGetHeading()},methods:{initGetHeading:function(){var e=this;this.$api.sendRequest({url:"/api/member/info",success:function(t){0==t.code?(e.memberImg=t.data.headimg,e.imgurl=t.data.headimg):e.$util.showToast({title:t.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},chooseImage:function(){this.$refs.imgCropping.fSelect()},myUpload:function(t){var n=this,i="h5",a="H5";i="weapp",a="weapp",e.request({url:this.$config.baseUrl+"/api/upload/headimgBase64",method:"POST",data:{app_type:i,app_type_name:a,images:t.base64},header:{"content-type":"application/x-www-form-urlencoded;application/json"},dataType:"json",responseType:"text",success:function(e){0==e.data.code&&(n.newImg=e.data.data.pic_path,n.imgurl=e.data.data.pic_path)},fail:function(){n.$util.showToast({title:"头像上传失败"})}})},previewImage:function(){e.previewImage({current:0,urls:this.images})},save:function(){var e=this;this.$api.sendRequest({url:"/api/member/modifyheadimg",data:{headimg:this.imgurl},success:function(t){0==t.code?(e.$util.showToast({title:"头像修改成功"}),setTimeout((function(){e.$util.redirectTo("/otherpages/member/info/info",{},"redirectTo")}),2e3)):e.$util.showToast({title:t.message})}})}}};t.default=r}).call(this,n("543d")["default"])},"7b27":function(e,t,n){},"893e":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"4c1d"))}},a=function(){var e=this,t=e.$createElement,n=(e._self._c,""==e.newImg&&e.memberImg?e.$util.img(e.memberImg):null),i=""!=e.newImg||e.memberImg?null:e.$util.getDefaultImage(),a=""!=e.newImg?e.$util.img(e.newImg):null;e._isMounted||(e.e0=function(t){e.memberImg=e.$util.getDefaultImage().default_headimg},e.e1=function(t){e.newImg=e.$util.getDefaultImage().default_headimg}),e.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:a}})},o=[]},b3e0:function(e,t,n){"use strict";n.r(t);var i=n("4b36"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},c1d1:function(e,t,n){"use strict";var i=n("7b27"),a=n.n(i);a.a}},[["1ad3","common/runtime","common/vendor"]]]);