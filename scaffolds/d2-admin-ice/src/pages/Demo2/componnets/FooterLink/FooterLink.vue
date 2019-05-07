<template>
  <span class="footer-link">
    欢迎使用 D2Admin, 这些资源会对您有帮助：
    <a class="footer-link_link" href="https://doc.d2admin.fairyever.com/zh/" target="blank">中文文档</a> |
    完整版 : <a class="footer-link_link" href="https://d2admin.fairyever.com" target="blank">演示</a> +
    <a class="footer-link_link" href="https://github.com/d2-projects/d2-admin" target="blank">仓库</a> |
    简化版 : <a class="footer-link_link" href="https://start-kit.d2admin.fairyever.com" target="blank">演示</a> +
    <a class="footer-link_link" href="https://github.com/d2-projects/d2-admin-start-kit" target="blank">仓库</a> |
    人人开源适配 : <a class="footer-link_link" href="https://renren.d2admin.fairyever.com/" target="blank">演示</a> +
    <a class="footer-link_link" href="https://github.com/d2-projects/d2-admin-renren-security-enterprise" target="blank">仓库</a>
  </span>
</template>

<script>
export default {
  name: 'FooterLink'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
.footer-link {
  .footer-link_link {
    color: $color-primary;
  }
}
</style>
