(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_tool/member/address_edit"],{"3c6a":function(e,t,a){"use strict";var i=a("8552"),s=a.n(i);s.a},"5a6c":function(e,t,a){"use strict";a.r(t);var i=a("e7c3a"),s=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=s.a},8552:function(e,t,a){},"87b3":function(e,t,a){"use strict";a.r(t);var i=a("bb3a"),s=a("5a6c");for(var o in s)"default"!==o&&function(e){a.d(t,e,(function(){return s[e]}))}(o);a("3c6a");var r,d=a("f0c5"),n=Object(d["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=n.exports},bb3a:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var i={pickRegions:function(){return Promise.all([a.e("common/vendor"),a.e("components/pick-regions/pick-regions")]).then(a.bind(null,"6dc3"))},loadingCover:function(){return a.e("components/loading-cover/loading-cover").then(a.bind(null,"790a"))}},s=function(){var e=this,t=e.$createElement,a=(e._self._c,e.$lang("consignee")),i=e.$lang("consigneePlaceholder"),s=e.$lang("mobile"),o=e.$lang("mobilePlaceholder"),r=e.$lang("telephone"),d=e.$lang("telephonePlaceholder"),n=2==e.localType?e.$lang("receivingCity"):null,l=2!=e.localType?e.$lang("receivingCity"):null,c=e.$lang("address"),u=e.$lang("addressPlaceholder"),f=e.$lang("save");e.$mp.data=Object.assign({},{$root:{m0:a,m1:i,m2:s,m3:o,m4:r,m5:d,m6:n,m7:l,m8:c,m9:u,m10:f}})},o=[]},e0ba:function(e,t,a){"use strict";(function(e){a("34b0");i(a("66fd"));var t=i(a("87b3"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a("543d")["createPage"])},e7c3a:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(a("50ee"));s(a("f27e"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/pick-regions/pick-regions")]).then(function(){return resolve(a("6dc3"))}.bind(null,a)).catch(a.oe)},r={components:{pickRegions:o},data:function(){return{formData:{id:0,name:"",mobile:"",telephone:"",province_id:"",city_id:"",district_id:"",community_id:"",address:"",full_address:"",latitude:0,longitude:0,is_default:1},address:"",addressValue:"",back:"",redirect:"redirectTo",flag:!1,defaultRegions:[],localType:1}},onLoad:function(t){if(t.back&&(this.back=t.back),t.redirect&&(this.redirect=t.redirect),t.type&&(this.localType=t.type),t.id&&!t.name)this.formData.id=t.id,this.getAddressDetail();else if(t.name){e.getStorageSync("addressInfo")&&(this.formData=e.getStorageSync("addressInfo")),this.formData.address=t.name,this.localType=2,this.getAddress(t.latng);var a=this.getQueryVariable("latng").split(",");this.formData.latitude=a[0],this.formData.longitude=a[1]}else this.$refs.loadingCover&&this.$refs.loadingCover.hide()},onBackPress:function(){e.setStorageSync("addressInfo","")},onShow:function(){this.formData.id?e.setNavigationBarTitle({title:"编辑收货地址"}):e.setNavigationBarTitle({title:"新增收货地址"})},onReady:function(){this.$refs.loadingCover.hide()},onHide:function(){this.flag=!1},methods:{getAddressDetail:function(){var e=this;this.$api.sendRequest({url:"/api/memberaddress/info",data:{id:this.formData.id},success:function(t){var a=t.data;null!=a&&(e.formData.name=a.name,e.formData.mobile=a.mobile,e.formData.telephone=a.telephone,e.formData.address=a.address,e.formData.full_address=a.full_address,e.formData.latitude=a.latitude,e.formData.longitude=a.longitude,e.formData.is_default=a.is_default,e.localType=a.type,e.defaultRegions=[a.province_id,a.city_id,a.district_id]),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getAddress:function(e){var t=this;this.$api.sendRequest({url:"/api/memberaddress/tranAddressInfo",data:{latlng:e},success:function(e){0==e.code?(t.formData.full_address="",t.formData.full_address+=void 0!=e.data.province?e.data.province:"",t.formData.full_address+=void 0!=e.data.city?"-"+e.data.city:"",t.formData.full_address+=void 0!=e.data.district?"-"+e.data.district:"",t.addressValue="",t.addressValue+=void 0!=e.data.province_id?e.data.province_id:"",t.addressValue+=void 0!=e.data.city_id?"-"+e.data.city_id:"",t.addressValue+=void 0!=e.data.district_id?"-"+e.data.district_id:""):t.showToast({title:"数据有误"})}})},handleGetRegions:function(e){this.formData.full_address="",this.formData.full_address+=void 0!=e[0]?e[0].label:"",this.formData.full_address+=void 0!=e[1]?"-"+e[1].label:"",this.formData.full_address+=void 0!=e[2]?"-"+e[2].label:"",this.addressValue="",this.addressValue+=void 0!=e[0]?e[0].value:"",this.addressValue+=void 0!=e[1]?"-"+e[1].value:"",this.addressValue+=void 0!=e[2]?"-"+e[2].value:""},selectAddress:function(){var t=this;e.chooseLocation({success:function(e){t.formData.latitude=e.latitude,t.formData.longitude=e.longitude,t.formData.address=e.name,t.getAddress(e.latitude+","+e.longitude)},fail:function(t){e.getSetting({success:function(t){var a=t.authSetting;a["scope.userLocation"]||e.showModal({title:"是否授权当前位置",content:"需要获取您的地理位置，请确认授权，否则地图功能将无法使用",success:function(a){a.confirm?e.openSetting({success:function(a){!0===a.authSetting["scope.userLocation"]&&(this.$util.showToast({title:"授权成功"}),setTimeout((function(){var a=this;e.chooseLocation({success:function(e){a.formData.latitude=t.latitude,a.formData.longitude=t.longitude,a.formData.address=t.name,a.getAddress(t.latitude+","+t.longitude)}})}),1e3))}}):this.$util.showToast({title:"授权失败"})}})}})}})},getQueryVariable:function(e){for(var t=window.location.search.substring(1),a=t.split("&"),i=0;i<a.length;i++){var s=a[i].split("=");if(s[0]==e)return s[1]}return!1},vertify:function(){this.formData.name=this.formData.name.trim(),this.formData.mobile=this.formData.mobile.trim(),this.formData.address=this.formData.address.trim();var e=[{name:"name",checkType:"required",errorMsg:"请输入姓名"},{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"},{name:"full_address",checkType:"required",errorMsg:"请选择省市区县"},{name:"address",checkType:"required",errorMsg:"详细地址不能为空"}],t=i.default.check(this.formData,e);return!!t||(this.$util.showToast({title:i.default.error}),this.flag=!1,!1)},saveAddress:function(){var t=this;if(!this.flag&&(this.flag=!0,this.vertify())){var a=this.addressValue.split("-"),i={},s="";i={name:this.formData.name,mobile:this.formData.mobile,telephone:this.formData.telephone,province_id:a[0],city_id:a[1],district_id:a[2]?a[2]:"",community_id:0,address:this.formData.address,full_address:this.formData.full_address,latitude:this.formData.latitude,longitude:this.formData.longitude,is_default:this.formData.is_default,type:this.localType},s="add",this.formData.id&&(s="edit",i.id=this.formData.id,""!=this.back&&(i.is_default=1)),this.$api.sendRequest({url:"/api/memberaddress/"+s,data:i,success:function(a){t.flag=!1,0==a.code?(""!=t.back?t.$util.redirectTo(t.back,{},"redirectTo"):(t.$util.showToast({title:a.message}),e.navigateBack({delta:1})),e.removeStorageSync("addressInfo")):t.$util.showToast({title:a.message})},fail:function(e){t.flag=!1}})}}}};t.default=r}).call(this,a("543d")["default"])}},[["e0ba","common/runtime","common/vendor"]]]);