import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import list from '@/components/list'
import activity from '@/components/activity'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ]
})
