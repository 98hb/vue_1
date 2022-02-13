<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <Pannel>
        <template v-slot:title
          ><!-- v-slot:  ===   # -->
          <h4>芙蓉楼送辛渐</h4>
        </template>
        <template v-slot:content>
          <img src="../assets/mm.gif" alt="" />
          <span>我是内容</span>
        </template>
      </Pannel>
      <Pannel>
        <template #title>
          <span style="color: red; background: lightyellow">具名插槽</span>
        </template>
        <template #content>
          <p>1.slot占位 - name 属性起名字 title content</p>
          <p>2.使用组件,template配合v-slot:插槽名,简写#,夹着传入具体标签</p>
        </template>
      </Pannel>
    </div>
  </div>
</template>

<script>
import Pannel from "../components/04/Pannel.vue";
export default {
  components: {
    Pannel,
  },
};
</script>

<style>
#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid blueviolet;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}
</style>