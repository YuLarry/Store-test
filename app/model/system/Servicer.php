<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 山西牛酷信息科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com
 * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和使用。
 * 任何企业和个人不允许对程序代码以任何形式任何目的再发布。
 * =========================================================
 */

namespace app\model\system;


use app\model\BaseModel;
use app\model\system\Config as ConfigModel;

/**
 * 客服配置
 */
class Servicer extends BaseModel
{
    /**
     * 设置客服配置
     * array $data
     */
    public function setServicerConfig($data)
    {
        $config_model = new ConfigModel();
        $res = $config_model->setConfig($data, '客服配置', 1, [['site_id', '=', 0], ['app_module', '=', 'shop'], ['config_key', '=', 'SRRVICER_ROOT_CONFIG']]);
        return $res;
    }

    /**
     * 获取客服配置
     */
    public function getServicerConfig()
    {
        $config_model = new ConfigModel();
        $res = $config_model->getConfig([['site_id', '=', 0], ['app_module', '=', 'shop'], ['config_key', '=', 'SRRVICER_ROOT_CONFIG']]);
        return $res;
    }
}