(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-giftcard-present-accept"],{"2c96":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{carddetail:{},haveReceive:"",show:!1,transfer_id:0,code:""}},onLoad:function(t){this.getData(t.transfer_id),this.transfer_id=t.transfer_id,this.show=!0},onShow:function(){this.$langConfig.refresh()},methods:{getData:function(t){var a=this;this.$api.sendRequest({url:"/giftcard/api/giftcard/receivegiftcard",data:{transfer_id:t},success:function(t){0==t.code&&t.data?(a.carddetail=t.data,a.code=0):(a.haveReceive=t.message,a.code=1),a.$refs.loadingCover&&a.$refs.loadingCover.hide()},fail:function(t){mescroll.endErr(),a.$refs.loadingCover&&a.$refs.loadingCover.hide()}})},gotocardlist:function(){this.$util.redirectTo("/promotionpages/giftcard/my_giftcard/my_giftcard")},hide:function(){this.show=!1,uni.getStorageSync("token")||this.$refs.login.open("/promotionpages/giftcard/present/accept?transfer_id="+this.transfer_id)},alertLogin:function(){uni.getStorageSync("token")||this.$refs.login.open("/promotionpages/giftcard/present/accept?transfer_id="+this.transfer_id)}}};a.default=i},3318:function(t,a,e){"use strict";e.r(a);var i=e("4b27"),n=e("4605");for(var d in n)"default"!==d&&function(t){e.d(a,t,(function(){return n[t]}))}(d);e("3511");var r,c=e("f0c5"),s=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"2fe05351",null,!1,i["a"],r);a["default"]=s.exports},3511:function(t,a,e){"use strict";var i=e("3e28"),n=e.n(i);n.a},"3e28":function(t,a,e){var i=e("fb2e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("0d5111bf",i,!0,{sourceMap:!1,shadowMode:!1})},4605:function(t,a,e){"use strict";e.r(a);var i=e("2c96"),n=e.n(i);for(var d in i)"default"!==d&&function(t){e.d(a,t,(function(){return i[t]}))}(d);a["default"]=n.a},"4b27":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return d})),e.d(a,"a",(function(){return i}));var i={nsLogin:e("2bc6").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{},[e("v-uni-view",{staticClass:"present-head"}),e("v-uni-view",{staticClass:"present-body"},[e("v-uni-view",{staticClass:"card-item margin-bottom",style:{background:t.$util.img(t.carddetail.card_cover)?"url("+t.$util.img(t.carddetail.card_cover)+") no-repeat 0 0/100% 100%":"url(https://cs.b2c.niuteam.cn/upload/uniapp/giftcard/detail/gitcard_default3.png) no-repeat 0 0/100% 100%"}},[e("v-uni-view",{staticClass:"card-content"},[e("v-uni-view",{staticClass:"content-head"},[e("v-uni-view",{staticClass:"card-name"},[t._v(t._s(t.carddetail.card_name))]),e("v-uni-view",{staticClass:"use-orno"},[t._v("待使用")])],1),e("v-uni-view",{staticClass:"card-use"},[t._v("礼品卡权益")]),t.carddetail.balance>0&&t.carddetail.point>0&&t.carddetail.goods_num>0?e("v-uni-view",{staticClass:"card-num"},[t._v("￥"+t._s(t.carddetail.balance)+"+"+t._s(t.carddetail.point)+"积分+商品*"+t._s(t.carddetail.goods_num))]):t.carddetail.balance>0&&0==t.carddetail.point?e("v-uni-view",{staticClass:"card-num"},[t._v("￥"+t._s(t.carddetail.balance))]):0==t.carddetail.balance&&t.carddetail.point>0?e("v-uni-view",{staticClass:"card-num"},[t._v(t._s(t.carddetail.point)+" 积分")]):0==t.carddetail.balance&&0==t.carddetail.point&&t.carddetail.goods_num>0?e("v-uni-view",{staticClass:"card-num"},[t._v("商品*"+t._s(t.carddetail.goods_num))]):t.carddetail.balance>0&&t.carddetail.point>0&&0==t.carddetail.goods_num?e("v-uni-view",{staticClass:"card-num"},[t._v("￥"+t._s(t.carddetail.balance)+"+"+t._s(t.carddetail.point)+"积分")]):t.carddetail.balance>0&&0==t.carddetail.point&&t.carddetail.goods_num>0?e("v-uni-view",{staticClass:"card-num"},[t._v("￥"+t._s(t.carddetail.balance)+"+商品*"+t._s(t.carddetail.goods_num))]):0==t.carddetail.balance&&t.carddetail.point>0&&t.carddetail.goods_num>0?e("v-uni-view",{staticClass:"card-num"},[t._v(t._s(t.carddetail.point)+"积分+商品*"+t._s(t.carddetail.goods_num))]):t._e(),t.carddetail.length>0?e("v-uni-view",{staticClass:"card-id"},[t._v("NO."+t._s(t.carddetail.number))]):t._e()],1)],1),e("v-uni-view",[0==this.code?e("v-uni-view",{staticStyle:{"font-weight":"600"}},[t._v("To:"+t._s(t.carddetail.receive_member_name))]):e("v-uni-view",{staticStyle:{"font-weight":"600","text-align":"center"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.alertLogin()}}},[t._v(t._s(t.haveReceive))]),e("v-uni-textarea",{staticClass:"info",attrs:{value:t.carddetail.leav_message}}),e("v-uni-view",{staticStyle:{"margin-left":"180rpx",display:"flex"}},[e("v-uni-view",{staticStyle:{"text-align":"right",width:"320rpx"}},[t._v(t._s(t.carddetail.has_member_name)),e("br"),e("v-uni-view",{staticStyle:{width:"320rpx"}},[t._v(t._s(t.$util.timeStampTurnTime(t.carddetail.create_time)))])],1),e("v-uni-view",[e("v-uni-image",{staticStyle:{width:"100rpx",height:"100rpx","margin-left":"15rpx"},attrs:{src:t.carddetail.has_member_headimg,mode:""}})],1)],1)],1)],1),e("v-uni-view",{staticClass:"present-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gotocardlist.apply(void 0,arguments)}}},[t._v("查看我的礼品卡")]),1==t.show?e("v-uni-view",{staticClass:"launch-mask",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.hide()}}},[e("v-uni-view",{staticClass:"mask-img"},[e("v-uni-image",{attrs:{src:t.$util.img("https://cs.b2c.niuteam.cn/upload/uniapp/giftcard/detail/gift_bag.png"),mode:"aspectFit"}})],1),e("v-uni-text",{staticClass:"mask-info"},[t._v("送你一张礼品卡")])],1):t._e(),e("ns-login",{ref:"login"})],1)},d=[]},fb2e:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.present-head[data-v-2fe05351]{width:100%;height:%?300?%;background:url(https://cs.b2c.niuteam.cn/upload/uniapp/giftcard/detail/present_bg.png) no-repeat 0 0/100% 100%;z-index:0}.present-body[data-v-2fe05351]{background:#fff;padding:%?40?% %?30?%;margin:%?-120?% %?30?% 0;border-radius:%?10?%;z-index:2}.present-body .card-item[data-v-2fe05351]{padding:%?10?% %?30?%;border-radius:%?20?%}.present-body .card-item .card-content[data-v-2fe05351]{padding:%?20?% %?30?%}.present-body .card-item .card-content .content-head[data-v-2fe05351]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?30?%}.present-body .card-item .card-content .content-head .card-name[data-v-2fe05351]{font-size:%?40?%;color:#fff;max-height:%?160?%;width:80%;overflow:hidden}.present-body .card-item .card-content .content-head .use-orno[data-v-2fe05351]{color:#fff}.present-body .card-item .card-content .card-use[data-v-2fe05351]{color:#fff}.present-body .card-item .card-content .card-num[data-v-2fe05351]{margin-top:%?20?%;line-height:%?20?%;color:#fff}.present-body .card-item .card-content .card-id[data-v-2fe05351]{margin-top:%?40?%;color:#fff}.present-btn[data-v-2fe05351]{left:%?300?%;bottom:%?50?%;position:fixed;color:#fd7979}.launch-mask[data-v-2fe05351]{position:fixed;top:%?0?%;left:%?0?%;width:100%;height:100%;background:rgba(0,0,0,.8)}.launch-mask .mask-img[data-v-2fe05351]{text-align:right;margin:%?400?% %?176?% 0}.launch-mask .mask-img uni-image[data-v-2fe05351]{width:%?400?%;height:%?400?%}.launch-mask .mask-info[data-v-2fe05351]{margin:%?20?% 0 0 %?280?%;color:#fff}',""]),t.exports=a}}]);