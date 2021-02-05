import Vue from 'vue'
import App from './App'
import store from './store/index-copy'

Vue.config.productionTip = false

Vue.prototype.$store=store

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
