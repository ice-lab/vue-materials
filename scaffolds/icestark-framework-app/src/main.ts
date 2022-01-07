import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import router from './router';
import 'element-plus/dist/index.css';

const vue = createApp(App);
vue.use(router);
// @ts-ignore
vue.use(ElementPlus);

vue.mount('#app');
