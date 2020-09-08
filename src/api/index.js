import axios from 'axios';
var CusBase64 = require('@/utils/base64.js');
/**
 * axios配置
 */
let tokenHeader = "ybmars:" + mpvue.getStorageSync('token');
    var _authtoken = CusBase64.CusBASE64.encoder(tokenHeader);
// axios请求拦截器
axios.interceptors.request.use(config => {
    
    // config.headers['Authorization'] = "Basic " + _authtoken ;
    // config.headers["language"] = mpvue.getStorageSync('lang');//加语言请求头字符串

  //to do something...
  return config;
}, error => {
  mpvue.showToast({ icon: 'none', title: '网络繁忙,请稍后重试' });
  console.log(error, 'error')
  return Promise.reject(error);
})
// axios响应拦截器
axios.interceptors.response.use(data => {
  //to do something...
  mpvue.hideLoading();
  return data;
}, error => {
  mpvue.showToast({ icon: 'none', title: '网络繁忙,请稍后重试' });
  console.log(error, 'error2')
  return Promise.reject(error);
})

//axios自定义请求
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    mpvue.request({
      url: config.url,
      data: config.params,
      method: config.method,
      header: {
        'Authorization':  "Basic " + _authtoken ,
        'language':mpvue.getStorageSync('lang')?mpvue.getStorageSync('lang'):'ch',
        'Content-Type': 'application/json; charset=UTF-8'
      },
      success: (res) => {
        return resolve(res);
      },
      fail: (res) => {
        return reject(res);
      }
    })
  })
}

/**
 * url:请求地址
 * params:请求参数
 * mthods:请求方法
 * */

export default async (url, params, method) => {
  try {
    const response = await axios(url, { params, method });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}