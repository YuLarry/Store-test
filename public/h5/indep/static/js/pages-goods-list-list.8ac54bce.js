(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-list-list"],{"0899":function(i,t,e){"use strict";var a;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return a}));var o=function(){var i=this,t=i.$createElement,e=i._self._c||t;return i.text?e("v-uni-view",{staticClass:"uni-tag",class:[!0===i.disabled||"true"===i.disabled?"uni-tag--disabled":"",!0===i.inverted||"true"===i.inverted?"uni-tag--inverted":"",!0===i.circle||"true"===i.circle?"uni-tag--circle":"",!0===i.mark||"true"===i.mark?"uni-tag--mark":"","uni-tag--"+i.size,"uni-tag--"+i.type],on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.onClick()}}},[i._v(i._s(i.text))]):i._e()},n=[]},"0a9e":function(i,t,e){"use strict";var a;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return a}));var o=function(){var i=this,t=i.$createElement,e=i._self._c||t;return i.visibleSync?e("v-uni-view",{staticClass:"uni-drawer",class:{"uni-drawer--visible":i.showDrawer,"uni-drawer--right":i.rightMode},on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=i.$handleEvent(t),i.moveHandle.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-drawer__mask",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.close.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-drawer__content",class:{"safe-area":i.isIphoneX}},[i._t("default")],2)],1):i._e()},n=[]},"12fe":function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,".uni-drawer[data-v-03f986a9]{display:block;position:fixed;top:0;left:0;right:0;bottom:0;overflow:hidden;visibility:hidden;z-index:999;height:100%}.uni-drawer.uni-drawer--right .uni-drawer__content[data-v-03f986a9]{left:auto;right:0;-webkit-transform:translatex(100%);transform:translatex(100%)}.uni-drawer.uni-drawer--visible[data-v-03f986a9]{visibility:visible}.uni-drawer.uni-drawer--visible .uni-drawer__content[data-v-03f986a9]{-webkit-transform:translatex(0);transform:translatex(0)}.uni-drawer.uni-drawer--visible .uni-drawer__mask[data-v-03f986a9]{display:block;opacity:1}.uni-drawer__mask[data-v-03f986a9]{display:block;opacity:0;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4);transition:opacity .3s}.uni-drawer__content[data-v-03f986a9]{display:block;position:absolute;top:0;left:0;width:61.8%;height:100%;background:#fff;transition:all .3s ease-out;-webkit-transform:translatex(-100%);transform:translatex(-100%)}.safe-area[data-v-03f986a9]{padding-bottom:%?68?%;padding-top:%?44?%;box-sizing:border-box}",""]),i.exports=t},"1b33":function(i,t,e){"use strict";e.r(t);var a=e("277b"),o=e.n(a);for(var n in a)"default"!==n&&function(i){e.d(t,i,(function(){return a[i]}))}(n);t["default"]=o.a},"1b68":function(i,t,e){"use strict";e("99af"),e("4e82"),e("a9e3"),e("acd8"),e("ac1f"),e("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{listStyle:"",loadingType:"loading",orderType:"",priceOrder:"desc",categoryList:[],goodsList:[],order:"",sort:"desc",showScreen:!1,keyword:"",categoryId:0,minPrice:"",maxPrice:"",isFreeShipping:!1,isIphoneX:!1,coupon:0,emptyShow:!1,isList:!0}},onLoad:function(i){this.categoryId=i.category_id||0,this.keyword=i.keyword||"",this.loadCategoryList(this.categoryId),this.isIphoneX=this.$util.uniappIsIPhoneX(),this.coupon=i.coupon||0,this.goods_id_arr=i.goods_id_arr||0},onShow:function(){this.$langConfig.refresh()},methods:{getGoodsList:function(i){var t=this;this.$api.sendRequest({url:"/api/goodssku/page",data:{page:i.num,page_size:i.size,keyword:this.keyword,category_id:this.categoryId,min_price:this.minPrice,max_price:this.maxPrice,is_free_shipping:this.isFreeShipping?1:0,order:this.order,sort:this.sort,coupon:this.coupon,goods_id_arr:this.goods_id_arr},success:function(e){var a=[],o=e.message;0==e.code&&e.data?(0==e.data.page_count&&(t.emptyShow=!0),a=e.data.list):t.$util.showToast({title:o}),i.endSuccess(a.length),1==i.num&&(t.goodsList=[]),t.goodsList=t.goodsList.concat(a),t.$refs.loadingCover&&t.$refs.loadingCover.hide()},fail:function(e){i.endErr(),t.$refs.loadingCover&&t.$refs.loadingCover.hide()}})},changeListStyle:function(){this.isList=!this.isList},loadCategoryList:function(i,t){var e=this;this.$api.sendRequest({url:"/api/goodscategory/tree",data:{},success:function(i){null!=i.data&&(e.categoryList=i.data)}})},sortTabClick:function(i){if("sale_num"==i)this.order="sale_num",this.sort="desc";else if("discount_price"==i)this.order="discount_price",this.sort="desc";else{if("screen"==i)return void(this.showScreen=!0);this.order="",this.sort=""}this.orderType===i&&"discount_price"!==i||(this.orderType=i,"discount_price"===i?(this.priceOrder="asc"===this.priceOrder?"desc":"asc",this.sort=this.priceOrder):this.priceOrder="",this.emptyShow=!1,this.goodsList=[],this.$refs.mescroll.refresh())},toDetail:function(i){this.$util.redirectTo("/pages/goods/detail/detail",{sku_id:i.sku_id})},search:function(){this.emptyShow=!1,this.goodsList=[],this.$refs.mescroll.refresh()},selectedCategory:function(i){this.categoryId=i},screenData:function(){if(""!=this.minPrice||""!=this.maxPrice){if(!Number(this.minPrice)&&this.minPrice)return void this.$util.showToast({title:"请输入最低价"});if(!Number(this.maxPrice)&&this.maxPrice)return void this.$util.showToast({title:"最输入最高价"});if(Number(this.minPrice)<0||Number(this.maxPrice)<0)return void this.$util.showToast({title:"筛选价格不能小于0"});if(""!=this.minPrice&&Number(this.minPrice)>Number(this.maxPrice)&&this.maxPrice)return void this.$util.showToast({title:"最低价不能大于最高价"});if(""!=this.maxPrice&&Number(this.maxPrice)<Number(this.minPrice))return void this.$util.showToast({title:"最高价不能小于最低价"})}this.emptyShow=!1,this.goodsList=[],this.$refs.mescroll.refresh(),this.showScreen=!1},resetData:function(){this.categoryId=0,this.minPrice="",this.maxPrice="",this.isFreeShipping=!1},goodsImg:function(i){var t=i.split(",");return t[0]?this.$util.img(t[0],{size:"mid"}):this.$util.getDefaultImage().default_goods_img},imgError:function(i){this.goodsList[i].goods_image=this.$util.getDefaultImage().default_goods_img},showPrice:function(i){var t=i.discount_price;return i.member_price&&parseFloat(i.member_price)<parseFloat(t)&&(t=i.member_price),t},goodsTag:function(i){return i.label_name||""}}};t.default=a},"277b":function(i,t,e){"use strict";var a=e("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e("eb73")),n=a(e("990f")),r=a(e("1b68")),s=a(e("245b")),d={components:{uniDrawer:o.default,uniTag:n.default},data:function(){return{}},mixins:[s.default,r.default]};t.default=d},"27ce":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniDrawer",props:{visible:{type:Boolean,default:!1},mode:{type:String,default:""},mask:{type:Boolean,default:!0}},data:function(){return{visibleSync:!1,showDrawer:!1,rightMode:!1,closeTimer:null,watchTimer:null,isIphoneX:!1}},watch:{visible:function(i){var t=this;clearTimeout(this.watchTimer),setTimeout((function(){t.showDrawer=i}),100),this.visibleSync&&clearTimeout(this.closeTimer),i?this.visibleSync=i:this.watchTimer=setTimeout((function(){t.visibleSync=i}),300)}},created:function(){var i=this;this.isIphoneX=this.$util.uniappIsIPhoneX(),this.visibleSync=this.visible,setTimeout((function(){i.showDrawer=i.visible}),100),this.rightMode="right"===this.mode},methods:{close:function(){var i=this;this.showDrawer=!1,this.closeTimer=setTimeout((function(){i.visibleSync=!1,i.$emit("close")}),200)},moveHandle:function(){}}};t.default=a},3261:function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.head-wrap[data-v-7a420412]{background:#fff;position:fixed;width:100%;left:0;z-index:1}.head-wrap .search-wrap[data-v-7a420412]{flex:0.5;padding:%?30?% %?30?% 0;font-size:%?24?%;display:flex;align-items:center}.head-wrap .search-wrap .input-wrap[data-v-7a420412]{flex:1;display:flex;justify-content:space-between;align-items:center;background:#f8f8f8;height:%?70?%;padding-left:%?10?%;border-radius:%?70?%}.head-wrap .search-wrap .input-wrap uni-input[data-v-7a420412]{width:90%;background:#f8f8f8;font-size:%?24?%;height:%?50?%;padding:%?10?% %?25?% %?10?% %?40?%;line-height:%?50?%;border-radius:%?40?%}.head-wrap .search-wrap .input-wrap uni-text[data-v-7a420412]{font-size:%?32?%;color:#909399;width:%?80?%;text-align:center;margin-right:%?20?%}.head-wrap .search-wrap .category-wrap[data-v-7a420412],\r\n.head-wrap .search-wrap .list-style[data-v-7a420412]{display:flex;justify-content:center;align-items:center}.head-wrap .search-wrap .category-wrap .iconfont[data-v-7a420412],\r\n.head-wrap .search-wrap .list-style .iconfont[data-v-7a420412]{font-size:%?50?%;color:#909399}.head-wrap .search-wrap .category-wrap uni-text[data-v-7a420412],\r\n.head-wrap .search-wrap .list-style uni-text[data-v-7a420412]{display:block;margin-top:%?60?%}.head-wrap .sort-wrap[data-v-7a420412]{display:flex;padding:%?10?% %?20?% %?10?% 0}.head-wrap .sort-wrap > uni-view[data-v-7a420412]{flex:1;text-align:center;font-size:%?28?%;height:%?60?%;line-height:%?60?%}.head-wrap .sort-wrap .comprehensive-wrap[data-v-7a420412]{display:flex;justify-content:center;align-items:center}.head-wrap .sort-wrap .comprehensive-wrap .iconfont-wrap[data-v-7a420412]{display:inline-block;margin-left:%?10?%;width:%?40?%}.head-wrap .sort-wrap .comprehensive-wrap .iconfont-wrap .iconfont[data-v-7a420412]{font-size:%?32?%;line-height:1;margin-bottom:%?5?%}.head-wrap .sort-wrap .price-wrap[data-v-7a420412]{display:flex;justify-content:center;align-items:center}.head-wrap .sort-wrap .price-wrap .iconfont-wrap[data-v-7a420412]{display:flex;justify-content:center;align-items:center;flex-direction:column;width:%?40?%}.head-wrap .sort-wrap .price-wrap .iconfont-wrap .iconfont[data-v-7a420412]{float:left;font-size:%?24?%;line-height:1;height:%?20?%;color:#909399}.head-wrap .sort-wrap .screen-wrap[data-v-7a420412]{display:flex;justify-content:center;align-items:center}.head-wrap .sort-wrap .screen-wrap .iconfont-wrap[data-v-7a420412]{display:inline-block;margin-left:%?10?%;width:%?40?%}.head-wrap .sort-wrap .screen-wrap .iconfont-wrap .iconfont[data-v-7a420412]{font-size:%?32?%;line-height:1}.category-list-wrap[data-v-7a420412]{height:100%}.category-list-wrap .class-box[data-v-7a420412]{display:flex;flex-wrap:wrap;padding:0 %?20?%}.category-list-wrap .class-box uni-view[data-v-7a420412]{width:calc((100% - %?60?%) / 3);font-size:%?22?%;margin-right:%?20?%;height:%?60?%;line-height:%?60?%;text-align:center;margin-bottom:%?12?%;flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background:#f5f5f5;border-radius:%?5?%}.category-list-wrap .class-box uni-view[data-v-7a420412]:nth-of-type(3n){margin-right:0}.category-list-wrap .first[data-v-7a420412]{font-size:%?24?%;display:block;padding:%?20?%}.category-list-wrap .second[data-v-7a420412]{border-bottom:%?2?% solid #eee;padding:%?20?%;display:block;font-size:%?24?%}.category-list-wrap .third[data-v-7a420412]{padding:0 %?20?% %?20?%;overflow:hidden;font-size:%?24?%}.category-list-wrap .third > uni-view[data-v-7a420412]{display:inline-block;margin-right:%?20?%;margin-top:%?20?%}.category-list-wrap .third .uni-tag[data-v-7a420412]{padding:0 %?20?%}.screen-wrap .title[data-v-7a420412]{font-size:%?24?%;padding:%?20?%;background:#f6f4f5}.screen-wrap uni-scroll-view[data-v-7a420412]{height:85%}.screen-wrap uni-scroll-view .item-wrap[data-v-7a420412]{border-bottom:1px solid #f0f0f0}.screen-wrap uni-scroll-view .item-wrap .label[data-v-7a420412]{font-size:%?24?%;padding:%?20?%}.screen-wrap uni-scroll-view .item-wrap .label uni-view[data-v-7a420412]{display:inline-block;font-size:%?60?%;height:%?40?%;vertical-align:middle;line-height:%?40?%}.screen-wrap uni-scroll-view .item-wrap .list[data-v-7a420412]{margin:%?20?% %?30?%;overflow:hidden}.screen-wrap uni-scroll-view .item-wrap .list > uni-view[data-v-7a420412]{display:inline-block;margin-right:%?25?%;margin-bottom:%?25?%}.screen-wrap uni-scroll-view .item-wrap .list .uni-tag[data-v-7a420412]{padding:0 %?20?%;font-size:%?22?%;background:#f5f5f5;height:%?52?%;line-height:%?52?%;border:0}.screen-wrap uni-scroll-view .item-wrap .price-wrap[data-v-7a420412]{display:flex;justify-content:center;align-items:center;padding:%?20?%}.screen-wrap uni-scroll-view .item-wrap .price-wrap uni-input[data-v-7a420412]{flex:1;background:#f5f5f5;height:%?52?%;width:%?182?%;line-height:%?50?%;font-size:%?22?%;border-radius:%?50?%;text-align:center}.screen-wrap uni-scroll-view .item-wrap .price-wrap uni-input[data-v-7a420412]:first-child{margin-right:%?10?%}.screen-wrap uni-scroll-view .item-wrap .price-wrap uni-input[data-v-7a420412]:last-child{margin-left:%?10?%}.screen-wrap .footer[data-v-7a420412]{height:%?90?%;display:flex;justify-content:center;align-items:flex-start;display:flex;bottom:0;width:100%}.screen-wrap .footer .footer-box[data-v-7a420412]{border-top-right-radius:0;border-bottom-right-radius:0;margin:0;width:40%}.screen-wrap .footer .footer-box1[data-v-7a420412]{border-top-left-radius:0;border-bottom-left-radius:0;margin:0;width:40%}.safe-area[data-v-7a420412]{bottom:%?68?%!important}.empty[data-v-7a420412]{margin-top:%?100?%}.buy-num[data-v-7a420412]{font-size:%?20?%}.icon[data-v-7a420412]{width:%?34?%;height:%?30?%}.list-style-new[data-v-7a420412]{display:flex;align-items:center}.list-style-new .line[data-v-7a420412]{width:%?4?%;height:%?28?%;background-color:#e3e3e3;margin-right:%?60?%}.h-line[data-v-7a420412]{width:%?37?%;height:%?2?%;background-color:#909399}.lineheight-clear[data-v-7a420412]{line-height:1!important}.goods-list.single-column .goods-item[data-v-7a420412]{padding:%?26?%;background:#fff;margin:%?20?% %?30?%;border-radius:%?10?%;display:flex;position:relative}.goods-list.single-column .goods-item .goods-img[data-v-7a420412]{width:%?200?%;height:%?200?%;overflow:hidden;border-radius:%?10?%;margin-right:%?20?%}.goods-list.single-column .goods-item .goods-img uni-image[data-v-7a420412]{width:100%;height:100%}.goods-list.single-column .goods-item .goods-tag[data-v-7a420412]{color:#fff;line-height:1;padding:%?8?% %?12?%;position:absolute;border-top-left-radius:%?10?%;border-bottom-right-radius:%?10?%;top:%?26?%;left:%?26?%;font-size:%?22?%}.goods-list.single-column .goods-item .goods-tag-img[data-v-7a420412]{position:absolute;border-top-left-radius:%?10?%;width:%?80?%;height:%?80?%;top:%?26?%;left:%?26?%;z-index:5;overflow:hidden}.goods-list.single-column .goods-item .goods-tag-img uni-image[data-v-7a420412]{width:100%;height:100%}.goods-list.single-column .goods-item .info-wrap[data-v-7a420412]{flex:1;display:flex;flex-direction:column}.goods-list.single-column .goods-item .name-wrap[data-v-7a420412]{flex:1}.goods-list.single-column .goods-item .goods-name[data-v-7a420412]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:%?68?%}.goods-list.single-column .goods-item .introduction[data-v-7a420412]{line-height:1;margin-top:%?10?%}.goods-list.single-column .goods-item .discount-price[data-v-7a420412]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%}.goods-list.single-column .goods-item .discount-price .unit[data-v-7a420412]{margin-right:%?6?%}.goods-list.single-column .goods-item .pro-info[data-v-7a420412]{display:flex;margin-top:%?16?%}.goods-list.single-column .goods-item .pro-info .delete-price[data-v-7a420412]{text-decoration:line-through;flex:1}.goods-list.single-column .goods-item .pro-info .delete-price .unit[data-v-7a420412]{margin-right:%?6?%}.goods-list.single-column .goods-item .pro-info > uni-view[data-v-7a420412]{line-height:1}.goods-list.single-column .goods-item .pro-info > uni-view[data-v-7a420412]:nth-child(2){text-align:right}.goods-list.single-column .goods-item .member-price-tag[data-v-7a420412]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.single-column .goods-item .member-price-tag uni-image[data-v-7a420412]{width:100%}.goods-list.double-column[data-v-7a420412]{display:flex;flex-wrap:wrap;margin:0 %?30?%;padding-top:%?20?%}.goods-list.double-column .goods-item[data-v-7a420412]{flex:1;position:relative;background-color:#fff;flex-basis:48%;max-width:calc((100% - %?30?%) / 2);margin:0 %?30?% %?20?% 0;border-radius:%?10?%}.goods-list.double-column .goods-item[data-v-7a420412]:nth-child(2n){margin-right:0}.goods-list.double-column .goods-item .goods-img[data-v-7a420412]{position:relative;overflow:hidden;padding-top:100%;border-top-left-radius:%?10?%;border-top-right-radius:%?10?%}.goods-list.double-column .goods-item .goods-img uni-image[data-v-7a420412]{width:100%;position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.goods-list.double-column .goods-item .goods-tag[data-v-7a420412]{color:#fff;line-height:1;padding:%?8?% %?16?%;position:absolute;border-bottom-right-radius:%?10?%;top:0;left:0;font-size:%?22?%}.goods-list.double-column .goods-item .goods-tag-img[data-v-7a420412]{position:absolute;border-top-left-radius:%?10?%;width:%?80?%;height:%?80?%;top:0;left:0;z-index:5;overflow:hidden}.goods-list.double-column .goods-item .goods-tag-img uni-image[data-v-7a420412]{width:100%;height:100%}.goods-list.double-column .goods-item .info-wrap[data-v-7a420412]{padding:0 %?26?% %?26?% %?26?%}.goods-list.double-column .goods-item .goods-name[data-v-7a420412]{font-size:%?28?%;line-height:1.3;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-top:%?20?%;height:%?68?%}.goods-list.double-column .goods-item .discount-price[data-v-7a420412]{display:inline-block;font-weight:700;line-height:1;margin-top:%?16?%}.goods-list.double-column .goods-item .discount-price .unit[data-v-7a420412]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info[data-v-7a420412]{display:flex;margin-top:%?16?%}.goods-list.double-column .goods-item .pro-info .delete-price[data-v-7a420412]{text-decoration:line-through;flex:1}.goods-list.double-column .goods-item .pro-info .delete-price .unit[data-v-7a420412]{margin-right:%?6?%}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-7a420412]{line-height:1}.goods-list.double-column .goods-item .pro-info > uni-view[data-v-7a420412]:nth-child(2){text-align:right}.goods-list.double-column .goods-item .member-price-tag[data-v-7a420412]{display:inline-block;width:%?60?%;line-height:1;margin-left:%?6?%}.goods-list.double-column .goods-item .member-price-tag uni-image[data-v-7a420412]{width:100%}',""]),i.exports=t},"3fff":function(i,t,e){"use strict";var a=e("a068"),o=e.n(a);o.a},"4f5c":function(i,t,e){var a=e("3261");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var o=e("4f06").default;o("081eaff8",a,!0,{sourceMap:!1,shadowMode:!1})},"5e23":function(i,t,e){"use strict";var a=e("c786"),o=e.n(a);o.a},6456:function(i,t,e){"use strict";var a=e("4f5c"),o=e.n(a);o.a},"7f20":function(i,t,e){"use strict";var a=e("f058"),o=e.n(a);o.a},"8f1b":function(i,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return a}));var a={nsEmpty:e("0e02").default,uniDrawer:e("eb73").default,uniTag:e("990f").default,loadingCover:e("b1ae").default},o=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"content",attrs:{"data-theme":i.themeStyle}},[e("v-uni-view",{staticClass:"head-wrap"},[e("v-uni-view",{staticClass:"search-wrap uni-flex uni-row"},[e("v-uni-view",{staticClass:"flex-item input-wrap"},[e("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"50",placeholder:"请输入您要搜索的商品"},on:{confirm:function(t){arguments[0]=t=i.$handleEvent(t),i.search()}},model:{value:i.keyword,callback:function(t){i.keyword=t},expression:"keyword"}}),e("v-uni-text",{staticClass:"iconfont iconsousuo1",on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.search()}}})],1)],1),e("v-uni-view",{staticClass:"sort-wrap"},[e("v-uni-view",{staticClass:"comprehensive-wrap",class:{"color-base-text":""===i.orderType},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.sortTabClick("")}}},[e("v-uni-text",{class:{"color-base-text":""===i.orderType}},[i._v("综合")])],1),e("v-uni-view",{class:{"color-base-text":"sale_num"===i.orderType},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.sortTabClick("sale_num")}}},[i._v("销量")]),e("v-uni-view",{staticClass:"price-wrap",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.sortTabClick("discount_price")}}},[e("v-uni-text",{class:{"color-base-text":"discount_price"===i.orderType}},[i._v("价格")]),e("v-uni-view",{staticClass:"iconfont-wrap"},[e("v-uni-view",{staticClass:"iconfont iconshangsanjiao-copy",class:{"color-base-text":"asc"===i.priceOrder&&"discount_price"===i.orderType}}),e("v-uni-view",{staticClass:"iconfont iconsanjiao",class:{"color-base-text":"desc"===i.priceOrder&&"discount_price"===i.orderType}})],1)],1),e("v-uni-view",{staticClass:"screen-wrap",class:{"color-base-text":"screen"===i.orderType}},[e("v-uni-view",{staticClass:"iconfont font-size-base",class:{iconapps:i.isList,iconlist1:!i.isList},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.changeListStyle()}}}),e("v-uni-text",{staticStyle:{padding:"0 14rpx",color:"#E3E3E3"}},[i._v("|")]),e("v-uni-text",{on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.sortTabClick("screen")}}},[i._v("筛选")]),e("v-uni-view",{staticClass:"iconfont-wrap",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.sortTabClick("screen")}}},[e("v-uni-view",{staticClass:"iconfont iconshaixuan color-tip"})],1)],1)],1)],1),e("mescroll-uni",{ref:"mescroll",attrs:{top:"180"},on:{getData:function(t){arguments[0]=t=i.$handleEvent(t),i.getGoodsList.apply(void 0,arguments)}}},[e("template",{attrs:{slot:"list"},slot:"list"},[e("v-uni-view",{staticClass:"goods-list",class:i.isList?"single-column":"double-column"},i._l(i.goodsList,(function(t,a){return e("v-uni-view",{key:a,staticClass:"goods-item margin-bottom",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.toDetail(t)}}},[e("v-uni-view",{staticClass:"goods-img"},[e("v-uni-image",{attrs:{src:i.goodsImg(t.goods_image),mode:"widthFix"},on:{error:function(t){arguments[0]=t=i.$handleEvent(t),i.imgError(a)}}}),""!=i.goodsTag(t)?e("v-uni-view",{staticClass:"color-base-bg goods-tag"},[i._v(i._s(i.goodsTag(t)))]):i._e()],1),e("v-uni-view",{staticClass:"info-wrap"},[e("v-uni-view",{staticClass:"name-wrap"},[e("v-uni-view",{staticClass:"goods-name"},[i._v(i._s(t.goods_name))])],1),e("v-uni-view",{staticClass:"pro-info"},[e("v-uni-view",{staticClass:"delete-price font-size-activity-tag color-tip"},[[e("v-uni-text",{staticClass:"unit"},[i._v(i._s(i.$lang("common.currencySymbol")))]),i._v(i._s(t.market_price>0?t.market_price:t.price))]],2),e("v-uni-view",{staticClass:"sale font-size-activity-tag color-tip"},[i._v("已售"+i._s(t.sale_num)+i._s(t.unit?t.unit:"件"))])],1),e("v-uni-view",{staticClass:"lineheight-clear"},[e("v-uni-view",{staticClass:"discount-price"},[e("v-uni-text",{staticClass:"unit color-base-text font-size-tag"},[i._v(i._s(i.$lang("common.currencySymbol")))]),e("v-uni-text",{staticClass:"price color-base-text font-size-toolbar"},[i._v(i._s(i.showPrice(t)))])],1),t.member_price&&t.member_price==i.showPrice(t)?e("v-uni-view",{staticClass:"member-price-tag"},[e("v-uni-image",{attrs:{src:i.$util.img("upload/uniapp/index/VIP.png"),mode:"widthFix"}})],1):1==t.promotion_type?e("v-uni-view",{staticClass:"member-price-tag"},[e("v-uni-image",{attrs:{src:i.$util.img("upload/uniapp/index/discount.png"),mode:"widthFix"}})],1):i._e()],1)],1)],1)})),1),0==i.goodsList.length&&i.emptyShow?e("v-uni-view",[e("ns-empty",{attrs:{text:"暂无商品"}})],1):i._e()],1)],2),e("uni-drawer",{staticClass:"screen-wrap",attrs:{visible:i.showScreen,mode:"right"},on:{close:function(t){arguments[0]=t=i.$handleEvent(t),i.showScreen=!1}}},[e("v-uni-view",{staticClass:"title color-tip"},[i._v("筛选")]),e("v-uni-scroll-view",{attrs:{"scroll-y":!0}},[e("v-uni-view",{staticClass:"item-wrap"},[e("v-uni-view",{staticClass:"label"},[e("v-uni-text",[i._v("是否包邮")])],1),e("v-uni-view",{staticClass:"list"},[e("uni-tag",{attrs:{inverted:!0,text:"包邮",type:i.isFreeShipping?"primary":"default"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.isFreeShipping=!i.isFreeShipping}}})],1)],1),e("v-uni-view",{staticClass:"item-wrap"},[e("v-uni-view",{staticClass:"label"},[e("v-uni-text",[i._v("价格区间(元)")])],1),e("v-uni-view",{staticClass:"price-wrap"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"digit",placeholder:"最低价"},model:{value:i.minPrice,callback:function(t){i.minPrice=t},expression:"minPrice"}}),e("v-uni-view",{staticClass:"h-line"}),e("v-uni-input",{staticClass:"uni-input",attrs:{type:"digit",placeholder:"最高价"},model:{value:i.maxPrice,callback:function(t){i.maxPrice=t},expression:"maxPrice"}})],1)],1),e("v-uni-view",{staticClass:"category-list-wrap"},[e("v-uni-text",{staticClass:"first"},[i._v("全部分类")]),e("v-uni-view",{staticClass:"class-box"},[e("v-uni-view",{staticClass:"list-wrap",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.selectedCategory("")}}},[e("v-uni-text",{class:{selected:!i.categoryId,"color-base-text":!i.categoryId}},[i._v("全部")])],1),i._l(i.categoryList,(function(t,a){return e("v-uni-view",{key:a,staticClass:"list-wrap",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.selectedCategory(t.category_id)}}},[e("v-uni-text",{class:{selected:t.category_id==i.categoryId,"color-base-text":t.category_id==i.categoryId}},[i._v(i._s(t.category_name))])],1)}))],2)],1)],1),e("v-uni-view",{staticClass:"footer",class:{"safe-area":i.isIphoneX}},[e("v-uni-button",{staticClass:"footer-box",attrs:{type:"default"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.resetData.apply(void 0,arguments)}}},[i._v("重置")]),e("v-uni-button",{staticClass:"footer-box1",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.screenData.apply(void 0,arguments)}}},[i._v("确定")])],1)],1),e("loading-cover",{ref:"loadingCover"})],1)},n=[]},"97e0":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[String,Boolean],defalut:!1},inverted:{type:[String,Boolean],defalut:!1},circle:{type:[String,Boolean],defalut:!1},mark:{type:[String,Boolean],defalut:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};t.default=a},"990f":function(i,t,e){"use strict";e.r(t);var a=e("0899"),o=e("a98d");for(var n in o)"default"!==n&&function(i){e.d(t,i,(function(){return o[i]}))}(n);e("3fff");var r,s=e("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"0a0fb015",null,!1,a["a"],r);t["default"]=d.exports},"99ef":function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,"[data-v-7a420412] .uni-tag--primary.uni-tag--inverted{background-color:#f5f5f5!important}",""]),i.exports=t},"9ea2":function(i,t,e){"use strict";e.r(t);var a=e("8f1b"),o=e("1b33");for(var n in o)"default"!==n&&function(i){e.d(t,i,(function(){return o[i]}))}(n);e("6456"),e("7f20");var r,s=e("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"7a420412",null,!1,a["a"],r);t["default"]=d.exports},a068:function(i,t,e){var a=e("c116");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var o=e("4f06").default;o("035c2b84",a,!0,{sourceMap:!1,shadowMode:!1})},a98d:function(i,t,e){"use strict";e.r(t);var a=e("97e0"),o=e.n(a);for(var n in a)"default"!==n&&function(i){e.d(t,i,(function(){return a[i]}))}(n);t["default"]=o.a},c116:function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,".uni-tag[data-v-0a0fb015]{box-sizing:border-box;padding:0 %?32?%;height:%?60?%;line-height:calc(%?60?% - 2px);font-size:%?28?%;display:inline-flex;align-items:center;color:#333;border-radius:%?6?%;background-color:#f8f8f8;border:1px solid #f8f8f8}.uni-tag--circle[data-v-0a0fb015]{border-radius:%?30?%}.uni-tag--mark[data-v-0a0fb015]{border-radius:0 %?30?% %?30?% 0}.uni-tag--disabled[data-v-0a0fb015]{opacity:.5}.uni-tag--small[data-v-0a0fb015]{height:%?40?%;padding:0 %?16?%;line-height:calc(%?40?% - 2px);font-size:%?24?%}.uni-tag--primary[data-v-0a0fb015]{color:#fff;background-color:#007aff;border:1px solid #007aff}.uni-tag--primary.uni-tag--inverted[data-v-0a0fb015]{color:#007aff;background-color:#fff;border:1px solid #007aff}.uni-tag--success[data-v-0a0fb015]{color:#fff;background-color:#4cd964;border:1px solid #4cd964}.uni-tag--success.uni-tag--inverted[data-v-0a0fb015]{color:#4cd964;background-color:#fff;border:1px solid #4cd964}.uni-tag--warning[data-v-0a0fb015]{color:#fff;background-color:#f0ad4e;border:1px solid #f0ad4e}.uni-tag--warning.uni-tag--inverted[data-v-0a0fb015]{color:#f0ad4e;background-color:#fff;border:1px solid #f0ad4e}.uni-tag--error[data-v-0a0fb015]{color:#fff;background-color:#dd524d;border:1px solid #dd524d}.uni-tag--error.uni-tag--inverted[data-v-0a0fb015]{color:#dd524d;background-color:#fff;border:1px solid #dd524d}.uni-tag--inverted[data-v-0a0fb015]{color:#333;background-color:#fff;border:1px solid #f8f8f8}",""]),i.exports=t},c786:function(i,t,e){var a=e("12fe");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var o=e("4f06").default;o("390f308a",a,!0,{sourceMap:!1,shadowMode:!1})},eb73:function(i,t,e){"use strict";e.r(t);var a=e("0a9e"),o=e("fcb9");for(var n in o)"default"!==n&&function(i){e.d(t,i,(function(){return o[i]}))}(n);e("5e23");var r,s=e("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"03f986a9",null,!1,a["a"],r);t["default"]=d.exports},f058:function(i,t,e){var a=e("99ef");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var o=e("4f06").default;o("badbdc56",a,!0,{sourceMap:!1,shadowMode:!1})},fcb9:function(i,t,e){"use strict";e.r(t);var a=e("27ce"),o=e.n(a);for(var n in a)"default"!==n&&function(i){e.d(t,i,(function(){return a[i]}))}(n);t["default"]=o.a}}]);