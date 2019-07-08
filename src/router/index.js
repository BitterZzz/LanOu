import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
    {
         path:'home',
         components:()=>import('../pages/home/home')
    },
]

const router = new Router({
  mode: 'hash',   
  base: process.env.BASE_URL,  //路径以什么为基础
  routes,
})
export default router