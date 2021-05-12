<template>
  <div class="tread_back_area">
    <el-tabs v-model="active" type="border-card" class="paper_tabs">
      <el-tab-pane label="科研动态" name="active">
        <Suspense>
          <template #default>
            <get-all-tread />
          </template>
          <template #fallback>
            <el-skeleton :rows="10" animated />
          </template>
        </Suspense>
      </el-tab-pane>
      <el-tab-pane label="最新研究" name="tread">
        <Suspense>
          <template #default>
            <get-all-search/>
          </template>
          <template #fallback>
            <el-skeleton :rows="10" animated />
          </template>
        </Suspense>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import getAllTread from "@/components/UserPage/ResearchTreadPage/getAllTread.vue";
import getAllSearch from "@/components/UserPage/ResearchTreadPage/getAllSearch.vue";
import { defineComponent,ref } from "vue";

export default defineComponent({
  // 本校科研——科研动态界面
  name: "researchTreadPage",
  components: {
    getAllTread,
    getAllSearch
  },
  setup(){
    const active = ref("active");
    return { active };
  }
});
</script>

<style lang="stylus" scoped>
.tread_back_area
  background-color rgb(255, 255, 255)
  margin 0 30px
  height 100%
  overflow-y auto
  display flex
  justify-content center

.testdiv
  height 100%
  background-color black
  width 100%
.paper_tabs
  border box-shadow
  height 90%
  width 95%
  margin-top 20px
  overflow-y auto
</style>
