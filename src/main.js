// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize';
import 'assets/css/pomoapp/index.less';

import App from './App';
import createStore from './store';
import createRouter from './router';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = createRouter();
const store = createStore({ router });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
