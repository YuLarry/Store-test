(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-verification-index-index"],{"1bb8":function(e,n,t){"use strict";var i=t("2031"),a=t.n(i);a.a},2031:function(e,n,t){var i=t("2f1c");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("4f06").default;a("6eb5f9a3",i,!0,{sourceMap:!1,shadowMode:!1})},"2d8a":function(e,n,t){"use strict";t.r(n);var i=t("be17"),a=t("7557");for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t("1bb8");var r,c=t("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"0e66d89a",null,!1,i["a"],r);n["default"]=s.exports},"2f1c":function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.container[data-v-0e66d89a]{width:100vw;height:100vh}.container .action-wrap[data-v-0e66d89a]{padding:%?100?% 0;background:#fff;position:relative}.container .action-wrap .record-wrap[data-v-0e66d89a]{position:absolute;top:%?30?%;right:%?30?%}.container .action-wrap .record-wrap .iconfont[data-v-0e66d89a]{font-size:%?24?%;margin-right:%?10?%}.container .action-wrap .sweep-code[data-v-0e66d89a]{width:%?400?%;height:%?400?%;box-shadow:0 8px 8px 0 rgba(0,0,0,.03),0 6px 3px 0 rgba(0,0,0,.02);border-radius:50%;margin:0 auto;text-align:center;line-height:%?400?%}.container .action-wrap .sweep-code .iconfont[data-v-0e66d89a]{color:#fff;font-size:%?150?%}.container .action-wrap .manual-input[data-v-0e66d89a]{width:70%;margin:auto}.container .action-wrap .manual-input .process-wrap[data-v-0e66d89a]{height:%?150?%;display:flex;padding-top:%?60?%}.container .action-wrap .manual-input .process-wrap .wrap[data-v-0e66d89a]{flex:1;text-align:center}.container .action-wrap .manual-input .process-wrap .wrap ._icon[data-v-0e66d89a]{width:%?60?%;height:%?60?%;background:#eee;border-radius:50%;margin:0 auto;color:#909399}.container .action-wrap .manual-input .process-wrap .wrap ._icon .iconfont[data-v-0e66d89a]{font-size:%?32?%}.container .action-wrap .manual-input .process-wrap .wrap ._text[data-v-0e66d89a]{font-size:%?24?%;margin-top:%?10?%;color:#909399}.container .action-wrap .manual-input ._input[data-v-0e66d89a]{height:%?80?%;border:1px solid #eee;border-radius:%?8?%;box-sizing:border-box;padding:%?20?%;font-size:%?28?%;text-align:center}.container .action-wrap .manual-input ._placeholder[data-v-0e66d89a]{font-size:%?28?%;text-align:center}.container .action-wrap .manual-input ._btn[data-v-0e66d89a]{margin-top:%?40?%;height:%?80?%;line-height:%?80?%}.container .arc-edge[data-v-0e66d89a]{width:100%;height:%?80?%;background:#fff;border-radius:%?400?%/%?40?%;\r\n  /*上下有弧度的边*/-webkit-transform:translateY(-50%);transform:translateY(-50%)}.container .action-type-wrap[data-v-0e66d89a]{width:70%;height:%?90?%;background:#fff;border-radius:%?90?%;display:flex;position:relative;box-shadow:0 6px 6px 0 rgba(0,0,0,.03),0 4px 2px 0 rgba(0,0,0,.04);margin:%?100?% auto}.container .action-type-wrap .action[data-v-0e66d89a]{flex:1;text-align:center;color:#303133}.container .action-type-wrap .action ._icon[data-v-0e66d89a]{line-height:25px;height:25px}.container .action-type-wrap .action ._text[data-v-0e66d89a]{font-size:%?24?%;line-height:1}.container .action-type-wrap .icontiaoxingmasaomiao[data-v-0e66d89a]{width:%?110?%;height:%?110?%;border-radius:50%;-webkit-transform:translateY(%?-10?%);transform:translateY(%?-10?%);box-shadow:0 8px 8px 0 rgba(0,0,0,.03),0 6px 3px 0 rgba(0,0,0,.02);color:#fff;text-align:center;line-height:%?110?%;font-size:%?32?%}',""]),e.exports=n},4262:function(e,n,t){"use strict";var i=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("245b")),o=t("9f38"),r={data:function(){return{operationType:"manualInput",verify_code:"",isFocus:!1}},components:{},onLoad:function(){},mixins:[a.default],onShow:function(){var e=this;this.$langConfig.refresh(),uni.getStorageSync("token")?this.checkIsVerifier():setTimeout((function(){e.$refs.login.open("/otherpages/verification/index/index")}))},methods:{focus:function(){this.isFocus=!this.isFocus},scanCode:function(){var e=this;if(this.$util.isWeiXin()){if("ios"==uni.getSystemInfoSync().platform)var n=uni.getStorageSync("initUrl");else n=location.href;this.$api.sendRequest({url:"/wechat/api/wechat/jssdkconfig",data:{url:n},success:function(n){if(0==n.code){var t=new o.Weixin;t.init(n.data),t.scanQRCode((function(e){e.resultStr&&(location.href=e.resultStr)}))}else e.$util.showToast({title:n.message})}})}},changeOperationType:function(e){"sweepCode"!=e||this.$util.isWeiXin()?this.operationType=e:this.$util.showToast({title:"H5端不支持扫码核销"})},checkIsVerifier:function(){var e=this;this.$api.sendRequest({url:"/api/verify/checkisverifier",success:function(n){n.data||(e.$util.showToast({title:"非核销员无此权限"}),setTimeout((function(){e.$util.redirectTo("/pages/member/index/index",{},"reLaunch")}),1e3)),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},confirm:function(){var e=this,n=/[\S]+/;if(!n.test(this.verify_code))return this.$util.showToast({title:"请输入核销码"}),!1;this.$api.sendRequest({url:"/api/verify/verifyInfo",data:{verify_code:this.verify_code},success:function(n){n.code>=0?e.$util.redirectTo("/otherpages/verification/detail/detail",{code:e.verify_code}):e.$util.showToast({title:n.message})}})}},watch:{storeToken:function(e,n){e&&this.checkIsVerifier()}},computed:{storeToken:function(){return this.$store.state.token}}};n.default=r},7557:function(e,n,t){"use strict";t.r(n);var i=t("4262"),a=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=a.a},9523:function(e,n){function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}e.exports=t},"9f38":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Weixin=void 0;var i=function(){var e=t("bc9d");this.init=function(n){e.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["chooseWXPay","openAddress","updateAppMessageShareData","updateTimelineShareData","scanQRCode"]})},this.pay=function(n,t){e.ready((function(){e.chooseWXPay({timestamp:n.timestamp,nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.paySign,success:function(e){"function"==typeof t&&t(e)}})}))},this.openAddress=function(n){e.ready((function(){e.openAddress({success:function(e){"function"==typeof n&&n(e)},fail:function(e){alert(JSON.stringify(e))}})}))},this.setShareData=function(n,t){e.ready((function(){e.updateAppMessageShareData({title:n.title||"",desc:n.desc||"",link:n.link||"",imgUrl:n.imgUrl||"",success:function(){"function"==typeof t&&t(res)}}),e.updateTimelineShareData({title:n.title||"",link:n.link||"",imgUrl:n.imgUrl||"",success:function(){"function"==typeof t&&t(res)}})}))},this.scanQRCode=function(n){e.ready((function(){e.scanQRCode({needResult:1,scanType:["qrCode"],success:function(e){"function"==typeof n&&n(e)}})}))}};n.Weixin=i},bc9d:function(e,n,t){(function(n){t("c975"),t("ac1f"),t("466d"),t("5319"),t("1276");var i=t("9523");!function(n,t){e.exports=t(n)}(window,(function(e,t){function a(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,r(t),(function(e){s(n,e,i)})):u(n,i)}function o(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){i&&i.trigger&&i.trigger(e),s(n,e,t)})):u(n,i||t)}function r(e){return(e=e||{}).appId=M.appId,e.verifyAppId=M.appId,e.verifySignType="sha1",e.verifyTimestamp=M.timestamp+"",e.verifyNonceStr=M.nonceStr,e.verifySignature=M.signature,e}function c(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function s(e,n,t){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=function(e,n){var t=e,i=h[t];i&&(t=i);var a="ok";if(n){var o=n.indexOf(":");"confirm"==(a=n.substring(o+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==t&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return t+":"+a}(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",M.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function d(e){if(e){for(var n=0,t=e.length;n<t;++n){var i=e[n],a=g[i];a&&(e[n]=a)}return e}}function u(e,t){if(!(!M.debug||t&&t.isInnerInvoke)){var i=h[e];i&&(e=i),t&&t._complete&&delete t._complete,n.log('"'+e+'",',t||"")}}function l(){return(new Date).getTime()}function p(n){_&&(e.WeixinJSBridge?n():m.addEventListener&&m.addEventListener("WeixinJSBridgeReady",n,!1))}if(!e.jWeixin){var f,g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var n in g)e[g[n]]=n;return e}(),m=e.document,v=m.title,w=navigator.userAgent.toLowerCase(),y=navigator.platform.toLowerCase(),S=!(!y.match("mac")&&!y.match("win")),x=-1!=w.indexOf("wxdebugger"),_=-1!=w.indexOf("micromessenger"),k=-1!=w.indexOf("android"),I=-1!=w.indexOf("iphone")||-1!=w.indexOf("ipad"),T=(B=w.match(/micromessenger\/(\d+\.\d+\.\d+)/)||w.match(/micromessenger\/(\d+\.\d+)/))?B[1]:"",b={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},C={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:I?1:k?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},M={},P={_completes:[]},A={state:0,data:{}};p((function(){b.initEndTime=l()}));var V=!1,O=[],L=(f={config:function(n){u("config",M=n);var t=!1!==M.check;p((function(){if(t)a(g.config,{verifyJsApiList:d(M.jsApiList)},function(){P._complete=function(e){b.preVerifyEndTime=l(),A.state=1,A.data=e},P.success=function(e){C.isPreVerifyOk=0},P.fail=function(e){P._fail?P._fail(e):A.state=-1};var e=P._completes;return e.push((function(){!function(e){if(!(S||x||M.debug||T<"6.0.2"||C.systemType<0)){var n=new Image;C.appId=M.appId,C.initTime=b.initEndTime-b.initStartTime,C.preVerifyTime=b.preVerifyEndTime-b.preVerifyStartTime,L.getNetworkType({isInnerInvoke:!0,success:function(e){C.networkType=e.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+C.version+"&o="+C.isPreVerifyOk+"&s="+C.systemType+"&c="+C.clientVersion+"&a="+C.appId+"&n="+C.networkType+"&i="+C.initTime+"&p="+C.preVerifyTime+"&u="+C.url;n.src=t}})}}()})),P.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();P._completes=[]},P}()),b.preVerifyStartTime=l();else{A.state=1;for(var e=P._completes,n=0,i=e.length;n<i;++n)e[n]();P._completes=[]}})),L.invoke||(L.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,r(t),i)},L.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})},ready:function(e){0!=A.state?e():(P._completes.push(e),!_&&M.debug&&e())},error:function(e){T<"6.0.2"||(-1==A.state?e(A.data):P._fail=e)},checkJsApi:function(e){a("checkJsApi",{jsApiList:d(e.jsApiList)},(e._complete=function(e){if(k){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var t in n){var i=h[t];i&&(n[i]=n[t],delete n[t])}return e}(e)},e))},onMenuShareTimeline:function(e){o(g.onMenuShareTimeline,{complete:function(){a("shareTimeline",{title:e.title||v,desc:e.title||v,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){o(g.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?a("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):a("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){o(g.onMenuShareQQ,{complete:function(){a("shareQQ",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){o(g.onMenuShareWeibo,{complete:function(){a("shareWeiboApp",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){o(g.onMenuShareQZone,{complete:function(){a("shareQZone",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){a("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){a("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){a("startRecord",{},e)},stopRecord:function(e){a("stopRecord",{},e)},onVoiceRecordEnd:function(e){o("onVoiceRecordEnd",e)},playVoice:function(e){a("playVoice",{localId:e.localId},e)},pauseVoice:function(e){a("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){a("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){o("onVoicePlayEnd",e)},uploadVoice:function(e){a("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){a("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){a("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){a("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(k){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){a(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){a("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){a("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===V?(V=!0,a("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(V=!1,0<O.length){var n=O.shift();wx.getLocalImgData(n)}},e))):O.push(e)},getNetworkType:function(e){a("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),a=n.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){a("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},i(f,"getLocation",(function(e){a(g.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),i(f,"hideOptionMenu",(function(e){a("hideOptionMenu",{},e)})),i(f,"showOptionMenu",(function(e){a("showOptionMenu",{},e)})),i(f,"closeWindow",(function(e){a("closeWindow",{},e=e||{})})),i(f,"hideMenuItems",(function(e){a("hideMenuItems",{menuList:e.menuList},e)})),i(f,"showMenuItems",(function(e){a("showMenuItems",{menuList:e.menuList},e)})),i(f,"hideAllNonBaseMenuItem",(function(e){a("hideAllNonBaseMenuItem",{},e)})),i(f,"showAllNonBaseMenuItem",(function(e){a("showAllNonBaseMenuItem",{},e)})),i(f,"scanQRCode",(function(e){a("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(I){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))})),i(f,"openAddress",(function(e){a(g.openAddress,{},(e._complete=function(e){var n;(n=e).postalCode=n.addressPostalCode,delete n.addressPostalCode,n.provinceName=n.proviceFirstStageName,delete n.proviceFirstStageName,n.cityName=n.addressCitySecondStageName,delete n.addressCitySecondStageName,n.countryName=n.addressCountiesThirdStageName,delete n.addressCountiesThirdStageName,n.detailInfo=n.addressDetailInfo,delete n.addressDetailInfo,e=n},e))})),i(f,"openProductSpecificView",(function(e){a(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),i(f,"addCard",(function(e){for(var n=e.cardList,t=[],i=0,o=n.length;i<o;++i){var r=n[i],c={card_id:r.cardId,card_ext:r.cardExt};t.push(c)}a(g.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var a=n[t];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=n,delete e.card_list}},e))})),i(f,"chooseCard",(function(e){a("chooseCard",{app_id:M.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),i(f,"openCard",(function(e){for(var n=e.cardList,t=[],i=0,o=n.length;i<o;++i){var r=n[i],c={card_id:r.cardId,code:r.code};t.push(c)}a(g.openCard,{card_list:t},e)})),i(f,"consumeAndShareCard",(function(e){a(g.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),i(f,"chooseWXPay",(function(e){a(g.chooseWXPay,c(e),e)})),i(f,"openEnterpriseRedPacket",(function(e){a(g.openEnterpriseRedPacket,c(e),e)})),i(f,"startSearchBeacons",(function(e){a(g.startSearchBeacons,{ticket:e.ticket},e)})),i(f,"stopSearchBeacons",(function(e){a(g.stopSearchBeacons,{},e)})),i(f,"onSearchBeacons",(function(e){o(g.onSearchBeacons,e)})),i(f,"openEnterpriseChat",(function(e){a("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),i(f,"launchMiniProgram",(function(e){a("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}(e.path),envVersion:e.envVersion},e)})),i(f,"miniProgram",{navigateBack:function(e){e=e||{},p((function(){a("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){p((function(){a("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){p((function(){a("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){p((function(){a("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){p((function(){a("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){p((function(){a("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){p((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),f),E=1,R={};return m.addEventListener("error",(function(e){if(!k){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=n["wx-id"];if(a||(a=E++,n["wx-id"]=a),R[a])return;R[a]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})}))}}}),!0),m.addEventListener("load",(function(e){if(!k){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(R[i]=!1)}}}),!0),t&&(e.wx=e.jWeixin=L),L}var B}))}).call(this,t("5a52")["default"])},be17:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i}));var i={nsLogin:t("61d0").default,loadingCover:t("b1ae").default},a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"container",attrs:{"data-theme":e.themeStyle}},[t("v-uni-view",{staticClass:"action-wrap"},[t("v-uni-view",{staticClass:"record-wrap color-base-text",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.$util.redirectTo("/otherpages/verification/list/list")}}},[t("v-uni-text",{staticClass:"iconfont iconjilu color-base-text"}),t("v-uni-text",[e._v("核销记录")])],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"sweepCode"==e.operationType,expression:"operationType == 'sweepCode'"}],staticClass:"sweep-code ns-gradient-otherpages-member-balance-balance-rechange",attrs:{"data-theme":e.themeStyle},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.scanCode.apply(void 0,arguments)}}},[t("v-uni-text",{staticClass:"iconfont iconsaoma"})],1),t("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"manualInput"==e.operationType,expression:"operationType == 'manualInput'"}],staticClass:"manual-input"},[t("v-uni-view",{staticClass:"process-wrap"},[t("v-uni-view",{staticClass:"wrap"},[t("v-uni-view",{staticClass:"_icon"},[t("v-uni-text",{staticClass:"iconfont iconshurutianxiebi color-base-text"})],1),t("v-uni-view",{staticClass:"_text"},[e._v("输入核销码")])],1),t("v-uni-view",[t("v-uni-view",[t("v-uni-text",{staticClass:"iconfont iconjiang-copy color-tip"})],1)],1),t("v-uni-view",{staticClass:"wrap"},[t("v-uni-view",{staticClass:"_icon"},[t("v-uni-text",{staticClass:"iconfont iconhexiao color-base-text"})],1),t("v-uni-view",{staticClass:"_text"},[e._v("核销")])],1)],1),t("v-uni-input",{ref:"input",staticClass:"_input",attrs:{type:"text",placeholder:"请输入核销码","placeholder-class":"_placeholder",focus:e.isFocus},model:{value:e.verify_code,callback:function(n){e.verify_code=n},expression:"verify_code"}}),t("v-uni-view",{staticClass:"_btn",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirm.apply(void 0,arguments)}}},[t("v-uni-button",{attrs:{type:"primary"}},[e._v("确认")])],1)],1)],1),t("v-uni-view",{staticClass:"arc-edge"}),t("v-uni-view",{staticClass:"action-type-wrap"},[t("v-uni-view",{staticClass:"action",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.changeOperationType("sweepCode")}}},[t("v-uni-view",{staticClass:"_icon"},[t("v-uni-text",{staticClass:"iconfont iconsaoma"})],1),t("v-uni-view",{staticClass:"_text"},[e._v("扫码核销")])],1),t("v-uni-view",{staticClass:"iconfont icontiaoxingmasaomiao ns-gradient-otherpages-member-balance-balance-rechange",attrs:{"data-theme":e.themeStyle}}),t("v-uni-view",{staticClass:"action",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.changeOperationType("manualInput")}}},[t("v-uni-view",{staticClass:"_icon"},[t("v-uni-text",{staticClass:"iconfont iconshuru"})],1),t("v-uni-view",{staticClass:"_text",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.focus.apply(void 0,arguments)}}},[e._v("手动输入")])],1)],1),t("ns-login",{ref:"login"}),t("loading-cover",{ref:"loadingCover"})],1)},o=[]}}]);