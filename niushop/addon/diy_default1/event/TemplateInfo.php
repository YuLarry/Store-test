<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 杭州牛之云科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址=> https=>//www.niushop.com
 * =========================================================
 */


namespace addon\diy_default1\event;

/**
 * 自定义模板信息
 */
class TemplateInfo
{
    /**
     * 模板数据
     * @param $params
     * @return array
     */
    public function handle($params)
    {
        if ($params[ 'name' ] == '' || $params[ 'name' ] == 'official_default_round') {
            $use_template = new UseTemplate();
            $info = [
                'title' => '官方模板一',
                'name' => 'official_default_round',
                'cover' => __ROOT__ . '/addon/diy_default1/shop/view/public/img/cover.png',
                'preview' => __ROOT__ . '/addon/diy_default1/shop/view/public/img/preview.png',
                'desc' => '该模板以简约为主，搭配新型元素使得商城简约而不失时尚，在首页尽可能的将商城的优惠力度最大程度体现出来，可以优惠券形式展现，广告位形式展现，图文导航展现、公告形式展示等等，您想要的体现形式应有尽有，适合大部分商城进行运营。',
                'page' => $use_template->getIndexPage(), // 设置要编辑第一个的页面
                'price' => 0,
            ];
            return $info;
        }
    }

}