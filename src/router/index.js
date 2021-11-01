import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: "/home"    
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: "首页"
    },
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
    meta: {
      title: "博客"
    },
    component: () => import('../views/blog/Blog.vue')
  },
  {
    path: '/article',
    name: 'Article',
    meta: {
      title: "文章内容"
    },
    component: () => import('../views/blog/ArticleWin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router
