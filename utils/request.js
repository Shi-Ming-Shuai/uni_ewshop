// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
	// 初始化请求配置
	uni.$u.http.setConfig((config) => {
		/* config 为默认全局配置*/
		config.baseURL = 'https://api.shop.eduwork.cn/' /* 根域名 */
		// #ifdef H5 || APP-PLUS || MP-ALIPAY || MP-WEIXIN
		timeout: 60000
		// #endif
		return config
	})

	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => {

		//  可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
		config.header.Authorization = `Bearer ${vm.vuex_token}`

		return config
	}, config => {
		//错误信息传递下去  （却保 try catch 能捕获到 错误的响应）
		return Promise.reject(config)
	})

	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => {
		return response.data
	}, (err) => {
		const {
			statusCode
		} = err
		uni.$u.toast('http请求响应失败')
		if (statusCode == 401) {
			uni.$u.toast('验证失败,请重新登录')
		}
		console.log(err);
		// 错误信息传递下去  （却保 try catch 能捕获到 错误的响应）
		return Promise.reject(err)
	})
}
