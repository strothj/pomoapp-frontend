import VueRouter from 'vue-router';
import RootPage from 'components/RootPage/Page';
import LayeredLayout from 'components/LayeredLayout';
import LoginView from 'components/LoginView';

const routes = [
  { path: '/', name: 'Root', component: RootPage },
  { path: '/projects', name: 'ProjectsView', component: LayeredLayout },
  { path: '/projects/:projectId', name: 'TasksView', component: LayeredLayout },
  { path: '/login', name: 'LoginView', component: LoginView },
];

const routerFactory = () => new VueRouter({
  mode: 'history',
  routes,
});

export default routerFactory;
