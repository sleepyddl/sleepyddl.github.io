import service from "./http"


export let baseUrl = "http://127.0.0.1:3000/"

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

// http://127.0.0.1:3000/articles/list/?type=""
export function getarticleslist(type) {
  return service({
    url: '/articles/list',
    params: type,
    method: 'get'
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