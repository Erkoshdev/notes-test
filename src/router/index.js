import { createWebHistory, createRouter } from 'vue-router'

import VNotes from '../views/VNoteList.vue'
import VNoteDetail from '../views/VNoteDetail.vue'

const routes = [
  { path: '/', name: 'VNotes', component: VNotes },
  { path: '/note/:id', name: 'VNoteDetail', component: VNoteDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router