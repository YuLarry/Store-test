(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-blindBox-index-index"],{1364:function(e,i,t){"use strict";(function(e){var a=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(t("a7e3")),o={data:function(){return{timeoutObj:null,servicer_id:null,pingInterval:n.default.pingInterval}},onLoad:function(){var e=this;uni.closeSocket(),e.checkOpenSocket()},methods:{checkOpenSocket:function(){e.log("判断是否已连接");var i=this;uni.sendSocketMessage({data:"ping",success:function(i){e.log("连接成功,检查")},fail:function(t){e.log("连接失败"),i.openConnection()}})},openConnection:function(){e.log("打开连接"),uni.connectSocket({url:n.default.webSocket,method:"POST",success:function(i){e.log("连接成功 connectSocket=",i)},fail:function(i){e.log("连接失败 connectSocket=",i)}}),this.onSocketMessage()},onSocketMessage:function(){var i=this;e.log("开始监听");var t=this;this.pingInterval=n.default.pingInterval,this.timeoutObj=null,uni.onSocketMessage((function(a){var n=JSON.parse(a.data);if(e.log("监听该服务器消息",a),"close"==n.type)return clearInterval(t.timeoutObj),t.timeoutObj=null,void uni.closeSocket();i.reset(),i.getSocketMsg(a.data)}))},getSocketMsg:function(e){var i=this,t=JSON.parse(e),a={isItMe:!1};if(a.contentType=t.type,"init"==t.type)i.$api.sendRequest({url:"/servicer/api/chat/bind",data:{client_id:t.data.client_id,site_id:i.siteId},success:function(e){0==e.code?i.servicer_id=e.data.servicer_id:i.servicer_id=0,i.getChatList()}});else{if("connect"==t.type)return!1;"string"==t.type?a.content=t.data.servicer_say:"image"==t.type?a.image=t.data.servicer_say:"order"==t.type?a.order_id=t.data.order_id:"goodssku"==t.type&&(a.sku_id=t.data.goods_sku_id)}"init"!=t.type&&(i.messageList.push(a),i.$nextTick((function(){i.setPageScrollTo()})))},reset:function(){e.log("检测心跳"),clearInterval(this.timeoutObj),this.start()},start:function(){e.log("启动心跳");var i=this;this.timeoutObj=setInterval((function(){uni.sendSocketMessage({data:"ping",success:function(i){e.log("连接中....")},fail:function(t){e.log("连接失败重新连接...."),i.openConnection()}})}),this.pingInterval)}},onUnload:function(){clearInterval(this.timeoutObj),this.timeoutObj=null,this.$api.sendRequest({url:"/servicer/api/chat/bye",data:{servicer_id:this.servicer_id,site_id:this.siteId},success:function(e){uni.closeSocket()},fail:function(e){uni.closeSocket()}})}};i.default=o}).call(this,t("5a52")["default"])},"2c97":function(e,i,t){"use strict";t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return o})),t.d(i,"a",(function(){return a}));var a={uniPopup:t("d7b6").default,nsLogin:t("2bc6").default,loadingCover:t("4c1d").default},n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"blind-box",attrs:{"data-theme":e.themeStyle}},[e.info.blindbox_inventory<=0?t("v-uni-view",{staticClass:"null"},[t("v-uni-text",{staticClass:"iconfont icongantanhao1 gantan"}),t("v-uni-text",[e._v("商品库存不足，请等待商家补货！")])],1):e._e(),t("v-uni-view",{staticClass:"box-bg",style:{backgroundImage:"url("+e.$util.img("upload/uniapp/blindBox/index_bg.png")+")"}},[t("v-uni-view",{staticClass:"top"},[t("v-uni-view",{staticClass:"top-img"},[""!=e.info.blindbox_images?t("v-uni-image",{attrs:{src:e.$util.img(e.info.blindbox_images),mode:"aspectFit"},on:{error:function(i){arguments[0]=i=e.$handleEvent(i),e.boxImg()}}}):t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/blindBox/default.png")}})],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"blind-title font-size-toolbar"},[e._v(e._s(e.info.blindbox_name))]),t("v-uni-view",{staticClass:"scribe-price font-size-tag"},[e._v("￥"+e._s(e.info.price))]),e.info.new_price>0?t("v-uni-view",{staticClass:"new-price font-size-tag"},[e._v("新人价："),t("v-uni-text",{staticClass:"icon"},[e._v("￥")]),t("v-uni-text",{staticClass:"money"},[e._v(e._s(e.info.new_price))])],1):e._e()],1),t("v-uni-view",{staticClass:"rule font-size-tag",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.rule()}}},[e._v("活动规则")]),t("v-uni-view",{staticClass:"explain-img",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toIndex()}}},[t("v-uni-image",{staticClass:"index-img",attrs:{src:e.$util.img("/upload/uniapp/blindBox/index.png"),mode:""}})],1)],1),t("v-uni-view",{staticClass:"cabinet-box"},[t("v-uni-view",{staticClass:"cabinet",style:{backgroundImage:"url("+e.$util.img("upload/uniapp/blindBox/cabinet_two.png")+")"}},[t("v-uni-swiper",{attrs:{autoplay:!1,"indicator-dots":!1,interval:3e3,duration:1e3,current:e.inxs,circular:!0,"disable-touch":!0}},e._l(e.boxPage,(function(i,a){return t("v-uni-swiper-item",{key:a},[t("v-uni-view",{staticClass:"center-one"},e._l(i,(function(i,a){return t("v-uni-view",{key:a,staticClass:"item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checked(a,i)}}},[0==i.status?t("v-uni-image",{staticClass:"box",attrs:{src:e.$util.img("upload/uniapp/blindBox/box.png"),mode:""}}):e._e(),1==i.status?t("v-uni-image",{staticClass:"box",attrs:{src:e.$util.img("upload/uniapp/blindBox/null_box.png"),mode:""}}):e._e(),e.act==a?t("v-uni-image",{staticClass:"checked",attrs:{src:e.$util.img("upload/uniapp/blindBox/checked.png")}}):e._e()],1)})),1)],1)})),1),t("v-uni-view",{staticClass:"btn-one",style:{backgroundImage:"url("+e.$util.img("upload/uniapp/blindBox/btn_one.png")+")"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.changeGroup()}}},[e._v("换一组")]),t("v-uni-view",{staticClass:"btn-two",style:{backgroundImage:"url("+e.$util.img("upload/uniapp/blindBox/btn_two.png")+")"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.openBlind()}}},[e._v("拆盲盒")])],1)],1),t("v-uni-view",{staticClass:"list-box"},[t("v-uni-view",{staticClass:"list_bit",style:{backgroundImage:"url("+e.$util.img("upload/uniapp/blindBox/goods_bg.png")+")"}},[t("v-uni-view",{staticClass:"list",attrs:{id:"innovate"}},[t("v-uni-view",{ref:"name",staticClass:"imgs-list",style:{transform:"translateX("+e.lampX+"rpx)"}},e._l(e.infoList,(function(i,a){return i.goods_image?t("v-uni-image",{key:a,staticClass:"imgs-img",attrs:{src:e.goodsImg(i.goods_image),mode:"aspectFit"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.redirect("/pages/goods/detail/detail",{sku_id:i.sku_id})},error:function(i){arguments[0]=i=e.$handleEvent(i),e.infoListImg(a)}}}):e._e()})),1)],1)],1),t("v-uni-view",{staticClass:"all font-size-tag",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.redirect("/otherpages/blindBox/goods_list/goods_list",{blindbox_id:e.info.blindbox_id})}}},[e._v("查看全部")])],1),t("v-uni-view",{staticClass:"footer",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toMyprize()}}},[e._v("我的奖品")])],1),t("uni-popup",{ref:"rulePopup",attrs:{type:"center"}},[t("v-uni-view",{staticClass:"rule-wrap"},[t("v-uni-view",{staticClass:"content-wrap"},[t("v-uni-image",{staticClass:"rule-head",attrs:{src:e.$util.img("upload/uniapp/blindBox/rule_bg.png"),mode:""}}),t("v-uni-view",{staticClass:"rule-title font-size-toolbar"},[e._v("活动规则")]),t("v-uni-scroll-view",{staticClass:"rule",attrs:{"scroll-y":"true"}},[t("v-uni-view",[t("v-uni-view",{staticClass:"rule-tit"},[t("v-uni-view",{staticClass:"rule-img"},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/blindBox/tag.png"),mode:""}})],1),t("v-uni-view",{staticClass:"tit"},[e._v("1. 活动时间")])],1),t("v-uni-view",{staticClass:"text"},[e._v("开始时间："+e._s(e.$util.timeStampTurnTime(e.info.start_time)))]),t("v-uni-view",{staticClass:"text"},[e._v("结束时间："+e._s(e.$util.timeStampTurnTime(e.info.end_time)))]),e.info.remark?t("v-uni-view",{staticClass:"rule-tit"},[t("v-uni-view",{staticClass:"rule-img"},[t("v-uni-image",{attrs:{src:e.$util.img("upload/uniapp/blindBox/tag.png"),mode:""}})],1),t("v-uni-view",{staticClass:"tit"},[e._v("2. 活动说明")])],1):e._e(),e.info.remark?t("v-uni-view",{staticClass:"text"},[e._v(e._s(e.info.remark))]):e._e()],1)],1),t("v-uni-text",{staticClass:"iconfont iconroundclose",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.closeRulePopup.apply(void 0,arguments)}}})],1)],1)],1),t("v-uni-view",{staticClass:"success-popup"},[t("uni-popup",{ref:"againPopup",attrs:{type:"center"}},[t("v-uni-view",{staticClass:"success-wrap"},[t("v-uni-view",{staticClass:"content-wrap"},[t("v-uni-view",{staticClass:"success",style:{backgroundImage:"url("+e.$util.img("upload/uniapp/blindBox/success_bg.png")+")"}},[t("v-uni-view",{staticClass:"goods"},[t("v-uni-view",{staticClass:"goods-img"},[e.boxDetail.sku_image?t("v-uni-image",{attrs:{src:e.$util.img(e.boxDetail.sku_image),mode:"aspectFit"}}):e._e()],1),t("v-uni-view",{staticClass:"goods-name"},[e._v(e._s(e.boxDetail.sku_name))]),t("v-uni-view",{staticClass:"goods-price color-base-text"},[t("v-uni-text",{staticClass:"font-size-tag"},[e._v("￥")]),e._v(e._s(e.boxDetail.price))],1)],1),t("v-uni-view",{staticClass:"again"},[t("v-uni-view",{staticClass:"color-sub discharge"},[e._v("已为您存放至盒柜"),t("v-uni-text",{staticClass:"color-base-text tobox",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.redirect("/otherpages/blindBox/my_prize/my_prize",{blindbox_id:e.boxDetail.blindbox_id})}}},[e._v("前往我的奖品>")])],1),t("v-uni-view",{staticClass:"agains-btn"},[t("v-uni-view",{staticClass:"fill-btn",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.redirect("/otherpages/blindBox/fillAddress/fillAddress",{blindbox_goods_id:e.boxDetail.blindbox_goods_id,out_trade_no:e.outTradeNo})}}},[e._v("填写收货信息")]),t("v-uni-view",{staticClass:"again-btn color-base-bg",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.reagain()}}},[e._v("再来一次")])],1)],1)],1),t("v-uni-view",{staticClass:"close-btn",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.successClose()}}},[t("v-uni-image",{attrs:{src:e.$util.img("/upload/uniapp/hongbao/close.png"),mode:""}})],1)],1)],1)],1)],1),e.info.member_info?t("v-uni-view",{},[t("ns-payment",{ref:"choosePaymentPopup",attrs:{isBalance:e.is_balance,balanceDeduct:e.info.price>0&&e.info.member_info.balance_total>0?e.balanceDeduct:"0",payMoney:e.payMoney},on:{useBalance:function(i){arguments[0]=i=e.$handleEvent(i),e.useBalance.apply(void 0,arguments)},confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.blindOrderCreate.apply(void 0,arguments)}}})],1):e._e(),t("ns-login",{ref:"login"}),t("loading-cover",{ref:"loadingCover"})],1)},o=[]},"47c7":function(e,i,t){var a=t("24fb");i=a(!1),i.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.blind-box .null[data-v-13fbea3e]{color:red;line-height:1;margin-left:%?30?%;padding:%?24?% 0}.blind-box .null .gantan[data-v-13fbea3e]{margin-right:%?20?%}.blind-box .box-bg[data-v-13fbea3e]{background-size:100% 100%;background-repeat:no-repeat;padding-bottom:%?160?%;height:100vh}.blind-box .top[data-v-13fbea3e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-left:%?30?%;position:relative;padding-top:%?60?%}.blind-box .top .top-img[data-v-13fbea3e]{width:%?210?%;height:%?210?%;margin-right:%?20?%}.blind-box .top .top-img uni-image[data-v-13fbea3e]{width:100%;border-radius:%?10?%;height:100%}.blind-box .top .right[data-v-13fbea3e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.blind-box .top .right uni-view[data-v-13fbea3e]{color:#fff}.blind-box .top .right .blind-title[data-v-13fbea3e]{line-height:1.5;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;word-break:break-word;height:%?100?%}.blind-box .top .right .scribe-price[data-v-13fbea3e]{line-height:1;margin-top:%?20?%;text-decoration:line-through}.blind-box .top .right .new-price[data-v-13fbea3e]{line-height:1}.blind-box .top .right .new-price .icon[data-v-13fbea3e]{font-size:%?30?%}.blind-box .top .right .new-price .money[data-v-13fbea3e]{font-size:%?40?%}.blind-box .top .rule[data-v-13fbea3e]{width:%?20?%;height:%?100?%;line-height:1;color:#fff;background-color:#4c3889;padding:%?20?%;border-radius:%?10?% 0 0 %?10?%;margin-top:%?-20?%}.blind-box .top .explain-img[data-v-13fbea3e]{width:%?36?%;height:%?36?%;position:absolute;top:%?200?%;left:%?660?%;z-index:1000;background-color:#4c3889;padding:%?12?%;border-radius:%?10?% 0 0 %?10?%}.blind-box .top .explain-img .index-img[data-v-13fbea3e]{width:100%!important;height:100%!important}.blind-box .cabinet-box[data-v-13fbea3e]{height:%?780?%}.blind-box .cabinet-box .cabinet[data-v-13fbea3e]{background-size:100%;background-repeat:no-repeat;position:relative;height:100%;margin:%?84?% %?30?% 0}.blind-box .cabinet-box .cabinet uni-swiper[data-v-13fbea3e]{height:%?600?%!important}.blind-box .cabinet-box .cabinet .center-one[data-v-13fbea3e]{position:absolute;top:%?90?%;left:%?94?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.blind-box .cabinet-box .cabinet .center-one .item[data-v-13fbea3e]{position:relative}.blind-box .cabinet-box .cabinet .center-one .item .checked[data-v-13fbea3e]{z-index:601;width:%?142?%!important;height:%?168?%!important;margin-top:%?36?%!important;position:absolute!important;left:%?-12?%;top:0}.blind-box .cabinet-box .cabinet .center-one .item .box[data-v-13fbea3e]{width:%?120?%;height:%?122?%;margin-right:%?72?%;position:relative;margin-top:%?76?%}.blind-box .cabinet-box .cabinet .btn-one[data-v-13fbea3e]{width:%?270?%;padding:%?20?% 0 %?32?%;line-height:1;background-size:100% 100%;background-repeat:no-repeat;font-weight:700;text-align:center;position:absolute;top:%?620?%;left:%?60?%;color:#fff}.blind-box .cabinet-box .cabinet .btn-two[data-v-13fbea3e]{width:%?270?%;padding:%?20?% 0 %?32?%;line-height:1;background-size:100% 100%;background-repeat:no-repeat;font-weight:700;text-align:center;position:absolute;top:%?620?%;left:%?360?%;color:#fff}.blind-box .list-box[data-v-13fbea3e]{position:relative;margin:%?-30?% %?30?% %?68?%;z-index:500;overflow:hidden}.blind-box .list-box .list_bit[data-v-13fbea3e]{background-size:100% 100%;background-repeat:no-repeat;height:%?230?%;display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?70?% 0 %?30?%}.blind-box .list-box .list_bit .list[data-v-13fbea3e]{height:%?230?%;position:relative;padding:0 %?10?%;overflow:hidden;overflow-x:scroll;width:90%}.blind-box .list-box .list_bit .list .imgs-list[data-v-13fbea3e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?30?%}.blind-box .list-box .list_bit .list .imgs-list .imgs-img[data-v-13fbea3e]{-webkit-transition:all .4s;transition:all .4s;background-color:#fff}.blind-box .list-box .list_bit .list uni-image[data-v-13fbea3e]{width:%?170?%;height:%?170?%;border-radius:%?10?%;margin-right:%?20?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}@-webkit-keyframes scroll-data-v-13fbea3e{100%{\r\n    /* 需要滚动内容的总高度 */left:%?-540?%}}@keyframes scroll-data-v-13fbea3e{100%{\r\n    /* 需要滚动内容的总高度 */left:%?-540?%}}.blind-box .list-box .all[data-v-13fbea3e]{width:%?20?%;line-height:1;color:#fff;background:-webkit-linear-gradient(bottom,#ffc579,#ffa141);background:linear-gradient(0deg,#ffc579,#ffa141);padding:%?38?% %?18?%;border-radius:5px;position:absolute;top:%?30?%;right:%?30?%}.blind-box .footer[data-v-13fbea3e]{font-size:%?30?%;color:#fff;background-color:#8a6de1;border-radius:25px 25px 0 0;width:100%;line-height:1;padding:%?36?% 0;text-align:center;position:fixed;bottom:0;z-index:600}.blind-box .rule-wrap[data-v-13fbea3e]{border-radius:%?10?%;width:79.95vw;box-sizing:border-box;background-color:#fff}.blind-box .rule-wrap .content-wrap[data-v-13fbea3e]{width:100%;border-radius:%?8?%}.blind-box .rule-wrap .content-wrap .rule-title[data-v-13fbea3e]{position:absolute;text-align:center;font-weight:700;color:#fff;left:40%;top:%?40?%}.blind-box .rule-wrap .content-wrap .rule-head[data-v-13fbea3e]{width:100%;height:%?146?%;border-radius:4px}.blind-box .rule-wrap .content-wrap .rule[data-v-13fbea3e]{padding:0 %?30?% %?30?%;box-sizing:border-box;max-height:%?700?%}.blind-box .rule-wrap .content-wrap .rule .rule-tit[data-v-13fbea3e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.blind-box .rule-wrap .content-wrap .rule .rule-img[data-v-13fbea3e]{width:%?30?%;height:%?32?%;margin-right:%?20?%}.blind-box .rule-wrap .content-wrap .rule .rule-img uni-image[data-v-13fbea3e]{width:100%;height:100%}.blind-box .rule-wrap .content-wrap .rule .tit[data-v-13fbea3e]{font-weight:700;margin-top:%?10?%;font-size:%?30?%}.blind-box .rule-wrap .content-wrap .rule .text[data-v-13fbea3e]{word-break:break-word;margin-left:%?48?%}.blind-box .rule-wrap .content-wrap .iconroundclose[data-v-13fbea3e]{color:#fff;text-align:center;position:absolute;bottom:%?-150?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:%?70?%}.blind-box .success-wrap[data-v-13fbea3e]{width:%?630?%}.blind-box .success-wrap .content-wrap[data-v-13fbea3e]{width:100%;border-radius:%?20?%}.blind-box .success-wrap .content-wrap .success[data-v-13fbea3e]{background-size:100% 100%;background-repeat:no-repeat;padding:%?50?% 0 0}.blind-box .success-wrap .content-wrap .success .goods[data-v-13fbea3e]{width:%?360?%;margin:0 auto;background-color:#fff;border-radius:%?10?%}.blind-box .success-wrap .content-wrap .success .goods .goods-img[data-v-13fbea3e]{width:%?360?%;height:%?360?%}.blind-box .success-wrap .content-wrap .success .goods .goods-img uni-image[data-v-13fbea3e]{width:%?360?%;height:%?360?%}.blind-box .success-wrap .content-wrap .success .goods .goods-name[data-v-13fbea3e]{padding:%?20?% %?26?% 0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:%?80?%;line-height:1.4}.blind-box .success-wrap .content-wrap .success .goods .goods-price[data-v-13fbea3e]{line-height:1;padding:%?16?% %?26?% %?26?%;font-size:%?36?%}.blind-box .success-wrap .content-wrap .success .again[data-v-13fbea3e]{background-color:#fff;border-radius:%?20?%;padding:%?30?% 0;margin-top:%?50?%}.blind-box .success-wrap .content-wrap .success .again .discharge[data-v-13fbea3e]{text-align:center}.blind-box .success-wrap .content-wrap .success .again .discharge .tobox[data-v-13fbea3e]{margin-left:%?20?%}.blind-box .success-wrap .content-wrap .success .again .agains-btn[data-v-13fbea3e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;margin:%?30?% 0 0}.blind-box .success-wrap .content-wrap .success .again .agains-btn uni-view[data-v-13fbea3e]{color:#fff;border-radius:%?36?%;line-height:1;width:%?260?%;text-align:center}.blind-box .success-wrap .content-wrap .success .again .agains-btn .fill-btn[data-v-13fbea3e]{background-color:#ff9344;padding:%?22?% 0}.blind-box .success-wrap .content-wrap .success .again .agains-btn .again-btn[data-v-13fbea3e]{padding:%?22?% 0}.blind-box .success-wrap .content-wrap .close-btn[data-v-13fbea3e]{margin-top:%?30?%;text-align:center}.blind-box .success-wrap .content-wrap .close-btn uni-image[data-v-13fbea3e]{width:%?82?%;height:%?82?%}',""]),e.exports=i},"519c":function(e,i,t){var a=t("24fb");i=a(!1),i.push([e.i,"[data-v-13fbea3e] .uni-popup__wrapper.uni-bottom{border-radius:%?40?% %?40?% 0 0!important}[data-v-13fbea3e] .register-box .uni-scroll-view{background:unset!important}[data-v-13fbea3e] .uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box{overflow:unset}[data-v-13fbea3e] uni-popup__wrapper-box goodslist-uni-popup-box{\n\t/* border-radius: 20rpx !important; */}[data-v-13fbea3e] .success-popup .uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box{border-radius:%?20?%!important;max-width:84%!important}[data-v-13fbea3e] .uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box{background:unset!important}",""]),e.exports=i},6679:function(e,i,t){"use strict";var a=t("8848"),n=t.n(a);n.a},8848:function(e,i,t){var a=t("519c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("4f06").default;n("bf93b3ae",a,!0,{sourceMap:!1,shadowMode:!1})},"892b":function(e,i,t){"use strict";t.r(i);var a=t("2c97"),n=t("cb3d");for(var o in n)"default"!==o&&function(e){t.d(i,e,(function(){return n[e]}))}(o);t("9051"),t("6679");var s,l=t("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"13fbea3e",null,!1,a["a"],s);i["default"]=r.exports},"8ae9":function(e,i,t){var a=t("47c7");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("4f06").default;n("4606da54",a,!0,{sourceMap:!1,shadowMode:!1})},9051:function(e,i,t){"use strict";var a=t("8ae9"),n=t.n(a);n.a},cb3d:function(e,i,t){"use strict";t.r(i);var a=t("d050"),n=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(i,e,(function(){return a[e]}))}(o);i["default"]=n.a},d050:function(e,i,t){"use strict";(function(e){var a=t("4ea4");t("4160"),t("c975"),t("a434"),t("b680"),t("d3b7"),t("acd8"),t("ac1f"),t("25f0"),t("1276"),t("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;a(t("1364"));var n=a(t("b6ac")),o=a(t("fa8d")),s=a(t("f3d6")),l={components:{nsPayment:o.default,nsSwitch:s.default},mixins:[n.default],data:function(){return{lampX:0,act:null,switch:!1,blindbox_id:null,info:{},infoList:[],boxPage:[],boxData:{},is_balance:0,payMoney:1,isSub:!1,payPrice:0,outTradeNo:"",payInfo:{},page:1,pages:"",inxs:null,orderId:null,boxDetail:{},skuId:0,memberId:0,shareImg:""}},onLoad:function(e){var i=this;if(this.blindbox_id=e.blindbox_id,this.$util.getMemberId().then((function(e){i.memberId=e})).catch((function(e){})),e.source_member&&uni.setStorageSync("source_member",e.source_member),e.scene){var t=decodeURIComponent(e.scene);t=t.split("&"),t.length&&t.forEach((function(e){-1!=e.indexOf("sku_id")&&(i.skuId=e.split("-")[1]),-1!=e.indexOf("m")&&uni.setStorageSync("source_member",e.split("-")[1]),-1!=e.indexOf("is_test")&&uni.setStorageSync("is_test",1)}))}this.outTradeNo=e.outTradeNo||"",""!=this.outTradeNo?this.getboxGoods():(this.getGoods(),this.getBlindBox())},onshow:function(){uni.getStorageSync("token")&&uni.getStorageSync("source_member")&&this.$util.onSourceMember(uni.getStorageSync("source_member"))},onShareAppMessage:function(e){var i=this.info.blindbox_name,t=this.$util.getCurrentShareRoute(this.memberId),a=t.path;return{title:i,path:a,imageUrl:this.shareImg,success:function(e){},fail:function(e){}}},onShareTimeline:function(){var e=this.info.blindbox_name,i=this.$util.getCurrentShareRoute(this.memberId),t=i.query;return{title:e,query:t,imageUrl:this.shareImg}},methods:{goodsImg:function(e){var i=e.split(",");return i[0]?this.$util.img(i[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},getGoods:function(){var e=this;this.$api.sendRequest({url:"/blindbox/api/goods/info",data:{blindbox_id:this.blindbox_id},success:function(i){if(i.code>=0){if(!i.data)return e.$util.showToast({title:"暂无盲盒活动",mask:!0,duration:2e3}),void setTimeout((function(){e.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);e.info=i.data,e.info.blindbox_images?e.shareImg=e.$util.img(e.info.blindbox_images):e.shareImg=e.$util.img("upload/uniapp/blindBox/default.png");var t=[];for(var a in i.data.goods_list)t.push(i.data.goods_list[a]);e.infoList=t,setTimeout((function(){e.infoList.length>3&&e.scrollWindow()}),500)}else e.$util.showToast({title:i.message});e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},openBlind:function(){var e=this;uni.getStorageSync("token")?(0==this.info.is_new?this.payPrice=this.info.new_price:this.payPrice=this.info.price,0!=this.payMoney&&(this.payMoney=this.payPrice),null!=this.act?this.$refs.choosePaymentPopup.open():this.$util.showToast({title:"请选择盒子"})):setTimeout((function(){e.$refs.login.open("/otherpages/blindBox/index/index?blindbox_id="+e.blindbox_id)}))},toMyprize:function(){var e=this;uni.getStorageSync("token")?this.$util.redirectTo("/otherpages/blindBox/my_prize/my_prize",{blindbox_id:this.info.blindbox_id}):setTimeout((function(){e.$refs.login.open("/otherpages/blindBox/index/index?blindbox_id="+e.blindbox_id)}))},getBlindBox:function(){var e=this;this.$api.sendRequest({url:"/blindbox/api/goods/boxPage",data:{blindbox_id:this.blindbox_id,page:this.page},success:function(i){i.code>=0?(e.page++,e.boxPage.push(i.data.list),e.pages=i.data.page_count,null==e.inxs?e.inxs=0:setTimeout((function(){e.inxs++}),100)):e.$util.showToast({title:i.message})}})},getboxGoods:function(){var e=this;this.$api.sendRequest({url:"/blindbox/api/order/boxDetail",data:{out_trade_no:this.outTradeNo},success:function(i){i.code>=0?(e.isSub=!1,e.$util.showToast({title:"支付成功"}),e.boxDetail=i.data,e.$refs.againPopup.open(),e.blindbox_id=e.boxDetail.blindbox_id,e.encapsulation(),uni.setStorage({key:"blindOrderCreateData",data:{sku_id:e.boxDetail.sku_id.toString(),num:1}}),e.$refs.loadingCover&&e.$refs.loadingCover.hide(),e.getGoods(),e.getBlindBox()):(e.isSub=!1,e.encapsulation(),e.act=null,e.$util.showToast({title:i.message})),e.is_balance=0}})},blindOrderCreate:function(){var e=this;this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/blindbox/api/order/createOrder",data:{blindbox_id:this.blindbox_id,blindbox_goods_id:this.boxData.id,is_balance:this.is_balance,price:this.payPrice},success:function(i){uni.hideLoading(),i.code>=0?(e.outTradeNo=i.data,0==e.payMoney?e.getboxGoods():(e.$refs.choosePaymentPopup.getPayInfo(i.data),e.isSub=!1),e.$refs.loadingCover&&e.$refs.loadingCover.hide()):(e.encapsulation(),e.act=null,e.isSub=!1,10==i.data.error_code||12==i.data.error_code?uni.showModal({title:"订单未创建",content:i.message,confirmText:"去设置",success:function(i){i.confirm&&e.selectAddress()}}):e.$util.showToast({title:i.message})),0!=e.payMoney&&(e.payMoney=e.payPrice)}}))},useBalance:function(){this.is_balance?this.is_balance=0:(this.payMoney=0,this.is_balance=1),this.$forceUpdate()},checked:function(e,i){this.act==e?this.act=null:0==i.status?this.act=e:this.$util.showToast({title:"该盲盒已出售"}),this.boxData=i},scrollWindow:function(){var e=this,i=uni.createSelectorQuery().in(this);i.select("#innovate").boundingClientRect((function(e){e.width})).exec();var t=this.infoList,a=0;setInterval((function(){e.lampX%170==0&&(a==t.length&&(a=0),e.infoList.push(t[a]),a++),e.lampX--}),20)},changeGroup:function(){this.act=null,this.boxPage.length<this.pages?this.getBlindBox():(1==this.pages?this.$util.showToast({title:"没有更多盒子可换了哦~"}):this.pages<=0&&this.$util.showToast({title:"盲盒已售空，等待商家补货"}),this.inxs+1==this.pages?this.inxs=0:this.inxs++)},infoListImg:function(e){this.infoList[e].goods_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},boxImg:function(){this.info.blindbox_images=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},redirect:function(e,i){this.$util.redirectTo(e,i)},rule:function(){this.$refs.rulePopup.open()},closeRulePopup:function(){this.$refs.rulePopup.close()},successClose:function(){this.$refs.againPopup.close(),this.act=null,this.encapsulation(),this.getGoods()},reagain:function(){this.successClose()},encapsulation:function(){var e=this;this.$api.sendRequest({url:"/blindbox/api/goods/boxPage",data:{blindbox_id:this.blindbox_id,page:this.inxs+1},success:function(i){i.code>=0?e.boxPage.splice(e.inxs,1,i.data.list):e.$util.showToast({title:i.message})}})},toIndex:function(){this.$util.redirectTo("/pages/index/index/index",{})},subscribeMessage:function(){this.$api.sendRequest({url:"/weapp/api/weapp/messagetmplids",data:{keywords:"ORDER_PAY,ORDER_DELIVERY,ORDER_TAKE_DELIVERY"},success:function(i){i.data.length&&uni.requestSubscribeMessage({tmplIds:i.data,success:function(e){},fail:function(i){e.log("fail",i)}})}})}},watch:{is_balance:function(e,i){0==e?this.payMoney=this.payPrice:this.info.member_info&&(this.info.member_info.balance_total-this.payPrice>=0?this.payMoney=0:this.payMoney=this.payPrice-this.info.member_info.balance_total)}},computed:{balanceDeduct:function(){if(this.info.member_info&&1==this.info.is_balance)return this.info.member_info.balance_total<=parseFloat(this.payPrice).toFixed(2)?parseFloat(this.info.member_info.balance_total).toFixed(2):parseFloat(this.payPrice).toFixed(2)}}};i.default=l}).call(this,t("5a52")["default"])}}]);