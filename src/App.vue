<template>
  <div>
    <h1>1. 动态dynamic组件使用</h1>
    <UseDynamic></UseDynamic>
    <hr />
    <h1>2. 组件的缓存</h1>
    <UseDynamic2></UseDynamic2>
    <h1>3.组件-插槽</h1>
    <UserSlot></UserSlot>
    <hr />
    <h1>4.组件-具名插槽</h1>
    <UserSlot2></UserSlot2>
  </div>
</template>

<script>
import UseDynamic from "./views/01_UseDynamic.vue";
import UseDynamic2 from "./views/02_UseDynamic.vue";
import UserSlot from "./views/03_UserSlot.vue";
import UserSlot2 from "./views/04_UserSlot.vue";
export default {
  components: {
    UseDynamic,
    UseDynamic2,
    UserSlot,
    UserSlot2,
  },
};
</script>

<style>
</style>