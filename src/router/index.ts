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
    children: [
      {
        path: 'first',
        component: () => import('../views/userPages/FirstPage.vue')
      },
      {
        path: 'wait',
        component: () => import('../views/WaitingDevelopPage.vue')
      },
      {
        path: 'tread',
        component: () => import('../views/userPages/ResearchTreadPage.vue')
      },
      {
        path: 'paper',
        component: () => import('../views/userPages/allPaperPage.vue')
      },
      {
        path: 'myPaper',
        component: () => import('../views/userPages/myPaperPage.vue')
      },
      {
        path: 'test',
        component: () => import('../views/userPages/test.vue')
      },
      {
        path: 'usermanage',
        component: () => import('../views/userPages/userManagePage.vue')
      },
      {
        path: 'tablePage',
        component: () => import('../views/userPages/theTablePage.vue'),
      },
      {
        path: "newTable",
        component: () => import('../views/userPages/TablePage.vue'),
        children: [
          {
            path: 'table',
            component: () => import('@/components/UserPage/TablePage/selectTemplate.vue')
          },
          {
            path: 'basic',
            component: () => import('@/components/UserPage/TablePage/basicTableInfo.vue')
          },
          {
            path: 'dataTable',
            component: () => import('@/components/UserPage/TablePage/dateTableInfo.vue')
          },
          {
            path:'finalDate',
            component: () => import('@/components/UserPage/TablePage/finalTableInfo.vue')
          }
        ]
      },
      {
        path:"Manage",
        component:()=>import("@/views/ManagePages/administratorsUserManage.vue")
      },
      {
        path:"ManageAllPaper",
        component:()=>import("@/views/ManagePages/ManageAllPaper.vue")
      },
      {
        path:"SuperManage",
        component:()=>import("@/views/SuperManagePages/SuperManage.vue")
      },
      {
        path:"ManageALLNews",
        component:()=>import("@/views/ManagePages/manageNews.vue")
      }


    ]

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router

