<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 杭州牛之云科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com
 * =========================================================
 */

namespace addon\weapp\model;

use app\model\BaseModel;
use app\model\system\Api;
use EasyWeChat\Factory;
use think\facade\Cache;
use addon\weapp\model\Config as WeappConfigModel;
use addon\wxoplatform\model\Config as WxOplatformConfigModel;
use app\model\web\Config as WebConfig;

/**
 * 微信小程序配置
 */
class Weapp extends BaseModel
{
    private $app;//微信模型

    //小程序类型
    public $service_type = array(
        0 => "小程序",
    );

    //小程序认证类型
    public $verify_type = array(
        -1 => "未认证",
        0  => "微信认证",
    );

    //business_info 说明
    public $business_type = array(
        'open_store' => "是否开通微信门店功能",
        'open_scan'  => "是否开通微信扫商品功能",
        'open_pay'   => "是否开通微信支付功能",
        'open_card'  => "是否开通微信卡券功能",
        'open_shake' => "是否开通微信摇一摇功能",
    );

    // 站点ID
    private $site_id;

    public function __construct($site_id = 0)
    {
        $this->site_id = $site_id;
        //微信小程序配置
        $weapp_config_model = new WeappConfigModel();
        $weapp_config       = $weapp_config_model->getWeappConfig($site_id);
        $weapp_config       = $weapp_config["data"]["value"];

        if (isset($weapp_config['is_authopen']) && addon_is_exit('wxoplatform')) {
            $plateform_config_model = new WxOplatformConfigModel();
            $plateform_config       = $plateform_config_model->getOplatformConfig();
            $plateform_config       = $plateform_config["data"]["value"];

            $config        = [
                'app_id'  => $plateform_config["appid"] ?? '',
                'secret'  => $plateform_config["secret"] ?? '',
                'token'   => $plateform_config["token"] ?? '',
                'aes_key' => $plateform_config["aes_key"] ?? '',
                'log'     => [
                    'level'      => 'debug',
                    'permission' => 0777,
                    'file'       => 'runtime/log/wechat/oplatform.logs',
                ],
            ];
            $open_platform = Factory::openPlatform($config);
            $this->app     = $open_platform->miniProgram($weapp_config['authorizer_appid'], $weapp_config['authorizer_refresh_token']);
        } else {
            $config    = [
                'app_id'        => $weapp_config["appid"] ?? '',
                'secret'        => $weapp_config["appsecret"] ?? '',
                'response_type' => 'array',
                'log'           => [
                    'level'      => 'debug',
                    'permission' => 0777,
                    'file'       => 'runtime/log/wechat/easywechat.logs',
                ],
            ];
            $this->app = Factory::miniProgram($config);
        }
    }

    /**
     * TODO
     * 根据 jsCode 获取用户 session 信息
     * @param $param
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     */
    public function authCodeToOpenid($param)
    {
        try {
            $result = $this->app->auth->session($param['code']);
            if (isset($result['errcode']) && $result['errcode'] != 0) {
                return $this->handleError($result['errcode'], $result['errmsg']);
            } else {
                Cache::set('weapp_' . $result['openid'], $result);
                unset($result['session_key']);
                return $this->success($result);
            }
        } catch (\Exception $e) {
            if (property_exists($e, 'formattedResponse')) {
                return $this->handleError($e->formattedResponse['errcode'], $e->formattedResponse['errmsg']);
            }
            return $this->error('', $e->getMessage());
        }
    }

    /**
     * 生成二维码
     * @param unknown $param
     */
    public function createQrcode($param)
    {
        try {
            $checkpath_result = $this->checkPath($param['qrcode_path']);
            if ($checkpath_result["code"] != 0) return $checkpath_result;

            // scene:场景值最大32个可见字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~
            $scene = '';
            if (!empty($param['data'])) {
                foreach ($param['data'] as $key => $value) {
                    //防止参数过长，source_member用m代替
                    if($key == 'source_member'){
                        $key = 'm';
                    }
                    if ($scene == '') $scene .= $key . '-' . $value;
                    else $scene .= '&' . $key . '-' . $value;
                }
            }
            $response = $this->app->app_code->getUnlimit($scene, [
                'page'  => substr($param['page'], 1),
                'width' => isset($param['width']) ? $param['width'] : 120
            ]);
            if ($response instanceof \EasyWeChat\Kernel\Http\StreamResponse) {
                $filename = $param['qrcode_path'] . '/';
                $filename .= $response->saveAs($param['qrcode_path'], $param['qrcode_name'] . '_' . $param['app_type'] . '.png');
                return $this->success(['path' => $filename]);
            } else {
                return $this->handleError($response['errcode'], $response['errmsg']);
            }
        } catch (\Exception $e) {
            if (property_exists($e, 'formattedResponse')) {
                return $this->handleError($e->formattedResponse['errcode'], $e->formattedResponse['errmsg']);
            }
            return $this->error('', $e->getMessage());
        }
    }

    /**
     * 校验目录是否可写
     * @param unknown $path
     * @return multitype:number unknown |multitype:unknown
     */
    private function checkPath($path)
    {
        if (is_dir($path) || mkdir($path, intval('0755', 8), true)) {
            return $this->success();
        }
        return $this->error('', "directory {$path} creation failed");
    }
    /*************************************************************  数据统计与分析 start **************************************************************/
    /**
     * 访问日趋势
     * @param $from  格式 20170313
     * @param $to 格式 20170313
     */
    public function dailyVisitTrend($from, $to)
    {
        try {
            $result = $this->app->data_cube->dailyVisitTrend($from, $to);
            if (isset($result['errcode']) && $result['errcode'] != 0) {
                return $this->error([], $result["errmsg"]);
            }
            return $this->success($result["list"]);
        } catch (\Exception $e) {
            return $this->error([], $e->getMessage());
        }

    }

    /**
     * 访问周趋势
     * @param $from
     * @param $to
     * @return array|\multitype
     */
    public function weeklyVisitTrend($from, $to)
    {
        try {
            $result = $this->app->data_cube->weeklyVisitTrend($from, $to);
            if (isset($result['errcode']) && $result['errcode'] != 0) {
                return $this->error([], $result["errmsg"]);
            }
            return $this->success($result["list"]);
        } catch (\Exception $e) {
            return $this->error([], $e->getMessage());
        }
    }

    /**
     * 访问月趋势
     * @param $from
     * @param $to
     * @return array|\multitype
     */
    public function monthlyVisitTrend($from, $to)
    {
        try {
            $result = $this->app->data_cube->monthlyVisitTrend($from, $to);
            if (isset($result['errcode']) && $result['errcode'] != 0) {
                return $this->error([], $result["errmsg"]);
            }
            return $this->success($result["list"]);
        } catch (\Exception $e) {
            return $this->error([], $e->getMessage());
        }
    }

    /**
     * 访问分布
     * @param $from
     * @param $to
     */
    public function visitDistribution($from, $to)
    {
        try {
            $result = $this->app->data_cube->visitDistribution($from, $to);
            if (isset($result['errcode']) && $result['errcode'] != 0) {
                return $this->error($result, $result["errmsg"]);
            }
            return $this->success($result["list"]);
        } catch (\Exception $e) {
            return $this->error([], $e->getMessage());
        }
    }

    /**
     * 访问页面
     * @param $from
     * @param $to
     */
    public function visitPage($from, $to)
    {
        try {
            $result = $this->app->data_cube->visitPage($from, $to);
            if (isset($result['errcode']) && $result['errcode'] != 0) {
                return $this->error([], $result["errmsg"]);
            }
            return $this->success($result["list"]);
        } catch (\Exception $e) {
            return $this->error([], $e->getMessage());
        }
    }
    /*************************************************************  数据统计与分析 end **************************************************************/

    /**
     * 下载小程序代码包
     * @param $site_id
     */
    public function download($site_id)
    {
        $source_file_path = $this->createTempPackage($site_id, 'public/weapp');
        $file_arr         = getFileMap($source_file_path);

        if (!empty($file_arr)) {
            $zipname = 'upload/weapp_' . $site_id . '_' . date('Ymd') . '.zip';

            $zip = new \ZipArchive();
            $res = $zip->open($zipname, \ZipArchive::CREATE);
            if ($res === TRUE) {
                foreach ($file_arr as $file_path => $file_name) {
                    if (is_dir($file_path)) {
                        $file_path = str_replace($source_file_path . '/', '', $file_path);
                        $zip->addEmptyDir($file_path);
                    } else {
                        $zip_path = str_replace($source_file_path . '/', '', $file_path);
                        $zip->addFile($file_path, $zip_path);
                    }
                }
                $zip->close();

                header("Content-Type: application/zip");
                header("Content-Transfer-Encoding: Binary");
                header("Content-Length: " . filesize($zipname));
                header("Content-Disposition: attachment; filename=\"" . basename($zipname) . "\"");
                readfile($zipname);
                @unlink($zipname);
                deleteDir($source_file_path);
            }
        }
    }

    /**
     * 创建临时包
     * @param $site_id
     * @param $package_path
     * @param string $to_path
     * @return array
     */
    private function createTempPackage($site_id, $package_path, $to_path = '')
    {
        if (is_dir($package_path)) {
            $package = scandir($package_path);

            if (empty($to_path)) {
                $to_path = 'upload/temp/' . $site_id . '/';
                dir_mkdir($to_path);
            }

            foreach ($package as $path) {
                $temp_path = $package_path . '/' . $path;
                if (is_dir($temp_path)) {
                    if ($path == '.' || $path == '..') {//判断是否为系统隐藏的文件.和..  如果是则跳过否则就继续往下走，防止无限循环再这里。
                        continue;
                    }
                    dir_mkdir($to_path . $path);
                    $this->createTempPackage($site_id, $temp_path, $to_path . $path . '/');
                } else {
                    if (file_exists($temp_path)) {
                        copy($temp_path, $to_path . $path);
                        if (stristr($temp_path, 'common/vendor.js')) {
                            $content = file_get_contents($to_path . $path);
                            $content = $this->paramReplace($site_id, $content);
                            file_put_contents($to_path . $path, $content);
                        }
                    }
                }
            }
            return $to_path;
        }
    }

    /**
     * 参数替换
     * @param $site_id
     * @param $string
     * @return null|string|string[]
     */
    private function paramReplace($site_id, $string)
    {
        $api_model  = new Api();
        $api_config = $api_model->getApiConfig();
        $api_config = $api_config['data'];

        $web_config_model = new WebConfig();
        $web_config = $web_config_model ->getMapConfig();
        $web_config = $web_config['data']['value'];

        $socket_url = (strstr(ROOT_URL, 'https://') === false ? str_replace('http', 'ws', ROOT_URL) : str_replace('https', 'wss', ROOT_URL)) . '/wss';

        $patterns     = [
            '/\{\{\$baseUrl\}\}/',
            '/\{\{\$imgDomain\}\}/',
            '/\{\{\$h5Domain\}\}/',
            '/\{\{\$mpKey\}\}/',
            '/\{\{\$apiSecurity\}\}/',
            '/\{\{\$publicKey\}\}/',
            '/\{\{\$webSocket\}\}/'
        ];
        $replacements = [
            ROOT_URL,
            ROOT_URL,
            ROOT_URL . '/h5',
            $web_config['tencent_map_key'] ?? '',
            $api_config['is_use'] ?? 0,
            $api_config['value']['public_key'] ?? '',
            $socket_url
        ];
        $string       = preg_replace($patterns, $replacements, $string);
        return $string;
    }

    /**
     * 消息解密
     * @param array $param
     */
    public function decryptData($param = [])
    {
        try {
            $cache       = Cache::get('weapp_' . $param['weapp_openid']);
            $session_key = $cache['session_key'] ?? '';
            $result      = $this->app->encryptor->decryptData($session_key, $param['iv'], $param['encryptedData']);
            if (isset($result['errcode']) && $result['errcode'] != 0) {
                return $this->handleError($result['errcode'], $result['errmsg']);
            }
            return $this->success($result);
        } catch (\Exception $e) {
            if (property_exists($e, 'formattedResponse')) {
                return $this->handleError($e->formattedResponse['errcode'], $e->formattedResponse['errmsg']);
            }
            return $this->error([], $e->getMessage());
        }
    }

    /**
     * 获取用户手机号
     * @param $code
     * @return array
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function getUserPhoneNumber($code){
        try {
            $result      = $this->app->auth->phoneNumber($code);
            if (isset($result['errcode']) && $result['errcode'] != 0) {
                return $this->handleError($result['errcode'], $result['errmsg']);
            }
            return $this->success($result['phone_info']);
        } catch (\Exception $e) {
            if (property_exists($e, 'formattedResponse')) {
                return $this->handleError($e->formattedResponse['errcode'], $e->formattedResponse['errmsg']);
            }
            return $this->error([], $e->getMessage());
        }
    }

    /**
     * 获取订阅消息template_id
     * @param array $param
     */
    public function getTemplateId(array $param){
        try {
            $result = $this->app->subscribe_message->addTemplate($param['tid'], $param['kidList'], $param['sceneDesc']);
            return $result;
        } catch (\Exception $e) {
            return ['errcode' => -1, 'errmsg' => $e->getMessage()];
        }
    }

    /**
     * 发送订阅消息
     * @param array $param
     * @return array
     */
    public function sendTemplateMessage(array $param){
        $result = $this->app->subscribe_message->send([
            'template_id' => $param['template_id'],// 模板id
            'touser'      => $param['openid'], // openid
            'page' => $param['page'], // 点击模板卡片后的跳转页面 支持带参数
            'data'        => $param['data'] // 模板变量
        ]);

        if (isset($result['errcode']) && $result['errcode'] != 0) {
            return $this->error($result, $result["errmsg"]);
        }
        return $this->success($result);
    }

    /**
     * 消息推送
     */
    public function relateWeixin(){
        $server  = $this->app->server;
        $message = $server->getMessage();
        if (isset($message['MsgType'])) {
            switch ($message['MsgType']) {
                case 'event':
                    $this->app->server->push(function ($res) {
                        // 商品审核结果通知
                        if ($res['Event'] == 'open_product_spu_audit' && addon_is_exit('shopcomponent', $this->site_id)) {
                            model('shopcompoent_goods')->update([
                                'edit_status' => $res['OpenProductSpuAudit']['status'],
                                'reject_reason' => !empty($res['OpenProductSpuAudit']['reject_reason']) ?: '',
                                'audit_time' => time()
                            ], [
                                ['out_product_id', '=', $res['OpenProductSpuAudit']['out_product_id'] ]
                            ]);
                        }
                        // 类目审核结果通知
                        if ($res['Event'] == 'open_product_category_audit' && addon_is_exit('shopcomponent', $this->site_id)) {
                            model('shopcompoent_category_audit')->update([
                                'status' => $res['QualificationAuditResult']['status'],
                                'reject_reason' => !empty($res['QualificationAuditResult']['reject_reason']) ?: '',
                                'audit_time' => time()
                            ], [
                                ['audit_id', '=', $res['QualificationAuditResult']['audit_id'] ]
                            ]);
                        }

                        // 视频号支付订单回调
                        if ($res['Event'] == 'open_product_order_pay' && addon_is_exit('shopcomponent', $this->site_id)) {
                            event("shopcomponentNotify", $res);
                        }
                    });
                break;
            }
        }
        $response = $this->app->server->serve();
        return $response->send();
    }

    /**
     * 检查场景值是否在支付校验范围内
     * @param $scene
     * @return array
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function sceneCheck($scene){
        try {
            $result = $this->app->mini_store->checkScene($scene);
            if (isset($result['errcode']) && $result['errcode'] == 0) {
                return $this->success($result['is_matched']);
            } else {
                return $this->error('', $result['errmsg']);
            }
        } catch (\Exception $e) {
            return $this->error([], $e->getMessage());
        }
    }

    public function createOrder($order_info){
        try {
            $result = $this->app->mini_store->addOrder($order_info);
            if (isset($result['errcode']) && $result['errcode'] == 0) {
                return $this->success($result['is_matched']);
            } else {
                return $this->error('', $result['errmsg']);
            }
        } catch (\Exception $e) {
            return $this->error([], $e->getMessage());
        }
    }

    /**
     * 处理错误信息
     * @param $errcode
     * @param  string  $message
     * @return array
     */
    public function handleError($errcode, $message = ''){
        $error = require 'addon/weapp/config/weapp_error.php';
        return $this->error([], $error[ $errcode ] ?? $message);
    }
}
