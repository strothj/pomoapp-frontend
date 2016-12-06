import VueRouter from 'vue-router';
import RootPage from 'components/RootPage/Page';
import ProjectsPage from 'components/ProjectsPage/Page';
import LoginView from 'components/LoginView';

const routes = [
  { path: '/', name: 'Root', component: RootPage },
  { path: '/home', name: 'ProjectsView', component: ProjectsPage },
  { path: '/login', name: 'LoginView', component: LoginView },
];

const routerFactory = () => new VueRouter({
  mode: 'history',
  routes,
});

export default routerFactory;
