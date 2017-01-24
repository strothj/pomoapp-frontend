import VueRouter from 'vue-router';

import { Landing } from './components/landing';

const routes = [
  { path: '/', component: Landing },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
