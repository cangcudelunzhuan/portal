// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button, Dialog, Submenu, Menu, MenuItem, MessageBox, Carousel, CarouselItem} from 'element-ui'
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
import VueI18n from 'vue-i18n'
import {sync} from 'vuex-router-sync'
import store from '@/vuex/store'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/nav.css'
import '@/assets/style/app.css'
import '@/assets/style/brainIndex.css'
import '@/assets/style/animate.css'
import '@/assets/style/aos.css'

// 前端埋点
import '@/countly/countly.min.js'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(VueI18n)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.prototype.$confirm = MessageBox.confirm
sync(store, router)
const i18n = new VueI18n({
  // 切换语言直接修改locale的值即可
  locale: 'CN',
  messages: {
    'EN': require('@/locales/EN.js'),
    'CN': require('@/locales/CN.js')
  }
})
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App, i18n }
})
