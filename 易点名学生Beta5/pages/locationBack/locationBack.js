//UP5BZ-6IT6I-A7DGS-5MZQ2-BM3AQ-Q5FFD密钥
// 引入SDK核心类
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
 
    onLoad: function () {
        // 实例化API核心类
        qqmapsdk = new QQMapWX({
            key: 'UP5BZ-6IT6I-A7DGS-5MZQ2-BM3AQ-Q5FFD'
        });
    },
   onShow: function () {
       /* // 调用接口
        qqmapsdk.search({
            keyword: '大学',
            success: function (res) {
                console.log(res);
            },
            fail: function (res) {
                console.log(res);
            },
        complete: function (res) {
            console.log(res);
        }
    });   */
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
}
})
