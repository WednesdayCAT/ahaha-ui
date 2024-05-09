import Vue from 'vue'
import App from './App.vue'

import '../components/css/index.scss'
import AhahaUI from '../components/lib/index'
Vue.use(AhahaUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
