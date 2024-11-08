import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import router from '@/router'

// 创建axios实例
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net', //基地址
  timeout: 10000 //超时时间 10秒
})

// axios请求拦截器
http.interceptors.request.use(config => {
  // 1. 从pinia获取token数据
  const userStore = useUserStore()
  // 2. 按照后端的要求拼接token数据
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
  // 从pinia获取token数据
  const userStore = useUserStore()
  // 统一错误提示 三元 true 服务器响应错误 false 网络或请求错误
  const er = e.response ? e.response : e.message;
  ElMessage({
    type: 'warning',
    message: er
  })
  // 401 token 失效处理
  // 1.清楚本地用户数据
  // 2.跳转登录页
  if(e.response.status===401){
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})

export default http