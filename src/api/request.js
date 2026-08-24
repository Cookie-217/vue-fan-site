import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000
})

// 请求拦截器自动携带token
request.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if(token){
    config.headers.token = token
  }
  return config
})

//响应拦截
request.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

export default request
