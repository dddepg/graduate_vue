<template>
  <div class="friendly-link">
    <el-row class="rowtitle">
      <el-col :span="24">
        <div>
          <h2>友情链接</h2>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around" class="rowlink">
      <el-col :span="6">
        <el-link href="http://www.suibe.edu.cn/" target="_blank"><span class="links">学校主页</span></el-link>
      </el-col>
      <el-col :span="6">
        <el-link href="http://lib.suibe.edu.cn/" target="_blank"><span class="links">图书馆</span></el-link>
      </el-col>
      <el-col :span="6">
        <el-link href="http://shift.yiban.cn/" target="_blank"><span class="links">易班</span></el-link>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around" class="rowlink">
      <el-col :span="6">
        <el-link href="http://www.suibe.edu.cn/yx/" target="_blank"><span class="links">迎新网</span></el-link>
      </el-col>
      <el-col :span="6">
        <el-link href="https://my.suibe.edu.cn/index.portal" target="_blank"><span class="links">一站式服务平台</span></el-link>
      </el-col>
      <el-col :span="6">
        <el-link href="http://jwc.suibe.edu.cn/" target="_blank"><span class="links">教务处</span></el-link>
      </el-col>
    </el-row>
   
  </div>
</template>

<script>
// 友情链接组件，仅用于展示一些页面底部的友情链接。
export default {};
</script>

<style lang="stylus" scoped>
.friendly-link
  margin-top 20px
  background-color rgb(255,255,255)
  height 30%
.h6
  margin-top 0
  margin-bottom 0
  padding auto
  height 50px
.rowtitle
  height 40%
.rowlink
  height 20%
.links
  font-weight bold
  font-size 14px
</style>
