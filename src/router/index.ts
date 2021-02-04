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
      }
    ]
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router

