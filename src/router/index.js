import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
  {path:'/',
   component:() => import('../pages/home/home.vue'),
    children:[
        {
          path:'homepage',
          component:()=>import('../pages/home/children/homePage.vue')
        },
        {
          path:'waterPurifier',
          component:()=>import('../pages/home/children/waterPurifier.vue')
        },
        {
          path:'account',
          component:()=>import('../pages/home/children/account.vue')
        },
        {
          path:'user',
          component:()=>import('../pages/home/children/user.vue')
        },
        {
          path:'operationLog',
          component:()=>import('../pages/home/children/operationLog.vue')
        },
     
    ]
  },
  {
    path:'/login',
    component:() => import('../pages/login/root.vue')
  }

]

const router = new Router({
  mode: 'hash',   
  base: process.env.BASE_URL,  //路径以什么为基础
  routes,
})
export default router