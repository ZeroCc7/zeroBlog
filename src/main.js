import Vue from 'vue'
import App from './App.vue'
// import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.use(ElementUI);
// Vue.use(VueRouter);
Vue.use(VueResource);
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
}).$mount('#app')
