<template>
  <div class="search block">
    <div class="title">文章搜索</div>
    <div class="searchInput">
      <input type="text" placeholder="根据标题进行搜索" v-model="val" />
      <div @click="searh" @keyup.enter="search"></div>
    </div>
  </div>
</template>

<script>
import { searcharticles } from "@/request/api";
export default {
  name: "Search",
  data() {
    return {
      val: "",
    };
  },
  methods: {
    async searh() {
      if (this.val.trim()) {
        let arr = await searcharticles(this.val);
        this.$emit("changeArticle", arr);
      }
    },
  },
};
</script>
<style lang="less" scoped>
::-webkit-input-placeholder {
  color: #ccc;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: #ccc;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #ccc;
}
:-ms-input-placeholder {
  color: #ccc;
}
.search {
  .searchInput {
    position: relative;
    input {
      width: 90%;
      height: 24px;
      outline: none;
      text-indent: 0.5em;
      border: solid 1px #ccc;
      border-radius: 12px;
      color: #ccc;
      &:focus {
        color: slategray;
        border: solid 1px slategray;
      }
      &:focus + div {
        background: url("../assets/search.1.png");
        background-size: cover;
      }
    }
    div {
      position: absolute;
      width: 20px;
      height: 20px;
      background: url("../assets/search.png");
      background-size: cover;
      top: 2px;
      right: 11%;
    }
  }
}
</style>