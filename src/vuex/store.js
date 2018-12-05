/**
 * Created by JianBo.Wang on 2017/7/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import basic from './basic'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    basic
  }
})
