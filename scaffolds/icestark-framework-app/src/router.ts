import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Login from './pages/Login.vue';
import NotFound from './pages/NotFound.vue';

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/:pathMatch(.*)',
      name: 'notfound',
      component: NotFound,
    },
  ],
});

export default router;
