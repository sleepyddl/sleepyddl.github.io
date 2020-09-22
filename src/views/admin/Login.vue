<template>
  <div class="login">
    <img src="../../assets/admin.jpg" alt />
    <p>登录</p>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="password" placeholder="Password" v-model="password" />
    <div @click="login">Login</div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods:{
    login(){
      
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  p {
    margin: 10px;
    font-size: 24px;
    font-family: "Courier New", Courier, monospace;
    font-weight: 700;
    color: aliceblue;
  }
  input {
    outline: none;
    border: solid 1px #aaa;
    margin-top: 10px;
    color: #fff;
    background: rgba(70, 62, 64, 0.1);
  }
  div {
    margin: 20px 0;
    background: #d0d0d0;
    color: #48b989;
    font-weight: 700;
    transition: 0.3s;
    cursor: pointer;
  }
  p,
  input,
  div {
    text-align: center;
    height: 35px;
    line-height: 35px;
    width: 250px;
    border-radius: 4px;
  }
  img {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(5px);
  }
}
</style>