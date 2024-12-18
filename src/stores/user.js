// 管理用户数据相关,以供其他组件使用,pinia的数据是存在内容的，刷新就会丢失,如果要持久化就要用pinia-plugin-persistedstate插件解决
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
const cartStore = useCartStore()
// 1. 定义管理用户数据的state
const userInfo = ref({})
// 2. 定义获取接口数据的action函数
const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
    //合并购物车的操作
    mergeCartAPI(cartStore.cartList.map(item => {
        return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
        }
    }))
    //获取最新的购物车列表
    cartStore.updateNewList()
}
// 退出时清除用户信息
const clearUserInfo = () => {
    userInfo.value = {}
    //执行清除购物车的action
    cartStore.clearCart
}
// 3. 以对象的格式把state和action return
return {
    userInfo,
    getUserInfo,
    clearUserInfo
}
}, {
persist: true // persist: true就是开启数据持久化
})

