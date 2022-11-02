import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import footer from '@/components/FooterPage.vue'

Vue.component('FooterPage', footer)

Vue.config.productionTip = false

export const eventBus = new Vue();
Vue.use(VueResource);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
