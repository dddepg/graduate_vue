<template>
  <el-container>
    <el-aside>
      <div class="logoback">
        <div class="logodiv"></div>
      </div>
      <side-part />
    </el-aside>
    <el-container>
      <el-header>
        <head-part />
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
import router from "@/router";
import sidePart from "../components/UserPage/sidePart";
import HeadPart from "@/components/UserPage/headPart.vue";

export default defineComponent({
  name: "User",
  components: {
    sidePart,
    HeadPart,
  },
  setup() {
    const store = useStore();
    if (!store.state.islogin) router.push("/");
  },
});
</script>

<style lang="stylus" scoped>
max_heigh = 100%

.el-container
  height max_heigh

.el-aside
  background-color rgb(74, 82, 89)
  color #333
  text-align center

.el-main
  background-color rgb(75, 72, 72)
  text-align center

.el-header
  background-color rgb(43, 47, 58)
  color #333
  text-align center
  height 50px

.logoback
  height 60px
  background-color white

.logodiv
  height 60px
  margin 0
  background-image url('../assets/logo.png')
  background-size cover
</style>