<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 杭州牛之云科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com
 * =========================================================
 */

namespace app\shop\controller;

use addon\weapp\model\Config as WeappConfig;
use app\model\goods\GoodsCategory;
use app\model\system\Site;
use app\model\web\Config as ConfigModel;
use app\model\web\DiyView as DiyViewModel;
use addon\wechat\model\Config as WechatConfig;
use app\model\web\DiyViewLink;

/**
 * 网站装修控制器
 */
class Diy extends BaseShop
{

    public function __construct()
    {
        $this->app_module = input('app_module', SHOP_MODULE);
        if ($this->app_module == 'store') {
            $this->initConstructInfo(); // 加载构造函数重要信息
        } else {
            parent::__construct();
        }
    }

    /**
     * 管理预览
     * @return mixed
     */
    public function management()
    {
        $diy_view = new DiyViewModel();
        $qrcode_info = $diy_view->qrcode([
            'site_id' => $this->site_id,
            'name' => 'DIY_VIEW_INDEX',
            'is_default' => 1
        ])[ 'data' ];
        $this->assign('qrcode_info', $qrcode_info[ 'path' ][ 'h5' ] ?? '');

        $wechat_config_model = new WechatConfig();
        $wechat_config_result = $wechat_config_model->getWechatConfig($this->site_id)[ "data" ][ 'value' ];
        $this->assign('wechat_config', $wechat_config_result);

        $weapp_config_model = new WeappConfig();
        $weapp_config_result = $weapp_config_model->getWeappConfig($this->site_id)[ 'data' ][ 'value' ];
        $this->assign('weapp_config', $weapp_config_result);

        $site_model = new Site();
        $site_info = $site_model->getSiteInfo([ [ 'site_id', '=', $this->site_id ] ], 'site_name')[ 'data' ];
        $this->assign('title', $site_info[ 'site_name' ]);

        return $this->fetch('diy/management');
    }

    /**
     * 网站主页
     */
    public function index()
    {
        $data = [
            'app_module' => $this->app_module,
            'site_id' => $this->site_id,
            'name' => 'DIY_VIEW_INDEX',
            'support_diy_view' => [ '', 'DIY_VIEW_INDEX' ],
            'source' => input('source', ''), // 来源，template：模板
            'template_key' => input('template_key', '') // 模板标识
        ];
        $edit_view = event('DiyViewEdit', $data, true);
        return $edit_view;
    }

    /**
     * 商品分类页面
     */
    public function goodsCategory()
    {
        $data = [
            'app_module' => $this->app_module,
            'site_id' => $this->site_id,
            'name' => 'DIY_VIEW_GOODS_CATEGORY',
            'support_diy_view' => [ 'DIY_VIEW_GOODS_CATEGORY' ],
        ];
        $edit_view = event('DiyViewEdit', $data, true);
        return $edit_view;
    }

    /**
     * 会员中心
     */
    public function memberIndex()
    {
        $data = [
            'app_module' => $this->app_module,
            'site_id' => $this->site_id,
            'name' => 'DIY_VIEW_MEMBER_INDEX',
            'support_diy_view' => [ '', 'DIY_VIEW_MEMBER_INDEX' ],
        ];
        $edit_view = event('DiyViewEdit', $data, true);
        return $edit_view;
    }

    /**
     * 编辑
     */
    public function edit()
    {
        if (request()->isAjax()) {
            $res = 0;
            $id = input('id', 0);
            $name = input('name', '');
            $title = input('title', '');
            $value = input('value', '');
            $template_key = input('template_key', ''); // 来源：模板标识
            if (!empty($name) && !empty($title) && !empty($value)) {
                $diy_view = new DiyViewModel();
                $data = [
                    'site_id' => $this->site_id,
                    'name' => $name,
                    'title' => $title,
                    'type' => $this->app_module,
                    'value' => $value,
                    'is_default' => 1
                ];
                if ($id == 0) {
                    $res = $diy_view->addSiteDiyView($data);
                    // 如果存在模板标识，则保存模板数据（自定义页面、底部导航），第一个页面除外
                    if (!empty($template_key)) {
                        event('UseDiyTemplate', [ 'site_id' => $this->site_id, 'name' => $template_key ], true);
                    }
                } else {
                    $res = $diy_view->editSiteDiyView($data, [ [ 'id', '=', $id ] ]);
                }
            }
            return $res;
        } else {
            $id = input('id', 0);
            $data = [
                'app_module' => $this->app_module,
                'site_id' => $this->site_id,
                'id' => $id
            ];
            $edit_view = event('DiyViewEdit', $data, true);

            return $edit_view;
        }
    }

    /**
     * 微页面
     */
    public function lists()
    {
        if (request()->isAjax()) {
            $page_index = input('page', 1);
            $page_size = input('page_size', PAGE_LIST_ROWS);
            $diy_view = new DiyViewModel();
            $condition = [
                [ 'site_id', '=', $this->site_id ],
                [ 'type', '=', $this->app_module ],
                [ 'name', 'like', [ '%DIY_VIEW_RANDOM_%', 'DIY_VIEW_INDEX' ], 'or' ]
            ];
            $order_by = 'is_default desc,INSTR(\'DIY_VIEW_INDEX\', name) desc, create_time desc';
            $list = $diy_view->getSiteDiyViewPageList($condition, $page_index, $page_size, $order_by);
            if (!empty($list[ 'data' ])) {
                foreach ($list[ 'data' ][ 'list' ] as $k => $v) {
                    $list[ 'data' ][ 'list' ][ $k ][ 'promote' ] = $diy_view->qrcode([
                        'site_id' => $this->site_id,
                        'id' => $v[ 'id' ],
                        'is_default' => $v[ 'is_default' ]
                    ])[ 'data' ];
                }
            }
            return $list;
        } else {
            return $this->fetch('diy/lists');
        }
    }

    /**
     * 链接选择
     */
    public function link()
    {
        if (request()->isAjax()) {
            $link = input('link', '');
            $link_model = new DiyViewLink();
            $tree_params = [
                'site_id' => $this->site_id,
            ];
            $list = $link_model->getLinkTree($tree_params)[ 'data' ];
            $this->assign('list', $list);

            $select_link = json_decode($link, true);
            $this->assign('select_link', $select_link);

            $goods_category_model = new GoodsCategory();
            $category_list = $goods_category_model->getCategoryTree([ [ 'site_id', '=', $this->site_id ] ])[ 'data' ];
            $this->assign('category_list', $category_list);

            return $this->fetch('diy/link');
        }
    }

    /**
     * 删除自定义模板页面
     */
    public function deleteSiteDiyView()
    {
        if (request()->isAjax()) {
            $diy_view = new DiyViewModel();
            $id_array = input('id', 0);
            $condition = [
                [ 'id', 'in', $id_array ]
            ];
            $res = $diy_view->deleteSiteDiyView($condition);
            return $res;
        }
    }

    /**
     * 复制自定义模板页面
     */
    public function copySiteDiyView()
    {
        if (request()->isAjax()) {
            $diy_view = new DiyViewModel();
            $id_array = input('id', 0);
            $condition = [
                [ 'id', '=', $id_array ]
            ];
            //获取被复制数据
            $data = $diy_view->getSiteDiyViewInfo($condition, '*');
            $data = $data[ 'data' ];
            unset($data[ 'id' ]);
            //对数据进行处理
            $value = json_decode($data[ 'value' ], true);
            $data[ 'title' ] .= '副本';
            $value[ 'global' ][ 'title' ] = $data[ 'title' ];
            $data[ 'value' ] = json_encode($value, JSON_UNESCAPED_UNICODE);
            $data[ 'create_time' ] = time();
            $data[ 'click_num' ] = 0;
            $data[ 'name' ] = 'DIY_VIEW_RANDOM_' . time();
            //新增新数据
            $res = $diy_view->addSiteDiyView($data);
            return $res;
        }
    }

    /**
     * 底部导航
     */
    public function bottomNavDesign()
    {
        $diy_view = new DiyViewModel();
        if (request()->isAjax()) {
            $value = json_decode(input("value", ""), true);
            $res = $diy_view->setBottomNavConfig($value, $this->site_id);
            return $res;
        } else {
            $bottom_nav_info = $diy_view->getBottomNavConfig($this->site_id);
            $this->assign('bottom_nav_info', $bottom_nav_info[ 'data' ][ 'value' ]);
            return $this->fetch('diy/bottom_nav_design');
        }
    }

    /**
     * 推广链接
     * @return array
     */
    public function promote()
    {
        if (request()->isAjax()) {
            $id = input('id', 0);
            $is_default = input('is_default', '');
            $diy_view = new DiyViewModel();
            $res = $diy_view->qrcode([
                'site_id' => $this->site_id,
                'id' => $id,
                'is_default' => $is_default
            ]);
            return $res;
        }
    }

    /**
     * 店铺风格
     */
    public function style()
    {
        $diy_view = new DiyViewModel();
        if (request()->isAjax()) {
            $data = [
                'title' => input('title', ''),
                'name' => input('name', ''),
                'main_color' => input('main_color', ''),
                'aux_color' => input('aux_color', '')
            ];
            $res = $diy_view->setStyleConfig($data, $this->site_id);
            $bottom_nav = $diy_view->getBottomNavConfig($this->site_id)[ 'data' ][ 'value' ];

            // 修改底部导航配色
            if ($bottom_nav[ 'type' ] == 1 || $bottom_nav[ 'type' ] == 2)
                $bottom_nav[ 'textHoverColor' ] = $data[ 'main_color' ];
            foreach ($bottom_nav[ 'list' ] as $k => $v) {
                if ($v[ 'selected_icon_type' ] == 'icon') {
                    $bottom_nav[ 'list' ][ $k ][ 'selected_style' ][ 'iconColor' ] = [ $data[ 'main_color' ] ];
                }
            }
            $diy_view->setBottomNavConfig($bottom_nav, $this->site_id);
            return $res;
        } else {
            $res = $diy_view->getStyleConfig($this->site_id)[ 'data' ][ 'value' ];
            $this->assign('style', $res);
            return $this->fetch('diy/style');
        }
    }

    /**
     * 自定义模板选择
     * @return array|mixed
     */
    public function template()
    {
        $diy_view = new DiyViewModel();
        $template = $diy_view->getDiyTemplate([ 'site_id' => $this->site_id ])[ 'data' ];
        $this->assign('template', $template);
        return $this->fetch('diy/template');
    }

    /**
     * 创建
     */
    public function create()
    {
        if (request()->isAjax()) {
            $name = input('name', '');
            $res = event('UseDiyTemplate', [ 'site_id' => $this->site_id, 'name' => $name ], true);
            return $res;
        }
    }

    /**
     * 设为主页
     */
    public function setHome()
    {
        if (request()->isAjax()) {
            $diy_view = new DiyViewModel();
            $id = input('id', 0);
            $res = $diy_view->setHome($id, $this->site_id);
            return $res;
        }
    }

    /**
     * 修改排序
     */
    public function modifySort()
    {
        if (request()->isAjax()) {
            $sort = input('sort', 0);
            $id = input('id', 0);
            $diy_view = new DiyViewModel();
            return $diy_view->modifyDiyViewSort($sort, $id);
        }
    }

    /**
     * 热区设置
     */
    public function heatMap()
    {
        return $this->fetch('diy/heat_map');
    }

    /**
     * 矢量图库
     * @return array|mixed
     */
    public function iconfont()
    {
        $diy_view = new DiyViewModel();
        $icon = input('icon', '');
        if (request()->isAjax()) {
            $type = input('type', 'icon'); // 图标类型
            $icon_list = $diy_view->getIconList($type);
            return $icon_list;
        } else {
            $icon_type = $diy_view->getIconType();
            $this->assign('icon_type', $icon_type);
            $this->assign('icon', $icon);
            return $this->fetch('diy/iconfont');
        }
    }

    /**
     * icon风格设置
     * @return mixed
     */
    public function iconStyleSet()
    {
        $icon = input('icon', '');
        $this->assign('icon', $icon);
        $this->assign('icon_style', ( new DiyViewModel() )->iconStyle());
        return $this->fetch('diy/icon_style');
    }

    public function selectIconStyle()
    {
        $icon = input('icon', '');
        $this->assign('icon', $icon);
        $this->assign('icon_style', ( new DiyViewModel() )->iconStyle());
        return $this->fetch('diy/select_icon_style');
    }

    public function selectLabel()
    {
        $this->assign('data', input());
        return $this->fetch('diy/select_label');
    }

    public function getImgIcon()
    {
        $data = input('data', '');
        $this->assign('data', urldecode($data));
        $this->assign('id', 'id_' . time() . mt_rand(0000, 9999));
        return $this->fetch('diy/icon_img_view');
    }

}