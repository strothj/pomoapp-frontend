import VueRouter from 'vue-router';
import IndexPage from 'components/IndexPage';

const routes = [
  { path: '/', component: IndexPage },
];

const routerFactory = () => new VueRouter({
  mode: 'history',
  routes,
});

export default routerFactory;
