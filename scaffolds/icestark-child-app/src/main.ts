import { createApp } from 'vue';
import type { App as Root } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import getBasename from '@ice/stark-app/lib/getBasename';
import App from './App.vue';
import router from './routes';

export const history = createWebHistory(isInIcestark() ? getBasename() : '/');

let vue: Root<Element> | null = null;

const runApp = (container: Element | string) => {
  // const router = createRouter({
  //   history,
  //   routes,
  // });
  vue = createApp(App);
  vue.use(router);
  vue.mount(container);
};

if (!isInIcestark()) {
  runApp('#app');
}

export function mount({ container }: { container: Element}) {
  console.log('----mount');
  runApp(container);
}

export function unmount() {
  console.log('----unmount', vue);
  if (vue) {
    vue.unmount();
  }
}
