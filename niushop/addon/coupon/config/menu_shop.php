<?php
// +----------------------------------------------------------------------
// | 平台端菜单设置
// +----------------------------------------------------------------------
return [
    [
        'name' => 'PROMOTION_COUPON',
        'title' => '优惠券',
        'url' => 'coupon://shop/coupon/lists',
        'parent' => 'PROMOTION_CENTER',
        'is_show' => 1,
        'is_control' => 1,
        'is_icon' => 0,
        'picture' => '',
        'picture_select' => '',
        'sort' => 3,
        'child_list' => [
            [
                'name' => 'PROMOTION_COUPON_LIST',
                'title' => '优惠券列表',
                'url' => 'coupon://shop/coupon/lists',
                'is_show' => 1,
                'is_control' => 1,
                'sort' => 1,
                'is_icon' => 0,
            ],
            [
                'name' => 'MEMBER_ACCOUNT_MEMBER_COUPON',
                'title' => '会员优惠券',
                'url' => 'shop/memberaccount/coupon',
                'is_show' => 1,
                'sort' => 2,
            ],
            [
                'name' => 'PROMOTION_COUPON_DETAIL',
                'title' => '优惠券详情',
                'url' => 'coupon://shop/coupon/detail',
                'sort' => 1,
                'is_show' => 0
            ],
            [
                'name' => 'PROMOTION_COUPON_ADD',
                'title' => '添加优惠券',
                'url' => 'coupon://shop/coupon/add',
                'sort' => 1,
                'is_show' => 0
            ],
            [
                'name' => 'PROMOTION_COUPON_EDIT',
                'title' => '编辑优惠券',
                'url' => 'coupon://shop/coupon/edit',
                'sort' => 1,
                'is_show' => 0
            ],
            [
                'name' => 'PROMOTION_COUPON_CLOSE',
                'title' => '关闭优惠券',
                'url' => 'coupon://shop/coupon/close',
                'sort' => 1,
                'is_show' => 0
            ],
            [
                'name' => 'PROMOTION_COUPON_DELETE',
                'title' => '删除优惠券',
                'url' => 'coupon://shop/coupon/delete',
                'sort' => 1,
                'is_show' => 0
            ],
            [
                'name' => 'PROMOTION_COUPON_RECEIVE',
                'title' => '优惠券领取记录',
                'url' => 'coupon://shop/coupon/receive',
                'sort' => 1,
                'is_show' => 0
            ],

        ]
    ],
];
