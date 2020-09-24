<template>
  <div class="admin">
    <HeaderImageSlot>
      <template v-slot:slogan>
        <p>Admin</p>
        <p>管理后台</p>
      </template>
    </HeaderImageSlot>
    <div class="content">
      <div class="left">
      </div>

      <div class="right">
        <Articles :articles="articles" :isAdmin="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderImageSlot from "@/components/HeaderImageSlot.vue";

import Articles from "@/components/Articles.vue";

export default {
  name: "Admin",
  components: {
    HeaderImageSlot,
    Articles
  },
  data(){
    return {
      articles:[]
    }
    
  }
};
</script>

<style>
</style>