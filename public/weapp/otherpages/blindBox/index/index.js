(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/blindBox/index/index"],{"0377":function(i,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return n}));var n={uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"d7b6"))},nsLogin:function(){return Promise.all([e.e("common/vendor"),e.e("components/ns-login/ns-login")]).then(e.bind(null,"2bc6"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"4c1d"))}},o=function(){var i=this,t=i.$createElement,e=(i._self._c,i.$util.img("upload/uniapp/blindBox/index_bg.png")),n=""!=i.info.blindbox_images?i.$util.img(i.info.blindbox_images):null,o=""==i.info.blindbox_images?i.$util.img("upload/uniapp/blindBox/default.png"):null,s=i.$util.img("/upload/uniapp/blindBox/index.png"),a=i.$util.img("upload/uniapp/blindBox/cabinet_two.png"),u=i.__map(i.boxPage,(function(t,e){var n=i.__get_orig(t),o=i.__map(t,(function(t,e){var n=i.__get_orig(t),o=0==t.status?i.$util.img("upload/uniapp/blindBox/box.png"):null,s=1==t.status?i.$util.img("upload/uniapp/blindBox/null_box.png"):null,a=i.act==e?i.$util.img("upload/uniapp/blindBox/checked.png"):null;return{$orig:n,g5:o,g6:s,g7:a}}));return{$orig:n,l0:o}})),l=i.$util.img("upload/uniapp/blindBox/btn_one.png"),d=i.$util.img("upload/uniapp/blindBox/btn_two.png"),r=i.$util.img("upload/uniapp/blindBox/goods_bg.png"),c=i.__map(i.infoList,(function(t,e){var n=i.__get_orig(t),o=t.goods_image?i.goodsImg(t.goods_image):null;return{$orig:n,m0:o}})),g=i.$util.img("upload/uniapp/blindBox/rule_bg.png"),p=i.$util.img("upload/uniapp/blindBox/tag.png"),b=i.$util.timeStampTurnTime(i.info.start_time),f=i.$util.timeStampTurnTime(i.info.end_time),h=i.info.remark?i.$util.img("upload/uniapp/blindBox/tag.png"):null,m=i.$util.img("upload/uniapp/blindBox/success_bg.png"),_=i.boxDetail.sku_image?i.$util.img(i.boxDetail.sku_image):null,x=i.$util.img("/upload/uniapp/hongbao/close.png");i.$mp.data=Object.assign({},{$root:{g0:e,g1:n,g2:o,g3:s,g4:a,l1:u,g8:l,g9:d,g10:r,l2:c,g11:g,g12:p,g13:b,g14:f,g15:h,g16:m,g17:_,g18:x}})},s=[]},1814:function(i,t,e){"use strict";(function(i){e("67ba");n(e("66fd"));var t=n(e("892b"));function n(i){return i&&i.__esModule?i:{default:i}}i(t.default)}).call(this,e("543d")["createPage"])},"2b8d":function(i,t,e){"use strict";var n=e("e12c"),o=e.n(n);o.a},"6fb3":function(i,t,e){},"892b":function(i,t,e){"use strict";e.r(t);var n=e("0377"),o=e("cb3d");for(var s in o)"default"!==s&&function(i){e.d(t,i,(function(){return o[i]}))}(s);e("2b8d"),e("c222");var a,u=e("f0c5"),l=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);t["default"]=l.exports},c222:function(i,t,e){"use strict";var n=e("6fb3"),o=e.n(n);o.a},c6bc:function(i,t,e){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(e("1364"));var n=o(e("b6ac"));function o(i){return i&&i.__esModule?i:{default:i}}var s=function(){e.e("components/payment/payment").then(function(){return resolve(e("fa8d"))}.bind(null,e)).catch(e.oe)},a=function(){e.e("components/ns-switch/ns-switch").then(function(){return resolve(e("f3d6"))}.bind(null,e)).catch(e.oe)},u={components:{nsPayment:s,nsSwitch:a},mixins:[n.default],data:function(){return{lampX:0,act:null,switch:!1,blindbox_id:null,info:{},infoList:[],boxPage:[],boxData:{},is_balance:0,payMoney:1,isSub:!1,payPrice:0,outTradeNo:"",payInfo:{},page:1,pages:"",inxs:null,orderId:null,boxDetail:{},skuId:0,memberId:0,shareImg:""}},onLoad:function(t){var e=this;if(this.blindbox_id=t.blindbox_id,this.$util.getMemberId().then((function(i){e.memberId=i})).catch((function(i){console.log("reject",i)})),t.source_member&&i.setStorageSync("source_member",t.source_member),t.scene){var n=decodeURIComponent(t.scene);n=n.split("&"),n.length&&n.forEach((function(t){-1!=t.indexOf("sku_id")&&(e.skuId=t.split("-")[1]),-1!=t.indexOf("m")&&i.setStorageSync("source_member",t.split("-")[1]),-1!=t.indexOf("is_test")&&i.setStorageSync("is_test",1)}))}this.outTradeNo=t.outTradeNo||"",""!=this.outTradeNo?this.getboxGoods():(this.getGoods(),this.getBlindBox())},onshow:function(){i.getStorageSync("token")&&i.getStorageSync("source_member")&&this.$util.onSourceMember(i.getStorageSync("source_member"))},onShareAppMessage:function(i){var t=this.info.blindbox_name,e=this.$util.getCurrentShareRoute(this.memberId),n=e.path;return{title:t,path:n,imageUrl:this.shareImg,success:function(i){},fail:function(i){}}},onShareTimeline:function(){var i=this.info.blindbox_name,t=this.$util.getCurrentShareRoute(this.memberId),e=t.query;return{title:i,query:e,imageUrl:this.shareImg}},methods:{goodsImg:function(i){var t=i.split(",");return t[0]?this.$util.img(t[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},getGoods:function(){var i=this;this.$api.sendRequest({url:"/blindbox/api/goods/info",data:{blindbox_id:this.blindbox_id},success:function(t){if(t.code>=0){if(!t.data)return i.$util.showToast({title:"暂无盲盒活动",mask:!0,duration:2e3}),void setTimeout((function(){i.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);i.info=t.data,i.info.blindbox_images?i.shareImg=i.$util.img(i.info.blindbox_images):i.shareImg=i.$util.img("upload/uniapp/blindBox/default.png");var e=[];for(var n in t.data.goods_list)e.push(t.data.goods_list[n]);i.infoList=e,setTimeout((function(){i.infoList.length>3&&i.scrollWindow()}),500)}else i.$util.showToast({title:t.message});i.$refs.loadingCover&&i.$refs.loadingCover.hide()}})},openBlind:function(){var t=this;i.getStorageSync("token")?(0==this.info.is_new?this.payPrice=this.info.new_price:this.payPrice=this.info.price,0!=this.payMoney&&(this.payMoney=this.payPrice),null!=this.act?this.$refs.choosePaymentPopup.open():this.$util.showToast({title:"请选择盒子"})):setTimeout((function(){t.$refs.login.open("/otherpages/blindBox/index/index?blindbox_id="+t.blindbox_id)}))},toMyprize:function(){var t=this;i.getStorageSync("token")?this.$util.redirectTo("/otherpages/blindBox/my_prize/my_prize",{blindbox_id:this.info.blindbox_id}):setTimeout((function(){t.$refs.login.open("/otherpages/blindBox/index/index?blindbox_id="+t.blindbox_id)}))},getBlindBox:function(){var i=this;this.$api.sendRequest({url:"/blindbox/api/goods/boxPage",data:{blindbox_id:this.blindbox_id,page:this.page},success:function(t){t.code>=0?(i.page++,i.boxPage.push(t.data.list),i.pages=t.data.page_count,null==i.inxs?i.inxs=0:setTimeout((function(){i.inxs++}),100)):i.$util.showToast({title:t.message})}})},getboxGoods:function(){var t=this;this.$api.sendRequest({url:"/blindbox/api/order/boxDetail",data:{out_trade_no:this.outTradeNo},success:function(e){e.code>=0?(t.isSub=!1,t.$util.showToast({title:"支付成功"}),t.boxDetail=e.data,t.$refs.againPopup.open(),t.blindbox_id=t.boxDetail.blindbox_id,t.encapsulation(),i.setStorage({key:"blindOrderCreateData",data:{sku_id:t.boxDetail.sku_id.toString(),num:1}}),t.$refs.loadingCover&&t.$refs.loadingCover.hide(),t.getGoods(),t.getBlindBox()):(t.isSub=!1,t.encapsulation(),t.act=null,t.$util.showToast({title:e.message})),t.is_balance=0}})},blindOrderCreate:function(){var t=this;this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/blindbox/api/order/createOrder",data:{blindbox_id:this.blindbox_id,blindbox_goods_id:this.boxData.id,is_balance:this.is_balance,price:this.payPrice},success:function(e){i.hideLoading(),e.code>=0?(t.outTradeNo=e.data,0==t.payMoney?t.getboxGoods():(t.$refs.choosePaymentPopup.getPayInfo(e.data),t.isSub=!1),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):(t.encapsulation(),t.act=null,t.isSub=!1,10==e.data.error_code||12==e.data.error_code?i.showModal({title:"订单未创建",content:e.message,confirmText:"去设置",success:function(i){i.confirm&&t.selectAddress()}}):t.$util.showToast({title:e.message})),0!=t.payMoney&&(t.payMoney=t.payPrice)}}))},useBalance:function(){this.is_balance?this.is_balance=0:(this.payMoney=0,this.is_balance=1),this.$forceUpdate()},checked:function(i,t){this.act==i?this.act=null:0==t.status?this.act=i:this.$util.showToast({title:"该盲盒已出售"}),this.boxData=t},scrollWindow:function(){var t=this,e=i.createSelectorQuery().in(this);e.select("#innovate").boundingClientRect((function(i){i.width})).exec();var n=this.infoList,o=0;setInterval((function(){t.lampX%170==0&&(o==n.length&&(o=0),t.infoList.push(n[o]),o++),t.lampX--}),20)},changeGroup:function(){this.act=null,this.boxPage.length<this.pages?this.getBlindBox():(1==this.pages?this.$util.showToast({title:"没有更多盒子可换了哦~"}):this.pages<=0&&this.$util.showToast({title:"盲盒已售空，等待商家补货"}),this.inxs+1==this.pages?this.inxs=0:this.inxs++)},infoListImg:function(i){this.infoList[i].goods_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},boxImg:function(){this.info.blindbox_images=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},redirect:function(i,t){this.$util.redirectTo(i,t)},rule:function(){this.$refs.rulePopup.open()},closeRulePopup:function(){this.$refs.rulePopup.close()},successClose:function(){this.$refs.againPopup.close(),this.act=null,this.encapsulation(),this.getGoods()},reagain:function(){this.successClose()},encapsulation:function(){var i=this;this.$api.sendRequest({url:"/blindbox/api/goods/boxPage",data:{blindbox_id:this.blindbox_id,page:this.inxs+1},success:function(t){t.code>=0?i.boxPage.splice(i.inxs,1,t.data.list):i.$util.showToast({title:t.message})}})},toIndex:function(){this.$util.redirectTo("/pages/index/index/index",{})},subscribeMessage:function(){this.$api.sendRequest({url:"/weapp/api/weapp/messagetmplids",data:{keywords:"ORDER_PAY,ORDER_DELIVERY,ORDER_TAKE_DELIVERY"},success:function(t){t.data.length&&i.requestSubscribeMessage({tmplIds:t.data,success:function(i){},fail:function(i){console.log("fail",i)}})}})}},watch:{is_balance:function(i,t){0==i?this.payMoney=this.payPrice:this.info.member_info&&(this.info.member_info.balance_total-this.payPrice>=0?this.payMoney=0:this.payMoney=this.payPrice-this.info.member_info.balance_total)}},computed:{balanceDeduct:function(){if(this.info.member_info&&1==this.info.is_balance)return this.info.member_info.balance_total<=parseFloat(this.payPrice).toFixed(2)?parseFloat(this.info.member_info.balance_total).toFixed(2):parseFloat(this.payPrice).toFixed(2)}}};t.default=u}).call(this,e("543d")["default"])},cb3d:function(i,t,e){"use strict";e.r(t);var n=e("c6bc"),o=e.n(n);for(var s in n)"default"!==s&&function(i){e.d(t,i,(function(){return n[i]}))}(s);t["default"]=o.a},e12c:function(i,t,e){}},[["1814","common/runtime","common/vendor"]]]);