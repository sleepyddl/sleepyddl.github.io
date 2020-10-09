<template>
  <div class="content">
    <img src="../../assets/toright.png" @click="toright" class="torightimg" />

    <div class="left">
      <Info />
      <Search @changeArticle="changeArticle" />
      <!-- <Tags :tags="tags"></Tags> -->
      <Hotarticles :hotarticles="hotarticles"></Hotarticles>
    </div>
    <div class="leftInPhone" :class="{ leftInPhoneShow: showright }">
      <div class="wrapinfo">
        <img
          src="../../assets/toright_black.png"
          class="toright_black"
          alt=""
          @click="backright"
        />
        <Info />
        <Search @changeArticle="changeArticle" />
        <!-- <Tags :tags="tags"></Tags> -->
        <Hotarticles :hotarticles="hotarticles"></Hotarticles>
      </div>
    </div>

    <div class="right">
      <MdShow :md="md" v-if="isProfile" />
      <Articles :articles="articles" v-else />
    </div>
  </div>
</template>

<script>
import Info from "../Info.vue";
import Search from "../Search.vue";
import Tags from "../Tags.vue";
import Hotarticles from "../Hotarticles.vue";
import Articles from "../Articles.vue";
import MdShow from "../MdShow.vue";

import { getarticleslist, getHotarticles } from "@/request/api";

export default {
  name: "MainConent",
  components: {
    Info,
    Search,
    Tags,
    Hotarticles,
    Articles,
    MdShow,
  },
  props: ["show", "md"],
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
      isProfile: false,
      showright: false,
    };
  },
  async created() {
    if (this.show === "profile") {
      this.isProfile = true;
      this.hotarticles = await getHotarticles();
    } else {
      [this.hotarticles, this.articles] = await Promise.all([
        getHotarticles(),
        this.show === "home" ? getarticleslist() : getarticleslist(this.show),
      ]);
    }
  },
  methods: {
    changeArticle(arr) {
      this.articles = arr;
      this.showright = false;
    },
    toright() {
      this.showright = true;
    },

    backright() {
      this.showright = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import url("https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css");

.content {
  position: relative;
  .torightimg {
    display: none;
    position: absolute;
    height: 32px;
    width: 32px;
    top: -40px;
    left: 10px;
    z-index: 2;
  }
}

.leftInPhone {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  transition: 0.5s;
  transform: translateX(-100%);
  background: #fff;
  z-index: 3;

  .wrapinfo {
    position: relative;
    margin: 80px auto;
    width: 220px;
  }
}
.leftInPhoneShow {
  transform: translateX(0);
}

.toright_black {
  position: absolute;
  left: -30px;
  height: 32px;
  width: 32px;
  transform: rotateZ(180deg);
}

@media screen and (max-width: 900px) {
  .content .torightimg {
    display: block;
  }
}
</style>