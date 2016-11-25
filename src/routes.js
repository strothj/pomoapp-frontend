import VueRouter from 'vue-router';
import IndexPage from 'components/IndexPage';
import LoginPage from 'components/LoginPage';

const routes = [
  { path: '/', component: IndexPage },
  { path: '/login', component: LoginPage },
];

const routerFactory = () => new VueRouter({
  mode: 'history',
  routes,
});

export default routerFactory;
