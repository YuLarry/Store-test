(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["promotionpages/rebate/rebate/share"],{"31f9":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("245b"));function r(e){return e&&e.__esModule?e:{default:e}}var a=function(){i.e("components/uni-count-down/uni-count-down").then(function(){return resolve(i("d753"))}.bind(null,i)).catch(i.oe)},o={components:{uniCountDown:a},data:function(){return{id:0,groupDetail:{sku_image:""},kill:0,memberId:0}},mixins:[n.default],onLoad:function(e){var t=this;if(!this.addonIsExit.pintuan)return this.$util.showToast({title:"商家未开启拼团",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);this.id=e.id,this.$langConfig.refresh(),this.getGroupDetail(),this.getMemberId()},methods:{getGroupDetail:function(){var e=this;this.$api.sendRequest({url:"/pinfan/api/order/detail",data:{id:this.id},success:function(t){if(0==t.code){t.data.member_list;for(var i=[],n=0;n<t.data.pintuan_num-t.data.member_list.length;n++){var r="";i.push(r)}e.kill=t.data.pintuan_num-t.data.pintuan_count,t.data.member_list=t.data.member_list.concat(i),t.data.group_end_time>t.timestamp?t.data.timeMachine=e.$util.countDown(t.data.group_end_time-t.timestamp):t.data.timeMachine=null,e.groupDetail=t.data,e.groupDetail.member_list=e.groupDetail.member_list.filter((function(e,t){return e}))}else e.$util.showToast({title:t.message});e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getMemberId:function(){var e=this;this.$api.sendRequest({url:"/api/member/id",success:function(t){t.code>=0&&(e.memberId=t.data)}})},toPintuanDetail:function(e){this.$util.redirectTo("/promotionpages/rebate/rebate/detail",{pinfan_id:e})},toDetail:function(e,t){this.$util.redirectTo("/promotionpages/pintuan/detail/detail",{pintuan_id:this.groupDetail.pintuan_id,group_id:t})},imageError:function(){this.groupDetail.sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},openSharePopup:function(){this.$refs.sharePopup.open()},closeSharePopup:function(){this.$refs.sharePopup.close()},copyUrl:function(){var e=this,t=this.$config.h5Domain+"/promotionpages/rebate/rebate/order?pinfan_id="+this.groupDetail.pintuan_id+"&group_id="+this.groupDetail.group_id;this.memberId&&(t+="&source_member="+this.memberId),this.$util.copy(t,(function(){e.closeSharePopup()}))},orderDetail:function(e){switch(parseInt(e.order_type)){case 2:this.$util.redirectTo("/pages/order/detail_pickup/detail_pickup",{order_id:e.order_id});break;case 3:this.$util.redirectTo("/pages/order/detail_local_delivery/detail_local_delivery",{order_id:e.order_id});break;case 4:this.$util.redirectTo("/otherpages/order/detail_virtual/detail_virtual",{order_id:e.order_id});break;default:this.$util.redirectTo("/pages/order/detail/detail",{order_id:e.order_id});break}}},onShareAppMessage:function(e){var t="/promotionpages/rebate/rebate/order?pinfan_id="+this.groupDetail.pintuan_id+"&group_id="+this.groupDetail.group_id;return this.memberId&&(t+="&source_member="+this.memberId),{title:"还差"+(this.groupDetail.pintuan_num-this.groupDetail.pintuan_count)+"人拼团成功，"+this.groupDetail.sku_name,imageUrl:this.$util.img(this.groupDetail.sku_image,{size:"big"}),path:t,success:function(e){},fail:function(e){}}}};t.default=o},"652b":function(e,t,i){"use strict";i.r(t);var n=i("31f9"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},8039:function(e,t,i){"use strict";(function(e){i("4b62");n(i("66fd"));var t=n(i("fc66"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(t.default)}).call(this,i("543d")["createPage"])},9831:function(e,t,i){"use strict";var n=i("a96b"),r=i.n(n);r.a},a96b:function(e,t,i){},c18bb:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uniCountDown:function(){return i.e("components/uni-count-down/uni-count-down").then(i.bind(null,"d753"))},loadingCover:function(){return i.e("components/loading-cover/loading-cover").then(i.bind(null,"b1ae"))},uniPopup:function(){return i.e("components/uni-popup/uni-popup").then(i.bind(null,"2d2c"))}},r=function(){var e=this,t=e.$createElement,i=(e._self._c,e.$util.img("upload/uniapp/pintuan/pintuan_bg.png")),n=e.$util.img(e.groupDetail.sku_image,{size:"big"}),r=e.__map(e.groupDetail.member_list,(function(t,i){var n=e.__get_orig(t),r=t.member_img?e.$util.img(t.member_img):null,a=t.member_img?null:e.$util.img("/upload/uniapp/default_headimg.png");return{$orig:n,g2:r,g3:a}})),a=e.$util.img("/upload/uniapp/spelling_who.png"),o=e.$util.img("upload/uniapp/rebate/pinfan_playing.png");e.$mp.data=Object.assign({},{$root:{g0:i,g1:n,l0:r,g4:a,g5:o}})},a=[]},fc66:function(e,t,i){"use strict";i.r(t);var n=i("c18bb"),r=i("652b");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("9831");var o,u=i("f0c5"),d=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);t["default"]=d.exports}},[["8039","common/runtime","common/vendor"]]]);