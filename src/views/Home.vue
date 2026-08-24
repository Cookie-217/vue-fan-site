<template>
  <div class="home-page">
    <!-- 轮播：放到container外面，通栏全屏 -->
    <div class="carousel-wrap">
      <div class="carousel">
        <div class="carousel-item" v-for="(item, index) in carouselList" :key="index"
             :class="{ active: currentIndex === index }">
          <img :src="item.img" alt="" />
          <div class="carousel-desc">{{ item.title }}</div>
        </div>
        <button class="btn-prev" @click="prevSlide">‹</button>
        <button class="btn-next" @click="nextSlide">›</button>
        <div class="indicator">
          <span v-for="(item, index) in carouselList" :key="index"
                :class="{dot:true, active:currentIndex===index}"
                @click="currentIndex = index"></span>
        </div>
      </div>
    </div>

    <!-- 下面卡片内容，保留container，保持1240px居中 -->
    <div class="container">
      <div class="block-card">
        <h3>👤 个人简介</h3>
        <p>了解雨琦的成长经历、演艺履历</p>
        <router-link to="/main/intro" class="go-btn">前往查看</router-link>
      </div>
      <div class="block-card">
        <h3>🎵 音乐作品</h3>
        <p>自作词自作曲合集</p>
        <router-link to="/main/song" class="go-btn">查看音乐</router-link>
      </div>
      <div class="block-card">
        <h3>✨ 精彩舞台</h3>
        <p>个人打歌舞台</p>
        <router-link to="/main/stage" class="go-btn">浏览舞台</router-link>
      </div>
      <div class="block-card">
        <h3>💌 粉丝留言板</h3>
        <p>写下想对雨琦说的话，留下你的印记</p>
        <router-link to="/main/message" class="go-btn">去留言板</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

//轮播图片配置（内容完全不动）
const carouselList = ref([
  { img: '/img/49.jpg', title: '闪闪发光的舞台' },
  { img: '/img/1.jpg', title: '元气满满的雨琦' },
  { img: '/img/2.jpg', title: '线下活动瞬间' }
])

const currentIndex = ref(0)
let timer = null

//下一张
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselList.value.length
}
//上一张
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + carouselList.value.length) % carouselList.value.length
}

//自动轮播4秒切换
onMounted(() => {
  timer = setInterval(nextSlide, 3000)
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.home-page {
  background: #f8f8f8;
}

.container {
  width: 100%;
  margin: 0 auto 40px;
  padding: 0 20px;
}

.carousel-wrap {
  width: 100%;
  margin-bottom: 30px;
}
.carousel {
  width: 100%;
  height: 620px;
  border-radius: 22px;
  overflow: hidden;
  position: relative;
  background: #eee;
}

.carousel-item {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.6s ease;
}
.carousel-item.active {
  opacity: 1;
}
.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.carousel-desc {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding:14px;
  background:rgba(0, 0, 0, 0.45);
  color:#fff;
  font-size:17px;
}

.btn-prev,
.btn-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.7);
  font-size: 22px;
  cursor: pointer;
  z-index: 2;
}
.btn-prev {left: 16px;}
.btn-next {right: 16px;}

.indicator {
  position: absolute;
  bottom: 54px;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  z-index: 2;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255,255,255,0.6);
  cursor: pointer;
}
.dot.active {
  background: #fff;
}

.block-card {
  background-color: #fff0f6;
  border:1px solid #f2c8dd;
  border-radius:14px;
  padding:32px 20px;
  margin-bottom:20px;
  text-align:center;
}
.block-card h3{
  font-size:24px;
  color:#992e6b;
  margin:0 0 12px;
}
.block-card p{
  color:#777;
  margin:0 0 16px;
  font-size:16px;
}

.go-btn {
  display: inline-block;
  padding:8px 24px;
  background:#ff88aa;
  color:#fff;
  border-radius:20px;
  text-decoration:none;
}
.go-btn:hover {
  background:#ff6b94;
}
</style>
