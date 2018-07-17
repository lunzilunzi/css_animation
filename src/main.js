import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex配置
import store from './store'
// 初始化样式
import 'normalize.css'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

