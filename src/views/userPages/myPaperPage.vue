<template>
  <div class="my_paper_page_back">
    <div>
      <h1>我的论文</h1>
    </div>
    <el-divider></el-divider>
    <Suspense>
      <template #default>
          <div></div>
      </template>
      <template #fallback>
        <el-skeleton :rows="10" animated />
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "myPaperPage",
});
</script>
<style lang="stylus" scoped>
.my_paper_page_back
  background-color rgb(255, 255, 255)
  margin 0 30px
  height 100%
  overflow-y auto
</style>