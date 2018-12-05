import {actions} from './actions'
import {getters} from './getters'
import {mutations} from './mutations'
const state = {
  // checkedList: null,
  prdList: [
    {
      code: '000022',
      appUri: 'https://dt.geely.com/sentiment/#/',
      url: 'static/images/PRD_03.png',
      title: '商情智能',
      Entitle: 'Sentiment Intelligence',
      inner: ['个人舆情分析', '媒体事件分析', '竞品车型分析', '市场价格监测', '市场质量监测']
    },
    {
      code: '000025',
      appUri: 'https://dt.geely.com/personal/#/',
      url: 'static/images/PRD_04.png',
      title: '消费者智能',
      Entitle: 'Customer Intelligence',
      inner: ['消费者标签体系', '消费者画像工具', '人群圈定', '洞察报告']
    },
    {
      code: '000019',
      appUri: 'http://10.86.89.77:8080/DAP/loginTicketportal.do',
      url: 'static/images/PRD_05.png',
      title: '运营智能',
      Entitle: 'Bussiness Intelligence',
      inner: ['制造数据', '销售数据', '质量数据']

    },
    {
      code: '000024',
      appUri: 'https://dt.geely.com/pi-platform',
      url: 'static/images/PRD_06.png',
      title: '产品智能',
      Entitle: 'Product Intelligence',
      inner: [
        '一车一档',
        // 'OKM、IPTV、TPTV3',
        '12MIS', '3CPV',
        '12MSA', 'iQS'
      ]
    }
  ]
}
export default {
  state,
  getters,
  actions,
  mutations
}
