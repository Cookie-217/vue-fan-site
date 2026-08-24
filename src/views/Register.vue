<template>
  <div class="register-box">
    <div class="register-card">
      <h2>新用户设置密码</h2>
      <div class="item">
        <label>账号</label>
        <input v-model="username" placeholder="请设置账号" />
      </div>
      <div class="item">
        <label>密码</label>
        <input v-model="password" type="password" placeholder="请设置密码" />
      </div>
      <div class="item">
        <label>确认密码</label>
        <input v-model="repassword" type="password" placeholder="再次输入密码" />
      </div>
      <button class="reg-btn" @click="handleRegister">完成注册</button>
      <div v-if="errMsg" class="err">{{ errMsg }}</div>
      <div class="tip">已有账号？<span class="link" @click="$router.push('/login')">去登录</span></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { registerApi } from '@/api/user'

const router = useRouter()
const username = ref('')
const password = ref('')
const repassword = ref('')
const errMsg = ref('')

async function handleRegister() {
  errMsg.value = ''
  if (!username.value || !password.value || !repassword.value) {
    errMsg.value = '全部内容不能为空'
    return
  }
  if(password.value !== repassword.value){
    errMsg.value = '两次输入密码不一致'
    return
  }
  try {
    const res = await registerApi(username.value,password.value)
    if(res.code === 200){
      errMsg.value = "注册成功，请去登录"
      setTimeout(()=>{
        router.push("/login")
      },1200)
    }else{
      errMsg.value = res.msg || "注册失败"
    }
  }catch(e){
    errMsg.value = "请求异常"
  }
}
</script>

<style scoped>
.register-box{
  background:#fcdce8;
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
}
.register-card{
  background:#fff;
  border-radius:22px;
  width:520px;
  padding:42px;
}
.register-card h2{
  font-size:36px;
  margin:0 0 50px 0;
  text-align:center;
  color:#333;
}
.item{
  margin-bottom:32px;
}
.item label{
  font-size:22px;
  display:block;
  margin-bottom:8px;
  text-align:center;
}
.item input{
  width:100%;
  height:44px;
  font-size:20px;
  padding:0 14px;
  box-sizing:border-box;
  border-radius:12px;
  border:1px solid #ccc;
}
.reg-btn{
  width:100%;
  height:50px;
  font-size:24px;
  background:#f8749c;
  color:#fff;
  border:none;
  border-radius:14px;
  margin-top:10px;
}
.err{
  color:red;
  text-align:center;
  margin-top:12px;
  font-size:20px;
}
.tip{
  margin-top:18px;
  text-align:center;
  font-size:18px;
}
.link{
  color:#f8749c;
  cursor:pointer;
}
</style>
