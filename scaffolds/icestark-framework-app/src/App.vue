<template>
  <div id="app">
    <el-row :gutter="10" class="el-rwo">
      <el-col :span="2" :style="{height: '100%'}">
        <layout />
      </el-col>
      <el-col :span="22" v-loading="loading">
        <router-view ref="view" />
        <div id="container"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { registerMicroApps, start } from '@ice/stark';
import { setBasename } from '@ice/stark-app';
import Layout from './layout/BasicLayout'

export default {
  data () {
    return {
      loading: false,
    }
  },
  name: 'App',
  components: {
    Layout,
  },
  mounted() {
    console.log('refs', this.$refs);
    const container = document.getElementById('container');
    // const container = this.$refs.view.$el;
    registerMicroApps([
      {
        name: 'seller',
        activePath: '/seller',
        title: '商家平台',
        umd: true,
        sandbox: true,
        // React app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-seller-react-16
        url: [
          '//ice.alicdn.com/icestark/child-seller-react/index.js',
          '//ice.alicdn.com/icestark/child-seller-react/index.css',
        ],
        container,
      }, {
        name: 'waiter',
        activePath: '/waiter',
        title: '小二平台',
        umd: true,
        url: [
          // Vue app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-waiter-vue-2
          '//ice.alicdn.com/icestark/child-waiter-vue/app.js',
          '//ice.alicdn.com/icestark/child-waiter-vue/app.css',
        ],
        container,
      }, {
        name: 'angular',
        activePath: '/angular',
        title: 'Angular',
        sandbox: true,
        // Angular app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-common-angular-9
        entry: '//ice.alicdn.com/icestark/child-common-angular/index.html',
        container,
      }
    ]);
    console.log('bbb')
    start({
      onAppEnter: (appConfig) => {
        const { activePath } = appConfig;
        console.log('aaa', activePath);
        setBasename(activePath)
      },
      onLoadingApp: () => {
        this.loading = true;
      },
      onFinishLoading: () => {
        this.loading = false;
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
}
body {
  margin: 0;
  padding: 0;
}
.el-rwo {
  height: 100%;
}
</style>
