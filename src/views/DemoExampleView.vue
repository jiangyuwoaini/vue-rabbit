<script lang="ts" setup> //setup 是隐形的语法糖
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

import { ref,watch,onMounted,
    reactive,computed, 
    provide} from 'vue'; 
import SonCom from './SonCom.vue'
    const message = "this is message";
    const logMessageFun = ()=>{
        console.log(message);
    }
    //reactive和ref共同点是,用函数调用的方式生成响应式数据
    const state = reactive({ //reactive函数只能处理简单类型数据
        count:0
    })
    const addState = ()=>{
        state.count ++;
    }
    
    const stateList = ref([1,2,3,4,5,6,7,8]); // ref比较常用,能处理对象等复杂数据，如果要访问基本数据,就直接.value
    // computed计算函数调用
    const computedList = computed(()=>{
        return stateList.value.filter(item => item > 2);
    })
    
    // watch监听单个数据源 
    const count1 = ref(0);
    const setCount1 = () =>{
        count1.value +=100;
    }
    watch(count1,(newVal,oldVal) => {
        console.log('count变化了',newVal,oldVal);
    },{immediate:true}) //immediate 在监听器创建时立即初发回调，响应式数据变化之后继续执行回调
    //watch监听多个个数据源
    const name1 = ref('cp');
    watch([count1,name1],
    ([newCount1,newName1],[oldCount1,oldName1])=>{
        console.log('count或者name变化了',[newCount1,newName1],[oldCount1,oldName1])
    },{deep:true});  //开启deep是深监听，但是depp性能损耗,尽量不要开启,用下面方法代替
    //watch 精确监听具体某个属性值
    const updateVal1 = ref({
        name: '拆拆',
        age: 18
    })
    const updateName1 = () => updateVal1.value.age = 16;
    watch(()=> updateVal1.value.age,
         () => {
            console.log("age变化了");
        })
    // Vue生命周期函数,多次调用onMounted则会按照顺序依次执行
    onMounted(()=>{
        console.log("生命周期函数触发咯~~~~")
    })


    // 父组件传子组件的练习  
    const count2 = ref(100);
    setTimeout(()=>{
        count2.value = 200;
    },3000)

    // 子传父的练习
    const getMessage = (msg:String) =>{
        console.log("子传父的值u",msg)
    }

    // 默认情况下在<script setup>语法糖下组件内部的属性和方法是不开放给父组件访问的,可方法允许访问
    const sonComApp = ref(null);
    onMounted(()=>{
        console.log("子组件暴露的值:",sonComApp.value)
    })  

    // 底层和顶层跨组件传输数据
    // 1、顶层组件提供数据
    provide('data-key','this is room data')
    // 2、顶层组件传递响应式数据
    const count3 = ref(0);
    provide('count-key',count3);
    const addCount3 = () => count3.value++;
    // 3、向底层组件传递方法
    provide('addCount3-key',addCount3)
</script>

<template>
    <div>
        {{ message }} 
        <button @click="logMessageFun">点击</button>
        {{state.count}}
        <button @click="addState">reactive函数测试</button>
    </div>
    <div>
        计算属性数值 - {{ computedList }}
    </div>
    <div>
        <button @click="setCount1">watch监听单个数据源 </button>
        <button @click="setCount1">watch监听多个数据源 </button>
        <button :val1=updateVal1.name  @click="updateName1">watch监听具体某个属性值 </button>
    </div>
    <div class = "father">
        <h3>父类组件APP</h3>
        <!-- 1、绑定属性-->
        <SonCom :count="count2" message="father message"></SonCom>
        <!-- 1、子穿父绑定事件-->
        <SonCom @get-message="getMessage"/>
        <!-- 组合式Api模板引用-->
        <SonCom ref="sonComApp"/>
    </div>
</template>


    
<style>
@media (min-width: 1024px) {
.about {
    min-height: 100vh;
    display: flex;
    align-items: center;
}
}
</style>