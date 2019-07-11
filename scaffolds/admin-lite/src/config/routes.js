// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideLayout from '@/layouts/HeaderAsideLayout';
import NotFound from '@/pages/NotFound';
import Dashboard from '@/pages/Dashboard';

const routerConfig = [
  {
    path: '/table',
    component: HeaderAsideLayout,
    children: [
      { path: '/table/basic', component: NotFound },
      { path: '/table/fixed', component: NotFound },
    ],
  },
  {
    path: '/form',
    component: HeaderAsideLayout,
    children: [
      { path: '/form/basic', component: NotFound },
      { path: '/form/signup', component: NotFound },
    ],
  },
  {
    path: '/charts',
    component: HeaderAsideLayout,
    children: [
      { path: '/charts/line', component: NotFound },
      { path: '/charts/histogram', component: NotFound },
      { path: '/charts/bar', component: NotFound },
    ],
  },
  {
    path: '/profile',
    component: HeaderAsideLayout,
    children: [
      { path: '/profile/success', component: NotFound },
      { path: '/profile/fail', component: NotFound },
    ],
  },
  {
    path: '/result',
    component: HeaderAsideLayout,
    children: [
      { path: '/result/success', component: NotFound },
      { path: '/result/fail', component: NotFound },
    ],
  },
  {
    path: '/',
    component: HeaderAsideLayout,
    children: [
      { path: '/dashboard/analysis', component: Dashboard },
      { path: '/dashboard/monitor', component: NotFound },
      { path: '/dashboard/workplace', component: NotFound },
    ],
  },
  { path: '*', component: NotFound },
];

export default routerConfig;
