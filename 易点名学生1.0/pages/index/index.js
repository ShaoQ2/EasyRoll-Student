// index.js
// 获取应用实例
Page({
  data: {
    show:false,
    showLeave:false
  },
  //当点击课程按钮时发生的事件
  choose:function(e){
    this.setData({
      show:!this.data.show//点击按钮之后将show置为true
    })
  },
  //当点击请假按钮时发生的事件
  showLeave:function(e){
    this.setData({
      showLeave:!this.data.showLeave//点击按钮之后将showLeave设置为true
    })
  },
  sign(){
    wx.navigateTo({
      url: '/pages/sign/sign',
    })
  },
  leave(){
    wx.navigateTo({
      url: '/pages/leave/leave',
    })
  },
  back(){
    this.setData({
      show:false/*让弹窗消失*/
    })
  },
  bindViewTap() {

  },
  onLoad() {
  },
})
