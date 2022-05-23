(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/bind-mobile/bind-mobile"],{"0b3f":function(e,t,a){"use strict";var n=a("4062"),i=a.n(n);i.a},4062:function(e,t,a){},"5e2f":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("b056"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){a.e("components/uni-popup/uni-popup").then(function(){return resolve(a("d7b6"))}.bind(null,a)).catch(a.oe)},c=function(){Promise.all([a.e("common/vendor"),a.e("components/register-reward/register-reward")]).then(function(){return resolve(a("8496"))}.bind(null,a)).catch(a.oe)},r={name:"bind-mobile",components:{uniPopup:o,registerReward:c},mixins:[n.default],data:function(){return{captchaConfig:0,captcha:{id:"",img:""},dynacodeData:{seconds:120,timer:null,codeText:"获取动态码",isSend:!1},formData:{key:"",mobile:"",vercode:"",dynacode:""},isSub:!1}},created:function(){this.getCaptchaConfig()},methods:{open:function(){this.$refs.bindMobile.open()},cancel:function(){this.$refs.bindMobile.close()},confirm:function(){var t=this,a=e.getStorageSync("authInfo"),n={mobile:this.formData.mobile,key:this.formData.key,code:this.formData.dynacode};if(""!=this.captcha.id&&(n.captcha_id=this.captcha.id,n.captcha_code=this.formData.vercode),Object.keys(a).length&&Object.assign(n,a),a.avatarUrl&&(n.headimg=a.avatarUrl),a.nickName&&(n.nickname=a.nickName),e.getStorageSync("source_member")&&(n.source_member=e.getStorageSync("source_member")),this.verify(n)){if(this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:"/api/tripartite/mobile",data:n,success:function(a){a.code>=0?(e.setStorage({key:"token",data:a.data.token,success:function(){e.removeStorageSync("loginLock"),e.removeStorageSync("unbound"),e.removeStorageSync("authInfo")}}),t.$store.commit("setToken",a.data.token),t.$store.dispatch("getCartNumber"),t.$refs.bindMobile.close(),a.data.is_register&&t.$refs.registerReward.getReward()&&t.$refs.registerReward.open()):(t.isSub=!1,t.getCaptcha(),t.$util.showToast({title:a.message}))},fail:function(e){t.isSub=!1,t.getCaptcha()}})}},verify:function(e){var t=[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"}];1==this.captchaConfig&&""!=this.captcha.id&&t.push({name:"captcha_code",checkType:"required",errorMsg:this.$lang("captchaPlaceholder")}),t.push({name:"code",checkType:"required",errorMsg:this.$lang("dynacodePlaceholder")});var a=n.default.check(e,t);return!!a||(this.$util.showToast({title:n.default.error}),!1)},getCaptchaConfig:function(){var e=this;this.$api.sendRequest({url:"/api/config/getCaptchaConfig",success:function(t){t.code>=0&&(e.captchaConfig=t.data.data.value.shop_reception_login,e.captchaConfig&&e.getCaptcha())}})},getCaptcha:function(){var e=this;this.$api.sendRequest({url:"/api/captcha/captcha",data:{captcha_id:this.captcha.id},success:function(t){t.code>=0&&(e.captcha=t.data,e.captcha.img=e.captcha.img.replace(/\r\n/g,""))}})},sendMobileCode:function(){var e=this;if(120==this.dynacodeData.seconds){var t={mobile:this.formData.mobile,captcha_id:this.captcha.id,captcha_code:this.formData.vercode},a=[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"}];1==this.captchaConfig&&a.push({name:"captcha_code",checkType:"required",errorMsg:"请输入验证码"});var i=n.default.check(t,a);i?this.dynacodeData.isSend||(this.dynacodeData.isSend=!0,120==this.dynacodeData.seconds&&(this.dynacodeData.timer=setInterval((function(){e.dynacodeData.seconds--,e.dynacodeData.codeText=e.dynacodeData.seconds+"s后可重新获取"}),1e3)),this.$api.sendRequest({url:"/api/tripartite/mobileCode",data:t,success:function(t){e.dynacodeData.isSend=!1,t.code>=0?e.formData.key=t.data.key:(e.$util.showToast({title:t.message}),thi.refreshDynacodeData())},fail:function(){e.$util.showToast({title:"request:fail"}),e.dynacodeData.isSend=!1}})):this.$util.showToast({title:n.default.error})}},mobileAuthLogin:function(t){var a=this;if("getPhoneNumber:ok"==t.detail.errMsg){var n=e.getStorageSync("authInfo"),i={iv:t.detail.iv,encryptedData:t.detail.encryptedData};if(Object.keys(n).length&&Object.assign(i,n),n.avatarUrl&&(i.headimg=n.avatarUrl),n.nickName&&(i.nickname=n.nickName),e.getStorageSync("source_member")&&(i.source_member=e.getStorageSync("source_member")),this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:"/api/tripartite/mobileauth",data:i,success:function(t){t.code>=0?(e.setStorage({key:"token",data:t.data.token,success:function(){e.removeStorageSync("loginLock"),e.removeStorageSync("unbound"),e.removeStorageSync("authInfo"),a.$store.dispatch("getCartNumber")}}),a.$store.commit("setToken",t.data.token),a.$refs.bindMobile.close(),t.data.is_register&&a.$refs.registerReward.getReward()&&a.$refs.registerReward.open()):(a.isSub=!1,a.$util.showToast({title:t.message}))},fail:function(e){a.isSub=!1,a.$util.showToast({title:"request:fail"})}})}},refreshDynacodeData:function(){this.getCaptcha(),clearInterval(this.dynacodeData.timer),this.dynacodeData={seconds:120,timer:null,codeText:"获取动态码",isSend:!1}}},watch:{"dynacodeData.seconds":{handler:function(e,t){0==e&&this.refreshDynacodeData()},immediate:!0,deep:!0}}};t.default=r}).call(this,a("543d")["default"])},"60e2":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={uniPopup:function(){return a.e("components/uni-popup/uni-popup").then(a.bind(null,"d7b6"))},registerReward:function(){return Promise.all([a.e("common/vendor"),a.e("components/register-reward/register-reward")]).then(a.bind(null,"8496"))}},i=function(){var e=this,t=e.$createElement,a=(e._self._c,e.$util.img("/upload/uniapp/member/login.png"));e.$mp.data=Object.assign({},{$root:{g0:a}})},o=[]},"67ba9":function(e,t,a){},"7ec6":function(e,t,a){"use strict";a.r(t);var n=a("5e2f"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},c2b5:function(e,t,a){"use strict";a.r(t);var n=a("60e2"),i=a("7ec6");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("0b3f"),a("ed9c");var c,r=a("f0c5"),s=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"70dff12e",null,!1,n["a"],c);t["default"]=s.exports},ed9c:function(e,t,a){"use strict";var n=a("67ba9"),i=a.n(n);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/bind-mobile/bind-mobile-create-component',
    {
        'components/bind-mobile/bind-mobile-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c2b5"))
        })
    },
    [['components/bind-mobile/bind-mobile-create-component']]
]);
