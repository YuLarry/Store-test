(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index~pages_tool-goods-brand"],{"07e6":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},methods:{onClick:function(){this.$emit("click")}}};t.default=r},"2e39":function(e,t,i){var r=i("aae2");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("56872b7d",r,!0,{sourceMap:!1,shadowMode:!1})},3143:function(e,t,i){"use strict";var r=i("4ea4");i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("8028")),a={name:"UniGridItem",components:{uniBadge:n.default},props:{marker:{type:String,default:""},hor:{type:Number,default:0},ver:{type:Number,default:0},type:{type:String,default:""},text:{type:String,default:""},size:{type:String,default:"normal"},inverted:{type:Boolean,default:!1},src:{type:String,default:""},imgWidth:{type:Number,default:30}},inject:["grid"],data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,index:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.index=this.grid.index++},mounted:function(){var e=this;this.grid._getSize((function(t){e.width=t}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};t.default=a},"59c1":function(e,t,i){"use strict";i.r(t);var r=i("07e6"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},"66a8":function(e,t,i){"use strict";var r=i("e01f"),n=i.n(r);n.a},"75cf":function(e,t,i){"use strict";i.r(t);var r=i("9901"),n=i("943f");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("7c63");var o,d=i("f0c5"),u=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"58a1e39b",null,!1,r["a"],o);t["default"]=u.exports},"787e":function(e,t,i){"use strict";i.r(t);var r=i("9cc0"),n=i("e098");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("66a8");var o,d=i("f0c5"),u=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"142c8196",null,!1,r["a"],o);t["default"]=u.exports},7910:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,".uni-grid[data-v-142c8196]{display:flex;flex-wrap:wrap;box-sizing:border-box;border-left:%?2?% #e5e5e5 solid}",""]),e.exports=t},"7c63":function(e,t,i){"use strict";var r=i("8d05"),n=i.n(r);n.a},8028:function(e,t,i){"use strict";i.r(t);var r=i("a641"),n=i("59c1");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("b1cb");var o,d=i("f0c5"),u=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"07dd6329",null,!1,r["a"],o);t["default"]=u.exports},"8d05":function(e,t,i){var r=i("bac0");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("ba4ab33a",r,!0,{sourceMap:!1,shadowMode:!1})},"943f":function(e,t,i){"use strict";i.r(t);var r=i("3143"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},9901:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var r={uniBadge:i("8028").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.width?i("v-uni-view",{staticClass:"uni-grid-item",style:{width:e.width}},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{border:e.showBorder,"uni-grid-item__box-square":e.square,"border-top":e.showBorder&&e.index<e.column,"uni-highlight":e.highlight},style:{"border-color":e.borderColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},["dot"===e.marker?i("v-uni-view",{staticClass:"uni-grid-item__box-dot",style:{left:2*e.top+"rpx",top:2*e.left+"rpx"}}):e._e(),"badge"===e.marker?i("v-uni-view",{staticClass:"uni-grid-item__box-badge",style:{left:2*e.top+"rpx",top:2*e.left+"rpx"}},[i("uni-badge",{attrs:{text:e.text,type:e.type,size:e.size,inverted:e.inverted}})],1):e._e(),"image"===e.marker?i("v-uni-view",{staticClass:"uni-grid-item__box-image",style:{left:2*e.top+"rpx",top:2*e.left+"rpx"}},[i("v-uni-image",{staticClass:"box-image",style:{width:2*e.imgWidth+"rpx"},attrs:{src:e.src,mode:"widthFix"}})],1):e._e(),i("v-uni-view",{staticClass:"uni-grid-item__box-item"},[e._t("default")],2)],1)],1):e._e()},a=[]},"9cc0":function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"uni-grid",class:{border:e.showBorder},style:{"border-left":e.showBorder?"1px "+e.borderColor+" solid":"none"},attrs:{id:e.elId}},[e._t("default")],2)],1)},a=[]},a641:function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.text?i("v-uni-text",{staticClass:"uni-badge",class:e.inverted?"uni-badge-"+e.type+" uni-badge--"+e.size+" uni-badge-inverted":"uni-badge-"+e.type+" uni-badge--"+e.size,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick()}}},[e._v(e._s(e.text))]):e._e()},a=[]},aae2:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,".uni-badge[data-v-07dd6329]{font-family:Helvetica Neue,Helvetica,sans-serif;box-sizing:border-box;font-size:%?24?%;line-height:1;display:inline-block;padding:%?6?% %?12?%;color:#333;border-radius:%?200?%;background-color:#e5e5e5}.uni-badge.uni-badge-inverted[data-v-07dd6329]{padding:0 %?10?% 0 0;color:#999;background-color:initial}.uni-badge-primary[data-v-07dd6329]{color:#fff;background-color:#007aff}.uni-badge-primary.uni-badge-inverted[data-v-07dd6329]{color:#007aff;background-color:initial}.uni-badge-success[data-v-07dd6329]{color:#fff;background-color:#4cd964}.uni-badge-success.uni-badge-inverted[data-v-07dd6329]{color:#4cd964;background-color:initial}.uni-badge-warning[data-v-07dd6329]{color:#fff;background-color:#f0ad4e}.uni-badge-warning.uni-badge-inverted[data-v-07dd6329]{color:#f0ad4e;background-color:initial}.uni-badge-error[data-v-07dd6329]{color:#fff;background-color:#dd524d}.uni-badge-error.uni-badge-inverted[data-v-07dd6329]{color:#dd524d;background-color:initial}.uni-badge--small[data-v-07dd6329]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}",""]),e.exports=t},b1cb:function(e,t,i){"use strict";var r=i("2e39"),n=i.n(r);n.a},bac0:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,".uni-grid-item[data-v-58a1e39b]{box-sizing:border-box}.uni-grid-item__box[data-v-58a1e39b]{position:relative;width:100%}.uni-grid-item__box-item[data-v-58a1e39b]{display:flex;justify-content:center;flex-direction:column;align-items:center;width:100%;height:100%;font-size:%?32?%;color:#666;padding:%?20?% 0;box-sizing:border-box}.uni-grid-item__box-item .image[data-v-58a1e39b]{width:%?50?%;height:%?50?%}.uni-grid-item__box-item .text[data-v-58a1e39b]{font-size:%?26?%;margin-top:%?10?%}.uni-grid-item__box.uni-grid-item__box-square[data-v-58a1e39b]{height:0;padding-top:100%}.uni-grid-item__box.uni-grid-item__box-square .uni-grid-item__box-item[data-v-58a1e39b]{position:absolute;top:0}.uni-grid-item__box.border[data-v-58a1e39b]{position:relative;box-sizing:border-box;border-bottom:%?2?% #e5e5e5 solid;border-right:%?2?% #e5e5e5 solid}.uni-grid-item__box.border-top[data-v-58a1e39b]{border-top:%?2?% #e5e5e5 solid}.uni-grid-item__box.uni-highlight[data-v-58a1e39b]:active{background-color:#eee}.uni-grid-item__box-badge[data-v-58a1e39b],\r\n.uni-grid-item__box-dot[data-v-58a1e39b],\r\n.uni-grid-item__box-image[data-v-58a1e39b]{position:absolute;top:0;right:0;left:0;bottom:0;margin:auto;z-index:10}.uni-grid-item__box-dot[data-v-58a1e39b]{width:%?20?%;height:%?20?%;background:#ff5a5f;border-radius:50%}.uni-grid-item__box-badge[data-v-58a1e39b]{display:flex;justify-content:center;align-items:center;width:0;height:0}.uni-grid-item__box-image[data-v-58a1e39b]{display:flex;justify-content:center;align-items:center;width:%?100?%;height:%?100?%;overflow:hidden}.uni-grid-item__box-image .box-image[data-v-58a1e39b]{width:%?90?%}",""]),e.exports=t},e01f:function(e,t,i){var r=i("7910");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("7490d17d",r,!0,{sourceMap:!1,shadowMode:!1})},e098:function(e,t,i){"use strict";i.r(t);var r=i("f751"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},f751:function(e,t,i){"use strict";i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},hor:{type:Number,default:0},ver:{type:Number,default:0},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{index:0,elId:e}},created:function(){this.index=0,this.childrens=[],this.pIndex=this.pIndex?this.pIndex++:0},methods:{change:function(e){this.$emit("change",e)},_getSize:function(e){var t=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){if(i[0]){var r=2*(parseInt(i[0].width/t.column)-1)+"rpx";"function"===typeof e&&e(r)}else setTimeout(t._getSize(e))}))}}};t.default=r}}]);