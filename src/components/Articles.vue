<template>
  <div class="articles">
    <div class="article" v-for="item in articles" :key="item.id">
      <div class="intro">
        <h2>{{item.title}}</h2>
        <p>{{item.des}}</p>
      </div>
      <p class="posttime">POSTTIME:{{item.posttime}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "articles",
  props: ["articles"],
};
</script>
<style lang="less" scoped>
.article {
  padding: 20px 0 5px 0;
  border-bottom: solid 1px #eee;

  .intro {
    &:hover {
      p {
        color: slategray;
      }
    }
    h2 {
      padding: 0 0 10px;
      cursor: pointer;
    }
    p {
      font-style: italic;
      color: #a3a3a3;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .posttime {
    margin-top: 10px;
    color: #a3a3a3;
  }
}
</style>