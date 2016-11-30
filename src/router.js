import VueRouter from 'vue-router';
// import IndexPage from 'components/IndexPage';
// import LoginPage from 'components/LoginPage';
import ProjectsPage from 'components/ProjectsPage/Page';

export const ROOT = 'Root';
export const LOGIN_PAGE = 'LoginPage';
export const PROJECT_PAGE = 'ProjectPage';

const routes = [
  // { path: '/', name: 'Root', component: IndexPage },
  // { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/projects', name: 'ProjectsPage', component: ProjectsPage },
];

const routerFactory = () => new VueRouter({
  mode: 'history',
  routes,
});

export default routerFactory;
