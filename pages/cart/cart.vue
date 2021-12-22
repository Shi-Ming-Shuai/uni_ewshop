<template>
	<view>
		<navigator url="/pages/login/login">跳转到登录</navigator>
		<u-row >
			<u-col span="6" v-for="item in 12" :key="item">
				<navigator>
					<view class="w">
						ww
					</view>
				</navigator>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			// const app = getApp()
			// const currentPage = getCurrentPages()[0]
			// const params =  currentPage.options
			// console.log(this.$u.queryParams(params));
			// console.log(currentPage);
			// console.log(app);
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

</style>
