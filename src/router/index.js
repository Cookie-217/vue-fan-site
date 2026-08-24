import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import MainLayout from '@/layout/MainLayout.vue'
import CoverStage from '@/views/CoverStage.vue'
import Home from '@/views/Home.vue'
import Intro from '@/views/Intro.vue'
import Song from '@/views/Song.vue'
import SongDetail from '@/views/SongDetail.vue'
import Stage from '@/views/PersonalStage.vue'
import Runningman from '@/views/RunningMan.vue'
import Business from '@/views/Business.vue'
import Photo from '@/views/Photo.vue'
import Message from '@/views/Message.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path:'/login',
    name:'Login',
    component: Login
  },
  {
    path:'/register',
    name:'Register',
    component:Register
  },
  {
    path: '/main',
    component: MainLayout,
    redirect: '/main/home',
    children: [
      { path: 'home', component: Home },
      { path: 'intro', component: Intro },
      { path: 'song', name:'Song', component: Song },
      { path: 'song/:id', name:'SongDetail', component: SongDetail },
      { path: 'cover', component: CoverStage },
      { path: 'stage', component: Stage },
      { path: 'runningman', component: Runningman },
      { path: 'business', component: Business },
      { path: 'photo', component: Photo },
      { path: 'message', component: Message }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
