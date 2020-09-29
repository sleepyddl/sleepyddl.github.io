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
    <MainConent :articles="articles" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderImageSlot from "@/components/HeaderImageSlot.vue";
import MainConent from "@/components/combComponents/MainConent.vue";

import { getarticleslist } from "@/request/api.js";

export default {
  name: "Home",
  components: {
    HeaderImageSlot,
    MainConent,
  },

  data() {
    return {
      articles: [{ id: "", title: "", des: "", posttime: "" }],
    };
  },
  created() {
    getarticleslist().then((res) => (this.articles = res));
  },
};
</script>


<style lang="less" >
.left {
  .title {
    font-size: 18px;
    font-weight: 700;
    color: #666;
    margin: 20px 0 10px;
  }
  .block {
    border-bottom: solid 1px #eee;
    box-sizing: border-box;
    padding-bottom: 10px;
  }
}
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
