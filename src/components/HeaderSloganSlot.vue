<template>
  <div class="slogan">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.slogan {
  position: absolute;
  z-index: 2;
  top: 0;
}
</style>