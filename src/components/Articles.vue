<template>
  <div class="articles">
    <div class="article" v-for="item in dealArticles" :key="item.id">
      <div class="intro" @click="gotoDetail(item.id)">
        <h2>{{ item.title }}</h2>
        <p>{{ item.des }}</p>
      </div>
      <div class="time_and_button">
        <p class="posttime" v-if="item.posttime != ''">
          POSTTIME:{{ item.posttime }}
        </p>
        <div v-if="isAuth" class="buttons">
          <span @click="changeArticle(item.id)">修改</span>
          <span @click="deleteArticle(item.id)">删除</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { articleDelete } from "@/request/api";

import { Notification } from "element-ui";

export default {
  name: "Articles",
  props: ["articles"],
  computed: {
    isAuth() {
      return (
        !!this.$store.state.token &&
        location.pathname.match(/^\/[a-z]*/)[0] === "/admin"
      );
    },
    dealArticles() {
      return this.articles
        .map((item) => {
          let date = new Date(+item.posttime);
          item.posttime = `${1900 + date.getYear()}/${
            date.getMonth() + 1
          }/${date.getDate()}`;
          return item;
        })
        .reverse();
    },
  },

  methods: {
    gotoDetail(id) {
      this.$router.push({ name: "detail", query: { id } });
    },
    changeArticle(id) {
      this.$router.push({ name: "mkfile", query: { id } });
    },
    deleteArticle(id) {
      articleDelete(id).then((res) => {
        if (res.type === "success") {
          Notification({
            message: res.type,
            type: res.type,
            onClose: () => {
              this.$router.go(0);
            },
          });
        }
      });
    },
  },
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
  .time_and_button {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    color: #a3a3a3;
    .posttime {
      display: inline-block;
      color: #a3a3a3;
    }
    .buttons {
      margin-right: 30px;
      span {
        padding: 0 2px;
        border: solid 1px #ccc;
        border-radius: 5px;
        margin-right: 10px;
        cursor: pointer;
        transition: 0.3s;
        &:nth-of-type(1):hover {
          color: slategray;
          border-color: slategray;
        }
        &:nth-of-type(2):hover {
          color: brown;
          border-color: brown;
        }
      }
    }
  }
}
</style>