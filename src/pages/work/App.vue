<template>
	<div id="app">
		<Nav :page='page' @loginInfo="loginInfo" :cloudLink="cloudLink" class="worknav"></Nav>
    <div class="content">
      <div class="products">
          <div class="header">
              <dl class="headNews">
                <dt><img :src="user.userHead" alt=""></dt>
                <dd>
                  <p><span class='auth'>{{user.userName}}</span> {{user.userJob}}</p>
                  <p>{{user.userDepartment}}</p>
                </dd>
              </dl>
							<div class='last' @click="dialogVisible = true">
                <img src="../../assets/images/productManage.svg" alt="应用管理">
                {{$t('applicationManagement')}}
              </div>
              <!-- <a class="more down" href="javascript:;" @click="showMoreEvent" v-if='showMore' v-show='showMoreText'>收起<img src="../../assets/images/arrowUp.svg" alt=""></a>
              <a class="more up" href="javascript:;" @click="showMoreEvent" v-else v-show='showMoreText'>展开<img src="../../assets/images/arrowUp.svg" alt=""></a> -->
          </div>
          <div class="product" ref='product'>
            <el-row :gutter="20">
              <el-col :span="12" v-for='(ap,index) in addApp' :key='index'>
                <dl class="active" @click="toLink(ap.appUri, ap)">
                    <dt>
                      <img :src="ap.iconUri" :alt="ap.name">
                    </dt>
                    <dd>
                      <p class="title">{{ap.name}}</p>
                      <p class="desc">{{ap.text}}</p>
                    </dd>
                </dl>
              </el-col>
              <!-- <el-col :span="8">
                <dl class='last' @click="dialogVisible = true">
                  <dt>
                    <img src="../../assets/images/productManage.svg" alt="应用管理">
                  </dt>
                  <dd>
                    <p class="title">{{$t('applicationManagement')}}</p>
                  </dd>
              </dl>
              </el-col> -->
            </el-row>
          </div>
      </div>
      <el-row>
        <el-col :span="12" style='padding-left:0;padding-right:10px'>
          <!-- 系统公告 -->
          <System></System>
        </el-col>
        <el-col :span="12" style='padding-left:10px;padding-right:0'>
          <!-- 消息提醒 -->
          <News></News>
        </el-col>
      </el-row>
    </div>
    <Foot ref='footer'></Foot>
    <!-- 弹窗 -->
    <el-dialog
      title="应用管理"
      :visible.sync="dialogVisible"
      :before-close="saveApp"
      width="648px">
      <div class='appCon'>
      	<p>已添加</p>
        <draggable v-model="addApp"
        	class="dragArea"
        	:options="{animation: 300,handle:'.dargDiv'}"
        	@end="datadragEnd"
        	@update="datadragEnd">
          <transition-group>
	          <div v-for="(ap,index) in addApp"
	          	:key="index"
	          	class="appWrap"
	          	@mousedown="downEvent($event, index, ap.code, 1)"
	            @mouseup="addUpEvent(ap.code, index)">
	          	<img class='dargDiv' :src="ap.iconUri" :alt="ap.name">
	            <p>{{ap.name}}</p>
	            <span class='active'><img :src="ap.active" ref='active'></span>
	          </div>
          </transition-group>
        </draggable>
        <p>未添加</p>
        <div class="dragArea" style='border: none'>
        	<div v-for="(rp,index) in reduceApp"
	      	:key="index"
	      	class="appWrap"
	      	@mousedown="downEvent($event, index, rp.code, 0)"
            @mouseup="reduceUpEvent(rp.code, index)">
		      	<img :src="rp.iconUri" :alt="rp.name">
	            <p>{{rp.name}}</p>
	            <span class='active'><img :src="rp.active" ref='active'></span>
	    	</div>
        </div>
      </div>
    </el-dialog>
	</div>
</template>

<script>
import * as tool from '@/util/tool'
import Nav from '@/modules/index/Nav'
import Foot from '@/modules/index/Foot'
import System from '@/modules/work/system'
import News from '@/modules/work/news'
import apps from '@/api/apps'
import Sortable from 'sortablejs'
import draggable from 'vuedraggable'
export default {
  name: 'app',
  components: { Nav, Foot, System, News, Sortable, draggable },
  data () {
    return {
      dialogVisible: false,
      // showMoreText: false,
      // showMore: false,
      time: undefined,
      longTap: false,
      page: 'work',
      user: {
        empNo: '',
        userName: '',
        userHead: 'static/images/head.png',
        userJob: '',
        userDepartment: ''
      },
      allApp: [],
      addApp: [],
      oldAddApp: '',
      reduceApp: [],
			cloudLink: {
				appUri: 'http://data.geely.com/cloudbigscreen/#/'
			}
    }
  },
  mounted () {
    tool.initCountly()
    window.Countly.track_pageview('企业大脑-工作台')
  },
  methods: {
    loginInfo (data) {
      if (data.loginFlag) {
        this.user.empNo = data.userInfo.empNo
        if (data.userInfo.userHead) {
          this.user.userHead = data.userInfo.userHead
        } else {
          this.user.userHead = 'static/images/head.png'
        }
        this.user.userName = data.userInfo.userName
        this.user.userJob = data.userInfo.userJob
        this.user.userDepartment = data.userInfo.userDepartment
        this.getApp()
      } else {
//      window.location = 'index.html'
      }
    },
    async getApp () {
			let vm = this
      let res = await apps.getApp(this.user.empNo)
			if (res.code === 'user-not-login') return
			res.data.added.forEach((item) => {
				item.active = 'static/images/delete.svg'
				if (!item.iconUri) {
					item.iconUri = 'static/images/app1.png'
				}
				if (item.code === '000015') {
					vm.cloudLink = item
				}
			})
			res.data.notAdded.forEach((item) => {
				item.active = 'static/images/add.svg'
				if (!item.iconUri) {
					item.iconUri = 'static/images/app1.png'
				}
			})
			this.addApp = res.data.added
			this.reduceApp = res.data.notAdded
			this.oldAddApp = JSON.stringify(this.addApp)
			let appUri = null
			if (this.addApp.length > 0 || this.reduceApp.length > 0) {
				this.allApp = this.addApp.concat(this.reduceApp)
				this.allApp.map((item, i) => {
					if (item.code === '000020') {
						appUri = item.appUri.replace(/loginForPortal/g, 'loginForToken')
						vm.loginForToken(appUri)
					}
				})
			}
			// try {
			// 	let resp = appUri ? await apps.loginForToken(appUri): ''
			// 	console.log('resp' + resp)
			// } catch (e) {
			// 	console.log('error' + JSON.stringify(e))
			// }
    },
		async loginForToken (url) {
			let res = await apps.loginForToken(url)
			console.log('res' + JSON.stringify(res))
		},
    // showMoreEvent () {
    //   this.showMore = !this.showMore
    //   if (this.showMore) {
    //     this.$refs.product.style.height = this.$refs.product.scrollHeight - 24 + 'px'
    //   } else {
    //     this.$refs.product.style.height = '244px'
    //   }
    //   let windowW = document.body.clientWidth
    //   if (windowW > 1900) {
    //     if (parseInt(this.$refs.product.style.height) > 384) {
    //       this.$refs.footer.setRelative()
    //     } else {
    //       this.$refs.footer.setAbsolute()
    //     }
    //   }
    // },
    downEvent (ev, index, code, type) {
      var timeStart, timeEnd
      var _this = this
      timeStart = _this.getTimeNow()
      _this.time = setInterval(function () {
        timeEnd = _this.getTimeNow()
        if (timeEnd - timeStart > 100) {
          clearInterval(_this.time)
          _this.longTap = true
          if (type === 1) {
            _this.addApp.forEach((item) => {
              if (item.code === code) {
                item.active = 'static/images/drag.svg'
              }
            })
          }
          return false
        } else {
          _this.longTap = false
        }
      }, 100)
      ev.stopPropagation()
    },
    addUpEvent (id, index) {
      clearInterval(this.time)
      this.deleteEvent(id, index)
      this.addApp.forEach((item) => {
        if (item.code === id) {
          item.active = 'static/images/delete.svg'
        }
      })
    },
    getTimeNow () {
      const now = new Date()
      return now.getTime()
    },
    deleteEvent (id, index) {
      this.addApp.splice(index, 1)
      this.reduceApp.unshift(this.targetApp(id, 1))
      this.reduceApp.forEach((item) => {
        if (item.code === id) {
          item.active = 'static/images/add.svg'
        }
      })
    },
    addEvent (id, index) {
      this.addApp.push(this.targetApp(id, 0))
      this.reduceApp.splice(index, 1)
      this.addApp.forEach((item) => {
        if (item.code === id) {
          item.active = 'static/images/delete.svg'
        }
      })
    },
    // 未添加事件
    reduceUpEvent (id, index) {
      clearInterval(this.time)
      this.addEvent(id, index)
      this.reduceApp.forEach((item) => {
        if (item.code === id) {
          item.active = 'static/images/add.svg'
        }
      })
    },
    targetApp (id, type) {
      const objApp = {
        appUri: 'http://www.baidu.com',
        code: '',
        createDateTime: '',
        name: '',
        status: '',
        text: '',
        iconUri: '',
        hover: false
      }
      this.allApp.forEach((item) => {
        if (item.code === id) {
          objApp.code = item.code
          objApp.name = item.name
          objApp.text = item.text
          objApp.iconUri = item.iconUri
          objApp.appUri = item.appUri
        }
        if (type === 1) {
          objApp.active = 'static/images/add.svg'
        } else {
          objApp.active = 'static/images/delete.svg'
        }
      })
      return objApp
    },
    saveApp (done) {
      done()
      const newAdd = []
      if (this.addApp && this.addApp.length > 0) {
        this.addApp.forEach((item) => {
          newAdd.push(item.code)
        })
      }
      if (this.oldAddApp !== JSON.stringify(this.addApp)) {
        apps.saveAddApp(this.user.empNo, newAdd)
          .then((res) => {
            this.getApp()
          })
      }
    },
    // 拖拽完成后动作
    datadragEnd () {
      this.addApp.forEach((item) => {
        item.active = 'static/images/delete.svg'
      })
    },
    toLink (href, ap) {
      window.open(href)
      // 埋点记录页面访问信息
      let info = {
        userId: this.user.empNo,
        serviceId: 1000,
        menuName: ap.name
      }
      tool.countlyRecordLinks(info)
      // 部门埋点记录页面访问信息
      let inf = {
        userId: this.user.empNo,
        serviceId: 10000,
        menuName: ap.name
      }
      tool.accessLog(inf)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: "PingFang SC";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #F6F6FA;
  height: 100%;
}

</style>
