import service from "./http"


export function login(data) {
  return service({
    url: '/login',
    method: 'post',
    data
  })
}