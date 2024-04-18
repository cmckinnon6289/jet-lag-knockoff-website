import { createRouter, createWebHistory } from 'vue-router'
import TeamView from '../views/TeamView.vue'
import PermsService from '@/services/PermsService';
import store from '@/store/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'team',
      component: TeamView,
      beforeEnter(to, from, next) {
        const perms = PermsService.getUserPerms();
        if(store.getters.isLoggedIn && perms >= 1){
          console.log(perms);
          next()
        } else{
          console.log(`fail ${perms}`);
          next('/login')
        }
      }
    }
  ]
})

export default router