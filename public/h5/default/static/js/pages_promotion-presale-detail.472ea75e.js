(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_promotion-presale-detail"],{"0968":function(e,t,o){"use strict";var i=o("4ea4");o("4160"),o("c975"),o("ac1f"),o("1276"),o("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("96cf");var a=i(o("1da1")),n={data:function(){return{goodsRoute:"/pages_promotion/presale/detail",posterApi:"/presale/api/goods/poster",id:0,groupId:0}},onLoad:function(e){var t=this;if(this.id=e.id||0,this.skuId=e.sku_id||0,e.scene){var o=decodeURIComponent(e.scene);o=o.split("&"),o.length&&o.forEach((function(e){-1!=e.indexOf("id")&&(t.id=e.split("-")[1])}))}},onShow:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getGoodsSkuDetail();case 2:case"end":return t.stop()}}),t)})))()},methods:{getGoodsSkuDetail:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.sendRequest({url:"/presale/api/goods/detail",async:!1,data:{id:e.id,sku_id:e.skuId}});case 2:o=t.sent,i=o.data,null!=i.goods_sku_detail?(e.goodsSkuDetail=i.goods_sku_detail,e.goodsSkuDetail.purchased_num=e.goodsSkuDetail.purchased_num?e.goodsSkuDetail.purchased_num:0,e.skuId=e.goodsSkuDetail.sku_id,e.goodsSkuDetail.group_id=e.groupId,e.goodsSkuDetail.end_time-o.timestamp>0?e.goodsSkuDetail.timeMachine=e.$util.countDown(e.goodsSkuDetail.end_time-o.timestamp):(e.$util.showToast({title:"活动已结束"}),setTimeout((function(){e.$util.redirectTo("/pages/goods/detail",{goods_id:e.goodsSkuDetail.goods_id},"redirectTo")}),1e3)),e.shareQuery="id="+e.id,e.shareUrl=e.goodsRoute+"?"+e.shareQuery,e.chatRoomParams={sku_id:e.goodsSkuDetail.sku_id,type:"presale",type_id:e.id},e.posterParams={id:e.id},e.handleGoodsSkuData(),e.goodsSkuDetail.show_price=e.goodsSkuDetail.goods_price,e.$refs.loadingCover&&e.$refs.loadingCover.hide()):e.$util.redirectTo("/pages_tool/goods/not_exist",{},"redirectTo");case 5:case"end":return t.stop()}}),t)})))()},presale:function(){var e=this;this.token?this.$refs.goodsSku.show("presale",(function(){e.getCartCount()})):this.source_member?this.$refs.login.open(this.shareUrl+"&source_member="+this.source_member):this.$refs.login.open(this.shareUrl)},toOrderDetail:function(){this.$util.redirectTo("/pages_promotion/presale/order_list")}}};t.default=n},1079:function(e,t,o){"use strict";var i=o("ae87"),a=o.n(i);a.a},"270a":function(e,t,o){"use strict";var i=o("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(o("7667")),n=i(o("5d47")),r=i(o("9e8b")),s=i(o("92aa")),d=i(o("ac46")),l=i(o("1339")),c=i(o("0968")),p=i(o("f385")),u=i(o("e7c3")),g=i(o("b6b1")),m=i(o("1aeb")),v={components:{nsGoodsAction:a.default,nsGoodsActionIcon:n.default,nsGoodsActionButton:r.default,uniPopup:s.default,nsGoodsSku:d.default,uniCountDown:l.default,goodsDetailView:g.default,toTop:m.default},mixins:[u.default,c.default,p.default]};t.default=v},2882:function(e,t,o){"use strict";var i=o("e3f6"),a=o.n(i);a.a},"383e":function(e,t,o){"use strict";o.r(t);var i=o("270a"),a=o.n(i);for(var n in i)"default"!==n&&function(e){o.d(t,e,(function(){return i[e]}))}(n);t["default"]=a.a},"3c6e":function(e,t,o){var i=o("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n * 建议使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n */.goods-detail[data-v-479e28b0]{height:100%;padding-bottom:%?100?%}.goods-detail.active[data-v-479e28b0]{padding-bottom:%?170?%}.goods-media[data-v-479e28b0]{width:100%;position:relative;overflow:hidden}.goods-media .share[data-v-479e28b0]{z-index:97;position:absolute;top:%?30?%;width:calc(100% - %?60?%);padding:%?10?% %?30?%;display:flex;align-items:center;justify-content:space-between}.goods-media .share uni-text[data-v-479e28b0]{display:inline-block;width:%?60?%;height:%?60?%;color:#fff;background:rgba(0,0,0,.42);border-radius:50%;text-align:center;font-size:%?28?%;line-height:%?60?%}.goods-media .share .share_right uni-text[data-v-479e28b0]{margin-left:%?30?%}.goods-media[data-v-479e28b0]:after{padding-top:100%;display:block;content:""}.goods-media .goods-img[data-v-479e28b0],\r\n.goods-media .goods-video[data-v-479e28b0]{position:absolute;width:100%;height:100%;left:0;top:0;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-timing-function:cubic-bezier(0,0,.25,1);transition-duration:.35s;-webkit-transform:translateZ(0);transform:translateZ(0)}.goods-media .goods-img[data-v-479e28b0]{-webkit-transform:translateX(100%);transform:translateX(100%)}.goods-media .goods-video[data-v-479e28b0]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.goods-media .goods-img.show[data-v-479e28b0],\r\n.goods-media .goods-video.show[data-v-479e28b0]{-webkit-transform:translateX(0);transform:translateX(0)}.goods-media .goods-img .swiper[data-v-479e28b0]{width:100%;height:100%}.goods-media .goods-img .swiper .item[data-v-479e28b0]{width:100%;height:100%}.goods-media .goods-img .swiper uni-image[data-v-479e28b0]{width:100%;height:100%}.goods-media .goods-img .img-indicator-dots[data-v-479e28b0]{position:absolute;z-index:5;bottom:%?40?%;right:%?40?%;background:hsla(0,0%,39.2%,.4);color:#fff;font-size:%?24?%;line-height:%?40?%;border-radius:%?20?%;padding:0 %?20?%}.goods-media .goods-video uni-video[data-v-479e28b0]{width:100%;height:100%}.goods-media .goods-video .uni-video-cover[data-v-479e28b0]{background:none}.goods-media .media-mode[data-v-479e28b0]{position:absolute;width:100%;z-index:5;bottom:%?40?%;text-align:center;line-height:%?50?%}.goods-media .media-mode uni-text[data-v-479e28b0]{background:hsla(0,0%,39.2%,.4);color:#fff;font-size:%?24?%;line-height:%?50?%;border-radius:%?20?%;padding:0 %?30?%;display:inline-block}.goods-media .media-mode uni-text[data-v-479e28b0]:last-child{margin-left:%?40?%}.goods-promotion[data-v-479e28b0]{position:relative;height:%?108?%;overflow:hidden;background-repeat:no-repeat;background-size:100% 100%;padding:0 %?30?%}.goods-promotion .price-info[data-v-479e28b0]{margin-right:%?280?%;color:#fff;height:inherit;display:flex;flex-direction:column;justify-content:center}.goods-promotion .price-info .img-wrap[data-v-479e28b0]{width:%?200?%;height:%?60?%;display:inline-block;vertical-align:text-top}.goods-promotion .price-info .img-wrap uni-image[data-v-479e28b0]{width:100%;height:100%}.goods-promotion .price-info .sale-num[data-v-479e28b0]{line-height:1;font-size:%?24?%;white-space:nowrap;overflow:hidden;color:#fff;text-overflow:ellipsis}.goods-promotion .countdown[data-v-479e28b0]{position:absolute;right:0;top:0;width:%?280?%;text-align:center;height:100%;background-repeat:no-repeat;background-size:100% 100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.goods-promotion .countdown .txt[data-v-479e28b0]{height:%?32?%;text-align:center;line-height:%?32?%;font-size:%?24?%;margin-top:0;color:#ff4644}.goods-promotion .countdown .clockrun[data-v-479e28b0]{margin-top:%?6?%;height:%?40?%;line-height:%?40?%;text-align:center;font-size:%?24?%;color:#fff}.group-wrap[data-v-479e28b0]{margin-bottom:%?20?%;padding:0 %?30?%;box-sizing:border-box;background:#fff}.group-wrap .goods-module-wrap[data-v-479e28b0]{position:relative}.group-wrap .goods-module-wrap.info[data-v-479e28b0]{padding:%?20?% 0 %?20?%}.group-wrap .goods-module-wrap .price-symbol[data-v-479e28b0]{font-size:%?32?%;position:relative;top:%?6?%;font-weight:700;margin-right:%?4?%;color:var(--goods-price)}.group-wrap .goods-module-wrap .price[data-v-479e28b0]{font-size:%?48?%;position:relative;align-self:flex-end;line-height:1;font-weight:700;vertical-align:sub;color:var(--goods-price)}.group-wrap .goods-module-wrap .member-price-wrap[data-v-479e28b0]{display:inline-block;font-weight:700;margin-left:%?10?%;vertical-align:text-top}.group-wrap .goods-module-wrap .member-price-wrap .unit[data-v-479e28b0]{font-size:%?24?%;margin-right:%?4?%}.group-wrap .goods-module-wrap .member-price-wrap .money[data-v-479e28b0]{font-size:%?28?%}.group-wrap .goods-module-wrap .member-price-wrap .img-wrap[data-v-479e28b0]{width:%?83?%;height:%?34?%;font-size:%?22?%;border-radius:%?6?%;display:inline-block;vertical-align:text-top;margin-right:%?10?%}.group-wrap .goods-module-wrap .member-price-wrap .img-wrap uni-image[data-v-479e28b0]{width:100%;height:100%}.group-wrap .goods-module-wrap .sku-name-wrap[data-v-479e28b0],\r\n.group-wrap .goods-module-wrap .introduction[data-v-479e28b0]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.group-wrap .goods-module-wrap .sku-name-wrap[data-v-479e28b0]{font-weight:700;font-size:%?32?%;line-height:1.6}.group-wrap .goods-module-wrap .introduction[data-v-479e28b0]{margin:%?20?% 0;font-size:%?28?%}.group-wrap .goods-module-wrap .logistics-wrap[data-v-479e28b0]{display:flex;margin-top:%?20?%}.group-wrap .goods-module-wrap .logistics-wrap uni-text[data-v-479e28b0]{flex:1;font-size:%?24?%;color:#909399;text-align:center}.group-wrap .goods-module-wrap .logistics-wrap uni-text[data-v-479e28b0]:first-of-type{text-align:left}.group-wrap .goods-module-wrap .logistics-wrap uni-text[data-v-479e28b0]:last-of-type{text-align:right}.group-wrap .market-price-wrap[data-v-479e28b0]{margin-left:%?20?%;color:#909399;text-decoration:line-through;display:inline-block;vertical-align:sub;line-height:normal}.group-wrap .market-price-wrap .unit[data-v-479e28b0]{margin-right:%?4?%;font-size:%?24?%}.group-wrap .market-price-wrap .money[data-v-479e28b0]{font-size:%?28?%}.follow-and-share[data-v-479e28b0]{position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin-top:%?8?%}.follow-and-share .iconfont[data-v-479e28b0]{font-weight:700;margin-right:%?30?%;font-size:%?32?%;vertical-align:middle}.follow-and-share .iconfont[data-v-479e28b0]:first-child{font-size:%?30?%}.follow-and-share .iconfont[data-v-479e28b0]:last-child{margin-right:0}.follow-and-share .fenxiao[data-v-479e28b0]{display:block;position:absolute;font-size:%?24?%;font-weight:700;width:140%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;left:%?-80?%;text-align:right}.goods-cell[data-v-479e28b0]{display:flex;padding:%?20?% 0;align-items:center;background:#fff;line-height:%?40?%;justify-content:space-between}.goods-cell .tit[data-v-479e28b0]{color:#909399;font-size:%?28?%;margin-right:%?20?%;width:%?70?%}.goods-cell .box[data-v-479e28b0]{width:90%;font-size:%?28?%;line-height:inherit;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.goods-evaluate[data-v-479e28b0]{padding:%?20?% 0;background:#fff}.goods-evaluate .tit[data-v-479e28b0]{display:flex;align-items:center;font-size:%?24?%}.goods-evaluate .tit.active[data-v-479e28b0]{padding-bottom:%?20?%;border-bottom:%?1?% solid #eee}.goods-evaluate .tit uni-view[data-v-479e28b0]{flex:1;line-height:%?40?%;text-align:left}.goods-evaluate .evaluate-item[data-v-479e28b0]{padding:%?30?% 0 0}.goods-evaluate .evaluate-item .evaluator[data-v-479e28b0]{display:flex;align-items:center;justify-content:space-between}.goods-evaluate .evaluate-item .evaluator .evaluator-info[data-v-479e28b0]{display:flex;align-items:center}.goods-evaluate .evaluate-item .evaluator .evaluator-face[data-v-479e28b0]{width:%?80?%;height:%?80?%;border-radius:50%;overflow:hidden}.goods-evaluate .evaluate-item .evaluator .evaluator-face uni-image[data-v-479e28b0]{width:100%;height:100%;border-radius:50%}.goods-evaluate .evaluate-item .evaluator .evaluator-name[data-v-479e28b0]{display:block;width:%?200?%;margin-left:%?20?%;font-size:%?28?%;max-width:50%}.goods-evaluate .evaluate-item .evaluator .time[data-v-479e28b0]{font-size:%?22?%}.goods-evaluate .evaluate-item .cont[data-v-479e28b0]{text-align:justify;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;-webkit-box-pack:center;overflow:hidden;word-break:break-all;font-size:%?24?%}.goods-evaluate .evaluate-item .evaluate-img[data-v-479e28b0]{display:inline-flex;margin-top:%?20?%}.goods-evaluate .evaluate-item .evaluate-img .img-box[data-v-479e28b0]{width:%?100?%;height:%?100?%;overflow:hidden;margin:0 %?20?% %?20?% 0;border-radius:%?10?%}.goods-evaluate .evaluate-item .evaluate-img .img-box uni-image[data-v-479e28b0]{width:100%;height:100%}.goods-evaluate .evaluate-item-empty[data-v-479e28b0]{float:right;color:#909399}.goods-evaluate .evaluate-item-empty uni-text[data-v-479e28b0]:first-child{margin-right:%?30?%}.goods-evaluate .evaluate-item-empty .iconfont[data-v-479e28b0]{margin-top:%?2?%}.goods-action-button[data-v-479e28b0]{flex:1;margin-left:%?20?%}.goods-action-button[data-v-479e28b0]:last-child{margin-right:%?20?%}.goods-merchants-service-popup-layer[data-v-479e28b0]{height:%?660?%}.goods-merchants-service-popup-layer uni-scroll-view[data-v-479e28b0]{position:absolute;left:0;right:0;height:65%}.goods-merchants-service-popup-layer uni-scroll-view .item[data-v-479e28b0]{padding:0 %?30?%;height:%?120?%;line-height:%?100?%;border-bottom:%?2?% solid #eee;display:flex;align-items:center}.goods-merchants-service-popup-layer uni-scroll-view .item[data-v-479e28b0]:last-child{border-bottom:none}.goods-merchants-service-popup-layer uni-scroll-view .item .item-icon[data-v-479e28b0]{height:100%;display:flex;align-items:flex-start;padding-top:%?4?%;box-sizing:border-box;width:%?60?%}.goods-merchants-service-popup-layer uni-scroll-view .item .item-icon.empty-desc[data-v-479e28b0]{padding-top:0;align-items:center}.goods-merchants-service-popup-layer uni-scroll-view .item .item-icon.empty-desc .icon-img[data-v-479e28b0]{margin-top:0!important}.goods-merchants-service-popup-layer uni-scroll-view .item .item-icon.empty-desc .icon-box[data-v-479e28b0]{margin-top:0!important}.goods-merchants-service-popup-layer uni-scroll-view .item .iconfont[data-v-479e28b0]{display:inline-block;margin-right:%?20?%;font-size:%?40?%;vertical-align:top;height:%?50?%;line-height:%?50?%}.goods-merchants-service-popup-layer uni-scroll-view .item .icon-img[data-v-479e28b0]{width:%?35?%;height:%?35?%;margin-right:%?20?%;margin-top:%?12?%}.goods-merchants-service-popup-layer uni-scroll-view .item .icon-box[data-v-479e28b0]{width:%?48?%;height:%?48?%;text-align:center;display:flex;margin-right:%?20?%;line-height:1;margin-top:0;font-size:%?36?%;padding:%?2?%}.goods-merchants-service-popup-layer uni-scroll-view .item .info-wrap[data-v-479e28b0]{display:inline-block;vertical-align:middle;width:90%}.goods-merchants-service-popup-layer uni-scroll-view .item .info-wrap .title[data-v-479e28b0]{display:block;font-size:%?28?%}.goods-merchants-service-popup-layer uni-scroll-view .item .info-wrap .describe[data-v-479e28b0]{font-size:%?24?%;color:#909399;display:block;padding:%?10?% 0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.goods-merchants-service-popup-layer uni-scroll-view .item.empty-desc[data-v-479e28b0]{height:%?100?%}.goods-merchants-service-popup-layer uni-scroll-view .item.empty-desc .iconfont[data-v-479e28b0]{vertical-align:middle}.goods-attribute-popup-layer[data-v-479e28b0]{height:%?660?%}.goods-attribute-popup-layer .goods-attribute-body[data-v-479e28b0]{position:absolute;left:0;right:0;height:60%}.goods-attribute-popup-layer .goods-attribute-body .item[data-v-479e28b0]{padding:%?20?% 0;margin:0 %?30?%;border-bottom:%?2?% solid #eee}.goods-attribute-popup-layer .goods-attribute-body .item .attr-name[data-v-479e28b0]{color:#909399;display:inline-block;width:%?150?%;overflow:hidden;vertical-align:text-top}.goods-attribute-popup-layer .goods-attribute-body .item .value-name[data-v-479e28b0]{margin-left:%?20?%;vertical-align:text-top}.goods-attribute-popup-layer .goods-attribute-body .item[data-v-479e28b0]:last-child{border-bottom:none}.goods-detail-tab[data-v-479e28b0]{width:100%}.goods-detail-tab .detail-tab[data-v-479e28b0]{display:flex;align-items:center;justify-content:center;margin-bottom:%?10?%}.goods-detail-tab .detail-tab .tab-line[data-v-479e28b0]{width:%?60?%;height:%?2?%;background:#ccc}.goods-detail-tab .detail-tab .tab-item[data-v-479e28b0]{height:%?70?%;color:#606266;line-height:%?70?%;box-sizing:border-box;font-size:%?30?%;margin:0 %?20?%}.goods-detail-tab .detail-content[data-v-479e28b0]{width:100%}.goods-detail-tab .goods-details[data-v-479e28b0]{padding:%?20?%;margin-bottom:%?100?%;overflow:hidden;background:#fff}.goods-detail-tab .goods-details *[data-v-479e28b0]{max-width:100%!important}.goods-detail-tab .goods-details.active[data-v-479e28b0]{min-height:%?150?%;width:100%;display:flex;justify-content:center;align-items:center;color:#909399}.poster-layer .generate-poster[data-v-479e28b0]{padding:%?40?% 0}.poster-layer .generate-poster .iconfont[data-v-479e28b0]{font-size:%?80?%;color:#07c160;line-height:normal}.poster-layer .generate-poster > uni-view[data-v-479e28b0]{text-align:center}.poster-layer .generate-poster > uni-view[data-v-479e28b0]:last-child{margin-top:%?20?%}.poster-layer .image-wrap[data-v-479e28b0]{width:64%;height:%?854?%;margin:%?60?% auto %?40?% auto;box-shadow:0 0 %?32?% hsla(0,0%,39.2%,.3)}.poster-layer .image-wrap uni-image[data-v-479e28b0]{width:%?480?%;height:%?854?%}.poster-layer .msg[data-v-479e28b0]{padding:%?40?%}.poster-layer .save[data-v-479e28b0]{text-align:center;height:%?80?%;line-height:%?80?%}.poster-layer .close[data-v-479e28b0]{position:absolute;top:0;right:%?20?%;width:%?40?%;height:%?80?%;font-size:%?50?%}.share-popup .share-title[data-v-479e28b0],\r\n.uni-popup__wrapper-box .share-title[data-v-479e28b0]{line-height:%?60?%;font-size:%?32?%;padding:%?15?% 0;text-align:center}.share-popup .share-content[data-v-479e28b0],\r\n.uni-popup__wrapper-box .share-content[data-v-479e28b0]{display:flex;display:-webkit-flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;-ms-flex-wrap:wrap;-o-flex-wrap:wrap;flex-wrap:wrap;padding:%?80?% %?15?%}.share-popup .share-content .share-box[data-v-479e28b0],\r\n.uni-popup__wrapper-box .share-content .share-box[data-v-479e28b0]{flex:1;text-align:center}.share-popup .share-content .share-box .share-btn[data-v-479e28b0],\r\n.uni-popup__wrapper-box .share-content .share-box .share-btn[data-v-479e28b0]{margin:0;padding:0;border:none;line-height:1;height:auto}.share-popup .share-content .share-box .share-btn uni-text[data-v-479e28b0],\r\n.uni-popup__wrapper-box .share-content .share-box .share-btn uni-text[data-v-479e28b0]{margin-top:%?20?%;font-size:%?24?%;display:block;color:#303133}.share-popup .share-content .share-box .iconfont[data-v-479e28b0],\r\n.uni-popup__wrapper-box .share-content .share-box .iconfont[data-v-479e28b0]{font-size:%?80?%;line-height:normal}.share-popup .share-content .share-box .iconfuzhilianjie[data-v-479e28b0],\r\n.share-popup .share-content .share-box .iconpengyouquan[data-v-479e28b0],\r\n.share-popup .share-content .share-box .iconhaowuquan[data-v-479e28b0],\r\n.share-popup .share-content .share-box .iconiconfenxianggeihaoyou[data-v-479e28b0],\r\n.uni-popup__wrapper-box .share-content .share-box .iconfuzhilianjie[data-v-479e28b0],\r\n.uni-popup__wrapper-box .share-content .share-box .iconpengyouquan[data-v-479e28b0],\r\n.uni-popup__wrapper-box .share-content .share-box .iconhaowuquan[data-v-479e28b0],\r\n.uni-popup__wrapper-box .share-content .share-box .iconiconfenxianggeihaoyou[data-v-479e28b0]{color:#07c160}.share-popup .share-footer[data-v-479e28b0],\r\n.uni-popup__wrapper-box .share-footer[data-v-479e28b0]{height:%?90?%;line-height:%?90?%;border-top:%?2?% solid #eee;text-align:center}.newdetail[data-v-479e28b0]{padding:0 %?30?%;background:#fff}.newdetail .item[data-v-479e28b0]{height:%?74?%;display:flex;align-items:center}.newdetail .item .label[data-v-479e28b0]{width:%?70?%;color:#909399;font-size:%?28?%;margin-right:%?20?%}.newdetail .item[data-v-479e28b0]:last-child{border-bottom:none}.newdetail .item.free .free-tip[data-v-479e28b0]{border:0 solid;padding:%?2?% %?14?%;border-radius:%?10?%;margin-right:%?10?%;font-size:%?24?%;font-weight:700;color:var(--main-color);background-color:var(--main-color-shallow)}.newdetail .item.free .value[data-v-479e28b0]{display:inline-block;width:70%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.newdetail .item.service .list-wrap[data-v-479e28b0]{margin-right:%?20?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;display:flex}.newdetail .item.service .list-wrap .item-wrap[data-v-479e28b0]{display:inline;font-size:%?28?%;margin-right:%?20?%}.newdetail .item.service .list-wrap .item-wrap[data-v-479e28b0]:last-child{margin-right:0}.newdetail .item.service .list-wrap .item-wrap .item-wrap-box[data-v-479e28b0]{display:flex;align-items:center;font-size:%?26?%}.newdetail .item.service .list-wrap .item-wrap .item-wrap-box .item-wrap-icon[data-v-479e28b0]{display:flex;align-items:center;font-size:%?34?%;padding:%?2?%}.newdetail .item.service .list-wrap .item-wrap .item-wrap-box .icondui[data-v-479e28b0]{font-size:%?28?%;margin-right:%?6?%;line-height:%?30?%;color:var(--base-color)}.newdetail .item.service .list-wrap .item-wrap .item-wrap-box .icon-img[data-v-479e28b0]{width:%?28?%;height:%?28?%;margin-right:%?6?%}.newdetail .item.service .list-wrap .item-wrap .item-wrap-box .icon-box[data-v-479e28b0]{width:%?32?%;height:%?32?%;text-align:center;display:flex;margin-right:%?6?%;line-height:1;padding:%?2?%}.newdetail .item.selected-sku-spec .box[data-v-479e28b0]{flex:1;margin-right:%?60?%;width:80%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.newdetail .item.selected-sku-spec .box uni-text[data-v-479e28b0]{margin-right:%?10?%}.newdetail .item.selected-sku-spec .box uni-text[data-v-479e28b0]:last-child{margin-right:0}.newdetail .item.goods-attribute .box[data-v-479e28b0]{flex:1;margin-right:%?60?%;width:80%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.newdetail .item.goods-attribute .box uni-text[data-v-479e28b0]{margin-right:%?20?%}.newdetail .item.goods-attribute .box uni-text[data-v-479e28b0]:last-child{margin-right:0}.newdetail .item .img-wrap[data-v-479e28b0]{width:%?38?%;height:%?38?%;position:absolute;right:%?30?%}.newdetail .item .img-wrap uni-image[data-v-479e28b0]{width:100%;height:100%}.popup-layer[data-v-479e28b0]{background:#fff}.popup-layer .head-wrap[data-v-479e28b0]{font-size:%?32?%;line-height:%?100?%;height:%?100?%;display:block;text-align:center}.popup-layer .head-wrap .iconfont[data-v-479e28b0]{position:absolute;float:right;right:%?44?%;font-size:%?32?%}.popup-layer .button-box[data-v-479e28b0]{width:100%;position:absolute;bottom:0;z-index:1;margin-bottom:%?30?%}.popup-layer .button-box uni-button[data-v-479e28b0]{height:%?80?%;background-color:var(--goods-btn-color)}.iconright[data-v-479e28b0]{color:#909399;font-size:%?28?%;position:absolute;right:%?30?%}.promotion-tag[data-v-479e28b0]{color:#fff;font-size:%?20?%;border-top-left-radius:%?30?%;border-bottom-left-radius:%?30?%;padding:%?4?% %?10?%;margin-right:%?10?%;vertical-align:middle;background-color:var(--promotion-tag);display:none}.detail-community[data-v-479e28b0]{background:#fff;padding:%?30?%;margin-bottom:%?20?%;display:flex;align-items:center;justify-content:space-between}.detail-community .community-box[data-v-479e28b0]{display:flex;align-items:center}.detail-community .community-box uni-image[data-v-479e28b0]{width:%?70?%;height:%?70?%;border-radius:%?10?%;margin-right:%?20?%}.detail-community .community-box .community-title[data-v-479e28b0]{font-family:PingFang-SC-Medium;font-size:%?28?%;color:#303133}.detail-community .community-box .community-txt[data-v-479e28b0]{font-family:PingFang-SC-Medium;font-size:%?24?%;color:#909399;width:%?450?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.detail-community .community-btn[data-v-479e28b0]{width:%?100?%;height:%?50?%;line-height:%?50?%;background-color:#03bd04;border-radius:%?10?%;text-align:center;font-family:PingFang-SC-Medium;font-size:%?24?%;color:#fff}.community-model[data-v-479e28b0]{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,.4);z-index:9999}.community-model .community-model-content[data-v-479e28b0]{width:%?500?%;height:%?600?%;background-color:#fff;border-radius:%?10?%;margin:35% auto 0;position:relative;overflow:hidden}.community-model .community-model-content .community-model-content-radius[data-v-479e28b0]{width:%?600?%;height:%?240?%;border-radius:100%;background:var(--base-color);position:absolute;left:%?-50?%;top:%?-60?%}.community-model .community-model-content .community-model-content-radius uni-view[data-v-479e28b0]{margin-top:%?120?%;text-align:center;font-family:PingFang-SC-Bold;font-size:%?30?%;color:#fff}.community-model .community-model-content .community-model-content-draw[data-v-479e28b0]{width:%?260?%;height:%?260?%;margin:%?214?% auto 0}.community-model .community-model-content .community-model-content-draw uni-image[data-v-479e28b0]{width:100%;height:100%}.community-model .community-model-content .community-model-content-text[data-v-479e28b0]{font-family:PingFang-SC-Medium;font-size:%?24?%;color:#909399;text-align:center;margin-top:%?20?%}.community-model .community-model-close[data-v-479e28b0]{width:%?56?%;height:%?56?%;border:%?2?% solid #fff;border-radius:50%;margin:%?50?% auto 0;text-align:center;color:#fff}.to-top[data-v-479e28b0]{position:fixed;right:%?50?%;bottom:%?200?%;background-color:rgba(0,0,0,.5);border-radius:50%;display:flex;width:%?80?%;height:%?80?%;align-items:center;justify-content:center;z-index:90;color:#fff}.go-top[data-v-479e28b0]{position:fixed;right:%?30?%;bottom:%?220?%;z-index:1;background:#fff;padding:%?10?%;border:1px solid;border-radius:20px;width:%?57?%;height:%?270?%;text-align:center;font-size:%?28?%}.go-top .goods-share[data-v-479e28b0],\r\n.go-top .collection[data-v-479e28b0]{margin-bottom:%?10?%;font-size:%?28?%}.go-top .icontop[data-v-479e28b0]{font-size:%?28?%}.goods-promotion .price-info .img-wrap[data-v-479e28b0]{width:%?120?%}.goods-promotion .price-info .sale-num[data-v-479e28b0]{color:#fff;font-size:%?24?%}.goods-presale-info .deposit[data-v-479e28b0],\r\n.goods-presale-info .presale-price[data-v-479e28b0]{vertical-align:bottom}.goods-presale-info .presale-price[data-v-479e28b0]{border:1px solid var(--goods-price);padding:0 %?4?%;border-radius:%?6?%;margin-left:%?10?%;color:var(--goods-price)}.presale-rule[data-v-479e28b0]{padding:%?20?% 0}.presale-rule .tit[data-v-479e28b0]{font-weight:600}.presale-rule .process[data-v-479e28b0]{display:flex;align-items:center;justify-content:center}.presale-rule .process .process-item[data-v-479e28b0]{display:flex;flex-direction:column;align-items:center}.presale-rule .process .process-item .number[data-v-479e28b0]{display:flex;align-items:center;justify-content:center;width:%?40?%;height:%?40?%;border-radius:50%;font-size:%?24?%}.presale-rule .process .process-item .text[data-v-479e28b0]{margin-top:%?20?%}.presale-rule .process .space[data-v-479e28b0]{margin:0 %?20?%;font-size:%?40?%}.follow-and-share[data-v-479e28b0]{top:%?20?%}.goods-promotion[data-v-479e28b0]{background:var(--promotion-color);height:75px}.goods-promotion .price-info[data-v-479e28b0]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.goods-promotion .price-info .icon-box[data-v-479e28b0]{margin-right:%?20?%}.goods-promotion .price-info .icon-box .iconfont[data-v-479e28b0]{font-size:%?60?%;color:#fff}.goods-promotion .price-info .price-box[data-v-479e28b0]{display:flex;align-items:flex-start;flex-direction:column;height:100%;justify-content:center}.goods-promotion .price-info .price-box .promotion-text[data-v-479e28b0]{font-size:%?36?%;color:#fff;line-height:1}.goods-promotion .price-info .price-box .sale-num[data-v-479e28b0]{display:flex;align-items:center;margin-top:%?18?%}.goods-promotion .price-info .price-box .sale-num uni-view[data-v-479e28b0]{color:#fff;line-height:1}.countdown[data-v-479e28b0]{width:%?220?%;background:var(--promotion-aux-color)}.countdown .txt[data-v-479e28b0]{color:#fff!important;font-size:%?28?%!important}.countdown .clockrun[data-v-479e28b0]{margin-top:%?16?%!important}.countdown[data-v-479e28b0]:after{position:absolute;content:"";top:calc(50% - %?15?%);z-index:5;left:%?-15?%;width:0;height:0;border-style:solid;border-width:%?15?% %?15?% %?15?% 0;border-color:transparent var(--promotion-aux-color) transparent transparent}',""]),e.exports=t},"554d":function(e,t,o){var i=o("24fb");t=i(!1),t.push([e.i,"[data-v-479e28b0] .uni-video-cover{background:none}[data-v-479e28b0] .uni-video-cover-duration{display:none}[data-v-479e28b0] .uni-video-cover-play-button{border-radius:50%;border:%?4?% solid #fff;width:%?120?%;height:%?120?%;background-size:30%}.poster-layer[data-v-479e28b0] .uni-popup__wrapper-box{max-height:none!important}[data-v-479e28b0] .sku-layer .uni-popup__wrapper-box{overflow-y:initial!important}[data-v-479e28b0] .action-icon-wrap .iconfont.iconshouye1{font-size:%?40?%}.goods-promotion .countdown .clockrun[data-v-479e28b0] .uni-countdown__number{min-width:%?32?%;height:%?32?%;text-align:center;line-height:%?32?%;border-radius:4px;display:inline-block;padding:%?4?%;margin:0;border:none}.goods-promotion .countdown .clockrun[data-v-479e28b0] .uni-countdown__splitor{width:%?10?%;height:%?32?%;line-height:%?36?%;text-align:center;display:inline-block}.goods-promotion .countdown .clockrun[data-v-479e28b0] .uni-countdown__splitor.day{width:auto}.sku-layer[data-v-479e28b0] .uni-popup__wrapper-box{overflow-y:initial!important}.poster-layer[data-v-479e28b0] .uni-popup__wrapper-box{max-height:none!important}[data-v-479e28b0] .uni-popup__wrapper.uni-custom .uni-popup__wrapper-box{max-height:unset!important}[data-v-479e28b0] .goods-action-button .action-buttom-wrap{display:flex;flex-direction:column;justify-content:center;align-items:center}[data-v-479e28b0] .goods-action-button.active1 .action-buttom-wrap{height:%?84?%;line-height:%?84?%}[data-v-479e28b0] .goods-action-button.active2 .action-buttom-wrap{height:%?84?%;line-height:%?84?%}[data-v-479e28b0] .goods-action-button.active3 .action-buttom-wrap{height:%?84?%;line-height:%?84?%;margin:10px 0}[data-v-479e28b0] .goods-action-button.active4 .action-buttom-wrap{height:%?84?%;line-height:%?84?%}[data-v-479e28b0] .goods-action-button .action-buttom-wrap uni-text{line-height:1.1}.font-size-tag-contentFate[data-v-479e28b0]{display:flex;align-items:center}.goods-presale-info .presale-price[data-v-479e28b0]{height:%?32?%;line-height:%?32?%}.deposit[data-v-479e28b0]{height:%?32?%;line-height:%?32?%}",""]),e.exports=t},"984c":function(e,t,o){"use strict";o.r(t);var i=o("f942"),a=o("383e");for(var n in a)"default"!==n&&function(e){o.d(t,e,(function(){return a[e]}))}(n);o("2882"),o("1079");var r,s=o("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"479e28b0",null,!1,i["a"],r);t["default"]=d.exports},ae87:function(e,t,o){var i=o("554d");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=o("4f06").default;a("60fa1558",i,!0,{sourceMap:!1,shadowMode:!1})},e3f6:function(e,t,o){var i=o("3c6e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=o("4f06").default;a("6b58825e",i,!0,{sourceMap:!1,shadowMode:!1})},f942:function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return i}));var i={pageMeta:o("6d42").default,goodsDetailView:o("b6b1").default,uniCountDown:o("1339").default,nsGoodsSku:o("ac46").default,nsGoodsAction:o("7667").default,nsGoodsActionIcon:o("5d47").default,nsGoodsActionButton:o("9e8b").default,nsLogin:o("2893").default,loadingCover:o("790a").default},a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",[o("page-meta",{attrs:{"page-style":e.themeColor}}),o("v-uni-view",[o("goods-detail-view",{ref:"goodsDetailView",attrs:{goodsSkuDetail:e.goodsSkuDetail},scopedSlots:e._u([{key:"price",fn:function(){return[e.goodsSkuDetail.timeMachine?o("v-uni-view",{staticClass:"goods-promotion"},[o("v-uni-view",{staticClass:"price-info"},[o("v-uni-view",{staticClass:"icon-box"},[o("v-uni-text",{staticClass:"iconfont iconwodeyushou"})],1),o("v-uni-view",{staticClass:"price-box"},[o("v-uni-view",{staticClass:"promotion-text"},[e._v("预售")]),e.goodsSkuDetail.sale_show?o("v-uni-view",{staticClass:"sale-num"},[e._v("已有"+e._s(e.goodsSkuDetail.sale_num)+"人预约")]):e._e()],1)],1),o("v-uni-view",{staticClass:"countdown"},[o("v-uni-view",{staticClass:"txt"},[e._v("距结束仅剩")]),o("v-uni-view",{staticClass:"clockrun"},[o("uni-count-down",{attrs:{day:e.goodsSkuDetail.timeMachine.d,hour:e.goodsSkuDetail.timeMachine.h,minute:e.goodsSkuDetail.timeMachine.i,second:e.goodsSkuDetail.timeMachine.s,splitorColor:"#ffffff",backgroundColor:"#ffffff"}})],1)],1)],1):e._e(),o("v-uni-view",{staticClass:"group-wrap padding-top"},[o("v-uni-view",{staticClass:"goods-module-wrap goods-presale-info"},[o("v-uni-view",[o("v-uni-text",{staticClass:"price-symbol price-font"},[e._v(e._s(e.$lang("common.currencySymbol")))]),e.goodsSkuDetail.member_price>0?[o("v-uni-text",{staticClass:"price price-font"},[e._v(e._s(parseFloat(e.goodsSkuDetail.member_price).toFixed(2).split(".")[0]))]),o("v-uni-text",{staticClass:"price-symbol price-font"},[e._v("."+e._s(parseFloat(e.goodsSkuDetail.member_price).toFixed(2).split(".")[1]))]),o("v-uni-view",{staticClass:"member-price-wrap"},[o("v-uni-view",{staticClass:"img-wrap "},[o("v-uni-image",{attrs:{src:e.$util.img("public/uniapp/index/VIP.png"),mode:"aspectFit"}})],1),o("v-uni-text",{staticClass:"unit price-font"},[e._v(e._s(e.$lang("common.currencySymbol")))]),o("v-uni-text",{staticClass:"money price-font"},[e._v(e._s(e.goodsSkuDetail.price))])],1)]:[o("v-uni-text",{staticClass:"price price-font"},[e._v(e._s(parseFloat(e.goodsSkuDetail.price).toFixed(2).split(".")[0]))]),o("v-uni-text",{staticClass:"price-symbol price-font"},[e._v("."+e._s(parseFloat(e.goodsSkuDetail.price).toFixed(2).split(".")[1]))])]],2),o("v-uni-view",{staticClass:"font-size-tag-contentFate"},[o("v-uni-text",{staticClass:"font-size-tag deposit"},[e._v("定金"),o("v-uni-text",{staticClass:"price-font"},[e._v(e._s(e.$lang("common.currencySymbol"))+e._s(e.goodsSkuDetail.presale_deposit))])],1),o("v-uni-text",{staticClass:"font-size-tag presale-price "},[e._v("可抵"),o("v-uni-text",{staticClass:"price-font"},[e._v(e._s(e.$lang("common.currencySymbol"))+e._s(e.goodsSkuDetail.presale_price))])],1)],1),o("v-uni-view",{staticClass:"follow-and-share"},[o("v-uni-text",{staticClass:"follow iconfont iconfenxiang2",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openSharePopup()}}}),o("v-uni-text",{staticClass:"share iconfont",class:1==e.whetherCollection?"iconlikefill color-base-text":"iconguanzhu",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.editCollection()}}})],1)],1),o("v-uni-view",{staticClass:"goods-module-wrap info"},[o("v-uni-text",{staticClass:"sku-name-wrap"},[e._v(e._s(e.goodsSkuDetail.goods_name))]),e.goodsSkuDetail.introduction?o("v-uni-text",{staticClass:"introduction "},[e._v(e._s(e.goodsSkuDetail.introduction))]):e._e(),o("v-uni-view",{staticClass:"logistics-wrap"},[e.goodsSkuDetail.is_virtual?e._e():[e.goodsSkuDetail.is_free_shipping?o("v-uni-text",[e._v("快递 包邮")]):o("v-uni-text",[e._v("快递 买家承担")])],o("v-uni-text",[e.goodsSkuDetail.sale_show?o("v-uni-text",[e._v("销量 "+e._s(e.goodsSkuDetail.sale_num)+" "+e._s(e.goodsSkuDetail.unit))]):e._e()],1)],2)],1)],1),o("v-uni-view",{staticClass:"group-wrap"},[o("v-uni-view",{staticClass:"presale-rule"},[o("v-uni-view",{staticClass:"tit"},[e._v("预售玩法")]),o("v-uni-view",{staticClass:"font-size-tag"},[o("v-uni-text",{staticClass:"ns-text-color-gray"},[e._v("尾款支付时间：")]),e._v(e._s(e.$util.timeStampTurnTime(e.goodsSkuDetail.pay_start_time))+" - "+e._s(e.$util.timeStampTurnTime(e.goodsSkuDetail.pay_end_time)))],1),o("v-uni-view",{staticClass:"font-size-tag"},[o("v-uni-text",{staticClass:"color-text-gray"},[e._v("预售发货时间：")]),0==e.goodsSkuDetail.deliver_type?o("v-uni-text",[e._v(e._s(e.$util.timeStampTurnTime(e.goodsSkuDetail.deliver_time)))]):o("v-uni-text",[e._v("尾款支付"+e._s(e.goodsSkuDetail.deliver_time)+"天后发货")])],1),o("v-uni-view",{staticClass:"tit"},[e._v("预售流程")]),o("v-uni-view",{staticClass:"process"},[o("v-uni-view",{staticClass:"process-item"},[o("v-uni-text",{staticClass:"number color-base-text"},[e._v("1")]),o("v-uni-text",{staticClass:"text font-size-tag"},[e._v("付定金")])],1),o("v-uni-view",{staticClass:"space color-base-text"},[e._v("······")]),o("v-uni-view",{staticClass:"process-item"},[o("v-uni-text",{staticClass:"number color-base-text"},[e._v("2")]),o("v-uni-text",{staticClass:"text font-size-tag"},[e._v("付尾款")])],1),o("v-uni-view",{staticClass:"space color-base-text"},[e._v("······")]),o("v-uni-view",{staticClass:"process-item"},[o("v-uni-text",{staticClass:"number color-base-text"},[e._v("3")]),o("v-uni-text",{staticClass:"text font-size-tag"},[e._v("发货")])],1)],1)],1)],1)]},proxy:!0},{key:"entrance",fn:function(){return[e.goodsSkuDetail.sku_spec_format?o("v-uni-view",{staticClass:"item selected-sku-spec",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.presale.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"label"},[e._v("选择")]),o("v-uni-view",{staticClass:"box"},e._l(e.goodsSkuDetail.sku_spec_format,(function(t,i){return o("v-uni-text",{key:i},[e._v(e._s(t.spec_name)+"/"+e._s(t.spec_value_name))])})),1),o("v-uni-text",{staticClass:"iconfont iconright"})],1):e._e()]},proxy:!0},{key:"business",fn:function(){return[o("ns-goods-sku",{ref:"goodsSku",attrs:{"goods-detail":e.goodsSkuDetail,"max-buy":e.goodsSkuDetail.presale_num},on:{refresh:function(t){arguments[0]=t=e.$handleEvent(t),e.refreshGoodsSkuDetail.apply(void 0,arguments)}}})]},proxy:!0},{key:"action",fn:function(){return[o("ns-goods-action",{attrs:{safeArea:e.isIphoneX}},[1==e.goodsSkuDetail.goods_state?[o("ns-goods-action-icon",{attrs:{text:"首页",icon:"iconshouye1"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goHome.apply(void 0,arguments)}}}),o("ns-goods-action-icon",{attrs:{text:"客服",icon:"iconiconicon-kefu","send-data":e.contactData,chatParam:e.chatRoomParams}}),o("ns-goods-action-icon",{attrs:{text:"购物车",cornerMarkBg:e.themeStyle.goods_detail.goods_cart_num_corner,icon:"icongouwuche2","corner-mark":e.cartCount>0?e.cartCount+"":""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goCart.apply(void 0,arguments)}}}),e.goodsSkuDetail.purchased_num>0?[0==e.goodsSkuDetail.buying_num?o("ns-goods-action-button",{staticClass:"goods-action-button active3",attrs:{"disabled-text":"已达购买上限",disabled:!0}}):o("ns-goods-action-button",{staticClass:"goods-action-button active3",attrs:{backgroundColor:e.themeStyle.goods_detail.goods_btn_color,textColor:e.themeStyle.btn_text_color,text:"去付尾款"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toOrderDetail.apply(void 0,arguments)}}})]:[o("ns-goods-action-button",{staticClass:"goods-action-button",class:1==e.goodsSkuDetail.is_single_buy?"active2":"active4",attrs:{backgroundColor:e.themeStyle.goods_detail.goods_btn_color,textColor:e.themeStyle.btn_text_color,text:"立即预定"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.presale.apply(void 0,arguments)}}})]]:[o("ns-goods-action-button",{staticClass:"goods-action-button active3",attrs:{"disabled-text":"该商品已下架",disabled:!0}})]],2)]},proxy:!0}])}),e.showTop?o("to-top",{on:{toTop:function(t){arguments[0]=t=e.$handleEvent(t),e.scrollToTopNative()}}}):e._e(),o("ns-login",{ref:"login"}),o("loading-cover",{ref:"loadingCover"})],1)],1)},n=[]}}]);