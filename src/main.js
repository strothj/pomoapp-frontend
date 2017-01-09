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

import appStore from './app.store';
import projectsStore from './projects/projects.store';

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
  ],
});

appStore.state.router = router;
appStore.modules = {
  projects: projectsStore,
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

// Attempt automatic login
store.dispatch('SIGNIN_WITH_COOKIE');
