import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
  {path:'/',
  component:() => import('../pages/home/home.vue'),
},
{path:'/login',component:() => import('../pages/login/root.vue')}

]

const router = new Router({
  mode: 'hash',   
  base: process.env.BASE_URL,  //路径以什么为基础
  routes,
})
export default router