// axios请求封装实例
import axios from 'axios'

// 创建axios实例，后端基础地址
const request = axios.create({
  baseURL: '',
  timeout: 10000
})

// 全局请求拦截器
request.interceptors.request.use(config => {
  return config
})

// 全局响应拦截器
request.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})

// ========== Cover舞台列表 ==========
export function getCoverList() {
  return request({
    url: '/api/cover/list',
    method: 'get'
  })
}

// ========== Runningman列表 ==========
export function getRunningList() {
  return request({
    url: '/api/running/list',
    method: 'get'
  })
}

// ========== 粉丝留言板全套接口（含永久删除） ==========
export function getMessageList(){
  return request({
    url:'/api/message/list',
    method:'get'
  })
}

export function addMessage(data){
  return request({
    url:'/api/message/add',
    method:'post',
    data
  })
}

export function deleteMessage(id) {
  return request({
    url: `/api/message/del/${id}`,
    method: 'delete'
  })
}

export function getDeletedMessageList() {
  return request({
    url: '/api/message/deleted',
    method: 'get'
  })
}

export function recoverMessage(id) {
  return request({
    url: `/api/message/recover/${id}`,
    method: 'put'
  })
}

export function permanentDeleteMessage(id) {
  return request({
    url: `/api/message/permanentDel/${id}`,
    method: 'delete'
  })
}

//新增：获取歌曲列表
export function getSongListApi() {
  return request({
    url:'/api/song/list',
    method:'get'
  })
}

// 根据id获取单首歌曲
export function getSongDetailApi(id) {
  return request({
    url:`/api/song/${id}`,
    method:'get'
  })
}