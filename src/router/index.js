import { createRouter, createWebHistory } from 'vue-router'
import TeamView from '../views/TeamView.vue'
import ShopView from '../views/ShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'team',
      component: TeamView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    }
  ]
})

export default router