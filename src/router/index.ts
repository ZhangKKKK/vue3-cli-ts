import { createRouter, createWebHistory } from 'vue-router'
import { baseRoutes } from './routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: baseRoutes
})

export default router
