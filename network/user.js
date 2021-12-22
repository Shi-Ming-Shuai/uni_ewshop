// 封装的 uview中的 http请求
const http = uni.$u.http

// 用户登录
export const userLogin = data => {
	return http.post('/api/auth/login', data)
}

// 用户详情
export const userDetails = () => {
	return http.get('/api/user')
}
