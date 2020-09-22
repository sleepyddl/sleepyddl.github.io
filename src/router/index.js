import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/admin/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
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

export default router
