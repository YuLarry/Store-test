(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["otherpages-notice-list-list"],{1781:function(a,e,t){"use strict";var r={nsEmpty:t("211f").default,loadingCover:t("cd2f").default,nsShowToast:t("f505").default},o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-uni-view",{attrs:{"data-theme":a.themeStyle}},[t("mescroll-uni",{attrs:{refs:"mescroll"},on:{getData:function(e){arguments[0]=e=a.$handleEvent(e),a.getData.apply(void 0,arguments)}}},[t("template",{attrs:{slot:"list"},slot:"list"},[a.dataList.length?t("v-uni-view",{staticClass:"notice-list"},a._l(a.dataList,(function(e,r){return t("v-uni-view",{key:r,staticClass:"notice-item",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.jumpDetail(e.id)}}},[t("v-uni-view",{staticClass:"title-info"},[t("v-uni-text",{staticClass:"title",class:1==e.is_top&&0==r?"new ns-text-before":""},[a._v(a._s(e.title))]),t("v-uni-text",{staticClass:"release-time"},[a._v(a._s(a.$util.timeStampTurnTime(e.create_time,1)))])],1),t("v-uni-view",{staticClass:"more"},[t("v-uni-text",{staticClass:"detail"},[a._v(a._s(e.info))]),t("v-uni-view",{staticClass:"iconfont iconright"})],1)],1)})),1):t("v-uni-view",{staticClass:"cart-empty"},[t("ns-empty",{attrs:{text:a.$lang("emptyText"),isIndex:!1}})],1),t("loading-cover",{ref:"loadingCover"})],1)],2),t("ns-show-toast")],1)},n=[];t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return n})),t.d(e,"a",(function(){return r}))},"28bc":function(a,e,t){"use strict";var r=t("4f79"),o=t.n(r);o.a},4902:function(a,e,t){var r=t("24fb");e=r(!1),e.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 文字基本颜色 */\r\n/* 文字尺寸 */.ns-font-size-x-sm[data-v-2a817084]{font-size:%?20?%}.ns-font-size-sm[data-v-2a817084]{font-size:%?22?%}.ns-font-size-base[data-v-2a817084]{font-size:%?24?%}.ns-font-size-lg[data-v-2a817084]{font-size:%?28?%}.ns-font-size-x-lg[data-v-2a817084]{font-size:%?32?%}.ns-font-size-xx-lg[data-v-2a817084]{font-size:%?36?%}.ns-font-size-xxx-lg[data-v-2a817084]{font-size:%?40?%}.ns-text-color-black[data-v-2a817084]{color:#333!important}.ns-text-color-gray[data-v-2a817084]{color:#898989!important}.ns-border-color-gray[data-v-2a817084]{border-color:#e7e7e7!important}.ns-bg-color-gray[data-v-2a817084]{background-color:#e5e5e5!important}uni-page-body[data-v-2a817084]{background-color:#f7f7f7}uni-view[data-v-2a817084]{font-size:%?28?%;color:#333}.ns-padding[data-v-2a817084]{padding:%?20?%!important}.ns-padding-top[data-v-2a817084]{padding-top:%?20?%!important}.ns-padding-right[data-v-2a817084]{padding-right:%?20?%!important}.ns-padding-bottom[data-v-2a817084]{padding-bottom:%?20?%!important}.ns-padding-left[data-v-2a817084]{padding-left:%?20?%!important}.ns-margin[data-v-2a817084]{margin:%?20?%!important}.ns-margin-top[data-v-2a817084]{margin-top:%?20?%!important}.ns-margin-right[data-v-2a817084]{margin-right:%?20?%!important}.ns-margin-bottom[data-v-2a817084]{margin-bottom:%?20?%!important}.ns-margin-left[data-v-2a817084]{margin-left:%?20?%!important}.ns-border-radius[data-v-2a817084]{border-radius:4px!important}uni-button[data-v-2a817084]:after{border:none!important}uni-button[data-v-2a817084]::after{border:none!important}.uni-tag--inverted[data-v-2a817084]{border-color:#e7e7e7!important;color:#333!important}.btn-disabled-color[data-v-2a817084]{background:#b7b7b7}.pull-right[data-v-2a817084]{float:right!important}.pull-left[data-v-2a817084]{float:left!important}.clearfix[data-v-2a817084]:before,\r\n.clearfix[data-v-2a817084]:after{content:"";display:block;clear:both}.sku-layer .body-item .number-wrap .number uni-button[data-v-2a817084],\r\n.sku-layer .body-item .number-wrap .number uni-input[data-v-2a817084]{border-color:hsla(0,0%,89.8%,.5)!important;background-color:hsla(0,0%,89.8%,.4)!important}.ns-btn-default-all.gray[data-v-2a817084]{background:#e5e5e5;color:#898989}.ns-btn-default-all.free.gray[data-v-2a817084]{background:#fff;color:#898989;border:%?1?% solid #e7e7e7}.ns-btn-default-mine.gray[data-v-2a817084]{background:#e5e5e5;color:#898989}.ns-btn-default-mine.free.gray[data-v-2a817084]{background:#fff;color:#898989;border:%?1?% solid #e7e7e7}\r\n\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */.ns-text-color[data-v-2a817084]{color:#ff4544!important}.ns-border-color[data-v-2a817084]{border-color:#ff4544!important}.ns-border-color-top[data-v-2a817084]{border-top-color:#ff4544!important}.ns-border-color-bottom[data-v-2a817084]{border-bottom-color:#ff4544!important}.ns-border-color-right[data-v-2a817084]{border-right-color:#ff4544!important}.ns-border-color-left[data-v-2a817084]{border-left-color:#ff4544!important}.ns-bg-color[data-v-2a817084]{background-color:#ff4544!important}.ns-bg-help-color[data-v-2a817084]{background-color:#ffb644!important}uni-button[data-v-2a817084]{margin:0 %?60?%;font-size:%?28?%;border-radius:20px;line-height:2.7}uni-button[type="primary"][data-v-2a817084]{background-color:#ff4544!important}uni-button[type="primary"][plain][data-v-2a817084]{background-color:initial!important;color:#ff4544!important;border-color:#ff4544!important}uni-button[type="primary"][disabled][data-v-2a817084]{background:#e5e5e5!important;color:#898989}uni-button[type="primary"].btn-disabled[data-v-2a817084]{background:#e5e5e5!important;color:#898989!important}uni-button.btn-disabled[data-v-2a817084]{background:#e5e5e5!important;color:#898989!important}uni-button[type="warn"][data-v-2a817084]{background:#fff;border:%?1?% solid #ff4544!important;color:#ff4544}uni-button[type="warn"][plain][data-v-2a817084]{background-color:initial!important;color:#ff4544!important;border-color:#ff4544!important}uni-button[type="warn"][disabled][data-v-2a817084]{border:%?1?% solid #e7e7e7!important;color:#898989}uni-button[type="warn"].btn-disabled[data-v-2a817084]{border:%?1?% solid #e7e7e7!important;color:#898989}uni-button[size="mini"][data-v-2a817084]{margin:0!important}uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked[data-v-2a817084]{color:#ff4544!important}uni-switch .uni-switch-input.uni-switch-input-checked[data-v-2a817084]{background-color:#ff4544!important;border-color:#ff4544!important}uni-radio .uni-radio-input-checked[data-v-2a817084]{background-color:#ff4544!important;border-color:#ff4544!important}uni-slider .uni-slider-track[data-v-2a817084]{background-color:#ff4544!important}.uni-tag--primary[data-v-2a817084]{color:#fff!important;background-color:#ff4544!important;border-color:#ff4544!important}.uni-tag--primary.uni-tag--inverted[data-v-2a817084]{color:#ff4544!important;background-color:#fff!important;border-color:#ff4544!important}.goods-coupon-popup-layer .coupon-body .item[data-v-2a817084]{background-color:#fff!important}.goods-coupon-popup-layer .coupon-body .item uni-view[data-v-2a817084]{color:#ff7877!important}.sku-layer .body-item .sku-list-wrap .items[data-v-2a817084]{background-color:#f5f5f5!important}.sku-layer .body-item .sku-list-wrap .items.selected[data-v-2a817084]{background-color:#fff!important;color:#ff4544!important;border-color:#ff4544!important}.sku-layer .body-item .sku-list-wrap .items.disabled[data-v-2a817084]{color:#898989!important;cursor:not-allowed!important;pointer-events:none!important;opacity:.5!important;box-shadow:none!important;-webkit-filter:grayscale(100%);filter:grayscale(100%)}.goods-detail .goods-discount[data-v-2a817084]{background:rgba(255,69,68,.2)}.goods-detail .goods-discount .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#ff4544,#ff7877)!important;background:linear-gradient(90deg,#ff4544,#ff7877)!important}.goods-detail .seckill-wrap[data-v-2a817084]{background:-webkit-linear-gradient(left,#ff4544,#faa)!important;background:linear-gradient(90deg,#ff4544,#faa)!important}.goods-detail .goods-module-wrap .original-price .seckill-save-price[data-v-2a817084]{background:#fff!important;color:#ff4544!important}.goods-detail .goods-pintuan[data-v-2a817084]{background:rgba(255,69,68,.2)}.goods-detail .goods-pintuan .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#ff4544,#ff7877)!important;background:linear-gradient(90deg,#ff4544,#ff7877)!important}.goods-detail .goods-presale[data-v-2a817084]{background:rgba(255,69,68,.2)}.goods-detail .goods-presale .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#ff4544,#ff7877)!important;background:linear-gradient(90deg,#ff4544,#ff7877)!important}.goods-detail .topic-wrap .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#ff4544,#ff7877)!important;background:linear-gradient(90deg,#ff4544,#ff7877)!important}.goods-detail .goods-module-wrap .original-price .topic-save-price[data-v-2a817084]{background:#fff!important;color:#ff4544!important}.goods-detail .goods-groupbuy[data-v-2a817084]{background:rgba(255,69,68,.2)}.goods-detail .goods-groupbuy .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#ff4544,#ff7877)!important;background:linear-gradient(90deg,#ff4544,#ff7877)!important}.gradual-change[data-v-2a817084]{background:-webkit-linear-gradient(45deg,#ff4544,rgba(255,69,68,.6))!important;background:linear-gradient(45deg,#ff4544,rgba(255,69,68,.6))!important}.ns-btn-default-all[data-v-2a817084]{width:100%;height:%?70?%;background:#ff4544;border-radius:%?70?%;text-align:center;line-height:%?70?%;color:#fff;font-size:%?28?%}.ns-btn-default-all.gray[data-v-2a817084]{background:#e5e5e5;color:#898989}.ns-btn-default-all.free[data-v-2a817084]{width:100%;background:#fff;color:#ff4544;border:%?1?% solid #ff4544;font-size:%?28?%;box-sizing:border-box}.ns-btn-default-all.free.gray[data-v-2a817084]{background:#fff;color:#898989;border:%?1?% solid #e7e7e7}.ns-btn-default-mine[data-v-2a817084]{display:inline-block;height:%?60?%;border-radius:%?60?%;line-height:%?60?%;padding:0 %?30?%;box-sizing:border-box;color:#fff;background:#ff4544}.ns-btn-default-mine.gray[data-v-2a817084]{background:#e5e5e5;color:#898989}.ns-btn-default-mine.free[data-v-2a817084]{background:#fff;color:#ff4544;border:%?1?% solid #ff4544;font-size:%?28?%;box-sizing:border-box}.ns-btn-default-mine.free.gray[data-v-2a817084]{background:#fff;color:#898989;border:%?1?% solid #e7e7e7}.order-box-btn[data-v-2a817084]{display:inline-block;line-height:%?56?%;padding:0 %?30?%;font-size:%?28?%;color:#333;border:%?1?% solid #999;box-sizing:border-box;border-radius:%?60?%;margin-left:%?20?%}.order-box-btn.order-pay[data-v-2a817084]{background:#ff4544;color:#fff;border-color:#fff}.ns-text-before[data-v-2a817084]::after, .ns-text-before[data-v-2a817084]::before{color:#ff4544!important}.ns-bg-before[data-v-2a817084]::after{background:#ff4544!important}.ns-bg-before[data-v-2a817084]::before{background:#ff4544!important}[data-theme="theme-blue"] .ns-text-color[data-v-2a817084]{color:#1786f8!important}[data-theme="theme-blue"] .ns-border-color[data-v-2a817084]{border-color:#1786f8!important}[data-theme="theme-blue"] .ns-border-color-top[data-v-2a817084]{border-top-color:#1786f8!important}[data-theme="theme-blue"] .ns-border-color-bottom[data-v-2a817084]{border-bottom-color:#1786f8!important}[data-theme="theme-blue"] .ns-border-color-right[data-v-2a817084]{border-right-color:#1786f8!important}[data-theme="theme-blue"] .ns-border-color-left[data-v-2a817084]{border-left-color:#1786f8!important}[data-theme="theme-blue"] .ns-bg-color[data-v-2a817084]{background-color:#1786f8!important}[data-theme="theme-blue"] .ns-bg-help-color[data-v-2a817084]{background-color:#ff851f!important}[data-theme="theme-blue"] uni-button[data-v-2a817084]{margin:0 %?60?%;font-size:%?28?%;border-radius:20px;line-height:2.7}[data-theme="theme-blue"] uni-button[type="primary"][data-v-2a817084]{background-color:#1786f8!important}[data-theme="theme-blue"] uni-button[type="primary"][plain][data-v-2a817084]{background-color:initial!important;color:#1786f8!important;border-color:#1786f8!important}[data-theme="theme-blue"] uni-button[type="primary"][disabled][data-v-2a817084]{background:#e5e5e5!important;color:#898989}[data-theme="theme-blue"] uni-button[type="primary"].btn-disabled[data-v-2a817084]{background:#e5e5e5!important;color:#898989!important}[data-theme="theme-blue"] uni-button.btn-disabled[data-v-2a817084]{background:#e5e5e5!important;color:#898989!important}[data-theme="theme-blue"] uni-button[type="warn"][data-v-2a817084]{background:#fff;border:%?1?% solid #1786f8!important;color:#1786f8}[data-theme="theme-blue"] uni-button[type="warn"][plain][data-v-2a817084]{background-color:initial!important;color:#1786f8!important;border-color:#1786f8!important}[data-theme="theme-blue"] uni-button[type="warn"][disabled][data-v-2a817084]{border:%?1?% solid #e7e7e7!important;color:#898989}[data-theme="theme-blue"] uni-button[type="warn"].btn-disabled[data-v-2a817084]{border:%?1?% solid #e7e7e7!important;color:#898989}[data-theme="theme-blue"] uni-button[size="mini"][data-v-2a817084]{margin:0!important}[data-theme="theme-blue"] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked[data-v-2a817084]{color:#1786f8!important}[data-theme="theme-blue"] uni-switch .uni-switch-input.uni-switch-input-checked[data-v-2a817084]{background-color:#1786f8!important;border-color:#1786f8!important}[data-theme="theme-blue"] uni-radio .uni-radio-input-checked[data-v-2a817084]{background-color:#1786f8!important;border-color:#1786f8!important}[data-theme="theme-blue"] uni-slider .uni-slider-track[data-v-2a817084]{background-color:#1786f8!important}[data-theme="theme-blue"] .uni-tag--primary[data-v-2a817084]{color:#fff!important;background-color:#1786f8!important;border-color:#1786f8!important}[data-theme="theme-blue"] .uni-tag--primary.uni-tag--inverted[data-v-2a817084]{color:#1786f8!important;background-color:#fff!important;border-color:#1786f8!important}[data-theme="theme-blue"] .goods-coupon-popup-layer .coupon-body .item[data-v-2a817084]{background-color:#f6faff!important}[data-theme="theme-blue"] .goods-coupon-popup-layer .coupon-body .item uni-view[data-v-2a817084]{color:#49a0f9!important}[data-theme="theme-blue"] .sku-layer .body-item .sku-list-wrap .items[data-v-2a817084]{background-color:#f5f5f5!important}[data-theme="theme-blue"] .sku-layer .body-item .sku-list-wrap .items.selected[data-v-2a817084]{background-color:#f6faff!important;color:#1786f8!important;border-color:#1786f8!important}[data-theme="theme-blue"] .sku-layer .body-item .sku-list-wrap .items.disabled[data-v-2a817084]{color:#898989!important;cursor:not-allowed!important;pointer-events:none!important;opacity:.5!important;box-shadow:none!important;-webkit-filter:grayscale(100%);filter:grayscale(100%)}[data-theme="theme-blue"] .goods-detail .goods-discount[data-v-2a817084]{background:rgba(255,69,68,.4)}[data-theme="theme-blue"] .goods-detail .goods-discount .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#1786f8,#49a0f9)!important;background:linear-gradient(90deg,#1786f8,#49a0f9)!important}[data-theme="theme-blue"] .goods-detail .seckill-wrap[data-v-2a817084]{background:-webkit-linear-gradient(left,#1786f8,#7abafb)!important;background:linear-gradient(90deg,#1786f8,#7abafb)!important}[data-theme="theme-blue"] .goods-detail .goods-module-wrap .original-price .seckill-save-price[data-v-2a817084]{background:#ddedfe!important;color:#1786f8!important}[data-theme="theme-blue"] .goods-detail .goods-pintuan[data-v-2a817084]{background:rgba(255,69,68,.4)}[data-theme="theme-blue"] .goods-detail .goods-pintuan .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#1786f8,#49a0f9)!important;background:linear-gradient(90deg,#1786f8,#49a0f9)!important}[data-theme="theme-blue"] .goods-detail .goods-presale[data-v-2a817084]{background:rgba(255,69,68,.4)}[data-theme="theme-blue"] .goods-detail .goods-presale .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#1786f8,#49a0f9)!important;background:linear-gradient(90deg,#1786f8,#49a0f9)!important}[data-theme="theme-blue"] .goods-detail .topic-wrap .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#1786f8,#ff7877)!important;background:linear-gradient(90deg,#1786f8,#ff7877)!important}[data-theme="theme-blue"] .goods-detail .goods-module-wrap .original-price .topic-save-price[data-v-2a817084]{background:#ddedfe!important;color:#1786f8!important}[data-theme="theme-blue"] .goods-detail .goods-groupbuy[data-v-2a817084]{background:-webkit-linear-gradient(top,#fef391,#fbe253);background:linear-gradient(180deg,#fef391,#fbe253)}[data-theme="theme-blue"] .goods-detail .goods-groupbuy .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#1786f8,#49a0f9)!important;background:linear-gradient(90deg,#1786f8,#49a0f9)!important}[data-theme="theme-blue"] .gradual-change[data-v-2a817084]{background:-webkit-linear-gradient(45deg,#1786f8,rgba(23,134,248,.6))!important;background:linear-gradient(45deg,#1786f8,rgba(23,134,248,.6))!important}[data-theme="theme-blue"] .ns-btn-default-all[data-v-2a817084]{width:100%;height:%?70?%;background:#1786f8;border-radius:%?70?%;text-align:center;line-height:%?70?%;color:#fff;font-size:%?28?%}[data-theme="theme-blue"] .ns-btn-default-all.gray[data-v-2a817084]{background:#e5e5e5;color:#898989}[data-theme="theme-blue"] .ns-btn-default-all.free[data-v-2a817084]{width:100%;background:#fff;color:#1786f8;border:%?1?% solid #1786f8;font-size:%?28?%;box-sizing:border-box}[data-theme="theme-blue"] .ns-btn-default-all.free.gray[data-v-2a817084]{background:#fff;color:#898989;border:%?1?% solid #e7e7e7}[data-theme="theme-blue"] .ns-btn-default-mine[data-v-2a817084]{display:inline-block;height:%?60?%;border-radius:%?60?%;line-height:%?60?%;padding:0 %?30?%;box-sizing:border-box;color:#fff;background:#1786f8}[data-theme="theme-blue"] .ns-btn-default-mine.gray[data-v-2a817084]{background:#e5e5e5;color:#898989}[data-theme="theme-blue"] .ns-btn-default-mine.free[data-v-2a817084]{background:#fff;color:#1786f8;border:%?1?% solid #1786f8;font-size:%?28?%;box-sizing:border-box}[data-theme="theme-blue"] .ns-btn-default-mine.free.gray[data-v-2a817084]{background:#fff;color:#898989;border:%?1?% solid #e7e7e7}[data-theme="theme-blue"] .order-box-btn[data-v-2a817084]{display:inline-block;line-height:%?56?%;padding:0 %?30?%;font-size:%?28?%;color:#333;border:%?1?% solid #999;box-sizing:border-box;border-radius:%?60?%;margin-left:%?20?%}[data-theme="theme-blue"] .order-box-btn.order-pay[data-v-2a817084]{background:#1786f8;color:#fff;border-color:#fff}[data-theme="theme-blue"] .ns-text-before[data-v-2a817084]::after, [data-theme="theme-blue"] .ns-text-before[data-v-2a817084]::before{color:#1786f8!important}[data-theme="theme-blue"] .ns-bg-before[data-v-2a817084]::after{background:#1786f8!important}[data-theme="theme-blue"] .ns-bg-before[data-v-2a817084]::before{background:#1786f8!important}[data-theme="theme-green"] .ns-text-color[data-v-2a817084]{color:#31bb6d!important}[data-theme="theme-green"] .ns-border-color[data-v-2a817084]{border-color:#31bb6d!important}[data-theme="theme-green"] .ns-border-color-top[data-v-2a817084]{border-top-color:#31bb6d!important}[data-theme="theme-green"] .ns-border-color-bottom[data-v-2a817084]{border-bottom-color:#31bb6d!important}[data-theme="theme-green"] .ns-border-color-right[data-v-2a817084]{border-right-color:#31bb6d!important}[data-theme="theme-green"] .ns-border-color-left[data-v-2a817084]{border-left-color:#31bb6d!important}[data-theme="theme-green"] .ns-bg-color[data-v-2a817084]{background-color:#31bb6d!important}[data-theme="theme-green"] .ns-bg-help-color[data-v-2a817084]{background-color:#393a39!important}[data-theme="theme-green"] uni-button[data-v-2a817084]{margin:0 %?60?%;font-size:%?28?%;border-radius:20px;line-height:2.7}[data-theme="theme-green"] uni-button[type="primary"][data-v-2a817084]{background-color:#31bb6d!important}[data-theme="theme-green"] uni-button[type="primary"][plain][data-v-2a817084]{background-color:initial!important;color:#31bb6d!important;border-color:#31bb6d!important}[data-theme="theme-green"] uni-button[type="primary"][disabled][data-v-2a817084]{background:#e5e5e5!important;color:#898989}[data-theme="theme-green"] uni-button[type="primary"].btn-disabled[data-v-2a817084]{background:#e5e5e5!important;color:#898989!important}[data-theme="theme-green"] uni-button.btn-disabled[data-v-2a817084]{background:#e5e5e5!important;color:#898989!important}[data-theme="theme-green"] uni-button[type="warn"][data-v-2a817084]{background:#fff;border:%?1?% solid #31bb6d!important;color:#31bb6d}[data-theme="theme-green"] uni-button[type="warn"][plain][data-v-2a817084]{background-color:initial!important;color:#31bb6d!important;border-color:#31bb6d!important}[data-theme="theme-green"] uni-button[type="warn"][disabled][data-v-2a817084]{border:%?1?% solid #e7e7e7!important;color:#898989}[data-theme="theme-green"] uni-button[type="warn"].btn-disabled[data-v-2a817084]{border:%?1?% solid #e7e7e7!important;color:#898989}[data-theme="theme-green"] uni-button[size="mini"][data-v-2a817084]{margin:0!important}[data-theme="theme-green"] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked[data-v-2a817084]{color:#31bb6d!important}[data-theme="theme-green"] uni-switch .uni-switch-input.uni-switch-input-checked[data-v-2a817084]{background-color:#31bb6d!important;border-color:#31bb6d!important}[data-theme="theme-green"] uni-radio .uni-radio-input-checked[data-v-2a817084]{background-color:#31bb6d!important;border-color:#31bb6d!important}[data-theme="theme-green"] uni-slider .uni-slider-track[data-v-2a817084]{background-color:#31bb6d!important}[data-theme="theme-green"] .uni-tag--primary[data-v-2a817084]{color:#fff!important;background-color:#31bb6d!important;border-color:#31bb6d!important}[data-theme="theme-green"] .uni-tag--primary.uni-tag--inverted[data-v-2a817084]{color:#31bb6d!important;background-color:#fff!important;border-color:#31bb6d!important}[data-theme="theme-green"] .goods-coupon-popup-layer .coupon-body .item[data-v-2a817084]{background-color:#dcf6e7!important}[data-theme="theme-green"] .goods-coupon-popup-layer .coupon-body .item uni-view[data-v-2a817084]{color:#4ed187!important}[data-theme="theme-green"] .sku-layer .body-item .sku-list-wrap .items[data-v-2a817084]{background-color:#f5f5f5!important}[data-theme="theme-green"] .sku-layer .body-item .sku-list-wrap .items.selected[data-v-2a817084]{background-color:#dcf6e7!important;color:#31bb6d!important;border-color:#31bb6d!important}[data-theme="theme-green"] .sku-layer .body-item .sku-list-wrap .items.disabled[data-v-2a817084]{color:#898989!important;cursor:not-allowed!important;pointer-events:none!important;opacity:.5!important;box-shadow:none!important;-webkit-filter:grayscale(100%);filter:grayscale(100%)}[data-theme="theme-green"] .goods-detail .goods-discount[data-v-2a817084]{background:rgba(49,187,109,.4)}[data-theme="theme-green"] .goods-detail .goods-discount .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#31bb6d,#4ed187)!important;background:linear-gradient(90deg,#31bb6d,#4ed187)!important}[data-theme="theme-green"] .goods-detail .seckill-wrap[data-v-2a817084]{background:-webkit-linear-gradient(left,#31bb6d,#77dba2)!important;background:linear-gradient(90deg,#31bb6d,#77dba2)!important}[data-theme="theme-green"] .goods-detail .goods-module-wrap .original-price .seckill-save-price[data-v-2a817084]{background:#c8f0d9!important;color:#31bb6d!important}[data-theme="theme-green"] .goods-detail .goods-pintuan[data-v-2a817084]{background:rgba(49,187,109,.4)}[data-theme="theme-green"] .goods-detail .goods-pintuan .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#31bb6d,#4ed187)!important;background:linear-gradient(90deg,#31bb6d,#4ed187)!important}[data-theme="theme-green"] .goods-detail .goods-presale[data-v-2a817084]{background:rgba(49,187,109,.4)}[data-theme="theme-green"] .goods-detail .goods-presale .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#31bb6d,#4ed187)!important;background:linear-gradient(90deg,#31bb6d,#4ed187)!important}[data-theme="theme-green"] .goods-detail .topic-wrap .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#31bb6d,#ff7877)!important;background:linear-gradient(90deg,#31bb6d,#ff7877)!important}[data-theme="theme-green"] .goods-detail .goods-module-wrap .original-price .topic-save-price[data-v-2a817084]{background:#c8f0d9!important;color:#31bb6d!important}[data-theme="theme-green"] .coupon-body .item-btn[data-v-2a817084]{background:rgba(49,187,109,.8)}[data-theme="theme-green"] .coupon-info .coupon-content_item[data-v-2a817084]::before{border:1px solid #31bb6d;border-right:none}[data-theme="theme-green"] .coupon-content_item[data-v-2a817084]::after{border:1px solid #31bb6d;border-left:none}[data-theme="theme-green"] .goods-detail .goods-groupbuy[data-v-2a817084]{background:rgba(49,187,109,.4)}[data-theme="theme-green"] .goods-detail .goods-groupbuy .price-info[data-v-2a817084]{background:-webkit-linear-gradient(left,#31bb6d,#4ed187)!important;background:linear-gradient(90deg,#31bb6d,#4ed187)!important}[data-theme="theme-green"] .gradual-change[data-v-2a817084]{background:-webkit-linear-gradient(45deg,#31bb6d,rgba(49,187,109,.6))!important;background:linear-gradient(45deg,#31bb6d,rgba(49,187,109,.6))!important}[data-theme="theme-green"] .ns-btn-default-all[data-v-2a817084]{width:100%;height:%?70?%;background:#31bb6d;border-radius:%?70?%;text-align:center;line-height:%?70?%;color:#fff;font-size:%?28?%}[data-theme="theme-green"] .ns-btn-default-all.gray[data-v-2a817084]{background:#e5e5e5;color:#898989}[data-theme="theme-green"] .ns-btn-default-all.free[data-v-2a817084]{width:100%;background:#fff;color:#31bb6d;border:%?1?% solid #31bb6d;font-size:%?28?%;box-sizing:border-box}[data-theme="theme-green"] .ns-btn-default-all.free.gray[data-v-2a817084]{background:#fff;color:#898989;border:%?1?% solid #e7e7e7}[data-theme="theme-green"] .ns-btn-default-mine[data-v-2a817084]{display:inline-block;height:%?60?%;border-radius:%?60?%;line-height:%?60?%;padding:0 %?30?%;box-sizing:border-box;color:#fff;background:#31bb6d}[data-theme="theme-green"] .ns-btn-default-mine.gray[data-v-2a817084]{background:#e5e5e5;color:#898989}[data-theme="theme-green"] .ns-btn-default-mine.free[data-v-2a817084]{background:#fff;color:#31bb6d;border:%?1?% solid #31bb6d;font-size:%?28?%;box-sizing:border-box}[data-theme="theme-green"] .ns-btn-default-mine.free.gray[data-v-2a817084]{background:#fff;color:#898989;border:%?1?% solid #e7e7e7}[data-theme="theme-green"] .order-box-btn[data-v-2a817084]{display:inline-block;line-height:%?56?%;padding:0 %?30?%;font-size:%?28?%;color:#333;border:%?1?% solid #999;box-sizing:border-box;border-radius:%?60?%;margin-left:%?20?%}[data-theme="theme-green"] .order-box-btn.order-pay[data-v-2a817084]{background:#31bb6d;color:#fff;border-color:#fff}[data-theme="theme-green"] .ns-text-before[data-v-2a817084]::after, [data-theme="theme-green"] .ns-text-before[data-v-2a817084]::before{color:#31bb6d!important}[data-theme="theme-green"] .ns-bg-before[data-v-2a817084]::after{background:#31bb6d!important}[data-theme="theme-green"] .ns-bg-before[data-v-2a817084]::before{background:#31bb6d!important}.ns-gradient-base-help-left[data-theme="theme-default"][data-v-2a817084]{background:-webkit-linear-gradient(right,#ff4544,#ffb644);background:linear-gradient(270deg,#ff4544,#ffb644)}.ns-gradient-base-help-left[data-theme="theme-green"][data-v-2a817084]{background:-webkit-linear-gradient(right,#31bb6d,#393a39);background:linear-gradient(270deg,#31bb6d,#393a39)}.ns-gradient-base-help-left[data-theme="theme-blue"][data-v-2a817084]{background:-webkit-linear-gradient(right,#1786f8,#ff851f);background:linear-gradient(270deg,#1786f8,#ff851f)}.ns-gradient-otherpages-fenxiao-apply-apply-bg[data-theme="theme-default"][data-v-2a817084]{background:-webkit-linear-gradient(right,#ff4544,#faa);background:linear-gradient(270deg,#ff4544,#faa)}.ns-gradient-otherpages-fenxiao-apply-apply-bg[data-theme="theme-green"][data-v-2a817084]{background:-webkit-linear-gradient(right,#31bb6d,#77dba2);background:linear-gradient(270deg,#31bb6d,#77dba2)}.ns-gradient-otherpages-fenxiao-apply-apply-bg[data-theme="theme-blue"][data-v-2a817084]{background:-webkit-linear-gradient(left,#61adfa,#1786f8);background:linear-gradient(90deg,#61adfa,#1786f8)}.ns-gradient-otherpages-member-widthdrawal-withdrawal[data-theme="theme-default"][data-v-2a817084]{background:-webkit-linear-gradient(right,#ff4544,#faa);background:linear-gradient(270deg,#ff4544,#faa)}.ns-gradient-otherpages-member-widthdrawal-withdrawal[data-theme="theme-green"][data-v-2a817084]{background:-webkit-linear-gradient(right,#31bb6d,#77dba2);background:linear-gradient(270deg,#31bb6d,#77dba2)}.ns-gradient-otherpages-member-widthdrawal-withdrawal[data-theme="theme-blue"][data-v-2a817084]{background:-webkit-linear-gradient(right,#1786f8,#7abafb);background:linear-gradient(270deg,#1786f8,#7abafb)}.ns-gradient-otherpages-member-balance-balance-rechange[data-theme="theme-default"][data-v-2a817084]{background:-webkit-linear-gradient(top,#ff4544,#fd7e4b);background:linear-gradient(180deg,#ff4544,#fd7e4b)}.ns-gradient-otherpages-member-balance-balance-rechange[data-theme="theme-green"][data-v-2a817084]{background:-webkit-linear-gradient(top,#31bb6d,#fd7e4b);background:linear-gradient(180deg,#31bb6d,#fd7e4b)}.ns-gradient-otherpages-member-balance-balance-rechange[data-theme="theme-blue"][data-v-2a817084]{background:-webkit-linear-gradient(top,#1786f8,#fd7e4b);background:linear-gradient(180deg,#1786f8,#fd7e4b)}.ns-gradient-pages-member-index-index[data-theme="theme-default"][data-v-2a817084]{background:-webkit-linear-gradient(right,#ff7877,#ff403f)!important;background:linear-gradient(270deg,#ff7877,#ff403f)!important}.ns-gradient-pages-member-index-index[data-theme="theme-green"][data-v-2a817084]{background:-webkit-linear-gradient(right,#4ed187,#30b76b)!important;background:linear-gradient(270deg,#4ed187,#30b76b)!important}.ns-gradient-pages-member-index-index[data-theme="theme-blue"][data-v-2a817084]{background:-webkit-linear-gradient(right,#49a0f9,#1283f8)!important;background:linear-gradient(270deg,#49a0f9,#1283f8)!important}.ns-gradient-promotionpages-pintuan-share-share[data-theme="theme-default"][data-v-2a817084]{background-image:-webkit-linear-gradient(left,#ffa2a2,#ff4544);background-image:linear-gradient(90deg,#ffa2a2,#ff4544)}.ns-gradient-promotionpages-pintuan-share-share[data-theme="theme-green"][data-v-2a817084]{background-image:-webkit-linear-gradient(left,#98ddb6,#31bb6d);background-image:linear-gradient(90deg,#98ddb6,#31bb6d)}.ns-gradient-promotionpages-pintuan-share-share[data-theme="theme-blue"][data-v-2a817084]{background-image:-webkit-linear-gradient(left,#8bc3fc,#1786f8);background-image:linear-gradient(90deg,#8bc3fc,#1786f8)}.ns-gradient-promotionpages-topics-payment[data-theme="theme-default"][data-v-2a817084]{background:-webkit-linear-gradient(left,#ffa2a2,#ff4544)!important;background:linear-gradient(90deg,#ffa2a2,#ff4544)!important}.ns-gradient-promotionpages-topics-payment[data-theme="theme-green"][data-v-2a817084]{background:-webkit-linear-gradient(left,#98ddb6,#31bb6d)!important;background:linear-gradient(90deg,#98ddb6,#31bb6d)!important}.ns-gradient-promotionpages-topics-payment[data-theme="theme-blue"][data-v-2a817084]{background:-webkit-linear-gradient(left,#8bc3fc,#1786f8)!important;background:linear-gradient(90deg,#8bc3fc,#1786f8)!important}.ns-gradient-promotionpages-pintuan-payment[data-theme="theme-default"][data-v-2a817084]{background:rgba(255,69,68,.08)!important}.ns-gradient-promotionpages-pintuan-payment[data-theme="theme-green"][data-v-2a817084]{background:rgba(49,187,109,.08)!important}.ns-gradient-promotionpages-pintuan-payment[data-theme="theme-blue"][data-v-2a817084]{background:rgba(23,134,248,.08)!important}.ns-gradient-diy-goods-list[data-theme="theme-default"][data-v-2a817084]{border-color:rgba(255,69,68,.2)!important}.ns-gradient-diy-goods-list[data-theme="theme-green"][data-v-2a817084]{border-color:rgba(49,187,109,.2)!important}.ns-gradient-diy-goods-list[data-theme="theme-blue"][data-v-2a817084]{border-color:rgba(23,134,248,.2)!important}.ns-gradient-detail-coupons-right-border[data-theme="theme-default"][data-v-2a817084]{border-right-color:rgba(255,69,68,.2)!important}.ns-gradient-detail-coupons-right-border[data-theme="theme-green"][data-v-2a817084]{border-right-color:rgba(49,187,109,.2)!important}.ns-gradient-detail-coupons-right-border[data-theme="theme-blue"][data-v-2a817084]{border-right-color:rgba(23,134,248,.2)!important}.ns-gradient-detail-coupons[data-theme="theme-default"][data-v-2a817084]{background-color:rgba(255,69,68,.8)!important}.ns-gradient-detail-coupons[data-theme="theme-green"][data-v-2a817084]{background-color:rgba(49,187,109,.8)!important}.ns-gradient-detail-coupons[data-theme="theme-blue"][data-v-2a817084]{background-color:rgba(23,134,248,.8)!important}.ns-pages-goods-category-category[data-theme="theme-default"][data-v-2a817084]{background-image:-webkit-linear-gradient(315deg,#ff4544,#ff7444)!important;background-image:linear-gradient(135deg,#ff4544,#ff7444)!important}.ns-pages-goods-category-category[data-theme="theme-green"][data-v-2a817084]{background-image:-webkit-linear-gradient(315deg,#31bb6d,#ff7444)!important;background-image:linear-gradient(135deg,#31bb6d,#ff7444)!important}.ns-pages-goods-category-category[data-theme="theme-blue"][data-v-2a817084]{background-image:-webkit-linear-gradient(315deg,#1786f8,#ff7444)!important;background-image:linear-gradient(135deg,#1786f8,#ff7444)!important}.ns-gradient-pintuan-border-color[data-theme="theme-default"][data-v-2a817084]{border-color:rgba(255,69,68,.2)!important}.ns-gradient-pintuan-border-color[data-theme="theme-green"][data-v-2a817084]{border-color:rgba(49,187,109,.2)!important}.ns-gradient-pintuan-border-color[data-theme="theme-blue"][data-v-2a817084]{border-color:rgba(23,134,248,.2)!important}\n[data-v-2a817084] .fixed{position:relative;top:0}.cart-empty[data-v-2a817084]{position:relative;top:-50%;padding-top:154px}.notice-list .notice-item[data-v-2a817084]{margin:%?20?%;background:#fff;border-radius:%?10?%;padding:%?32?% %?34?% %?23?% %?34?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:1}.notice-list .notice-item .title-info[data-v-2a817084]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f3f3f3;padding-bottom:%?15?%;overflow:hidden}.notice-list .notice-item .title-info .title[data-v-2a817084]{-webkit-box-flex:4;-webkit-flex:4;flex:4;color:#000;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.notice-list .notice-item .title-info .title.new[data-v-2a817084]::after{font-family:iconfont;content:"\\e600";font-size:%?43?%;line-height:1;margin-left:%?14?%;vertical-align:middle}.notice-list .notice-item .title-info .release-time[data-v-2a817084]{-webkit-box-flex:3;-webkit-flex:3;flex:3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-left:%?20?%;color:#898989;text-align:right;font-size:%?24?%}.notice-list .notice-item .content[data-v-2a817084]{margin-top:%?10?%;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;color:#898989;font-size:%?22?%;padding-bottom:%?30?%}.notice-list .notice-item .more[data-v-2a817084]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-top:%?24?%;font-size:%?24?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.notice-list .notice-item .more .detail[data-v-2a817084]{width:%?505?%;color:#838383;font-size:%?24?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}body.?%PAGE?%[data-v-2a817084]{background-color:#f7f7f7}',""]),a.exports=e},"4f79":function(a,e,t){var r=t("4902");"string"===typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);var o=t("4f06").default;o("34e911e4",r,!0,{sourceMap:!1,shadowMode:!1})},"75b5":function(a,e,t){"use strict";t.r(e);var r=t("1781"),o=t("dac0");for(var n in o)"default"!==n&&function(a){t.d(e,a,(function(){return o[a]}))}(n);t("28bc");var d,i=t("f0c5"),b=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"2a817084",null,!1,r["a"],d);e["default"]=b.exports},"8e31":function(a,e,t){"use strict";var r=t("ee27");t("99af"),t("4160"),t("ac1f"),t("5319"),t("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(t("4c22")),n=r(t("f505")),d={data:function(){return{dataList:[]}},components:{nsShowToast:n.default},onLoad:function(){},onShow:function(){this.$langConfig.refresh()},mixins:[o.default],methods:{getData:function(a){var e=this;this.$api.sendRequest({url:"/api/notice/page",data:{page_size:a.size,page:a.num},success:function(t){var r=[],o=t.message;0==t.code&&t.data?r=t.data.list:e.$util.showToast({title:o}),a.endSuccess(r.length),1==a.num&&(e.dataList=[]),e.dataList=e.dataList.concat(r),e.dataList.forEach((function(a){a.info=a.content.replace(/<[^>]+>/g,"")})),e.$refs.loadingCover&&e.$refs.loadingCover.hide()},fail:function(t){a.endErr(),e.$refs.loadingCover&&e.$refs.loadingCover.hide()}})},jumpDetail:function(a){this.$util.redirectTo("/otherpages/notice/detail/detail?notice_id="+a)}},onShareAppMessage:function(a){var e="公告",t="/otherpages/notice/list/list";return{title:e,path:t,success:function(a){},fail:function(a){}}}};e.default=d},dac0:function(a,e,t){"use strict";t.r(e);var r=t("8e31"),o=t.n(r);for(var n in r)"default"!==n&&function(a){t.d(e,a,(function(){return r[a]}))}(n);e["default"]=o.a}}]);