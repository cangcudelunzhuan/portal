/**
 * Created by JianBo.Wang on 2017/7/12.
 */
// import store from '../vuex/store'

// /**
//  *   Toast公共方法
//  */
//    export function toast (toastState) {
     // let time = 4000
     // if (toastState.type === 'error') {
     //   time = 8000
     // }
//   setTimeout(() => {
//     store.dispatch('hideToast')
//   }, time)
//    }
export function accessLog (inf) {
  let img = new Image(1, 1)
  let src = 'https://dt.geely.com/log/analysis/log.gif?args=' + encodeURIComponent(JSON.stringify(inf))
  img.src = src
}
// 使用countly前端埋点
export function initCountly () {
  window.Countly.init({
    app_key: '58b7a9fb15be82f8ad92f4a1d5d6027d91150eeb',
    url: 'https://ub-api.geely.com/'
  })
  window.Countly.track_sessions()
  window.Countly.track_pageview()
  window.Countly.track_scrolls()
  window.Countly.track_clicks()
  window.Countly.track_links()
  window.Countly.track_forms()
  window.Countly.track_errors()
}

export function countlyUserDetail (info) {
  window.Countly.user_details(info)
}

export function countlyLogin () {
  window.Countly.add_event({
    key: '用户登陆',
    count: 1
  })
}

export function countlyLogout () {
  window.Countly.add_event({
    key: '用户登出',
    count: 1
  })
}

export function countlyRecordLinks (info) {
  window.Countly.add_event({
    key: '跳转链接',
    count: 1,
    segmentation: info
  })
}
