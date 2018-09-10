import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import NotFound from '@/pages/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/404',
      name: '404',
      leaf: true,
      component: NotFound
    },
    {
      path: '*',
      leaf: true,
      redirect: {
        path: '/404'
      }
    }
  ]
})
