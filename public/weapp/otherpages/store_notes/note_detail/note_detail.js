(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/store_notes/note_detail/note_detail"],{"179f":function(e,t,o){"use strict";var n=o("7762"),i=o.n(n);i.a},5261:function(e,t,o){},7762:function(e,t,o){},"77a4":function(e,t,o){"use strict";o.r(t);var n=o("c5dc8"),i=o("e898");for(var s in i)"default"!==s&&function(e){o.d(t,e,(function(){return i[e]}))}(s);o("179f"),o("aa35");var a,d=o("f0c5"),u=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"7bb86386",null,!1,n["a"],a);t["default"]=u.exports},a1e2:function(e,t,o){"use strict";(function(e){o("5558");n(o("66fd"));var t=n(o("77a4"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},aa35:function(e,t,o){"use strict";var n=o("5261"),i=o.n(n);i.a},c5dc8:function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return n}));var n={loadingCover:function(){return o.e("components/loading-cover/loading-cover").then(o.bind(null,"30be"))},nsLogin:function(){return Promise.all([o.e("common/vendor"),o.e("components/ns-login/ns-login")]).then(o.bind(null,"2e9e"))}},i=function(){var e=this,t=e.$createElement,o=(e._self._c,"goods_item"==e.noteType?e.$util.img(e.goodsItemInfo.goods_image):null),n="goods_item"==e.noteType&&1==e.goodsItemInfo.is_show_release_time?e.$util.timeStampTurnTime(e.goodsItemInfo.create_time,"time"):null,i="goods_item"!=e.noteType&&"shop_said"==e.noteType&&1==e.shopSaidInfo.is_show_release_time?e.$util.timeStampTurnTime(e.shopSaidInfo.create_time,"time"):null,s="goods_item"!=e.noteType&&"shop_said"==e.noteType?e.__map(e.shopSaidInfo.goods_list,(function(t,o){var n=e.__get_orig(t),i=e.shopSaidInfo.goods_list?e.$util.img(t.goods_image.split(",")[0]):null;return{$orig:n,g3:i}})):null;e.$mp.data=Object.assign({},{$root:{g0:o,g1:n,g2:i,l0:s}})},s=[]},e898:function(e,t,o){"use strict";o.r(t);var n=o("fc2a"),i=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},fc2a:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(o("df06")),i=s(o("ccd8"));function s(e){return e&&e.__esModule?e:{default:e}}var a={components:{},data:function(){return{noteId:"",noteType:"",goodsItemInfo:{},shopSaidInfo:{},giveLikeIdent:!1,giveLikeFlag:!1}},onLoad:function(e){var t=this;if(!this.addonIsExit.notes)return this.$util.showToast({title:"商家未开启店铺笔记",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index/index",{},"redirectTo")}),2e3);e.note_id?(this.noteId=e.note_id,this.getNoteDetail()):this.$util.redirectTo("/otherpages/store_notes/note_list/note_list",{},"redirectTo")},onShow:function(){this.$langConfig.refresh(),e.getStorageSync("token")&&this.isDianzan()},mixins:[i.default],onShareAppMessage:function(){var e="goods_item"==this.noteType?this.goodsItemInfo.note_title:this.shopSaidInfo.note_title;return{title:e,path:"/otherpages/store_notes/note_detail/note_detail?note_id="+this.noteId}},methods:{getNoteDetail:function(){var e=this;this.$api.sendRequest({url:"/notes/api/notes/detail",data:{note_id:this.noteId},success:function(t){0==t.code?(e.noteType=t.data.note_type,"goods_item"==e.noteType?(e.goodsItemInfo=t.data,e.goodsItemInfo.note_content&&(e.goodsItemInfo.note_content=(0,n.default)(e.goodsItemInfo.note_content)),e.goodsItemInfo.goods_list.length?e.goodsItemInfo.goods_image=e.goodsItemInfo.goods_list[0].goods_image.split(",")[0]:e.goodsItemInfo.goods_image=e.$util.getDefaultImage().default_goods_img,e.goodsItemInfo.goods_highlights&&(e.goodsItemInfo.goods_highlights=e.goodsItemInfo.goods_highlights.split(","))):(e.shopSaidInfo=t.data,e.shopSaidInfo.note_content&&(e.shopSaidInfo.note_content=(0,n.default)(e.shopSaidInfo.note_content)))):e.$util.showToast({title:t.message}),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},giveLike:function(){var t=this;if(e.getStorageSync("token")){if(this.giveLikeFlag)return!1;this.giveLikeFlag=!0;var o=this.giveLikeIdent?"/notes/api/record/delete":"/notes/api/record/add";this.$api.sendRequest({url:o,data:{note_id:this.noteId},success:function(e){t.giveLikeFlag=!1,0==e.code&&e.data>0?("goods_item"!=t.noteType?t.shopSaidInfo.dianzan_num=t.giveLikeIdent?t.shopSaidInfo.dianzan_num-1:t.shopSaidInfo.dianzan_num+1:t.goodsItemInfo.dianzan_num=t.giveLikeIdent?t.goodsItemInfo.dianzan_num-1:t.goodsItemInfo.dianzan_num+1,t.giveLikeIdent=!t.giveLikeIdent):t.$util.showToast({title:e.message})}})}else this.$refs.login.open("/pages/index/index/index")},isDianzan:function(){var e=this;this.$api.sendRequest({url:"/notes/api/record/isDianzan",data:{note_id:this.noteId},success:function(t){0==t.code?e.giveLikeIdent=1==t.data:e.$util.showToast({title:t.message})}})},redirectToGoods:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=t?e:e.goods_list[0].sku_id;this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:o})},imageError:function(){this.goodsItemInfo.goods_image&&(this.goodsItemInfo.goods_image=this.$util.getDefaultImage().default_goods_img),this.$forceUpdate()}}};t.default=a}).call(this,o("543d")["default"])}},[["a1e2","common/runtime","common/vendor"]]]);