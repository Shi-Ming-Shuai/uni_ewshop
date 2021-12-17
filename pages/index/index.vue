<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<text>阿瓦达我的</text>
		<new></new>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	text {
		color: pink;
	}
</style>
