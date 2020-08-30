import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import About from '../views/About.vue'
import Closing from '../views/Closing.vue'
import Link from '../views/Link.vue'
import Skill from '../views/Skill.vue'
import Stack from '../views/Stack.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  },
  {
    path: '/stack',
    name: 'Stack',
    component: Stack
  },
  {
    path: '/link',
    name: 'Link',
    component: Link
  },
  {
    path: '/closing',
    name: 'Closing',
    component: Closing
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
