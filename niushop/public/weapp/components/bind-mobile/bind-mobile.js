(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/bind-mobile/bind-mobile"],{1036:function(e,t,a){"use strict";a.r(t);var n=a(1037),i=a(1039);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a(1041),a(1043);var o,c=a(14),s=Object(c["default"])(i["default"],n["render"],n["staticRenderFns"],!1,null,"c037542c",null,!1,n["components"],o);s.options.__file="components/bind-mobile/bind-mobile.vue",t["default"]=s.exports},1037:function(e,t,a){"use strict";a.r(t);var n=a(1038);a.d(t,"render",(function(){return n["render"]})),a.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]})),a.d(t,"recyclableRender",(function(){return n["recyclableRender"]})),a.d(t,"components",(function(){return n["components"]}))},1038:function(e,t,a){"use strict";var n;a.r(t),a.d(t,"render",(function(){return i})),a.d(t,"staticRenderFns",(function(){return o})),a.d(t,"recyclableRender",(function(){return r})),a.d(t,"components",(function(){return n}));try{n={uniPopup:function(){return a.e("components/uni-popup/uni-popup").then(a.bind(null,772))},registerReward:function(){return a.e("components/register-reward/register-reward").then(a.bind(null,999))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,t=e.$createElement,a=(e._self._c,e.$util.img("public/uniapp/member/login.png"));e.$mp.data=Object.assign({},{$root:{g0:a}})},r=!1,o=[];i._withStripped=!0},1039:function(e,t,a){"use strict";a.r(t);var n=a(1040),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},1040:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(262));function i(e){return e&&e.__esModule?e:{default:e}}var r=function(){a.e("components/uni-popup/uni-popup").then(function(){return resolve(a(772))}.bind(null,a)).catch(a.oe)},o=function(){a.e("components/register-reward/register-reward").then(function(){return resolve(a(999))}.bind(null,a)).catch(a.oe)},c={name:"bind-mobile",components:{uniPopup:r,registerReward:o},mixins:[n.default],data:function(){return{captchaConfig:0,captcha:{id:"",img:""},dynacodeData:{seconds:120,timer:null,codeText:"获取动态码",isSend:!1},formData:{key:"",mobile:"",vercode:"",dynacode:""},isSub:!1}},created:function(){this.getCaptchaConfig()},methods:{open:function(){this.$refs.bindMobile.open()},cancel:function(){this.$refs.bindMobile.close()},confirm:function(){var t=this,a=e.getStorageSync("authInfo"),n={mobile:this.formData.mobile,key:this.formData.key,code:this.formData.dynacode};if(""!=this.captcha.id&&(n.captcha_id=this.captcha.id,n.captcha_code=this.formData.vercode),a&&Object.assign(n,a),a.avatarUrl&&(n.headimg=a.avatarUrl),a.nickName&&(n.nickname=a.nickName),e.getStorageSync("source_member")&&(n.source_member=e.getStorageSync("source_member")),this.verify(n)){if(this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:"/api/tripartite/mobile",data:n,success:function(a){a.code>=0?(e.setStorage({key:"token",data:a.data.token,success:function(){t.$store.commit("setToken",a.data.token),t.$store.dispatch("getCartNumber")}}),t.$refs.bindMobile.close(),a.data.is_register&&t.$refs.registerReward.getReward()&&t.$refs.registerReward.open()):(t.isSub=!1,t.getCaptcha(),t.$util.showToast({title:a.message}))},fail:function(e){t.isSub=!1,t.getCaptcha()}})}},verify:function(e){var t=[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"}];1==this.captchaConfig&&""!=this.captcha.id&&t.push({name:"captcha_code",checkType:"required",errorMsg:this.$lang("captchaPlaceholder")}),t.push({name:"code",checkType:"required",errorMsg:this.$lang("dynacodePlaceholder")});var a=n.default.check(e,t);return!!a||(this.$util.showToast({title:n.default.error}),!1)},getCaptchaConfig:function(){var e=this;this.$api.sendRequest({url:"/api/config/getCaptchaConfig",success:function(t){t.code>=0&&(e.captchaConfig=t.data.data.value.shop_reception_login,e.captchaConfig&&e.getCaptcha())}})},getCaptcha:function(){var e=this;this.$api.sendRequest({url:"/api/captcha/captcha",data:{captcha_id:this.captcha.id},success:function(t){t.code>=0&&(e.captcha=t.data,e.captcha.img=e.captcha.img.replace(/\r\n/g,""))}})},sendMobileCode:function(){var e=this;if(120==this.dynacodeData.seconds){var t={mobile:this.formData.mobile,captcha_id:this.captcha.id,captcha_code:this.formData.vercode},a=[{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"}];1==this.captchaConfig&&a.push({name:"captcha_code",checkType:"required",errorMsg:"请输入验证码"});var i=n.default.check(t,a);i?this.dynacodeData.isSend||(this.dynacodeData.isSend=!0,120==this.dynacodeData.seconds&&(this.dynacodeData.timer=setInterval((function(){e.dynacodeData.seconds--,e.dynacodeData.codeText=e.dynacodeData.seconds+"s后可重新获取"}),1e3)),this.$api.sendRequest({url:"/api/tripartite/mobileCode",data:t,success:function(t){e.dynacodeData.isSend=!1,t.code>=0?e.formData.key=t.data.key:(e.$util.showToast({title:t.message}),thi.refreshDynacodeData())},fail:function(){e.$util.showToast({title:"request:fail"}),e.dynacodeData.isSend=!1}})):this.$util.showToast({title:n.default.error})}},mobileAuthLogin:function(t){var a=this;if("getPhoneNumber:ok"==t.detail.errMsg){var n=e.getStorageSync("authInfo"),i={iv:t.detail.iv,encryptedData:t.detail.encryptedData};if(n&&Object.assign(i,n),n.avatarUrl&&(i.headimg=n.avatarUrl),n.nickName&&(i.nickname=n.nickName),e.getStorageSync("source_member")&&(i.source_member=e.getStorageSync("source_member")),this.isSub)return;this.isSub=!0,this.$api.sendRequest({url:"/api/tripartite/mobileauth",data:i,success:function(t){t.code>=0?(e.setStorage({key:"token",data:t.data.token,success:function(){a.$store.dispatch("getCartNumber"),a.$store.commit("setToken",t.data.token)}}),a.$refs.bindMobile.close(),t.data.is_register&&a.$refs.registerReward.getReward()&&a.$refs.registerReward.open()):(a.isSub=!1,a.$util.showToast({title:t.message}))},fail:function(e){a.isSub=!1,a.$util.showToast({title:"request:fail"})}})}},refreshDynacodeData:function(){this.getCaptcha(),clearInterval(this.dynacodeData.timer),this.dynacodeData={seconds:120,timer:null,codeText:"获取动态码",isSend:!1}}},watch:{"dynacodeData.seconds":{handler:function(e,t){0==e&&this.refreshDynacodeData()},immediate:!0,deep:!0}}};t.default=c}).call(this,a(1)["default"])},1041:function(e,t,a){"use strict";a.r(t);var n=a(1042),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},1042:function(e,t,a){},1043:function(e,t,a){"use strict";a.r(t);var n=a(1044),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},1044:function(e,t,a){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/bind-mobile/bind-mobile.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/bind-mobile/bind-mobile-create-component',
    {
        'components/bind-mobile/bind-mobile-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(1036))
        })
    },
    [['components/bind-mobile/bind-mobile-create-component']]
]);
