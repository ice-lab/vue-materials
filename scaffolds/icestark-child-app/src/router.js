import Vue from 'vue';
import Router from 'vue-router';
import { getBasename } from '@ice/stark-app';
import routes from '@/config/routes';

Vue.use(Router);

export default new Router({
  routes,
  mode: 'history',
  base: getBasename(),
});
