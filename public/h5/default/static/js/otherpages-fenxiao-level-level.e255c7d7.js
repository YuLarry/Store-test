(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-fenxiao-level-level"],{"150b":function(e,t,i){var l=i("fd66");"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var a=i("4f06").default;a("1bdabc7f",l,!0,{sourceMap:!1,shadowMode:!1})},"19cb":function(e,t,i){"use strict";var l=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(i("8af4")),n=l(i("245b")),o={data:function(){return{fenxiaoInfo:{condition:{last_level:null}},levelInfo:{},config:{},levelList:[]}},mixins:[a.default,n.default],computed:{levelIndex:function(){for(var e=-1,t=this.levelInfo.level_id,i=this.levelList,l=0;l<i.length;l++)if(i[l].level_id==t){e=l;break}return e}},onLoad:function(){},onShow:function(){var e=this;if(!this.addonIsExit.fenxiao)return this.$util.showToast({title:"商家未开启分销",mask:!0,duration:2e3}),void setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.$langConfig.refresh(),this.$langConfig.title(this.fenxiaoWords.fenxiao_name+"等级"),this.getFenxiaoLevel(),uni.getStorageSync("token")?(this.getFenxiaoInfo(),this.getBasicsConfig()):this.$util.redirectTo("/otherpages/login/login/login",{back:"/otherpages/fenxiao/level/level"})},methods:{getFenxiaoLevel:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/Level/lists",success:function(t){0==t.code&&t.data&&(e.levelList=t.data)}})},getFenxiaoInfo:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/fenxiao/detail",success:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide(),t.code>=0&&t.data?(e.fenxiaoInfo=t.data,e.getLevelInfo()):e.$util.redirectTo("/otherpages/fenxiao/apply/apply")},fail:function(){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getLevelInfo:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/fenxiao/level",data:{level:this.fenxiaoInfo.level_id},success:function(t){t.code>=0&&(e.levelInfo=t.data)}})},getBasicsConfig:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/basics",success:function(t){t.code>=0&&(e.config=t.data)}})}}};t.default=o},"8af4":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={data:function(){return{fenxiaoWords:{}}},methods:{getFenxiaoWrods:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/words",success:function(t){t.code>=0&&t.data&&(e.fenxiaoWords=t.data,uni.setStorageSync("fenxiaoWords",t.data))}})}},onShow:function(){uni.getStorageSync("fenxiaoWords")&&(this.fenxiaoWords=uni.getStorageSync("fenxiaoWords")),this.getFenxiaoWrods()}};t.default=l},"8cbb2":function(e,t,i){"use strict";var l;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return l}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container",attrs:{"data-theme":e.themeStyle}},[i("v-uni-view",{staticClass:"level-top color-base-bg"},[i("v-uni-view",{staticClass:"head-img-wrap"},[i("v-uni-view",[i("v-uni-view",{staticClass:"head-img"},[i("v-uni-image",{attrs:{src:e.fenxiaoInfo.headimg?e.$util.img(e.fenxiaoInfo.headimg):e.$util.getDefaultImage().default_headimg,mode:"aspectFill"},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.fenxiaoInfo.headimg=e.$util.getDefaultImage().default_headimg}}})],1),i("v-uni-view",{staticClass:"head-bg color-base-text",style:{backgroundImage:"url("+e.$util.img("upload/uniapp/fenxiao/level/bg2.png")+")"}},[e._v(e._s(e.fenxiaoInfo.level_name))])],1),i("v-uni-view",{staticClass:"level-info"},[e._v(e._s(e.fenxiaoInfo.nickname))])],1),i("v-uni-view",{staticClass:"level-list"},[i("v-uni-view",{staticClass:"level-list-box"},[e._l(e.levelList,(function(t,l){return[i("v-uni-view",{key:l+"_0",staticClass:"level_list"},[i("v-uni-view",{staticClass:"level_list-top"},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/level/v1.png")}}),i("v-uni-text",[e._v(e._s(l+1))])],1),i("v-uni-view",{staticClass:"font-son"},[e._v(e._s(t.level_name))])],1),l!=e.levelList.length-1?i("v-uni-view",{key:l+"_1",staticClass:"xian",class:l<e.levelIndex?"active":""}):e._e()]}))],2)],1),i("v-uni-view",{staticClass:"level-top-content"},[i("v-uni-view",{staticClass:"content-title-wrap"},[i("v-uni-view",{staticClass:"content-title color-base-text"},[e._v("当前等级佣金比率")])],1),i("v-uni-view",{staticClass:"level-img-item"},[Number(e.config.level)>0?i("v-uni-view",{staticClass:"level-img"},[i("v-uni-view",{staticClass:"level-img-wrap"},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/level/money.png")}})],1),i("v-uni-view",{staticClass:"level-img2-wrap"},[i("v-uni-view",{staticClass:"content-name"},[e._v("一级佣金")])],1),i("v-uni-view",{staticClass:"level-fs"},[e._v(e._s(e.levelInfo.one_rate)+"%")])],1):e._e(),Number(e.config.level)>1?i("v-uni-view",{staticClass:"level-img"},[i("v-uni-view",{staticClass:"level-img-wrap"},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/level/money.png")}})],1),i("v-uni-view",{staticClass:"level-img2-wrap"},[i("v-uni-view",{staticClass:"content-name"},[e._v("二级佣金")])],1),i("v-uni-view",{staticClass:"level-fs"},[e._v(e._s(e.levelInfo.two_rate)+"%")])],1):e._e(),Number(e.config.level)>2?i("v-uni-view",{staticClass:"level-img"},[i("v-uni-view",{staticClass:"level-img-wrap"},[i("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/fenxiao/level/money.png")}})],1),i("v-uni-view",{staticClass:"level-img2-wrap"},[i("v-uni-view",{staticClass:"content-name"},[e._v("三级佣金")])],1),i("v-uni-view",{staticClass:"level-fs"},[e._v(e._s(e.levelInfo.three_rate)+"%")])],1):e._e()],1)],1)],1),e.fenxiaoInfo.condition.last_level?i("v-uni-view",{staticClass:"level-bottom"},[i("v-uni-view",{staticClass:"level-bottom-name"},[e._v("距离下一等级："),i("v-uni-view",{staticClass:"head-bg color-base-text",style:{backgroundImage:"url("+e.$util.img("upload/uniapp/fenxiao/level/bg3.png")+")"}},[e._v(e._s(e.fenxiaoInfo.condition.last_level.level_name))])],1),i("v-uni-view",{staticClass:"level-bottom-title"},[1==e.fenxiaoInfo.condition.last_level.upgrade_type?[i("v-uni-text",{staticClass:"line-left color-base-bg"}),e._v("满足以下任意条件"),i("v-uni-text",{staticClass:"line-right color-base-bg"})]:[i("v-uni-text",{staticClass:"line-left color-base-bg"}),e._v("满足以下全部条件"),i("v-uni-text",{staticClass:"line-right color-base-bg"})]],2),i("v-uni-view",{staticClass:"detail"},[i("v-uni-view",{staticClass:"detail-wrap"},[i("v-uni-view",{staticClass:"detail-title"},[i("v-uni-text",[e._v("操作行为")]),i("v-uni-text",[e._v("操作进度")])],1),e.fenxiaoInfo.condition.last_level.one_fenxiao_order_num>0?i("v-uni-view",{staticClass:"detail-item "},[i("v-uni-view",{staticClass:"detail-item-name"},[e._v("一级分销订单总数")]),i("v-uni-view",{staticClass:"detail-item-content"},[i("v-uni-text",{staticClass:"color-base-text"},[e._v(e._s(e.fenxiaoInfo.one_fenxiao_order_num))]),e._v("/ "+e._s(e.fenxiaoInfo.condition.last_level.one_fenxiao_order_num))],1)],1):e._e(),e.fenxiaoInfo.condition.last_level.one_fenxiao_order_money>0?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"detail-item-name"},[e._v("分销订单佣金总额")]),i("v-uni-view",{staticClass:"detail-item-content"},[i("v-uni-text",{staticClass:"color-base-text"},[e._v(e._s(e.fenxiaoInfo.one_fenxiao_order_money?e.fenxiaoInfo.one_fenxiao_order_money:0))]),e._v("/ "+e._s(e.fenxiaoInfo.condition.last_level.one_fenxiao_order_money))],1)],1):e._e(),e.fenxiaoInfo.condition.last_level.one_fenxiao_total_order>0?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"detail-item-name"},[e._v("一级分销订单总额")]),i("v-uni-view",{staticClass:"detail-item-content"},[i("v-uni-text",{staticClass:"color-base-text"},[e._v(e._s(e.fenxiaoInfo.one_fenxiao_total_order?e.fenxiaoInfo.one_fenxiao_total_order:0))]),e._v("/ "+e._s(e.fenxiaoInfo.condition.last_level.one_fenxiao_total_order))],1)],1):e._e(),e.fenxiaoInfo.condition.last_level.order_num>0?i("v-uni-view",{staticClass:"detail-item "},[i("v-uni-view",{staticClass:"detail-item-name"},[e._v("自购订单总数")]),i("v-uni-view",{staticClass:"detail-item-content"},[i("v-uni-text",{staticClass:"color-base-text"},[e._v(e._s(e.fenxiaoInfo.order_num?e.fenxiaoInfo.order_num:0))]),e._v("/ "+e._s(e.fenxiaoInfo.condition.last_level.order_num))],1)],1):e._e(),e.fenxiaoInfo.condition.last_level.order_money>0?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"detail-item-name"},[e._v("自购订单总额")]),i("v-uni-view",{staticClass:"detail-item-content"},[i("v-uni-text",{staticClass:"color-base-text"},[e._v(e._s(e.fenxiaoInfo.order_money?e.fenxiaoInfo.order_money:0))]),e._v("/ "+e._s(e.fenxiaoInfo.condition.last_level.order_money))],1)],1):e._e(),e.fenxiaoInfo.condition.last_level.one_child_num>0?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"detail-item-name"},[e._v("一级下线人数")]),i("v-uni-view",{staticClass:"detail-item-content"},[i("v-uni-text",{staticClass:"color-base-text"},[e._v(e._s(e.fenxiaoInfo.one_child_num?e.fenxiaoInfo.one_child_num:0))]),e._v("/ "+e._s(e.fenxiaoInfo.condition.last_level.one_child_num))],1)],1):e._e(),e.fenxiaoInfo.condition.last_level.one_child_fenxiao_num>0?i("v-uni-view",{staticClass:"detail-item"},[i("v-uni-view",{staticClass:"detail-item-name"},[e._v("一级下线分销商")]),i("v-uni-view",{staticClass:"detail-item-content"},[i("v-uni-text",{staticClass:"color-base-text"},[e._v(e._s(e.fenxiaoInfo.one_child_fenxiao_num?e.fenxiaoInfo.one_child_fenxiao_num:0))]),e._v("/ "+e._s(e.fenxiaoInfo.condition.last_level.one_child_fenxiao_num))],1)],1):e._e()],1)],1)],1):e._e()],1)},n=[]},ac37:function(e,t,i){"use strict";i.r(t);var l=i("19cb"),a=i.n(l);for(var n in l)"default"!==n&&function(e){i.d(t,e,(function(){return l[e]}))}(n);t["default"]=a.a},b6ca:function(e,t,i){"use strict";i.r(t);var l=i("8cbb2"),a=i("ac37");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("ee68");var o,s=i("f0c5"),v=Object(s["a"])(a["default"],l["b"],l["c"],!1,null,"00f3db54",null,!1,l["a"],o);t["default"]=v.exports},ee68:function(e,t,i){"use strict";var l=i("150b"),a=i.n(l);a.a},fd66:function(e,t,i){var l=i("24fb");t=l(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.level-top[data-v-00f3db54]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;background-image:linear-gradient(90deg,#ff4544,#fd5f36);padding:%?30?%}.level-top .head-img-wrap[data-v-00f3db54]{display:flex;flex-direction:column;align-items:center;padding:%?30?%}.level-top .head-img-wrap .head-img[data-v-00f3db54]{width:%?120?%;height:%?120?%;border-radius:50%;border:%?6?% solid #fff;box-sizing:border-box;margin:auto}.level-top .head-img-wrap .head-img uni-image[data-v-00f3db54]{width:100%;height:100%;border-radius:50%}.level-top .head-img-wrap .head-bg[data-v-00f3db54]{height:%?46?%;margin-top:%?-20?%;background-size:100% 100%;position:relative;font-size:%?26?%;font-weight:500;text-align:center;line-height:%?54?%;min-width:%?164?%;padding:0 %?20?%;box-sizing:border-box;color:#cd9722!important}.level-top .head-img-wrap .level-info[data-v-00f3db54]{color:#fff;font-size:%?32?%;margin-top:%?20?%;line-height:1;text-align:center}.level-top .level-list[data-v-00f3db54]{width:100%;padding:%?30?% 0;text-align:center;overflow:hidden}.level-top .level-list .level-list-box[data-v-00f3db54]{display:flex;align-items:center;overflow-x:scroll}.level-top .level-list .level-list-box .iconfont[data-v-00f3db54]{display:flex;flex-direction:column;align-items:center;font-size:%?32?%;color:hsla(0,0%,100%,.6);line-height:1}.level-top .level-list .level-list-box .isSignin[data-v-00f3db54]{color:#fff}.level-top .level-list .level-list-box .xian[data-v-00f3db54]{width:%?70?%;min-width:%?70?%;border:%?1?% solid hsla(0,0%,100%,.6);margin-top:%?-34?%}.level-top .level-list .level-list-box .xian.active[data-v-00f3db54]{border:%?1?% solid #fff}.level-top .level-list .level-list-box .font-father[data-v-00f3db54]{position:relative}.level-top .level-list .level-list-box .font-son[data-v-00f3db54]{padding:0 %?10?%;bottom:%?-60?%;left:%?-30?%;text-align:center;line-height:1;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:%?24?%}.level-top .level-list .level-list-box .level-item-name[data-v-00f3db54]{color:#fff;padding:%?20?% %?50?%}.level-top .level-list .level-list-box .level_list .level_list-top[data-v-00f3db54]{position:relative;width:%?40?%;margin:auto}.level-top .level-list .level-list-box .level_list .level_list-top uni-image[data-v-00f3db54]{width:%?40?%;height:%?34?%}.level-top .level-list .level-list-box .level_list .level_list-top uni-text[data-v-00f3db54]{position:absolute;right:%?0?%;color:#fff;font-size:%?26?%}.level-top .level-top-content[data-v-00f3db54]{background-color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;width:calc(100% - %?60?%);margin-top:%?30?%;padding:%?30?%;border-radius:%?10?%}.level-top .level-top-content .content-title-wrap[data-v-00f3db54]{flex:1}.level-top .level-top-content .level-img-item[data-v-00f3db54]{display:flex;align-items:center;justify-content:center;width:100%;margin-top:%?30?%;margin-bottom:%?20?%}.level-top .level-top-content .level-img-item .level-img[data-v-00f3db54]{width:33.333%;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.level-top .level-top-content .level-img-item .level-img .level-img-wrap[data-v-00f3db54]{width:%?84?%;height:%?84?%;border-radius:50%;border:%?1?% solid #e5e5e5;background-color:#fff;display:flex;justify-content:center;align-items:center}.level-top .level-top-content .level-img-item .level-img .level-img-wrap uni-image[data-v-00f3db54]{width:%?84?%;height:%?84?%}.level-top .level-top-content .level-img-item .level-img .level-img2-wrap[data-v-00f3db54]{width:%?120?%;height:%?40?%;background-size:100% 100%;background-repeat:no-repeat;text-align:center;line-height:1;margin-top:%?20?%}.level-top .level-top-content .level-img-item .level-img .content-name[data-v-00f3db54]{position:relative;width:100%;height:100%;display:flex;justify-content:center;align-items:center;font-weight:500}.level-top .level-top-content .level-img-item .level-img .level-fs[data-v-00f3db54]{font-size:%?26?%;line-height:1;margin-top:%?10?%;color:#909399}.detail-wrap .detail-item[data-v-00f3db54]:nth-child(2n + 1){background-color:#f7f8fa}.level-bottom[data-v-00f3db54]{display:flex;flex-direction:column;background-color:#fff;height:50%}.level-bottom .level-bottom-name[data-v-00f3db54]{font-size:%?28?%;padding:%?30?%;position:relative;display:flex}.level-bottom .level-bottom-name .level_img[data-v-00f3db54]{width:%?26?%;position:relative}.level-bottom .level-bottom-name .level_img uni-image[data-v-00f3db54]{width:%?26?%;height:%?20?%}.level-bottom .level-bottom-name .level_img uni-text[data-v-00f3db54]{line-height:1;position:absolute;right:%?-2?%;bottom:%?10?%;background-image:-webkit-linear-gradient(bottom,#ff4544,#fd5f36);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:%?20?%}.level-bottom .level-bottom-name uni-text[data-v-00f3db54]{padding-left:%?5?%}.level-bottom .level-bottom-name .head-bg[data-v-00f3db54]{height:23px;margin-top:-3px;background-size:100% 100%;position:relative;font-size:13px;font-weight:500;text-align:center;line-height:24px;min-width:82px;padding:0 10px 0 30px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff!important}.level-bottom .level-bottom-title[data-v-00f3db54]{display:flex;justify-content:center;align-items:center;padding:0 %?24?% %?28?%}.level-bottom .level-bottom-title uni-text[data-v-00f3db54]{width:%?100?%;height:2px;opacity:.3}.level-bottom .level-bottom-title .line-left[data-v-00f3db54]{margin-right:10px}.level-bottom .level-bottom-title .line-right[data-v-00f3db54]{margin-left:10px}.level-bottom .detail[data-v-00f3db54]{display:flex;flex-direction:column}.level-bottom .detail .detail-wrap[data-v-00f3db54]{display:flex;flex-direction:column;padding-bottom:%?140?%}.level-bottom .detail .detail-wrap .detail-title[data-v-00f3db54]{display:flex;justify-content:center;align-items:center;padding:0 %?24?% %?8?%}.level-bottom .detail .detail-wrap .detail-title uni-text[data-v-00f3db54]{flex:1;display:flex;justify-content:center;align-items:center}.level-bottom .detail .detail-wrap .detail-item[data-v-00f3db54]{display:flex;justify-content:center;align-items:center;padding:%?8?% %?24?%;margin-top:%?10?%}.level-bottom .detail .detail-wrap .detail-item.active[data-v-00f3db54]{background-color:#f8f8f8}.level-bottom .detail .detail-wrap .detail-item .detail-item-name[data-v-00f3db54]{flex:1;color:#909399;display:flex;justify-content:center;align-items:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.level-bottom .detail .detail-wrap .detail-item .detail-item-content[data-v-00f3db54]{flex:1;color:#909399;display:flex;justify-content:center;align-items:center}.level-bottom .detail .detail-wrap .detail-item .detail-item-content uni-text[data-v-00f3db54]{margin-right:%?4?%}',""]),e.exports=t}}]);