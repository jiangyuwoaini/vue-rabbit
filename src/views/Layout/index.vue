<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
    const categoryStore = useCategoryStore()
    onMounted(() => { //通过vue生命周期函数调用方法 异步初始化数据
        categoryStore.getCategory()
    })
</script>

<template>
    <LayoutFixed />
    <!-- <LayoutNav/>  -->
    <LayoutHeader/> 
    <!-- 二级路由出口 -->
    <RouterView />
    <LayoutFooter/> 
</template>