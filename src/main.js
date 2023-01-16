import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
//import store from './store/store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.scss';
import vuetify from './plugins/vuetify'

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
 // store,
 router,

 vuetify,
 render: h => h(App)
}).$mount('#app')

