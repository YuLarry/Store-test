(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-fenxiao-relation-relation"],{"014c":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return i}));var i={nsEmpty:o("0e02").default,nsLogin:o("61d0").default,loadingCover:o("b1ae").default},a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{attrs:{"data-theme":e.themeStyle}},[e.token?o("mescroll-uni",{ref:"mescroll",staticClass:"member-point",attrs:{top:"20",size:8},on:{getData:function(t){arguments[0]=t=e.$handleEvent(t),e.getData.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"goods_list",attrs:{slot:"list"},slot:"list"},[o("v-uni-view",{staticClass:"order-list"},e._l(e.orderList,(function(t,i){return o("v-uni-view",{key:i,staticClass:"order-item",on:{click:function(o){arguments[0]=o=e.$handleEvent(o),e.toDetail(t.fenxiao_order_id)}}},[o("v-uni-view",{staticClass:"order-header"},[o("v-uni-text",{staticClass:"site-name font-size-base"},[e._v(e._s(t.order_no))]),1==t.is_refund?o("v-uni-text",{staticClass:"status-name color-base-text"},[e._v("已退款")]):1==t.is_settlement?o("v-uni-text",{staticClass:"status-name color-text-green"},[e._v("已结算")]):o("v-uni-text",{staticClass:"status-name color-text-orange"},[e._v("待结算")])],1),o("v-uni-view",{staticClass:"order-body"},[o("v-uni-view",{staticClass:"goods-wrap"},[o("v-uni-view",{staticClass:"goods-img"},[o("v-uni-image",{attrs:{src:e.$util.img(t.sku_image,{size:"mid"}),mode:"aspectFill","lazy-load":!0},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.imageError(i)}}})],1),o("v-uni-view",{staticClass:"goods-info"},[o("v-uni-view",{staticClass:"top-wrap"},[o("v-uni-view",{staticClass:"goods-name font-size-base"},[e._v(e._s(t.sku_name))]),o("v-uni-view",[o("v-uni-text",{staticClass:"color-tip"},[e._v("返"+e._s(e.fenxiaoWords.account))]),o("v-uni-text",{staticClass:"color-base-text font-size-goods-tag"},[e._v(e._s(e.$lang("common.currencySymbol")))]),o("v-uni-text",{staticClass:"color-base-text font-size-toolbar"},[e._v(e._s(t.commission))])],1)],1),o("v-uni-view",{staticClass:"goods-sub-section"},[o("v-uni-view",{staticClass:"goods-price"},[o("v-uni-text",{staticClass:"unit color-base-text"},[e._v(e._s(e.$lang("common.currencySymbol")))]),o("v-uni-text",{staticClass:"color-base-text font-size-toolbar"},[e._v(e._s(t.price))])],1),o("v-uni-view",[o("v-uni-text",[o("v-uni-text",{staticClass:"iconfont iconclose"}),e._v(e._s(t.num))],1)],1)],1)],1)],1)],1),o("v-uni-view",{staticClass:"order-footer"},[o("v-uni-view",{staticClass:"order-base-info active"},[o("v-uni-view",{staticClass:"order-type "},[o("v-uni-text",{staticClass:"color-tip"},[e._v(e._s(e.$util.timeStampTurnTime(t.create_time)))])],1),o("v-uni-view",{staticClass:"total"},[o("v-uni-text",[e._v("合计：")]),o("v-uni-text",{staticClass:"color-base-text"},[e._v(e._s(e.$lang("common.currencySymbol")))]),o("v-uni-text",{staticClass:"font-size-toolbar color-base-text"},[e._v(e._s(t.real_goods_money))])],1)],1)],1)],1)})),1),o("v-uni-view",{staticClass:"cart-empty"},[0==e.orderList.length&&e.emptyShow?o("ns-empty",{attrs:{text:"暂无订单",isIndex:!1}}):e._e()],1)],1)],1):e._e(),o("ns-login",{ref:"login"}),o("loading-cover",{ref:"loadingCover"})],1)},s=[]},"0f98":function(e,t,o){"use strict";var i=o("4ea4");o("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(o("8af4")),s=i(o("245b")),r={data:function(){return{orderList:[],emptyShow:!1,token:null,fenxiaoId:"",subMemberId:""}},mixins:[a.default,s.default],onLoad:function(e){e.fenxiao_id&&(this.fenxiaoId=e.fenxiao_id),e.sub_member_id&&(this.subMemberId=e.sub_member_id)},onShow:function(){this.$langConfig.refresh(),this.$langConfig.title(this.fenxiaoWords.concept+"订单"),this.token=uni.getStorageSync("token")},methods:{getData:function(e){var t=this;this.emptyShow=!1,1==e.num&&(this.orderList=[]),this.$api.sendRequest({url:"/fenxiao/api/fenxiao/getorder",data:{page:e.num,page_size:e.size,fenxiao_id:this.fenxiaoId?this.fenxiaoId:"",sub_member_id:this.subMemberId?this.subMemberId:""},success:function(o){t.emptyShow=!0;var i=[];o.message;0==o.code&&o.data&&o.data.list?i=o.data.list:t.$util.showToast({title:o.message}),e.endSuccess(i.length),1==e.num&&(t.orderList=[]),t.orderList=t.orderList.concat(i),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(o){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},imageError:function(e){this.orderList[e].sku_image=this.$util.getDefaultImage().default_goods_img,this.$forceUpdate()},toDetail:function(e){this.$util.redirectTo("/otherpages/fenxiao/order_detail/order_detail",{id:e})}},computed:{storeToken:function(){return this.$store.state.token}}};t.default=r},"15b0":function(e,t,o){"use strict";o.r(t);var i=o("014c"),a=o("d3ba");for(var s in a)"default"!==s&&function(e){o.d(t,e,(function(){return a[e]}))}(s);o("86b3");var r,d=o("f0c5"),n=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"2dec1f4e",null,!1,i["a"],r);t["default"]=n.exports},"469b":function(e,t,o){var i=o("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-2dec1f4e] .fixed{position:relative;top:0}[data-v-2dec1f4e] .empty{margin-top:0!important}.cart-empty[data-v-2dec1f4e]{padding-top:104px!important}.color-text-green[data-v-2dec1f4e]{color:#11bd64}.color-text-orange[data-v-2dec1f4e]{color:#ffa044}.withdraw-cate[data-v-2dec1f4e]{width:100%;height:%?90?%;display:flex;box-sizing:border-box;background:#fff}.withdraw-cate .cate-li[data-v-2dec1f4e]{flex:1;display:flex;justify-content:center;align-items:center;height:100%;font-size:%?30?%}.withdraw-cate .cate-li.active[data-v-2dec1f4e]{box-sizing:border-box;position:relative}.withdraw-cate .cate-li.active[data-v-2dec1f4e]::after{position:absolute;bottom:0;left:0;content:"";width:100%;height:2px}.goods_list[data-v-2dec1f4e]{width:100%;height:100%;padding:0 %?24?%;box-sizing:border-box;margin-top:%?18?%}.goods_list .order-item[data-v-2dec1f4e]{padding:%?30?%;box-sizing:border-box;border-radius:%?10?%;background:#fff;position:relative;margin-bottom:%?18?%}.goods_list .order-item .order-header[data-v-2dec1f4e]{display:flex;align-items:center;position:relative;padding-bottom:%?24?%;line-height:1;font-size:%?22?%}.goods_list .order-item .order-header .icondianpu[data-v-2dec1f4e]{display:inline-block;line-height:1;margin-right:%?12?%}.goods_list .order-item .order-header .status-name[data-v-2dec1f4e]{flex:1;text-align:right}.goods_list .order-item .order-body[data-v-2dec1f4e]{margin-bottom:%?24?%}.goods_list .order-item .order-body .goods-wrap[data-v-2dec1f4e]{display:flex;position:relative}.goods_list .order-item .order-body .goods-wrap[data-v-2dec1f4e]:last-of-type{margin-bottom:0}.goods_list .order-item .order-body .goods-wrap .goods-img[data-v-2dec1f4e]{width:%?170?%;height:%?170?%;padding:%?20?% 0 0 0;margin-right:%?5?%}.goods_list .order-item .order-body .goods-wrap .goods-img uni-image[data-v-2dec1f4e]{width:100%;height:100%;border-radius:%?10?%}.goods_list .order-item .order-body .goods-wrap .goods-info[data-v-2dec1f4e]{flex:1;position:relative;padding:%?20?% 0 0 0;max-width:calc(100% - %?200?%);margin-left:%?18?%;display:flex;flex-direction:column}.goods_list .order-item .order-body .goods-wrap .goods-info .top-wrap[data-v-2dec1f4e]{flex:1}.goods_list .order-item .order-body .goods-wrap .goods-info .goods-name[data-v-2dec1f4e]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;line-height:1.5;font-size:%?22?%;color:#000}.goods_list .order-item .order-body .goods-wrap .goods-info .goods-sub-section[data-v-2dec1f4e]{width:100%;line-height:1.5;display:flex;align-items:center;font-size:%?22?%;margin-top:%?20?%}.goods_list .order-item .order-body .goods-wrap .goods-info .goods-sub-section .unit[data-v-2dec1f4e]{font-size:%?24?%;margin-right:%?2?%}.goods_list .order-item .order-body .goods-wrap .goods-info .goods-sub-section uni-view[data-v-2dec1f4e]{flex:1;line-height:1}.goods_list .order-item .order-body .goods-wrap .goods-info .goods-sub-section uni-view[data-v-2dec1f4e]:last-of-type{text-align:right}.goods_list .order-item .order-body .goods-wrap .goods-info .goods-sub-section uni-view:last-of-type .iconfont[data-v-2dec1f4e]{line-height:1;font-size:%?24?%}.goods_list .order-item .order-body .goods-wrap .goods-info .order-time[data-v-2dec1f4e]{margin-top:6px;font-size:%?22?%;color:#838383}.goods_list .order-item .order-body .goods-wrap .goods-info .order-time .goods-price[data-v-2dec1f4e]{font-size:%?22?%;float:right;color:#000}.goods_list .order-item .order-footer[data-v-2dec1f4e]{padding-top:%?24?%}.goods_list .order-item .order-footer .order-base-info[data-v-2dec1f4e]{display:flex}.goods_list .order-item .order-footer .order-base-info .total[data-v-2dec1f4e]{text-align:right;padding-top:%?20?%;flex:1;font-size:%?22?%}.goods_list .order-item .order-footer .order-base-info .total > uni-text[data-v-2dec1f4e]{line-height:1}.goods_list .order-item .order-footer .order-base-info .order-type[data-v-2dec1f4e]{font-size:%?22?%}.goods_list .order-item .order-footer .order-base-info .order-type > uni-text[data-v-2dec1f4e]{line-height:1}.goods_list .order-item .order-footer .order-base-info.active .total[data-v-2dec1f4e]{padding-top:0}.goods_list .order-item .order-footer .order-base-info.active .order-type[data-v-2dec1f4e]{padding-top:0}.goods_list .order-item[data-v-2dec1f4e]:last-child{border:none}.goods-wraps[data-v-2dec1f4e]{align-items:center}.goods_list .order-item .order-body .goods-wraps .goods-img[data-v-2dec1f4e],\r\n.goods_list .order-item .order-body .goods-wraps .goods-info[data-v-2dec1f4e],\r\n.goods_list .order-item .order-footers[data-v-2dec1f4e]{padding:0}',""]),e.exports=t},"86b3":function(e,t,o){"use strict";var i=o("e579"),a=o.n(i);a.a},"8af4":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{fenxiaoWords:{}}},methods:{getFenxiaoWrods:function(){var e=this;this.$api.sendRequest({url:"/fenxiao/api/config/words",success:function(t){t.code>=0&&t.data&&(e.fenxiaoWords=t.data,uni.setStorageSync("fenxiaoWords",t.data))}})}},onShow:function(){uni.getStorageSync("fenxiaoWords")&&(this.fenxiaoWords=uni.getStorageSync("fenxiaoWords")),this.getFenxiaoWrods()}};t.default=i},d3ba:function(e,t,o){"use strict";o.r(t);var i=o("0f98"),a=o.n(i);for(var s in i)"default"!==s&&function(e){o.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},e579:function(e,t,o){var i=o("469b");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=o("4f06").default;a("13b3d14b",i,!0,{sourceMap:!1,shadowMode:!1})}}]);