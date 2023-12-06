<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // 使用 ref 创建响应式数据
    const message = ref('Hello, Vue 3 with Composition API!');

    // 定义一个改变消息的方法
    const changeMessage = () => {
      message.value = 'New Message';
    };

    // 返回组件需要的数据和方法
    return {
      message,
      changeMessage,
    };
  },
  // 其他组件选项，如生命周期钩子等
};
</script>

<style scoped>
/* 样式部分，scoped 表示样式只作用于当前组件 */
h1 {
  color: blue;
}
/* 其他样式 */
</style>
