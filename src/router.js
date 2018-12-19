import Vue from 'vue'   /* 引用vue文件 */
import Router from 'vue-router'  /* 引用vue路由模块，并赋值给变量Router */
import Home from './component/Home'  /* 英文Hello.vue模版，并赋值给变量Hello,这里是“@”相当于“../” */
import weather from './component/weather'
import news from './component/news'
Vue.use(Router)   /* 使用路由 */
export default new Router({
  routes: [     /* 进行路由配置，规定“/”引入到Hello组件 */
    {
      path: '/',
      name: 'Home',  /* 这里的name同上，暂时没发现有什么意思 */
      component: Home   /* 注册Home组件 */
    },
    {
      path: '/weather',
      name: 'weather',  /* 这里的name同上，暂时没发现有什么意思 */
      component: weather   /* 注册Home组件 */
    },
    {
      path: '/news',
      name: 'news',  /* 这里的name同上，暂时没发现有什么意思 */
      component: news   /* 注册Home组件 */
    }
  ]
})
