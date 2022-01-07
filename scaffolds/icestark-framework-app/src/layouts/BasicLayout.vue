<script setup lang="ts">
import {
  Location, SetUp,
} from '@element-plus/icons-vue';
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();

const value = computed(() => {
  return route.path;
});

const handleSelect = (key: string) => {
  router.push(key);
};

</script>

<template>
  <div class="menu">
    <el-menu
      :default-active="value"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#FFF"
      text-color="black"
      active-text-color="#1989fa"
      :style="{ height: '100%', boxShadow: '0px 1px 3px 0px rgb(0 0 0 / 12%)' }"
    >
      <el-menu-item index="/">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Home</span>
        </template>

      </el-menu-item>
      <el-menu-item index="/about">
        <template #title>
          <span>About</span>
        </template>

      </el-menu-item>
      <el-menu-item index="/login">
        <template #title>
          <span>Login</span>
        </template>

      </el-menu-item>

      <el-sub-menu index="/seller">
        <template #title>
          <span>商家平台（React）</span>
        </template>

        <el-menu-item index="/seller">商家首页</el-menu-item>
        <el-menu-item index="/seller/list">商家列表</el-menu-item>
        <el-menu-item index="/seller/detail">商家详情</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="/waiter">
        <template #title>
          <span>小二平台（Vue）</span>
        </template>
        <el-menu-item index="/waiter">小二首页</el-menu-item>
        <el-menu-item index="/waiter/list">小二列表</el-menu-item>
        <el-menu-item index="/waiter/detail">小二详情</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>


<style lang="css" scoped>
.menu {
  height: 100%;
  width: 200px;
}
</style>
