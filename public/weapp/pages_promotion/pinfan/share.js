(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_promotion/pinfan/share"],{"0619":function(i,t,e){"use strict";var n=e("f8bc"),o=e.n(n);o.a},1419:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){e.e("components/uni-count-down/uni-count-down").then(function(){return resolve(e("1339"))}.bind(null,e)).catch(e.oe)},o={components:{uniCountDown:n},data:function(){return{id:0,groupDetail:{sku_image:""},kill:0,memberId:0}},onLoad:function(i){var t=this;if(!this.addonIsExist.pinfan)return this.$util.showToast({title:"商家未开启拼团",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index",{},"redirectTo")}),2e3);this.id=i.id,this.getGroupDetail(),this.$util.getMemberId().then((function(i){t.memberId=i,t.groupDetail.pintuan_id&&t.setPublicShare()}))},methods:{getGroupDetail:function(){var i=this;this.$api.sendRequest({url:"/pinfan/api/order/detail",data:{id:this.id},success:function(t){if(0==t.code){t.data.member_list;for(var e=[],n=0;n<t.data.pintuan_num-t.data.member_list.length;n++){var o="";e.push(o)}i.kill=t.data.pintuan_num-t.data.pintuan_count,t.data.member_list=t.data.member_list.concat(e),t.data.group_end_time>t.timestamp?t.data.timeMachine=i.$util.countDown(t.data.group_end_time-t.timestamp):t.data.timeMachine=null,i.groupDetail=t.data,i.groupDetail.member_list=i.groupDetail.member_list.filter((function(i,t){return i})),i.setPublicShare()}else i.$util.showToast({title:t.message});i.$refs.loadingCover&&i.$refs.loadingCover.hide()},fail:function(t){i.$refs.loadingCover&&i.$refs.loadingCover.hide()}})},toPintuanDetail:function(i){this.$util.redirectTo("/pages_promotion/pinfan/detail",{pinfan_id:i})},toDetail:function(i,t){this.$util.redirectTo("/pages_promotion/pintuan/detail",{pintuan_id:this.groupDetail.pintuan_id,group_id:t})},imageError:function(){this.groupDetail.sku_image=this.$util.getDefaultImage().goods,this.$forceUpdate()},openSharePopup:function(){this.$refs.sharePopup.open()},closeSharePopup:function(){this.$refs.sharePopup.close()},copyUrl:function(){var i=this,t=this.$config.h5Domain+"/pages_promotion/pinfan/rebate/order?pinfan_id="+this.groupDetail.pintuan_id+"&group_id="+this.groupDetail.group_id;this.memberId&&(t+="&source_member="+this.memberId),this.$util.copy(t,(function(){i.closeSharePopup()}))},orderDetail:function(i){switch(parseInt(i.order_type)){case 2:this.$util.redirectTo("/pages/order/detail_pickup",{order_id:i.order_id});break;case 3:this.$util.redirectTo("/pages/order/detail_local_delivery",{order_id:i.order_id});break;case 4:this.$util.redirectTo("/pages_tool/order/detail_virtual",{order_id:i.order_id});break;default:this.$util.redirectTo("/pages/order/detail",{order_id:i.order_id});break}},setPublicShare:function(){var i=this.$config.h5Domain+"/pages_promotion/pinfan/order?pinfan_id="+this.groupDetail.pintuan_id+"&group_id="+this.groupDetail.group_id;this.memberId&&(i+="&source_member="+this.memberId),this.$util.setPublicShare({title:this.groupDetail.sku_name,desc:"还差"+(this.groupDetail.pintuan_num-this.groupDetail.pintuan_count)+"人就拼团成功了",link:i,imgUrl:this.groupDetail.sku_image})}},onShareAppMessage:function(i){var t="/pages_promotion/pinfan/order?pinfan_id="+this.groupDetail.pintuan_id+"&group_id="+this.groupDetail.group_id;return this.memberId&&(t+="&source_member="+this.memberId),{title:"还差"+(this.groupDetail.pintuan_num-this.groupDetail.pintuan_count)+"人拼团成功，"+this.groupDetail.sku_name,imageUrl:this.$util.img(this.groupDetail.sku_image,{size:"big"}),path:t,success:function(i){},fail:function(i){}}}};t.default=o},a189:function(i,t,e){"use strict";(function(i){e("34b0");n(e("66fd"));var t=n(e("f6d8"));function n(i){return i&&i.__esModule?i:{default:i}}wx.__webpack_require_UNI_MP_PLUGIN__=e,i(t.default)}).call(this,e("543d")["createPage"])},cf94:function(i,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return n}));var n={uniCountDown:function(){return e.e("components/uni-count-down/uni-count-down").then(e.bind(null,"1339"))},loadingCover:function(){return e.e("components/loading-cover/loading-cover").then(e.bind(null,"790a"))},uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"92aa"))}},o=function(){var i=this,t=i.$createElement,e=(i._self._c,i.$util.img("public/uniapp/pintuan/pintuan_bg.png")),n=i.$util.img(i.groupDetail.sku_image,{size:"big"}),o=i.__map(i.groupDetail.member_list,(function(t,e){var n=i.__get_orig(t),o=t.member_img?i.$util.img(t.member_img):null,r=t.member_img?null:i.$util.img("public/uniapp/common/default_headimg.png");return{$orig:n,g2:o,g3:r}})),r=i.$util.img("public/uniapp/common/spelling_who.png"),u=i.$util.img("public/uniapp/pinfan/pinfan_playing.png");i.$mp.data=Object.assign({},{$root:{g0:e,g1:n,l0:o,g4:r,g5:u}})},r=[]},db03:function(i,t,e){"use strict";e.r(t);var n=e("1419"),o=e.n(n);for(var r in n)"default"!==r&&function(i){e.d(t,i,(function(){return n[i]}))}(r);t["default"]=o.a},f6d8:function(i,t,e){"use strict";e.r(t);var n=e("cf94"),o=e("db03");for(var r in o)"default"!==r&&function(i){e.d(t,i,(function(){return o[i]}))}(r);e("0619");var u,a=e("f0c5"),s=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=s.exports},f8bc:function(i,t,e){}},[["a189","common/runtime","common/vendor"]]]);