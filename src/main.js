import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 全局指令
Vue.directive("gfocus", {//directive指令
  inserted(el) {//inserted插入的
    // console.log(el);
    el.focus()//触发标签的事件方法
  }
})
// 目标: 自定义指令传值
Vue.directive("color", {
  inserted(el, binding) {
    // console.log(binding);
    el.style.color = binding.value
  },
  update(el, binding) {
    // console.log(binding);
    el.style.color = binding.value
  }
})
new Vue({
  render: h => h(App),//render渲染
}).$mount('#app')//mount挂载
