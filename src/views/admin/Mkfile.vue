<template>
  <div id="markdown">
    <div class="articleTitle">
      <input type="text" placeholder="文章标题" />
      <textarea placeholder="文章简介"></textarea>
    </div>
    <mavon-editor v-model="value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    save() {
      console.log(save);
    },
  },
  watch: {
    value(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="less" scoped>
.articleTitle {
  input {
    margin-top: 10px;
    display: block;
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: solid 1px #ccc;
    font-size: 24px;
    font-weight: 700;
    text-indent: 2em;
    outline: none;
    
  }
  textarea {
    margin-top: 20px;
    width: 100%;
    border: none;
    outline: none;
    text-indent: 2em;
    border-bottom: solid 1px #ccc;
  }
}
</style>