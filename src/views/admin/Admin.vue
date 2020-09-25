<template>
  <div class="admin">
    <HeaderImageSlot>
      <template v-slot:slogan>
        <p>Admin</p>
        <p>管理后台</p>
      </template>
    </HeaderImageSlot>
    <div class="content">
      <div class="left">
        <div @click="newArticle">+ 新文章</div>
      </div>

      <div class="right">
        <Articles :articles="articles" :isAdmin="true" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderImageSlot from "@/components/HeaderImageSlot.vue";
import { getarticleslist } from "@/request/api.js";

import Articles from "@/components/Articles.vue";

export default {
  name: "Admin",
  components: {
    HeaderImageSlot,
    Articles,
  },
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    newArticle() {
      this.$router.push("/admin/mkfile");
    },
  },
  created() {
    getarticleslist().then((res) => (this.articles = res));
  },
};
</script>
<style lang="less" scoped>
.left {
  font-size: 18px;
  font-weight: 700;
  color: #666;
  text-align: center;
  div {
    transition: 0.3s;
    cursor: pointer;
    background: #fff;
    &:hover {
      color: #222;
      background: linear-gradient(90deg, #fff, #eee, #fff);
    }
    &:nth-of-type(1) {
      border-top: solid 1px #eee;
    }
    border-bottom: solid 1px #eee;
    padding: 10px 0;
  }
}
</style>