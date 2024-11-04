import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// pinia练习-pinia是vuex的替代品
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
