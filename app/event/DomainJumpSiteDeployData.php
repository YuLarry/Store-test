<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 上海牛之云网络科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com

 * =========================================================
 */

namespace app\event;

use app\shop\controller\Config;

/**
 * 域名跳转网站部署配置
 */
class DomainJumpSiteDeployData
{
    public function handle($data)
    {
        $servicer_model = new Config();
        $data = $servicer_model->domainJumpConfig();
        return [
            'type' => 'domain_jump',
            'html' => $data,
        ];
    }

}