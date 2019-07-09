// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select,Submenu,Icon,Menu,Aside,MenuItemGroup,MenuItem } from 'element-ui';


Vue.use(Button).use(Select).use(Submenu).use(Icon).use(Menu).use(Aside).use(MenuItemGroup)
Vue.use(MenuItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
