<template>
  <div>
    <button @click="testApi">测试请求后端接口</button>
  </div>
</template>

<script setup>
import axios from 'axios'

const testApi = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:8080/api/test')
    alert(res.data.msg)
  } catch (err) {
    console.error('请求出错', err)
    alert('接口调用失败，请打开F12控制台查看错误信息')
  }
}
</script>