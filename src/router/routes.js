import VueRouter from 'vue-router';
import IndexPage from 'components/IndexPage';
import LoginPage from 'components/LoginPage';

const routes = [
  { path: '/', name: 'Root', component: IndexPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
];

const routerFactory = () => new VueRouter({
  mode: 'history',
  routes,
});

export default routerFactory;
