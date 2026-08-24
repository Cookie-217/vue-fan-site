<template>
  <div class="stage-page">
    <div class="inner-wrap">
      <h2 class="page-title">个人舞台</h2>

      <div class="stage-grid">
        <div
          class="stage-card"
          v-for="item in stageList"
          :key="item.id"
          @click="openBilibili(item.bvUrl)"
        >
          <div class="card-thumb-wrap">
            <iframe
              v-if="item.bvid"
              class="bili-iframe"
              :src="`https://player.bilibili.com/player.html?bvid=${item.bvid}&page=1&autoplay=0&muted=1&danmaku=0&poster=1`"
              frameborder="0"
              allowfullscreen
              allow="autoplay;fullscreen"
            ></iframe>
            <!-- bvid为空时不渲染iframe，防止白屏 -->
            <div v-else class="no-thumb">暂无视频</div>
            <div class="mask-layer"></div>
          </div>

          <div class="card-top">
            <h3 class="song-name">{{item.songName}}</h3>
            <div class="tag">{{item.tag}}</div>
          </div>
          <div class="card-info">
            <p>日期：{{item.date}}</p>
            <p>场合：{{item.scene}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const openBilibili = (url) => {
  if (!url) return
  window.open(url, '_blank')
}

const stageList = [
  {
    id: 1,
    songName: "Could It Be",
    tag: "Could It Be",
    version: "1L",
    date: "2023.06.18",
    scene: "首尔演唱会",
    bvid: "BV1pM4y1n7Z5",
    bvUrl: "https://www.bilibili.com/video/BV1pM4y1n7Z5/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  },
  {
    id: 2,
    songName: "M.O.",
    tag: "Motivation",
    version: "2L",
    date: "2025.09.18",
    scene: "MCD",
    bvid: "BV1yypvzUEfk",
    bvUrl: "https://www.bilibili.com/video/BV1yypvzUEfk/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  },
  {
    id: 3,
    songName: "FREAK",
    tag: "YUQ1",
    version: "3L",
    date: "2024.04.25",
    scene: "MCD",
    bvid: "BV1LT421C7Wx",
    bvUrl: "https://www.bilibili.com/video/BV1LT421C7Wx/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  },
  {
    id: 4,
    songName: "My Way",
    tag: "YUQ1",
    version: "4L",
    date: "2024.04.23",
    scene: "Fan Showcase",
    bvid: "BV1km421H7Nj",
    bvUrl: "https://www.bilibili.com/video/BV1km421H7Nj/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  },
  {
    id: 5,
    songName: "On Clap",
    tag: "YUQ1",
    version: "5L",
    date: "2025.09.28",
    scene: "广州琦妙夜",
    bvid: "BV1Hxn9zoEHA",
    bvUrl: "https://www.bilibili.com/video/BV1Hxn9zoEHA/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  },
  {
    id: 6,
    songName: "Radio (Dum-Dum)",
    tag: "Radio (Dum-Dum)",
    version: "6L",
    date: "2024.08.03",
    scene: "首尔KSPO巨蛋演唱会",
    bvid: "BV1FJZSY4Eoq",
    bvUrl: "https://www.bilibili.com/video/BV1FJZSY4Eoq/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  },
  {
    id: 7,
    songName: "还痛吗（Gone）",
    tag: "Motivation",
    version: "7L",
    date: "2025.09.27",
    scene: "广州琦妙夜",
    bvid: "BV1fNnDzCECk",
    bvUrl: "https://www.bilibili.com/video/BV1fNnDzCECk/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  },
  {
    id: 8,
    songName: "Red Rover",
    tag: "YUQ1",
    version: "8L",
    date: "2025.09.27",
    scene: "广州琦妙夜",
    bvid: "BV1QnnDzYEiW",
    bvUrl: "https://www.bilibili.com/video/BV1QnnDzYEiW/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  },
  {
    id: 9,
    songName: "Giant",
    tag: "A Page",
    version: "9L",
    date: "2025.09.27",
    scene: "广州琦妙夜",
    bvid: "BV1cMnnzcE8u",
    bvUrl: "https://www.bilibili.com/video/BV1cMnnzcE8u/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  }
]
</script>

<style scoped>
.stage-page {
  background:
    radial-gradient(circle at 10% 10%, rgba(255, 136, 170, 0.45), transparent 28%),
    radial-gradient(circle at 90% 20%, rgba(153, 46, 107, 0.35), transparent 35%),
    linear-gradient(135deg, #fff0f6 0%, #f7f7f7 100%);
  min-height: calc(100vh - 120px);
  padding:48px 0;
  width: 100%;
}

.inner-wrap{
  max-width:1240px;
  margin-left: auto !important;
  margin-right: auto !important;
  padding:0 24px;
  width: 100%;
  box-sizing: border-box;
}

.page-title {
  text-align: center;
  font-size: 32px;
  color: #88245c;
  margin-bottom:12px;
  font-weight: 700;
}

.tip-text{
  text-align:center;
  color:#666;
  font-size:15px;
  margin-bottom:40px;
}

.stage-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.stage-card{
  background:#ffffff;
  border-radius:18px;
  overflow: hidden;
  padding:0;
  box-shadow: 0 2px 8px rgba(153, 46, 107, 0.06);
  border:1px solid #f2c8dd;
  cursor: pointer;
  transition: 0.24s;
}
.stage-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(153, 46, 107, 0.12);
}

.card-thumb-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow:hidden;
  background:#eee;
}
.bili-iframe{
  width:100%;
  height:100%;
  border:none;
}
.no-thumb{
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#888;
}
.mask-layer{
  position:absolute;
  inset:0;
  background-color:rgba(0,0,0,0.05);
  z-index:2;
}

.card-top{
  display:flex;
  justify-content: space-between;
  align-items:center;
  margin:16px 20px 12px;
}

.song-name{
  margin:0;
  font-size:20px;
  color:#88245c;
}

.tag{
  background:#f8d7e8;
  color:#88245c;
  padding:3px 10px;
  border-radius:12px;
  font-size:13px;
}

.card-info{
  padding:0 20px 20px;
}
.card-info p{
  margin:6px 0;
  color:#555;
  font-size:14px;
}

@media (max-width: 1080px) {
  .stage-grid {
    grid-template-columns: repeat(2, 1fr);
    gap:28px;
  }
}

@media (max-width: 640px) {
  .inner-wrap{
    padding:0 16px;
  }
  .stage-grid {
    grid-template-columns: 1fr;
    gap:24px;
  }
}
</style>
