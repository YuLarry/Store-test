<?php

/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 上海牛之云网络科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com
 * =========================================================
 */

namespace app\index\controller;

use app\Controller;
use app\model\web\Config as ConfigModel;

class Index extends Controller
{
    /**
     * 域名默认跳转  测试提交
     *
     * @return void
     */
    public function index()
    {
        $config_model = new ConfigModel();
        $domain = $config_model->getDomainJumpConfig();
        $jump_type = $domain['data']['value']['jump_type'];
        // 用户前台
        if ($jump_type == 1) {
            if($this->isMobile()){
                $domain_name_h5 = $config_model->geth5DomainName();
                $url = $domain_name_h5['data']['value']['domain_name_h5'];
            }else {
                // 检测插件是否存在
                if(addon_is_exit('pc') == 1){
                    $domain_name_pc = $config_model->getPcDomainName();
                    $url = $domain_name_pc['data']['value']['domain_name_pc'];
                }else {
                    $domain_name_h5 = $config_model->geth5DomainName();
                    $url = $domain_name_h5['data']['value']['domain_name_h5'];
                }
            }
        }else {
            // 商家端
            $url = __ROOT__ . '/shop';
        }
        $this->redirect($url);
    }

    public function isMobile()
    {
        // 如果有HTTP_X_WAP_PROFILE则一定是移动设备
        if (isset($_SERVER['HTTP_X_WAP_PROFILE'])) {
            return true;
        }

        // 如果via信息含有wap则一定是移动设备,部分服务商会屏蔽该信息

        if (isset($_SERVER['HTTP_VIA'])) {
            // 找不到为flase,否则为true
            return stristr($_SERVER['HTTP_VIA'], "wap") ? true : false;
        }

        // 脑残法，判断手机发送的客户端标志,兼容性有待提高
        if (isset($_SERVER['HTTP_USER_AGENT'])) {
            $clientkeywords = array(
                'nokia',
                'sony',
                'ericsson',
                'mot',
                'samsung',
                'htc',
                'sgh',
                'lg',
                'sharp',
                'sie-',
                'philips',
                'panasonic',
                'alcatel',
                'lenovo',
                'iphone',
                'ipod',
                'blackberry',
                'meizu',
                'android',
                'netfront',
                'symbian',
                'ucweb',
                'windowsce',
                'palm',
                'operamini',
                'operamobi',
                'openwave',
                'nexusone',
                'cldc',
                'midp',
                'wap',
                'mobile'
            );

            // 从HTTP_USER_AGENT中查找手机浏览器的关键字
            if (preg_match("/(" . implode('|', $clientkeywords) . ")/i", strtolower($_SERVER['HTTP_USER_AGENT']))) {
                return true;
            }
        }

        // 协议法，因为有可能不准确，放到最后判断
        if (isset($_SERVER['HTTP_ACCEPT'])) {
            // 如果只支持wml并且不支持html那一定是移动设备
            // 如果支持wml和html但是wml在html之前则是移动设备
            if ((strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') !== false) && (strpos($_SERVER['HTTP_ACCEPT'], 'text/html') === false || (strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') < strpos($_SERVER['HTTP_ACCEPT'], 'text/html')))) {
                return true;
            }
        }
        return false;
    }
}