/**
 * Created by JianBo.Wang on 2017/7/12.
 */
import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = ''   // 测试服

// POST传参序列化
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.data.code === 'user-not-login') {
    window.location = 'login.html'
    return Promise.reject(res)
  }
  return res
}, (error) => {
  return Promise.reject(error)
})

export function fetchPost (url, params) {
  params = qs.stringify(params)
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchFormData (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchDelete (url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchPut (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params, {headers: {'Content-Type': 'application/json'}})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchApplicationJson (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {headers: {'Content-Type': 'application/json'}})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
