<template>
  <el-container>
    <el-aside>
      <div class="logoback">
        <div class="logodiv"></div>
      </div>
    <el-menu
      :uniqueOpened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
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
          <el-menu-item index="1-1">科研动态</el-menu-item>
          <el-menu-item index="1-2">全部论文</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template #title>
          <i class="el-icon-menu"></i>
          <span>我的主页</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">论文管理</el-menu-item>
          <el-menu-item index="3-2">申请表管理</el-menu-item>
          <el-menu-item index="3-3">用户管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </el-aside>
    <el-container>
      <el-header >Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent} from "vue"
import {useStore} from "vuex"
import router from '@/router'

export default defineComponent({
  name:"User",
  setup(){
    const store =useStore()
    if (!store.state.islogin) router.push('/')
  },
})
</script>

<style lang="stylus" scoped>
  max_heigh=100%
  .el-container
    height max_heigh
  .el-aside  
    background-color #808080
    color #333
    text-align center
  .el-main 
    background-color #E9EEF3
    color #333
    text-align center
    line-height 160px 
  .el-header
    background-color #B3C0D1
    color #333
    text-align center
    line-height 60px
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
