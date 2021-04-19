<template>
  <el-menu
    :uniqueOpened="true"
    default-active="/User/first"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-menu-item index="/User/first">
      <template #title>
        <i class="el-icon-location"></i>
        <span>首页</span>
      </template>
    </el-menu-item>
    <el-submenu index="2">
      <template #title>
        <i class="el-icon-location"></i>
        <span>本校科研</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/User/tread">科研动态</el-menu-item>
        <el-menu-item index="/User/paper">全部论文</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3" v-if="power!=3">
      <template #title>
        <i class="el-icon-menu"></i>
        <span>我的主页</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/User/myPaper">论文管理</el-menu-item>
        <el-menu-item index="/User/tablePage">申请表管理</el-menu-item>
        <el-menu-item index="/User/usermanage">用户管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4" v-if="power>1" >
      <template #title>
        <i class="iconfont icon-yonghu"></i>
        <span>  管理员界面</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/User/Manage">全部用户管理</el-menu-item>
        <el-menu-item index="/User/ManageAllPaper">全部论文管理</el-menu-item>
        <el-menu-item index="/User/ManageALLNews">新闻管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5" v-if="power==3" >
      <template #title>
        <i class="iconfont icon-yonghu"></i>
        <span>  超级管理员界面</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/User/SuperManage">用户权限管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <!-- <el-menu-item index="/User/test" >
      <template #title>
        <i class="el-icon-location"></i>
        <span>测试</span>
      </template>
    </el-menu-item> -->
  </el-menu>
</template>

<script>
import { defineComponent } from "vue";
import {useStore} from "vuex"
export default defineComponent({
  name: "sidePart",
  setup(){
    const store = useStore()
    const power =parseInt(store.state.userpower)
    return {power}
  }
});
</script>

<style lang="stylus" scoped>
.el-menu
  margin-top 20px
  border-right solid 1px rgb(74,82,89)
</style>