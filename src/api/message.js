import request from '@/utils/request'

// 获取留言列表
export function getMessageListApi() {
  return request({
    url:'/api/message/list',
    method:'get'
  })
}
//新增留言
export function addMessageApi(data){
  return request({
    url:'/api/message/add',
    method:'post',
    data
  })
}
//删除留言 管理员
export function deleteMessageApi(id){
  return request({
    url:`/api/message/del/${id}`,
    method:'delete'
  })
}
//获取回收站(仅软删除)
export function getDeletedMessageApi(){
  return request({
    url:'/api/message/deleted',
    method:'get'
  })
}
//恢复留言
export function restoreMessageApi(id){
  return request({
    url:`/api/message/recover/${id}`,
    method:'put'
  })
}
//我的留言弹窗 删除留言（普通用户删除自己）
export function delMyMsg(id){
  return request.post(`/api/message/my/delete/${id}`)
}

// 获取登录用户自己的留言
export function getMyMessageApi() {
  return request({
    url: '/api/message/my',
    method: 'get'
  })
}

// =========新增：管理员获取全部留言（包含已软删除）=========
export function getAllMessageApi(){
  return request({
    url:'/api/message/all',
    method:'get'
  })
}

//兼容旧的 import {getAll}
export const getAll = getAllMessageApi
