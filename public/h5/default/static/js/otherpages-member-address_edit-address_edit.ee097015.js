(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-member-address_edit-address_edit"],{"0489":function(e,t,a){"use strict";var i=a("4ea4");a("4160"),a("d81d"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("3835"));a("96cf");var s=i(a("1da1")),n={props:{defaultRegions:{type:Array},selectArr:{type:String}},data:function(){return{pickerValueArray:[],cityArr:[],districtArr:[],multiIndex:[0,0,0],isInitMultiArray:!1,isLoadDefaultAreas:!1}},watch:{defaultRegions:{handler:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];3===e.length&&e.join("")!==t.join("")&&this.handleDefaultRegions()},immediate:!0}},computed:{multiArray:function(){if(this.isLoadDefaultAreas){var e=this.pickedArr.map((function(e){return e.map((function(e){return e.label}))}));return e}},pickedArr:function(){return this.isInitMultiArray?"2"==this.selectArr?[this.pickerValueArray[0],this.pickerValueArray[1]]:[this.pickerValueArray[0],this.pickerValueArray[1],this.pickerValueArray[2]]:"2"==this.selectArr?[this.pickerValueArray[0],this.cityArr]:[this.pickerValueArray[0],this.cityArr,this.districtArr]}},created:function(){this.getDefaultAreas(0,{level:0})},methods:{handleColumnChange:function(e){var t=this;return(0,s.default)(regeneratorRuntime.mark((function a(){var i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.isInitMultiArray=!1,i=e.detail.column,r=e.detail.value,t.multiIndex[i]=r,a.t0=i,a.next=0===a.t0?7:1===a.t0?14:2===a.t0?18:19;break;case 7:return a.next=9,t.getAreasAsync(t.pickerValueArray[0][t.multiIndex[i]].value);case 9:return t.cityArr=a.sent,a.next=12,t.getAreasAsync(t.cityArr[0].value);case 12:return t.districtArr=a.sent,a.abrupt("break",19);case 14:return a.next=16,t.getAreasAsync(t.cityArr[t.multiIndex[i]].value);case 16:return t.districtArr=a.sent,a.abrupt("break",19);case 18:return a.abrupt("break",19);case 19:case"end":return a.stop()}}),a)})))()},handleValueChange:function(e){var t=(0,r.default)(e.detail.value,3),a=t[0],i=t[1],s=t[2],n=(0,r.default)(this.pickedArr,3),d=n[0],l=n[1],o=n[2],u="";u="2"==this.selectArr?[d[a],l[i]]:[d[a],l[i],o[s]],this.$emit("getRegions",u)},handleDefaultRegions:function(){var e=this,t=setInterval((function(){if(e.isLoadDefaultAreas){e.isInitMultiArray=!1;for(var a=0;a<e.defaultRegions.length;a++)for(var i=function(t){e.defaultRegions[a]==e.pickerValueArray[a][t].value&&1==e.pickerValueArray[a][t].level&&(e.$set(e.multiIndex,a,t),e.getAreas(e.pickerValueArray[a][t].value,(function(a){e.cityArr=a;for(var i=function(a){if(e.defaultRegions[1]==e.cityArr[a].value)return e.$set(e.multiIndex,1,a),e.getAreas(e.cityArr[a].value,(function(i){e.districtArr=i;for(var r=0;r<e.districtArr.length;r++)if(e.defaultRegions[2]==e.districtArr[r].value){e.$set(e.multiIndex,2,r),e.handleValueChange({detail:{value:[t,a,r]}});break}})),"break"},r=0;r<e.cityArr.length;r++){var s=i(r);if("break"===s)break}})))},r=0;r<e.pickerValueArray[a].length;r++)i(r);e.isLoadDefaultAreas&&clearInterval(t)}}),100)},getDefaultAreas:function(e,t){var a=this;this.$api.sendRequest({url:"/api/address/lists",data:{pid:e},success:function(e){if(0==e.code){var i=[],r=void 0;e.data.forEach((function(e,a){void 0!=t&&(0==t.level&&void 0!=t.province_id?r=t.province_id:1==t.level&&void 0!=t.city_id?r=t.city_id:2==t.level&&void 0!=t.district_id&&(r=t.district_id)),void 0==r&&0==a&&(r=e.id),i.push({value:e.id,label:e.name,level:e.level})})),a.pickerValueArray[t.level]=i,t.level+1<3?(t.level++,a.getDefaultAreas(r,t)):(a.isInitMultiArray=!0,a.isLoadDefaultAreas=!0)}}})},getAreasAsync:function(e){var t=this;return(0,s.default)(regeneratorRuntime.mark((function a(){var i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$api.sendRequest({url:"/api/address/lists",data:{pid:e},async:!1});case 2:if(i=a.sent,0!=i.code){a.next=7;break}return r=[],i.data.forEach((function(e,t){r.push({value:e.id,label:e.name,level:e.level})})),a.abrupt("return",r);case 7:case"end":return a.stop()}}),a)})))()},getAreas:function(e,t){this.$api.sendRequest({url:"/api/address/lists",data:{pid:e},success:function(e){if(0==e.code){var a=[];e.data.forEach((function(e,t){a.push({value:e.id,label:e.name,level:e.level})})),t&&t(a)}}})}}};t.default=n},"0fac":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"pick-regions"},[a("v-uni-picker",{attrs:{mode:"multiSelector",value:e.multiIndex,range:e.multiArray},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleValueChange.apply(void 0,arguments)},columnchange:function(t){arguments[0]=t=e.$handleEvent(t),e.handleColumnChange.apply(void 0,arguments)}}},[e._t("default")],2)],1)},s=[]},"3fdd":function(e,t,a){var i=a("650c");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("3d3a5475",i,!0,{sourceMap:!1,shadowMode:!1})},"404f":function(e,t,a){"use strict";var i=a("4ea4");a("c975"),a("26e9"),a("ac1f"),a("841c"),a("1276"),a("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("9968")),s=i(a("96de")),n=i(a("245b")),d=i(a("a3b0")),l={components:{pickRegions:r.default},data:function(){return{formData:{id:0,name:"",mobile:"",telephone:"",province_id:"",city_id:"",district_id:"",community_id:"",address:"",full_address:"",latitude:0,longitude:0,is_default:1},address:"",addressValue:"",back:"",redirect:"redirectTo",flag:!1,defaultRegions:[],localType:1}},onLoad:function(e){if(e.back&&(this.back=e.back),e.redirect&&(this.redirect=e.redirect),e.type&&(this.localType=e.type),e.id&&!e.name)this.formData.id=e.id,this.getAddressDetail();else if(e.name){uni.getStorageSync("addressInfo")&&(this.formData=uni.getStorageSync("addressInfo")),this.formData.address=e.name,this.localType=2,this.getAddress(e.latng);var t=this.getQueryVariable("latng").split(",");this.formData.latitude=t[0],this.formData.longitude=t[1]}else this.$refs.loadingCover&&this.$refs.loadingCover.hide()},onBackPress:function(){uni.setStorageSync("addressInfo","")},onShow:function(){this.$langConfig.refresh(),this.formData.id?uni.setNavigationBarTitle({title:"编辑收货地址"}):uni.setNavigationBarTitle({title:"新增收货地址"})},onReady:function(){this.$refs.loadingCover.hide()},onHide:function(){this.flag=!1},mixins:[n.default],methods:{getAddressDetail:function(){var e=this;this.$api.sendRequest({url:"/api/memberaddress/info",data:{id:this.formData.id},success:function(t){var a=t.data;null!=a&&(e.formData.name=a.name,e.formData.mobile=a.mobile,e.formData.telephone=a.telephone,e.formData.address=a.address,e.formData.full_address=a.full_address,e.formData.latitude=a.latitude,e.formData.longitude=a.longitude,e.formData.is_default=a.is_default,e.localType=a.type,e.defaultRegions=[a.province_id,a.city_id,a.district_id]),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},getAddress:function(e){var t=this;this.$api.sendRequest({url:"/api/memberaddress/tranAddressInfo",data:{latlng:e},success:function(e){0==e.code?(t.formData.full_address="",t.formData.full_address+=void 0!=e.data.province?e.data.province:"",t.formData.full_address+=void 0!=e.data.city?"-"+e.data.city:"",t.formData.full_address+=void 0!=e.data.district?"-"+e.data.district:"",t.addressValue="",t.addressValue+=void 0!=e.data.province_id?e.data.province_id:"",t.addressValue+=void 0!=e.data.city_id?"-"+e.data.city_id:"",t.addressValue+=void 0!=e.data.district_id?"-"+e.data.district_id:""):t.showToast({title:"数据有误"})}})},handleGetRegions:function(e){this.formData.full_address="",this.formData.full_address+=void 0!=e[0]?e[0].label:"",this.formData.full_address+=void 0!=e[1]?"-"+e[1].label:"",this.formData.full_address+=void 0!=e[2]?"-"+e[2].label:"",this.addressValue="",this.addressValue+=void 0!=e[0]?e[0].value:"",this.addressValue+=void 0!=e[1]?"-"+e[1].value:"",this.addressValue+=void 0!=e[2]?"-"+e[2].value:""},selectAddress:function(){var e=this.formData;uni.setStorageSync("addressInfo",e);var t=d.default.h5Domain+"/otherpages/member/address_edit/address_edit?type="+this.localType;this.formData.id&&(t+="&id="+this.formData.id),this.back&&(t+="&back="+this.back),window.location.href="https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl="+encodeURIComponent(t)+"&key="+d.default.mpKey+"&referer=myapp"},getQueryVariable:function(e){for(var t=window.location.search.substring(1),a=t.split("&"),i=0;i<a.length;i++){var r=a[i].split("=");if(r[0]==e)return r[1]}return!1},vertify:function(){this.formData.name=this.formData.name.trim(),this.formData.mobile=this.formData.mobile.trim(),this.formData.address=this.formData.address.trim();var e=[{name:"name",checkType:"required",errorMsg:"请输入姓名"},{name:"mobile",checkType:"required",errorMsg:"请输入手机号"},{name:"mobile",checkType:"phoneno",errorMsg:"请输入正确的手机号"},{name:"full_address",checkType:"required",errorMsg:"请选择省市区县"},{name:"address",checkType:"required",errorMsg:"详细地址不能为空"}],t=s.default.check(this.formData,e);return!!t||(this.$util.showToast({title:s.default.error}),this.flag=!1,!1)},saveAddress:function(){var e=this;if(!this.flag&&(this.flag=!0,this.vertify())){var t=this.addressValue.split("-"),a={},i="";a={name:this.formData.name,mobile:this.formData.mobile,telephone:this.formData.telephone,province_id:t[0],city_id:t[1],district_id:t[2]?t[2]:"",community_id:0,address:this.formData.address,full_address:this.formData.full_address,latitude:this.formData.latitude,longitude:this.formData.longitude,is_default:this.formData.is_default,type:this.localType},i="add",this.formData.id&&(i="edit",a.id=this.formData.id,""!=this.back&&(a.is_default=1)),this.$api.sendRequest({url:"/api/memberaddress/"+i,data:a,success:function(t){if(e.flag=!1,0==t.code){if(""!=e.back){for(var a=!0,i=getCurrentPages().reverse(),r=0;r<i.length;r++)if(-1!=e.back.indexOf(i[r].route)){a=!1,uni.navigateBack({delta:r});break}a&&e.$util.redirectTo(e.back,{},"redirectTo")}else e.$util.showToast({title:t.message}),uni.navigateBack({delta:1});uni.removeStorageSync("addressInfo")}},fail:function(t){e.flag=!1}})}}}};t.default=l},"4ea0":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var i={pickRegions:a("9968").default,loadingCover:a("b1ae").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"address-edit-content",attrs:{"data-theme":e.themeStyle}},[a("v-uni-view",{staticClass:"edit-wrap"},[a("v-uni-view",{staticClass:"tip"},[e._v("地址信息")]),a("v-uni-view",{staticClass:"edit-item"},[a("v-uni-text",{staticClass:"tit"},[e._v(e._s(e.$lang("consignee"))),a("v-uni-text",[e._v("*")])],1),a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text","placeholder-class":"placeholder-class",placeholder:e.$lang("consigneePlaceholder"),maxlength:"30",name:"name"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("v-uni-view",{staticClass:"edit-item"},[a("v-uni-text",{staticClass:"tit"},[e._v(e._s(e.$lang("mobile"))),a("v-uni-text",[e._v("*")])],1),a("v-uni-input",{staticClass:"uni-input",attrs:{type:"number","placeholder-class":"placeholder-class",placeholder:e.$lang("mobilePlaceholder"),maxlength:"11"},model:{value:e.formData.mobile,callback:function(t){e.$set(e.formData,"mobile",t)},expression:"formData.mobile"}})],1),a("v-uni-view",{staticClass:"edit-item"},[a("v-uni-text",{staticClass:"tit"},[e._v(e._s(e.$lang("telephone")))]),a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text","placeholder-class":"placeholder-class",placeholder:e.$lang("telephonePlaceholder"),maxlength:"20"},model:{value:e.formData.telephone,callback:function(t){e.$set(e.formData,"telephone",t)},expression:"formData.telephone"}})],1),2==e.localType?[a("v-uni-view",{staticClass:"edit-item"},[a("v-uni-text",{staticClass:"tit"},[e._v(e._s(e.$lang("receivingCity"))),a("v-uni-text",[e._v("*")])],1),a("v-uni-view",{staticClass:"text_inp",class:{empty:!e.formData.full_address,"color-tip":!e.formData.full_address},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectAddress.apply(void 0,arguments)}}},[e._v(e._s(e.formData.full_address?e.formData.full_address:"请选择省市区县"))]),a("v-uni-text",{staticClass:"padding-left iconfont iconlocation",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectAddress.apply(void 0,arguments)}}})],1)]:[a("v-uni-view",{staticClass:"edit-item"},[a("v-uni-text",{staticClass:"tit"},[e._v(e._s(e.$lang("receivingCity"))),a("v-uni-text",[e._v("*")])],1),a("pick-regions",{attrs:{"default-regions":e.defaultRegions},on:{getRegions:function(t){arguments[0]=t=e.$handleEvent(t),e.handleGetRegions.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"select-address ",class:{empty:!e.formData.full_address,"color-tip":!e.formData.full_address}},[e._v(e._s(e.formData.full_address?e.formData.full_address:"请选择省市区县"))])],1)],1)],a("v-uni-view",{staticClass:"edit-item"},[a("v-uni-text",{staticClass:"tit"},[e._v(e._s(e.$lang("address"))),a("v-uni-text",[e._v("*")])],1),a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text","placeholder-class":"placeholder-class",placeholder:e.$lang("addressPlaceholder"),maxlength:"50"},model:{value:e.formData.address,callback:function(t){e.$set(e.formData,"address",t)},expression:"formData.address"}})],1)],2),a("v-uni-view",{staticClass:"btn"},[a("v-uni-button",{staticClass:"add",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveAddress.apply(void 0,arguments)}}},[e._v(e._s(e.$lang("save")))])],1),a("loading-cover",{ref:"loadingCover"})],1)},s=[]},"650c":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */[data-v-e4303a96] pick-regions,\r\n.pick-regions[data-v-e4303a96]{flex:1}.edit-wrap[data-v-e4303a96]{background:#fff;overflow:hidden}.edit-wrap .tip[data-v-e4303a96]{padding:%?20?% %?30?% %?10?%;background-color:#f8f8f8;color:#909399}.edit-item[data-v-e4303a96]{display:flex;align-items:center;margin:0 %?30?%;min-height:%?100?%;background-color:#fff}.edit-item .text_inp[data-v-e4303a96]{margin-left:%?20?%;flex:1}.edit-item .tit[data-v-e4303a96]{width:%?148?%}.edit-item .tit uni-text[data-v-e4303a96]{margin-left:%?10?%;color:#ff4544}.edit-item .tit.margin_tit[data-v-e4303a96]{align-self:flex-start;margin-top:%?24?%}.edit-item .iconlocation[data-v-e4303a96]{color:#606266;align-self:flex-start;margin-top:%?20?%}.edit-item .select-address[data-v-e4303a96]{display:block;margin-left:%?10?%}.edit-item .select-address.empty[data-v-e4303a96]{color:grey}.edit-item uni-textarea[data-v-e4303a96],\r\n.edit-item uni-input[data-v-e4303a96]{flex:1;font-size:%?28?%;margin-left:%?20?%;padding:0}.edit-item uni-textarea[data-v-e4303a96]{margin-top:%?6?%;height:%?100?%;padding-bottom:%?20?%;padding-top:%?20?%;line-height:%?50?%}.edit-wrap > .edit-item + .edit-item[data-v-e4303a96]{border-top:%?2?% solid #ebedf0}.add[data-v-e4303a96]{margin-top:%?60?%;height:%?80?%;line-height:%?80?%!important;border-radius:%?80?%;font-weight:500;width:calc(100% - %?60?%);margin-left:%?30?%}.btn[data-v-e4303a96]{position:fixed;width:100%;bottom:%?30?%;height:auto;padding-bottom:constant(safe-area-inset-bottom);\r\n  /*兼容 IOS<11.2*/padding-bottom:env(safe-area-inset-bottom)\r\n  /*兼容 IOS>11.2*/}',""]),e.exports=t},"98c0":function(e,t,a){"use strict";a.r(t);var i=a("404f"),r=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=r.a},9968:function(e,t,a){"use strict";a.r(t);var i=a("0fac"),r=a("ad53");for(var s in r)"default"!==s&&function(e){a.d(t,e,(function(){return r[e]}))}(s);var n,d=a("f0c5"),l=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],n);t["default"]=l.exports},ad53:function(e,t,a){"use strict";a.r(t);var i=a("0489"),r=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=r.a},af75:function(e,t,a){"use strict";a.r(t);var i=a("4ea0"),r=a("98c0");for(var s in r)"default"!==s&&function(e){a.d(t,e,(function(){return r[e]}))}(s);a("e52e");var n,d=a("f0c5"),l=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,"e4303a96",null,!1,i["a"],n);t["default"]=l.exports},e52e:function(e,t,a){"use strict";var i=a("3fdd"),r=a.n(i);r.a}}]);