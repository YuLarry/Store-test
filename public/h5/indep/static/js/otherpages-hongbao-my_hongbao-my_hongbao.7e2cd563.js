(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-hongbao-my_hongbao-my_hongbao"],{"5d1d":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"[data-v-28892a34] .mescroll-uni-fixed{top:%?100?%!important}",""]),t.exports=e},"68a8":function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("99af"),i("e25e"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("b6ac")),s={data:function(){return{type:"",types:"",state:1,sort:1,list:[],isIphoneX:!1,token:null,showEmpty:!1,status:"",statusList:[{name:"全部",status:""},{name:"组队中",status:"0"},{name:"组队成功",status:"1"},{name:"组队失败",status:"2"}]}},mixins:[o.default],onLoad:function(t){this.isIphoneX=this.$util.uniappIsIPhoneX()},filters:{int:function(t){var e=String(t),i=e.split(".");return parseInt(i[1])>0?e:i[0]}},onShow:function(){var t=this;if(!this.addonIsExit.hongbao)return this.$util.showToast({title:"商家未开启红包瓜分",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh(),uni.getStorageSync("token")?(this.token=uni.getStorageSync("token"),this.$refs.mescroll&&this.$refs.mescroll.refresh()):setTimeout((function(){t.$refs.login.open("/otherpages/hongbao/list/list")}))},methods:{ontabtap:function(t){this.status=t,this.$refs.mescroll.refresh()},memberImageError:function(){this.list.headimg=this.$util.getDefaultImage().default_headimg},getMemberCounponList:function(t){var e=this;this.showEmpty=!1,this.$api.sendRequest({url:"/hongbao/api/hongbao/launchPage",data:{page:t.num,page_size:t.size,status:this.status},success:function(i){e.showEmpty=!0;var a=[];0==i.code&&i.data?a=i.data.list:e.$util.showToast({title:i.message}),t.endSuccess(a.length),1==t.num&&(e.list=[]),e.list=e.list.concat(a),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(i){t.endErr(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},imageError:function(t){this.list[t].image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},toGoodsList:function(t){this.$util.redirectTo("/otherpages/hongbao/index/index",{hongbao_id:t.hongbao_id})},toGoods:function(e){t.log("000"),this.$util.redirectTo("/otherpages/hongbao/index/index",{hongbao_id:e.hongbao_id,group_id:e.group_id})}},watch:{storeToken:function(t,e){t&&(this.token=t,this.$refs.mescroll.refresh())}},computed:{storeToken:function(){return this.$store.state.token}}};e.default=s}).call(this,i("5a52")["default"])},7083:function(t,e,i){var a=i("71ba");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("61db536e",a,!0,{sourceMap:!1,shadowMode:!1})},"71ba":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.cart-empty[data-v-28892a34]{margin-top:104px!important}.active[data-v-28892a34]{border-bottom:%?4?% solid}.coupon-head[data-v-28892a34]{display:-webkit-box;display:-webkit-flex;display:flex;background:#fff;padding:%?20?% %?50?%}.coupon-head .sort[data-v-28892a34]{border:1px solid #c5c5c5;padding:%?1?% %?20?%;border-radius:%?50?%;cursor:pointer;margin-right:%?15?%}.cf-container[data-v-28892a34]{background:#fff;overflow:hidden}.tab[data-v-28892a34]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?86?%}.tab > uni-view[data-v-28892a34]{text-align:center;width:33%;height:%?86?%}.tab > uni-view uni-text[data-v-28892a34]{display:inline-block;line-height:%?86?%;height:%?80?%;font-size:%?30?%}.coupon-listone[data-v-28892a34]{margin:0 %?30?%}.coupon-listone .item[data-v-28892a34]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff;background-size:100% 100%;border-radius:%?20?%;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch;margin-top:%?20?%;overflow:hidden;padding:%?20?%}.coupon-listone .item .item-top[data-v-28892a34]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?30?%}.coupon-listone .item .item-left[data-v-28892a34]{margin-bottom:%?40?%}.coupon-listone .item .item-left .use_name[data-v-28892a34]{font-weight:700;width:%?460?%;word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.coupon-listone .item .item-left .item-flex[data-v-28892a34]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.coupon-listone .item .item-left .use_time[data-v-28892a34]{font-size:%?24?%;color:#909399}.coupon-listone .item .item-left .item-base[data-v-28892a34]{width:%?160?%;height:%?160?%;border-radius:%?10?%}.coupon-listone .item .item-left .item-base uni-image[data-v-28892a34]{width:100%;height:100%;border-radius:%?10?%}.coupon-listone .item .item-left .item-info[data-v-28892a34]{margin-left:%?20?%;overflow:hidden;background-repeat-x:no-repeat;background-repeat-y:repeat}.coupon-listone .item .item-left .item-info .use_title[data-v-28892a34]{font-size:%?24?%;max-width:%?330?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#606266}.coupon-listone .item .item-left .item-info .use_title .max_price[data-v-28892a34]{font-weight:400;font-size:%?24?%}.coupon-listone .item .item-left .item-info .use_type[data-v-28892a34]{max-width:%?330?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border-radius:%?5?%;background-color:#f98}.coupon-listone .item .item-right[data-v-28892a34]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.coupon-listone .item .item-right uni-image[data-v-28892a34]{width:%?50?%;height:%?50?%;border-radius:50%}.coupon-listone .item .item-right .posi[data-v-28892a34]{position:absolute;bottom:%?12?%;left:%?100?%;background-color:#fff}.coupon-listone .item .item-right .img-list[data-v-28892a34]{padding-left:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex}.coupon-listone .item .item-right .img-list uni-image[data-v-28892a34]{margin-right:%?10?%;border:1px solid #fff;margin-left:%?-40?%}.coupon-listone .item .item-right .use_price[data-v-28892a34]{width:%?50?%;height:%?50?%;line-height:%?50?%;border:1px dashed;border-radius:50%;font-size:%?40?%;text-align:center}.coupon-listone .item .item-right .tag[data-v-28892a34]{height:%?50?%;border-radius:%?26?%;line-height:%?50?%;padding:0 19.5px;text-align:center;color:#fff;font-size:%?24?%}.coupon-listone .item .item-right .tag.disabled[data-v-28892a34]{background:#eee!important;color:#909399!important}.coupon-listone .item .item-right .image-lists uni-image[data-v-28892a34]{border:1px solid #fff}.coupon-listone .item .item-right .posi-one[data-v-28892a34]{position:absolute;top:0;left:%?20?%}.coupon-listone .item .item-right .posi-two[data-v-28892a34]{position:absolute;top:0;left:%?40?%}.coupon-listone .item .item-right .posi-three[data-v-28892a34]{position:absolute;top:0;left:%?60?%}.coupon-listone .item .item-right .posi-four[data-v-28892a34]{position:absolute;top:0;left:%?80?%}.order-nav[data-v-28892a34]{width:100vw;height:%?90?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;white-space:nowrap;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;left:0;z-index:998}.order-nav .uni-tab-item[data-v-28892a34]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?24?%;padding-right:%?24?%}.order-nav .uni-tab-item-title[data-v-28892a34]{font-size:%?28?%;display:block;height:%?86?%;line-height:%?90?%;border-bottom:1px solid #fff;padding:0 %?10?%;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;white-space:nowrap;text-align:center;font-size:%?30?%}.order-nav .uni-tab-item-title-active[data-v-28892a34]{display:block;height:%?86?%;border-bottom:2px solid #fff;padding:0 %?10?%}.order-nav[data-v-28892a34] ::-webkit-scrollbar{width:0;height:0;color:transparent}',""]),t.exports=e},8769:function(t,e,i){var a=i("5d1d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("07a3abff",a,!0,{sourceMap:!1,shadowMode:!1})},a0b5:function(t,e,i){"use strict";i.r(e);var a=i("68a8"),o=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=o.a},d0c3:function(t,e,i){"use strict";var a=i("8769"),o=i.n(a);o.a},deb0:function(t,e,i){"use strict";i.r(e);var a=i("df34"),o=i("a0b5");for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("f228"),i("d0c3");var n,r=i("f0c5"),l=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"28892a34",null,!1,a["a"],n);e["default"]=l.exports},df34:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={nsEmpty:i("90af").default,nsLogin:i("2bc6").default,loadingCover:i("4c1d").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:t.isIphoneX?"iphone-x":"",attrs:{"data-theme":t.themeStyle}},[t.token?i("v-uni-view",{staticClass:"order-nav"},t._l(t.statusList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"uni-tab-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ontabtap(e.status)}}},[i("v-uni-text",{staticClass:"uni-tab-item-title",class:e.status==t.status?"uni-tab-item-title-active color-base-border  color-base-text":""},[t._v(t._s(e.name))])],1)})),1):t._e(),t.token?i("mescroll-uni",{ref:"mescroll",attrs:{top:"20"},on:{getData:function(e){arguments[0]=e=t.$handleEvent(e),t.getMemberCounponList.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"list"},slot:"list"},[t.list.length>0?i("v-uni-view",{staticClass:"coupon-listone"},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"item"},[i("v-uni-view",{staticClass:"item-top font-size-tag"},[i("v-uni-view",{staticClass:"use_price color-base-border"},[t._v("发起组队  "+t._s(t.$util.timeStampTurnTime(e.start_time)))]),2==e.g_status?i("v-uni-view",{staticClass:"tag "},[t._v("组队失败")]):t._e(),1==e.g_status?i("v-uni-view",{staticClass:"tag "},[t._v("组队成功")]):t._e(),0==e.g_status?i("v-uni-view",{staticClass:"tag "},[t._v("组队中")]):t._e()],1),i("v-uni-view",{staticClass:"item-left"},[i("v-uni-view",{staticClass:"item-flex"},[i("v-uni-view",{staticClass:"item-base"},[e.image?i("v-uni-image",{attrs:{src:t.$util.img(e.image),mode:"aspectFit"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.imageError(a)}}}):i("v-uni-image",{attrs:{src:t.$util.img("/upload/uniapp/hongbao/hongbao_list_img.png"),mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"item-info"},[i("v-uni-view",{staticClass:"use_name"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"use_title"},[t._v(t._s(e.divide_num)+"名好友瓜分"+t._s(t._f("int")(e.money))+"元红包")]),e.validity_type?i("v-uni-view",{staticClass:"use_time"},[t._v("有效期：领取之日起"+t._s(e.fixed_term)+"日内有效")]):i("v-uni-view",{staticClass:"use_time"},[t._v("有效期："+t._s(t.$util.timeStampTurnTime(e.end_time)))])],1)],1)],1),i("v-uni-view",{staticClass:"item-right"},[0==e.group_member_list.length?i("v-uni-view",{staticClass:"use_price color-base-border color-base-text"},[t._v("+")]):i("v-uni-view",{},[e.group_member_list.length>5?i("v-uni-view",{staticClass:"image-lists"},[i("v-uni-image",{attrs:{src:e.group_member_list[0].headimg?t.$util.img(e.group_member_list[0].headimg):t.$util.getDefaultImage().default_headimg},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.memberImageError()}}}),i("v-uni-image",{staticClass:"posi-one",attrs:{src:e.group_member_list[1].headimg?t.$util.img(e.group_member_list[1].headimg):t.$util.getDefaultImage().default_headimg},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.memberImageError()}}}),i("v-uni-image",{staticClass:"posi-two",attrs:{src:e.group_member_list[2].headimg?t.$util.img(e.group_member_list[2].headimg):t.$util.getDefaultImage().default_headimg},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.memberImageError()}}}),i("v-uni-image",{staticClass:"posi-three",attrs:{src:e.group_member_list[3].headimg?t.$util.img(e.group_member_list[3].headimg):t.$util.getDefaultImage().default_headimg},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.memberImageError()}}}),i("v-uni-image",{staticClass:"posi-four",attrs:{src:e.group_member_list[4].headimg?t.$util.img(e.group_member_list[4].headimg):t.$util.getDefaultImage().default_headimg},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.memberImageError()}}}),1==e.g_status||2==e.g_status?i("v-uni-view",{staticClass:"use_price color-base-border color-base-text posi"},[i("v-uni-text",{staticClass:"iconellipsis2 iconfont"})],1):t._e(),0==e.g_status?i("v-uni-view",{staticClass:"use_price color-base-border color-base-text posi"},[t._v("+")]):t._e()],1):i("v-uni-view",{staticClass:"img-list"},[t._l(e.group_member_list,(function(e,a){return i("v-uni-image",{key:a,attrs:{src:e.headimg?t.$util.img(e.headimg):t.$util.getDefaultImage().default_headimg},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.memberImageError()}}})})),0==e.g_status?i("v-uni-view",{staticClass:"use_price color-base-border color-base-text"},[t._v("+")]):t._e()],2)],1),2==e.g_status&&0==e.is_look?i("v-uni-view",{staticClass:"tag color-base-bg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toGoodsList(e)}}},[t._v("重新组队")]):t._e(),2==e.g_status&&1==e.is_look?i("v-uni-view",{staticClass:"tag color-base-bg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toGoods(e)}}},[t._v("去查看")]):t._e(),1==e.g_status?i("v-uni-view",{staticClass:"tag color-base-bg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toGoodsList(e)}}},[t._v("去查看")]):t._e(),0==e.g_status?i("v-uni-view",{staticClass:"tag color-base-bg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toGoodsList(e)}}},[t._v("组队中")]):t._e()],1)],1)})),1):i("v-uni-view",[i("ns-empty",{attrs:{isIndex:!1,text:"暂无数据"}})],1)],1)],2):t._e(),i("ns-login",{ref:"ns-login"}),i("loading-cover",{ref:"loadingCover"})],1)},s=[]},f228:function(t,e,i){"use strict";var a=i("7083"),o=i.n(a);o.a}}]);