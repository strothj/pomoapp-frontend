import ClockPageComponent from './clock-page.component';

export default [
  {
    path: ':projectId/:taskId',
    name: 'ClockView',
    component: ClockPageComponent,
    meta: { requiresAuth: true },
  },
];
