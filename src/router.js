import VueRouter from 'vue-router';
import RootPage from 'components/RootPage/Page';
import ProjectsPage from 'components/ProjectsPage/Page';
import LoginPage from 'components/LoginPage/Page';

const routes = [
  { path: '/', name: 'Root', component: RootPage },
  { path: '/projects', name: 'ProjectsPage', component: ProjectsPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
];

const routerFactory = () => new VueRouter({
  mode: 'history',
  routes,
});

export default routerFactory;
