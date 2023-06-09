<?php
/**
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

use app\model\web\Help as HelpModel;

class Helpclass extends BaseApi
{

    /**
     * 列表信息
     */
    public function lists()
    {
        $help = new HelpModel();
        $condition = [
            [ 'site_id', '=', $this->site_id ]
        ];
        $list = $help->getHelpClassList($condition, 'class_id, class_name', 'sort asc, create_time desc');
        $order = 'sort asc, create_time desc';
        $field = 'id,title,link_address';
        if (!empty($list[ 'data' ])) {

            foreach ($list[ 'data' ] as $k => $v) {
                $condition = [
                    [ 'class_id', '=', $v[ 'class_id' ] ],
                    [ 'site_id', '=', $this->site_id ]
                ];
                $child_list = $help->getHelpList($condition, $field, $order);
                $child_list = $child_list[ 'data' ];
                $list[ 'data' ][ $k ][ 'child_list' ] = $child_list;
            }
        }
        return $this->response($list);
    }

}