<template>
  <div id="markdown">
    <div class="articleTitle">
      <div class="form">
        <input
          type="text"
          class="title"
          placeholder="文章标题"
          v-model="title"
        />
        <div class="menu">
          <input type="radio" id="life" value="life" v-model="menu" />
          <label for="life">life</label>
          <input type="radio" id="code" value="code" v-model="menu" />
          <label for="code">code</label>
        </div>
        <div class="submit" @click="submit">提交</div>
      </div>
      <textarea placeholder="文章简介" v-model="des"></textarea>
    </div>
    <mavon-editor v-model="value" class="editor" ref="md" @imgAdd="$imgAdd" />
  </div>
</template>

<script>
import { uploadimg, baseUrl } from "@/request/api.js";

import axios from "axios";
export default {
  data() {
    return {
      menu: "",
      value: "",
      des: "",
      title: "",
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
        this.$refs.md.$img2Url(pos, baseUrl + url.imgSrc);
      });

      // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
      // $vm.$img2Url 详情见本页末尾
    },
    submit() {
      console.log(1);
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
  .form {
    display: flex;
    align-items: center;
    background: #fff;
    .title {
      flex: 1;
      margin-top: 10px;
      margin-right: 20px;
      height: 50px;
      border: none;
      border-bottom: solid 1px #ccc;
      font-size: 24px;
      font-weight: 700;
      text-indent: 2em;
      outline: none;
    }
    .menu {
      input {
        margin-left: 5px;
        cursor: pointer;
      }
    }
    .submit {
      margin: 0 20px;
      padding: 5px;
      color: #ccc;
      border: solid 1px #ccc;
      border-radius: 10px;
      cursor: pointer;
      box-sizing: border-box;
      transition: 0.3s;
      &:hover {
        color: green;
        border: solid 1px green;
      }
    }
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