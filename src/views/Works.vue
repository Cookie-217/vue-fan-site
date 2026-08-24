<template>
  <div class="works-box">
    <h2>自作曲</h2>
    <div v-if="loading">加载中...</div>
    <div v-else>
      <div class="item" v-for="item in worksList" :key="item.id">
        <div class="songName">{{ item.songName }}</div>
        <div class="createInfo">{{ item.createInfo }}</div>
        <div class="album">{{ item.album }}</div>
        <div class="url">
          <a :href="item.bZhanUrl" target="_blank">视频链接</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getWorksList } from '@/api/index'

const worksList = ref([])
const loading = ref(false)

async function loadWorks() {
  loading.value = true
  try {
    const res = await getWorksList()
    worksList.value = res
  } catch (err) {
    console.error("获取自作曲失败",err)
  }finally {
    loading.value = false
  }
}

onMounted(()=>{
  loadWorks()
})
</script>

<style scoped>
.works-box{
  padding:20px;
}
.item{
  border:1px solid #eee;
  padding:12px;
  margin:8px 0;
  border-radius:6px;
}
.songName{
  font-weight:bold;
  font-size:16px;
}
</style>