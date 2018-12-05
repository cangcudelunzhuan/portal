import {fetchGet} from './api'
let baseUrl = '/dt-portal'
export default {
  // 用户信息
  personalInfo () {
    return fetchGet(baseUrl + '/get/personalInfo')
  }
}
