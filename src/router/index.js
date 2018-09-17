import Vue from 'vue'
import Router from 'vue-router'
import main from '@/page/main'
import serviceRouter from '@/page/service/router.js'

Vue.use(Router)

// export const routerConfig = [
//   serviceRouter
// ]
const loginRouter = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/page/main.vue')
  },
  {
    path: '/service',
    name: 'service',
    redirect: '/service/fw',
    component: main,
    children: serviceRouter
  }
]

const router = new Router({
  routes: [
    ...loginRouter
  ],
  mode: 'history'
})

// function childRouter (routers, name, route, next) {
//   let len = routers.length
//   let i = 0
//   let notHandle = true
//   while (i < len) {
//     if (routers[i].name === name && routers[i].children && routers[i].redirect === undefined) {
//       route.replace({
//         name: routers[i].children[0].name
//       })
//       notHandle = false
//       next()
//       break
//     }
//     i++
//   }
//   if (notHandle) {
//     next()
//   }
// }
router.beforeEach((to, from, next) => {
  // debugger
  // childRouter(loginRouter, to.name, router, next)
  // router.replace({name: 'login'})
  next()
})
export default router
