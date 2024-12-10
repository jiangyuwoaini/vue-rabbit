
<template>
    <div class="---">
        <div class="container1">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item two">5</div>
        <!-- <div class="item">6</div> -->
        <div class="item">7</div>
        <div class="item one">8</div>
        <!-- <div class="item">9</div> -->
        <!-- <div class="item">10</div> -->
        <div class="item">11</div>
        <!-- <div class="item">12</div> -->
    </div>
    </div>
</template>

<style scoped> /**以使用 scoped 属性来确保 CSS 样式只在当前组件中起作 */
.---{
  padding: 0;
  margin: 0;  
}
.container1{
    width: 100vw;
    height: 100vh;
    background-color:aquamarine;
    display: grid; /* 名声使用网格布局,直接对子元素生效 */
    grid-template-rows: 100px 100px 200px; /** 行间距 */
    grid-template-columns: 200px 200px 200px 200px; /**列宽度 */
    gap: 3px; /** 网格间距 */
    
}

.item{
    border: 1px solid #ccc;
    box-sizing: border-box;
    background: tomato;
    /**下面美化字体 */
    color:#ffff;
    font-size:20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.one{
    grid-row: span 2;/** 单元格行跨越2格 */
    /**grid-column: span 2;*/ /* 单元格行跨越2格 */
}

.two{
    grid-area: span 2 / span 2; /** 横和竖都跨越2格 */
}
</style>