// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   textareaVal:"",
   userimg:"",
   dataList:[],
   chatImg:"image/猪.jpg",
   scrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserImg()
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
  reg(e){
    this.setData({ dataList: this.data.dataList.concat({ text: e.detail.value.textarea,type:1,img:this.data.userImg})});
    this.setData({ textareaVal: e.detail.value.textarea})
   this.list();
   this.setData({ textareaVal: "" })
  },
  list(){
    var that=this
    var url="https://way.jd.com/turing/turing";
    wx.request({
      url: url,
      data:{
        appkey: "5f606a674bd2f6469d1f681d852b9b67",
        info:that.data.textareaVal,
        loc:"",
        userid:""
      },
      success: function(res) {
        that.setData({ dataList: that.data.dataList.concat({ text: res.data.result.text,type:2,img:that.data.chatImg})})
        that.setData({ scrollTop: that.data.scrollTop + 1000})
      },
    })
   
  },
  getUserImg(){
    var that=this
    wx.getUserInfo({
      success(res){
        that.setData({ userImg: res.userInfo.avatarUrl})
      },
    })
  },
  
})