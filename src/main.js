// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
// import 'assets/css/styles.less';

import App from './app.component';
import LandingComponent from './landing/landing.component';
import accountRoutes from './accounts/accounts.routes';
import projectsRoutes from './projects/projects.routes';
import appStore from './app.store';
import projectsStore from './projects/projects.store';
// import createStore from './store';
// import createRouter from './router';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
  primary: {
    color: 'blue-grey',
    hue: '800',
  },
  accent: {
    color: 'blue',
  },
  warn: 'deep-orange',
  background: 'white',
});

// const router = createRouter();
// const store = createStore({ router });

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingComponent,
    },
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
        // TODO: Add redirect to page user was trying to access.
        // query: { redirect: to.fullPath },
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
