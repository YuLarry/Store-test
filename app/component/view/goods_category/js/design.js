/**
 * 空的验证组件，后续如果增加业务，则更改组件
 */
var goodsCategoryHtml = '<div class="goods-category-edit layui-form">';
		goodsCategoryHtml += '<div class="layui-form-item">';
			goodsCategoryHtml += '<label class="layui-form-label sm">风格</label>';
			goodsCategoryHtml += '<div class="layui-input-block">';
				goodsCategoryHtml += '<p class="selected-style text-color" @click="selectClassificationStyle()">选择</p>';
			goodsCategoryHtml += '</div>';
		goodsCategoryHtml += '</div>';
		goodsCategoryHtml += '<div class="layui-form-item">';
			goodsCategoryHtml += '<label class="layui-form-label sm">顶部搜索框</label>';
			goodsCategoryHtml += '<div class="layui-input-block">';
				goodsCategoryHtml += '<div class="layui-unselect layui-form-checkbox" lay-skin="primary" @click="data.search = data.search == 1 ? 0 : 1" :class="{ \'layui-form-checked\' : data.search == 1 }">';
					goodsCategoryHtml += '<span>{{ data.search == 1 ? \'显示\' : \'隐藏\' }}</span>';
					goodsCategoryHtml += '<i class="layui-icon layui-icon-ok"></i>';
				goodsCategoryHtml += '</div>';
			goodsCategoryHtml += '</div>';

		goodsCategoryHtml += '</div>';
		goodsCategoryHtml += '<div class="layui-form-item" v-show="data.template == 1">';
			goodsCategoryHtml += '<label class="layui-form-label sm">展示分类</label>';
			goodsCategoryHtml += '<div class="layui-input-block">';
				goodsCategoryHtml += '<div @click="data.level = 2" :class="{ \'layui-unselect layui-form-radio\' : true,\'layui-form-radioed\' : (data.level == 2) }">';
					goodsCategoryHtml += '<i class="layui-anim layui-icon">&#xe63f;</i>';
					goodsCategoryHtml += '<div>二级分类</div>';
				goodsCategoryHtml += '</div>';
				goodsCategoryHtml += '<div @click="data.level = 3" :class="{ \'layui-unselect layui-form-radio\' : true,\'layui-form-radioed\' : (data.level == 3) }">';
					goodsCategoryHtml += '<i class="layui-anim layui-icon">&#xe63f;</i>';
					goodsCategoryHtml += '<div>三级分类</div>';
				goodsCategoryHtml += '</div>';
			goodsCategoryHtml += '</div>';
		goodsCategoryHtml += '</div>';
		goodsCategoryHtml += '<div class="layui-form-item" v-show="data.template == 2 || data.template == 3">';
			goodsCategoryHtml += '<label class="layui-form-label sm">展示分类</label>';
			goodsCategoryHtml += '<div class="layui-input-block">';
				goodsCategoryHtml += '<div @click="data.goodsLevel = 1" :class="{ \'layui-unselect layui-form-radio\' : true,\'layui-form-radioed\' : (data.goodsLevel == 1) }">';
				goodsCategoryHtml += '<i class="layui-anim layui-icon">&#xe63f;</i>';
				goodsCategoryHtml += '<div>一级分类</div>';
			goodsCategoryHtml += '</div>';
			goodsCategoryHtml += '<div @click="data.goodsLevel = 2" :class="{ \'layui-unselect layui-form-radio\' : true,\'layui-form-radioed\' : (data.goodsLevel == 2) }">';
				goodsCategoryHtml += '<i class="layui-anim layui-icon">&#xe63f;</i>';
				goodsCategoryHtml += '<div>二级分类</div>';
			goodsCategoryHtml += '</div>';
			goodsCategoryHtml += '</div>';
		goodsCategoryHtml += '</div>';
		goodsCategoryHtml += '<div class="layui-form-item" v-show="(data.template == 2 || data.template == 3) && data.goodsLevel == 1">';
			goodsCategoryHtml += '<label class="layui-form-label sm">加载模式</label>';
			goodsCategoryHtml += '<div class="layui-input-block">';
				goodsCategoryHtml += '<div @click="data.loadType = \'all\'" :class="{ \'layui-unselect layui-form-radio\' : true,\'layui-form-radioed\' : (data.loadType == \'all\') }">';
					goodsCategoryHtml += '<i class="layui-anim layui-icon">&#xe63f;</i>';
					goodsCategoryHtml += '<div>全部加载</div>';
				goodsCategoryHtml += '</div>';
				goodsCategoryHtml += '<div @click="data.loadType = \'part\'" :class="{ \'layui-unselect layui-form-radio\' : true,\'layui-form-radioed\' : (data.loadType == \'part\') }">';
					goodsCategoryHtml += '<i class="layui-anim layui-icon">&#xe63f;</i>';
					goodsCategoryHtml += '<div>部分加载</div>';
				goodsCategoryHtml += '</div>';
			goodsCategoryHtml += '</div>';
		goodsCategoryHtml += '</div>';
		goodsCategoryHtml += '<div class="layui-form-item" v-show="data.template == 2">';
			goodsCategoryHtml += '<label class="layui-form-label sm">快捷购买</label>';
			goodsCategoryHtml += '<div class="layui-input-block">';
				goodsCategoryHtml += '<div class="layui-unselect layui-form-checkbox" lay-skin="primary" @click="data.quickBuy = data.quickBuy == 1 ? 0 : 1" :class="{ \'layui-form-checked\' : data.quickBuy == 1 }">';
					goodsCategoryHtml += '<span>{{ data.quickBuy == 1 ? \'显示\' : \'隐藏\' }}</span>';
					goodsCategoryHtml += '<i class="layui-icon layui-icon-ok"></i>';
				goodsCategoryHtml += '</div>';
			goodsCategoryHtml += '</div>';
		goodsCategoryHtml += '</div>';
	goodsCategoryHtml += '</div>';

Vue.component("goods-category", {
	template: goodsCategoryHtml,
	data: function () {
		return {
			data: this.$parent.data
		}
	},
	created:function() {
		if(!this.$parent.data.verify) this.$parent.data.verify = [];
		this.$parent.data.verify.push(this.verify);//加载验证方法

		this.$parent.data.ignore = ['textColor','pageBgColor','componentBgColor','elementBgColor','marginTop','marginBottom','marginBoth','componentAngle','elementAngle'];//加载忽略内容 -- 其他设置中的属性设置
		this.$parent.data.ignoreLoad = true; // 等待忽略数组赋值后加载
		if (!this.data.goodsLevel) this.$set(this.data, 'goodsLevel', 1);
		if (!this.data.loadType) this.$set(this.data, 'loadType', 'part');
	},
	methods: {
		verify : function (index) {
			var res = { code : true, message : "" };
			return res;
		},
		selectClassificationStyle: function () {
			var self = this;
			layer.open({
				type: 1,
				title: '选择风格',
				area: ['930px', '630px'],
				content: $(".draggable-element[data-index='" + self.data.index + "'] .edit-attribute .goods-category-popup-wrap").html(),
				success: function (layero, index) {
					layui.use(['form'], function () {
						var form = layui.form;
						form.render();
						$(".layui-layer-content input[name='level']").val(self.data.level);
						$(".layui-layer-content input[name='template']").val(self.data.template);

						$("body").on("click", ".layui-layer-content .goods-classification-style .style-title li", function () {
							$(this).addClass("selected bg-color").siblings().removeClass("selected bg-color");
							$(".layui-layer-content .goods-classification-style .style-content li").eq($(this).index()).removeClass("layui-hide").siblings().addClass('layui-hide');

							// 清除所有
							$(".layui-layer-content .goods-classification-style .style-content li .style-img-box").removeClass("selected border-color");

							// 选中第一个
							$(".layui-layer-content .goods-classification-style .style-content li").eq($(this).index()).find(".style-img-box").eq(0).addClass("selected border-color");
							$(".layui-layer-content input[name='level']").val($(this).index() + 1);
							$(".layui-layer-content input[name='template']").val(1);
						});

						$("body").on("click", ".layui-layer-content .goods-classification-style .style-content li .style-img-box", function () {
							$(".layui-layer-content input[name='template']").val($(this).index() + 1);
							$(this).addClass("selected border-color").siblings().removeClass("selected border-color");
						});

						//确定
						form.on("submit(confirm)", function (data) {
							self.data.level = data.field.level;
							self.data.template = data.field.template;
							layer.closeAll()
						});

						// 返回
						$(".layui-layer-content .back").click(function () {
							layer.closeAll()
						});

					});
				}
			});
		}
	}
});