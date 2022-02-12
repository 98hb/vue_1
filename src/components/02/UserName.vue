<template>
  <div>
    <div>
      <span>用户名:</span>
      <input type="text" />
    </div>
    <div>
      <span>密码:</span>
      <input type="text" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("02-UserName-创建");
  },
  destroyed() {
    console.log("02-UserName-销毁");
  },
};
</script>

<style>
</style>