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
        <i class="el-icon-menu"></i>
        <span slot="title">Home</span>
      </el-menu-item>
      <el-menu-item index="/about">
        <i class="el-icon-guide"></i>
        <span slot="title">About</span>
      </el-menu-item>
      <el-menu-item index="/login">
        <i class="el-icon-user"></i>
        <span slot="title">Login</span>
      </el-menu-item>

      <el-submenu index="/seller">
        <template slot="title">商家平台（React）</template>
        <el-menu-item index="/seller">商家首页</el-menu-item>
        <el-menu-item index="/seller/list">商家列表</el-menu-item>
        <el-menu-item index="/seller/detail">商家详情</el-menu-item>
      </el-submenu>

      <el-submenu index="/waiter">
        <template slot="title">小二平台（Vue）</template>
        <el-menu-item index="/waiter">小二首页</el-menu-item>
        <el-menu-item index="/waiter/list">小二列表</el-menu-item>
        <el-menu-item index="/waiter/detail">小二详情</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  computed: {
    value () {
      return this.$route.path
    }
  },
  methods: {
    handleSelect (key) {
      this.$router.push(key)
    }
  },
};
</script>

<style lang="css" scoped>
.menu {
  height: 100%;
  width: 200px;
}
</style>
