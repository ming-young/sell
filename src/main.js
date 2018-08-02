// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from './components/goods/goods'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routers = {
  '/': goods,
  '/goods': goods
}

new Vue({
  routers,
  components: {
    App: App
  }
}).$mount('#app')
