(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_promotion-fenxiao-withdraw_list"],{"013c":function(t,e,i){"use strict";i("c975"),i("a9e3"),i("acd8"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},n={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(t){return-1!==["dark","light"].indexOf(t)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var t=this,e=getCurrentPages()[0];this.$pageVm=e.$vm||e,uni.onWindowResize((function(e){t.$emit("resize",e)})),this.$pageVm.$on("hook:onPageScroll",(function(e){t.$emit("scroll",e)})),this.$watch("backgroundTextStyle",(function(){t.setBackgroundTextStyle()})),this.$watch((function(){return[t.rootFontSize,t.pageStyle]}),(function(){t.setPageMeta()})),this.$watch((function(){return[t.backgroundColor,t.backgroundColorTop,t.backgroundColorBottom]}),(function(){t.setBackgroundColor()})),this.$watch((function(){return[t.scrollTop,t.scrollDuration]}),(function(){t.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(t,e){t.setStyle({pullToRefresh:{support:e,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var t=this,e=String(this.scrollTop);if(-1!==e.indexOf("rpx")&&(e=uni.upx2px(e.replace("rpx",""))),e=parseFloat(e),!isNaN(e)){var i=function i(n){n.scrollTop===e&&(t.$pageVm.$off("hook:onPageScroll",i),t.$emit("scrolldone",o))};uni.pageScrollTo({scrollTop:e,duration:this.scrollDuration,success:function(){t.$pageVm.$on("hook:onPageScroll",i)}})}}}};e.default=n},"0548":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{fenxiaoWords:{}}},methods:{getFenxiaoWrods:function(){var t=this;this.$api.sendRequest({url:"/fenxiao/api/config/words",success:function(e){e.code>=0&&e.data&&(t.fenxiaoWords=e.data,uni.setStorageSync("fenxiaoWords",e.data))}})}},onShow:function(){uni.getStorageSync("fenxiaoWords")&&(this.fenxiaoWords=uni.getStorageSync("fenxiaoWords")),this.getFenxiaoWrods()}};e.default=o},"1c4f":function(t,e,i){"use strict";var o=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("0548")),a={data:function(){return{category:[{id:0,name:"全部",number:2},{id:1,name:"待审核",number:0},{id:2,name:"已审核",number:0},{id:-1,name:"已拒绝",number:0}],withdrawState:{1:{color:"color: rgb(255, 160, 68)",text:"待审核"},2:{color:"color: rgb(17, 189, 100)",text:"已审核"},"-1":{color:"color: rgb(255, 69, 68)",text:"已拒绝"}},status:0,withdrawList:[],emptyShow:!1,token:null}},onShow:function(){var t=this;if(!this.addonIsExist.fenxiao)return this.$util.showToast({title:"商家未开启分销",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index",{},"redirectTo")}),2e3);this.fenxiaoWords&&this.fenxiaoWords.withdraw&&this.$langConfig.title(this.fenxiaoWords.withdraw+"明细"),uni.getStorageSync("token")?this.token=uni.getStorageSync("token"):setTimeout((function(){t.$refs.login.open("/pages_promotion/fenxiao/withdraw_list")}))},mixins:[n.default],methods:{getData:function(t){var e=this;this.emptyShow=!1,1==t.num&&(this.withdrawList=[]),this.$api.sendRequest({url:"/fenxiao/api/withdraw/page",data:{page_size:t.size,page:t.num,status:this.status},success:function(i){e.emptyShow=!0;var o=[],n=i.message;0==i.code&&i.data&&i.data.list?o=i.data.list:e.$util.showToast({title:n}),t.endSuccess(o.length),1==t.num&&(e.withdrawList=[]),e.withdrawList=e.withdrawList.concat(o),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(i){t.endErr(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},slectCate:function(t){this.status=t,this.$refs.mescroll.refresh()}},watch:{storeToken:function(t,e){t&&(this.token=t,this.$refs.mescroll.refresh())}},computed:{storeToken:function(){return this.$store.state.token}}};e.default=a},"2c60":function(t,e,i){var o=i("d598");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("18d649c2",o,!0,{sourceMap:!1,shadowMode:!1})},4020:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{display:"none"}},[t._t("default")],2)},a=[]},"6d42":function(t,e,i){"use strict";i.r(e);var o=i("4020"),n=i("8f28");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);var r,s=i("f0c5"),d=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=d.exports},"8f28":function(t,e,i){"use strict";i.r(e);var o=i("013c"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},9890:function(t,e,i){"use strict";i.r(e);var o=i("cbd5"),n=i("f490");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("d9cf");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"4ac190de",null,!1,o["a"],r);e["default"]=d.exports},cbd5:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={pageMeta:i("6d42").default,nsEmpty:i("2c4c").default,nsLogin:i("2893").default,loadingCover:i("790a").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-meta",{attrs:{"page-style":t.themeColor}}),i("v-uni-view",[t.token?i("v-uni-view",{staticClass:"withdraw-cate"},[t._l(t.category,(function(e,o){return[i("v-uni-view",{key:o+"_0",staticClass:"cate-li",class:{"active color-base-text color-base-bg-before":t.status==e.id},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.slectCate(e.id)}}},[t._v(t._s(e.name))])]}))],2):t._e(),i("mescroll-uni",{ref:"mescroll",staticClass:"member-point",attrs:{top:"90",size:10},on:{getData:function(e){arguments[0]=e=t.$handleEvent(e),t.getData.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"list"},slot:"list"},[t._l(t.withdrawList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"withdraw-li"},[i("v-uni-view",{staticClass:"li-box"},[i("v-uni-view",{staticClass:"tixian-desc"},[i("v-uni-view",{staticClass:"desc-info"},[i("v-uni-view",{staticClass:"desc-info-name"},[t._v("申请"+t._s(t.fenxiaoWords.withdraw))]),i("v-uni-view",{staticClass:"desc-info-time"},[t._v(t._s(t.$util.timeStampTurnTime(e.create_time)))])],1),i("v-uni-view",{staticClass:"desc-money",style:t.withdrawState[e.status].color},[t._v(t._s(t.withdrawState[e.status].text))])],1),i("v-uni-view",{staticClass:"money-desc"},[i("v-uni-text",[t._v("实际到金额："+t._s(e.real_money))]),i("v-uni-text",[t._v("手续费："+t._s(e.withdraw_rate_money))]),i("v-uni-text",{staticClass:"money"},[t._v("￥"+t._s(e.money))])],1)],1)],1)})),0==t.withdrawList.length&&t.emptyShow?[0==t.status?i("ns-empty",{attrs:{text:"暂无"+t.fenxiaoWords.withdraw+"记录",isIndex:!1}}):t._e(),1==t.status?i("ns-empty",{attrs:{text:"暂无待审核"+t.fenxiaoWords.withdraw+"记录",isIndex:!1}}):t._e(),2==t.status?i("ns-empty",{attrs:{text:"暂无已审核"+t.fenxiaoWords.withdraw+"记录",isIndex:!1}}):t._e(),-1==t.status?i("ns-empty",{attrs:{text:"暂无已拒绝"+t.fenxiaoWords.withdraw+"记录",isIndex:!1}}):t._e()]:t._e()],2)],2),i("ns-login",{ref:"login"}),i("loading-cover",{ref:"loadingCover"})],1)],1)},a=[]},d598:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-4ac190de] .empty{margin-top:0!important}.withdraw-cate[data-v-4ac190de]{width:100%;height:%?88?%;display:flex;justify-content:space-around;background:#fff;position:fixed;top:0;z-index:999;box-sizing:border-box}.withdraw-cate .cate-li[data-v-4ac190de]{text-align:center;display:inline-block;height:%?88?%;font-size:%?30?%;position:relative;line-height:%?88?%}.withdraw-cate .cate-li.active[data-v-4ac190de]:after{content:"";display:block;width:100%;height:%?4?%;border-radius:%?6?%;position:absolute;left:0;bottom:0}.withdraw-member[data-v-4ac190de]{width:100%;height:%?70?%;line-height:%?70?%;color:#909399;padding:0 %?20?%;box-sizing:border-box}.withdraw-li[data-v-4ac190de]{width:100%;padding:0 %?30?%;box-sizing:border-box;margin-top:%?20?%}.withdraw-li .li-box[data-v-4ac190de]{width:100%;height:100%;padding:%?30?%;background-color:#fff;box-sizing:border-box;border-radius:%?10?%}.withdraw-li .li-box .tixian-desc[data-v-4ac190de]{width:100%;display:flex;justify-content:space-between;border-bottom:%?2?% solid #eee}.withdraw-li .li-box .tixian-desc .desc-info[data-v-4ac190de]{display:flex;justify-content:center;flex-direction:column}.withdraw-li .li-box .tixian-desc .desc-info .desc-info-name[data-v-4ac190de]{font-size:%?28?%;color:#303133;line-height:1;margin-bottom:%?10?%}.withdraw-li .li-box .tixian-desc .desc-info .desc-info-time[data-v-4ac190de]{margin-bottom:%?10?%;font-size:%?24?%;color:#909399}.withdraw-li .li-box .tixian-desc .desc-money[data-v-4ac190de]{max-width:50%;height:100%;display:flex;align-items:center;justify-content:flex-end;font-size:%?28?%}.withdraw-li .li-box .money-desc[data-v-4ac190de]{width:100%;display:flex;justify-content:space-between;align-items:center;margin-top:%?20?%;line-height:1;color:#303133;font-size:%?24?%}.withdraw-li .li-box .money-desc .money[data-v-4ac190de]{color:var(--price-color)}',""]),t.exports=e},d9cf:function(t,e,i){"use strict";var o=i("2c60"),n=i.n(o);n.a},f490:function(t,e,i){"use strict";i.r(e);var o=i("1c4f"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a}}]);