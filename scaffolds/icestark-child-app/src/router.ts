import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';
import NotFound from './components/404.vue';
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import getBasename from '@ice/stark-app/lib/getBasename';
import renderNotFound from '@ice/stark-app/lib/renderNotFound';

// https://zhuanlan.zhihu.com/p/138444490

// 返回一个函数，重复进入 vue 应用的时候，重置 routes 实例（非常重要）
const genRoute = () => {
  const routerHistory = createWebHistory(isInIcestark() ? getBasename() : '/');

  return createRouter({
    history: routerHistory,
    routes: [
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
        component: isInIcestark() ? () => renderNotFound() : NotFound,
      },
    ],
  });
};

export default genRoute;
