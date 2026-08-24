<template>
  <div class="layout-container">
    <header class="top-nav">
      <!-- 最左侧 返回welcome开场页，路由是 / -->
      <div class="back-welcome-wrap">
        <router-link to="/" class="back-welcome-btn">返回开场页</router-link>
      </div>

      <!-- 第一层主导航 -->
      <nav class="nav-main">
        <router-link to="/main/home">首页</router-link>
        <router-link to="/main/intro">个人简介</router-link>
        <router-link to="/main/song">自作曲</router-link>
        <router-link to="/main/cover">Cover舞台</router-link>
        <router-link to="/main/stage">个人舞台</router-link>
        <router-link to="/main/runningman">奔跑吧</router-link>
        <router-link to="/main/business">商务代言</router-link>
        <router-link to="/main/photo">相册</router-link>
        <router-link to="/main/message">留言板</router-link>
      </nav>

      <!-- 第二层社交链接栏 -->
      <div class="nav-social">
        <a href="https://weibo.com/6634214154" target="_blank">🔗宋雨琦微博</a>
        <a href="https://www.douyin.com/user/MS4wLjABAAAAA4CpQGY2Teq7z4Amzk8beImvI-XGpSdnKcc4ScPW_JP9NXCnU18EIozAtgBLPItK?from_tab_name=main">🔗宋雨琦抖音</a>
      </div>
    </header>

    <main class="page-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.layout-container {
  width: 100vw;
  background-color: #fef2f6;
}

.top-nav {
  width: 100%;
  position: relative;
}

/* 左上角返回开场页按钮 */
.back-welcome-wrap {
  position: absolute;
  left: 16px;
  top: 6px;
  z-index: 10;
}
.back-welcome-btn {
  background: #f8c8dc;
  color: #883e7b;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 14px;
}
.back-welcome-btn:hover {
  background: #f4a8c8;
}

.top-nav .nav-main {
  display: flex;
  justify-content: center;
  gap: 32px;
  background: #f0b8cc;
  padding: 6px 0 !important;
}
.nav-main a {
  color: #702e5f;
  text-decoration: none;
  font-size: 16px;
}
.nav-main a:hover {
  color: #ffffff;
}

.top-nav .nav-social {
  display: flex;
  justify-content: center;
  gap: 45px;
  background: #f6c9da;
  padding: 2px 0 !important;
}
.nav-social a {
  color: #80406e;
  text-decoration: none;
  font-size: 15px;
}
.nav-social a:hover {
  color: #ffffff;
}

.page-content {
  position: relative;
  margin: 0;
  padding: 0;
  min-height: calc(100vh - 86px);
}
</style>
