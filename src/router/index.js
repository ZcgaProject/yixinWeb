import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/yixinHome/homePage'

Vue.use(Router)

export default new Router({
  routes: [
    // 默认主页面
    {
      path: '/',
      redirect: 'homePage'
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    },
  ]
})
