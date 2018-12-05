<template id="">
  <div class="">
  </div>
</template>
<script type="text/javascript">
  import dialog from '@/util/dialog'
  export default {
    mounted () {
      let config = {
        title: '开通权限说明',
        cancelText: '不想申请',
        okText: '立即申请'
      }
      let vm = this
      dialog.confirm(config, function(){
        vm.close('http://bpm.geely.com/?version=new&origin=dtea#/InformationSystemAccountAndPermissionRequest/Main/Edit')
      },function(){
        vm.close()
      })
    },
    methods: {
      close (url) {
        let ur = url ? url:'work.html'
        window.opener=null
        window.open(ur, '_self')
        window.close()
      }
    }
  }
</script>
