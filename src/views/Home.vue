<template>
  <div class="home">
    <HeaderImageSlot>
      <img src="../assets/4.png" />
      <img src="../assets/3.png" />
      <img src="../assets/2.png" />
      <img src="../assets/1.png" />
      <template v-slot:slogan>
        <p>Longway</p>
        <p>好好学习，天天向上</p>
      </template>
    </HeaderImageSlot>
    <MainConent show="home" />
  </div>
</template>

<script>
import HeaderImageSlot from "@/components/HeaderImageSlot.vue";
import MainConent from "@/components/combComponents/MainConent.vue";


export default {
  name: "Home",
  components: {
    HeaderImageSlot,
    MainConent,
  },
};
</script>


<style lang="less" >

</style>


<style lang="less" scoped>
img {
  position: absolute;
  filter: blur(100px);
  &:nth-of-type(4) {
    animation: tier 24s 0s infinite;
  }
  &:nth-of-type(3) {
    animation: tier 24s 6s infinite;
  }
  &:nth-of-type(2) {
    animation: tier 24s 12s infinite;
  }
  &:nth-of-type(1) {
    animation: tier 24s 18s infinite;
  }
}
@keyframes tier {
  0% {
    z-index: 1;
    filter: blur(100px);
  }
  4% {
    z-index: 1;
    filter: blur(0);
  }
  21% {
    z-index: 1;
    filter: blur(0);
  }
  25%,
  100% {
    z-index: 0;
    filter: blur(100px);
  }
}
</style>
