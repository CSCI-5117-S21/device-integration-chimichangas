import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Geolocation from '../views/Geolocation.vue'
import audiorecorder from '../views/Audiorecorder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/geolocationdemo',
    name: 'Geolocation',
    component: Geolocation
  },
  {
    path: '/audiorecorder',
    name: 'Audiorecorder',
    component: audiorecorder
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
