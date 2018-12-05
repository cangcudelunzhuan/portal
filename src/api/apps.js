import {fetchGet, fetchApplicationJson} from './api_authCtlIndex'
let baseUrl = '/dt-portal'
export default {
  // 获取产品信息
  getApp (empNo) {
    return fetchGet(baseUrl + '/get/' + empNo + '/apps')
  },
  // 保存已添加信息
  saveAddApp (empNo, appCodes) {
    return fetchApplicationJson(baseUrl + '/save/' + empNo + '/appadded', appCodes)
  },
  // 登出工作台
  LoginOut () {
    return fetchGet(baseUrl + '/logout')
  },
  loginForToken (url) {
    return fetchGet(url)
  }
}
