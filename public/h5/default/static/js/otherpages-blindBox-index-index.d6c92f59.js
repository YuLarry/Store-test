(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-blindBox-index-index"],{"04e1":function(i,t,e){var n=e("d25e");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("5fbbc65a",n,!0,{sourceMap:!1,shadowMode:!1})},"1bce":function(i,t,e){"use strict";var n=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(e("a3b0")),o={data:function(){return{timeoutObj:null,servicer_id:null,pingInterval:a.default.pingInterval}},onLoad:function(){var i=this;uni.closeSocket(),i.checkOpenSocket()},methods:{checkOpenSocket:function(){console.log("判断是否已连接");var i=this;uni.sendSocketMessage({data:"ping",success:function(i){console.log("连接成功,检查")},fail:function(t){console.log("连接失败"),i.openConnection()}})},openConnection:function(){console.log("打开连接"),uni.connectSocket({url:a.default.webSocket,method:"POST",success:function(i){console.log("连接成功 connectSocket=",i)},fail:function(i){console.log("连接失败 connectSocket=",i)}}),this.onSocketMessage()},onSocketMessage:function(){var i=this;console.log("开始监听");var t=this;this.pingInterval=a.default.pingInterval,this.timeoutObj=null,uni.onSocketMessage((function(e){var n=JSON.parse(e.data);if(console.log("监听该服务器消息",e),"close"==n.type)return clearInterval(t.timeoutObj),t.timeoutObj=null,void uni.closeSocket();i.reset(),i.getSocketMsg(e.data)}))},getSocketMsg:function(i){var t=this,e=JSON.parse(i),n={isItMe:!1};if(n.contentType=e.type,"init"==e.type)t.$api.sendRequest({url:"/servicer/api/chat/bind",data:{client_id:e.data.client_id,site_id:t.siteId},success:function(i){0==i.code?t.servicer_id=i.data.servicer_id:t.servicer_id=0,t.getChatList()}});else{if("connect"==e.type)return!1;"string"==e.type?n.content=e.data.servicer_say:"image"==e.type?n.image=e.data.servicer_say:"order"==e.type?n.order_id=e.data.order_id:"goodssku"==e.type&&(n.sku_id=e.data.goods_sku_id)}"init"!=e.type&&(t.messageList.push(n),t.$nextTick((function(){t.setPageScrollTo()})))},reset:function(){console.log("检测心跳"),clearInterval(this.timeoutObj),this.start()},start:function(){console.log("启动心跳");var i=this;this.timeoutObj=setInterval((function(){uni.sendSocketMessage({data:"ping",success:function(i){console.log("连接中....")},fail:function(t){console.log("连接失败重新连接...."),i.openConnection()}})}),this.pingInterval)}},onUnload:function(){clearInterval(this.timeoutObj),this.timeoutObj=null,this.$api.sendRequest({url:"/servicer/api/chat/bye",data:{servicer_id:this.servicer_id,site_id:this.siteId},success:function(i){uni.closeSocket()},fail:function(i){uni.closeSocket()}})}};t.default=o},4404:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.blind-box .null[data-v-13d84f00]{color:red;line-height:1;margin-left:%?30?%;padding:%?24?% 0}.blind-box .null .gantan[data-v-13d84f00]{margin-right:%?20?%}.blind-box .box-bg[data-v-13d84f00]{background-size:100% 100%;background-repeat:no-repeat;padding-bottom:%?160?%;height:100vh}.blind-box .top[data-v-13d84f00]{display:flex;justify-content:space-between;margin-left:%?30?%;position:relative;padding-top:%?60?%}.blind-box .top .top-img[data-v-13d84f00]{width:%?210?%;height:%?210?%;margin-right:%?20?%}.blind-box .top .top-img uni-image[data-v-13d84f00]{width:100%;border-radius:%?10?%;height:100%}.blind-box .top .right[data-v-13d84f00]{flex:1;display:flex;flex-direction:column;justify-content:space-between}.blind-box .top .right uni-view[data-v-13d84f00]{color:#fff}.blind-box .top .right .blind-title[data-v-13d84f00]{line-height:1.5;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;word-break:break-word;height:%?100?%}.blind-box .top .right .scribe-price[data-v-13d84f00]{line-height:1;margin-top:%?20?%;text-decoration:line-through}.blind-box .top .right .new-price[data-v-13d84f00]{line-height:1}.blind-box .top .right .new-price .icon[data-v-13d84f00]{font-size:%?30?%}.blind-box .top .right .new-price .money[data-v-13d84f00]{font-size:%?40?%}.blind-box .top .rule[data-v-13d84f00]{width:%?20?%;height:%?100?%;line-height:1;color:#fff;background-color:#4c3889;padding:%?20?%;border-radius:%?10?% 0 0 %?10?%;margin-top:%?-20?%}.blind-box .top .explain-img[data-v-13d84f00]{width:%?36?%;height:%?36?%;position:absolute;top:%?200?%;left:%?660?%;z-index:1000;background-color:#4c3889;padding:%?12?%;border-radius:%?10?% 0 0 %?10?%}.blind-box .top .explain-img .index-img[data-v-13d84f00]{width:100%!important;height:100%!important}.blind-box .cabinet-box[data-v-13d84f00]{height:%?780?%}.blind-box .cabinet-box .cabinet[data-v-13d84f00]{background-size:100%;background-repeat:no-repeat;position:relative;height:100%;margin:%?84?% %?30?% 0}.blind-box .cabinet-box .cabinet uni-swiper[data-v-13d84f00]{height:%?600?%!important}.blind-box .cabinet-box .cabinet .center-one[data-v-13d84f00]{position:absolute;top:%?90?%;left:%?94?%;display:flex;flex-wrap:wrap}.blind-box .cabinet-box .cabinet .center-one .item[data-v-13d84f00]{position:relative}.blind-box .cabinet-box .cabinet .center-one .item .checked[data-v-13d84f00]{z-index:601;width:%?142?%!important;height:%?168?%!important;margin-top:%?36?%!important;position:absolute!important;left:%?-12?%;top:0}.blind-box .cabinet-box .cabinet .center-one .item .box[data-v-13d84f00]{width:%?120?%;height:%?122?%;margin-right:%?72?%;position:relative;margin-top:%?76?%}.blind-box .cabinet-box .cabinet .btn-one[data-v-13d84f00]{width:%?270?%;padding:%?20?% 0 %?32?%;line-height:1;background-size:100% 100%;background-repeat:no-repeat;font-weight:700;text-align:center;position:absolute;top:%?620?%;left:%?60?%;color:#fff}.blind-box .cabinet-box .cabinet .btn-two[data-v-13d84f00]{width:%?270?%;padding:%?20?% 0 %?32?%;line-height:1;background-size:100% 100%;background-repeat:no-repeat;font-weight:700;text-align:center;position:absolute;top:%?620?%;left:%?360?%;color:#fff}.blind-box .list-box[data-v-13d84f00]{position:relative;margin:%?-30?% %?30?% %?68?%;z-index:500;overflow:hidden}.blind-box .list-box .list_bit[data-v-13d84f00]{background-size:100% 100%;background-repeat:no-repeat;height:%?230?%;display:flex;padding:0 %?70?% 0 %?30?%}.blind-box .list-box .list_bit .list[data-v-13d84f00]{height:%?230?%;position:relative;padding:0 %?10?%;overflow:hidden;overflow-x:scroll;width:90%}.blind-box .list-box .list_bit .list .imgs-list[data-v-13d84f00]{display:flex;align-items:center;margin-top:%?30?%}.blind-box .list-box .list_bit .list .imgs-list .imgs-img[data-v-13d84f00]{transition:all .4s;background-color:#fff}.blind-box .list-box .list_bit .list uni-image[data-v-13d84f00]{width:%?170?%;height:%?170?%;border-radius:%?10?%;margin-right:%?20?%;flex-shrink:0;display:flex;justify-content:center;align-items:center}@-webkit-keyframes scroll-data-v-13d84f00{100%{\r\n    /* 需要滚动内容的总高度 */left:%?-540?%}}@keyframes scroll-data-v-13d84f00{100%{\r\n    /* 需要滚动内容的总高度 */left:%?-540?%}}.blind-box .list-box .all[data-v-13d84f00]{width:%?20?%;line-height:1;color:#fff;background:linear-gradient(0deg,#ffc579,#ffa141);padding:%?38?% %?18?%;border-radius:5px;position:absolute;top:%?30?%;right:%?30?%}.blind-box .footer[data-v-13d84f00]{font-size:%?30?%;color:#fff;background-color:#8a6de1;border-radius:25px 25px 0 0;width:100%;line-height:1;padding:%?36?% 0;text-align:center;position:fixed;bottom:0;z-index:600}.blind-box .rule-wrap[data-v-13d84f00]{border-radius:%?10?%;width:79.95vw;box-sizing:border-box;background-color:#fff}.blind-box .rule-wrap .content-wrap[data-v-13d84f00]{width:100%;border-radius:%?8?%}.blind-box .rule-wrap .content-wrap .rule-title[data-v-13d84f00]{position:absolute;text-align:center;font-weight:700;color:#fff;left:40%;top:%?40?%}.blind-box .rule-wrap .content-wrap .rule-head[data-v-13d84f00]{width:100%;height:%?146?%;border-radius:4px}.blind-box .rule-wrap .content-wrap .rule[data-v-13d84f00]{padding:0 %?30?% %?30?%;box-sizing:border-box;max-height:%?700?%}.blind-box .rule-wrap .content-wrap .rule .rule-tit[data-v-13d84f00]{display:flex;align-items:center}.blind-box .rule-wrap .content-wrap .rule .rule-img[data-v-13d84f00]{width:%?30?%;height:%?32?%;margin-right:%?20?%}.blind-box .rule-wrap .content-wrap .rule .rule-img uni-image[data-v-13d84f00]{width:100%;height:100%}.blind-box .rule-wrap .content-wrap .rule .tit[data-v-13d84f00]{font-weight:700;margin-top:%?10?%;font-size:%?30?%}.blind-box .rule-wrap .content-wrap .rule .text[data-v-13d84f00]{word-break:break-word;margin-left:%?48?%}.blind-box .rule-wrap .content-wrap .iconroundclose[data-v-13d84f00]{color:#fff;text-align:center;position:absolute;bottom:%?-150?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:%?70?%}.blind-box .success-wrap[data-v-13d84f00]{width:%?630?%}.blind-box .success-wrap .content-wrap[data-v-13d84f00]{width:100%;border-radius:%?20?%}.blind-box .success-wrap .content-wrap .success[data-v-13d84f00]{background-size:100% 100%;background-repeat:no-repeat;padding:%?50?% 0 0}.blind-box .success-wrap .content-wrap .success .goods[data-v-13d84f00]{width:%?360?%;margin:0 auto;background-color:#fff;border-radius:%?10?%}.blind-box .success-wrap .content-wrap .success .goods .goods-img[data-v-13d84f00]{width:%?360?%;height:%?360?%}.blind-box .success-wrap .content-wrap .success .goods .goods-img uni-image[data-v-13d84f00]{width:%?360?%;height:%?360?%}.blind-box .success-wrap .content-wrap .success .goods .goods-name[data-v-13d84f00]{padding:%?20?% %?26?% 0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:%?80?%;line-height:1.4}.blind-box .success-wrap .content-wrap .success .goods .goods-price[data-v-13d84f00]{line-height:1;padding:%?16?% %?26?% %?26?%;font-size:%?36?%}.blind-box .success-wrap .content-wrap .success .again[data-v-13d84f00]{background-color:#fff;border-radius:%?20?%;padding:%?30?% 0;margin-top:%?50?%}.blind-box .success-wrap .content-wrap .success .again .discharge[data-v-13d84f00]{text-align:center}.blind-box .success-wrap .content-wrap .success .again .discharge .tobox[data-v-13d84f00]{margin-left:%?20?%}.blind-box .success-wrap .content-wrap .success .again .agains-btn[data-v-13d84f00]{display:flex;justify-content:space-around;margin:%?30?% 0 0}.blind-box .success-wrap .content-wrap .success .again .agains-btn uni-view[data-v-13d84f00]{color:#fff;border-radius:%?36?%;line-height:1;width:%?260?%;text-align:center}.blind-box .success-wrap .content-wrap .success .again .agains-btn .fill-btn[data-v-13d84f00]{background-color:#ff9344;padding:%?22?% 0}.blind-box .success-wrap .content-wrap .success .again .agains-btn .again-btn[data-v-13d84f00]{padding:%?22?% 0}.blind-box .success-wrap .content-wrap .close-btn[data-v-13d84f00]{margin-top:%?30?%;text-align:center}.blind-box .success-wrap .content-wrap .close-btn uni-image[data-v-13d84f00]{width:%?82?%;height:%?82?%}',""]),i.exports=t},"4d3a":function(i,t,e){"use strict";e.r(t);var n=e("75f5"),a=e.n(n);for(var o in n)"default"!==o&&function(i){e.d(t,i,(function(){return n[i]}))}(o);t["default"]=a.a},"5f39":function(i,t,e){"use strict";e.r(t);var n=e("d6ac"),a=e("4d3a");for(var o in a)"default"!==o&&function(i){e.d(t,i,(function(){return a[i]}))}(o);e("c100"),e("a6f5");var s,d=e("f0c5"),l=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"13d84f00",null,!1,n["a"],s);t["default"]=l.exports},"75f5":function(i,t,e){"use strict";var n=e("4ea4");e("4160"),e("c975"),e("a434"),e("d3b7"),e("acd8"),e("ac1f"),e("25f0"),e("1276"),e("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(e("1bce"));var a=n(e("245b")),o=n(e("53a5")),s=n(e("9dd2")),d={components:{nsPayment:o.default,nsSwitch:s.default},mixins:[a.default],data:function(){return{lampX:0,act:null,switch:!1,blindbox_id:null,info:{},infoList:[],boxPage:[],boxData:{},is_balance:0,payMoney:1,isSub:!1,payPrice:0,outTradeNo:"",payInfo:{},page:1,pages:"",inxs:null,orderId:null,boxDetail:{}}},onLoad:function(i){var t=this;if(this.blindbox_id=i.blindbox_id,option.scene){var e=decodeURIComponent(option.scene);e=e.split("&"),e.length&&e.forEach((function(i){-1!=i.indexOf("blindbox_id")&&(t.blindbox_id=i.split("-")[1])}))}this.outTradeNo=i.outTradeNo||"",""!=this.outTradeNo?this.getboxGoods():(this.getGoods(),this.getBlindBox())},methods:{goodsImg:function(i){var t=i.split(",");return t[0]?this.$util.img(t[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},getGoods:function(){var i=this;this.$api.sendRequest({url:"/blindbox/api/goods/info",data:{blindbox_id:this.blindbox_id},success:function(t){if(t.code>=0){if(!t.data)return i.$util.showToast({title:"暂无盲盒活动",mask:!0,duration:2e3}),void setTimeout((function(){i.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);i.info=t.data;var e=[];for(var n in t.data.goods_list)e.push(t.data.goods_list[n]);i.infoList=e,setTimeout((function(){i.infoList.length>3&&i.scrollWindow()}),500)}else i.$util.showToast({title:t.message});i.$refs.loadingCover&&i.$refs.loadingCover.hide()}})},openBlind:function(){var i=this;uni.getStorageSync("token")?(0==this.info.is_new?this.payPrice=this.info.new_price:this.payPrice=this.info.price,0!=this.payMoney&&(this.payMoney=this.payPrice),null!=this.act?this.$refs.choosePaymentPopup.open():this.$util.showToast({title:"请选择盒子"})):setTimeout((function(){i.$refs.login.open("/otherpages/blindBox/index/index?blindbox_id="+i.blindbox_id)}))},toMyprize:function(){var i=this;uni.getStorageSync("token")?this.$util.redirectTo("/otherpages/blindBox/my_prize/my_prize",{blindbox_id:this.info.blindbox_id}):setTimeout((function(){i.$refs.login.open("/otherpages/blindBox/index/index?blindbox_id="+i.blindbox_id)}))},getBlindBox:function(){var i=this;this.$api.sendRequest({url:"/blindbox/api/goods/boxPage",data:{blindbox_id:this.blindbox_id,page:this.page},success:function(t){t.code>=0?(i.page++,i.boxPage.push(t.data.list),i.pages=t.data.page_count,null==i.inxs?i.inxs=0:setTimeout((function(){i.inxs++}),100)):i.$util.showToast({title:t.message})}})},getboxGoods:function(){var i=this;this.$api.sendRequest({url:"/blindbox/api/order/boxDetail",data:{out_trade_no:this.outTradeNo},success:function(t){t.code>=0?(i.isSub=!1,i.$util.showToast({title:"支付成功"}),i.boxDetail=t.data,i.$refs.againPopup.open(),i.blindbox_id=i.boxDetail.blindbox_id,i.encapsulation(),uni.setStorage({key:"blindOrderCreateData",data:{sku_id:i.boxDetail.sku_id.toString(),num:1}}),i.$refs.loadingCover&&i.$refs.loadingCover.hide(),i.getGoods(),i.getBlindBox()):(i.isSub=!1,i.encapsulation(),i.act=null,i.$util.showToast({title:t.message})),i.is_balance=0}})},blindOrderCreate:function(){var i=this;this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/blindbox/api/order/createOrder",data:{blindbox_id:this.blindbox_id,blindbox_goods_id:this.boxData.id,is_balance:this.is_balance,price:this.payPrice},success:function(t){uni.hideLoading(),t.code>=0?(i.outTradeNo=t.data,0==i.payMoney?i.getboxGoods():(i.$refs.choosePaymentPopup.getPayInfo(t.data),i.isSub=!1),i.$refs.loadingCover&&i.$refs.loadingCover.hide()):(i.encapsulation(),i.act=null,i.isSub=!1,10==t.data.error_code||12==t.data.error_code?uni.showModal({title:"订单未创建",content:t.message,confirmText:"去设置",success:function(t){t.confirm&&i.selectAddress()}}):i.$util.showToast({title:t.message})),0!=i.payMoney&&(i.payMoney=i.payPrice)}}))},useBalance:function(){this.is_balance?this.is_balance=0:(this.payMoney=0,this.is_balance=1),this.$forceUpdate()},checked:function(i,t){this.act==i?this.act=null:0==t.status?this.act=i:this.$util.showToast({title:"该盲盒已出售"}),this.boxData=t},scrollWindow:function(){var i=this,t=uni.createSelectorQuery().in(this);t.select("#innovate").boundingClientRect((function(i){i.width})).exec();var e=this.infoList,n=0;setInterval((function(){i.lampX%170==0&&(n==e.length&&(n=0),i.infoList.push(e[n]),n++),i.lampX--}),20)},changeGroup:function(){this.act=null,this.boxPage.length<this.pages?this.getBlindBox():(1==this.pages?this.$util.showToast({title:"没有更多盒子可换了哦~"}):this.pages<=0&&this.$util.showToast({title:"盲盒已售空，等待商家补货"}),this.inxs+1==this.pages?this.inxs=0:this.inxs++)},infoListImg:function(i){this.infoList[i].goods_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},boxImg:function(){this.info.blindbox_images=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},redirect:function(i,t){this.$util.redirectTo(i,t)},rule:function(){this.$refs.rulePopup.open()},closeRulePopup:function(){this.$refs.rulePopup.close()},successClose:function(){this.$refs.againPopup.close(),this.act=null,this.encapsulation(),this.getGoods()},reagain:function(){this.successClose()},encapsulation:function(){var i=this;this.$api.sendRequest({url:"/blindbox/api/goods/boxPage",data:{blindbox_id:this.blindbox_id,page:this.inxs+1},success:function(t){t.code>=0?i.boxPage.splice(i.inxs,1,t.data.list):i.$util.showToast({title:t.message})}})},toIndex:function(){this.$util.redirectTo("/pages/index/index/index",{})},subscribeMessage:function(){this.$api.sendRequest({url:"/weapp/api/weapp/messagetmplids",data:{keywords:"ORDER_PAY,ORDER_DELIVERY,ORDER_TAKE_DELIVERY"},success:function(i){i.data.length&&uni.requestSubscribeMessage({tmplIds:i.data,success:function(i){},fail:function(i){console.log("fail",i)}})}})}},watch:{is_balance:function(i,t){0==i?this.payMoney=this.payPrice:this.info.member_info&&(this.info.member_info.balance_total-this.payPrice>=0?this.payMoney=0:this.payMoney=this.payPrice-this.info.member_info.balance_total)}},computed:{balanceDeduct:function(){if(this.info.member_info&&1==this.info.is_balance)return this.info.member_info.balance_total<=parseFloat(this.payPrice).toFixed(2)?parseFloat(this.info.member_info.balance_total).toFixed(2):parseFloat(this.payPrice).toFixed(2)}}};t.default=d},a6df:function(i,t,e){var n=e("4404");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("5ea5bd95",n,!0,{sourceMap:!1,shadowMode:!1})},a6f5:function(i,t,e){"use strict";var n=e("04e1"),a=e.n(n);a.a},c100:function(i,t,e){"use strict";var n=e("a6df"),a=e.n(n);a.a},d25e:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,"[data-v-13d84f00] .uni-popup__wrapper.uni-bottom{border-radius:%?40?% %?40?% 0 0!important}[data-v-13d84f00] .register-box .uni-scroll-view{background:unset!important}[data-v-13d84f00] .uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box{overflow:unset}[data-v-13d84f00] uni-popup__wrapper-box goodslist-uni-popup-box{\n\t/* border-radius: 20rpx !important; */}[data-v-13d84f00] .success-popup .uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box{border-radius:%?20?%!important;max-width:84%!important}[data-v-13d84f00] .uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box{background:unset!important}",""]),i.exports=t},d6ac:function(i,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return n}));var n={uniPopup:e("2d2c").default,nsLogin:e("61d0").default,loadingCover:e("b1ae").default},a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"blind-box",attrs:{"data-theme":i.themeStyle}},[i.info.blindbox_inventory<=0?e("v-uni-view",{staticClass:"null"},[e("v-uni-text",{staticClass:"iconfont icongantanhao1 gantan"}),e("v-uni-text",[i._v("商品库存不足，请等待商家补货！")])],1):i._e(),e("v-uni-view",{staticClass:"box-bg",style:{backgroundImage:"url("+i.$util.img("upload/uniapp/blindBox/index_bg.png")+")"}},[e("v-uni-view",{staticClass:"top"},[e("v-uni-view",{staticClass:"top-img"},[""!=i.info.blindbox_images?e("v-uni-image",{attrs:{src:i.$util.img(i.info.blindbox_images),mode:"aspectFit"},on:{error:function(t){arguments[0]=t=i.$handleEvent(t),i.boxImg()}}}):e("v-uni-image",{attrs:{src:i.$util.img("upload/uniapp/blindBox/default.png")}})],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"blind-title font-size-toolbar"},[i._v(i._s(i.info.blindbox_name))]),e("v-uni-view",{staticClass:"scribe-price font-size-tag"},[i._v("￥"+i._s(i.info.price))]),i.info.new_price>0?e("v-uni-view",{staticClass:"new-price font-size-tag"},[i._v("新人价："),e("v-uni-text",{staticClass:"icon"},[i._v("￥")]),e("v-uni-text",{staticClass:"money"},[i._v(i._s(i.info.new_price))])],1):i._e()],1),e("v-uni-view",{staticClass:"rule font-size-tag",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.rule()}}},[i._v("活动规则")]),e("v-uni-view",{staticClass:"explain-img",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.toIndex()}}},[e("v-uni-image",{staticClass:"index-img",attrs:{src:i.$util.img("/upload/uniapp/blindBox/index.png"),mode:""}})],1)],1),e("v-uni-view",{staticClass:"cabinet-box"},[e("v-uni-view",{staticClass:"cabinet",style:{backgroundImage:"url("+i.$util.img("upload/uniapp/blindBox/cabinet_two.png")+")"}},[e("v-uni-swiper",{attrs:{autoplay:!1,"indicator-dots":!1,interval:3e3,duration:1e3,current:i.inxs,circular:!0,"disable-touch":!0}},i._l(i.boxPage,(function(t,n){return e("v-uni-swiper-item",{key:n},[e("v-uni-view",{staticClass:"center-one"},i._l(t,(function(t,n){return e("v-uni-view",{key:n,staticClass:"item",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.checked(n,t)}}},[0==t.status?e("v-uni-image",{staticClass:"box",attrs:{src:i.$util.img("upload/uniapp/blindBox/box.png"),mode:""}}):i._e(),1==t.status?e("v-uni-image",{staticClass:"box",attrs:{src:i.$util.img("upload/uniapp/blindBox/null_box.png"),mode:""}}):i._e(),i.act==n?e("v-uni-image",{staticClass:"checked",attrs:{src:i.$util.img("upload/uniapp/blindBox/checked.png")}}):i._e()],1)})),1)],1)})),1),e("v-uni-view",{staticClass:"btn-one",style:{backgroundImage:"url("+i.$util.img("upload/uniapp/blindBox/btn_one.png")+")"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.changeGroup()}}},[i._v("换一组")]),e("v-uni-view",{staticClass:"btn-two",style:{backgroundImage:"url("+i.$util.img("upload/uniapp/blindBox/btn_two.png")+")"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.openBlind()}}},[i._v("拆盲盒")])],1)],1),e("v-uni-view",{staticClass:"list-box"},[e("v-uni-view",{staticClass:"list_bit",style:{backgroundImage:"url("+i.$util.img("upload/uniapp/blindBox/goods_bg.png")+")"}},[e("v-uni-view",{staticClass:"list",attrs:{id:"innovate"}},[e("v-uni-view",{ref:"name",staticClass:"imgs-list",style:{transform:"translateX("+i.lampX+"rpx)"}},i._l(i.infoList,(function(t,n){return t.goods_image?e("v-uni-image",{key:n,staticClass:"imgs-img",attrs:{src:i.goodsImg(t.goods_image),mode:"aspectFit"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.redirect("/pages/goods/detail/detail",{sku_id:t.sku_id})},error:function(t){arguments[0]=t=i.$handleEvent(t),i.infoListImg(n)}}}):i._e()})),1)],1)],1),e("v-uni-view",{staticClass:"all font-size-tag",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.redirect("/otherpages/blindBox/goods_list/goods_list",{blindbox_id:i.info.blindbox_id})}}},[i._v("查看全部")])],1),e("v-uni-view",{staticClass:"footer",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.toMyprize()}}},[i._v("我的奖品")])],1),e("uni-popup",{ref:"rulePopup",attrs:{type:"center"}},[e("v-uni-view",{staticClass:"rule-wrap"},[e("v-uni-view",{staticClass:"content-wrap"},[e("v-uni-image",{staticClass:"rule-head",attrs:{src:i.$util.img("upload/uniapp/blindBox/rule_bg.png"),mode:""}}),e("v-uni-view",{staticClass:"rule-title font-size-toolbar"},[i._v("活动规则")]),e("v-uni-scroll-view",{staticClass:"rule",attrs:{"scroll-y":"true"}},[e("v-uni-view",[e("v-uni-view",{staticClass:"rule-tit"},[e("v-uni-view",{staticClass:"rule-img"},[e("v-uni-image",{attrs:{src:i.$util.img("upload/uniapp/blindBox/tag.png"),mode:""}})],1),e("v-uni-view",{staticClass:"tit"},[i._v("1. 活动时间")])],1),e("v-uni-view",{staticClass:"text"},[i._v("开始时间："+i._s(i.$util.timeStampTurnTime(i.info.start_time)))]),e("v-uni-view",{staticClass:"text"},[i._v("结束时间："+i._s(i.$util.timeStampTurnTime(i.info.end_time)))]),i.info.remark?e("v-uni-view",{staticClass:"rule-tit"},[e("v-uni-view",{staticClass:"rule-img"},[e("v-uni-image",{attrs:{src:i.$util.img("upload/uniapp/blindBox/tag.png"),mode:""}})],1),e("v-uni-view",{staticClass:"tit"},[i._v("2. 活动说明")])],1):i._e(),i.info.remark?e("v-uni-view",{staticClass:"text"},[i._v(i._s(i.info.remark))]):i._e()],1)],1),e("v-uni-text",{staticClass:"iconfont iconroundclose",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.closeRulePopup.apply(void 0,arguments)}}})],1)],1)],1),e("v-uni-view",{staticClass:"success-popup"},[e("uni-popup",{ref:"againPopup",attrs:{type:"center"}},[e("v-uni-view",{staticClass:"success-wrap"},[e("v-uni-view",{staticClass:"content-wrap"},[e("v-uni-view",{staticClass:"success",style:{backgroundImage:"url("+i.$util.img("upload/uniapp/blindBox/success_bg.png")+")"}},[e("v-uni-view",{staticClass:"goods"},[e("v-uni-view",{staticClass:"goods-img"},[i.boxDetail.sku_image?e("v-uni-image",{attrs:{src:i.$util.img(i.boxDetail.sku_image),mode:"aspectFit"}}):i._e()],1),e("v-uni-view",{staticClass:"goods-name"},[i._v(i._s(i.boxDetail.sku_name))]),e("v-uni-view",{staticClass:"goods-price color-base-text"},[e("v-uni-text",{staticClass:"font-size-tag"},[i._v("￥")]),i._v(i._s(i.boxDetail.price))],1)],1),e("v-uni-view",{staticClass:"again"},[e("v-uni-view",{staticClass:"color-sub discharge"},[i._v("已为您存放至盒柜"),e("v-uni-text",{staticClass:"color-base-text tobox",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.redirect("/otherpages/blindBox/my_prize/my_prize",{blindbox_id:i.boxDetail.blindbox_id})}}},[i._v("前往我的奖品>")])],1),e("v-uni-view",{staticClass:"agains-btn"},[e("v-uni-view",{staticClass:"fill-btn",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.redirect("/otherpages/blindBox/fillAddress/fillAddress",{blindbox_goods_id:i.boxDetail.blindbox_goods_id,out_trade_no:i.outTradeNo})}}},[i._v("填写收货信息")]),e("v-uni-view",{staticClass:"again-btn color-base-bg",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.reagain()}}},[i._v("再来一次")])],1)],1)],1),e("v-uni-view",{staticClass:"close-btn",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.successClose()}}},[e("v-uni-image",{attrs:{src:i.$util.img("/upload/uniapp/hongbao/close.png"),mode:""}})],1)],1)],1)],1)],1),i.info.member_info?e("v-uni-view",{},[e("ns-payment",{ref:"choosePaymentPopup",attrs:{isBalance:i.is_balance,balanceDeduct:i.info.price>0&&i.info.member_info.balance_total>0?i.balanceDeduct:"0",payMoney:i.payMoney},on:{useBalance:function(t){arguments[0]=t=i.$handleEvent(t),i.useBalance.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=i.$handleEvent(t),i.blindOrderCreate.apply(void 0,arguments)}}})],1):i._e(),e("ns-login",{ref:"login"}),e("loading-cover",{ref:"loadingCover"})],1)},o=[]}}]);