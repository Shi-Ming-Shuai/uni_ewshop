<template>
	<!-- 跳转 -->
	<navigator>
		<u--image :showLoading="true" :src="item.cover_url" width="100%" height="320rpx">
		</u--image>
		<view class="desc">
			<view class="goods-name">
				{{item.title}}
			</view>
			<view class="goods-info">
				<text class="price" style="color: #98d8bb; margin-right: 10rpx;">￥{{item.price}}</text>
				<text class="sales">销量:{{item.sales}}</text>
			</view>
		</view>
	</navigator>
</template>

<script>
	export default {
		name: 'goods-list',
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.desc {
		font-size: 24rpx;
		text-align: center;

		.goods-name {
			margin: 10rpx 0;
		}
	}
</style>
