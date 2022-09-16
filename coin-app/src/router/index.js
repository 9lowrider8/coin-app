import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Users from '../views/Users.vue'
import Dashboard from '../views/Dashboard.vue'
import SingleUser from '../views/SingleUser.vue'
import SingleCoin from '../views/SingleCoin.vue'
import Switch from '../views/Switch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/Users',
      name: 'users',
      component: Users
    },
    {
      path: '/Dashboard',
      name: 'dashboard',
      component: Dashboard
    },{
      path: '/SingleCoin/:index',
      name: 'singlecoin',
      component: SingleCoin,
      props: true
    },{
      path: '/SingleUser/:id',
      name: 'singleuser',
      component: SingleUser,
      props: true
    },{
    path: '/Switch/',
      name: 'switch',
      component: Switch,
      props: true
    },
  ]
})

export default router
