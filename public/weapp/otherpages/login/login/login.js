(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/login/login/login"],{4468:function(e,t,i){},"56bd":function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return a}));var a={loadingCover:function(){return i.e("components/loading-cover/loading-cover").then(i.bind(null,"b1ae"))},registerReward:function(){return Promise.all([i.e("common/vendor"),i.e("components/register-reward/register-reward")]).then(i.bind(null,"dd38"))}},o=function(){var e=this,t=e.$createElement,i=(e._self._c,"mobile"==e.loginMode&&-1!=e.registerConfig.login.indexOf("username")),a="account"==e.loginMode&&-1!=e.registerConfig.login.indexOf("mobile");e.$mp.data=Object.assign({},{$root:{g0:i,g1:a}})},n=[]},"6d08":function(e,t,i){"use strict";i.r(t);var a=i("56bd"),o=i("c25e");for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("d6bf"),i("6f63");var r,c=i("f0c5"),s=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"48c862e0",null,!1,a["a"],r);t["default"]=s.exports},"6f63":function(e,t,i){"use strict";var a=i("cda3"),o=i.n(a);o.a},"9ab8":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(i("96de")),o=r(i("ad61")),n=r(i("245b"));function r(e){return e&&e.__esModule?e:{default:e}}var c=function(){Promise.all([i.e("common/vendor"),i.e("components/register-reward/register-reward")]).then(function(){return resolve(i("dd38"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{loginMode:"mobile",formData:{mobile:"",account:"",password:"",vercode:"",dynacode:"",key:""},captcha:{id:"",img:""},isSub:!1,back:"",redirect:"redirectTo",openidIsExits:!1,isBind:!1,dynacodeData:{seconds:120,timer:null,codeText:"获取动态码",isSend:!1},registerConfig:{register:"",login:""},captchaConfig:1}},mixins:[o.default,n.default],components:{registerReward:c},onLoad:function(e){e.back&&(this.back=e.back),this.getRegisterConfig(),this.getCaptchaConfig()},onShow:function(){var e=this;this.$langConfig.refresh(),this.getCode((function(t){e.$api.sendRequest({url:"/api/login/openidisexits",data:t,success:function(t){t.code>=0&&t.data>0&&(e.isBind=!0)}})}))},onReady:function(){this.$refs.loadingCover&&this.$refs.loadingCover.hide()},methods:{getCaptchaConfig:function(){var e=this;this.$api.sendRequest({url:"/api/config/getCaptchaConfig",success:function(t){t.code>=0&&(e.captchaConfig=t.data.data.value.shop_reception_login,1==e.captchaConfig&&e.getCaptcha())}})},getRegisterConfig:function(){var e=this;this.$api.sendRequest({url:"/api/register/config",success:function(t){t.code>=0&&(e.registerConfig=t.data.value,-1!=e.registerConfig.login.indexOf("mobile")?e.loginMode="mobile":e.loginMode="account",e.$refs.loadingCover&&e.$refs.loadingCover.hide())}})},switchLoginMode:function(){this.loginMode="mobile"==this.loginMode?"account":"mobile"},getCaptcha:function(){var e=this;this.$api.sendRequest({url:"/api/captcha/captcha",data:{captcha_id:this.captcha.id},success:function(t){t.code>=0&&(e.captcha=t.data,e.captcha.img=e.captcha.img.replace(/\r\n/g,""))}})},toRegister:function(){this.back?this.$util.redirectTo("/otherpages/login/register/register",{back:this.back}):this.$util.redirectTo("/otherpages/login/register/register")},forgetPassword:function(){this.back?this.$util.redirectTo("/otherpages/login/find/find",{back:this.back}):this.$util.redirectTo("/otherpages/login/find/find")},login:function(){var t=this;if("account"==this.loginMode){var i="/api/login/login";a={username:this.formData.account,password:this.formData.password}}else{i="/api/login/mobile";var a={mobile:this.formData.mobile,key:this.formData.key,code:this.formData.dynacode}}if(""!=this.captcha.id&&(a.captcha_id=this.captcha.id,a.captcha_code=this.formData.vercode),Object.keys(this.authInfo).length&&Object.assign(a,this.authInfo),this.authInfo.avatarUrl&&(a.headimg=this.authInfo.avatarUrl),this.authInfo.nickName&&(a.nickname=this.authInfo.nickName),e.getStorageSync("source_member")&&(a.source_member=e.getStorageSync("source_member")),this.verify(a)){if(this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:i,data:a,success:function(i){if(i.code>=0){var a=i.data.can_receive_registergift;e.setStorage({key:"token",data:i.data.token,success:function(){e.removeStorageSync("loginLock"),e.removeStorageSync("unbound"),e.removeStorageSync("authInfo"),1==a?(t.$util.showToast({title:"登录成功"}),t.$refs.registerReward.open()):""!=t.back?t.$util.redirectTo(decodeURIComponent(t.back),{},"reLaunch"):t.$util.redirectTo("/pages/member/index/index",{},"reLaunch")}})}else t.isSub=!1,t.getCaptcha(),t.$util.showToast({title:i.message})},fail:function(e){t.isSub=!1,t.getCaptcha()}})}},verify:function(e){var t=[];"mobile"==this.loginMode&&(t=[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"}],1==this.captchaConfig&&""!=this.captcha.id&&t.push({name:"captcha_code",checkType:"required",errorMsg:this.$lang("captchaPlaceholder")}),t.push({name:"code",checkType:"required",errorMsg:this.$lang("dynacodePlaceholder")})),"account"==this.loginMode&&(t=[{name:"username",checkType:"required",errorMsg:this.$lang("accountPlaceholder")},{name:"password",checkType:"required",errorMsg:this.$lang("passwordPlaceholder")}],1==this.captchaConfig&&""!=this.captcha.id&&t.push({name:"captcha_code",checkType:"required",errorMsg:this.$lang("captchaPlaceholder")}));var i=a.default.check(e,t);return!!i||(this.$util.showToast({title:a.default.error}),!1)},authLogin:function(){var t=this;this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/api/login/auth",data:this.authInfo,success:function(i){if(i.code>=0){var a=i.data.can_receive_registergift;e.setStorage({key:"token",data:i.data.token,success:function(){e.removeStorageSync("loginLock"),e.removeStorageSync("unbound"),e.removeStorageSync("authInfo"),1==a?t.$refs.registerReward.open():""!=t.back?t.$util.redirectTo(decodeURIComponent(t.back),{},t.redirect):t.$util.redirectTo("/pages/member/index/index",{},t.redirect)}})}else t.isSub=!1,t.$util.showToast({title:i.message})},fail:function(e){t.isSub=!1,t.$util.showToast({title:"request:fail"})}}))},mobileAuthLogin:function(t){var i=this;if("getPhoneNumber:ok"==t.detail.errMsg){var a={iv:t.detail.iv,encryptedData:t.detail.encryptedData};if(Object.keys(this.authInfo).length&&Object.assign(a,this.authInfo),this.authInfo.avatarUrl&&(a.headimg=this.authInfo.avatarUrl),this.authInfo.nickName&&(a.nickname=this.authInfo.nickName),e.getStorageSync("source_member")&&(a.source_member=e.getStorageSync("source_member")),this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:"/api/tripartite/mobileauth",data:a,success:function(t){if(t.code>=0){var a=t.data.can_receive_registergift;e.setStorage({key:"token",data:t.data.token,success:function(){e.removeStorageSync("loginLock"),e.removeStorageSync("unbound"),e.removeStorageSync("authInfo"),1==a?i.$refs.registerReward.open():""!=i.back?i.$util.redirectTo(decodeURIComponent(i.back),{},i.redirect):i.$util.redirectTo("/pages/member/index/index",{},i.redirect)}})}else i.isSub=!1,i.$util.showToast({title:t.message})},fail:function(e){i.isSub=!1,i.$util.showToast({title:"request:fail"})}})}},sendMobileCode:function(){var e=this;if(120==this.dynacodeData.seconds){var t={mobile:this.formData.mobile,captcha_id:this.captcha.id,captcha_code:this.formData.vercode},i=[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"}];1==this.captchaConfig&&i.push({name:"captcha_code",checkType:"required",errorMsg:"请输入验证码"});var o=a.default.check(t,i);o?this.dynacodeData.isSend||(this.dynacodeData.isSend=!0,120==this.dynacodeData.seconds&&(this.dynacodeData.timer=setInterval((function(){e.dynacodeData.seconds--,e.dynacodeData.codeText=e.dynacodeData.seconds+"s后可重新获取"}),1e3)),this.$api.sendRequest({url:"/api/login/mobileCode",data:t,success:function(t){t.code>=0?e.formData.key=t.data.key:(e.dynacodeData.isSend=!1,e.$util.showToast({title:t.message}))},fail:function(){e.$util.showToast({title:"request:fail"}),e.dynacodeData.isSend=!1}})):this.$util.showToast({title:a.default.error})}},checkOpenidIsExits:function(){var t=this;Object.keys(this.authInfo).length&&(e.setStorage({key:"authInfo",data:this.authInfo}),this.$api.sendRequest({url:"/api/login/openidisexits",data:this.authInfo,success:function(e){e.code>=0&&e.data>0&&(t.isBind=!0)}}))}},watch:{"dynacodeData.seconds":{handler:function(e,t){0==e&&(clearInterval(this.dynacodeData.timer),this.dynacodeData={seconds:120,timer:null,codeText:"获取动态码",isSend:!1})},immediate:!0,deep:!0}}};t.default=s}).call(this,i("543d")["default"])},c25e:function(e,t,i){"use strict";i.r(t);var a=i("9ab8"),o=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=o.a},c972:function(e,t,i){"use strict";(function(e){i("4b62");a(i("66fd"));var t=a(i("6d08"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(t.default)}).call(this,i("543d")["createPage"])},cda3:function(e,t,i){},d6bf:function(e,t,i){"use strict";var a=i("4468"),o=i.n(a);o.a}},[["c972","common/runtime","common/vendor"]]]);