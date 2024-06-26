import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('../views/ButtonView.vue')
    },
    {
      path: '/input',
      name: 'input',
      component: () => import('../views/InputView.vue')
    }
  ]
})

export default router
