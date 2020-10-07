<template>
  <div class="content">
    <div class="left">
      <Info />
      <Search @changeArticle="changeArticle" />
      <!-- <Tags :tags="tags"></Tags> -->
      <Hotarticles :hotarticles="hotarticles"></Hotarticles>
    </div>

    <div class="right">
      <Articles :articles="articles" />
    </div>
  </div>
</template>

<script>
import Info from "../Info.vue";
import Search from "../Search.vue";
import Tags from "../Tags.vue";
import Hotarticles from "../Hotarticles.vue";
import Articles from "../Articles.vue";

import { getarticleslist, getHotarticles } from "@/request/api";

export default {
  name: "MainConent",
  components: {
    Info,
    Search,
    Tags,
    Hotarticles,
    Articles,
  },
  props: ["show"],
  data() {
    return {
      articles: [],
      tags: [
        { name: "css", menu: "code" },
        { name: "JavaScript", menu: "code" },
        { name: "HTML", menu: "code" },
        { name: "虚拟机", menu: "code" },
      ],
      hotarticles: [],
    };
  },
  async created() {
    [this.hotarticles, this.articles] = await Promise.all([
      getHotarticles(),
      this.show === "home" ? getarticleslist() : getarticleslist(this.show),
    ]);
  },
  methods: {
    changeArticle(arr) {
      this.articles = arr;
    },
  },
};
</script>

<style>
</style>