(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/blindBox/index/index"],{"05d0":function(i,t,n){},"0889":function(i,t,n){"use strict";var e=n("7acc"),o=n.n(e);o.a},"4d3a":function(i,t,n){"use strict";n.r(t);var e=n("eea9"),o=n.n(e);for(var a in e)"default"!==a&&function(i){n.d(t,i,(function(){return e[i]}))}(a);t["default"]=o.a},"5f39":function(i,t,n){"use strict";n.r(t);var e=n("cc2f"),o=n("4d3a");for(var a in o)"default"!==a&&function(i){n.d(t,i,(function(){return o[i]}))}(a);n("76f0"),n("0889");var s,l=n("f0c5"),u=Object(l["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);t["default"]=u.exports},7087:function(i,t,n){"use strict";(function(i){n("4b62");e(n("66fd"));var t=e(n("5f39"));function e(i){return i&&i.__esModule?i:{default:i}}wx.__webpack_require_UNI_MP_PLUGIN__=n,i(t.default)}).call(this,n("543d")["createPage"])},"76f0":function(i,t,n){"use strict";var e=n("05d0"),o=n.n(e);o.a},"7acc":function(i,t,n){},cc2f:function(i,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return e}));var e={uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"2d2c"))},nsLogin:function(){return Promise.all([n.e("common/vendor"),n.e("components/ns-login/ns-login")]).then(n.bind(null,"61d0"))},loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"b1ae"))}},o=function(){var i=this,t=i.$createElement,n=(i._self._c,i.$util.img("upload/uniapp/blindBox/index_bg.png")),e=""!=i.info.blindbox_images?i.$util.img(i.info.blindbox_images):null,o=""==i.info.blindbox_images?i.$util.img("upload/uniapp/blindBox/default.png"):null,a=i.$util.img("/upload/uniapp/blindBox/index.png"),s=i.$util.img("upload/uniapp/blindBox/cabinet_two.png"),l=i.__map(i.boxPage,(function(t,n){var e=i.__get_orig(t),o=i.__map(t,(function(t,n){var e=i.__get_orig(t),o=0==t.status?i.$util.img("upload/uniapp/blindBox/box.png"):null,a=1==t.status?i.$util.img("upload/uniapp/blindBox/null_box.png"):null,s=i.act==n?i.$util.img("upload/uniapp/blindBox/checked.png"):null;return{$orig:e,g5:o,g6:a,g7:s}}));return{$orig:e,l0:o}})),u=i.$util.img("upload/uniapp/blindBox/btn_one.png"),d=i.$util.img("upload/uniapp/blindBox/btn_two.png"),c=i.$util.img("upload/uniapp/blindBox/goods_bg.png"),r=i.__map(i.infoList,(function(t,n){var e=i.__get_orig(t),o=t.goods_image?i.goodsImg(t.goods_image):null;return{$orig:e,m0:o}})),p=i.$util.img("upload/uniapp/blindBox/rule_bg.png"),g=i.$util.img("upload/uniapp/blindBox/tag.png"),f=i.$util.timeStampTurnTime(i.info.start_time),b=i.$util.timeStampTurnTime(i.info.end_time),h=i.info.remark?i.$util.img("upload/uniapp/blindBox/tag.png"):null,_=i.$util.img("upload/uniapp/blindBox/success_bg.png"),m=i.boxDetail.sku_image?i.$util.img(i.boxDetail.sku_image):null,x=i.$util.img("/upload/uniapp/hongbao/close.png");i.$mp.data=Object.assign({},{$root:{g0:n,g1:e,g2:o,g3:a,g4:s,l1:l,g8:u,g9:d,g10:c,l2:r,g11:p,g12:g,g13:f,g14:b,g15:h,g16:_,g17:m,g18:x}})},a=[]},eea9:function(i,t,n){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(n("1bce"));var e=o(n("245b"));function o(i){return i&&i.__esModule?i:{default:i}}var a=function(){n.e("components/payment/payment").then(function(){return resolve(n("53a5"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/ns-switch/ns-switch").then(function(){return resolve(n("9dd2"))}.bind(null,n)).catch(n.oe)},l={components:{nsPayment:a,nsSwitch:s},mixins:[e.default],data:function(){return{lampX:0,act:null,switch:!1,blindbox_id:null,info:{},infoList:[],boxPage:[],boxData:{},is_balance:0,payMoney:1,isSub:!1,payPrice:0,outTradeNo:"",payInfo:{},page:1,pages:"",inxs:null,orderId:null,boxDetail:{}}},onLoad:function(i){var t=this;if(this.blindbox_id=i.blindbox_id,option.scene){var n=decodeURIComponent(option.scene);n=n.split("&"),n.length&&n.forEach((function(i){-1!=i.indexOf("blindbox_id")&&(t.blindbox_id=i.split("-")[1])}))}this.outTradeNo=i.outTradeNo||"",""!=this.outTradeNo?this.getboxGoods():(this.getGoods(),this.getBlindBox())},methods:{goodsImg:function(i){var t=i.split(",");return t[0]?this.$util.img(t[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},getGoods:function(){var i=this;this.$api.sendRequest({url:"/blindbox/api/goods/info",data:{blindbox_id:this.blindbox_id},success:function(t){if(t.code>=0){if(!t.data)return i.$util.showToast({title:"暂无盲盒活动",mask:!0,duration:2e3}),void setTimeout((function(){i.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);i.info=t.data;var n=[];for(var e in t.data.goods_list)n.push(t.data.goods_list[e]);i.infoList=n,setTimeout((function(){i.infoList.length>3&&i.scrollWindow()}),500)}else i.$util.showToast({title:t.message});i.$refs.loadingCover&&i.$refs.loadingCover.hide()}})},openBlind:function(){var t=this;i.getStorageSync("token")?(0==this.info.is_new?this.payPrice=this.info.new_price:this.payPrice=this.info.price,0!=this.payMoney&&(this.payMoney=this.payPrice),null!=this.act?this.$refs.choosePaymentPopup.open():this.$util.showToast({title:"请选择盒子"})):setTimeout((function(){t.$refs.login.open("/otherpages/blindBox/index/index?blindbox_id="+t.blindbox_id)}))},toMyprize:function(){var t=this;i.getStorageSync("token")?this.$util.redirectTo("/otherpages/blindBox/my_prize/my_prize",{blindbox_id:this.info.blindbox_id}):setTimeout((function(){t.$refs.login.open("/otherpages/blindBox/index/index?blindbox_id="+t.blindbox_id)}))},getBlindBox:function(){var i=this;this.$api.sendRequest({url:"/blindbox/api/goods/boxPage",data:{blindbox_id:this.blindbox_id,page:this.page},success:function(t){t.code>=0?(i.page++,i.boxPage.push(t.data.list),i.pages=t.data.page_count,null==i.inxs?i.inxs=0:setTimeout((function(){i.inxs++}),100)):i.$util.showToast({title:t.message})}})},getboxGoods:function(){var t=this;this.$api.sendRequest({url:"/blindbox/api/order/boxDetail",data:{out_trade_no:this.outTradeNo},success:function(n){n.code>=0?(t.isSub=!1,t.$util.showToast({title:"支付成功"}),t.boxDetail=n.data,t.$refs.againPopup.open(),t.blindbox_id=t.boxDetail.blindbox_id,t.encapsulation(),i.setStorage({key:"blindOrderCreateData",data:{sku_id:t.boxDetail.sku_id.toString(),num:1}}),t.$refs.loadingCover&&t.$refs.loadingCover.hide(),t.getGoods(),t.getBlindBox()):(t.isSub=!1,t.encapsulation(),t.act=null,t.$util.showToast({title:n.message})),t.is_balance=0}})},blindOrderCreate:function(){var t=this;this.isSub||(this.isSub=!0,this.$api.sendRequest({url:"/blindbox/api/order/createOrder",data:{blindbox_id:this.blindbox_id,blindbox_goods_id:this.boxData.id,is_balance:this.is_balance,price:this.payPrice},success:function(n){i.hideLoading(),n.code>=0?(t.outTradeNo=n.data,0==t.payMoney?t.getboxGoods():(t.$refs.choosePaymentPopup.getPayInfo(n.data),t.isSub=!1),t.$refs.loadingCover&&t.$refs.loadingCover.hide()):(t.encapsulation(),t.act=null,t.isSub=!1,10==n.data.error_code||12==n.data.error_code?i.showModal({title:"订单未创建",content:n.message,confirmText:"去设置",success:function(i){i.confirm&&t.selectAddress()}}):t.$util.showToast({title:n.message})),0!=t.payMoney&&(t.payMoney=t.payPrice)}}))},useBalance:function(){this.is_balance?this.is_balance=0:(this.payMoney=0,this.is_balance=1),this.$forceUpdate()},checked:function(i,t){this.act==i?this.act=null:0==t.status?this.act=i:this.$util.showToast({title:"该盲盒已出售"}),this.boxData=t},scrollWindow:function(){var t=this,n=i.createSelectorQuery().in(this);n.select("#innovate").boundingClientRect((function(i){i.width})).exec();var e=this.infoList,o=0;setInterval((function(){t.lampX%170==0&&(o==e.length&&(o=0),t.infoList.push(e[o]),o++),t.lampX--}),20)},changeGroup:function(){this.act=null,this.boxPage.length<this.pages?this.getBlindBox():(1==this.pages?this.$util.showToast({title:"没有更多盒子可换了哦~"}):this.pages<=0&&this.$util.showToast({title:"盲盒已售空，等待商家补货"}),this.inxs+1==this.pages?this.inxs=0:this.inxs++)},infoListImg:function(i){this.infoList[i].goods_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},boxImg:function(){this.info.blindbox_images=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},redirect:function(i,t){this.$util.redirectTo(i,t)},rule:function(){this.$refs.rulePopup.open()},closeRulePopup:function(){this.$refs.rulePopup.close()},successClose:function(){this.$refs.againPopup.close(),this.act=null,this.encapsulation(),this.getGoods()},reagain:function(){this.successClose()},encapsulation:function(){var i=this;this.$api.sendRequest({url:"/blindbox/api/goods/boxPage",data:{blindbox_id:this.blindbox_id,page:this.inxs+1},success:function(t){t.code>=0?i.boxPage.splice(i.inxs,1,t.data.list):i.$util.showToast({title:t.message})}})},toIndex:function(){this.$util.redirectTo("/pages/index/index/index",{})},subscribeMessage:function(){this.$api.sendRequest({url:"/weapp/api/weapp/messagetmplids",data:{keywords:"ORDER_PAY,ORDER_DELIVERY,ORDER_TAKE_DELIVERY"},success:function(t){t.data.length&&i.requestSubscribeMessage({tmplIds:t.data,success:function(i){},fail:function(i){console.log("fail",i)}})}})}},watch:{is_balance:function(i,t){0==i?this.payMoney=this.payPrice:this.info.member_info&&(this.info.member_info.balance_total-this.payPrice>=0?this.payMoney=0:this.payMoney=this.payPrice-this.info.member_info.balance_total)}},computed:{balanceDeduct:function(){if(this.info.member_info&&1==this.info.is_balance)return this.info.member_info.balance_total<=parseFloat(this.payPrice).toFixed(2)?parseFloat(this.info.member_info.balance_total).toFixed(2):parseFloat(this.payPrice).toFixed(2)}}};t.default=l}).call(this,n("543d")["default"])}},[["7087","common/runtime","common/vendor"]]]);