(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register/register"],{"0215":function(e,t,n){"use strict";var i={uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"d380"))},nsShowToast:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(n.bind(null,"f505"))}},o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){return e.$util.goBack()})},r=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}))},3133:function(e,t,n){},"5c99":function(e,t,n){"use strict";n.r(t);var i=n("0215"),o=n("962a");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("a440");var a,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);t["default"]=c.exports},"962a":function(e,t,n){"use strict";n.r(t);var i=n("b524"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=o.a},a440:function(e,t,n){"use strict";var i=n("3133"),o=n.n(i);o.a},aa44:function(e,t,n){"use strict";(function(e){n("6b76");i(n("66fd"));var t=i(n("5c99"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},b524:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("18e3")),o=a(n("362a")),r=a(n("4c22"));function a(e){return e&&e.__esModule?e:{default:e}}var s=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("d380"))}.bind(null,n)).catch(n.oe)},c=function(){Promise.all([n.e("common/vendor"),n.e("components/ns-show-toast/ns-show-toast")]).then(function(){return resolve(n("f505"))}.bind(null,n)).catch(n.oe)},u={components:{uniPopup:s,nsShowToast:c},data:function(){return{allowRegister:!0,registerMode:"account",formData:{mobile:"",account:"",password:"",rePassword:"",vercode:"",dynacode:"",key:""},regisiterAgreement:{title:"",content:""},captcha:{id:"",img:""},isSub:!1,back:""}},mixins:[o.default,r.default],onLoad:function(t){if(t.back&&(this.back=t.back),this.getCaptcha(),e.getStorageSync("authInfo")){var n=e.getStorageSync("authInfo");n.authInfo&&(this.authInfo=n.authInfo),n.userInfo&&(this.userInfo=n.userInfo)}},onShow:function(){this.$langConfig.refresh(),this.getCode(),this.getRegisiterAggrement(),this.getRegisterConfig(),this.getUserInfo()},methods:{switchRegisterMode:function(){"mobile"==this.registerMode?-1!=this.registerConfig.type.indexOf("plain")&&(this.registerMode="account"):"account"==this.registerMode&&-1!=this.registerConfig.type.indexOf("mobile")&&(this.registerMode="mobile")},openPopup:function(){this.$refs.registerPopup.open()},toClose:function(){this.$refs.registerPopup.close()},getRegisiterAggrement:function(){var e=this;this.$api.sendRequest({url:"/api/register/aggrement",success:function(t){t.code>=0&&(e.regisiterAgreement=t.data)}})},getRegisterConfig:function(){var e=this;this.$api.sendRequest({url:"/api/register/config",success:function(t){t.code>=0&&(e.registerConfig=t.data.value,1!=e.registerConfig.is_enable&&e.$util.showToast({title:"平台未启用注册!",success:function(){setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"reLaunch")}),1500)}}))}})},getCaptcha:function(){var e=this;this.$api.sendRequest({url:"/api/captcha/captcha",data:{captcha_id:this.captcha.id},success:function(t){t.code>=0&&(e.captcha=t.data,e.captcha.img=e.captcha.img.replace(/\r\n/g,""))}})},register:function(){var t=this,n={username:this.formData.account.trim(),password:this.formData.password};if(""!=this.captcha.id&&(n.captcha_id=this.captcha.id,n.captcha_code=this.formData.vercode),Object.keys(this.authInfo).length&&(n[this.authInfo.auth_tag]=this.authInfo.auth_openid),""!=this.userInfo.avatarUrl&&(n.headimg=this.userInfo.avatarUrl),e.getStorageSync("source_member")&&(n.source_member=e.getStorageSync("source_member")),this.verify(n)){if(this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:"/api/register/username",data:n,success:function(n){n.code>=0?e.setStorage({key:"token",data:n.data.token,success:function(){e.removeStorageSync("loginLock"),e.removeStorageSync("unbound"),e.removeStorageSync("authInfo"),""!=t.back?t.$util.redirectTo(t.back,{},"reLaunch"):t.$util.redirectTo("/pages/member/index/index",{},"reLaunch")}}):(t.isSub=!1,t.getCaptcha(),t.$util.showToast({title:n.message}))},fail:function(e){t.isSub=!1,t.getCaptcha()}})}},verify:function(e){var t=[{name:"username",checkType:"required",errorMsg:"请输入账号"},{name:"password",checkType:"required",errorMsg:"请输入密码"}],n=this.registerConfig;if(n.pwd_len>0&&t.push({name:"password",checkType:"lengthMin",checkRule:n.pwd_len,errorMsg:"密码长度不能小于"+n.pwd_len+"位"}),""!=n.pwd_complexity){var o="密码需包含",r="";-1!=n.pwd_complexity.indexOf("number")&&(r+="(?=.*?[0-9])",o+="数字"),-1!=n.pwd_complexity.indexOf("letter")&&(r+="(?=.*?[a-z])",o+="、小写字母"),-1!=n.pwd_complexity.indexOf("upper_case")&&(r+="(?=.*?[A-Z])",o+="、大写字母"),-1!=n.pwd_complexity.indexOf("symbol")&&(r+="(?=.*?[#?!@$%^&*-])",o+="、特殊字符"),t.push({name:"password",checkType:"reg",checkRule:r,errorMsg:o})}if(this.formData.password!=this.formData.rePassword)return this.$util.showToast({title:"两次密码不一致"}),!1;""!=this.captcha.id&&t.push({name:"captcha_code",checkType:"required",errorMsg:"请输入验证码"});var a=i.default.check(e,t);return!!a||(this.$util.showToast({title:i.default.error}),!1)},toLogin:function(){this.back?this.$util.redirectTo("/pages/login/login/login",{back:this.back}):this.$util.redirectTo("/pages/login/login/login")}}};t.default=u}).call(this,n("543d")["default"])}},[["aa44","common/runtime","common/vendor"]]]);