<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 上海牛之云网络科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com
 * =========================================================
 */

namespace app\model\order;

use app\model\goods\GoodsStock;
use app\model\goods\VirtualGoods;
use app\model\system\Cron;
use app\model\verify\Verify as VerifyModel;
use app\model\message\Message as MessageModel;

/**
 * 虚拟订单
 *
 * @author Administrator
 *
 */
class VirtualOrder extends OrderCommon
{

    /*****************************************************************************************订单状态***********************************************/
    // 订单创建
    const ORDER_CREATE = 0;

    // 订单已支付
    const ORDER_PAY = 1;

    // 订单待收货
    const ORDER_DELIVERY = 3;
    // 订单已收货
    const ORDER_TAKE_DELIVERY = 4;

    // 订单已结算完成
    const ORDER_COMPLETE = 10;

    // 订单已关闭
    const ORDER_CLOSE = -1;

    /**
     * 订单类型
     *
     * @var int
     */
    public $order_type = 4;

    public $order_status = [
        self::ORDER_CREATE => [
            'status' => self::ORDER_CREATE,
            'name' => '待支付',
            'is_allow_refund' => 0,
            'icon' => 'upload/uniapp/order/order-icon.png',
            'action' => [
                [
                    'action' => 'orderClose',
                    'title' => '关闭订单',
                    'color' => ''
                ],
                [
                    'action' => 'orderAdjustMoney',
                    'title' => '调整价格',
                    'color' => ''
                ],
            ],
            'member_action' => [
                [
                    'action' => 'orderClose',
                    'title' => '关闭订单',
                    'color' => ''
                ],
                [
                    'action' => 'orderPay',
                    'title' => '支付',
                    'color' => ''
                ],
            ],
            'color' => ''
        ],

        self::ORDER_DELIVERY => [
            'status' => self::ORDER_DELIVERY,
            'name' => '已发货',
            'is_allow_refund' => 1,
            'icon' => 'upload/uniapp/order/order-icon-received.png',
            'action' => [
            ],
            'member_action' => [
            ],
            'color' => ''
        ],

        self::ORDER_TAKE_DELIVERY => [
            'status' => self::ORDER_TAKE_DELIVERY,
            'name' => '已收货',
            'is_allow_refund' => 1,
            'icon' => 'upload/uniapp/order/order-icon-received.png',
            'action' => [
            ],
            'member_action' => [
            ],
            'color' => ''
        ],
        self::ORDER_COMPLETE => [
            'status' => self::ORDER_COMPLETE,
            'name' => '已完成',
            'is_allow_refund' => 1,
            'icon' => 'upload/uniapp/order/order-icon-received.png',
            'action' => [
            ],
            'member_action' => [

            ],
            'color' => ''
        ],
        self::ORDER_CLOSE => [
            'status' => self::ORDER_CLOSE,
            'name' => '已关闭',
            'is_allow_refund' => 0,
            'icon' => 'upload/uniapp/order/order-icon-close.png',
            'action' => [

            ],
            'member_action' => [

            ],
            'color' => ''
        ],
    ];

    /**
     * 订单支付
     * @param unknown $order_info
     */
    public function orderPay($order_info, $pay_type,$log_data = [])
    {
        $pay_type_list = $this->getPayType();
        $data = array(
            'order_status' => self::ORDER_DELIVERY,
            'order_status_name' => $this->order_status[self::ORDER_DELIVERY]["name"],
            'order_status_action' => json_encode($this->order_status[self::ORDER_DELIVERY], JSON_UNESCAPED_UNICODE),
            "pay_status" => 1,
            "pay_time" => time(),
            "is_enable_refund" => 1,
            "pay_type" => $pay_type,
            "pay_type_name" => $pay_type_list[$pay_type]
        );

        //记录订单日志 start
        $action = '商家对订单进行了线下支付';
        //获取用户信息
        if (empty($log_data)){
            $member_info = model('member')->getInfo(['member_id'=>$order_info['member_id']],'nickname');
            $log_data = [
                'uid'        => $order_info[ 'member_id' ],
                'nick_name'  => $member_info['nickname'],
                'action_way' => 1
            ];
            $action = '买家【'.$member_info['nickname'].'】支付了订单';
        }
        $log_data = array_merge($log_data,[
            'order_id'          => $order_info['order_id'],
            'action'            => $action,
            'order_status'      => self::ORDER_DELIVERY,
            'order_status_name' => $this->order_status[self::ORDER_DELIVERY]["name"],
        ]);

        $this->addOrderLog($log_data);
        //记录订单日志 end

        $res = model('order')->update($data, [['order_id', "=", $order_info['order_id']]]);

        $goods_id = model('order_goods')->getValue([['order_id', '=', $order_info['order_id']]], 'goods_id');
        //判断商品是否需要核销
        $goods_info = model('goods')->getInfo([['goods_id', '=', $goods_id]], 'goods_class,is_need_verify');

        if ($order_info['is_lock'] == 0) {
            if ($goods_info['goods_class'] == 2) {
                if($goods_info['is_need_verify']){
                    //虚拟产品发货
                    $this->virtualOrderTakeDelivery($order_info['order_id']);
                }else{
                    //虚拟产品收货
                    $this->orderCommonTakeDelivery($order_info['order_id']);
                }
            } elseif ($goods_info['goods_class'] == 3) {
                // 卡密商品发货
                $this->virtualcardTakeDelivery($order_info['order_id']);
            }
        }

        return $this->success($res);
    }

    /**
     * 订单自动发货
     * @param unknown $order_id
     */
    public function virtualOrderTakeDelivery($order_id)
    {
        $order_info = model("order")->getInfo([['order_id', '=', $order_id]], 'order_no,site_id,site_name,member_id,order_type,
        sign_time,order_status,delivery_code,create_time,name,pay_time,pay_money,mobile,is_lock,order_money');
        if (empty($order_info))
            return $this->error([], "ORDER_EMPTY");

        model('order')->startTrans();
        try {
            //订单项变为已发货
            model('order_goods')->update(['delivery_status' => 1, "delivery_status_name" => "已发货"], [['order_id', "=", $order_id]]);
            $order_goods_info = model('order_goods')->getInfo([['order_id', '=', $order_id]], 'sku_id,sku_name,sku_image,price,num,goods_id,order_goods_id');//订单项详情

            //判断商品是否需要核销
            $goods_info = model('goods_sku')->getInfo([ ['gs.sku_id', '=', $order_goods_info['sku_id'] ] ], 'g.is_need_verify,g.verify_validity_type,g.virtual_indate,gs.verify_num', 'gs', [ ['goods g', 'g.goods_id = gs.goods_id', 'left'] ]);
            if ($goods_info['is_need_verify']) {

                switch ($goods_info['verify_validity_type']) {
                    case 0:
                        $expire_time = 0;
                        break;
                    case 1:
                        $expire_time = strtotime('+' . $goods_info['virtual_indate'] . 'days');
                        break;
                    case 2:
                        $expire_time = $goods_info['virtual_indate'];
                        break;
                }
                // dump($expire_time);
                //添加自动收货事件
                if($expire_time > 0){

                    $cron = new Cron();
                    $cron->addCron(1, 0, "订单自动收货", "CronOrderTakeDelivery", $expire_time, $order_id);

                    // 核销码临近到期时间（小时）
                    $config_model = new Config();
                    $verify_config = $config_model->getOrderVerifyConfig($order_info['site_id'], 'shop')['data']['value'];
                    
                    $order_verify_out_time = $verify_config['order_verify_time_out'] ?? 24;
                    $time_strtime = $order_verify_out_time * 3600;
                    //核销商品临期提醒
                    $cron->addCron(1,0,"核销商品临期提醒","VerifyOrderOutTime",$expire_time-$time_strtime,$order_id);
                    //核销码过期提醒
                    $cron->addCron(1,0,"核销码过期提醒","CronVerifyCodeExpire",$expire_time,$order_id);
                }

                $count = $goods_info['verify_num'] * $order_goods_info['num'];
                for ($i = 1; $i <= $count; $i++) {
                    //创建待核销记录
                    $verify_model = new VerifyModel();
                    $item_array = array(
                        [
                            "img" => $order_goods_info["sku_image"],
                            "name" => $order_goods_info["sku_name"],
                            "price" => $order_goods_info["price"],
                            "num" => 1,
                            "order_goods_id" => $order_goods_info["order_goods_id"],
                            "remark_array" => [
                                ["title" => "联系人", "value" => $order_info['name'] . $order_info['mobile']]
                            ]
                        ],
                    );
                    $remark_array = array(
                        ["title" => '订单金额', "value" => $order_info["order_money"]],
                        ["title" => '订单编号', "value" => $order_info["order_no"]],
                        ["title" => '创建时间', "value" => time_to_date($order_info["create_time"])],
                        ["title" => '付款时间', "value" => time_to_date($order_info["pay_time"])],
                    );
                    $verify_content_json = $verify_model->getVerifyJson($item_array, $remark_array);
                    $code_result = $verify_model->addVerify("virtualgoods", $order_info['site_id'], $order_info['site_name'], $verify_content_json, $expire_time);
                    $code = $code_result["data"]["verify_code"];
                    $result = $verify_model->qrcode($code, "all", "virtualgoods", $order_info['site_id'], "create");//生成二维码

                    //自动收发货
                    $order_data = array(
                        'virtual_code' => $code,
                    );
                    $res = model('order')->update($order_data, [['order_id', '=', $order_id]]);

                    //生成所购买的产品
                    $virtual_goods_model = new VirtualGoods();

                    $goods_virtual_data = [
                        'site_id' => $order_info['site_id'],
                        'order_id' => $order_id,
                        'order_no' => $order_info['order_no'],
                        'sku_id' => $order_goods_info['sku_id'],
                        'sku_name' => $order_goods_info['sku_name'],
                        'code' => $code,
                        'member_id' => $order_info['member_id'],
                        'sku_image' => $order_goods_info['sku_image'],
                        'expire_time' => $expire_time,
                        'sold_time' => time(),
                        'goods_id' => $order_goods_info['goods_id']
                    ];
                    $virtual_goods_model->addGoodsVirtual($goods_virtual_data);

                }
            }

            model('order')->commit();
            return $this->success($res);

        } catch (\Exception $e) {
            model('order')->rollback();
            return $this->error('', $e->getMessage());
        }
    }

    /**
     * 卡密商品自动发货 收货
     * @param $order_id
     */
    public function virtualcardTakeDelivery($order_id)
    {
        $order_info = model("order")->getInfo([['order_id', '=', $order_id]], 'order_no,site_id,site_name,member_id,order_type,
        sign_time,order_status,delivery_code,create_time,name,pay_time,pay_money,mobile,is_lock,order_money');
        if (empty($order_info))
            return $this->error([], "ORDER_EMPTY");

        model('order')->startTrans();
        try {
            //订单项变为已发货
            model('order_goods')->update(['delivery_status' => 1, "delivery_status_name" => "已发货"], [['order_id', "=", $order_id]]);
            $order_goods_info = model('order_goods')->getInfo([['order_id', '=', $order_id]], 'sku_id,sku_name,sku_image,price,num,goods_id,order_goods_id');//订单项详情

            $goods_virtual_list = model('goods_virtual')->pageList([ ['order_id', '=', 0], ['sku_id', '=', $order_goods_info['sku_id'] ] ], 'id', 'id asc', 1, $order_goods_info['num']);
            if (count($goods_virtual_list['list']) != $order_goods_info['num']) {
                return $this->error('','卡密库存不足');
            }
            $ids = array_column($goods_virtual_list['list'], 'id');
            model('goods_virtual')->update([
                'order_id' => $order_id,
                'order_no' => $order_info['order_no'],
                'member_id' => $order_info['member_id'],
                'sold_time' => time()
            ], [ ['id', 'in', $ids ] ]);

            // 订单自动收货
            $this->orderCommonTakeDelivery($order_id);

            model('order')->commit();
            return $this->success();
        } catch (\Exception $e) {
            model('order')->rollback();
            return $this->error('', $e->getMessage());
        }
    }

    /**
     * 自动发货
     * @param $order_id
     */
    public function  orderTakeDelivery($order_id)
    {
        $order_info = model("order")->getInfo([['order_id', '=', $order_id]], 'order_no,site_id,site_name,member_id,order_type,
        sign_time,order_status,delivery_code,create_time,name,pay_time,pay_money,mobile,is_lock,order_money');
        if (empty($order_info))
            return $this->error([], "ORDER_EMPTY");

        $res = model('order_goods')->update(['delivery_status' => 1, "delivery_status_name" => "已发货"], [['order_id', "=", $order_id]]);
        return $this->success($res);
    }

    /**
     * 退款完成操作
     * @param $order_info
     */
    public function refund($order_goods_info)
    {
        //删除已退款订单项会员虚拟商品, 并退回商品库存
        //无需判断订单项是否需要入库
        $goods_stock_model = new GoodsStock();
        $item_param = array(
            "sku_id" => $order_goods_info["sku_id"],
            "num" => $order_goods_info["num"],
        );
        //返还库存
        $goods_stock_model->incStock($item_param);
        //删除用户的这条虚拟商品
        $goods_virtual_model = new VirtualGoods();
        $goods_virtual_model->deleteGoodsVirtual([["order_id", "=", $order_goods_info["order_id"]], ["member_id", "=", $order_goods_info["member_id"]]]);
    }

    /**
     * 订单详情
     * @param $order_info
     */
    public function orderDetail($order_info)
    {
        $data = [
            'goods_class' => $order_info['order_goods'][0]['goods_class']
        ];
        if ($data['goods_class'] == 2) {
            $virtual_goods = model('goods_virtual')->getFirstData([["order_id", "=", $order_info["order_id"]]], '*', 'is_veirfy asc');
            if (!empty($virtual_goods)) {
                $virtual_goods['total_verify_num'] = model('goods_virtual')->getCount([ ["order_id", "=", $order_info["order_id"] ] ]);
                $virtual_goods['verify_num'] = model('goods_virtual')->getCount([ ["order_id", "=", $order_info["order_id"] ], ['is_veirfy', '=', 1] ]);
                $verify_code = model('goods_virtual')->getColumn([ ["order_id", "=", $order_info["order_id"] ], ['is_veirfy', '=', 1] ], 'code');
                $virtual_goods['verify_record'] = [];
                if (!empty($verify_code)) {
                    $virtual_goods['verify_record'] = model('verify')->getList([ ['verify_code', 'in', $verify_code ], ['verify_type', '=', 'virtualgoods'], ['is_verify', '=', 1] ], '*', 'verify_time desc');
                }
                $data["virtual_goods"] = $virtual_goods;
                $data["virtual_code"] = $virtual_goods['code'];
            }
        } else if ($data['goods_class'] == 3) {
            $virtual_goods = model('goods_virtual')->getList([["order_id", "=", $order_info["order_id"]]], '*', 'id asc');
            if (!empty($virtual_goods)) {
                foreach ($virtual_goods as $key => $item) {
                    $virtual_goods[$key]['card_info'] = json_decode($item['card_info'], true);
                }
                $data["virtual_goods"] = $virtual_goods;
            }
        }
        return $data;
    }
}