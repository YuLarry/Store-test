(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_tool/chat/room"],{4721:function(t,e,i){"use strict";i.r(e);var o=i("6989"),s=i("f14c");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("945c");var r,a=i("f0c5"),c=Object(a["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);e["default"]=c.exports},"529b":function(t,e,i){"use strict";(function(t){i("34b0");o(i("66fd"));var e=o(i("4721"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"5b57":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(i("a34a")),s=r(i("1ebb")),n=r(i("ef59"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e,i,o,s,n,r){try{var a=t[n](r),c=a.value}catch(d){return void i(d)}a.done?e(c):Promise.resolve(c).then(o,s)}function c(t){return function(){var e=this,i=arguments;return new Promise((function(o,s){var n=t.apply(e,i);function r(t){a(n,o,s,r,c,"next",t)}function c(t){a(n,o,s,r,c,"throw",t)}r(void 0)}))}}var d=function(){Promise.all([i.e("common/vendor"),i.e("components/chat-message/chat-message")]).then(function(){return resolve(i("f1d0"))}.bind(null,i)).catch(i.oe)},u={components:{chatMessage:d},data:function(){return{emjoyList:n.default.emjoyList,emjoyShow:!1,chatMore:!1,formData:{content:"",goods_id:0,order_id:0,image:""},isNetWork:!1,send:!1,messageList:[],page:1,isAll:!1,isLoading:!1,showLoading:!1,jumpBottom:null,scrollTop:0,scrollPosition:0,siteId:0,skuId:0,orderId:0,siteName:"",shopInfo:{},orderdetail:{},userInfo:{},style:{},inputFirst:0,inputShow:!1,inputOffsetBottom:0,goodsDetails:{},startId:0,goods_type:{promotion_name:"",promotion_id:""},keyWordsConfig:{is_open:0}}},mixins:[s.default],computed:{chatBottom:function(){return this.emjoyShow||this.chatMore||this.inputShow}},onLoad:function(e){var i=this;e.sku_id&&(this.skuId=e.sku_id,this.getGoodsDetails(e.sku_id)),e.order_id&&(this.orderId=e.order_id,this.getOrderInfo(e.order_id)),(this.skuId||this.orderId)&&(this.send=!0),this.$on("upDOM",(function(){i.setPageScrollTo()})),e.type?this.goods_type.promotion_name=e.type:this.goods_type.promotion_name="",e.type_id?this.goods_type.promotion_id=e.type_id:this.goods_type.promotion_id="",t.getStorageSync("token")?(this.getUserInfo(),this.getSiteInfo(),this.inputFirst=0,this.inputShow=!1,this.inputOffsetBottom=0,this.getKeyWordsConfig(),t.setNavigationBarTitle({title:"商家客服"})):this.$util.redirectTo("/pages_tool/login/login")},onReady:function(){var e=this;t.onKeyboardHeightChange((function(t){e.inputOffsetBottom=t.height,0===t.height&&(e.focus=!1)}))},methods:{onEditorReady:function(){t.createSelectorQuery().select("#editor").context((function(t){})).exec()},onEditorinput:function(){var e=this;t.createSelectorQuery().select("#editor").context((function(t){e.editorCtx=t.context,e.editorCtx.getContents({success:function(t){e.formData.content=t.html}})})).exec()},openChatMore:function(){var t=this;this.$util.isAndroid&&(this.inputShow=!1,this.inputFirst=1),this.chatMore=!this.chatMore,this.emjoyShow=!1,this.$nextTick((function(){t.setPageScrollTo()}))},getUserInfo:function(){var t=this;this.$api.sendRequest({url:"/api/member/info",success:function(e){0==e.code&&(t.userInfo=e.data)}})},getSiteInfo:function(){var t=this;this.$api.sendRequest({url:"/api/site/info",success:function(e){0==e.code&&(t.shopInfo=e.data)}})},getKeyWordsConfig:function(){var t=this;this.$api.sendRequest({url:"/servicer/api/chat/keyword",success:function(e){e.code>=0&&e.data&&(t.keyWordsConfig=e.data)}})},getGoodsDetails:function(t){var e=this;this.$api.sendRequest({url:"/api/goodssku/detail",data:{sku_id:t},success:function(t){t.code>=0&&(e.goodsDetails=t.data.goods_sku_detail)}})},getOrderInfo:function(t){var e=this;this.$api.sendRequest({url:"/api/order/detail",data:{order_id:t},success:function(t){t.code>=0&&(console.log(t,"resresresresresresresresres"),e.orderdetail=t.data)}})},getChatList:function(){if(this.isAll)this.isLoading=!1;else if(!this.isLoading){this.isLoading=!0,1==this.page&&(this.messageList=[]);var t=0;t=this.messageList.length;var e=this;this.$api.sendRequest({url:"/servicer/api/chat/dialogs",data:{servicer_id:this.servicer_id,page:this.page,limit:15,site_id:e.siteId},success:function(i){if(i.code>=0&&i.data){e.page+=1,i.data.list&&i.data.list.length<15&&(e.isAll=!0);var o=[],s=i.data.list;if(s.length)for(var n=0;n<s.length;n++){var r={};console.log(s[n]),0==s[n].content_type?(r.id=e.startId,r.content=0==s[n].type?s[n].consumer_say:s[n].servicer_say,r.isItMe=0==s[n].type,r.contentType="string",r.sendStatus=!0):1==s[n].content_type?(r.id=e.startId,r.isItMe=0==s[n].type,r.sku_id=s[n].goods_sku_id,r.sendStatus=!0,0==s[n].type?r.contentType="sendGood":r.contentType="goodssku"):2==s[n].content_type?(r.id=e.startId,r.isItMe=0==s[n].type,r.contentType="order",r.order_id=s[n].order_id,r.sendStatus=!0):3==s[n].content_type&&(r.id=e.startId,r.isItMe=0==s[n].type,r.contentType="image",r.image=0==s[n].type?s[n].consumer_say:s[n].servicer_say,r.sendStatus=!0),o.push(r),e.startId+=1}setTimeout((function(){if(e.page-1==1){if(e.skuId&&Object.keys(e.goodsDetails).length>0){var i={id:e.startId,isItMe:!0,contentType:"sendGood",goodsDetail:e.goodsDetails};o.push(i),e.startId+=1}if(e.orderId&&Object.keys(e.orderdetail).length>0){var s={id:e.startId,isItMe:!0,contentType:"sendOrder",orderDetail:e.orderdetail};o.push(s),e.startId+=1}}o.length&&(e.messageList=o.concat(e.messageList),e.$nextTick((function(){e.page-1==1?(setTimeout((function(){e.setPageScrollTo()}),1e3),e.isLoading=!1):(e.setPageScrollTo("#chat".concat(e.messageList.length-t)),e.isLoading=!1)})))}),500)}else this.$util.showToast({title:i.message})}})}},setPageScrollTo:function(e){if(e){var i=t.createSelectorQuery().in(this).select(e);i.boundingClientRect((function(e){t.pageScrollTo({scrollTop:e.top-30,duration:0})})).exec()}else{var o=t.createSelectorQuery().in(this);o.select(".room").boundingClientRect((function(e){t.pageScrollTo({scrollTop:e.height-30,duration:0})})).exec(),this.$refs.loadingCover&&this.$refs.loadingCover.hide()}},sendGood:function(t,e){this.sendMsg("goods"),this.messageList.splice(e,1)},sendOrder:function(t,e){this.sendMsg("order"),this.messageList.splice(e,1)},sendMsg:function(e){if(!this.isNetWork){this.isNetWork=!0;var i=this;if("goods"==e){var o={};""!=this.goods_type.promotion_id&&(o.promotion_id=this.goods_type.promotion_id,o.promotion_name=this.goods_type.promotion_name),this.$api.sendRequest({url:"/servicer/api/chat/say",data:{goods_id:this.skuId,servicer_id:this.servicer_id,content_type:1,site_id:this.siteId,relate_data:JSON.stringify(o)},success:function(t){i.send=!1,i.joinData("send","goods")},complete:function(){i.isNetWork=!1}})}else if("order"==e)this.$api.sendRequest({url:"/servicer/api/chat/say",data:{order_id:this.orderId,servicer_id:this.servicer_id,site_id:this.siteId,content_type:2},success:function(t){i.send=!1,i.joinData("send","order")},complete:function(){i.isNetWork=!1}});else if("image"==e)i.joinData("send","image"),this.$api.sendRequest({url:"/servicer/api/chat/say",data:{message:this.formData.image.trim(),servicer_id:this.servicer_id,site_id:this.siteId,content_type:3},success:function(t){console.log(t,"图片上传成功")},error:function(){var e=this;i.messageList[i.messageList.length-1].sendStatus=!1,t.createSelectorQuery().select("#editor").context((function(t){e.editorCtx=t.context,e.editorCtx.clear()})).exec()},complete:function(){i.isNetWork=!1}});else{console.log(this.formData.content,"this.formData.content");var s=this.formData.content,n=s.replace(/<p>/,""),r=n.replace(/<\/p>/,""),a=r.replace(/<br>/,"");if("<p></p>"==s||"<p><br></p>"==s||!a.trim())return this.$util.showToast({title:"发送内容不能为空"}),t.createSelectorQuery().select("#editor").context((function(t){i.editorCtx=t.context,i.editorCtx.clear()})).exec(),void(i.isNetWork=!1);i.joinData("send","string"),this.$api.sendRequest({url:"/servicer/api/chat/say",data:{message:this.formData.content,servicer_id:this.servicer_id,content_type:0},success:function(e){var o=this;0==e.code&&(console.log(e,"文字上传成功"),i.formData.content="<p></p>",t.createSelectorQuery().select("#editor").context((function(t){o.editorCtx=t.context,o.editorCtx.clear()})).exec())},error:function(){var e=this;i.messageList[i.messageList.length-1].sendStatus=!1,t.createSelectorQuery().select("#editor").context((function(t){e.editorCtx=t.context,e.editorCtx.clear()})).exec()},complete:function(){i.isNetWork=!1}})}}},joinData:function(t,e){var i=this;return c(o.default.mark((function s(){var n;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:"send"==t&&(n={isItMe:!0,contentType:e,sendStatus:!0},"string"==e?n.content=i.formData.content:"order"==e?n.order_id=i.orderId:"goods"==e?n.sku_id=i.skuId:"image"==e&&(n.image=i.formData.image),i.messageList.push(n),i.$nextTick((function(){setTimeout((function(){i.setPageScrollTo()}),500)})));case 1:case"end":return o.stop()}}),s)})))()},hideLoadTips:function(t){var e=this;t?(this.ajax.loadText="消息获取成功",setTimeout((function(){e.ajax.loading=!1}),300)):(this.ajax.loading=!0,this.ajax.loadText="正在获取消息")},onPageScroll:function(t){0==t.scrollTop&&this.getChatList()},inputFocus:function(t){this.$util.isAndroid()&&this.inputFirst&&(this.inputShow=!0),this.chatMore=!1},closePopWindow:function(){this.inputFirst=0,this.chatMore=!1,this.inputShow=!1},openEmjoy:function(){var t=this;console.log(this.emjoyShow,"this.emjoyShow"),this.chatMore=!1,this.emjoyShow=!this.emjoyShow,this.$nextTick((function(){t.setPageScrollTo()}))},addEmjoy:function(e,i){var o=this;console.log(e,i),t.createSelectorQuery().select("#editor").context((function(t){o.editorCtx=t.context,o.editorCtx.getContents({success:function(t){"<p><br></p>"==t.html&&(t.html="<p></p>");var i=o.$util.img(e),s='<img src="'+i+'" style="height=20px; width=20px; margin-left=20px;">',n=t.html.replace(/<\/p>$/,s+"</p>");o.editorCtx.setContents({html:n}),o.formData.content=n,o.emjoyShow=!1}})})).exec()},addImg:function(){var t=this;this.$util.upload(1,{path:"chatimg"},(function(e){if(!e[0])return t.$util.showToast({title:"上传失败！"}),!1;t.formData.image=e[0],t.sendMsg("image")}),"/servicer/api/chat/chatimg")}},beforeDestroy:function(){clearInterval(this.timeoutObj),this.timeoutObj=null,this.$api.sendRequest({url:"/servicer/api/chat/bye",data:{servicer_id:this.servicer_id,site_id:this.siteId},success:function(e){t.closeSocket()}})}};e.default=u}).call(this,i("543d")["default"])},6989:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var o={chatMessage:function(){return Promise.all([i.e("common/vendor"),i.e("components/chat-message/chat-message")]).then(i.bind(null,"f1d0"))},loadingCover:function(){return i.e("components/loading-cover/loading-cover").then(i.bind(null,"790a"))}},s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.emjoyShow?t.__map(t.emjoyList,(function(e,i){var o=t.__get_orig(e),s=t.$util.img(e);return{$orig:o,g0:s}})):null);t._isMounted||(t.e0=function(e,i){var o=arguments[arguments.length-1].currentTarget.dataset,s=o.eventParams||o["event-params"];i=s.item;t.formData.content=i.keyword,t.sendMsg("message")}),t.$mp.data=Object.assign({},{$root:{l0:i}})},n=[]},"945c":function(t,e,i){"use strict";var o=i("b069"),s=i.n(o);s.a},b069:function(t,e,i){},f14c:function(t,e,i){"use strict";i.r(e);var o=i("5b57"),s=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=s.a}},[["529b","common/runtime","common/vendor"]]]);