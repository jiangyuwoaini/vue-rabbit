<script setup>

</script>

<template>
    <!-- 前三个属性用这个-->
    <!-- <body class="v_body" hidden>
        <div class="box">a</div>
        <div class="box">b</div>
        <div class="box">c</div>
    </body> -->

    <!-- flex-wrap  用下面这个-->
    <div class="x-box">
        <div class="box2">1</div>
        <div class="box2">2</div>
        <div class="box2">3</div>
        <div class="box2">4</div>
        <div class="box2">5</div>
        <div class="box2">6</div>
        <div class="box2">7</div>
        <div class="box2">8</div>
        <div class="box2">9</div>
        <div class="box2">10</div>
    </div>

    <!--
        flex的项目属性,可自行百度,就没有一一练习了
        order,flex-grow,flex-shrink,flex-basis,
        {
            flex--》
                取值：默认0 1 auto, flex属性是flex-grow, flex-shrink与flex-basis三个属性的简写，用于定义项目放大，缩小与宽度。
                该属性有两个快捷键值，分别是auto(11 auto)等分放大缩小，与none(0 O auto)不放大，但等分缩小

        }
    -->
</template>

<style lang="css">
.v_body练习1{
    width: 100vw;
    height: 100vh;
    /**fiex布局练习两个容器属性justify-content align-items -默认自上向下排列 */
    display: flex;/**开启弹性布局就会自左向右排列 */ 
    /**沿着横轴进行居中对齐 */
    justify-content: center; 
    /* 沿着横轴进行靠右对齐 */
    /* justify-content: flex-end;  */
    /** 沿着横轴左右两端的对齐 间距相等*/
    /* justify-content: space-between; */
    /** 项目之间的间距为容器的二倍 */
    /* justify-content: space-around; */
    /** 项目之间的间距,与项目与容器相等 */
    /* justify-content: space-evenly; */

    /** 默认 */
    /* align-items: start; */
    /** 交叉轴居中排列 */
    align-items: center;
    /** 靠着交叉轴底部对齐 */
    /* align-items: flex-end; */

}


.v_body练习2{
    width: 100vw;
    height: 100vh;
    /**flex布局练习容器属性flex-direction */
    display: flex;/**开启弹性布局就会自左向右排列 */ 
    /** 默认是按照行进行排序 */
    /* flex-direction: row; */
    /** 按行反转 */
    /* flex-direction: row-reverse; */
    /** 按列操作 */
    /* flex-direction: column; */
    /** 排列反转 */
    flex-direction: column-reverse;
}

.x-box{
    width: 300px;
    height: 300px;
    display: flex;
    margin: 0 auto;
    /**flex属性练习之flex-wrap  */
    /** 默认 盒子的宽度明显要大于300px,浮动布局肯定会掉下去,nowrap情况下,大于了强行等于300px,不会换行*/
    /* flex-wrap: nowrap;  */
    /** 项目根据自身宽度进行排列 */
    flex-wrap: wrap; 
}

.box{
    width: 300px;
    height: 300px;
    background: rgb(44, 44, 167);
    color: red;
    font-size: 30px;
    text-align: center;
}

.box2{
    width: 60px;
    height: 50px;
    background: rgb(44, 44, 167);
    color: red;
    font-size: 20px;
    text-align: center;
}
</style>