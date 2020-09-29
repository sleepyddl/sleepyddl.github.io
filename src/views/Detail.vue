<template>
  <div class="detail">
    <HeaderImageSlot>
      <img v-if="detail.menu == 'code'" src="../assets/2.png" />
      <img v-else src="../assets/3.png" />
      <template v-slot:slogan>
        <p>{{ detail.title }}</p>
        <!-- <p>{{ detail.des }}</p> -->
      </template>
    </HeaderImageSlot>
    <div class="content">
      <div class="left"></div>

      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import HeaderImageSlot from "@/components/HeaderImageSlot.vue";

import { getarticlesdetail } from "@/request/api";
export default {
  name: "Detail",
  props: ["id"],
  data() {
    return {
      detail: {
        title: "",
        id: "",
        des: "",
        posttime: "",
        content: "",
        menu: "",
      },
    };
  },

  components: {
    HeaderImageSlot,
  },
  created() {
    getarticlesdetail(this.id).then((res) => {
      this.detail = res;
    });
  },
};
</script>

<style>
</style>