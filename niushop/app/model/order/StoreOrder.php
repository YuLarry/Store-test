<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 杭州牛之云科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com

 * =========================================================
 */

namespace app\model\order;

use app\model\goods\GoodsStock;
use app\model\message\Message;
use app\model\verify\Verify;

/**
 * 门店自提订单
 *
 * @author Administrator
 *
 */
class StoreOrder extends OrderCommon
{

    /*****************************************************************************************订单状态***********************************************/
    // 订单创建
    const ORDER_CREATE = 0;

    // 订单已支付
    const ORDER_PAY = 1;

    // 订单待提货
    const ORDER_PENDING_DELIVERY = 2;

    // 订单已发货（配货）
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
    public $order_type = 2;


    /**
     */
    public $order_status = [
        self::ORDER_CREATE           => [
            'status'          => self::ORDER_CREATE,
            'name'            => '待支付',
            'is_allow_refund' => 0,
            'icon'            => 'public/uniapp/order/order-icon.png',
            'action'          => [
                [
                    'action' => 'orderClose',
                    'title'  => '关闭订单',
                    'color'  => ''
                ],
                [
                    'action' => 'orderAdjustMoney',
                    'title'  => '调整价格',
                    'color'  => ''
                ],
            ],
            'member_action'   => [
                [
                    'action' => 'orderClose',
                    'title'  => '关闭订单',
                    'color'  => ''
                ],
                [
                    'action' => 'orderPay',
                    'title'  => '支付',
                    'color'  => ''
                ],
            ],
            'color'           => ''
        ],
        self::ORDER_PENDING_DELIVERY => [
            'status'          => self::ORDER_PENDING_DELIVERY,
            'name'            => '待提货',
            'is_allow_refund' => 0,
            'icon'            => 'public/uniapp/order/order-icon-send.png',
            'action'          => [
            ],
            'member_action'   => [

            ],
            'color'           => ''
        ],
        self::ORDER_TAKE_DELIVERY    => [
            'status'          => self::ORDER_TAKE_DELIVERY,
            'name'            => '已提货',
            'is_allow_refund' => 1,
            'icon'            => 'public/uniapp/order/order-icon-received.png',
            'action'          => [
            ],
            'member_action'   => [
            ],
            'color'           => ''
        ],
        self::ORDER_COMPLETE         => [
            'status'          => self::ORDER_COMPLETE,
            'name'            => '已完成',
            'is_allow_refund' => 1,
            'icon'            => 'public/uniapp/order/order-icon-received.png',
            'action'          => [
            ],
            'member_action'   => [

            ],
            'color'           => ''
        ],
        self::ORDER_CLOSE            => [
            'status'          => self::ORDER_CLOSE,
            'name'            => '已关闭',
            'is_allow_refund' => 0,
            'icon'            => 'public/uniapp/order/order-icon-close.png',
            'action'          => [

            ],
            'member_action'   => [

            ],
            'color'           => ''
        ],
    ];

    /**
     * 订单支付
     * @param unknown $order_info
     */
    public function orderPay($order_info, $pay_type,$log_data=[])
    {
        $member_id = $order_info['member_id'] ?? 0;
        if ($order_info['order_status'] != 0) {
            return $this->error();
        }

        $condition        = array(
            ['order_id', '=', $order_info['order_id']],
            ['order_status', '=', self::ORDER_CREATE],
        );
        $verify           = new Verify();
        $order_goods_list = model('order_goods')->getList([['order_id', '=', $order_info['order_id']]], 'sku_image,sku_name,price,num,order_goods_id,goods_id,sku_id');
        $item_array       = [];
        foreach ($order_goods_list as $k => $v) {
            $item_array[] = [
                'img'            => $v['sku_image'],
                'name'           => $v['sku_name'],
                'price'          => $v['price'],
                'num'            => $v['num'],
                'order_goods_id' => $v['order_goods_id'],
                'remark_array'   => [

                ]
            ];
            // 增加门店商品销量
            model('store_goods')->setInc([ ['goods_id', '=', $v['goods_id'] ], ['store_id', '=', $order_info['delivery_store_id'] ] ], 'sale_num', $v['num']);
            model('store_goods_sku')->setInc([ ['sku_id', '=', $v['sku_id'] ], ['store_id', '=', $order_info['delivery_store_id'] ] ], 'sale_num', $v['num']);
        }
        $pay_time            = time();
        $remark_array        = array(
            ['title' => '订单金额', 'value' => $order_info['order_money']],
            ['title' => '订单编号', 'value' => $order_info['order_no']],
            ['title' => '创建时间', 'value' => time_to_date($order_info['create_time'])],
            ['title' => '付款时间', 'value' => time_to_date($pay_time)],
            ['title' => '收货地址', 'value' => $order_info['full_address']],
            ['title' => '选择门店', 'value' => $order_info['delivery_store_name']],
        );
        $verify_content_json = $verify->getVerifyJson($item_array, $remark_array);

        $code          = $verify->addVerify('pickup', $order_info['site_id'], $order_info['site_name'], $verify_content_json, 0, 1, $order_info['delivery_store_id'], $member_id);
        $pay_type_list = $this->getPayType();
        $data          = array(
            'order_status'        => self::ORDER_PENDING_DELIVERY,
            'order_status_name'   => $this->order_status[self::ORDER_PENDING_DELIVERY]['name'],
            'pay_status'          => 1,
            'order_status_action' => json_encode($this->order_status[self::ORDER_PENDING_DELIVERY], JSON_UNESCAPED_UNICODE),
            'delivery_code'       => $code['data']['verify_code'],
            'pay_time'            => $pay_time,
            'is_enable_refund'    => 1,
            'pay_type'            => $pay_type,
            'pay_type_name'       => $pay_type_list[$pay_type]
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
            $buyer_name = empty($member_info[ 'nickname' ]) ? '' : '【' . $member_info[ 'nickname' ] . '】';
            $action = '买家'.$buyer_name.'支付了订单';
        }

        $log_data = array_merge($log_data,[
            'order_id'          => $order_info['order_id'],
            'action'            => $action,
            'order_status'      => self::ORDER_PENDING_DELIVERY,
            'order_status_name' => $this->order_status[self::ORDER_PENDING_DELIVERY]['name']
        ]);

        $this->addOrderLog($log_data);
        //记录订单日志 end

        $res = model('order')->update($data, $condition);

        $order_goods_data = array(
            'delivery_status_name' => '待提货'
        );
        $res              = model('order_goods')->update($order_goods_data, [['order_id', '=', $order_info['order_id']]]);
        $verify->qrcode($code['data']['verify_code'], 'all', 'pickup', $order_info['site_id'], 'create');
        return $this->success($res);
    }

    /**
     * 主动提货
     * @param $delivery_code
     * @return \multitype
     */
    public function verify($delivery_code)
    {
        $order_info = model('order')->getInfo([['delivery_code', '=', $delivery_code]], 'order_id, order_type, sign_time, order_status, delivery_code,site_id');
        if (empty($order_info))
            return $this->error([], 'ORDER_EMPTY');

        $result = $this->activeTakeDelivery($order_info['order_id']);
        if ($result['code'] < 0) {
            return $result;
        }
        //核销发送通知
        $message_model = new Message();
        $message_model->sendMessage(['keywords' => 'VERIFY', 'order_id' => $order_info['order_id'], 'site_id' => $order_info['site_id']]);
        return $result;
    }

    /**
     * 订单提货
     * @param unknown $order_id
     * @param unknown $delivery_code
     */
    public function orderTakeDelivery($order_id)
    {
        $res = model('order_goods')->update(['delivery_status' => 1, 'delivery_status_name' => '已提货'], [['order_id', '=', $order_id], ['refund_status', '<>', 3]]);

        $order_goods_list = model('order_goods')->getList([['order_id', '=', $order_id]]);
        //todo 默认先将提货的发货和收货一体化,将扣除库存统一放在这
        $order_stock_model = new OrderStock();

        $order_info = model('order')->getInfo([['order_id', '=', $order_id]], 'store_id,site_id');
        $stock_result = $order_stock_model->decOrderStock([
            'store_id' => $order_info['store_id'],
            'site_id' => $order_info['site_id'],
            'goods_sku_list' => $order_goods_list
        ]);
        if($stock_result['code'] < 0){
            model('order')->rollback();
            return $stock_result;
        }
        return $this->success($res);
    }

    /**
     * 退款完成操作
     * @param $order_info
     */
    public function refund($order_goods_info)
    {
        //是否入库
        if ($order_goods_info['is_refund_stock'] == 1) {
            $order_stock_model = new OrderStock();
            $order_stock_model->incOrderStock($order_goods_info);
        }
    }

    /**
     * 订单详情
     * @param $order_info
     */
    public function orderDetail($order_info)
    {
        return [];
    }

    /**
     * 主动提货
     * @param $order_id
     */
    public function activeTakeDelivery($order_id){
        $order_condition = array(
            ['order_id', '=', $order_id],
            ['order_type', '=', 2]
        );
        $order_info = model('order')->getInfo($order_condition, 'delivery_code, order_status, site_id');

        //应该在这儿主动调用核销的方法函数
        if(empty($order_info))
            return $this->error();

        if($order_info['order_status'] != self::ORDER_PENDING_DELIVERY)
            return $this->error([], '只有待提货状态的订单才可以提货');

        $result = $this->orderCommonTakeDelivery($order_id);
        if ($result['code'] < 0) {
            return $result;
        }
        //核销发送通知
        $message_model = new Message();
        $message_model->sendMessage(['keywords' => 'VERIFY', 'order_id' => $order_id, 'site_id' => $order_info['site_id']]);
        return $result;
    }
}