<template>
  <!-- 新增外层背景容器 -->
  <div class="bg-wrap">
    <div class="business-page">
      <h2 class="page-title">商务代言</h2>

      <div v-if="loading" class="loading-tip">数据加载中...</div>

      <ul v-else>
        <li v-for="item in endorseList" :key="shturl">
          <div class="endorse-header">
            <span class="brand-text">{{ item.brandName }}</span>
            <span class="title-tag">{{ item.title }}</span>
          </div>
          <div class="endorse-body">
            <p><span class="label">品类</span>{{ item.category }}</p>
            <p><span class="label">官宣时间</span>{{ item.announceDate }}</p>
          </div>
          <div v-if="item.link" class="link-wrap">
            <a :href="item.link" target="_blank" class="brand-link">查看品牌链接</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)

const endorseList = ref([
  {
    id: 1,
    brandName: "SERYBOX",
    title: "代言人(韩国)",
    category: "保健食品",
    announceDate: "2023.10.11",
    link: "https://www.serybox.com/"
  },
  {
    id: 2,
    brandName: "FENDI",
    title: "品牌形象大使",
    category: "高奢成衣，包袋",
    announceDate: "2024.01.07",
    link: "https://www.fendi.com/"
  },
  {
    id: 3,
    brandName: "元梦之星",
    title: "星动代言人",
    category: "游戏",
    announceDate: "2024.01.26",
    link: "https://ymzx.qq.com/"
  },
  {
    id: 4,
    brandName: "科颜氏",
    title: "品牌代言人",
    category: "护肤",
    announceDate: "2024.04.15",
    link: "https://www.kiehls.com.cn/"
  },
  {
    id: 5,
    brandName: "OPPO Reno",
    title: "Reno Girl",
    category: "手机",
    announceDate: "2024.11.18",
    link: "https://www.oppo.com/cn/"
  },
  {
    id: 6,
    brandName: "阿迪达斯",
    title: "品牌代言人",
    category: "运动服饰",
    announceDate: "2025.02.28",
    link: "https://www.adidas.com.cn/"
  },
  {
    id: 7,
    brandName: "Bose",
    title: "亚太区品牌大使",
    category: "耳机",
    announceDate: "2025.04.19",
    link: "https://www.bose.cn/"
  },
  {
    id: 8,
    brandName: "tbh野兽派家居",
    title: "品牌代言人",
    category: "家居",
    announceDate: "2025.04.22",
    link: "https://www.thebeastshop.com/"
  },
  {
    id: 9,
    brandName: "Jellycat",
    title: "琦趣大使",
    category: "玩偶",
    announceDate: "2025.05.29",
    link: "https://www.jellycat.com/"
  },
  {
    id: 10,
    brandName: "穿越火线",
    title: "IP代言人",
    category: "游戏",
    announceDate: "2025.07.25",
    link: "https://cf.qq.com/"
  },
  {
    id: 11,
    brandName: "UGG",
    title: "亚太区代言人",
    category: "雪地靴",
    announceDate: "2025.09.01",
    link: "https://www.ugg.com/"
  },
  {
    id: 12,
    brandName: "七度空间",
    title: "品牌代言人",
    category: "卫生巾",
    announceDate: "2025.12.04",
    link: "https://www.hengan.com/column/81/"
  },
  {
    id: 13,
    brandName: "脉动",
    title: "亚太区品牌代言人",
    category: "维生素饮料",
    announceDate: "2025.03.28",
    link: "https://www.danone.com/"
  },
  {
    id: 14,
    brandName: "TORY BURCH",
    title: "品牌代言人",
    category: "包袋，鞋履",
    announceDate: "2024.11.04",
    link: "https://www.toryburch.cn/"
  },
  {
    id: 15,
    brandName: "Fenty Beauty By Rihanna",
    title: "品牌代言人",
    category: "美妆",
    announceDate: "2026.01.05",
    link: "https://www.fentybeauty.com/"
  },
  {
    id: 16,
    brandName: "小牛电动",
    title: "全球品牌代言人",
    category: "智能出行工具",
    announceDate: "2026.01.28",
    link: "https://www.niu.com/"
  },
  {
    id: 17,
    brandName: "Tiffany蒂芙尼",
    title: "品牌大使",
    category: "珠宝",
    announceDate: "2026.01.29",
    link: "https://www.tiffany.cn/"
  },
  {
    id: 18,
    brandName: "陌森眼镜",
    title: "品牌代言人",
    category: "眼镜",
    announceDate: "2026.03.04",
    link: "https://www.molsion.com.cn/"
  },
  {
    id: 19,
    brandName: "乐事",
    title: "品牌代言人",
    category: "薯片",
    announceDate: "2026.03.09",
    link: "https://www.lays.com.cn/"
  },
  {
    id: 20,
    brandName: "MO&Co",
    title: "亚太区活力代言人",
    category: "服饰",
    announceDate: "2026.08.19",
    link: "https://en.moco.com/zh"
  },
  {
    id: 21,
    brandName: "巴黎欧莱雅美发",
    title: "代言人",
    category: "洗护",
    announceDate: "2026.04.10",
    link: "https://www.loreal.com/en/"
  },
  {
    id: 22,
    brandName: "安慕希",
    title: "品牌代言人",
    category: "酸奶",
    announceDate: "2026.03.27",
    link: "https://www.yili.com/product/1122"
  },
  {
    id: 23,
    brandName: "JimBeam金宾",
    title: "大中华区品牌代言人",
    category: "酒",
    announceDate: "2026.06.10",
    link: "https://www.suntory.com.tw/"
  }
])
</script>

<style scoped>
/* 外层背景容器，使用图片背景，卡片透明，背景完整透出 */
.bg-wrap {
  background: url('@/assets/bg2.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}

.business-page {
  padding: 32px 0;
  max-width: 100%;
  margin: 0;
}

.page-title {
  text-align: center;
  font-size: 32px;
  color: #f6a6e3;
  margin-bottom: 40px;
  font-weight: 700;
  letter-spacing: 4px;
  /* 文字阴影，深色背景下看得清 */
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.75);
}

.loading-tip {
  text-align: center;
  color: #ffffff;
  padding: 60px 0;
  font-size: 18px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
}

ul {
  list-style: none;
  padding: 0 12px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

li {
  width: 100%;
  max-width: 100%;
  border-radius: 18px;
  /* 卡片完全透明，背景图透出来 */
  background: transparent;
  box-shadow: none;
  padding: 30px 24px;
  text-align: center;
  box-sizing: border-box;
  transition: 0.3s ease;
  border: none;
}

li:hover {
  transform: translateY(-4px);
  /* hover时给一层淡淡的半透粉色，不遮挡背景图 */
  background: rgba(255, 255, 255, 0.12);
}

.endorse-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  text-align: center;
}

.brand-text {
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

.title-tag {
  background-color: rgba(252, 231, 243, 0.92);
  color: #ef418fc4;
  padding: 5px 14px;
  border-radius: 30px;
  font-size: 14px;
}

.endorse-body {
  text-align: center;
}

.endorse-body p {
  margin: 12px 0;
  font-size: 17px;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
}

.label {
  display: inline-block;
  min-width: 80px;
  color: #f8f8f8;
}

.link-wrap {
  margin-top: 22px;
  text-align: center;
}

.brand-link {
  display: inline-block;
  padding: 9px 24px;
  background-color: rgba(245, 160, 202, 0.9);
  color: #fff !important;
  text-decoration: none;
  border-radius: 30px;
  font-size: 15px;
  transition: all 0.25s ease;
}

.brand-link:hover {
  background-color: #db2777;
  transform: scale(1.05);
}
</style>
