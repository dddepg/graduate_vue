import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  { 
    path: '/User',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserPage.vue'),
    children:[
      {
        path:'first',
        component: () => import('../views/userPages/FirstPage.vue')
      },
      {
        path:'wait',
        component:()=> import('../views/WaitingDevelopPage.vue')
      },
      {
        path:'tread',
        component:()=>import('../views/userPages/ResearchTreadPage.vue')
      },
      {
        path:'paper',
        component:()=>import('../views/userPages/allPaperPage.vue')
      },
      {
        path:'myPaper',
        component:()=>import('../views/userPages/myPaperPage.vue')
      },
      {
        path:'test',
        component:()=>import('../views/userPages/test.vue')
      },
      {
        path:'usermanage',
        component:()=>import('../views/userPages/userManagePage.vue')
      }

    ]
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router

