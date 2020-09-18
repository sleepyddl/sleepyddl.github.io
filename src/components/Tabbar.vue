<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="首页" name="first">首页</el-tab-pane>
    <el-tab-pane label="代码人生" name="second">代码人生</el-tab-pane>
    <el-tab-pane label="碎碎念" name="third">碎碎念</el-tab-pane>
    <el-tab-pane label="关于我" name="fourth">关于我</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>