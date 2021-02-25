<template>
  <div class="tread_back_area">
    <el-tabs v-model="active" type="border-card" class="paper_tabs">
      <el-tab-pane label="全部论文" name="allpaper">
        <Suspense>
          <template #default>
            <get-all-paper />
          </template>
          <template #fallback>
            <el-skeleton :rows="10" animated />
          </template>
        </Suspense>
      </el-tab-pane>
      <el-tab-pane label="基础科学" name="Basic">基础科学</el-tab-pane>
      <el-tab-pane label="工程科技" name="Engineering">工程科技</el-tab-pane>
      <el-tab-pane label="农业科技" name="Agricultural">农业科技</el-tab-pane>
      <el-tab-pane label="医药卫生科技" name="MedicalAndHealth"
        >医药卫生科技</el-tab-pane
      >
      <el-tab-pane label="哲学与人文科学" name="Philosophy"
        >哲学与人文科学</el-tab-pane
      >
      <el-tab-pane label="社会科学" name="social">社会科学</el-tab-pane>
      <el-tab-pane label="信息科技" name="Information">信息科技</el-tab-pane>
      <el-tab-pane label="经济与管理科学" name="Economics"
        >经济与管理科学</el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script>
import GetAllPaper from "@/components/UserPage/AllPaperPage/getAllPaper.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "allPaperPage",
  components: {
    GetAllPaper,
  },
  setup() {
    const active = ref("allpaper");
    return { active };
  },
});
</script>

<style lang="stylus" scoped>
.tread_back_area
  background-color rgb(255, 255, 255)
  margin 0 30px
  height 100%
  display flex
  justify-content center
.paper_tabs
  border box-shadow
  height 90%
  width 95%
  margin-top 20px
  overflow-y auto
</style>
