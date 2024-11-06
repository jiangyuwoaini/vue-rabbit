import { useIntersectionObserver } from '@vueuse/core'


// 定义懒加载插件
export const lazyPlugin = {
    install(app) {
        //懒加载指令逻辑
        app.directive('img-lazy', {
            mounted (el, binding) {
            // el: 指令绑定的那个元素 img
            // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
            console.log(el, binding.value)
            const { stop } = useIntersectionObserver(
                el,
                ([{ isIntersecting }]) => {
                console.log(isIntersecting)
                if (isIntersecting) {
                    // 进入视口区域 如果进入为true，否则为fasle
                    el.src = binding.value
                    stop() // stop是为了防止重复监听，图片加载了就没必要监听了
                }
                },
            )
            }
        })
    }
}