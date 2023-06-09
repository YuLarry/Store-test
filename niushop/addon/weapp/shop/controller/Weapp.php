<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 杭州牛之云科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com
 * =========================================================
 */

namespace addon\weapp\shop\controller;

use addon\weapp\model\Config as ConfigModel;
use app\model\share\WeappShareBase as ShareModel;
use app\model\system\Upgrade;
use app\shop\controller\BaseShop;
use addon\weapp\model\Weapp as WeappModel;

/**
 * 微信小程序功能设置
 */
class Weapp extends BaseShop
{
    protected $replace = [];    //视图输出字符串内容替换    相当于配置文件中的'view_replace_str'

    public function __construct()
    {
        parent::__construct();
        $this->replace = [
            'WEAPP_CSS' => __ROOT__ . '/addon/weapp/shop/view/public/css',
            'WEAPP_JS' => __ROOT__ . '/addon/weapp/shop/view/public/js',
            'WEAPP_IMG' => __ROOT__ . '/addon/weapp/shop/view/public/img',
            'WEAPP_SVG' => __ROOT__ . '/addon/weapp/shop/view/public/svg',
        ];
    }

    /**
     * 功能设置
     */
    public function setting()
    {
        $config_model = new ConfigModel();
        $config_result = $config_model->getWeappConfig($this->site_id);
        $config = $config_result[ 'data' ][ "value" ];

        $is_new_version = 0;
        // 获取站点小程序版本信息
        $version_info = $config_model->getWeappVersion($this->site_id);
        $version_info = $version_info[ 'data' ][ 'value' ];
        $currrent_version_info = config('info');
        if (!isset($version_info[ 'version' ]) || ( isset($version_info[ 'version' ]) && $version_info[ 'version' ] != $currrent_version_info[ 'version_no' ] )) {
            $is_new_version = 1;
        }
        $this->assign('is_new_version', $is_new_version);

        $weapp_menu = event('WeappMenu', [ 'site_id' => $this->site_id ]);
        $this->assign('weapp_menu', $weapp_menu);

        return $this->fetch('weapp/setting', [], $this->replace);
    }

    /**
     * 公众号配置
     */
    public function config()
    {

        $weapp_model = new ConfigModel();
        if (request()->isAjax()) {
            $weapp_name = input('weapp_name', '');
            $weapp_original = input('weapp_original', '');
            $appid = input('appid', '');
            $appsecret = input('appsecret', '');
            $token = input('token', 'TOKEN');
            $encodingaeskey = input('encodingaeskey', '');
            $is_use = input('is_use', 0);
            $qrcode = input('qrcode', '');
            $data = array (
                "appid" => $appid,
                "appsecret" => $appsecret,
                "token" => $token,
                "weapp_name" => $weapp_name,
                "weapp_original" => $weapp_original,
                "encodingaeskey" => $encodingaeskey,
                'qrcode' => $qrcode
            );
            $res = $weapp_model->setWeAppConfig($data, $is_use, $this->site_id);
            return $res;
        } else {
            $weapp_config_result = $weapp_model->getWeAppConfig($this->site_id);
            $config_info = $weapp_config_result[ 'data' ][ "value" ];
            $this->assign("config_info", $config_info);
            // 获取当前域名
            $url = __ROOT__;
            // 去除链接的http://头部
            $url_top = str_replace("https://", "", $url);
            $url_top = str_replace("http://", "", $url_top);
            // 去除链接的尾部/?s=
            $url_top = str_replace('/?s=', '', $url_top);
            $call_back_url = addon_url("weapp://api/auth/relateweixin");
            $this->assign("url", $url_top);
            $this->assign("call_back_url", $call_back_url);
            return $this->fetch('weapp/config', [], $this->replace);
        }
    }

    /**
     * 小程序包管理
     *
     */
    public function package()
    {
        $config = new ConfigModel();
        $weapp_config = $config->getWeappConfig($this->site_id);
        $weapp_config = $weapp_config[ 'data' ][ 'value' ];
        if (empty($weapp_config) || empty($weapp_config[ 'appid' ])) $this->error('小程序尚未配置，请先配置您的小程序！', addon_url('weapp://shop/weapp/config'));
        $this->assign('config', $weapp_config);

        $is_new_version = 0;
        // 获取站点小程序版本信息
        $version_info = $config->getWeappVersion($this->site_id);
        $version_info = $version_info[ 'data' ][ 'value' ];
        $currrent_version_info = config('info');
        if (!isset($version_info[ 'version' ]) || ( isset($version_info[ 'version' ]) && $version_info[ 'version' ] != $currrent_version_info[ 'version_no' ] )) {
            $is_new_version = 1;
        }
        $this->assign('is_new_version', $is_new_version);

        // 检测授权
        $upgrade_model = new Upgrade();
        $auth_info = $upgrade_model->authInfo();
        $this->assign('is_auth', ( $auth_info[ 'code' ] == 0 ));

        return $this->fetch('weapp/package', [], $this->replace);
    }

    /**
     * 小程序包管理
     */
    public function deploy()
    {
        $config = new ConfigModel();
        $weapp_config = $config->getWeappConfig($this->site_id);
        $weapp_config = $weapp_config[ 'data' ][ 'value' ];
        $this->assign('config', $weapp_config);

        $is_new_version = 0;
        // 获取站点小程序版本信息
        $version_info = $config->getWeappVersion($this->site_id);
        $version_info = $version_info[ 'data' ][ 'value' ];
        $currrent_version_info = config('info');
        if (!isset($version_info[ 'version' ]) || ( isset($version_info[ 'version' ]) && $version_info[ 'version' ] != $currrent_version_info[ 'version_no' ] )) {
            $is_new_version = 1;
        }
        $this->assign('is_new_version', $is_new_version);

        // 检测授权
        $upgrade_model = new Upgrade();
        $auth_info = $upgrade_model->authInfo();
        $this->assign('is_auth', ( $auth_info[ 'code' ] == 0 ));

        return $this->fetch('addon/weapp/shop/view/weapp/deploy.html', [], $this->replace);
    }

    /**
     * 小程序包下载
     */
    public function download()
    {
        if (strstr(ROOT_URL, 'niuteam.cn') === false) {
            $weapp = new WeappModel();
            $weapp->download($this->site_id);

            $config = new ConfigModel();
            $version_info = config('info');
            $config->setWeappVersion([ 'version' => $version_info[ 'version_no' ] ], 1, $this->site_id);
        }
    }

    /**
     * 下载uniapp源码
     */
    public function downloadUniapp()
    {
        if (strstr(ROOT_URL, 'niuteam.cn') === false) {
            $app_info = config('info');

            $upgrade_model = new Upgrade();
            $res = $upgrade_model->downloadUniapp($app_info[ 'version_no' ]);
            if ($res[ 'code' ] == 0) {
                $filename = "upload/{$app_info['version_no']}_uniapp.zip";
                $res = file_put_contents($filename, base64_decode($res[ 'data' ]));

                header("Content-Type: application/zip");
                header("Content-BirthdayGift-Encoding: Binary");
                header("Content-Length: " . filesize($filename));
                header("Content-Disposition: attachment; filename=\"" . basename($filename) . "\"");
                readfile($filename);
                @unlink($filename);
            } else {
                $this->error($res[ 'message' ]);
            }
        }
    }

    /**
     * 分享
     */
    public function shareBack()
    {
        $config_model = new ConfigModel();
        if (request()->isAjax()) {
            $key = input('key', 'index');
            $value = [
                'title' => input('title', ''),
                'path' => input('path', '')
            ];
            $res = $config_model->setShareConfig($this->site_id, $this->app_module, $key, $value);
            return $res;
        }
        $scene = [
            [
                'key' => 'index',
                'title' => '首页'
            ]
        ];
        $this->assign('scene', $scene);

        $config = $config_model->getShareConfig($this->site_id, $this->app_module);
        $this->assign('config', $config[ 'data' ][ 'value' ]);
        $this->assign('shop_info', $this->shop_info);

        return $this->fetch('weapp/share_back', [], $this->replace);
    }

    /**
     * 分享
     */
    public function share()
    {
        if (request()->isAjax()) {
            $data_json = input('data_json', '');
            $data = json_decode($data_json, true);
            $share_model = new ShareModel();
            return $share_model->setShareConfig($this->site_id, $data);
        } else {
            $share_config = event('WeappShareConfig', [ 'site_id' => $this->site_id ]);
            $config_list = [];
            foreach ($share_config as $data) {
                foreach ($data[ 'data' ] as $val) {
                    $config_list[] = $val;
                }
            }
            $this->assign('config_list', $config_list);
            return $this->fetch('weapp/share', [], $this->replace);
        }
    }
}