<template>
  <div class="home">
    <div class="head">
      <HeaderImageSlot>
        <img src="../assets/4.png" />
        <img src="../assets/3.png" />
        <img src="../assets/2.png" />
        <img src="../assets/1.png" />
        <template v-slot:slogan>
          <p>Longway</p>
          <p>好好学习，天天向上</p>
        </template>
      </HeaderImageSlot>
    </div>
    <div class="content">
      <div class="left">
        <div class="info">
          <img class="headphoto" src="../assets/headphoto.jpg" alt="I'm Iron Man" />
          <p class="name">Longway</p>
          <p class="motto">业精于勤荒于嬉，行成于思毁于随</p>
          <div class="links">
            <a href="mailto:langwayya@163.com">
              <span class="mail"></span>
            </a>
            <a href="https://github.com/longwayya" target="_blank">
              <span class="git"></span>
            </a>
            <a href="https://juejin.im/user/2999123453948142" target="_blank">
              <span class="juejin"></span>
            </a>
            <span class="weixin">
              <img src="../assets/link/wxQR.jpg" />
            </span>
          </div>
        </div>
        <div class="tags block">
          <div class="title">标签</div>
          <span class="tag" v-for="item in tags" :key="item.name">{{item.name}}</span>
        </div>
        <div class="hotarticles block">
          <div class="title">热门文章</div>
          <p v-for="item in hotarticles" :key="item.id">{{item.title}}</p>
        </div>
      </div>
      <div class="right">
        <div class="article" v-for="item in articles" :key="item.id">
          <div class="intro">
            <h2>{{item.title}}</h2>
            <p>{{item.des}}</p>
          </div>
          <p class="posttime">POSTTIME:{{item.posttime}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderImageSlot from "@/components/HeaderImageSlot.vue";
export default {
  name: "Home",
  components: {
    HeaderImageSlot,
  },
  data() {
    return {
      articles: [
        {
          title:
            "字节跳动为什么选用Flutter：并非跨平台终极之选，但它可能是不一样的未来",
          des:
            "2018 年 12 月 ，Google 宣布 Flutter 1.0 版本正式发布。截至目前， Flutter 在 Github 上已获得 88000+ 的关注和 11000+ 的 Fork ，其发展速度相当惊人，是今年移动端最火热的开发框架之一。 Flutter 大火背后的原因是什么？为什么越来越多的企业和开发者会选择使用 Flutter？Flutter 会成为跨平台开发的终极...",
          posttime: "2019/12/01",
          menu: "code",
          id: "2345",
        },
        {
          title:
            "字节跳动为什么选用Flutter：并非跨平台终极之选，但它可能是不一样的未来",
          des:
            "2018 年 12 月 ，Google 宣布 Flutter 1.0 版本正式发布。截至目前， Flutter 在 Github 上已获得 88000+ 的关注和 11000+ 的 Fork ，其发展速度相当惊人，是今年移动端最火热的开发框架之一。 Flutter 大火背后的原因是什么？为什么越来越多的企业和开发者会选择使用 Flutter？Flutter 会成为跨平台开发的终极...",
          posttime: "2019/12/01",
          menu: "code",
          id: "2342",
        },
        {
          title:
            "字节跳动为什么选用Flutter：并非跨平台终极之选，但它可能是不一样的未来",
          des:
            "2018 年 12 月 ，Google 宣布 Flutter 1.0 版本正式发布。截至目前， Flutter 在 Github 上已获得 88000+ 的关注和 11000+ 的 Fork ，其发展速度相当惊人，是今年移动端最火热的开发框架之一。 Flutter 大火背后的原因是什么？为什么越来越多的企业和开发者会选择使用 Flutter？Flutter 会成为跨平台开发的终极...",
          posttime: "2019/12/01",
          menu: "code",
          id: "2343",
        },
        {
          title:
            "字节跳动为什么选用Flutter：并非跨平台终极之选，但它可能是不一样的未来",
          des:
            "2018 年 12 月 ，Google 宣布 Flutter 1.0 版本正式发布。截至目前， Flutter 在 Github 上已获得 88000+ 的关注和 11000+ 的 Fork ，其发展速度相当惊人，是今年移动端最火热的开发框架之一。 Flutter 大火背后的原因是什么？为什么越来越多的企业和开发者会选择使用 Flutter？Flutter 会成为跨平台开发的终极...",
          posttime: "2019/12/01",
          menu: "code",
          id: "2347",
        },
      ],
      tags: [
        { name: "css", menu: "code" },
        { name: "JavaScript", menu: "code" },
        { name: "HTML", menu: "code" },
        { name: "虚拟机", menu: "code" },
      ],
      hotarticles: [
        { title: "为什么写博客这么难，该怎么办？", id: "12345", menu: "code" },
        {
          title: "为什么找工作这么难，我太难了我太难了",
          id: "23",
          menu: "life",
        },
        {
          title: "为什么？？？我是十万个为什么哈哈哈啊哈",
          id: "1",
          menu: "life",
        },
      ],
    };
  },
  created() {},
};
</script>
<style lang="less" scoped>
.right {
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
}
.left {
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
  .title {
    font-size: 18px;
    font-weight: 700;
    color: #666;
    margin: 20px 0 10px;
  }
  .block {
    border-bottom: solid 1px #eee;
    box-sizing: border-box;
    padding-bottom: 10px;
  }
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
  .info {
    text-align: center;
    .headphoto {
      width: 70%;
      border-radius: 20px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    }
    .name {
      font-size: 20px;
      height: 50px;
      line-height: 50px;
      font-family: "Courier New", Courier, monospace;
    }
    .motto {
      height: 50px;
      color: #ccc;
    }
    .links {
      margin: 5px 0;
      text-align: left;
      border-bottom: solid 1px #eee;
      span {
        display: inline-block;
        width: 28px;
        height: 28px;
        margin-left: 10px;
        cursor: pointer;
      }
      .juejin {
        background: url("../assets/link/juejin.png");
        background-size: contain;
        &:hover {
          background: url("../assets/link/juejin.1.png");
          background-size: contain;
        }
      }
      .git {
        background: url("../assets/link/GitHub.png");
        background-size: contain;
        &:hover {
          background: url("../assets/link/GitHub.1.png");
          background-size: contain;
        }
      }
      .mail {
        background: url("../assets/link/mail.png");
        background-size: contain;
        &:hover {
          background: url("../assets/link/mail.1.png");
          background-size: contain;
        }
      }
      .weixin {
        position: relative;
        background: url("../assets/link/weixin.png");
        background-size: contain;
        img {
          position: absolute;
          width: 100px;
          bottom: 30px;
          right: -50px;
          display: none;
        }
        &:hover {
          background: url("../assets/link/weixin.1.png");
          background-size: contain;
          img {
            display: block;
          }
        }
      }
    }
  }
}
.head {
  img {
    position: absolute;
    filter: blur(100px);
    &:nth-of-type(4) {
      animation: tier 24s 0s infinite;
    }
    &:nth-of-type(3) {
      animation: tier 24s 6s infinite;
    }
    &:nth-of-type(2) {
      animation: tier 24s 12s infinite;
    }
    &:nth-of-type(1) {
      animation: tier 24s 18s infinite;
    }
  }
  @keyframes tier {
    0% {
      z-index: 1;
      filter: blur(100px);
    }
    4% {
      z-index: 1;
      filter: blur(0);
    }
    21% {
      z-index: 1;
      filter: blur(0);
    }
    25%,
    100% {
      z-index: 0;
      filter: blur(100px);
    }
  }
}
</style>
