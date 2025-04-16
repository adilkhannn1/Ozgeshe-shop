import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginPage.vue'
import ForgetPassword from '@/views/ForgetPasswordPage.vue'
import Register from '@/views/RegisterPage.vue'
import HomePage from '@/views/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
    }

  ],
})

export default router
