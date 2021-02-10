<template>
  <div class="home">
    Home page
    <p><el-link type="primary" @click="innerJump">About</el-link></p>
    <p><el-link type="primary" @click="outerJump">Seller</el-link></p>
  </div>
</template>
<script>

export default {
  methods: {
    innerJump() {
      this.$router.push('/about')
    },
    outerJump() {
      this.$router.push('/seller')
    }
  }
}
</script>