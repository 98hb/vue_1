<template>
  <div>
    <!-- <input type="text" v-gfocus /> -->
    <input type="text" v-focus />
    <!-- <p v-color="'red'">自定义指令修改文字颜色</p> -->
    <!-- 'red'是变量 -->
    <p v-color="colorStr">自定义指令修改文字颜色</p>
    <!-- colorStr是变量 -->
  </div>
</template>

<script>
// 目标:创建"自定义指令",让输入框自动聚焦
// 1.创建自定义指令
// 全局/局部
// 2.在标签上使用自定义指令 v-指令名
// inserted方法 - 指令所在标签,被插入到网页上触发(一次)
// update方法 - 指令对应数据/标签更新时,此方法执行
export default {
  data() {
    return {
      colorStr: "red",
    };
  },
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