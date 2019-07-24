import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
function getCookie(name) {
  var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (arr = document.cookie.match(reg))
    return (arr[2])
  else
    return null
}
const routes = [
  {path:'/',
   component:() => import('../pages/home/home.vue'),
    children:[
        
        {
          path:"",
          redirect:("homepage"),
        },
        {
          path:'homepage',
          name:'首页',
          component:()=>import('../pages/home/children/homePage.vue'),
          beforeEnter: (to, from, next) => {
            if(getCookie('loginCode') === '0'){
              next()
            }else{
              next('/login')
            }
  
          }
          // children:[
          //     {
          //       path:'fault',
          //       component:()=>import('../pages/fault/fault.vue')
          //       // redirect
          //     },
          //  ]
        },
 
        {
          path:'waterPurifier',
          name:'净水器管理',
          component:()=>import('../pages/home/children/waterPurifier.vue'),
          // children:[
          //   {
          //     path:"particulars",
          //     component:()=>import('../pages/waterMange/particulars.vue')
          //   },
          //   {
          //     path:"*",
          //     redirect:("particulars")
          //   }
          // ]
        },
        {
          path:'account',
          name:'账号管理',
          component:()=>import('../pages/home/children/account.vue'),
        },
        {
          path:'user',
          name:"用户管理",
          component:()=>import('../pages/home/children/user.vue')
        },
        {
          path:'operationLog',
          name:'操作日志',
          component:()=>import('../pages/home/children/operationLog.vue')
        },
     
    ]
  },
  {
    path:'/login',
    component:() => import('../pages/login/root.vue'),
    beforEnter:(to, from, next) => {
      if(getCookie('loginCode') === '0'){
        console.log(666)
      }else{
        console.log(777)
      }
    }
  },
]
const router = new Router({
  // mode: 'hash',   
  base: process.env.BASE_URL,  //路径以什么为基础
  routes,
})
export default router