(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["otherpages/chat/room/room"],{"1c0e":function(t,e,i){"use strict";(function(t){i("5558");s(i("66fd"));var e=s(i("329a"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"329a":function(t,e,i){"use strict";i.r(e);var s=i("9673"),n=i("eabe");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("bbcc");var a,r=i("f0c5"),c=Object(r["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);e["default"]=c.exports},9673:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return s}));var s={chatMessage:function(){return Promise.all([i.e("common/vendor"),i.e("components/chat-message/chat-message")]).then(i.bind(null,"7dc9"))}},n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.emjoyShow?t.__map(t.emjoyList,(function(e,i){var s=t.__get_orig(e),n=t.$util.img(e);return{$orig:s,g0:n}})):null),s=t.emjoyShow?t.formData.content.trim():null;t.$mp.data=Object.assign({},{$root:{l0:i,g1:s}})},o=[]},a36b:function(t,e,i){},afb0:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("a34a")),n=a(i("dc98")),o=a(i("0e52"));a(i("7261"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e,i,s,n,o,a){try{var r=t[o](a),c=r.value}catch(d){return void i(d)}r.done?e(c):Promise.resolve(c).then(s,n)}function c(t){return function(){var e=this,i=arguments;return new Promise((function(s,n){var o=t.apply(e,i);function a(t){r(o,s,n,a,c,"next",t)}function c(t){r(o,s,n,a,c,"throw",t)}a(void 0)}))}}var d=function(){Promise.all([i.e("common/vendor"),i.e("components/chat-message/chat-message")]).then(function(){return resolve(i("7dc9"))}.bind(null,i)).catch(i.oe)},u={components:{chatMessage:d},data:function(){return{emjoyList:o.default.emjoyList,emjoyShow:!1,chatMore:!1,formData:{content:"",goods_id:0,order_id:0,image:""},isNetWork:!1,send:!1,messageList:[],page:1,isAll:!1,isLoading:0,showLoading:!1,jumpBottom:null,scrollTop:0,scrollPosition:0,siteId:0,skuId:0,orderId:0,siteName:"",shopInfo:{},userInfo:{},style:{},focus:!0,inputFirst:0,inputShow:!1,inputOffsetBottom:0,mescroll:null}},mixins:[n.default],computed:{chatBottom:function(){return this.emjoyShow||this.chatMore}},onLoad:function(e){t.getStorageSync("token")?(this.getUserInfo(),this.getShopInfo(),this.skuId=e.skuId?e.skuId:0,this.orderId=e.orderId?e.orderId:0,(this.skuId||this.orderId)&&(this.send=!0)):this.$util.redirectTo("/pages/login/login/login")},onShow:function(){this.inputFirst=0,this.inputShow=!1,this.inputOffsetBottom=0},onReady:function(){var e=this;t.onKeyboardHeightChange((function(t){e.inputOffsetBottom=t.height,0===t.height&&(e.focus=!1)}))},methods:{mescrollInit:function(t){this.mescroll=t,this.checkOpenSocket()},downCallback:function(){this.getChatList()},onPullDownRefresh:function(){this.getChatList(),setTimeout((function(){t.stopPullDownRefresh()}),1e3)},isAndroid:function(){var e=t.getSystemInfoSync().platform;return"ios"!=e&&("android"==e||void 0)},openChatMore:function(){var t=this;this.isAndroid&&(this.inputShow=!1,this.inputFirst=1),this.chatMore=!this.chatMore,this.emjoyShow=!1,this.$nextTick((function(){t.setPageScrollTo()}))},getShopInfo:function(){var e=this;0==this.siteId?(this.siteName="平台客服",t.setNavigationBarTitle({title:this.siteName})):this.$api.sendRequest({url:"/api/site/info",success:function(i){0==i.code&&(e.shopInfo=i.data,e.siteName=i.data.site_name,t.setNavigationBarTitle({title:e.siteName}))}})},getUserInfo:function(){var t=this;this.$api.sendRequest({url:"/api/member/info",success:function(e){0==e.code&&(t.userInfo=e.data)}})},getChatList:function(){var t=this,e=this;this.isAll?e.mescroll.endSuccess():this.isLoading||(this.isLoading=!0,1==this.page&&(this.messageList=[]),this.$api.sendRequest({url:"/servicer/api/chat/dialogs",data:{servicer_id:this.servicer_id,page:this.page,limit:5,site_id:e.siteId},success:function(t){if(e.page+=1,t.code>=0&&t.data){t.data.list&&t.data.list.length<5&&(e.isAll=!0);var i=0;this.messageList&&(i=this.messageList.slice(-1).id+1);var s=[];if(2==e.page){if(e.skuId){var n={id:i,isItMe:!0,contentType:"sendGood",sku_id:e.skuId};s.push(n),i+=1}if(e.orderId){var o={id:i,isItMe:!0,contentType:"sendOrder",order_id:e.orderId};s.push(o),i+=1}}var a=t.data.list;if(a.length)for(var r=0;r<a.length;r++){var c={};0==a[r].content_type?(c.id=i,c.content=0==a[r].type?a[r].consumer_say:a[r].servicer_say,c.isItMe=0==a[r].type,c.contentType="string",c.sendStatus=!0):1==a[r].content_type?(c.id=i,c.isItMe=0==a[r].type,c.contentType="goods",c.sku_id=a[r].goods_sku_id,c.send=!1,c.sendStatus=!0):2==a[r].content_type?(c.id=i,c.isItMe=0==a[r].type,c.contentType="order",c.order_id=a[r].order_id,c.send=!1,c.sendStatus=!0):3==a[r].content_type&&(c.id=i,c.isItMe=0==a[r].type,c.contentType="image",c.id=i,c.image=0==a[r].type?a[r].consumer_say:a[r].servicer_say,c.sendStatus=!0),s.push(c),console.log(s),i+=1}if(2==e.page){var d={};d.id=i,e.servicer_id>0?d.contentType="online":0==e.servicer_id&&(d.contentType="noline"),s.push(d),i+=1}e.isLoading=!1,s.length&&(e.messageList=s.concat(e.messageList),e.$nextTick((function(){if(2==e.page)e.setPageScrollTo();else{var t="#chat"+s.length;e.setPageScrollTo(t)}})))}else console.log(t),this.isLoading=!1,this.$util.showToast({title:t.message});e.mescroll.endSuccess()},fail:function(){t.mescroll.endErr()}}))},setPageScrollTo:function(e){if(e){var i=t.createSelectorQuery().in(this).select(e);i.boundingClientRect((function(t){return console.log(t,"结果"),!1})).exec()}else{var s=t.createSelectorQuery().in(this);s.select(".room-content-box").boundingClientRect((function(e){t.pageScrollTo({scrollTop:e.height-30,duration:0})})).exec()}},sendGood:function(t,e){this.sendMsg("goods"),this.messageList.splice(e,1,1)},sendOrder:function(t,e){this.sendMsg("order"),this.messageList.splice(e,1,1)},sendMsg:function(e){if(!this.isNetWork){this.isNetWork=!0;var i=this;if("goods"==e)this.$api.sendRequest({url:"/servicer/api/chat/say",data:{goods_id:this.skuId,servicer_id:this.servicer_id,content_type:1,site_id:this.siteId},success:function(t){i.send=!1,i.joinData("send","goods")},complete:function(){i.isNetWork=!1,t.hideKeyboard()}});else if("order"==e)this.$api.sendRequest({url:"/servicer/api/chat/say",data:{order_id:this.orderId,servicer_id:this.servicer_id,site_id:this.siteId,content_type:2},success:function(t){i.send=!1,i.joinData("send","order")},complete:function(){i.isNetWork=!1,t.hideKeyboard()}});else if("image"==e)i.joinData("send","image"),this.$api.sendRequest({url:"/servicer/api/chat/say",data:{message:this.formData.image.trim(),servicer_id:this.servicer_id,site_id:this.siteId,content_type:3},success:function(t){i.formData.content=""},error:function(){i.messageList[i.messageList.length-1].sendStatus=!1,i.formData.content=""},complete:function(){i.isNetWork=!1,t.hideKeyboard()}});else{if(!this.formData.content.trim())return this.$util.showToast({title:"发送内容不能为空"}),void(i.isNetWork=!1);i.joinData("send","string"),this.$api.sendRequest({url:"/servicer/api/chat/say",data:{message:this.formData.content.trim(),servicer_id:this.servicer_id,site_id:this.siteId,content_type:0},success:function(t){i.formData.content=""},error:function(){i.messageList[i.messageList.length-1].sendStatus=!1,i.formData.content=""},complete:function(){i.isNetWork=!1,t.hideKeyboard()}})}}},joinData:function(t,e){var i=this;return c(s.default.mark((function n(){var o;return s.default.wrap((function(s){while(1)switch(s.prev=s.next){case 0:"send"==t&&(o={isItMe:!0,contentType:e,sendStatus:!0},"string"==e?o.content=i.formData.content:"order"==e?o.order_id=i.orderId:"goods"==e?o.sku_id=i.skuId:"image"==e&&(o.image=i.formData.image),i.messageList.push(o),i.$nextTick((function(){i.setPageScrollTo()})));case 1:case"end":return s.stop()}}),n)})))()},hideLoadTips:function(t){var e=this;t?(this.ajax.loadText="消息获取成功",setTimeout((function(){e.ajax.loading=!1}),300)):(this.ajax.loading=!0,this.ajax.loadText="正在获取消息")},onPageScroll:function(t){t.scrollTop<5&&t.scrollTop>=0&&this.getChatList()},inputFocus:function(t){var e=this;this.isAndroid()&&this.inputFirst&&(this.inputShow=!0),this.emjoyShow=!1,this.chatMore=!1,this.$nextTick((function(){e.setPageScrollTo()}))},closePopWindow:function(){this.inputFirst=0,this.emjoyShow=!1,this.chatMore=!1,this.inputShow=!1,t.hideKeyboard()},openEmjoy:function(){var e=this;this.isAndroid()&&(this.inputFirst=1,this.inputShow=!1),t.hideKeyboard(),this.chatMore=!1,this.emjoyShow=!this.emjoyShow,this.$nextTick((function(){e.setPageScrollTo()}))},addEmjoy:function(t,e){this.formData.content=this.formData.content+e},addImg:function(){var t=this;this.$util.upload(1,{path:"chatimg"},(function(e){t.formData.image=e[0],t.sendMsg("image")}),"/servicer/api/chat/")}},beforeDestroy:function(){clearInterval(this.timeoutObj),this.timeoutObj=null,this.$api.sendRequest({url:"/servicer/api/chat/bye",data:{servicer_id:this.servicer_id,site_id:this.siteId},success:function(e){t.closeSocket()}})}};e.default=u}).call(this,i("543d")["default"])},bbcc:function(t,e,i){"use strict";var s=i("a36b"),n=i.n(s);n.a},eabe:function(t,e,i){"use strict";i.r(e);var s=i("afb0"),n=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);e["default"]=n.a}},[["1c0e","common/runtime","common/vendor"]]]);