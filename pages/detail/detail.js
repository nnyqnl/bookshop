// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book:{
      name:"红楼梦",
      content:"贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗贾宝玉林黛玉薛宝钗"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    console.log(options)

    wx.request({
      url: 'http://www.superdou.shop:10001/book/getById',
      data:options,
      method: 'GET',
      success: function (res) {

        var name='book.name';
        var content='book.content'
        that.setData({
          [name]: res.data.resultData.bookName,
          [content]: res.data.resultData.introduction
        })
      }
    })
    // that.setData({
    //   book: one
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  addMy: function(event){
    wx.request({
      url: 'localhost:10001/book/addToMy',
      method: 'POST',
      data: event.id,
      success: function (res) {
        var result = res.data.code;
        var toastText = '操作成功';
        if ('000' != result) {
          toastText = '操作失败';
        }
      }
    })
  }
})