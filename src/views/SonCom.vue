<script setup>
import { inject, ref } from 'vue';

    // 父传子数据接收
    const props = defineProps({
        message: String,
        count: Number
    })
    console.log(props);

    // 子传父数据定义
    const emit = defineEmits(['get-message'])
    const sendMsg = () => {
        //出发自定义事件,传数据给父组件
        emit('get-message','this is son message');
    }

    // 默认情况下在<script setup>语法糖下组件内部的属性和方法是不开放给父组件访问的,可方法允许访问
    const name = ref("hello my is name");
    const setName = ()=> name.value = 'hello my is name 1111111111111'
    defineExpose({
        name,
        setName
    })

    // 底层组件接收数据
    const roomData = inject('data-key')
    // 底层组件接收响应式数据
    const countData = inject('count-key')
    // 接收顶层组件传递的方法
    const setCount = inject('addCount3-key')
</script>

<template>
    <div class="son">
        <h3>子组件Son</h3>
        <div>
            <div>
                父组件传入的数据 - {{message}}  {{count}}
            </div>
            <div>
                <button @click="sendMsg">触发子传父自定义事件</button>
            </div>
        </div>
        <div>
            来自顶层组件的数据为：{{ roomData}}</br>
            来自顶层组件的响应式数据为: {{countData}}
            <button @click="setCount">修改顶层组件的数据</button>
        </div>
    </div>
</template>