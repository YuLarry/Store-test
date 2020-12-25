<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 上海牛之云网络科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com

 * =========================================================
 */

namespace addon\weapp\api\controller;

use addon\weapp\model\Message;
use app\api\controller\BaseApi;
use addon\weapp\model\Weapp as WeappModel;

class Weapp extends BaseApi
{

    /**
     * 获取openid
     */
    public function authCodeToOpenid()
    {
        $weapp_model = new WeappModel($this->site_id);
        $res         = $weapp_model->authCodeToOpenid($this->params);
        return $this->response($res);
    }

    /**
     * 获取消息模板id(最多三条)
     */
    public function messageTmplIds(){
        $keywords = $this->params['keywords'] ?? '';
        $message = new Message();
        $res = $message->getMessageTmplIds($this->site_id, $keywords);
        return $this->response($res);
    }
}