(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_tool-member-card"],{"013c":function(e,t,i){"use strict";i("c975"),i("a9e3"),i("acd8"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={type:"scrolldone",target:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},currentTarget:{id:"",offsetLeft:0,offsetTop:0,dataset:{}},detail:{}},a={props:{backgroundTextStyle:{type:String,default:"dark",validator:function(e){return-1!==["dark","light"].indexOf(e)}},backgroundColor:{type:String,default:"#ffffff"},backgroundColorTop:{type:String,default:"#ffffff"},backgroundColorBottom:{type:String,default:"#ffffff"},scrollTop:{type:String,default:""},scrollDuration:{type:Number,default:300},pageStyle:{type:String,default:""},enablePullDownRefresh:{type:[Boolean,String],default:!1},rootFontSize:{type:String,default:""}},created:function(){var e=this,t=getCurrentPages()[0];this.$pageVm=t.$vm||t,uni.onWindowResize((function(t){e.$emit("resize",t)})),this.$pageVm.$on("hook:onPageScroll",(function(t){e.$emit("scroll",t)})),this.$watch("backgroundTextStyle",(function(){e.setBackgroundTextStyle()})),this.$watch((function(){return[e.rootFontSize,e.pageStyle]}),(function(){e.setPageMeta()})),this.$watch((function(){return[e.backgroundColor,e.backgroundColorTop,e.backgroundColorBottom]}),(function(){e.setBackgroundColor()})),this.$watch((function(){return[e.scrollTop,e.scrollDuration]}),(function(){e.pageScrollTo()}))},beforeMount:function(){this.setBackgroundColor(),(this.rootFontSize||this.pageStyle)&&this.setPageMeta(),this.backgroundTextStyle&&this.setBackgroundTextStyle(),this.scrollTop&&this.pageScrollTo()},methods:{setPullDownRefresh:function(e,t){e.setStyle({pullToRefresh:{support:t,style:"Android"===plus.os.name?"circle":"default"}})},setPageMeta:function(){uni.setPageMeta({pageStyle:this.pageStyle,rootFontSize:this.rootFontSize})},setBackgroundTextStyle:function(){},setBackgroundColor:function(){},pageScrollTo:function(){var e=this,t=String(this.scrollTop);if(-1!==t.indexOf("rpx")&&(t=uni.upx2px(t.replace("rpx",""))),t=parseFloat(t),!isNaN(t)){var i=function i(a){a.scrollTop===t&&(e.$pageVm.$off("hook:onPageScroll",i),e.$emit("scrolldone",n))};uni.pageScrollTo({scrollTop:t,duration:this.scrollDuration,success:function(){e.$pageVm.$on("hook:onPageScroll",i)}})}}}};t.default=a},"085e":function(e,t,i){"use strict";var n=i("e4b3"),a=i.n(n);a.a},"0a9f":function(e,t,i){var n=i("3082");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("30a9b138",n,!0,{sourceMap:!1,shadowMode:!1})},"0de6":function(e,t,i){"use strict";i.r(t);var n=i("f894"),a=i("3dc3");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("085e");var r,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"4e5b3f28",null,!1,n["a"],r);t["default"]=l.exports},1044:function(e,t,i){"use strict";i.r(t);var n=i("6850"),a=i("cdac");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("d954");var r,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"2b39e282",null,!1,n["a"],r);t["default"]=l.exports},"25d3a":function(e,t,i){"use strict";var n=i("4ea4");i("4160"),i("b64b"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("92aa")),o=n(i("1044")),r=n(i("f385")),s={components:{uniPopup:a.default,nsGoodsRecommend:o.default},mixins:[r.default],data:function(){return{isSub:!1,isIphoneX:!1,levelId:0,userInfo:{},levelInfo:{bg_color:"#333"}}},computed:{storeToken:function(){return this.$store.state.token}},onLoad:function(){var e=this;this.isIphoneX=this.$util.uniappIsIPhoneX(),uni.getStorageSync("token")?this.getMemberInfo():setTimeout((function(){e.$refs.login.open("/pages_tool/member/card")}))},onShow:function(){},watch:{storeToken:function(e,t){e&&this.getMemberInfo()}},methods:{getMemberInfo:function(){var e=this;this.$api.sendRequest({url:"/api/member/info",success:function(t){if(0==t.code&&t.data){e.levelId=t.data.member_level,e.userInfo=t.data;var i=t.data.member_level_info,n=t.data.charge_rule?JSON.parse(t.data.charge_rule):{};i.charge_rule_arr=[],Object.keys(n).forEach((function(e){i.charge_rule_arr.push({key:e,value:n[e]})})),e.levelInfo=i}else e.$util.showToast({title:t.message});e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},headimgError:function(){this.userInfo.headimg=this.$util.getDefaultImage().head},openExplainPopup:function(){this.$refs.explainPopup.open()},closeExplainPopup:function(){this.$refs.explainPopup.close()}},onBackPress:function(e){return"navigateBack"!==e.from&&(this.$util.redirectTo("/pages/member/index",{},"reLaunch"),!0)}};t.default=s},3082:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.goods-recommend[data-v-2b39e282]{margin-top:%?74?%;width:100vw}.goods-recommend .goods-recommend-title[data-v-2b39e282]{text-align:center;margin-bottom:%?40?%}.goods-recommend .goods-recommend-title uni-image[data-v-2b39e282]{width:%?690?%;height:%?40?%}.hr-view[data-v-2b39e282]{display:flex;justify-content:center;align-items:center;max-width:100%;box-sizing:initial;font-size:%?32?%}.hr-view .hr[data-v-2b39e282]{width:36%;height:%?2?%;background:#e5e5e5}.hr-view .title[data-v-2b39e282]{padding:0 %?20?%}.goods-list.double-column[data-v-2b39e282]{display:flex;flex-wrap:wrap;margin:0 %?30?%}.goods-list.double-column .goods-item[data-v-2b39e282]{flex:1;position:relative;background-color:#fff;flex-basis:48%;max-width:calc((100% - %?30?%) / 2);margin-right:%?30?%;margin-bottom:%?20?%;border-radius:%?10?%}.goods-list.double-column .goods-item[data-v-2b39e282]:nth-child(2n){margin-right:0}.goods-list.double-column .goods-item .goods-img[data-v-2b39e282]{position:relative;overflow:hidden;padding-top:100%;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%}.goods-list.double-column .goods-item .goods-img uni-image[data-v-2b39e282]{width:100%;position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.goods-list.double-column .goods-item .goods-tag[data-v-2b39e282]{color:#fff;line-height:1;padding:%?8?% %?16?%;position:absolute;border-bottom-right-radius:%?10?%;top:0;left:0;font-size:%?22?%}.goods-list.double-column .goods-item .goods-tag-img[data-v-2b39e282]{position:absolute;border-top-left-radius:%?10?%;width:%?80?%;height:%?80?%;top:0;left:0;z-index:5;overflow:hidden}.goods-list.double-column .goods-item .goods-tag-img uni-image[data-v-2b39e282]{width:100%;height:100%}.goods-list.double-column .goods-item .info-wrap[data-v-2b39e282]{padding:0 %?26?% %?26?% %?26?%}.goods-list.double-column .goods-item .goods-name[data-v-2b39e282]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-top:%?20?%;height:%?68?%}.goods-list.double-column .goods-item .discount-price[data-v-2b39e282]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%;color:var(--price-color)}.goods-list.double-column .goods-item .discount-price .unit[data-v-2b39e282]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info[data-v-2b39e282]{display:flex;margin-top:auto}.goods-list.double-column .goods-item .pro-info .delete-price[data-v-2b39e282]{text-decoration:line-through;flex:1}.goods-list.double-column .goods-item .pro-info .delete-price .unit[data-v-2b39e282]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-2b39e282]{line-height:1}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-2b39e282]:nth-child(2){text-align:right}.goods-list.double-column .goods-item .member-price-tag[data-v-2b39e282]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.double-column .goods-item .member-price-tag uni-image[data-v-2b39e282]{width:100%}',""]),e.exports=t},"3dc3":function(e,t,i){"use strict";i.r(t);var n=i("25d3a"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},4020:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticStyle:{display:"none"}},[e._t("default")],2)},o=[]},"627e":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.member-level[data-v-4e5b3f28]{width:100%;min-height:100vh;position:relative}.level-top[data-v-4e5b3f28]{width:100%;position:relative}.level-top uni-image[data-v-4e5b3f28]{width:100%;height:%?460?%;position:absolute}.banner-container[data-v-4e5b3f28]{width:100vw;position:relative;left:0;top:0}.banner-container .memberInfo[data-v-4e5b3f28]{width:100%;height:%?140?%;padding:%?40?% %?40?% 0;display:flex;align-items:center;justify-content:space-between;box-sizing:border-box}.banner-container .memberInfo uni-image[data-v-4e5b3f28]{width:%?100?%;height:%?100?%;border-radius:50%;border:%?4?% solid #fff;box-sizing:border-box}.banner-container .memberInfo .growth-rules[data-v-4e5b3f28]{position:absolute;display:flex;align-items:center;color:#fff;right:%?40?%;font-size:%?24?%;z-index:10}.banner-container .memberInfo .growth-rules .iconfont[data-v-4e5b3f28]{margin-right:%?10?%}.banner-container .memberInfo .member-desc[data-v-4e5b3f28]{width:calc(100% - %?20?% - %?100?%);height:100%;padding:%?16?% 0;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.banner-container .memberInfo .member-desc uni-view[data-v-4e5b3f28]{font-weight:700;line-height:1;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.banner-container .memberInfo .member-desc .expire-time[data-v-4e5b3f28]{color:#ccc;font-weight:400;margin-top:%?10?%}.banner-container .demand[data-v-4e5b3f28]{width:100%;padding:0 %?20?%;box-sizing:border-box}.banner-container .demand .demand-title[data-v-4e5b3f28]{font-size:%?32?%;font-weight:700;line-height:1;display:flex;align-items:center}.banner-container .demand .demand-title uni-image[data-v-4e5b3f28]{width:%?39?%;height:%?35?%;margin-right:%?10?%}.banner-container .demand .demand-info[data-v-4e5b3f28]{padding:%?10?% %?24?%;box-sizing:border-box;display:flex;flex-direction:column;margin-top:%?27?%;border-radius:%?10?%;justify-content:space-between;height:%?150?%;background:#fff}.banner-container .demand .demand-info .info-title[data-v-4e5b3f28]{display:flex;justify-content:space-between;align-items:center}.banner-container .demand .demand-info .info-title uni-text[data-v-4e5b3f28]:nth-child(1){color:#000;font-size:%?24?%}.banner-container .demand .demand-info .info-title uni-text[data-v-4e5b3f28]:nth-child(2){color:#959595}.banner-container .demand .demand-info uni-progress[data-v-4e5b3f28]{margin-top:%?39?%}.banner-container .demand .demand-info .info-size[data-v-4e5b3f28]{display:flex;justify-content:space-between;align-items:center;font-size:%?24?%;color:#959595}.banner-container .uni-swiper-dots[data-v-4e5b3f28]{bottom:%?30?%!important}.banner-container .image-container[data-v-4e5b3f28]{box-sizing:border-box;width:100%;height:100%;display:flex}.banner-container .image-container uni-image[data-v-4e5b3f28]{width:100%;height:100%}.banner-container .image-container .slide-image[data-v-4e5b3f28]{width:%?535?%;height:%?300?%;z-index:200;display:flex;justify-content:space-between;align-items:center;border-radius:%?20?%;overflow:hidden;position:relative}.banner-container .image-container .slide-image .bg-border[data-v-4e5b3f28]{width:calc(100% - %?40?%);height:calc(100% - %?40?%);position:absolute;top:%?18?%;left:%?20?%;border:%?2?% solid hsla(0,0%,100%,.2);z-index:10;border-radius:%?10?%;opacity:.5}.banner-container .image-container .slide-image .growth-rules[data-v-4e5b3f28]{position:absolute;right:%?40?%;top:%?40?%;z-index:10}.banner-container .image-container .slide-image .info[data-v-4e5b3f28]{width:100%;height:100%;display:flex;flex-direction:column;padding:%?10?% 0;box-sizing:border-box;position:absolute;left:0;bottom:0;padding:%?30?% %?40?%;box-sizing:border-box}.banner-container .image-container .slide-image .info .level-detail[data-v-4e5b3f28]{font-size:%?52?%;display:flex;align-items:center;margin-top:%?26?%}.banner-container .image-container .slide-image .info .growr-name[data-v-4e5b3f28]{font-size:%?24?%;margin-top:%?50?%;opacity:.8}.banner-container .image-container .slide-image .info .growr-value[data-v-4e5b3f28]{font-size:%?24?%;margin-top:%?10?%;opacity:.8}.banner-container .image-container .slide-image .info .progress[data-v-4e5b3f28]{margin-top:%?30?%}.banner-container .image-container .slide-image .info .residue-growr-value[data-v-4e5b3f28]{text-align:right;font-size:%?24?%;margin-top:%?10?%}.banner-container .image-container .slide-image .info uni-view[data-v-4e5b3f28]{color:#fff;line-height:1.3}.banner-container .image-container .slide-image .now_growth[data-v-4e5b3f28]{margin-top:%?20?%}.banner-container .image-container .slide-image .pic[data-v-4e5b3f28]{display:flex;justify-content:center;align-items:center}.banner-container .image-container .slide-image .pic uni-image[data-v-4e5b3f28]{width:%?160?%}.banner-container .image-container .slide-image .isnow[data-v-4e5b3f28]{font-size:%?20?%;color:#fff;padding:%?2?%;line-height:1;margin-left:%?10?%}.banner-container .item-left[data-v-4e5b3f28]{justify-content:flex-end;padding:%?56?% %?26?% 0 0}.banner-container .image-container-box .item-left[data-v-4e5b3f28]{justify-content:center;padding:%?56?% 0 0 0}.banner-container .item-right[data-v-4e5b3f28]{justify-content:flex-start;padding:%?56?% 0 0 %?26?%}.banner-container .item-center[data-v-4e5b3f28]{justify-content:center;padding:%?56?% 0 0 0}.banner-container .card-content[data-v-4e5b3f28]{background-color:#fff;border-radius:%?10?%;padding:%?20?% %?30?% %?20?%;margin:%?20?% %?30?%}.banner-container .card-content .gift-title[data-v-4e5b3f28]{font-size:%?30?%}.banner-container .card-content .equity-itme[data-v-4e5b3f28]{display:flex;align-items:center}.banner-container .card-content .equity-itme uni-image[data-v-4e5b3f28]{width:%?60?%;height:%?60?%;margin-right:%?30?%}.banner-container .card-content .equity-itme .equity-content[data-v-4e5b3f28]{padding:%?20?% 0;line-height:1;flex:1;display:flex;flex-direction:column}.banner-container .card-content .equity-itme .equity-content.active[data-v-4e5b3f28]{border-bottom:%?2?% solid #e5e5e5}.banner-container .card-content .equity-itme .equity-content .equity-desc[data-v-4e5b3f28]{font-size:%?20?%;margin-top:%?16?%;color:#909399}.banner-container .card-privilege-list[data-v-4e5b3f28]{width:100%;flex-wrap:wrap;display:flex;justify-content:center}.banner-container .card-privilege-list .card-privilege-item[data-v-4e5b3f28]{width:33%;display:inline-block;margin-top:0;text-align:center}.banner-container .card-privilege-list .card-privilege-item .card-privilege-icon[data-v-4e5b3f28]{width:%?60?%;height:%?60?%;text-align:center;margin:0 auto;line-height:1}.banner-container .card-privilege-list .card-privilege-item .card-privilege-name[data-v-4e5b3f28]{color:#303133;font-size:%?26?%;padding-top:%?20?%}.banner-container .card-privilege-list .card-privilege-item .card-privilege-text[data-v-4e5b3f28]{color:#909399;font-size:%?22?%;padding:0 %?20?%}.banner-container .card-privilege-list .card-privilege-item .iconfont[data-v-4e5b3f28]{font-size:%?60?%;background-image:-webkit-linear-gradient(top,#e3b66b,#f7daa5);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.banner-container .card-privilege-list .card-privilege-item .iconzhekou[data-v-4e5b3f28], .banner-container .card-privilege-list .card-privilege-item .iconhongbao[data-v-4e5b3f28]{font-size:%?54?%}.banner-container .member-gift[data-v-4e5b3f28]{background-color:#fff;margin:%?20?% %?30?%;padding:%?20?% %?30?%;border-radius:%?10?%}.banner-container .member-gift .gift-title[data-v-4e5b3f28]{font-size:%?30?%}.banner-container .member-gift .gift-itme[data-v-4e5b3f28]{display:flex;align-items:center}.banner-container .member-gift .gift-itme uni-image[data-v-4e5b3f28]{width:%?60?%;height:%?60?%;margin-right:%?30?%}.banner-container .member-gift .gift-itme .gift-content[data-v-4e5b3f28]{padding:%?20?% 0;line-height:1;flex:1;display:flex;flex-direction:column}.banner-container .member-gift .gift-itme .gift-content.active[data-v-4e5b3f28]{border-bottom:%?2?% solid #e5e5e5}.banner-container .member-gift .gift-itme .gift-content .gift-desc[data-v-4e5b3f28]{font-size:%?24?%;margin-top:%?16?%;color:#999}.banner-container .desc-wrap[data-v-4e5b3f28]{box-sizing:border-box;width:100%;height:%?98?%;padding:%?24?% %?66?% 0}.banner-container .desc-wrap .title[data-v-4e5b3f28]{width:100%;height:%?42?%;line-height:%?42?%;color:#222;font-size:%?28?%;font-family:PingFangTC-Regular;font-weight:600;text-align:left}.banner-container .desc-wrap .desc[data-v-4e5b3f28]{margin-top:%?4?%;width:100%;height:%?34?%;line-height:%?34?%;color:#999;font-size:%?24?%;font-family:PingFangTC-Regular;text-align:left}@keyframes descAnimation-data-v-4e5b3f28{0%{opacity:1}25%{opacity:.5}50%{opacity:0}75%{opacity:.5}100%{opacity:1}}@-webkit-keyframes descAnimation-data-v-4e5b3f28{0%{opacity:1}25%{opacity:.5}50%{opacity:0}75%{opacity:.5}100%{opacity:1}}.coupon-popup-box[data-v-4e5b3f28]{background-color:#f7f7f7}.coupon-popup-box .coupon-popup-title[data-v-4e5b3f28]{text-align:center;font-size:%?32?%;line-height:%?90?%;height:%?90?%;display:block;font-weight:700;position:relative;border-bottom:%?1?% solid #eee}.coupon-popup-box .iconfont[data-v-4e5b3f28]{position:absolute;float:right;right:%?44?%;font-size:%?40?%;font-weight:500}.coupon-popup-box .coupon-item[data-v-4e5b3f28]{display:flex;justify-content:space-between;align-items:center;padding:%?20?% %?30?%;margin-bottom:%?20?%;background-color:#fff;border-radius:%?4?%}.coupon-popup-box .coupon-item .coupon-name[data-v-4e5b3f28]{flex:1;display:flex;flex-direction:column}.coupon-popup-box .coupon-item .coupon-name .desc[data-v-4e5b3f28]{margin-top:%?20?%;font-size:%?24?%;color:#ababab}.coupon-popup-box .coupon-item .coupon-price[data-v-4e5b3f28]{color:red}.coupon-popup-box .coupon-item .coupon-price uni-text[data-v-4e5b3f28]{font-size:%?70?%}.coupon-popup-box .coupon-popup-content[data-v-4e5b3f28]{max-height:%?390?%;padding:%?20?%;box-sizing:border-box}.card-content-head[data-v-4e5b3f28]{text-align:center;color:#303133;margin:%?20?% 0}.card-content-head .line-box[data-v-4e5b3f28]{float:left;text-align:center;width:35%;margin-top:%?26?%}.card-content-head .line-box .line[data-v-4e5b3f28]{background-color:#303133;width:%?60?%;height:%?2?%}.card-content-head .card-content-title[data-v-4e5b3f28]{float:left;text-align:center;width:30%;font-size:%?28?%;color:#303133}.right[data-v-4e5b3f28]{float:right}.clear[data-v-4e5b3f28]{clear:both}.card-time-list[data-v-4e5b3f28]{margin:%?-7.5?%;white-space:nowrap;overflow-x:scroll;height:%?256?%}.card-time-list .card-item-box[data-v-4e5b3f28]{padding:%?15?%;display:inline-block;width:33.3333%;box-sizing:border-box}.card-time-list .card-item-box.small[data-v-4e5b3f28]{width:32.3%}.card-time-list .card-item-box .card-time-item[data-v-4e5b3f28]{border:%?2?% solid #ccc;border-radius:%?10?%;text-align:center;padding:%?25?% 0 %?20?%}.card-time-list .card-item-box .card-time-item uni-image[data-v-4e5b3f28]{width:%?60?%}.card-time-list .card-item-box .card-time-item .time-name[data-v-4e5b3f28]{line-height:1.3}.card-time-list .card-item-box .card-time-item.active[data-v-4e5b3f28]{border-color:#e3b66b;background:rgba(227,182,107,.3)}.card-time-list .card-item-box .time-price[data-v-4e5b3f28]{font-size:%?24?%}.card-time-list .card-item-box .time-price uni-text[data-v-4e5b3f28]{font-size:%?32?%}.card-time-list .card-item-box .time-price .price[data-v-4e5b3f28]{font-weight:bolder}.action-wrap[data-v-4e5b3f28]{height:%?140?%}.action-wrap.have-agreement[data-v-4e5b3f28]{height:%?190?%}.action-wrap.bottom-safe-area[data-v-4e5b3f28]{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.action[data-v-4e5b3f28]{position:fixed;z-index:5;left:0;bottom:0;width:100vw;height:%?140?%;background:#fff;box-shadow:0 0 %?20?% rgba(0,0,0,.1);text-align:right;line-height:%?100?%;background:#fff;padding:0 %?40?%;box-sizing:border-box}.action.have-agreement[data-v-4e5b3f28]{height:%?190?%}.action .agreement[data-v-4e5b3f28]{text-align:center;font-size:%?24?%;line-height:1;margin-top:%?20?%}.action .agreement uni-text[data-v-4e5b3f28]{color:#e3b66b}.action.bottom-safe-area[data-v-4e5b3f28]{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.action .action-btn[data-v-4e5b3f28]{width:100%;height:%?80?%;line-height:%?80?%;color:#7c5711;padding:0 %?40?%;display:inline-block;text-align:center;margin:%?30?% 0 0 0;border-radius:%?10?%;border:none;background-image:linear-gradient(0deg,#f7daa5,#e3b66b);box-sizing:border-box}.action .title[data-v-4e5b3f28]{margin-right:%?6?%}.action .bold[data-v-4e5b3f28]{font-weight:700}\r\n/* 说明弹框 */.tips-layer[data-v-4e5b3f28]{background:#fff;z-index:999;height:40%;width:100%}.tips-layer .head[data-v-4e5b3f28]{position:relative}.tips-layer .title[data-v-4e5b3f28]{height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?32?%;font-weight:700}.tips-layer uni-text[data-v-4e5b3f28]{position:absolute;top:%?8?%;right:%?44?%;font-size:%?32?%;font-weight:500}.tips-layer .body[data-v-4e5b3f28]{width:100%;height:calc(100% - %?80?%);overflow-y:scroll}.tips-layer .body .detail[data-v-4e5b3f28]{padding:%?20?%}.tips-layer .body .detail .font-size-base[data-v-4e5b3f28]{margin-bottom:%?10?%}.banner-container .image-container .slide-image[data-v-4e5b3f28]{width:calc(100% - %?60?%);height:%?360?%;background-size:100% 100%;background-repeat:no-repeat}.banner-container .image-container uni-image[data-v-4e5b3f28]{background-color:#e3b66b}.banner-container .slide-image .renew-btn[data-v-4e5b3f28]{text-align:center;line-height:%?56?%;height:%?56?%;border-radius:%?10?%;width:%?160?%;font-size:%?24?%;color:#e3b66b!important;background:#fff;position:absolute;right:%?10?%;bottom:%?40?%;border:none;z-index:10}',""]),e.exports=t},6850:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={nsLoading:i("81d6").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"goods-recommend"},[e.list.length?i("v-uni-view",[i("v-uni-view",{staticClass:"goods-recommend-title"},[i("v-uni-image",{attrs:{src:e.$util.img("public/uniapp/goods/guess-like.png")}})],1),i("v-uni-view",{staticClass:"goods-list double-column"},e._l(e.list,(function(t,n){return i("v-uni-view",{key:n,staticClass:"goods-item margin-bottom",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toDetail(t)}}},[i("v-uni-view",{staticClass:"goods-img"},[i("v-uni-image",{attrs:{src:e.goodsImg(t.goods_image),mode:"widthFix","lazy-load":!0},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.imgError(n)}}}),""!=e.goodsTag(t)?i("v-uni-view",{staticClass:"color-base-bg goods-tag"},[e._v(e._s(e.goodsTag(t)))]):e._e()],1),i("v-uni-view",{staticClass:"info-wrap"},[i("v-uni-view",{staticClass:"name-wrap"},[i("v-uni-view",{staticClass:"goods-name"},[e._v(e._s(t.goods_name))])],1),i("v-uni-view",{staticClass:"lineheight-clear"},[i("v-uni-view",{staticClass:"discount-price"},[i("v-uni-text",{staticClass:"unit  price-style small"},[e._v(e._s(e.$lang("common.currencySymbol")))]),i("v-uni-text",{staticClass:"price  price-style large"},[e._v(e._s(parseFloat(e.showPrice(t)).toFixed(2).split(".")[0]))]),i("v-uni-text",{staticClass:"unit  price-style small"},[e._v("."+e._s(parseFloat(e.showPrice(t)).toFixed(2).split(".")[1]))])],1),t.member_price&&t.member_price==e.showPrice(t)?i("v-uni-view",{staticClass:"member-price-tag"},[i("v-uni-image",{attrs:{src:e.$util.img("public/uniapp/index/VIP.png"),mode:"widthFix"}})],1):1==t.promotion_type?i("v-uni-view",{staticClass:"member-price-tag"},[i("v-uni-image",{attrs:{src:e.$util.img("public/uniapp/index/discount.png"),mode:"widthFix"}})],1):e._e()],1),i("v-uni-view",{staticClass:"pro-info"},[i("v-uni-view",{staticClass:"delete-price font-size-activity-tag color-tip price-font"},[[i("v-uni-text",{staticClass:"unit"},[e._v(e._s(e.$lang("common.currencySymbol")))]),e._v(e._s(t.market_price>0?t.market_price:t.price))]],2),t.sale_show?i("v-uni-view",{staticClass:"sale font-size-activity-tag color-tip"},[e._v("已售"+e._s(t.sale_num)+e._s(t.unit?t.unit:"件"))]):e._e()],1)],1)],1)})),1)],1):e._e(),e.showLoading&&e.load?i("v-uni-view",{staticClass:"circle-box"},[i("ns-loading")],1):e._e()],1)},o=[]},"6d42":function(e,t,i){"use strict";i.r(t);var n=i("4020"),a=i("8f28");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);var r,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);t["default"]=l.exports},"6f87":function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("a9e3"),i("d3b7"),i("acd8"),i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("81d6")),o={name:"ns-goods-recommend",components:{nsLoading:a.default},data:function(){return{list:[],page:1,isAll:!0,isClick:!0,showLoading:!1}},props:{isLike:{type:Boolean,default:!0},size:{type:[Number,String],default:10},auto:{type:Boolean,default:!0},load:{type:Boolean,default:!0},route:{type:String,default:""}},mounted:function(){this.auto&&this.getLikeList()},methods:{init:function(){this.list=[],this.page=1},toDetail:function(e){var t={goods_id:e.goods_id};this.$util.redirectTo("/pages/goods/detail",t)},getLikeList:function(e){var t=this,i=this;if(this.isClick&&this.isAll)return this.isClick=!1,this.page>1&&(this.showLoading=!0),new Promise((function(n,a){i.$api.sendRequest({url:"/api/goodssku/recommend",data:{page:t.page,page_size:t.auto?t.size:e,route:t.route},success:function(e){t.showLoading=!1,t.isClick=!0,0==e.code&&(1==t.page&&(t.list=[]),t.list=t.list.concat(e.data.list),t.list.length==e.data.count&&(t.isAll=!1),t.page+=1,n(e.data.list))}})}))},goodsImg:function(e){var t=e.split(",");return t[0]?this.$util.img(t[0],{size:"mid"}):this.$util.getDefaultImage().goods},imgError:function(e){this.list[e].goods_image=this.$util.getDefaultImage().goods},showPrice:function(e){var t=e.discount_price;return e.member_price&&parseFloat(e.member_price)<parseFloat(t)&&(t=e.member_price),t},goodsTag:function(e){return e.label_name||""}}};t.default=o},"8f28":function(e,t,i){"use strict";i.r(t);var n=i("013c"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},cdac:function(e,t,i){"use strict";i.r(t);var n=i("6f87"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},d954:function(e,t,i){"use strict";var n=i("0a9f"),a=i.n(n);a.a},e4b3:function(e,t,i){var n=i("627e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("9898635c",n,!0,{sourceMap:!1,shadowMode:!1})},f385:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{showTop:!1,scrollTop:0,oldLocation:0}},methods:{scrollToTopNative:function(){uni.pageScrollTo({duration:200,scrollTop:0})}},onReachBottom:function(){this.$refs.goodrecommend&&this.$refs.goodrecommend.getLikeList(10)},onPageScroll:function(e){this.oldLocation=e.scrollTop,e.scrollTop>400?this.showTop=!0:this.showTop=!1}};t.default=n},f894:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={pageMeta:i("6d42").default,uniPopup:i("92aa").default,nsLogin:i("2893").default,loadingCover:i("790a").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-meta",{attrs:{"page-style":e.themeColor}}),i("v-uni-view",{staticClass:"member-level"},[i("v-uni-view",{staticClass:"level-top"},[i("v-uni-image",{attrs:{src:e.$util.img("public/uniapp/level/card-top-bg.png")}})],1),i("v-uni-view",{staticClass:"banner-container"},[i("v-uni-view",{staticClass:"memberInfo"},[e.userInfo.headimg?i("v-uni-image",{attrs:{src:e.$util.img(e.userInfo.headimg),mode:"aspectFill"},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.headimgError.apply(void 0,arguments)}}}):i("v-uni-image",{attrs:{src:e.$util.getDefaultImage().head,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"member-desc"},[i("v-uni-view",{staticClass:"font-size-toolbar"},[e._v(e._s(e.userInfo.nickname))]),e.userInfo.level_expire_time>0?i("v-uni-view",{staticClass:"font-size-tag expire-time"},[e._v("有效期至："+e._s(e.$util.timeStampTurnTime(e.userInfo.level_expire_time,!0)))]):e._e()],1)],1),i("v-uni-view",{staticClass:"image-container item-center"},[i("v-uni-view",{staticClass:"slide-image"},[i("v-uni-view",{staticClass:"bg-border"}),i("v-uni-image",{attrs:{src:e.$util.img("public/uniapp/level/card-bg.png")}}),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"level-detail"},[e._v(e._s(e.levelInfo.level_name))]),i("v-uni-view",{staticClass:"growr-name"},[e._v(e._s(e.levelInfo.level_name)+"可享受消费折扣和")]),i("v-uni-view",{staticClass:"growr-value"},[e._v("会员大礼包等权益")]),""!=e.levelInfo.remark?i("v-uni-view",{staticClass:"growth-rules font-size-tag",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openExplainPopup.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"iconfont iconwenhao font-size-tag"})],1):e._e(),i("v-uni-button",{staticClass:"renew-btn",attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$util.redirectTo("/pages_tool/member/card_buy")}}},[e._v("立即续费")])],1)],1)],1),e.levelInfo.is_free_shipping||e.levelInfo.consume_discount<100||e.levelInfo.point_feedback>0?i("v-uni-view",{staticClass:"card-content"},[i("v-uni-view",{staticClass:"card-content-head"},[i("v-uni-view",{staticClass:"line-box"},[i("v-uni-view",{staticClass:"line right"})],1),i("v-uni-view",{staticClass:"card-content-title"},[e._v("会员权益")]),i("v-uni-view",{staticClass:"line-box"},[i("v-uni-view",{staticClass:"line"})],1),i("v-uni-view",{staticClass:"clear"})],1),i("v-uni-view",{staticClass:"card-privilege-list"},[e.levelInfo.is_free_shipping?i("v-uni-view",{staticClass:"card-privilege-item"},[i("v-uni-view",{staticClass:"card-privilege-icon"},[i("v-uni-text",{staticClass:"iconfont icontedianquanchangbaoyou"})],1),i("v-uni-view",{staticClass:"card-privilege-name"},[e._v("全场包邮")]),i("v-uni-view",{staticClass:"card-privilege-text"},[e._v("享受商品包邮服务")])],1):e._e(),e.levelInfo.consume_discount<100?i("v-uni-view",{staticClass:"card-privilege-item"},[i("v-uni-view",{staticClass:"card-privilege-icon"},[i("v-uni-text",{staticClass:"iconfont iconzhekou"})],1),i("v-uni-view",{staticClass:"card-privilege-name"},[e._v("消费折扣")]),i("v-uni-view",{staticClass:"card-privilege-text"},[e._v("部分商品下单可享"+e._s(e.levelInfo.consume_discount/10)+"折优惠")])],1):e._e(),e.levelInfo.point_feedback>0?i("v-uni-view",{staticClass:"card-privilege-item"},[i("v-uni-view",{staticClass:"card-privilege-icon"},[i("v-uni-text",{staticClass:"iconfont iconjifen2 f32"})],1),i("v-uni-view",{staticClass:"card-privilege-name"},[e._v("积分回馈")]),i("v-uni-view",{staticClass:"card-privilege-text"},[e._v("下单享"+e._s(parseFloat(e.levelInfo.point_feedback))+"倍积分回馈")])],1):e._e()],1),""!=e.levelInfo.send_coupon||e.levelInfo.send_point>0||e.levelInfo.send_balance>0?i("v-uni-view",[i("v-uni-view",{staticClass:"card-content-head"},[i("v-uni-view",{staticClass:"line-box"},[i("v-uni-view",{staticClass:"line right"})],1),i("v-uni-view",{staticClass:"card-content-title"},[e._v("开卡礼包")]),i("v-uni-view",{staticClass:"line-box"},[i("v-uni-view",{staticClass:"line"})],1),i("v-uni-view",{staticClass:"clear"})],1),i("v-uni-view",{staticClass:"card-privilege-list"},[e.levelInfo.send_point>0?i("v-uni-view",{staticClass:"card-privilege-item"},[i("v-uni-view",{staticClass:"card-privilege-icon"},[i("v-uni-text",{staticClass:"iconfont iconjifen3"})],1),i("v-uni-view",{staticClass:"card-privilege-name"},[e._v("积分礼包")]),i("v-uni-view",{staticClass:"card-privilege-text"},[e._v("赠送"+e._s(e.levelInfo.send_point)+"积分")])],1):e._e(),e.levelInfo.send_balance>0?i("v-uni-view",{staticClass:"card-privilege-item"},[i("v-uni-view",{staticClass:"card-privilege-icon"},[i("v-uni-text",{staticClass:"iconfont iconhongbao"})],1),i("v-uni-view",{staticClass:"card-privilege-name"},[e._v("红包礼包")]),i("v-uni-view",{staticClass:"card-privilege-text"},[e._v("赠送"+e._s(parseFloat(e.levelInfo.send_balance))+"红包")])],1):e._e(),""!=e.levelInfo.send_coupon?i("v-uni-view",{staticClass:"card-privilege-item"},[i("v-uni-view",{staticClass:"card-privilege-icon"},[i("v-uni-text",{staticClass:"iconfont iconyouhuiquan1"})],1),i("v-uni-view",{staticClass:"card-privilege-name"},[e._v("优惠券礼包")]),i("v-uni-view",{staticClass:"card-privilege-text"},[e._v("赠送"+e._s(e.levelInfo.send_coupon.split(",").length)+"张优惠券")])],1):e._e()],1)],1):e._e()],1):e._e()],1),i("v-uni-view",{on:{touchmove:function(t){t.preventDefault(),t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)}}},[i("uni-popup",{ref:"explainPopup",attrs:{type:"bottom"}},[i("v-uni-view",{staticClass:"tips-layer"},[i("v-uni-view",{staticClass:"head",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeExplainPopup()}}},[i("v-uni-view",{staticClass:"title"},[e._v("会员卡说明")]),i("v-uni-text",{staticClass:"iconfont iconclose"})],1),i("v-uni-view",{staticClass:"body"},[i("v-uni-view",{staticClass:"detail margin-bottom"},[""!=e.levelInfo.remark?[i("v-uni-view",{staticClass:"tip"},[e._v("会员卡说明")]),i("v-uni-view",{staticClass:"font-size-base"},[e._v(e._s(e.levelInfo.remark))])]:e._e()],2)],1)],1)],1)],1),i("nsGoodsRecommend",{ref:"goodrecommend",attrs:{route:"supermember"}}),i("ns-login",{ref:"login"}),i("loading-cover",{ref:"loadingCover"})],1)],1)},o=[]}}]);