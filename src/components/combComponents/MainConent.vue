<template>
  <div class="content">
    <div class="left">
      <Info />
      <Search />
      <Tags :tags="tags"></Tags>
      <Hotarticles :hotarticles="hotarticles"></Hotarticles>
    </div>

    <div class="right">
      <Articles :articles="articles" />
    </div>
  </div>
</template>

<script>
import Info from "../Info.vue";
import Search from "../Search.vue";
import Tags from "../Tags.vue";
import Hotarticles from "../Hotarticles.vue";
import Articles from "../Articles.vue";

import { getarticleslist } from "@/request/api";

export default {
  name: "MainConent",
  components: {
    Info,
    Search,
    Tags,
    Hotarticles,
    Articles,
  },
  created() {
    getarticleslist().then((res) => {
      console.log(res);
      this.articles=res
    });
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
            "字节跳动为什么选用Flutter：并非跨为什么选用Flutter：并非跨为什么选用Flutter：并非跨为什么选用Flutter：并非跨为什么选用Flutter：并非跨为什么选用Flutter：并非跨平台终极之选，但它可能是不一样的未来",
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
};
</script>

<style>
</style>