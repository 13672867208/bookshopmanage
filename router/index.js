import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/box',
      name: 'box',
      component: () => import('@/pages/exserisebox/box-check')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/user-manage',
          name: 'user-manage',
          component: () => import('@/pages/user-manage/index')
        },
        {
          path: '/menu-manage',
          name: 'menu-manage',
          component: () => import('@/pages/menu-manage/index')
        },
        {
          path: '/comm-manage',
          name: 'comm-manage',
          component: () => import('@/pages/comm-manage/index')
        },
        {
          path: '/home-pic-manage',
          name: 'home-pic-manage',
          component: () => import('@/pages/home-pic-manage/index')
        },
        {
          path: '/comm-classify-manage',
          name: 'comm-classify-manage',
          component: () => import('@/pages/comm-classify-manage/index')
        },
        {
          path: '/client-manage',
          name: 'client-manage',
          component: () => import('@/pages/client-manage/index')
        },
        {
          path: '/order-manage',
          name: 'order-manage',
          component: () => import('@/pages/order-manage/index')
        },
        {
          path: '/hot-comm-manage',
          name: 'hot-comm-manage',
          component: () => import('@/pages/hot-comm-manage/index')
        },
        {
          path: '/shop-info-manage',
          name: 'shop-info-manage',
          component: () => import('@/pages/shop-info-manage/index')
        },
        {
          path: '/driver-info-manage',
          name: 'driver-info-manage',
          component: () => import('@/pages/driver-info-manage/index')
        }

      ]
    }
  ]
})
