import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/LoginPage.vue'
import ForgetPassword from '@/views/ForgetPasswordPage.vue'
import Register from '@/views/RegisterPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: Login,
    },
    {
      path: '/forget',
      name: 'ForgetPasswordPage',
      component: ForgetPassword,
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: Register,
    },

  ],
})

export default router
