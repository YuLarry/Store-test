<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 杭州牛之云科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com
 * =========================================================
 */

namespace app\event;

use app\Controller;
use app\model\web\DiyView as DiyViewModel;

/**
 * 自定义页面编辑
 */
class DiyViewEdit extends Controller
{
    /**
     * 行为扩展的执行入口必须是run
     * @param $data
     * @return mixed
     */
    public function handle($data)
    {
        if (empty($data[ 'is_default' ])) {
            $data[ 'is_default' ] = 1;
        }

        $diy_view = new DiyViewModel();

        $support_diy_view = !empty($data[ 'support_diy_view' ]) ? implode(',', $data[ 'support_diy_view' ]) : [ '' ];

        $util_condition = [
            [ 'support_diy_view', 'in', $support_diy_view, 'or' ],
        ];
        $utils = $diy_view->getDiyViewUtilList($util_condition)[ 'data' ];

        $diy_view_utils = [];
        $extend_comp = []; // 第三方扩展的特定页面组件

        // 查询默认的系统模板页面
        if (!empty($data[ 'name' ])) {
            if (in_array($data[ 'name' ], $diy_view->getPage()) !== false) {
                $diy_view_utils[] = [
                    'type' => $data[ 'name' ],
                    'type_name' => '页面组件',
                    'list' => []
                ];
            }
        }

        if (!empty($utils)) {

            // 先遍历，组件分类
            foreach ($utils as $k => $v) {
                $value = [];
                $value[ 'type' ] = $v[ 'type' ];
                $value[ 'type_name' ] = $diy_view->getTypeName($v[ 'type' ]);
                $value[ 'list' ] = [];

                if (!in_array($value, $diy_view_utils)) {
                    array_push($diy_view_utils, $value);
                }
            }

            // 遍历每一个组件，将其添加到对应的分类中
            foreach ($utils as $k => $v) {
                foreach ($diy_view_utils as $diy_k => $diy_v) {
                    $is_add = true;
                    if (!empty($v[ 'addon_name' ])) {
                        $is_exit = addon_is_exit($v[ 'addon_name' ], $data[ 'site_id' ]);
                        // 检查插件是否存在
                        if ($is_exit == 0) {
                            $is_add = false;
                        }
                    }

                    // 特定页面组件归类
                    if (!empty($v[ 'support_diy_view' ]) && $v[ 'support_diy_view' ] == $diy_v[ 'type' ] && $is_add) {
                        if ($v[ 'type' ] == 'EXTEND') {
                            // 第三方扩展的特定页面组件
                            $extend_comp[] = $v;
                        } else {
                            array_push($diy_view_utils[ $diy_k ][ 'list' ], $v);
                        }
                        break;
                    } elseif ($diy_v[ 'type' ] == $v[ 'type' ] && $is_add) {
                        array_push($diy_view_utils[ $diy_k ][ 'list' ], $v);
                    }
                }
            }
        }

        // 第三方组件——>特定页面组件
        if (!empty($extend_comp)) {
            foreach ($diy_view_utils as $k => $v) {
                if ($v[ 'type' ] == 'EXTEND') {
                    if (empty($v[ 'list' ])) {
                        $diy_view_utils[ $k ][ 'type_name' ] = '页面组件';
                        $diy_view_utils[ $k ][ 'list' ] = array_merge($extend_comp, $diy_view_utils[ $k ][ 'list' ]);
                    } else {
                        // 页面组件排在第一位置
                        array_splice($diy_view_utils, $k, 0, [
                            [
                                'type' => 'EXTEND',
                                'type_name' => '页面组件',
                                'list' => $extend_comp
                            ]
                        ]);
                    }
                }
            }
        }

        $this->assign('diy_view_utils', $diy_view_utils);

        $store_id = isset($data[ 'store_id' ]) ? $data[ 'store_id' ] : 0;
        $name = 'DIY_VIEW_RANDOM_' . time();
        if (!empty($data[ 'id' ]) || !empty($data[ 'name' ])) {
            $diy_view_condition = [
                [ 'site_id', '=', $data[ 'site_id' ] ],
            ];

            $qrcode_params = [
                'site_id' => $data[ 'site_id' ],
                'store_id' => $store_id,
                'is_default' => $data[ 'is_default' ]
            ];
            if (!empty($data[ 'id' ])) {
                $diy_view_condition[] = [ 'id', '=', $data[ 'id' ] ];
                $qrcode_params[ 'id' ] = $data[ 'id' ];
            } elseif (!empty($data[ 'name' ])) {
                $diy_view_condition[] = [ 'name', '=', $data[ 'name' ] ];
                $qrcode_params[ 'name' ] = $data[ 'name' ];
                $name = $data[ 'name' ];
                // 查询默认的系统模板页面
                if (in_array($name, $diy_view->getPage()) !== false) {
                    $diy_view_condition[] = [ 'is_default', '=', 1 ];
                }
            }
            $diy_view_info = $diy_view->getSiteDiyViewDetail($diy_view_condition)[ 'data' ];
            if (!empty($diy_view_info)) {
                $name = $diy_view_info[ 'name' ];
                $qrcode_params[ 'is_default' ] = $diy_view_info[ 'is_default' ];
            }
            $this->assign("diy_view_info", $diy_view_info);
            $qrcode_info = $diy_view->qrcode($qrcode_params)[ 'data' ];
            $this->assign("qrcode_info", $qrcode_info);
        }

        // 来源：从模板选择中进入编辑页面（第一个）
        if (!empty($data[ 'source' ])) {
            // 查询模板
            $template = $diy_view->getDiyTemplate([ 'site_id' => $data[ 'site_id' ], 'name' => $data[ 'template_key' ] ])[ 'data' ];
            if (!empty($template)) {
                $index_page = $template[ 'page' ];// 取出第一个页面进行编辑
                $diy_view_info = [
                    'id' => 0,
                    'site_id' => $data[ 'site_id' ],
                    'name' => $index_page[ 'name' ],
                    'title' => $index_page[ 'title' ],
                    'value' => json_encode($index_page[ 'value' ]),
                    'type' => $index_page[ 'type' ]
                ];
                $this->assign('template_key', $data[ 'template_key' ]);
                $this->assign("diy_view_info", $diy_view_info);
            }
        }

        $this->assign("time", time());
        $this->assign("name", $name);
        $this->assign("store_id", $store_id);

        $request_url = 'shop/diy/edit';

        $replace = [];
        if ($data[ 'app_module' ] == 'store') {
            $replace = [
                'STORE_CSS' => __ROOT__ . '/addon/store/store/view/public/css',
                'STORE_JS' => __ROOT__ . '/addon/store/store/view/public/js',
                'STORE_IMG' => __ROOT__ . '/addon/store/store/view/public/img',
            ];
            $this->assign("extend_base", 'addon/store/' . $data[ 'app_module' ] . '/view/base.html');
        } else {
            $this->assign("extend_base", 'app/' . $data[ 'app_module' ] . '/view/base.html');
        }

        $this->assign("request_url", $request_url);
        $template = dirname(realpath(__DIR__)) . '/shop/view/diy/edit.html';
        return $this->fetch($template, [], $replace);
    }

}