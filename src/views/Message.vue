<template>
  <div class="bg-pink"></div>

  <div class="content-wrap">
    <div class="outer-wrap">
      <!-- 右上角按钮组 -->
      <div v-if="isLogin" class="top-btn-group">
        <!--管理员：全部留言；普通用户：我的留言-->
        <button v-if="isAdmin" class="btn-my" @click="openAllMessage">全部留言</button>
        <button v-else class="btn-my" @click="goMyMsg">我的留言</button>

        <button class="btn-logout" @click="handleLogout">退出登录</button>
      </div>

      <h2 class="page-title">粉丝留言板 ✨</h2>

      <div ref="bubbleWrapRef" class="bubble-container">
        <div v-if="loading" class="loading">加载中...</div>
        <div v-else-if="msgList.length === 0" class="loading">暂无留言，快来发第一条吧~</div>
        <div
          :ref="el=>{if(el) bubbleListRef[index]=el}"
          class="bubble-item"
          v-for="(item, index) in msgList"
          :key="item.id"
          :style="{
            left: item.x + 'px',
            top: item.y + 'px',
          }"
        >
          <div class="bubble-row">
            <span class="bubble-nick">{{ item.nickName }}：</span>
            <span class="bubble-text">{{ item.content }}</span>
          </div>
          <div class="bubble-time">{{ item.createTime }}</div>
        </div>
      </div>

      <div class="publish-footer">
        <input v-model="inputContent" placeholder="想说点什么~" class="msg-input" />
        <input v-model="inputNick" placeholder="昵称" class="nick-input" />
        <button class="send-btn" @click="handleSend">发送</button>
      </div>
    </div>
  </div>

  <!-- 未登录提示弹窗 -->
  <div v-if="showLoginTip" class="login-tip-mask" @click.self="showLoginTip = false">
    <div class="login-tip-box">
      <p>发布留言需要先登录</p>
      <div class="tip-buttons">
        <button class="tip-cancel" @click="showLoginTip = false">取消</button>
        <button class="tip-go-login" @click="goLogin">去登录</button>
      </div>
    </div>
  </div>

  <!--弹窗：全部留言(管理员)/我的留言(普通用户)-->
  <div v-if="showRecycle" class="modal-mask" @click.self="showRecycle = false">
    <div class="modal-box">
      <h3>{{ recycleModalTitle }}</h3>
      <div v-if="recycleList.length === 0">暂无记录</div>
      <!-- 管理员：展示数据库全部留言，包含软删除标记 -->
      <div v-for="item in recycleList" :key="item.id" class="recycle-item">
        <div>
          {{ item.nickName }}：{{ item.content }}
          <span v-if="isAdmin && item.isDeleted ===1" style="color:red;margin-left:8px;">【已软删除】</span>
        </div>
        <span style="font-size:12px;color:#999">{{ item.createTime }}</span>
        <div style="display:flex;gap:8px;margin-top:4px">
          <!--管理员：只有软删除的留言才显示恢复按钮-->
          <button
            v-if="isAdmin && item.isDeleted === 1"
            @click="handleRestore(item.id)"
          >
            恢复
          </button>
          <!--管理员：任意留言都可以删除-->
          <button
            v-if="isAdmin"
            @click="handleAdminDelete(item.id)"
          >
            删除
          </button>
          <!--普通用户：只显示自己的留言删除按钮，修复类型转换，增加userInfo存在判断-->
          <button
            v-if="!isAdmin && userInfo && Number(item.userId) === Number(userInfo.id)"
            @click="handleUserDelete(item.id)"
          >
            删除
          </button>
        </div>
      </div>
      <button class="close-btn" @click="showRecycle = false">关闭</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { getMessageListApi, addMessageApi, deleteMessageApi, getDeletedMessageApi, restoreMessageApi, delMyMsg, getMyMessageApi, getAllMessageApi } from '@/api/message'

const router = useRouter()
const loading = ref(false)
const msgList = ref([])
const recycleList = ref([])
const inputContent = ref('')
const inputNick = ref('')
const showRecycle = ref(false)
const showLoginTip = ref(false)
const recycleModalTitle = ref('')

const bubbleWrapRef = ref(null)
const bubbleListRef = ref([])
let rafId = null

let containerW = 0
let containerH = 0
let lastTime = 0

const token = ref('')
const userInfo = ref(null)
const isLogin = ref(false)
const isAdmin = ref(false)

const baseSpeed = 0.32

//普通用户删除（提示无法恢复）
const handleUserDelete = async (msgId) => {
  if (!confirm("删除后无法恢复，确定删除吗？")) return
  try {
    await delMyMsg(msgId)
    await loadMyMsg()
    await loadMessage()
    alert("删除成功")
  } catch (e) {
    console.error(e)
    alert("删除失败")
  }
}

//管理员弹窗内删除
const handleAdminDelete = async (msgId) => {
  if (!confirm("确定删除这条留言？")) return
  try {
    await deleteMessageApi(msgId)
    await loadAllMsg()
    await loadMessage()
    alert("删除成功")
  } catch (e) {
    console.error(e)
    alert("删除失败")
  }
}

function getBubbleMeta(existList = []) {
  let startX, startY
  let overlap
  let tryTimes = 0
  do {
    startX = Math.floor(Math.random() * Math.max(10, containerW - 180))
    startY = Math.floor(Math.random() * Math.max(10, containerH - 100))
    overlap = existList.some(p => {
      const gap = 130
      return !(
        startX + 180 + gap < p.x ||
        p.x + 180 + gap < startX ||
        startY + 100 + gap < p.y ||
        p.y + 100 + gap < startY
      )
    })
    tryTimes++
  } while (overlap && tryTimes < 130)

  const angle = Math.random() * Math.PI * 2
  const vx = Math.cos(angle) * baseSpeed
  const vy = Math.sin(angle) * baseSpeed

  return {
    x: startX,
    y: startY,
    vx,
    vy,
    coolDown: 0
  }
}

function normalizeSpeed(item){
  const len = Math.hypot(item.vx, item.vy)
  if(len === 0) return
  item.vx = (item.vx / len) * baseSpeed
  item.vy = (item.vy / len) * baseSpeed
}

function getBubbleSize(index) {
  const dom = bubbleListRef.value[index]
  if (!dom) return { width: 140, height: 90 }
  return {
    width: dom.offsetWidth || 140,
    height: dom.offsetHeight || 90
  }
}

function animateLoop(currentTime = 0){
  const list = msgList.value
  if(!list.length || containerW === 0) {
    rafId = requestAnimationFrame(animateLoop)
    return
  }

  const delta = Math.min((currentTime - lastTime) / 1000, 0.03)
  lastTime = currentTime

  for(let i = 0; i < list.length; i++){
    const item = list[i]
    const size = getBubbleSize(i)

    if(item.coolDown > 0) item.coolDown--

    item.x += item.vx * delta * 60
    item.y += item.vy * delta * 60

    if(item.x <= 0) {
      item.x = 0
      item.vx = Math.abs(item.vx)
    }
    if(item.x + size.width >= containerW) {
      item.x = containerW - size.width
      item.vx = -Math.abs(item.vx)
    }
    if(item.y <= 0) {
      item.y = 0
      item.vy = Math.abs(item.vy)
    }
    if(item.y + size.height >= containerH) {
      item.y = containerH - size.height
      item.vy = -Math.abs(item.vy)
    }
  }

  for(let i = 0; i < list.length; i++){
    for(let j = i + 1; j < list.length; j++){
      const a = list[i]
      const b = list[j]
      if(a.coolDown > 0 || b.coolDown > 0) continue

      const sizeA = getBubbleSize(i)
      const sizeB = getBubbleSize(j)
      const safeMargin = 30

      const aRight = a.x + sizeA.width
      const aBot = a.y + sizeA.height
      const bRight = b.x + sizeB.width
      const bBot = b.y + sizeB.height

      const collide = !(
        aRight + safeMargin < b.x ||
        bRight + safeMargin < a.x ||
        aBot + safeMargin < b.y ||
        bBot + safeMargin < a.y
      )

      if(collide){
        const tvx = a.vx
        const tvy = a.vy
        a.vx = b.vx
        a.vy = b.vy
        b.vx = tvx
        b.vy = tvy

        normalizeSpeed(a)
        normalizeSpeed(b)

        a.coolDown = 45
        b.coolDown = 45

        a.x += a.vx * delta * 40
        a.y += a.vy * delta * 40
        b.x += b.vx * delta * 40
        b.y += b.vy * delta * 40
      }
    }
  }

  rafId = requestAnimationFrame(animateLoop)
}

function extractList(res) {
  if (Array.isArray(res)) return res
  if (res && Array.isArray(res.data)) return res.data
  if (res && res.data && Array.isArray(res.data.records)) return res.data.records
  if (res && Array.isArray(res.records)) return res.records
  if (res && Array.isArray(res.list)) return res.list
  return []
}

async function loadMessage() {
  if(!bubbleWrapRef.value) return
  const dom = bubbleWrapRef.value
  containerW = dom.clientWidth
  containerH = dom.clientHeight

  loading.value = true
  try {
    const res = await getMessageListApi()
    const list = extractList(res)
    bubbleListRef.value = []
    const posArr = []
    msgList.value = list.map(item => {
      const m = getBubbleMeta(posArr)
      posArr.push(m)
      return { ...item, ...m }
    })
    await nextTick()
    await nextTick()
    await nextTick()
    cancelAnimationFrame(rafId)
    lastTime = performance.now()
    rafId = requestAnimationFrame(animateLoop)
  } catch (err) {
    console.error('获取留言失败', err)
    msgList.value = []
  } finally {
    loading.value = false
  }
}

//【管理员加载全部留言，包含isDeleted=1软删除】
async function loadAllMsg(){
  try {
    const res = await getAllMessageApi()
    const list = extractList(res)
    console.log("全部留言列表：",list)
    recycleList.value = list
  } catch (err) {
    console.error('获取全部留言失败', err)
    recycleList.value = []
  }
}

async function loadMyMsg(){
  try{
    const res = await getMyMessageApi()
    const list = extractList(res)
    console.log("我的留言列表：",list)
    console.log("当前登录用户信息：",userInfo.value)
    recycleList.value = list
  }catch(err){
    console.error("获取我的留言失败",err)
    recycleList.value = []
  }
}

async function handleSend() {
  if (!isLogin.value) {
    showLoginTip.value = true
    return
  }
  if (!inputContent.value.trim()) {
    alert('请输入留言内容')
    return
  }

  const username = userInfo.value?.username ?? "匿名用户"
  const params = {
    nickName: inputNick.value || username,
    content: inputContent.value
  }

  try {
    await addMessageApi(params)
    inputContent.value = ''
    inputNick.value = ''
    await loadMessage()
  } catch(err) {
    console.error('提交留言接口报错：', err)
  }
}

function goLogin() {
  showLoginTip.value = false
  router.push('/login')
}

async function handleRestore(id) {
  try {
    await restoreMessageApi(id)
    await loadAllMsg()
    await loadMessage()
    alert("恢复成功")
  }catch(err){
    console.error(err)
    alert("恢复失败")
  }
}

//管理员打开全部留言弹窗
function openAllMessage() {
  recycleModalTitle.value = "全部留言"
  showRecycle.value = true
  loadAllMsg()
}
//普通用户打开我的留言弹窗
function goMyMsg(){
  recycleModalTitle.value = "我的留言"
  showRecycle.value = true
  loadMyMsg()
}

function handleLogout(){
  localStorage.removeItem('token')
  localStorage.removeItem('userInfo')
  localStorage.removeItem('userRole')
  token.value = null
  userInfo.value = null
  isLogin.value = false
  isAdmin.value = false
  router.push('/login')
}

onMounted(() => {
  const rawToken = localStorage.getItem('token')
  const rawUser = localStorage.getItem('userInfo')
  const rawRole = localStorage.getItem('userRole')

  token.value = rawToken
  isLogin.value = !!rawToken
  isAdmin.value = rawRole === 'admin'

  userInfo.value = null
  if(rawUser && rawUser !== 'undefined'){
    try{
      userInfo.value = JSON.parse(rawUser)
      console.log("页面加载读取本地用户信息：", userInfo.value)
    }catch(err){
      userInfo.value = null
    }
  }

  nextTick(() => {
    loadMessage()
  })
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})
</script>


<style scoped>
.bg-pink {
  position: absolute;
  inset: 0;
  background-color: #fcdce8;
  z-index: 1;
}

.content-wrap {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 20px !important;
  padding-bottom: 0;
}

.outer-wrap {
  background: #fff8e3;
  border: 3px solid #f8b8d0;
  border-radius: 16px;
  max-width: 1350px;
  width: 100%;
  position: relative;
  padding: 28px;
  box-sizing: border-box;
  margin: 0px 40px 40px 40px;
  min-height: 720px;
}

.top-btn-group{
  position: absolute;
  top:20px;
  right:28px;
  display:flex;
  gap:10px;
  z-index:100;
}
.btn-my,.btn-logout{
  border: 1px solid #ec739f;
  background: transparent;
  color: #ec739f;
  border-radius: 20px;
  padding: 6px 12px;
  cursor:pointer;
}
.btn-logout{
  border-color:#999;
  color:#666;
}

.page-title {
  text-align: center;
  color: #d66894;
  font-size: 34px;
  margin: 20px 0 24px;
}

.bubble-container {
  position: relative;
  height: 520px;
  overflow: hidden;
  margin-bottom: 100px;
}

.bubble-item {
  position: absolute;
  background: #ffffff;
  padding: 12px 16px;
  border-radius: 22px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  width: max-content;
  display: flex;
  flex-direction: column;
}

.bubble-row {
  display: flex;
  align-items: center;
}

.bubble-nick,
.bubble-text {
  white-space: nowrap;
}

.bubble-nick {
  color: #d66894;
  font-weight: bold;
}

.bubble-time {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

.publish-footer {
  position: absolute;
  left: 28px;
  right: 28px;
  bottom: 10px;
  width: auto;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.msg-input {
  max-width: 200px;
  width: 100%;
  height: 30px;
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid #f2c8d8;
  box-sizing: border-box;
}

.nick-input {
  width: 100px;
  height: 30px;
  padding: 4px 8px;
  border-radius: 20px;
  border: 1px solid #f2c8d8;
  box-sizing: border-box;
}

.send-btn {
  background: #f8749c;
  color: #fff;
  border: none;
  border-radius: 42%;
  width: 38px;
  height: 26px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-box {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  min-width: 440px;
  max-height: 70vh;
  overflow-y: auto;
}

.recycle-item {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  display:flex;
  flex-direction:column;
  gap:4px;
}

.recycle-item button:last-child{
  background:#ee6666;
  color:#fff;
  border:none;
  border-radius:4px;
  padding:2px 8px;
}

.close-btn {
  margin-top: 12px;
}

.loading {
  text-align: center;
  padding-top: 120px;
  color: #d66894;
}

.login-tip-mask {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  z-index: 999;
  display:flex;
  align-items:center;
  justify-content:center;
}
.login-tip-box{
  background:#fff;
  padding:45px 60px;
  border-radius:36px;
  min-width:250px;
}
.login-tip-box p{
  margin:0 0 40px 0;
  font-size:22px;
  text-align:center;
  color:#333;
}
.tip-buttons{
  display:flex;
  gap:35px;
  justify-content:flex-end;
}
.tip-cancel{
  border:4px solid #888;
  background:#fff;
  border-radius:300px;
  font-size:18px;
}
.tip-go-login{
  background:#f8749c;
  color:#fff;
  border:none;
  border-radius:300px;
  font-size:18px;
}
</style>
