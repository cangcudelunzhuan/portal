import Vue from 'vue'
class Dialog {
  confirm(config, func, cancelfunc) {
    let inner = `<div class="norightBox clearfix">
                    <img src="static/images/noright.png" class="float"/>
                    <div class="confirmRight">
                      <h3 class="title">亲，您目前还没有使用该产品的权限</h3>
                      <p>申请权限流程：<br>
                      登陆BPM->发起“信息工程类”流程->信息系统账号
                      权限申请->申请系统数据与管控，选择相应产品。</p>
                    </div>
                </div>`
    Vue.prototype.$confirm(inner, config.title, {
      confirmButtonText: config.okText,
      cancelButtonText: config.cancelText,
      customClass: 'confirmDialog',
      dangerouslyUseHTMLString: true
    }).then(() => {
      func()
    }).catch(() => {
      cancelfunc()
    });
  }
}
export default new Dialog()
