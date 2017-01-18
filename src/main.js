// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import App from './app.component';
import appThemes from './app.themes';

import landingRoutes from './landing/landing.routes';
import accountRoutes from './accounts/accounts.routes';
import projectsRoutes from './projects/projects.routes';
import clockRoutes from './clock/clock.routes';

import appStore from './app.store';
import projectsStore from './projects/projects.store';
import clockStore from './clock/clock.store';

import './assets/layout.less';
import './assets/typography.less';
import './assets/transitions.less';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueMaterial);

Vue.material.registerTheme(appThemes);

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...landingRoutes,
    ...projectsRoutes,
    ...accountRoutes,
    ...clockRoutes,
  ],
});

appStore.state.router = router;
appStore.modules = {
  projects: projectsStore,
  clock: clockStore,
};
const store = new Vuex.Store(appStore);

// Redirect user from areas of the program which require authentication.
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.authenticated) {
      next({
        path: '/signin',
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

// If the url contains the query parameter "?speedRacer=1" then enable reduced
// clock timers for demonstration purposes.
if (router.currentRoute.query.speedRacer) {
  console.log('Demo mode: Reduced clock timers enabled.'); // eslint-disable-line no-console
  store.commit('demoMode', true);
}

// Attempt automatic login
store.dispatch('SIGNIN_WITH_COOKIE');
