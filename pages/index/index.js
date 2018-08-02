Page({
  data: {
    currentIndex: '1',
    slidebarLeft: '60rpx',
    banner: [
      {
        src: '../images/pic1.png'
      },
      {
        src: '../images/pic1.png'
      },
      {
        src: '../images/pic1.png'
      }
    ],

    project: [
      {
        id: 1,
        name: '百变空间',
        logo: '../images/tabbarActive1.png',
        type: '合作顾问',
        intro: '旧房改造平台月流水超4000万',
        tags: ['房产家居', '电子商务', '消费升级'],
        round: 'A轮',
        amount: '3000~4000万',
        city: '深圳'
      },
      {
        id: 1,
        name: '百变空间',
        logo: '../images/tabbarActive1.png',
        type: '合作顾问',
        intro: '旧房改造平台月流水超4000万',
        tags: ['房产家居', '电子商务', '消费升级'],
        round: 'A轮',
        amount: '3000~4000万',
        city: '深圳'
      }
    ]
  },

  onLoad: function () {
    
  },

  onShareAppMessage: function () {
    return {
      title: '金融FA',
      path: '/pages/index/index'
    }
  },

  tabChange: function (e) {
    let id = e.target.dataset.id;
    if(id) {
      
      var slidebarLeft = (parseInt(id) - 1) * 189 + 60;
      this.setData({
        currentIndex: id,
        slidebarLeft: slidebarLeft + 'rpx'
      })
    }
  }
})
