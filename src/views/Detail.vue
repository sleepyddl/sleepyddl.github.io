<template>
  <div class="detail">
    <HeaderImageSlot>
      <img v-if="detail.menu == 'code'" src="../assets/2.png" />
      <img v-else-if="detail.menu == 'life'" src="../assets/3.png" />
      <template v-slot:slogan>
        <p>{{ detail.title }}</p>
        <!-- <p>{{ detail.des }}</p> -->
      </template>
    </HeaderImageSlot>
    <div class="content">
      <!-- <div class="left"></div> -->
      <div class="right">
        <MdShow :md="detail.content" />
      </div>
    </div>
  </div>
</template>

 
<script>
import HeaderImageSlot from "@/components/HeaderImageSlot.vue";
import { getarticlesdetail, increaseLookTimes } from "@/request/api";

import MdShow from "@/components/MdShow.vue";

export default {
  name: "Detail",
  props: ["id"],
  data() {
    return {
      detail: {
        title: "",
        id: "",
        des: "",
        posttime: "",
        content: "",
        menu: "",
      },
    };
  },

  components: {
    HeaderImageSlot,
    MdShow,
  },
  async created() {
    this.detail = await getarticlesdetail(this.id);

    setTimeout(() => {
      increaseLookTimes(this.id).then((res) => console.log(res));
    }, 30000);
  },
};
</script>
