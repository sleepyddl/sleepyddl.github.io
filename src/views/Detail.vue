<template>
  <div class="detail">
    <HeaderImageSlot>
      <img v-if="detail.menu == 'code'" src="../assets/2.png" />
      <img v-else-if="detail.menu == 'life'" src="../assets/3.png" />
      <template v-slot:slogan>
        <p>{{ detail.title }}</p>
        <!-- <p>{{ detail.des }}</p> -->
      </template>
    </HeaderImageSlot>
    <div class="content">
      <!-- <div class="left"></div> -->

      <div class="right">
        <div v-html="realHTML" class="markdown-body" id="markdown-body"></div>
      </div>
    </div>
  </div>
</template>

 
<script>
import HeaderImageSlot from "@/components/HeaderImageSlot.vue";
import { getarticlesdetail } from "@/request/api";

import { Remarkable } from "remarkable";
const md = new Remarkable();

// import AutocJs from "autocjs";
// console.log(AutocJs);
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
      realHTML: "",
      realTOC: "",
    };
  },

  components: {
    HeaderImageSlot,
  },
  mounted() {
   },
  created() {
    getarticlesdetail(this.id).then((res) => {
      this.detail = res;
      this.realHTML = md.render(res.content);
      console.log(this.realHTML);
      // console.log(this.realTOC);
    });
  },
};
</script>
<style scsoped>
@import url("https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css");
</style>