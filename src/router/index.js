import { createRouter, createWebHistory } from 'vue-router'
import DesktopSearch from '../views/DesktopSearch.vue'
import DesktopVideo from '../views/DesktopVideo.vue'

const routes = [
  {
    path: '/',
    name: 'DesktopSearch',
    component: DesktopSearch
  },
  {
    path: '/DesktopVideo',
    name: 'DesktopVideo',
    component: DesktopVideo,
    // props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
