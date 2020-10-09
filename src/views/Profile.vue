<template>
  <div class="profile">
    <HeaderImageSlot>
      <img src="../assets/4.png" />
      <template v-slot:slogan>
        <p>About me</p>
        <p>该写一些什么呢</p>
      </template>
    </HeaderImageSlot>

    <MainConent show="profile" :md="md" />
    <div class="content">
     
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import HeaderImageSlot from "@/components/HeaderImageSlot.vue";
import MainConent from "@/components/combComponents/MainConent.vue";

import Info from "@/components/Info.vue";

export default {
  name: "Profile",
  components: {
    HeaderImageSlot,
    Info,
    MainConent,
  },
  data() {
    return {
      md: `## 关于我

介绍自己是很难的一件事，因为每个人总想把自己最好的一面展现给大家。

说来惭愧，在大一的时候，python课的肖老师便教我们要学会**写博客**，奈何本性懒，这件事也就断断断续断断。

年初的时候，我发现了[**掘金**](https://juejin.im/)这个社区，感觉文章排版，交互体验都很棒，于是又开始了我‘断断断续断断’中的续。希望可以坚持一段时间。

## 关于这个博客
在接触前端开发一些日子后，我感觉我需要做点东西的时候，这个小系统就出现了。在设计之初，也看了许许多多个人博客，都写的非常漂亮。我本身还是喜欢那种简洁风的吧，于是就参考[Gracker](https://www.androidperformance.com/)和[Gityuan](http://gityuan.com/)二者使用的主题，凭借自己三脚猫的功夫，拼凑这个版面。

目前只有简简单单的小功能，希望随着日后的学习，一步步将这个小博客做优化。
## 联系我
左侧有我的联系方式，你可以通过它们联系到我。

`,
    };
  },
};
</script>

<style scoped>
</style>