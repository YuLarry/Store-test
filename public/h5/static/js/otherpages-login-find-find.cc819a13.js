(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-login-find-find"],{"046f":function(t,e,a){"use strict";a.r(e);var i=a("84a4"),n=a("617e");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("dfaf");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"f72750c6",null,!1,i["a"],r);e["default"]=c.exports},"0e40":function(t,e,a){"use strict";a.r(e);var i=a("f9a2"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"44a6":function(t,e,a){"use strict";a.r(e);var i=a("5401"),n=a("0e40");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("e095");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"19f600d0",null,!1,i["a"],r);e["default"]=c.exports},"4cf7":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */uni-page-body[data-v-19f600d0]{background:#fff!important;overflow:hidden}.captcha[data-v-19f600d0]{width:%?170?%;height:%?50?%}.find-form[data-v-19f600d0]{padding:%?100?% %?80?% 0}.find-form .form-input[data-v-19f600d0]{margin-top:%?60?%;height:%?60?%;border-bottom:%?2?% solid #eee}.find-form .form-input uni-input[data-v-19f600d0]{padding:0;font-size:%?28?%}.find-form .find-btn[data-v-19f600d0]{margin:%?374?% 0 0;-webkit-border-radius:%?40?%;border-radius:%?40?%;color:#fff}.find-form .find-btn[disabled][data-v-19f600d0]{background-color:#f7f7f7!important}.forget-section[data-v-19f600d0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?10?%;height:%?70?%;line-height:%?70?%}.align-type[data-v-19f600d0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.header-wrap[data-v-19f600d0]{width:80%;height:100%;margin:calc(%?120?% + 44px) auto 0;background-repeat:no-repeat;background-size:contain;background-position:bottom;position:relative}.header-wrap .title[data-v-19f600d0]{font-size:%?50?%;font-weight:700}.iconclose[data-v-19f600d0]{font-size:%?52?%;position:fixed;left:%?24?%;top:%?72?%;z-index:9;color:#000}.placeholder-class[data-v-19f600d0]{color:#bfbfbf}body.?%PAGE?%[data-v-19f600d0]{background:#fff!important}',""]),t.exports=e},"4ef6":function(t,e,a){var i=a("8d73");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("adbfea60",i,!0,{sourceMap:!1,shadowMode:!1})},5401:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={mypOne:a("046f").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"find",attrs:{"data-theme":t.themeStyle}},[a("v-uni-view",{staticClass:"iconfont iconclose",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateBack()}}}),a("v-uni-view",{staticClass:"header-wrap"},[0==t.stepShow?[a("v-uni-view",{staticClass:"title"},[t._v("请输入手机号")]),a("v-uni-view",[a("v-uni-text",{staticClass:"color-tip"},[t._v("请确认您的账号已绑定此手机号")])],1)]:t._e(),1==t.stepShow?[a("v-uni-view",{staticClass:"title"},[t._v("请输入验证码")]),a("v-uni-view",[a("v-uni-text",{staticClass:"color-tip"},[t._v("已将验证码发送至手机号："+t._s(t.formData.mobile))])],1)]:t._e(),2==t.stepShow?[a("v-uni-view",{staticClass:"title"},[t._v("请设置新的密码")]),a("v-uni-view",[a("v-uni-text",{staticClass:"color-tip"},[t._v("建议您的新密码以简单好记为标准")])],1)]:t._e()],2),a("v-uni-view",{staticClass:"find-form"},[0==t.stepShow?[a("v-uni-view",{staticClass:"form-input"},[a("v-uni-input",{staticClass:"uni-input",attrs:{"placeholder-class":"placeholder-class",type:"text",maxlength:"17",placeholder:t.$lang("accountPlaceholder")},model:{value:t.formData.mobile,callback:function(e){t.$set(t.formData,"mobile",e)},expression:"formData.mobile"}})],1),a("v-uni-view",{staticClass:"form-input align-type"},[a("v-uni-input",{staticClass:"uni-input info-content",attrs:{"placeholder-class":"placeholder-class",type:"number",maxlength:"4",placeholder:t.$lang("captchaPlaceholder")},model:{value:t.formData.captcha,callback:function(e){t.$set(t.formData,"captcha",e)},expression:"formData.captcha"}}),a("v-uni-image",{staticClass:"captcha",attrs:{src:t.captcha.img},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCaptcha.apply(void 0,arguments)}}})],1),a("v-uni-button",{staticClass:"find-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nextStep()}}},[t._v(t._s(t.$lang("next")))])]:t._e(),1==t.stepShow?[a("myp-one",{ref:"input",attrs:{maxlength:4,"auto-focus":!0},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.input.apply(void 0,arguments)}}}),a("v-uni-button",{staticClass:"find-btn",attrs:{type:"primary",disabled:t.isSend},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendDynaCode.apply(void 0,arguments)}}},[t._v(t._s(t.codeText))])]:t._e(),2==t.stepShow?[a("v-uni-view",{staticClass:"form-input"},[a("v-uni-input",{staticClass:"uni-input",attrs:{"placeholder-class":"placeholder-class",type:"text",maxlength:"30",password:"true",placeholder:t.$lang("passwordPlaceholder")},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),a("v-uni-view",{staticClass:"form-input"},[a("v-uni-input",{staticClass:"uni-input",attrs:{"placeholder-class":"placeholder-class",type:"text",maxlength:"30",password:"true",placeholder:t.$lang("rePasswordPlaceholder")},model:{value:t.formData.rePassword,callback:function(e){t.$set(t.formData,"rePassword",e)},expression:"formData.rePassword"}})],1),a("v-uni-button",{staticClass:"find-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v(t._s(t.$lang("save")))])]:t._e()],2)],1)},o=[]},"617e":function(t,e,a){"use strict";a.r(e);var i=a("f1bf"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"84a4":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"code-box"},[a("v-uni-view",{staticClass:"flex-box"},[a("v-uni-input",{staticClass:"hide-input",attrs:{value:t.inputValue,type:"number",focus:t.autoFocus,maxlength:t.maxlength},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getVal.apply(void 0,arguments)}}}),t._l(t.ranges,(function(e,i){return[a("v-uni-view",{key:i+"_0",class:["item",{active:t.codeIndex===e,middle:"middle"===t.type,bottom:"bottom"===t.type,box:"box"===t.type}]},["middle"!==t.type?a("v-uni-view",{staticClass:"line"}):t._e(),"middle"===t.type&&t.codeIndex<=e?a("v-uni-view",{staticClass:"bottom-line"}):t._e(),t.isPwd&&t.codeArr.length>=e?[a("v-uni-text",{staticClass:"dot"},[t._v("●")])]:[a("v-uni-text",{staticClass:"number"},[t._v(t._s(t.codeArr[i]?t.codeArr[i]:""))])]],2)]}))],2)],1)},o=[]},"8d73":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@-webkit-keyframes twinkling-data-v-f72750c6{0%{opacity:.2}50%{opacity:.5}100%{opacity:.2}}@keyframes twinkling-data-v-f72750c6{0%{opacity:.2}50%{opacity:.5}100%{opacity:.2}}.code-box[data-v-f72750c6]{text-align:center}.flex-box[data-v-f72750c6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;position:relative}.flex-box .hide-input[data-v-f72750c6]{position:absolute;top:0;left:-100%;width:200%;height:100%;text-align:left;z-index:9;opacity:1}.flex-box .item[data-v-f72750c6]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-right:%?18?%;font-size:%?70?%;font-weight:700;color:#333;line-height:%?100?%}.flex-box .item[data-v-f72750c6]::before{content:"";padding-top:100%;display:block}.flex-box .item[data-v-f72750c6]:last-child{margin-right:0}.flex-box .middle[data-v-f72750c6]{border:none}.flex-box .box[data-v-f72750c6]{-webkit-box-sizing:border-box;box-sizing:border-box;border:%?2?% solid #ccc;border-width:%?2?% 0 %?2?% %?2?%;margin-right:0}.flex-box .box[data-v-f72750c6]:first-of-type{-webkit-border-top-left-radius:%?8?%;border-top-left-radius:%?8?%;-webkit-border-bottom-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.flex-box .box[data-v-f72750c6]:last-child{border-right:%?2?% solid #ccc;-webkit-border-top-right-radius:%?8?%;border-top-right-radius:%?8?%;-webkit-border-bottom-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.flex-box .bottom[data-v-f72750c6]{-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #ddd}.flex-box .active[data-v-f72750c6]{border-color:#ddd}.flex-box .active .line[data-v-f72750c6]{display:block}.flex-box .line[data-v-f72750c6]{display:none;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:%?2?%;height:%?40?%;background:#333;-webkit-animation:twinkling-data-v-f72750c6 1s infinite ease;animation:twinkling-data-v-f72750c6 1s infinite ease}.flex-box .dot[data-v-f72750c6],\r\n.flex-box .number[data-v-f72750c6]{line-height:%?40?%;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.flex-box .bottom-line[data-v-f72750c6]{height:4px;background:#000;width:80%;position:absolute;-webkit-border-radius:2px;border-radius:2px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}',""]),t.exports=e},"9f86":function(t,e,a){var i=a("4cf7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("f7a233be",i,!0,{sourceMap:!1,shadowMode:!1})},dfaf:function(t,e,a){"use strict";var i=a("4ef6"),n=a.n(i);n.a},e095:function(t,e,a){"use strict";var i=a("9f86"),n=a.n(i);n.a},f1bf:function(t,e,a){"use strict";a("a15b"),a("a9e3"),a("ac1f"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"mypOneInput",props:{value:{type:String,default:""},maxlength:{type:Number,default:4},autoFocus:{type:Boolean,default:!1},isPwd:{type:Boolean,default:!1},type:{type:String,default:"bottom"}},watch:{maxlength:{immediate:!0,handler:function(t){this.ranges=6===t?[1,2,3,4,5,6]:[1,2,3,4]}},value:{immediate:!0,handler:function(t){t!==this.inputValue&&(this.inputValue=t,this.toMakeAndCheck(t))}}},data:function(){return{inputValue:"",codeIndex:1,codeArr:[],ranges:[1,2,3,4]}},methods:{getVal:function(t){var e=t.detail.value;this.inputValue=e,this.$emit("input",e),this.toMakeAndCheck(e)},toMakeAndCheck:function(t){var e=t.split("");this.codeIndex=e.length+1,this.codeArr=e,this.codeIndex>Number(this.maxlength)&&this.$emit("finish",this.codeArr.join(""))},set:function(t){this.inputValue=t,this.toMakeAndCheck(t)},clear:function(){this.inputValue="",this.codeArr=[],this.codeIndex=1}}};e.default=i},f9a2:function(t,e,a){"use strict";var i=a("4ea4");a("c975"),a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),o=i(a("d5e1")),r=i(a("ccd8")),s=i(a("046f")),c={components:{mypOne:s.default},data:function(){return{findMode:"mobile",codeText:"重新获取",seconds:120,timer:null,formData:{mobile:"",password:"",rePassword:"",dynacode:"",captcha:""},stepShow:0,isSend:!1,captcha:{id:"",img:""},registerConfig:{}}},onLoad:function(){this.getCaptcha()},onShow:function(){this.$langConfig.refresh(),this.getRegisterConfig()},mixins:[r.default],methods:{input:function(t){4==t.length&&(this.formData.dynacode=t,this.stepShow+=1)},navigateBack:function(){this.stepShow>0?this.stepShow-=1:this.$util.redirectTo("/pages/login/login/login","","","redirectTo")},nextStep:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=[{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"},{name:"captcha",checkType:"required",errorMsg:t.$lang("captchaPlaceholder")}],i=o.default.check(t.formData,a),!i){e.next=12;break}return t.findMode="mobile",e.next=6,t.$api.sendRequest({url:"/api/member/checkmobile",data:{mobile:t.formData.mobile},async:!1});case 6:if(n=e.sent,0!=n.code){e.next=10;break}return t.$util.showToast({title:"该手机号未注册"}),e.abrupt("return",!1);case 10:e.next=14;break;case 12:return t.$util.showToast({title:o.default.error}),e.abrupt("return",!1);case 14:t.sendDynaCode();case 15:case"end":return e.stop()}}),e)})))()},vertify:function(){var t=this.registerConfig,e=[{name:"password",checkType:"required",errorMsg:"请输入密码"}];if(t.pwd_len>0&&e.push({name:"password",checkType:"lengthMin",checkRule:t.pwd_len,errorMsg:"密码长度不能小于"+t.pwd_len+"位"}),""!=t.pwd_complexity){var a="密码需包含",i="";-1!=t.pwd_complexity.indexOf("number")&&(i+="(?=.*?[0-9])",a+="数字"),-1!=t.pwd_complexity.indexOf("letter")&&(i+="(?=.*?[a-z])",a+="、小写字母"),-1!=t.pwd_complexity.indexOf("upper_case")&&(i+="(?=.*?[A-Z])",a+="、大写字母"),-1!=t.pwd_complexity.indexOf("symbol")&&(i+="(?=.*?[#?!@$%^&*-])",a+="、特殊字符"),e.push({name:"password",checkType:"reg",checkRule:i,errorMsg:a})}var n=o.default.check(this.formData,e);return n?this.formData.password==this.formData.rePassword||(this.$util.showToast({title:"两次密码不一致"}),!1):(this.$util.showToast({title:o.default.error}),!1)},getCaptcha:function(){var t=this;this.$api.sendRequest({url:"/api/captcha/captcha",data:{captcha_id:this.captcha.id},success:function(e){e.code>=0&&(t.captcha=e.data,t.captcha.img=t.captcha.img.replace(/\r\n/g,""))}})},sendDynaCode:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!=t.formData.captcha.length){e.next=3;break}return t.$util.showToast({title:t.$lang("captchaPlaceholder")}),e.abrupt("return");case 3:if(!t.isSend){e.next=5;break}return e.abrupt("return");case 5:t.isSend=!0,i={captcha_id:t.captcha.id,captcha_code:t.formData.captcha},i[t.findMode]=t.formData.mobile,a="/api/findpassword/mobilecode",t.$api.sendRequest({url:a,data:i,success:function(e){var a=e.data;a.key?(120==t.seconds&&null==t.timer&&(t.timer=setInterval((function(){t.seconds--,t.codeText="重新获取("+t.seconds+"s)"}),1e3)),uni.setStorageSync("forgot_password_token",a.key),t.stepShow+=1):(t.$util.showToast({title:e.message}),t.isSend=!1,t.getCaptcha())},fail:function(e){t.isSend=!1,t.getCaptcha()}});case 10:case"end":return e.stop()}}),e)})))()},save:function(){var t=this;if(this.vertify()){var e,a={code:this.formData.dynacode,key:uni.getStorageSync("forgot_password_token"),password:this.formData.password};a[this.findMode]=this.formData.mobile,e="/api/findpassword/mobile",this.$api.sendRequest({url:e,data:a,success:function(e){t.$util.showToast({title:e.message}),0==e.code?setTimeout((function(){uni.removeStorage({key:"forgot_password_token"}),t.$util.redirectTo("/pages/login/login/login",{},"redirectTo")}),1e3):t.stepShow-=1}})}},getRegisterConfig:function(){var t=this;this.$api.sendRequest({url:"/api/register/config",success:function(e){e.code>=0&&(t.registerConfig=e.data.value)}})}},watch:{seconds:function(t){0==t&&(this.seconds=120,this.codeText="重新获取",this.isSend=!1,clearInterval(this.timer))}}};e.default=c}}]);