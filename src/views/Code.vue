<template>
  <div class="code">
    <HeaderImageSlot>
      <img src="../assets/2.png" />
      <template v-slot:slogan>
        <p>Code</p>
        <p>好好地学编程</p>
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
  name: "Code",
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
    getarticleslist("code").then((res) => (this.articles = res));
  },
};
</script>