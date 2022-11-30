// pages/sign/sign.js
// 引入SDK核心类
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  back(){
    wx.switchTab({
      url: '/pages/index/index',//返回tabbar页面不能用wx.navigateTo()
    })
  },
  sign(){
    wx.request({
      url: 'url',
    })
  },
  onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
        key: 'UP5BZ-6IT6I-A7DGS-5MZQ2-BM3AQ-Q5FFD'
    });
  },
  onShow: function () {
 qqmapsdk.reverseGeocoder({
   success: function(res) {//成功后的回调
     console.log(res);
     var res = res.result;
     var latitude = res.location.lat;
     var longtitde = res.location.lng;
     console.log(latitude);
     console.log(longtitde);
    }
  })
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})