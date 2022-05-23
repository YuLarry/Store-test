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

use addon\discount\model\Discount;
use app\model\BaseModel;
use app\model\order\Order;
use app\model\order\OrderRefund;
use app\model\system\Config as ConfigModel;
use app\model\system\Cron;
use app\model\system\Stat;

/**
 * 商品
 */
class OrderGoods extends BaseModel
{
    /**
     * 获取商品sku分页列表
     * @param array $condition
     * @param number $page
     * @param string $page_size
     * @param string $order
     * @param string $field
     */
    public function getOrderGoodsPageList($condition = [], $page = 1, $page_size = PAGE_LIST_ROWS, $order = '', $field = '*', $alias = '', $join = '')
    {
        $list = model('order_goods')->pageList($condition, $field, $order, $page, $page_size, $alias, $join);
        return $this->success($list);
    }



}