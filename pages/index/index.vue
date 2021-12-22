<template>
	<view>
		<!-- 轮播图 -->
		<u-swiper :list="swiperList" previousMargin="30" nextMargin="30" circular :autoplay="true" radius="5"
			bgColor="#ffffff"></u-swiper>
		<!-- 标签 -->
		<u-tabs :list="tabList" :current="currentTab" :scrollable="false" lineWidth="40" @change="changeTab"></u-tabs>
		<!-- 标签对应商品 -->

		<view class="goods">
			<u-row>
				<u-col span="6" v-for="(item,i) in goodsList" :key="i">
					<!-- 商品列表组件 -->
					<goods-list :item="item"></goods-list>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	// 请求
	import {
		getHome
	} from '@/network/index'
	export default {
		data() {
			return {
				page: 1,
				currentTab: 0,
				swiperList: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				tabList: [{
					name: '畅销',
				}, {
					name: '新书',
				}, {
					name: '精选'
				}],
				goodsList: []
			}
		},
		onLoad() {
			this.getHomeData()
		},
		// 页面滚动到底部的事件
		onReachBottom() {
			this.$u.toast('触底')
			this.page++
			// 下拉加载更多 分页效果
			const cate = ['sales', 'new', 'recommend']
			this.getHomeData({
				page: this.page,
				[cate[this.currentTab]]: 1
			})
		},
		methods: {
			// 标签卡切换
			changeTab(i) {
				this.currentTab = i.index
				// 清空数据
				this.goodsList = []
				this.page = 1
				const cate = ['sales', 'new', 'recommend']
				this.getHomeData({
					page: this.page,
					[cate[this.currentTab]]: 1
				})
			},
			// 请求
			async getHomeData(params) {

				const res = await getHome(params)
				this.goodsList = [...this.goodsList, ...res.goods.data]
				console.log(this.goodsList);
			}
		},
	}
</script>

<style lang="scss" scoped>
	// row不自动换行
	.goods /deep/.u-row {
		flex-wrap: wrap;
	}

	.u-col {
		box-sizing: border-box;
		margin-top: 40rpx;
		padding: 0 20rpx !important;
		box-shadow: 0px 10px 10px rgba(237, 237, 237, 0.5);
	}

	.desc {
		font-size: 24rpx;
		text-align: center;

		.goods-name {
			margin: 10rpx 0;
		}
	}
</style>
