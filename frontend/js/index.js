import Vue from 'vue';
import App from './App.vue';
import store from './store.js';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});

