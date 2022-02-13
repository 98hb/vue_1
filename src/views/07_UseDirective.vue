<template>
  <div>
    <!-- <input type="text" v-gfocus /> -->
    <input type="text" v-focus />
  </div>
</template>

<script>
// 目标:创建"自定义指令",让输入框自动聚焦
// 1.创建自定义指令
// 全局/局部
// 2.在标签上使用自定义指令 v-指令名
// inserted方法 - 指令所在标签,被插入到网页上触发
export default {
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style>
</style>