// 引入初始化样式文件
// main.js文件主要用于初始化入口
import '@/styles/common.scss'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  piniaPluginPersistedstate  from 'pinia-plugin-persistedstate'
import { useIntersectionObserver } from '@vueuse/core'
import { lazyPlugin } from '@/directives/index'
import { componentPlugin } from '@/components' // 引入全局组件插件
const app = createApp(App)
const pinia = createPinia()
//注册pinia持久化插件
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(lazyPlugin) //引入懒加载插件,并注册
app.use(componentPlugin)
app.mount('#app')