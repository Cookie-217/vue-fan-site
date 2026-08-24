<template>
  <div class="login-box">
    <div class="login-card">
      <h2>粉丝网站登录</h2>
      <div class="item">
        <label>账号</label>
        <input v-model="username" placeholder="请输入账号" />
      </div>
      <div class="item">
        <label>密码</label>
        <input v-model="password" type="password" placeholder="请输入密码" />
      </div>
      <button class="login-btn" @click="handleLogin">登录</button>
      <div v-if="errMsg" class="err">{{ errMsg }}</div>
      <!-- =========新增这一行 注册跳转========= -->
      <div class="tip">还没有账号？<span class="link" @click="$router.push('/register')">去设置密码注册</span></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginApi } from '@/api/user'

const router = useRouter()
const username = ref('')
const password = ref('')
const errMsg = ref('')

async function handleLogin() {
  errMsg.value = ''
  if (!username.value || !password.value) {
    errMsg.value = '账号密码不能为空'
    return
  }
  try {
    // res 直接就是后端返回 {code,token,role,user}
    const data = await loginApi(username.value, password.value)
    console.log('登录返回data:', data)

    if (data.code === 200 && data.token) {
      localStorage.setItem('token', data.token)
      localStorage.setItem('userRole', data.role)
      if(data.user){
        localStorage.setItem('userInfo', JSON.stringify(data.user))
      }
      router.push('/main/message')
    } else {
      errMsg.value = data.msg || '账号或密码错误'
    }
  } catch (e) {
    console.error('登录异常：', e)
    errMsg.value = '登录请求失败'
  }
}

</script>



<style scoped>
/* 整个登录页面背景 */
.login-box {
  background: #fcdce8;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 白色卡片整体（气泡盒子） */
.login-card {
  background: #ffffff;
  border-radius: 22px;  /* 卡片圆角 */
  width: 520px;         /* 卡片整体宽度 */
  padding: 42px;        /* 卡片内部留白大小 */
}

/* 标题：粉丝网站登录 */
.login-card h2 {
  font-size: 36px;      /* 标题文字大小 */
  margin: 0 0 25px 0 !important;
  text-align: center;
  color: #333;
}

/* =========修改这里：调大item之间的上下距离，输入框就不会贴在一起========= */
.item {
  margin-bottom: 30px !important;
}

/* 账号、密码标签文字 */
.item label {
  font-size: 22px;      /* 标签文字大小 */
  display: block;
  margin-bottom: 8px;
  text-align: center;
}

/* 账号、密码输入框 */
.item input {
  width: 100%;
  height: 44px;         /* 输入框高度 */
  font-size: 20px;      /* 输入框内文字大小 */
  padding: 0 14px;
  box-sizing: border-box;
  border-radius: 12px;  /* 输入框圆角 */
  border: 1px solid #ccc;
}

/* 粉色登录按钮 */
.login-btn {
  width: 100%;
  height: 50px;         /* 按钮高度 */
  font-size: 24px;      /* 按钮文字大小 */
  background: #f8749c;
  color: #fff;
  border: none;
  border-radius: 14px;  /* 按钮圆角 */
  margin-top: 10px;
}

/* 错误提示文字 */
.err {
  color: red;
  text-align: center;
  margin-top: 12px;
  font-size: 20px;      /* 错误文字大小 */
}

/* =========【新增】注册跳转文字样式========= */
.tip {
  margin-top: 18px;
  text-align: center;
  font-size: 18px;
}
.link {
  color: #f8749c;
  cursor: pointer;
}
</style>
