/* eslint-disable */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import { routes } from './routes.js'; 
import store from './store/store';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
}).$mount('#app')
