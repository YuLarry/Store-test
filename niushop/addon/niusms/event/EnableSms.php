<?php
/**
 * NiuShop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 杭州牛之云科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com
 */

namespace addon\niusms\event;

use addon\niusms\model\Config;

/**
 * 查询启用的短信插件
 */
class EnableSms
{
    /**
     * 短信发送方式方式及配置
     */
    public function handle($param)
    {
        $info = array (
            "sms_type" => "niusms",
            "sms_type_name" => "牛云短信",
            "shop_url" => "niusms://shop/sms/index",
            "desc" => "专业化系统化短信，与商城系统紧密相连，不需要专门配置短信模板即可使用。"
        );

        $config_model = new Config();
        $config = $config_model->getSmsConfig($param[ 'site_id' ]);
        if ($config[ 'data' ][ 'is_use' ] == 1) {
            return $info;
        }
    }
}