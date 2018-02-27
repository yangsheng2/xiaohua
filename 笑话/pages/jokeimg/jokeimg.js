// pages/joke/joke.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jokes: [],
    page: 1,
    pageSize: 20,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.jokeList();
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
    this.setData({ page: this.data.page + 1 });
    this.jokeList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  jokeList() {
    var showapi_appid = 53062;
    var showapi_sign = "4ecad233b46642899cf83fb30a7167ff";
    var url = "http://route.showapi.com/341-2";
    var that = this
    wx.request({
      url: url,
      data: {
        showapi_appid: showapi_appid,
        showapi_sign: showapi_sign,
        page: that.data.page,
        maxResult: that.data.pageSize,
      },
      success: function (res) {
        var data = res.data.showapi_res_body.contentlist;
        that.concatData(data)
      },
    })
  },
  concatData: function (data) {
    this.setData({ jokes: this.data.jokes.concat(data) })
  },
  maxImg(event){
    var src=event.currentTarget.dataset.src;
    wx.previewImage({
      current:src,
      urls:[src]
    })
  }
})