<template>
  <div>
    <h1>1. 动态dynamic组件使用</h1>
    <UseDynamic></UseDynamic>
    <hr />
    <h1>2. 组件的缓存</h1>
    <UseDynamic2></UseDynamic2>
  </div>
</template>

<script>
import UseDynamic from "./views/01_UseDynamic.vue";
import UseDynamic2 from "./views/02_UseDynamic.vue";
export default {
  components: {
    UseDynamic,
    UseDynamic2,
  },
};
</script>

<style>
</style>