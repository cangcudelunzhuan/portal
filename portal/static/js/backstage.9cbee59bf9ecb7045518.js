webpackJsonp([4],{0:function(t,e,a){a("j1ja"),t.exports=a("EIu6")},"Aqi/":function(t,e){},EIu6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("vPHJ"),i={data:function(){return{userName:""}},created:function(){this.userName=window.sessionStorage.getItem("userName")},methods:{handleCommand:function(t){s.c(),window.sessionStorage.clear(),window.location="login.html"}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top-bar"},[e("div",{staticClass:"title"},[this._v("吉利数据管理平台")]),this._v(" "),e("el-dropdown",{staticClass:"dropdown",on:{command:this.handleCommand}},[e("span",{staticClass:"el-dropdown-link"},[e("div",{staticClass:"username",domProps:{textContent:this._s(this.userName)}})]),this._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"e"}},[this._v("\n        退出\n      ")])],1)],1)],1)},staticRenderFns:[]},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-menu"},[e("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:!0,"default-active":"1","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[e("el-menu-item",{attrs:{index:"1",route:{path:"/"}}},[e("i",{staticClass:"el-icon-menu"}),this._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[this._v("应用管理")])])],1)],1)},staticRenderFns:[]},c={name:"index",components:{TopBar:a("VU/8")(i,o,!1,function(t){a("rFRK")},"data-v-2509616e",null).exports,NavMenu:a("VU/8")({data:function(){return{navMenu:[]}},created:function(){}},r,!1,function(t){a("Aqi/")},"data-v-4a0dcf66",null).exports},data:function(){return{}},methods:{}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("el-row",{staticClass:"top-bar",attrs:{span:24}},[e("TopBar")],1),this._v(" "),e("el-row",{staticClass:"bottom",attrs:{span:24}},[e("el-col",{staticClass:"bottom-col",attrs:{span:3}},[e("NavMenu")],1),this._v(" "),e("el-col",{staticClass:"bottom-col",attrs:{span:21}},[e("router-view")],1)],1)],1)},staticRenderFns:[]},l=a("VU/8")(c,u,!1,function(t){a("t9lf")},null,null).exports,p=a("/ocq"),d=a("mvHQ"),m=a.n(d),f=a("zL8q"),h=a("//Fk"),g=a.n(h),v=a("mtWM"),w=a.n(v),b=a("mw3O"),_=a.n(b);w.a.defaults.timeout=6e4,w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",w.a.defaults.baseURL="",w.a.interceptors.request.use(function(t){return t},function(t){return g.a.reject(t)}),w.a.interceptors.response.use(function(t){return"user-not-login"===t.data.code?(window.location="login.html",g.a.reject(t)):t},function(t){return g.a.reject(t)});var A="/dt-portal/manage/",C=function(t,e,a,n){return function(t,e){return new g.a(function(a,n){w.a.get(t,{params:e}).then(function(t){a(t.data)},function(t){n(t)}).catch(function(t){n(t)})})}(A+"get/apps",{pageNum:t,numPerPage:e,status:a,name:n})},P=function(t){return function(t,e){return new g.a(function(a,n){w.a.delete(t,{params:e}).then(function(t){a(t.data)},function(t){n(t)}).catch(function(t){n(t)})})}(A+"delete/app/"+t)},x=function(t,e){return function(t,e){return e=_.a.stringify(e),new g.a(function(a,n){w.a.post(t,e).then(function(t){a(t.data)},function(t){n(t)}).catch(function(t){n(t)})})}(A+"operate/app",{appCode:t,status:e})},y=function(t){return function(t,e){return new g.a(function(a,n){w.a.post(t,e).then(function(t){a(t.data)},function(t){n(t)}).catch(function(t){n(t)})})}(A+"/addapp",t)},F=function(t){return function(t,e){return new g.a(function(a,n){w.a.put(t,e,{headers:{"Content-Type":"application/json"}}).then(function(t){a(t.data)},function(t){n(t)}).catch(function(t){n(t)})})}(A+"/editapp",t)},L={name:"applist",data:function(){return{loading:{active:!1,text:""},total:"-",pubCount:"-",draftCount:"-",currentStatusType:void 0,searchParam:"",tableHeight:400,numPerPage:10,listCount:0,currentPage:1,tableData:[]}},created:function(){var t=window.pageState;t&&(this.currentStatusType=t.currentStatusType,this.searchParam=t.searchParam,this.currentPage=t.currentPage,this.numPerPage=t.numPerPage),this.getAppList(this.currentPage,this.currentStatusType,this.searchParam)},mounted:function(){this.tableHeight=this.$refs.tableWrap.$el.offsetHeight},methods:{handlePaginationChange:function(t){this.numPerPage=t,this.getAppList(!1,this.currentStatusType,this.searchParam)},getAppList:function(t,e,a){var n=this,s=t||this.currentPage;this.currentPage=s,this.showLoading("正在获取应用列表"),C(s,this.numPerPage,e,a).then(function(t){n.hideLoading(),n.tableData=t.data.items,n.listCount=t.data.total,n.pubCount=t.data.pubCount,n.draftCount=t.data.draftCount,n.total=n.pubCount+n.draftCount}).catch(function(){n.message("应用列表获取失败","error"),n.hideLoading()})},searchApps:function(){this.getAppList(1,this.currentStatusType,this.searchParam)},getAppByPageNum:function(t){this.getAppList(t,this.currentStatusType,this.searchParam)},addApp:function(){window.pageState=void 0,sessionStorage.setItem("appDetail",m()({new:!0})),this.$router.push({path:"/appDetail"})},editApp:function(t,e){var a={currentStatusType:this.currentStatusType,searchParam:this.searchParam,currentPage:this.currentPage,numPerPage:this.numPerPage};window.pageState=a;var n=e;n.new=!1,sessionStorage.setItem("appDetail",m()(n)),this.$router.push({path:"/appDetail"})},deleteApp:function(t,e){var a=this,n="你确定要删除"+e.name+"吗？",s=e.name+"删除后不可修复";f.MessageBox.confirm(s,n,{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.showLoading("正在删除 "+e.name),P(e.code).then(function(t){a.hideLoading(),a.message("删除成功","success"),a.getAppList(!1,a.currentStatusType,a.searchParam)}).catch(function(){a.message("删除失败","error"),a.hideLoading()})}).catch(function(){a.message("取消操作成功","warning")})},releaseApp:function(t,e){var a=this;this.showLoading("正在发布  "+e.name),x(e.code,"0").then(function(t){a.message("发布成功","success"),a.hideLoading(),e.status="0"}).catch(function(){a.message("发布失败","error"),a.hideLoading()})},cancelReleaseApp:function(t,e){var a=this,n="你确定要取消发布"+e.name+"吗？";f.MessageBox.confirm("",n,{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.showLoading("正在取消发布  "+e.name),x(e.code,"1").then(function(t){a.message("取消发布成功","success"),a.hideLoading(),e.status="1"}).catch(function(){a.message("取消发布失败","error"),a.hideLoading()})}).catch(function(){a.message("取消操作成功","warning")})},showLoading:function(t){this.loading={active:!0,text:t}},hideLoading:function(){this.loading={active:!1,text:""}},message:function(t,e){this.$message({showClose:!0,message:t,type:e})}}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-wrap"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading.active,expression:"loading.active"}],staticClass:"route-view-area",attrs:{"element-loading-text":t.loading.text}},[a("div",{staticClass:"wrap-area"},[a("el-row",{staticClass:"top-area"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"app-count-item"},[a("span",{staticClass:"app-count-label"},[t._v("应用总数:")]),t._v(" "),a("span",{staticClass:"app-count-number"},[t._v(t._s(t.total))]),t._v(" "),a("span",{staticClass:"app-count-unit"},[t._v("个")])]),t._v(" "),a("div",{staticClass:"app-count-item"},[a("span",{staticClass:"app-count-label active"},[t._v("已发布:")]),t._v(" "),a("span",{staticClass:"app-count-number"},[t._v(t._s(t.pubCount))]),t._v(" "),a("span",{staticClass:"app-count-unit"},[t._v("个")])]),t._v(" "),a("div",{staticClass:"app-count-item"},[a("span",{staticClass:"app-count-label active"},[t._v("草稿:")]),t._v(" "),a("span",{staticClass:"app-count-number"},[t._v(t._s(t.draftCount))]),t._v(" "),a("span",{staticClass:"app-count-unit"},[t._v("个")])])]),t._v(" "),a("el-col",{staticClass:"add-btn",attrs:{span:8,offset:4}},[a("el-input",{attrs:{placeholder:"请输入","suffix-icon":"el-icon-search"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchApps(e)}},model:{value:t.searchParam,callback:function(e){t.searchParam=e},expression:"searchParam"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.addApp}},[t._v("添加应用")])],1)],1),t._v(" "),a("el-row",{ref:"tableWrap",staticClass:"table-wrap content-area"},[a("el-table",{ref:"dsTable",staticClass:"border-side-none",staticStyle:{width:"100%"},attrs:{data:t.tableData,"highlight-current-row":"",height:t.tableHeight}},[a("el-table-column",{attrs:{prop:"code",label:"应用编号",width:"135",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"应用名称",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"text",label:"应用描述",align:"left"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s("0"===e.row.status?"已发布":"草稿")+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(e.row.createDateTime.substring(0,10))+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"left",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"!==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.editApp(e.$index,e.row)}}},[t._v("编辑")]):t._e(),t._v(" "),"0"!==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.deleteApp(e.$index,e.row)}}},[t._v("删除")]):t._e(),t._v(" "),"0"!==e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.releaseApp(e.$index,e.row)}}},[t._v("发布")]):t._e(),t._v(" "),"0"===e.row.status?a("el-button",{attrs:{type:"text"},on:{click:function(a){t.cancelReleaseApp(e.$index,e.row)}}},[t._v("取消发布")]):t._e()]}}])})],1)],1),t._v(" "),a("el-row",{staticClass:"bottom-area"},[a("el-pagination",{attrs:{"page-sizes":[10,20],"page-size":t.numPerPage,layout:"total, sizes, ->, prev, pager, next",total:t.listCount,"current-page":t.currentPage},on:{"current-change":t.getAppByPageNum,"size-change":t.handlePaginationChange}})],1)],1)])])},staticRenderFns:[]},k=a("VU/8")(L,D,!1,function(t){a("Xt9F")},"data-v-53342a34",null).exports,U={name:"appdetail",data:function(){return{labelPosition:"left",showCode:!1,currentPath:"",appForm:{code:"",name:"",text:"",file:"",appUri:"",iconUri:"",textLength:0},rules:{name:[{required:!0,message:"请输入应用名称",trigger:"blur"},{min:0,max:20,message:"长度在 20字以内",trigger:"blur"}],appUri:[{required:!0,message:"请输入应用链接",trigger:"blur"}],text:[{required:!0,message:"请输入应用介绍",trigger:"blur"},{min:0,max:1e3,message:"长度在 0-1000字以内",trigger:"blur"}],iconUri:[{required:!0,message:"请输入图片",trigger:"blur"}]}}},mounted:function(){var t=JSON.parse(sessionStorage.getItem("appDetail"));t.new?(this.newAppDet(),this.currentPath="应用新建"):(this.setAppDet(t),this.currentPath="应用编辑"),this.changeLength()},methods:{loading:{active:!1,text:""},setAppDet:function(t){this.showCode=!0,this.appForm.name=t.name,this.appForm.code=t.code,this.appForm.text=t.text,this.appForm.appUri=t.appUri,this.appForm.iconUri=t.iconUri},newAppDet:function(){this.showCode=!1},add:function(){this.$refs.file.click()},getFile:function(t){this.appForm.file=t.target.files[0],this.html5Reader(this.appForm.file,this.appForm),this.appForm.file.size/1024>2048&&this.$message({message:"图片大小控制在2M以内！",type:"warning"})},html5Reader:function(t,e){var a=new FileReader;a.onload=function(t){e.iconUri=t.target.result},a.readAsDataURL(t)},changeLength:function(){this.appForm.textLength=1e3-parseInt(this.appForm.text.length)},onSubmit:function(t,e){var a=this,n=new FormData;n.append("name",this.appForm.name),n.append("text",this.appForm.text),n.append("appUri",this.appForm.appUri),n.append("code",this.appForm.code),n.append("file",this.appForm.file),n.append("status",t),this.$refs[e].validate(function(t){t&&(a.showCode?F(n).then(function(t){a.hideLoading(),a.$message({message:"提交成功！",type:"success"}),a.$router.push({path:"/"})}).catch():y(n).then(function(t){a.hideLoading(),a.$message({message:"提交成功！",type:"success"}),a.$router.push({path:"/"})}).catch())})},showLoading:function(t){this.loading={active:!0,text:t}},hideLoading:function(){this.loading={active:!1,text:""}}}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-wrap"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading.active,expression:"loading.active"}],staticClass:"route-view-area",attrs:{"element-loading-text":t.loading.text}},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("应用管理")]),t._v(" "),n("el-breadcrumb-item",[t._v(t._s(t.currentPath))])],1),t._v(" "),n("div",{staticClass:"tips"},[t._v("填写应用基本信息")]),t._v(" "),n("div",{staticClass:"formBox"},[n("el-form",{ref:"form",attrs:{model:t.appForm,rules:t.rules,"label-width":"80px","label-position":t.labelPosition}},[t.showCode?n("el-form-item",{attrs:{label:"编号:"}},[n("el-input",{attrs:{placeholder:"应用编号",disabled:!0},model:{value:t.appForm.code,callback:function(e){t.$set(t.appForm,"code",e)},expression:"appForm.code"}})],1):t._e(),t._v(" "),n("el-form-item",{attrs:{label:"名称:",prop:"name"}},[n("el-input",{attrs:{placeholder:"应用名称，20字以内"},model:{value:t.appForm.name,callback:function(e){t.$set(t.appForm,"name",e)},expression:"appForm.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"链接:",prop:"appUri"}},[n("el-input",{attrs:{accept:"http://*",placeholder:"请输入应用链接"},model:{value:t.appForm.appUri,callback:function(e){t.$set(t.appForm,"appUri",e)},expression:"appForm.appUri"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"简介:",prop:"text"}},[n("el-input",{attrs:{type:"textarea",maxlength:1e3,placeholder:"应用介绍1000字以内",rows:5},on:{input:t.changeLength},model:{value:t.appForm.text,callback:function(e){t.$set(t.appForm,"text",e)},expression:"appForm.text"}}),t._v(" "),n("span",[t._v(t._s(t.appForm.textLength))]),t._v("/1000\n          ")],1),t._v(" "),n("el-form-item",{staticClass:"imgUri",attrs:{label:"logo:",prop:"iconUri"}},[n("input",{ref:"file",staticClass:"value",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:function(e){t.getFile(e)}}}),t._v(" "),t.appForm.iconUri?n("img",{attrs:{src:t.appForm.iconUri},on:{click:t.add}}):n("img",{attrs:{src:a("TMFC")},on:{click:t.add}}),t._v(" "),n("span",{staticClass:"imgtips"},[t._v("图片小于2M,支持png,jpg格式")])]),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSubmit("0","form")}}},[t._v("发布")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSubmit("1","form")}}},[t._v("保存草稿")])],1)],1)],1)],1)])},staticRenderFns:[]},S=a("VU/8")(U,B,!1,function(t){a("JgvF")},"data-v-1a165a95",null).exports;n.default.use(p.a);var T=new p.a({routes:[{path:"/",name:"appListIndex",component:k},{path:"/appDetail",name:"appDetail",component:S}]});a("tvR6"),a("eUT8");n.default.config.productionTip=!1,n.default.use(f.Row),n.default.use(f.Col),n.default.use(f.Menu),n.default.use(f.MenuItem),n.default.use(f.Loading),n.default.use(f.Breadcrumb),n.default.use(f.BreadcrumbItem),n.default.use(f.Form),n.default.use(f.FormItem),n.default.use(f.Button),n.default.use(f.Table),n.default.use(f.TableColumn),n.default.use(f.Tooltip),n.default.use(f.Pagination),n.default.use(f.Input),n.default.use(f.Upload),n.default.use(f.Dropdown),n.default.use(f.DropdownMenu),n.default.use(f.DropdownItem),n.default.component(f.Message.name,f.Message),n.default.prototype.$message=f.Message,new n.default({el:"#app",router:T,template:"<App/>",components:{App:l}})},JgvF:function(t,e){},TMFC:function(t,e){t.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB6CAYAAACShVydAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL8SURBVHhe7d1fa+JAFIbx/f6fTRGteKE3IkoQcqEXouCfWc7ihLSb7lrNyJl5nwfORRM1GX9SabHNr3DvdruF/X4fqqoKm82GKWDM0kzNtl2Dbjvrug6Xy+W+hXLPLM3UbNs16PaqALy8zNRs2zXo9u2AyuyrLegCgS4Y6IKBLhjogoEuGOiCgS4Y6IKBLhjogoEuGOiCgS4Y6IKBLhjogoEuGOiCgS4Y6IKBLhjogoEuGOiCgS4Y6IKBLhjogoEuGOiCgS4Y6IKBLhjogoEuGOiCgS4Y6IJlh77b7cJ4PA6DwcD1TCaTP+fqsezQcwCPY+fqsezQ4xPqPc/nCXqiQO8x0F8P9ESB3mOgvx7oiQK9x0B/PdATBXqPPftk2nreuSbQe+yZJ9PWEu/3rnU9c57vqnj0Nnicd6wtHstjRaN3gcdJvb54HI8Vi/4v8Dgp1xiP4bEi0R8Bj5NqnfHxPVYc+k/A4/xkrcfjMczn87BcLsP1er1v/bv42B4rCv0Z8Dj/W+/5fA6r1SoMh8PmPrPZLJxOp/stPhdv47Fi0F8Bj9O1ZrsY7Xa7DaPRqPM+tr3rEzJxv8eKQO8DPE573XYh2ul02nm7r2P3a1+tOG73WPbofYLHiWtfLBad+78be6+3twErbvNY1ugpwOPYY9v7dfs9/JGxD0QeDofma49li54SPI4d45njtF8oHssW/V2zXq/Dx8dH575HxmOgPzD2o1nX9kfGY6AnHo+Bnng8Bnri8RjoicdjoCcej4GeeDwGeuLxWHboOf2psv1K1mPZoefyTwnsHPmnBOQm0AUDXTDQBQNdMNAFA10w0AUDXTDQBQNdMNAFA10w0AUDXTDQBQNdMNAFA10w0AUDXTDQBQNdMNAFA10w0AUDXTDQBQNdMNAFA10w0AUDXTDQBQNdMNAFA10w0AUDXTDQBfsWvaqqcLlc7l9RKZmp2bZr0O2aZHVdA19QZmmmZtuuQbcLy9lOe1XYtwMm/zFLM21fNNBq0Ekn0OUK4TfwOMcqQ2atLAAAAABJRU5ErkJggg=="},Xt9F:function(t,e){},eUT8:function(t,e){},rFRK:function(t,e){},t9lf:function(t,e){},tvR6:function(t,e){},vPHJ:function(t,e,a){"use strict";e.a=function(t){var e=new Image(1,1),a="https://dt.geely.com/log/analysis/log.gif?args="+encodeURIComponent(s()(t));e.src=a},e.f=function(){window.Countly.init({app_key:"58b7a9fb15be82f8ad92f4a1d5d6027d91150eeb",url:"https://ub-api.geely.com/"}),window.Countly.track_sessions(),window.Countly.track_pageview(),window.Countly.track_scrolls(),window.Countly.track_clicks(),window.Countly.track_links(),window.Countly.track_forms(),window.Countly.track_errors()},e.e=function(t){window.Countly.user_details(t)},e.b=function(){window.Countly.add_event({key:"用户登陆",count:1})},e.c=function(){window.Countly.add_event({key:"用户登出",count:1})},e.d=function(t){window.Countly.add_event({key:"跳转链接",count:1,segmentation:t})};var n=a("mvHQ"),s=a.n(n)}},[0]);