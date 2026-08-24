<template>
  <div class="photo-wrap">
    <h2 class="page-title">相册</h2>
    <!-- 透视父容器！perspective放到这里 -->
    <div class="perspective-container">
      <div id="dragBox" class="drag-box">
        <div class="spin-box" id="spinBox">
          <img v-for="(src,i) in listA" :key="'a-'+i" :src="src" alt="相册"/>
        </div>
        <div class="spin-box" id="spinBox2">
          <img v-for="(src,i) in listB" :key="'b-'+i" :src="src" alt="相册"/>
        </div>
        <div class="spin-box" id="spinBox3">
          <img v-for="(src,i) in listC" :key="'c-'+i" :src="src" alt="相册"/>
        </div>
      </div>
    </div>

    <div v-if="previewVisible" class="preview-mask" @click="previewVisible=false">
      <img class="preview-img" :src="previewSrc" alt="大图预览"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 第一层 spinBox 1~16
const listA = ref([
  new URL('@/assets/photo/1.jpg', import.meta.url).href,
  new URL('@/assets/photo/2.jpg', import.meta.url).href,
  new URL('@/assets/photo/3.jpg', import.meta.url).href,
  new URL('@/assets/photo/4.jpg', import.meta.url).href,
  new URL('@/assets/photo/5.jpg', import.meta.url).href,
  new URL('@/assets/photo/6.jpg', import.meta.url).href,
  new URL('@/assets/photo/7.jpg', import.meta.url).href,
  new URL('@/assets/photo/8.jpg', import.meta.url).href,
  new URL('@/assets/photo/9.jpg', import.meta.url).href,
  new URL('@/assets/photo/10.jpg', import.meta.url).href,
  new URL('@/assets/photo/11.jpg', import.meta.url).href,
  new URL('@/assets/photo/12.jpg', import.meta.url).href,
  new URL('@/assets/photo/13.jpg', import.meta.url).href,
  new URL('@/assets/photo/14.jpg', import.meta.url).href,
  new URL('@/assets/photo/15.jpg', import.meta.url).href,
  new URL('@/assets/photo/16.jpg', import.meta.url).href,
])

// 上层 spinBox2 17~32
const listB = ref([
  new URL('@/assets/photo/17.jpg', import.meta.url).href,
  new URL('@/assets/photo/18.jpg', import.meta.url).href,
  new URL('@/assets/photo/19.jpg', import.meta.url).href,
  new URL('@/assets/photo/20.jpg', import.meta.url).href,
  new URL('@/assets/photo/21.jpg', import.meta.url).href,
  new URL('@/assets/photo/22.jpg', import.meta.url).href,
  new URL('@/assets/photo/23.jpg', import.meta.url).href,
  new URL('@/assets/photo/24.jpg', import.meta.url).href,
  new URL('@/assets/photo/25.jpg', import.meta.url).href,
  new URL('@/assets/photo/26.jpg', import.meta.url).href,
  new URL('@/assets/photo/27.jpg', import.meta.url).href,
  new URL('@/assets/photo/28.jpg', import.meta.url).href,
  new URL('@/assets/photo/29.jpg', import.meta.url).href,
  new URL('@/assets/photo/30.jpg', import.meta.url).href,
  new URL('@/assets/photo/31.jpg', import.meta.url).href,
  new URL('@/assets/photo/32.jpg', import.meta.url).href,
])

// 下层 spinBox3 33~48
const listC = ref([
  new URL('@/assets/photo/33.jpg', import.meta.url).href,
  new URL('@/assets/photo/34.jpg', import.meta.url).href,
  new URL('@/assets/photo/35.jpg', import.meta.url).href,
  new URL('@/assets/photo/36.jpg', import.meta.url).href,
  new URL('@/assets/photo/37.jpg', import.meta.url).href,
  new URL('@/assets/photo/38.jpg', import.meta.url).href,
  new URL('@/assets/photo/39.jpg', import.meta.url).href,
  new URL('@/assets/photo/40.jpg', import.meta.url).href,
  new URL('@/assets/photo/41.jpg', import.meta.url).href,
  new URL('@/assets/photo/42.jpg', import.meta.url).href,
  new URL('@/assets/photo/43.jpg', import.meta.url).href,
  new URL('@/assets/photo/44.jpg', import.meta.url).href,
  new URL('@/assets/photo/45.jpg', import.meta.url).href,
  new URL('@/assets/photo/46.jpg', import.meta.url).href,
  new URL('@/assets/photo/47.jpg', import.meta.url).href,
  new URL('@/assets/photo/48.jpg', import.meta.url).href,
])


const previewVisible = ref(false)
const previewSrc = ref('')
const openPreview = (src)=>{
  previewSrc.value = src
  previewVisible.value = true
}

onMounted(()=>{
  let radius = 560;
  const outDom = document.getElementById("dragBox");
  const spinDom = document.getElementById("spinBox");
  const spinDom2 = document.getElementById("spinBox2");
  const spinDom3 = document.getElementById("spinBox3");

  const aImg = spinDom.getElementsByTagName('img');
  const aImg2 = spinDom2.getElementsByTagName('img');
  const aImg3 = spinDom3.getElementsByTagName('img');

  const aEle = [...aImg];
  const aEle2 = [...aImg2];
  const aEle3 = [...aImg3];

  function setStyle(delayTime, dom, i, len) {
    dom.style.transform = "rotateY(" + (i * (360 / len)) + "deg) translateZ(" + radius + "px)"
    dom.style.transition = "transform 1s";
    dom.style.transitionDelay = delayTime || ((len - i) / 4) + "s";
    dom.onclick = ()=> openPreview(dom.src)
  }

  function init(delayTime) {
    for (let i = 0; i < aEle.length; i++) setStyle(delayTime, aEle[i], i, aEle.length)
    for (let i = 0; i < aEle2.length; i++) setStyle(delayTime, aEle2[i], i, aEle2.length)
    for (let i = 0; i < aEle3.length; i++) setStyle(delayTime, aEle3[i], i, aEle3.length)
  }

  setTimeout(()=> init(),1000);

  document.onmousewheel = function (e) {
    e = e || window.event;
    const d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
  }

  function playSpin(yes) {
    spinDom.style.animationPlayState = (yes ? 'running' : 'paused');
    spinDom2.style.animationPlayState = (yes ? 'running' : 'paused');
    spinDom3.style.animationPlayState = (yes ? 'running' : 'paused');
  }

  let tX = 0, tY = 10;
  function changeRotate(obj) {
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;
    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
  }

  let startX, startY, endX, endY, desX = 0, desY = 0;
  document.onpointerdown = function (e) {
    clearInterval(outDom.timer);
    e = e || window.event;
    startX = e.clientX;
    startY = e.clientY;
    this.onpointermove = function (e) {
      playSpin(false);
      e = e || window.event;
      endX = e.clientX;
      endY = e.clientY;
      desX = endX - startX;
      desY = endY - startY;
      tX += desX * 0.1;
      tY += desY * 0.1;
      changeRotate(outDom);
      startX = endX;
      startY = endY;
    }
    this.onpointerup = function () {
      outDom.timer = setInterval(function () {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;
        changeRotate(outDom);
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(outDom.timer);
          playSpin(true);
        }
      },1)
      this.onpointermove = this.onpointerup = null;
    }
    return false;
  }
})
</script>

<style scoped>
.photo-wrap{
  min-height: calc(100vh - 80px);
  overflow:hidden;
  background:#111;
  padding:20px 0;
}
.page-title{
  text-align:center;
  font-size:32px;
  color:#fff;
  margin:20px 0 40px;
}

/* ✅ 透视容器，必须占满宽度，perspective写在这里 */
.perspective-container{
  width:100%;
  height:75vh;
  perspective:1000px;
  display:flex;
  justify-content:center;
  align-items:center;
}

.drag-box{
  position:relative;
  transform-style:preserve-3d;
  /* 去掉display:flex！！！这是挤到左边元凶 */
  transform:rotateX(-30deg);
}

.spin-box{
  width:120px;
  height:140px;
  position:relative;
  transform-style:preserve-3d;
  animation: spin 200s infinite linear;
}
#spinBox2{
  position:absolute;
  top:120%;
}
#spinBox3{
  position:absolute;
  top:-120%;
}

.spin-box img{
  transform-style:preserve-3d;
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  box-shadow:0 0 8px #fff;
  -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
  cursor:pointer;
}
.spin-box img:hover{
  box-shadow:0 0 15px #fff;
}

@keyframes spin {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

.preview-mask{
  position:fixed;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  background:rgba(0,0,0,0.92);
  z-index:9999;
  display:flex;
  align-items:center;
  justify-content:center;
}
.preview-img{
  max-width:92vw;
  max-height:92vh;
}
</style>
