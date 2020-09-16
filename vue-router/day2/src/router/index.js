import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Intro from '../views/Intro.vue'
import TestforEmit from "../views/EmitTest.vue"
import VuexEx from "../views/VuexEx.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/testforemit',
    name: 'TestforEmit',
    component: TestforEmit
  },
  {
    path: '/vuexex',
    name: 'VuexEx',
    component: VuexEx
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
