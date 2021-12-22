// 封装的 uview中的 http请求
const http = uni.$u.http

// 首页
export const getHome = params => {
	return http.get('/api/index', {
		params
	})
}
