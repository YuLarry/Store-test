(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_tool/store_notes/note_list"],{1271:function(e,t,n){"use strict";var o=n("1d5d"),i=n.n(o);i.a},"14ae":function(e,t,n){"use strict";n.r(t);var o=n("dce9"),i=n("7c9a");for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("1271");var r,a=n("f0c5"),u=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=u.exports},"1d5d":function(e,t,n){},"7c9a":function(e,t,n){"use strict";n.r(t);var o=n("982c"),i=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,(function(){return o[e]}))}(s);t["default"]=i.a},"982c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{groupInfo:{groupList:[],currIdent:0,currId:0},noteListInfo:[],giveLikeFlag:!1,showEmpty:!1,memberId:0,mpShareData:null}},onLoad:function(t){var n=this;if(this.$util.getMemberId().then((function(e){n.memberId=e})),t.source_member&&e.setStorageSync("source_member",t.source_member),t.scene){var o=decodeURIComponent(t.scene);o=o.split("&"),o.length&&o.forEach((function(t){-1!=t.indexOf("sku_id")&&(n.skuId=t.split("-")[1]),-1!=t.indexOf("m")&&e.setStorageSync("source_member",t.split("-")[1]),-1!=t.indexOf("is_test")&&e.setStorageSync("is_test",1)}))}},onShow:function(){var t=this;if(e.getStorageSync("token")&&e.getStorageSync("source_member")&&this.$util.onSourceMember(e.getStorageSync("source_member")),this.$util.getMpShare().then((function(e){t.mpShareData=e})),!this.addonIsExist.notes)return this.$util.showToast({title:"商家未开启店铺笔记",mask:!0,duration:2e3}),void setTimeout((function(){t.$util.redirectTo("/pages/index/index",{},"redirectTo")}),2e3);this.getGroup(),this.$refs.mescroll&&this.$refs.mescroll.refresh()},onShareAppMessage:function(){return this.mpShareData.appMessage},onShareTimeline:function(){return this.mpShareData.timeLine},methods:{getGroup:function(){var e=this;this.showEmpty=!1,this.$api.sendRequest({url:"/notes/api/notes/group",success:function(t){e.showEmpty=!0,0==t.code?0!=t.data.length&&(e.groupInfo.groupList=t.data,e.groupInfo.currId=t.data[0].group_id):e.$util.showToast({title:t.message})},fail:function(t){mescroll.endErr(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},tabCut:function(e,t){this.groupInfo.currIdent=t,this.groupInfo.currId=e,this.$refs.mescroll.refresh(),this.$refs.loadingCover&&this.$refs.loadingCover.show()},getNotesList:function(e){var t=this;this.showEmpty=!1,this.$api.sendRequest({url:"/notes/api/notes/lists",data:{page:e.num,page_size:e.size,group_id:this.groupInfo.currId},success:function(n){t.showEmpty=!0;var o=[];0==n.code?o=n.data.list:t.$util.showToast({title:n.message}),e.endSuccess(o.length),1==e.num&&(t.noteListInfo=[]),t.noteListInfo=t.noteListInfo.concat(o),t.noteListInfo.forEach((function(e,t){e.img=e.cover_img.split(","),e.label=e.goods_highlights.split(",")})),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(n){e.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},noteDetail:function(e){this.$util.redirectTo("/pages_tool/store_notes/note_detail",{note_id:e})},giveLike:function(t,n){var o=this;if(e.getStorageSync("token")){if(this.giveLikeFlag)return!1;this.giveLikeFlag=!0;var i=1==this.noteListInfo[n].is_dianzan?"/notes/api/record/delete":"/notes/api/record/add";this.$api.sendRequest({url:i,data:{note_id:t},success:function(e){o.giveLikeFlag=!1,0==e.code&&e.data>0?(o.noteType,o.noteListInfo[n].dianzan_num=1==o.noteListInfo[n].is_dianzan?o.noteListInfo[n].dianzan_num-1:o.noteListInfo[n].dianzan_num+1,o.noteListInfo[n].is_dianzan=1==o.noteListInfo[n].is_dianzan?0:1):o.$util.showToast({title:e.message})}})}else this.$refs.login.open("/pages_tool/store_notes/note_list")}}};t.default=n}).call(this,n("543d")["default"])},bdf2:function(e,t,n){"use strict";(function(e){n("34b0");o(n("66fd"));var t=o(n("14ae"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},dce9:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o}));var o={loadingCover:function(){return n.e("components/loading-cover/loading-cover").then(n.bind(null,"790a"))},nsEmpty:function(){return n.e("components/ns-empty/ns-empty").then(n.bind(null,"2c4c"))},diyBottomNav:function(){return n.e("components/diy-components/diy-bottom-nav").then(n.bind(null,"7932"))},nsLogin:function(){return n.e("components/ns-login/ns-login").then(n.bind(null,"2893"))}},i=function(){var e=this,t=e.$createElement,n=(e._self._c,0!=e.groupInfo.currId?e.__map(e.noteListInfo,(function(t,n){var o=e.__get_orig(t),i=0==t.cover_type?e.$util.img(t.cover_img):null,s=0!=t.cover_type?e.__map(t.img,(function(t,n){var o=e.__get_orig(t),i=e.$util.img(t);return{$orig:o,g1:i}})):null,r=1==t.is_show_release_time?e.$util.timeStampTurnTime(t.create_time,"time"):null;return{$orig:o,g0:i,l0:s,g2:r}})):null);e.$mp.data=Object.assign({},{$root:{l1:n}})},s=[]}},[["bdf2","common/runtime","common/vendor"]]]);