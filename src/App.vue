<template>
  <div id="app">
    <Menu class="menu" />
    <router-view />
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
export default {
  name: "App",
  components: { Menu },
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
}

.content {
  display: flex;
  margin: 0 auto;
  padding: 50px 20px;
  width: 1200px;
  min-height: 800px;
  box-sizing: border-box;
  .left {
    width: 220px;
    padding: 5px;
    box-sizing: border-box;
  }
  .right {
    flex: 1;
    padding: 5px 25px;
    box-sizing: border-box;
  }
}
</style>
