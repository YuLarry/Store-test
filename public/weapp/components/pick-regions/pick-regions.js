(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/pick-regions/pick-regions"],{"259d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return o(e)||s(e,t)||l(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done);n=!0)if(r.push(u.value),t&&r.length===t)break}catch(c){a=!0,i=c}finally{try{n||null==l["return"]||l["return"]()}finally{if(a)throw i}}return r}}function o(e){if(Array.isArray(e))return e}function d(e,t,r,n,a,i,u){try{var l=e[i](u),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(n,a)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function u(e){d(i,n,a,u,l,"next",e)}function l(e){d(i,n,a,u,l,"throw",e)}u(void 0)}))}}var v={props:{defaultRegions:{type:Array}},data:function(){return{pickerValueArray:[],cityArr:[],districtArr:[],multiIndex:[0,0,0],isInitMultiArray:!1,isLoadDefaultAreas:!1}},watch:{defaultRegions:{handler:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];3===e.length&&e.join("")!==t.join("")&&this.handleDefaultRegions()},immediate:!0}},computed:{multiArray:function(){if(this.isLoadDefaultAreas){var e=this.pickedArr.map((function(e){return e.map((function(e){return e.label}))}));return e}},pickedArr:function(){return this.isInitMultiArray?[this.pickerValueArray[0],this.pickerValueArray[1],this.pickerValueArray[2]]:[this.pickerValueArray[0],this.cityArr,this.districtArr]}},created:function(){this.getDefaultAreas(0,{level:0})},methods:{handleColumnChange:function(e){var t=this;return f(n.default.mark((function r(){var a,i;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.isInitMultiArray=!1,a=e.detail.column,i=e.detail.value,t.multiIndex[a]=i,r.t0=a,r.next=0===r.t0?7:1===r.t0?14:2===r.t0?18:19;break;case 7:return r.next=9,t.getAreasAsync(t.pickerValueArray[0][t.multiIndex[a]].value);case 9:return t.cityArr=r.sent,r.next=12,t.getAreasAsync(t.cityArr[0].value);case 12:return t.districtArr=r.sent,r.abrupt("break",19);case 14:return r.next=16,t.getAreasAsync(t.cityArr[t.multiIndex[a]].value);case 16:return t.districtArr=r.sent,r.abrupt("break",19);case 18:return r.abrupt("break",19);case 19:case"end":return r.stop()}}),r)})))()},handleValueChange:function(e){var t=i(e.detail.value,3),r=t[0],n=t[1],a=t[2],u=i(this.pickedArr,3),l=u[0],c=u[1],s=u[2],o=[l[r],c[n],s[a]];this.$emit("getRegions",o)},handleDefaultRegions:function(){var e=this,t=setInterval((function(){if(e.isLoadDefaultAreas){e.isInitMultiArray=!1;for(var r=0;r<e.defaultRegions.length;r++)for(var n=function(t){e.defaultRegions[r]==e.pickerValueArray[r][t].value&&1==e.pickerValueArray[r][t].level&&(e.$set(e.multiIndex,r,t),e.getAreas(e.pickerValueArray[r][t].value,(function(r){e.cityArr=r;for(var n=function(r){if(e.defaultRegions[1]==e.cityArr[r].value)return e.$set(e.multiIndex,1,r),e.getAreas(e.cityArr[r].value,(function(n){e.districtArr=n;for(var a=0;a<e.districtArr.length;a++)if(e.defaultRegions[2]==e.districtArr[a].value){e.$set(e.multiIndex,2,a),e.handleValueChange({detail:{value:[t,r,a]}});break}})),"break"},a=0;a<e.cityArr.length;a++){var i=n(a);if("break"===i)break}})))},a=0;a<e.pickerValueArray[r].length;a++)n(a);e.isLoadDefaultAreas&&clearInterval(t)}}),100)},getDefaultAreas:function(e,t){var r=this;this.$api.sendRequest({url:"/api/address/lists",data:{pid:e},success:function(e){if(0==e.code){var n=[],a=void 0;e.data.forEach((function(e,r){void 0!=t&&(0==t.level&&void 0!=t.province_id?a=t.province_id:1==t.level&&void 0!=t.city_id?a=t.city_id:2==t.level&&void 0!=t.district_id&&(a=t.district_id)),void 0==a&&0==r&&(a=e.id),n.push({value:e.id,label:e.name,level:e.level})})),r.pickerValueArray[t.level]=n,t.level+1<3?(t.level++,r.getDefaultAreas(a,t)):(r.isInitMultiArray=!0,r.isLoadDefaultAreas=!0)}}})},getAreasAsync:function(e){var t=this;return f(n.default.mark((function r(){var a,i;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$api.sendRequest({url:"/api/address/lists",data:{pid:e},async:!1});case 2:if(a=r.sent,0!=a.code){r.next=7;break}return i=[],a.data.forEach((function(e,t){i.push({value:e.id,label:e.name,level:e.level})})),r.abrupt("return",i);case 7:case"end":return r.stop()}}),r)})))()},getAreas:function(e,t){this.$api.sendRequest({url:"/api/address/lists",data:{pid:e},success:function(e){if(0==e.code){var r=[];e.data.forEach((function(e,t){r.push({value:e.id,label:e.name,level:e.level})})),t&&t(r)}}})}}};t.default=v},"3c1b":function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=[]},a9bb:function(e,t,r){"use strict";r.r(t);var n=r("259d"),a=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},bf78:function(e,t,r){"use strict";r.r(t);var n=r("3c1b"),a=r("a9bb");for(var i in a)"default"!==i&&function(e){r.d(t,e,(function(){return a[e]}))}(i);var u,l=r("f0c5"),c=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/pick-regions/pick-regions-create-component',
    {
        'components/pick-regions/pick-regions-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bf78"))
        })
    },
    [['components/pick-regions/pick-regions-create-component']]
]);
