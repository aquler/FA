Page({
  data: {
    industry: [
      { name: 'TMT', id: 1 },
      { name: '新能源', id: 2 },
      { name: '环保', id: 3 },
      { name: '汽车', id: 4 },
      { name: '智能制造', id: 5 },
      { name: '汽车', id: 6 },
      { name: '金融', id: 7 }
    ],

    round: [
      { name: 'Pre-A', id: 1 },
      { name: 'A', id: 2 },
      { name: 'B', id: 3 },
      { name: 'C', id: 4 },
      { name: 'D', id: 5 },
      { name: 'Pre-ipo', id: 6 },
      { name: '并购', id: 7 }
    ],

    location: [
      { name: '深圳', id: 1 },
      { name: '广州', id: 2 },
      { name: '上海', id: 3 },
      { name: '北京', id: 4 },
      { name: '杭州', id: 5 },
      { name: '天津', id: 6 },
      { name: '武汉', id: 7 },
      { name: '华南', id: 8 },
      { name: '华东', id: 9 },
      { name: '华北', id: 10 },
      { name: '华中', id: 11 }
    ],

    guarantee: [
      { name: '对赌', id: 1 },
      { name: '回购', id: 2}
    ],

    tags: {
      industry: [],
      round: [],
      location: [],
      guarantee: []
    },

    activeBtn: false
  },

  chooseIndustry: function (e) {
    let id = parseInt(e.currentTarget.dataset.id) - 1;
    this.chooseTags('industry', id);
  },

  chooseRound: function (e) {
    let id = parseInt(e.currentTarget.dataset.id) - 1;
    this.chooseTags('round', id);
  },

  chooseLocation: function (e) {
    let id = parseInt(e.currentTarget.dataset.id) - 1;
    this.chooseTags('location', id);
  },

  chooseGuarantee: function (e) {
    let id = parseInt(e.currentTarget.dataset.id) - 1;
    this.chooseTags('guarantee', id);
  },

  chooseTags: function (type, id) {
    let isSelected = this.data[type][id].isSelected;
    let key = type + '[' + id + '].isSelected';
    this.setData({
      [key]: !isSelected
    })

    if(!isSelected) {
      this.data.tags[type].push(id)
    } else {
      this.data.tags[type] = this.data.tags[type].filter(function (item, index) {
        return item !== id
      })
    }

    this.setData({
      activeBtn: !this.isEmpty(this.data.tags)
    })
  },

  isEmpty: function (obj) {
    let arr = Object.values(obj);
    return arr.every(function (item) {
      return item.length === 0;
    })
  },

  filter: function () {
    if (!this.data.activeBtn) {
      return;
    }
    console.log(this.data.tags)
  }
})