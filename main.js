import Vue from 'vue'
import App from './App'
// uView ui
import uView from 'uview-ui';
Vue.use(uView);
// uView 中封装的 vuex
import store from '@/store';
let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);


Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
// require('/config/request.js')(app)括号里的app就是传入的实参
// 引入请求封装，将app参数传递到配置中
require('@/utils/request.js')(app)
app.$mount()
