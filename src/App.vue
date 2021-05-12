<template>
  <router-view />
</template>

<script>
// 整个应用的初始加载页面，进入后直接加载login界面（Login.vue）
const app = {
  name: "App",
};
export default app;
// 基本规则：
// 返回值：0 请求成功，继续运行
// 返回值：1 请求失败，弹出消息提示
// 返回值：2 特殊状况，弹出消息提示
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 0;
}
</style>
<style lang="stylus">
body, html
  height 100%
  margin 0
</style>
