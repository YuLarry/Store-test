<?php
/**
 * Index.php
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

use app\model\upload\Upload as UploadModel;

/**
 * 上传管理
 * @author Administrator
 *
 */
class Upload extends BaseApi
{

    /**
     * 头像上传
     */
    public function headimg()
    {
        $upload_model = new UploadModel($this->site_id);
        $param = array (
            "thumb_type" => "",
            "name" => "file",
            "watermark" => 0,
            "cloud" => 1
        );
        $result = $upload_model->setPath("headimg/" . date("Ymd") . '/')->image($param);
        return $this->response($result);
    }

    /**
     * 评价上传
     */
    public function evaluateimg()
    {
        $upload_model = new UploadModel($this->site_id);
        $param = array (
            "thumb_type" => "",
            "name" => "file",
            "watermark" => 0,
            "cloud" => 1
        );
        $result = $upload_model->setPath("evaluate_img/" . date("Ymd") . '/')->image($param);
        return $this->response($result);
    }

    public function headimgBase64()
    {
        $upload_model = new UploadModel($this->site_id);
        $file = input('images', '');
        $file = base64_to_blob($file);
        $result = $upload_model->setPath("headimg/" . date("Ymd") . '/')->remotePullBinary($file[ 'blob' ]);
        return $this->response($result);
    }

    /**
     * 聊天图片上传
     */
    public function chatimg()
    {
        $upload_model = new UploadModel(0);
        $param = array (
            "thumb_type" => "",
            "name" => "file"
        );
        $result = $upload_model->setPath("chat_img/" . date("Ymd") . '/')->image($param);
        return $this->response($result);
    }
}