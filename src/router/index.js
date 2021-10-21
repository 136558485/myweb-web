import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: "/home"    
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/intro',
    name: 'Intro',
    component: () => import('../views/intro/Intro.vue')
  },
  {
    path: '/mind',
    name: 'Mind',
    component: () => import('../views/mind/Mind.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/blog/Blog.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
