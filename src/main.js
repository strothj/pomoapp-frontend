import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import App from './app.component';

Vue.use(VueMaterial);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  // router,
  render: h => h(App),
});
