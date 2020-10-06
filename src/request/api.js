import service from "./http"

export let baseUrl = "http://127.0.0.1:3000/"


// post请求      url: string, data?: any, config?: AxiosRequestConfig
// get请求       url: string, config?: AxiosRequestConfig

export function login(data) {
  return service({
    url: '/login',
    method: 'post',
    data
  })
}


export function getarticlesdetail(id) {
  return service({
    url: `/articles/detail`,
    params: { id },
    method: 'get'
  })
}
export function postArticle(data) {
  return service({
    url: `/articles/post`,
    method: 'post',
    data
  })
}

// http://127.0.0.1:3000/articles/list/?type=""
export function getarticleslist(type) {
  return service({
    url: '/articles/list',
    params: { type },
    method: 'get'
  })
}
export function getHotarticles() {
  return service({
    url: '/articles/hot',
    // params: { type },
    method: 'get'
  })
}
export function searcharticles(keyword) {
  return service({
    url: '/articles/list',
    params: { keyword },
    method: 'get'
  })
}

export function increaseLookTimes(id) {
  return service({
    url: '/articles/looktimes',
    method: 'post',
    data: { id }
  })
}



export function uploadimg(data) {
  return service({
    url: '/admin/uploadimg',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    // 'Content-Type': 'application/x-www-form-urlencoded'
    data
  })
}




export function articleDelete(id) {
  return service({
    url: '/articles/delete',
    method: 'delete',
    params: {
      id
    },
  })
}
