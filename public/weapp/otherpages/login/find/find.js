(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/login/find/find"],{"0601":function(e,t,n){},"439a":function(e,t,n){"use strict";n.r(t);var a=n("d2c0"),o=n("8989");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("a737");var i,s=n("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);t["default"]=c.exports},8989:function(e,t,n){"use strict";n.r(t);var a=n("9626"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a},9626:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("a34a")),o=i(n("50ee")),r=i(n("c409"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,a,o,r,i){try{var s=e[r](i),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(a,o)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function i(e){s(r,a,o,i,c,"next",e)}function c(e){s(r,a,o,i,c,"throw",e)}i(void 0)}))}}var u=function(){n.e("components/myp-one/myp-one").then(function(){return resolve(n("4e94"))}.bind(null,n)).catch(n.oe)},d={components:{mypOne:u},data:function(){return{findMode:"mobile",codeText:"重新获取",seconds:120,timer:null,formData:{mobile:"",password:"",rePassword:"",dynacode:"",captcha:""},stepShow:0,isSend:!1,captcha:{id:"",img:""},registerConfig:{}}},onLoad:function(){this.getCaptcha()},onShow:function(){this.$langConfig.refresh(),this.getRegisterConfig()},mixins:[r.default],methods:{input:function(e){4==e.length&&(this.formData.dynacode=e,this.stepShow+=1)},navigateBack:function(){this.stepShow>0?this.stepShow-=1:this.$util.redirectTo("/pages/login/login/login","","","redirectTo")},nextStep:function(){var e=this;return c(a.default.mark((function t(){var n,r,i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=[{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"},{name:"captcha",checkType:"required",errorMsg:e.$lang("captchaPlaceholder")}],r=o.default.check(e.formData,n),!r){t.next=12;break}return e.findMode="mobile",t.next=6,e.$api.sendRequest({url:"/api/member/checkmobile",data:{mobile:e.formData.mobile},async:!1});case 6:if(i=t.sent,0!=i.code){t.next=10;break}return e.$util.showToast({title:"该手机号未注册"}),t.abrupt("return",!1);case 10:t.next=14;break;case 12:return e.$util.showToast({title:o.default.error}),t.abrupt("return",!1);case 14:e.sendDynaCode();case 15:case"end":return t.stop()}}),t)})))()},vertify:function(){var e=this.registerConfig,t=[{name:"password",checkType:"required",errorMsg:"请输入密码"}];if(e.pwd_len>0&&t.push({name:"password",checkType:"lengthMin",checkRule:e.pwd_len,errorMsg:"密码长度不能小于"+e.pwd_len+"位"}),""!=e.pwd_complexity){var n="密码需包含",a="";-1!=e.pwd_complexity.indexOf("number")&&(a+="(?=.*?[0-9])",n+="数字"),-1!=e.pwd_complexity.indexOf("letter")&&(a+="(?=.*?[a-z])",n+="、小写字母"),-1!=e.pwd_complexity.indexOf("upper_case")&&(a+="(?=.*?[A-Z])",n+="、大写字母"),-1!=e.pwd_complexity.indexOf("symbol")&&(a+="(?=.*?[#?!@$%^&*-])",n+="、特殊字符"),t.push({name:"password",checkType:"reg",checkRule:a,errorMsg:n})}var r=o.default.check(this.formData,t);return r?this.formData.password==this.formData.rePassword||(this.$util.showToast({title:"两次密码不一致"}),!1):(this.$util.showToast({title:o.default.error}),!1)},getCaptcha:function(){var e=this;this.$api.sendRequest({url:"/api/captcha/captcha",data:{captcha_id:this.captcha.id},success:function(t){t.code>=0&&(e.captcha=t.data,e.captcha.img=e.captcha.img.replace(/\r\n/g,""))}})},sendDynaCode:function(){var t=this;return c(a.default.mark((function n(){var o,r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!=t.formData.captcha.length){n.next=3;break}return t.$util.showToast({title:t.$lang("captchaPlaceholder")}),n.abrupt("return");case 3:if(!t.isSend){n.next=5;break}return n.abrupt("return");case 5:t.isSend=!0,r={captcha_id:t.captcha.id,captcha_code:t.formData.captcha},r[t.findMode]=t.formData.mobile,o="/api/findpassword/mobilecode",t.$api.sendRequest({url:o,data:r,success:function(n){var a=n.data;a.key?(120==t.seconds&&null==t.timer&&(t.timer=setInterval((function(){t.seconds--,t.codeText="重新获取("+t.seconds+"s)"}),1e3)),e.setStorageSync("forgot_password_token",a.key),t.stepShow+=1):(t.$util.showToast({title:n.message}),t.isSend=!1,t.getCaptcha())},fail:function(e){t.isSend=!1,t.getCaptcha()}});case 10:case"end":return n.stop()}}),n)})))()},save:function(){var t=this;if(this.vertify()){var n,a={code:this.formData.dynacode,key:e.getStorageSync("forgot_password_token"),password:this.formData.password};a[this.findMode]=this.formData.mobile,n="/api/findpassword/mobile",this.$api.sendRequest({url:n,data:a,success:function(n){t.$util.showToast({title:n.message}),0==n.code?setTimeout((function(){e.removeStorage({key:"forgot_password_token"}),t.$util.redirectTo("/pages/login/login/login",{},"redirectTo")}),1e3):t.stepShow-=1}})}},getRegisterConfig:function(){var e=this;this.$api.sendRequest({url:"/api/register/config",success:function(t){t.code>=0&&(e.registerConfig=t.data.value)}})}},watch:{seconds:function(e){0==e&&(this.seconds=120,this.codeText="重新获取",this.isSend=!1,clearInterval(this.timer))}}};t.default=d}).call(this,n("543d")["default"])},a737:function(e,t,n){"use strict";var a=n("0601"),o=n.n(a);o.a},d053:function(e,t,n){"use strict";(function(e){n("34b0");a(n("66fd"));var t=a(n("439a"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},d2c0:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={mypOne:function(){return n.e("components/myp-one/myp-one").then(n.bind(null,"4e94"))}},o=function(){var e=this,t=e.$createElement,n=(e._self._c,0==e.stepShow?e.$lang("accountPlaceholder"):null),a=0==e.stepShow?e.$lang("captchaPlaceholder"):null,o=0==e.stepShow?e.$lang("next"):null,r=2==e.stepShow?e.$lang("passwordPlaceholder"):null,i=2==e.stepShow?e.$lang("rePasswordPlaceholder"):null,s=2==e.stepShow?e.$lang("save"):null;e.$mp.data=Object.assign({},{$root:{m0:n,m1:a,m2:o,m3:r,m4:i,m5:s}})},r=[]}},[["d053","common/runtime","common/vendor"]]]);