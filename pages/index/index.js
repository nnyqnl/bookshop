//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bookName:'百年孤独',
    bookList:[
      { id:'10000',bookName: '全球通史',author:'斯塔夫里阿诺斯'},
      { id:'20000',bookName: '解忧杂货店', author: '东野圭吾' },
      { id:'30000',bookName: '追风筝的人', author: '叫啥忘了' }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      // url: 'http://localhost:10001/book/bookList',
      url: 'http://www.superdou.shop:10001/book/bookList',
      method: 'GET',
      success: function (res) {
        
        that.setData({
          bookList:res.data.resultData
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  detail: function (e){
    console.log(e)
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id// 页面 A
    })
  }
})
