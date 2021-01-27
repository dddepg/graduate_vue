<template>
  <el-container>
    <el-aside>Aside</el-aside>
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
    background-color #D3DCE6
    color #333
    text-align center
    line-height 200px


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

</style>
