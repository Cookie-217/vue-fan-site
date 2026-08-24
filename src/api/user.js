// 使用相对路径，规避@别名问题
import request from '../utils/request'

// 用户登录
export function loginApi(username,password){
  return request({
    url:'/api/user/login',
    method:'post',
    data:{
      username,
      password
    }
  })
}

// 新增注册接口
export function registerApi(username,password){
  return request({
    url:'/api/user/register',
    method:'post',
    data:{
      username,
      password
    }
  })
}
