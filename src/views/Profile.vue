<template>
  <div class="profile">
    <HeaderImageSlot>
    <img src="../assets/4.png">
    </HeaderImageSlot>

    <h1>This is an profile page</h1>
  </div>
</template>

<script>

import HeaderImageSlot from "@/components/HeaderImageSlot.vue";

export default {
  name: "Profile",
  components: {
    HeaderImageSlot,
  },
};
</script>
<style lang="less" scoped>

</style>