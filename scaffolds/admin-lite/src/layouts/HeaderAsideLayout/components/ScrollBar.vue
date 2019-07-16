<template>
  <div
    ref="scrollContainer"
    class="scroll-container"
    @wheel.prevent="handleScroll">
    <div
      ref="scrollWrapper"
      :style="{top: top + 'px'}"
      class="scroll-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
const delta = 15;

export default {
  name: 'ScrollBar',
  data() {
    return {
      top: 0,
    };
  },
  methods: {
    handleScroll(e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 3;
      const $container = this.$refs.scrollContainer;
      const $containerHeight = parseInt($container.offsetHeight, 10);
      const $wrapper = this.$refs.scrollWrapper;
      const $wrapperHeight = parseInt($wrapper.offsetHeight, 10);
      if (eventDelta > 0) {
        this.top = Math.min(0, this.top + eventDelta);
      } else if ($containerHeight - delta < $wrapperHeight) {
        if (this.top < -(delta + ($wrapperHeight - $containerHeight))) {
          this.top = this.top;
        } else {
          this.top = Math.max(
            this.top + eventDelta,
            $containerHeight - $wrapperHeight - delta,
          );
        }
      } else {
        this.top = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-container {
  width: 100%;
  height: 100%;
  background-color: #00142a;
  .scroll-wrapper {
    position: absolute;
    width: 100%;
  }
}
</style>
