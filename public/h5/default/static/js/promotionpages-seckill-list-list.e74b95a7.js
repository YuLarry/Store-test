(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-seckill-list-list"],{"071b":function(t,i,e){"use strict";var s=e("9224"),n=e.n(s);n.a},"0d24":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={name:"ns-advert",props:{keyword:{type:String}},data:function(){return{advList:[]}},created:function(){this.getAdvList()},methods:{getAdvList:function(){var t=this;this.$api.sendRequest({url:"/api/adv/detail",data:{keyword:this.keyword},success:function(i){if(0==i.code){var e=i.data.adv_list;for(var s in e)e[s].adv_url&&(e[s].adv_url=JSON.parse(e[s].adv_url));t.advList=i.data.adv_list}}})},jumppage:function(t){this.$util.diyRedirectTo(t)}}};i.default=s},"241f":function(t,i,e){"use strict";e.r(i);var s=e("3abc"),n=e("52f6");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("071b");var a,l=e("f0c5"),r=Object(l["a"])(n["default"],s["b"],s["c"],!1,null,"62d693f5",null,!1,s["a"],a);i["default"]=r.exports},"27bc":function(t,i,e){"use strict";e("99af"),e("4160"),e("a434"),e("07ac"),e("acd8"),e("e25e"),e("ac1f"),e("1276"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{mescroll:null,timeList:[],seckillId:null,seckillIndex:null,dataList:[],index:null,timer:null,noStartList:[]}},watch:{seckillId:function(t,i){t&&i&&t!=i&&this.mescroll.resetUpScroll(!1)}},computed:{show:function(){return this.timeList.length>0}},methods:{goodsImg:function(t){var i=t.split(",");return i[0]?this.$util.img(i[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},transformSeckillTime:function(t){t=parseFloat(t);var i=parseInt(t/3600),e=parseInt(t%3600/60),s=parseInt(t%60);return i<10&&(i="0"+i),e<10&&(e="0"+e),s<10&&(s="0"+s),i+":"+e},isEnd:function(t){t&&this.$util.showToast({title:"限时秒杀活动已结束"})},getTimeList:function(){var t=this;this.$api.sendRequest({url:"/seckill/api/seckill/lists",success:function(i){var e=i.data;if(e){var s=new Date(1e3*i.timestamp),n=60*s.getHours()*60+60*s.getMinutes()+s.getSeconds(),o=Object.values(e.list);if(o.forEach((function(i,e){i.seckill_start_time<=n&&n<i.seckill_end_time?(i.isNow=!0,t.seckillId=i.id,t.index=e,t.seckillIndex=e):i.isNow=!1})),t.timeList=o,o.length){for(var a=Math.round(new Date/1e3),l=Math.round(new Date((new Date).toLocaleDateString()).getTime()/1e3),r=a-l,d=0;d<o.length;d++)if((n<o[d].seckill_start_time&&0==d||n<o[d].seckill_start_time&&n>o[d-1].seckill_end_time&&0!=d||d==o.length-1&&n>o[d].seckill_end_time)&&(t.seckillId=o[d].id,t.index=d,t.seckillIndex=d),r<o[d].seckill_start_time){var c=o[d];c.index=d,t.noStartList.push(c)}t.noStartList.length&&t.autoEvent()}var u=t;setInterval((function(){u.getExpirationTime()}),1e3),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}}})},getData:function(t){var i=this;this.mescroll=t,this.$api.sendRequest({url:"/seckill/api/seckillgoods/page",data:{page_size:t.size,page:t.num,seckill_time_id:this.seckillId},success:function(e){i.showEmpty=!0;var s=[],n=e.message;0==e.code&&e.data?s=e.data.list:i.$util.showToast({title:n}),t.endSuccess(s.length),1==t.num&&(i.dataList=[]),i.dataList=i.dataList.concat(s),i.$refs.loadingCover&&i.$refs.loadingCover.hide()},fail:function(){t.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},getExpirationTime:function(){var t,i,e,s=this.timeList,n=new Date,o=n.toLocaleDateString();for(var a in s)if(s[a].isNow){this.ident=!0,i=Date.parse(n),t=Date.parse(o)+1e3*parseInt(s[a].seckill_end_time);var l=(t-i)/1e3;if(e=this.$util.countDown(l),this.hour=e.h,this.minute=e.i,this.second=e.s,0==l){var r=parseInt(a)+1;r<s.length&&(this.index=r),this.timeList[a].isNow=!1}return!1}this.ident=!1},ontabtap:function(t,i){this.seckillId=t,this.seckillIndex=i},toGoodsDetail:function(t,i){var e=this;this.seckillIndex<this.index?this.$util.showToast({title:"秒杀活动已结束！"}):this.seckillIndex>this.index?this.$util.showToast({title:"秒杀活动还未开启，敬请期待！"}):this.$api.sendRequest({url:"/api/config/time",data:{},success:function(s){var n=new Date(1e3*s.timestamp),o=60*n.getHours()*60+60*n.getMinutes()+n.getSeconds();e.timeList[i].seckill_start_time<=o&&o<e.timeList[i].seckill_end_time?e.timeList[i].isNow=!0:e.timeList[i].isNow=!1,e.$forceUpdate(),e.timeList[i].isNow?e.$util.redirectTo("/promotionpages/seckill/detail/detail",{seckill_id:t}):e.$util.showToast({title:"秒杀活动即将开启，敬请期待！"})}})},imageError:function(t){this.dataList[t].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},autoEvent:function(){var t=this;this.timer=setInterval((function(){for(var i=Math.round(new Date/1e3),e=Math.round(new Date((new Date).toLocaleDateString()).getTime()/1e3),s=i-e,n=0;n<t.noStartList.length;n++){var o=t.noStartList[n];s>o.seckill_start_time&&!o.isNow&&(t.seckillId=o.seckill_id,t.index=o.index,t.timeList[o.index].isNow=!0,void 0!=t.timeList[o.index-1]&&(t.timeList[o.index-1].isNow=!1),t.noStartList.splice(n))}0==t.noStartList.length&&clearInterval(t.timer)}),1e3)},goodsTag:function(t){return t.label_name||""}},onShareAppMessage:function(t){var i="一大波的秒杀福利就要开始了，真的不来看看嘛",e="/promotionpages/seckill/list/list";return{title:i,path:e,success:function(t){},fail:function(t){}}},onHide:function(){clearInterval(this.timer)}};i.default=s},"3abc":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return s}));var s={nsAdv:e("6c5b").default,nsEmpty:e("90af").default,loadingCover:e("4c1d").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{attrs:{"data-theme":t.themeStyle}},[t.show?e("v-uni-view",[t.seckillId&&t.addonIsExit.seckill?e("mescroll-uni",{ref:"mescroll",attrs:{size:10},on:{getData:function(i){arguments[0]=i=t.$handleEvent(i),t.getData.apply(void 0,arguments)},scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[e("template",{attrs:{slot:"list"},slot:"list"},[e("v-uni-view",{staticClass:"ns-adv"},[e("ns-adv",{attrs:{keyword:"NS_SECKILL"}})],1),e("v-uni-view",{staticClass:"time-wrap"},[e("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/seckill.png"),mode:"widthFix"}}),e("v-uni-scroll-view",{staticClass:"scroll-wrap",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-into-view":"a"+t.seckillId}},t._l(t.timeList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"time-item",attrs:{id:"a"+i.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabtap(i.id,s)}}},[e("v-uni-view",{staticClass:"span font-size-toolbar",class:t.seckillId==i.id?"color-base-text":""},[t._v(t._s(t.transformSeckillTime(i.seckill_start_time)))]),s>t.index?e("v-uni-view",{staticClass:"em font-size-activity-tag color-sub",class:t.seckillId==i.id?"color-base-bg active":""},[t._v("敬请期待")]):t._e(),s!=t.index||i.isNow?t._e():e("v-uni-view",{staticClass:"em font-size-activity-tag color-sub",class:t.seckillId==i.id?"color-base-bg active":""},[t._v("即将开始")]),s==t.index&&i.isNow?e("v-uni-view",{staticClass:"em font-size-activity-tag color-sub",class:t.seckillId==i.id?"color-base-bg active":""},[t._v("抢购中")]):t._e(),s<t.index?e("v-uni-view",{staticClass:"em font-size-activity-tag color-sub",class:t.seckillId==i.id?"color-base-bg active":""},[t._v("已结束")]):t._e()],1)})),1)],1),t.dataList.length?e("v-uni-view",{staticClass:"goods-list single-column",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.isEnd(t.seckillIndex<t.index&&t.timeList[t.index].isNow)}}},t._l(t.dataList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"goods-item margin-bottom"},[e("v-uni-view",{staticClass:"goods-img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGoodsDetail(i.id,t.index)}}},[e("v-uni-image",{attrs:{src:t.goodsImg(i.goods_image),mode:"widthFix"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.imgError(s)}}}),""!=t.goodsTag(i)?e("v-uni-view",{staticClass:"color-base-bg goods-tag"},[t._v(t._s(t.goodsTag(i)))]):t._e()],1),e("v-uni-view",{staticClass:"info-wrap"},[e("v-uni-view",{staticClass:"name-wrap"},[e("v-uni-view",{staticClass:"goods-name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGoodsDetail(i.id,t.index)}}},[t._v(t._s(i.goods_name))])],1),e("v-uni-view",{staticClass:"lineheight-clear"},[e("v-uni-view",{staticClass:"discount-price"},[e("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",{staticClass:"price color-base-text font-size-toolbar"},[t._v(t._s(i.seckill_price))])],1)],1),e("v-uni-view",{staticClass:"pro-info"},[e("v-uni-view",{staticClass:"delete-price font-size-activity-tag color-tip"},[e("v-uni-text",{staticClass:"unit"},[t._v(t._s(t.$lang("common.currencySymbol")))]),t._v(t._s(i.price))],1),e("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGoodsDetail(i.id,t.index)}}},[e("v-uni-button",{attrs:{type:"primary",size:"mini"}},[t._v("去抢购")])],1)],1)],1)],1)})),1):t._e(),!t.dataList.length&&t.showEmpty?e("v-uni-view",{staticStyle:{"z-index":"1 !important"}},[e("ns-empty",{attrs:{fixed:!1,text:"该时间段暂无秒杀商品"}})],1):t._e()],1)],2):t._e()],1):e("v-uni-view",{staticClass:"big-empty"},[e("ns-empty",{attrs:{text:"当前活动暂未开启"}})],1),e("loading-cover",{ref:"loadingCover"})],1)},o=[]},"52f6":function(t,i,e){"use strict";e.r(i);var s=e("ce97"),n=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(i,t,(function(){return s[t]}))}(o);i["default"]=n.a},"6c5b":function(t,i,e){"use strict";e.r(i);var s=e("e4e2"),n=e("ee3a");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("788b");var a,l=e("f0c5"),r=Object(l["a"])(n["default"],s["b"],s["c"],!1,null,"276fc724",null,!1,s["a"],a);i["default"]=r.exports},"788b":function(t,i,e){"use strict";var s=e("f441"),n=e.n(s);n.a},9224:function(t,i,e){var s=e("a4cc");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=e("4f06").default;n("6ace74bb",s,!0,{sourceMap:!1,shadowMode:!1})},a4cc:function(t,i,e){var s=e("24fb");i=s(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.ns-adv[data-v-62d693f5]{padding:%?20?% %?30?%;overflow:hidden;line-height:1;background:#fff}.ns-adv uni-image[data-v-62d693f5]{width:100%}.time-wrap[data-v-62d693f5]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% %?30?%;background:#fff;line-height:1}.time-wrap.fixed[data-v-62d693f5]{position:fixed;z-index:10;top:0;width:100vw;box-sizing:border-box}.time-wrap > uni-image[data-v-62d693f5]{width:%?66?%;margin-right:%?20?%}.time-wrap .scroll-wrap[data-v-62d693f5]{-webkit-box-flex:1;-webkit-flex:1;flex:1;max-width:calc(100% - %?86?%);white-space:nowrap}.time-wrap .scroll-wrap .time-item[data-v-62d693f5]{padding:0 %?10?%;text-align:center;display:inline-block}.time-wrap .scroll-wrap .time-item .span[data-v-62d693f5]{font-weight:700;line-height:1}.time-wrap .scroll-wrap .time-item .em[data-v-62d693f5]{line-height:1;padding:%?6?% %?30?%;border-radius:%?24?%;margin-top:%?6?%}.time-wrap .scroll-wrap .time-item .em.active[data-v-62d693f5]{color:#fff!important}.lineheight-clear[data-v-62d693f5]{line-height:1!important}.goods-list.single-column .goods-item[data-v-62d693f5]{padding:%?26?%;background:#fff;margin:%?20?% %?30?%;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;position:relative}.goods-list.single-column .goods-item .goods-img[data-v-62d693f5]{width:%?200?%;height:%?200?%;overflow:hidden;border-radius:%?10?%;margin-right:%?20?%}.goods-list.single-column .goods-item .goods-img uni-image[data-v-62d693f5]{width:100%;height:100%}.goods-list.single-column .goods-item .goods-tag[data-v-62d693f5]{color:#fff;line-height:1;padding:%?8?% %?12?%;position:absolute;border-top-left-radius:%?10?%;border-bottom-right-radius:%?10?%;top:%?26?%;left:%?26?%;font-size:%?22?%}.goods-list.single-column .goods-item .info-wrap[data-v-62d693f5]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.goods-list.single-column .goods-item .name-wrap[data-v-62d693f5]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.goods-list.single-column .goods-item .goods-name[data-v-62d693f5]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:%?68?%}.goods-list.single-column .goods-item .progress-wrap[data-v-62d693f5]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?10?%}.goods-list.single-column .goods-item .progress-wrap uni-progress[data-v-62d693f5]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.goods-list.single-column .goods-item .progress-wrap .txt[data-v-62d693f5]{margin:0 %?100?% 0 %?20?%}.goods-list.single-column .goods-item .discount-price[data-v-62d693f5]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%}.goods-list.single-column .goods-item .discount-price .unit[data-v-62d693f5]{margin-right:%?6?%}.goods-list.single-column .goods-item .discount-price .txt[data-v-62d693f5]{font-weight:400}.goods-list.single-column .goods-item .pro-info[data-v-62d693f5]{position:relative;margin-top:%?16?%}.goods-list.single-column .goods-item .pro-info .delete-price[data-v-62d693f5]{text-decoration:line-through;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.goods-list.single-column .goods-item .pro-info .delete-price .unit[data-v-62d693f5]{margin-right:%?6?%}.goods-list.single-column .goods-item .pro-info .delete-price .txt[data-v-62d693f5]{text-decoration:none}.goods-list.single-column .goods-item .pro-info > uni-view[data-v-62d693f5]{line-height:1}.goods-list.single-column .goods-item .pro-info > uni-view[data-v-62d693f5]:nth-child(2){position:absolute;right:0;bottom:0}.goods-list.single-column .goods-item .pro-info .buy-btn[data-v-62d693f5]{width:%?160?%;height:%?90?%;border-radius:%?10?%}.goods-list.single-column .goods-item .pro-info .buy-btn .text[data-v-62d693f5]{color:#fff;text-align:center;line-height:1;padding-top:%?20?%}.goods-list.single-column .goods-item .pro-info .buy-btn .progress[data-v-62d693f5]{margin-top:%?6?%;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex}.goods-list.single-column .goods-item .pro-info .buy-btn .progress uni-progress[data-v-62d693f5]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.goods-list.single-column .goods-item .pro-info .buy-btn .progress .num[data-v-62d693f5]{margin-left:%?10?%;color:#fff;line-height:1}.goods-list.single-column .goods-item .member-price-tag[data-v-62d693f5]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.single-column .goods-item .member-price-tag uni-image[data-v-62d693f5]{width:100%}',""]),t.exports=i},ce97:function(t,i,e){"use strict";var s=e("4ea4");e("4160"),e("c975"),e("ac1f"),e("1276"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=s(e("b6ac")),o=s(e("27bc")),a={data:function(){return{hour:"00",minute:"00",second:"00",ident:!1,showEmpty:!1,memberId:0,mpShareData:null}},onLoad:function(t){var i=this;if(this.$util.getMemberId().then((function(t){i.memberId=t})).catch((function(t){})),t.source_member&&uni.setStorageSync("source_member",t.source_member),t.scene){var e=decodeURIComponent(t.scene);e=e.split("&"),e.length&&e.forEach((function(t){-1!=t.indexOf("sku_id")&&(i.skuId=t.split("-")[1]),-1!=t.indexOf("m")&&uni.setStorageSync("source_member",t.split("-")[1]),-1!=t.indexOf("is_test")&&uni.setStorageSync("is_test",1)}))}},onShow:function(){var t=this;if(!this.addonIsExit.seckill)return this.$util.showToast({title:"商家未开启秒杀",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);uni.getStorageSync("token")&&uni.getStorageSync("source_member")&&this.$util.onSourceMember(uni.getStorageSync("source_member")),this.$langConfig.refresh(),this.getTimeList()},onShareAppMessage:function(){return this.mpShareData.appMessage},onShareTimeline:function(){return this.mpShareData.timeLine},mixins:[o.default,n.default],onReady:function(){var t=this;setTimeout((function(){var i=uni.createSelectorQuery().in(t);i.select(".time-wrap").boundingClientRect((function(i){i&&(t.timeTop=i.top)})).exec()}),500),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}};i.default=a},e28b:function(t,i,e){var s=e("24fb");i=s(!1),i.push([t.i,".bg[data-v-276fc724]{width:100%;height:%?158?%;background-color:#fff;position:fixed;left:0;\r\ntop:%?88?%;\n}.ns-adv[data-v-276fc724]{background:#fff;height:%?300?%;border-radius:%?10?%\r\n\t/* padding: 8rpx 24rpx 24rpx; */}.ns-adv .image-box[data-v-276fc724]{width:100%;height:100%;border-radius:%?10?%}.ns-adv uni-image[data-v-276fc724]{width:100%;height:100%;border-radius:%?10?%}",""]),t.exports=i},e4e2:function(t,i,e){"use strict";var s;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return s}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.advList.length?e("v-uni-view",[t.advList.length?e("v-uni-swiper",{staticClass:"ns-adv",attrs:{"indicator-dots":t.advList.length>1,"indicator-active-color":"#ffffff",autoplay:!0,interval:3e3,duration:1e3}},t._l(t.advList,(function(i,s){return e("v-uni-swiper-item",{key:s,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumppage(i.adv_url)}}},[e("v-uni-view",{staticClass:"image-box",style:{"background-color":i.background}},[e("v-uni-image",{attrs:{src:t.$util.img(i.adv_image)}})],1)],1)})),1):t._e()],1):t._e()},o=[]},ee3a:function(t,i,e){"use strict";e.r(i);var s=e("0d24"),n=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(i,t,(function(){return s[t]}))}(o);i["default"]=n.a},f441:function(t,i,e){var s=e("e28b");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=e("4f06").default;n("6755313c",s,!0,{sourceMap:!1,shadowMode:!1})}}]);