/**
 * Created by JianBo.Wang on 2017/8/4.
 */
import {fetchPost, fetchGet} from './api'
let baseUrl = '/dt-portal'
export default {
  /**
   * 登录授权接口
   */
  // 用户登录应用中心
  Login (username, password) {
    let params = {
      username: username,
      password: password
    }
    return fetchPost(baseUrl + '/manage/login', params)
  },
  // 用户注销
  Logout () {
    return fetchGet(baseUrl + '/logout')
  },
  // 登陆工作台
  LoginSSO (entry) {
    return fetchGet(baseUrl + '/sso/login/' + entry)
  },
  getApps (nob) {
    return fetchGet(baseUrl + `/get/${nob}/apps`)
  }
}
