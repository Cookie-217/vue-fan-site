<template>
  <div class="rm-page">
    <div class="inner-wrap">
      <h2 class="page-title">宋雨琦参与奔跑吧全季分集记录</h2>
      <div class="rm-table-wrap">
        <table class="rm-table">
          <thead>
            <tr>
              <th>季数</th>
              <th>集数</th>
              <th>播出日期</th>
              <th>主题</th>
              <th>胜负</th>
              <th>备注</th>
              <th>链接</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in rmList" :key="shturl">
              <td>{{item.season}}</td>
              <td>{{item.ep}}</td>
              <td>{{item.date}}</td>
              <td>{{item.title}}</td>
              <td>{{item.win}}</td>
              <td>{{item.note}}</td>
              <td>
                <a v-if="item.link" :href="item.link" target="_blank">爱奇艺</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script setup>
const rmList = [
  //奔跑吧第三季（跑男7）
  {id:1,season:"奔跑吧第三季（跑男7）",ep:"EP01",date:"2019.04.26",title:"城市垃圾",win:"/",note:"初次录制",link:"https://www.iqiyi.com/v_19rsg4hwoc.html?lt=2"},
  {id:2,season:"奔跑吧第三季（跑男7）",ep:"EP02",date:"2019.05.03",title:"父与子的对决",win:"√",note:"139club诞生",link:"https://www.iqiyi.com/v_19rsgixd24.html?lt=2"},
  {id:3,season:"奔跑吧第三季（跑男7）",ep:"EP03",date:"2019.05.10",title:"夜之精灵",win:"/",note:"",link:"https://www.iqiyi.com/v_19rsh3xbc4.html?lt=2"},
  {id:4,season:"奔跑吧第三季（跑男7）",ep:"EP04",date:"2019.05.17",title:"中国功夫",win:"/",note:"春饼琦",link:"https://www.iqiyi.com/v_19rsm4x5f4.html?lt=2"},
  {id:5,season:"奔跑吧第三季（跑男7）",ep:"EP05",date:"2019.05.24",title:"南国谜案",win:"√",note:"",link:"https://www.iqiyi.com/v_19rso5ihks.html?lt=2"},
  {id:6,season:"奔跑吧第三季（跑男7）",ep:"EP06",date:"2019.05.31",title:"快乐运动会",win:"√",note:"艺术体操造型",link:"https://www.iqiyi.com/v_19rsl6bwj0.html?lt=2"},
  {id:7,season:"奔跑吧第三季（跑男7）",ep:"EP07",date:"2019.06.07",title:"职场特辑",win:"/",note:"",link:"https://www.iqiyi.com/v_19rs9k35h0.html?lt=2"},
  {id:8,season:"奔跑吧第三季（跑男7）",ep:"EP08",date:"2019.06.14",title:"首播特辑",win:"打平",note:"",link:"https://www.iqiyi.com/v_19rs6qbzjk.html?lt=2"},
  {id:9,season:"奔跑吧第三季（跑男7）",ep:"EP09",date:"2019.06.21",title:"石油保卫战",win:"√",note:"",link:"https://www.iqiyi.com/v_19rs8k9p8k.html?lt=2"},
  {id:10,season:"奔跑吧第三季（跑男7）",ep:"EP10",date:"2019.06.28",title:"600人的声音对决",win:"/",note:"芭拉芭拉樱之花舞台",link:"https://www.iqiyi.com/v_19rsee9gew.html?lt=2"},
  {id:11,season:"奔跑吧第三季（跑男7）",ep:"EP11",date:"2019.07.05",title:"猫鼠大战",win:"√",note:"",link:"https://www.iqiyi.com/v_19rscidf1c.html?lt=2"},
  {id:12,season:"奔跑吧第三季（跑男7）",ep:"EP12",date:"2019.07.12",title:"澳门老友记",win:"/",note:"",link:"https://www.iqiyi.com/v_19rs1ughgk.html?lt=2"},
  //奔跑吧第五季（跑男9）
  {id:13,season:"奔跑吧第五季（跑男9）",ep:"EP05",date:"2021.05.21",title:"动物城堡",win:"/",note:"梅花鹿琦",link:"https://www.iqiyi.com/v_1346m74rarw.html?lt=2"},
  {id:14,season:"奔跑吧第五季（跑男9）",ep:"EP06",date:"2021.05.28",title:"泉城热恋",win:"√",note:"",link:"https://www.iqiyi.com/v_191ws7rlm7w.html?lt=2"},
  {id:15,season:"奔跑吧第五季（跑男9）",ep:"EP07",date:"2021.06.04",title:"谁是超越之星",win:"√",note:"Bonnie&Clyde首秀",link:"https://www.iqiyi.com/v_f9it62mxb4.html?lt=2"},
  {id:16,season:"奔跑吧第五季（跑男9）",ep:"EP08",date:"2021.06.11",title:"美丽乡村淘金之旅",win:"/",note:"",link:"https://www.iqiyi.com/v_pk2gln30gg.html?lt=2"},
  //{id:17,season:"奔跑吧第五季（跑男9）",ep:"EP10",date:"2021.06.25",title:"粮食保卫战",win:"√",note:"",link:"https://www.iqiyi.com/v_19vub7xpbjc.html?qyTrace=FqfloB8Jkgw9t2aj&e2=c526242b80be4758d4e38008ef61d521"},
  {id:18,season:"奔跑吧第五季（跑男9）",ep:"EP11",date:"2021.07.02",title:"夏日消暑特辑",win:"/",note:"",link:"https://www.iqiyi.com/v_25m2sj91ajk.html?lt=2"},
  {id:19,season:"奔跑吧第五季（跑男9）",ep:"EP12",date:"2021.07.09",title:"黎明行动",win:"√",note:"民国琦",link:"https://www.iqiyi.com/v_jbrv5t7rzw.html?lt=2"},
  {id:20,season:"奔跑吧第五季（跑男9）",ep:"EP13",date:"2021.07.16",title:"对战制作组",win:"√",note:"",link:"https://www.iqiyi.com/v_cnn2myz5q8.html?lt=2"},

  //奔跑吧黄河篇第二季
  {id:21,season:"奔跑吧黄河篇第二季",ep:"EP01",date:"2021.10.22",title:"种子争夺战",win:"/",note:"",link:"https://www.iqiyi.com/v_25kpmv18hug.html?lt=2"},
  {id:22,season:"奔跑吧黄河篇第二季",ep:"EP02",date:"2021.10.29",title:"环球职业技能大赛",win:"√",note:"",link:"https://www.iqiyi.com/v_1whfydjq9kk.html?lt=2"},
  {id:23,season:"奔跑吧黄河篇第二季",ep:"EP05",date:"2021.11.26",title:"黄河学院",win:"/",note:"",link:"https://www.iqiyi.com/v_177xu14in9k.html?lt=2"},

  //奔跑吧第七季（跑男11）
  {id:24,season:"奔跑吧第七季（跑男11）",ep:"EP01",date:"2023.04.21",title:"城市追击战",win:"/",note:"",link:"https://www.iqiyi.com/v_1nrosx30588.html?lt=2"},
  {id:25,season:"奔跑吧第七季（跑男11）",ep:"EP02",date:"2023.04.28",title:"底牌",win:"√",note:"推理高光",link:"https://www.iqiyi.com/v_1jga4fxzwsw.html?lt=2"},
  {id:26,season:"奔跑吧第七季（跑男11）",ep:"EP03",date:"2023.05.05",title:"镜中怪谈",win:"/",note:"宫廷琦、撕名牌",link:"https://www.iqiyi.com/v_2gddx4v059s.html?lt=2"},
  {id:27,season:"奔跑吧第七季（跑男11）",ep:"EP11",date:"2023.07.14",title:"家族荣耀‑泰国",win:"/",note:"泳池跳舞、帅气接头",link:"https://www.iqiyi.com/v_1wi0fivv1b0.html?lt=2"},

  //奔跑吧生态篇
  {id:28,season:"奔跑吧生态篇",ep:"EP04",date:"2023.12.09",title:"山水协会的邀约",win:"/",note:"下半部分开始",link:"https://www.iqiyi.com/v_yqr71eqqkg.html?lt=2"},
  {id:29,season:"奔跑吧生态篇",ep:"EP05",date:"2023.12.16",title:"山水刮刮乐",win:"√",note:"顶梁柱、爆笑词汇",link:"https://www.iqiyi.com/v_1dw3zrvpsd0.html?lt=2"},
  {id:30,season:"奔跑吧生态篇",ep:"EP06",date:"2023.12.23",title:"消失的树苗",win:"/",note:"游戏王",link:"https://www.iqiyi.com/v_1zigbnh7gqc.html?lt=2"},
  {id:31,season:"奔跑吧生态篇",ep:"EP07",date:"2023.12.30",title:"揪出“懒虫”行动",win:"/",note:"复盘",link:"https://www.iqiyi.com/v_1hskswj0yok.html?lt=2"},

  //奔跑吧第八季（跑男12）
  {id:32,season:"奔跑吧第八季（跑男12）",ep:"EP01",date:"2024.04.26",title:"南宁合伙人",win:"√",note:"",link:"https://www.iqiyi.com/v_xhlcjjnllg.html?lt=2"},
  {id:33,season:"奔跑吧第八季（跑男12）",ep:"EP02",date:"2024.05.03",title:"木偶尘封录",win:"√",note:"绝美戏服琦",link:"https://www.iqiyi.com/v_1aytcrwzqfg.html?lt=2"},
  {id:34,season:"奔跑吧第八季（跑男12）",ep:"EP03",date:"2024.05.10",title:"山城速递",win:"/",note:"",link:"https://www.iqiyi.com/v_y7q7suxjew.html?lt=2"},
  {id:35,season:"奔跑吧第八季（跑男12）",ep:"EP04",date:"2024.05.17",title:"巴适的罐",win:"/",note:"可爱双马尾",link:"https://www.iqiyi.com/v_1x5d8d7jlgw.html?lt=2"},
  {id:36,season:"奔跑吧第八季（跑男12）",ep:"EP05",date:"2024.05.24",title:"双生花",win:"/",note:"",link:"https://www.iqiyi.com/v_1j3tgvd7wb4.html?lt=2"},
  {id:37,season:"奔跑吧第八季（跑男12）",ep:"EP06",date:"2024.05.31",title:"真金旅行团",win:"√",note:"顽强的假发",link:"https://www.iqiyi.com/v_g9bvr1vxq4.html?lt=2"},
  {id:38,season:"奔跑吧第八季（跑男12）",ep:"EP07",date:"2024.06.07",title:"谁动了我的艺术品",win:"√",note:"快准狠",link:"https://www.iqiyi.com/v_176tdcqywyo.html?lt=2"},
  {id:39,season:"奔跑吧第八季（跑男12）",ep:"EP08",date:"2024.06.14",title:"Ai的初体验",win:"/",note:"On Clap首秀",link:"https://www.iqiyi.com/v_2aeybv4yqz0.html?lt=2"},
  {id:40,season:"奔跑吧第八季（跑男12）",ep:"EP09",date:"2024.06.21",title:"最强社团争霸赛",win:"/",note:"",link:"https://www.iqiyi.com/v_1l6hxrteciw.html?lt=2"},
  {id:41,season:"奔跑吧第八季（跑男12）",ep:"EP10",date:"2024.06.28",title:"奔跑吧集卡计划",win:"/",note:"旋风少女",link:"https://www.iqiyi.com/v_1oppbrmszic.html?lt=2"},
  {id:42,season:"奔跑吧第八季（跑男12）",ep:"EP11",date:"2024.07.05",title:"布达佩斯之约",win:"√",note:"",link:"https://www.iqiyi.com/v_szplh1wqt4.html?lt=2"},
  {id:43,season:"奔跑吧第八季（跑男12）",ep:"EP12",date:"2024.07.12",title:"最强联盟竞赛",win:"√",note:"",link:"https://www.iqiyi.com/v_dz1wtv4c78.html?lt=2"},

  //奔跑吧茶马古道篇
  {id:44,season:"奔跑吧茶马古道篇",ep:"EP06",date:"2024.12.28",title:"赴约",win:"/",note:"旅行季",link:"https://www.iqiyi.com/v_1gqd9brr7xo.html?lt=2"},
  {id:45,season:"奔跑吧茶马古道篇",ep:"EP07",date:"2025.01.04",title:"星光不问赶路人‑上",win:"/",note:"藏族琦",link:"https://www.iqiyi.com/v_1la1682hxhk.html?lt=2"},
  {id:46,season:"奔跑吧茶马古道篇",ep:"EP08",date:"2025.01.11",title:"星光不问赶路人‑下",win:"/",note:"",link:"https://www.iqiyi.com/v_uds4z6i57k.html?lt=2"},

  //奔跑吧第九季（跑男13）
  {id:47,season:"奔跑吧第九季（跑男13）",ep:"EP01",date:"2025.04.25",title:"大象时光机‑上",win:"/",note:"",link:"https://www.iqiyi.com/v_28jxpkzm31c.html?lt=2"},
  {id:48,season:"奔跑吧第九季（跑男13）",ep:"EP01",date:"2025.05.02",title:"大象时光机‑下",win:"√",note:"游戏王",link:"https://www.iqiyi.com/v_1d5rwqnrp1k.html?lt=2"},
  {id:49,season:"奔跑吧第九季（跑男13）",ep:"EP02",date:"2025.05.09",title:"“牛马”变形记",win:"√",note:"邪恶双马尾",link:"https://www.iqiyi.com/v_jjtb1802fw.html?lt=2"},
  {id:50,season:"奔跑吧第九季（跑男13）",ep:"EP03",date:"2025.05.16",title:"跑起来·就能赢",win:"√",note:"马拉松",link:"https://www.iqiyi.com/v_1fv3yl9i980.html?lt=2"},
  {id:51,season:"奔跑吧第九季（跑男13）",ep:"EP04",date:"2025.05.23",title:"时间合伙人",win:"√",note:"星际女战士琦",link:"https://www.iqiyi.com/v_263xozo7la0.html?lt=2"},
  {id:52,season:"奔跑吧第九季（跑男13）",ep:"EP05",date:"2025.05.30",title:"荔枝的诱惑",win:"√",note:"异域琦",link:"https://www.iqiyi.com/v_27n8uk11ehw.html?lt=2"},
  {id:53,season:"奔跑吧第九季（跑男13）",ep:"EP06",date:"2025.06.06",title:"竖店风云",win:"/",note:"全程爆笑",link:"https://www.iqiyi.com/v_cmr55daqg0.html?lt=2"},
  {id:54,season:"奔跑吧第九季（跑男13）",ep:"EP07",date:"2025.06.13",title:"真正的宝藏",win:"/",note:"古风青鸾琦",link:"https://www.iqiyi.com/v_1g9kfcrhxp4.html?lt=2"},
  {id:55,season:"奔跑吧第九季（跑男13）",ep:"EP11",date:"2025.07.11",title:"冲鸭！冲鸭！",win:"√",note:"",link:"https://www.iqiyi.com/v_1hqt8hm68mg.html?lt=2"},
  {id:56,season:"奔跑吧第九季（跑男13）",ep:"EP12",date:"2025.07.18",title:"新PD上任三把火",win:"/",note:"人活着就是骨气",link:"https://www.iqiyi.com/v_wslmkxttnw.html?lt=2"},
]
</script>

<style scoped>
.rm-page {
  background:
    radial-gradient(circle at 10% 10%, rgba(255, 136, 170, 0.45), transparent 28%),
    radial-gradient(circle at 90% 20%, rgba(153, 46, 107, 0.35), transparent 35%),
    linear-gradient(135deg, #fff0f6 0%, #f7f7f7 100%);
  min-height: calc(100vh - 120px);
  padding:48px 0;
  width: 100%;
}

.inner-wrap{
  max-width:1300px;
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

.rm-table-wrap{
  overflow-x: auto;
}

.rm-table{
  width:100%;
  border-collapse: collapse;
  background:#fff;
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 2px 10px rgba(136,36,92,0.08);
}

.rm-table th{
  background:#88245c;
  color:#fff;
  padding:12px 8px;
  text-align:center;
  font-size:15px;
}
.rm-table td{
  padding:10px 8px;
  text-align:center;
  border-bottom:1px solid #f3dde8;
  font-size:14px;
  color:#444;
}
.rm-table tr:hover{
  background:#fff0f6;
}
.rm-table a{
  color:#c84b8c;
}

@media (max-width:768px) {
  .inner-wrap{
    padding:0 12px;
  }
}
</style>
