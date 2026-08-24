import request from './request'

//获取商务代言列表
export function getEndorseList(){
  return request({
    url:'/endorse/list',
    method:'get'
  })
}