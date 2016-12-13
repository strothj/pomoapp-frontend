// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'flexboxgrid/dist/flexboxgrid.css';
import 'vue-material/dist/vue-material.css';
import 'assets/css/styles.less';

import App from './App';
import createStore from './store';
import createRouter from './router';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueMaterial);

Vue.material.theme.registerAll({
  app: {
    primary: 'blue',
    accent: 'light-blue',
    warn: 'deep-orange',
    background: 'black',
  },
  popupMenu: {
    primary: 'blue',
    accent: 'light-blue',
    warn: 'deep-orange',
    background: 'grey',
  },
  archivedButton: {
    primary: {
      color: 'grey',
      hue: '500',
    },
  },
  loginCard: {
    primary: 'blue',
    accent: 'light-blue',
    warn: 'red',
    // background: 'black',
  },
});

const router = createRouter();
const store = createStore({ router });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});

store.dispatch('LOGIN_WITH_TOKEN');
