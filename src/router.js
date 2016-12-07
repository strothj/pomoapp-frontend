import VueRouter from 'vue-router';
import RootPage from 'components/RootPage/Page';
import ProjectsView from 'components/ProjectsView';
import LoginView from 'components/LoginView';

const routes = [
  { path: '/', name: 'Root', component: RootPage },
  { path: '/projects', name: 'ProjectsView', component: ProjectsView },
  { path: '/login', name: 'LoginView', component: LoginView },
];

const routerFactory = () => new VueRouter({
  mode: 'history',
  routes,
});

export default routerFactory;
