import service from "./http"


export function login(data) {
  return service({
    url: '/login',
    method: 'post',
    data
  })
}



export function getarticleslist() {
  return service({
    url: '/articles/list',
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