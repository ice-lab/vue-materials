<template>
  <div>
    <div>小二：首页</div>
    <router-link to="/detail">detail</router-link>
    <br />
    <router-link to="/list">list</router-link>
    <br />
    <el-alert
      title="这是一个 Element 的组件"
      type="success"
    >
    </el-alert>
  </div>
</template>

<script>
import { appHistory } from '@ice/stark-app';

export default {
  methods: {
    handleClick: () => {
      appHistory.push('/');
    }
  }
}
</script>
