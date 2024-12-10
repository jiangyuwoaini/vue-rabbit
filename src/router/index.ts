import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import cartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'
import Sku from '@/components/XtxSku/index.vue'
import css1 from '@/views/CssLayOut/CssLayOut_1.vue'
import css2 from '@/views/CssLayOut/CssLayOut_2.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: "sku", 
          component: Sku
        },
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartList',
          component: cartList
        },
        {
          path: 'checkout',
          component: Checkout
        },
        {
          path: "pay",
          component: Pay
        },
        {
          path: "paycallback",
          component: PayBack
        },
        {
          path: "member",
          component: Member,
          children: [
            {
              path: "user", // 置空path
              component: UserInfo
            },
            {
              path: "order",
              component: UserOrder
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/example',
      name: 'example',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DemoExampleView.vue')
    },
    {
      path: '/sonCom',
      name: 'sonCom',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SonCom.vue')
    },
    {
      path: '/css1',
      component: css1
    },
    {
      path: '/css2',
      component: css2
    },
  ],//路由滚动行为定制,也就是说不同路由之间的切换会将滚动条滚动到顶部
  scrollBehavior() {
    return { top : 0}
  }
})

export default router
