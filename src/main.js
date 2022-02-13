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
new Vue({
  render: h => h(App),//render渲染
}).$mount('#app')//mount挂载
