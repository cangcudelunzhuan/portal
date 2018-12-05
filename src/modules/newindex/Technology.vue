<template id="">
  <div class="technology-content">
    <div class="content-box brain-content-item" aos="fade-up" >
      <div class="brain-title" >
        <h1>我们的技术</h1>
        <!-- <p>业务数据化\数据资产化\资产价值化</p> -->
      </div>
      <ul class="tec-box clearfix" aos="fade-up"  style="margin-top:35px">
        <li v-for="item in technologyList" class="tec-item" :class="{'tec-item-fade':ac === 2}">
          <section>
            <img :src="item.icon" alt="" class="tec-item-icon">
            <h3 class="tec-item-title">{{item.title}}</h3>
            <p class="tec-item-inner">{{item.content}}</p>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    props: ['active'],
    computed: {
      ac () {
        return this.active
      }
    },
    data () {
      return {
        technologyList: [
          {
            icon: 'static/images/tec_Icon.svg',
            title: '数据技术',
            delay: 1000,
            content: '开发ETL、loT、AI等IT技术，采集营销、研发、供应链等领域的业务数据，通过清洗和加工，去芜存精，以便于数据的后续分析。'
          },
          {
            icon: 'static/images/finc-copy.svg',
            title: '数据资产',
            delay: 2000,
            content: '通过赋予数据以业务内涵，实现数据的资产化，构建数字化时代的“煤、电、气”，为吉利业务的发展提供源源不断的“动力”。'
          },
          {
            icon: 'static/images/product_Icon.svg',
            title: '数据产品',
            delay: 3000,
            content: '根据各类业务场景的需要，将数据资产加工成标准化、模块化、序列化的数据产品，为吉利的数字化转型和快速发展“添砖加瓦”。'
          },
          {
            icon: 'static/images/server_Icon.svg',
            title: '数据服务',
            delay: 4000,
            content: '将数据产品进行服务化改造，通过API接口提供给ERP、DMS、BPM、MES、SRM、CRM等应用系统实时调用，实现业务处理的智能化。'
          }
        ]
      }
    }
  }
</script>
<style media="screen">
.tec-box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px
}
.tec-item{
  text-align: center;
  cursor: pointer;
  opacity:1;
  float: left\9;
  transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -webkit-transition: all 0.1s ease-in-out;
}
.tec-item+.tec-item{
  margin-left: 20px
}
.tec-item>section {
  background: #fff;
  border-radius: 16px;
  width: 264px;
  height: 317px;
  padding-top: 40px;
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
  box-shadow 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.tec-item-fade{
  opacity: 1;
  transform: translate(0px, 0px)
}
.tec-item>section:hover{
  transform: translateY(-10px);
  -moz-box-shadow:0px 2px 6px #D8D7D6;
  -webkit-box-shadow:0px 2px 6px #D8D7D6;
  box-shadow:0px 2px 6px #D8D7D6;
}
.tec-item-icon{
  width: 80px;
  display: block;
  margin: 24px auto 40px auto;
}
.tec-item-title{
  font-size: 16px;
  color: #262626
}
.tec-item-inner{
  font-size: 14px;
  color: #8c8c8e;
  margin-top: 20px;
  text-align: left;
  padding: 0 23px
}
</style>
