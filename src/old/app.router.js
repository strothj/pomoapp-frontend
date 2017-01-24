import VueRouter from 'vue-router';

// import PageLayout from './shared/page-layout.component';

import landingRoutes from './landing/landing.routes';
import accountRoutes from './accounts/accounts.routes';
// import clockRoutes from './clock/clock.routes';

import { projectsRouting } from './projects';

export default new VueRouter({
  mode: 'history',
  routes: [
    ...landingRoutes,
    ...accountRoutes,
    ...projectsRouting,
  ],
});
