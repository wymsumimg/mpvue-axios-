import axios from './index'

// export const getMessage = (params) => axios("http://xxx", params, 'post')
export const employeeClientLogin = (params) => axios("http://192.168.21.222:8017/APi/Employee/ClientLogin", params, 'post')



// 登录接口
// export function employeeClientLogin(params) {
//     return fetch.post('Employee/ClientLogin', params);
// }