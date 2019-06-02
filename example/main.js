import Vue from 'vue'
import App from './App.vue'
import VueHoverMask from '../src/index'

Vue.config.productionTip = false
Vue.component(VueHoverMask.name, VueHoverMask)

new Vue({
  render: h => h(App)
}).$mount('#app')
