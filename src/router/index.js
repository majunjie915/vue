import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import list from '@/components/list'
import activity from '@/components/activity'
import main from '@/components/main'
import listChild1 from '@/components/list_child1'
import listChild2 from '@/components/list_child2'
import homeDetail from '@/components/home_detail'

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
      component: list,
      children: [
        {
          path: 'list_child1',
          component: listChild1
        },
        {
          path: 'list_child2',
          component: listChild2
        }
      ]
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
    },
    {
      path: '/home_detail',
      name: 'home_detail',
      component: homeDetail
    }
  ]
})
