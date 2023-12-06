<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">修改</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // 使用 ref 创建响应式数据
    const message = ref('Hello, Vue');

    // 定义一个改变消息的方法
    const changeMessage = () => {
      message.value = 'Hello, GreatJiang';
    };

    // 返回组件需要的数据和方法
    return {
      message,
      changeMessage,
    };
  },
};
</script>

<style scoped>
</style>
