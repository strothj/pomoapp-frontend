import VueRouter from 'vue-router';
import IndexView from 'components/IndexView';
import LayeredLayout from 'components/LayeredLayout';
import { ClockComponent } from 'src/clock';

const routes = [
  {
    path: '/',
    name: 'Root',
    component: IndexView,
  },
  {
    path: '/projects',
    name: 'ProjectsView',
    component: LayeredLayout,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects/:projectId',
    name: 'TasksView',
    component: LayeredLayout,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects/:projectId/:taskId',
    name: 'ClockView',
    component: ClockComponent,
    meta: { requiresAuth: true },
  },
];

const routerFactory = () => new VueRouter({
  mode: 'history',
  routes,
});

export default routerFactory;
