(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promotionpages-giftcard-my_giftcard-detail"],{"02fd":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.card-item[data-v-597bbd25]{padding:%?54?% %?30?% %?34?% %?30?%;background:url(https://cs.b2c.niuteam.cn/upload/uniapp/giftcard/detail/index.png) no-repeat 0 0/100% 50%}.card-item .card-content[data-v-597bbd25]{padding:%?30?% %?50?%;border-radius:%?15?%}.card-item .card-content .card-name[data-v-597bbd25]{margin-bottom:%?50?%;font-size:%?48?%;color:#fff}.card-item .card-content .card-use[data-v-597bbd25]{color:#fff}.card-item .card-content .card-num[data-v-597bbd25]{margin-top:%?30?%;line-height:%?20?%;color:#fff}.card-info[data-v-597bbd25]{margin:%?20?% %?30?%;padding:%?10?% %?30?%;background:#fff}.card-info .info[data-v-597bbd25]{padding:%?24?% 0;border-bottom:%?1?% solid #f5f5f5}.card-info .info .num-input[data-v-597bbd25]{margin-left:%?46?%}.card-info .info1 span[data-v-597bbd25]{margin-left:%?30?%}.card-info .info2 span[data-v-597bbd25]{margin-left:%?80?%}.card-info .info3 span[data-v-597bbd25]{margin-left:%?100?%}.bottom[data-v-597bbd25]{position:fixed;bottom:%?0?%;width:%?800?%;height:%?80?%;display:flex;background:#fff;padding:%?20?%}.bottom .bottom-left[data-v-597bbd25]{width:%?400?%;line-height:%?80?%}.bottom .bottom-left span[data-v-597bbd25]{color:#ff4544;font-size:%?35?%;font-weight:600}.bottom .bottom-right[data-v-597bbd25]{width:%?400?%}.bottom .bottom-right uni-button[data-v-597bbd25]{width:%?320?%;height:%?80?%;line-height:%?80?%}.giftcard-goods[data-v-597bbd25]{margin:%?20?% %?30?%}.giftcard-goods .giftcard-goods-list[data-v-597bbd25]{padding-bottom:%?120?%}.giftcard-goods .giftcard-goods-item[data-v-597bbd25]{display:flex;margin:%?20?% 0;background-color:#fff;padding:%?26?%;border-radius:%?10?%}.giftcard-goods .giftcard-goods-item uni-image[data-v-597bbd25]{height:%?200?%;width:%?200?%;margin-right:%?20?%}.giftcard-goods .giftcard-goods-item .giftcard-info-wrap[data-v-597bbd25]{display:flex;flex-direction:column;justify-content:space-between}.giftcard-goods .giftcard-goods-item .giftcard-info-wrap .info-title[data-v-597bbd25]{word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;\r\n  /* 这里是超出几行省略 */overflow:hidden}.giftcard-goods .giftcard-goods-item .giftcard-info-wrap .price[data-v-597bbd25], .giftcard-goods .giftcard-goods-item .giftcard-info-wrap .unit[data-v-597bbd25]{display:inline-block}.giftcard-goods .giftcard-goods-item .giftcard-info-wrap .price[data-v-597bbd25]{font-size:%?32?%;font-weight:700}.card-warn[data-v-597bbd25]{margin:%?20?% %?30?%;display:flex;height:%?80?%;background:#fff1e5;padding:0 %?20?%;border-radius:%?10?%;position:relative}.card-warn .warn[data-v-597bbd25]{background-color:#fa5b14;border-radius:50%;height:%?40?%;width:%?40?%;line-height:%?40?%;color:#fff;text-align:center;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.card-warn .content[data-v-597bbd25]{line-height:%?80?%;color:#fa5b14;margin-left:%?50?%}[data-v-597bbd25] .decrease{margin-right:%?10?%!important}[data-v-597bbd25] .increase{margin-left:%?10?%!important}[data-v-597bbd25] .uni-input-input{background:#fff!important;border:%?2?% solid #eee!important;width:92%!important}[data-v-597bbd25] .uni-numbox__value.small{border:none!important}[data-v-597bbd25] .uni-numbox__value{background-color:none!important}',""]),t.exports=a},"08f6":function(t,a,i){var e=i("dcc4");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("6efe2388",e,!0,{sourceMap:!1,shadowMode:!1})},"0a09":function(t,a,i){"use strict";i.r(a);var e=i("505d"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"1a82":function(t,a,i){"use strict";var e=i("bb80"),n=i.n(e);n.a},"27a9":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"uni-numbox",class:{small:"small"==t.size}},[i("v-uni-button",{staticClass:"decrease",class:{disabled:t.inputValue<=t.min||t.disabled,small:"small"==t.size},attrs:{type:"default"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t._calcValue("minus")}}},[t._v("-")]),i("v-uni-input",{staticClass:"uni-input uni-numbox__value",class:{small:"small"==t.size},attrs:{disabled:t.disabled,type:"number"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t._onInput.apply(void 0,arguments)},blur:function(a){arguments[0]=a=t.$handleEvent(a),t._onInput.apply(void 0,arguments)}},model:{value:t.inputValue,callback:function(a){t.inputValue=a},expression:"inputValue"}}),i("v-uni-button",{staticClass:"increase",class:{disabled:t.inputValue>=t.max||t.disabled,small:"small"==t.size},attrs:{type:"default"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t._calcValue("plus")}}},[t._v("+")])],1)},o=[]},"3c3b":function(t,a,i){"use strict";var e=i("4ea4");i("acd8"),i("ac1f"),i("1276"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("53a5")),o={components:{nsPayment:n.default},data:function(){return{order:1,giftcardDetail:{},max_buy:0,num:1,id:"",isSub:!1,is_balance:0,payMoney:1}},onLoad:function(t){var a=t.id;this.getData(a),this.id=t.id},onShow:function(){this.$langConfig.refresh()},methods:{goodsImg:function(t){var a=t.split(",");return a[0]?this.$util.img(a[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},getData:function(t){var a=this;this.$api.sendRequest({url:"/giftcard/api/giftcard/giftcardDetail",data:{id:t},success:function(t){0==t.code&&t.data?(a.giftcardDetail=t.data,a.max_buy=parseFloat(t.data.max_buy),a.$refs.loadingCover&&a.$refs.loadingCover.hide()):a.$refs.loadingCover&&a.$refs.loadingCover.hide()},fail:function(t){}})},change:function(t){this.num=t},openChoosePayment:function(){if(0!=this.payMoney&&(this.payMoney=this.giftcardDetail.selling_price*this.num),!uni.getStorageSync("token"))return this.$refs.login.open("/promotionpages/giftcard/my_giftcard/detail?id="+this.id),!1;0==this.giftcardDetail.card_count?this.$util.showToast({title:"库存不足"}):(uni.setStorageSync("paySource","giftcard"),this.$refs.choosePaymentPopup.open())},subscribeMessage:function(){this.$api.sendRequest({url:"/weapp/api/weapp/messagetmplids",data:{keywords:"ORDER_PAY,ORDER_DELIVERY,ORDER_TAKE_DELIVERY"},success:function(t){t.data.length&&uni.requestSubscribeMessage({tmplIds:t.data,success:function(t){},fail:function(t){console.log("fail",t)}})}})},gotoBuy:function(){var t=this;this.$api.sendRequest({url:"/giftcard/api/giftcard/createorder",data:{id:this.id,selling_price:this.giftcardDetail.selling_price,num:this.num,order_total_price:this.num*this.giftcardDetail.selling_price,is_balance:this.is_balance},success:function(a){a.data&&0==a.code?0==t.payMoney?t.$util.redirectTo("/otherpages/pay/result/result",{code:a.data},"redirectTo"):(uni.setStorageSync("paySource","giftcard"),t.out_trade_no=a.data,t.$refs.choosePaymentPopup.getPayInfo(a.data),t.isSub=!1):(t.isSub=!1,uni.hideLoading(),t.$util.showToast({title:a.message}))}})},useBalance:function(){this.is_balance?this.is_balance=0:(this.payMoney=0,this.is_balance=1),this.$forceUpdate()}},watch:{is_balance:function(t,a){0==t?this.payMoney=this.giftcardDetail.selling_price*this.num:this.giftcardDetail.member_info.balance_total-this.giftcardDetail.selling_price>=0?this.payMoney=0:this.payMoney=this.giftcardDetail.selling_price-this.giftcardDetail.member_info.balance_total}},computed:{balanceDeduct:function(){if(1==this.giftcardDetail.is_balance)return this.giftcardDetail.member_info.balance_total<=parseFloat(this.giftcardDetail.selling_price).toFixed(2)?parseFloat(this.giftcardDetail.member_info.balance_total).toFixed(2):parseFloat(this.giftcardDetail.selling_price).toFixed(2)*this.num}}};a.default=o},4190:function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var e={uniNumberBox:i("5d46").default,loadingCover:i("b1ae").default,nsLogin:i("61d0").default},n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"card-item margin-bottom"},[i("v-uni-view",{staticClass:"card-content",style:{background:t.$util.img(t.giftcardDetail.card_cover)?"url("+t.$util.img(t.giftcardDetail.card_cover)+") no-repeat 0 0/100% 100%":"url(https://cs.b2c.niuteam.cn/upload/uniapp/giftcard/detail/gitcard_default3.png) no-repeat 0 0/100% 100%"}},[i("v-uni-view",{staticClass:"card-name"},[t._v(t._s(t.giftcardDetail.card_name))]),i("v-uni-view",{staticClass:"card-use"},[t._v("礼品卡权益")]),t.giftcardDetail.balance>0&&t.giftcardDetail.point>0&&t.giftcardDetail.goods_num>0?i("v-uni-view",{staticClass:"card-num"},[t._v("￥"+t._s(t.giftcardDetail.balance)+"+"+t._s(t.giftcardDetail.point)+"积分+商品*"+t._s(t.giftcardDetail.goods_num))]):t.giftcardDetail.balance>0&&0==t.giftcardDetail.point?i("v-uni-view",{staticClass:"card-num"},[t._v("￥"+t._s(t.giftcardDetail.balance))]):0==t.giftcardDetail.balance&&t.giftcardDetail.point>0?i("v-uni-view",{staticClass:"card-num"},[t._v(t._s(t.giftcardDetail.point)+" 积分")]):0==t.giftcardDetail.balance&&0==t.giftcardDetail.point&&t.giftcardDetail.goods_num>0?i("v-uni-view",{staticClass:"card-num"},[t._v("商品*"+t._s(t.giftcardDetail.goods_num))]):t.giftcardDetail.balance>0&&t.giftcardDetail.point>0&&0==t.giftcardDetail.goods_num?i("v-uni-view",{staticClass:"card-num"},[t._v("￥"+t._s(t.giftcardDetail.balance)+"+"+t._s(t.giftcardDetail.point)+"积分")]):t.giftcardDetail.balance>0&&0==t.giftcardDetail.point&&t.giftcardDetail.goods_num>0?i("v-uni-view",{staticClass:"card-num"},[t._v("￥"+t._s(t.giftcardDetail.balance)+"+商品*"+t._s(t.giftcardDetail.goods_num))]):0==t.giftcardDetail.balance&&t.giftcardDetail.point>0&&t.giftcardDetail.goods_num>0?i("v-uni-view",{staticClass:"card-num"},[t._v(t._s(t.giftcardDetail.point)+"积分+商品*"+t._s(t.giftcardDetail.goods_num))]):t._e()],1)],1),i("v-uni-view",{staticClass:"card-warn"},[i("v-uni-view",{staticClass:"warn"},[t._v("!")]),i("v-uni-view",{staticClass:"content"},[t._v("礼品卡不支持退款，请在有效期内使用!")])],1),i("v-uni-view",{staticClass:"card-info"},[i("v-uni-view",{staticClass:"info info1"},[t._v("礼品卡名称："),i("span",[t._v(t._s(t.giftcardDetail.card_name))])]),i("v-uni-view",{staticClass:"info2",staticStyle:{padding:"20rpx 0"}},[i("v-uni-view",{staticClass:"info"},[t._v("销售价："),i("span",[t._v("￥"+t._s(t.giftcardDetail.selling_price))])]),1==t.giftcardDetail.time_type?i("v-uni-view",{staticClass:"info"},[t._v("有效期："),i("span",[t._v("永久有效")])]):2==t.giftcardDetail.time_type?i("v-uni-view",{staticClass:"info"},[t._v("有效期："),i("span",[t._v("有效期限至\n\t\t\t\t\t"+t._s(t.$util.timeStampTurnTime(t.giftcardDetail.youxiao_time)))])]):3==t.giftcardDetail.time_type?i("v-uni-view",{staticClass:"info"},[t._v("有效期："),i("span",[t._v("领取后 "+t._s(t.giftcardDetail.youxiao_day)+" 天有效")])]):t._e()],1),i("v-uni-view",{staticClass:"info"},[t._v("购买数量："),i("uni-number-box",{staticClass:"num-input",attrs:{value:t.num,size:"small",min:1,max:t.max_buy||t.giftcardDetail.card_count},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.change.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"info info3",staticStyle:{border:"none"}},[t._v("库存："),i("span",[t._v(t._s(t.giftcardDetail.card_count))])])],1),t.giftcardDetail.goods_list?i("v-uni-view",{staticClass:"giftcard-goods"},[i("v-uni-view",{staticClass:"giftcard-goods-list"},t._l(t.giftcardDetail.goods_list,(function(a,e){return i("v-uni-view",{key:e,staticClass:"giftcard-goods-item"},[i("v-uni-view",{staticClass:"giftcart-goods-img"},[i("v-uni-image",{attrs:{src:t.goodsImg(a.sku_image)}})],1),i("v-uni-view",{staticClass:"giftcard-info-wrap"},[i("v-uni-view",{staticClass:"info-title"},[t._v(t._s(a.sku_name))]),i("v-uni-view",{staticClass:"info-price"},[i("v-uni-view",{staticClass:"unit color-base-text"},[t._v("￥")]),i("v-uni-view",{staticClass:"price color-base-text"},[t._v(t._s(a.price))])],1)],1)],1)})),1)],1):t._e(),i("v-uni-view",{staticClass:"bottom"},[i("v-uni-view",{staticClass:"bottom-left"},[t._v("合计："),i("span",[t._v("￥"+t._s(t.num*t.giftcardDetail.selling_price))])]),i("v-uni-view",{staticClass:"bottom-right"},[i("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.openChoosePayment()}}},[t._v("立即购买")])],1)],1),i("ns-payment",{ref:"choosePaymentPopup",attrs:{payMoney:t.payMoney,isBalance:t.is_balance,balanceDeduct:t.giftcardDetail.selling_price>0&&t.giftcardDetail.member_info.balance_total?t.balanceDeduct:"0"},on:{confirm:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoBuy.apply(void 0,arguments)},useBalance:function(a){arguments[0]=a=t.$handleEvent(a),t.useBalance.apply(void 0,arguments)}}}),i("loading-cover",{ref:"loadingCover"}),i("ns-login",{ref:"login"})],1)},o=[]},"4e49":function(t,a,i){"use strict";i.r(a);var e=i("3c3b"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},"505d":function(t,a,i){"use strict";i("a9e3"),i("ac1f"),i("1276"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"UniNumberBox",props:{value:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},modifyFlag:{type:Boolean,default:!1},size:{type:String,default:"default"},index:{type:Number,default:-1}},data:function(){return{inputValue:0}},watch:{value:function(t){this.inputValue=+t},inputValue:function(t,a,i){+t===+a||this.modifyFlag||this.$emit("change",t,i)}},created:function(){this.inputValue=+this.value},methods:{_calcValue:function(t){if(!this.disabled&&!this.modifyFlag){var a=this._getDecimalScale(),i=this.inputValue*a,e=this.step*a;"minus"===t?i-=e:"plus"===t&&(i+=e),i<this.min||i>this.max?this.$emit("limit",{value:this.inputValue,type:t},this.index):this.inputValue=i/a}},_getDecimalScale:function(){var t=1;return~~this.step!==this.step&&(t=Math.pow(10,(this.step+"").split(".")[1].length)),t},_onInput:function(t){var a=this;setTimeout((function(){var i=t.detail.value;/(^[1-9]\d*$)/.test(i)||(i=a.min),i?(i=+i,i>a.max?i=a.max:i<a.min&&(i=a.min),a.inputValue=i):a.inputValue=0}),0)}}};a.default=e},"5d46":function(t,a,i){"use strict";i.r(a);var e=i("27a9"),n=i("0a09");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("e9c4");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"250c3aaa",null,!1,e["a"],s);a["default"]=d.exports},"921c":function(t,a,i){"use strict";i.r(a);var e=i("4190"),n=i("4e49");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("1a82");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"597bbd25",null,!1,e["a"],s);a["default"]=d.exports},bb80:function(t,a,i){var e=i("02fd");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("a201d746",e,!0,{sourceMap:!1,shadowMode:!1})},dcc4:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.uni-numbox[data-v-250c3aaa]{display:inline-flex;flex-direction:row;justify-content:flex-start;align-items:center;height:%?70?%;position:relative}.uni-numbox.small[data-v-250c3aaa]{height:%?44?%}.uni-numbox[data-v-250c3aaa]:after{content:"";position:absolute;-webkit-transform-origin:center;transform-origin:center;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border-radius:%?12?%;-webkit-transform:scale(.5);transform:scale(.5)}.uni-numbox__minus[data-v-250c3aaa],\r\n.uni-numbox__plus[data-v-250c3aaa]{width:%?40?%;height:%?40?%;border-radius:50%;background-size:100% 100%;background-position:50%}.uni-numbox__value[data-v-250c3aaa]{position:relative;background-color:#f8f8f8;width:%?80?%;height:%?40?%;text-align:center;border:1px solid #eee;display:inline-block;line-height:%?36?%;font-weight:700;margin:0;padding:0;vertical-align:top;min-height:0;border-left:none;border-right:none}.uni-numbox__value.small[data-v-250c3aaa]{width:%?60?%;font-size:%?24?%}.uni-numbox__value[data-v-250c3aaa]:after{content:"";position:absolute;-webkit-transform-origin:center;transform-origin:center;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border-top-width:0;border-bottom-width:0;-webkit-transform:scale(.5);transform:scale(.5)}.uni-numbox--disabled[data-v-250c3aaa]{color:silver}.uni-numbox uni-button[data-v-250c3aaa]{width:%?40?%;height:%?40?%;display:inline-block;box-sizing:initial;border:1px solid #eee;padding:0;margin:0;border-radius:0;background-color:#fff!important;font-weight:700}.uni-numbox uni-button.disabled[data-v-250c3aaa]{color:#eee}.uni-numbox uni-button.decrease[data-v-250c3aaa]{font-size:%?44?%;line-height:%?32?%}.uni-numbox uni-button.increase[data-v-250c3aaa]{font-size:%?32?%;line-height:%?36?%}',""]),t.exports=a},e9c4:function(t,a,i){"use strict";var e=i("08f6"),n=i.n(e);n.a}}]);