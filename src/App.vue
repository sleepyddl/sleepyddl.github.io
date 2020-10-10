<template>
  <div id="app">
    <Menu class="menu" />
    <router-view />
    <p class="Admin" @click="AdminClick">Admin</p>
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
export default {
  name: "App",
  components: { Menu },
  methods: {
    AdminClick() {
      this.$router.push("/admin").catch((err) => err);
    },
  },
};
</script>

<style>
@media screen and (max-width: 1200px) {
  .content {
    width: 100% !important;
  }
}
@media screen and (max-width: 900px) {
  .left {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  .content {
    padding: 10px !important;
  }
  #HeaderImageSlot {
    height: 250px !important;
  }
}
</style>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  // 去掉点击出现的蓝底
}

.content {
  display: flex;
  margin: 0 auto 20px;
  padding: 50px 20px;
  width: 1200px;
  box-sizing: border-box;
  .left {
    width: 220px;
    padding: 5px;
    box-sizing: border-box;
  }
  .right {
    width: 0;
    flex: 1;
    padding: 5px 25px;
    box-sizing: border-box;
  }
}

.left,
.leftInPhone {
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
}
</style>

<style lang="less" scoped>
.Admin {
  text-align: center;
  color: #eee;
  cursor: pointer;
  &:hover {
    color: #999;
  }
}
</style>
