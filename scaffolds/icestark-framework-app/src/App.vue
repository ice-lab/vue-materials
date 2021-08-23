<template>
  <div id="app">
    <div>
      <layout />
    </div>
    <div class="content" v-loading="loading">
      <div id="container"></div>
      <router-view v-if="!microAppsActive" />
    </div>
  </div>
</template>

<script>
import { registerMicroApps, start } from '@ice/stark';
import { setBasename } from '@ice/stark-app';
import Layout from './layouts/BasicLayout'

export default {
  data () {
    return {
      loading: false,
      microAppsActive: false,
    }
  },
  name: 'App',
  components: {
    Layout,
  },
  mounted() {
    const container = document.getElementById('container');
    registerMicroApps([
      {
        name: 'seller',
        activePath: '/seller',
        title: '商家平台',
        sandbox: true,
        // React app demo: https://github.com/alibaba-fusion/materials/tree/master/scaffolds/ice-stark-child
        url: [
          'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/js/index.js',
          'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/css/index.css',
        ],
        container,
      }, {
        name: 'waiter',
        activePath: '/waiter',
        title: '小二平台',
        sandbox: true,
        // Vue app demo: https://github.com/ice-lab/vue-materials/tree/master/scaffolds/icestark-child-app
        url: [
          'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/js/app.js',
          'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/css/app.css',
        ],
        container,
      }, {
        // TODO: Angular
        name: 'angular',
        activePath: '/angular',
        title: 'Angular',
        sandbox: true,
        // Angular app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-common-angular
        entry: 'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-common-angular/index.html',
      }
    ]);

    start({
      onLoadingApp: () => {
        this.loading = true;
      },
      onFinishLoading: () => {
        this.loading = false;
      },
      onRouteChange: (_, pathname) => {
        // 处理微应用间跳转无法触发 Vue Router 响应
        this
          .$router
          .push(pathname)
          .catch(() => {})
      },
      onActiveApps: (activeApps) => {
        this.microAppsActive = (activeApps || []).length;
      }
    });
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;

  display: flex;
}
body {
  margin: 0;
  padding: 0;
}
.content {
  flex: 1;
  margin: 40px;
}

.el-rwo {
  height: 100%;
}
</style>
