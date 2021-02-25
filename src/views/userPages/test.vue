<template>
  <div class="tread_back_area">
    <el-tabs type="border-card" class="tread_back">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <!-- <Suspense>
      <template #default> -->
    <!-- <get-test /> -->
    <!-- </template>
      <template #fallback>
        <div>正在拼了命的加载…</div>
      </template>
    </Suspense> -->
  </div>
</template>
<script lang="ts">
// import getTest from "@/components/UserPage/Test/getTest.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {  },
  name: "test",
});
</script>
<style lang="stylus" scoped>
.tread_back_area
  background-color rgb(255, 255, 255)
  margin 0 30px
  height 100%
  display flex
  justify-content center
.tread_back
  border box-shadow
  height 90%
  width 95%
  margin-top 20px
  overflow-y auto
</style>
