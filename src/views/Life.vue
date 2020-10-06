<template>
  <div class="life">
    <HeaderImageSlot>
      <img src="../assets/3.png" />
      <template v-slot:slogan>
        <p>Life</p>
        <p>做一些有意义的事情</p>
      </template>
    </HeaderImageSlot>
    <MainConent :articles="articles" />
  </div>
</template>

<script>
import HeaderImageSlot from "@/components/HeaderImageSlot.vue";
import MainConent from "@/components/combComponents/MainConent.vue";

import { getarticleslist } from "@/request/api.js";
export default {
  name: "Life",
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
    getarticleslist("life").then((res) => (this.articles = res));
  },
};
</script>