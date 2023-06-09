<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 杭州牛之云科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com
 * =========================================================
 */

namespace app\event;

use app\model\system\H5;

/**
 * api配置变更
 */
class ApiConfigChange
{

    public function handle()
    {
        $h5 = new H5();
        $h5->refresh();
    }

}