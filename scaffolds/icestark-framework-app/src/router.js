import VueRouter from 'vue-router';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
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
    }
  ]
})

export default router;
