<template>
  <div class="content">
    <div class="left">
      <Info />
      <Search />
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

import { getarticleslist } from "@/request/api";

export default {
  name: "MainConent",
  props:["articles"],
  components: {
    Info,
    Search,
    Tags,
    Hotarticles,
    Articles,
  },
  data() {
    return {
      tags: [
        { name: "css", menu: "code" },
        { name: "JavaScript", menu: "code" },
        { name: "HTML", menu: "code" },
        { name: "虚拟机", menu: "code" },
      ],
      hotarticles: [
        { title: "为什么写博客这么难，该怎么办？", id: "12345", menu: "code" },
        {
          title: "为什么找工作这么难，我太难了我太难了",
          id: "23",
          menu: "life",
        },
        {
          title: "为什么？？？我是十万个为什么哈哈哈啊哈",
          id: "1",
          menu: "life",
        },
      ],
    };
  },
};
</script>

<style>
</style>