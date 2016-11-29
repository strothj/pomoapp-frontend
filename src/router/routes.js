import VueRouter from 'vue-router';
import IndexPage from 'components/IndexPage';
import LoginPage from 'components/LoginPage';
import ProjectPage from 'components/ProjectPage';

const routes = [
  { path: '/', name: 'Root', component: IndexPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/projects', name: 'ProjectPage', component: ProjectPage },
];

const routerFactory = () => new VueRouter({
  mode: 'history',
  routes,
});

export default routerFactory;
