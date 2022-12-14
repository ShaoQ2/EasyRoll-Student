import Toast from '@vant/weapp/toast/toast';
const app = getApp()

Page({
  data:{
    grades:[2019,2020,2021,2022],
    classes:[1,2,3,4,5,6,7,8,9,10],
    show_grade:false,
    temp_grade:'',
    show_classNo:false,
    temp_classNo:'',
    id:'',
    name:'',
    departmentName:'',
    majorName:'',
    grade:'',
    classNo:''
  },

  // 学号相关方法
  onChange_id(event){
    this.setData({
      id:event.detail
    })
  },

  // 姓名相关方法
  onChange_name(event){
    this.setData({
      name:event.detail
    })
  },
  // 学院相关方法
  onChange_departmentName(event){
    this.setData({
      departmentName:event.detail
    })
  },
  // 专业相关方法
  onChange_majorName(event){
    this.setData({
      majorName:event.detail
    })
  },
  // 年级相关方法
  showPopup_grade(){
    this.setData({
      temp_grade:this.data.grades[0],
      show_grade:true
    })
  },
  onChange_grade(event){
    this.setData({
      temp_grade:event.detail.value
    })
  },
  confirm_grade(){//确认方法
    this.setData({
      grade:this.data.temp_grade,
      show_grade:false
    })
  },
  cancel_grade(){//取消方法
    this.setData({
      show_grade:false
    })
  },

  // 班级相关方法
  showPopup_classNo(){
    this.setData({
      temp_classNo:this.data.classes[0],
      show_classNo:true
    })
  },
  onChange_classNo(event){
    this.setData({
      temp_classNo:event.detail.value
    })
  },
  confirm_classNo(){//确认方法
    this.setData({
      classNo:this.data.temp_classNo,
      show_classNo:false
    })
  },
  cancel_classNo(){//取消方法
    this.setData({
      show_classNo:false
    })
  },
  //注册按钮方法
  register(){
    if(this.data.id==""){
      Toast('请输入学号')
    }
    else if(this.data.id.length!=9){
      Toast('学号不正确')
    }
    else if (this.data.name=="") {
      Toast('请输入姓名')
    }
    else if (this.data.departmentName=="") {
      Toast('请选择学院')
    }
    else if (this.data.majorName=="") {
      Toast('请选择专业')
    }
    else if (this.data.grade=="") {
      Toast('请选择年级')
    }
    else if (this.data.classNo=="") {
      Toast('请选择班级')
    }
    else{
      wx.login({
        success: (result) => {
          wx.request({
            url: 'https://nicklorry.top:8090/student/base/register',
            data: {
              code:result.code,
              id:this.data.id,
              name:this.data.name,
              departmentName:this.data.departmentName,
              majorName:this.data.majorName,
              grade:this.data.grade,
              classNo:this.data.classNo
            },
            method: "POST",
            success: (result) => {
              if(result.data.status==200){
                Toast('注册成功')
                setTimeout(() => {
                  wx.reLaunch({
                    url: '/pages/mine/mine'
                  })
                }, 2000);
              }
              else{
                Toast('注册失败')
              }
            },
          })
        }
      })
    }
  },
  //取消按钮方法
  cancel(){
    wx.navigateBack({
    })
  },
})