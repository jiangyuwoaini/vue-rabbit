<script setup>
defineProps({ //defineProps 用来定义组件接收的 props，并且它会返回一个响应式对象，表示所有传递给组件的 props。
    good:{
        type:Object,
        default:()=>({})
    }
})
</script>
<template> <!-- 纯展示组件，供外部组件使用-->
    <RouterLink  :to="`/detail/${good.id}`" class="goods-item">
        <img v-img-lazy="good.picture" alt="" />
        <p class="name ellipsis">{{ good.name }}</p>
        <p class="desc ellipsis">{{ good.desc }}</p>
        <p class="price">&yen;{{ good.price }}</p>
    </RouterLink>
</template>
<style lang="scss">
.goods-item {
    display: block;
    width: 220px;
    padding: 20px 30px;
    text-align: center;
    transition: all .5s;

    &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
        width: 160px;
        height: 160px;
    }

    p {
        padding-top: 10px;
    }

    .name {
        font-size: 16px;
    }

    .desc {
        color: #999;
        height: 29px;
    }

    .price {
        color: $priceColor;
        font-size: 20px;
    }
}
</style>