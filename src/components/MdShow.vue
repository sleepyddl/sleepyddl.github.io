<template>
  <div v-html="realHTML" class="markdown-body"></div>
</template>

<script>
import { Remarkable } from "remarkable";
const device = new Remarkable();
export default {
  name: "MdShow",
  props: ["md"],
  computed: {
    realHTML() {
      return device.render(this.md);
    },
  },
};
</script>

<style>
@import url("https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css");
</style>