import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/Admin.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detail.vue'),
    props: (route) => {
      return {
        id: route.query.id
      }
    }
  },
  {
    path: '/admin/mkfile',
    name: 'mkfile',
    component: () => import('../views/admin/Mkfile.vue')
  },
  
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/admin/Login.vue')
  },
  {
    path: '/home',
    redirect: "/"
  },
  {
    path: "/code",
    name: "code",
    component: () => import('../views/Code.vue')
  },
  {
    path: "/life",
    name: "life",
    component: () => import('../views/Life.vue')
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import('../views/Profile.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})


router.beforeEach((to, from, next) => {
  if (to.name === 'Admin') {
    if (!store.state.token) {
      next({ name: 'Login' })
    } else {
      next()
    }
  }
  else {
    next()
  }
})

export default router
