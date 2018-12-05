// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Dialog, Submenu, Menu, MenuItem, Row, Col} from 'element-ui'
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/nav.css'
import '@/assets/style/app.css'
import '@/assets/style/work.css'
import '@/assets/style/brainIndex.css'

// 引入前端埋点
import '@/countly/countly.min.js'

Vue.config.productionTip = false
Vue.use(Dialog)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(VueI18n)

const i18n = new VueI18n({
  // 切换语言直接修改locale的值即可
  locale: 'CN',
  messages: {
    'EN': require('@/locales/EN.js'),
    'CN': require('@/locales/CN.js')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App, i18n }
})
