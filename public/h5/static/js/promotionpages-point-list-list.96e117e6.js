(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-point-list-list"],{"07b7":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return o}));var o={uniPopup:e("1fce").default,loadingCover:e("30be").default,nsLogin:e("2e9e").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"point-wrap",attrs:{"data-theme":t.themeStyle}},[t.addonIsExit.pointexchange?e("mescroll-uni",{ref:"mescroll",attrs:{size:10},on:{getData:function(i){arguments[0]=i=t.$handleEvent(i),t.getData.apply(void 0,arguments)}}},[e("template",{attrs:{slot:"list"},slot:"list"},[e("v-uni-view",{staticClass:"head-wrap color-base-bg"},[e("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/point/point_bg.png"),mode:"widthFix"}}),e("v-uni-view",{staticClass:"wrap",class:{"no-login":!t.token}},[t.token?e("v-uni-view",{staticClass:"member-wrap"},[e("v-uni-view",{staticClass:"headimg"},[e("v-uni-image",{attrs:{src:t.memberInfo.headimg?t.$util.img(t.memberInfo.headimg):t.$util.getDefaultImage().default_headimg,mode:"aspectFill"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.memberInfo.headimg=t.$util.getDefaultImage().default_headimg}}})],1),e("v-uni-text",{staticClass:"point"},[t._v(t._s(t.point))]),e("v-uni-text",{staticClass:"point-name"},[t._v("积分")]),e("v-uni-view",{staticClass:"rule"},[e("v-uni-text",{staticClass:"iconfont iconwenhao"}),e("v-uni-text",{staticClass:"font-size-tag",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openPointPopup()}}},[t._v("兑换规则")])],1)],1):e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.login.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"lineheight-clear"},[e("v-uni-text",{staticClass:"font-size-toolbar login-btn"},[t._v("立即登录")])],1),e("v-uni-view",{staticClass:"lineheight-clear"},[e("v-uni-text",{staticClass:"font-size-tag"},[t._v("登录后查看我的积分")])],1)],1),t.token?e("v-uni-view",{staticClass:"action-wrap"},[e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpPage("/otherpages/member/point/point")}}},[t._v("积分明细"),e("v-uni-text",{staticClass:"iconfont iconright"})],1),e("v-uni-view",{staticClass:"split"}),e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpPage("/promotionpages/point/order_list/order_list")}}},[t._v("兑换记录"),e("v-uni-text",{staticClass:"iconfont iconright"})],1)],1):t._e()],1)],1),e("v-uni-view",{staticClass:"body-wrap",class:{"no-login":!t.token}},[t.couponList.length>0?e("v-uni-view",{staticClass:"point-exchange-wrap"},[e("v-uni-view",{staticClass:"type-wrap"},[e("v-uni-text",{staticClass:"type-name"},[t._v("积分换券")]),e("v-uni-view"),e("v-uni-text",{staticClass:"type-sub"},[t._v("更多好券，帮你省钱")])],1),e("v-uni-view",{staticClass:"list-wrap"},[e("v-uni-view",{staticClass:"list-wrap-scroll"},t._l(t.couponList,(function(i,o){return e("v-uni-view",{key:o,staticClass:"list-wrap-item coupon-list-wrap-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(i)}}},[e("v-uni-view",{staticClass:"img-box"},[e("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/point/coupon_"+t.themeStyle+"_bg1.png")},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.imageError(o)}}})],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"coupon",style:{backgroundImage:"url("+t.$util.img("upload/uniapp/point/coupon_"+t.themeStyle+"_bg1.png")+")"}},[e("v-uni-view",{staticClass:"coupon_left color-line-border"},[e("v-uni-view",{staticClass:"price color-base-text"},["reward"==i.coupon_type?[e("v-uni-text",[t._v("￥")]),t._v(t._s(parseFloat(i.money)))]:t._e(),"discount"==i.coupon_type?["discount"==i.coupon_type?[t._v(t._s(parseFloat(i.discount))+"折")]:t._e()]:t._e()],2),e("v-uni-view",{staticClass:"coupon_condition font-size-activity-tag color-base-text"},[t._v(t._s(0==i.at_least?"无门槛优惠券":"满"+parseFloat(i.at_least).toFixed(0)+"可用"))]),e("v-uni-view",{staticClass:"coupon_type font-size-activity-tag color-base-text"},[t._v(t._s(2==i.goods_type?"指定券":"全场券"))])],1),e("v-uni-view",{staticClass:"coupon_right"},[e("v-uni-view",{staticClass:"coupon_num color-base-text font-size-tag"},[t._v(t._s(i.point)+"积分")]),e("v-uni-view",{staticClass:"coupon_btn color-base-text"},[t._v("兑换")])],1)],1)],1)],1)})),1)],1)],1):t._e(),t.hongbaoList.length>0?e("v-uni-view",{staticClass:"point-exchange-wrap"},[e("v-uni-view",{staticClass:"type-wrap"},[e("v-uni-text",{staticClass:"type-name"},[t._v("积分换红包")]),e("v-uni-view"),e("v-uni-text",{staticClass:"type-sub"},[t._v("红包在手，省钱有道")])],1),e("v-uni-view",{staticClass:"list-wrap"},t._l(t.hongbaoList,(function(i,o){return e("v-uni-view",{key:o,staticClass:"list-wrap-item hongbao-list-wrap-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(i)}}},[e("v-uni-view",{staticClass:"img-box"},[e("v-uni-image",{attrs:{src:t.$util.img("upload/uniapp/point/hongbao_bg.png")}})],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"coupon hongbao"},[e("v-uni-view",{staticClass:"coupon_left"},[e("v-uni-view",{staticClass:"price "},[e("v-uni-text",[t._v("￥")]),t._v(t._s(parseFloat(i.balance).toFixed(0)))],1),e("v-uni-view",{staticClass:"coupon_condition font-size-activity-tag"},[t._v(t._s(i.name))])],1),e("v-uni-view",{staticClass:"coupon_right"},[e("v-uni-view",{staticClass:"coupon_num  font-size-tag"},[t._v(t._s(i.point)+"积分")]),e("v-uni-view",{staticClass:"coupon_btn"},[t._v("兑换")])],1)],1)],1)],1)})),1)],1):t._e(),t.goodsList.length>0?e("v-uni-view",{staticClass:"point-exchange-wrap"},[e("v-uni-view",{staticClass:"type-wrap"},[e("v-uni-text",{staticClass:"type-name"},[t._v("积分换好物")]),e("v-uni-view"),e("v-uni-text",{staticClass:"type-sub"},[t._v("积累积分，兑换好物")])],1),e("v-uni-view",{staticClass:"list-wrap"},[t.goodsList.length?e("v-uni-view",{staticClass:"goods-list double-column"},t._l(t.goodsList,(function(i,o){return e("v-uni-view",{key:o,staticClass:"goods-item margin-bottom"},[e("v-uni-view",{staticClass:"goods-img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(i)}}},[e("v-uni-image",{attrs:{src:t.goodsImg(i),mode:"widthFix"},on:{error:function(i){arguments[0]=i=t.$handleEvent(i),t.imgError(o)}}})],1),e("v-uni-view",{staticClass:"info-wrap"},[e("v-uni-view",{staticClass:"name-wrap"},[e("v-uni-view",{staticClass:"goods-name",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(i)}}},[t._v(t._s(i.name))])],1),e("v-uni-view",{staticClass:"lineheight-clear"},[e("v-uni-view",{staticClass:"discount-price"},[e("v-uni-text",{staticClass:"unit color-base-text"},[t._v(t._s(i.point))]),e("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[t._v("积分")]),i.price>0&&i.pay_type>0?[e("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[t._v("+")]),e("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[t._v(t._s(t.$lang("common.currencySymbol")))]),e("v-uni-text",{staticClass:"price color-base-text font-size-toolbar"},[t._v(t._s(i.price))])]:t._e()],2)],1),e("v-uni-view",{staticClass:"pro-info"},[e("v-uni-view",{staticClass:"font-size-activity-tag color-tip"},[t._v("库存"+t._s(i.stock))]),e("v-uni-view",{staticClass:"sale font-size-activity-tag color-tip",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(i)}}})],1)],1)],1)})),1):t._e()],1)],1):t._e()],1)],1)],2):t._e(),e("v-uni-view",{on:{touchmove:function(i){i.preventDefault(),i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}},[e("uni-popup",{ref:"pointPopup",attrs:{type:"bottom"}},[e("v-uni-view",{staticClass:"tips-layer"},[e("v-uni-view",{staticClass:"head",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closePointPopup()}}},[e("v-uni-view",{staticClass:"title"},[t._v("积分说明")]),e("v-uni-text",{staticClass:"iconfont iconclose"})],1),e("v-uni-view",{staticClass:"body"},[e("v-uni-view",{staticClass:"detail margin-bottom"},[e("v-uni-view",{staticClass:"tip"},[t._v("积分的获取")]),e("v-uni-view",{staticClass:"font-size-base"},[t._v("1、积分可在注册、签到、分享、消费、充值时获得。")]),e("v-uni-view",{staticClass:"font-size-base"},[t._v("2、在购买部分商品时可获得积分。")]),e("v-uni-view",{staticClass:"tip"},[t._v("积分的使用")]),e("v-uni-view",{staticClass:"font-size-base"},[t._v("1、积分可用于兑换积分中心的商品。")]),e("v-uni-view",{staticClass:"font-size-base"},[t._v("2、积分可在参与某些活动时使用。")]),e("v-uni-view",{staticClass:"font-size-base"},[t._v("3、积分不得转让，出售，不设有效期。")]),e("v-uni-view",{staticClass:"tip"},[t._v("积分的查询")]),e("v-uni-view",{staticClass:"font-size-base"},[t._v("1、积分可在会员中心中查询具体数额以及明细。")])],1)],1)],1)],1)],1),e("loading-cover",{ref:"loadingCover"}),e("ns-login",{ref:"login"})],1)},n=[]},"0f2a":function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,"[data-v-b4455766] .reward-popup .uni-popup__wrapper-box{background:none!important;max-width:unset!important;max-height:unset!important}",""]),t.exports=i},"43a1":function(t,i,e){"use strict";e.r(i);var o=e("07b7"),a=e("c00d");for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);e("e267"),e("6c93");var s,r=e("f0c5"),l=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"b4455766",null,!1,o["a"],s);i["default"]=l.exports},"49b2":function(t,i,e){"use strict";var o=e("4ea4");e("99af"),e("b680"),e("acd8"),e("ac1f"),e("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=o(e("1fce")),n=o(e("ccd8")),s={components:{uniPopup:a.default},data:function(){return{mescroll:null,categoryList:[{id:1,name:"积分换好物"},{id:2,name:"积分换券"},{id:3,name:"积分换红包"}],isLogin:!1,goodsList:[],couponList:[],hongbaoList:[],point:0,token:null,memberInfo:{headimg:""},signState:1}},mixins:[n.default],onShow:function(){var t=this;if(this.$langConfig.refresh(),!this.addonIsExit.pointexchange)return this.$util.showToast({title:"商家未开启积分商城",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);uni.getStorageSync("token")&&this.getMemberInfo(),this.getCouponList(),this.getHongbaoList(),this.getSignState()},computed:{storeToken:function(){return this.$store.state.token}},watch:{storeToken:function(t,i){t&&this.getMemberInfo()}},methods:{getSignState:function(){var t=this;this.$api.sendRequest({url:"/api/membersignin/getSignStatus",success:function(i){0==i.code&&(t.signState=i.data.is_use)}})},jumpPage:function(t){this.$util.redirectTo(t)},openPointPopup:function(){this.$refs.pointPopup.open()},closePointPopup:function(){this.$refs.pointPopup.close()},getCouponList:function(){var t=this;this.$api.sendRequest({url:"/pointexchange/api/goods/page",data:{page_size:0,type:2},success:function(i){0==i.code&&i.data?t.couponList=i.data.list:t.$util.showToast({title:i.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(){this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},getHongbaoList:function(){var t=this;this.$api.sendRequest({url:"/pointexchange/api/goods/page",data:{page_size:0,type:3},success:function(i){0==i.code&&i.data?t.hongbaoList=i.data.list:t.$util.showToast({title:i.message}),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(){this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},getData:function(t){var i=this;this.$api.sendRequest({url:"/pointexchange/api/goods/page",data:{page_size:t.size,page:t.num,type:1},success:function(e){var o=[],a=e.message;0==e.code&&e.data?o=e.data.list:i.$util.showToast({title:a}),t.endSuccess(o.length),1==t.num&&(i.goodsList=[]),i.goodsList=i.goodsList.concat(o),i.$refs.loadingCover&&i.$refs.loadingCover.hide()},fail:function(){t.endErr(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}})},toDetail:function(t){this.$util.redirectTo("/promotionpages/point/detail/detail",{id:t.id})},getMemberInfo:function(){var t=this;this.$api.sendRequest({url:"/api/member/info",success:function(i){i.code>=0?(t.token=uni.getStorageSync("token"),t.memberInfo=i.data,t.getAccountInfo()):t.token=null}})},getAccountInfo:function(){var t=this;this.$api.sendRequest({url:"/api/memberaccount/info",data:{account_type:"point"},success:function(i){0==i.code&&i.data?isNaN(parseFloat(i.data.point))||(t.point=parseFloat(i.data.point).toFixed(0)):t.$util.showToast({title:i.message})}})},login:function(){this.$refs.login.open("/promotionpages/point/list/list")},imgError:function(t){this.goodsList[t].image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},goodsImg:function(t){switch(t.type){case 1:return this.$util.img(t.image.split(",")[0],{size:"mid"});case 2:return t.image?this.$util.img(t.image):this.$util.img("upload/uniapp/point/coupon.png");case 3:return t.image?this.$util.img(t.image):this.$util.img("upload/uniapp/point/hongbao.png")}}},onShareAppMessage:function(t){var i="积分兑换，好礼带回家哦",e="/promotionpages/point/list/list";return{title:i,path:e,success:function(t){},fail:function(t){}}}};i.default=s},"6c93":function(t,i,e){"use strict";var o=e("c8ed"),a=e.n(o);a.a},c00d:function(t,i,e){"use strict";e.r(i);var o=e("49b2"),a=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);i["default"]=a.a},c8ed:function(t,i,e){var o=e("0f2a");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("4f06").default;a("349c8398",o,!0,{sourceMap:!1,shadowMode:!1})},cd3f:function(t,i,e){var o=e("f68a");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("4f06").default;a("d241713e",o,!0,{sourceMap:!1,shadowMode:!1})},e267:function(t,i,e){"use strict";var o=e("cd3f"),a=e.n(o);a.a},f68a:function(t,i,e){var o=e("24fb");i=o(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */\r\n/* 说明弹框 */.tips-layer[data-v-b4455766]{background:#fff;z-index:999;height:40%;width:100%}.tips-layer .head[data-v-b4455766]{position:relative}.tips-layer .title[data-v-b4455766]{height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?32?%;font-weight:700}.tips-layer uni-text[data-v-b4455766]{position:absolute;top:%?8?%;right:22px;font-size:%?32?%;font-weight:500}.tips-layer .body[data-v-b4455766]{width:100%;height:calc(100% - %?80?%);overflow-y:scroll}.tips-layer .body .detail[data-v-b4455766]{padding:%?20?%}.tips-layer .body .detail .font-size-base[data-v-b4455766]{margin-bottom:%?10?%}.lineheight-clear[data-v-b4455766]{line-height:1!important}.goods-list.double-column[data-v-b4455766]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?20?%}.goods-list.double-column .goods-item[data-v-b4455766]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;background-color:#fff;-webkit-flex-basis:48%;flex-basis:48%;max-width:calc((100% - %?30?%) / 2);margin-right:%?30?%;margin-bottom:%?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.goods-list.double-column .goods-item[data-v-b4455766]:nth-child(2n){margin-right:0}.goods-list.double-column .goods-item .goods-img[data-v-b4455766]{position:relative;overflow:hidden;padding-top:100%;-webkit-border-top-left-radius:%?10?%;border-top-left-radius:%?10?%;-webkit-border-top-right-radius:%?10?%;border-top-right-radius:%?10?%}.goods-list.double-column .goods-item .goods-img uni-image[data-v-b4455766]{width:100%;position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.goods-list.double-column .goods-item .goods-tag[data-v-b4455766]{color:#fff;line-height:1;padding:%?8?% %?16?%;position:absolute;-webkit-border-bottom-right-radius:%?10?%;border-bottom-right-radius:%?10?%;top:0;left:0;font-size:%?22?%}.goods-list.double-column .goods-item .goods-tag-img[data-v-b4455766]{position:absolute;-webkit-border-top-left-radius:%?10?%;border-top-left-radius:%?10?%;width:%?80?%;height:%?80?%;top:0;left:0;z-index:5;overflow:hidden}.goods-list.double-column .goods-item .goods-tag-img uni-image[data-v-b4455766]{width:100%;height:100%}.goods-list.double-column .goods-item .info-wrap[data-v-b4455766]{padding:0 %?26?% %?26?% %?26?%}.goods-list.double-column .goods-item .goods-name[data-v-b4455766]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;margin-top:%?20?%;height:%?36?%}.goods-list.double-column .goods-item .discount-price[data-v-b4455766]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%}.goods-list.double-column .goods-item .discount-price .unit[data-v-b4455766]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info[data-v-b4455766]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?16?%}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-b4455766]{line-height:1;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-b4455766]:nth-child(2){-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.goods-list.double-column .goods-item .pro-info > uni-view uni-button[data-v-b4455766]{padding:0 %?16?%;line-height:2}.goods-list.double-column .goods-item .member-price-tag[data-v-b4455766]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.double-column .goods-item .member-price-tag uni-image[data-v-b4455766]{width:100%}.head-wrap[data-v-b4455766]{width:100vw;line-height:1;position:relative;height:%?270?%}.head-wrap > uni-image[data-v-b4455766]{width:100%}.head-wrap .wrap[data-v-b4455766]{width:100%;height:100%;position:absolute;z-index:5;top:0;left:0}.head-wrap .member-wrap[data-v-b4455766]{height:%?190?%;padding:%?50?% %?30?% %?30?% %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.head-wrap .member-wrap .headimg[data-v-b4455766]{width:%?100?%;height:%?100?%;background:#fff;border:2px solid #fff;-webkit-border-radius:50%;border-radius:50%;overflow:hidden}.head-wrap .member-wrap .headimg uni-image[data-v-b4455766]{width:100%;height:100%}.head-wrap .member-wrap .point[data-v-b4455766]{margin-left:%?30?%;color:#fff;font-size:%?36?%}.head-wrap .member-wrap .point-name[data-v-b4455766]{font-size:%?24?%;color:#fff;margin-left:%?4?%;margin-top:%?5?%}.head-wrap .member-wrap .iconjifen1[data-v-b4455766]{color:#fff;margin-left:%?8?%}.head-wrap .member-wrap .rule[data-v-b4455766]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#fff}.head-wrap .member-wrap .iconwenhao[data-v-b4455766]{font-size:%?24?%;color:#fff;margin-right:%?6?%}.head-wrap .action-wrap[data-v-b4455766]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;background-color:hsla(0,0%,100%,.1)}.head-wrap .action-wrap uni-view[data-v-b4455766]{line-height:1;text-align:center;width:calc((100vw - %?1?%) / 2);color:#fff}.head-wrap .action-wrap uni-view uni-text[data-v-b4455766]{font-size:%?24?%;margin-left:%?8?%}.head-wrap .action-wrap uni-view.split[data-v-b4455766]{width:%?1?%;height:%?50?%;background-color:hsla(0,0%,93.3%,.3);-webkit-flex-shrink:0;flex-shrink:0}.head-wrap .action-wrap uni-view uni-image[data-v-b4455766]{width:100%}.head-wrap .no-login[data-v-b4455766]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.head-wrap .no-login uni-text[data-v-b4455766]{color:#fff}.head-wrap .no-login .login-btn[data-v-b4455766]{display:inline-block;height:%?70?%;line-height:%?70?%;width:%?200?%;border:1px solid #fff;-webkit-border-radius:%?70?%;border-radius:%?70?%;margin-bottom:%?20?%}.ns-adv[data-v-b4455766]{margin:%?20?% %?30?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;overflow:hidden;line-height:1}.ns-adv uni-image[data-v-b4455766]{width:100%}.body-wrap[data-v-b4455766]{margin-top:%?50?%}.body-wrap.no-login[data-v-b4455766]{margin-top:%?20?%}.body-wrap .point-exchange-wrap[data-v-b4455766]{padding:0 %?30?%;margin-top:%?30?%}.body-wrap .type-wrap[data-v-b4455766]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.body-wrap .type-wrap .type-name[data-v-b4455766]{font-size:%?30?%;color:#303133;line-height:1}.body-wrap .type-wrap > uni-view[data-v-b4455766]{width:%?2?%;height:%?23?%;background-color:#909399;margin:0 %?20?%}.body-wrap .type-wrap .type-sub[data-v-b4455766]{font-size:%?24?%;color:#909399;line-height:1}.body-wrap .list-wrap[data-v-b4455766]{width:100%}.body-wrap .list-wrap .list-wrap-scroll[data-v-b4455766]{width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;line-height:1}.body-wrap .list-wrap .list-wrap-item[data-v-b4455766]{display:inline-block;width:%?330?%;overflow:hidden;margin-right:%?30?%;margin-top:%?20?%;position:relative}.body-wrap .list-wrap .list-wrap-item.hongbao-list-wrap-item[data-v-b4455766]{height:%?141?%}.body-wrap .list-wrap .list-wrap-item[data-v-b4455766]:nth-child(2n+2){margin-right:0}.body-wrap .list-wrap .list-wrap-item .img-box[data-v-b4455766]{width:100%;height:100%;position:absolute;top:0;left:0}.body-wrap .list-wrap .list-wrap-item .img-box uni-image[data-v-b4455766]{width:100%;height:100%}.body-wrap .list-wrap .list-wrap-item .content[data-v-b4455766]{position:relative;z-index:9}.body-wrap .list-wrap .list-wrap-item .content .coupon[data-v-b4455766]{background-size:100% 100%;background-repeat:no-repeat;-webkit-border-radius:%?10?%;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_right[data-v-b4455766]{position:relative;width:%?120?%;min-width:%?120?%}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_right .coupon_btn[data-v-b4455766]{margin:%?10?% auto 0;width:%?80?%;height:%?40?%;line-height:%?40?%;font-size:%?24?%;text-align:center;-webkit-border-radius:%?40?%;border-radius:%?40?%;border-width:1px;border-style:solid}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_right .coupon_num[data-v-b4455766]{margin-top:%?10?%;text-align:center}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_right[data-v-b4455766]::after{position:absolute;top:0;margin-left:0;content:"";width:0;height:100%;border-left:1px dashed;opacity:.2}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_left[data-v-b4455766]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?20?%}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_left .price[data-v-b4455766]{font-size:%?48?%;font-weight:500;margin-top:0!important;padding:0;font-weight:600}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_left .price uni-text[data-v-b4455766]{font-size:%?24?%}.body-wrap .list-wrap .list-wrap-item .content .coupon .coupon_left .coupon_condition[data-v-b4455766]{width:%?170?%;margin-top:%?20?%;line-height:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body-wrap .list-wrap .list-wrap-item .content .hongbao .coupon_left .price[data-v-b4455766], .body-wrap .list-wrap .list-wrap-item .content .hongbao .coupon_left .coupon_condition[data-v-b4455766]{color:#fff}.body-wrap .list-wrap .list-wrap-item .content .hongbao .coupon_right .coupon_num[data-v-b4455766]{color:#fff}.body-wrap .list-wrap .list-wrap-item .content .hongbao .coupon_right .coupon_btn[data-v-b4455766]{color:#fff;border-color:#fff}.body-wrap .list-wrap .list-wrap-item .content .hongbao .coupon_right[data-v-b4455766]::after{position:absolute;top:0;margin-left:0;content:"";width:0;height:100%;border-left:0;opacity:.2}.body-wrap .list-wrap .list-wrap-item .content .coupon-price-wrap[data-v-b4455766]{width:100%;height:%?105?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.body-wrap .list-wrap .list-wrap-item .content .coupon-price-wrap .coupon-price[data-v-b4455766]{font-size:%?48?%;margin-top:%?10?%;margin-left:%?20?%}.body-wrap .list-wrap .list-wrap-item .content .coupon-price-wrap .coupon-price uni-text[data-v-b4455766]{font-size:%?24?%}.body-wrap .list-wrap .list-wrap-item .content .coupon-point .coupon-point-num[data-v-b4455766]{width:%?160?%;height:%?44?%;position:relative}.body-wrap .list-wrap .list-wrap-item .content .coupon-point .coupon-point-num uni-image[data-v-b4455766]{width:100%;height:100%;position:absolute}.body-wrap .list-wrap .list-wrap-item .content .coupon-point .coupon-point-num uni-text[data-v-b4455766]{position:relative;z-index:9;color:#fff;font-size:%?24?%;display:inline-block;width:100%;line-height:%?44?%;text-align:center;vertical-align:top}.body-wrap .list-wrap .list-wrap-item .content .coupon-point .coupon-conditions[data-v-b4455766]{font-size:%?20?%;color:#909399;line-height:1;margin-top:%?24?%}.body-wrap .list-wrap .list-wrap-item .content .coupon-name[data-v-b4455766]{font-size:%?24?%;color:#303133;margin-top:%?23?%;line-height:1;padding:0 %?22?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body-wrap .list-wrap .list-wrap-item .content.hongbao-content[data-v-b4455766]{background-color:#fff;-webkit-border-radius:%?20?%;border-radius:%?20?%;padding-bottom:%?30?%}.body-wrap .list-wrap .list-wrap-item .content .hongbao-img[data-v-b4455766]{height:%?330?%}.body-wrap .list-wrap .list-wrap-item .content .hongbao-img uni-image[data-v-b4455766]{width:100%;height:100%}.body-wrap .list-wrap .list-wrap-item .content .price[data-v-b4455766]{font-size:%?28?%;color:#303133;line-height:1;padding-left:%?26?%;margin-top:%?20?%}.body-wrap .list-wrap .list-wrap-item .content .point[data-v-b4455766]{font-size:%?32?%;padding-left:%?26?%;margin-top:%?17?%;line-height:1}.body-wrap .list-wrap .list-wrap-item .content .point uni-text[data-v-b4455766]{font-size:%?24?%}.body-wrap .list-wrap .list-wrap-item .content .stock[data-v-b4455766]{font-size:%?20?%;color:#909399;line-height:1;padding-left:%?26?%;margin-top:%?20?%}',""]),t.exports=i}}]);