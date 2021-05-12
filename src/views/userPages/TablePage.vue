<template>
  <div class="table_page_back">
    <el-container>
      <el-header class="tableheader" height="85px">
        <el-steps
          :active="store.state.tableNowAction"
          align-center
          process-status="process"
          finish-status="success"
        >
          <el-step
            title="选择模板"
            description="请选择使用的申请表模板"
          ></el-step>
          <el-step
            title="填写基本信息"
            description="填写申请表基本信息"
          ></el-step>
          <el-step title="填写数据表" description="填写数据表信息"></el-step>
          <el-step
            title="申请表文章部分"
            description="填写申请表中大段文字"
          ></el-step>
        </el-steps>
      </el-header>
      <el-main
        ><div class="routerback"><router-view /></div
      ></el-main>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
// 新建申请表页面上方进度条组件
export default defineComponent({
  name: "tablePage",
  setup() {
    const store = useStore();
    return { store };
  },
});
</script>
<style lang="stylus" scoped>
.table_page_back
  height 100%
  background-color white
  overflow-y auto

.tableheader
  height 100%
  background-color gray

.el-steps
  margin-top 5px

.routerback
  height 100%
  overflow-y auto
</style>