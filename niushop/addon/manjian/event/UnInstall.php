<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 杭州牛之云科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com
 * =========================================================
 */

namespace addon\manjian\event;

/**
 * 应用卸载
 */
class UnInstall
{
    /**
     * 执行卸载
     */
    public function handle()
    {
        try {
            return error('', "系统插件不允许删除");
            //execute_sql('addon/manjian/data/uninstall.sql');
            //return success();
        } catch (\Exception $e) {
            return error('', $e->getMessage());
        }
    }
}