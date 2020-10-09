import axios from "axios"
import store from "../store"
import { MessageBox, Message } from 'element-ui'

const service = axios.create({
  baseURL: 'https://www.dtune.top/blog/', // api 的 base_url
  timeout: 50000,// request timeout
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  let token = store.state.token
  if (token) {
    //将token放到请求头发送给服务器,将tokenkey放在请求头中
    config.headers.accessToken = token;
    //也可以这种写法
    // config.headers['accessToken'] = Token;
  }
  return config;

}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  if (response.data.err)
    Message({
      message: response.data.err,
      type: 'error'
    })
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service