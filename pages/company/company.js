Page({
  data: {
    selectable: true,
    companyInfo: {
      id: 1,
      name: '百变空间',
      logo: '../images/tabbarActive1.png',
      type: '合作顾问',
      intro: '旧房改造平台月流水超4000万',
      tags: ['房产家居', '电子商务', '消费升级'],
      round: 'A轮',
      amount: '3000~4000万',
      city: '深圳',
      viewNum: 702
    },

    companyPic: [
      '../images/pic1.png',
      '../images/pic1.png',
      '../images/pic1.png'
    ],

    companyIntroduce: '云开亚美大药房(全称浙江云开亚美大药房连锁有限公司)是浙江海正药业股份有限公司（股票代码：600267）旗下的慢性特殊药品专营连锁药店，同时也是全国慢特疾病药房。 云开亚美大药房从建立以来，一直专注于重大慢性特殊疾病用药，以经营专科药品为特色，并以医药学知识和服务，基于患者数据库管理，为客户提供持续疾病管理服务，以人为本的服务理念获得顾客信赖。其慢特药品涵盖骨科、肝胆科、肾病科、、神经科、精神科、风湿免疫科、心脑血管科、内分泌科、肿瘤科、眼科、皮肤科等常见科室，全部为厂家直供、保证正品和特优的价格优势，并有齐全的普药OTC品种、营养保健品、医疗器械等。 云开药网是云开亚美大药房的网上药店，是经过国家药监局认证并获得了互联网药品交易资格证书（浙C20130003）的慢特疾病医药电子商务平台，其与云开亚美大药房形成了线上线下一体化服务。',

    team: [
      {
        name: '马云',
        position: '董事长',
        introduce: '马云，男，1964年9月10日生于浙江省杭州市，祖籍浙江省嵊州市（原嵊县）谷来镇， 阿里巴巴集团主要创始人，现担任阿里巴巴集团董事局主席、日本软银董事、大自然保护协会中国理事会主席兼全球董事会成员、华谊兄弟董事、生命科学突破奖基金会董事、联合国数字合作高级别小组联合主席。'
      },
      {
        name: '马云',
        position: '董事长',
        introduce: '马云，男，1964年9月10日生于浙江省杭州市，祖籍浙江省嵊州市（原嵊县）谷来镇， 阿里巴巴集团主要创始人，现担任阿里巴巴集团董事局主席、日本软银董事、大自然保护协会中国理事会主席兼全球董事会成员、华谊兄弟董事、生命科学突破奖基金会董事、联合国数字合作高级别小组联合主席。'
      }
    ],

    counselor: [
      {
        name: '马化腾',
        avatar: '../images/tabbarActive1.png',
        phone: '18002993934',
        wechat: '18002993984'
      },
      {
        name: '马化腾',
        avatar: '../images/tabbarActive1.png',
        phone: '18002993934',
        wechat: '18002993984'
      }
    ]
  },

  copy: function (e) {
    wx.setClipboardData({
      data: 'data',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  }
})