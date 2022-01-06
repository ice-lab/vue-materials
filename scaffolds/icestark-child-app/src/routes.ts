import HelloWorld from './components/HelloWorld.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';
import NotFound from './components/404.vue';
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import renderNotFound from '@ice/stark-app/lib/renderNotFound';

const renderNotFoundPromise = () => new Promise((resolve) => {
  renderNotFound();
  resolve(true);
});

const routes = [
  {
    path: '/',
    component: HelloWorld,
  },
  {
    path: '/list',
    component: List,
  },
  {
    path: '/detail',
    component: Detail,
  },
  {
    path: '/:pathMatch(.*)',
    component: isInIcestark() ? () => renderNotFoundPromise() : NotFound,
  },
];

export default routes;
