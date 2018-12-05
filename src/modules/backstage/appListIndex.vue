<template>
  <div class="content-wrap">
    <!--数据源管理-->
    <div class="route-view-area"
      v-loading="loading.active"
      :element-loading-text="loading.text">
      <div class="wrap-area">
        <!--面包屑-->
        <el-row class="top-area">
          <el-col :span="12">
            <div class="app-count-item">
              <span class="app-count-label">应用总数:</span>
              <span class="app-count-number">{{ total }}</span>
              <span class="app-count-unit">个</span>
            </div>
            <div class="app-count-item">
              <span class="app-count-label active">已发布:</span>
              <span class="app-count-number">{{ pubCount }}</span>
              <span class="app-count-unit">个</span>
            </div>
            <div class="app-count-item">
              <span class="app-count-label active">草稿:</span>
              <span class="app-count-number">{{ draftCount }}</span>
              <span class="app-count-unit">个</span>
            </div>
          </el-col>
          <el-col :span="8" :offset="4" class="add-btn">
            <el-input
              placeholder="请输入"
              suffix-icon="el-icon-search"
              v-model="searchParam"
              @keyup.enter.native="searchApps">
            </el-input>
            <el-button type="primary" icon="plus" @click="addApp">添加应用</el-button>
          </el-col>
        </el-row>
        <!--数据源列表-->
        <el-row class="table-wrap content-area" ref="tableWrap">
          <el-table
            ref="dsTable"
            :data="tableData"
            highlight-current-row
            style="width: 100%"
            class="border-side-none"
            :height="tableHeight">
            <el-table-column
              prop="code"
              label="应用编号"
              width="135"
              align="left">
            </el-table-column>
            <el-table-column
              prop="name"
              label="应用名称"
              align="left">
            </el-table-column>
            <el-table-column
              prop="text"
              label="应用描述"
              align="left">
            </el-table-column>
            <el-table-column
              label="状态"
              align="left">
              <template scope="scope">
                {{ scope.row.status === '0' ? '已发布' : '草稿' }}
              </template>
            </el-table-column>
            <el-table-column
              label="创建时间"
              align="left">
              <template scope="scope">
                {{ scope.row.createDateTime.substring(0, 10) }}
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              align="left"
              width="170">
              <template scope="scope">
                <el-button type="text" @click="editApp(scope.$index, scope.row)" v-if="scope.row.status !== '0'">编辑</el-button>
                <el-button type="text" @click="deleteApp(scope.$index, scope.row)" v-if="scope.row.status !== '0'">删除</el-button>
                <el-button type="text" @click="releaseApp(scope.$index, scope.row)" v-if="scope.row.status !== '0'">发布</el-button>
                <el-button type="text" @click="cancelReleaseApp(scope.$index, scope.row)" v-if="scope.row.status === '0'">取消发布</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
        <!--数据源列表分页-->
        <el-row class="bottom-area">
          <el-pagination
            :page-sizes="[10, 20]"
            :page-size="numPerPage"
            layout="total, sizes, ->, prev, pager, next"
            :total="listCount"
            :current-page="currentPage"
            @current-change="getAppByPageNum"
            @size-change="handlePaginationChange">
          </el-pagination>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'element-ui'
  import backstageApi from '../../api/backstageApi'

  export default {
    name: 'applist',
    data () {
      return {
        // 加载提示状态
        loading: {
          active: false,
          text: ''
        },
        total: '-',
        pubCount: '-',
        draftCount: '-',
        currentStatusType: undefined,
        searchParam: '',
        // 列表数据
        tableHeight: 400,
        numPerPage: 10,
        listCount: 0,
        currentPage: 1,
//        currentPageDis: 1,
        tableData: []
      }
    },
    created () {
      let pageState = window.pageState
      if (pageState) {
        this.currentStatusType = pageState.currentStatusType
        this.searchParam = pageState.searchParam
        this.currentPage = pageState.currentPage
        this.numPerPage = pageState.numPerPage
      }
      // 页面创建时，获取第一页应用列表
      this.getAppList(this.currentPage, this.currentStatusType, this.searchParam)
    },
    mounted () {
      this.tableHeight = this.$refs.tableWrap.$el.offsetHeight
    },
    methods: {
      // 应用列表分页，每页数量改变的回调
      handlePaginationChange: function (size) {
        this.numPerPage = size
        this.getAppList(false, this.currentStatusType, this.searchParam)
      },
      // 根据页数，获取应用列表
      getAppList: function (pageNum, status, name) {
        let pageIndex = pageNum || this.currentPage
        this.currentPage = pageIndex
        this.showLoading('正在获取应用列表')
        backstageApi.getAppList(pageIndex, this.numPerPage, status, name)
          .then(res => {
            this.hideLoading()
            this.tableData = res.data.items
//            this.currentPageDis = this.currentPage
            this.listCount = res.data.total
            this.pubCount = res.data.pubCount
            this.draftCount = res.data.draftCount
            this.total = this.pubCount + this.draftCount
            // 选中编辑的那一行
//            let _this = this
//            this.$nextTick(function () {
//              let row = this.$refs.dsTable.data.find(function (el) {
//                return el.id === _this.currentRowId
//              })
//              this.$refs.dsTable.setCurrentRow(row)
//            })
          })
          .catch(() => {
            this.message('应用列表获取失败', 'error')
            this.hideLoading()
          })
      },
//      // 点击APP状态分类，分别获取APP
//      getAppByStatus: function (status) {
//        this.currentStatusType = status
//        this.getAppList(1, status, this.searchParam)
//      },
      // 搜索框输入搜索APP
      searchApps () {
        this.getAppList(1, this.currentStatusType, this.searchParam)
      },
      getAppByPageNum (pageNum) {
        this.getAppList(pageNum, this.currentStatusType, this.searchParam)
      },
      // 新增应用
      addApp () {
        window.pageState = undefined

        sessionStorage.setItem('appDetail', JSON.stringify({
          new: true
        }))
        this.$router.push({ path: '/appDetail' })
      },
      // 编辑应用信息
      editApp (index, row) {
        let pageState = {
          currentStatusType: this.currentStatusType,
          searchParam: this.searchParam,
          currentPage: this.currentPage,
          numPerPage: this.numPerPage
        }
        window.pageState = pageState

        let appDetail = row
        appDetail.new = false
        sessionStorage.setItem('appDetail', JSON.stringify(appDetail))
        this.$router.push({ path: '/appDetail' })
      },
      // 删除数据源
      deleteApp (index, row) {
        let title = '你确定要删除' + row.name + '吗？'
        let subTitle = row.name + '删除后不可修复'
        MessageBox.confirm(subTitle, title, {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.showLoading('正在删除 ' + row.name)
          backstageApi.deleteApp(row.code)
            .then(res => {
              this.hideLoading()
              this.message('删除成功', 'success')
              this.getAppList(false, this.currentStatusType, this.searchParam)
            })
            .catch(() => {
              this.message('删除失败', 'error')
              this.hideLoading()
            })
        }).catch(() => {
          this.message('取消操作成功', 'warning')
        })
      },
      // 发布应用
      releaseApp (index, row) {
        this.showLoading('正在发布  ' + row.name)
        backstageApi.operateApp(row.code, '0')
          .then(res => {
            this.message('发布成功', 'success')
            this.hideLoading()
            row.status = '0'
          })
          .catch(() => {
            this.message('发布失败', 'error')
            this.hideLoading()
          })
      },
      // 取消发布应用
      cancelReleaseApp (index, row) {
        let title = '你确定要取消发布' + row.name + '吗？'
        let subTitle = ''
        MessageBox.confirm(subTitle, title, {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.showLoading('正在取消发布  ' + row.name)
          backstageApi.operateApp(row.code, '1')
            .then(res => {
              this.message('取消发布成功', 'success')
              this.hideLoading()
              row.status = '1'
            })
            .catch(() => {
              this.message('取消发布失败', 'error')
              this.hideLoading()
            })
        }).catch(() => {
          this.message('取消操作成功', 'warning')
        })
      },
      // 本页显示加载进度条
      showLoading: function (text) {
        this.loading = {
          active: true,
          text: text
        }
      },
      // 本页隐藏加载进度条
      hideLoading: function () {
        this.loading = {
          active: false,
          text: ''
        }
      },
      // 消息提示
      message: function (message, type) {
        this.$message({
          showClose: true,
          message: message,
          type: type
        })
      }
    }
  }
</script>

<style scoped>
  .app-count-item {
    display: inline-block;
    margin-right: 20px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }
  /*.app-count-item.active {*/
    /**/
  /*}*/
  .app-count-label.active {
    color: #59b2dc;
  }
  .app-count-label {
    font-size: 18px;
  }
  .el-input {
    display: inline-block;
    width: 220px;
    margin-right: 10px;
  }
  .table-wrap i {
    margin-right: 15px;
    cursor: pointer;
  }
  .add-btn {
    text-align: right;
  }
  .table-wrap .el-button {
    padding-top: 0;
    padding-bottom: 0;
  }
  /*布局*/
  .wrap-area {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 51px;
    padding-bottom: 43px;
    box-sizing: border-box;
  }
  .top-area {
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 100%;
  }
  .content-area {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  .bottom-area {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
