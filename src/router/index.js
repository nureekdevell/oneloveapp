import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import GuestLayout from '../layouts/GuestLayout.vue'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Message from '../views/Message.vue'
import Subscription from '../views/Subscription.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultLayout',
      component: DefaultLayout,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/resume',
          name: 'Resume',
          component: Resume
        },
        {
          path: '/message',
          name: 'Message',
          component: Message
        },
        {
          path: '/subscription',
          name: 'Subscription',
          component: Subscription
        }
      ]
    },
    {
      path: '/guest',
      name: 'GuestLayout',
      component: GuestLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        }
      ]
    }
  ]
})

export default router
