<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 上海牛之云网络科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com

 * =========================================================
 */

namespace addon\coupon\event;

use addon\coupon\model\share\WeappShare as ShareModel;


/**
 * 获取分享数据
 */
class WeappShareData
{
    public function handle($param)
    {
        $share_model = new ShareModel();
        return $share_model->getShareData($param);
    }

}