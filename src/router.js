import VueRouter from 'vue-router';
import RootPage from 'components/RootPage/Page';
import ProjectsPage from 'components/ProjectsPage/Page';

const routes = [
  { path: '/', name: 'Root', component: RootPage },
  { path: '/projects', name: 'ProjectsPage', component: ProjectsPage },
];

const routerFactory = () => new VueRouter({
  mode: 'history',
  routes,
});

export default routerFactory;
