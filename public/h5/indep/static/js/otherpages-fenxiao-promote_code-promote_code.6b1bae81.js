(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-fenxiao-promote_code-promote_code"],{"0f15":function(e,n,i){"use strict";var t=i("2cdc"),o=i.n(t);o.a},"2cdc":function(e,n,i){var t=i("db60");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var o=i("4f06").default;o("40089923",t,!0,{sourceMap:!1,shadowMode:!1})},"2e2f":function(e,n,i){"use strict";i.r(n);var t=i("64f9"),o=i("8328");for(var a in o)"default"!==a&&function(e){i.d(n,e,(function(){return o[e]}))}(a);i("0f15");var r,c=i("f0c5"),s=Object(c["a"])(o["default"],t["b"],t["c"],!1,null,"7a0c9082",null,!1,t["a"],r);n["default"]=s.exports},"5df5":function(e,n,i){"use strict";var t=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i("9f38"),a=t(i("245b")),r=t(i("2d2c")),c={data:function(){return{poster:{},fenxiaoInfo:{},posterIndex:0}},components:{uniPopup:r.default},mixins:[a.default],methods:{getPoster:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/fenxiao/poster",data:{page:"/pages/index/index/index",qrcode_param:JSON.stringify({})},success:function(n){e.$refs.loadingCover&&e.$refs.loadingCover.hide(),n.code>=0?e.poster=n.data:e.$util.showToast({title:"海报生成失败"})},fail:function(n){e.$refs.loadingCover&&e.$refs.loadingCover.hide(),e.$util.showToast({title:"海报生成失败"})}})},getIndex:function(e){this.posterIndex=e.detail.current},save:function(){},getFenxiaoDetail:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/fenxiao/detail",success:function(n){n.data?(e.fenxiaoInfo=n.data,e.getPoster(),e.setShareData()):e.$util.redirectTo("/otherpages/fenxiao/apply/apply",{},"redirectTo")}})},setShareData:function(){var e=this;this.$util.isWeiXin()&&this.$api.sendRequest({url:"/wechat/api/wechat/share",data:{url:window.location.href},success:function(n){if(0==n.code){var i=new o.Weixin;i.init(n.data.jssdk_config);var t=n.data.share_config,a=e.$config.h5Domain+"/pages/index/index/index";e.fenxiaoInfo.member_id&&(a+="?source_member="+e.fenxiaoInfo.member_id),i.setShareData({title:"快来加入我的团队吧，一起得佣金哦",desc:t.qrcode_param_1+"\r\n"+t.qrcode_param_2+"\r\n收藏热度：★★★★★",link:a,imgUrl:e.$util.img(e.fenxiaoInfo.headimg)})}}})},closeDialog:function(){this.$refs.popupDialog.close()}},onLoad:function(){var e=this;if(!this.addonIsExit.fenxiao)return this.$util.showToast({title:"商家未开启分销",mask:!0,duration:2e3}),void setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh(),uni.getStorageSync("token")?this.getFenxiaoDetail():setTimeout((function(){e.$refs.login.open("/otherpages/fenxiao/promote_code/promote_code")}))},onShareAppMessage:function(e){var n="/pages/index/index/index";return this.fenxiaoInfo.member_id&&(n+="?source_member="+this.fenxiaoInfo.member_id),{title:"快来加入我的团队吧，一起得佣金哦",path:n,success:function(e){},fail:function(e){}}},watch:{storeToken:function(e,n){e&&this.getFenxiaoDetail()}},computed:{storeToken:function(){return this.$store.state.token}}};n.default=c},"64f9":function(e,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return t}));var t={uniPopup:i("2d2c").default,nsLogin:i("61d0").default,loadingCover:i("b1ae").default},o=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-uni-view",{staticClass:"container",attrs:{"data-theme":e.themeStyle}},[i("v-uni-swiper",{staticClass:"swiper",on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.getIndex.apply(void 0,arguments)}}},e._l(e.poster,(function(n,t){return i("v-uni-swiper-item",{key:t},[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-view",{staticClass:"poster-wrap"},[i("v-uni-image",{attrs:{src:e.$util.img(n),mode:"widthFix","show-menu-by-longpress":!0}})],1)],1)],1)})),1),i("v-uni-view",{staticClass:"tips"},[e._v("长按识别图中二维码")]),i("uni-popup",{ref:"popupDialog",attrs:{custom:!0,"mask-click":!1}},[i("v-uni-view",{staticClass:"dialog-popup"},[i("v-uni-view",{staticClass:"title"},[e._v("提示")]),i("v-uni-view",{staticClass:"message"},[e._v("您拒绝了保存图片到相册的授权请求，无法保存图片到相册，如需正常使用，请授权之后再进行操作。")]),i("v-uni-view",{staticClass:"action-wrap"},[i("v-uni-view",{on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.closeDialog.apply(void 0,arguments)}}},[e._v("取消")]),i("v-uni-view",[i("v-uni-button",{attrs:{type:"default","open-type":"openSetting","hover-class":"none"},on:{opensetting:function(n){arguments[0]=n=e.$handleEvent(n),e.closeDialog.apply(void 0,arguments)}}},[e._v("立即授权")])],1)],1)],1)],1),i("ns-login",{ref:"login"}),i("loading-cover",{ref:"loadingCover"})],1)},a=[]},8328:function(e,n,i){"use strict";i.r(n);var t=i("5df5"),o=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(n,e,(function(){return t[e]}))}(a);n["default"]=o.a},9523:function(e,n){function i(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}e.exports=i},"9f38":function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Weixin=void 0;var t=function(){var e=i("bc9d");this.init=function(n){e.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["chooseWXPay","openAddress","updateAppMessageShareData","updateTimelineShareData","scanQRCode"]})},this.pay=function(n,i){e.ready((function(){e.chooseWXPay({timestamp:n.timestamp,nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.paySign,success:function(e){"function"==typeof i&&i(e)}})}))},this.openAddress=function(n){e.ready((function(){e.openAddress({success:function(e){"function"==typeof n&&n(e)},fail:function(e){alert(JSON.stringify(e))}})}))},this.setShareData=function(n,i){e.ready((function(){e.updateAppMessageShareData({title:n.title||"",desc:n.desc||"",link:n.link||"",imgUrl:n.imgUrl||"",success:function(){"function"==typeof i&&i(res)}}),e.updateTimelineShareData({title:n.title||"",link:n.link||"",imgUrl:n.imgUrl||"",success:function(){"function"==typeof i&&i(res)}})}))},this.scanQRCode=function(n){e.ready((function(){e.scanQRCode({needResult:1,scanType:["qrCode"],success:function(e){"function"==typeof n&&n(e)}})}))}};n.Weixin=t},bc9d:function(e,n,i){(function(n){i("c975"),i("ac1f"),i("466d"),i("5319"),i("1276");var t=i("9523");!function(n,i){e.exports=i(n)}(window,(function(e,i){function o(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,r(i),(function(e){s(n,e,t)})):u(n,t)}function a(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){t&&t.trigger&&t.trigger(e),s(n,e,i)})):u(n,t||i)}function r(e){return(e=e||{}).appId=C.appId,e.verifyAppId=C.appId,e.verifySignType="sha1",e.verifyTimestamp=C.timestamp+"",e.verifyNonceStr=C.nonceStr,e.verifySignature=C.signature,e}function c(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function s(e,n,i){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=m[i];t&&(i=t);var o="ok";if(n){var a=n.indexOf(":");"confirm"==(o=n.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",C.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function d(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],o=g[t];o&&(e[n]=o)}return e}}function u(e,i){if(!(!C.debug||i&&i.isInnerInvoke)){var t=m[e];t&&(e=t),i&&i._complete&&delete i._complete,n.log('"'+e+'",',i||"")}}function l(){return(new Date).getTime()}function p(n){I&&(e.WeixinJSBridge?n():h.addEventListener&&h.addEventListener("WeixinJSBridgeReady",n,!1))}if(!e.jWeixin){var f,g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},m=function(){var e={};for(var n in g)e[g[n]]=n;return e}(),h=e.document,v=h.title,w=navigator.userAgent.toLowerCase(),y=navigator.platform.toLowerCase(),S=!(!y.match("mac")&&!y.match("win")),_=-1!=w.indexOf("wxdebugger"),I=-1!=w.indexOf("micromessenger"),x=-1!=w.indexOf("android"),k=-1!=w.indexOf("iphone")||-1!=w.indexOf("ipad"),T=(B=w.match(/micromessenger\/(\d+\.\d+\.\d+)/)||w.match(/micromessenger\/(\d+\.\d+)/))?B[1]:"",b={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},M={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:k?1:x?2:-1,clientVersion:T,url:encodeURIComponent(location.href)},C={},P={_completes:[]},A={state:0,data:{}};p((function(){b.initEndTime=l()}));var V=!1,L=[],O=(f={config:function(n){u("config",C=n);var i=!1!==C.check;p((function(){if(i)o(g.config,{verifyJsApiList:d(C.jsApiList)},function(){P._complete=function(e){b.preVerifyEndTime=l(),A.state=1,A.data=e},P.success=function(e){M.isPreVerifyOk=0},P.fail=function(e){P._fail?P._fail(e):A.state=-1};var e=P._completes;return e.push((function(){!function(e){if(!(S||_||C.debug||T<"6.0.2"||M.systemType<0)){var n=new Image;M.appId=C.appId,M.initTime=b.initEndTime-b.initStartTime,M.preVerifyTime=b.preVerifyEndTime-b.preVerifyStartTime,O.getNetworkType({isInnerInvoke:!0,success:function(e){M.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+M.version+"&o="+M.isPreVerifyOk+"&s="+M.systemType+"&c="+M.clientVersion+"&a="+M.appId+"&n="+M.networkType+"&i="+M.initTime+"&p="+M.preVerifyTime+"&u="+M.url;n.src=i}})}}()})),P.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();P._completes=[]},P}()),b.preVerifyStartTime=l();else{A.state=1;for(var e=P._completes,n=0,t=e.length;n<t;++n)e[n]();P._completes=[]}})),O.invoke||(O.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,r(i),t)},O.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})},ready:function(e){0!=A.state?e():(P._completes.push(e),!I&&C.debug&&e())},error:function(e){T<"6.0.2"||(-1==A.state?e(A.data):P._fail=e)},checkJsApi:function(e){o("checkJsApi",{jsApiList:d(e.jsApiList)},(e._complete=function(e){if(x){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=m[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){a(g.onMenuShareTimeline,{complete:function(){o("shareTimeline",{title:e.title||v,desc:e.title||v,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){a(g.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?o("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):o("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){a(g.onMenuShareQQ,{complete:function(){o("shareQQ",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){a(g.onMenuShareWeibo,{complete:function(){o("shareWeiboApp",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){a(g.onMenuShareQZone,{complete:function(){o("shareQZone",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){o("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){o("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){o("startRecord",{},e)},stopRecord:function(e){o("stopRecord",{},e)},onVoiceRecordEnd:function(e){a("onVoiceRecordEnd",e)},playVoice:function(e){o("playVoice",{localId:e.localId},e)},pauseVoice:function(e){o("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){o("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){a("onVoicePlayEnd",e)},uploadVoice:function(e){o("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){o("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){o("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){o("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(x){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){o(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){o("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){o("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===V?(V=!0,o("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(V=!1,0<L.length){var n=L.shift();wx.getLocalImgData(n)}},e))):L.push(e)},getNetworkType:function(e){o("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){o("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},t(f,"getLocation",(function(e){o(g.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),t(f,"hideOptionMenu",(function(e){o("hideOptionMenu",{},e)})),t(f,"showOptionMenu",(function(e){o("showOptionMenu",{},e)})),t(f,"closeWindow",(function(e){o("closeWindow",{},e=e||{})})),t(f,"hideMenuItems",(function(e){o("hideMenuItems",{menuList:e.menuList},e)})),t(f,"showMenuItems",(function(e){o("showMenuItems",{menuList:e.menuList},e)})),t(f,"hideAllNonBaseMenuItem",(function(e){o("hideAllNonBaseMenuItem",{},e)})),t(f,"showAllNonBaseMenuItem",(function(e){o("showAllNonBaseMenuItem",{},e)})),t(f,"scanQRCode",(function(e){o("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(k){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))})),t(f,"openAddress",(function(e){o(g.openAddress,{},(e._complete=function(e){var n;(n=e).postalCode=n.addressPostalCode,delete n.addressPostalCode,n.provinceName=n.proviceFirstStageName,delete n.proviceFirstStageName,n.cityName=n.addressCitySecondStageName,delete n.addressCitySecondStageName,n.countryName=n.addressCountiesThirdStageName,delete n.addressCountiesThirdStageName,n.detailInfo=n.addressDetailInfo,delete n.addressDetailInfo,e=n},e))})),t(f,"openProductSpecificView",(function(e){o(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)})),t(f,"addCard",(function(e){for(var n=e.cardList,i=[],t=0,a=n.length;t<a;++t){var r=n[t],c={card_id:r.cardId,card_ext:r.cardExt};i.push(c)}o(g.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))})),t(f,"chooseCard",(function(e){o("chooseCard",{app_id:C.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),t(f,"openCard",(function(e){for(var n=e.cardList,i=[],t=0,a=n.length;t<a;++t){var r=n[t],c={card_id:r.cardId,code:r.code};i.push(c)}o(g.openCard,{card_list:i},e)})),t(f,"consumeAndShareCard",(function(e){o(g.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)})),t(f,"chooseWXPay",(function(e){o(g.chooseWXPay,c(e),e)})),t(f,"openEnterpriseRedPacket",(function(e){o(g.openEnterpriseRedPacket,c(e),e)})),t(f,"startSearchBeacons",(function(e){o(g.startSearchBeacons,{ticket:e.ticket},e)})),t(f,"stopSearchBeacons",(function(e){o(g.stopSearchBeacons,{},e)})),t(f,"onSearchBeacons",(function(e){a(g.onSearchBeacons,e)})),t(f,"openEnterpriseChat",(function(e){o("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)})),t(f,"launchMiniProgram",(function(e){o("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)})),t(f,"miniProgram",{navigateBack:function(e){e=e||{},p((function(){o("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){p((function(){o("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){p((function(){o("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){p((function(){o("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){p((function(){o("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){p((function(){o("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){p((function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}),f),D=1,E={};return h.addEventListener("error",(function(e){if(!x){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=D++,n["wx-id"]=o),E[o])return;E[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})}))}}}),!0),h.addEventListener("load",(function(e){if(!x){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(E[t]=!1)}}}),!0),i&&(e.wx=e.jWeixin=O),O}var B}))}).call(this,i("5a52")["default"])},db60:function(e,n,i){var t=i("24fb");n=t(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.container[data-v-7a0c9082]{width:100vw;min-height:100vh;background-color:#f5f5f5}.poster-wrap[data-v-7a0c9082]{padding:%?40?% 0;width:calc(100vw - %?80?%);margin:0 %?40?%;line-height:1}.poster-wrap uni-image[data-v-7a0c9082]{border-radius:%?20?%;overflow:hidden;width:100%}.swiper[data-v-7a0c9082]{height:%?1170?%}.btn[data-v-7a0c9082]{margin:0 %?80?%;margin-top:%?30?%;height:%?80?%;line-height:%?80?%;border-radius:%?80?%;color:#fff;text-align:center}.tips[data-v-7a0c9082]{text-align:center;font-size:%?28?%;color:#999;font-weight:600;margin-top:%?20?%}.dialog-popup[data-v-7a0c9082]{width:%?580?%;background:#fff;box-sizing:border-box;border-radius:%?10?%;overflow:hidden;height:auto}.dialog-popup .title[data-v-7a0c9082]{padding:%?30?% %?30?% 0 %?30?%;text-align:center;font-size:%?32?%;font-weight:700}.dialog-popup .message[data-v-7a0c9082]{padding:0 %?30?%;color:#666;text-align:center;font-size:%?28?%;line-height:1.3;margin-top:%?30?%}.dialog-popup .action-wrap[data-v-7a0c9082]{margin-top:%?50?%;height:%?80?%;display:flex;border-top:1px solid #eee}.dialog-popup .action-wrap > uni-view[data-v-7a0c9082]{flex:1;text-align:center;line-height:%?80?%}.dialog-popup .action-wrap > uni-view[data-v-7a0c9082]:first-child{border-right:1px solid #eee;color:#999}.dialog-popup .action-wrap > uni-view uni-button[data-v-7a0c9082]{border:none;line-height:%?80?%;padding:0;margin:0;width:100%;height:100%}',""]),e.exports=n}}]);