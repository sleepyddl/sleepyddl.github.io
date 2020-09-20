<template>
  <div class="tags block">
    <div class="title">标签</div>
    <span class="tag" v-for="item in tags" :key="item.name">{{item.name}}</span>
  </div>
</template>

<script>
export default {
  name:"Tags",
  props:["tags"]
};
</script>

<style lang="less" scoped>
.tags {
  .tag {
    display: inline-block;
    padding: 0 3px;
    margin: 2px 2px;
    border: solid 1px #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 14px;
    color: #ccc;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: slategray;
      border: solid 1px slategray;
    }
  }
}
</style>