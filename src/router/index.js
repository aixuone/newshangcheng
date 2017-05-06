import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import admin from '@/components/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/',
      redirect: '/hello'
    }
  ]
})
