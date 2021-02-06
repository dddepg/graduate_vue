<template>
  <div class="tread_back_area">
    <div>
      <h1>最新科研动态</h1>
    </div>
    <el-divider></el-divider>
      <Suspense>
        <template #default>
          <get-all-tread />
        </template>
        <template #fallback>
          <el-skeleton :rows="10" animated />
        </template>
      </Suspense>
  </div>
</template>

<script>
import getAllTread from "@/components/UserPage/ResearchTreadPage/getAllTread.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "researchTreadPage",
  components: {
    getAllTread,
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