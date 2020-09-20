<template>
  <div class="code">
    <HeaderImageSlot>
      <img src="../assets/2.png" />
      <template v-slot:slogan>
        <p>Code</p>
        <p>好好地学编程</p>
      </template>
    </HeaderImageSlot>
    <MainConent/>
  </div>
</template>

<script>
import HeaderImageSlot from "@/components/HeaderImageSlot.vue";
import MainConent from "@/components/combComponents/MainConent.vue";

export default {
  name: "Code",
  components: {
    HeaderImageSlot,
    MainConent
  },
};
</script>