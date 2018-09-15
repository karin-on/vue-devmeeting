import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import UUID from 'vue-uuid';

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(UUID);

new Vue({
  render: h => h(App)
}).$mount('#app')
