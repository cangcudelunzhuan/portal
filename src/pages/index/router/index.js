import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/home.vue'
import product from '@/pages/index/product.vue'
import consumer from '@/pages/index/consumer.vue'
import gdma from '@/pages/index/gdma.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
   {
      path: '/product',
      name: 'product',
      component: product
    },
    {
       path: '/consumer',
       name: 'consumer',
       component: consumer
    },
    {
       path: '/gdma',
       name: 'gdma',
       component: gdma
    }
  ]
})
