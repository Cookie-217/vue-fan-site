<template>
  <div class="welcome-page">
    <div class="slider-wrap" @mouseenter="pausePlay" @mouseleave="startAutoPlay">
      <!-- 轮播图片容器 -->
      <div
        class="slider-item"
        v-for="(item, index) in slideList"
        :key="index"
        :class="{ active: currentIndex === index }"
      >
        <div class="bg-img" :style="{ backgroundImage: `url(${item.img})` }"></div>
        <div class="text-box">
          <h1>{{ item.title }}</h1>
          <p>{{ item.desc }}</p>
          <button class="enter-btn" @click="goMain">点击进入</button>
        </div>
      </div>

      <!-- 左右切换箭头 -->
      <div class="arrow left" @click="prev">‹</div>
      <div class="arrow right" @click="next">›</div>

      <!-- 飘落彩片 -->
      <div
        class="confetti"
        v-for="c in 60"
        :key="c"
        :style="{
          left: `${Math.random() * 100}%`,
          width: `${6 + Math.random() * 8}px`,
          height: `${6 + Math.random() * 8}px`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${5 + Math.random() * 4}s`
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const currentIndex = ref(0)
const timer = ref(null)

// 三张轮播图
const slideList = ref([
  {
    img: "/img/wel1.jpg",
    title: "欢迎回家！",
    desc: "一起走进宋雨琦的音乐世界，解锁全能唱作人的舞台魅力吧！"
  },
  {
    img: "/img/wel2.jpg",
    title: "宋雨琦",
    desc: "新声代歌手 · 实力唱作人 · 无限定语TOP"
  },
  {
    img: "/img/wel3.jpg",
    title: "YUQI",
    desc: "用音乐传递热爱，用舞台闪耀全场"
  }
])

// 上一张
const prev = () => {
  currentIndex.value = currentIndex.value === 0 ? slideList.value.length - 1 : currentIndex.value - 1
}
// 下一张
const next = () => {
  currentIndex.value = currentIndex.value === slideList.value.length - 1 ? 0 : currentIndex.value + 1
}

// 开启自动轮播
const startAutoPlay = () => {
  clearInterval(timer.value)
  timer.value = setInterval(() => next(), 5000)
}
// 暂停轮播
const pausePlay = () => clearInterval(timer.value)

// 点击跳转主页
const goMain = () => router.push("/main/home")

onMounted(() => startAutoPlay())
onUnmounted(() => {
  if (timer.value) clearInterval(timer.value)
})
</script>

<style scoped>
.welcome-page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.slider-wrap {
  width: 100%;
  height: 100%;
  position: relative;
}
/* 轮播项基础样式 */
.slider-item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.8s ease;
}
.slider-item.active {
  opacity: 1;
  z-index: 2;
}
.bg-img {
  width: 100%;
  height: 100%;
  background-size: 105%;
  background-position: center;
  background-repeat: no-repeat;
}
.text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: 0 2px 10px rgba(0,0,0,0.6);
  /* 开启弹性垂直排列，间距必定生效 */
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}

.text-box h1 {
  font-size: 48px;
  color: #ffffff;
  margin: 0;
}

.text-box p {
  font-size: 20px;
  color: #ffffff;
  margin: 0;
  line-height: 1.6;
}

.enter-btn {
  margin-top: 25px;
  padding: 20px 56px;
  font-size: 24px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: 2px solid #fff;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s ease;
}
.enter-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}
/* 左右箭头 */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 44px;
  color: #ffffff;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  transition: 0.2s ease;
  z-index: 10;
}
.arrow:hover {
  background: rgba(0, 0, 0, 0.45);
}
.left {
  left: 20px;
}
.right {
  right: 20px;
}
/* 彩片飘落动画 */
@keyframes fall {
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
.confetti {
  position: absolute;
  border-radius: 2px;
  animation: fall linear infinite;
  z-index: 5;
}
.confetti:nth-child(odd) {
  background: #ff88bb;
}
.confetti:nth-child(3n) {
  background: #fff;
}
.confetti:nth-child(5n) {
  background: #ff5599;
}
.confetti:nth-child(7n) {
  background: #f8d8e8;
}
.confetti:nth-child(9n) {
  background: #ffe6f0;
}
</style>