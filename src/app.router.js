import VueRouter from 'vue-router';

import PageLayout from './shared/page-layout.component';

import landingRoutes from './landing/landing.routes';
import accountRoutes from './accounts/accounts.routes';
import projectsRoutes from './projects/projects.routes';
import clockRoutes from './clock/clock.routes';

export default new VueRouter({
  mode: 'history',
  routes: [
    ...landingRoutes,
    ...accountRoutes,
    // Create a subroute so the main portion of the application does not have
    // page transitions.
    {
      path: '/projects',
      component: PageLayout,
      children: [
        ...projectsRoutes,
        ...clockRoutes,
      ],
    },
  ],
});
