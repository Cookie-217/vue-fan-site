<template>
  <div class="endorse-box">
    <h2>商务代言</h2>
    <div v-if="loading">加载中...</div>
    <div v-else>
      <div class="item" v-for="item in endorseList" :key="item.id">
        <div class="brand">{{ item.brand }}</div>
        <div>介绍：{{ item.intro }}</div>
        <div>年份：{{ item.year }}</div>
        <div class="url">
          <a :href="item.url" target="_blank">视频链接</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getEndorseList } from '@/api/index'

const endorseList = ref([])
const loading = ref(false)

async function loadEndorse() {
  loading.value = true
  try {
    const res = await getEndorseList()
    endorseList.value = res
  } catch (err) {
    console.error("获取代言数据失败",err)
  } finally {
    loading.value = false
  }
}

onMounted(()=>{
  loadEndorse()
})
</script>

<style scoped>
.endorse-box{
  padding:20px;
}
.item{
  border:1px solid #eee;
  padding:12px;
  margin:8px 0;
  border-radius:6px;
}
.brand{
  font-weight:bold;
  font-size:16px;
}
</style>