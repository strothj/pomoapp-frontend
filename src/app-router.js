import VueRouter from 'vue-router';

import { LandingContainer, landingRoutes } from './components/landing';

const routes = [
  {
    path: '/',
    component: LandingContainer,
    children: landingRoutes,
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
