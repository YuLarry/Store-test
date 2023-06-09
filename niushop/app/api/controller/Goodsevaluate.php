<?php
/**
 * Goodsevaluate.php
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2015-2025 杭州牛之云科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com
 * =========================================================
 * @author : niuteam
 * @date : 2022.8.8
 * @version : v5.0.0.1
 */

namespace app\api\controller;

use app\model\goods\GoodsEvaluate as GoodsEvaluateModel;
use app\model\order\Config as ConfigModel;

/**
 * 商品评价
 * Class Goodsevaluate
 * @package app\api\controller
 */
class Goodsevaluate extends BaseApi
{
    /**
     * 添加信息·第一次评价
     */
    public function add()
    {
        $token = $this->checkToken();
        if ($token[ 'code' ] < 0) return $this->response($token);

        $order_id = isset($this->params[ 'order_id' ]) ? $this->params[ 'order_id' ] : 0;
        $order_no = isset($this->params[ 'order_no' ]) ? $this->params[ 'order_no' ] : 0;
        $member_name = isset($this->params[ 'member_name' ]) ? $this->params[ 'member_name' ] : '';
        $member_headimg = isset($this->params[ 'member_headimg' ]) ? $this->params[ 'member_headimg' ] : '';
        $is_anonymous = isset($this->params[ 'is_anonymous' ]) ? $this->params[ 'is_anonymous' ] : 0;
        $goods_evaluate = isset($this->params[ 'goods_evaluate' ]) ? $this->params[ 'goods_evaluate' ] : "";

        if (empty($order_id)) {
            return $this->response($this->error('', 'REQUEST_ORDER_ID'));
        }
        if (empty($goods_evaluate)) {
            return $this->response($this->error('', 'REQUEST_GOODS_EVALUATE'));
        }

        $goods_evaluate = json_decode($goods_evaluate, true);

        $data = [
            'order_id' => $order_id,
            'order_no' => $order_no,
            'member_name' => $member_name,
            'member_id' => $token[ 'data' ][ 'member_id' ],
            'is_anonymous' => $is_anonymous,
            'member_headimg' => $member_headimg,
            'goods_evaluate' => $goods_evaluate,
        ];

        $goods_evaluate_model = new GoodsEvaluateModel();
        $res = $goods_evaluate_model->addEvaluate($data, $this->site_id);
        return $this->response($res);
    }

    /**
     * 追评
     * @return string
     */
    public function again()
    {
        $token = $this->checkToken();
        if ($token[ 'code' ] < 0) return $this->response($token);

        $order_id = isset($this->params[ 'order_id' ]) ? $this->params[ 'order_id' ] : 0;
        $goods_evaluate = isset($this->params[ 'goods_evaluate' ]) ? $this->params[ 'goods_evaluate' ] : "";

        if (empty($order_id)) {
            return $this->response($this->error('', 'REQUEST_ORDER_ID'));
        }
        if (empty($goods_evaluate)) {
            return $this->response($this->error('', 'REQUEST_GOODS_EVALUATE'));
        }

        $goods_evaluate = json_decode($goods_evaluate, true);

        $data = [
            'order_id' => $order_id,
            'goods_evaluate' => $goods_evaluate
        ];
        $goods_evaluate_model = new GoodsEvaluateModel();
        $res = $goods_evaluate_model->evaluateAgain($data, $this->site_id);
        return $this->response($res);
    }

    /**
     * 基础信息
     * @param int $id
     * @return false|string
     */
    public function firstinfo($id = 0)
    {
        $goods_id = isset($this->params[ 'goods_id' ]) ? $this->params[ 'goods_id' ] : 0;
        if (!empty($id)) {
            $goods_id = $id;
        }
        if (empty($goods_id)) {
            return $this->response($this->error('', 'REQUEST_GOODS_ID'));
        }
        $goods_evaluate_model = new GoodsEvaluateModel();
        $condition = [
            [ 'is_show', '=', 1 ],
            [ 'is_audit', '=', 1 ],
            [ 'goods_id', '=', $goods_id ]
        ];
        $field = 'evaluate_id,content,images,explain_first,member_name,member_headimg,is_anonymous,again_content,again_images,again_explain,create_time,again_time,scores';
        $order = "create_time desc";
        $info = $goods_evaluate_model->getSecondEvaluateInfo($condition, $field, $order);
        return $this->response($info);
    }

    /**
     * 列表信息
     */
    public function page()
    {
        $page = isset($this->params[ 'page' ]) ? $this->params[ 'page' ] : 1;
        $page_size = isset($this->params[ 'page_size' ]) ? $this->params[ 'page_size' ] : PAGE_LIST_ROWS;
        $goods_id = isset($this->params[ 'goods_id' ]) ? $this->params[ 'goods_id' ] : 0;
        $explain_type = empty($this->params[ 'explain_type' ]) ? '' : $this->params[ 'explain_type' ];
        if (empty($goods_id)) {
            return $this->response($this->error('', 'REQUEST_GOODS_ID'));
        }
        $goods_evaluate_model = new GoodsEvaluateModel();
        if (!empty($explain_type)) {
            $condition[] = [ 'explain_type', '=', $explain_type ];
        }
        $condition[] = [ 'is_show', '=', 1 ];
        $condition[] = [ 'is_audit', '=', 1 ];
        $condition[] = [ 'goods_id', '=', $goods_id ];
//        $condition = [
//            [ 'is_show', '=', 1 ],
//            [ 'is_audit', '=', 1 ],
//            [ 'goods_id', '=', $goods_id ]
//        ];
        $list = $goods_evaluate_model->getEvaluatePageList($condition, $page, $page_size);
        return $this->response($list);
    }

    /**
     * 获取评价 1好 2中 3差
     */
    public function getGoodsEvaluate()
    {
        $goods_id = isset($this->params[ 'goods_id' ]) ? $this->params[ 'goods_id' ] : 0;
        if (empty($goods_id)) {
            return $this->response($this->error('', 'REQUEST_GOODS_ID'));
        }
        $goods_evaluate_model = new GoodsEvaluateModel();
        $condition[] = [ 'is_show', '=', 1 ];
        $condition[] = [ 'is_audit', '=', 1 ];
        $condition[] = [ 'goods_id', '=', $goods_id ];
        $list = $goods_evaluate_model->getEvaluateList($condition);
        $haoping = 0;
        $zhongping = 0;
        $chaping = 0;
        if (!empty($list[ 'data' ])) {
            foreach ($list[ 'data' ] as $k => $v) {
                if ($v[ 'explain_type' ] == 1) {
                    $haoping += 1;
                } else if ($v[ 'explain_type' ] == 2) {
                    $zhongping += 1;
                } else {
                    $chaping += 1;
                }
            }
        }
        $data = [
            'total' => count($list[ 'data' ]),
            'haoping' => $haoping,
            'zhongping' => $zhongping,
            'chaping' => $chaping
        ];
        return $this->response($this->success($data));
    }

    /**
     * 评价设置
     * @return false|string
     */
    public function config()
    {
        $config_model = new ConfigModel();
        //订单评价设置
        $res = $order_evaluate_config = $config_model->getOrderEvaluateConfig($this->site_id, $this->app_module);
        return $this->response($this->success($res[ 'data' ][ 'value' ]));
    }

    /**
     * 评论数量
     * @param int $id
     * @return false|string
     */
    public function count($id = 0)
    {
        $goods_id = $this->params[ 'goods_id' ] ?? 0;
        if (!empty($id)) {
            $goods_id = $id;
        }
        if (empty($goods_id)) {
            return $this->response($this->error('', 'REQUEST_GOODS_ID'));
        }
        $goods_evaluate_model = new GoodsEvaluateModel();
        $condition[] = [ 'is_show', '=', 1 ];
        $condition[] = [ 'is_audit', '=', 1 ];
        $condition[] = [ 'goods_id', '=', $goods_id ];
        $count = $goods_evaluate_model->getEvaluateCount($condition);
        return $this->response($count);

    }

}