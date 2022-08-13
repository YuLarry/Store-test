(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/pick-regions/pick-regions"],{942:function(e,r,t){"use strict";t.r(r);var n=t(943),i=t(945);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);var u,l=t(14),s=Object(l["default"])(i["default"],n["render"],n["staticRenderFns"],!1,null,null,null,!1,n["components"],u);s.options.__file="components/pick-regions/pick-regions.vue",r["default"]=s.exports},943:function(e,r,t){"use strict";t.r(r);var n=t(944);t.d(r,"render",(function(){return n["render"]})),t.d(r,"staticRenderFns",(function(){return n["staticRenderFns"]})),t.d(r,"recyclableRender",(function(){return n["recyclableRender"]})),t.d(r,"components",(function(){return n["components"]}))},944:function(e,r,t){"use strict";var n;t.r(r),t.d(r,"render",(function(){return i})),t.d(r,"staticRenderFns",(function(){return u})),t.d(r,"recyclableRender",(function(){return a})),t.d(r,"components",(function(){return n}));var i=function(){var e=this,r=e.$createElement;e._self._c},a=!1,u=[];i._withStripped=!0},945:function(e,r,t){"use strict";t.r(r);var n=t(946),i=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);r["default"]=i.a},946:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(t(20));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,r){return o(e)||c(e,r)||l(e,r)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,r){if(e){if("string"===typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function c(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,i=!1,a=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done);n=!0)if(t.push(u.value),r&&t.length===r)break}catch(s){i=!0,a=s}finally{try{n||null==l["return"]||l["return"]()}finally{if(i)throw a}}return t}}function o(e){if(Array.isArray(e))return e}function d(e,r,t,n,i,a,u){try{var l=e[a](u),s=l.value}catch(c){return void t(c)}l.done?r(s):Promise.resolve(s).then(n,i)}function f(e){return function(){var r=this,t=arguments;return new Promise((function(n,i){var a=e.apply(r,t);function u(e){d(a,n,i,u,l,"next",e)}function l(e){d(a,n,i,u,l,"throw",e)}u(void 0)}))}}var v={props:{defaultRegions:{type:Array},selectArr:{type:String}},data:function(){return{pickerValueArray:[],cityArr:[],districtArr:[],multiIndex:[0,0,0],isInitMultiArray:!1,isLoadDefaultAreas:!1}},watch:{defaultRegions:{handler:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];3===e.length&&e.join("")!==r.join("")&&this.handleDefaultRegions()},immediate:!0}},computed:{multiArray:function(){if(this.isLoadDefaultAreas){var e=this.pickedArr.map((function(e){return e.map((function(e){return e.label}))}));return e}},pickedArr:function(){return this.isInitMultiArray?"2"==this.selectArr?[this.pickerValueArray[0],this.pickerValueArray[1]]:[this.pickerValueArray[0],this.pickerValueArray[1],this.pickerValueArray[2]]:"2"==this.selectArr?[this.pickerValueArray[0],this.cityArr]:[this.pickerValueArray[0],this.cityArr,this.districtArr]}},created:function(){this.getDefaultAreas(0,{level:0})},methods:{handleColumnChange:function(e){var r=this;return f(n.default.mark((function t(){var i,a;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r.isInitMultiArray=!1,i=e.detail.column,a=e.detail.value,r.multiIndex[i]=a,t.t0=i,t.next=0===t.t0?7:1===t.t0?14:2===t.t0?18:19;break;case 7:return t.next=9,r.getAreasAsync(r.pickerValueArray[0][r.multiIndex[i]].value);case 9:return r.cityArr=t.sent,t.next=12,r.getAreasAsync(r.cityArr[0].value);case 12:return r.districtArr=t.sent,t.abrupt("break",19);case 14:return t.next=16,r.getAreasAsync(r.cityArr[r.multiIndex[i]].value);case 16:return r.districtArr=t.sent,t.abrupt("break",19);case 18:return t.abrupt("break",19);case 19:case"end":return t.stop()}}),t)})))()},handleValueChange:function(e){var r=a(e.detail.value,3),t=r[0],n=r[1],i=r[2],u=a(this.pickedArr,3),l=u[0],s=u[1],c=u[2],o="";o="2"==this.selectArr?[l[t],s[n]]:[l[t],s[n],c[i]],this.$emit("getRegions",o)},handleDefaultRegions:function(){var e=this,r=setInterval((function(){if(e.isLoadDefaultAreas){e.isInitMultiArray=!1;for(var t=0;t<e.defaultRegions.length;t++)for(var n=function(r){e.defaultRegions[t]==e.pickerValueArray[t][r].value&&1==e.pickerValueArray[t][r].level&&(e.$set(e.multiIndex,t,r),e.getAreas(e.pickerValueArray[t][r].value,(function(t){e.cityArr=t;for(var n=function(t){if(e.defaultRegions[1]==e.cityArr[t].value)return e.$set(e.multiIndex,1,t),e.getAreas(e.cityArr[t].value,(function(n){e.districtArr=n;for(var i=0;i<e.districtArr.length;i++)if(e.defaultRegions[2]==e.districtArr[i].value){e.$set(e.multiIndex,2,i),e.handleValueChange({detail:{value:[r,t,i]}});break}})),"break"},i=0;i<e.cityArr.length;i++){var a=n(i);if("break"===a)break}})))},i=0;i<e.pickerValueArray[t].length;i++)n(i);e.isLoadDefaultAreas&&clearInterval(r)}}),100)},getDefaultAreas:function(e,r){var t=this;this.$api.sendRequest({url:"/api/address/lists",data:{pid:e},success:function(e){if(0==e.code){var n=[],i=void 0;e.data.forEach((function(e,t){void 0!=r&&(0==r.level&&void 0!=r.province_id?i=r.province_id:1==r.level&&void 0!=r.city_id?i=r.city_id:2==r.level&&void 0!=r.district_id&&(i=r.district_id)),void 0==i&&0==t&&(i=e.id),n.push({value:e.id,label:e.name,level:e.level})})),t.pickerValueArray[r.level]=n,r.level+1<3?(r.level++,t.getDefaultAreas(i,r)):(t.isInitMultiArray=!0,t.isLoadDefaultAreas=!0)}}})},getAreasAsync:function(e){var r=this;return f(n.default.mark((function t(){var i,a;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.$api.sendRequest({url:"/api/address/lists",data:{pid:e},async:!1});case 2:if(i=t.sent,0!=i.code){t.next=7;break}return a=[],i.data.forEach((function(e,r){a.push({value:e.id,label:e.name,level:e.level})})),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))()},getAreas:function(e,r){this.$api.sendRequest({url:"/api/address/lists",data:{pid:e},success:function(e){if(0==e.code){var t=[];e.data.forEach((function(e,r){t.push({value:e.id,label:e.name,level:e.level})})),r&&r(t)}}})}}};r.default=v}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/pick-regions/pick-regions.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/pick-regions/pick-regions-create-component',
    {
        'components/pick-regions/pick-regions-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(942))
        })
    },
    [['components/pick-regions/pick-regions-create-component']]
]);