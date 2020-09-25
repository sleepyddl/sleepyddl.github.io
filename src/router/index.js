import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Admin.vue')
  },
  {
    path: '/admin/mkfile',
    name: 'Mkfile',
    component: () => import('../views/admin/Mkfile.vue')
  },
  
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/admin/Login.vue')
  },
  {
    path: '/home',
    redirect: "/"
  },
  {
    path: "/code",
    name: "Code",
    component: () => import('../views/Code.vue')
  },
  {
    path: "/life",
    name: "Life",
    component: () => import('../views/Life.vue')
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import('../views/Profile.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
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
