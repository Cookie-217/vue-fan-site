<template>
  <div class="cover-page">
    <div class="inner-wrap">
      <h2 class="page-title">神级Cover舞台汇总</h2>

      <div class="cover-grid">
        <div
          class="video-card"
          v-for="item in coverList"
          :key="item.id"
          @click="openBilibili(item.bvUrl)"
        >
          <div class="card-thumb-wrap">
            <iframe
              class="bili-iframe"
              :src="`https://player.bilibili.com/player.html?bvid=${item.bvid}&page=1&autoplay=0&muted=1&danmaku=0&poster=1`"
              frameborder="0"
              allowfullscreen
              allow="autoplay;fullscreen"
            ></iframe>
            <div class="mask-layer">
            </div>
          </div>

          <div class="card-text">
            <h4 class="song-name">{{ item.name }}</h4>
            <p class="song-meta">{{ item.showPlace }} · {{ item.showDate }}</p>
            <p class="song-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const coverList = [
  {
    id: 1,
    name: "Don't Start Now ",
    //desc: "浙江卫视跨年 | 氛围感翻唱",
    year: "2025",
    showDate: "2025.7.27",
    showPlace: "夏季歌谣大战舞台",
    language: "英文",
    bvid:"BV1kW83zhE2r",
    bvUrl: "https://www.bilibili.com/video/BV1kW83zhE2r/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  },
  {
    id: 2,
    name: "没有明天",
    //desc: "生日会现场｜高音震撼",
    year: "2025",
    showDate: "2025.08.03",
    showPlace: "合作舞台",
    language: "韩语",
    bvid:"BV19ThgzjEtL",
    bvUrl: "https://www.bilibili.com/video/BV19ThgzjEtL/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  },
  {
    id: 3,
    name: "背对背拥抱",
   // desc: "跑男现场｜烟嗓适配",
    year: "2025",
    showDate: "2025.09.27",
    showPlace: "广州琦妙夜",
    language: "中文",
    bvid:"BV1uannzyEUp",
    bvUrl: "https://www.bilibili.com/video/BV1uannzyEUp/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  },
  {
    id: 4,
    name: "眼鼻嘴",
    //desc: "见面会舞台｜爆发力强",
    year: "2022",
    showDate: "2022.05.10",
    showPlace: "综艺节目",
    language: "韩语+英文",
    bvid:"BV19v4y1P7Db",
    bvUrl: "https://www.bilibili.com/video/BV19v4y1P7Db/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  },
  {
    id: 5,
    name: "Flowers",
    //desc: "跨年舞台｜轻松治愈",
    year: "2023",
    showDate: "2023.03.14",
    showPlace: "惊喜翻唱",
    language: "英文",
    bvid:"BV1aL411k7Hu",
    bvUrl: "https://www.bilibili.com/video/BV1aL411k7Hu/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  },
  {
    id: 6,
    name: "普通朋友",
    //desc: "音乐节现场｜温柔抒情",
    year: "2024",
    showDate: "2024.05.26",
    showPlace: "杭州草莓音乐节",
    language: "中文",
    bvid:"BV1Gs42137oQ",
    bvUrl: "https://www.bilibili.com/video/BV1Gs42137oQ/?share_source=copy_web&vd_source=94bb11c122dc97952587ec63bf5dbf37"
  }
]

const openBilibili = (url) => {
  if(!url) return
  window.open(url, '_blank')
}
</script>

<style scoped>
.cover-page {
  background:
    radial-gradient(circle at 10% 10%, rgba(255, 136, 170, 0.45), transparent 28%),
    radial-gradient(circle at 90% 20%, rgba(153, 46, 107, 0.35), transparent 35%),
    linear-gradient(135deg, #fff0f6 0%, #f7f7f7 100%);
  min-height: 100vh;
  padding:48px 0;
  width: 100%;
}

.inner-wrap{
  max-width:1240px;
  /* 核心：在父容器内部居中 */
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
  margin-bottom: 40px;
  font-weight: 700;
}

.cover-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width:100%;
}

.video-card {
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(153, 46, 107, 0.06);
  border: 1px solid #f2c8dd;
  cursor: pointer;
  transition: 0.24s;
}
.video-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(153, 46, 107, 0.12);
}

.card-thumb-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow:hidden;
}

.bili-iframe{
  width:100%;
  height:100%;
  border:none;
}

.mask-layer{
  position:absolute;
  inset:0;
  background-color:rgba(0,0,0,0.05);
  z-index:2;
}

.card-text {
  padding: 20px 20px 24px 20px;
}

.song-name {
  margin: 0 0 8px;
  font-size: 19px;
  color: #88245c;
  font-weight: 700;
}

.song-meta {
  margin: 0 0 8px;
  font-size: 13px;
  color: #999;
}

.song-desc {
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.55;
}

@media (max-width: 1080px) {
  .cover-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }
}

@media (max-width: 640px) {
  .inner-wrap{
    padding:0 16px;
  }
  .cover-grid {
    grid-template-columns: 1fr;
    gap:24px;
  }
  .page-title {
    font-size: 26px;
  }
}
</style>
