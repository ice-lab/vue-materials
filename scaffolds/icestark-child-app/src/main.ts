import { createApp } from 'vue';
import type { App as Root } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import getBasename from '@ice/stark-app/lib/getBasename';
import App from './App.vue';
import routes from './routes';

export const history = createWebHistory(isInIcestark() ? getBasename() : '/');

let vue: Root<Element> | null = null;

if (!isInIcestark()) {
  const router = createRouter({
    history,
    routes,
  });
  vue = createApp(App);
  vue.use(router);
  vue.mount('#app');
}

export function mount({ container }: { container: Element}) {
  const router = createRouter({
    history,
    routes,
  });
  vue = createApp(App);
  vue.use(router);
  vue.mount(container);
}

export function unmount() {
  if (vue) {
    vue.unmount();
  }
}
