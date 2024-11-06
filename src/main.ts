// 引入初始化样式文件
// main.js文件主要用于初始化入口
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core'
import { lazyPlugin } from '@/directives/index'
import { componentPlugin } from '@/components' // 引入全局组件插件
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin) //引入懒加载插件,并注册
app.use(componentPlugin)
app.mount('#app')

