<template>
  <div id="markdown">
    <div class="articleTitle">
      <input type="text" placeholder="文章标题" />
      <textarea placeholder="文章简介"></textarea>
    </div>
    <mavon-editor v-model="value" class="editor" ref="md" @imgAdd="$imgAdd" />
  </div>
</template>

<script>
import { uploadimg } from "@/request/api.js";

import axios from "axios";
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      console.log($file);
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("image", $file);

      uploadimg(formdata).then((url) => {
        console.log(url);
        this.$refs.md.$img2Url(pos, "http://127.0.0.1:3000/" + url.imgSrc);
      });

      // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
      // $vm.$img2Url 详情见本页末尾
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
#markdown {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  z-index: 3;
  input {
    background: #fff;
  }
  .editor {
    flex: 1;
  }
}
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