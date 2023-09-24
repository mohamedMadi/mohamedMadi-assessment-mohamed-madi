import Vue from 'vue'
import VueRouter from 'vue-router'
import Tasks from '../views/Tasks.vue'
import SingleTask from '../views/SingleTask.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/tasks/:taskId',
    name: 'taskDetails',
    component: SingleTask
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
