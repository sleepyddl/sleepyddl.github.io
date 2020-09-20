<template>
  <div class="info block">
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
</template>

<script>
export default {
  name: "Info",
};
</script>

<style lang="less" scoped>
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
    margin-bottom: 10px;
    color: #ccc;
  }
  .links {
    text-align: left;
    a {
      font-size: 0;
    }
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
</style>