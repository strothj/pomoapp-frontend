// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import 'assets/css/styles.less';

import App from './App';
import createStore from './store';
import createRouter from './router';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
  primary: 'indigo',
  accent: 'pink',
  warn: 'deep-orange',
  background: 'white',
});

const router = createRouter();
const store = createStore({ router });

// Redirect user from areas of the program which require authentication.
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.authenticated) {
      next({
        path: '/',
        // query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else next();
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});

// Bootstrap auth0.com library in user store module.
store.dispatch('BOOTSTRAP_LOGIN');
