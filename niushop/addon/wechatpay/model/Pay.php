<?php
// +---------------------------------------------------------------------+
// | NiuCloud | [ WE CAN DO IT JUST NiuCloud ]                |
// +---------------------------------------------------------------------+
// | Copy right 2019-2029 www.niucloud.com                          |
// +---------------------------------------------------------------------+
// | Author | NiuCloud <niucloud@outlook.com>                       |
// +---------------------------------------------------------------------+
// | Repository | https://github.com/niucloud/framework.git          |
// +---------------------------------------------------------------------+

namespace addon\wechatpay\model;

use addon\shopcomponent\model\Weapp;
use app\model\member\Member;
use app\model\order\OrderMessage;
use app\model\system\Cron;
use app\model\upload\Upload;
use EasyWeChat\Factory;
use app\model\system\Pay as PayCommon;
use app\model\BaseModel;
use addon\weapp\model\Config as WeappConfig;
use addon\wechat\model\Config as WechatConfig;
use app\model\system\Pay as PayModel;
use think\facade\Cache;

/**
 * 微信支付配置
 * 版本 1.0.4
 */
class Pay extends BaseModel
{
    private $app;//微信模型
    private $is_weapp = 0;
    private $config = [];

    public function __construct($is_weapp = 0, $site_id)
    {
        $this->is_weapp = $is_weapp;
        //微信支付配置
        $config_model = new Config();
        $config_result = $config_model->getPayConfig($site_id);
        $config = $config_result["data"];
        if (!empty($config)) {
            $config_info = $config["value"];
        }
        $app_id = "";
        if($is_weapp == 0){
            $wechat_config_model = new WechatConfig();
            $wechat_config_result = $wechat_config_model->getWechatConfig($site_id);
            $wechat_config = $wechat_config_result["data"];
            if(empty($wechat_config['value']))
            {
                $weapp_config_model = new WeappConfig();
                $weapp_config_result = $weapp_config_model->getWeappConfig($site_id);
                $weapp_config = $weapp_config_result["data"];
                $app_id = $weapp_config["value"]["appid"];
            }else{
                $app_id = $wechat_config["value"]["appid"];
            }

        }else{
            $weapp_config_model = new WeappConfig();
            $weapp_config_result = $weapp_config_model->getWeappConfig($site_id);
            $weapp_config = $weapp_config_result["data"];
            $app_id = $weapp_config["value"]["appid"];
        }

        $this->config = [
            'app_id' => $app_id,        //应用id
            'mch_id' => $config_info["mch_id"] ?? '',       //商户号
            'key' => $config_info["pay_signkey"] ?? '',          // API 密钥
            // 如需使用敏感接口（如退款、发送红包等）需要配置 API 证书路径(登录商户平台下载 API 证书)
            'cert_path' => realpath($config_info["apiclient_cert"]) ?? '', // apiclient_cert.pem XXX: 绝对路径！！！！
            'key_path' => realpath($config_info["apiclient_key"]) ?? '',   // apiclient_key.pem XXX: 绝对路径！！！！
            'notify_url' => '',// 你也可以在下单时单独设置来想覆盖它
            // 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名
            'response_type' => 'array',
            /**
             * 日志配置
             *
             * level: 日志级别, 可选为：debug/info/notice/warning/error/critical/alert/emergency
             * permission：日志文件权限(可选)，默认为null（若为null值,monolog会取0644）
             * file：日志文件位置(绝对路径!!!)，要求可写权限
             */
            'log' => [
                'level' => 'debug',
                'permission' => 0777,
                'file' => 'runtime/log/wechat/easywechat.logs',
            ],
            'sandbox' => false, // 设置为 false 或注释则关闭沙箱模式
        ];
//        $this->app = Factory::officialAccount($config);
//        $response = $this->app->server->serve();
        // 将响应输出
//        $response->send();exit; // Laravel 里请使用：return $response;
    }

    /**
     * 生成支付
     * @param $param
     */
    public function pay($param)
    {

        ///绑定商户数据
        $pay_model = new PayModel();
        $pay_model->bindMchPay($param["out_trade_no"], ["app_id" => $this->config["app_id"]]);

        $this->app = Factory::payment($this->config);
        $openid = "";
        //获取用户的open_id
        $member_model = new Member();
        switch ($param["trade_type"]) {
            case 'JSAPI' :
                if ($this->is_weapp == 1) {
                    $member_info_result = $member_model->getMemberInfo([["member_id", "=", $param["member_id"]]], "weapp_openid");
                    $member_info = $member_info_result["data"];
                    $openid = $member_info["weapp_openid"];
                } else {
                    $member_info_result = $member_model->getMemberInfo([["member_id", "=", $param["member_id"]]], "wx_openid");
                    $member_info = $member_info_result["data"];
                    $openid = $member_info["wx_openid"];
                }
                break;
            case 'NATIVE' :
                break;
            case 'MWEB' :
                break;
            case 'APP' :
                break;
        }
        $data = array(
            'body' => str_sub($param["pay_body"], 15),
            'out_trade_no' => $param["out_trade_no"],
            'total_fee' => $param["pay_money"] * 100,
            'notify_url' => $param["notify_url"], // 支付结果通知网址，如果不设置则会使用配置里的默认地址
            'trade_type' => $param["trade_type"], // 请对应换成你的支付方式对应的值类型
            'openid' => $openid,
        );
        $result = $this->app->order->unify($data);
        //调用支付失败
        if ($result["return_code"] == 'FAIL') {
            return $this->error([], $result["return_msg"]);
        }
        if ($result["result_code"] == 'FAIL') {
            return $this->error([], $result["err_code_des"]);
        }

        $is_matched = $param['is_matched'] ?? 0;

        switch ($param["trade_type"]) {
            case 'JSAPI' ://微信支付 或小程序支付
                if ($this->is_weapp == 0) {
                    $jssdk = $this->app->jssdk;
                    $config = $jssdk->sdkConfig($result['prepay_id'], false);
                    $return = array(
                        "type" => "jsapi",
                        "data" => $config
                    );
                } else {
                    $jssdk = $this->app->jssdk;
                    $config = $jssdk->bridgeConfig($result['prepay_id'], false);
                    if ($is_matched) $config['orderInfo'] = $this->getOrderInfo($param['out_trade_no'], $openid, $result['prepay_id'], $param['scene']);
                    $return = array(
                        "type" => "jsapi",
                        "data" => $config
                    );
                }
                break;
            case 'APPLET' ://微信支付 或小程序支付
                $jssdk = $this->app->jssdk;
                $config = $jssdk->bridgeConfig($result['prepay_id'], false);
                $return = array(
                    "type" => "jsapi",
                    "data" => $config
                );
                break;
            case 'NATIVE' :
                $code_url = $result['code_url'];
                $upload_model = new Upload($param['site_id']);
                $qrcode_result = $upload_model->qrcode($code_url);
                $qrcode = $qrcode_result['data'] ?? '';
                $return = array(
                    "type" => "qrcode",
                    "qrcode" => $qrcode
                );
                break;
            case 'MWEB' ://H5支付
                $mweb_url = $result['mweb_url'];
                $return = array(
                    "type" => "url",
                    "url" => $mweb_url
                );
                break;
            case 'APP' :
                $jssdk = $this->app->jssdk;
                $config = $jssdk->appConfig($result['prepay_id']);
                $return = array(
                    "type" => "app",
                    "data" => $config
                );
                break;
        }
        $scene = [ 1175, 1176, 1177, 1191, 1195 ];
        if(in_array($param['scene'], $scene) && $this->is_weapp){
            $weapp_model = new Weapp($param['site_id']);
//
            $return['data']['orderInfo']['create_time'] = date("Y-m-d H:i:s",$return['data']['orderInfo']['create_time']);
            $return['data']['orderInfo']['fund_type'] = 1;
            $return['data']['orderInfo']['expire_time'] = time() + 3600;

            $product_infos = $return['data']['orderInfo']['order_detail']['product_infos'];
            foreach ($product_infos as $key => $val){
                $product_infos[$key]['sale_price'] = $val['sale_price'];
                $product_infos[$key]['sku_real_price'] = $val['sale_price'];
            }
            $return['data']['orderInfo']['order_detail']['product_infos'] = $product_infos;

            $return['data']['orderInfo']['order_detail']['price_info']['discounted_price'] = 0;
            $return['data']['orderInfo']['order_detail']['price_info']['additional_price'] = 0;

            $res = $weapp_model->createOrder($return['data']['orderInfo']);

            if($res['code'] >= 0){
                $member_info_result = $member_model->getMemberInfo([["member_id", "=", $param["member_id"]]], "weapp_openid");
                $member_info = $member_info_result["data"];

                $order_params = [
                    "order_id" => $res['data']['data']['order_id'],
                    "out_order_id" => $res['data']['data']['out_order_id'],
                    "openid" => $member_info["weapp_openid"]
                ];
                $config = $weapp_model->getPaymentParams($order_params);
                $return = array(
                    "type" => "jsapi",
                    "data" => $config['data']['payment_params']
                );
            }
        }

        return $this->success($return);
    }

    /**
     * 支付异步通知
     * @param $param
     * @return mixed
     */
    public function payNotify()
    {
        $this->app = Factory::payment($this->config);
        $response = $this->app->handlePaidNotify(function ($message, $fail) {
            // 使用通知里的 "微信支付订单号" 或者 "商户订单号" 去自己的数据库找到订单

            $pay_common = new PayCommon();
//            if (!empty($pay_info)) {
//                // 如果订单不存在 或者 订单已经支付过了
//                return true; // 告诉微信，我已经处理完了，订单没找到，别再通知我了
//            }
            ///////////// <- 建议在这里调用微信的【订单查询】接口查一下该笔订单的情况，确认是已经支付 /////////////
            if ($message['return_code'] === 'SUCCESS') { // return_code 表示通信状态，不代表支付状态
                if ($message['result_code'] === 'SUCCESS') {// 用户是否支付成功
                    //定义支付失败
                    $pay_common->onlinePay($message['out_trade_no'], "wechatpay", $message["transaction_id"], "wechatpay");
                } elseif ($message['result_code'] === 'FAIL') {// 用户支付失败
                    //定义支付失败(更新订单支付失败)

                }
            } else {
                return $fail('通信失败，请稍后再通知我');
            }
            return true; // 返回处理完成
        });
//        $response->send();
//         return $response;
    }

    /**
     * 关闭支付
     * @param $param
     */
    public function close($param)
    {
        $pay_info = $param;
        $this->config["app_id"] = $pay_info["mch_info"];//替换为商户自己的appid
        $this->app = Factory::payment($this->config);
        $result = $this->app->order->close($param["out_trade_no"]);
        //调用支付失败
        if ($result["return_code"] == 'FAIL') {
            return $this->error([], $result["return_msg"]);
        }
        if ($result["result_code"] == 'FAIL') {
            return $this->error([], $result["err_code_des"]);
        }

        return $this->success();
    }

    /**
     * 微信原路退款
     * @param $param
     */
    public function refund($param)
    {
        $pay_info = $param["pay_info"];
        $this->config["app_id"] = $pay_info["mch_info"];//替换为商户自己的appid
        $this->app = Factory::payment($this->config);
        $refund_no = $param["refund_no"];
        $total_fee = round($pay_info["pay_money"] * 100);
        $refund_fee = round($param["refund_fee"] * 100);
        $desc_data = array();

//        $desc_data["refund_desc"] = $param["refund_reason"];// 商家退款原因 暂时不考虑
        if (!empty($pay_info["trade_no"])) {
            //根据微信订单号退款
            // 参数分别为：微信订单号、商户退款单号、订单金额、退款金额、其他参数
            $result = $this->app->refund->byTransactionId($pay_info["trade_no"], $refund_no, $total_fee, $refund_fee, $desc_data);
        } else {
            $result = $this->app->refund->byOutTradeNumber($pay_info["out_trade_no"], $refund_no, $total_fee, $refund_fee, $desc_data);
        }
        //调用支付失败
        if ($result["return_code"] == 'FAIL') {
            return $this->error([], $result["return_msg"]);
        }
        if ($result["result_code"] == 'FAIL') {
            return $this->error([], $result["err_code_des"]);
        }

        return $this->success();

    }

    /**
     * 微信转账到零钱
     * @param array $param
     */
    public function transfer(array $param)
    {
        try {
            $config_model = new Config();
            $config_result = $config_model->getPayConfig($param['site_id']);
            if ($config_result['code'] < 0) return $config_result;
            $config = $config_result['data']['value'];
            if (empty($config)) return $this->error([], '平台未配置微信支付');
            if (!$config['transfer_status']) return $this->error([], '平台未启用微信转账');

            if (isset($config['transfer_type']) && $config['transfer_type'] == 'v3') {
                $param['appid'] = $this->config['app_id'];
                $param['config'] = $config;
                return $this->transferV3($param);
            } else {
                return $this->transferV2($param);
            }
        } catch (\Exception $e) {
            return $this->error([], $e->getMessage());
        }
    }

    /**
     * v2转账接口
     * @param  array  $param
     * @return array
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidArgumentException
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidConfigException
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function transferV2(array $param){
        $this->app = Factory::payment($this->config);
        $data = [
            'partner_trade_no' => $param['out_trade_no'], // 商户订单号，需保持唯一性(只能是字母或者数字，不能包含有符号)
            'openid' => $param['account_number'],
            'check_name' => 'FORCE_CHECK', // NO_CHECK：不校验真实姓名, FORCE_CHECK：强校验真实姓名
            're_user_name' => $param['real_name'], // 如果 check_name 设置为FORCE_CHECK，则必填用户真实姓名
            'amount' => $param['amount'] * 100, // 转账金额
            'desc' => $param['desc']
        ];
        $res = $this->app->transfer->toBalance($data);
        if ($res['return_code'] == 'SUCCESS') {
            if ($res['result_code'] == 'SUCCESS') {
                return $this->success([
                    'out_trade_no' => $res['partner_trade_no'], // 商户交易号
                    'payment_no' => $res['payment_no'], // 微信付款单号
                    'payment_time' => $res['payment_time'] // 付款成功时间
                ]);
            } else {
                return $this->error([], $res['err_code_des']);
            }
        } else {
            return $this->error([], $res['return_msg']);
        }
    }

    /**
     * v3转账接口
     * @param  array  $param
     */
    public function transferV3(array $param)
    {
        $app = new WechatPay($param['config']);
        $data = [
            'appid' => $param['appid'],
            'out_batch_no' => $param['out_trade_no'],
            'batch_name' => '客户提现转账',
            'batch_remark' => '客户提现转账提现交易号'.$param['out_trade_no'],
            'total_amount' => $param['amount'] * 100,
            'total_num' => 1,
            'transfer_detail_list' => [
                [
                    'out_detail_no' => $param['out_trade_no'],
                    'transfer_amount' => $param['amount'] * 100,
                    'transfer_remark' => $param['desc'],
                    'openid' => $param['account_number'],
                    'user_name' => $app->encryptor($param['real_name'])
                ]
            ]
        ];
        $result = $app->transfer($data);
        if ($result['code'] == 0) {
            (new Cron())->addCron(1, 0, "查询转账结果", "TransferResult", (time() + 10), $param['id']);
        }
        return $result;
    }

    /**
     * 获取支付所需orderinfo
     * @param $out_trade_no
     * @param $openid
     * @param $prepay_id
     * @return array
     */
    private function getOrderInfo($out_trade_no, $openid, $prepay_id, $scene = 0){
        $order_info = model('order')->getInfo([ ['out_trade_no', '=', $out_trade_no] ], 'site_id,create_time,order_id,order_type,member_id,order_money,delivery_money,name,full_address,mobile,delivery_store_info,delivery_store_name');
        $data = [
            'create_time' => $order_info['create_time'],
            'out_order_id' => $order_info['order_id'],
            'openid' => $openid,
            'path' => (new OrderMessage())->handleUrl($order_info['order_type'], $order_info['order_id']),
            'out_user_id' => $order_info['member_id'],
            'order_detail' => [
                'product_infos' => [],
                'pay_info' => [
                    'pay_method' => '微信支付',
                    'prepay_id' => $prepay_id,
                    'prepay_time' => date('Y-m-d H:i:s', time())
                ],
                'price_info' => [
                    'order_price' => $order_info['order_money'] * 100,
                    'freight' => $order_info['delivery_money'] * 100
                ]
            ],
            'delivery_detail' => []
        ];
        // 配送方式
        switch ($order_info['order_type']) {
            case 2:
                $delivery_store_info = json_decode($order_info['delivery_store_info'], true);
                $data['delivery_detail']['delivery_type'] = 4; //用户自提
                $data['address_info'] = [
                    'receiver_name' => $order_info['delivery_store_name'],
                    'detailed_address' => $delivery_store_info['full_address'],
                    'tel_number' => $delivery_store_info['telphone']
                ];
                break;
            case 3:
                $data['delivery_detail']['delivery_type'] = 3; //线下配送
                break;
            case 4:
                $data['delivery_detail']['delivery_type'] = 2; //无需快递
                break;
            default:
                $data['delivery_detail']['delivery_type'] = 1; //正常快递
                $data['address_info'] = [
                    'receiver_name' => $order_info['name'],
                    'detailed_address' => $order_info['full_address'],
                    'tel_number' => $order_info['mobile']
                ];
                break;
        }
        $order_goods = model('order_goods')->getList([ ['order_id', '=', $order_info['order_id']] ], 'goods_id,sku_id,num,price,sku_name,sku_image');
        foreach ($order_goods as $goods) {
            array_push($data['order_detail']['product_infos'], [
                'out_product_id' => $goods['goods_id'],
                'out_sku_id' => $goods['sku_id'],
                'product_cnt' => $goods['num'],
                'sale_price' => $goods['price'] * 100,
                'path' => 'pages/goods/detail?sku_id=' . $goods['sku_id'],
                'title' => $goods['sku_name'],
                'head_img' => img($goods['sku_image'])
            ]);
        }
        $video_number_scene = [ 1175, 1176, 1177, 1191, 1195 ]; // 视频号场景值
        if (in_array($scene, $video_number_scene)) model('order')->update(['is_video_number' => 1], [['order_id', '=', $order_info['order_id'] ]]);
        return $data;
    }

    /**
     * 获取转账结果
     * @param $id
     * @return array
     */
    public function getTransferResult($withdraw_info)
    {
        $config = (new Config())->getPayConfig($withdraw_info['site_id'])['data']['value'];

        $result = (new WechatPay($config))->transferDetail($withdraw_info['withdraw_no'], $withdraw_info['withdraw_no']);
        if ($result['code'] != 0 || (isset($result['data']['detail_status']) && $result['data']['detail_status'] == 'PROCESSING')) {
            $error_num = Cache::get('get_transfer_result' . $withdraw_info['withdraw_no']) ?: 0;
            if (!$error_num || $error_num < 5) {
                (new Cron())->addCron(1, 0, "查询转账结果", "TransferResult", (time() + 60), $withdraw_info['id']);
                Cache::set('get_transfer_result' . $withdraw_info['withdraw_no'], ($error_num + 1), 600);
            }
            return $result;
        }

        if ($result['data']['detail_status'] == 'FAIL') {
            $reason = [
                'ACCOUNT_FROZEN' => '账户冻结',
                'REAL_NAME_CHECK_FAIL' => '用户未实名',
                'NAME_NOT_CORRECT' => '用户姓名校验失败',
                'OPENID_INVALID' => 'Openid校验失败',
                'TRANSFER_QUOTA_EXCEED' => '超过用户单笔收款额度',
                'DAY_RECEIVED_QUOTA_EXCEED' => '超过用户单日收款额度',
                'MONTH_RECEIVED_QUOTA_EXCEED' => '超过用户单月收款额度',
                'DAY_RECEIVED_COUNT_EXCEED' => '超过用户单日收款次数',
                'PRODUCT_AUTH_CHECK_FAIL' => '产品权限校验失败',
                'OVERDUE_CLOSE' => '转账关闭',
                'ID_CARD_NOT_CORRECT' => '用户身份证校验失败',
                'ACCOUNT_NOT_EXIST' => '用户账户不存在',
                'TRANSFER_RISK' => '转账存在风险',
                'REALNAME_ACCOUNT_RECEIVED_QUOTA_EXCEED' => '用户账户收款受限，请引导用户在微信支付查看详情',
                'RECEIVE_ACCOUNT_NOT_PERMMIT' => '未配置该用户为转账收款人',
                'PAYER_ACCOUNT_ABNORMAL' => '商户账户付款受限，可前往商户平台-违约记录获取解除功能限制指引',
                'PAYEE_ACCOUNT_ABNORMAL' => '用户账户收款异常，请引导用户完善其在微信支付的身份信息以继续收款',
            ];
            $fail_reason = '';
            if (isset($result['data']['fail_reason'])) $fail_reason = $reason[ $result['data']['fail_reason'] ] ?? '';
            model('member_withdraw')->update(['status' => -2, 'fail_reason' => $fail_reason ], [ ['id','=', $withdraw_info['id']] ]);
        }
        Cache::delete('get_transfer_result' . $withdraw_info['withdraw_no']);
        return $this->success();
    }
}