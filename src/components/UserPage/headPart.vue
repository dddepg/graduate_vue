<template>
  <el-row>
    <el-col :xs="12" :sm="12" class="head_button_back hidden-md-and-up">
      <el-button class="headbutton" @click="openDrawer">
        <i class="iconfont icon-liebiao buttonicon"></i
      ></el-button>
    </el-col>
    <el-col :xs="12" :sm="12" :md="24" :lg="24" :xl="24">
      <div class="head_back">欢迎 {{ name }}</div>
    </el-col>
  </el-row>

  <el-drawer
    title="导航栏"
    v-model="drawer"
    :with-header="false"
    :direction="direction"
    destroy-on-close
    size="60%"
  >
    <div class="logodiv"></div>
    <div class="drawe_back">
      <side-part />
    </div>
  </el-drawer>
</template>

<script>
import { defineComponent, ref } from "vue";
import "element-plus/lib/theme-chalk/display.css";
import sidePart from "./sidePart.vue";
import {useStore}from "vuex"
export default defineComponent({
  name: "headPart",
  components: {
    sidePart,
  },
  setup() {
    const store =useStore()
    const name = ref(store.state.userTruename);
    const drawer = ref(false);
    const direction = ref("ltr");
    const openDrawer = () => {
      drawer.value = true;
    };
    return { name, drawer, direction, openDrawer};
  },
});
</script>

<style lang="stylus" scoped>
.el-row
  height 100%

.head_back
  margin auto
  height 100%
  padding-right 5%
  display flex
  justify-content flex-end
  align-items center
  font-size 20px
  color white
  text-align center

.headbutton
  background rgb(43, 47, 58)
  border 1px solid #DCDFE6
  padding 5px 8px
.head_button_back
  display flex
  justify-content flex-start
  align-items center
.buttonicon
    font-size 30px
    width 80%
.drawe_back
    background-color #545c64
    height 100%
.logodiv
  height 40px
  margin-top 0
  background-image url('../../assets/logo.png')
  background-size cover
</style>
