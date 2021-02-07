<template>
  <div class="tread_back_area">
    <div>
      <h1>全部论文</h1>
    </div>
    <el-divider></el-divider>
      <Suspense>
        <template #default>
          <get-all-paper/>
        </template>
        <template #fallback>
          <el-skeleton :rows="10" animated />
        </template>
      </Suspense>
  </div>
</template>

<script>
import GetAllPaper from "@/components/UserPage/AllPaperPage/getAllPaper.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "allPaperPage",
  components: {
    GetAllPaper,
  },

 
});
</script>

<style lang="stylus" scoped>
.tread_back_area
  background-color rgb(255, 255, 255)
  margin 0 30px 
  height 100%
  overflow-y auto
</style>