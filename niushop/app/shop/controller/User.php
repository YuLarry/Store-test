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

use app\model\store\Store;
use app\model\system\Group;
use app\model\system\Menu;
use app\model\system\User as UserModel;
use addon\cashier\model\Group as StoreUserGroup;
use app\model\system\UserGroup;
use think\facade\Db;

/**
 * 用户
 * Class User
 * @package app\shop\controller
 */
class User extends BaseShop
{
    /**
     * 用户列表
     * @return mixed
     */
    public function user()
    {
        if (request()->isAjax()) {
            $page = input('page', 1);
            $page_size = input('page_size', PAGE_LIST_ROWS);
            $status = input('status', '');
            $search_keys = input('search_keys', "");

            $condition = [];
            $condition[] = [ "site_id", "=", $this->site_id ];
            $condition[] = [ "app_module", "=", $this->app_module ];
            if (!empty($search_keys)) {
                $condition[] = [ 'username', 'like', '%' . $search_keys . '%' ];
            }
            if ($status != "") {
                $condition[ "status" ] = [ "status", "=", $status ];
            }

            $user_model = new UserModel();
            $list = $user_model->getUserPageList($condition, $page, $page_size, "is_admin desc,create_time desc");
            if (!empty($list['data']['list']) && addon_is_exit('cashier', $this->site_id)) {
                $join = [
                    ['store s', 's.store_id = ug.store_id', 'left'],
                    ['cashier_auth_group cag', 'cag.group_id = ug.group_id', 'left']
                ];
                foreach ($list['data']['list'] as $k => $item) {
                    $list['data']['list'][$k]['user_group_list'] = (new UserGroup())->getUserList([ ['ug.uid', '=', $item['uid'] ] ], 's.store_name,cag.group_name', '', 'ug', $join)['data'];
                }
            }
            return $list;
        } else {
            $this->forthMenu();
            $this->assign('store_is_exit', addon_is_exit('store', $this->site_id));
            $this->assign('cashier_is_exit', addon_is_exit('cashier', $this->site_id));
            return $this->fetch("user/user_list");
        }
    }

    /**
     * 添加用户
     * @return mixed
     */
    public function addUser()
    {
        if (request()->isAjax()) {
            $username = input("username", "");
            $password = input("password", "");
            $group_id = input("group_id", "");
            $store = input("store", "[]");

            $user_model = new UserModel();
            $data = array (
                "username" => $username,
                "password" => $password,
                "group_id" => $group_id,
                "app_module" => $this->app_module,
                "site_id" => $this->site_id,
                "store" => json_decode($store, true)
            );
            $result = $user_model->addUser($data, '', 'add');
            return $result;
        } else {
            $group_model = new Group();
            $group_list_result = $group_model->getGroupList([ [ "site_id", "=", $this->site_id ], [ "app_module", "=", $this->app_module ] ]);
            $group_list = $group_list_result[ "data" ];
            $this->assign("group_list", $group_list);

            $cashier_is_exit = addon_is_exit('cashier', $this->site_id);
            $this->assign('store_is_exit', addon_is_exit('store', $this->site_id));
            $this->assign('cashier_is_exit', $cashier_is_exit);
            if ($cashier_is_exit) {
                $store_user_group = (new StoreUserGroup())->getGroupList([ ['', 'exp', Db::raw("keyword = '' OR site_id = {$this->site_id}") ] ], 'group_id,group_name')['data'];
                $this->assign('store_user_group', $store_user_group);
                $store_info = (new Store())->getDefaultStore($this->site_id)['data'] ?? [];
                $this->assign('default_store_id', $store_info['store_id'] ?? 0);
            }
            return $this->fetch("user/add_user");
        }
    }

    /**
     * 编辑用户
     * @return mixed
     */
    public function editUser()
    {
        $user_model = new UserModel();
        if (request()->isAjax()) {
            $group_id = input("group_id", "");
            $status = input("status", "");
            $uid = input("uid", 0);
            $store = input("store", "[]");

            //用户信息
            $condition = array (
                [ "uid", "=", $uid ],
                [ "site_id", "=", $this->site_id ],
                [ "app_module", "=", $this->app_module ],
            );
            $user_info_result = $user_model->getUserInfo($condition, 'is_admin, uid');
            $user_info = $user_info_result[ "data" ];

            if ($user_info[ 'is_admin' ]) {
                return error('-1', '超级管理员不可编辑');
            }

            $condition = array (
                [ "uid", "=", $uid ],
                [ "site_id", "=", $this->site_id ],
                [ "app_module", "=", $this->app_module ],
            );
            $data = array (
                "group_id" => $group_id,
                "status" => $status,
                "store" => json_decode($store, true)
            );

            $this->addLog("编辑用户:" . $uid);

            $result = $user_model->editUser($data, $condition);
            return $result;
        } else {
            $uid = input("uid", 0);
            //用户信息
            $condition = array (
                [ "uid", "=", $uid ],
                [ "site_id", "=", $this->site_id ],
                [ "app_module", "=", $this->app_module ],
            );
            $user_info_result = $user_model->getUserInfo($condition);
            $user_info = $user_info_result[ "data" ];

            if (empty($user_info)) $this->error('未获取到用户数据', addon_url('shop/user/user'));
            if ($user_info[ 'is_admin' ]) $this->error('超级管理员不可编辑');

            $this->assign("uid", $uid);
            $this->assign("edit_user_info", $user_info);

            //用户组
            $group_model = new Group();
            $group_list_result = $group_model->getGroupList([ [ "site_id", "=", $this->site_id ], [ "app_module", "=", $this->app_module ] ]);
            $group_list = $group_list_result[ "data" ];
            $this->assign("group_list", $group_list);

            $cashier_is_exit = addon_is_exit('cashier', $this->site_id);
            $this->assign('store_is_exit', addon_is_exit('store', $this->site_id));
            $this->assign('cashier_is_exit', $cashier_is_exit);
            if ($cashier_is_exit) {
                $store_user_group = (new StoreUserGroup())->getGroupList([ ['', 'exp', Db::raw("keyword = '' OR site_id = {$this->site_id}") ] ], 'group_id,group_name')['data'];
                $this->assign('store_user_group', $store_user_group);
                $store_info = (new Store())->getDefaultStore($this->site_id)['data'] ?? [];
                $this->assign('default_store_id', $store_info['store_id'] ?? 0);
            }

            return $this->fetch("user/edit_user");
        }

    }

    /**
     * 删除用户
     */
    public function deleteUser()
    {
        if (request()->isAjax()) {
            $uid = input("uid", 0);
            $user_model = new UserModel();

            //用户信息
            $condition = array (
                [ "uid", "=", $uid ],
                [ "site_id", "=", $this->site_id ],
                [ "app_module", "=", $this->app_module ],
            );
            $user_info_result = $user_model->getUserInfo($condition, 'is_admin, uid');
            $user_info = $user_info_result[ "data" ];

            if ($user_info[ 'is_admin' ]) {
                return error('-1', '超级管理员不可编辑');
            }

            $condition = array (
                [ "uid", "=", $uid ],
                [ "app_module", "=", $this->app_module ],
                [ "site_id", "=", $this->site_id ],
            );
            $result = $user_model->deleteUser($condition);
            return $result;
        }
    }

    /**
     * 清除后台所有用户的登录信息
     */
    public function deleteUserLoginInfo()
    {
        $app_module = $this->app_module;
        $site_id = $this->site_id;
        $user_model = new UserModel();
        $result = $user_model->deleteUserLoginInfo($app_module, $site_id);
        return $result;
    }

    /**
     * 编辑管理员状态
     */
    public function modifyUserStatus()
    {
        if (request()->isAjax()) {
            $uid = input('uid', 0);
            $status = input('status', 0);
            $user_model = new UserModel();

            //用户信息
            $condition = array (
                [ "uid", "=", $uid ],
                [ "site_id", "=", $this->site_id ],
                [ "app_module", "=", $this->app_module ],
            );
            $user_info_result = $user_model->getUserInfo($condition, 'is_admin, uid');
            $user_info = $user_info_result[ "data" ];

            if ($user_info[ 'is_admin' ]) {
                return error('-1', '超级管理员不可编辑');
            }

            $condition = array (
                [ "uid", "=", $uid ],
                [ "site_id", "=", $this->site_id ],
                [ "app_module", "=", $this->app_module ],
            );
            $result = $user_model->modifyUserStatus($status, $condition);
            return $result;
        }
    }

    /**
     * 重置密码
     */
    public function modifyPassword()
    {
        if (request()->isAjax()) {
            $password = input('password', '123456');
            $uid = input('uid', 0);
            $site_id = $this->site_id;
            $user_model = new UserModel();

            //用户信息
            $condition = array (
                [ "uid", "=", $uid ],
                [ "site_id", "=", $this->site_id ],
                [ "app_module", "=", $this->app_module ],
            );
            $user_info_result = $user_model->getUserInfo($condition, 'is_admin, uid');
            $user_info = $user_info_result[ "data" ];

            if ($user_info[ 'is_admin' ]) {
                return error('-1', '超级管理员不可编辑');
            }

            return $user_model->modifyUserPassword($password, [ [ 'uid', '=', $uid ], [ 'site_id', '=', $site_id ] ]);
        }
    }

    /**
     * 用户列表
     * @return mixed
     */
    public function group()
    {
        if (request()->isAjax()) {
            $page = input('page', 1);
            $page_size = input('page_size', PAGE_LIST_ROWS);
            $search_keys = input('search_keys', "");

            $condition = array (
                [ 'site_id', "=", $this->site_id ],
                [ "app_module", "=", $this->app_module ]
            );
            if (!empty($search_keys)) {
                $condition[] = [ 'desc', 'like', '%' . $search_keys . '%' ];
            }

            $group_model = new Group();
            $list = $group_model->getGroupPageList($condition, $page, $page_size);
            return $list;
        } else {
            $this->forthMenu();
            return $this->fetch("user/group_list");
        }
    }

    /**
     * 添加用户组
     * @return mixed
     */
    public function addGroup()
    {
        if (request()->isAjax()) {
            $group_name = input('group_name', '');
            $menu_array = input('menu_array', '');
            $desc = input('desc', '');
            $group_model = new Group();
            $data = array (
                "group_name" => $group_name,
                "site_id" => $this->site_id,
                "app_module" => $this->app_module,
                "group_status" => 1,
                "menu_array" => $menu_array,
                "desc" => $desc,
                "is_system" => 0,
                "create_time" => time(),
            );
            $result = $group_model->addGroup($data);
            return $result;
        } else {
            $menu_model = new Menu();
            $menu_list = $menu_model->getMenuList([ [ 'app_module', '=', $this->app_module ], [ "is_control", "=", 1 ] ], '*', 'level asc,sort ASC');
            $menu_tree = list_to_tree($menu_list[ 'data' ], 'name', 'parent', 'child_list', '');
            $this->assign('tree_data', $menu_tree);
            return $this->fetch('user/add_group');
        }
    }

    /**
     * 编辑用户组
     * @return mixed
     */
    public function editGroup()
    {
        $group_model = new Group();
        if (request()->isAjax()) {
            $group_name = input('group_name', '');
            $menu_array = input('menu_array', '');
            $group_id = input('group_id', 0);
            $desc = input('desc', '');

            $data = array (
                "group_name" => $group_name,
                "menu_array" => $menu_array,
                "desc" => $desc,
            );
            $condition = array (
                [ "group_id", "=", $group_id ],
                [ "site_id", "=", $this->site_id ],
                [ "app_module", "=", $this->app_module ]
            );
            $result = $group_model->editGroup($data, $condition);
            return $result;
        } else {
            $group_id = input('group_id', 0);
            $condition = array (
                [ "group_id", "=", $group_id ],
                [ "site_id", "=", $this->site_id ],
                [ "app_module", "=", $this->app_module ]
            );
            $group_info_result = $group_model->getGroupInfo($condition);
            $group_info = $group_info_result[ "data" ];

            if (empty($group_info)) $this->error('未获取到用户组数据', addon_url('shop/user/group'));

            $this->assign("group_info", $group_info);
            $this->assign("group_id", $group_id);

            //获取菜单权限
            $menu_model = new Menu();
            $menu_list = $menu_model->getMenuList([ [ 'app_module', '=', $this->app_module ], [ "is_control", "=", 1 ] ], '*', 'sort ASC');

            //处理选中数据
            $group_array = $group_info[ 'menu_array' ];
            $checked_array = explode(',', $group_array);
            foreach ($menu_list[ 'data' ] as $key => $val) {
                if (in_array($val[ 'name' ], $checked_array)) {
                    $menu_list[ 'data' ][ $key ][ 'checked' ] = true;
                } else {
                    $menu_list[ 'data' ][ $key ][ 'checked' ] = false;
                }
            }
            $menu_tree = list_to_tree($menu_list[ 'data' ], 'name', 'parent', 'child_list', '');
            $this->assign('tree_data', $menu_tree);

            return $this->fetch('user/edit_group');
        }
    }

    /**
     * 删除用户组
     */
    public function deleteGroup()
    {
        if (request()->isAjax()) {
            $group_id = input('group_id', '');
            $condition = array (
                [ "group_id", "=", $group_id ],
                [ "site_id", "=", $this->site_id ],
                [ "app_module", "=", $this->app_module ],
            );
            $group_model = new Group();
            $result = $group_model->deleteGroup($condition);
            return $result;
        }
    }

    /**
     * 用户组状态
     */
    public function modifyGroupStatus()
    {
        if (request()->isAjax()) {
            $group_id = input('group_id', 0);
            $status = input('status', 0);
            $group_model = new Group();
            $condition = array (
                [ "group_id", "=", $group_id ],
                [ "site_id", "=", $this->site_id ],
                [ "app_module", "=", $this->app_module ],
            );
            $result = $group_model->modifyGroupStatus($status, $condition);
            return $result;
        }
    }

    /**
     * 用户日志
     */
    public function userLog()
    {
        $user_model = new UserModel();
        if (request()->isAjax()) {
            $page = input('page', 1);
            $page_size = input('page_size', PAGE_LIST_ROWS);
            $uid = input('uid', '0');

            $condition = [];
            $condition[] = [ "site_id", "=", $this->site_id ];
            $search_keys = input('search_keys', "");
            if (!empty($search_keys)) {
                $condition[] = [ 'action_name', 'like', '%' . $search_keys . '%' ];
            }
            if ($uid > 0) {
                $condition[] = [ 'uid', '=', $uid ];
            }

            $list = $user_model->getUserlogPageList($condition, $page, $page_size, "create_time desc");
            return $list;
        } else {
            $this->forthMenu();

            //获取站点所有用户
            $condition = [];
            $condition[] = [ "site_id", "=", $this->site_id ];
            $condition[] = [ "app_module", "=", $this->app_module ];
            $user_list_result = $user_model->getUserList($condition);
            $user_list = $user_list_result[ "data" ];
            $this->assign("user_list", $user_list);

            return $this->fetch('user/user_log');
        }
    }

    /**
     * 批量删除日志
     */
    public function deleteUserLog()
    {
        if (request()->isAjax()) {
            $user_model = new UserModel();
            $id = input("id", "");
            $condition = array (
                [ "id", "in", $id ],
                [ "site_id", '=', $this->site_id ],
            );
            $res = $user_model->deleteUserLog($condition);
            return $res;
        }
    }
}