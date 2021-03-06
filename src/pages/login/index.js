// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Form, FormItem, Input, Button, Loading} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/app.css'
import '@/assets/style/login.css'

Vue.config.productionTip = false
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
