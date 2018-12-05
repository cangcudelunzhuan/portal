// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Row, Col, Menu, MenuItem, Loading, Button, Table, TableColumn, Tooltip, Pagination, Input, Breadcrumb, BreadcrumbItem, Form, FormItem, Upload, Message, Dropdown, DropdownMenu, DropdownItem } from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/backstage.css'

Vue.config.productionTip = false
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Loading)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Input)
Vue.use(Upload)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.component(Message.name, Message)
Vue.prototype.$message = Message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
