<template>
  <div class="content-wrap">
    <div class="route-view-area"
      v-loading="loading.active"
      :element-loading-text="loading.text">
      <el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/' }">应用管理</el-breadcrumb-item>
			  <el-breadcrumb-item>{{ currentPath }}</el-breadcrumb-item>
			</el-breadcrumb>
			<div class='tips'>填写应用基本信息</div>
			<div class='formBox'>
			  <el-form ref="form" :model="appForm" :rules="rules" label-width="80px" :label-position="labelPosition">
          <el-form-item label="编号:" v-if='showCode'>
            <el-input v-model="appForm.code"  placeholder="应用编号" :disabled="true"></el-input>
          </el-form-item>
          
          <el-form-item label="名称:" prop="name">
            <el-input v-model="appForm.name"  placeholder="应用名称，20字以内"></el-input>
          </el-form-item>
          
          <el-form-item label="链接:" prop="appUri">
            <el-input accept="http://*" v-model="appForm.appUri"  placeholder="请输入应用链接"></el-input>
          </el-form-item>
          
          <el-form-item label="简介:" prop="text">
            <el-input 
              type="textarea" 
              :maxlength='1000'
              v-model="appForm.text"  
              placeholder="应用介绍1000字以内"
              @input="changeLength"
              :rows="5"
              ></el-input>
            <span>{{appForm.textLength}}</span>/1000
          </el-form-item>
          
          <el-form-item label="logo:" class='imgUri' prop="iconUri">
            <input class="value" style="display:none" type="file" ref="file" accept="image/*" @change="getFile($event)" />
            <img :src="appForm.iconUri" v-if="appForm.iconUri" @click='add'/>
            <img src="../../assets/images/appImg.jpg" @click='add' v-else/>
            <span class='imgtips'>图片小于2M,支持png,jpg格式</span>
          </el-form-item>
          
          <el-form-item>
            <el-button @click="onSubmit('0', 'form')" type="primary">发布</el-button>
            <el-button @click="onSubmit('1', 'form')" type="primary">保存草稿</el-button>
          </el-form-item>
        </el-form>
			</div>
    </div>
  </div>
</template>

<script>
  import backstageApi from '@/api/backstageApi'
  export default {
    name: 'appdetail',
    data () {
      return {
        labelPosition: 'left',
        showCode: false,
        currentPath: '',
        appForm: {
          code: '',
          name: '',
          text: '',
          file: '',
          appUri: '',
          iconUri: '',
          textLength: 0
        },
        rules: {
          name: [
            { required: true, message: '请输入应用名称', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 20字以内', trigger: 'blur' }
          ],
          appUri: [
             { required: true, message: '请输入应用链接', trigger: 'blur' }
          ],
          text: [
             { required: true, message: '请输入应用介绍', trigger: 'blur' },
             { min: 0, max: 1000, message: '长度在 0-1000字以内', trigger: 'blur' }
          ],
          iconUri: [
             { required: true, message: '请输入图片', trigger: 'blur' }
          ]
        }
      }
    },
    mounted () {
      let appDetail = JSON.parse(sessionStorage.getItem('appDetail'))
      if (appDetail.new) {
        this.newAppDet()
        this.currentPath = '应用新建'
      } else {
        this.setAppDet(appDetail)
        this.currentPath = '应用编辑'
      }
      this.changeLength()
    },
    methods: {
      loading: {
        active: false,
        text: ''
      },
      setAppDet (appDetail) {
        this.showCode = true
        this.appForm.name = appDetail.name
        this.appForm.code = appDetail.code
        this.appForm.text = appDetail.text
        this.appForm.appUri = appDetail.appUri
        this.appForm.iconUri = appDetail.iconUri
      },
      newAppDet () {
        this.showCode = false
      },
      add () {
        this.$refs.file.click()
      },
      getFile (event) {
        this.appForm.file = event.target.files[0]
        this.html5Reader(this.appForm.file, this.appForm)
        if (this.appForm.file.size / 1024 > 2048) {
          this.$message({
            message: '图片大小控制在2M以内！',
            type: 'warning'
          })
        }
      },
      // 将图片文件转成BASE64格式
      html5Reader (file, item) {
        const reader = new FileReader()
        reader.onload = (e) => {
          item.iconUri = e.target.result
        }
        reader.readAsDataURL(file)
      },
      changeLength () {
        this.appForm.textLength = 1000 - parseInt(this.appForm.text.length)
      },
      onSubmit (type, form) {
        let formData = new FormData()
        formData.append('name', this.appForm.name)
        formData.append('text', this.appForm.text)
        formData.append('appUri', this.appForm.appUri)
        formData.append('code', this.appForm.code)
        formData.append('file', this.appForm.file)
        formData.append('status', type)
        this.$refs[form].validate((valid) => {
          if (valid) {
            if (this.showCode) {
              backstageApi.editApp(formData)
              .then((res) => {
                this.hideLoading()
                this.$message({
                  message: '提交成功！',
                  type: 'success'
                })
                this.$router.push({path: '/'})
              })
              .catch()
            } else {
              backstageApi.addApp(formData)
              .then((res) => {
                this.hideLoading()
                this.$message({
                  message: '提交成功！',
                  type: 'success'
                })
                this.$router.push({path: '/'})
              })
              .catch()
            }
          }
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
      }
    }
  }
</script>

<style scoped>
	.tips {
		padding: 5px 15px;
		background: #F4F8FB;
		color: #515152;
		margin: 20px 0;
		font-size: 12px;
	}
	.imgUri img {
		width: 72px;
		height: 72px;
		float: left;
		cursor: pointer
	}
	.imgtips {
		height: 72px;
		line-height: 72px;
		display: inline-block;
		margin-left: 20px
	}
	.formBox {
	  overflow: scroll;
	  width: 50%;
	  height: calc(100% - 80px);
	  height:-moz-calc(100% - 80px);
	  height: -webkit-calc(100% - 80px);
	}
	.el-textarea {
	  width: 83%
	}
	.el-button {
	  width:  80px;
	  height: 30px;
	  line-height: 30px;
	  padding: 0;
	}
	.el-input__inner {
	  height: 30px;
	}
	.el-button+.el-button {
	  margin-left: 50px;
	}
</style>
