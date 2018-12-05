import Vue from 'vue'
import Router from 'vue-router'
import appListIndex from '@/modules/backstage/appListIndex'
import appDetail from '@/modules/backstage/appDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appListIndex',
      component: appListIndex
    },
    {
      path: '/appDetail',
      name: 'appDetail',
      component: appDetail
    }
  ]
})
