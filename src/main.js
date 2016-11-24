// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'assets/css/grid/simple-grid.css';
import 'vue-material/dist/vue-material.css';

import App from './App';
import createStore from './store';
import createRoutes from './routes';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueMaterial);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: createStore(),
  router: createRoutes(),
  render: h => h(App),
});
