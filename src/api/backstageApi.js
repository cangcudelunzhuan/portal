import {fetchGet, fetchPost, fetchDelete, fetchPut, fetchFormData} from './api_authCtl'

var baseUrl = '/dt-portal/manage/'

export default {
  // 获取应用列表
  getAppList (pageNum, numPerPage, status, name) {
    let params = {
      pageNum: pageNum,
      numPerPage: numPerPage,
      status: status,
      name: name
    }
    return fetchGet(baseUrl + 'get/apps', params)
  },
  // 删除应用
  deleteApp (appCode) {
    // let params = {
    //   appCode: appCode
    // }
    return fetchDelete(baseUrl + 'delete/app/' + appCode)
  },
  // 发布和取消发布应用
  operateApp (appCode, status) {
    let params = {
      appCode: appCode,
      status: status
    }
    return fetchPost(baseUrl + 'operate/app', params)
  },
  // 应用新增
  addApp (formData) {
    return fetchFormData(baseUrl + '/addapp', formData)
  },
  // 应用编辑
  editApp (formData) {
    return fetchPut(baseUrl + '/editapp', formData)
  }
}
