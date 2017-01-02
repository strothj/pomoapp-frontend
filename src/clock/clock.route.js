import ClockComponent from './clock.component';

export default {
  path: '/projects/:projectId/:taskId',
  name: 'ClockView',
  component: ClockComponent,
  meta: { requiresAuth: true },
};
