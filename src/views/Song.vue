<template>
  <div class="song-page">
    <div class="wrap">
      <h2 class="page-title">自作曲完整汇总 ✨</h2>

      <div class="table-wrap">
          <table class="song-table">
            <thead>
              <tr>
                <th>歌曲名称</th>
                <th>创作身份</th>
                <th>收录专辑</th>
                <th>发行时间</th>
                <th>播放试听</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in songList" :key="index">
                <td>{{ item.title }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.album }}</td>
                <td>{{ item.time }}</td>
                <td>
                  <a class="play-link" :href="item.music_url" target="_blank">点击播放</a>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const songList = [
  // 经典自作曲
  {
    title: "《i'M THE TREND》",
    type: "作词二作 作曲三作",
    album: "i'M THE TREND",
    time: "2020-07-07",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=270649316#webchat_redirect"
  },
  {
    title: "《DUMDi DUMDi (Chinese Ver.)》",
    type: "作词一作",
    album: "덤디덤디 (DUMDi DUMDi)",
    time: "2020-08-03",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=274468152#webchat_redirect"
  },
  {
    title: "《LOST》",
    type: "作词一作 作曲二作",
    album: "I burn",
    time: "2021-01-11",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=334580832#webchat_redirect"
  },
  {
    title: "《HWAA(火花) (Chinese Ver.)》",
    type: "作词二作",
    album: "화(火花)",
    time: "2021-01-27",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=295796702#webchat_redirect"
  },
  {
    title: "《Giant》",
    type: "作词一作 作曲二作",
    album: "A Page",
    time: "2021-05-13",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=333976253&songtype=0#webchat_redirect"
  },
  {
    title: "《POLAROID》",
    type: "作词一作 作曲一作 编曲一编",
    album: "I NEVER DIE",
    time: "2022-03-14",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=346383983&songtype=0#webchat_redirect"
  },
  {
    title: "《LIAR》",
    type: "作词一作 作曲一作",
    album: "I NEVER DIE",
    time: "2022-03-14",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=346383985#webchat_redirect"
  },
  {
    title: "《소나기 (Rain)》",
    type: "作曲一作",
    album: "MY",
    time: "2022-04-27",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=353868792#webchat_redirect"
  },
  {
    title: "《Reset》",
    type: "作曲一作 编曲一编",
    album: "I love",
    time: "2022-10-17",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=379357711&songtype=0#webchat_redirect"
  },
  {
    title: "《DARK(X‑file)》",
    type: "作曲一作",
    album: "I love",
    time: "2022-10-17",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=379357712&songtype=0#webchat_redirect"
  },
  {
    title: "《All Night》",
    type: "作词二作 作曲一作",
    album: "I feel",
    time: "2023-05-15",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=411988732&songtype=0#webchat_redirect"
  },
  {
    title: "《어린 어른 (Peter Pan)》",
    type: "作词一作 作曲一作",
    album: "I feel",
    time: "2023-05-15",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=411988742&songtype=0#webchat_redirect"
  },
  {
    title: "《Doll》",
    type: "作词一作 作曲一作",
    album: "2",
    time: "2024-01-29",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=462381439&songtype=0#webchat_redirect"
  },
  {
    title: "《Rollie》",
    type: "作词一作 作曲一作",
    album: "2",
    time: "2024-01-29",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=462381435&songtype=0#webchat_redirect"
  },
  {
    title: "《FREAK》",
    type: "作词四作 作曲四作",
    album: "YUQ1",
    time: "2024-04-23",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=481090162&songtype=0#webchat_redirect"
  },
  {
    title: "《My Way》",
    type: "作词一作 作曲一作",
    album: "YUQ1",
    time: "2024-04-23",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=481090165&songtype=0#webchat_redirect"
  },
  {
    title: "《Drink It Up(Feat.pH-1)》",
    type: "作词一作 作曲一作",
    album: "YUQ1",
    time: "2024-04-23",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=481090169&songtype=0#webchat_redirect"
  },
  {
    title: "《On Clap (Feat. Lexie Liu)》",
    type: "作词四作",
    album: "YUQ1",
    time: "2024-04-23",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=481090164&songtype=0#webchat_redirect"
  },
  {
    title: "《Everytime (With MINNIE ((G)I-DLE))》",
    type: "作词一作 作曲一作",
    album: "YUQ1",
    time: "2024-04-23",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=481090166&songtype=0#webchat_redirect"
  },
  {
    title: "《Last Forever》",
    type: "作词一作 作曲一作",
    album: "I SWAY",
    time: "2024-07-08",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=494966355&songtype=0#webchat_redirect"
  },
  {
    title: "《Neverland》",
    type: "作词二作 作曲一作",
    album: "I SWAY",
    time: "2024-07-08",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=494966353&songtype=0#webchat_redirect"
  },
  {
    title: "《Radio(Dum-Dum)》",
    type: "作词一作 作曲一作",
    album: "Radio(Dum-Dum)",
    time: "2025-03-17",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=566863870&songtype=0#webchat_redirect"
  },
  {
    title: "《FENDI》",
    type: "作词一作 作曲一作",
    album: "FENDI",
    time: "2025-04-10",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=573175907&songtype=0#webchat_redirect"
  },
  {
    title: "《Love Tease》",
    type: "作词一作 作曲一作",
    album: "We are",
    time: "2025-05-19",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=577939407&songtype=0#webchat_redirect"
  },
  {
    title: "《자유롭게 날아 (Feat. 우기 (YUQI)) (Fly to the youth)》",
    type: "作词一作 作曲一作",
    album: "자유롭게 날아 (Feat. 우기 (YUQI))",
    time: "2025-06-17",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=584396879&songtype=0#webchat_redirect"
  },
  {
    title: "《自由飞翔吧（Feat.宋雨琦）》",
    type: "作词一作 作曲一作",
    album: "自由飞翔吧（Feat.宋雨琦）",
    time: "2025-06-23",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=585380370&songtype=0#webchat_redirect"
  },
  
  {
    title: "《M.O.》",
    type: "作词一作 作曲一作",
    album: "Motivation",
    time: "2025-09-16",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=602772918&songtype=0#webchat_redirect"
  },
  {
    title: "《아프다(Gone)》",
    type: "作词一作 作曲一作",
    album: "Motivation",
    time: "2025-09-16",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=602772920&songtype=0#webchat_redirect"
  },
  {
    title: "《还痛吗》",
    type: "作词一作 作曲一作",
    album: "Motivation",
    time: "2025-09-16",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=602772917&songtype=0#webchat_redirect"
  },
  {
    title: "《Love Is Pain》",
    type: "作词一作 作曲一作",
    album: "We made",
    time: "2025-07-06",
    music_url: "https://i.y.qq.com/v8/playsong.html?songid=693761178&songtype=0#webchat_redirect"
  }
]
</script>

<style scoped>
.song-page {
  background:
    radial-gradient(circle at 10% 10%, rgba(255, 136, 170, 0.45), transparent 28%),
    radial-gradient(circle at 90% 20%, rgba(153, 46, 107, 0.35), transparent 35%),
    linear-gradient(135deg, #fff0f6 0%, #f7f7f7 100%);
  min-height: 100vh;
}

.wrap {
  max-width: 1600px;
  margin: 0 auto;
  padding: 40px 32px;
}

.page-title {
  text-align: center;
  font-size: 32px;
  color: #88245c;
  margin: 0 0 36px;
}

.table-wrap {
  background: #ffffff;
  padding: 24px 50px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(153, 46, 107, 0.08);
}

.song-table {
  width: 100%;
  border-collapse: collapse;
  /* 固定列宽模式，关键！不再自动挤压 */
  table-layout: fixed;
}

/* 手动分配每一列宽度 */
.song-table th:nth-child(1) { width: 34%; } /*歌曲名称 最大宽度*/
.song-table th:nth-child(2) { width: 18%; } /*创作身份*/
.song-table th:nth-child(3) { width: 24%; } /*收录专辑*/
.song-table th:nth-child(4) { width: 14%; } /*发行时间*/
.song-table th:nth-child(5) { width: 10%; } /*播放试听*/

.song-table thead tr {
  background-color: #f274b0;
}

.song-table th {
  padding: 22px 12px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
}

.song-table td {
  padding: 24px 12px;
  text-align: center;
  border-bottom: 1px solid #f8d8e8;
  font-size: 15px;
  color: #444;
  /*长文字自动换行，不会挤爆单元格*/
  word-wrap: break-word;
}

/*鼠标悬浮行高亮，提升阅读体验*/
.song-table tbody tr:hover {
  background-color: #fef2f8;
}

.play-link {
  color: #c23b82;
  font-weight: 600;
  text-decoration: none;
}
.play-link:hover {
  color: #f274b0;
  text-decoration: underline;
}

/*移动端适配*/
@media (max-width:992px){
  .wrap {
    padding: 20px 12px;
  }
  .table-wrap {
    padding:16px;
    overflow-x: auto;
  }
  .song-table {
    min-width:900px;
    table-layout:auto;
  }
}
</style>
