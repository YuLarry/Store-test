(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-fenxiao-withdraw_list-withdraw_list"],{"0e11":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("8af4")),o=a(i("245b")),s={data:function(){return{category:[{id:0,name:"全部",number:2},{id:1,name:"待审核",number:0},{id:2,name:"已审核",number:0},{id:-1,name:"已拒绝",number:0}],withdrawState:{1:{color:"color: rgb(255, 160, 68)",text:"待审核"},2:{color:"color: rgb(17, 189, 100)",text:"已审核"},"-1":{color:"color: rgb(255, 69, 68)",text:"已拒绝"}},status:0,withdrawList:[],emptyShow:!1,token:null}},onShow:function(){var t=this;if(!this.addonIsExit.fenxiao)return this.$util.showToast({title:"商家未开启分销",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh(),this.$langConfig.title(this.fenxiaoWords.withdraw+"明细"),uni.getStorageSync("token")?this.token=uni.getStorageSync("token"):setTimeout((function(){t.$refs.login.open("/otherpages/fenxiao/withdraw_list/withdraw_list")}))},mixins:[n.default,o.default],methods:{getData:function(t){var e=this;this.emptyShow=!1,1==t.num&&(this.withdrawList=[]),this.$api.sendRequest({url:"/fenxiao/api/withdraw/page",data:{page_size:t.size,page:t.num,status:this.status},success:function(i){e.emptyShow=!0;var a=[],n=i.message;0==i.code&&i.data&&i.data.list?a=i.data.list:e.$util.showToast({title:n}),t.endSuccess(a.length),1==t.num&&(e.withdrawList=[]),e.withdrawList=e.withdrawList.concat(a),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(i){t.endErr(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},slectCate:function(t){this.status=t,this.$refs.mescroll.refresh()}},watch:{storeToken:function(t,e){t&&(this.token=t,this.$refs.mescroll.refresh())}},computed:{storeToken:function(){return this.$store.state.token}}};e.default=s},"464d":function(t,e,i){"use strict";i.r(e);var a=i("73a2"),n=i("7784");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("f76fa");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"580876d6",null,!1,a["a"],s);e["default"]=d.exports},"51de":function(t,e,i){var a=i("616aa");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("53a3519a",a,!0,{sourceMap:!1,shadowMode:!1})},"616aa":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-580876d6] .empty{margin-top:0!important}.withdraw-cate[data-v-580876d6]{width:100%;height:%?88?%;display:flex;justify-content:space-around;background:#fff;position:fixed;top:0;z-index:999;box-sizing:border-box}.withdraw-cate .cate-li[data-v-580876d6]{text-align:center;display:inline-block;height:%?88?%;font-size:%?30?%;position:relative;line-height:%?88?%}.withdraw-cate .cate-li.active[data-v-580876d6]:after{content:"";display:block;width:100%;height:%?4?%;border-radius:%?6?%;position:absolute;left:0;bottom:0}.withdraw-member[data-v-580876d6]{width:100%;height:%?70?%;line-height:%?70?%;color:#909399;padding:0 %?20?%;box-sizing:border-box}.withdraw-li[data-v-580876d6]{width:100%;padding:0 %?30?%;box-sizing:border-box;margin-top:%?20?%}.withdraw-li .li-box[data-v-580876d6]{width:100%;height:100%;padding:%?30?%;background-color:#fff;box-sizing:border-box;border-radius:%?10?%}.withdraw-li .li-box .tixian-desc[data-v-580876d6]{width:100%;display:flex;justify-content:space-between;border-bottom:%?2?% solid #eee}.withdraw-li .li-box .tixian-desc .desc-info[data-v-580876d6]{display:flex;justify-content:center;flex-direction:column}.withdraw-li .li-box .tixian-desc .desc-info .desc-info-name[data-v-580876d6]{font-size:%?28?%;color:#303133;line-height:1;margin-bottom:%?10?%}.withdraw-li .li-box .tixian-desc .desc-info .desc-info-time[data-v-580876d6]{margin-bottom:%?10?%;font-size:%?24?%;color:#909399}.withdraw-li .li-box .tixian-desc .desc-money[data-v-580876d6]{max-width:50%;height:100%;display:flex;align-items:center;justify-content:flex-end;font-size:%?28?%}.withdraw-li .li-box .money-desc[data-v-580876d6]{width:100%;display:flex;justify-content:space-between;align-items:center;margin-top:%?20?%;line-height:1;color:#303133;font-size:%?24?%}',""]),t.exports=e},"73a2":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={nsEmpty:i("0e02").default,nsLogin:i("61d0").default,loadingCover:i("b1ae").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{attrs:{"data-theme":t.themeStyle}},[t.token?i("v-uni-view",{staticClass:"withdraw-cate"},[t._l(t.category,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"cate-li",class:{"active color-base-text color-base-bg-before":t.status==e.id},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.slectCate(e.id)}}},[t._v(t._s(e.name))])]}))],2):t._e(),i("mescroll-uni",{ref:"mescroll",staticClass:"member-point",attrs:{top:"90",size:10},on:{getData:function(e){arguments[0]=e=t.$handleEvent(e),t.getData.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"list"},slot:"list"},[t._l(t.withdrawList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"withdraw-li"},[i("v-uni-view",{staticClass:"li-box"},[i("v-uni-view",{staticClass:"tixian-desc"},[i("v-uni-view",{staticClass:"desc-info"},[i("v-uni-view",{staticClass:"desc-info-name"},[t._v("申请"+t._s(t.fenxiaoWords.withdraw))]),i("v-uni-view",{staticClass:"desc-info-time"},[t._v(t._s(t.$util.timeStampTurnTime(e.create_time)))])],1),i("v-uni-view",{staticClass:"desc-money",style:t.withdrawState[e.status].color},[t._v(t._s(t.withdrawState[e.status].text))])],1),i("v-uni-view",{staticClass:"money-desc"},[i("v-uni-text",[t._v("实际到金额："+t._s(e.real_money))]),i("v-uni-text",[t._v("手续费："+t._s(e.withdraw_rate_money))]),i("v-uni-text",{staticClass:"color-base-text"},[t._v("￥"+t._s(e.money))])],1)],1)],1)})),0==t.withdrawList.length&&t.emptyShow?[0==t.status?i("ns-empty",{attrs:{text:"暂无"+t.fenxiaoWords.withdraw+"记录",isIndex:!1}}):t._e(),1==t.status?i("ns-empty",{attrs:{text:"暂无待审核"+t.fenxiaoWords.withdraw+"记录",isIndex:!1}}):t._e(),2==t.status?i("ns-empty",{attrs:{text:"暂无已审核"+t.fenxiaoWords.withdraw+"记录",isIndex:!1}}):t._e(),-1==t.status?i("ns-empty",{attrs:{text:"暂无已拒绝"+t.fenxiaoWords.withdraw+"记录",isIndex:!1}}):t._e()]:t._e()],2)],2),i("ns-login",{ref:"login"}),i("loading-cover",{ref:"loadingCover"})],1)},o=[]},7784:function(t,e,i){"use strict";i.r(e);var a=i("0e11"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"8af4":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{fenxiaoWords:{}}},methods:{getFenxiaoWrods:function(){var t=this;this.$api.sendRequest({url:"/fenxiao/api/config/words",success:function(e){e.code>=0&&e.data&&(t.fenxiaoWords=e.data,uni.setStorageSync("fenxiaoWords",e.data))}})}},onShow:function(){uni.getStorageSync("fenxiaoWords")&&(this.fenxiaoWords=uni.getStorageSync("fenxiaoWords")),this.getFenxiaoWrods()}};e.default=a},f76fa:function(t,e,i){"use strict";var a=i("51de"),n=i.n(a);n.a}}]);