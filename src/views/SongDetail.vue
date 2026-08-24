<template>
  <div class="bg-pink"></div>
  <div class="content-wrap">
    <div class="outer-wrap">
      <div class="back-btn" @click="$router.back()">← 返回歌曲列表</div>

      <div v-if="loading" class="loading">加载中...</div>
      <div v-else-if="!song" class="loading">未找到该歌曲</div>

      <div v-else class="detail-card">
        <h2 class="song-title">{{ song.songName }}</h2>
        <div class="row">
          <label>创作身份：</label>
          <span>{{ song.createIdentity }}</span>
        </div>
        <div class="row">
          <label>收录专辑：</label>
          <span>{{ song.album }}</span>
        </div>
        <div class="row">
          <label>发行时间：</label>
          <span>{{ song.publishTime }}</span>
        </div>
        <div class="row" v-if="song.intro">
          <label>歌曲介绍：</label>
          <div class="text">{{ song.intro }}</div>
        </div>

        <div class="audio-wrap" v-if="song.audioUrl">
          <h4>音频播放</h4>
          <audio :src="song.audioUrl" controls />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getSongDetailApi } from '@/api/index'

const route = useRoute()
const loading = ref(true)
const song = ref(null)

const loadDetail = async () => {
  loading.value = true
  try {
    const id = route.params.id
    const res = await getSongDetailApi(id)
    if(res.code ===200){
      song.value = res.data
    }
  }catch(e){
    console.error(e)
  }finally{
    loading.value = false
  }
}

onMounted(()=>{
  loadDetail()
})
</script>

<style scoped>
.bg-pink {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #ffd6e0;
  z-index: -1;
}
.content-wrap{
  padding:40px 20px;
}
.outer-wrap{
  max-width:800px;
  margin:0 auto;
  background:#ffe680;
  border-radius:16px;
  padding:30px;
}
.back-btn{
  color:#b35900;
  cursor:pointer;
  margin-bottom:24px;
  font-size:16px;
}
.loading{
  text-align:center;
  padding:60px 0;
  font-size:18px;
  color:#996600;
}
.detail-card{
  background:#fff;
  border-radius:12px;
  padding:30px;
}
.song-title{
  text-align:center;
  font-size:28px;
  color:#b35900;
  margin:0 0 30px;
}
.row{
  margin-bottom:14px;
  font-size:16px;
}
.row label{
  font-weight:bold;
  color:#666;
}
.text{
  margin-top:6px;
  line-height:1.7;
  color:#333;
}
.audio-wrap{
  margin-top:30px;
}
.audio-wrap audio{
  width:100%;
}
</style>
