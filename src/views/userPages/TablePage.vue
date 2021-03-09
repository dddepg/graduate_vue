<template>
  <div class="table_page_back">
    <el-container>
      <el-header class="tableheader"
        height="85px"
        ><el-steps :active="nowAction" align-center
        process-status="process"
        finish-status="success">
          <el-step
            title="选择模板"
            description="请选择使用的申请表模板"
          ></el-step>
          <el-step
            title="填写基本信息"
            description="填写申请表基本信息"
          ></el-step>
          <el-step
            title="填写人员信息"
            description="填写主要参与人员信息"
          ></el-step>
          <el-step
            title="申请表文章部分"
            description="填写申请表中大段文字"
          ></el-step> </el-steps
      ></el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "tablePage",
  setup() {
    const nowAction = ref(0);
    return { nowAction };
  },
});
</script>
<style lang="stylus" scoped>
.table_page_back
  height 100%
  background-color white

.tableheader
  height 100%
  background-color gray
.el-steps
  margin-top 5px
</style>