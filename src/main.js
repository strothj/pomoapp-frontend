import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import themes from './themes';
import router from './router';
import App from './App';
import './assets/css/layout.less';
import './assets/css/typography.less';

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.material.registerTheme(themes);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  render: h => h(App),
});
