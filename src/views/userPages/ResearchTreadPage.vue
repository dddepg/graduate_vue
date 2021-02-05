<template>
  <div class="tread_back_area">
    <div class="infinite-list-wrapper" style="overflow: visible">
      <Suspense>
        <template #default>
          <get-all-tread />
        </template>
        <template #fallback>
          <el-skeleton :rows="10" animated />
        </template>
      </Suspense>
    </div>
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
  margin-left 30px
  margin-right 30px
  height 100%
  overflow-y auto
</style>