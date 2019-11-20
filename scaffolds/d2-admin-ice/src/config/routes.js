/* eslint-disable */

// 工具
import util from '@/libs/util.ice';
// 页面和布局
import Index from '@/pages/Index';
import Login from '@/pages/Login'
import Error404 from '@/pages/Error404';
import Demo1 from '@/pages/Demo1';
import Demo2 from '@/pages/Demo2';
import HeaderAside from '@/layouts/HeaderAside';

// 如果不指定 name 字段，会根据 path 生成 name = page-demo1
// 转换规则见 util.recursiveRouterConfig 中 path2name 方法
// meta 字段会和默认值使用 Object.assign 合并
// 如果不指定 meta.name 的话，name 字段会使用和上面路由 name 一样的取值逻辑
// 下面两个页面就是对比 你可以分别观察两个页面上显示的路由数据差异

// 变量名 routerConfig 为 iceworks 检测关键字
// ice 会自动在这个变量下添加路由数据
// 请不要修改名称
const routerConfig = [
  {
    path: '/',
    component: HeaderAside,
    children: [
      { path: 'demo1', component: Demo1 },
      { path: 'demo2', component: Demo2 },
      // keep the name param
      { path: '', component: Index, name: 'index' },
    ],
  },
  { path: '*', component: Error404 },
];

// 不参与菜单显示的
// ice 不会处理这部分
// 但是这部分路由也会被注册
// 处理规则同 routerConfig

const routerConfigMenuLogin = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false,
    },
  },

  // 404
  {
    path: '*',
    component: Error404,
  },
];

// 导出全部路由设置
export default util.recursiveRouterConfig([
  ...routerConfig,
  ...routerConfigMenuLogin,
]);

function getFrameInRoutes() {
  const frameInRoutes = [];
  util.recursiveRouterConfig(routerConfig).forEach(e => {
    const { path, name, hidden, meta, children } = e;
    if (children) {
      children.forEach(child => {
        const { path, name, hidden, meta } = child;
        frameInRoutes.push({ path, name, hidden, meta });
      });
    } else {
      frameInRoutes.push({ path, name, hidden, meta });
    }
  });

  return frameInRoutes;
}

// 导出参与多标签页处理的路由设置
// 这个数据会在 main.js 中使用
export const frameInRoutes = getFrameInRoutes();
