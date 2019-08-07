// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import animated from 'animate.css'
import ElementUI from 'element-ui'
//全局引入elemetui
import 'element-ui/lib/theme-chalk/index.css'
//js中封装的charts的方法
import myCharts from './js/myCharts'
//js中封装的cookie的方法
import cookie from './js/cookie'
//axios请求封装
import {get,post,delet,postBody} from './request/api'

Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$delete = delet;
Vue.prototype.$postBody = postBody;
Vue.use(cookie);
Vue.use(myCharts)
Vue.use(ElementUI).use(animated)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
