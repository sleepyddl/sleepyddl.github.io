import axios from "axios"
import { MessageBox, Message } from 'element-ui'


const service = axios.create({
  baseURL: 'http://127.0.0.1:3000', // api 的 base_url
  timeout: 5000 // request timeout
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  console.log(response.data)
  Message({
    message: response
  })
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default service