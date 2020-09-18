<template>
  <div id="HeaderImageSlot">
    <slot></slot>
    <div class="slogan">
      <slot name="slogan"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderImageSlot",
};
</script>
<style lang="less" scoped>
#HeaderImageSlot {
  position: relative;
  height: 450px;
  overflow: hidden;
  background: rgb(80, 80, 80);
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .slogan {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    color: #fff;
    text-align: center;
    font-weight: 700;
    :nth-child(1) {
      font-size: 50px;
    }
    :nth-child(2) {
      padding-top: 10px;
      letter-spacing: 10px;
    }
  }
}
</style>