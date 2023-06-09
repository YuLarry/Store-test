<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 杭州牛之云科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com
 * =========================================================
 */

namespace addon\system\Wechat\common\model;

use app\model\BaseModel;

/**
 * 微信模板消息消息发送记录
 */
class MessageRecords extends BaseModel
{

    /**
     * 新建微信模板消息发送记录
     * @param unknown $data
     */
    public function addWechatMessageRecords($data)
    {
        $id = model("nc_site_message_wechat_list")->add($data);
        if ($id === false) {
            return $this->error('', 'UNKNOW_ERROR');
        }
        return $this->success($id);
    }

    /**
     * 批量添加微信模板消息发送记录
     * @param $data
     * @return array
     */
    public function addWechatMessageRecordsList($data)
    {
        $id = model("nc_site_message_wechat_list")->addList($data);
        if ($id === false) {
            return $this->error('', 'UNKNOW_ERROR');
        }
        return $this->success($id);
    }

    /**
     * 编辑微信模板消息发送记录
     * @param $data
     * @param $condition
     * @return array
     */
    public function editWechatMessageRecords($data, $condition)
    {
        $res = model("nc_site_message_wechat_list")->update($data, $condition);
        if ($res === false) {
            return $this->error('', 'UNKNOW_ERROR');
        }
        return $this->success($res);
    }

    /**
     * 删除微信模板消息发送记录
     * @param $condition
     * @return array
     */
    public function deleteWechatMessageRecords($condition)
    {
        $res = model("nc_site_message_wechat_list")->delete($condition);
        if ($res === false) {
            return $this->error('', 'UNKNOW_ERROR');
        }
        return $this->success($res);
    }

    /**
     * 查询微信模板消息发送记录
     * @param $condition
     * @param string $field
     * @return array
     */
    public function getWechatMessageRecordsInfo($condition, $field = "*")
    {
        $res = model("nc_site_message_wechat_list")->getInfo($condition, $field);
        if (empty($res)) {
            return $this->error('', 'UNKNOW_ERROR');
        }

        return $this->success($res);
    }

    /**
     * 查询微信模板消息发送记录
     * @param $condition
     * @param string $field
     * @return array
     */
    public function getWechatMessageRecordsList($condition, $field = "*")
    {
        $res = model("nc_site_message_wechat_list")->getList($condition, $field);
        if (empty($res)) {
            return $this->error('', 'UNKNOW_ERROR');
        }

        return $this->success($res);
    }

    /**
     * 查询微信模板消息发送记录分页列表
     * @param array $condition
     * @param int $page
     * @param int $page_size
     * @param string $order
     * @param string $field
     * @return array
     */
    public function getWechatMessageRecordsPageList($condition = [], $page = 1, $page_size = PAGE_LIST_ROWS, $order = '', $field = '*')
    {
        $res = model("nc_site_message_wechat_list")->pageList($condition, $field, $order, $page, $page_size);
        if (empty($res)) {
            return $this->error('', 'UNKNOW_ERROR');
        }

        return $this->success($res);
    }

}