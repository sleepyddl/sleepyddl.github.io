<template>
  <div class="hotarticles block">
    <div class="title">热门文章</div>
    <p v-for="item in hotarticles" :key="item.id" @click="gotoDetail(item.id)">
      {{ item.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Hotarticles",
  props: ["hotarticles"],
  methods: {
    gotoDetail(id) {
      this.$router.push({ name: "detail", query: { id } });
    },
  },
};
</script>

<style lang="less" scoped>
.hotarticles {
  p {
    height: 25px;
    line-height: 25px;
    color: #ccc;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
      color: slategray;
    }
  }
}
</style>